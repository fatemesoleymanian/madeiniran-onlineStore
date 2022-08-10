<template>
    <div class="product-area pb-90">
        <div class="container">
            <SectionTitleWithSubTitle title="خطوط تولید" classes="section-title"
                                      v-if="isSectionTitle ? true : false" />

            <ul class="nav product-tab-list pt-30 pb-55 justify-content-center">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#new-product" role="tab">
                      جدید ترین خطوط تولید</button>
                </li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane fade show active" id="new-product" role="tabpanel">
                    <div class="row">
                        <div class="col-xl-4 col-lg-4 col-sm-6" v-for="(product, index) in latestProducts" :key="index">
                            <ProductGridItem :product="product" :layout="layout" />
                        </div>
                    </div>
                </div>
              <div class="view-more text-center mt-20 toggle-btn2">
                <n-link to="/shop" class="loadMore2">مشاهده همه</n-link>
              </div>
            </div>
        </div>
        <QuickView />
    </div>
</template>

<script>
    export default {
        props: ['isSectionTitle'],
      async mounted() {
          const products = await this.$axios.get('/products_random');
          this.latestProducts = products.data;
      },

      components: {
            ProductGridItem: () => import('@/components/product/ProductGridItem'),
            QuickView: () => import('@/components/QuickView'),
        },
        data() {
            return {
                layout: "twoColumn",
              latestProducts:[]
            }
        },
    };
</script>
