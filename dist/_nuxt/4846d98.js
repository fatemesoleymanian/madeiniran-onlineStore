(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{315:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},316:function(t,e,r){"use strict";var n=r(3),o=r(317).trim;n({target:"String",proto:!0,forced:r(318)("trim")},{trim:function(){return o(this)}})},317:function(t,e,r){var n=r(4),o=r(28),l=r(15),c=r(315),m=n("".replace),f="["+c+"]",v=RegExp("^"+f+f+"*"),d=RegExp(f+f+"*$"),_=function(t){return function(e){var r=l(o(e));return 1&t&&(r=m(r,v,"")),2&t&&(r=m(r,d,"")),r}};t.exports={start:_(1),end:_(2),trim:_(3)}},318:function(t,e,r){var n=r(84).PROPER,o=r(5),l=r(315);t.exports=function(t){return o((function(){return!!l[t]()||"​᠎"!=="​᠎"[t]()||n&&l[t].name!==t}))}},320:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(38),r(316),{data:function(){return{informationObj:{full_name:"",phone_number:""},makeButtonLoading:!1}},methods:{checkAndRegisterInNewsletter:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.preventDefault(),""!==e.informationObj.full_name.trim()){r.next=3;break}return r.abrupt("return",e.$notify({title:"خطا!",text:"لطفا نام و نام خانوادگی خود را وارد کنید.",type:"error"}));case 3:if(""!==e.informationObj.phone_number.trim()){r.next=5;break}return r.abrupt("return",e.$notify({title:"خطا!",text:"لطفا شماره تلفن همراه خود را وارد کنید.",type:"error"}));case 5:if(11===e.informationObj.phone_number.length){r.next=7;break}return r.abrupt("return",e.$notify({title:"خطا!",text:"لطفا شماره تلفن همراه خود رابه درستی وارد کنید.",type:"error"}));case 7:return e.makeButtonLoading=!0,r.next=10,e.$axios.post("/add_new_receiver",e.informationObj).then((function(t){return e.makeButtonLoading=!1,e.$notify({title:"سپاس از مشارکت شما!",text:t.data.msg,type:"success"})})).catch((function(){return e.makeButtonLoading=!1,e.$notify({title:"عملیات ناموفق!",text:"خطایی در ثبت اطلاعات رخ داد.",type:"error"})}));case 10:case"end":return r.stop()}}),r)})))()}}}),l=r(12),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"footer-area bg-gray pt-100 pb-70"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row px-1"},[r("div",{staticClass:"col-lg-2 col-sm-4 "},[r("div",{staticClass:"copyright mb-30"},[r("div",{staticClass:"footer-logo mt-0 pt-0 text-center"},[r("n-link",{attrs:{to:"/"}},[r("img",{attrs:{src:"/img/logo/logo.png",alt:"logo"}})])],1),t._v(" "),t._m(0),t._v(" "),t._m(1)])]),t._v(" "),r("div",{staticClass:"col-lg-2 col-sm-4 "},[r("div",{staticClass:"footer-widget mb-30 ml-30"},[t._m(2),t._v(" "),r("div",{staticClass:"footer-list"},[r("ul",[r("li",[r("n-link",{attrs:{to:"/shop"}},[t._v("خطوط تولید")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/blog"}},[t._v("وبلاگ")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/about"}},[t._v("درباره ما")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/contact"}},[t._v("تماس با ما")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/terms-conditions"}},[t._v("قوانین و مقررات")])],1)])])])]),t._v(" "),t._m(3),t._v(" "),r("div",{staticClass:"col-lg-4 col-sm-6 border rounded-3 pt-3"},[r("div",{staticClass:"footer-widget mb-30 ml-10"},[t._m(4),t._v(" "),r("div",{staticClass:"subscribe-style"},[r("p",[t._v("با ثبت‌نام در خبرنامه هر دو ماه یک بار با ارائه خطوط تولید جدید، شما می‌‌توانید از طریق دریافت پیامک،\n              در جریان جزئیات قرار بگیرید.")]),t._v(" "),r("div",{staticClass:"subscribe-form"},[r("form",{staticClass:"mc-form"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.informationObj.full_name,expression:"informationObj.full_name"}],staticClass:"email",attrs:{type:"text",required:"",placeholder:"نام و نام خانوادگی:",name:"email"},domProps:{value:t.informationObj.full_name},on:{input:function(e){e.target.composing||t.$set(t.informationObj,"full_name",e.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.informationObj.phone_number,expression:"informationObj.phone_number"}],staticClass:"email",attrs:{type:"text",required:"",placeholder:"شماره تلفن همراه:",name:"email"},domProps:{value:t.informationObj.phone_number},on:{input:function(e){e.target.composing||t.$set(t.informationObj,"phone_number",e.target.value)}}}),t._v(" "),r("button",{staticClass:"button float-start fw-bolder",staticStyle:{"font-size":"18px"},attrs:{name:"subscribe",disabled:t.makeButtonLoading,loading:t.makeButtonLoading},on:{click:t.checkAndRegisterInNewsletter}},[t._v("\n                  "+t._s(t.makeButtonLoading?"کمی صبر کنید...":"ثبت نام")+"\n                ")])])])])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"pt-5"},[t._v("© 2022 "),r("a",{attrs:{href:"#",target:"_blank"}},[t._v("ساخت ایران")]),t._v("."),r("br"),t._v(" All Rights Reserved")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row pt-3"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"d-flex align-content-between justify-content-between"},[r("div",{staticClass:"copyright mb-30 "},[r("div",{staticClass:"footer-logo"},[r("a",{attrs:{referrerpolicy:"origin",target:"_blank",href:"https://trustseal.enamad.ir/?id=293199&Code=G6w73PAJDl7irj1t0umR"}},[r("img",{staticStyle:{cursor:"pointer"},attrs:{referrerpolicy:"origin",src:"https://Trustseal.eNamad.ir/logo.aspx?id=293199&Code=G6w73PAJDl7irj1t0umR",alt:"",id:"G6w73PAJDl7irj1t0umR"}})])])]),t._v(" "),r("div",{staticClass:"copyright mb-30 "},[r("div",{staticClass:"footer-logo"},[r("img",{staticStyle:{cursor:"pointer"},attrs:{referrerpolicy:"origin",id:"rgvjjxlzjzpeesgtapfuesgt",onclick:'window.open("https://logo.samandehi.ir/Verify.aspx?id=317050&p=xlaorfthjyoeobpddshwobpd", "Popup","toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30")',alt:"logo-samandehi",src:"https://logo.samandehi.ir/logo.aspx?id=317050&p=qftinbpdyndtlymaujynlyma"}})])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-title"},[r("h3",{staticStyle:{"font-weight":"700"}},[t._v("نقشه سایت")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-lg-4 col-sm-4"},[r("div",{staticClass:"footer-widget mb-30 ml-50"},[r("div",{staticClass:"footer-title"},[r("h3",{staticStyle:{"font-weight":"700"}},[t._v("راه های تماس")])]),t._v(" "),r("div",{staticClass:"footer-list"},[r("ul",[r("li",[r("p",[t._v("تلفن : "),r("br"),t._v("021-72418400 | 021-72418401 "),r("br"),t._v("021-72418402 | 021-72418403")])]),t._v(" "),r("li",[r("p",[t._v("واتس اپ : "),r("br"),t._v("09190808506 | 09190808507 "),r("br"),t._v("09902121045 | 09902121046")])]),t._v(" "),r("li",[r("p",[t._v("آدرس : تهران - خیابان ولیعصر - روبروی پارک ملت - برج سایه - طبقه چهاردهم.")])]),t._v(" "),r("li",[r("p",[t._v("شبکه‌های اجتماعی: "),r("a",{attrs:{href:"https://www.instagram.com/madein_ir.ir/",target:"_blank"}},[t._v("اینستاگرام")]),t._v(" - "),r("a",{attrs:{href:"https://www.aparat.com/madein_ir.ir",target:"_blank"}},[t._v("آپارات")])])])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-title"},[r("h3",[r("b",[t._v(" ثبت نام در خبرنامه")])])])}],!1,null,null,null);e.default=component.exports}}]);