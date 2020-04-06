import Vue from 'vue'
import VueRouter from 'vue-router'
import Article from "../views/Article.vue"
import ArticleDetail from "../views/ArticleDetail.vue"
import CategoryDetail from "../views/CategoryDetail.vue"
import ArchiveDetail from "../views/ArchiveDetail.vue"

Vue.use(VueRouter)

const routes = [{
  path: '/article',
  name: 'article',
  component: Article,
  meta:{
    title:"爱美食的Geek's Blog"
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
}, {
  path: '/category/:name',
  name: 'category',
  component: CategoryDetail,
},{
  path: '/article/:year/:month',
  name: 'article_archive',
  component: ArchiveDetail,
}
]

const router = new VueRouter({
  routes
})

export default router