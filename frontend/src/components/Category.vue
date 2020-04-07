<template>
        <section class="">
                <h4>文章分类</h4>
                <ul class="list-group list-group-flush" aria-label="文章分类">
                        <li class="d-flex justify-content-between align-items-center border-bottom"
                                v-for="category in data">
                                <router-link :to="{path:'/category/'+category.id}" data-toggle="tooltip" data-placement="top"
                                        class="text-secondary"  title=""
                                        data-original-title="这里包含了 Typecho 相关的教程和笔记。">{{category.name}}
                                </router-link >
                                <span class="badge badge-secondary badge-pill">{{category.count}}</span>
                        </li>
                </ul>
        </section>
</template>
<script>
        import axios from 'axios'
        export default {
                data() {
                        return {
                                data: []
                        }
                },
                methods: {
                        //请求数据
                        getData() {
                                this.$http.get("/blog/category_detail").then(res => {
                                        console.log(res)
                                        if (res.data.code == "200") {
                                                this.data = res.data.result;
                                        }
                                }, error => {

                                })
                        },
                },
                //生命周期函数：挂载完成
                mounted() {
                        this.getData();
                },
                updated() {
                },
                watch: {
                        '$route' (to, from) {
                            this.$router.go(0);
                        }
                    }
                
        }
</script>