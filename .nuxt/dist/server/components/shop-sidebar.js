exports.ids = [52];
exports.modules = {

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ShopSidebar.vue?vue&type=template&id=52185dc5&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sidebar-style",class:_vm.classes},[_vm._ssrNode("<div class=\"sidebar-widget\"></div> "),_vm._ssrNode("<div class=\"sidebar-widget\">","</div>",[_vm._ssrNode("<h4 class=\"pro-sidebar-title\">دسته بندی ها</h4> "),_vm._ssrNode("<ul class=\"sidebar-widget-list mt-20\">","</ul>",[_vm._ssrNode("<li class=\"sidebar-widget-list-left\">","</li>",[_c('n-link',{attrs:{"to":"?category=all"}},[_c('span',{staticClass:"check-mark"}),_vm._v("\n                  همه\n                ")])],1),_vm._ssrNode(" "),_vm._l((_vm.categoryList),function(category,index){return _vm._ssrNode("<li class=\"sidebar-widget-list-left\">","</li>",[_c('n-link',{attrs:{"to":("?category=" + (category.id))}},[_c('span',{staticClass:"check-mark"}),_vm._v("\n                        "+_vm._s(category.name)+"\n                    ")])],1)})],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sidebar-widget mt-50\">","</div>",[_vm._ssrNode("<h4 class=\"pro-sidebar-title\">ظرفیت ها</h4> "),_vm._ssrNode("<ul class=\"sidebar-widget-list mt-20\">","</ul>",[_vm._ssrNode("<li class=\"sidebar-widget-list-left\">","</li>",[_c('n-link',{attrs:{"to":"?state=all"}},[_c('span',{staticClass:"check-mark"}),_vm._v("\n              همه\n                ")])],1),_vm._ssrNode(" "),_vm._l((_vm.stateList),function(state,index){return _vm._ssrNode("<li class=\"sidebar-widget-list-left\">","</li>",[_c('n-link',{attrs:{"to":("?state=" + state)}},[_c('span',{staticClass:"check-mark"}),_vm._v("\n                        "+_vm._s(state)+"\n                    ")])],1)})],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sidebar-widget sidebar-widget__tag mt-60\">","</div>",[_vm._ssrNode("<h4 class=\"pro-sidebar-title\">تگ ها</h4> "),_vm._ssrNode("<div class=\"sidebar-widget-tag mt-30\">","</div>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"?tag=all"}},[_vm._v("\n                      همه\n                    ")])],1),_vm._ssrNode(" "),_vm._l((_vm.tagList),function(tag,index){return _vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":("?tag=" + (tag.id))}},[_vm._v("\n                            "+_vm._s(tag.name)+"\n                        ")])],1)})],2)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ShopSidebar.vue?vue&type=template&id=52185dc5&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ShopSidebar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ShopSidebarvue_type_script_lang_js_ = ({props:["classes"],data(){return{// str:''
};},computed:{categoryList(){return this.$store.getters.categoryList;},stateList(){return this.$store.getters.stateList;},tagList(){return this.$store.getters.tagList;}},methods:{// async search(e)
//  {
//    e.preventDefault();
//    if(this.str)
//    {
//      const result = await this.$axios.get(`just_products_search/${this.str}`);
//      this.$store.dispatch('setProduct', result.data.products);
//    }
//
//  },
}});
// CONCATENATED MODULE: ./components/ShopSidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ShopSidebarvue_type_script_lang_js_ = (ShopSidebarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ShopSidebar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ShopSidebarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "51b70b91"
  
)

/* harmony default export */ var ShopSidebar = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=shop-sidebar.js.map