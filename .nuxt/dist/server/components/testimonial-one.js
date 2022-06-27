exports.ids = [54];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=testimonial-one.js.map