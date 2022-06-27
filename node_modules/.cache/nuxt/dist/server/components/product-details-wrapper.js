exports.ids = [40];
exports.modules = {

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductDetailsWrapper.vue?vue&type=template&id=695f98b6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"shop-area pt-100 pb-100"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-6\">","</div>",[_vm._ssrNode("<div class=\"product-details-slider\">","</div>",[_vm._ssrNode("<div class=\"product-details-img\">","</div>",[_vm._ssrNode("<div class=\"product-badges\">"+((_vm.product.discount> 0)?("<span class=\"product-label purple\">"+_vm._ssrEscape(_vm._s(_vm.product.discount)+"%")+"</span>"):"<!---->")+"</div> "),_c('swiper',{ref:"swiperTop",attrs:{"options":_vm.swiperOptionTop}},[_c('div',{staticClass:"large-img swiper-slide"},[_c('img',{staticClass:"img-fluid",attrs:{"src":'https://apidemo.madein-iran.com/public'+_vm.product.image,"alt":_vm.product.name}})])])],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-6 col-md-6\">","</div>",[_vm._ssrNode("<div class=\"product-details-content ml-70\">","</div>",[_vm._ssrNode("<h2>"+_vm._ssrEscape(_vm._s(_vm.product.name))+"</h2> <div class=\"product-details-price\"><span>"+_vm._ssrEscape("  "+_vm._s(_vm.discounted_price.replace(/\B(?=(\d{3})+(?!\d))/g, ','))+" تومان  ")+"</span> "+((_vm.product.discount > 0)?("<span class=\"old\">"+_vm._ssrEscape(_vm._s(_vm.pricee.replace(/\B(?=(\d{3})+(?!\d))/g, ','))+" تومان")+"</span>"):"<!---->")+"</div> <div class=\"pro-details-rating-wrap\"></div> <div class=\"p\">"+(_vm._s(_vm.product.description_excerpt))+"</div> "+((_vm.product.state)?("<div class=\"pro-details-size-color\"><div class=\"pro-details-size-wrap\"><h6 class=\"label\">ظرفیت ها :</h6> <div class=\"pro-details-size-content\">"+(_vm._ssrList((_vm.product.state),function(item,index){return ("<label class=\"radio\"><input type=\"radio\" name=\"sizeGroup\" checked=\"checked\"> <span class=\"check-mark\">"+_vm._ssrEscape(_vm._s(item.type))+"</span></label>")}))+"</div></div></div>"):"<!---->")+" <div class=\"pro-details-quality\"><div class=\"cart-plus-minus\"><button class=\"dec qtybutton\">-</button> <input type=\"text\" readonly=\"readonly\""+(_vm._ssrAttr("value",_vm.singleQuantity))+" class=\"cart-plus-minus-box\"> <button class=\"inc qtybutton\">+</button></div> <div class=\"pro-details-cart btn-hover\"><button>افزودن به سبد خرید</button></div> <div class=\"pro-details-wishlist\"><button title=\"لیست علاقمندیها\"><i"+(_vm._ssrClass(null,_vm.checkIsLiked === true ? 'fa fa-heart' : 'fa fa-heart-o'))+"></i></button></div></div> "),_vm._ssrNode("<div class=\"pro-details-meta\">","</div>",[_vm._ssrNode("<span class=\"label\">دسته بندی :</span> "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/shop?category="}},[_vm._v(_vm._s(_vm.category))])],1)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"pro-details-meta\">","</div>",[_vm._ssrNode("<span class=\"label\">تگ ها :</span> "),_vm._ssrNode("<ul>","</ul>",_vm._l((_vm.product.tag),function(tag,index){return _vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/shop?tag="}},[_vm._v(_vm._s(tag.name)+",")])],1)}),0)],2)],2)])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/product/ProductDetailsWrapper.vue?vue&type=template&id=695f98b6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductDetailsWrapper.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ProductDetailsWrappervue_type_script_lang_js_ = ({props:['product','category','states'],data(){return{singleQuantity:1,swiperOptionTop:{loop:true,slidesPerView:1,spaceBetween:10,effect:'fade',loopedSlides:5,// looped slides should be the same
navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'}},slug:this.$route.params.slug,indexOfState:this.states.length-1,pricee:'',discounted_price:'',state_id:''};},// mounted() {
//     // this.$nextTick(() => {
//     //     const swiperTop = this.$refs.swiperTop.$swiper
//     //     const swiperThumbs = this.$refs.swiperThumbs.$swiper
//     //     swiperTop.controller.control = swiperThumbs
//     //     swiperThumbs.controller.control = swiperTop
//     // })
//   return console.log(this.product)
// },
mounted(){this.indexOfState=this.states.length-1;this.settingPrice();},computed:{checkIsLiked(){if(this.$store.state.wishlist.find(el=>this.product.id===el.id))return true;else return false;}},methods:{priceByState(index){this.indexOfState=index;this.settingPrice();},settingPrice(){for(let i in this.states){if(i==this.indexOfState){this.pricee=this.states[i].price;this.discounted_price=this.states[i].discounted_price;this.state_id=this.states[i].id;}}},async addToCart(product){if(!localStorage.getItem('116111107101110'))return window.location='/login-register';if(this.state_id==='')return this.$notify({type:'error',title:'لطفا ظرفیت محصول را انتخاب کنید!'});const prod={...product,cartQuantity:this.singleQuantity};// for notification
if(this.$store.state.cart.find(el=>this.state_id===el.state_id)){this.$notify({type:'error',title:'این محصول در سبد خرید شما وجود دارد!'});}else{const user=localStorage.getItem('117115101114');const userr=JSON.parse(user);const data={user_id:userr.id,product:product.id,state:this.state_id,count:this.singleQuantity};this.$axios.setToken(localStorage.getItem('116111107101110'),'Bearer');const card=await this.$axios.post(`/card`,data);this.$notify({type:'success',title:'محصول با موفقیت به سبد خرید افزوده شد!'});const newPro=await this.$axios.get(`/card_one_pro/${card.data.msg.id}`);this.$store.dispatch('addToCartItem',newPro.data.product[0]);}},discountedPrice(product){return product.price-product.price*product.discount/100;},increaseQuantity(){if(!localStorage.getItem('116111107101110'))return window.location='/login-register';if(this.product.inventory>=this.singleQuantity)this.singleQuantity++;},decreaseQuantity(){if(!localStorage.getItem('116111107101110'))return window.location='/login-register';if(this.singleQuantity>1)this.singleQuantity--;},async addToWishlist(product){if(!localStorage.getItem('116111107101110'))return window.location='/login-register';// for notification
const user=localStorage.getItem('117115101114');const userr=JSON.parse(user);const data={user:userr.id,product:product.id};this.$axios.setToken(localStorage.getItem('116111107101110'),'Bearer');if(this.$store.state.wishlist.find(el=>product.id===el.id)){const remove=await this.$axios.delete('/bookmark',{data});this.$store.dispatch('removeProductFromWishlist',product);this.$notify({type:'success',title:'این محصول از لیست علاقمندیهای شما حذف شد!'});}else{const card=await this.$axios.post(`/bookmark`,data);this.$notify({type:'success',title:'این محصول به لیست علاقمندیهای شما افزوده شد!'});this.$store.dispatch('addToWishlist',product);}}}});
// CONCATENATED MODULE: ./components/product/ProductDetailsWrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_ProductDetailsWrappervue_type_script_lang_js_ = (ProductDetailsWrappervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/product/ProductDetailsWrapper.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductDetailsWrappervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "30bc965e"
  
)

/* harmony default export */ var ProductDetailsWrapper = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=product-details-wrapper.js.map