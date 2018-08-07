// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mainLayout from '@/components/mainLayout'
import init from '@/init'
import newUser from '@/components/newUser.vue'
import messsage from '@/components/newUserWays/message'
Vue.config.productionTip = false
/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  router,
  components: { 
  	init },
  template: '<init/>'
})