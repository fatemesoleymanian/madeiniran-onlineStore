exports.ids = [0];
exports.modules = {

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TheHeader.vue?vue&type=template&id=660d1a83&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<header"+(_vm._ssrClass("header-area header-padding-1 sticky-bar header-res-padding clearfix",{'is-sticky': _vm.isSticky}))+">","</header>",[_vm._ssrNode("<div class=\"container-fluid\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-2 col-md-6 col-4\">","</div>",[_vm._ssrNode("<div class=\"logo\">","</div>",[_c('n-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/img/logo/logo.png","alt":"logo","height":"50px"}})])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-8 d-none d-lg-block\">","</div>",[_vm._ssrNode("<div class=\"main-menu\">","</div>",[_vm._ssrNode("<nav>","</nav>",[_c('Navigation')],1)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-2 col-md-6 col-8\">","</div>",[_vm._ssrNode("<div class=\"header-right-wrap\">","</div>",[_vm._ssrNode("<div class=\"same-style header-search d-none d-lg-block\"><button class=\"search-active\"><i class=\"pe-7s-search\"></i></button> <div"+(_vm._ssrClass("search-content",{ active:_vm.isOpenSearch }))+"><form><div><input type=\"text\" placeholder=\"جستجو ...\""+(_vm._ssrAttr("value",(_vm.srch)))+"> <button class=\"button-search\"><i class=\"pe-7s-search\"></i></button></div></form> <ul id=\"srch-sugg\""+(_vm._ssrClass(null,_vm.active ? ' suggestions clearfix active' : 'suggestions clearfix'))+">"+(_vm._ssrList((_vm.results),function(r,i){return (((_vm.results.length)?("<li class=\"py-2\">"+_vm._ssrEscape("\n                    "+_vm._s(r)+"\n                  ")+"</li>"):"<!---->"))}))+"</ul></div></div> "),_vm._ssrNode("<div class=\"same-style account-setting\">","</div>",[_vm._ssrNode("<button class=\"account-setting-active\"><i class=\"pe-7s-user-female\"></i></button> "),_vm._ssrNode("<div"+(_vm._ssrClass("account-dropdown",{ active:_vm.isOpenAccountSettings }))+">","</div>",[_vm._ssrNode("<ul>","</ul>",[(!_vm.auth)?_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/login-register"}},[_vm._v("ورود | ثبت نام")])],1):_vm._e(),_vm._ssrNode(" "),(_vm.auth)?_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/my-account"}},[_vm._v("پروفایل من")])],1):_vm._e(),_vm._ssrNode(" "),(_vm.auth)?_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/orders"}},[_vm._v("سفارش های من")])],1):_vm._e(),_vm._ssrNode(" "),(_vm.auth)?_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/comments"}},[_vm._v("دیدگاه های من")])],1):_vm._e(),_vm._ssrNode(" "+((_vm.auth)?("<li><a href=\"#\">\n                    خروج از حساب </a></li>"):"<!---->"))],2)])],2),_vm._ssrNode(" "),(_vm.auth)?_vm._ssrNode("<div class=\"same-style header-wishlist  d-none d-lg-block\">","</div>",[_c('n-link',{attrs:{"to":"/wishlist"}},[_c('i',{staticClass:"pe-7s-like"})]),_vm._ssrNode(" <span class=\"count-style\">"+_vm._ssrEscape(_vm._s(_vm.wishlistItemCount))+"</span>")],2):_vm._e(),_vm._ssrNode(" "),(_vm.auth)?_vm._ssrNode("<div class=\"same-style cart-wrap\">","</div>",[_vm._ssrNode("<button class=\"icon-cart\"><i class=\"pe-7s-shopbag\"></i> <span class=\"count-style\">"+_vm._ssrEscape(_vm._s(_vm.cartItemCount))+"</span></button> "),_c('MiniCart',{attrs:{"miniCart":{ visible:_vm.openCart }},on:{"minicartClose":function($event){_vm.openCart = !_vm.openCart}}})],2):_vm._e(),_vm._ssrNode(" <div class=\"same-style mobile-menu-toggler d-block d-lg-none\"><button class=\"mobile-aside-button\"><i class=\"pe-7s-menu\"></i></button></div>")],2)])],2)])]),_vm._ssrNode(" "),(_vm.navOpen)?_c('OffCanvasMobileMenu',{class:{'show-mobile-menu' : _vm.navOpen},on:{"toggleAsideMenu":function($event){_vm.navOpen = !_vm.navOpen}}}):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TheHeader.vue?vue&type=template&id=660d1a83&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TheHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TheHeadervue_type_script_lang_js_ = ({components:{Navigation:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 21)),MiniCart:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 19))},computed:{cartItemCount(){return this.$store.getters.cartItemCount;},wishlistItemCount(){return this.$store.getters.wishlistItemCount;},compareItemCount(){return this.$store.getters.compareItemCount;}},data(){return{isSticky:false,isOpenSearch:false,isOpenAccountSettings:false,openCart:false,navOpen:false,auth:false,srch:'',allSuggestions:[],backupSuggestions:[],active:false,results:[]};},mounted(){window.addEventListener('scroll',()=>{let scroll=window.scrollY;if(scroll>=200){this.isSticky=true;}else{this.isSticky=false;}});if(localStorage.getItem('116111107101110')){this.auth=true;}console.log('header');},methods:{async logout(){this.$axios.setToken(localStorage.getItem('116111107101110'),'Bearer');const logout=await this.$axios.post('logout');localStorage.removeItem('116111107101110');localStorage.removeItem('117115101114');localStorage.removeItem('099097114100');localStorage.removeItem('key');this.$axios.setToken(false);window.location='/';},async search(){if(this.srch){window.location=`/search/${this.srch}`;}},suggestion(){if(this.srch){this.active=true;this.results=this.allSuggestions.filter(name=>name.includes(this.srch));}else{this.active=false;}},async getSugges(){const suggestion=await this.$axios.get('/products_search_suggestion');for(let i in suggestion.data.products){this.allSuggestions.push(suggestion.data.products[i].name);}for(let i in suggestion.data.blogs){this.allSuggestions.push(suggestion.data.blogs[i].title);}for(let i in suggestion.data.tags){this.allSuggestions.push(suggestion.data.tags[i].name);}this.backupSuggestions=this.allSuggestions;}}});
// CONCATENATED MODULE: ./components/TheHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TheHeadervue_type_script_lang_js_ = (TheHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TheHeader.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TheHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4a4f6f29"
  
)

/* harmony default export */ var TheHeader = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navigation: __webpack_require__(21).default,MiniCart: __webpack_require__(19).default,OffCanvasMobileMenu: __webpack_require__(20).default})


/***/ })

};;
//# sourceMappingURL=the-header.js.map