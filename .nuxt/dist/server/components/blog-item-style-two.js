exports.ids = [17];
exports.modules = {

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogItemStyleTwo.vue?vue&type=template&id=07163b16&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"blog-wrap-2 mb-30"},[_vm._ssrNode("<div class=\"blog-img-2\">","</div>",[_c('n-link',{attrs:{"to":("/blog/" + (_vm.blog.id))}},[_c('img',{attrs:{"src":'https://apidemo.madein-iran.com/public'+_vm.blog.featuredImage,"alt":_vm.blog.title}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"blog-content-2\">","</div>",[_vm._ssrNode("<div class=\"blog-meta-2\"><ul><li>"+_vm._ssrEscape(_vm._s(_vm.blog.updated_at))+"</li></ul></div> "),_vm._ssrNode("<h4>","</h4>",[_c('n-link',{attrs:{"to":("/blog/" + (_vm.blog.id))}},[_vm._v(_vm._s(_vm.blog.title))])],1),_vm._ssrNode(" <p>"+_vm._ssrEscape(_vm._s(_vm.blog.post_excerpt))+"</p> "),_vm._ssrNode("<div class=\"blog-share-comment\">","</div>",[_vm._ssrNode("<div class=\"blog-btn-2\">","</div>",[_c('n-link',{attrs:{"to":("/blog/" + (_vm.blog.id))}},[_vm._v("بیشتر ...")])],1),_vm._ssrNode(" <div class=\"blog-share\"><div class=\"share-social\"><ul><li><a class=\"twitter\"><i aria-hidden=\"true\" class=\"fa fa-share\"></i></a></li></ul></div></div>")],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BlogItemStyleTwo.vue?vue&type=template&id=07163b16&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogItemStyleTwo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BlogItemStyleTwovue_type_script_lang_js_ = ({props:["blog"],methods:{slugify(text){return text.toString().toLowerCase().replace(/\s+/g,"-")// Replace spaces with -
.replace(/[^\w-]+/g,"")// Remove all non-word chars
.replace(/--+/g,"-")// Replace multiple - with single -
.replace(/^-+/,"")// Trim - from start of text
.replace(/-+$/,"");// Trim - from end of text
},copyToClipboard(){navigator.clipboard.writeText(`https://madein-iran/blog/${this.blog.id}.com`).then(()=>{this.$notify({type:'success',title:'لینک بلاگ کپی شد!'});}).catch(()=>{this.$notify({type:'error',title:'خطا در کپی لینک بلاگ!'});});}}});
// CONCATENATED MODULE: ./components/BlogItemStyleTwo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BlogItemStyleTwovue_type_script_lang_js_ = (BlogItemStyleTwovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BlogItemStyleTwo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BlogItemStyleTwovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "37121456"
  
)

/* harmony default export */ var BlogItemStyleTwo = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=blog-item-style-two.js.map