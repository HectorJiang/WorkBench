<template>
    <div class="row">
        <div class="archive col-md-12 col-lg-8 col-sm-12 content-area">    
            <header class="page-header">
                <h1 class="archive-title">分类 PHP 下的文章                    </h1>
                <span>这里是一些PHP相关的教程和笔记。</span>
            </header>              
            <ArchiveCard />
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
    import ArchiveCard from '@/components/ArchiveCard.vue'

    export default {
        name: 'ArticleDetail',
        components: {
            Profile, Archive, Category, ArchiveCard
        }
    }
</script>