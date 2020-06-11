<template>
    <div>
        <div class="card mb-3">
                <img src="../assets/img/demo1.jpg" class="card-img-top" alt="..." style="height: 224px; cursor:pointer">
                <!-- <div class="card-body"> -->
                    <!-- <h4 class="card-text">{{article.title}}</h4> -->
                    <!-- <h4 class="card-text">每天都独自充满阳光</h4> -->
                    <!-- <p class="card-text"><small class="text-muted">{{article.updated_time}}</small> -->
                        <!-- <small class="text-muted">
                            <i class="fas fa-calendar-alt"></i> {{article.created_time}}
                        </small> -->
                    <!-- </p> -->
                <!-- </div> -->
        </div>
        <div class="card mb-3" v-for="article in articles">
            <router-link :to="{path:'/article/'+article.blog_id}">
                <!-- <img src="../assets/img/demo1.jpg" class="card-img-top" alt="..." style="height: 200px;"> -->
                <div class="card-body">
                    <h4 class="card-text">{{article.title}}</h4>
                    <p class="card-text"><small class="text-muted">{{article.updated_time}}</small>
                        <small class="text-muted">
                            <i class="fas fa-calendar-alt"></i> {{article.created_time}}
                        </small>
                        <!-- <el-tag></el-tag> -->
                        <!-- <el-tag type="success">标签二</el-tag> -->
                        <!-- <el-tag type="info">标签三</el-tag> -->
                    </p>
                </div>
            </router-link>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                articles: []
            }
        },
        methods: {
            //请求数据
            getData() {
                this.$http.get("/articles").then(res => {
                    console.log(res)
                    if (res.data.code == "200") {
                        this.articles = res.data.result;
                    }
                }, error => {

                })
            }
        },
        //生命周期函数：挂载完成
        mounted() {
            this.getData();
        }
    }
</script>