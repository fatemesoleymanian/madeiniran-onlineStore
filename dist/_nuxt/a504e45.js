(window.webpackJsonp=window.webpackJsonp||[]).push([[64,23,30,58],{316:function(t,e,r){"use strict";r.r(e);var n={},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"footer-area bg-gray pt-100 pb-70"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-3 col-sm-4"},[r("div",{staticClass:"copyright mb-30"},[r("div",{staticClass:"footer-logo"},[r("n-link",{attrs:{to:"/"}},[r("img",{attrs:{width:"250",height:"100",src:"/img/logo/logo.png",alt:"logo"}})])],1),t._v(" "),t._m(0)])]),t._v(" "),r("div",{staticClass:"col-lg-3 col-sm-4"},[r("div",{staticClass:"footer-widget mb-30 ml-30"},[t._m(1),t._v(" "),r("div",{staticClass:"footer-list"},[r("ul",[r("li",[r("n-link",{attrs:{to:"/about"}},[t._v("درباره شرکت")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/shop"}},[t._v("موقعیت مکانی شرکت")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/contact"}},[t._v("ارتباط با ما")])],1)])])])]),t._v(" "),r("div",{staticClass:"col-lg-3 col-sm-4"},[r("div",{staticClass:"footer-widget mb-30 ml-50"},[t._m(2),t._v(" "),r("div",{staticClass:"footer-list"},[r("ul",[r("li",[r("n-link",{attrs:{to:"/about"}},[t._v("بازگردانی وجه")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/about"}},[t._v("قوانین و مقررات")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/about"}},[t._v("حریم خصوصی")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/about"}},[t._v("پرسش های متداول")])],1)])])])]),t._v(" "),t._m(3)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"pt-5"},[t._v("© 2022 "),r("a",{attrs:{href:"#",target:"_blank"}},[t._v("ساخت ایران")]),t._v("."),r("br"),t._v(" All Rights Reserved")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-title"},[r("h3",[t._v("درباره ما")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-title"},[r("h3",[t._v("صفحات کاربردی")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-lg-3 col-sm-6"},[r("div",{staticClass:"footer-widget mb-30 ml-75"},[r("div",{staticClass:"footer-title"},[r("h3",[t._v("شبکه های اجتماعی")])]),t._v(" "),r("div",{staticClass:"footer-list"},[r("ul",[r("li",[r("a",{attrs:{href:"https://www.facebook.com/",target:"_blank"}},[t._v("فیسبوک")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/",target:"_blank"}},[t._v("توییتر")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.instagram.com/",target:"_blank"}},[t._v("اینستاگرام")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.youtube.com/",target:"_blank"}},[t._v("یوتیوب")])])])])])])}],!1,null,null,null);e.default=component.exports},318:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},319:function(t,e,r){"use strict";r.r(e);var n={props:["pageTitle"]},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"breadcrumb-area pt-35 pb-35 bg-gray-3"},[r("div",{staticClass:"container"},[r("div",{staticClass:"breadcrumb-content text-center"},[r("ul",[r("li",[r("n-link",{attrs:{to:"/"}},[t._v("خانه")])],1),t._v(" "),r("li",{staticClass:"active"},[t._v(t._s(t.pageTitle))])])])])])}),[],!1,null,null,null);e.default=component.exports},321:function(t,e,r){"use strict";r.r(e);r(10),r(26),r(27);var n={components:{Navigation:function(){return Promise.resolve().then(r.bind(null,212))},MiniCart:function(){return Promise.resolve().then(r.bind(null,210))}},props:["containerClass"],computed:{cartItemCount:function(){return this.$store.getters.cartItemCount},wishlistItemCount:function(){return this.$store.getters.wishlistItemCount},compareItemCount:function(){return this.$store.getters.compareItemCount}},data:function(){return{isSticky:!1,isOpenSearch:!1,isOpenAccountSettings:!1,openCart:!1,navOpen:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))}},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("header",{staticClass:"header-area"},[r("div",{staticClass:"header-top-area header-padding-2 d-none d-lg-block"},[r("div",{class:t.containerClass},[t._m(0)])]),t._v(" "),r("div",{staticClass:"header-padding-1 sticky-bar header-res-padding clearfix",class:{"is-sticky":t.isSticky}},[r("div",{class:t.containerClass},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-2 col-md-6 col-4"},[r("div",{staticClass:"logo"},[r("n-link",{attrs:{to:"/"}},[r("img",{attrs:{src:"/img/logo/logo.png",alt:"flone logo"}})])],1)]),t._v(" "),r("div",{staticClass:"col-lg-8 d-none d-lg-block"},[r("div",{staticClass:"main-menu"},[r("nav",[r("Navigation")],1)])]),t._v(" "),r("div",{staticClass:"col-lg-2 col-md-6 col-8"},[r("div",{staticClass:"header-right-wrap"},[r("div",{staticClass:"same-style header-search d-none d-lg-block"},[r("button",{staticClass:"search-active",on:{click:function(e){t.isOpenSearch=!t.isOpenSearch}}},[r("i",{staticClass:"pe-7s-search"})]),t._v(" "),r("div",{staticClass:"search-content",class:{active:t.isOpenSearch}},[t._m(1)])]),t._v(" "),r("div",{staticClass:"same-style account-setting d-none d-lg-block"},[r("button",{staticClass:"account-setting-active",on:{click:function(e){t.isOpenAccountSettings=!t.isOpenAccountSettings}}},[r("i",{staticClass:"pe-7s-user-female"})]),t._v(" "),r("div",{staticClass:"account-dropdown",class:{active:t.isOpenAccountSettings}},[r("ul",[r("li",[r("n-link",{attrs:{to:"/login-register"}},[t._v("Login")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/login-register"}},[t._v("Register")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/my-account"}},[t._v("my account")])],1)])])]),t._v(" "),r("div",{staticClass:"same-style header-compare"},[r("n-link",{attrs:{to:"/compare"}},[r("i",{staticClass:"pe-7s-shuffle"})]),t._v(" "),r("span",{staticClass:"count-style"},[t._v(t._s(t.compareItemCount))])],1),t._v(" "),r("div",{staticClass:"same-style header-wishlist"},[r("n-link",{attrs:{to:"/wishlist"}},[r("i",{staticClass:"pe-7s-like"})]),t._v(" "),r("span",{staticClass:"count-style"},[t._v(t._s(t.wishlistItemCount))])],1),t._v(" "),r("div",{staticClass:"same-style cart-wrap"},[r("button",{staticClass:"icon-cart",on:{click:function(e){t.openCart=!t.openCart}}},[r("i",{staticClass:"pe-7s-shopbag"}),t._v(" "),r("span",{staticClass:"count-style"},[t._v(t._s(t.cartItemCount))])]),t._v(" "),r("MiniCart",{attrs:{miniCart:{visible:t.openCart}},on:{minicartClose:function(e){t.openCart=!t.openCart}}})],1),t._v(" "),r("div",{staticClass:"same-style mobile-menu-toggler d-block d-lg-none"},[r("button",{staticClass:"mobile-aside-button",on:{click:function(e){t.navOpen=!t.navOpen}}},[r("i",{staticClass:"pe-7s-menu"})])])])])])])])]),t._v(" "),t.navOpen?r("OffCanvasMobileMenu",{class:{"show-mobile-menu":t.navOpen},on:{toggleAsideMenu:function(e){t.navOpen=!t.navOpen}}}):t._e()],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header-top-inner"},[r("div",{staticClass:"language-currency-wrap"},[r("div",{staticClass:"same-language-currency language-style"},[r("select",{attrs:{name:"language"}},[r("option",{attrs:{value:"english"}},[t._v("English")]),t._v(" "),r("option",{attrs:{value:"hindi"}},[t._v("Hindi")]),t._v(" "),r("option",{attrs:{value:"spanish"}},[t._v("Spanish")])])]),t._v(" "),r("div",{staticClass:"same-language-currency use-style"},[r("select",{attrs:{name:"currency"}},[r("option",{attrs:{value:"usd"}},[t._v("USD")]),t._v(" "),r("option",{attrs:{value:"eur"}},[t._v("EUR")]),t._v(" "),r("option",{attrs:{value:"rup"}},[t._v("Rup")])])]),t._v(" "),r("div",{staticClass:"same-language-currency"},[r("p",[t._v("Call: "),r("a",{attrs:{href:"callto:3965410"}},[t._v("3965410")])])])]),t._v(" "),r("div",{staticClass:"header-offer"},[r("p",[t._v("Free delivery on order over "),r("span",[t._v("$200")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",[r("input",{attrs:{type:"text",placeholder:"Search"}}),t._v(" "),r("button",{staticClass:"button-search"},[r("i",{staticClass:"pe-7s-search"})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:r(212).default,MiniCart:r(210).default,OffCanvasMobileMenu:r(211).default})},322:function(t,e,r){var n=r(4),o=r(28),l=r(15),c=r(318),v=n("".replace),d="["+c+"]",_=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),f=function(t){return function(e){var r=l(o(e));return 1&t&&(r=v(r,_,"")),2&t&&(r=v(r,m,"")),r}};t.exports={start:f(1),end:f(2),trim:f(3)}},324:function(t,e,r){"use strict";var n=r(3),o=r(322).trim;n({target:"String",proto:!0,forced:r(325)("trim")},{trim:function(){return o(this)}})},325:function(t,e,r){var n=r(84).PROPER,o=r(5),l=r(318);t.exports=function(t){return o((function(){return!!l[t]()||"​᠎"!=="​᠎"[t]()||n&&l[t].name!==t}))}},434:function(t,e,r){"use strict";r.r(e);var n=r(20),o=r(8),l=(r(44),r(10),r(26),r(27),r(34),r(324),{components:{HeaderWithTopbar:function(){return r.e(0).then(r.bind(null,326))},Breadcrumb:function(){return Promise.resolve().then(r.bind(null,319))},TheFooter:function(){return Promise.resolve().then(r.bind(null,316))}},data:function(){return{user_info:"",order_items:[],total:0}},head:function(){return{title:"ثبت سفارش"}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,l,c,v,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.getItem("116111107101110")){e.next=4;break}return e.abrupt("return",window.location="/login-register");case 4:return r=localStorage.getItem("117115101114"),o=JSON.parse(r),t.$axios.setToken(localStorage.getItem("116111107101110"),"Bearer"),e.next=9,Promise.all([t.$axios.get("order/step_3/".concat(o.id)),t.$axios.get("order/user/".concat(o.id))]);case 9:l=e.sent,c=Object(n.a)(l,2),v=c[0],d=c[1],t.user_info=d.data,t.order_items=v.data.products,t.total=v.data.total_price,console.log(t.order_items);case 17:case"end":return e.stop()}}),e)})))()},methods:{saveOrderAndPay:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,data,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=t.user_info.name&&""!==t.user_info.name.trim()){e.next=2;break}return e.abrupt("return",t.$notify({title:"نام و نام خانوادگی الزامی است.",type:"error"}));case 2:if(null!=t.user_info.phone_number&&""!==t.user_info.phone_number.trim()){e.next=4;break}return e.abrupt("return",t.$notify({title:"شماره تماس الزامی است.",type:"error"}));case 4:if(null!=t.user_info.floor&&""!==t.user_info.floor){e.next=6;break}return e.abrupt("return",t.$notify({title:"شماره واحد یا طبقه الزامی است.",type:"error"}));case 6:if(null!=t.user_info.zip_code&&""!==t.user_info.zip_code.trim()){e.next=8;break}return e.abrupt("return",t.$notify({title:"کد پستی الزامی است.",type:"error"}));case 8:if(null!=t.user_info.plaque&&""!==t.user_info.plaque){e.next=10;break}return e.abrupt("return",t.$notify({title:"شماره پلاک الزامی است.",type:"error"}));case 10:if(null!=t.user_info.address&&""!==t.user_info.address.trim()){e.next=12;break}return e.abrupt("return",t.$notify({title:"آدرس مقصد الزامی است.",type:"error"}));case 12:if(11===t.user_info.phone_number.length){e.next=14;break}return e.abrupt("return",t.$notify({title:"شماره تماس اشتباه است.",type:"error"}));case 14:if(10===t.user_info.zip_code.length){e.next=16;break}return e.abrupt("return",t.$notify({title:"کدپستی اشتباه است.",type:"error"}));case 16:return r=localStorage.getItem("117115101114"),n=JSON.parse(r),data={id:n.id,name:t.user_info.name,phone_number:t.user_info.phone_number,address:t.user_info.address,plaque:t.user_info.plaque,zip_code:t.user_info.zip_code,floor:t.user_info.floor},t.$axios.setToken(localStorage.getItem("116111107101110"),"Bearer"),e.next=22,t.$axios.post("order/step_2",data);case 22:o=e.sent,console.log(o.data.msg+"update user message");case 24:case"end":return e.stop()}}),e)})))()}}}),c=r(12),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cart-page-wrapper"},[r("HeaderWithTopbar",{attrs:{containerClass:"container"}}),t._v(" "),r("Breadcrumb",{attrs:{pageTitle:"ثبت سفارش"}}),t._v(" "),r("div",{staticClass:"checkout-area pt-95 pb-100"},[r("div",{staticClass:"container"},[t.order_items.length>0?r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-7"},[r("div",{staticClass:"billing-info-wrap"},[r("h3",[t._v("جزئیات صورتحساب")]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6 col-md-6"},[r("div",{staticClass:"billing-info mb-20"},[r("label",[t._v("نام و نام خانوادگی :")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user_info.name,expression:"user_info.name"}],attrs:{type:"text"},domProps:{value:t.user_info.name},on:{input:function(e){e.target.composing||t.$set(t.user_info,"name",e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"col-lg-6 col-md-6"},[r("div",{staticClass:"billing-info mb-20"},[r("label",[t._v("شماره تماس :")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user_info.phone_number,expression:"user_info.phone_number"}],attrs:{type:"tel",minlength:"11",maxlength:"11"},domProps:{value:t.user_info.phone_number},on:{input:function(e){e.target.composing||t.$set(t.user_info,"phone_number",e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"col-lg-6 col-md-6"},[r("div",{staticClass:"billing-info mb-20"},[r("label",[t._v("طبقه")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user_info.floor,expression:"user_info.floor"}],attrs:{type:"number",min:"0",title:"برای همکف 0 را وارد کنید.",placeholder:"برای همکف 0 را وارد کنید."},domProps:{value:t.user_info.floor},on:{input:function(e){e.target.composing||t.$set(t.user_info,"floor",e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"col-lg-6 col-md-6"},[r("div",{staticClass:"billing-info mb-20"},[r("label",[t._v("کد پستی")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user_info.zip_code,expression:"user_info.zip_code"}],attrs:{type:"text",maxlength:"10",minlength:"10"},domProps:{value:t.user_info.zip_code},on:{input:function(e){e.target.composing||t.$set(t.user_info,"zip_code",e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"col-lg-6 col-md-6"},[r("div",{staticClass:"billing-info mb-20"},[r("label",[t._v("پلاک")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user_info.plaque,expression:"user_info.plaque"}],attrs:{type:"number",min:"0"},domProps:{value:t.user_info.plaque},on:{input:function(e){e.target.composing||t.$set(t.user_info,"plaque",e.target.value)}}})])])]),t._v(" "),r("div",{staticClass:"additional-info-wrap"},[r("div",{staticClass:"additional-info"},[r("label",[t._v("آدرس کامل مقصد")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.user_info.address,expression:"user_info.address"}],attrs:{placeholder:"",name:"address"},domProps:{value:t.user_info.address},on:{input:function(e){e.target.composing||t.$set(t.user_info,"address",e.target.value)}}})])])])]),t._v(" "),r("div",{staticClass:"col-lg-5"},[r("div",{staticClass:"your-order-area"},[r("h3",[t._v("سفارش شما")]),t._v(" "),r("div",{staticClass:"your-order-wrap gray-bg-4"},[r("div",{staticClass:"your-order-product-info"},[t._m(0),t._v(" "),r("div",{staticClass:"your-order-middle"},[r("ul",t._l(t.order_items,(function(e,n){return r("li",{key:n},[r("span",{staticClass:"order-middle-left"},[t._v("\n                                                  "+t._s(e.product.name)+"\n                                                "),r("i",{staticClass:"fa fa-times text-muted",attrs:{"aria-hidden":"true"}}),t._v("\n                                                  "+t._s(e.count)+"\n                                                ")]),t._v(" "),r("span",{staticClass:"order-price"},[t._v("\n                                                "+t._s((e.count*e.state.discounted_price).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))+" تومان")])])})),0)]),t._v(" "),t._m(1),t._v(" "),r("div",{staticClass:"your-order-total"},[r("ul",[r("li",{staticClass:"order-total"},[t._v("مبلغ پرداختی سفارش")]),t._v(" "),r("li",[t._v(t._s(t.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))+" تومان ")])])])])]),t._v(" "),r("div",{staticClass:"place-order mt-25"},[r("button",{staticClass:"btn-hover",on:{click:t.saveOrderAndPay}},[t._v(" ثبت سفارش و پرداخت")])])])])]):r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"empty-cart text-center"},[t._m(2),t._v(" "),r("h4",[t._v("محصولی در سبد خرید شما برای ثبت سفارش وجود ندارد!")]),t._v(" "),r("n-link",{staticClass:"empty-cart__button",attrs:{to:"/shop"}},[t._v("همین الان خرید کن")])],1)])])])]),t._v(" "),r("TheFooter")],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"your-order-top"},[r("ul",[r("li",[t._v("محصول")]),t._v(" "),r("li",[t._v("قیمت به تعداد")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"your-order-bottom"},[r("ul",[r("li",{staticClass:"your-order-shipping"},[t._v("هزینه ارسال")]),t._v(" "),r("li",[t._v("بعد از ثبت سفارش محاسبه خواهد شد")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"icon"},[e("i",{staticClass:"pe-7s-cash"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderWithTopbar:r(321).default,Breadcrumb:r(319).default,TheFooter:r(316).default})}}]);