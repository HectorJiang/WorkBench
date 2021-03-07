import Vue from 'vue'
import VueRouter from 'vue-router'
import Article from "../views/Article.vue"
import ArticleDetail from "../views/ArticleDetail.vue"
import CategoryDetail from "../views/CategoryDetail.vue"
import ArchiveDetail from "../views/ArchiveDetail.vue"
import Home from "../views/Home.vue"
import Application from "../views/Application.vue"
import Share from "../views/Share.vue"
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home,
    meta: {
        title: "Hector'Blog"
    }
}, {
    path: '/article',
    name: 'article',
    component: Article,
    meta: {
        title: "Hector'Blog"
    }
    // children: [{
    //   path: ':id',
    //   component: ArticleDetail,
    //   name: 'article_detail'
    // }]
}, {
    path: '/article/:id',
    name: 'article_detail',
    component: ArticleDetail,
    meta: {
        title: "Hector'Blog"
    }
}, {
    path: '/category/:id',
    name: 'category',
    component: CategoryDetail,
    meta: {
        title: "Hector'Blog"
    }
}, {
    path: '/article/:year/:month',
    name: 'article_archive',
    component: ArchiveDetail,
    meta: {
        title: "Hector'Blog"
    }
},
{
    path: '/application',
    name: 'applicatoin',
    component: Application,
    meta: {
        title: "Hector'Blog"
    }
},
{
    path: '/share',
    name: 'share',
    component: Share,
    meta: {
        title: "Hector'Blog"
    }
},
]
const router = new VueRouter({
    mode: 'history',
    routes
})

export default router