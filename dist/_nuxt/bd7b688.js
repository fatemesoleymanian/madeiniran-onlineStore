(window.webpackJsonp=window.webpackJsonp||[]).push([[32,33],{321:function(t,e,n){},323:function(t,e,n){"use strict";n.r(e);var o={name:"TestimonialItem",props:["testimonial"]},l=(n(327),n(34)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog-wrap-2 mb-30"},[n("div",{staticClass:"blog-img-2"},[n("div",{staticClass:"h_iframe-aparat_embed_frame"},[n("span",{staticStyle:{display:"block","padding-top":"57%"}}),t._v(" "),n("iframe",{staticClass:"box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;",attrs:{src:t.testimonial.video,allowFullScreen:"true",webkitallowfullscreen:"true",mozallowfullscreen:"true",frameborder:"0"}})])]),t._v(" "),n("div",{staticClass:"blog-content-2"},[t.testimonial.name?n("h4",{staticClass:"text-center fw-bold"},[t._v("\n     "+t._s(t.testimonial.name)+"\n    ")]):t._e(),t._v(" "),t.testimonial.position?n("p",[t._v(t._s(t.testimonial.position))]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},325:function(t,e,n){},327:function(t,e,n){"use strict";n(321)},329:function(t,e,n){"use strict";n(325)},332:function(t,e,n){"use strict";n.r(e);var o=n(9),l=(n(49),{components:{TestimonialItem:n(323).default},data:function(){return{testimonialOption:{loop:!1,speed:950,navigation:{nextEl:".hero-slider-nav.swiper-button-next",prevEl:".hero-slider-nav.swiper-button-prev"}},testimonialData:[]}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/testimonial");case 2:n=e.sent,t.testimonialData=n.data;case 4:case"end":return e.stop()}}),e)})))()}}),r=(n(329),n(34)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"testimonial-area pt-70",staticStyle:{"background-color":"rgba(11, 75, 252, 0.23)"}},[n("div",{staticClass:"container pb-30"},[n("h3",{staticClass:"text-center pb-5"},[t._v("ویدئوهای ارسالی نمایندگان ساخت ایران")]),t._v(" "),n("div",{staticClass:"row"},t._l(t.testimonialData,(function(t,e){return n("div",{key:e,staticClass:"col-lg-4 col-md-6 col-sm-12"},[n("TestimonialItem",{attrs:{testimonial:t}})],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TestimonialItem:n(323).default})}}]);