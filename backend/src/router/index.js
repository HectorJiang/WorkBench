import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from "../views/Login.vue"
import Admin from "../views/Admin.vue"


import Index from '../components/admin/Index.vue'
import ArticleAdd from "../components/share/ArticleAdd.vue"
import ArticleList from "../components/share/ArticleList.vue"
import ArticleCategory from "../components/share/ArticleCategory.vue"
import ArticleEdit from "../components/share/ArticleEdit.vue"
// import Config from "../components/share/Config.vue"
// import Share from "../components/share/Share.vue"
// import Personal from "../components/share/Personal"

Vue.use(VueRouter)

const routes = [{
    path: '/login',
    meta: {
        title: "请登录"
    },
    component: Login
},
{
    path: '/',
    meta: {
        title: "workbench后台管理"
    },
    component: Admin,
    children: [
        {
            path: 'index',
            component: Index,
            meta: {
                title: "workbench后台管理"
            }
        },
        {
            path: 'article_add',
            name: 'article_add',
            component: ArticleAdd,
            meta: {
                title: "爱美食的Geek's 后台"
            }
        },
        {
            path: 'article_list',
            name: 'article_list',
            component: ArticleList,
            meta: {
                title: "爱美食的Geek's 后台"
            }
        },
        {
            path: 'article_edit/:blog_id',
            name: 'article_edit',
            component: ArticleEdit,
            meta: {
                title: "爱美食的Geek's 后台"
            }
        },
        {
            path: 'article_category',
            name: 'article_category',
            component: ArticleCategory,
            meta: {
                title: "爱美食的Geek's 后台"
            }
        },
        // {
        //     path: '/application',
        //     name: 'application',
        //     component: () =>
        //         import("../views/Application.vue")
        // },
    ]
},


]

const router = new VueRouter({
    mode: 'history',
    base: '/beyond/',
    routes
})

export default router