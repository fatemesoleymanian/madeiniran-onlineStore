(window.webpackJsonp=window.webpackJsonp||[]).push([[18,14],{322:function(n,t,e){"use strict";e.r(t);var r={props:["banner"]},l=e(12),component=Object(l.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"single-banner"},[e("n-link",{attrs:{to:"/shop"}},[e("img",{attrs:{src:n.banner.imgSrc,alt:n.banner.title}})]),n._v(" "),e("div",{staticClass:"banner-content"},[e("h3",[n._v(n._s(n.banner.title))]),n._v(" "),e("h4",[n._v("Starting at "),e("span",[n._v("$"+n._s(n.banner.price.toFixed(2)))])]),n._v(" "),e("n-link",{attrs:{to:"/shop"}},[e("i",{staticClass:"fa fa-long-arrow-right"})])],1)],1)}),[],!1,null,null,null);t.default=component.exports},377:function(n,t,e){"use strict";e.r(t);var r={data:function(){return{banners:[{id:1,title:"Watches",price:99,imgSrc:"/img/banner/banner-1.jpg"},{id:2,title:"Plo Bag",price:80,imgSrc:"/img/banner/banner-2.jpg"},{id:3,title:"Sunglass",price:79,imgSrc:"/img/banner/banner-3.jpg"},{id:4,title:"Sun Hat",price:50,imgSrc:"/img/banner/banner-4.jpg"}]}}},l=e(12),component=Object(l.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"banner-area banner-area-2 pt-10 pb-85"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"custom-row-2 row"},n._l(n.banners,(function(n,t){return e("div",{key:t,staticClass:"col-xl-3 col-md-6 mb-10"},[e("BannerItem",{attrs:{banner:n}})],1)})),0)])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BannerItem:e(322).default})}}]);