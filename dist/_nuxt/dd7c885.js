(window.webpackJsonp=window.webpackJsonp||[]).push([[14,11,28],{333:function(t,e,l){"use strict";l.r(e);var n={props:["title","subTitle","classes"]},r=l(34),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"text-center",class:t.classes},[l("h2",[t._v(t._s(t.title))]),t._v(" "),l("p",[t._v(t._s(t.subTitle))])])}),[],!1,null,null,null);e.default=component.exports},336:function(t,e,l){"use strict";l.r(e);var n={props:["blog"],methods:{}},r=l(34),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"blog-wrap mb-25"},[l("div",{staticClass:"blog-img"},[l("a",{attrs:{href:"https://www.madein-iran.com/blog/"+t.blog.slug+"/"}},[l("img",{attrs:{src:t.blog.featured_image.large,alt:t.blog.title}})])]),t._v(" "),l("div",{staticClass:"blog-content-wrap"},[l("div",{staticClass:"blog-content text-center"},[l("h3",[l("a",{attrs:{href:"https://www.madein-iran.com/blog/"+t.blog.slug+"/"}},[t._v(t._s(t.blog.title))])]),t._v(" "),l("span",[t._v(t._s(t.blog.post_excerpt.substring(0,55))+"...")])])])])}),[],!1,null,null,null);e.default=component.exports},356:function(t,e,l){"use strict";l.r(e);var n=l(9),r=(l(49),l(14),l(35),l(36),{components:{BlogItem:function(){return Promise.resolve().then(l.bind(null,336))}},data:function(){return{blogs:[]}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("https://www.madein-iran.com/blog/wp-json/wl/v1/posts");case 2:l=e.sent,t.blogs=l.data,console.log(t.blogs);case 5:case"end":return e.stop()}}),e)})))()}}),o=l(34),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"blog-area pb-55"},[l("div",{staticClass:"container"},[l("SectionTitleWithSubTitle",{attrs:{title:"مجله ساخت ایران",classes:"section-title mb-55"}}),t._v(" "),l("div",{staticClass:"row"},[t._l(t.blogs,(function(t,e){return l("div",{key:e,staticClass:"col-lg-4 col-sm-6"},[l("BlogItem",{attrs:{blog:t}})],1)})),t._v(" "),t._m(0)],2)],1)])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"view-more text-center mt-20 toggle-btn2"},[l("a",{staticClass:"loadMore2",attrs:{href:"https://www.madein-iran.com/blog/"}},[t._v("مشاهده همه")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionTitleWithSubTitle:l(333).default,BlogItem:l(336).default})}}]);