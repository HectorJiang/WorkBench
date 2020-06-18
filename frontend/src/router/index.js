import Vue from 'vue'
import VueRouter from 'vue-router'
import Article from "../views/Article.vue"
import ArticleDetail from "../views/ArticleDetail.vue"
import CategoryDetail from "../views/CategoryDetail.vue"
import ArchiveDetail from "../views/ArchiveDetail.vue"
import Home from "../views/Home.vue"
import Application from "../views/Application.vue"
import Share from "../views/Share.vue"
import Personal from "../views/Personal.vue"
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: "爱美食的Geek's Blog"
        }
    }, {
        path: '/article',
        name: 'article',
        component: Article,
        meta: {
            title: "爱美食的Geek's Blog"
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
            title: "爱美食的Geek's Blog"
        }
    }, {
        path: '/category/:id',
        name: 'category',
        component: CategoryDetail,
        meta: {
            title: "爱美食的Geek's Blog"
        }
    }, {
        path: '/article/:year/:month',
        name: 'article_archive',
        component: ArchiveDetail,
        meta: {
            title: "爱美食的Geek's Blog"
        }
    },
    {
        path: '/application',
        name: 'applicatoin',
        component: Application,
        meta: {
            title: "爱美食的Geek's Blog"
        }
    },
    {
        path: '/share',
        name: 'share',
        component: Share,
        meta: {
            title: "爱美食的Geek's Blog"
        }
    },
    {
        path: '/personal',
        name: 'personal',
        component: Personal,
        meta: {
            title: "爱美食的Geek's Blog"
        }
    }
]
const router = new VueRouter({
    routes
})

export default router