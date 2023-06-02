<template>
  <div class="cart-page-wrapper">
    <HeaderWithTopbar containerClass="container" />
    <Breadcrumb pageTitle="علاقه مندیها" />

    <!-- wishlist section start -->
    <div class="cart-main-area pt-90 pb-100">
      <div class="container">
        <div id="loading" v-if="loader"></div>
        <div class="row" v-if="products.length > 0">
          <div class="col-12">
            <h3 class="cart-page-title">لیست خطوط تولید مورد علاقه شما</h3>
            <div class="table-content table-responsive cart-table-content">
              <table>
                <thead>
                  <tr>
                    <th>عکس محصول</th>
                    <th>نام محصول</th>
                    <th>درصد تخفیف</th>
                    <th>عملیات</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(product, index) in markedProducts" :key="index">
                    <td class="product-thumbnail">
                      <n-link :to="`/product/${product.product.slug}/`">
                        <img
                          :src="
                            'https://api.madein-iran.com/public' +
                            product.product.image
                          "
                          :alt="product.product.name"
                        />
                      </n-link>
                    </td>
                    <td class="product-name">
                      <n-link :to="`/product/${product.product.slug}/`">{{
                        product.product.name
                      }}</n-link>
                    </td>
                    <td class="product-price-cart">
                      <span
                        class="amount"
                        v-if="product.product.discount"
                        style="font-family: persianNumber"
                        >{{ product.product.discount }}%</span
                      >
                      <span class="amount" v-else>بدون تخفیف</span>
                    </td>
                    <td class="product-remove">
                      <button
                        @click="removeProductFromWishlist(product, index)"
                      >
                        <i class="fa fa-times"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="row" v-else>
          <div class="col-12">
            <div class="empty-cart text-center">
              <div class="icon">
                <i class="pe-7s-like"></i>
              </div>
              <h4>هیچ محصولی در لیست علاقمندی شما یافت نشد!</h4>
              <n-link to="/production-lines/" class="empty-cart__button"
                >افزودن محصول</n-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- wishlist section end -->
    <TheFooter />
  </div>
</template>

<script>
export default {
  data() {
    return {
      markedProducts: [],
      loader: true,
    };
  },
  components: {
    HeaderWithTopbar: () => import("@/components/TheHeader"),
    Breadcrumb: () => import("@/components/Breadcrumb"),
    TheFooter: () => import("@/components/TheFooter"),
  },

  computed: {
    products() {
      return this.$store.getters.getWishlist;
    },
  },

  methods: {
    async removeProductFromWishlist(product, i) {
      // for notification
      const data = {
        id: product.id,
      };

      this.$axios.setToken(localStorage.getItem("116111107101110"), "Bearer");
      const card = await this.$axios.delete(`/bookmark`, { data });

      this.$store.dispatch("removeProductFromWishlist", product.product);
      this.$notify({
        title: "محصول از لیست علاقمندیهای شما حذف گردید!",
        type: "success",
      });
      this.markedProducts.splice(i, 1);
    },

    discountedPrice(product) {
      return product.price - (product.price * product.discount) / 100;
    },
  },

  head() {
    return {
      title: "علاقه مندیها",
    };
  },
  async mounted() {
    if (!localStorage.getItem("116111107101110"))
      window.location = "/login-register";
    else {
      this.loader = true;
      const user = localStorage.getItem("117115101114");
      const userr = JSON.parse(user);
      this.$axios.setToken(localStorage.getItem("116111107101110"), "Bearer");
      await this.$axios
        .get(`/bookmark/${userr.id}`)
        .then((response) => {
          let products = [];
          for (let i in response.data.products) {
            products.push(response.data.products[i].product);
          }
          this.$store.dispatch("initWishlist", products);
          this.markedProducts = response.data.products;
          this.loader = false;
        })
        .catch((error) => {
          console.log(error);
          localStorage.removeItem("116111107101110");
          localStorage.removeItem("117115101114");
          localStorage.removeItem("099097114100");
          localStorage.removeItem("key");
          this.$axios.setToken(false);
          window.location = "/";
        });
    }
  },
};
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:100);

#loading {
  margin: 50px auto;
  width: 80px;
  height: 80px;
  border: 3px solid rgba(0, 0, 0, 0.5);
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
