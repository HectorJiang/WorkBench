<template>
  <!-- <div id="app"> -->
  <el-card class="box-card card">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="标题">
        <el-input
          v-model="formInline.article_title"
          placeholder="标题"
        ></el-input>
      </el-form-item>
      <el-form-item label=" 分类">
        <el-select v-model="formInline.category_id" placeholder="分类">
          <el-option
            v-for="(category, i) in categories"
            :key="i"
            :label="category.category_name"
            :value="category.category_id"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">发布</el-button>
      </el-form-item>
    </el-form>
    <div id="vditor" style="height: 480px; background-color: #f6f8fa"></div>
  </el-card>

  <!-- <button @click="getMarkdownText">获取markdown内容</button>
      <button @click="getHtmlText">获取html内容</button> -->
  <!-- </div> -->
</template>

<script>
import Vditor from "vditor";
export default {
  name: "ArticleAdd",
  data() {
    return {
      editor: null,
      categories: [""],
      formInline: {
        article_title: "",
        category_id: "",
        article_content: null,
      },
    };
  },
  methods: {
    //请求数据
    getData() {
      this.$http.get("/api/v1/admin/category").then(
        (res) => {
          console.log(res);
          if (res.data.status == "200") {
            this.categories = res.data.data;
          }
        },
        (error) => {}
      );
    },
    initEditor() {
      window.vditor = new Vditor("vditor", {
        debugger: false,
        typewriterMode: false,
        placeholder: "placeholder",
        counter: 100,
        height: 600,
        cache: {
          enable: false,
        },
        preview: {
          delay: 0,
          mode: "both",
          hljs: {
            enable: true,
            style: "native",
            lineNumber: true,
          },
          markdown: {
            toc: true,
          },
        },
      });
    },
    //提交数据
    onSubmit() {
      //this.formInline.content=this.editor.getHTML();
      this.formInline.article_content = this.editor.getValue();
      var obj = JSON.stringify(this.formInline);
      console.log(obj);
      this.$http.post("/api/v1/admin/article/add", obj).then(
        (res) => {
          console.log(res);
          if (res.data.status == "200") {
            this.$message({
              type: "success",
              message: res.data.message,
            });
            this.$router.push("/article_list");
          }
        },
        (error) => {}
      );
    },
    getMarkdownText() {
      this.editor = window?.vditor;
      console.log(this.editor.getValue());
    },
    getHtmlText() {
      this.editor = window?.vditor;
      this.content = this.editor.getHTML();
      console.log(this.editor.getHTML());
    },
  },
  mounted() {
    this.getData();
    this.initEditor();
    this.editor = window?.vditor;
    //this.getData();
  },
};
</script>
<style>
</style>