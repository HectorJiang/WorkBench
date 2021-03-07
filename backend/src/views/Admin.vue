<template>
  <!-- 左侧导航 -->
  <el-container style="height: 100%">
    <el-aside width="auto">
      <Aside />
    </el-aside>
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <router-view v-if="isRouterAlive" />
      </el-main>
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import Aside from "../components/admin/Aside";
import Header from "../components/admin/Header";
import Footer from "../components/admin/Footer";
export default {
  components: { Header, Aside, Footer },
  name: "admin",
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      isRouterAlive: true,
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      });
    },
  },
};
</script>

<style scoped>
.el-container .el-header {
  background: #fff;
  padding: 0 0;
}
.el-container .el-footer {
  position: relative;
  bottom: 0px;
}
</style>