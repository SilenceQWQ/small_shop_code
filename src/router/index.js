import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/Home.vue')
const Index = () => import('../views/Home/Index.vue')
const Cates = () => import('../views/Home/Cates.vue')
const UserCenter = () => import('../views/Home/UserCenter.vue')
const ShopCar = () => import('../views/Home/ShopCar.vue')
Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home/index'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [{
      path: 'index',
      component: Index
    },{
      path: 'cates',
      component: Cates
    },{
      path: 'usercenter',
      component: UserCenter
    },{
      path: 'shopcar',
      component: ShopCar
    }
  ]
  }
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router