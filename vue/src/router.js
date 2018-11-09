import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/battery',
      name: 'battery',
      component: () => import(/* webpackChunkName: "battery" */ './views/Battery.vue')
    },
    {
      path: '/geolocation',
      name: 'geolocation',
      component: () => import(/* webpackChunkName: "geolocation" */ './views/Geolocation.vue')
    },
    {
      path: '/vibration',
      name: 'vibration',
      component: () => import(/* webpackChunkName: "vibration" */ './views/Vibration.vue')
    },
    {
      path: '/camera',
      name: 'camera',
      component: () => import(/* webpackChunkName: "camera" */ './views/Camera.vue')
    },
    {
      path: '/compass',
      name: 'compass',
      component: () => import(/* webpackChunkName: "compass" */ './views/Compass.vue')
    },
    {
      path: '/',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
