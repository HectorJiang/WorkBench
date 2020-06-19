import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Config from "../views/Config.vue"
import ArticleAdd from "../views/ArticleAdd.vue"
import ArticleList from "../views/ArticleList.vue"
import ArticleCategory from "../views/ArticleCategory.vue"
import ArticleEdit from "../views/ArticleEdit.vue"
import Login from "../views/Login.vue"
import Share from "../views/Share.vue"
import Personal from "../views/Personal"

Vue.use(VueRouter)

const routes = [{
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/config',
        name: 'config',
        component: Config
    },
    {
        path: '/application',
        name: 'application',
        component: () =>
            import ("../views/Application.vue")
    },
    {
        path: '/article_add',
        name: 'article_add',
        component: ArticleAdd,
        meta: {
            title: "爱美食的Geek's 后台"
        }
    },
    {
        path: '/article_list',
        name: 'article_list',
        component: ArticleList,
        meta: {
            title: "爱美食的Geek's 后台"
        }
    },
    {
        path: '/article_edit/:blog_id',
        name: 'article_edit',
        component: ArticleEdit,
        meta: {
            title: "爱美食的Geek's 后台"
        }
    },
    {
        path: '/article_category',
        name: 'article_category',
        component: ArticleCategory,
        meta: {
            title: "爱美食的Geek's 后台"
        }
    },
    {
        path: '/share',
        name: 'share',
        component: Share,
        meta: {
            title: "爱美食的Geek's 后台"
        }
    },
    {
        path: '/personal',
        name: 'personal',
        component: Personal,
        meta: {
            title: "爱美食的Geek's 后台"
        }
    }

]

const router = new VueRouter({
    routes
})

export default router