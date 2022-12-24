import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7c513aec = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _3b74b92d = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _561c5bbc = () => interopDefault(import('..\\pages\\campaign-one.vue' /* webpackChunkName: "pages/campaign-one" */))
const _6d8d53d6 = () => interopDefault(import('..\\pages\\catalog.vue' /* webpackChunkName: "pages/catalog" */))
const _88c394f2 = () => interopDefault(import('..\\pages\\comments.vue' /* webpackChunkName: "pages/comments" */))
const _ddfc2abc = () => interopDefault(import('..\\pages\\compare.vue' /* webpackChunkName: "pages/compare" */))
const _a7f48746 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _b45d414a = () => interopDefault(import('..\\pages\\delsey-packages.vue' /* webpackChunkName: "pages/delsey-packages" */))
const _36c66e69 = () => interopDefault(import('..\\pages\\home-cosmetics.vue' /* webpackChunkName: "pages/home-cosmetics" */))
const _2270695c = () => interopDefault(import('..\\pages\\home-fashion-five.vue' /* webpackChunkName: "pages/home-fashion-five" */))
const _2b2f87c6 = () => interopDefault(import('..\\pages\\home-fashion-four.vue' /* webpackChunkName: "pages/home-fashion-four" */))
const _54e88bc6 = () => interopDefault(import('..\\pages\\home-fashion-seven.vue' /* webpackChunkName: "pages/home-fashion-seven" */))
const _1a81e272 = () => interopDefault(import('..\\pages\\home-fashion-six.vue' /* webpackChunkName: "pages/home-fashion-six" */))
const _654821a4 = () => interopDefault(import('..\\pages\\home-fashion-three.vue' /* webpackChunkName: "pages/home-fashion-three" */))
const _66cd22dc = () => interopDefault(import('..\\pages\\home-fashion-two.vue' /* webpackChunkName: "pages/home-fashion-two" */))
const _47ef134c = () => interopDefault(import('..\\pages\\login-register.vue' /* webpackChunkName: "pages/login-register" */))
const _116a47df = () => interopDefault(import('..\\pages\\my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _c233ee2c = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _59b2d1ee = () => interopDefault(import('..\\pages\\shop.vue' /* webpackChunkName: "pages/shop" */))
const _95362baa = () => interopDefault(import('..\\pages\\shop-grid-full-width.vue' /* webpackChunkName: "pages/shop-grid-full-width" */))
const _71bc3473 = () => interopDefault(import('..\\pages\\shop-grid-no-sidebar.vue' /* webpackChunkName: "pages/shop-grid-no-sidebar" */))
const _cde8a950 = () => interopDefault(import('..\\pages\\shop-grid-right-sidebar.vue' /* webpackChunkName: "pages/shop-grid-right-sidebar" */))
const _17f928cc = () => interopDefault(import('..\\pages\\shop-grid-two-column.vue' /* webpackChunkName: "pages/shop-grid-two-column" */))
const _105869d3 = () => interopDefault(import('..\\pages\\shop-list-full-width.vue' /* webpackChunkName: "pages/shop-list-full-width" */))
const _378199c8 = () => interopDefault(import('..\\pages\\shop-list-standard.vue' /* webpackChunkName: "pages/shop-list-standard" */))
const _db58b35e = () => interopDefault(import('..\\pages\\terms-conditions.vue' /* webpackChunkName: "pages/terms-conditions" */))
const _cc716d52 = () => interopDefault(import('..\\pages\\tutorial-gate.vue' /* webpackChunkName: "pages/tutorial-gate" */))
const _28195c64 = () => interopDefault(import('..\\pages\\tutorial-videos.vue' /* webpackChunkName: "pages/tutorial-videos" */))
const _7987bcd8 = () => interopDefault(import('..\\pages\\wishlist.vue' /* webpackChunkName: "pages/wishlist" */))
const _39be17e5 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
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
    path: "/blog",
    component: _3b74b92d,
    name: "blog"
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
    path: "/compare",
    component: _ddfc2abc,
    name: "compare"
  }, {
    path: "/contact",
    component: _a7f48746,
    name: "contact"
  }, {
    path: "/delsey-packages",
    component: _b45d414a,
    name: "delsey-packages"
  }, {
    path: "/home-cosmetics",
    component: _36c66e69,
    name: "home-cosmetics"
  }, {
    path: "/home-fashion-five",
    component: _2270695c,
    name: "home-fashion-five"
  }, {
    path: "/home-fashion-four",
    component: _2b2f87c6,
    name: "home-fashion-four"
  }, {
    path: "/home-fashion-seven",
    component: _54e88bc6,
    name: "home-fashion-seven"
  }, {
    path: "/home-fashion-six",
    component: _1a81e272,
    name: "home-fashion-six"
  }, {
    path: "/home-fashion-three",
    component: _654821a4,
    name: "home-fashion-three"
  }, {
    path: "/home-fashion-two",
    component: _66cd22dc,
    name: "home-fashion-two"
  }, {
    path: "/login-register",
    component: _47ef134c,
    name: "login-register"
  }, {
    path: "/my-account",
    component: _116a47df,
    name: "my-account"
  }, {
    path: "/privacy-policy",
    component: _c233ee2c,
    name: "privacy-policy"
  }, {
    path: "/shop",
    component: _59b2d1ee,
    name: "shop"
  }, {
    path: "/shop-grid-full-width",
    component: _95362baa,
    name: "shop-grid-full-width"
  }, {
    path: "/shop-grid-no-sidebar",
    component: _71bc3473,
    name: "shop-grid-no-sidebar"
  }, {
    path: "/shop-grid-right-sidebar",
    component: _cde8a950,
    name: "shop-grid-right-sidebar"
  }, {
    path: "/shop-grid-two-column",
    component: _17f928cc,
    name: "shop-grid-two-column"
  }, {
    path: "/shop-list-full-width",
    component: _105869d3,
    name: "shop-list-full-width"
  }, {
    path: "/shop-list-standard",
    component: _378199c8,
    name: "shop-list-standard"
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
    path: "/blog/:slug",
    component: _39be17e5,
    name: "blog-slug"
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
