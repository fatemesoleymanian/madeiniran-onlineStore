(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{333:function(t,l,o){"use strict";o.r(l);o(30),o(68),o(10),o(69);var e={props:["blog"],methods:{slugify:function(text){return text.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},copyToClipboard:function(){var t=this;navigator.clipboard.writeText("https://madein-iran/blog/".concat(this.blog.id,".com")).then((function(){t.$notify({type:"success",title:"لینک پست کپی شد!"})})).catch((function(){t.$notify({type:"error",title:"خطا در کپی لینک پست!"})}))}}},c=o(12),component=Object(c.a)(e,(function(){var t=this,l=t.$createElement,o=t._self._c||l;return o("div",{staticClass:"blog-wrap-2 mb-30"},[o("div",{staticClass:"blog-img-2"},[o("n-link",{attrs:{to:"/blog/"+t.blog.id}},[o("img",{attrs:{src:"https://apidemo.madein-iran.com/public"+t.blog.featuredImage,alt:t.blog.title}})])],1),t._v(" "),o("div",{staticClass:"blog-content-2"},[o("div",{staticClass:"blog-meta-2"},[o("ul",[o("li",[t._v(t._s(t.blog.updated_at))])])]),t._v(" "),o("h4",[o("n-link",{attrs:{to:"/blog/"+t.blog.id}},[t._v(t._s(t.blog.title))])],1),t._v(" "),o("p",[t._v(t._s(t.blog.post_excerpt))]),t._v(" "),o("div",{staticClass:"blog-share-comment"},[o("div",{staticClass:"blog-btn-2"},[o("n-link",{attrs:{to:"/blog/"+t.blog.id}},[t._v("بیشتر ...")])],1),t._v(" "),o("div",{staticClass:"blog-share"},[o("div",{staticClass:"share-social"},[o("ul",[o("li",[o("a",{staticClass:"twitter",on:{click:t.copyToClipboard}},[o("i",{staticClass:"fa fa-share",attrs:{"aria-hidden":"true"}})])])])])])])])])}),[],!1,null,null,null);l.default=component.exports}}]);