(window.webpackJsonp=window.webpackJsonp||[]).push([[64,23,30,59],{315:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},316:function(t,e,r){"use strict";var n=r(3),o=r(317).trim;n({target:"String",proto:!0,forced:r(318)("trim")},{trim:function(){return o(this)}})},317:function(t,e,r){var n=r(4),o=r(28),c=r(15),l=r(315),v=n("".replace),d="["+l+"]",m=RegExp("^"+d+d+"*"),_=RegExp(d+d+"*$"),f=function(t){return function(e){var r=c(o(e));return 1&t&&(r=v(r,m,"")),2&t&&(r=v(r,_,"")),r}};t.exports={start:f(1),end:f(2),trim:f(3)}},318:function(t,e,r){var n=r(84).PROPER,o=r(5),c=r(315);t.exports=function(t){return o((function(){return!!c[t]()||"​᠎"!=="​᠎"[t]()||n&&c[t].name!==t}))}},320:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(38),r(316),{data:function(){return{informationObj:{full_name:"",phone_number:""},makeButtonLoading:!1}},methods:{checkAndRegisterInNewsletter:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.preventDefault(),""!==e.informationObj.full_name.trim()){r.next=3;break}return r.abrupt("return",e.$notify({title:"خطا!",text:"لطفا نام و نام خانوادگی خود را وارد کنید.",type:"error"}));case 3:if(""!==e.informationObj.phone_number.trim()){r.next=5;break}return r.abrupt("return",e.$notify({title:"خطا!",text:"لطفا شماره تلفن همراه خود را وارد کنید.",type:"error"}));case 5:if(11===e.informationObj.phone_number.length){r.next=7;break}return r.abrupt("return",e.$notify({title:"خطا!",text:"لطفا شماره تلفن همراه خود رابه درستی وارد کنید.",type:"error"}));case 7:return e.makeButtonLoading=!0,r.next=10,e.$axios.post("/add_new_receiver",e.informationObj).then((function(t){return e.makeButtonLoading=!1,e.$notify({title:"سپاس از مشارکت شما!",text:t.data.msg,type:"success"})})).catch((function(){return e.makeButtonLoading=!1,e.$notify({title:"عملیات ناموفق!",text:"خطایی در ثبت اطلاعات رخ داد.",type:"error"})}));case 10:case"end":return r.stop()}}),r)})))()}}}),c=r(12),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"footer-area bg-gray pt-100 pb-70"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-2 col-sm-4 "},[r("div",{staticClass:"copyright mb-30"},[r("div",{staticClass:"footer-logo mt-0 pt-0 text-center"},[r("n-link",{attrs:{to:"/"}},[r("img",{attrs:{src:"/img/logo/logo.png",alt:"logo"}})])],1),t._v(" "),t._m(0)])]),t._v(" "),r("div",{staticClass:"col-lg-2 col-sm-4 "},[r("div",{staticClass:"footer-widget mb-30 ml-30"},[t._m(1),t._v(" "),r("div",{staticClass:"footer-list"},[r("ul",[r("li",[r("n-link",{attrs:{to:"/shop"}},[t._v("خطوط تولید")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/blog"}},[t._v("وبلاگ")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/about"}},[t._v("درباره ما")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/contact"}},[t._v("تماس با ما")])],1)])])])]),t._v(" "),t._m(2),t._v(" "),r("div",{staticClass:"col-lg-3 col-sm-6"},[r("div",{staticClass:"footer-widget mb-30 ml-10"},[t._m(3),t._v(" "),r("div",{staticClass:"subscribe-style"},[r("p",[t._v("با ثبت‌نام در خبرنامه هر دو ماه یک بار با ارائه خطوط تولید جدید، شما می‌‌توانید از طریق دریافت پیامک،\n              در جریان جزئیات قرار بگیرید.")]),t._v(" "),r("div",{staticClass:"subscribe-form"},[r("form",{staticClass:"mc-form"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.informationObj.full_name,expression:"informationObj.full_name"}],staticClass:"email",attrs:{type:"text",required:"",placeholder:"نام و نام خانوادگی:",name:"email"},domProps:{value:t.informationObj.full_name},on:{input:function(e){e.target.composing||t.$set(t.informationObj,"full_name",e.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.informationObj.phone_number,expression:"informationObj.phone_number"}],staticClass:"email",attrs:{type:"text",required:"",placeholder:"شماره تلفن همراه:",name:"email"},domProps:{value:t.informationObj.phone_number},on:{input:function(e){e.target.composing||t.$set(t.informationObj,"phone_number",e.target.value)}}}),t._v(" "),r("button",{staticClass:"button float-start fw-bolder",staticStyle:{"font-size":"18px"},attrs:{name:"subscribe",disabled:t.makeButtonLoading,loading:t.makeButtonLoading},on:{click:t.checkAndRegisterInNewsletter}},[t._v("\n                  "+t._s(t.makeButtonLoading?"کمی صبر کنید...":"ثبت نام")+"\n                ")])])])])])]),t._v(" "),t._m(4)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"pt-5"},[t._v("© 2022 "),r("a",{attrs:{href:"#",target:"_blank"}},[t._v("ساخت ایران")]),t._v("."),r("br"),t._v(" All Rights Reserved")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-title"},[r("h3",{staticStyle:{"font-weight":"700"}},[t._v("نقشه سایت")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-lg-3 col-sm-4"},[r("div",{staticClass:"footer-widget mb-30 ml-50"},[r("div",{staticClass:"footer-title"},[r("h3",{staticStyle:{"font-weight":"700"}},[t._v("راه های تماس")])]),t._v(" "),r("div",{staticClass:"footer-list"},[r("ul",[r("li",[r("p",[t._v("تلفن : "),r("br"),t._v("021-72418400 | 021-72418401 "),r("br"),t._v("021-72418402 | 021-72418403")])]),t._v(" "),r("li",[r("p",[t._v("واتس اپ : "),r("br"),t._v("09190808506 | 09190808507 "),r("br"),t._v("09902121045 | 09902121046")])]),t._v(" "),r("li",[r("p",[t._v("آدرس : تهران - خیابان ولیعصر - روبروی پارک ملت - برج سایه - طبقه چهاردهم.")])]),t._v(" "),r("li",[r("p",[t._v("شبکه‌های اجتماعی: "),r("a",{attrs:{href:"https://www.instagram.com/madein_ir.ir/",target:"_blank"}},[t._v("اینستاگرام")]),t._v(" - "),r("a",{attrs:{href:"https://www.aparat.com/madein_ir.ir",target:"_blank"}},[t._v("آپارات")])])])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-title"},[r("h3",[r("b",[t._v(" ثبت نام در خبرنامه")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-2 col-sm-4"},[e("div",{staticClass:"copyright mb-30"},[e("div",{staticClass:"footer-logo pull-left"},[e("a",{attrs:{referrerpolicy:"origin",target:"_blank",href:"https://trustseal.enamad.ir/?id=293199&Code=G6w73PAJDl7irj1t0umR"}},[e("img",{staticStyle:{cursor:"pointer"},attrs:{referrerpolicy:"origin",src:"https://Trustseal.eNamad.ir/logo.aspx?id=293199&Code=G6w73PAJDl7irj1t0umR",alt:"",id:"G6w73PAJDl7irj1t0umR"}})])])])])}],!1,null,null,null);e.default=component.exports},322:function(t,e,r){"use strict";r.r(e);var n={props:["pageTitle"]},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"breadcrumb-area pt-35 pb-35 bg-gray-3"},[r("div",{staticClass:"container"},[r("div",{staticClass:"breadcrumb-content text-center"},[r("ul",[r("li",[r("n-link",{attrs:{to:"/"}},[t._v("خانه")])],1),t._v(" "),r("li",{staticClass:"active"},[t._v(t._s(t.pageTitle))])])])])])}),[],!1,null,null,null);e.default=component.exports},324:function(t,e,r){"use strict";r.r(e);r(10),r(26),r(27);var n={components:{Navigation:function(){return Promise.resolve().then(r.bind(null,212))},MiniCart:function(){return Promise.resolve().then(r.bind(null,210))}},props:["containerClass"],computed:{cartItemCount:function(){return this.$store.getters.cartItemCount},wishlistItemCount:function(){return this.$store.getters.wishlistItemCount},compareItemCount:function(){return this.$store.getters.compareItemCount}},data:function(){return{isSticky:!1,isOpenSearch:!1,isOpenAccountSettings:!1,openCart:!1,navOpen:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))}},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("header",{staticClass:"header-area"},[r("div",{staticClass:"header-top-area header-padding-2 d-none d-lg-block"},[r("div",{class:t.containerClass},[t._m(0)])]),t._v(" "),r("div",{staticClass:"header-padding-1 sticky-bar header-res-padding clearfix",class:{"is-sticky":t.isSticky}},[r("div",{class:t.containerClass},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-2 col-md-6 col-4"},[r("div",{staticClass:"logo"},[r("n-link",{attrs:{to:"/"}},[r("img",{attrs:{src:"/img/logo/logo.png",alt:"flone logo"}})])],1)]),t._v(" "),r("div",{staticClass:"col-lg-8 d-none d-lg-block"},[r("div",{staticClass:"main-menu"},[r("nav",[r("Navigation")],1)])]),t._v(" "),r("div",{staticClass:"col-lg-2 col-md-6 col-8"},[r("div",{staticClass:"header-right-wrap"},[r("div",{staticClass:"same-style header-search d-none d-lg-block"},[r("button",{staticClass:"search-active",on:{click:function(e){t.isOpenSearch=!t.isOpenSearch}}},[r("i",{staticClass:"pe-7s-search"})]),t._v(" "),r("div",{staticClass:"search-content",class:{active:t.isOpenSearch}},[t._m(1)])]),t._v(" "),r("div",{staticClass:"same-style account-setting d-none d-lg-block"},[r("button",{staticClass:"account-setting-active",on:{click:function(e){t.isOpenAccountSettings=!t.isOpenAccountSettings}}},[r("i",{staticClass:"pe-7s-user-female"})]),t._v(" "),r("div",{staticClass:"account-dropdown",class:{active:t.isOpenAccountSettings}},[r("ul",[r("li",[r("n-link",{attrs:{to:"/login-register"}},[t._v("Login")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/login-register"}},[t._v("Register")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/my-account"}},[t._v("my account")])],1)])])]),t._v(" "),r("div",{staticClass:"same-style header-compare"},[r("n-link",{attrs:{to:"/compare"}},[r("i",{staticClass:"pe-7s-shuffle"})]),t._v(" "),r("span",{staticClass:"count-style"},[t._v(t._s(t.compareItemCount))])],1),t._v(" "),r("div",{staticClass:"same-style header-wishlist"},[r("n-link",{attrs:{to:"/wishlist"}},[r("i",{staticClass:"pe-7s-like"})]),t._v(" "),r("span",{staticClass:"count-style"},[t._v(t._s(t.wishlistItemCount))])],1),t._v(" "),r("div",{staticClass:"same-style cart-wrap"},[r("button",{staticClass:"icon-cart",on:{click:function(e){t.openCart=!t.openCart}}},[r("i",{staticClass:"pe-7s-shopbag"}),t._v(" "),r("span",{staticClass:"count-style"},[t._v(t._s(t.cartItemCount))])]),t._v(" "),r("MiniCart",{attrs:{miniCart:{visible:t.openCart}},on:{minicartClose:function(e){t.openCart=!t.openCart}}})],1),t._v(" "),r("div",{staticClass:"same-style mobile-menu-toggler d-block d-lg-none"},[r("button",{staticClass:"mobile-aside-button",on:{click:function(e){t.navOpen=!t.navOpen}}},[r("i",{staticClass:"pe-7s-menu"})])])])])])])])]),t._v(" "),t.navOpen?r("OffCanvasMobileMenu",{class:{"show-mobile-menu":t.navOpen},on:{toggleAsideMenu:function(e){t.navOpen=!t.navOpen}}}):t._e()],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header-top-inner"},[r("div",{staticClass:"language-currency-wrap"},[r("div",{staticClass:"same-language-currency language-style"},[r("select",{attrs:{name:"language"}},[r("option",{attrs:{value:"english"}},[t._v("English")]),t._v(" "),r("option",{attrs:{value:"hindi"}},[t._v("Hindi")]),t._v(" "),r("option",{attrs:{value:"spanish"}},[t._v("Spanish")])])]),t._v(" "),r("div",{staticClass:"same-language-currency use-style"},[r("select",{attrs:{name:"currency"}},[r("option",{attrs:{value:"usd"}},[t._v("USD")]),t._v(" "),r("option",{attrs:{value:"eur"}},[t._v("EUR")]),t._v(" "),r("option",{attrs:{value:"rup"}},[t._v("Rup")])])]),t._v(" "),r("div",{staticClass:"same-language-currency"},[r("p",[t._v("Call: "),r("a",{attrs:{href:"callto:3965410"}},[t._v("3965410")])])])]),t._v(" "),r("div",{staticClass:"header-offer"},[r("p",[t._v("Free delivery on order over "),r("span",[t._v("$200")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",[r("input",{attrs:{type:"text",placeholder:"Search"}}),t._v(" "),r("button",{staticClass:"button-search"},[r("i",{staticClass:"pe-7s-search"})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:r(212).default,MiniCart:r(210).default,OffCanvasMobileMenu:r(211).default})},349:function(t,e,r){},412:function(t,e,r){"use strict";r(349)},436:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(38),r(10),r(26),r(27),r(31),r(69),r(70),{components:{HeaderWithTopbar:function(){return r.e(0).then(r.bind(null,326))},Breadcrumb:function(){return Promise.resolve().then(r.bind(null,322))},TheFooter:function(){return Promise.resolve().then(r.bind(null,320))}},data:function(){return{loader:!0,singleQuantity:1,cardProducts:[]}},computed:{products:function(){return this.$store.getters.getCart},total:function(){var t=0;for(var i in this.$store.getters.getCart){t+=this.$store.getters.getCart[i].state.discounted_price*this.$store.getters.getCart[i].count}return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},methods:{incrementProduct:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log(t),e.$store.dispatch("addToCartItem",t),data={id:t.id},e.$axios.setToken(localStorage.getItem("116111107101110"),"Bearer"),r.next=6,e.$axios.post("/card_inc_count",data);case 6:r.sent;case 7:case"end":return r.stop()}}),r)})))()},decrementProduct:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(t.count>1)){r.next=7;break}return e.$store.dispatch("decreaseProduct",t),data={id:t.id},e.$axios.setToken(localStorage.getItem("116111107101110"),"Bearer"),r.next=6,e.$axios.post("/card_dec_count",data);case 6:r.sent;case 7:case"end":return r.stop()}}),r)})))()},removeProduct:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return data={id:t.id},e.$axios.setToken(localStorage.getItem("116111107101110"),"Bearer"),r.next=4,e.$axios.delete("/card",{data:data});case 4:r.sent,e.$notify({title:"محصول از سبد شما حذف گردید!",type:"success"}),e.$store.dispatch("removeProductFromCart",t);case 7:case"end":return r.stop()}}),r)})))()},discountedPrice:function(t){return t.price-t.price*t.discount/100},clearCart:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!confirm("از خالی کردن سبد خرید خود اطمینان دارید؟")){e.next=10;break}return r=localStorage.getItem("117115101114"),n=JSON.parse(r),data={user_id:n.id},t.$axios.setToken(localStorage.getItem("116111107101110"),"Bearer"),e.next=7,t.$axios.delete("/empty_card",{data:data});case 7:e.sent,t.$notify({title:"سبد خرید شما خالی شد!",type:"success"}),t.$store.commit("CLEAR_CART");case 10:case"end":return e.stop()}}),e)})))()}},head:function(){return{title:"سبد خرید"}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.getItem("116111107101110")){e.next=4;break}window.location="/login-register",e.next=10;break;case 4:return t.loader=!0,r=localStorage.getItem("117115101114"),n=JSON.parse(r),t.$axios.setToken(localStorage.getItem("116111107101110"),"Bearer"),e.next=10,t.$axios.get("/card/".concat(n.id)).then((function(e){t.$store.dispatch("initCart",e.data.products),t.cardProducts=e.data.products,t.loader=!1})).catch((function(e){console.log(e),localStorage.removeItem("116111107101110"),localStorage.removeItem("117115101114"),localStorage.removeItem("099097114100"),localStorage.removeItem("key"),t.$axios.setToken(!1),window.location="/"}));case 10:case"end":return e.stop()}}),e)})))()}}),c=(r(412),r(12)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cart-page-wrapper"},[r("HeaderWithTopbar",{attrs:{containerClass:"container"}}),t._v(" "),r("Breadcrumb",{attrs:{pageTitle:"سبد خرید"}}),t._v(" "),r("div",{staticClass:"cart-main-area pt-90 pb-100"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[t.products.length>0?r("div",{staticClass:"col-12"},[r("h3",{staticClass:"cart-page-title"},[t._v("سبد خرید شما")]),t._v(" "),t.loader?r("div",{attrs:{id:"loading"}}):t._e(),t._v(" "),t.loader?t._e():r("div",{staticClass:"table-content table-responsive cart-table-content"},[r("table",[t._m(0),t._v(" "),r("tbody",t._l(t.products,(function(e,n){return r("tr",{key:n},[r("td",{staticClass:"product-thumbnail"},[r("n-link",{attrs:{to:"/product/"+e.product.id}},[r("img",{attrs:{src:"https://api.madein-iran.com/public"+e.product.image,alt:e.product.name}})])],1),t._v(" "),r("td",{staticClass:"product-name"},[r("n-link",{attrs:{to:"/product/"+e.product.id}},[t._v(t._s(e.product.name))])],1),t._v(" "),r("td",{staticClass:"product-price-cart"},[e.product.discount>0?r("del",{staticClass:"old"},[t._v(t._s(e.state.price.replace(/\B(?=(\d{3})+(?!\d))/g,",")))]):t._e()]),t._v(" "),r("td",{staticClass:"product-price-cart"},[r("span",{staticClass:"amount"},[t._v(t._s(e.state.type))])]),t._v(" "),r("td",{staticClass:"product-quantity"},[r("div",{staticClass:"cart-plus-minus"},[r("button",{staticClass:"dec qtybutton",on:{click:function(r){return t.decrementProduct(e)}}},[t._v("-")]),t._v(" "),r("input",{staticClass:"cart-plus-minus-box",attrs:{type:"text",readonly:""},domProps:{value:e.count}}),t._v(" "),r("button",{staticClass:"inc qtybutton",on:{click:function(r){return t.incrementProduct(e)}}},[t._v("+")])])]),t._v(" "),r("td",{staticClass:"product-subtotal"}),t._v(" "),r("td",{staticClass:"product-remove"},[r("button",{on:{click:function(r){return t.removeProduct(e)}}},[r("i",{staticClass:"fa fa-times"})])])])})),0)])]),t._v(" "),t.loader?t._e():r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"cart-shiping-update-wrapper"},[r("div",{staticClass:"cart-shiping-update"},[r("n-link",{attrs:{to:"/shop"}},[t._v("ادامه خرید")])],1),t._v(" "),r("div",{staticClass:"cart-clear"},[r("button",{on:{click:function(e){return t.clearCart()}}},[t._v("خالی کردن سبد خرید")])])])])]),t._v(" "),t.loader?t._e():r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-4 col-md-6"}),t._v(" "),r("div",{staticClass:"col-lg-4 col-md-12"},[r("div",{staticClass:"grand-total"},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),r("n-link",{attrs:{to:"/checkout"}},[t._v("تسویه حساب")])],1)]),t._v(" "),r("div",{staticClass:"col-lg-4 col-md-6"})])]):r("div",{staticClass:"col-12"},[r("div",{staticClass:"empty-cart text-center"},[t._m(4),t._v(" "),r("h4",[t._v("هیچ محصولی در سبد خرید شما یافت نشد!")]),t._v(" "),r("n-link",{staticClass:"empty-cart__button",attrs:{to:"/shop"}},[t._v("همین الان خرید کن")])],1)])])])]),t._v(" "),r("TheFooter")],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("عکس محصول")]),t._v(" "),r("th",[t._v("نام محصول")]),t._v(" "),r("th",[t._v("قیمت محصول")]),t._v(" "),r("th",[t._v("ظرفیت")]),t._v(" "),r("th",[t._v("تعداد")]),t._v(" "),r("th",[t._v("قیمت (بر اساس تعداد)")]),t._v(" "),r("th",[t._v("عملیات")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"title-wrap"},[r("h4",{staticClass:"cart-bottom-title section-bg-gary-cart"},[t._v("مجموع :")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h5",[t._v(" مجموع "),r("span")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h4",{staticClass:"grand-total-title"},[t._v("\n                              مجموع قیمت "),r("span")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"icon"},[e("i",{staticClass:"pe-7s-cart"})])}],!1,null,"7c5a98ba",null);e.default=component.exports;installComponents(component,{HeaderWithTopbar:r(324).default,Breadcrumb:r(322).default,TheFooter:r(320).default})}}]);