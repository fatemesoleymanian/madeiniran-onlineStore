(window.webpackJsonp=window.webpackJsonp||[]).push([[82,24,32,61],{315:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},316:function(t,e,n){"use strict";var o=n(3),r=n(318).trim;o({target:"String",proto:!0,forced:n(319)("trim")},{trim:function(){return r(this)}})},317:function(t,e,n){},318:function(t,e,n){var o=n(4),r=n(26),l=n(15),c=n(315),d=o("".replace),v="["+c+"]",m=RegExp("^"+v+v+"*"),h=RegExp(v+v+"*$"),f=function(t){return function(e){var n=l(r(e));return 1&t&&(n=d(n,m,"")),2&t&&(n=d(n,h,"")),n}};t.exports={start:f(1),end:f(2),trim:f(3)}},319:function(t,e,n){var o=n(84).PROPER,r=n(5),l=n(315);t.exports=function(t){return r((function(){return!!l[t]()||"​᠎"!=="​᠎"[t]()||o&&l[t].name!==t}))}},321:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"whatsapp"},[e("a",{attrs:{href:"https://api.whatsapp.com/send?phone=989902121048",target:"_blank"}},[e("h5",[e("i",{staticClass:"fa fa-whatsapp fa-2x",attrs:{"aria-hidden":"true"}})])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h5",{staticClass:"pt-5"},[t._v("© 2022 "),n("a",{attrs:{href:"#",target:"_blank"}},[t._v("ساخت ایران")]),t._v("."),n("br"),t._v(" All Rights Reserved")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row pt-3"},[o("div",{staticClass:"col-12"},[o("div",{staticClass:"d-flex align-content-between justify-content-between"},[o("div",{staticClass:"copyright mb-30 "},[o("div",{staticClass:"footer-logo"},[o("a",{attrs:{referrerpolicy:"origin",target:"_blank",href:"https://trustseal.enamad.ir/?id=293199&Code=G6w73PAJDl7irj1t0umR"}},[o("img",{staticStyle:{cursor:"pointer"},attrs:{width:"75",height:"75",referrerpolicy:"origin",src:"https://Trustseal.eNamad.ir/logo.aspx?id=293199&Code=G6w73PAJDl7irj1t0umR",alt:"",id:"G6w73PAJDl7irj1t0umR"}})])])]),t._v(" "),o("div",{staticClass:"copyright mb-30 "},[o("div",{staticClass:"footer-logo"},[o("a",{attrs:{href:"https://logo.samandehi.ir/Verify.aspx?id=317050&p=xlaorfthjyoeobpddshwobpd",target:"_blank",rel:"noopener"}},[o("picture",{attrs:{alt:"Samandehi"}},[o("source",{attrs:{type:"image/webp","data-lazy-srcset":"",srcset:"https://madein-iran.com/Samandehi.png?x-img=v1/format, type_webp, lossless_true"}}),t._v(" "),o("img",{attrs:{alt:"Samandehi","data-lazy-src":"https://madein-iran.com/Samandehi.png",src:n(322),width:"108",height:"118",loading:"lazy"}})])])])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-title"},[n("h3",{staticStyle:{"font-weight":"700"}},[t._v("نقشه سایت")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-4 col-sm-4"},[n("div",{staticClass:"footer-widget mb-30 ml-50"},[n("div",{staticClass:"footer-title"},[n("h3",{staticStyle:{"font-weight":"700"}},[t._v("راه های تماس")])]),t._v(" "),n("div",{staticClass:"footer-list"},[n("ul",[n("li",[n("p",{staticStyle:{"font-family":"persianNumber"}},[t._v("تلفن : "),n("br"),t._v("021-72418400 | 021-72418401 "),n("br"),t._v("021-72418402 |\n                  021-72418403")])]),t._v(" "),n("li",[n("p",{staticStyle:{"font-family":"persianNumber"}},[t._v("واتس اپ : "),n("br"),t._v("09190808506 | 09190808507 "),n("br"),t._v("09902121045 |\n                  09902121046")])]),t._v(" "),n("li",[n("p",[t._v("آدرس : تهران - خیابان ولیعصر - روبروی پارک ملت - برج سایه - طبقه چهاردهم.")])]),t._v(" "),n("li",[n("p",[t._v("شبکه‌های اجتماعی: "),n("a",{attrs:{href:"https://www.instagram.com/madein_ir.ir/",target:"_blank"}},[t._v("اینستاگرام")]),t._v(" - "),n("a",{attrs:{href:"https://www.aparat.com/madein_ir.ir",target:"_blank"}},[t._v("آپارات")])])])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-title"},[n("h3",[n("b",[t._v(" ثبت نام در خبرنامه")])])])}],r=n(8),l=(n(44),n(316),{data:function(){return{informationObj:{full_name:"",phone_number:""},makeButtonLoading:!1}},methods:{checkAndRegisterInNewsletter:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),""!==e.informationObj.full_name.trim()){n.next=3;break}return n.abrupt("return",e.$notify({title:"خطا!",text:"لطفا نام و نام خانوادگی خود را وارد کنید.",type:"error"}));case 3:if(""!==e.informationObj.phone_number.trim()){n.next=5;break}return n.abrupt("return",e.$notify({title:"خطا!",text:"لطفا شماره تلفن همراه خود را وارد کنید.",type:"error"}));case 5:if(11===e.informationObj.phone_number.length){n.next=7;break}return n.abrupt("return",e.$notify({title:"خطا!",text:"لطفا شماره تلفن همراه خود رابه درستی وارد کنید.",type:"error"}));case 7:return e.makeButtonLoading=!0,document.getElementById("news_letter_btn").style.opacity=0,n.next=11,e.$axios.post("/add_new_receiver",e.informationObj).then((function(t){return e.makeButtonLoading=!1,e.$notify({title:"سپاس از مشارکت شما!",text:t.data.msg,type:"success"})})).catch((function(){return e.makeButtonLoading=!1,document.getElementById("news_letter_btn").style.opacity=1,e.$notify({title:"عملیات ناموفق!",text:"خطایی در ثبت اطلاعات رخ داد.",type:"error"})}));case 11:case"end":return n.stop()}}),n)})))()}}}),c=(n(323),n(12)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer-area bg-gray pt-100 pb-70"},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("div",{staticClass:"row px-1"},[n("div",{staticClass:"col-lg-2 col-sm-4 "},[n("div",{staticClass:"copyright mb-30"},[n("div",{staticClass:"footer-logo mt-0 pt-0 text-center"},[n("n-link",{attrs:{to:"/"}},[n("img",{attrs:{src:"/img/logo/logo-sm.png",alt:"logo",id:"logo-footer-sm"}}),t._v(" "),n("img",{attrs:{src:"/img/logo/logo-md.png",alt:"logo",id:"logo-footer-md"}})])],1),t._v(" "),t._m(1),t._v(" "),t._m(2)])]),t._v(" "),n("div",{staticClass:"col-lg-2 col-sm-4 "},[n("div",{staticClass:"footer-widget mb-30 ml-30"},[t._m(3),t._v(" "),n("div",{staticClass:"footer-list"},[n("ul",[n("li",[n("n-link",{attrs:{to:"/shop"}},[t._v("خطوط تولید")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/blog"}},[t._v("وبلاگ")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/about"}},[t._v("درباره ما")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/contact"}},[t._v("تماس با ما")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/terms-conditions"}},[t._v("قوانین و مقررات")])],1)])])])]),t._v(" "),t._m(4),t._v(" "),n("div",{staticClass:"col-lg-4 col-sm-6 border rounded-3 pt-3"},[n("div",{staticClass:"footer-widget mb-30 ml-10"},[t._m(5),t._v(" "),n("div",{staticClass:"subscribe-style"},[n("p",[t._v("با ثبت‌نام در خبرنامه هر دو ماه یک بار با ارائه خطوط تولید جدید، شما می‌‌توانید از طریق دریافت پیامک،\n              در جریان جزئیات قرار بگیرید.")]),t._v(" "),n("div",{staticClass:"subscribe-form"},[n("form",{staticClass:"mc-form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.informationObj.full_name,expression:"informationObj.full_name"}],staticClass:"email",attrs:{type:"text",required:"",placeholder:"نام و نام خانوادگی:",name:"email"},domProps:{value:t.informationObj.full_name},on:{input:function(e){e.target.composing||t.$set(t.informationObj,"full_name",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.informationObj.phone_number,expression:"informationObj.phone_number"}],staticClass:"email",attrs:{type:"text",required:"",placeholder:"شماره تلفن همراه:",name:"email"},domProps:{value:t.informationObj.phone_number},on:{input:function(e){e.target.composing||t.$set(t.informationObj,"phone_number",e.target.value)}}}),t._v(" "),n("button",{staticClass:"button float-start fw-bolder",staticStyle:{"font-size":"18px"},attrs:{name:"subscribe",disabled:t.makeButtonLoading,loading:t.makeButtonLoading,id:"news_letter_btn"},on:{click:t.checkAndRegisterInNewsletter}},[t._v("\n                  "+t._s(t.makeButtonLoading?"کمی صبر کنید...":"ثبت نام")+"\n                ")])])])])])])])])])}),o,!1,null,null,null);e.default=component.exports},322:function(t,e,n){t.exports=n.p+"img/Samandehi.73de332.webp"},323:function(t,e,n){"use strict";n(317)},325:function(t,e,n){"use strict";n.r(e);var o={props:["pageTitle"]},r=n(12),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"breadcrumb-area pt-35 pb-35 bg-gray-3"},[n("div",{staticClass:"container"},[n("div",{staticClass:"breadcrumb-content text-center"},[n("ul",[n("li",[n("n-link",{attrs:{to:"/"}},[t._v("خانه")])],1),t._v(" "),n("li",{staticClass:"active"},[t._v(t._s(t.pageTitle))])])])])])}),[],!1,null,null,null);e.default=component.exports},327:function(t,e,n){"use strict";n.r(e);n(10),n(27),n(28);var o={components:{Navigation:function(){return Promise.resolve().then(n.bind(null,211))},MiniCart:function(){return Promise.resolve().then(n.bind(null,212))}},props:["containerClass"],computed:{cartItemCount:function(){return this.$store.getters.cartItemCount},wishlistItemCount:function(){return this.$store.getters.wishlistItemCount},compareItemCount:function(){return this.$store.getters.compareItemCount}},data:function(){return{isSticky:!1,isOpenSearch:!1,isOpenAccountSettings:!1,openCart:!1,navOpen:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))}},r=n(12),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",{staticClass:"header-area"},[n("div",{staticClass:"header-top-area header-padding-2 d-none d-lg-block"},[n("div",{class:t.containerClass},[t._m(0)])]),t._v(" "),n("div",{staticClass:"header-padding-1 sticky-bar header-res-padding clearfix",class:{"is-sticky":t.isSticky}},[n("div",{class:t.containerClass},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-2 col-md-6 col-4"},[n("div",{staticClass:"logo"},[n("n-link",{attrs:{to:"/"}},[n("img",{attrs:{src:"/img/logo/logo.png",alt:"flone logo"}})])],1)]),t._v(" "),n("div",{staticClass:"col-lg-8 d-none d-lg-block"},[n("div",{staticClass:"main-menu"},[n("nav",[n("Navigation")],1)])]),t._v(" "),n("div",{staticClass:"col-lg-2 col-md-6 col-8"},[n("div",{staticClass:"header-right-wrap"},[n("div",{staticClass:"same-style header-search d-none d-lg-block"},[n("button",{staticClass:"search-active",on:{click:function(e){t.isOpenSearch=!t.isOpenSearch}}},[n("i",{staticClass:"pe-7s-search"})]),t._v(" "),n("div",{staticClass:"search-content",class:{active:t.isOpenSearch}},[t._m(1)])]),t._v(" "),n("div",{staticClass:"same-style account-setting d-none d-lg-block"},[n("button",{staticClass:"account-setting-active",on:{click:function(e){t.isOpenAccountSettings=!t.isOpenAccountSettings}}},[n("i",{staticClass:"pe-7s-user-female"})]),t._v(" "),n("div",{staticClass:"account-dropdown",class:{active:t.isOpenAccountSettings}},[n("ul",[n("li",[n("n-link",{attrs:{to:"/login-register"}},[t._v("Login")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/login-register"}},[t._v("Register")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/my-account"}},[t._v("my account")])],1)])])]),t._v(" "),n("div",{staticClass:"same-style header-compare"},[n("n-link",{attrs:{to:"/compare"}},[n("i",{staticClass:"pe-7s-shuffle"})]),t._v(" "),n("span",{staticClass:"count-style"},[t._v(t._s(t.compareItemCount))])],1),t._v(" "),n("div",{staticClass:"same-style header-wishlist"},[n("n-link",{attrs:{to:"/wishlist"}},[n("i",{staticClass:"pe-7s-like"})]),t._v(" "),n("span",{staticClass:"count-style"},[t._v(t._s(t.wishlistItemCount))])],1),t._v(" "),n("div",{staticClass:"same-style cart-wrap"},[n("button",{staticClass:"icon-cart",on:{click:function(e){t.openCart=!t.openCart}}},[n("i",{staticClass:"pe-7s-shopbag"}),t._v(" "),n("span",{staticClass:"count-style"},[t._v(t._s(t.cartItemCount))])]),t._v(" "),n("MiniCart",{attrs:{miniCart:{visible:t.openCart}},on:{minicartClose:function(e){t.openCart=!t.openCart}}})],1),t._v(" "),n("div",{staticClass:"same-style mobile-menu-toggler d-block d-lg-none"},[n("button",{staticClass:"mobile-aside-button",on:{click:function(e){t.navOpen=!t.navOpen}}},[n("i",{staticClass:"pe-7s-menu"})])])])])])])])]),t._v(" "),t.navOpen?n("OffCanvasMobileMenu",{class:{"show-mobile-menu":t.navOpen},on:{toggleAsideMenu:function(e){t.navOpen=!t.navOpen}}}):t._e()],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-top-inner"},[n("div",{staticClass:"language-currency-wrap"},[n("div",{staticClass:"same-language-currency language-style"},[n("select",{attrs:{name:"language"}},[n("option",{attrs:{value:"english"}},[t._v("English")]),t._v(" "),n("option",{attrs:{value:"hindi"}},[t._v("Hindi")]),t._v(" "),n("option",{attrs:{value:"spanish"}},[t._v("Spanish")])])]),t._v(" "),n("div",{staticClass:"same-language-currency use-style"},[n("select",{attrs:{name:"currency"}},[n("option",{attrs:{value:"usd"}},[t._v("USD")]),t._v(" "),n("option",{attrs:{value:"eur"}},[t._v("EUR")]),t._v(" "),n("option",{attrs:{value:"rup"}},[t._v("Rup")])])]),t._v(" "),n("div",{staticClass:"same-language-currency"},[n("p",[t._v("Call: "),n("a",{attrs:{href:"callto:3965410"}},[t._v("3965410")])])])]),t._v(" "),n("div",{staticClass:"header-offer"},[n("p",[t._v("Free delivery on order over "),n("span",[t._v("$200")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",[n("input",{attrs:{type:"text",placeholder:"Search"}}),t._v(" "),n("button",{staticClass:"button-search"},[n("i",{staticClass:"pe-7s-search"})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:n(211).default,MiniCart:n(212).default,OffCanvasMobileMenu:n(210).default})},380:function(t,e,n){},434:function(t,e,n){"use strict";n(380)},464:function(t,e,n){"use strict";n.r(e);n(10),n(27),n(28);var o={components:{HeaderWithTopbar:function(){return n.e(0).then(n.bind(null,329))},Breadcrumb:function(){return Promise.resolve().then(n.bind(null,325))},TheFooter:function(){return Promise.resolve().then(n.bind(null,321))}},head:function(){return{title:"حریم خصوصی"}}},r=(n(434),n(12)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"privacy-policy-wrapper"},[n("HeaderWithTopbar",{attrs:{containerClass:"container"}}),t._v(" "),n("Breadcrumb",{attrs:{pageTitle:"حریم خصوصی"}}),t._v(" "),t._m(0),t._v(" "),n("TheFooter")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"policy-section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"policy-list"},[n("h3",{staticClass:"policy-title"},[t._v("Who we are ?")]),t._v(" "),n("p",[t._v("Our website address is: "),n("a",{attrs:{href:"http://hasthemes.com"}},[t._v("http://hasthemes.com")])])]),t._v(" "),n("div",{staticClass:"policy-list"},[n("h3",{staticClass:"policy-title"},[t._v("What personal data we collect and why we collect it Comments")]),t._v(" "),n("p",[t._v("When visitors leave comments on the site we collect the data shown in the comments form, and also the visitors IP address and browser user agent string to help spam detection.")]),t._v(" "),n("p",[t._v("An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.")])]),t._v(" "),n("div",{staticClass:"policy-list"},[n("h3",{staticClass:"policy-title"},[t._v("Media")]),t._v(" "),n("p",[t._v("f you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.")])]),t._v(" "),n("div",{staticClass:"policy-list"},[n("h3",{staticClass:"policy-title"},[t._v("Cookies")]),t._v(" "),n("p",[t._v("If you leave a comment on our site you may opt-in to saving your name, email  address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.")]),t._v(" "),n("p",[t._v("If you have an account and you log in to this site, we will set a temporary  cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.")]),t._v(" "),n("p",[t._v("When you log in, we will also set up several cookies to save your login  information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.")]),t._v(" "),n("p",[t._v("If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.")])]),t._v(" "),n("div",{staticClass:"policy-list"},[n("h3",{staticClass:"policy-title"},[t._v("Embedded content from other websites")]),t._v(" "),n("p",[t._v("Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.")]),t._v(" "),n("p",[t._v("These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.")])]),t._v(" "),n("div",{staticClass:"policy-list"},[n("h3",{staticClass:"policy-title"},[t._v("How long we retain your data")]),t._v(" "),n("p",[t._v("If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.")]),t._v(" "),n("p",[t._v("For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.")])]),t._v(" "),n("div",{staticClass:"policy-list"},[n("h3",{staticClass:"policy-title"},[t._v("What rights you have over your data")]),t._v(" "),n("p",[t._v("If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.")])]),t._v(" "),n("div",{staticClass:"policy-list"},[n("h3",{staticClass:"policy-title"},[t._v("Where we send your data")]),t._v(" "),n("p",[t._v("Visitor comments may be checked through an automated spam detection service.")])])])])])])}],!1,null,"21e447e0",null);e.default=component.exports;installComponents(component,{HeaderWithTopbar:n(327).default,Breadcrumb:n(325).default,TheFooter:n(321).default})}}]);