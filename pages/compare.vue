<template>
  <div class="product-details-page-wrapper">
    <TheHeader containerClass="container"/>
    <div class="breadcrumb-area pt-35 pb-35 bg-gray-3">
      <div class="container">
        <div class="breadcrumb-content text-center">
          <ul>
            <li class="active">نتایج جستجو برای {{ srch }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="description-review-area pb-90 pt-5">
      <div class="container">
        <div class="description-review-wrapper">
          <div class="description-review-topbar nav">
            <h3 v-if="products.length">{{products.length}}محصول:</h3>
<!--            <a data-bs-toggle="tab" class="active" href="#des-details1">-->
<!--              <span-->
<!--                  style="background: #0b4dfc;color: #fff;padding:0 3px;font-size: 0.6em;border-radius: 50%">{{ products.length }}</span>-->
<!--              محصولات</a>-->
<!--            <a data-bs-toggle="tab" href="#des-details2">-->
<!--              وبلاگ-->
<!--              <span-->
<!--                  style="background: #0b4dfc;color: #fff;padding:0 3px;font-size: 0.6em;border-radius: 50%">{{ blogs.length }}</span>-->
<!--            </a>-->
          </div>
          <div class="tab-content description-review-bottom">
            <div id="loading" v-if="loader"></div>
            <div id="des-details1" class="tab-pane active">
              <div class="product-description-wrapper" v-if="products.length">
                <div class="shop-bottom-area mt-35">
                  <div class="row product-layout grid threeColumn">
                    <div class="col-xl-3 col-sm-4" v-for="(product, index) in getItems" :key="index">
                      <ProductGridItem :product="product" :layout="layout"/>
                    </div>
                  </div>
                </div>
                <div v-if="getPaginateCount > 1">
                  <pagination class="pro-pagination-style shop-pagination mt-30" v-model="product.currentPage"
                              :per-page="product.perPage" :records="filterItems.length"
                              @paginate="paginateClickCallback" :page-count="getPaginateCount"/>
                </div>
              </div>
              <div v-else class="pt-5">
                <h3 class="text-center text-muted p-5">محصولی یافت نشد!</h3>
              </div>
            </div>
<!--            <div id="des-details2" class="tab-pane ">-->
<!--              <div class="blog-area pt-100 pb-100">-->
<!--                <div class="container">-->
<!--                  <div class="row flex-row-reverse">-->
<!--                    <div class="col-lg-12" v-if="blogs.length">-->
<!--                      <div class="ml-20">-->
<!--                        <div class="row">-->
<!--                          <div class="col-md-4 col-12" v-for="(blog, index) in getBlogItems" :key="index">-->
<!--                            <BlogItemStyleTwo :blog="blog"/>-->
<!--                          </div>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                      <div v-if="getPaginateBlogCount > 1">-->
<!--                        <pagination class="pro-pagination-style shop-pagination mt-30"-->
<!--                                    v-model="blog.currentPage" :per-page="blog.perPage"-->
<!--                                    :records="filterBlogItems.length"-->
<!--                                    @paginate="paginateBlogClickCallback" :page-count="getPaginateBlogCount"/>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <div v-else>-->
<!--                      <h3 class="text-center text-muted">پستی یافت نشد!</h3>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
          </div>
        </div>
      </div>
    </div>
    <QuickView/>
    <TheFooter/>
  </div>
</template>

<script>
export default {
  components: {
    TheHeader: () => import('@/components/TheHeader'),
    ProductGridItem: () => import('@/components/product/ProductGridItem'),
    QuickView: () => import('@/components/QuickView'),
    TheFooter: () => import('@/components/TheFooter'),
  },
  data() {
    return {
      srch: '',
      loader: true,
      layout: "threeColumn",
      // blogs: [],
      // filterBlogItems: [],
      products: [],
      filterItems: [],
      product: {
        currentPage: 1,
        perPage: 10
      },
      // blog: {
      //   currentPage: 1,
      //   perPage: 10
      // }
    }
  },
  async mounted() {
    this.loader = true
    this.srch = localStorage.getItem('srch')
    const results = await this.$axios.get(`/just_products_search/${this.srch}`)
    // this.blogs = results.data.blogs
    // this.filterBlogItems = this.blogs
    this.products = results.data.products;
    this.filterItems = this.products
    this.loader = false
  },
  computed: {
    getPaginateCount() {
      return Math.ceil(this.filterItems.length / this.product.perPage);
    },
    getItems() {
      let start = (this.product.currentPage - 1) * this.product.perPage;
      let end = this.product.currentPage * this.product.perPage;
      return this.filterItems.slice(start, end);
    },
    // getPaginateBlogCount() {
    //   return Math.ceil(this.filterBlogItems.length / this.blog.perPage);
    // },
    // getBlogItems() {
    //   let start = (this.blog.currentPage - 1) * this.blog.perPage;
    //   let end = this.blog.currentPage * this.blog.perPage;
    //   return this.filterBlogItems.slice(start, end);
    // },
  },
  methods: {
    paginateClickCallback(page) {
      this.product.currentPage = Number(page);
    },
    // paginateBlogClickCallback(page) {
    //   this.blog.currentPage = Number(page);
    // },
  }
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:100);


#loading {
  margin: 50px auto;
  width: 80px;
  height: 80px;
  border: 3px solid rgba(0, 0, 0, .5);
  border-radius: 50%;
  border-top-color: #000;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}

@-webkit-keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>
