import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills'
import Contact from './components/Contact';
 
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', 
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/experience',
      name: 'Experience',
      component: Experience
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }

  ]
}
);