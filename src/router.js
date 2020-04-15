import Vue from 'vue'
import Router from 'vue-router'

import AboutMe from './views/AboutMe.vue'
import Projects from './views/Projects.vue'
import Contact from './views/Contact.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'about',
      component: AboutMe
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

export default router