(window.webpackJsonp=window.webpackJsonp||[]).push([[60,13,23,30,56,57,58,59],{316:function(t,e,n){"use strict";n.r(e);var r={},o=n(12),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer-area bg-gray pt-100 pb-70"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-3 col-sm-4"},[n("div",{staticClass:"copyright mb-30"},[n("div",{staticClass:"footer-logo"},[n("n-link",{attrs:{to:"/"}},[n("img",{attrs:{width:"250",height:"100",src:"/img/logo/logo.png",alt:"logo"}})])],1),t._v(" "),t._m(0)])]),t._v(" "),n("div",{staticClass:"col-lg-3 col-sm-4"},[n("div",{staticClass:"footer-widget mb-30 ml-30"},[t._m(1),t._v(" "),n("div",{staticClass:"footer-list"},[n("ul",[n("li",[n("n-link",{attrs:{to:"/about"}},[t._v("درباره شرکت")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/shop"}},[t._v("موقعیت مکانی شرکت")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/contact"}},[t._v("ارتباط با ما")])],1)])])])]),t._v(" "),n("div",{staticClass:"col-lg-3 col-sm-4"},[n("div",{staticClass:"footer-widget mb-30 ml-50"},[t._m(2),t._v(" "),n("div",{staticClass:"footer-list"},[n("ul",[n("li",[n("n-link",{attrs:{to:"/about"}},[t._v("بازگردانی وجه")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/about"}},[t._v("قوانین و مقررات")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/about"}},[t._v("حریم خصوصی")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/about"}},[t._v("پرسش های متداول")])],1)])])])]),t._v(" "),t._m(3)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"pt-5"},[t._v("© 2022 "),n("a",{attrs:{href:"#",target:"_blank"}},[t._v("ساخت ایران")]),t._v("."),n("br"),t._v(" All Rights Reserved")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-title"},[n("h3",[t._v("درباره ما")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-title"},[n("h3",[t._v("صفحات کاربردی")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-3 col-sm-6"},[n("div",{staticClass:"footer-widget mb-30 ml-75"},[n("div",{staticClass:"footer-title"},[n("h3",[t._v("شبکه های اجتماعی")])]),t._v(" "),n("div",{staticClass:"footer-list"},[n("ul",[n("li",[n("a",{attrs:{href:"https://www.facebook.com/",target:"_blank"}},[t._v("فیسبوک")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/",target:"_blank"}},[t._v("توییتر")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.instagram.com/",target:"_blank"}},[t._v("اینستاگرام")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.youtube.com/",target:"_blank"}},[t._v("یوتیوب")])])])])])])}],!1,null,null,null);e.default=component.exports},319:function(t,e,n){"use strict";n.r(e);var r={props:["pageTitle"]},o=n(12),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"breadcrumb-area pt-35 pb-35 bg-gray-3"},[n("div",{staticClass:"container"},[n("div",{staticClass:"breadcrumb-content text-center"},[n("ul",[n("li",[n("n-link",{attrs:{to:"/"}},[t._v("خانه")])],1),t._v(" "),n("li",{staticClass:"active"},[t._v(t._s(t.pageTitle))])])])])])}),[],!1,null,null,null);e.default=component.exports},321:function(t,e,n){"use strict";n.r(e);n(10),n(26),n(27);var r={components:{Navigation:function(){return Promise.resolve().then(n.bind(null,212))},MiniCart:function(){return Promise.resolve().then(n.bind(null,210))}},props:["containerClass"],computed:{cartItemCount:function(){return this.$store.getters.cartItemCount},wishlistItemCount:function(){return this.$store.getters.wishlistItemCount},compareItemCount:function(){return this.$store.getters.compareItemCount}},data:function(){return{isSticky:!1,isOpenSearch:!1,isOpenAccountSettings:!1,openCart:!1,navOpen:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))}},o=n(12),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",{staticClass:"header-area"},[n("div",{staticClass:"header-top-area header-padding-2 d-none d-lg-block"},[n("div",{class:t.containerClass},[t._m(0)])]),t._v(" "),n("div",{staticClass:"header-padding-1 sticky-bar header-res-padding clearfix",class:{"is-sticky":t.isSticky}},[n("div",{class:t.containerClass},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-2 col-md-6 col-4"},[n("div",{staticClass:"logo"},[n("n-link",{attrs:{to:"/"}},[n("img",{attrs:{src:"/img/logo/logo.png",alt:"flone logo"}})])],1)]),t._v(" "),n("div",{staticClass:"col-lg-8 d-none d-lg-block"},[n("div",{staticClass:"main-menu"},[n("nav",[n("Navigation")],1)])]),t._v(" "),n("div",{staticClass:"col-lg-2 col-md-6 col-8"},[n("div",{staticClass:"header-right-wrap"},[n("div",{staticClass:"same-style header-search d-none d-lg-block"},[n("button",{staticClass:"search-active",on:{click:function(e){t.isOpenSearch=!t.isOpenSearch}}},[n("i",{staticClass:"pe-7s-search"})]),t._v(" "),n("div",{staticClass:"search-content",class:{active:t.isOpenSearch}},[t._m(1)])]),t._v(" "),n("div",{staticClass:"same-style account-setting d-none d-lg-block"},[n("button",{staticClass:"account-setting-active",on:{click:function(e){t.isOpenAccountSettings=!t.isOpenAccountSettings}}},[n("i",{staticClass:"pe-7s-user-female"})]),t._v(" "),n("div",{staticClass:"account-dropdown",class:{active:t.isOpenAccountSettings}},[n("ul",[n("li",[n("n-link",{attrs:{to:"/login-register"}},[t._v("Login")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/login-register"}},[t._v("Register")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/my-account"}},[t._v("my account")])],1)])])]),t._v(" "),n("div",{staticClass:"same-style header-compare"},[n("n-link",{attrs:{to:"/compare"}},[n("i",{staticClass:"pe-7s-shuffle"})]),t._v(" "),n("span",{staticClass:"count-style"},[t._v(t._s(t.compareItemCount))])],1),t._v(" "),n("div",{staticClass:"same-style header-wishlist"},[n("n-link",{attrs:{to:"/wishlist"}},[n("i",{staticClass:"pe-7s-like"})]),t._v(" "),n("span",{staticClass:"count-style"},[t._v(t._s(t.wishlistItemCount))])],1),t._v(" "),n("div",{staticClass:"same-style cart-wrap"},[n("button",{staticClass:"icon-cart",on:{click:function(e){t.openCart=!t.openCart}}},[n("i",{staticClass:"pe-7s-shopbag"}),t._v(" "),n("span",{staticClass:"count-style"},[t._v(t._s(t.cartItemCount))])]),t._v(" "),n("MiniCart",{attrs:{miniCart:{visible:t.openCart}},on:{minicartClose:function(e){t.openCart=!t.openCart}}})],1),t._v(" "),n("div",{staticClass:"same-style mobile-menu-toggler d-block d-lg-none"},[n("button",{staticClass:"mobile-aside-button",on:{click:function(e){t.navOpen=!t.navOpen}}},[n("i",{staticClass:"pe-7s-menu"})])])])])])])])]),t._v(" "),t.navOpen?n("OffCanvasMobileMenu",{class:{"show-mobile-menu":t.navOpen},on:{toggleAsideMenu:function(e){t.navOpen=!t.navOpen}}}):t._e()],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-top-inner"},[n("div",{staticClass:"language-currency-wrap"},[n("div",{staticClass:"same-language-currency language-style"},[n("select",{attrs:{name:"language"}},[n("option",{attrs:{value:"english"}},[t._v("English")]),t._v(" "),n("option",{attrs:{value:"hindi"}},[t._v("Hindi")]),t._v(" "),n("option",{attrs:{value:"spanish"}},[t._v("Spanish")])])]),t._v(" "),n("div",{staticClass:"same-language-currency use-style"},[n("select",{attrs:{name:"currency"}},[n("option",{attrs:{value:"usd"}},[t._v("USD")]),t._v(" "),n("option",{attrs:{value:"eur"}},[t._v("EUR")]),t._v(" "),n("option",{attrs:{value:"rup"}},[t._v("Rup")])])]),t._v(" "),n("div",{staticClass:"same-language-currency"},[n("p",[t._v("Call: "),n("a",{attrs:{href:"callto:3965410"}},[t._v("3965410")])])])]),t._v(" "),n("div",{staticClass:"header-offer"},[n("p",[t._v("Free delivery on order over "),n("span",[t._v("$200")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",[n("input",{attrs:{type:"text",placeholder:"Search"}}),t._v(" "),n("button",{staticClass:"button-search"},[n("i",{staticClass:"pe-7s-search"})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:n(212).default,MiniCart:n(210).default,OffCanvasMobileMenu:n(211).default})},337:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(44),{data:function(){return{testimonialOption:{loop:!0,speed:950,autoplay:!0},testimonialData:[]}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/testimonial");case 2:n=e.sent,t.testimonialData=n.data;case 4:case"end":return e.stop()}}),e)})))()}}),l=n(12),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"testimonial-area pb-95"},[n("div",{staticClass:"container"},[n("h4",{staticClass:"text-center"},[t._v("نظرات مشتریان")]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-10 ms-auto me-auto"},[n("swiper",{attrs:{options:t.testimonialOption}},t._l(t.testimonialData,(function(e,r){return n("div",{key:r,staticClass:"swiper-slide single-testimonial text-center"},[n("p",[t._v(t._s(e.desc))]),t._v(" "),n("div",{staticClass:"client-info"},[n("i",{staticClass:"fa fa-map-signs"}),t._v(" "),n("h5",[t._v(t._s(e.name))]),t._v(" "),n("span",[t._v(t._s(e.position))])])])})),0)],1)])])])}),[],!1,null,null,null);e.default=component.exports},340:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{title:"به فروشگاه خط تولید ساخت ایران خوش آمدید!",subTitle:"ما چه کسانی هستیم",desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat irure"}}},o=n(12),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"welcome-area"},[n("div",{staticClass:"container"},[n("div",{staticClass:"welcome-content text-center"},[n("h5",[t._v(t._s(t.subTitle))]),t._v(" "),n("h1",[t._v(t._s(t.title))]),t._v(" "),n("p",[t._v(t._s(t.desc))])])])])}),[],!1,null,null,null);e.default=component.exports},344:function(t,e,n){t.exports=n.p+"img/cosmetics-slider-2.1d6604b.jpg"},377:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{items:[{id:1,title:"چشم انداز ها",desc:"Flone provide how all this mistaken idea of denounc pleasure and sing pain was born an will give you a ete account of the system, and expound the actual teangs the eat explorer of the truth."},{id:2,title:"ماموریت ها",desc:"Flone provide how all this mistaken idea of denounc pleasure and sing pain was born an will give you a ete account of the system, and expound the actual teangs the eat explorer of the truth."},{id:3,title:"ارزش ها",desc:"Flone provide how all this mistaken idea of denounc pleasure and sing pain was born an will give you a ete account of the system, and expound the actual teangs the eat explorer of the truth."}]}}},o=n(12),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-mission-area pb-70"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},t._l(t.items,(function(e,r){return n("div",{key:r,staticClass:"col-md-4"},[n("div",{staticClass:"single-mission mb-30"},[n("h3",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.desc))])])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},378:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{teamMemberData:[{imgSrc:"/img/team/team-1.jpg",name:"Stephen Fleming",designation:"Manager",socialLink:[{url:"https://www.facebook.com/",icon:"fa fa-facebook"},{url:"https://twitter.com/",icon:"fa fa-twitter"},{url:"https://www.instagram.com/",icon:"fa fa-instagram"}]},{imgSrc:"/img/team/team-2.jpg",name:"Jonti Rodes",designation:"Marketing Manager",socialLink:[{url:"https://www.facebook.com/",icon:"fa fa-facebook"},{url:"https://twitter.com/",icon:"fa fa-twitter"},{url:"https://www.instagram.com/",icon:"fa fa-instagram"}]},{imgSrc:"/img/team/team-3.jpg",name:"Robart Carlos",designation:"Chief Designer",socialLink:[{url:"https://www.facebook.com/",icon:"fa fa-facebook"},{url:"https://twitter.com/",icon:"fa fa-twitter"},{url:"https://www.instagram.com/",icon:"fa fa-instagram"}]},{imgSrc:"/img/team/team-4.jpg",name:"Shan Williams",designation:"Engineer",socialLink:[{url:"https://www.facebook.com/",icon:"fa fa-facebook"},{url:"https://twitter.com/",icon:"fa fa-twitter"},{url:"https://www.instagram.com/",icon:"fa fa-instagram"}]}]}}},o=n(12),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"team-area pt-95 pb-70"},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("div",{staticClass:"row"},t._l(t.teamMemberData,(function(e,r){return n("div",{key:r,staticClass:"col-lg-3 col-sm-6"},[n("div",{staticClass:"team-wrapper mb-30"},[n("div",{staticClass:"team-img"},[n("img",{attrs:{src:e.imgSrc,alt:e.name}}),t._v(" "),n("div",{staticClass:"team-action"},t._l(e.socialLink,(function(t,e){return n("a",{key:e,attrs:{href:t.url}},[n("i",{class:t.icon})])})),0)]),t._v(" "),n("div",{staticClass:"team-content text-center"},[n("h4",[t._v(t._s(e.name))]),t._v(" "),n("span",[t._v(t._s(e.designation))])])])])})),0)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-title-2 text-center mb-60"},[n("h2",[t._v("Team Members")]),t._v(" "),n("p",[t._v("There are few team members for our company")])])}],!1,null,null,null);e.default=component.exports},431:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-6 text-center "},[e("div",{staticClass:"support-wrap support-1"},[e("div",{staticClass:"support-icon"},[e("img",{staticClass:"animated w-100",attrs:{width:"500",height:"100",src:n(344),alt:"about-us"}})])])])}],o=n(8),l=(n(44),n(10),n(26),n(27),{components:{TestimonialOne:n(337).default,HeaderWithTopbar:function(){return n.e(0).then(n.bind(null,326))},Breadcrumb:function(){return Promise.resolve().then(n.bind(null,319))},WelcomeMessage:function(){return Promise.resolve().then(n.bind(null,340))},AboutMission:function(){return Promise.resolve().then(n.bind(null,377))},TeamMembers:function(){return Promise.resolve().then(n.bind(null,378))},BrandLogoCarousel:function(){return n.e(3).then(n.bind(null,383))},TheFooter:function(){return Promise.resolve().then(n.bind(null,316))}},data:function(){return{items:[]}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("departments").then((function(e){t.items=e.data}));case 2:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"درباره ما"}}}),c=n(12),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-page-wrapper"},[n("HeaderWithTopbar",{attrs:{containerClass:"container"}}),t._v(" "),n("Breadcrumb",{attrs:{pageTitle:"درباره ما"}}),t._v(" "),n("WelcomeMessage",{staticClass:"pt-100 pb-95"}),t._v(" "),n("div",{staticClass:"support-area pb-90"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row mtn-30 "},[n("div",{staticClass:"col-6 mt-30"},[n("div",{staticClass:"support-wrap support-1"},[n("div",{staticClass:"support-content"},[n("h5",[t._v("TITLE")]),t._v(" "),n("p",[n("router-link",{attrs:{to:"/about"}},[t._v("LINK")])],1)])])]),t._v(" "),t._m(0)])])]),t._v(" "),n("AboutMission"),t._v(" "),n("h2",{staticClass:"text-center p-5"},[t._v("دپارتمان ها")]),t._v(" "),n("TestimonialOne"),t._v(" "),n("TeamMembers"),t._v(" "),n("TheFooter")],1)}),r,!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderWithTopbar:n(321).default,Breadcrumb:n(319).default,WelcomeMessage:n(340).default,AboutMission:n(377).default,TestimonialOne:n(337).default,TeamMembers:n(378).default,TheFooter:n(316).default})}}]);