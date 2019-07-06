import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import find from '@/components/pages/find'
import search from '@/components/pages/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/find',
      name: 'find',
      component: find,
    },
    {
      path:'/search',
        name: 'search',
        component: search
    }
  ]
})
