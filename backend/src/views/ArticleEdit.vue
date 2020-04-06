<template>
    <!-- <div id="app"> -->
    <div class="">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-breadcrumb separator="/" style="float: left;line-height:40px;margin-right:20px;">
                <el-breadcrumb-item :to="{ path: '/article_list' }">博客列表</el-breadcrumb-item>
                <el-breadcrumb-item>博客编辑</el-breadcrumb-item>
            </el-breadcrumb>
            <el-form-item label="标题">
                <el-input v-model="formInline.title" placeholder="标题""></el-input>
            </el-form-item>
            <el-form-item label=" 分类">
                    <el-select v-model="formInline.category" placeholder="分类">
                        <el-option v-for="(category,i) in categories" :key="i" :label="category.name"
                            :value="category.id">
                        </el-option>
                    </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">发布</el-button>
            </el-form-item>
        </el-form>
        <div id="vditor" style="height: 480px;background-color: #f6f8fa"></div>
    </div>

    <!-- <button @click="getMarkdownText">获取markdown内容</button>
        <button @click="getHtmlText">获取html内容</button> -->
    <!-- </div> -->
</template>

<script>
    import Vditor from "vditor";
    export default {
        name: "ArticleEdit",
        data() {
            return {
                blog_id: this.$route.params.blog_id,
                editor: null,
                article:"",
                categories: [""],
                formInline: {
                    title: '',
                    category: '',
                    content: null
                }
            };
        },
        methods: {
            //请求数据
            getData() {
                this.$http.get("/blog/articles/" + this.$route.params.id).then(res => {
                    console.log(res)
                    if (res.data.code == "200") {
                        this.article = res.data.result;
                        //设置编辑区内容
                        this.editor.setValue(res.data.result.content);      
                    }
                }, error => {

                })
            },
        initEditor() {
            window.vditor = new Vditor("vditor", {
                debugger: false,
                typewriterMode: false,
                placeholder: "placeholder",
                counter: 100,
                height: 500,
                cache: {
                    enable: false
                },
                preview: {
                    delay: 0,
                    mode: "both",
                    hljs: {
                        enable: true,
                        style: "dracula",
                        lineNumber: true
                    },
                    markdown: {
                        toc: true
                    }
                },

            });
        },
        //提交数据
        onSubmit() {
            //this.formInline.content=this.editor.getHTML();    
            this.formInline.content = this.editor.getValue();
            var obj = JSON.stringify(this.formInline);
            console.log(obj)
            this.$http.post("/blog/articles", obj).then(res => {
                console.log(res)
                if (res.data.code == "200") {

                }
            }, error => {

            })
        },
        getMarkdownText() {
            this.editor = window?.vditor;
            console.log(this.editor.getValue());
        },
        getHtmlText() {
            this.editor = window?.vditor;
            this.content = this.editor.getHTML();
            console.log(this.editor.getHTML());
        }
    },
    mounted() {
        this.initEditor();
        this.editor = window?.vditor;
        this.getData();
    },
    updated() {
        //this.getData();
    },
    };
</script>
<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>