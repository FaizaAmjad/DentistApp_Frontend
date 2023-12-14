import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LogIn from '../views/LogIn.vue'
import AccountView from '../views/AccountView.vue';
import CreateSlotsView from '../views/CreateSlots.vue';
import RegisterClinic from '../views/RegisterClinic.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/login',
      name: 'login',
      component: LogIn
    },
    {
      
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/create-slots',
      name: 'create-slots',
      component: () => import('../views/CreateSlots.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    },
    {
    path: '/registerClinic',
    name: 'registerClinic',
    component: RegisterClinic
  }, 

    {
      path: '/account',
      name: 'account',
      component: AccountView
    },
    {
      path: '/registerClinic',
      name: 'registerClinic',
      component: RegisterClinic
    },  
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue')
    },
    
    
  ]
})

export default router
