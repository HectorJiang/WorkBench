import Vue from 'vue'
import VueRouter from 'vue-router'
import Article from "../views/Article.vue"
import ArticleDetail from "../views/ArticleDetail.vue"

Vue.use(VueRouter)

const routes = [{
  path: '/article',
  name: 'article',
  component: Article,
  // children: [{
  //   path: ':id',
  //   component: ArticleDetail,
  //   name: 'article_detail'
  // }]
}, {
  path: '/article/:id',
  name: 'article_detail',
  component: ArticleDetail,
}]

const router = new VueRouter({
  routes
})

export default router