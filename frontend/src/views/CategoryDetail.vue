<template>
    <div class="row">
        <div class="archive col-md-12 col-lg-8 col-sm-12 content-area">
            <CategoryCard />
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
    import CategoryCard from '@/components/CategoryCard.vue'

    export default {
        name: 'ArticleDetail',
        components: {
            Profile, Archive, Category, CategoryCard
        }
    }
</script>