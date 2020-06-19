<template>
    <!--博客信息-->
    <section class="">
        <h4>博客信息</h4>
        <div class="personal-information pt-2">
            <div class="user">
                <!-- class rounded-circle -->
                <img src="../assets/img/avatar.jpg" alt="Hector Will的头像" class="avatar">
                <div class="p-2">
                    <a class="user-name mt-2" target="_blank" href="">Hector
                        Will</a>
                        <!-- https://www.misterma.com/ -->
                    <!-- <p class="introduction mt-1">人生之路，难免坎坷，但我执着。</p> -->
                    <p class="introduction mt-1">努力的意义在与,每天阳光与自由</p>
                </div>
            </div>
            <!-- <div class="website clearfix border-top">
                <div class="info float-left border-right">
                    <p class="quantity">{{data.article_num}}</p>
                    文章数
                </div>
                <div class="info float-left border-right">
                    <p class="quantity">{{data.run_time}}</p>
                    评论数
                </div>
                <div class="info float-left">
                    <p class="quantity">{{data.comment_num}}天</p>
                    运行天数
                </div>
            </div> -->
        </div>
    </section>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                data: ""
            }
        },
        methods: {
            //请求数据
            getData() {
                axios.get("").then(res => {
                    console.log(res)
                    if (res.data.code == "200") {
                        this.data = res.data.result
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