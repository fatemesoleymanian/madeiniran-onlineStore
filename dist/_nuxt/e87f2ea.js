(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{340:function(t,e,r){},345:function(t,e,r){"use strict";r(340)},365:function(t,e,r){"use strict";r.r(e);var n=r(9),o=(r(49),r(208),r(14),{props:["product","category","states","default_price"],data:function(){return{singleQuantity:1,auth:!1,swiperOptionTop:{loop:!0,slidesPerView:1,spaceBetween:10,effect:"fade",loopedSlides:5,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},slug:this.$route.params.slug,indexOfState:this.states.length-1,pricee:"",discounted_price:"",state_id:""}},mounted:function(){localStorage.getItem("116111107101110")&&(this.auth=!0),this.indexOfState=this.states.length-1,this.settingPrice()},computed:{checkIsLiked:function(){var t=this;return this.discounted_price=this.default_price,!!this.$store.state.wishlist.find((function(e){return t.product.id===e.id}))}},methods:{navigateToRepresentationForm:function(){document.getElementById("ask_form").click()},priceByState:function(t){this.indexOfState=t,this.settingPrice()},settingPrice:function(){for(var i in this.states)i==this.indexOfState&&(this.pricee=this.states[i].price,this.discounted_price=this.states[i].discounted_price,this.state_id=this.states[i].id);console.log(this.discounted_price+" discounted")},discountedPrice:function(t){return t.price-t.price*t.discount/100},addToWishlist:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(localStorage.getItem("116111107101110")){r.next=2;break}return r.abrupt("return",window.location="/login-register");case 2:if(n=localStorage.getItem("117115101114"),o=JSON.parse(n),data={user:o.id,product:t.id},e.$axios.setToken(localStorage.getItem("116111107101110"),"Bearer"),!e.$store.state.wishlist.find((function(e){return t.id===e.id}))){r.next=14;break}return r.next=9,e.$axios.delete("/bookmark",{data:data});case 9:r.sent,e.$store.dispatch("removeProductFromWishlist",t),e.$notify({type:"success",title:"این محصول از لیست علاقمندیهای شما حذف شد!"}),r.next=19;break;case 14:return r.next=16,e.$axios.post("/bookmark",data);case 16:r.sent,e.$notify({type:"success",title:"این محصول به لیست علاقمندیهای شما افزوده شد!"}),e.$store.dispatch("addToWishlist",t);case 19:case"end":return r.stop()}}),r)})))()}}}),c=(r(345),r(34)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"shop-area pt-100 pb-100"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"product-details-slider"},[r("div",{staticClass:"product-details-img"},[r("div",{staticClass:"product-badges"},[t.product.discount>0?r("span",{staticClass:"product-label purple"},[t._v(t._s(t.product.discount)+"%")]):t._e()]),t._v(" "),r("swiper",{ref:"swiperTop",attrs:{options:t.swiperOptionTop}},[r("div",{staticClass:"large-img swiper-slide"},[r("img",{staticClass:"img-fluid",attrs:{src:"https://api.madein-iran.com/public"+t.product.image,alt:t.product.name}})])])],1)])]),t._v(" "),r("div",{staticClass:"col-12 d-none d-md-block product-details-content"},[r("div",{staticClass:"pro-details-quality justify-content-end"},[r("div",{staticClass:"pro-details-wishlist"},[r("button",{attrs:{title:"لیست علاقمندیها"},on:{click:function(e){return t.addToWishlist(t.product)}}},[r("i",{class:!0===t.checkIsLiked?"fa fa-heart":"fa fa-heart-o",staticStyle:{color:"darkred","font-size":"22px",display:"inline"}})])])]),t._v(" "),t.states.length?r("div",{staticClass:"pro-details-size-wrap"},[r("h6",{staticClass:"label"},[t._v("ظرفیت ها :")]),t._v(" "),r("div",{staticClass:"pro-details-size-content"},t._l(t.product.state,(function(e,n){return r("label",{key:n,staticClass:"radio"},[r("input",{attrs:{type:"radio",name:"sizeGroup",checked:""},on:{click:function(e){return t.priceByState(n)}}}),t._v(" "),r("span",{staticClass:"check-mark",staticStyle:{"font-family":"persianNumber"}},[t._v(t._s(e.type))])])})),0)]):t._e(),t._v(" "),r("div",{staticClass:"pro-details-meta pt-30"},[r("span",{staticClass:"label"},[t._v("دسته بندی :")]),t._v(" "),r("ul",[r("li",[r("n-link",{attrs:{to:"/shop?category="}},[t._v(t._s(t.category))])],1)])]),t._v(" "),r("div",{staticClass:"pro-details-meta pt-20"},[r("span",{staticClass:"label"},[t._v("تگ ها :")]),t._v(" "),r("ul",t._l(t.product.tag,(function(e,n){return r("li",{key:n},[r("n-link",{attrs:{to:"/shop?tag="}},[t._v(t._s(e.name)+",")])],1)})),0)])])])]),t._v(" "),r("div",{staticClass:"col-lg-6 col-md-6"},[r("div",{staticClass:"product-details-content ml-70"},[r("h1",{staticStyle:{"font-size":"1.5em","font-weight":"bolder"}},[t._v(t._s(t.product.name))]),t._v(" "),t.auth&&t.states.length?r("div",{staticClass:"product-details-price"},[r("span",{staticStyle:{"font-family":"persianNumber"}},[t._v("  "+t._s(t.discounted_price.replace(/\B(?=(\d{3})+(?!\d))/g,","))+" تومان  ")]),t._v(" "),t.product.discount>0?r("span",{staticClass:"old",staticStyle:{"font-family":"persianNumber"}},[t._v(t._s(t.pricee.replace(/\B(?=(\d{3})+(?!\d))/g,","))+" تومان")]):t._e()]):t._e(),t._v(" "),r("div",{staticClass:"pro-details-rating-wrap"}),t._v(" "),r("div",{staticClass:"p",domProps:{innerHTML:t._s(t.product.description_excerpt)}}),t._v(" "),r("br"),t._v(" "),t.auth?t._e():r("h6",[r("a",{staticStyle:{color:"#0b4dfc","text-decoration":"underline"},attrs:{href:"/login-register"}},[t._v("برای مشاهده قیمت وارد حساب کاربری خود شوید.")])]),t._v(" "),r("div",{staticClass:"pro-details-size-color"},[r("button",{staticClass:"btn btn-primary text-white",attrs:{id:"form-leader"},on:{click:t.navigateToRepresentationForm}},[r("a",{staticStyle:{"font-size":"13px",color:"white"},attrs:{href:"#description"}},[t._v(" مشاوره رایگان")]),t._v(" "),r("i",{staticClass:"fa fa-arrow-down"})]),t._v(" "),t.states.length?r("div",{staticClass:"pro-details-size-wrap d-md-none d-block"},[r("h6",{staticClass:"label"},[t._v("ظرفیت ها :")]),t._v(" "),r("div",{staticClass:"pro-details-size-content"},t._l(t.product.state,(function(e,n){return r("label",{key:n,staticClass:"radio"},[r("input",{attrs:{type:"radio",name:"sizeGroup",checked:""},on:{click:function(e){return t.priceByState(n)}}}),t._v(" "),r("span",{staticClass:"check-mark",staticStyle:{"font-family":"persianNumber"}},[t._v(t._s(e.type))])])})),0)]):t._e()]),t._v(" "),r("div",{staticClass:"pro-details-quality d-md-none d-block"},[r("div",{staticClass:"pro-details-wishlist"},[r("button",{attrs:{title:"لیست علاقمندیها"},on:{click:function(e){return t.addToWishlist(t.product)}}},[r("i",{class:!0===t.checkIsLiked?"fa fa-heart":"fa fa-heart-o",staticStyle:{color:"darkred","font-size":"22px",display:"inline"}})])])]),t._v(" "),r("div",{staticClass:"pro-details-meta d-md-none d-block"},[r("span",{staticClass:"label"},[t._v("دسته بندی :")]),t._v(" "),r("ul",[r("li",[r("n-link",{attrs:{to:"/shop?category="}},[t._v(t._s(t.category))])],1)])]),t._v(" "),r("div",{staticClass:"pro-details-meta d-md-none d-block"},[r("span",{staticClass:"label"},[t._v("تگ ها :")]),t._v(" "),r("ul",t._l(t.product.tag,(function(e,n){return r("li",{key:n},[r("n-link",{attrs:{to:"/shop?tag="}},[t._v(t._s(e.name)+",")])],1)})),0)])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);