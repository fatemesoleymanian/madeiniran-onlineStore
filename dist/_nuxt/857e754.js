(window.webpackJsonp=window.webpackJsonp||[]).push([[93,0,24,32],{317:function(t,e,n){},321:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"whatsapp"},[e("a",{attrs:{href:"https://api.whatsapp.com/send?phone=989902121048",target:"_blank"}},[e("h5",[e("i",{staticClass:"fa fa-whatsapp fa-2x",attrs:{"aria-hidden":"true"}})])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h5",{staticClass:"pt-5"},[t._v("© 2022 "),n("a",{attrs:{href:"#",target:"_blank"}},[t._v("ساخت ایران")]),t._v("."),n("br"),t._v(" All Rights Reserved")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row pt-3"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"d-flex align-content-between justify-content-between"},[r("div",{staticClass:"copyright mb-30 "},[r("div",{staticClass:"footer-logo"},[r("a",{attrs:{referrerpolicy:"origin",target:"_blank",href:"https://trustseal.enamad.ir/?id=293199&Code=G6w73PAJDl7irj1t0umR"}},[r("img",{staticStyle:{cursor:"pointer"},attrs:{width:"75",height:"75",referrerpolicy:"origin",src:"https://Trustseal.eNamad.ir/logo.aspx?id=293199&Code=G6w73PAJDl7irj1t0umR",alt:"",id:"G6w73PAJDl7irj1t0umR"}})])])]),t._v(" "),r("div",{staticClass:"copyright mb-30 "},[r("div",{staticClass:"footer-logo"},[r("a",{attrs:{href:"https://logo.samandehi.ir/Verify.aspx?id=317050&p=xlaorfthjyoeobpddshwobpd",target:"_blank",rel:"noopener"}},[r("picture",{attrs:{alt:"Samandehi"}},[r("source",{attrs:{type:"image/webp","data-lazy-srcset":"",srcset:"https://madein-iran.com/Samandehi.png?x-img=v1/format, type_webp, lossless_true"}}),t._v(" "),r("img",{attrs:{alt:"Samandehi","data-lazy-src":"https://madein-iran.com/Samandehi.png",src:n(322),width:"108",height:"118",loading:"lazy"}})])])])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-title"},[n("h3",{staticStyle:{"font-weight":"700"}},[t._v("نقشه سایت")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-4 col-sm-4"},[n("div",{staticClass:"footer-widget mb-30 ml-50"},[n("div",{staticClass:"footer-title"},[n("h3",{staticStyle:{"font-weight":"700"}},[t._v("راه های تماس")])]),t._v(" "),n("div",{staticClass:"footer-list"},[n("ul",[n("li",[n("p",{staticStyle:{"font-family":"persianNumber"}},[t._v("تلفن : "),n("br"),t._v("021-72418400 | 021-72418401 "),n("br"),t._v("021-72418402 |\n                  021-72418403")])]),t._v(" "),n("li",[n("p",{staticStyle:{"font-family":"persianNumber"}},[t._v("واتس اپ : "),n("br"),t._v("09190808506 | 09190808507 "),n("br"),t._v("09902121045 |\n                  09902121046")])]),t._v(" "),n("li",[n("p",[t._v("آدرس : تهران - خیابان ولیعصر - روبروی پارک ملت - برج سایه - طبقه چهاردهم.")])]),t._v(" "),n("li",[n("p",[t._v("شبکه‌های اجتماعی: "),n("a",{attrs:{href:"https://www.instagram.com/madein_ir.ir/",target:"_blank"}},[t._v("اینستاگرام")]),t._v(" - "),n("a",{attrs:{href:"https://www.aparat.com/madein_ir.ir",target:"_blank"}},[t._v("آپارات")])])])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-title"},[n("h3",[n("b",[t._v(" ثبت نام در خبرنامه")])])])}],o=n(8),l=(n(44),n(316),{data:function(){return{informationObj:{full_name:"",phone_number:""},makeButtonLoading:!1}},methods:{checkAndRegisterInNewsletter:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),""!==e.informationObj.full_name.trim()){n.next=3;break}return n.abrupt("return",e.$notify({title:"خطا!",text:"لطفا نام و نام خانوادگی خود را وارد کنید.",type:"error"}));case 3:if(""!==e.informationObj.phone_number.trim()){n.next=5;break}return n.abrupt("return",e.$notify({title:"خطا!",text:"لطفا شماره تلفن همراه خود را وارد کنید.",type:"error"}));case 5:if(11===e.informationObj.phone_number.length){n.next=7;break}return n.abrupt("return",e.$notify({title:"خطا!",text:"لطفا شماره تلفن همراه خود رابه درستی وارد کنید.",type:"error"}));case 7:return e.makeButtonLoading=!0,document.getElementById("news_letter_btn").style.opacity=0,n.next=11,e.$axios.post("/add_new_receiver",e.informationObj).then((function(t){return e.makeButtonLoading=!1,e.$notify({title:"سپاس از مشارکت شما!",text:t.data.msg,type:"success"})})).catch((function(){return e.makeButtonLoading=!1,document.getElementById("news_letter_btn").style.opacity=1,e.$notify({title:"عملیات ناموفق!",text:"خطایی در ثبت اطلاعات رخ داد.",type:"error"})}));case 11:case"end":return n.stop()}}),n)})))()}}}),c=(n(323),n(12)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer-area bg-gray pt-100 pb-70"},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("div",{staticClass:"row px-1"},[n("div",{staticClass:"col-lg-2 col-sm-4 "},[n("div",{staticClass:"copyright mb-30"},[n("div",{staticClass:"footer-logo mt-0 pt-0 text-center"},[n("n-link",{attrs:{to:"/"}},[n("img",{attrs:{src:"/img/logo/logo-sm.png",alt:"logo",id:"logo-footer-sm"}}),t._v(" "),n("img",{attrs:{src:"/img/logo/logo-md.png",alt:"logo",id:"logo-footer-md"}})])],1),t._v(" "),t._m(1),t._v(" "),t._m(2)])]),t._v(" "),n("div",{staticClass:"col-lg-2 col-sm-4 "},[n("div",{staticClass:"footer-widget mb-30 ml-30"},[t._m(3),t._v(" "),n("div",{staticClass:"footer-list"},[n("ul",[n("li",[n("n-link",{attrs:{to:"/shop"}},[t._v("خطوط تولید")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/blog"}},[t._v("وبلاگ")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/about"}},[t._v("درباره ما")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/contact"}},[t._v("تماس با ما")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/terms-conditions"}},[t._v("قوانین و مقررات")])],1)])])])]),t._v(" "),t._m(4),t._v(" "),n("div",{staticClass:"col-lg-4 col-sm-6 border rounded-3 pt-3"},[n("div",{staticClass:"footer-widget mb-30 ml-10"},[t._m(5),t._v(" "),n("div",{staticClass:"subscribe-style"},[n("p",[t._v("با ثبت‌نام در خبرنامه هر دو ماه یک بار با ارائه خطوط تولید جدید، شما می‌‌توانید از طریق دریافت پیامک،\n              در جریان جزئیات قرار بگیرید.")]),t._v(" "),n("div",{staticClass:"subscribe-form"},[n("form",{staticClass:"mc-form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.informationObj.full_name,expression:"informationObj.full_name"}],staticClass:"email",attrs:{type:"text",required:"",placeholder:"نام و نام خانوادگی:",name:"email"},domProps:{value:t.informationObj.full_name},on:{input:function(e){e.target.composing||t.$set(t.informationObj,"full_name",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.informationObj.phone_number,expression:"informationObj.phone_number"}],staticClass:"email",attrs:{type:"text",required:"",placeholder:"شماره تلفن همراه:",name:"email"},domProps:{value:t.informationObj.phone_number},on:{input:function(e){e.target.composing||t.$set(t.informationObj,"phone_number",e.target.value)}}}),t._v(" "),n("button",{staticClass:"button float-start fw-bolder",staticStyle:{"font-size":"18px"},attrs:{name:"subscribe",disabled:t.makeButtonLoading,loading:t.makeButtonLoading,id:"news_letter_btn"},on:{click:t.checkAndRegisterInNewsletter}},[t._v("\n                  "+t._s(t.makeButtonLoading?"کمی صبر کنید...":"ثبت نام")+"\n                ")])])])])])])])])])}),r,!1,null,null,null);e.default=component.exports},322:function(t,e,n){t.exports=n.p+"img/Samandehi.73de332.webp"},323:function(t,e,n){"use strict";n(317)},325:function(t,e,n){"use strict";n.r(e);var r={props:["pageTitle"]},o=n(12),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"breadcrumb-area pt-35 pb-35 bg-gray-3"},[n("div",{staticClass:"container"},[n("div",{staticClass:"breadcrumb-content text-center"},[n("ul",[n("li",[n("n-link",{attrs:{to:"/"}},[t._v("خانه")])],1),t._v(" "),n("li",{staticClass:"active"},[t._v(t._s(t.pageTitle))])])])])])}),[],!1,null,null,null);e.default=component.exports},327:function(t,e,n){"use strict";n.r(e);n(10),n(27),n(28);var r={components:{Navigation:function(){return Promise.resolve().then(n.bind(null,211))},MiniCart:function(){return Promise.resolve().then(n.bind(null,212))}},props:["containerClass"],computed:{cartItemCount:function(){return this.$store.getters.cartItemCount},wishlistItemCount:function(){return this.$store.getters.wishlistItemCount},compareItemCount:function(){return this.$store.getters.compareItemCount}},data:function(){return{isSticky:!1,isOpenSearch:!1,isOpenAccountSettings:!1,openCart:!1,navOpen:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))}},o=n(12),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",{staticClass:"header-area"},[n("div",{staticClass:"header-top-area header-padding-2 d-none d-lg-block"},[n("div",{class:t.containerClass},[t._m(0)])]),t._v(" "),n("div",{staticClass:"header-padding-1 sticky-bar header-res-padding clearfix",class:{"is-sticky":t.isSticky}},[n("div",{class:t.containerClass},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-2 col-md-6 col-4"},[n("div",{staticClass:"logo"},[n("n-link",{attrs:{to:"/"}},[n("img",{attrs:{src:"/img/logo/logo.png",alt:"flone logo"}})])],1)]),t._v(" "),n("div",{staticClass:"col-lg-8 d-none d-lg-block"},[n("div",{staticClass:"main-menu"},[n("nav",[n("Navigation")],1)])]),t._v(" "),n("div",{staticClass:"col-lg-2 col-md-6 col-8"},[n("div",{staticClass:"header-right-wrap"},[n("div",{staticClass:"same-style header-search d-none d-lg-block"},[n("button",{staticClass:"search-active",on:{click:function(e){t.isOpenSearch=!t.isOpenSearch}}},[n("i",{staticClass:"pe-7s-search"})]),t._v(" "),n("div",{staticClass:"search-content",class:{active:t.isOpenSearch}},[t._m(1)])]),t._v(" "),n("div",{staticClass:"same-style account-setting d-none d-lg-block"},[n("button",{staticClass:"account-setting-active",on:{click:function(e){t.isOpenAccountSettings=!t.isOpenAccountSettings}}},[n("i",{staticClass:"pe-7s-user-female"})]),t._v(" "),n("div",{staticClass:"account-dropdown",class:{active:t.isOpenAccountSettings}},[n("ul",[n("li",[n("n-link",{attrs:{to:"/login-register"}},[t._v("Login")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/login-register"}},[t._v("Register")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/my-account"}},[t._v("my account")])],1)])])]),t._v(" "),n("div",{staticClass:"same-style header-compare"},[n("n-link",{attrs:{to:"/compare"}},[n("i",{staticClass:"pe-7s-shuffle"})]),t._v(" "),n("span",{staticClass:"count-style"},[t._v(t._s(t.compareItemCount))])],1),t._v(" "),n("div",{staticClass:"same-style header-wishlist"},[n("n-link",{attrs:{to:"/wishlist"}},[n("i",{staticClass:"pe-7s-like"})]),t._v(" "),n("span",{staticClass:"count-style"},[t._v(t._s(t.wishlistItemCount))])],1),t._v(" "),n("div",{staticClass:"same-style cart-wrap"},[n("button",{staticClass:"icon-cart",on:{click:function(e){t.openCart=!t.openCart}}},[n("i",{staticClass:"pe-7s-shopbag"}),t._v(" "),n("span",{staticClass:"count-style"},[t._v(t._s(t.cartItemCount))])]),t._v(" "),n("MiniCart",{attrs:{miniCart:{visible:t.openCart}},on:{minicartClose:function(e){t.openCart=!t.openCart}}})],1),t._v(" "),n("div",{staticClass:"same-style mobile-menu-toggler d-block d-lg-none"},[n("button",{staticClass:"mobile-aside-button",on:{click:function(e){t.navOpen=!t.navOpen}}},[n("i",{staticClass:"pe-7s-menu"})])])])])])])])]),t._v(" "),t.navOpen?n("OffCanvasMobileMenu",{class:{"show-mobile-menu":t.navOpen},on:{toggleAsideMenu:function(e){t.navOpen=!t.navOpen}}}):t._e()],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-top-inner"},[n("div",{staticClass:"language-currency-wrap"},[n("div",{staticClass:"same-language-currency language-style"},[n("select",{attrs:{name:"language"}},[n("option",{attrs:{value:"english"}},[t._v("English")]),t._v(" "),n("option",{attrs:{value:"hindi"}},[t._v("Hindi")]),t._v(" "),n("option",{attrs:{value:"spanish"}},[t._v("Spanish")])])]),t._v(" "),n("div",{staticClass:"same-language-currency use-style"},[n("select",{attrs:{name:"currency"}},[n("option",{attrs:{value:"usd"}},[t._v("USD")]),t._v(" "),n("option",{attrs:{value:"eur"}},[t._v("EUR")]),t._v(" "),n("option",{attrs:{value:"rup"}},[t._v("Rup")])])]),t._v(" "),n("div",{staticClass:"same-language-currency"},[n("p",[t._v("Call: "),n("a",{attrs:{href:"callto:3965410"}},[t._v("3965410")])])])]),t._v(" "),n("div",{staticClass:"header-offer"},[n("p",[t._v("Free delivery on order over "),n("span",[t._v("$200")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",[n("input",{attrs:{type:"text",placeholder:"Search"}}),t._v(" "),n("button",{staticClass:"button-search"},[n("i",{staticClass:"pe-7s-search"})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:n(211).default,MiniCart:n(212).default,OffCanvasMobileMenu:n(210).default})},329:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(44),n(10),n(27),n(28),n(34),n(50),n(51),n(29),{components:{Navigation:function(){return Promise.resolve().then(n.bind(null,211))},MiniCart:function(){return Promise.resolve().then(n.bind(null,212))}},computed:{cartItemCount:function(){return this.$store.getters.cartItemCount},wishlistItemCount:function(){return this.$store.getters.wishlistItemCount},compareItemCount:function(){return this.$store.getters.compareItemCount}},data:function(){return{isSticky:!1,isOpenSearch:!1,isOpenAccountSettings:!1,openCart:!1,navOpen:!1,auth:!1,srch:"",allSuggestions:[],backupSuggestions:[],active:!1,results:[]}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200})),localStorage.getItem("116111107101110")&&(this.auth=!0)},methods:{logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$axios.setToken(localStorage.getItem("116111107101110"),"Bearer"),e.next=3,t.$axios.post("logout").then((function(t){})).catch((function(t){}));case 3:localStorage.removeItem("116111107101110"),localStorage.removeItem("117115101114"),localStorage.removeItem("099097114100"),localStorage.removeItem("key"),t.$axios.setToken(!1),window.location="/";case 9:case"end":return e.stop()}}),e)})))()},search:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.preventDefault(),e.srch&&(localStorage.setItem("srch",e.srch),window.location="/compare");case 2:case"end":return n.stop()}}),n)})))()},suggestion:function(){var t=this;this.srch?(this.active=!0,this.results=this.allSuggestions.filter((function(e){return e.includes(t.srch)}))):this.active=!1},getSugges:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,i,o,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.next=3,e.$axios.get("/products_search_suggestion");case 3:for(i in(r=n.sent).data.products)e.allSuggestions.push(r.data.products[i].name);for(o in r.data.blogs)e.allSuggestions.push(r.data.blogs[o].title);for(l in r.data.tags)e.allSuggestions.push(r.data.tags[l].name);e.backupSuggestions=e.allSuggestions;case 8:case"end":return n.stop()}}),n)})))()}}}),l=n(12),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",{staticClass:"header-area header-padding-1 sticky-bar header-res-padding clearfix",class:{"is-sticky":t.isSticky}},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-2 col-md-6 col-4"},[n("div",{staticClass:"logo"},[n("n-link",{attrs:{to:"/"}},[n("img",{attrs:{src:"/img/logo/logo.png",alt:"logo",height:"50px"}})])],1)]),t._v(" "),n("div",{staticClass:"col-lg-8 d-none d-lg-block"},[n("div",{staticClass:"main-menu"},[n("nav",[n("Navigation")],1)])]),t._v(" "),n("div",{staticClass:"col-lg-2 col-md-6 col-8"},[n("div",{staticClass:"header-right-wrap"},[n("div",{staticClass:"same-style header-search d-none d-lg-block"},[n("button",{staticClass:"search-active",on:{click:function(e){t.isOpenSearch=!t.isOpenSearch}}},[n("i",{staticClass:"pe-7s-search"})]),t._v(" "),n("div",{staticClass:"search-content",class:{active:t.isOpenSearch}},[n("form",[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.srch,expression:"srch"}],attrs:{type:"text",placeholder:"جستجو ..."},domProps:{value:t.srch},on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search.apply(null,arguments)},t.suggestion],click:t.getSugges,input:function(e){e.target.composing||(t.srch=e.target.value)}}}),t._v(" "),n("button",{staticClass:"button-search",on:{click:t.search}},[n("i",{staticClass:"pe-7s-search"})])])]),t._v(" "),n("ul",{class:t.active?" suggestions clearfix active":"suggestions clearfix",attrs:{id:"srch-sugg"}},t._l(t.results,(function(e,i){return t.results.length?n("li",{key:i,staticClass:"py-2",on:{click:function(n){t.srch=e}}},[t._v("\n                    "+t._s(e)+"\n                  ")]):t._e()})),0)])]),t._v(" "),n("div",{staticClass:"same-style account-setting"},[n("button",{staticClass:"account-setting-active",on:{click:function(e){t.isOpenAccountSettings=!t.isOpenAccountSettings}}},[n("i",{staticClass:"pe-7s-user-female"})]),t._v(" "),n("div",{staticClass:"account-dropdown",class:{active:t.isOpenAccountSettings}},[n("ul",[t.auth?t._e():n("li",[n("n-link",{attrs:{to:"/login-register"}},[t._v("ورود | ثبت نام")])],1),t._v(" "),t.auth?n("li",[n("n-link",{attrs:{to:"/my-account"}},[t._v("پروفایل من")])],1):t._e(),t._v(" "),t.auth?n("li",[n("n-link",{attrs:{to:"/comments"}},[t._v("دیدگاه های من")])],1):t._e(),t._v(" "),t.auth?n("li",[n("n-link",{attrs:{to:"/tutorial-gate"}},[t._v("ویدئو های آموزشی")])],1):t._e(),t._v(" "),t.auth?n("li",[n("a",{attrs:{href:"#"},on:{click:t.logout}},[t._v("\n                    خروج از حساب ")])]):t._e()])])]),t._v(" "),t.auth?n("div",{staticClass:"same-style header-wishlist  d-none d-lg-block"},[n("n-link",{attrs:{to:"/wishlist"}},[n("i",{staticClass:"pe-7s-like"})]),t._v(" "),n("span",{staticClass:"count-style"},[t._v(t._s(t.wishlistItemCount))])],1):t._e(),t._v(" "),n("div",{staticClass:"same-style mobile-menu-toggler d-block d-lg-none"},[n("button",{staticClass:"mobile-aside-button",on:{click:function(e){t.navOpen=!t.navOpen}}},[n("i",{staticClass:"pe-7s-menu"})])])])])])])]),t._v(" "),t.navOpen?n("OffCanvasMobileMenu",{class:{"show-mobile-menu":t.navOpen},on:{toggleAsideMenu:function(e){t.navOpen=!t.navOpen}}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:n(211).default,OffCanvasMobileMenu:n(210).default})},474:function(t,e,n){"use strict";n.r(e);var r=n(329),o=n(325),l=n(321),c=n(440),d=n.n(c);n(441);var v={name:"tutorial-videos",components:{Breadcrumb:o.default,HeaderWithTopbar:r.default,TheFooter:l.default,VideoPlayer:d.a},head:function(){return{title:"ویدئو های آموزشی"}},methods:{showSelectedVideo:function(video){this.selected_item.src=video.src,this.selected_item.poster=video.poster,this.selected_item.title=video.title,document.getElementById(video.id).style.color="#799cf7"}},data:function(){return{selected_item:{poster:"./static/thumbnails/ep-01.jpg",src:"https://api.madein-iran.com/public/storage/videos/part-01-low.mp4",title:"قسمت اول"},category_1:[{id:"cat1-pt1",poster:"./static/thumbnails/ep-01.jpg",src:"https://api.madein-iran.com/public/storage/videos/part-01-low.mp4",title:"قسمت اول",time:"59:12"},{id:"cat1-pt2",poster:"./static/thumbnails/ep-02.png",src:"https://api.madein-iran.com/public/storage/videos/part-02-low.mp4",title:"قسمت دوم",time:"34:24"}]}},mounted:function(){document.addEventListener("contextmenu",(function(t){t.preventDefault()}),!1)}},m=n(12),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shop-page-wrapper"},[n("HeaderWithTopbar",{attrs:{containerClass:"container"}}),t._v(" "),n("Breadcrumb",{attrs:{pageTitle:"ویدئو های آموزشی"}}),t._v(" "),n("div",{staticClass:"my-account-area pb-80 pt-100"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"ms-auto me-auto col-lg-9"},[n("div",{staticClass:"my-account-wrapper"},[n("div",{staticClass:"panel-group",attrs:{id:"faq"}},[n("div",{staticClass:"panel panel-default single-my-account"},[t._m(0),t._v(" "),n("div",{staticClass:"panel-collapse collapse show",attrs:{id:"my-account-1","data-bs-parent":"#faq"}},[n("div",{staticClass:"panel-body"},[n("div",{staticClass:"myaccount-info-wrapper"},[n("div",{staticClass:"row"},[n("video-player",{staticClass:"my-2",attrs:{src:t.selected_item.src,controlsList:"nodownload",posetr:t.selected_item.poster,allowFullscreen:"",allow:"false",type:"video/mp4"}}),t._v(" "),n("span",{staticClass:"p-3 fw-bold"},[n("b",[t._v(t._s(t.selected_item.title))])]),t._v(" "),n("div",{staticClass:"sidebar-widget mx-2 "},t._l(t.category_1,(function(i){return n("ul",{key:i,staticClass:"sidebar-widget-list mt-20"},[n("li",{staticClass:"sidebar-widget-list-left p-3 border-bottom",attrs:{id:i.id}},[n("a",{attrs:{href:"#"},on:{click:function(e){return t.showSelectedVideo(i)}}},[n("span",{staticClass:"check-mark2"}),t._v("\n                               "+t._s(i.title)+"\n                                "),n("span",{staticStyle:{"min-width":"30px","min-height":"20px"}},[t._v(t._s(i.time))])])])])})),0)],1)])])])])])])])])])]),t._v(" "),n("TheFooter")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel-heading my-account-title"},[n("h3",{staticClass:"panel-title"},[n("a",{attrs:{"data-bs-toggle":"collapse",href:"#my-account-1"}},[t._v("\n                      مهندسی بازاریابی و فروش\n                    ")])])])}],!1,null,"39c17cbc",null);e.default=component.exports;installComponents(component,{HeaderWithTopbar:n(327).default,Breadcrumb:n(325).default,TheFooter:n(321).default})}}]);