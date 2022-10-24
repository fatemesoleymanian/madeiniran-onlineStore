(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{376:function(t,e,r){},431:function(t,e,r){"use strict";r(376)},458:function(t,e,r){"use strict";r.r(e);var n=r(336),o=r(20),l=r(8),c=(r(38),r(10),r(26),r(27),r(54),r(52),r(53),r(331),r(39),r(34),r(343),{components:{HeaderWithTopbar:function(){return r.e(0).then(r.bind(null,328))},Breadcrumb:function(){return Promise.resolve().then(r.bind(null,323))},ProductGridItem:function(){return Promise.resolve().then(r.bind(null,330))},QuickView:function(){return Promise.resolve().then(r.bind(null,324))},TheFooter:function(){return Promise.resolve().then(r.bind(null,320))}},data:function(){return{loader:!0,layout:"threeColumn",filterItems:[],prevSelectedCategoryName:"",prevSelectedTagName:"",prevSelectedSizeName:"",prevSelectedColorName:"",currentPage:1,perPage:10,selectedPrice:"new"}},computed:{products:function(){return this.$store.getters.getProducts},getItems:function(){var t=(this.currentPage-1)*this.perPage,e=this.currentPage*this.perPage;return this.filterItems.slice(t,e)},getPaginateCount:function(){return Math.ceil(this.filterItems.length/this.perPage)}},mounted:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var r,n,l,c,d,h,s,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loader=!0,e.next=3,Promise.all([t.$axios.get("/products"),t.$axios.get("/categories"),t.$axios.get("/tags_with_product")]);case 3:for(s in r=e.sent,n=Object(o.a)(r,3),l=n[0],c=n[1],d=n[2],t.$store.dispatch("setProduct",l.data),t.$store.dispatch("setCategory",c.data),t.$store.dispatch("setTags",d.data),h=[],l.data)for(f in l.data[s].state)h.includes(l.data[s].state[f].type)||h.push(l.data[s].state[f].type);t.$store.dispatch("setState",h),t.updateProductData(),t.loader=!1;case 16:case"end":return e.stop()}}),e)})))()},methods:{paginateClickCallback:function(t){this.currentPage=Number(t)},updateProductData:function(){this.paginateClickCallback(1);var t=this.$route.query.category,e=this.$route.query.state,r=this.$route.query.tag;if(0===Object.keys(this.$route.query).length&&(this.filterItems=Object(n.a)(this.products)),t&&this.prevSelectedCategoryName!==t)if(!1===Boolean(t)||"all"===t)this.filterItems=Object(n.a)(this.products);else{var o,l=this.products.filter((function(e){return e.category.id==t}));this.filterItems=[],(o=this.filterItems).push.apply(o,Object(n.a)(l))}if(e&&this.prevSelectedColorName!==e)if(!1===Boolean(e)||"all"===e)this.filterItems=Object(n.a)(this.products);else{var c,d=this.products.filter((function(t){return t.state.some((function(t){return t.type.includes(e)}))}));this.filterItems=[],(c=this.filterItems).push.apply(c,Object(n.a)(d))}if(r&&this.prevSelectedTagName!==r){if(r){var h,f=this.products.filter((function(t){return t.tag.some((function(t){return t.id==r}))}));this.filterItems=[],(h=this.filterItems).push.apply(h,Object(n.a)(f))}!1!==Boolean(r)&&"all"!==r||(this.filterItems=Object(n.a)(this.products))}this.prevSelectedCategoryName=t,this.prevSelectedStateName=e,this.prevSelectedTagName=r},discountedPrice:function(t){return t.state[0].price},id:function(t){return t.id}},watch:{$route:function(){this.updateProductData()},selectedPrice:function(){var t=this;switch(console.log(this.selectedPrice),this.selectedPrice){case"new":default:this.filterItems=Object(n.a)(this.products);break;case"old":this.filterItems=this.filterItems.sort((function(a,b){return t.id(a)-t.id(b)}));break;case"expensive":this.filterItems=this.filterItems.sort((function(a,b){return t.discountedPrice(b)-t.discountedPrice(a)}));break;case"cheap":this.filterItems=this.filterItems.sort((function(a,b){return t.discountedPrice(a)-t.discountedPrice(b)}))}}},head:function(){return{title:"لیست خطوط تولید"}}}),d=(r(431),r(12)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"shop-page-wrapper"},[r("HeaderWithTopbar",{attrs:{containerClass:"container"}}),t._v(" "),r("Breadcrumb",{attrs:{pageTitle:"لیست خطوط تولید"}}),t._v(" "),r("div",{staticClass:"shop-area pt-100 pb-100"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row flex-row-reverse"},[r("div",{staticClass:"col-lg-9"},[r("div",{staticClass:"shop-top-bar"},[r("div",{staticClass:"select-showing-wrap"},[r("div",{staticClass:"shop-select"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedPrice,expression:"selectedPrice"}],on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selectedPrice=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"new",label:"جدید ترین"}},[t._v("جدید ترین")]),t._v(" "),r("option",{attrs:{value:"old",label:"قدیمی ترین"}},[t._v("قدیمی ترین")]),t._v(" "),r("option",{attrs:{value:"expensive",label:"گران ترین"}},[t._v("گران ترین")]),t._v(" "),r("option",{attrs:{value:"cheap",label:"ارزانترین"}},[t._v("ارزانترین")])])]),t._v(" "),r("p",[t._v("مشاهده "+t._s(t.perPage*t.currentPage-t.perPage+1)+" تا\n                "+t._s(t.perPage*t.currentPage>t.filterItems.length?t.filterItems.length:t.perPage*t.currentPage)+" از\n                "+t._s(t.filterItems.length)+" نتیجه")])]),t._v(" "),r("div",{staticClass:"shop-tab"},[r("button",{class:{active:"twoColumn"===t.layout},on:{click:function(e){t.layout="twoColumn"}}},[r("i",{staticClass:"fa fa-th-large"})]),t._v(" "),r("button",{class:{active:"threeColumn"===t.layout},on:{click:function(e){t.layout="threeColumn"}}},[r("i",{staticClass:"fa fa-th"})]),t._v(" "),r("button",{class:{active:"list"===t.layout},on:{click:function(e){t.layout="list"}}},[r("i",{staticClass:"fa fa-list-ul"})])])]),t._v(" "),t.loader?r("div",{attrs:{id:"loading"}}):t._e(),t._v(" "),t.loader?t._e():r("div",{staticClass:"shop-bottom-area mt-35"},[r("div",{staticClass:"row product-layout",class:{list:"list"===t.layout,"grid three-column":"threeColumn"===t.layout,"grid two-column":"twoColumn"===t.layout}},t._l(t.getItems,(function(e,n){return r("div",{key:n,staticClass:"col-xl-4 col-sm-6"},[r("ProductGridItem",{attrs:{product:e,layout:t.layout}})],1)})),0)]),t._v(" "),t.getPaginateCount>1?r("div",[r("pagination",{staticClass:"pro-pagination-style shop-pagination mt-30",attrs:{"per-page":t.perPage,records:t.filterItems.length,"page-count":t.getPaginateCount},on:{paginate:t.paginateClickCallback},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1):t._e()]),t._v(" "),r("div",{staticClass:"col-lg-3"},[r("ShopSidebar",{attrs:{classes:"mr-30"}})],1)])])]),t._v(" "),r("QuickView"),t._v(" "),r("TheFooter")],1)}),[],!1,null,"11363bf2",null);e.default=component.exports;installComponents(component,{HeaderWithTopbar:r(326).default,Breadcrumb:r(323).default,ProductGridItem:r(330).default,ShopSidebar:r(342).default,QuickView:r(324).default,TheFooter:r(320).default})}}]);