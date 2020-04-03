<template>
    <main>
        <header class="entry-header border-bottom">
            <h2 class="entry-title p-name">
                <a href="#">{{article.title}}</a>
            </h2>
        </header>
        <article  ref="prev">
        </article>
    </main>
</template>

<script>
    //import Vditor from "vditor";
    import VditorPreview from "vditor/dist/method.min.js";

    export default {
        data() {
            return {
                id: this.$route.params.id,
                article: ""
            }
        },
        methods: {
            //请求数据
            getData() {
                this.$http.get("/blog/articles/" + this.$route.params.id).then(res => {
                    console.log(res)
                    if (res.data.code == "200") {
                        this.article = res.data.result;
                    }
                }, error => {

                })
            }
        },
        created(){
            this.getData();
        },
        //生命周期函数：挂载完成
        updated() {
            VditorPreview.preview(this.$refs.prev,
            this.article.content,{
                hljs: {
                  style: 'native',
                  lineNumber:true
                },
                speech: {
                  enable: false
                },
                anchor: true,
              });
        }
    }
</script>

<style>

</style>