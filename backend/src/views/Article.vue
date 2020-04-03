<template>
    <div class="row">
        <div class="article-list col-md-12 col-lg-8 col-sm-12 content-area">
            <!-- <router-view></router-view> -->
            <ArticleCard />
        </div>
        <div class="col-md-12 col-lg-4 col-sm-12 sidebar">
            <Profile />
            <Category />
            <Archive />
        </div>
    </div>
</template>
<script>
    import Profile from '@/components/Profile.vue'
    import Archive from '@/components/Archive.vue'
    import Category from '@/components/Category.vue'
    import ArticleCard from '@/components/ArticleCard.vue'

    export default {
        name: 'Article',
        components: {
            Profile, Archive, Category, ArticleCard
        }
    }
</script>