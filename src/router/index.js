import Vue from 'vue'
import Router from 'vue-router'
import mainLayout from '@/components/mainLayout'
import newUser from '@/components/newUser.vue'
import forget from '@/components/forget.vue'
import me from '@/components/me.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path:'/',
      redirect:'mainLayout'
    },
    {
      path: '/mainLayout',
      name: 'mainLayout',
      component: mainLayout
    },    
    {
      path: '/App/:user',
      name: 'App',
      component:resolve => require(['@/App'],resolve)
    },
    {
      path:'/newUser',
      name:'newUser',
      component:newUser
    },
    {
      path:'/forget',
      name:'forget',
      component:forget
    },
    {
      path:'/me',
      name:'me',
      component:me
    }
  ],
  linkActiveClass:'linkActive',
})