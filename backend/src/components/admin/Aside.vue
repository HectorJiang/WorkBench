<template>
  <div class="container-aside">
    <div class="app-logo">
      <span class="app-logo-icon"></span>
      <span class="app-logo-text" style>{{ logo }}</span>
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      unique-opened
      router
    >
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
          <i class="el-icon-video-camera"></i>
          <span>个人空间</span>
        </template>
        <el-menu-item index="/personal">空间管理</el-menu-item>
        <!-- <el-menu-item index="/history_project">历史项目</el-menu-item>
            <el-menu-item index="/life">记录生活</el-menu-item>-->
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>应用程序</span>
        </template>
        <el-menu-item index="/application">程序列表</el-menu-item>
        <el-menu-item index="/server">远程服务器</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-document"></i>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      logo: "workbench",
    };
  },
  methods: {
    handleOpen(key, keyPath) {},
    handleClose(key, keyPath) {},
  },
};
</script>
<style scoped>
.app-logo {
  height: 60px;
  font-size: 22px;
  border-color: hsla(62, 77%, 76%, 0.3);
  width: 200px;
  text-align: center;
  width: auto;
  line-height: 60px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-aside {
  color: #333;
  background-color: #fff;
  height: 100%;
  /* 覆盖原本的宽度，整体的宽度 */
  width: auto !important;
}

.avatar {
  cursor: pointer;
  float: right;
  /* margin-right:20px; */
  /* height:60px;
    line-height: 60px; */
}

/* .avatar span{
  height:60px;
  line-height: 60px;
} */

/* .name{
  height:60px;
  line-height:60px;
} */
.el-menu {
  border-radius: 2px;
  list-style: none;
  position: relative;
  margin: 0;
  padding-left: 0;
}
</style>