(window.webpackJsonp=window.webpackJsonp||[]).push([[63,5,14,24,32,42,60,61],{315:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},316:function(t,e,n){"use strict";var r=n(3),o=n(318).trim;r({target:"String",proto:!0,forced:n(319)("trim")},{trim:function(){return o(this)}})},317:function(t,e,n){},318:function(t,e,n){var r=n(4),o=n(26),l=n(15),c=n(315),d=r("".replace),v="["+c+"]",m=RegExp("^"+v+v+"*"),f=RegExp(v+v+"*$"),_=function(t){return function(e){var n=l(o(e));return 1&t&&(n=d(n,m,"")),2&t&&(n=d(n,f,"")),n}};t.exports={start:_(1),end:_(2),trim:_(3)}},319:function(t,e,n){var r=n(84).PROPER,o=n(5),l=n(315);t.exports=function(t){return o((function(){return!!l[t]()||"​᠎"!=="​᠎"[t]()||r&&l[t].name!==t}))}},321:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(44),n(316),{data:function(){return{informationObj:{full_name:"",phone_number:""},makeButtonLoading:!1}},methods:{checkAndRegisterInNewsletter:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),""!==e.informationObj.full_name.trim()){n.next=3;break}return n.abrupt("return",e.$notify({title:"خطا!",text:"لطفا نام و نام خانوادگی خود را وارد کنید.",type:"error"}));case 3:if(""!==e.informationObj.phone_number.trim()){n.next=5;break}return n.abrupt("return",e.$notify({title:"خطا!",text:"لطفا شماره تلفن همراه خود را وارد کنید.",type:"error"}));case 5:if(11===e.informationObj.phone_number.length){n.next=7;break}return n.abrupt("return",e.$notify({title:"خطا!",text:"لطفا شماره تلفن همراه خود رابه درستی وارد کنید.",type:"error"}));case 7:return e.makeButtonLoading=!0,document.getElementById("news_letter_btn").style.opacity=0,n.next=11,e.$axios.post("/add_new_receiver",e.informationObj).then((function(t){return e.makeButtonLoading=!1,e.$notify({title:"سپاس از مشارکت شما!",text:t.data.msg,type:"success"})})).catch((function(){return e.makeButtonLoading=!1,document.getElementById("news_letter_btn").style.opacity=1,e.$notify({title:"عملیات ناموفق!",text:"خطایی در ثبت اطلاعات رخ داد.",type:"error"})}));case 11:case"end":return n.stop()}}),n)})))()}}}),l=(n(322),n(12)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer-area bg-gray pt-100 pb-70"},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("div",{staticClass:"row px-1"},[n("div",{staticClass:"col-lg-2 col-sm-4 "},[n("div",{staticClass:"copyright mb-30"},[n("div",{staticClass:"footer-logo mt-0 pt-0 text-center"},[n("n-link",{attrs:{to:"/"}},[n("img",{attrs:{src:"/img/logo/logo-sm.png",alt:"logo",id:"logo-footer-sm"}}),t._v(" "),n("img",{attrs:{src:"/img/logo/logo-md.png",alt:"logo",id:"logo-footer-md"}})])],1),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"row pt-3"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"d-flex align-content-between justify-content-between"},[t._m(2),t._v(" "),n("div",{staticClass:"copyright mb-30 "},[n("div",{staticClass:"footer-logo"},[n("img",{staticStyle:{cursor:"pointer"},attrs:{referrerpolicy:"origin",id:"rgvjjxlzjzpeesgtapfuesgt",width:"75",height:"75",alt:"logo-samandehi",src:"https://logo.samandehi.ir/logo.aspx?id=317050&p=qftinbpdyndtlymaujynlyma"},on:{click:function(e){return t.window.open("https://logo.samandehi.ir/Verify.aspx?id=317050&p=xlaorfthjyoeobpddshwobpd","Popup","toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30")}}})])])])])])])]),t._v(" "),n("div",{staticClass:"col-lg-2 col-sm-4 "},[n("div",{staticClass:"footer-widget mb-30 ml-30"},[t._m(3),t._v(" "),n("div",{staticClass:"footer-list"},[n("ul",[n("li",[n("n-link",{attrs:{to:"/shop"}},[t._v("خطوط تولید")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/blog"}},[t._v("وبلاگ")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/about"}},[t._v("درباره ما")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/contact"}},[t._v("تماس با ما")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/terms-conditions"}},[t._v("قوانین و مقررات")])],1)])])])]),t._v(" "),t._m(4),t._v(" "),n("div",{staticClass:"col-lg-4 col-sm-6 border rounded-3 pt-3"},[n("div",{staticClass:"footer-widget mb-30 ml-10"},[t._m(5),t._v(" "),n("div",{staticClass:"subscribe-style"},[n("p",[t._v("با ثبت‌نام در خبرنامه هر دو ماه یک بار با ارائه خطوط تولید جدید، شما می‌‌توانید از طریق دریافت پیامک،\n              در جریان جزئیات قرار بگیرید.")]),t._v(" "),n("div",{staticClass:"subscribe-form"},[n("form",{staticClass:"mc-form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.informationObj.full_name,expression:"informationObj.full_name"}],staticClass:"email",attrs:{type:"text",required:"",placeholder:"نام و نام خانوادگی:",name:"email"},domProps:{value:t.informationObj.full_name},on:{input:function(e){e.target.composing||t.$set(t.informationObj,"full_name",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.informationObj.phone_number,expression:"informationObj.phone_number"}],staticClass:"email",attrs:{type:"text",required:"",placeholder:"شماره تلفن همراه:",name:"email"},domProps:{value:t.informationObj.phone_number},on:{input:function(e){e.target.composing||t.$set(t.informationObj,"phone_number",e.target.value)}}}),t._v(" "),n("button",{staticClass:"button float-start fw-bolder",staticStyle:{"font-size":"18px"},attrs:{name:"subscribe",disabled:t.makeButtonLoading,loading:t.makeButtonLoading,id:"news_letter_btn"},on:{click:t.checkAndRegisterInNewsletter}},[t._v("\n                  "+t._s(t.makeButtonLoading?"کمی صبر کنید...":"ثبت نام")+"\n                ")])])])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"whatsapp"},[e("a",{attrs:{href:"https://api.whatsapp.com/send?phone=989190808506",target:"_blank"}},[e("h5",[e("i",{staticClass:"fa fa-whatsapp fa-2x",attrs:{"aria-hidden":"true"}})])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h5",{staticClass:"pt-5"},[t._v("© 2022 "),n("a",{attrs:{href:"#",target:"_blank"}},[t._v("ساخت ایران")]),t._v("."),n("br"),t._v(" All Rights Reserved")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"copyright mb-30 "},[e("div",{staticClass:"footer-logo"},[e("a",{attrs:{referrerpolicy:"origin",target:"_blank",href:"https://trustseal.enamad.ir/?id=293199&Code=G6w73PAJDl7irj1t0umR"}},[e("img",{staticStyle:{cursor:"pointer"},attrs:{width:"75",height:"75",referrerpolicy:"origin",src:"https://Trustseal.eNamad.ir/logo.aspx?id=293199&Code=G6w73PAJDl7irj1t0umR",alt:"",id:"G6w73PAJDl7irj1t0umR"}})])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-title"},[n("h3",{staticStyle:{"font-weight":"700"}},[t._v("نقشه سایت")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-4 col-sm-4"},[n("div",{staticClass:"footer-widget mb-30 ml-50"},[n("div",{staticClass:"footer-title"},[n("h3",{staticStyle:{"font-weight":"700"}},[t._v("راه های تماس")])]),t._v(" "),n("div",{staticClass:"footer-list"},[n("ul",[n("li",[n("p",{staticStyle:{"font-family":"persianNumber"}},[t._v("تلفن : "),n("br"),t._v("021-72418400 | 021-72418401 "),n("br"),t._v("021-72418402 | 021-72418403")])]),t._v(" "),n("li",[n("p",{staticStyle:{"font-family":"persianNumber"}},[t._v("واتس اپ : "),n("br"),t._v("09190808506 | 09190808507 "),n("br"),t._v("09902121045 | 09902121046")])]),t._v(" "),n("li",[n("p",[t._v("آدرس : تهران - خیابان ولیعصر - روبروی پارک ملت - برج سایه - طبقه چهاردهم.")])]),t._v(" "),n("li",[n("p",[t._v("شبکه‌های اجتماعی: "),n("a",{attrs:{href:"https://www.instagram.com/madein_ir.ir/",target:"_blank"}},[t._v("اینستاگرام")]),t._v(" - "),n("a",{attrs:{href:"https://www.aparat.com/madein_ir.ir",target:"_blank"}},[t._v("آپارات")])])])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-title"},[n("h3",[n("b",[t._v(" ثبت نام در خبرنامه")])])])}],!1,null,null,null);e.default=component.exports},322:function(t,e,n){"use strict";n(317)},324:function(t,e,n){"use strict";n.r(e);var r={props:["pageTitle"]},o=n(12),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"breadcrumb-area pt-35 pb-35 bg-gray-3"},[n("div",{staticClass:"container"},[n("div",{staticClass:"breadcrumb-content text-center"},[n("ul",[n("li",[n("n-link",{attrs:{to:"/"}},[t._v("خانه")])],1),t._v(" "),n("li",{staticClass:"active"},[t._v(t._s(t.pageTitle))])])])])])}),[],!1,null,null,null);e.default=component.exports},326:function(t,e,n){"use strict";n.r(e);n(10),n(27),n(28);var r={components:{Navigation:function(){return Promise.resolve().then(n.bind(null,211))},MiniCart:function(){return Promise.resolve().then(n.bind(null,212))}},props:["containerClass"],computed:{cartItemCount:function(){return this.$store.getters.cartItemCount},wishlistItemCount:function(){return this.$store.getters.wishlistItemCount},compareItemCount:function(){return this.$store.getters.compareItemCount}},data:function(){return{isSticky:!1,isOpenSearch:!1,isOpenAccountSettings:!1,openCart:!1,navOpen:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))}},o=n(12),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",{staticClass:"header-area"},[n("div",{staticClass:"header-top-area header-padding-2 d-none d-lg-block"},[n("div",{class:t.containerClass},[t._m(0)])]),t._v(" "),n("div",{staticClass:"header-padding-1 sticky-bar header-res-padding clearfix",class:{"is-sticky":t.isSticky}},[n("div",{class:t.containerClass},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-2 col-md-6 col-4"},[n("div",{staticClass:"logo"},[n("n-link",{attrs:{to:"/"}},[n("img",{attrs:{src:"/img/logo/logo.png",alt:"flone logo"}})])],1)]),t._v(" "),n("div",{staticClass:"col-lg-8 d-none d-lg-block"},[n("div",{staticClass:"main-menu"},[n("nav",[n("Navigation")],1)])]),t._v(" "),n("div",{staticClass:"col-lg-2 col-md-6 col-8"},[n("div",{staticClass:"header-right-wrap"},[n("div",{staticClass:"same-style header-search d-none d-lg-block"},[n("button",{staticClass:"search-active",on:{click:function(e){t.isOpenSearch=!t.isOpenSearch}}},[n("i",{staticClass:"pe-7s-search"})]),t._v(" "),n("div",{staticClass:"search-content",class:{active:t.isOpenSearch}},[t._m(1)])]),t._v(" "),n("div",{staticClass:"same-style account-setting d-none d-lg-block"},[n("button",{staticClass:"account-setting-active",on:{click:function(e){t.isOpenAccountSettings=!t.isOpenAccountSettings}}},[n("i",{staticClass:"pe-7s-user-female"})]),t._v(" "),n("div",{staticClass:"account-dropdown",class:{active:t.isOpenAccountSettings}},[n("ul",[n("li",[n("n-link",{attrs:{to:"/login-register"}},[t._v("Login")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/login-register"}},[t._v("Register")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/my-account"}},[t._v("my account")])],1)])])]),t._v(" "),n("div",{staticClass:"same-style header-compare"},[n("n-link",{attrs:{to:"/compare"}},[n("i",{staticClass:"pe-7s-shuffle"})]),t._v(" "),n("span",{staticClass:"count-style"},[t._v(t._s(t.compareItemCount))])],1),t._v(" "),n("div",{staticClass:"same-style header-wishlist"},[n("n-link",{attrs:{to:"/wishlist"}},[n("i",{staticClass:"pe-7s-like"})]),t._v(" "),n("span",{staticClass:"count-style"},[t._v(t._s(t.wishlistItemCount))])],1),t._v(" "),n("div",{staticClass:"same-style cart-wrap"},[n("button",{staticClass:"icon-cart",on:{click:function(e){t.openCart=!t.openCart}}},[n("i",{staticClass:"pe-7s-shopbag"}),t._v(" "),n("span",{staticClass:"count-style"},[t._v(t._s(t.cartItemCount))])]),t._v(" "),n("MiniCart",{attrs:{miniCart:{visible:t.openCart}},on:{minicartClose:function(e){t.openCart=!t.openCart}}})],1),t._v(" "),n("div",{staticClass:"same-style mobile-menu-toggler d-block d-lg-none"},[n("button",{staticClass:"mobile-aside-button",on:{click:function(e){t.navOpen=!t.navOpen}}},[n("i",{staticClass:"pe-7s-menu"})])])])])])])])]),t._v(" "),t.navOpen?n("OffCanvasMobileMenu",{class:{"show-mobile-menu":t.navOpen},on:{toggleAsideMenu:function(e){t.navOpen=!t.navOpen}}}):t._e()],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-top-inner"},[n("div",{staticClass:"language-currency-wrap"},[n("div",{staticClass:"same-language-currency language-style"},[n("select",{attrs:{name:"language"}},[n("option",{attrs:{value:"english"}},[t._v("English")]),t._v(" "),n("option",{attrs:{value:"hindi"}},[t._v("Hindi")]),t._v(" "),n("option",{attrs:{value:"spanish"}},[t._v("Spanish")])])]),t._v(" "),n("div",{staticClass:"same-language-currency use-style"},[n("select",{attrs:{name:"currency"}},[n("option",{attrs:{value:"usd"}},[t._v("USD")]),t._v(" "),n("option",{attrs:{value:"eur"}},[t._v("EUR")]),t._v(" "),n("option",{attrs:{value:"rup"}},[t._v("Rup")])])]),t._v(" "),n("div",{staticClass:"same-language-currency"},[n("p",[t._v("Call: "),n("a",{attrs:{href:"callto:3965410"}},[t._v("3965410")])])])]),t._v(" "),n("div",{staticClass:"header-offer"},[n("p",[t._v("Free delivery on order over "),n("span",[t._v("$200")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",[n("input",{attrs:{type:"text",placeholder:"Search"}}),t._v(" "),n("button",{staticClass:"button-search"},[n("i",{staticClass:"pe-7s-search"})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:n(211).default,MiniCart:n(212).default,OffCanvasMobileMenu:n(210).default})},331:function(t,e,n){},332:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(44),n(316),n(35),n(56),{data:function(){return{new_ideas:{saving:!1,full_name:"",phone_number:"",description:""},empty_ideas:{saving:!1,full_name:"",phone_number:"",product:"اتنخاب محصول"},products:[]}},methods:{saveWIthIdeas:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),""!==e.new_ideas.full_name.trim()){n.next=3;break}return n.abrupt("return",e.$notify({title:"خطا!",text:"لطفا نام و نام خانوادگی خود را وارد کنید.",type:"error"}));case 3:if(""!==e.new_ideas.phone_number){n.next=5;break}return n.abrupt("return",e.$notify({title:"خطا!",text:"لطفا شماره تماس خود را وارد کنید.",type:"error"}));case 5:if(""!==e.new_ideas.description.trim()){n.next=7;break}return n.abrupt("return",e.$notify({title:"خطا!",text:"لطفا ایده مدنظر خود را وارد کنید.",type:"error"}));case 7:if(11===e.new_ideas.phone_number.length){n.next=9;break}return n.abrupt("return",e.$notify({title:"خطا!",text:"لطفا شماره تماس خود رابه درستی وارد کنید.",type:"error"}));case 9:return e.new_ideas.saving=!0,data={full_name:e.new_ideas.full_name,phone_number:e.new_ideas.phone_number,description:e.new_ideas.description},n.next=13,e.$axios.post("/job_production_ideas",data).catch((function(){return e.new_ideas.saving=!0,e.$notify({title:"عملیات ناموفق!",text:"خطایی در ثبت اطلاعات رخ داد.",type:"error"})}));case 13:return n.sent,e.new_ideas.saving=!1,n.abrupt("return",e.$notify({title:"عملیات موفق!",text:"اطلاعات با موفقیت ثبت گردید، منتظر تماس ما باشید.",type:"success"}));case 16:case"end":return n.stop()}}),n)})))()},saveEmptyIdeas:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),""!==e.empty_ideas.full_name.trim()){n.next=3;break}return n.abrupt("return",e.$notify({title:"خطا!",text:"لطفا نام و نام خانوادگی خود را وارد کنید.",type:"error"}));case 3:if(""!==e.empty_ideas.phone_number){n.next=5;break}return n.abrupt("return",e.$notify({title:"خطا!",text:"لطفا شماره تماس خود را وارد کنید.",type:"error"}));case 5:if(11===e.empty_ideas.phone_number.length){n.next=7;break}return n.abrupt("return",e.$notify({title:"خطا!",text:"لطفا شماره تماس خود رابه درستی وارد کنید.",type:"error"}));case 7:return e.empty_ideas.saving=!0,data={full_name:e.empty_ideas.full_name,phone_number:e.empty_ideas.phone_number,product:e.empty_ideas.product},n.next=11,e.$axios.post("/job_production_empty",data).catch((function(){return e.empty_ideas.saving=!0,e.$notify({title:"عملیات ناموفق!",text:"خطایی در ثبت اطلاعات رخ داد.",type:"error"})}));case 11:return n.sent,e.empty_ideas.saving=!1,n.abrupt("return",e.$notify({title:"عملیات موفق!",text:"اطلاعات با موفقیت ثبت گردید، منتظر تماس ما باشید.",type:"success"}));case 14:case"end":return n.stop()}}),n)})))()}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var p;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/products_totaly");case 2:p=e.sent,t.products=p.data;case 4:case"end":return e.stop()}}),e)})))()}}),l=n(12),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"subscribe-area-3 pb-100"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xl-5 col-lg-7 ms-auto me-auto"},[n("div",{staticClass:"subscribe-style-3 text-center"},[n("h2",{staticStyle:{"font-size":"24pt"}},[t._v("فرم تقاضای خط تولید ")]),t._v(" "),n("p",{staticClass:"pb-5"},[t._v("چنانچه به دنبال راه اندازی خط تولید خود هستید فرم زیر را پر کنید.")]),t._v(" "),n("div",{staticClass:"description-review-area py-4"},[n("div",{staticClass:"container"},[n("div",{staticClass:"description-review-wrapper"},[t._m(0),t._v(" "),n("div",{staticClass:"tab-content description-review-bottom"},[n("div",{staticClass:"tab-pane active text-center",attrs:{id:"new-ideas"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 text-center"},[n("div",{staticClass:"ratting-form-wrapper px-2",attrs:{id:"form-new"}},[n("div",{staticClass:"ratting-form py-3 text-center"},[n("form",{staticClass:"text-center w-100"},[n("div",{staticClass:"row text-center "},[n("div",{staticClass:"col-md-12 text-center "},[n("div",{staticClass:"rating-form-style mb-10 "},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.new_ideas.full_name,expression:"new_ideas.full_name"}],attrs:{placeholder:"نام و نام خانوادگی :",type:"text"},domProps:{value:t.new_ideas.full_name},on:{input:function(e){e.target.composing||t.$set(t.new_ideas,"full_name",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"col-md-12 "},[n("div",{staticClass:"rating-form-style mb-10"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.new_ideas.phone_number,expression:"new_ideas.phone_number"}],attrs:{placeholder:"شماره تماس :",type:"tel"},domProps:{value:t.new_ideas.phone_number},on:{input:function(e){e.target.composing||t.$set(t.new_ideas,"phone_number",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"col-md-12 "},[n("div",{staticClass:"rating-form-style form-submit"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.new_ideas.description,expression:"new_ideas.description"}],attrs:{name:"Your Review",placeholder:"ایده مدنظر یا درخواست ایده تولیدی:"},domProps:{value:t.new_ideas.description},on:{input:function(e){e.target.composing||t.$set(t.new_ideas,"description",e.target.value)}}})])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12 text-center"},[n("div",{staticClass:"rating-form-style form-submit py-3"},[n("input",{staticClass:"float-start",attrs:{type:"submit",id:"faq_form",disabled:t.new_ideas.saving},domProps:{value:t.new_ideas.saving?"در حال ارسال اطلاعات":"ارسال اطلاعات"},on:{click:t.saveWIthIdeas}})])])])])])])])])]),t._v(" "),n("div",{staticClass:"tab-pane text-center text-center",attrs:{id:"empty-ideas"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 text-center"},[n("div",{staticClass:"ratting-form-wrapper px-2",attrs:{id:"form-empty"}},[n("div",{staticClass:"ratting-form py-3 text-center"},[n("form",{staticClass:"text-center w-100"},[n("div",{staticClass:"row text-center"},[n("div",{staticClass:"col-md-12 text-center"},[n("div",{staticClass:"rating-form-style mb-10"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.empty_ideas.full_name,expression:"empty_ideas.full_name"}],attrs:{placeholder:"نام و نام خانوادگی :",type:"text"},domProps:{value:t.empty_ideas.full_name},on:{input:function(e){e.target.composing||t.$set(t.empty_ideas,"full_name",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"col-md-12 "},[n("div",{staticClass:"rating-form-style mb-10"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.empty_ideas.phone_number,expression:"empty_ideas.phone_number"}],attrs:{placeholder:"شماره تماس :",type:"tel"},domProps:{value:t.empty_ideas.phone_number},on:{input:function(e){e.target.composing||t.$set(t.empty_ideas,"phone_number",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"col-12"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.empty_ideas.product,expression:"empty_ideas.product"}],staticClass:"form-select text-end form-select-sm w-100",attrs:{"aria-label":"انتخاب خط تولید"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.empty_ideas,"product",e.target.multiple?n:n[0])}}},[n("option",{attrs:{selected:""}},[t._v("انتخاب خط تولید")]),t._v(" "),t._l(t.products,(function(e,i){return n("option",{key:i,domProps:{value:e.name}},[t._v(t._s(e.name))])}))],2)])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12 text-center"},[n("div",{staticClass:"rating-form-style form-submit py-3"},[n("input",{staticClass:"float-start",attrs:{type:"submit",disabled:t.empty_ideas.saving},domProps:{value:t.empty_ideas.saving?"در حال ارسال اطلاعات":"ارسال اطلاعات"},on:{click:t.saveEmptyIdeas}})])])])])])])])])])])])])])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"description-review-topbar nav"},[n("a",{staticClass:"active",staticStyle:{"font-size":"14pt"},attrs:{"data-bs-toggle":"tab",href:"#new-ideas"}},[t._v("ایده شخصی دارم")]),t._v(" "),n("a",{staticStyle:{"font-size":"14pt"},attrs:{"data-bs-toggle":"tab",href:"#empty-ideas"}},[t._v("ایده ای ندارم")])])}],!1,null,null,null);e.default=component.exports},337:function(t,e,n){"use strict";n(331)},338:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(44),{data:function(){return{testimonialOption:{loop:!1,speed:950,navigation:{nextEl:".hero-slider-nav.swiper-button-next",prevEl:".hero-slider-nav.swiper-button-prev"}},testimonialData:[]}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/testimonial");case 2:n=e.sent,t.testimonialData=n.data;case 4:case"end":return e.stop()}}),e)})))()}}),l=(n(337),n(12)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"testimonial-area pb-95 pt-95"},[n("div",{staticClass:"container pb-30"},[n("h3",{staticClass:"text-center pb-3"},[t._v(" ویدئوهای ارسالی از طرف نمایندگان")]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-10 ms-auto me-auto"},[n("swiper",{attrs:{options:t.testimonialOption}},[t._l(t.testimonialData,(function(e,r){return n("div",{key:r,staticClass:"swiper-slide single-testimonial text-center"},[n("div",{staticClass:"h_iframe-aparat_embed_frame"},[n("span",{staticStyle:{display:"block","padding-top":"57%"}}),t._v(" "),n("iframe",{attrs:{src:e.video,allowFullScreen:"true",webkitallowfullscreen:"true",mozallowfullscreen:"true",frameborder:"0"}})]),t._v(" "),n("div",{staticClass:"client-info"},[e.name?n("h5",[t._v("\n                "+t._s(e.name)+"\n              ")]):t._e(),t._v(" "),e.position?n("span",[t._v(t._s(e.position))]):t._e()])])})),t._v(" "),n("div",{staticClass:"hero-slider-nav swiper-button-prev"},[n("i",{staticClass:"pe-7s-angle-left ml-5 pl-5",staticStyle:{"margin-left":"30px",color:"#fff","font-size":"2.5rem","font-weight":"700",transform:"rotate(180deg)"}})]),t._v(" "),n("div",{staticClass:"hero-slider-nav swiper-button-next"},[n("i",{staticClass:"pe-7s-angle-right mr-5 pr-5",staticStyle:{"margin-right":"30px",color:"#fff","font-size":"2.5rem","font-weight":"700",transform:"rotate(180deg)"}})])],2)],1)])])])}),[],!1,null,null,null);e.default=component.exports},346:function(t,e,n){t.exports=n.p+"img/about.9d5cbb1.png"},347:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-6 text-center "},[e("div",{staticClass:" text-center"},[e("div",{staticClass:"support-icon"},[e("img",{staticClass:"animated",attrs:{src:n(346),alt:"about-us"}})])])])}],o={data:function(){return{}}},l=n(12),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"support-area pt-100 pb-90"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row mtn-30 "},[n("div",{staticClass:"col-6 mt-30"},[n("div",{staticClass:"support-wrap support-1"},[n("div",{staticClass:"support-content"},[n("h3",{staticClass:"p-3"},[t._v("درباره شرکت ساخت ایران")]),t._v(" "),n("p",[t._v("\n                        شرکت ساخت ایران با هدف راه‌اندازی کسب و کار از نوع تولیدی در ظرفیت‌های تولیدی خانگی، کارگاهی و کارخانه تاسیس شده‌است. طی 3 سال گذشته این شرکت توانسته امکانات و شرایط لازم انواع خطوط تولید با حداقل سرمایه و بالاترین بازدهی را برای علاقه‌مندان فراهم کند.\n                       ")]),t._v(" "),n("h5",{staticClass:"p-4 d-flex float-start"},[n("router-link",{attrs:{to:"/about"}},[t._v("مطالعه بیشتر...")])],1)])])]),t._v(" "),t._m(0)])])])}),r,!1,null,null,null);e.default=component.exports},385:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{items:[{id:1,title:"چشم انداز ",desc:"راه‌اندازی انواع واحدهای تولیدی در سرتاسر کشور، مجهز نمودن کلیه‌ی شهرها از لحاظ تولید اقلام مختلف، و در نتیجه منجر به کاهش هزینه‌های حمل و نقل (به ویژه از تهران به نقاط دوردست) می‌شود و همچنین خودکفایی شهرها، افزایش کارآفرینی و اشتغال‌زایی را نیز به دنبال دارد. بر این اساس دسته‌های کلی اقلام تولیدی که در نظر داریم شامل موارد زیر است:\n 1- شوینده، بهداشتی، سلولزی، پلاستیک و یکبار مصرف 2- مواد غذایی 3- خودرویی 4- ساختمانی "},{id:2,title:"ماموریت ها",desc:"به صورت کلی: ایده کسب و کار، تجهیز واحد تولیدی، تامین مواد اولیه و آموزش بازاریابی و برندینگ محصولات تولیدی نماینده‌ها به عهده شرکت ساخت ایران خواهد بود. متقاضیان خطوط تولید، پس از جلسه با کارشناسان شرکت ساخت ایران، خط تولید مناسب شرایط خود را انتخاب می‌کنند و نماینده تولید ما در شهر خودشان خواهند شد. در ادامه لازم به ذکر است مشاوره‌های لازم، به موقع تحویل گرفتن تجهیزات و آموزش کامل و جامع تولید، برندینگ، بازاریابی، تبلیغات و فروش نیز از اقدامات بعدی شرکت خواهد بود."},{id:3,title:"ارزش ها",desc:"همه بتوانند؛ ما برای هر ایده، حداقل سه، چهار ظرفیت خط تولید در نظر خواهیم داشت که هر فردی با هر سرمایه‌ای بتواند کارگاه خود را تجهیز کند. نگرانی زیاد شدن دست و تولید وجود نداشته باشد؛ ما برای هر شهر به صورت محدود نمایندگی واگذار می‌کنیم (بسته به ظرفیت و جمعیت هر شهر). سنجش توانایی افراد؛ متقاضیان دریافت نمایندگی، قبل از شروع کار، نیاز به ارزیابی توانایی انجام کار توسط کارشناسان شرکت را دارند. آموزش و پیشرفت همواره در صدر است؛ بنابراین پس از راه‌اندازی نیز شما را رها نمی‌کنیم و آموزش‌های تخصصی تولید و به صورت جامع در زمینه راه‌اندازی کسب و کار را خواهیم داشت."}]}}},o=n(12),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-mission-area pb-70"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},t._l(t.items,(function(e,r){return n("div",{key:r,staticClass:"col-md-4"},[n("div",{staticClass:"single-mission mb-30"},[n("h3",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.desc))])])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},446:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(44),n(10),n(27),n(28),n(332)),l=n(338),c=n(347),d={components:{NewsletterStyleOne:o.default,ServicePolicy:c.default,TestimonialOne:l.default,HeaderWithTopbar:function(){return n.e(0).then(n.bind(null,328))},Breadcrumb:function(){return Promise.resolve().then(n.bind(null,324))},AboutMission:function(){return Promise.resolve().then(n.bind(null,385))},BrandLogoCarousel:function(){return n.e(3).then(n.bind(null,390))},TheFooter:function(){return Promise.resolve().then(n.bind(null,321))}},data:function(){return{items:[]}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("departments").then((function(e){t.items=e.data}));case 2:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"درباره ما"}}},v=n(12),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-page-wrapper"},[n("HeaderWithTopbar",{attrs:{containerClass:"container"}}),t._v(" "),n("Breadcrumb",{attrs:{pageTitle:"درباره ما"}}),t._v(" "),t._m(0),t._v(" "),n("AboutMission"),t._v(" "),n("TestimonialOne"),t._v(" "),n("NewsletterStyleOne"),t._v(" "),n("TheFooter")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"support-area pt-100 pb-90"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row mtn-30 "},[n("div",{staticClass:"col-6 mt-30"},[n("div",{staticClass:"support-wrap support-1"},[n("div",{staticClass:"support-content"},[n("h3",{staticClass:"p-3"},[t._v("درباره شرکت ساخت ایران")]),t._v(" "),n("p",[t._v("\n                شرکت ساخت ایران با هدف راه‌اندازی کسب و کار از نوع تولیدی در ظرفیت‌های تولیدی خانگی، کارگاهی و کارخانه\n                تاسیس شده‌است. طی 3 سال گذشته این شرکت توانسته امکانات و شرایط لازم انواع خطوط تولید با حداقل سرمایه و\n                بالاترین بازدهی را برای علاقه‌مندان فراهم کند.\n                "),n("br"),t._v("\n                شروع رسمی فعالیت ساخت ایران در دو بخش خواهد بود:\n                "),n("b",[t._v("اول")]),t._v(" اگر شما ایده‌ای دارید و برای اجرای آن نیاز به شرکت و تیم ساخت ایران دارید. "),n("b",[t._v("دوم")]),t._v("\n                ایده‌هایی که در حال حاضر برای سال جاری توسط شرکت ساخت ایران تدوین و برنامه‌ریزی شده‌است، که از ایده‌ی\n                اولیه تا ساخت ماشین‌آلات و سپس تامین مواد اولیه و در نهایت بازاریابی و برندینگ کالاهای نهایی، همراه\n                شما خواهند بود.\n                "),n("br"),t._v("\n                شما نیز اگر ایده‌ی تولیدی در ذهنتان دارید و برای اجرای آن نیاز به تیم متخصص دارید یا اگر ایده‌ای\n                ندارید ولی تمایل به راه‌اندازی واحد تولیدی خودتان را دارید فرم پایین این صفحه را پر کنید.\n              ")])])])]),t._v(" "),n("div",{staticClass:"col-6 text-center "},[n("div",{staticClass:" text-center"},[n("div",{staticClass:"support-icon"},[n("div",{staticClass:"h_iframe-aparat_embed_frame"},[n("span",{staticStyle:{display:"block","padding-top":"57%"}}),t._v(" "),n("iframe",{attrs:{src:"https://www.aparat.com/video/video/embed/videohash/8409D/vt/frame",allowFullScreen:"true",webkitallowfullscreen:"true",mozallowfullscreen:"true"}})])])])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderWithTopbar:n(326).default,Breadcrumb:n(324).default,AboutMission:n(385).default,TestimonialOne:n(338).default,NewsletterStyleOne:n(332).default,TheFooter:n(321).default})}}]);