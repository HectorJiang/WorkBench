<template>
  <div class="container-header">
    <el-button
      plain
      @click="collapseStatus"
      icon="el-icon-s-unfold"
      class="btn-collapse"
    ></el-button>
    <el-dropdown class="avatar right">
      <span class="el-dropdown-link">
        <el-avatar
          shape="square"
          size="medium"
          src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
        ></el-avatar>
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
      <el-button
        size="small"
        icon="el-icon-message"
        class="btn-message"
      ></el-button>
    </el-badge>
    <el-badge>
      <el-button
        size="small"
        @click="fullScreen"
        icon="el-icon-rank"
        class="btn-fullscreen"
      ></el-button>
    </el-badge>
  </div>
</template>
<script>
import screenfull from "screenfull";
export default {
  data() {
    return {
      //默认不全屏
      isFullscreen: false,
      isCollapse: false,
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
  },
};
</script>
<style scoped>
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

.avatar {
  cursor: pointer;
  float: right;
  /* margin-right:20px; */
  /* height:60px;
    line-height: 60px; */
}
.profile {
  height: 80px;
  line-height: 80px;
}

.profile img {
  margin: 0 auto;
}
</style>