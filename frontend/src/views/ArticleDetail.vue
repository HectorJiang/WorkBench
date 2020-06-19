<template>
<div class="row">
    <div class="archive col-md-12 col-lg-8 col-sm-12 content-area">
        <Detail />
    </div>
    <div class="col-md-12 col-lg-4 col-sm-12 sidebar">
        <!-- <Profile /> -->
        <section class="content">
            <h4>博客目录</h4>
            <ul class="list-group list-group-flush" aria-label="博客目录">
                <li class="d-flex justify-content-between align-items-center border-bottom">
                    标题一
                </li>
                <li class="d-flex justify-content-between align-items-center border-bottom">
                    标题二
                </li>
                <li class="d-flex justify-content-between align-items-center border-bottom">
                    标题三
                </li>
            </ul>
        </section>
    </div>
</div>
</template>

<script>
import Detail from '@/components/Detail.vue'

export default {
    name: 'ArticleDetail',
    components: {
        Detail
    }
}
</script>

<style>
.content {
    top: 86px;
    position: fixed;
    width: 350px;
}
</style>
