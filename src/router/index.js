import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import ShowList from '@/components/ShowList'
import ShowList2 from '@/components/ShowList2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test,
    },
    {
      path: '/ShowList',
      name: 'ShowList',
      component: ShowList,
    },
    {
      path: '/ShowList2',
      name: 'ShowList2',
      component: ShowList2,
    }
  ]
})
