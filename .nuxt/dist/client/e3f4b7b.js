(window.webpackJsonp=window.webpackJsonp||[]).push([[65,23,30,58],{308:function(t,e,n){"use strict";n.r(e);var r={},l=n(12),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer-area bg-gray pt-100 pb-70"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-3 col-sm-4"},[n("div",{staticClass:"copyright mb-30"},[n("div",{staticClass:"footer-logo"},[n("n-link",{attrs:{to:"/"}},[n("img",{attrs:{width:"250",height:"100",src:"/img/logo/logo.png",alt:"logo"}})])],1),t._v(" "),t._m(0)])]),t._v(" "),n("div",{staticClass:"col-lg-3 col-sm-4"},[n("div",{staticClass:"footer-widget mb-30 ml-30"},[t._m(1),t._v(" "),n("div",{staticClass:"footer-list"},[n("ul",[n("li",[n("n-link",{attrs:{to:"/about"}},[t._v("درباره شرکت")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/shop"}},[t._v("موقعیت مکانی شرکت")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/contact"}},[t._v("ارتباط با ما")])],1)])])])]),t._v(" "),n("div",{staticClass:"col-lg-3 col-sm-4"},[n("div",{staticClass:"footer-widget mb-30 ml-50"},[t._m(2),t._v(" "),n("div",{staticClass:"footer-list"},[n("ul",[n("li",[n("n-link",{attrs:{to:"/about"}},[t._v("بازگردانی وجه")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/about"}},[t._v("قوانین و مقررات")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/about"}},[t._v("حریم خصوصی")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/about"}},[t._v("پرسش های متداول")])],1)])])])]),t._v(" "),t._m(3)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"pt-5"},[t._v("© 2022 "),n("a",{attrs:{href:"#",target:"_blank"}},[t._v("ساخت ایران")]),t._v("."),n("br"),t._v(" All Rights Reserved")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-title"},[n("h3",[t._v("درباره ما")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-title"},[n("h3",[t._v("صفحات کاربردی")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-3 col-sm-6"},[n("div",{staticClass:"footer-widget mb-30 ml-75"},[n("div",{staticClass:"footer-title"},[n("h3",[t._v("شبکه های اجتماعی")])]),t._v(" "),n("div",{staticClass:"footer-list"},[n("ul",[n("li",[n("a",{attrs:{href:"https://www.facebook.com/",target:"_blank"}},[t._v("فیسبوک")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/",target:"_blank"}},[t._v("توییتر")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.instagram.com/",target:"_blank"}},[t._v("اینستاگرام")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.youtube.com/",target:"_blank"}},[t._v("یوتیوب")])])])])])])}],!1,null,null,null);e.default=component.exports},311:function(t,e,n){"use strict";n.r(e);var r={props:["pageTitle"]},l=n(12),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"breadcrumb-area pt-35 pb-35 bg-gray-3"},[n("div",{staticClass:"container"},[n("div",{staticClass:"breadcrumb-content text-center"},[n("ul",[n("li",[n("n-link",{attrs:{to:"/"}},[t._v("خانه")])],1),t._v(" "),n("li",{staticClass:"active"},[t._v(t._s(t.pageTitle))])])])])])}),[],!1,null,null,null);e.default=component.exports},313:function(t,e,n){"use strict";n.r(e);n(10),n(26),n(27);var r={components:{Navigation:function(){return Promise.resolve().then(n.bind(null,204))},MiniCart:function(){return Promise.resolve().then(n.bind(null,202))}},props:["containerClass"],computed:{cartItemCount:function(){return this.$store.getters.cartItemCount},wishlistItemCount:function(){return this.$store.getters.wishlistItemCount},compareItemCount:function(){return this.$store.getters.compareItemCount}},data:function(){return{isSticky:!1,isOpenSearch:!1,isOpenAccountSettings:!1,openCart:!1,navOpen:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))}},l=n(12),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",{staticClass:"header-area"},[n("div",{staticClass:"header-top-area header-padding-2 d-none d-lg-block"},[n("div",{class:t.containerClass},[t._m(0)])]),t._v(" "),n("div",{staticClass:"header-padding-1 sticky-bar header-res-padding clearfix",class:{"is-sticky":t.isSticky}},[n("div",{class:t.containerClass},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-2 col-md-6 col-4"},[n("div",{staticClass:"logo"},[n("n-link",{attrs:{to:"/"}},[n("img",{attrs:{src:"/img/logo/logo.png",alt:"flone logo"}})])],1)]),t._v(" "),n("div",{staticClass:"col-lg-8 d-none d-lg-block"},[n("div",{staticClass:"main-menu"},[n("nav",[n("Navigation")],1)])]),t._v(" "),n("div",{staticClass:"col-lg-2 col-md-6 col-8"},[n("div",{staticClass:"header-right-wrap"},[n("div",{staticClass:"same-style header-search d-none d-lg-block"},[n("button",{staticClass:"search-active",on:{click:function(e){t.isOpenSearch=!t.isOpenSearch}}},[n("i",{staticClass:"pe-7s-search"})]),t._v(" "),n("div",{staticClass:"search-content",class:{active:t.isOpenSearch}},[t._m(1)])]),t._v(" "),n("div",{staticClass:"same-style account-setting d-none d-lg-block"},[n("button",{staticClass:"account-setting-active",on:{click:function(e){t.isOpenAccountSettings=!t.isOpenAccountSettings}}},[n("i",{staticClass:"pe-7s-user-female"})]),t._v(" "),n("div",{staticClass:"account-dropdown",class:{active:t.isOpenAccountSettings}},[n("ul",[n("li",[n("n-link",{attrs:{to:"/login-register"}},[t._v("Login")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/login-register"}},[t._v("Register")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/my-account"}},[t._v("my account")])],1)])])]),t._v(" "),n("div",{staticClass:"same-style header-compare"},[n("n-link",{attrs:{to:"/compare"}},[n("i",{staticClass:"pe-7s-shuffle"})]),t._v(" "),n("span",{staticClass:"count-style"},[t._v(t._s(t.compareItemCount))])],1),t._v(" "),n("div",{staticClass:"same-style header-wishlist"},[n("n-link",{attrs:{to:"/wishlist"}},[n("i",{staticClass:"pe-7s-like"})]),t._v(" "),n("span",{staticClass:"count-style"},[t._v(t._s(t.wishlistItemCount))])],1),t._v(" "),n("div",{staticClass:"same-style cart-wrap"},[n("button",{staticClass:"icon-cart",on:{click:function(e){t.openCart=!t.openCart}}},[n("i",{staticClass:"pe-7s-shopbag"}),t._v(" "),n("span",{staticClass:"count-style"},[t._v(t._s(t.cartItemCount))])]),t._v(" "),n("MiniCart",{attrs:{miniCart:{visible:t.openCart}},on:{minicartClose:function(e){t.openCart=!t.openCart}}})],1),t._v(" "),n("div",{staticClass:"same-style mobile-menu-toggler d-block d-lg-none"},[n("button",{staticClass:"mobile-aside-button",on:{click:function(e){t.navOpen=!t.navOpen}}},[n("i",{staticClass:"pe-7s-menu"})])])])])])])])]),t._v(" "),t.navOpen?n("OffCanvasMobileMenu",{class:{"show-mobile-menu":t.navOpen},on:{toggleAsideMenu:function(e){t.navOpen=!t.navOpen}}}):t._e()],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-top-inner"},[n("div",{staticClass:"language-currency-wrap"},[n("div",{staticClass:"same-language-currency language-style"},[n("select",{attrs:{name:"language"}},[n("option",{attrs:{value:"english"}},[t._v("English")]),t._v(" "),n("option",{attrs:{value:"hindi"}},[t._v("Hindi")]),t._v(" "),n("option",{attrs:{value:"spanish"}},[t._v("Spanish")])])]),t._v(" "),n("div",{staticClass:"same-language-currency use-style"},[n("select",{attrs:{name:"currency"}},[n("option",{attrs:{value:"usd"}},[t._v("USD")]),t._v(" "),n("option",{attrs:{value:"eur"}},[t._v("EUR")]),t._v(" "),n("option",{attrs:{value:"rup"}},[t._v("Rup")])])]),t._v(" "),n("div",{staticClass:"same-language-currency"},[n("p",[t._v("Call: "),n("a",{attrs:{href:"callto:3965410"}},[t._v("3965410")])])])]),t._v(" "),n("div",{staticClass:"header-offer"},[n("p",[t._v("Free delivery on order over "),n("span",[t._v("$200")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",[n("input",{attrs:{type:"text",placeholder:"Search"}}),t._v(" "),n("button",{staticClass:"button-search"},[n("i",{staticClass:"pe-7s-search"})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:n(204).default,MiniCart:n(202).default,OffCanvasMobileMenu:n(203).default})},427:function(t,e,n){"use strict";n.r(e);var r=n(8),l=(n(43),n(10),n(26),n(27),{components:{HeaderWithTopbar:function(){return n.e(0).then(n.bind(null,318))},Breadcrumb:function(){return Promise.resolve().then(n.bind(null,311))},ProductGridItem:function(){return n.e(9).then(n.bind(null,320))},QuickView:function(){return n.e(10).then(n.bind(null,309))},TheFooter:function(){return Promise.resolve().then(n.bind(null,308))}},data:function(){return{comments:[]}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("117115101114"),r=JSON.parse(n),e.next=4,t.$axios.get("/show_comments".concat(r.id)).then((function(e){t.comments=e.data})).catch((function(){return t.$notify({text:"خطایی رخ داد !",type:"error"})}));case 4:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"دیدگاه های من "}}}),o=n(12),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shop-page-wrapper"},[n("HeaderWithTopbar",{attrs:{containerClass:"container"}}),t._v(" "),n("Breadcrumb",{attrs:{pageTitle:"دیدگاه های من"}}),t._v(" "),n("div",{staticClass:"container p-5 my-5 border",staticStyle:{"border-radius":"5px"}},[n("div",{staticClass:"row my-5"},[n("div",{staticClass:"col-md-2 pb-sm-3"},[t.comments?n("h3",{staticClass:"d-flex justify-content-center py-5 text-dark",staticStyle:{"font-weight":"500"}},[t._v("دیدگاه ها")]):t._e()]),t._v(" "),n("div",{staticClass:"col-md-10"},t._l(t.comments,(function(e,i){return t.comments?n("div",{key:i,staticClass:"review-wrapper rounded bg-gray",staticStyle:{"border-top":"1px solid #a749ff"}},[n("div",{staticClass:"row text-center fw-bold py-4 my-2"},[n("div",{staticClass:"col-3"},[n("h4",[t._v(t._s(e.comment))])]),t._v(" "),n("div",{staticClass:"col-3"},[n("h5",[t._v("ایجاد در "+t._s(e.created_at))])]),t._v(" "),n("div",{staticClass:"col-3"},[n("p",[t._v(t._s(e.status?"تایید شده":"هنوز تایید نشده"))])]),t._v(" "),n("div",{staticClass:"col-3"},[n("p",[n("a",{staticStyle:{color:"#a749ff"},attrs:{href:"/product/"+e.product_id}},[t._v("\n              مشاهده محصول\n            ")])])])])]):t._e()})),0),t._v(" "),t.comments.length?t._e():n("div",[t._m(0)])])]),t._v(" "),n("the-footer")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("h5",{staticClass:"fw-bold"},[t._v("هنوز هیچ نظری ندارید!")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderWithTopbar:n(313).default,Breadcrumb:n(311).default,TheFooter:n(308).default})}}]);