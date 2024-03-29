import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7c513aec = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _561c5bbc = () => interopDefault(import('..\\pages\\campaign-one.vue' /* webpackChunkName: "pages/campaign-one" */))
const _6d8d53d6 = () => interopDefault(import('..\\pages\\catalog.vue' /* webpackChunkName: "pages/catalog" */))
const _88c394f2 = () => interopDefault(import('..\\pages\\comments.vue' /* webpackChunkName: "pages/comments" */))
const _a7f48746 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _b45d414a = () => interopDefault(import('..\\pages\\delsey-packages.vue' /* webpackChunkName: "pages/delsey-packages" */))
const _47ef134c = () => interopDefault(import('..\\pages\\login-register.vue' /* webpackChunkName: "pages/login-register" */))
const _116a47df = () => interopDefault(import('..\\pages\\my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _12ddfdfe = () => interopDefault(import('..\\pages\\production-lines.vue' /* webpackChunkName: "pages/production-lines" */))
const _07d1740a = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages/search" */))
const _db58b35e = () => interopDefault(import('..\\pages\\terms-conditions.vue' /* webpackChunkName: "pages/terms-conditions" */))
const _cc716d52 = () => interopDefault(import('..\\pages\\tutorial-gate.vue' /* webpackChunkName: "pages/tutorial-gate" */))
const _28195c64 = () => interopDefault(import('..\\pages\\tutorial-videos.vue' /* webpackChunkName: "pages/tutorial-videos" */))
const _7987bcd8 = () => interopDefault(import('..\\pages\\wishlist.vue' /* webpackChunkName: "pages/wishlist" */))
const _b56657e4 = () => interopDefault(import('..\\pages\\product\\_slug.vue' /* webpackChunkName: "pages/product/_slug" */))
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
    path: "/campaign-one",
    component: _561c5bbc,
    name: "campaign-one"
  }, {
    path: "/catalog",
    component: _6d8d53d6,
    name: "catalog"
  }, {
    path: "/comments",
    component: _88c394f2,
    name: "comments"
  }, {
    path: "/contact",
    component: _a7f48746,
    name: "contact"
  }, {
    path: "/delsey-packages",
    component: _b45d414a,
    name: "delsey-packages"
  }, {
    path: "/login-register",
    component: _47ef134c,
    name: "login-register"
  }, {
    path: "/my-account",
    component: _116a47df,
    name: "my-account"
  }, {
    path: "/production-lines",
    component: _12ddfdfe,
    name: "production-lines"
  }, {
    path: "/search",
    component: _07d1740a,
    name: "search"
  }, {
    path: "/terms-conditions",
    component: _db58b35e,
    name: "terms-conditions"
  }, {
    path: "/tutorial-gate",
    component: _cc716d52,
    name: "tutorial-gate"
  }, {
    path: "/tutorial-videos",
    component: _28195c64,
    name: "tutorial-videos"
  }, {
    path: "/wishlist",
    component: _7987bcd8,
    name: "wishlist"
  }, {
    path: "/product/:slug?",
    component: _b56657e4,
    name: "product-slug"
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
