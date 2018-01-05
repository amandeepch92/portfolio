import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/about', name: 'About', component: About},
    { path: '/portfolio', name: 'Portfolio', component: Portfolio},
    { path: '/contact', name: 'Contact', component: Contact},
    { path: '/', name:'about' },
  ]
})
