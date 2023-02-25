import Vue from 'vue'
import VueRouter from 'vue-router'
import CartList from '../views/cart-list.vue'
import CartGoods from '../views/cart-good.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/list',
    component: CartList
  },
  {
    path: '/cart',
    component: CartGoods
  }
]

const router = new VueRouter({
  routes
})

export default router
