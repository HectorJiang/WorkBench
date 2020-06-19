<template>
  <div id="app">
    <!-- 左侧导航 -->
    <el-container style="height: 500px;">
      <el-header style="text-align: right; font-size: 12px">
        <div class="app-logo">
          <span class="app-logo-icon"></span>
          <span class="app-logo-text">HECTOR</span>
        </div>
      </el-header>

      <el-container>
        <el-aside width="200px">
          <el-menu default-active="2" class="el-menu-vertical-demo" router>
            <el-menu-item index="/home">
              <i class="el-icon-s-home"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-notebook-2"></i>
                <span>博客管理</span>
              </template>
              <el-menu-item index="/article_list">博客列表</el-menu-item>
              <el-menu-item index="/article_add">博客撰写</el-menu-item>
              <el-menu-item index="/article_category">博客分类</el-menu-item>
            </el-submenu>

            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-video-camera-solid"></i>
                <span>个人空间</span>
              </template>
              <el-menu-item index="/personal">空间管理</el-menu-item>
              <!-- <el-menu-item index="/history_project">历史项目</el-menu-item>
              <el-menu-item index="/life">记录生活</el-menu-item> -->
            </el-submenu>         

            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-video-camera-solid"></i>
                <span>应用程序</span>
              </template>
              <el-menu-item index="/application">程序列表</el-menu-item>
            </el-submenu>               
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-s-cooperation"></i>
                <span>文件共享</span>
              </template>
              <el-menu-item index="/share">文件列表</el-menu-item>
            </el-submenu>

            <el-menu-item index="/setting">
              <i class="el-icon-s-tools"></i>
              <span slot="title">系统设置</span>
            </el-menu-item>
            <el-menu-item index="/message">
              <i class="el-icon-chat-dot-square"></i>
              <span slot="title">留言板</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view v-if="isRouterAlive" />
          </el-main>
          <el-footer style="margin:0 auto;font-size:20px;">
            <div class="app-footer">
              Copyright © 2020 hector
              <a href="https://github.com/heyui/heyui-admin" target="_blank">
              </a>
              <!-- <a href="https://www.heyui.top" target="_blank"></a> -->
            </div>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "app",
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      isRouterAlive: true
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    }
  }
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
html,
body {
  background: #f3f6f8;
  margin: 0px;
  padding: 0px;
}

.el-container .el-header {
  height: 60px;
  line-height: 60px;
  background: #20a0ff;
  color: #fff;
  padding: 0 0;
}
.el-header .app-logo {
  height: 60px;
  font-size: 22px;
  border-color: hsla(62, 77%, 76%, 0.3);
  width: 200px;
  text-align: center;
  color: #fff;
  border-right-width: 1px;
  border-right-style: solid;
}

.el-aside {
  color: #333;
  background-color: #fff;
}

.el-menu {
  border-radius: 2px;
  list-style: none;
  position: relative;
  margin: 0;
  padding-left: 0;
}
.el-footer{
}
</style>
