import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/index.vue';
import Portafolio from '../views/portafolio.vue';
import Services from '../views/services.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/portafolio',
    name: 'portafolio',
    component: Portafolio
  },
  {
    path: '/services',
    name: 'services',
    component: Services
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth', // hace que el scroll sea suave
      }
    }
  }
});

export default router;