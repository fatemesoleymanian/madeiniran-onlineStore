(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{329:function(t,e,n){"use strict";n.r(e);var o=n(8),r=(n(43),{data:function(){return{testimonialOption:{loop:!0,speed:950,autoplay:!0},testimonialData:[]}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/testimonial");case 2:n=e.sent,t.testimonialData=n.data;case 4:case"end":return e.stop()}}),e)})))()}}),c=n(12),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"testimonial-area pb-95"},[n("div",{staticClass:"container"},[n("h4",{staticClass:"text-center"},[t._v("نظرات مشتریان")]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-10 ms-auto me-auto"},[n("swiper",{attrs:{options:t.testimonialOption}},t._l(t.testimonialData,(function(e,o){return n("div",{key:o,staticClass:"swiper-slide single-testimonial text-center"},[n("p",[t._v(t._s(e.desc))]),t._v(" "),n("div",{staticClass:"client-info"},[n("i",{staticClass:"fa fa-map-signs"}),t._v(" "),n("h5",[t._v(t._s(e.name))]),t._v(" "),n("span",[t._v(t._s(e.position))])])])})),0)],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);