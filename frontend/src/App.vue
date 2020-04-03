<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <el-container>
      <!-- 左侧导航 -->
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
              <i class="el-icon-s-cooperation"></i>
              <span>资源管理</span>
            </template>
            <el-menu-item index="/resource">资源列表</el-menu-item>
            <el-menu-item index="/resource_add">资源添加</el-menu-item>
            <el-menu-item index="/resource_category">资源分类</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-video-camera-solid"></i>
              <span>个人空间</span>
            </template>
            <el-menu-item index="/resume">个人简历</el-menu-item>
            <el-menu-item index="/history_project">历史项目</el-menu-item>
            <el-menu-item index="/life">记录生活</el-menu-item>
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
        <el-header style="margin:0 auto;">爱美食的Geek</el-header>
        <el-main>
          <router-view />
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>

  </div>
</template>

<style>
  body,
  html {
    margin: 0px;
    padding: 0px;
  }
</style>