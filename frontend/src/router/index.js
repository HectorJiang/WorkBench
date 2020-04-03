import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Config from "../views/Config.vue"
import ArticleAdd from "../views/ArticleAdd.vue"
import ArticleList from "../views/ArticleList.vue"
import ArticleCategory from "../views/ArticleCategory.vue"

Vue.use(VueRouter)

const routes = [{
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
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/config',
    name: 'config',
    component: Config
  },
  {
    path: '/application',
    name: 'application',
    component: () => import("../views/Application.vue")
  },
  {
    path: '/article_add',
    name: 'article_add',
    component: ArticleAdd
  },
  {
    path: '/article_list',
    name: 'article_list',
    component: ArticleList
  },
  {
    path: '/article_category',
    name: 'article_category',
    component: ArticleCategory
  }

]

const router = new VueRouter({
  routes
})

export default router