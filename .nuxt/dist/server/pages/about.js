exports.ids = [57,3,10,20,27,53,54,55,56];
exports.modules = {

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=template&id=768e92a8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"about-page-wrapper"},[_c('HeaderWithTopbar',{attrs:{"containerClass":"container"}}),_vm._ssrNode(" "),_c('Breadcrumb',{attrs:{"pageTitle":"درباره ما"}}),_vm._ssrNode(" "),_c('WelcomeMessage',{staticClass:"pt-100 pb-95"}),_vm._ssrNode(" "),_c('ServicePolicy'),_vm._ssrNode(" "),_c('AboutMission'),_vm._ssrNode(" "),_c('TeamMembers'),_vm._ssrNode(" "),_c('TestimonialOne'),_vm._ssrNode(" "),_c('TheFooter')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/about.vue?vue&type=template&id=768e92a8&

// EXTERNAL MODULE: ./components/TestimonialOne.vue + 4 modules
var TestimonialOne = __webpack_require__(67);

// EXTERNAL MODULE: ./components/policy/ServicePolicy.vue + 4 modules
var ServicePolicy = __webpack_require__(85);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var aboutvue_type_script_lang_js_ = ({components:{ServicePolicy: ServicePolicy["default"],TestimonialOne: TestimonialOne["default"],HeaderWithTopbar:()=>__webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 60)),Breadcrumb:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 56)),WelcomeMessage:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 68)),AboutMission:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 86)),TeamMembers:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 87)),BrandLogoCarousel:()=>__webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 92)),TheFooter:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 53))},data(){return{items:[]};},async mounted(){await this.$axios.get('departments').then(res=>{this.items=res.data;});},head(){return{title:"درباره ما"};}});
// CONCATENATED MODULE: ./pages/about.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_aboutvue_type_script_lang_js_ = (aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/about.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "36550458"
  
)

/* harmony default export */ var about = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderWithTopbar: __webpack_require__(57).default,Breadcrumb: __webpack_require__(56).default,WelcomeMessage: __webpack_require__(68).default,AboutMission: __webpack_require__(86).default,TeamMembers: __webpack_require__(87).default,TestimonialOne: __webpack_require__(67).default,TheFooter: __webpack_require__(53).default})


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

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Breadcrumb.vue?vue&type=template&id=19f8267a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"breadcrumb-area pt-35 pb-35 bg-gray-3"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"breadcrumb-content text-center\">","</div>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/"}},[_vm._v("خانه")])],1),_vm._ssrNode(" <li class=\"active\">"+_vm._ssrEscape(_vm._s(_vm.pageTitle))+"</li>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Breadcrumb.vue?vue&type=template&id=19f8267a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Breadcrumb.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Breadcrumbvue_type_script_lang_js_ = ({props:["pageTitle"]});
// CONCATENATED MODULE: ./components/Breadcrumb.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Breadcrumbvue_type_script_lang_js_ = (Breadcrumbvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Breadcrumb.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Breadcrumbvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "24a16a48"
  
)

/* harmony default export */ var Breadcrumb = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderWithTopbar.vue?vue&type=template&id=424ba1dc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<header class=\"header-area\">","</header>",[_vm._ssrNode("<div class=\"header-top-area header-padding-2 d-none d-lg-block\"><div"+(_vm._ssrClass(null,_vm.containerClass))+"><div class=\"header-top-inner\"><div class=\"language-currency-wrap\"><div class=\"same-language-currency language-style\"><select name=\"language\"><option value=\"english\">English</option> <option value=\"hindi\">Hindi</option> <option value=\"spanish\">Spanish</option></select></div> <div class=\"same-language-currency use-style\"><select name=\"currency\"><option value=\"usd\">USD</option> <option value=\"eur\">EUR</option> <option value=\"rup\">Rup</option></select></div> <div class=\"same-language-currency\"><p>Call: <a href=\"callto:3965410\">3965410</a></p></div></div> <div class=\"header-offer\"><p>Free delivery on order over <span>$200</span></p></div></div></div></div> "),_vm._ssrNode("<div"+(_vm._ssrClass("header-padding-1 sticky-bar header-res-padding clearfix",{'is-sticky': _vm.isSticky}))+">","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.containerClass))+">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-2 col-md-6 col-4\">","</div>",[_vm._ssrNode("<div class=\"logo\">","</div>",[_c('n-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/img/logo/logo.png","alt":"flone logo"}})])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-8 d-none d-lg-block\">","</div>",[_vm._ssrNode("<div class=\"main-menu\">","</div>",[_vm._ssrNode("<nav>","</nav>",[_c('Navigation')],1)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-2 col-md-6 col-8\">","</div>",[_vm._ssrNode("<div class=\"header-right-wrap\">","</div>",[_vm._ssrNode("<div class=\"same-style header-search d-none d-lg-block\"><button class=\"search-active\"><i class=\"pe-7s-search\"></i></button> <div"+(_vm._ssrClass("search-content",{ active:_vm.isOpenSearch }))+"><form><input type=\"text\" placeholder=\"Search\"> <button class=\"button-search\"><i class=\"pe-7s-search\"></i></button></form></div></div> "),_vm._ssrNode("<div class=\"same-style account-setting d-none d-lg-block\">","</div>",[_vm._ssrNode("<button class=\"account-setting-active\"><i class=\"pe-7s-user-female\"></i></button> "),_vm._ssrNode("<div"+(_vm._ssrClass("account-dropdown",{ active:_vm.isOpenAccountSettings }))+">","</div>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/login-register"}},[_vm._v("Login")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/login-register"}},[_vm._v("Register")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/my-account"}},[_vm._v("my account")])],1)],2)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"same-style header-compare\">","</div>",[_c('n-link',{attrs:{"to":"/compare"}},[_c('i',{staticClass:"pe-7s-shuffle"})]),_vm._ssrNode(" <span class=\"count-style\">"+_vm._ssrEscape(_vm._s(_vm.compareItemCount))+"</span>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"same-style header-wishlist\">","</div>",[_c('n-link',{attrs:{"to":"/wishlist"}},[_c('i',{staticClass:"pe-7s-like"})]),_vm._ssrNode(" <span class=\"count-style\">"+_vm._ssrEscape(_vm._s(_vm.wishlistItemCount))+"</span>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"same-style cart-wrap\">","</div>",[_vm._ssrNode("<button class=\"icon-cart\"><i class=\"pe-7s-shopbag\"></i> <span class=\"count-style\">"+_vm._ssrEscape(_vm._s(_vm.cartItemCount))+"</span></button> "),_c('MiniCart',{attrs:{"miniCart":{ visible:_vm.openCart }},on:{"minicartClose":function($event){_vm.openCart = !_vm.openCart}}})],2),_vm._ssrNode(" <div class=\"same-style mobile-menu-toggler d-block d-lg-none\"><button class=\"mobile-aside-button\"><i class=\"pe-7s-menu\"></i></button></div>")],2)])],2)])])],2),_vm._ssrNode(" "),(_vm.navOpen)?_c('OffCanvasMobileMenu',{class:{'show-mobile-menu' : _vm.navOpen},on:{"toggleAsideMenu":function($event){_vm.navOpen = !_vm.navOpen}}}):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/HeaderWithTopbar.vue?vue&type=template&id=424ba1dc&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderWithTopbar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var HeaderWithTopbarvue_type_script_lang_js_ = ({components:{Navigation:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 21)),MiniCart:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 19))},props:['containerClass'],computed:{cartItemCount(){return this.$store.getters.cartItemCount;},wishlistItemCount(){return this.$store.getters.wishlistItemCount;},compareItemCount(){return this.$store.getters.compareItemCount;}},data(){return{isSticky:false,isOpenSearch:false,isOpenAccountSettings:false,openCart:false,navOpen:false};},mounted(){window.addEventListener('scroll',()=>{let scroll=window.scrollY;if(scroll>=200){this.isSticky=true;}else{this.isSticky=false;}});}});
// CONCATENATED MODULE: ./components/HeaderWithTopbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HeaderWithTopbarvue_type_script_lang_js_ = (HeaderWithTopbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/HeaderWithTopbar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HeaderWithTopbarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e8194214"
  
)

/* harmony default export */ var HeaderWithTopbar = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navigation: __webpack_require__(21).default,MiniCart: __webpack_require__(19).default,OffCanvasMobileMenu: __webpack_require__(20).default})


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TestimonialOne.vue?vue&type=template&id=979bd2ca&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"testimonial-area pb-95 pt-95"},[_vm._ssrNode("<div class=\"container pb-30\">","</div>",[_vm._ssrNode("<h4 class=\"text-center\">نظرات مشتریان</h4> "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-10 ms-auto me-auto\">","</div>",[_c('swiper',{attrs:{"options":_vm.testimonialOption}},_vm._l((_vm.testimonialData),function(testimonial,index){return _c('div',{key:index,staticClass:"swiper-slide single-testimonial text-center"},[_c('p',[_vm._v(_vm._s(testimonial.desc))]),_vm._v(" "),_c('div',{staticClass:"client-info"},[_c('i',{staticClass:"fa fa-map-signs"}),_vm._v(" "),_c('h5',[_vm._v(_vm._s(testimonial.name))]),_vm._v(" "),_c('span',[_vm._v(_vm._s(testimonial.position))])])])}),0)],1)])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TestimonialOne.vue?vue&type=template&id=979bd2ca&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TestimonialOne.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TestimonialOnevue_type_script_lang_js_ = ({data(){return{testimonialOption:{loop:true,speed:950,autoplay:true},testimonialData:[]};},async mounted(){const testimonial=await this.$axios.get('/testimonial');this.testimonialData=testimonial.data;}});
// CONCATENATED MODULE: ./components/TestimonialOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TestimonialOnevue_type_script_lang_js_ = (TestimonialOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TestimonialOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TestimonialOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "8bf519e8"
  
)

/* harmony default export */ var TestimonialOne = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WelcomeMessage.vue?vue&type=template&id=165a79f6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"welcome-area"},[_vm._ssrNode("<div class=\"container\"><div class=\"welcome-content text-center\"><h5>"+_vm._ssrEscape(_vm._s(_vm.subTitle))+"</h5> <h1>"+_vm._ssrEscape(_vm._s(_vm.title))+"</h1> <p>"+_vm._ssrEscape(_vm._s(_vm.desc))+"</p></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/WelcomeMessage.vue?vue&type=template&id=165a79f6&

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
/* harmony default export */ var WelcomeMessagevue_type_script_lang_js_ = ({data(){return{title:"به فروشگاه خط تولید ساخت ایران خوش آمدید!",subTitle:"ما چه کسانی هستیم",desc:""};}});
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

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/about.9d5cbb1.png";

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/policy/ServicePolicy.vue?vue&type=template&id=e0691a18&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"support-area pt-100 pb-90"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row mtn-30 \">","</div>",[_vm._ssrNode("<div class=\"col-6 mt-30\">","</div>",[_vm._ssrNode("<div class=\"support-wrap support-1\">","</div>",[_vm._ssrNode("<div class=\"support-content\">","</div>",[_vm._ssrNode("<h3 class=\"p-3\">درباره شرکت ساخت ایران</h3> <p style=\"font-size: 1.1em;\">\n                        شرکت ساخت ایران با هدف راه‌اندازی کسب و کار از نوع تولیدی در ظرفیت‌های تولیدی خانگی، کارگاهی و کارخانه تاسیس شده‌است. طی 3 سال گذشته این شرکت توانسته امکانات و شرایط لازم انواع خطوط تولید با حداقل سرمایه و بالاترین بازدهی را برای علاقه‌مندان فراهم کند.\n                        <br>\n                        شروع رسمی فعالیت ساخت ایران در دو بخش خواهد بود:\n                        <b>اول</b> اگر شما ایده‌ای دارید و برای اجرای آن نیاز به شرکت و تیم ساخت ایران دارید. <b>دوم</b> ایده‌هایی که در حال حاضر برای سال جاری توسط شرکت ساخت ایران تدوین و برنامه‌ریزی شده‌است، که از ایده‌ی اولیه تا ساخت ماشین‌آلات و سپس تامین مواد اولیه و در نهایت بازاریابی و برندینگ کالاهای نهایی، همراه شما خواهند بود.\n                        <br>\n                        شما نیز اگر ایده‌ی تولیدی در ذهنتان دارید و برای اجرای آن نیاز به تیم متخصص دارید یا اگر ایده‌ای ندارید ولی تمایل به راه‌اندازی واحد تولیدی خودتان را دارید فرم پایین این صفحه را پر کنید.\n                      </p> "),_vm._ssrNode("<h5 class=\"p-4 d-flex float-start\">","</h5>",[_c('router-link',{attrs:{"to":"/about"}},[_vm._v("مطالعه بیشتر...")])],1)],2)])]),_vm._ssrNode(" <div class=\"col-6 text-center \"><div class=\" text-center\"><div class=\"support-icon\"><img"+(_vm._ssrAttr("src",__webpack_require__(72)))+" alt=\"about-us\" class=\"animated\"></div></div></div>")],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/policy/ServicePolicy.vue?vue&type=template&id=e0691a18&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/policy/ServicePolicy.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ServicePolicyvue_type_script_lang_js_ = ({data(){return{};}});
// CONCATENATED MODULE: ./components/policy/ServicePolicy.vue?vue&type=script&lang=js&
 /* harmony default export */ var policy_ServicePolicyvue_type_script_lang_js_ = (ServicePolicyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/policy/ServicePolicy.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  policy_ServicePolicyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0de33be2"
  
)

/* harmony default export */ var ServicePolicy = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AboutMission.vue?vue&type=template&id=52ba894b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"about-mission-area pb-70"},[_vm._ssrNode("<div class=\"container\"><div class=\"row\">"+(_vm._ssrList((_vm.items),function(item,index){return ("<div class=\"col-md-4\"><div class=\"single-mission mb-30\"><h3>"+_vm._ssrEscape(_vm._s(item.title))+"</h3> <p>"+_vm._ssrEscape(_vm._s(item.desc))+"</p></div></div>")}))+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AboutMission.vue?vue&type=template&id=52ba894b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AboutMission.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var AboutMissionvue_type_script_lang_js_ = ({data(){return{items:[{id:1,title:"چشم انداز ها",desc:"Flone provide how all this mistaken idea of denounc pleasure and sing pain was born an will give you a ete account of the system, and expound the actual teangs the eat explorer of the truth."},{id:2,title:"ماموریت ها",desc:"Flone provide how all this mistaken idea of denounc pleasure and sing pain was born an will give you a ete account of the system, and expound the actual teangs the eat explorer of the truth."},{id:3,title:"ارزش ها",desc:"Flone provide how all this mistaken idea of denounc pleasure and sing pain was born an will give you a ete account of the system, and expound the actual teangs the eat explorer of the truth."}]};}});
// CONCATENATED MODULE: ./components/AboutMission.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AboutMissionvue_type_script_lang_js_ = (AboutMissionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AboutMission.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AboutMissionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "90601b78"
  
)

/* harmony default export */ var AboutMission = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TeamMembers.vue?vue&type=template&id=1d29ee32&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"team-area pt-95 pb-70"},[_vm._ssrNode("<div class=\"container\"><div class=\"section-title-2 text-center mb-60\"><h2>دپارتمان ها</h2></div> <div class=\"row\">"+(_vm._ssrList((_vm.teamMemberData),function(member,index){return ("<div class=\"col-lg-3 col-sm-6\"><div class=\"team-wrapper mb-30\"><div class=\"team-img\"><img"+(_vm._ssrAttr("src",'https://apidemo.madein-iran.com/public'+member.iconImage))+(_vm._ssrAttr("alt",member.name))+"></div> <div class=\"team-content text-center\"><h4>"+_vm._ssrEscape(_vm._s(member.name))+"</h4></div></div></div>")}))+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TeamMembers.vue?vue&type=template&id=1d29ee32&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TeamMembers.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TeamMembersvue_type_script_lang_js_ = ({data(){return{teamMemberData:[]};},async created(){let p=await this.$axios.get('/departments');this.teamMemberData=p.data;console.log(p);}});
// CONCATENATED MODULE: ./components/TeamMembers.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TeamMembersvue_type_script_lang_js_ = (TeamMembersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TeamMembers.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TeamMembersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4fbf6507"
  
)

/* harmony default export */ var TeamMembers = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=about.js.map