<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>-->
    <header class="sticky-top">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <!-- <a class="navbar-brand" href="#">Hector's Blog</a> -->
          <a class="navbar-brand" href="#">WorkBench</a>
          <button
            class="navbar-toggler border-0 px-0 collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="导航菜单"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <router-link class="nav-item nav-link" to="/">首页</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-item nav-link" to="/article"
                  >博客</router-link
                >
              </li>
              <!-- <li class="nav-item">
                <router-link class="nav-item nav-link" to="/resource">工具箱</router-link>
              </li> -->
              <!-- <li class="nav-item">
                <router-link class="nav-item nav-link" to="/personal"
                  >个人空间</router-link
                >
              </li> -->
              <li class="nav-item">
                <router-link class="nav-item nav-link" to="/application"
                  >应用程序</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-item nav-link" to="/share"
                  >文件共享</router-link
                >
              </li>
              <!-- <li class="nav-item">
                             <router-link class="nav-item nav-link" to="/message">留言板</router-link>
              </li>-->
            </ul>

            <form
              class="form-inline search-form"
              action
              method="post"
              role="search"
            >
              <div class="input-group">
                <input
                  data-url
                  class="border-right-0 form-control form-control-md search-input"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                  required="required"
                  name="s"
                />
                <div class="input-group-append">
                  <button
                    class="btn my-sm-0 search-btn-light"
                    type="submit"
                    aria-label="搜索"
                    title
                    data-toggle="tooltip"
                    data-placement="bottom"
                    data-original-title="搜索"
                  >
                    搜索
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </header>

    <div class="container home main-content">
      <router-view />
    </div>

    <footer>
      <div class="container">
        <nav>
          <a href="https://github.com/hectorjiang">©2020 Hector Jiang</a><br />
          <a href="https://beian.miit.gov.cn/" target="_blank"
            >皖ICP备19001851号-2</a
          ><br />
          <a
            href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral"
            >本网站由
            <img
              style="vertical-align: middle; height: 30px; margin-top: -4px"
              src="./assets/img/youpai.png"
            />
            提供CDN加速/云存储服务
          </a>
        </nav>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style>
header .navbar .search-btn-light {
  background: #f8f8f8;
  border: 1px solid #d3d3d3;
}

footer {
  position: relative;
  bottom: 0px;
}
</style>
