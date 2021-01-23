import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import New from '../views/New.vue';
import About from '../views/About.vue';
import Aquarium from '../views/Aquarium.vue';
import AquariumHome from '../views/aquarium/AquariumHome.vue';
import FreshwaterFish from '../views/aquarium/FreshwaterFish.vue';
import OrnamentalShrimp from '../views/aquarium/OrnamentalShrimp.vue';
import SaltwaterFish from '../views/aquarium/SaltwaterFish.vue';
import Unify from '../views/Unify.vue';
import Article from '../views/Article.vue';

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      breadcrumb: [{
        name: '首頁'
      }]
    }
  },
  {
    path:'/about',
    name: 'About',
    component: About,
    meta: {
      breadcrumb: [{
        name: '首頁',
        link: 'home'
      },
      {
        name: '關於我們'
      }]
    }
  },
  {
    path:'/new',
    name: 'New',
    component: New,
    meta: {
      breadcrumb: [{
        name: '首頁',
        link: 'home'
      },
      {
        name:'最新消息'
      }]
    }
  },
  {
    path: '/aquarium',
    name: 'Aquarium',
    component: Aquarium,
    redirect: {name: 'AquariumHome'},
    children: [
      {
        path:'aquariumHome',
        name:'AquariumHome',
        component: AquariumHome,
        meta:{
          breadcrumb: [{
            name: '首頁',
            link: '/'
          },
          {
            name: '觀賞水族圖鑑'
          }]
        }

      },
      {
        path:'freshwaterFish',
        name: 'FreshwaterFish',
        component: FreshwaterFish,
        meta:{
          breadcrumb: [{
            name: '首頁',
            link: '/'
          },
          {
            name: '觀賞水族圖鑑',
            link: 'aquariumHome'
          },
          {
            name: '淡水魚'
          }]
        }
      },
      {
        path:'ornamentalShrimp',
        name: 'OrnamentalShrimp',
        component: OrnamentalShrimp,
        meta:{
          breadcrumb: [{
            name: '首頁',
            link: '/'
          },
          {
            name: '觀賞水族圖鑑',
            link: 'aquariumHome'
          },
          {
            name: '觀賞蝦'
          }]
        }
      },
      {
        path:'saltwaterFish',
        name: 'SaltwaterFish',
        component: SaltwaterFish,
        meta:{
          breadcrumb: [{
            name: '首頁',
            link: '/'
          },
          {
            name: '觀賞水族圖鑑',
            link: 'aquariumHome'
          },
          {
            name: '海水魚'
          }]
        }
      }
    ]
  },
  {
    path: '/unify',
    name: 'Unify',
    component: Unify,
    meta: {
      breadcrumb: [{
        name: '首頁',
        link: 'home'
      },
      {
        name: '水族圖鑑'
      }]
    },
  },
  {
        path: '/unify/article/:id',
        name: 'Article',
        component: Article,
        meta:{
          breadcrumb:[{
            name: '首頁',
            link: '/'
          },
          {
            name: '水族圖鑑',
            link: '/unify'
          },
          {
            name: '七彩神仙'
          }]
        }
      }

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
