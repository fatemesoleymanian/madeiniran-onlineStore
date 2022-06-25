import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7c513aec = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _3b74b92d = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _2fc1db9a = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _3b54a84e = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _88c394f2 = () => interopDefault(import('..\\pages\\comments.vue' /* webpackChunkName: "pages/comments" */))
const _ddfc2abc = () => interopDefault(import('..\\pages\\compare.vue' /* webpackChunkName: "pages/compare" */))
const _a7f48746 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _47ef134c = () => interopDefault(import('..\\pages\\login-register.vue' /* webpackChunkName: "pages/login-register" */))
const _116a47df = () => interopDefault(import('..\\pages\\my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _54915cb8 = () => interopDefault(import('..\\pages\\orders.vue' /* webpackChunkName: "pages/orders" */))
const _c233ee2c = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _59b2d1ee = () => interopDefault(import('..\\pages\\shop.vue' /* webpackChunkName: "pages/shop" */))
const _378199c8 = () => interopDefault(import('..\\pages\\shop-list-standard.vue' /* webpackChunkName: "pages/shop-list-standard" */))
const _db58b35e = () => interopDefault(import('..\\pages\\terms-conditions.vue' /* webpackChunkName: "pages/terms-conditions" */))
const _7987bcd8 = () => interopDefault(import('..\\pages\\wishlist.vue' /* webpackChunkName: "pages/wishlist" */))
const _39be17e5 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _b56657e4 = () => interopDefault(import('..\\pages\\product\\_slug.vue' /* webpackChunkName: "pages/product/_slug" */))
const _575140a6 = () => interopDefault(import('..\\pages\\search\\_str.vue' /* webpackChunkName: "pages/search/_str" */))
const _3ce18562 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _7c513aec,
    name: "about"
  }, {
    path: "/blog",
    component: _3b74b92d,
    name: "blog"
  }, {
    path: "/cart",
    component: _2fc1db9a,
    name: "cart"
  }, {
    path: "/checkout",
    component: _3b54a84e,
    name: "checkout"
  }, {
    path: "/comments",
    component: _88c394f2,
    name: "comments"
  }, {
    path: "/compare",
    component: _ddfc2abc,
    name: "compare"
  }, {
    path: "/contact",
    component: _a7f48746,
    name: "contact"
  }, {
    path: "/login-register",
    component: _47ef134c,
    name: "login-register"
  }, {
    path: "/my-account",
    component: _116a47df,
    name: "my-account"
  }, {
    path: "/orders",
    component: _54915cb8,
    name: "orders"
  }, {
    path: "/privacy-policy",
    component: _c233ee2c,
    name: "privacy-policy"
  }, {
    path: "/shop",
    component: _59b2d1ee,
    name: "shop"
  }, {
    path: "/shop-list-standard",
    component: _378199c8,
    name: "shop-list-standard"
  }, {
    path: "/terms-conditions",
    component: _db58b35e,
    name: "terms-conditions"
  }, {
    path: "/wishlist",
    component: _7987bcd8,
    name: "wishlist"
  }, {
    path: "/blog/:slug",
    component: _39be17e5,
    name: "blog-slug"
  }, {
    path: "/product/:slug?",
    component: _b56657e4,
    name: "product-slug"
  }, {
    path: "/search/:str?",
    component: _575140a6,
    name: "search-str"
  }, {
    path: "/",
    component: _3ce18562,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
