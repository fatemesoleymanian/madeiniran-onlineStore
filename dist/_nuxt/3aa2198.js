(window.webpackJsonp=window.webpackJsonp||[]).push([[22,19,54],{324:function(t,e,l){"use strict";l.r(e);var n={props:["title","subTitle","classes"]},o=l(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"text-center",class:t.classes},[l("h2",[t._v(t._s(t.title))]),t._v(" "),l("p",[t._v(t._s(t.subTitle))])])}),[],!1,null,null,null);e.default=component.exports},333:function(t,e,l){"use strict";l.r(e);var n={props:["blog"],methods:{}},o=l(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"blog-wrap mb-25"},[l("div",{staticClass:"blog-img"},[l("n-link",{attrs:{to:"/blog/"+t.blog.id}},[l("img",{attrs:{src:"https://api.madein-iran.com/public"+t.blog.featuredImage,alt:t.blog.title}})]),t._v(" "),l("span",[t._v(t._s(t.blog.category.name))])],1),t._v(" "),l("div",{staticClass:"blog-content-wrap"},[l("div",{staticClass:"blog-content text-center"},[l("h3",[l("n-link",{attrs:{to:"/blog/"+t.blog.id}},[t._v(t._s(t.blog.title))])],1),t._v(" "),l("span",[t._v(t._s(t.blog.post_excerpt.substring(0,55))+"...")])])])])}),[],!1,null,null,null);e.default=component.exports},335:function(t,e,l){"use strict";l.r(e);var n=l(8),o=(l(38),l(10),l(26),l(27),{components:{BlogItem:function(){return Promise.resolve().then(l.bind(null,333))}},data:function(){return{blogs:[]}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/blogs-random");case 2:l=e.sent,t.blogs=l.data;case 4:case"end":return e.stop()}}),e)})))()}}),r=l(12),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"blog-area pb-55"},[l("div",{staticClass:"container"},[l("SectionTitleWithSubTitle",{attrs:{title:"مجله ساخت ایران",classes:"section-title mb-55"}}),t._v(" "),l("div",{staticClass:"row"},[t._l(t.blogs,(function(t,e){return l("div",{key:e,staticClass:"col-lg-4 col-sm-6"},[l("BlogItem",{attrs:{blog:t}})],1)})),t._v(" "),l("div",{staticClass:"view-more text-center mt-20 toggle-btn2"},[l("n-link",{staticClass:"loadMore2",attrs:{to:"/blog"}},[t._v("مشاهده همه")])],1)],2)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionTitleWithSubTitle:l(324).default,BlogItem:l(333).default})}}]);