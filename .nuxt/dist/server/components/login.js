exports.ids = [36];
exports.modules = {

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Login.vue?vue&type=template&id=4229f4d7&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"login-form"},[_vm._ssrNode("<div class=\"form\"><span class=\"text-right pb-5 text-muted\" style=\"float:right\">لطفا شماره موبایل یا ایمیل خود را وارد کنید.</span> <input type=\"text\" name=\"user-name\" placeholder"+(_vm._ssrAttr("value",(_vm.data.key)))+"> <div class=\"button-box\"><button type=\"submit\""+(_vm._ssrAttr("disabled",_vm.loading))+(_vm._ssrAttr("loading",_vm.loading))+">"+_vm._ssrEscape("\n                "+_vm._s(_vm.loading ? 'در حال پردازش اطلاعات' : 'ورود'))+"</button></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Login.vue?vue&type=template&id=4229f4d7&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Login.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Loginvue_type_script_lang_js_ = ({data(){return{data:{key:''},loading:false};},methods:{async login(e){this.loading=true;e.preventDefault();if(this.data.key.trim()===''){this.loading=false;return this.$notify({title:'لطفا شماره موبایل یا ایمیل خود را وارد کنید.',type:'error'});}const log=await this.$axios.post('login_or_reg',this.data);if(log.data===0){this.$store.dispatch('setNewUser',true);}if(log.data===1){this.$store.dispatch('setNewUser',false);}if(log.data.email){this.loading=false;return this.$notify({title:'خطا در ارسال کد.  لطفا مجددا وارد شوید.',type:'error'});}localStorage.setItem('key',this.data.key);this.$notify({title:'کد تایید به شما ارسال شد.',type:'success'});this.loading=false;this.$store.dispatch('setFlag',true);}}});
// CONCATENATED MODULE: ./components/Login.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Loginvue_type_script_lang_js_ = (Loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Login.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6670bc34"
  
)

/* harmony default export */ var Login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=login.js.map