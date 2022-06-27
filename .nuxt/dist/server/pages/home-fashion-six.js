exports.ids = [69,7,8,26,33,35,37,43,51,55,56];
exports.modules = {

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderOffcanvasMenuWithTransparent.vue?vue&type=template&id=a10e06f8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<header"+(_vm._ssrClass("header-area sticky-bar header-padding-3 header-res-padding header-ptb-hm5 transparent-bar header-hm-6",{'is-sticky': _vm.isSticky}))+">","</header>",[_vm._ssrNode("<div class=\"container-fluid\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-4 col-3\"><div class=\"clickable-menu\"><button><i class=\"pe-7s-menu\"></i></button></div></div> "),_vm._ssrNode("<div class=\"col-md-4 d-none d-md-block\">","</div>",[_vm._ssrNode("<div class=\"logo text-center logo-hm5\">","</div>",[_c('n-link',{staticClass:"sticky-none",attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/img/logo/logo-2.png","alt":"brand logo"}})]),_vm._ssrNode(" "),_c('n-link',{staticClass:"sticky-block",attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/img/logo/logo.png","alt":"brand logo"}})])],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-4 col-9\">","</div>",[_vm._ssrNode("<div class=\"header-right-wrap header-right-wrap-white\">","</div>",[_vm._ssrNode("<div class=\"same-style header-search d-none d-lg-block\"><button class=\"search-active\"><i class=\"pe-7s-search\"></i></button> <div"+(_vm._ssrClass("search-content",{ active:_vm.isOpenSearch }))+"><form><input type=\"text\" placeholder=\"Search\"> <button class=\"button-search\"><i class=\"pe-7s-search\"></i></button></form></div></div> "),_vm._ssrNode("<div class=\"same-style account-setting d-none d-lg-block\">","</div>",[_vm._ssrNode("<button class=\"account-setting-active\"><i class=\"pe-7s-user-female\"></i></button> "),_vm._ssrNode("<div"+(_vm._ssrClass("account-dropdown",{ active:_vm.isOpenAccountSettings }))+">","</div>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/login-register"}},[_vm._v("Login")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/login-register"}},[_vm._v("Register")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/my-account"}},[_vm._v("my account")])],1)],2)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"same-style header-compare\">","</div>",[_c('n-link',{attrs:{"to":"/compare"}},[_c('i',{staticClass:"pe-7s-shuffle"})]),_vm._ssrNode(" <span class=\"count-style\">"+_vm._ssrEscape(_vm._s(_vm.compareItemCount))+"</span>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"same-style header-wishlist\">","</div>",[_c('n-link',{attrs:{"to":"/wishlist"}},[_c('i',{staticClass:"pe-7s-like"})]),_vm._ssrNode(" <span class=\"count-style\">"+_vm._ssrEscape(_vm._s(_vm.wishlistItemCount))+"</span>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"same-style cart-wrap\">","</div>",[_vm._ssrNode("<button class=\"icon-cart\"><i class=\"pe-7s-shopbag\"></i> <span class=\"count-style\">"+_vm._ssrEscape(_vm._s(_vm.cartItemCount))+"</span></button> "),_c('MiniCart',{attrs:{"miniCart":{ visible:_vm.openCart }},on:{"minicartClose":function($event){_vm.openCart = !_vm.openCart}}})],2)],2)])],2)])]),_vm._ssrNode(" "),(_vm.navOpen)?_c('OffCanvasMobileMenu',{class:{'show-mobile-menu' : _vm.navOpen},on:{"toggleAsideMenu":function($event){_vm.navOpen = !_vm.navOpen}}}):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/HeaderOffcanvasMenuWithTransparent.vue?vue&type=template&id=a10e06f8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderOffcanvasMenuWithTransparent.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var HeaderOffcanvasMenuWithTransparentvue_type_script_lang_js_ = ({components:{Navigation:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 21)),MiniCart:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 19))},computed:{cartItemCount(){return this.$store.getters.cartItemCount;},wishlistItemCount(){return this.$store.getters.wishlistItemCount;},compareItemCount(){return this.$store.getters.compareItemCount;}},data(){return{isSticky:false,isOpenSearch:false,isOpenAccountSettings:false,openCart:false,navOpen:false};},mounted(){window.addEventListener('scroll',()=>{let scroll=window.scrollY;if(scroll>=200){this.isSticky=true;}else{this.isSticky=false;}});}});
// CONCATENATED MODULE: ./components/HeaderOffcanvasMenuWithTransparent.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HeaderOffcanvasMenuWithTransparentvue_type_script_lang_js_ = (HeaderOffcanvasMenuWithTransparentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/HeaderOffcanvasMenuWithTransparent.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HeaderOffcanvasMenuWithTransparentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c9825a90"
  
)

/* harmony default export */ var HeaderOffcanvasMenuWithTransparent = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MiniCart: __webpack_require__(19).default,OffCanvasMobileMenu: __webpack_require__(20).default})


/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/hero/HeroSliderSix.vue?vue&type=template&id=0f12e036&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"slider-area nav-style-1 nav-style-3"},[_c('swiper',{attrs:{"options":_vm.swiperOption}},[_vm._l((_vm.sliderData),function(slider,index){return _c('swiper-slide',{key:index,staticClass:"slider-height-5 d-flex align-items-center bg-img",style:({ backgroundImage:("url(" + (slider.backgroundImage) + ")") })},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"slider-content-4 slider-content-6 slider-animation-1 text-center"},[_c('h1',[_vm._v(_vm._s(slider.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(slider.desc))]),_vm._v(" "),_c('div',{staticClass:"slider-btn btn-hover"},[_c('n-link',{attrs:{"to":"/shop"}},[_vm._v("SHOP NOW")])],1)])])])])])}),_vm._v(" "),_c('div',{staticClass:"hero-slider-nav swiper-button-prev"},[_c('i',{staticClass:"pe-7s-angle-left"})]),_vm._v(" "),_c('div',{staticClass:"hero-slider-nav swiper-button-next"},[_c('i',{staticClass:"pe-7s-angle-right"})])],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/hero/HeroSliderSix.vue?vue&type=template&id=0f12e036&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/hero/HeroSliderSix.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var HeroSliderSixvue_type_script_lang_js_ = ({data(){return{swiperOption:{loop:true,speed:750,autoplay:{delay:6000},effect:"fade",fadeEffect:{crossFade:true},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'}},sliderData:[{title:"Welcome to Flone",desc:"30% off Winter Vacation",backgroundImage:"/img/slider/slider-6-1.jpg"},{title:"Welcome to Flone",desc:"40% off Winter Vacation",backgroundImage:"/img/slider/slider-6-2.jpg"}]};}});
// CONCATENATED MODULE: ./components/hero/HeroSliderSix.vue?vue&type=script&lang=js&
 /* harmony default export */ var hero_HeroSliderSixvue_type_script_lang_js_ = (HeroSliderSixvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/hero/HeroSliderSix.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  hero_HeroSliderSixvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2c61850a"
  
)

/* harmony default export */ var HeroSliderSix = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/InstagramPostWrapper.vue?vue&type=template&id=2686db4b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"instagram-area"},[_c('swiper',{attrs:{"options":_vm.instagramOptions}},_vm._l((_vm.instagramData),function(instagram,index){return _c('div',{key:index,staticClass:"swiper-slide single-instagram"},[_c('n-link',{attrs:{"to":"/shop"}},[_c('img',{attrs:{"src":instagram.imgSrc,"alt":"instagram image"}})])],1)}),0)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/InstagramPostWrapper.vue?vue&type=template&id=2686db4b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/InstagramPostWrapper.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var InstagramPostWrappervue_type_script_lang_js_ = ({data(){return{instagramOptions:{loop:true,speed:1000,breakpoints:{360:{slidesPerView:3},768:{slidesPerView:4},992:{slidesPerView:5}}},instagramData:[{id:1,imgSrc:"/img/instagram/instagram-1.jpg"},{id:2,imgSrc:"/img/instagram/instagram-2.jpg"},{id:3,imgSrc:"/img/instagram/instagram-3.jpg"},{id:4,imgSrc:"/img/instagram/instagram-4.jpg"},{id:5,imgSrc:"/img/instagram/instagram-5.jpg"}]};}});
// CONCATENATED MODULE: ./components/InstagramPostWrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_InstagramPostWrappervue_type_script_lang_js_ = (InstagramPostWrappervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/InstagramPostWrapper.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_InstagramPostWrappervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "aa3cb874"
  
)

/* harmony default export */ var InstagramPostWrapper = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home-fashion-six.vue?vue&type=template&id=56daedc8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fashion-six-wrapper"},[_c('HeaderOffcanvasMenuWithTransparent'),_vm._ssrNode(" "),_c('HeroSliderSix'),_vm._ssrNode(" "),_c('WelcomeMessage',{staticClass:"pt-95 pb-60"}),_vm._ssrNode(" "),_c('ProductWrapper'),_vm._ssrNode(" "),_c('NewsletterStyleOne'),_vm._ssrNode(" "),_c('InstagramPostWrapper'),_vm._ssrNode(" "),_c('TheFooter')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home-fashion-six.vue?vue&type=template&id=56daedc8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home-fashion-six.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var home_fashion_sixvue_type_script_lang_js_ = ({components:{HeaderOffcanvasMenuWithTransparent:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 102)),HeroSliderSix:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 103)),WelcomeMessage:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 68)),ProductWrapper:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 71)),NewsletterStyleOne:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 65)),InstagramPostWrapper:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 104)),TheFooter:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 53))},head(){return{title:'Home Fashion Six'};}});
// CONCATENATED MODULE: ./pages/home-fashion-six.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_home_fashion_sixvue_type_script_lang_js_ = (home_fashion_sixvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/home-fashion-six.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_home_fashion_sixvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7ae29630"
  
)

/* harmony default export */ var home_fashion_six = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderOffcanvasMenuWithTransparent: __webpack_require__(102).default,HeroSliderSix: __webpack_require__(103).default,WelcomeMessage: __webpack_require__(68).default,ProductWrapper: __webpack_require__(71).default,NewsletterStyleOne: __webpack_require__(65).default,InstagramPostWrapper: __webpack_require__(104).default,TheFooter: __webpack_require__(53).default})


/***/ }),

/***/ 52:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TheFooter.vue?vue&type=template&id=31d34c9a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"footer-area bg-gray pt-100 pb-70"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-3 col-sm-4\">","</div>",[_vm._ssrNode("<div class=\"copyright mb-30\">","</div>",[_vm._ssrNode("<div class=\"footer-logo\">","</div>",[_c('n-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"width":"250","height":"100","src":"/img/logo/logo.png","alt":"logo"}})])],1),_vm._ssrNode(" <p class=\"pt-5\">© 2022 <a href=\"#\" target=\"_blank\">ساخت ایران</a>.<br> All Rights Reserved</p>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-3 col-sm-4\">","</div>",[_vm._ssrNode("<div class=\"footer-widget mb-30 ml-30\">","</div>",[_vm._ssrNode("<div class=\"footer-title\"><h3>درباره ما</h3></div> "),_vm._ssrNode("<div class=\"footer-list\">","</div>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/about"}},[_vm._v("درباره شرکت")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/shop"}},[_vm._v("موقعیت مکانی شرکت")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/contact"}},[_vm._v("ارتباط با ما")])],1)],2)])],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-3 col-sm-4\">","</div>",[_vm._ssrNode("<div class=\"footer-widget mb-30 ml-50\">","</div>",[_vm._ssrNode("<div class=\"footer-title\"><h3>صفحات کاربردی</h3></div> "),_vm._ssrNode("<div class=\"footer-list\">","</div>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/about"}},[_vm._v("بازگردانی وجه")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/about"}},[_vm._v("قوانین و مقررات")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/about"}},[_vm._v("حریم خصوصی")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/about"}},[_vm._v("پرسش های متداول")])],1)],2)])],2)]),_vm._ssrNode(" <div class=\"col-lg-3 col-sm-6\"><div class=\"footer-widget mb-30 ml-75\"><div class=\"footer-title\"><h3>شبکه های اجتماعی</h3></div> <div class=\"footer-list\"><ul><li><a href=\"https://www.facebook.com/\" target=\"_blank\">فیسبوک</a></li> <li><a href=\"https://twitter.com/\" target=\"_blank\">توییتر</a></li> <li><a href=\"https://www.instagram.com/\" target=\"_blank\">اینستاگرام</a></li> <li><a href=\"https://www.youtube.com/\" target=\"_blank\">یوتیوب</a></li></ul></div></div></div>")],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TheFooter.vue?vue&type=template&id=31d34c9a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TheFooter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TheFootervue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/TheFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TheFootervue_type_script_lang_js_ = (TheFootervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TheFooter.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TheFootervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "291d0b37"
  
)

/* harmony default export */ var TheFooter = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickView_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickView_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickView_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickView_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickView_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/QuickView.vue?vue&type=template&id=36445f6f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('client-only',[_c('modal',{attrs:{"name":"quickview","width":"50%","scrollable":true,"height":"auto"},on:{"before-open":_vm.beforeOpen}},[_c('div',{staticClass:"quickview-wrapper row"},[_c('div',{staticClass:"col-md-6"},[_c('div',{staticClass:"product-details-slider"},[_c('div',{staticClass:"product-details-img"},[_c('div',{staticClass:"product-badges"},[(_vm.product.discount>0)?_c('span',{staticClass:"product-label purple"},[_vm._v(_vm._s(_vm.product.discount)+"%")]):_vm._e()]),_vm._v(" "),_c('swiper',{attrs:{"options":_vm.swiperOptionTop}},[_c('div',{staticClass:"large-img swiper-slide"},[_c('img',{staticClass:"img-fluid",attrs:{"src":'https://apidemo.madein-iran.com/public'+_vm.product.image,"alt":_vm.product.name}})])])],1)])]),_vm._v(" "),_c('div',{staticClass:"col-md-6"},[_c('div',{staticClass:"product-details-content"},[_c('div',{attrs:{"slot":"top-right"},slot:"top-right"},[_c('button',{staticClass:"modal-close",on:{"click":function($event){return _vm.$modal.hide('quickview')}}},[_c('i',{staticClass:"fa fa-times"})])]),_vm._v(" "),_c('h2',[_vm._v(_vm._s(_vm.product.name))]),_vm._v(" "),_c('div',{staticClass:"product-details-price"},[_c('span',[_vm._v(" "+_vm._s(_vm.discounted_price.replace(/\B(?=(\d{3})+(?!\d))/g, ','))+" تومان ")]),_vm._v(" "),(_vm.product.discount > 0)?_c('span',{staticClass:"old"},[_vm._v(_vm._s(_vm.pricee.replace(/\B(?=(\d{3})+(?!\d))/g, ','))+" تومان")]):_vm._e()]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.product.description_excerpt))]),_vm._v(" "),(_vm.product.state)?_c('div',{staticClass:"pro-details-size-color"},[_c('div',{staticClass:"pro-details-size-wrap"},[_c('h6',{staticClass:"label"},[_vm._v("ظرفیت ها")]),_vm._v(" "),_c('div',{staticClass:"pro-details-size-content"},_vm._l((_vm.product.state),function(item,index){return _c('label',{key:index,staticClass:"radio"},[_c('input',{attrs:{"type":"radio","name":"sizeGroup","checked":""},on:{"click":function($event){return _vm.priceByState(index)}}}),_vm._v(" "),_c('span',{staticClass:"check-mark"},[_vm._v(_vm._s(item.type))])])}),0)])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"pro-details-quality"},[_c('div',{staticClass:"cart-plus-minus"},[_c('button',{staticClass:"dec qtybutton",on:{"click":function($event){return _vm.decreaseQuantity()}}},[_vm._v("-")]),_vm._v(" "),_c('input',{staticClass:"cart-plus-minus-box",attrs:{"type":"text","readonly":""},domProps:{"value":_vm.singleQuantity}}),_vm._v(" "),_c('button',{staticClass:"inc qtybutton",on:{"click":function($event){return _vm.increaseQuantity()}}},[_vm._v("+")])]),_vm._v(" "),_c('div',{staticClass:"pro-details-cart btn-hover"},[_c('button',{on:{"click":function($event){return _vm.addToCart(_vm.product)}}},[_vm._v("افزودن به سبد خرید")])]),_vm._v(" "),_c('div',{staticClass:"pro-details-wishlist"},[_c('button',{on:{"click":function($event){return _vm.addToWishlist(_vm.product)}}},[_c('i',{class:_vm.checkIsLiked === true ? 'fa fa-heart' : 'fa fa-heart-o'})])])]),_vm._v(" "),_c('div',{staticClass:"pro-details-meta"},[_c('span',{staticClass:"label"},[_vm._v("دسته بندی :")]),_vm._v(" "),_c('ul',[_c('li',[_c('n-link',{attrs:{"to":"/shop?category="}},[_vm._v(_vm._s(_vm.category))])],1)])]),_vm._v(" "),_c('div',{staticClass:"pro-details-meta"},[_c('span',{staticClass:"label"},[_vm._v("تگ ها :")]),_vm._v(" "),_c('ul',_vm._l((_vm.product.tag),function(tag,index){return _c('li',{key:index},[_c('n-link',{attrs:{"to":("/shop?tag=" + tag)}},[_vm._v(_vm._s(tag.name)+",")])],1)}),0)])])])])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/QuickView.vue?vue&type=template&id=36445f6f&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/QuickView.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var QuickViewvue_type_script_lang_js_ = ({data(){return{item:'',singleQuantity:1,swiperOptionTop:{loop:true,slidesPerView:1,spaceBetween:10,effect:'fade',navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'}},category:'',states:[],pricee:'',discounted_price:'',state_id:'',indexOfState:''};},computed:{product(){this.states=this.$store.getters.getOneProductStates;this.category=this.$store.getters.getOneCategory;this.settingPrice();return this.item;},checkIsLiked(){if(this.$store.state.wishlist.find(el=>this.product.id===el.id))return true;else return false;}},methods:{beforeOpen({params:product}){this.item=product;},priceByState(index){this.indexOfState=index;this.settingPrice();},settingPrice(){for(let i in this.states){if(i==this.indexOfState){this.pricee=this.states[i].price;this.discounted_price=this.states[i].discounted_price;this.state_id=this.states[i].id;}}},async addToCart(product){if(!localStorage.getItem('116111107101110'))return window.location='/login-register';if(this.state_id==='')return this.$notify({title:'لطفا ظرفیت محصول را انتخاب کنید!'});const prod={...product,cartQuantity:this.singleQuantity};// for notification
if(this.$store.state.cart.find(el=>this.state_id===el.state_id)){this.$notify({title:'این محصول در سبد خرید شما وجود دارد!'});}else{const user=localStorage.getItem('117115101114');const userr=JSON.parse(user);const data={user_id:userr.id,product:product.id,state:this.state_id,count:this.singleQuantity};this.$axios.setToken(localStorage.getItem('116111107101110'),'Bearer');const card=await this.$axios.post(`/card`,data);this.$notify({type:'success',title:'محصول با موفقیت به سبد خرید افزوده شد!'});const newPro=await this.$axios.get(`/card_one_pro/${card.data.msg.id}`);this.$store.dispatch('addToCartItem',newPro.data.product[0]);}},discountedPrice(product){return product.price-product.price*product.discount/100;},increaseQuantity(){if(!localStorage.getItem('116111107101110'))return window.location='/login-register';if(this.product.inventory>=this.singleQuantity)this.singleQuantity++;},decreaseQuantity(){if(!localStorage.getItem('116111107101110'))return window.location='/login-register';if(this.singleQuantity>1)this.singleQuantity--;},async addToWishlist(product){if(!localStorage.getItem('116111107101110'))return window.location='/login-register';// for notification
const user=localStorage.getItem('117115101114');const userr=JSON.parse(user);const data={user:userr.id,product:product.id};this.$axios.setToken(localStorage.getItem('116111107101110'),'Bearer');if(this.$store.state.wishlist.find(el=>product.id===el.id)){const remove=await this.$axios.delete('/bookmark',{data});this.$store.dispatch('removeProductFromWishlist',product);this.$notify({title:'این محصول از لیست علاقمندیهای شما حذف شد!'});}else{const card=await this.$axios.post(`/bookmark`,data);this.$notify({title:'این محصول به لیست علاقمندیهای شما افزوده شد!'});this.$store.dispatch('addToWishlist',product);}}}});
// CONCATENATED MODULE: ./components/QuickView.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_QuickViewvue_type_script_lang_js_ = (QuickViewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/QuickView.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(54)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_QuickViewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "05d0c4fd"
  
)

/* harmony default export */ var QuickView = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SectionTitleWithSubTitle.vue?vue&type=template&id=1fb7f644&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"text-center",class:_vm.classes},[_vm._ssrNode("<h2>"+_vm._ssrEscape(_vm._s(_vm.title))+"</h2> <p>"+_vm._ssrEscape(_vm._s(_vm.subTitle))+"</p>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SectionTitleWithSubTitle.vue?vue&type=template&id=1fb7f644&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SectionTitleWithSubTitle.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var SectionTitleWithSubTitlevue_type_script_lang_js_ = ({props:['title','subTitle','classes']});
// CONCATENATED MODULE: ./components/SectionTitleWithSubTitle.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SectionTitleWithSubTitlevue_type_script_lang_js_ = (SectionTitleWithSubTitlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/SectionTitleWithSubTitle.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SectionTitleWithSubTitlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0eae7514"
  
)

/* harmony default export */ var SectionTitleWithSubTitle = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductGridItem.vue?vue&type=template&id=75bc124e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"product-wrap mb-30"},[_vm._ssrNode("<div class=\"product-img\">","</div>",[_c('n-link',{attrs:{"to":("/product/" + (_vm.product.id))}},[_c('img',{staticClass:"default-img",attrs:{"src":'https://apidemo.madein-iran.com/public'+_vm.product.image,"alt":_vm.product.name}}),_vm._v(" "),_c('img',{staticClass:"hover-img",attrs:{"src":'https://apidemo.madein-iran.com/public'+_vm.product.image,"alt":_vm.product.name}})]),_vm._ssrNode(" <div class=\"product-badges\">"+((_vm.product.discount>0)?("<span class=\"product-label purple\">"+_vm._ssrEscape(_vm._s(_vm.product.discount)+"%")+"</span>"):"<!---->")+"</div> "),(_vm.layout === 'twoColumn' || _vm.layout === 'threeColumn')?_vm._ssrNode("<div class=\"product-action\">","</div>",[_vm._ssrNode("<div class=\"pro-same-action pro-wishlist\"><button title=\"لیست علاقمندیها\" class=\"btn\"><i"+(_vm._ssrClass(null,_vm.checkIsLiked === true ? 'fa fa-heart' : 'pe-7s-like'))+"></i></button></div> "),_vm._ssrNode("<div class=\"pro-same-action pro-cart\">","</div>",[(_vm.product.state)?_c('n-link',{staticClass:"btn",attrs:{"to":("/product/" + (_vm.product.id))}},[_vm._v("\n                    مشاهده جزئیات\n                ")]):_c('button',{staticClass:"btn",attrs:{"title":"افزودن به سبد خرید"},on:{"click":function($event){return _vm.addToCart(_vm.product)}}},[_c('i',{staticClass:"pe-7s-cart"}),_vm._v("\n                   افزودن به سبد خرید\n                ")])],1),_vm._ssrNode(" <div class=\"pro-same-action pro-quickview\"><button title=\"مشاهده سریع محصول\" class=\"btn\"><i class=\"pe-7s-look\"></i></button></div>")],2):_vm._e()],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"product-content text-center\">","</div>",[_vm._ssrNode("<h3>","</h3>",[_c('n-link',{attrs:{"to":("/product/" + (_vm.product.id))}},[_vm._v(_vm._s(_vm.product.name))])],1),_vm._ssrNode(" <div class=\"product-price\"><span>"+_vm._ssrEscape(_vm._s(_vm.product.state[0].discounted_price.replace(/\B(?=(\d{3})+(?!\d))/g, ','))+" تومان ")+"</span>-\n            "+((_vm.product.discount > 0)?("<span class=\"old\">"+_vm._ssrEscape(_vm._s(_vm.product.state[0].price.replace(/\B(?=(\d{3})+(?!\d))/g, ','))+"تومان")+"</span>"):"<!---->")+"</div> "),(_vm.layout === 'list')?_vm._ssrNode("<div class=\"product-content__list-view\">","</div>",[_vm._ssrNode("<p>"+(_vm._s(_vm.product.description_excerpt))+"</p> "),_vm._ssrNode("<div class=\"pro-action d-flex align-items-center\">","</div>",[_vm._ssrNode("<div class=\"pro-cart btn-hover\">","</div>",[(_vm.product.state)?_c('n-link',{staticClass:"btn",attrs:{"to":("/product/" + (_vm.product.id))}},[_vm._v("\n                        مشاهده جزئیات\n                    ")]):_c('button',{staticClass:"btn",attrs:{"title":"افزودن به سبد خرید"},on:{"click":function($event){return _vm.addToCart(_vm.product)}}},[_c('i',{staticClass:"pe-7s-cart"}),_vm._v("\n                        افزودن به سبد خرید\n                    ")])],1),_vm._ssrNode(" <div class=\"pro-wishlist\"><button><i"+(_vm._ssrClass(null,_vm.checkIsLiked === true ? 'fa fa-heart' : 'fa fa-heart-o'))+"></i></button></div>")],2)],2):_vm._e()],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/product/ProductGridItem.vue?vue&type=template&id=75bc124e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductGridItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ProductGridItemvue_type_script_lang_js_ = ({props:["product","layout"],computed:{checkIsLiked(){if(this.$store.state.wishlist.find(el=>this.product.id===el.id))return true;else return false;}},methods:{addToCart(product){if(!localStorage.getItem('116111107101110'))return window.location='/login-register';const prod={...product,cartQuantity:1};// for notification
if(this.$store.state.cart.find(el=>product.id===el.id)){this.$notify({type:'error',title:'این محصول در سبد خرید شما وجود دارد!'});}else{this.$notify({type:'success',title:'به سبد خرید شما افزوده شد!'});}this.$store.dispatch('addToCartItem',prod);},discountedPrice(product){return product.price-product.price*product.discount/100;},async addToWishlist(product){if(!localStorage.getItem('116111107101110'))return window.location='/login-register';// for notification
const user=localStorage.getItem('117115101114');const userr=JSON.parse(user);const data={user:userr.id,product:product.id};this.$axios.setToken(localStorage.getItem('116111107101110'),'Bearer');if(this.$store.state.wishlist.find(el=>product.id===el.id)){const remove=await this.$axios.delete('/bookmark',{data});this.$store.dispatch('removeProductFromWishlist',product);this.$notify({type:'success',title:'این محصول از لیست علاقمندیهای شما حذف شد!'});}else{const card=await this.$axios.post(`/bookmark`,data);this.$notify({type:'success',title:'این محصول به لیست علاقمندیهای شما افزوده شد!'});this.$store.dispatch('addToWishlist',product);}},onClick(product){const category=product.category.name;const states=product.state;this.$store.dispatch('setOneCategoryProduct',category);this.$store.dispatch('setOneProductStates',states);this.$modal.show('quickview',product);}}});
// CONCATENATED MODULE: ./components/product/ProductGridItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_ProductGridItemvue_type_script_lang_js_ = (ProductGridItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/product/ProductGridItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductGridItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1947a1a6"
  
)

/* harmony default export */ var ProductGridItem = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NewsletterStyleOne.vue?vue&type=template&id=02bd7683&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"subscribe-area-3 pb-100"},[_vm._ssrNode("<div class=\"container-fluid\"><div class=\"row\"><div class=\"col-xl-5 col-lg-7 ms-auto me-auto\"><div class=\"subscribe-style-3 text-center\"><h2 style=\"font-size: 26pt\">فرم تقاضای خط تولید </h2> <p class=\"pb-5\">چنانچه به دنبال راه اندازی خط تولید خود هستید فرم زیر را پر کنید.</p> <div class=\"description-review-area py-4\"><div class=\"container\"><div class=\"description-review-wrapper\"><div class=\"description-review-topbar nav\"><a data-bs-toggle=\"tab\" href=\"#new-ideas\" style=\"font-size: 14pt\">ایده شخصی دارم</a> <a data-bs-toggle=\"tab\" href=\"#empty-ideas\" style=\"font-size: 14pt\">ایده ای ندارم</a></div> <div class=\"tab-content description-review-bottom\"><div id=\"new-ideas\" class=\"tab-pane \"><div class=\"row\"><div class=\"col-12\"><div id=\"form-new\" class=\"ratting-form-wrapper pl-50\"><div class=\"ratting-form py-3\"><form><div class=\"row  w-100\"><div class=\"col-md-12\"><div class=\"rating-form-style mb-10\"><input placeholder=\"نام و نام خانوادگی :\" type=\"text\""+(_vm._ssrAttr("value",(_vm.new_ideas.full_name)))+"></div></div> <div class=\"col-md-12 \"><div class=\"rating-form-style mb-10\"><input placeholder=\"شماره تماس :\" type=\"tel\""+(_vm._ssrAttr("value",(_vm.new_ideas.phone_number)))+"></div></div> <div class=\"col-md-12 \"><div class=\"rating-form-style form-submit\"><textarea name=\"Your Review\" placeholder=\"ایده مدنظر یا درخواست ایده تولیدی:\">"+_vm._ssrEscape(_vm._s(_vm.new_ideas.description))+"</textarea></div></div></div> <div class=\"row\"><div class=\"col-md-12 text-center\"><div class=\"rating-form-style form-submit py-3\"><input type=\"submit\" id=\"faq_form\""+(_vm._ssrAttr("disabled",_vm.new_ideas.saving))+(_vm._ssrAttr("value",_vm.new_ideas.saving ? 'در حال ارسال اطلاعات' : 'ارسال اطلاعات'))+" class=\"float-start\"></div></div></div></form></div></div></div></div></div> <div id=\"empty-ideas\" class=\"tab-pane\"><div class=\"row\"><div class=\"col-12\"><div id=\"form-empty\" class=\"ratting-form-wrapper pl-50\"><div class=\"ratting-form py-3\"><form><div class=\"row  w-100\"><div class=\"col-md-12\"><div class=\"rating-form-style mb-10\"><input placeholder=\"نام و نام خانوادگی :\" type=\"text\""+(_vm._ssrAttr("value",(_vm.empty_ideas.full_name)))+"></div></div> <div class=\"col-md-12 \"><div class=\"rating-form-style mb-10\"><input placeholder=\"شماره تماس :\" type=\"tel\""+(_vm._ssrAttr("value",(_vm.empty_ideas.phone_number)))+"></div></div></div> <div class=\"row\"><div class=\"col-md-12 text-center\"><div class=\"rating-form-style form-submit py-3\"><input type=\"submit\""+(_vm._ssrAttr("disabled",_vm.empty_ideas.saving))+(_vm._ssrAttr("value",_vm.empty_ideas.saving ? 'در حال ارسال اطلاعات' : 'ارسال اطلاعات'))+" class=\"float-start\"></div></div></div></form></div></div></div></div></div></div></div></div></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/NewsletterStyleOne.vue?vue&type=template&id=02bd7683&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NewsletterStyleOne.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var NewsletterStyleOnevue_type_script_lang_js_ = ({data(){return{new_ideas:{saving:false,full_name:'',phone_number:'',description:''},empty_ideas:{saving:false,full_name:'',phone_number:''}};},methods:{async saveWIthIdeas(e){e.preventDefault();if(this.new_ideas.full_name.trim()==='')return this.$notify({title:"خطا!",text:"لطفا نام و نام خانوادگی خود را وارد کنید.",type:'error'});if(this.new_ideas.phone_number==='')return this.$notify({title:"خطا!",text:"لطفا شماره تماس خود را وارد کنید.",type:'error'});if(this.new_ideas.description.trim()==='')return this.$notify({title:"خطا!",text:"لطفا ایده مدنظر خود را وارد کنید.",type:'error'});if(this.new_ideas.phone_number.length!==11)return this.$notify({title:"خطا!",text:"لطفا شماره تماس خود رابه درستی وارد کنید.",type:'error'});this.new_ideas.saving=true;const data={full_name:this.new_ideas.full_name,phone_number:this.new_ideas.phone_number,description:this.new_ideas.description};const idea=await this.$axios.post('/job_production_ideas',data).catch(()=>{this.new_ideas.saving=true;return this.$notify({title:"عملیات ناموفق!",text:"خطایی در ثبت اطلاعات رخ داد.",type:'error'});});this.new_ideas.saving=false;return this.$notify({title:"عملیات موفق!",text:"اطلاعات با موفقیت ثبت گردید، منتظر تماس ما باشید.",type:'success'});},async saveEmptyIdeas(e){e.preventDefault();if(this.empty_ideas.full_name.trim()==='')return this.$notify({title:"خطا!",text:"لطفا نام و نام خانوادگی خود را وارد کنید.",type:'error'});if(this.empty_ideas.phone_number==='')return this.$notify({title:"خطا!",text:"لطفا شماره تماس خود را وارد کنید.",type:'error'});if(this.empty_ideas.phone_number.length!==11)return this.$notify({title:"خطا!",text:"لطفا شماره تماس خود رابه درستی وارد کنید.",type:'error'});this.empty_ideas.saving=true;const data={full_name:this.empty_ideas.full_name,phone_number:this.empty_ideas.phone_number};const empty=await this.$axios.post('/job_production_empty',data).catch(()=>{this.empty_ideas.saving=true;return this.$notify({title:"عملیات ناموفق!",text:"خطایی در ثبت اطلاعات رخ داد.",type:'error'});});this.empty_ideas.saving=false;return this.$notify({title:"عملیات موفق!",text:"اطلاعات با موفقیت ثبت گردید، منتظر تماس ما باشید.",type:'success'});}}});
// CONCATENATED MODULE: ./components/NewsletterStyleOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_NewsletterStyleOnevue_type_script_lang_js_ = (NewsletterStyleOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/NewsletterStyleOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_NewsletterStyleOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "51466e93"
  
)

/* harmony default export */ var NewsletterStyleOne = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WelcomeMessage.vue?vue&type=template&id=16ba2eb4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"welcome-area"},[_vm._ssrNode("<div class=\"container\"><div class=\"welcome-content text-center\"><h5>"+_vm._ssrEscape(_vm._s(_vm.subTitle))+"</h5> <h1>"+_vm._ssrEscape(_vm._s(_vm.title))+"</h1> <p>"+_vm._ssrEscape(_vm._s(_vm.desc))+"</p></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/WelcomeMessage.vue?vue&type=template&id=16ba2eb4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WelcomeMessage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var WelcomeMessagevue_type_script_lang_js_ = ({data(){return{title:"به فروشگاه خط تولید ساخت ایران خوش آمدید!",subTitle:"ما چه کسانی هستیم",desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat irure"};}});
// CONCATENATED MODULE: ./components/WelcomeMessage.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_WelcomeMessagevue_type_script_lang_js_ = (WelcomeMessagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/WelcomeMessage.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_WelcomeMessagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5df895ec"
  
)

/* harmony default export */ var WelcomeMessage = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductWrapper.vue?vue&type=template&id=b57a76e4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"product-area pb-90"},[_vm._ssrNode("<div class=\"container\">","</div>",[(_vm.isSectionTitle ? true : false)?_c('SectionTitleWithSubTitle',{attrs:{"title":"خطوط تولید","classes":"section-title"}}):_vm._e(),_vm._ssrNode(" <ul class=\"nav product-tab-list pt-30 pb-55 justify-content-center\"><li role=\"presentation\" class=\"nav-item\"><button data-bs-toggle=\"pill\" data-bs-target=\"#new-product\" role=\"tab\" class=\"nav-link active\">جدید ترین محصولات</button></li></ul> "),_vm._ssrNode("<div class=\"tab-content\">","</div>",[_vm._ssrNode("<div id=\"new-product\" role=\"tabpanel\" class=\"tab-pane fade show active\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",_vm._l((_vm.latestProducts),function(product,index){return _vm._ssrNode("<div class=\"col-xl-3 col-lg-4 col-sm-6\">","</div>",[_c('ProductGridItem',{attrs:{"product":product,"layout":_vm.layout}})],1)}),0)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"view-more text-center mt-20 toggle-btn2\">","</div>",[_c('n-link',{staticClass:"loadMore2",attrs:{"to":"/shop"}},[_vm._v("مشاهده همه")])],1)],2)],2),_vm._ssrNode(" "),_c('QuickView')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/product/ProductWrapper.vue?vue&type=template&id=b57a76e4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductWrapper.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ProductWrappervue_type_script_lang_js_ = ({props:['isSectionTitle'],async mounted(){const products=await this.$axios.get('/products_random');this.latestProducts=products.data;},components:{ProductGridItem:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 59)),QuickView:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 55))},data(){return{layout:"twoColumn",latestProducts:[]};}});
// CONCATENATED MODULE: ./components/product/ProductWrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_ProductWrappervue_type_script_lang_js_ = (ProductWrappervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/product/ProductWrapper.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductWrappervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "795a72f6"
  
)

/* harmony default export */ var ProductWrapper = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SectionTitleWithSubTitle: __webpack_require__(58).default,ProductGridItem: __webpack_require__(59).default,QuickView: __webpack_require__(55).default})


/***/ })

};;
//# sourceMappingURL=home-fashion-six.js.map