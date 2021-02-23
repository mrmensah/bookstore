import Vue from 'vue'
import VueRouter from 'vue-router'
import CartPage from '../views/CartPage'
import ProductsPage from '../views/ProductsPage'
import ProductDetailPage from '../views/ProductDetailPage'
import NotFoundPage from '../views/NotFoundPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/products',
    name: 'Products',
    component: ProductsPage,
  },
  {
    path: '/products/:id',
    name: 'ProductDetail',
    component: ProductDetailPage,
  }, 
  {
    path: '/cart',
    name: 'Cart',
    component: CartPage,
  }, 
  {
    path: '/',
    redirect: '/products'
  },
  {
    path: '*',
    name: 'NotFoundPage',
    component: NotFoundPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
