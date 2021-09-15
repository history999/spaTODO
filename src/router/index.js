import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)



export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  {
    path: '/',
    name: 'create',
    component: () => import('../views/Create.vue')
  },
  {
  path: '/list',
  name: 'List',
  component: () => import('../views/List.vue')
},

  {
  path: '/task/:id',
  name: 'Task',
  component: () => import('../views/Task.vue')
}
]
})
