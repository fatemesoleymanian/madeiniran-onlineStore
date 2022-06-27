exports.ids = [57,10,20,27,53,54,55,56];
exports.modules = {

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=template&id=61631c8a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"about-page-wrapper"},[_c('HeaderWithTopbar',{attrs:{"containerClass":"container"}}),_vm._ssrNode(" "),_c('Breadcrumb',{attrs:{"pageTitle":"درباره ما"}}),_vm._ssrNode(" "),_c('WelcomeMessage',{staticClass:"pt-100 pb-95"}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"support-area pb-90\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row mtn-30 \">","</div>",[_vm._ssrNode("<div class=\"col-6 mt-30\">","</div>",[_vm._ssrNode("<div class=\"support-wrap support-1\">","</div>",[_vm._ssrNode("<div class=\"support-content\">","</div>",[_vm._ssrNode("<h5>TITLE</h5> "),_vm._ssrNode("<p>","</p>",[_c('router-link',{attrs:{"to":"/about"}},[_vm._v("LINK")])],1)],2)])]),_vm._ssrNode(" <div class=\"col-6 text-center \"><div class=\"support-wrap support-1\"><div class=\"support-icon\"><img width=\"500\" height=\"100\""+(_vm._ssrAttr("src",__webpack_require__(72)))+" alt=\"about-us\" class=\"animated w-100\"></div></div></div>")],2)])]),_vm._ssrNode(" "),_c('AboutMission'),_vm._ssrNode(" <h2 class=\"text-center p-5\">دپارتمان ها</h2> "),_c('TestimonialOne'),_vm._ssrNode(" "),_c('TeamMembers'),_vm._ssrNode(" "),_c('TheFooter')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/about.vue?vue&type=template&id=61631c8a&

// EXTERNAL MODULE: ./components/TestimonialOne.vue + 4 modules
var TestimonialOne = __webpack_require__(67);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var aboutvue_type_script_lang_js_ = ({components:{TestimonialOne: TestimonialOne["default"],HeaderWithTopbar:()=>__webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 60)),Breadcrumb:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 56)),WelcomeMessage:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 68)),AboutMission:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 85)),TeamMembers:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 86)),BrandLogoCarousel:()=>__webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 91)),TheFooter:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 53))},data(){return{items:[]};},async mounted(){await this.$axios.get('departments').then(res=>{this.items=res.data;});},head(){return{title:"درباره ما"};}});
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
installComponents(component, {HeaderWithTopbar: __webpack_require__(57).default,Breadcrumb: __webpack_require__(56).default,WelcomeMessage: __webpack_require__(68).default,AboutMission: __webpack_require__(85).default,TestimonialOne: __webpack_require__(67).default,TeamMembers: __webpack_require__(86).default,TheFooter: __webpack_require__(53).default})


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

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TestimonialOne.vue?vue&type=template&id=76182304&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"testimonial-area pb-95"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h4 class=\"text-center\">نظرات مشتریان</h4> "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-10 ms-auto me-auto\">","</div>",[_c('swiper',{attrs:{"options":_vm.testimonialOption}},_vm._l((_vm.testimonialData),function(testimonial,index){return _c('div',{key:index,staticClass:"swiper-slide single-testimonial text-center"},[_c('p',[_vm._v(_vm._s(testimonial.desc))]),_vm._v(" "),_c('div',{staticClass:"client-info"},[_c('i',{staticClass:"fa fa-map-signs"}),_vm._v(" "),_c('h5',[_vm._v(_vm._s(testimonial.name))]),_vm._v(" "),_c('span',[_vm._v(_vm._s(testimonial.position))])])])}),0)],1)])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TestimonialOne.vue?vue&type=template&id=76182304&

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

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cosmetics-slider-2.1d6604b.jpg";

/***/ }),

/***/ 85:
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

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TeamMembers.vue?vue&type=template&id=36dd5e68&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"team-area pt-95 pb-70"},[_vm._ssrNode("<div class=\"container\"><div class=\"section-title-2 text-center mb-60\"><h2>Team Members</h2> <p>There are few team members for our company</p></div> <div class=\"row\">"+(_vm._ssrList((_vm.teamMemberData),function(member,index){return ("<div class=\"col-lg-3 col-sm-6\"><div class=\"team-wrapper mb-30\"><div class=\"team-img\"><img"+(_vm._ssrAttr("src",member.imgSrc))+(_vm._ssrAttr("alt",member.name))+"> <div class=\"team-action\">"+(_vm._ssrList((member.socialLink),function(social,index){return ("<a"+(_vm._ssrAttr("href",social.url))+"><i"+(_vm._ssrClass(null,social.icon))+"></i></a>")}))+"</div></div> <div class=\"team-content text-center\"><h4>"+_vm._ssrEscape(_vm._s(member.name))+"</h4> <span>"+_vm._ssrEscape(_vm._s(member.designation))+"</span></div></div></div>")}))+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TeamMembers.vue?vue&type=template&id=36dd5e68&

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
//
/* harmony default export */ var TeamMembersvue_type_script_lang_js_ = ({data(){return{teamMemberData:[{imgSrc:"/img/team/team-1.jpg",name:"Stephen Fleming",designation:"Manager",socialLink:[{url:"https://www.facebook.com/",icon:"fa fa-facebook"},{url:"https://twitter.com/",icon:"fa fa-twitter"},{url:"https://www.instagram.com/",icon:"fa fa-instagram"}]},{imgSrc:"/img/team/team-2.jpg",name:"Jonti Rodes",designation:"Marketing Manager",socialLink:[{url:"https://www.facebook.com/",icon:"fa fa-facebook"},{url:"https://twitter.com/",icon:"fa fa-twitter"},{url:"https://www.instagram.com/",icon:"fa fa-instagram"}]},{imgSrc:"/img/team/team-3.jpg",name:"Robart Carlos",designation:"Chief Designer",socialLink:[{url:"https://www.facebook.com/",icon:"fa fa-facebook"},{url:"https://twitter.com/",icon:"fa fa-twitter"},{url:"https://www.instagram.com/",icon:"fa fa-instagram"}]},{imgSrc:"/img/team/team-4.jpg",name:"Shan Williams",designation:"Engineer",socialLink:[{url:"https://www.facebook.com/",icon:"fa fa-facebook"},{url:"https://twitter.com/",icon:"fa fa-twitter"},{url:"https://www.instagram.com/",icon:"fa fa-instagram"}]}]};}});
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