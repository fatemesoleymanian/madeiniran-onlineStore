(window.webpackJsonp=window.webpackJsonp||[]).push([[62,0,20,21,23,58],{308:function(t,e,r){"use strict";r.r(e);var n={},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"footer-area bg-gray pt-100 pb-70"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-3 col-sm-4"},[r("div",{staticClass:"copyright mb-30"},[r("div",{staticClass:"footer-logo"},[r("n-link",{attrs:{to:"/"}},[r("img",{attrs:{width:"250",height:"100",src:"/img/logo/logo.png",alt:"logo"}})])],1),t._v(" "),t._m(0)])]),t._v(" "),r("div",{staticClass:"col-lg-3 col-sm-4"},[r("div",{staticClass:"footer-widget mb-30 ml-30"},[t._m(1),t._v(" "),r("div",{staticClass:"footer-list"},[r("ul",[r("li",[r("n-link",{attrs:{to:"/about"}},[t._v("درباره شرکت")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/shop"}},[t._v("موقعیت مکانی شرکت")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/contact"}},[t._v("ارتباط با ما")])],1)])])])]),t._v(" "),r("div",{staticClass:"col-lg-3 col-sm-4"},[r("div",{staticClass:"footer-widget mb-30 ml-50"},[t._m(2),t._v(" "),r("div",{staticClass:"footer-list"},[r("ul",[r("li",[r("n-link",{attrs:{to:"/about"}},[t._v("بازگردانی وجه")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/about"}},[t._v("قوانین و مقررات")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/about"}},[t._v("حریم خصوصی")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/about"}},[t._v("پرسش های متداول")])],1)])])])]),t._v(" "),t._m(3)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"pt-5"},[t._v("© 2022 "),r("a",{attrs:{href:"#",target:"_blank"}},[t._v("ساخت ایران")]),t._v("."),r("br"),t._v(" All Rights Reserved")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-title"},[r("h3",[t._v("درباره ما")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-title"},[r("h3",[t._v("صفحات کاربردی")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-lg-3 col-sm-6"},[r("div",{staticClass:"footer-widget mb-30 ml-75"},[r("div",{staticClass:"footer-title"},[r("h3",[t._v("شبکه های اجتماعی")])]),t._v(" "),r("div",{staticClass:"footer-list"},[r("ul",[r("li",[r("a",{attrs:{href:"https://www.facebook.com/",target:"_blank"}},[t._v("فیسبوک")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/",target:"_blank"}},[t._v("توییتر")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.instagram.com/",target:"_blank"}},[t._v("اینستاگرام")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.youtube.com/",target:"_blank"}},[t._v("یوتیوب")])])])])])])}],!1,null,null,null);e.default=component.exports},310:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},311:function(t,e,r){"use strict";r.r(e);var n={props:["pageTitle"]},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"breadcrumb-area pt-35 pb-35 bg-gray-3"},[r("div",{staticClass:"container"},[r("div",{staticClass:"breadcrumb-content text-center"},[r("ul",[r("li",[r("n-link",{attrs:{to:"/"}},[t._v("خانه")])],1),t._v(" "),r("li",{staticClass:"active"},[t._v(t._s(t.pageTitle))])])])])])}),[],!1,null,null,null);e.default=component.exports},314:function(t,e,r){var n=r(4),o=r(28),l=r(15),c=r(310),v=n("".replace),d="["+c+"]",f=RegExp("^"+d+d+"*"),h=RegExp(d+d+"*$"),m=function(t){return function(e){var r=l(o(e));return 1&t&&(r=v(r,f,"")),2&t&&(r=v(r,h,"")),r}};t.exports={start:m(1),end:m(2),trim:m(3)}},318:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(38),r(10),r(26),r(27),r(34),r(51),r(52),r(31),{components:{Navigation:function(){return Promise.resolve().then(r.bind(null,204))},MiniCart:function(){return Promise.resolve().then(r.bind(null,202))}},computed:{cartItemCount:function(){return this.$store.getters.cartItemCount},wishlistItemCount:function(){return this.$store.getters.wishlistItemCount},compareItemCount:function(){return this.$store.getters.compareItemCount}},data:function(){return{isSticky:!1,isOpenSearch:!1,isOpenAccountSettings:!1,openCart:!1,navOpen:!1,auth:!1,srch:"",allSuggestions:[],backupSuggestions:[],active:!1,results:[]}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200})),localStorage.getItem("116111107101110")&&(this.auth=!0)},methods:{logout:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$axios.setToken(localStorage.getItem("116111107101110"),"Bearer"),e.next=3,t.$axios.post("logout");case 3:e.sent,localStorage.removeItem("116111107101110"),localStorage.removeItem("117115101114"),localStorage.removeItem("099097114100"),localStorage.removeItem("key"),t.$axios.setToken(!1),window.location="/";case 10:case"end":return e.stop()}}),e)})))()},search:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t.preventDefault(),e.srch&&(localStorage.setItem("srch",e.srch),window.location="/compare");case 2:case"end":return r.stop()}}),r)})))()},suggestion:function(){var t=this;this.srch?(this.active=!0,this.results=this.allSuggestions.filter((function(e){return e.includes(t.srch)}))):this.active=!1},getSugges:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,i,o,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.preventDefault(),r.next=3,e.$axios.get("/products_search_suggestion");case 3:for(i in(n=r.sent).data.products)e.allSuggestions.push(n.data.products[i].name);for(o in n.data.blogs)e.allSuggestions.push(n.data.blogs[o].title);for(l in n.data.tags)e.allSuggestions.push(n.data.tags[l].name);e.backupSuggestions=e.allSuggestions;case 8:case"end":return r.stop()}}),r)})))()}}}),l=r(12),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("header",{staticClass:"header-area header-padding-1 sticky-bar header-res-padding clearfix",class:{"is-sticky":t.isSticky}},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-2 col-md-6 col-4"},[r("div",{staticClass:"logo"},[r("n-link",{attrs:{to:"/"}},[r("img",{attrs:{src:"/img/logo/logo.png",alt:"logo",height:"50px"}})])],1)]),t._v(" "),r("div",{staticClass:"col-lg-8 d-none d-lg-block"},[r("div",{staticClass:"main-menu"},[r("nav",[r("Navigation")],1)])]),t._v(" "),r("div",{staticClass:"col-lg-2 col-md-6 col-8"},[r("div",{staticClass:"header-right-wrap"},[r("div",{staticClass:"same-style header-search d-none d-lg-block"},[r("button",{staticClass:"search-active",on:{click:function(e){t.isOpenSearch=!t.isOpenSearch}}},[r("i",{staticClass:"pe-7s-search"})]),t._v(" "),r("div",{staticClass:"search-content",class:{active:t.isOpenSearch}},[r("form",[r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.srch,expression:"srch"}],attrs:{type:"text",placeholder:"جستجو ..."},domProps:{value:t.srch},on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search.apply(null,arguments)},t.suggestion],click:t.getSugges,input:function(e){e.target.composing||(t.srch=e.target.value)}}}),t._v(" "),r("button",{staticClass:"button-search",on:{click:t.search}},[r("i",{staticClass:"pe-7s-search"})])])]),t._v(" "),r("ul",{class:t.active?" suggestions clearfix active":"suggestions clearfix",attrs:{id:"srch-sugg"}},t._l(t.results,(function(e,i){return t.results.length?r("li",{key:i,staticClass:"py-2",on:{click:function(r){t.srch=e}}},[t._v("\n                    "+t._s(e)+"\n                  ")]):t._e()})),0)])]),t._v(" "),r("div",{staticClass:"same-style account-setting"},[r("button",{staticClass:"account-setting-active",on:{click:function(e){t.isOpenAccountSettings=!t.isOpenAccountSettings}}},[r("i",{staticClass:"pe-7s-user-female"})]),t._v(" "),r("div",{staticClass:"account-dropdown",class:{active:t.isOpenAccountSettings}},[r("ul",[t.auth?t._e():r("li",[r("n-link",{attrs:{to:"/login-register"}},[t._v("ورود | ثبت نام")])],1),t._v(" "),t.auth?r("li",[r("n-link",{attrs:{to:"/my-account"}},[t._v("پروفایل من")])],1):t._e(),t._v(" "),t.auth?r("li",[r("n-link",{attrs:{to:"/orders"}},[t._v("سفارش های من")])],1):t._e(),t._v(" "),t.auth?r("li",[r("n-link",{attrs:{to:"/comments"}},[t._v("دیدگاه های من")])],1):t._e(),t._v(" "),t.auth?r("li",[r("a",{attrs:{href:"#"},on:{click:t.logout}},[t._v("\n                    خروج از حساب ")])]):t._e()])])]),t._v(" "),t.auth?r("div",{staticClass:"same-style header-wishlist  d-none d-lg-block"},[r("n-link",{attrs:{to:"/wishlist"}},[r("i",{staticClass:"pe-7s-like"})]),t._v(" "),r("span",{staticClass:"count-style"},[t._v(t._s(t.wishlistItemCount))])],1):t._e(),t._v(" "),t.auth?r("div",{staticClass:"same-style cart-wrap"},[r("button",{staticClass:"icon-cart",on:{click:function(e){t.openCart=!t.openCart}}},[r("i",{staticClass:"pe-7s-shopbag"}),t._v(" "),r("span",{staticClass:"count-style"},[t._v(t._s(t.cartItemCount))])]),t._v(" "),r("MiniCart",{attrs:{miniCart:{visible:t.openCart}},on:{minicartClose:function(e){t.openCart=!t.openCart}}})],1):t._e(),t._v(" "),r("div",{staticClass:"same-style mobile-menu-toggler d-block d-lg-none"},[r("button",{staticClass:"mobile-aside-button",on:{click:function(e){t.navOpen=!t.navOpen}}},[r("i",{staticClass:"pe-7s-menu"})])])])])])])]),t._v(" "),t.navOpen?r("OffCanvasMobileMenu",{class:{"show-mobile-menu":t.navOpen},on:{toggleAsideMenu:function(e){t.navOpen=!t.navOpen}}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:r(204).default,MiniCart:r(202).default,OffCanvasMobileMenu:r(203).default})},321:function(t,e,r){"use strict";var n=r(13),o=r(2),l=r(4),c=r(110),v=r(18),d=r(14),f=r(205),h=r(45),m=r(85),_=r(206),C=r(5),k=r(84).f,w=r(40).f,y=r(17).f,x=r(327),S=r(314).trim,I="Number",$=o.Number,O=$.prototype,E=o.TypeError,N=l("".slice),P=l("".charCodeAt),T=function(t){var e=_(t,"number");return"bigint"==typeof e?e:B(e)},B=function(t){var e,r,n,o,l,c,v,code,d=_(t,"number");if(m(d))throw E("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=S(d),43===(e=P(d,0))||45===e){if(88===(r=P(d,2))||120===r)return NaN}else if(48===e){switch(P(d,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+d}for(c=(l=N(d,2)).length,v=0;v<c;v++)if((code=P(l,v))<48||code>o)return NaN;return parseInt(l,n)}return+d};if(c(I,!$(" 0o1")||!$("0b1")||$("+0x1"))){for(var R,j=function(t){var e=arguments.length<1?0:$(T(t)),r=this;return h(O,r)&&C((function(){x(r)}))?f(Object(e),r,j):e},A=n?k($):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),M=0;A.length>M;M++)d($,R=A[M])&&!d(j,R)&&y(j,R,w($,R));j.prototype=O,O.constructor=j,v(o,I,j)}},327:function(t,e,r){var n=r(4);t.exports=n(1..valueOf)},333:function(t,e,r){"use strict";r.r(e);r(30),r(68),r(10),r(69);var n={props:["blog"],methods:{slugify:function(text){return text.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},copyToClipboard:function(){var t=this;navigator.clipboard.writeText("https://madein-iran/blog/".concat(this.blog.id,".com")).then((function(){t.$notify({type:"success",title:"لینک پست کپی شد!"})})).catch((function(){t.$notify({type:"error",title:"خطا در کپی لینک پست!"})}))}}},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"blog-wrap-2 mb-30"},[r("div",{staticClass:"blog-img-2"},[r("n-link",{attrs:{to:"/blog/"+t.blog.id}},[r("img",{attrs:{src:"https://apidemo.madein-iran.com/public"+t.blog.featuredImage,alt:t.blog.title}})])],1),t._v(" "),r("div",{staticClass:"blog-content-2"},[r("div",{staticClass:"blog-meta-2"},[r("ul",[r("li",[t._v(t._s(t.blog.updated_at))])])]),t._v(" "),r("h4",[r("n-link",{attrs:{to:"/blog/"+t.blog.id}},[t._v(t._s(t.blog.title))])],1),t._v(" "),r("p",[t._v(t._s(t.blog.post_excerpt))]),t._v(" "),r("div",{staticClass:"blog-share-comment"},[r("div",{staticClass:"blog-btn-2"},[r("n-link",{attrs:{to:"/blog/"+t.blog.id}},[t._v("بیشتر ...")])],1),t._v(" "),r("div",{staticClass:"blog-share"},[r("div",{staticClass:"share-social"},[r("ul",[r("li",[r("a",{staticClass:"twitter",on:{click:t.copyToClipboard}},[r("i",{staticClass:"fa fa-share",attrs:{"aria-hidden":"true"}})])])])])])])])])}),[],!1,null,null,null);e.default=component.exports},339:function(t,e,r){},372:function(t,e,r){"use strict";r.r(e);var n=r(20),o=r(8),l=(r(38),r(10),r(26),r(27),r(34),r(30),r(207),r(31),{data:function(){return{str:"",latest:[],categories:[],tags:[],blogs_no_filter:[]}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,l,c,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.$axios.get("/tags_only_blog"),t.$axios.get("blog_categories"),t.$axios.get("blogs_latest")]);case 2:r=e.sent,o=Object(n.a)(r,3),l=o[0],c=o[1],v=o[2],t.tags=l.data,t.categories=c.data,t.latest=v.data,t.blogs_no_filter=t.$store.getters.getBlogs;case 11:case"end":return e.stop()}}),e)})))()},methods:{search_blog:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.preventDefault(),!e.str){r.next=8;break}return r.next=4,e.$axios.get("blogs/search/".concat(e.str));case 4:n=r.sent,console.log(n.data.blogs.data),e.$store.dispatch("updateBlogs",n.data.blogs.data),console.log(e.$store.getters.getBlogs);case 8:case"end":return r.stop()}}),r)})))()},filterCat:function(t){var e=this.$store.getters.getBlogs;this.$store.dispatch("updateBlogs",e.filter((function(e){return e.category.name.match(t)})))},filterTag:function(t){var e=this.$store.getters.getBlogs;this.$store.dispatch("updateBlogs",e.filter((function(e){return e.tag.some((function(e){return e.name.match(t)}))})))},clearFilter:function(){this.$store.dispatch("updateBlogs",this.blogs_no_filter)}}}),c=r(12),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"blog-sidebar"},[r("div",{staticClass:"sidebar-widget"},[r("h4",{staticClass:"pro-sidebar-title"},[t._v("جستجوی وبلاگ")]),t._v(" "),r("div",{staticClass:"pro-sidebar-search mb-55 mt-25"},[r("form",{staticClass:"pro-sidebar-search-form"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.str,expression:"str"}],attrs:{type:"text",placeholder:"جستجو ..."},domProps:{value:t.str},on:{input:function(e){e.target.composing||(t.str=e.target.value)}}}),t._v(" "),r("button",{on:{click:t.search_blog}},[r("i",{staticClass:"pe-7s-search"})])])])]),t._v(" "),r("div",{staticClass:"sidebar-widget"},[r("h4",{staticClass:"pro-sidebar-title"},[t._v("پست های اخیر")]),t._v(" "),t._l(t.latest,(function(e,i){return t.latest.length?r("div",{key:i,staticClass:"sidebar-project-wrap mt-30"},[r("div",{staticClass:"single-sidebar-blog"},[r("div",{staticClass:"sidebar-blog-img"},[r("n-link",{attrs:{to:"/blog/"+e.id}},[r("img",{attrs:{src:"https://apidemo.madein-iran.com/public"+e.featuredImage,alt:e.title}})])],1),t._v(" "),r("div",{staticClass:"sidebar-blog-content"},[r("span",[t._v(t._s(e.category.name))]),t._v(" "),r("h4",[r("n-link",{attrs:{to:"/blog/"+e.id}},[t._v("\n                      "+t._s(e.title)+"\n                      ")])],1)])])]):t._e()}))],2),t._v(" "),r("span",{staticClass:"clear_blog_filter py-4",on:{click:t.clearFilter}},[t._v("حذف همه فیلتر ها  "),r("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"}})]),t._v(" "),r("div",{staticClass:"sidebar-widget mt-35"},[r("h4",{staticClass:"pro-sidebar-title"},[t._v("دسته بندیها")]),t._v(" "),t._l(t.categories,(function(e,i){return t.categories.length?r("ul",{key:i,staticClass:"sidebar-widget-list mt-20"},[r("li",{staticClass:"sidebar-widget-list-left",on:{click:function(r){return t.filterCat(e.name)}}},[r("a",{attrs:{href:"#"}},[r("span",{staticClass:"check-mark"}),t._v("\n                    "+t._s(e.name)+"\n                    "),r("span",[t._v(t._s(e.blog.length))])])])]):t._e()}))],2),t._v(" "),r("div",{staticClass:"sidebar-widget mt-50"},[r("h4",{staticClass:"pro-sidebar-title"},[t._v("تگ")]),t._v(" "),r("div",{staticClass:"sidebar-widget-tag mt-25"},t._l(t.tags,(function(e,i){return t.tags.length?r("ul",{key:i},[r("li",{on:{click:function(r){return t.filterTag(e.name)}}},[r("a",{attrs:{href:"#"}},[t._v(t._s(e.name))])])]):t._e()})),0)])])}),[],!1,null,null,null);e.default=component.exports},401:function(t,e,r){"use strict";r(339)},425:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(38),r(10),r(26),r(27),r(53),r(321),{components:{TheHeader:function(){return Promise.resolve().then(r.bind(null,318))},BlogItemStyleTwo:function(){return Promise.resolve().then(r.bind(null,333))},BlogSidebar:function(){return Promise.resolve().then(r.bind(null,372))},TheFooter:function(){return Promise.resolve().then(r.bind(null,308))}},data:function(){return{blogs:this.$store.getters.getBlogs,response:[],currentPage:1,perPage:6,loader:!0}},computed:{getBlog:function(){return this.$store.getters.getBlogs},getItems:function(){var t=(this.currentPage-1)*this.perPage,e=this.currentPage*this.perPage;return this.response.slice(t,e)},getPaginateCount:function(){return Math.ceil(this.response.length/this.perPage)}},methods:{paginateClickCallback:function(t){this.currentPage=Number(t)}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loader=!0,e.next=3,t.$axios.get("blogs");case 3:r=e.sent,localStorage.setItem("blogs",r.data),t.$store.dispatch("updateBlogs",r.data),t.response=r.data,t.loader=!1;case 8:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"وبلاگ "}}}),l=(r(401),r(12)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"blog-page-wrapper"},[r("TheHeader",{attrs:{containerClass:"container"}}),t._v(" "),r("Breadcrumb",{attrs:{pageTitle:"وبلاگ"}}),t._v(" "),r("div",{staticClass:"blog-area pt-100 pb-100"},[r("div",{staticClass:"container"},[t.loader?r("div",{attrs:{id:"loading"}}):t._e(),t._v(" "),r("div",{staticClass:"row flex-row-reverse"},[r("div",{staticClass:"col-lg-9"},[r("div",{staticClass:"ml-20"},[r("div",{staticClass:"row"},t._l(t.getBlog,(function(t,e){return r("div",{key:e,staticClass:"col-md-6 col-12"},[r("BlogItemStyleTwo",{attrs:{blog:t}})],1)})),0)]),t._v(" "),t.getPaginateCount>1?r("div",[r("pagination",{staticClass:"pro-pagination-style shop-pagination mt-30",attrs:{"per-page":t.perPage,records:t.blogs.length,"page-count":t.getPaginateCount},on:{paginate:t.paginateClickCallback},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1):t._e()]),t._v(" "),r("div",{staticClass:"col-lg-3"},[r("BlogSidebar")],1)])])]),t._v(" "),r("TheFooter")],1)}),[],!1,null,"7dbe9654",null);e.default=component.exports;installComponents(component,{TheHeader:r(318).default,Breadcrumb:r(311).default,BlogItemStyleTwo:r(333).default,BlogSidebar:r(372).default,TheFooter:r(308).default})}}]);