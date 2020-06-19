<template>
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
</template>

<script>
export default {
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
            this.isCollapse == true ? (this.logo = "HE") : (this.logo = "HECTOR");
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
}
</script>

<style>

</style>
