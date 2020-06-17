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
                <a class="navbar-brand" href="#">爱美食的Geek</a>
                <button class="navbar-toggler border-0 px-0 collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="导航菜单">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <router-link class="nav-item nav-link" to="/">首页</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-item nav-link" to="/article">博客</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-item nav-link" to="/resource">工具箱</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-item nav-link" to="/space">个人空间</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-item nav-link" to="/message">留言板</router-link>
                        </li>
                    </ul>
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
                <span>©2020 Hector Will's Blog</span>
                <!-- <a href="https://www.misterma.com/sitemap.xml" target="_blank">sitemap</a> -->
            </nav>
            <!-- <span>Powered by <a href="http://www.typecho.org/" target="_blank">Typecho</a> Theme by <a href="https://www.misterma.com/archives/812/" target="_blank">MWordStar</a></span> -->
        </div>
    </footer>
</div>
</template>

<script>
export default {};
</script>

<style>
</style>
