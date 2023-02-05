(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{468:function(t,e,r){"use strict";r.r(e);var l=r(337),o=(r(10),r(27),r(28),r(54),r(334),r(38),r(34),r(50),r(51),r(29),r(69),r(70),r(346),{components:{HeaderWithTopbar:function(){return Promise.resolve().then(r.bind(null,327))},Breadcrumb:function(){return Promise.resolve().then(r.bind(null,325))},ProductGridItem:function(){return Promise.resolve().then(r.bind(null,331))},QuickView:function(){return Promise.resolve().then(r.bind(null,324))},TheFooter:function(){return Promise.resolve().then(r.bind(null,321))}},data:function(){return{layout:"threeColumn",filterItems:[],prevSelectedCategoryName:"",prevSelectedTagName:"",prevSelectedSizeName:"",prevSelectedColorName:"",currentPage:1,perPage:9,selectedPrice:"default"}},computed:{products:function(){return this.$store.getters.getProducts},getItems:function(){var t=(this.currentPage-1)*this.perPage,e=this.currentPage*this.perPage;return this.filterItems.slice(t,e)},getPaginateCount:function(){return Math.ceil(this.filterItems.length/this.perPage)}},mounted:function(){this.updateProductData()},methods:{paginateClickCallback:function(t){this.currentPage=Number(t)},updateProductData:function(){var t=this;this.paginateClickCallback(1);var e=this.$route.query.category,r=this.$route.query.size,o=this.$route.query.color,c=this.$route.query.tag;if(0===Object.keys(this.$route.query).length&&(this.filterItems=Object(l.a)(this.products)),e&&this.prevSelectedCategoryName!==e)if(!1===Boolean(e)||e===this.slugify("all categories"))this.filterItems=Object(l.a)(this.products);else{var n,h=this.products.filter((function(r){return t.slugify(r.category).includes(e)}));this.filterItems=[],(n=this.filterItems).push.apply(n,Object(l.a)(h))}if(o&&this.prevSelectedColorName!==o)if(!1===Boolean(o)||o===this.slugify("all colors"))this.filterItems=Object(l.a)(this.products);else{var d,f=this.products.filter((function(t){var e;return null===(e=t.variation)||void 0===e?void 0:e.color.includes(o)}));this.filterItems=[],(d=this.filterItems).push.apply(d,Object(l.a)(f))}if(r&&this.prevSelectedSizeName!==r)if(!1===Boolean(r)||r===this.slugify("all sizes"))this.filterItems=Object(l.a)(this.products);else{var v,m=this.products.filter((function(t){var e;return null===(e=t.variation)||void 0===e?void 0:e.sizes.includes(r)}));this.filterItems=[],(v=this.filterItems).push.apply(v,Object(l.a)(m))}if(c&&this.prevSelectedTagName!==c)if(c){var P,C=this.products.filter((function(e){return t.slugify(e.tag).includes(c)}));this.filterItems=[],(P=this.filterItems).push.apply(P,Object(l.a)(C))}else this.filterItems=Object(l.a)(this.products);this.prevSelectedCategoryName=e,this.prevSelectedColorName=o,this.prevSelectedSizeName=r,this.prevSelectedTagName=c},discountedPrice:function(t){return t.price-t.price*t.discount/100},slugify:function(text){return text.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}},watch:{$route:function(){this.updateProductData()},selectedPrice:function(){var t=this;switch(this.selectedPrice){case"low2high":this.filterItems=this.filterItems.sort((function(a,b){return t.discountedPrice(a)-t.discountedPrice(b)}));break;case"high2low":this.filterItems=this.filterItems.sort((function(a,b){return t.discountedPrice(b)-t.discountedPrice(a)}));break;default:this.filterItems=Object(l.a)(this.products)}}},head:function(){return{title:"Shop grid right sidebar"}}}),c=r(12),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"shop-page-wrapper"},[r("HeaderWithTopbar",{attrs:{containerClass:"container"}}),t._v(" "),r("Breadcrumb",{attrs:{pageTitle:"shop grid right sidebar"}}),t._v(" "),r("div",{staticClass:"shop-area pt-100 pb-100"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-9"},[r("div",{staticClass:"shop-top-bar"},[r("div",{staticClass:"select-showing-wrap"},[r("div",{staticClass:"shop-select"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedPrice,expression:"selectedPrice"}],on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selectedPrice=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"default"}},[t._v("Default")]),t._v(" "),r("option",{attrs:{value:"low2high"}},[t._v("Price - Low to High")]),t._v(" "),r("option",{attrs:{value:"high2low"}},[t._v("Price - High to Low")])])]),t._v(" "),r("p",[t._v("Showing "+t._s(t.perPage*t.currentPage-t.perPage+1)+" to "+t._s(t.perPage*t.currentPage>t.filterItems.length?t.filterItems.length:t.perPage*t.currentPage)+" of "+t._s(t.filterItems.length)+" result")])]),t._v(" "),r("div",{staticClass:"shop-tab"},[r("button",{class:{active:"twoColumn"===t.layout},on:{click:function(e){t.layout="twoColumn"}}},[r("i",{staticClass:"fa fa-th-large"})]),t._v(" "),r("button",{class:{active:"threeColumn"===t.layout},on:{click:function(e){t.layout="threeColumn"}}},[r("i",{staticClass:"fa fa-th"})]),t._v(" "),r("button",{class:{active:"list"===t.layout},on:{click:function(e){t.layout="list"}}},[r("i",{staticClass:"fa fa-list-ul"})])])]),t._v(" "),r("div",{staticClass:"shop-bottom-area mt-35"},[r("div",{staticClass:"row product-layout",class:{list:"list"===t.layout,"grid three-column":"threeColumn"===t.layout,"grid two-column":"twoColumn"===t.layout}},t._l(t.getItems,(function(e,l){return r("div",{key:l,staticClass:"col-xl-4 col-sm-6"},[r("ProductGridItem",{attrs:{product:e,layout:t.layout}})],1)})),0)]),t._v(" "),t.getPaginateCount>1?r("div",[r("pagination",{staticClass:"pro-pagination-style shop-pagination mt-30",attrs:{"per-page":t.perPage,records:t.filterItems.length,"page-count":t.getPaginateCount},on:{paginate:t.paginateClickCallback},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1):t._e()]),t._v(" "),r("div",{staticClass:"col-lg-3"},[r("ShopSidebar",{attrs:{classes:"ml-30"}})],1)])])]),t._v(" "),r("QuickView"),t._v(" "),r("TheFooter")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderWithTopbar:r(327).default,Breadcrumb:r(325).default,ProductGridItem:r(331).default,ShopSidebar:r(345).default,QuickView:r(324).default,TheFooter:r(321).default})}}]);