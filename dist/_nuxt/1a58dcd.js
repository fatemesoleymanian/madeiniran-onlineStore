(window.webpackJsonp=window.webpackJsonp||[]).push([[15,12,29],{337:function(t,e,n){"use strict";n.r(e);var l={props:["title","subTitle","classes"]},r=n(34),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center",class:t.classes},[n("h2",[t._v(t._s(t.title))]),t._v(" "),n("p",[t._v(t._s(t.subTitle))])])}),[],!1,null,null,null);e.default=component.exports},342:function(t,e,n){},344:function(t,e,n){"use strict";n.r(e);var l={props:["blog"],methods:{}},r=n(34),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog-wrap mb-25"},[n("div",{staticClass:"blog-img"},[n("a",{attrs:{href:"https://madein-iran.com/blog/"+t.blog.slug+"/"}},[n("img",{attrs:{src:t.blog.featured_image.large,alt:t.blog.title}})])]),t._v(" "),n("div",{staticClass:"blog-content-wrap"},[n("div",{staticClass:"blog-content text-center text-dark rounded"},[n("h3",[n("a",{staticClass:"text-dark",attrs:{href:"https://madein-iran.com/blog/"+t.blog.slug+"/"}},[t._v(t._s(t.blog.title))])]),t._v(" "),n("span",{staticClass:"text-dark fw-lighter",staticStyle:{"z-index":"1"}},[t._v("\n        "+t._s(t.blog.post_excerpt.substring(0,55))+"...\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},347:function(t,e,n){"use strict";n(342)},368:function(t,e,n){"use strict";n.r(e);var l=n(9),r=(n(49),n(14),n(35),n(36),{components:{BlogItem:function(){return Promise.resolve().then(n.bind(null,344))}},data:function(){return{blogs:[]}},mounted:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("https://madein-iran.com/blog/wp-json/wl/v1/posts");case 2:n=e.sent,t.blogs=n.data,console.log(t.blogs);case 5:case"end":return e.stop()}}),e)})))()}}),o=(n(347),n(34)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog-area pb-55"},[n("div",{staticClass:"container"},[n("SectionTitleWithSubTitle",{attrs:{title:"مجله ساخت ایران",classes:"section-title mb-55"}}),t._v(" "),n("div",{staticClass:"row"},[t._l(t.blogs,(function(t,e){return n("div",{key:e,staticClass:"col-lg-4 col-sm-6"},[n("BlogItem",{attrs:{blog:t}})],1)})),t._v(" "),t._m(0)],2)],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"view-more text-center mt-20 toggle-btn2"},[n("a",{staticClass:"loadMore2 gradient-link",attrs:{href:"https://madein-iran.com/blog/"}},[t._v("مشاهده همه")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionTitleWithSubTitle:n(337).default,BlogItem:n(344).default})}}]);