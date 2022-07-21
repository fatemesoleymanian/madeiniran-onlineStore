exports.ids = [19,16,51];
exports.modules = {

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

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogItem.vue?vue&type=template&id=6b8fd9ba&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"blog-wrap mb-25"},[_vm._ssrNode("<div class=\"blog-img\">","</div>",[_c('n-link',{attrs:{"to":("/blog/" + (_vm.blog.id))}},[_c('img',{attrs:{"src":'https://apidemo.madein-iran.com/public'+_vm.blog.featuredImage,"alt":_vm.blog.title}})]),_vm._ssrNode(" <span>"+_vm._ssrEscape(_vm._s(_vm.blog.category.name))+"</span>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"blog-content-wrap\">","</div>",[_vm._ssrNode("<div class=\"blog-content text-center\">","</div>",[_vm._ssrNode("<h3>","</h3>",[_c('n-link',{attrs:{"to":("/blog/" + (_vm.blog.id))}},[_vm._v(_vm._s(_vm.blog.title))])],1),_vm._ssrNode(" <span>"+_vm._ssrEscape(_vm._s(_vm.blog.post_excerpt.substring(0,55))+"...")+"</span>")],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BlogItem.vue?vue&type=template&id=6b8fd9ba&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BlogItemvue_type_script_lang_js_ = ({props:["blog"],methods:{}});
// CONCATENATED MODULE: ./components/BlogItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BlogItemvue_type_script_lang_js_ = (BlogItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BlogItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BlogItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "45c0334c"
  
)

/* harmony default export */ var BlogItem = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogWrapper.vue?vue&type=template&id=201ab51e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"blog-area pb-55"},[_vm._ssrNode("<div class=\"container\">","</div>",[_c('SectionTitleWithSubTitle',{attrs:{"title":"مجله ساخت ایران","classes":"section-title mb-55"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._l((_vm.blogs),function(blog,index){return _vm._ssrNode("<div class=\"col-lg-4 col-sm-6\">","</div>",[_c('BlogItem',{attrs:{"blog":blog}})],1)}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"view-more text-center mt-20 toggle-btn2\">","</div>",[_c('n-link',{staticClass:"loadMore2",attrs:{"to":"/blog"}},[_vm._v("مشاهده همه")])],1)],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BlogWrapper.vue?vue&type=template&id=201ab51e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogWrapper.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BlogWrappervue_type_script_lang_js_ = ({components:{BlogItem:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 64))},data(){return{blogs:[]};},async mounted(){const blog=await this.$axios.get('/blogs-random');this.blogs=blog.data;}});
// CONCATENATED MODULE: ./components/BlogWrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BlogWrappervue_type_script_lang_js_ = (BlogWrappervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BlogWrapper.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BlogWrappervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2bcf591c"
  
)

/* harmony default export */ var BlogWrapper = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SectionTitleWithSubTitle: __webpack_require__(58).default,BlogItem: __webpack_require__(64).default})


/***/ })

};;
//# sourceMappingURL=blog-wrapper.js.map