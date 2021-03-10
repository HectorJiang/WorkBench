<template>
  <div class="home">
    <div class="banner_inner">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="banner_content">
              <h3 class="text-uppercase">Hector</h3>
              <h1 class="text-uppercase">Working For Freedom</h1>
              <h5 class="text-uppercase">A Big Data developer</h5>
              <div class="d-flex align-items-center">
                <!-- <a class="primary_btn" href="#"><span>Hire Me</span></a> -->
                <!-- <a class="primary_btn tr-bg" href="#"><span>Get CV</span></a> -->
              </div>
            </div>
            联系方式 个人简介 个人简历
          </div>
          <div class="col-lg-5">
            <div class="home_right_img">
              <!-- <img class="" src="img/banner/home-right.png" alt=""> -->
              <img class="avatar" src="../assets/img/avatar.jpg" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
};
</script>

<style>
.banner_content {
  padding: 10px;
}

.home_right_img {
  width: 200px;
}
.avatar {
  width: 100%;
  height: 100%;
}
</style>