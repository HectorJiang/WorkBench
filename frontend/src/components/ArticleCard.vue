<template>
    <div>
        <div class="card mb-3" v-for="article in articles">
            <router-link :to="{path:'/article/'+article.blog_id}">
                <img src="../assets/img/demo1.jpg" class="card-img-top" alt="..." style="height: 200px;">
                <div class="card-body">
                    <p class="card-text">{{article.title}}</p>
                    <p class="card-text"><small class="text-muted">{{article.updated_time}}</small>
                        <small class="text-muted">
                            <i class="fas fa-calendar-alt"></i> {{article.created_time}}
                        </small>
                    </p>
                    </a>
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
                this.$http.get("/blog/articles").then(res => {
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