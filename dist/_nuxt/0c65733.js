(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{394:function(t,n,e){"use strict";e.r(n);e(10),e(26),e(27);var c={components:{Navigation:function(){return Promise.resolve().then(e.bind(null,212))},MiniCart:function(){return Promise.resolve().then(e.bind(null,210))}},computed:{cartItemCount:function(){return this.$store.getters.cartItemCount},wishlistItemCount:function(){return this.$store.getters.wishlistItemCount},compareItemCount:function(){return this.$store.getters.compareItemCount}},data:function(){return{isSticky:!1,isOpenSearch:!1,isOpenAccountSettings:!1,openCart:!1,navOpen:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var n=window.scrollY;t.isSticky=n>=200}))}},o=e(12),component=Object(o.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("header",{staticClass:"header-area sticky-bar header-padding-3 header-res-padding header-ptb-hm5 transparent-bar header-hm-6",class:{"is-sticky":t.isSticky}},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4 col-3"},[e("div",{staticClass:"clickable-menu"},[e("button",{on:{click:function(n){t.navOpen=!t.navOpen}}},[e("i",{staticClass:"pe-7s-menu"})])])]),t._v(" "),e("div",{staticClass:"col-md-4 d-none d-md-block"},[e("div",{staticClass:"logo text-center logo-hm5"},[e("n-link",{staticClass:"sticky-none",attrs:{to:"/"}},[e("img",{attrs:{src:"/img/logo/logo-2.png",alt:"brand logo"}})]),t._v(" "),e("n-link",{staticClass:"sticky-block",attrs:{to:"/"}},[e("img",{attrs:{src:"/img/logo/logo.png",alt:"brand logo"}})])],1)]),t._v(" "),e("div",{staticClass:"col-md-4 col-9"},[e("div",{staticClass:"header-right-wrap header-right-wrap-white"},[e("div",{staticClass:"same-style header-search d-none d-lg-block"},[e("button",{staticClass:"search-active",on:{click:function(n){t.isOpenSearch=!t.isOpenSearch}}},[e("i",{staticClass:"pe-7s-search"})]),t._v(" "),e("div",{staticClass:"search-content",class:{active:t.isOpenSearch}},[t._m(0)])]),t._v(" "),e("div",{staticClass:"same-style account-setting d-none d-lg-block"},[e("button",{staticClass:"account-setting-active",on:{click:function(n){t.isOpenAccountSettings=!t.isOpenAccountSettings}}},[e("i",{staticClass:"pe-7s-user-female"})]),t._v(" "),e("div",{staticClass:"account-dropdown",class:{active:t.isOpenAccountSettings}},[e("ul",[e("li",[e("n-link",{attrs:{to:"/login-register"}},[t._v("Login")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/login-register"}},[t._v("Register")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/my-account"}},[t._v("my account")])],1)])])]),t._v(" "),e("div",{staticClass:"same-style header-compare"},[e("n-link",{attrs:{to:"/compare"}},[e("i",{staticClass:"pe-7s-shuffle"})]),t._v(" "),e("span",{staticClass:"count-style"},[t._v(t._s(t.compareItemCount))])],1),t._v(" "),e("div",{staticClass:"same-style header-wishlist"},[e("n-link",{attrs:{to:"/wishlist"}},[e("i",{staticClass:"pe-7s-like"})]),t._v(" "),e("span",{staticClass:"count-style"},[t._v(t._s(t.wishlistItemCount))])],1),t._v(" "),e("div",{staticClass:"same-style cart-wrap"},[e("button",{staticClass:"icon-cart",on:{click:function(n){t.openCart=!t.openCart}}},[e("i",{staticClass:"pe-7s-shopbag"}),t._v(" "),e("span",{staticClass:"count-style"},[t._v(t._s(t.cartItemCount))])]),t._v(" "),e("MiniCart",{attrs:{miniCart:{visible:t.openCart}},on:{minicartClose:function(n){t.openCart=!t.openCart}}})],1)])])])])]),t._v(" "),t.navOpen?e("OffCanvasMobileMenu",{class:{"show-mobile-menu":t.navOpen},on:{toggleAsideMenu:function(n){t.navOpen=!t.navOpen}}}):t._e()],1)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("form",[e("input",{attrs:{type:"text",placeholder:"Search"}}),t._v(" "),e("button",{staticClass:"button-search"},[e("i",{staticClass:"pe-7s-search"})])])}],!1,null,null,null);n.default=component.exports;installComponents(component,{MiniCart:e(210).default,OffCanvasMobileMenu:e(211).default})}}]);