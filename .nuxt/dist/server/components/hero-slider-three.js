exports.ids = [2];
exports.modules = {

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/hero/HeroSliderThree.vue?vue&type=template&id=a3be42cc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"slider-area nav-style-1"},[_c('swiper',{attrs:{"options":_vm.swiperOption}},[_vm._l((_vm.sliderData),function(slider,index){return _c('swiper-slide',{key:index,staticClass:"single-slider-2 slider-height-2 d-flex align-items-center bg-img",style:({ backgroundImage:("url(http://localhost:8000" + (slider.image) + ")") })},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-lg-7 col-md-8 ms-auto"},[_c('div',{staticClass:"slider-content-3 slider-animation-1 text-center"},[(slider.sub_title)?_c('h3',[_vm._v(_vm._s(slider.sub_title))]):_vm._e(),_vm._v(" "),(slider.title)?_c('h1',[_vm._v(_vm._s(slider.title))]):_vm._e(),_vm._v(" "),(slider.text)?_c('p',[_vm._v(_vm._s(slider.text))]):_vm._e(),_vm._v(" "),(slider.link)?_c('div',{staticClass:"slider-btn btn-hover"},[(slider.link)?_c('a',{attrs:{"href":slider.link}},[_vm._v("کلیک کن!")]):_vm._e()]):_vm._e()])])])])])}),_vm._v(" "),_c('div',{staticClass:"hero-slider-nav swiper-button-prev"},[_c('i',{staticClass:"pe-7s-angle-left"})]),_vm._v(" "),_c('div',{staticClass:"hero-slider-nav swiper-button-next"},[_c('i',{staticClass:"pe-7s-angle-right"})])],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/hero/HeroSliderThree.vue?vue&type=template&id=a3be42cc&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/hero/HeroSliderThree.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var HeroSliderThreevue_type_script_lang_js_ = ({data(){return{swiperOption:{loop:true,speed:750,slidesPerView:1,spaceBetween:10,autoplay:{delay:6000},effect:"fade",fadeEffect:{crossFade:true},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'}},sliderData:[]};},async mounted(){const slider=await this.$axios.get('/slider_home');this.sliderData=slider.data;}});
// CONCATENATED MODULE: ./components/hero/HeroSliderThree.vue?vue&type=script&lang=js&
 /* harmony default export */ var hero_HeroSliderThreevue_type_script_lang_js_ = (HeroSliderThreevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/hero/HeroSliderThree.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  hero_HeroSliderThreevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "34456874"
  
)

/* harmony default export */ var HeroSliderThree = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=hero-slider-three.js.map