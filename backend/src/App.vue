<template>
<div id="app" style="height:100%;">
    <!-- 左侧导航 -->
    <el-container style="height:100%;">
        <el-aside width="auto" style="height:100%;">
            <div class="app-logo">
                <span class="app-logo-icon"></span>
                <span class="app-logo-text" style>{{logo}}</span>
            </div>
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" unique-opened router>
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
        </el-aside>
        <el-container>
            <el-header class="clearfix">
                <el-button plain @click="collapseStatus" icon="el-icon-s-unfold" class="btn-collapse"></el-button>

                <el-dropdown class="avatar right">
                    <span class="el-dropdown-link">
                        <el-avatar shape="square" size="medium" src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"></el-avatar>
                        <!-- <span class="name">hector</span>                 -->
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item class="clearfix">
                            <i class="el-icon-user"></i>
                            个人信息
                        </el-dropdown-item>
                        <el-dropdown-item class="clearfix">
                            <i class="el-icon-upload2"></i>
                            退出登录
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-badge :value="12" class="item right">
                    <el-button size="small" icon="el-icon-message" class="btn-message"></el-button>
                </el-badge>
                <el-button plain @click="fullScreen" icon="el-icon-rank" class="btn-fullscreen right"></el-button>

            </el-header>
            <el-main>
                <router-view v-if="isRouterAlive" />
                <div class="app-footer">
                    Copyright © 2020 hector
                    <a href="https://github.com/heyui/heyui-admin" target="_blank"></a>
                    <!-- <a href="https://www.heyui.top" target="_blank"></a> -->
                </div>
            </el-main>
        </el-container>
    </el-container>
</div>
</template>

<script>
import screenfull from "screenfull"
export default {
    name: "app",
    provide() {
        return {
            reload: this.reload
        };
    },
    data() {
        return {
            isRouterAlive: true,
            isCollapse: false,
            logo: "HECTOR",
            //默认不全屏
            isFullscreen: false
        };
    },
    methods: {
        collapseStatus() {
            this.collapseBtnClick = this.isCollapse;
            this.isCollapse = !this.isCollapse;
            this.isCollapse == true ? (this.logo = "WB") : (this.logo = "WorkBench");
        },
        fullScreen() {
            screenfull.toggle();
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        reload() {
            this.isRouterAlive = false;
            this.$nextTick(function () {
                this.isRouterAlive = true;
            });
        }
    }
};
</script>

<style>
/*伪元素是行内元素 正常浏览器清除浮动方法*/
/* .clearfix:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
} */

* {
    margin: 0px;
    padding: 0px;
}

html,
body {
    background: #f3f6f8;
    margin: 0px;
    padding: 0px;
    height: 100%;
}

.el-container .el-header {
    height: 60px;
    /* line-height: 60px; */
    /* background: #20a0ff; */
    background: #fff;
    padding: 0 0;
}

.app-logo {
    height: 60px;
    font-size: 22px;
    border-color: hsla(62, 77%, 76%, 0.3);
    width: 200px;
    text-align: center;
    width: auto;
    line-height: 60px;
}

/* .el-header .right {
    float: right;
    margin-right: 20px;
    height: 60px;
    line-height: 60px;
} */

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

/* .item {
    margin-top: 10px;
    margin-right: 40px;
} */

.btn-collapse {
    box-shadow: none;
    border-color: rgba(0, 0, 0, 0) !important;
    font-size: 20px !important;
    display: inline-block;
    border-radius: 4px;
    color: inherit;
    background-color: #fff;
    height: 60px;
    line-height: 60px;
}

.btn-fullscreen {
    box-shadow: none;
    border-color: rgba(0, 0, 0, 0) !important;
    font-size: 20px !important;
    border-radius: 4px;
    background-color: #fff;
    float: right;
    margin-top: 40px;
    line-height: 60px;
    height: 60px;
}

.btn-message {
    box-shadow: none;
    border-color: rgba(0, 0, 0, 0) !important;
    font-size: 20px !important;
    border-radius: 4px;
    background-color: #fff;
}

.right {
    margin-right: 40px;
    margin-top: 10px;
}

.el-badge {
    float: right;
    margin-top: 14px;
}

.el-aside {
    color: #333;
    background-color: #fff;
    height: 100%;
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

.profile {
    height: 80px;
    line-height: 80px;
}

.profile img {
    margin: 0 auto;
}

.app-footer {
    margin: 0 auto;
    width: 200px;
    margin-top: 20px;
}
</style>
