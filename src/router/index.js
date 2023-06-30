import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import { Router} from 'react-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ticketingMethod',
    name: 'TicketingMethod',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TicketingMethod.vue')
  }
  ,
  {
    path: '/NameLogin',
    name: 'NameLogin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NameLogin.vue')
  }

  ,
  {
    path: '/SubForum',
    name: 'subForum',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SubForum.vue')
  } ,

  {
    path: '/MainForum',
    name: 'mainForum',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MainForum.vue')
  },
  {
    path: '/buyTicketsnow',
    name: 'BuyTicketsnow',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BuyTicketsnow.vue')
  }

  ,
  {
    path: '/aboutFounder',
    name: 'AboutFounder',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutFounder.vue')
  }
  ,
  {
    path: '/commonProblem',
    name: 'CommonProblem',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CommonProblem.vue')
  }


  


  
  ,
  {
    path: '/contactUs',
    name: 'ContactUs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactUs.vue')
  }
  ,
  {
    path: '/page',
    name: 'page',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/page.vue')
  },
  {
    path: '/guestSharing',
    name: 'GuestSharing',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/GuestSharing.vue')
  },
  {
    path: '/huodongxing',
    name: 'huodongxing',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/huodongxing.vue')
  },

  {     path: '/desktop',       
  component: () => import('../components/404.vue'),       
  hidden: true     
}, 



//这个*匹配必须放在最后，将改路由配置放到所有路由的配置信息的最后，否则会其他路由path匹配造成影响。     
{     path: '*',
  redirect: '/404', 
  hidden: true 
}

  
]
const router = new VueRouter({
  mode:'history',
  base: '/',
  routes,
    // return 期望滚动到哪个的位置
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
           return savedPosition
      } else {
       // vue2.0  x  y  控制
       // vue3.0  left  top 控制
      return { x: 0, y: 0 }
   }
 }
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
}
export default router




