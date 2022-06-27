exports.ids = [77,0,20,39,40,55];
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

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProductDetailsDescriptionReview.vue?vue&type=template&id=6d6aadee&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"description-review-area pb-90"},[_vm._ssrNode("<div class=\"container\"><div class=\"description-review-wrapper\"><div class=\"description-review-topbar nav\"><a data-bs-toggle=\"tab\" href=\"#details\" class=\"active\">مشخصات فنی</a> <a data-bs-toggle=\"tab\" href=\"#comments\">دیدگاه ها</a> <a data-bs-toggle=\"tab\" href=\"#fqs\">پرسش های متداول</a></div> <div class=\"tab-content description-review-bottom\"><div id=\"comments\" class=\"tab-pane \"><div class=\"row\"><div class=\"col-lg-7\">"+(_vm._ssrList((_vm.product.comment),function(c,i){return (((_vm.product.comment.length)?("<div class=\"review-wrapper\">"+((c.status === 1 )?("<div class=\"single-review\"><div class=\"review-img px-2\"><img width=\"30\" height=\"30\" src=\"/img/testimonial/testi-1.png\""+(_vm._ssrAttr("alt",c.user_id))+" style=\"border-radius:50%;float: left; \"></div> "+((c.status === 1 )?("<div class=\"review-content\"><div class=\"review-top-wrap\"><div class=\"review-left\">"+((c.user_id === _vm.you)?("<div class=\"review-name\"><h4>دیدگاه شما</h4></div>"):"<!---->")+"</div></div> <div class=\"review-bottom\">"+((c.status === 1 )?("<p>"+_vm._ssrEscape(_vm._s(c.comment))+"</p>"):"<!---->")+"</div></div>"):"<!---->")+"</div>"):"<!---->")+"</div>"):"<!---->"))}))+"</div> <div class=\"col-lg-5\"><div class=\"ratting-form-wrapper pl-50\"><h3 class=\"py-3\">افزودن دیدگاه</h3> <div class=\"ratting-form\"><form><div class=\"row\"><div class=\"col-md-12\"><div class=\"rating-form-style form-submit\"><textarea name=\"Your Review\" placeholder=\"دیدگاه شما درباره ی محصول\">"+_vm._ssrEscape(_vm._s(_vm.comment))+"</textarea> <input type=\"submit\" value=\"ثبت دیدگاه\"></div></div></div></form></div></div></div></div></div> <div id=\"details\" class=\"tab-pane active\">"+(_vm._s(_vm.product.description))+"</div> <div id=\"fqs\" class=\"tab-pane\"><div class=\"row\"><div class=\"col-lg-12\">"+(_vm._ssrList((_vm.faq),function(f,i){return (((_vm.faq.length)?("<div class=\"review-wrapper py-3\"><div class=\"single-review\"><div class=\"review-content  w-100\"><div class=\"review-top-wrap\"><div class=\"review-left\"><div class=\"review-name\"><h4>سوال :</h4></div></div> <div class=\"review-left\"><a href=\"#form\" class=\" p-2\">انتخاب سوال</a></div></div> <div class=\"review-bottom\"><p>"+_vm._ssrEscape(_vm._s(f.question))+"</p></div></div></div> <div class=\"single-review child-review \"><div class=\"review-content w-100\"><div class=\"review-top-wrap\"><div class=\"review-left\"><div class=\"review-name\"><h4>پاسخ</h4></div></div></div> <div class=\"review-bottom\"><p>"+_vm._ssrEscape(_vm._s(f.answer))+"</p></div></div></div> <hr class=\"bg-dark h-25\"></div>"):"<!---->"))}))+"</div> <div class=\"col-lg-12 py-5\"><div id=\"form\" class=\"ratting-form-wrapper pl-50\"><h3 class=\"py-3\">درصورتی که راجع به هر یک از پرسش ها و پاسخ ها برای شما سوالی بوجود آمده است ،  پس از مشخص کردن سوال فرم زیر را پرکنید تا کارشناسان با شما تماس بگیرند.</h3> <div class=\"ratting-form py-3\"><form><div class=\"row\"><div class=\"col-md-6\"><div class=\"rating-form-style mb-10\"><input placeholder=\"نام و نام خانوادگی :\" type=\"text\""+(_vm._ssrAttr("value",(_vm.full_name)))+"></div></div> <div class=\"col-md-6\"><div class=\"rating-form-style mb-10\"><input placeholder=\"شماره تماس :\" type=\"tel\""+(_vm._ssrAttr("value",(_vm.phone_number)))+"></div></div></div> <div class=\"row\"><div class=\"col-md-12\"><div class=\"rating-form-style form-submit py-3\"><input type=\"submit\" id=\"faq_form\""+(_vm._ssrAttr("disabled",_vm.saving))+(_vm._ssrAttr("value",_vm.saving ? 'در حال ارسال اطلاعات' : 'ارسال اطلاعات'))+" class=\"float-start\"></div></div></div></form></div></div></div></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ProductDetailsDescriptionReview.vue?vue&type=template&id=6d6aadee&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProductDetailsDescriptionReview.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ProductDetailsDescriptionReviewvue_type_script_lang_js_ = ({props:['product','faq'],data(){return{saving:false,comment:'',you:'',ques_number:'',full_name:'',phone_number:''};},async mounted(){const user=localStorage.getItem('117115101114');const userr=JSON.parse(user);this.you=userr.id;},methods:{async saveComment(e){e.preventDefault();if(!localStorage.getItem('116111107101110'))return window.location='/login-register';if(this.comment.trim()==='')return this.$notify({type:'error',title:'لطفا دیدگاه خود را وارد کنید!'});const data={product:this.product.id,user:this.you,comment:this.comment};this.$axios.setToken(localStorage.getItem('116111107101110'),'Bearer');const comment=await this.$axios.post('pcomment/save',data).catch(()=>{return this.$notify({type:'error',title:'خطایی در ثبت دیدگاه بوجود آمد!'});});this.$notify({type:'success',title:comment.data.msg});},async saveForm(e){this.saving=true;e.preventDefault();if(!localStorage.getItem('116111107101110'))return window.location='/login-register';if(this.ques_number===''){this.saving=false;return this.$notify({title:"خطا",text:"لطفا سوال مدنظر را انتخاب کنید!",type:'error'});}if(this.full_name.trim()===''){this.saving=false;return this.$notify({title:"خطا",text:"لطفا نام و نام خانوادگی خود را وارد کنید!",type:'error'});}if(this.phone_number.trim()===''){this.saving=false;return this.$notify({title:"خطا",text:"لطفا شماره تماس خود را وارد کنید!",type:'error'});}if(this.phone_number.length!==11){this.saving=false;return this.$notify({title:"خطا",text:"لطفا شماره تماس را به درستی وارد کنید!",type:'error'});}const data={faq_id:this.ques_number,full_name:this.full_name,phone_number:this.phone_number};this.$axios.setToken(localStorage.getItem('116111107101110'),'Bearer');const form=await this.$axios.post('/faq_form',data).catch(()=>{this.saving=false;return this.$notify({type:'error',title:'خطایی در ارسال اطلاعات بوجود آمد!'});});this.$notify({title:form.data.msg});this.saving=false;}}});
// CONCATENATED MODULE: ./components/ProductDetailsDescriptionReview.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ProductDetailsDescriptionReviewvue_type_script_lang_js_ = (ProductDetailsDescriptionReviewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ProductDetailsDescriptionReview.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ProductDetailsDescriptionReviewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "94582128"
  
)

/* harmony default export */ var ProductDetailsDescriptionReview = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/product/_slug.vue?vue&type=template&id=77275828&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"product-details-page-wrapper"},[_c('TheHeader',{attrs:{"containerClass":"container"}}),_vm._ssrNode(" "),_c('Breadcrumb',{attrs:{"pageTitle":_vm.products.name}}),_vm._ssrNode(" "),_c('ProductDetailsWrapper',{attrs:{"product":_vm.products,"category":_vm.category,"states":_vm.states}}),_vm._ssrNode(" "),_c('ProductDetailsDescriptionReview',{attrs:{"product":_vm.products,"faq":_vm.faq}}),_vm._ssrNode(" "),_c('TheFooter')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/product/_slug.vue?vue&type=template&id=77275828&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/product/_slug.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var _slugvue_type_script_lang_js_ = ({data(){return{slug:this.$route.params.slug,products:'',category:'',states:'',faq:[]};},async mounted(){const product=await this.$axios.get(`products/${this.slug}`);this.products=product.data;this.category=product.data.category.name;this.states=product.data.state;const faqs=await this.$axios.get(`/products_faq${this.slug}`).catch(()=>{return this.$notify({title:'خطایی  بوجود آمد!',type:'error'});});this.faq=faqs.data;console.log(this.faq);},head(){return{title:this.products.name};},methods:{}});
// CONCATENATED MODULE: ./pages/product/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/product/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "16776da4"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TheHeader: __webpack_require__(60).default,Breadcrumb: __webpack_require__(56).default,ProductDetailsWrapper: __webpack_require__(110).default,ProductDetailsDescriptionReview: __webpack_require__(111).default,TheFooter: __webpack_require__(53).default})


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
//# sourceMappingURL=_slug.js.map