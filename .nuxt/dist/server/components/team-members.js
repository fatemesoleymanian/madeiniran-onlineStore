exports.ids = [53];
exports.modules = {

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TeamMembers.vue?vue&type=template&id=1d29ee32&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"team-area pt-95 pb-70"},[_vm._ssrNode("<div class=\"container\"><div class=\"section-title-2 text-center mb-60\"><h2>دپارتمان ها</h2></div> <div class=\"row\">"+(_vm._ssrList((_vm.teamMemberData),function(member,index){return ("<div class=\"col-lg-3 col-sm-6\"><div class=\"team-wrapper mb-30\"><div class=\"team-img\"><img"+(_vm._ssrAttr("src",'https://apidemo.madein-iran.com/public'+member.iconImage))+(_vm._ssrAttr("alt",member.name))+"></div> <div class=\"team-content text-center\"><h4>"+_vm._ssrEscape(_vm._s(member.name))+"</h4></div></div></div>")}))+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TeamMembers.vue?vue&type=template&id=1d29ee32&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TeamMembers.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TeamMembersvue_type_script_lang_js_ = ({data(){return{teamMemberData:[]};},async created(){let p=await this.$axios.get('/departments');this.teamMemberData=p.data;console.log(p);}});
// CONCATENATED MODULE: ./components/TeamMembers.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TeamMembersvue_type_script_lang_js_ = (TeamMembersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TeamMembers.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TeamMembersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4fbf6507"
  
)

/* harmony default export */ var TeamMembers = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=team-members.js.map