(window.webpackJsonp=window.webpackJsonp||[]).push([[89,23,30,58],{308:function(t,e,n){"use strict";n.r(e);var o={},r=n(12),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer-area bg-gray pt-100 pb-70"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-3 col-sm-4"},[n("div",{staticClass:"copyright mb-30"},[n("div",{staticClass:"footer-logo"},[n("n-link",{attrs:{to:"/"}},[n("img",{attrs:{width:"250",height:"100",src:"/img/logo/logo.png",alt:"logo"}})])],1),t._v(" "),t._m(0)])]),t._v(" "),n("div",{staticClass:"col-lg-3 col-sm-4"},[n("div",{staticClass:"footer-widget mb-30 ml-30"},[t._m(1),t._v(" "),n("div",{staticClass:"footer-list"},[n("ul",[n("li",[n("n-link",{attrs:{to:"/about"}},[t._v("درباره شرکت")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/shop"}},[t._v("موقعیت مکانی شرکت")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/contact"}},[t._v("ارتباط با ما")])],1)])])])]),t._v(" "),n("div",{staticClass:"col-lg-3 col-sm-4"},[n("div",{staticClass:"footer-widget mb-30 ml-50"},[t._m(2),t._v(" "),n("div",{staticClass:"footer-list"},[n("ul",[n("li",[n("n-link",{attrs:{to:"/about"}},[t._v("بازگردانی وجه")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/about"}},[t._v("قوانین و مقررات")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/about"}},[t._v("حریم خصوصی")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/about"}},[t._v("پرسش های متداول")])],1)])])])]),t._v(" "),t._m(3)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"pt-5"},[t._v("© 2022 "),n("a",{attrs:{href:"#",target:"_blank"}},[t._v("ساخت ایران")]),t._v("."),n("br"),t._v(" All Rights Reserved")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-title"},[n("h3",[t._v("درباره ما")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-title"},[n("h3",[t._v("صفحات کاربردی")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-3 col-sm-6"},[n("div",{staticClass:"footer-widget mb-30 ml-75"},[n("div",{staticClass:"footer-title"},[n("h3",[t._v("شبکه های اجتماعی")])]),t._v(" "),n("div",{staticClass:"footer-list"},[n("ul",[n("li",[n("a",{attrs:{href:"https://www.facebook.com/",target:"_blank"}},[t._v("فیسبوک")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/",target:"_blank"}},[t._v("توییتر")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.instagram.com/",target:"_blank"}},[t._v("اینستاگرام")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.youtube.com/",target:"_blank"}},[t._v("یوتیوب")])])])])])])}],!1,null,null,null);e.default=component.exports},311:function(t,e,n){"use strict";n.r(e);var o={props:["pageTitle"]},r=n(12),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"breadcrumb-area pt-35 pb-35 bg-gray-3"},[n("div",{staticClass:"container"},[n("div",{staticClass:"breadcrumb-content text-center"},[n("ul",[n("li",[n("n-link",{attrs:{to:"/"}},[t._v("خانه")])],1),t._v(" "),n("li",{staticClass:"active"},[t._v(t._s(t.pageTitle))])])])])])}),[],!1,null,null,null);e.default=component.exports},313:function(t,e,n){"use strict";n.r(e);n(10),n(26),n(27);var o={components:{Navigation:function(){return Promise.resolve().then(n.bind(null,204))},MiniCart:function(){return Promise.resolve().then(n.bind(null,202))}},props:["containerClass"],computed:{cartItemCount:function(){return this.$store.getters.cartItemCount},wishlistItemCount:function(){return this.$store.getters.wishlistItemCount},compareItemCount:function(){return this.$store.getters.compareItemCount}},data:function(){return{isSticky:!1,isOpenSearch:!1,isOpenAccountSettings:!1,openCart:!1,navOpen:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))}},r=n(12),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",{staticClass:"header-area"},[n("div",{staticClass:"header-top-area header-padding-2 d-none d-lg-block"},[n("div",{class:t.containerClass},[t._m(0)])]),t._v(" "),n("div",{staticClass:"header-padding-1 sticky-bar header-res-padding clearfix",class:{"is-sticky":t.isSticky}},[n("div",{class:t.containerClass},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-2 col-md-6 col-4"},[n("div",{staticClass:"logo"},[n("n-link",{attrs:{to:"/"}},[n("img",{attrs:{src:"/img/logo/logo.png",alt:"flone logo"}})])],1)]),t._v(" "),n("div",{staticClass:"col-lg-8 d-none d-lg-block"},[n("div",{staticClass:"main-menu"},[n("nav",[n("Navigation")],1)])]),t._v(" "),n("div",{staticClass:"col-lg-2 col-md-6 col-8"},[n("div",{staticClass:"header-right-wrap"},[n("div",{staticClass:"same-style header-search d-none d-lg-block"},[n("button",{staticClass:"search-active",on:{click:function(e){t.isOpenSearch=!t.isOpenSearch}}},[n("i",{staticClass:"pe-7s-search"})]),t._v(" "),n("div",{staticClass:"search-content",class:{active:t.isOpenSearch}},[t._m(1)])]),t._v(" "),n("div",{staticClass:"same-style account-setting d-none d-lg-block"},[n("button",{staticClass:"account-setting-active",on:{click:function(e){t.isOpenAccountSettings=!t.isOpenAccountSettings}}},[n("i",{staticClass:"pe-7s-user-female"})]),t._v(" "),n("div",{staticClass:"account-dropdown",class:{active:t.isOpenAccountSettings}},[n("ul",[n("li",[n("n-link",{attrs:{to:"/login-register"}},[t._v("Login")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/login-register"}},[t._v("Register")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/my-account"}},[t._v("my account")])],1)])])]),t._v(" "),n("div",{staticClass:"same-style header-compare"},[n("n-link",{attrs:{to:"/compare"}},[n("i",{staticClass:"pe-7s-shuffle"})]),t._v(" "),n("span",{staticClass:"count-style"},[t._v(t._s(t.compareItemCount))])],1),t._v(" "),n("div",{staticClass:"same-style header-wishlist"},[n("n-link",{attrs:{to:"/wishlist"}},[n("i",{staticClass:"pe-7s-like"})]),t._v(" "),n("span",{staticClass:"count-style"},[t._v(t._s(t.wishlistItemCount))])],1),t._v(" "),n("div",{staticClass:"same-style cart-wrap"},[n("button",{staticClass:"icon-cart",on:{click:function(e){t.openCart=!t.openCart}}},[n("i",{staticClass:"pe-7s-shopbag"}),t._v(" "),n("span",{staticClass:"count-style"},[t._v(t._s(t.cartItemCount))])]),t._v(" "),n("MiniCart",{attrs:{miniCart:{visible:t.openCart}},on:{minicartClose:function(e){t.openCart=!t.openCart}}})],1),t._v(" "),n("div",{staticClass:"same-style mobile-menu-toggler d-block d-lg-none"},[n("button",{staticClass:"mobile-aside-button",on:{click:function(e){t.navOpen=!t.navOpen}}},[n("i",{staticClass:"pe-7s-menu"})])])])])])])])]),t._v(" "),t.navOpen?n("OffCanvasMobileMenu",{class:{"show-mobile-menu":t.navOpen},on:{toggleAsideMenu:function(e){t.navOpen=!t.navOpen}}}):t._e()],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-top-inner"},[n("div",{staticClass:"language-currency-wrap"},[n("div",{staticClass:"same-language-currency language-style"},[n("select",{attrs:{name:"language"}},[n("option",{attrs:{value:"english"}},[t._v("English")]),t._v(" "),n("option",{attrs:{value:"hindi"}},[t._v("Hindi")]),t._v(" "),n("option",{attrs:{value:"spanish"}},[t._v("Spanish")])])]),t._v(" "),n("div",{staticClass:"same-language-currency use-style"},[n("select",{attrs:{name:"currency"}},[n("option",{attrs:{value:"usd"}},[t._v("USD")]),t._v(" "),n("option",{attrs:{value:"eur"}},[t._v("EUR")]),t._v(" "),n("option",{attrs:{value:"rup"}},[t._v("Rup")])])]),t._v(" "),n("div",{staticClass:"same-language-currency"},[n("p",[t._v("Call: "),n("a",{attrs:{href:"callto:3965410"}},[t._v("3965410")])])])]),t._v(" "),n("div",{staticClass:"header-offer"},[n("p",[t._v("Free delivery on order over "),n("span",[t._v("$200")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",[n("input",{attrs:{type:"text",placeholder:"Search"}}),t._v(" "),n("button",{staticClass:"button-search"},[n("i",{staticClass:"pe-7s-search"})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:n(204).default,MiniCart:n(202).default,OffCanvasMobileMenu:n(203).default})},365:function(t,e,n){},418:function(t,e,n){"use strict";n(365)},448:function(t,e,n){"use strict";n.r(e);n(10),n(26),n(27);var o={components:{HeaderWithTopbar:function(){return n.e(0).then(n.bind(null,318))},Breadcrumb:function(){return Promise.resolve().then(n.bind(null,311))},TheFooter:function(){return Promise.resolve().then(n.bind(null,308))}},head:function(){return{title:"شرایط استفاده"}}},r=(n(418),n(12)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"terms-conditions-wrapper"},[n("HeaderWithTopbar",{attrs:{containerClass:"container"}}),t._v(" "),n("Breadcrumb",{attrs:{pageTitle:"شرایط استفاده"}}),t._v(" "),t._m(0),t._v(" "),n("TheFooter")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"terms-conditions-inner"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"terms-condition"},[n("h1",{staticClass:"terms-condition-title"},[t._v("Terms & Conditions")]),t._v(" "),n("h5",[t._v("When we’re saying you in this page, we’re referring to a buyer. When we’re saying “We” in this page, we’re referring to the flone authority.")]),t._v(" "),n("p",[t._v("# If you’re under 13 years, then do not visit/use our website.")]),t._v(" "),n("p",[t._v("# To be a member/user of our website, you need to be 18 years old or more.")]),t._v(" "),n("p",[t._v("# You need to provide true and correct information")]),t._v(" "),n("p",[t._v("# When you will purchase an item, then confirm that you agree to our terms & conditions.")]),t._v(" "),n("p",[t._v("# Your payment will be processed through PayPal or other third-party websites.")]),t._v(" "),n("p",[t._v("# Images showing in the preview is demo purpose only. We don’t provide image copyright. You need to replace the images included in the demo content.")]),t._v(" "),n("p",[t._v("# If you face any problem to download your item after purchasing, then you can send an email from our contact page.")]),t._v(" "),n("p",[t._v("# We Will refund only if the product is broken. To make sure the product is broken or not, you need to contact us.")]),t._v(" "),n("p",[t._v("# We have the right to change the policy, terms & Conditions, packages, price, features or any other things on this website.")]),t._v(" "),n("p",[t._v("# As a customer or user of this website, you will need to agree with the terms & conditions.")]),t._v(" "),n("p",[t._v("# If we make any change in terms & conditions, we will post here.")])])])])])])}],!1,null,"e37c91da",null);e.default=component.exports;installComponents(component,{HeaderWithTopbar:n(313).default,Breadcrumb:n(311).default,TheFooter:n(308).default})}}]);