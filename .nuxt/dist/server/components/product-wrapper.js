exports.ids = [43,7,8,51];
exports.modules = {

/***/ 52:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


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

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductGridItem.vue?vue&type=template&id=6cf4c6d8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"product-wrap mb-30"},[_vm._ssrNode("<div class=\"product-img\">","</div>",[_c('n-link',{attrs:{"to":("/product/" + (_vm.product.id))}},[_c('img',{staticClass:"default-img",attrs:{"src":'https://apidemo.madein-iran.com/public'+_vm.product.image,"alt":_vm.product.name}}),_vm._v(" "),_c('img',{staticClass:"hover-img",attrs:{"src":'https://apidemo.madein-iran.com/public'+_vm.product.image,"alt":_vm.product.name}})]),_vm._ssrNode(" <div class=\"product-badges\">"+((_vm.product.discount>0)?("<span class=\"product-label purple\">"+_vm._ssrEscape(_vm._s(_vm.product.discount)+"%")+"</span>"):"<!---->")+"</div> "),(_vm.layout === 'twoColumn' || _vm.layout === 'threeColumn')?_vm._ssrNode("<div class=\"product-action\">","</div>",[_vm._ssrNode("<div class=\"pro-same-action pro-wishlist\"><button title=\"لیست علاقمندیها\" class=\"btn\"><i"+(_vm._ssrClass(null,_vm.checkIsLiked === true ? 'fa fa-heart' : 'pe-7s-like'))+"></i></button></div> "),_vm._ssrNode("<div class=\"pro-same-action pro-cart\">","</div>",[(_vm.product.state)?_c('n-link',{staticClass:"btn",attrs:{"to":("/product/" + (_vm.product.id))}},[_vm._v("\n                        مشاهده جزئیات\n                    ")]):_c('button',{staticClass:"btn",attrs:{"title":"افزودن به سبد خرید"},on:{"click":function($event){return _vm.addToCart(_vm.product)}}},[_c('i',{staticClass:"pe-7s-cart"}),_vm._v("\n                       افزودن به سبد خرید\n                    ")])],1),_vm._ssrNode(" <div class=\"pro-same-action pro-quickview\"><button title=\"مشاهده سریع محصول\" class=\"btn\"><i class=\"pe-7s-look\"></i></button></div>")],2):_vm._e()],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"product-content text-center\">","</div>",[_vm._ssrNode("<h3>","</h3>",[_c('n-link',{attrs:{"to":("/product/" + (_vm.product.id))}},[_vm._v(_vm._s(_vm.product.name))])],1),_vm._ssrNode(" <div class=\"product-price\"></div> "),(_vm.layout === 'list')?_vm._ssrNode("<div class=\"product-content__list-view\">","</div>",[_vm._ssrNode("<p>"+(_vm._s(_vm.product.description_excerpt))+"</p> "),_vm._ssrNode("<div class=\"pro-action d-flex align-items-center\">","</div>",[_vm._ssrNode("<div class=\"pro-cart btn-hover\">","</div>",[(_vm.product.state)?_c('n-link',{staticClass:"btn",attrs:{"to":("/product/" + (_vm.product.id))}},[_vm._v("\n                            مشاهده جزئیات\n                        ")]):_c('button',{staticClass:"btn",attrs:{"title":"افزودن به سبد خرید"},on:{"click":function($event){return _vm.addToCart(_vm.product)}}},[_c('i',{staticClass:"pe-7s-cart"}),_vm._v("\n                            افزودن به سبد خرید\n                        ")])],1),_vm._ssrNode(" <div class=\"pro-wishlist\"><button><i"+(_vm._ssrClass(null,_vm.checkIsLiked === true ? 'fa fa-heart' : 'fa fa-heart-o'))+"></i></button></div>")],2)],2):_vm._e()],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/product/ProductGridItem.vue?vue&type=template&id=6cf4c6d8&

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

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductWrapper.vue?vue&type=template&id=01e8d6e5&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"product-area pb-90"},[_vm._ssrNode("<div class=\"container\">","</div>",[(_vm.isSectionTitle ? true : false)?_c('SectionTitleWithSubTitle',{attrs:{"title":"خطوط تولید","classes":"section-title"}}):_vm._e(),_vm._ssrNode(" <ul class=\"nav product-tab-list pt-30 pb-55 justify-content-center\"><li role=\"presentation\" class=\"nav-item\"><button data-bs-toggle=\"pill\" data-bs-target=\"#new-product\" role=\"tab\" class=\"nav-link active\">\n                  جدید ترین خطوط تولید</button></li></ul> "),_vm._ssrNode("<div class=\"tab-content\">","</div>",[_vm._ssrNode("<div id=\"new-product\" role=\"tabpanel\" class=\"tab-pane fade show active\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",_vm._l((_vm.latestProducts),function(product,index){return _vm._ssrNode("<div class=\"col-xl-3 col-lg-4 col-sm-6\">","</div>",[_c('ProductGridItem',{attrs:{"product":product,"layout":_vm.layout}})],1)}),0)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"view-more text-center mt-20 toggle-btn2\">","</div>",[_c('n-link',{staticClass:"loadMore2",attrs:{"to":"/shop"}},[_vm._v("مشاهده همه")])],1)],2)],2),_vm._ssrNode(" "),_c('QuickView')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/product/ProductWrapper.vue?vue&type=template&id=01e8d6e5&

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
//# sourceMappingURL=product-wrapper.js.map