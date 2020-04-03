<template>
        <section class="">
                <h4>文章分类</h4>
                <ul class="list-group list-group-flush" aria-label="文章分类">
                        <li class="d-flex justify-content-between align-items-center border-bottom"
                                v-for="(value,name) in categories"><a data-toggle="tooltip" data-placement="top"
                                        class="text-secondary" href="" title=""
                                        data-original-title="这里包含了 Typecho 相关的教程和笔记。">{{name}}</a><span
                                        class="badge badge-secondary badge-pill">{{value}}</span></li>
                </ul>
        </section>
</template>
<script>
        import axios from 'axios'
        export default {
                data() {
                        return {
                                categories: []
                        }
                },
                methods: {
                        //请求数据
                        getData() {
                                axios.get("").then(res => {
                                        console.log(res)
                                        if (res.data.code == "200") {
                                                this.categories = res.data.result;
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