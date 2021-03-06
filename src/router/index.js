import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import find from '@/components/pages/find'
import musicHall from '@/components/pages/musicHall'
import search from '@/components/pages/search'
import recommends from '@/components/pages/recommends'

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
      component: find
    },
    {
      path: '/musicHall',
      name: 'musicHall',
      component: musicHall
    },
    {
      path:'/search',
        name: 'search',
        component: search
    },
    {
      path: '/recommends',
      name: 'recommends',
      component: recommends,
    }
  ]
})
