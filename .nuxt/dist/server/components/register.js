exports.ids = [50];
exports.modules = {

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Register.vue?vue&type=template&id=0a0a43c5&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"register-form"},[_vm._ssrNode("<i aria-hidden=\"true\" class=\"fa fa-arrow-right text-right\" style=\"float:right;margin-top:-35px;font-size:22px;cursor: pointer\"></i> <div class=\"form\"><span class=\"text-right pb-5 text-muted\" style=\"float:right\">\n              لطفا کد تایید را وارد کنید ،\n              "+((_vm.show)?("<span class=\"text-right text-muted\">\n              شما در حال ایجاد حساب کاربری در ساخت ایران هستید .\n          </span>"):"<!---->")+"</span> <input type=\"text\" name=\"user-name\" maxlength=\"5\" placeholder"+(_vm._ssrAttr("value",(_vm.data.code)))+" style=\"text-align: center;font-size: 25px\"> <div>"+((!_vm.end)?("<span class=\"text-muted text-center \" style=\"float: right\">"+_vm._ssrEscape(_vm._s(_vm.countDown)+" ثانیه")+"</span>"):"<!---->")+" "+((_vm.end)?("<span class=\"text-muted text-center \" style=\"float: right;cursor: pointer\">ارسال مجدد کد\n    </span>"):"<!---->")+"</div> <div class=\"button-box\"><button type=\"submit\""+(_vm._ssrAttr("disabled",_vm.loading))+(_vm._ssrAttr("loading",_vm.loading))+">"+_vm._ssrEscape("\n        "+_vm._s(_vm.loading ? 'لطفا صبر کنید...' : 'تایید')+"\n      ")+"</button></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Register.vue?vue&type=template&id=0a0a43c5&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Register.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Registervue_type_script_lang_js_ = ({data(){return{data:{code:'',key:''},loading:false,countDown:180,end:false};},methods:{async confirm(){this.loading=true;this.data.key=localStorage.getItem('key');if(this.data.code.trim()===''){this.loading=false;return this.$notify({title:'لطفا کد تایید را وارد کنید.'});}if(this.data.code.length!==5){this.loading=false;return this.$notify({title:'لطفا کد تایید را به درستی وارد کنید.'});}const log=await this.$axios.post('confirm_code',this.data);if(log.status===200){this.loading=false;return this.$notify({type:'success',title:log.data.msg});}if(log.status===201){localStorage.setItem('117115101114',JSON.stringify(log.data.user));localStorage.setItem('116111107101110',log.data.token);localStorage.setItem('099097114100',log.data.card);window.location='/';}console.log(log.status);},countDownTimer(){if(this.countDown>0){setTimeout(()=>{this.countDown-=1;this.countDownTimer();},1000);}if(this.countDown===0)this.end=true;},async sendCode(){const dataa={key:localStorage.getItem('key')};const log=await this.$axios.post('login_or_reg',dataa);if(log.data===0){this.$store.dispatch('setNewUser',true);}if(log.data===1){this.$store.dispatch('setNewUser',false);}if(log.data.email){this.loading=false;return this.$notify({title:'خطا در ارسال کد.  لطفا مجددا وارد شوید.'});}localStorage.setItem('key',this.data.key);this.$notify({type:'success',title:'کد تایید به شما ارسال شد.'});this.$store.dispatch('setFlag',true);this.end=false;this.countDown=8;this.countDownTimer();}},computed:{show(){return this.$store.getters.getNewUser;}},created(){this.countDownTimer();}});
// CONCATENATED MODULE: ./components/Register.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Registervue_type_script_lang_js_ = (Registervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Register.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Registervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5122ffb0"
  
)

/* harmony default export */ var Register = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=register.js.map