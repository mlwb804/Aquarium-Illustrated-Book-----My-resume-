import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import NotFound from '../views/404NotFound.vue'

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
    component: () => import('../views/About.vue'),
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
    path:'/rearingShare',
    name: 'RearingShare',
    component: () => import('../views/RearingShare.vue'),
    meta: {
      breadcrumb: [{
        name: '首頁',
        link: 'home'
      },
      {
        name:'文章分享'
      }]
    }
  },
  {
    path: '/aquarium',
    name: 'Aquarium',
    component: () => import('../views/Aquarium.vue'),
    redirect: {name: 'Unify'},
    children: [
      {
        path:'unify',
        name:'Unify',
        component: () => import('../views/Unify.vue'),
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
        component: () => import('../views/aquarium/FreshwaterFish.vue'),
        meta:{
          breadcrumb: [{
            name: '首頁',
            link: '/'
          },
          {
            name: '觀賞水族圖鑑',
            link: 'unify'
          },
          {
            name: '淡水魚'
          }]
        }
      },
      {
        path:'ornamentalShrimp',
        name: 'OrnamentalShrimp',
        component: () => import('../views/aquarium/OrnamentalShrimp.vue'),
        meta:{
          breadcrumb: [{
            name: '首頁',
            link: '/'
          },
          {
            name: '觀賞水族圖鑑',
            link: 'unify'
          },
          {
            name: '觀賞蝦'
          }]
        }
      },
      {
        path:'saltwaterFish',
        name: 'SaltwaterFish',
        component: () => import('../views/aquarium/SaltwaterFish.vue'),
        meta:{
          breadcrumb: [{
            name: '首頁',
            link: '/'
          },
          {
            name: '觀賞水族圖鑑',
            link: 'unify'
          },
          {
            name: '海水魚'
          }]
        }
      }
    ]
  },
  {
        path: '/unify/article/:id',
        name: 'Article',
        component: () => import('../views/Article.vue'),
        meta:{
          breadcrumb:[{
            name: '首頁',
            link: '/'
          },
          {
            name: '觀賞水族圖鑑',
            link: '/aquarium/unify'
          },
          {
            name:'',
            nam:''
          }
        ]
        }
      },
  {
        path: '/RearingShare/RearingArticles/:id',
        name: 'RearingArticles',
        component: () => import('../views/RearingArticles.vue'),
        meta:{
          breadcrumb:[{
            name: '首頁',
            link: '/'
          },
          {
            name: '觀賞水族圖鑑',
            link: '/rearingShare'
          },
          {
            name:'',
            nam:''
          }
        ]
        }
      },
      {
        path:'*',
        name: '404NotFound',
        component: NotFound
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
  routes,
  scrollBehavior(to,from,savedPosition) {
  if (savedPosition) {
    console.log(to, from);
    return savedPosition;
  }
  return { left:0, top:0};
}
})



export default router
