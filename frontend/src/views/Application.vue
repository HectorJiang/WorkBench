<template>
  <div class="row">
    <div class="archive col-md-12 col-lg-12 col-sm-12 content-area">
      <main>
        <header class="entry-header border-bottom">
          <h2 class="entry-title p-name">
            <a href="#">应用程序</a>
          </h2>
        </header>
        <article ref="prev">
          <div class="row">
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">一款智能的定位小程序</h5>
                  <p
                    class="card-text"
                  >With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">一款智能的定位小程序</h5>
                  <p
                    class="card-text"
                  >With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
    <div class="col-md-12 col-lg-4 col-sm-12 sidebar">
      <!-- 侧边导航 -->
    </div>
  </div>
</template>

<script>
import VditorPreview from "vditor/dist/method.min.js";

export default {
  name: "Application",
  data() {
    return {
      id: this.$route.params.id,
      article: ""
    };
  }
  // methods: {
  //     //请求数据
  //     getData() {
  //         this.$http.get("/articles/289792").then(res => {
  //             console.log(res)
  //             if (res.data.code == "200") {
  //                 this.article = res.data.result;
  //                 console.log(this.article)
  //             }
  //         }, error => {

  //         })
  //     }
  // },
  // created() {
  //     this.getData();
  // },
  // //生命周期函数：挂载完成
  // updated() {
  //     VditorPreview.preview(this.$refs.prev,
  //         this.article.content, {
  //             hljs: {
  //                 style: 'native',
  //                 lineNumber: true
  //             },
  //             speech: {
  //                 enable: false
  //             },
  //             anchor: true,
  //         });
  // }
};
</script>
