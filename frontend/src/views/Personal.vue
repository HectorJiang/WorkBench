<template>
  <div class="row">
    <div class="archive col-md-12 col-lg-8 col-sm-12 content-area">
      <main>
        <header class="entry-header border-bottom">
          <h2 class="entry-title p-name">
            <a href="#">个人空间</a>
          </h2>
        </header>
        <article ref="prev">
          <pdf src="../assets/file/test.pdf"></pdf>
        </article>
      </main>
    </div>
    <div class="col-md-12 col-lg-4 col-sm-12 sidebar">
      <section class>
        <h4>个人空间</h4>
        <ul class="list-group list-group-flush" aria-label="文章归档">
          <!-- <li class="d-flex justify-content-between align-items-center border-bottom">
                    <router-link :to="{path:'/article/'+name}" data-toggle="tooltip" data-placement="top" class="text-secondary" title="" data-original-title="4篇文章">
                        
                    </router-link>
                    <span class="badge badge-secondary badge-pill">fadfa</span>
          </li>-->
          <li class="d-flex justify-content-between align-items-center border-bottom">
            <!-- <router-link :to="{path:'/'}" data-toggle="tooltip" data-placement="top" class="text-secondary" title="" data-original-title="4篇文章"> -->
            个人简历
            <!-- </router-link> -->
          </li>
          <li class="d-flex justify-content-between align-items-center border-bottom">
            <!-- <router-link :to="{path:'/'}" data-toggle="tooltip" data-placement="top" class="text-secondary" title="" data-original-title="4篇文章"> -->
            成长之路
            <!-- </router-link> -->
          </li>
          <li class="d-flex justify-content-between align-items-center border-bottom">
            <!-- <router-link :to="{path:'/'}" data-toggle="tooltip" data-placement="top" class="text-secondary" title="" data-original-title="4篇文章"> -->
            项目一:基于Hadoop的大学生消费系统
            <!-- </router-link> -->
          </li>
          <li
            class="d-flex justify-content-between align-items-center border-bottom"
          >项目二:基于Hadoop的大学生消费系统</li>
          <li
            class="d-flex justify-content-between align-items-center border-bottom"
          >项目三:基于Hadoop的大学生消费系统</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import VditorPreview from "vditor/dist/method.min.js";
import pdf from 'vue-pdf'
export default {
  name: "Personal",
  components:{
      pdf
  },
  data() {
    return {
      id: this.$route.params.id,
      article: "",
      archives: [],
      pdfUrl:"../assets/file/resume.pdf",
    };
  },
  methods: {
    //请求数据
    getData() {
      this.$http.get("/archive").then(
        res => {
          console.log(res);
          if (res.data.code == "200") {
            this.archives = res.data.result;
          }
        },
        error => {}
      );
    }
  },
  //生命周期函数：挂载完成
  mounted() {
    this.getData();
  },
  watch: {
    $route(to, from) {
      this.$router.go(0);
    }
  }
};
</script>
