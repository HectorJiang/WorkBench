<template>
        <section class="">
                <h4>文章归档</h4>
                <ul class="list-group list-group-flush" aria-label="文章归档">
                        <li class="d-flex justify-content-between align-items-center border-bottom"
                                v-for="(value,name) in archives">
                                <router-link :to="{path:'/article/'+name}" data-toggle="tooltip" data-placement="top"
                                        class="text-secondary"  title=""
                                        data-original-title="4篇文章">
                                        {{name}}
                                </router-link>
                                <span class="badge badge-secondary badge-pill">{{value}}</span>
                        </li>
                </ul>
        </section>
</template>


<script>
        import axios from 'axios'
        export default {
                data() {
                        return {
                                archives: []
                        }
                },
                methods: {
                        //请求数据
                        getData() {
                                this.$http.get("/blog/archive").then(res => {
                                        console.log(res)
                                        if (res.data.code == "200") {
                                                this.archives = res.data.result;
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