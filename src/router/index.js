import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ALeft from '@/components/ALeft'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ALeft',
      component: ALeft
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
