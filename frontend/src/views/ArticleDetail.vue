<template>
    <div class="row">
        <div class="archive col-md-12 col-lg-8 col-sm-12 content-area">      
            <Detail />
        </div>
        <div class="col-md-12 col-lg-4 col-sm-12 sidebar">
            <!-- <Profile /> -->
            <Category />
            <Archive />
        </div>
    </div>
</template>
<script>
    import Profile from '@/components/Profile.vue'
    import Archive from '@/components/Archive.vue'
    import Category from '@/components/Category.vue'
    import Detail from '@/components/Detail.vue'

    export default {
        name: 'ArticleDetail',
        components: {
            Profile, Archive, Category, Detail
        }
    }
</script>