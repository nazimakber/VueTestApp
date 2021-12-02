import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Client from '@/components/client/Client'
import Provider from '@/components/provider/Provider'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/client/',
    name: 'Client',
    component: Client
  },
  {
    path: '/provider/',
    name: 'Provider',
    component: Provider
  }
]
export default new Router({
  routes
})
