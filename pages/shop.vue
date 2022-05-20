<template>
    <div class="shop-page-wrapper">
        <HeaderWithTopbar containerClass="container" />
        <Breadcrumb pageTitle="لیست محصولات" />

        <!-- product items wrapper -->
        <div class="shop-area pt-100 pb-100">
            <div class="container">
                <div class="row flex-row-reverse">
                    <div class="col-lg-9">
                        <!-- shop top bar -->
                        <div class="shop-top-bar">
                            <div class="select-showing-wrap">
                                <div class="shop-select">
                                    <select v-model="selectedPrice" >
                                        <option value="new" label="جدید ترین" >جدید ترین</option>
                                        <option value="old" label="قدیمی ترین">قدیمی ترین</option>
                                        <option value="expensive" label="گران ترین">گران ترین</option>
                                        <option value="cheap" label="ارزانترین">ارزانترین</option>
                                    </select>
                                </div>
                                <p>مشاهده {{perPage * currentPage - perPage + 1}} تا {{perPage * currentPage > filterItems.length ? filterItems.length : perPage * currentPage}} از {{filterItems.length}} نتیجه</p>
                            </div>
                            <div class="shop-tab">
                                <button @click="layout = 'twoColumn'" :class="{ active : layout === 'twoColumn' }">
                                    <i class="fa fa-th-large"></i>
                                </button>
                                <button @click="layout = 'threeColumn'" :class="{ active : layout === 'threeColumn' }">
                                    <i class="fa fa-th"></i>
                                </button>
                                <button @click="layout = 'list'" :class="{ active : layout === 'list' }">
                                    <i class="fa fa-list-ul"></i>
                                </button>
                            </div>
                        </div>
                        <!-- end shop top bar -->
                      <div id="loading" v-if="loader"></div>

                        <!-- shop product -->
                        <div class="shop-bottom-area mt-35" v-if="!loader">
                            <div class="row product-layout"
                                 :class="{ 'list': layout === 'list', 'grid three-column': layout === 'threeColumn', 'grid two-column': layout === 'twoColumn' }">
                                <div class="col-xl-4 col-sm-6" v-for="(product, index) in getItems" :key="index" >
                                    <ProductGridItem :product="product" :layout="layout"  />
                                </div>
                            </div>
                        </div>
                        <!-- end shop product -->

                        <div v-if="getPaginateCount > 1 ">
                            <pagination class="pro-pagination-style shop-pagination mt-30"
                                        v-model="currentPage" :per-page="perPage"
                                        :records="filterItems.length" @paginate="paginateClickCallback"
                                        :page-count="getPaginateCount" />
                        </div>
                    </div>

                    <div class="col-lg-3">
                        <ShopSidebar classes="mr-30" />
                    </div>
                </div>
            </div>
        </div>
        <!-- end product items wrapper -->

        <QuickView />
        <TheFooter />
    </div>
</template>

<script>
    export default {

        components: {
            HeaderWithTopbar: () => import('@/components/TheHeader'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            ProductGridItem: () => import('@/components/product/ProductGridItem'),
            QuickView: () => import('@/components/QuickView'),
            TheFooter: () => import('@/components/TheFooter'),
        },

        data() {
            return {
              loader:true,
                layout: "threeColumn",
                filterItems: [],
                prevSelectedCategoryName: '',
                prevSelectedTagName: '',
                prevSelectedSizeName: '',
                prevSelectedColorName: '',
                currentPage: 1,
                perPage: 10 ,
                selectedPrice: 'new'
            }
        },

        computed: {
            products() {
                return this.$store.getters.getProducts
            },

            getItems() {
                let start = (this.currentPage - 1) * this.perPage;
                let end = this.currentPage * this.perPage;
                return this.filterItems.slice(start, end);
            },
            getPaginateCount() {
                return Math.ceil(this.filterItems.length / this.perPage);
            },
        },

        async mounted(){
          this.loader =true
          const [products,categories,tags] = await Promise.all([
            this.$axios.get('/products'),
            this.$axios.get('/categories'),
            this.$axios.get('/tags_with_product'),
          ]);
          this.$store.dispatch('setProduct',products.data);
          this.$store.dispatch('setCategory',categories.data);
          this.$store.dispatch('setTags',tags.data);
           let states = [];
          for (let s in products.data)
          {
            for (let t in products.data[s].state)
            {
              if (!states.includes(products.data[s].state[t].type)) states.push(products.data[s].state[t].type)
            }
          }
          this.$store.dispatch('setState',states)
            this.updateProductData()
          this.loader = false

        },

        methods: {
            paginateClickCallback(page) {
                this.currentPage = Number(page);
            },

            updateProductData(){
                this.paginateClickCallback(1);

                const categoryName = this.$route.query.category;
                const stateName = this.$route.query.state;
                const tagName = this.$route.query.tag;

                if( Object.keys(this.$route.query).length === 0){
                    this.filterItems = [...this.products]
                }

                if(categoryName && this.prevSelectedCategoryName !== categoryName){
                    if(Boolean(categoryName) === false || categoryName === 'all'){
                        this.filterItems = [...this.products]
                    }
                    else {
                        const resultData = this.products.filter((item) => item.category.id == categoryName);
                        this.filterItems = [];
                        this.filterItems.push(...resultData);
                    }
                }

                if(stateName && this.prevSelectedColorName !== stateName){
                    if(Boolean(stateName) === false || stateName === 'all'){
                        this.filterItems = [...this.products]
                    }
                    else {
                        const resultData = this.products.filter(item => {
                          return item.state.some(n=>{
                            return n.type.includes(stateName)
                          })
                        })
                        this.filterItems = [];
                        this.filterItems.push(...resultData);
                    }
                }
                if(tagName && this.prevSelectedTagName !== tagName){
                    if(tagName){

                        const resultData = this.products.filter(item => {
                          return item.tag.some(n=>{
                            return n.id ==tagName
                          })
                        })
                        this.filterItems = [];
                        this.filterItems.push(...resultData);
                    }
                    if(Boolean(tagName) === false || tagName === 'all'){
                        this.filterItems = [...this.products]
                    }
                }

                this.prevSelectedCategoryName = categoryName;
                this.prevSelectedStateName = stateName;
                this.prevSelectedTagName = tagName;
            },

            discountedPrice(product) {
                return product.state[0].price
            },

            id(product)
            {
              return product.id;
            }
        },

        watch: {
            $route(){
                this.updateProductData()
            },

            selectedPrice(){
              console.log(this.selectedPrice)
                switch (this.selectedPrice) {
                    case "new":
                      this.filterItems = [...this.products]
                        break;
                    case "old":
                        this.filterItems =  this.filterItems.sort((a, b)=>
                            this.id(a) -  this.id(b))
                        break;
                  case "expensive":
                    this.filterItems =  this.filterItems.sort((a, b)=>
                        this.discountedPrice(b) -  this.discountedPrice(a))
                    break;
                  case "cheap":
                    this.filterItems =  this.filterItems.sort((a, b)=>
                        this.discountedPrice(a) -  this.discountedPrice(b))
                    break;
                    default:
                      this.filterItems = [...this.products]
                }
            }
        },

        head() {
            return {
                title: "لیست محصولات"
            }
        },
    };
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:100);


#loading {
  margin: 100px auto;
  width: 80px;
  height: 80px;
  border: 3px solid rgba(0,0,0,.5);
  border-radius: 50%;
  border-top-color: #000;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
</style>
