<template>
  <div class="row">
    <div class="archive col-md-12 col-lg-12 col-sm-12 content-area">
      <main>
        <header class="entry-header border-bottom">
          <h2 class="entry-title p-name">
            <a href="#">文件共享</a>
          </h2>
        </header>
        <article ref="prev">
          <div class="links">
            <div class="tip">注意：点击链接自动复制提取码</div>
            <div class="link">
              <span class="name">JDK8,11:</span>
              <a
                href="https://pan.baidu.com/s/1WCFXNMe-wrihCUH1jW4Bfg"
                target="_blank"
                v-clipboard="copyContent"
                >https://pan.baidu.com/s/1WCFXNMe-wrihCUH1jW4Bfg</a
              >
              <span class="password">提取码：wekw</span>
            </div>
            <div class="link">
              <span class="name">JDK8,11:</span>
              <a
                href="https://pan.baidu.com/s/1WCFXNMe-wrihCUH1jW4Bfg"
                target="_blank"
                >https://pan.baidu.com/s/1WCFXNMe-wrihCUH1jW4Bfg</a
              >
              <span class="password">提取码：wekw</span>
            </div>
            <div class="link">
              <span class="name">JDK8,11:</span>
              <a
                href="https://pan.baidu.com/s/1WCFXNMe-wrihCUH1jW4Bfg"
                target="_blank"
                >https://pan.baidu.com/s/1WCFXNMe-wrihCUH1jW4Bfg</a
              >
              <span class="password">提取码：wekw</span>
            </div>
            <!-- <div class="link">
                        <span class="name">SSR:</span>
                        <a href="https://wws.lanzous.com/b01nmrymf" target="_blank" v-clipboard="copyContent">https://wws.lanzous.com/b01nmrymf</a>
                        <span class="password">提取码：6b2n</span>
                    </div> -->
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
export default {
  name: "Share",
  data() {
    return {
      copyContent: "fa",
    };
  },
};
</script>

<style scoped>
.links {
  padding: 30px;
}

.links .link {
  margin: 20px 0;
}

.links .link .name,
a {
  margin-right: 20px;
}
</style>
