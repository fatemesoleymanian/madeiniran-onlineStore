<template>
  <div class="cart-page-wrapper">
    <HeaderWithTopbar containerClass="container"/>
    <Breadcrumb pageTitle="سبد خرید"/>

    <div class="cart-main-area pt-90 pb-100">
      <div class="container">
        <div class="row">
          <div class="col-12" v-if="products.length > 0">
            <h3 class="cart-page-title">سبد خرید شما</h3>
            <div id="loading" v-if="loader"></div>
            <div class="table-content table-responsive cart-table-content" v-if="!loader">
              <table>
                <thead>
                <tr>
                  <th>عکس محصول</th>
                  <th>نام محصول</th>
                  <th>قیمت محصول</th>
                  <th>ظرفیت</th>
                  <th>تعداد</th>
                  <th>قیمت (بر اساس تعداد)</th>
                  <th>عملیات</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(product, index) in products" :key="index">
                  <td class="product-thumbnail">
                    <n-link :to="`/product/${product.product.id}`">
                      <img :src="'https://api.madein-iran.com/public'+product.product.image"
                           :alt="product.product.name">
                    </n-link>
                  </td>
                  <td class="product-name">
                    <n-link :to="`/product/${product.product.id}`">{{ product.product.name }}</n-link>
                  </td>
                  <td class="product-price-cart">
                    <span class="amount" style="font-family:persianNumber;">{{
                        product.state.discounted_price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                      }}تومان</span>
                    <del class="old" v-if="product.product.discount >0" style="font-family:persianNumber;">
                      {{ product.state.price.replace(/\B(?=(\d{3})+(?!\d))/g, ',') }}
                    </del>
                  </td>
                  <td class="product-price-cart">
                    <span class="amount" style="font-family:persianNumber;">{{ product.state.type }}</span>
                  </td>
                  <td class="product-quantity">
                    <div class="cart-plus-minus">
                      <button @click="decrementProduct(product)" class="dec qtybutton">-</button>
                      <input class="cart-plus-minus-box" type="text" :value="product.count " readonly>
                      <button @click="incrementProduct(product)" class="inc qtybutton">+</button>
                    </div>
                  </td>
                  <td class="product-subtotal">
                    {{
                      (product.count * product.state.discounted_price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                    }} تومان
                  </td>
                  <td class="product-remove">
                    <button @click="removeProduct(product)"><i class="fa fa-times"></i></button>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <div class="row" v-if="!loader">
              <div class="col-lg-12">
                <div class="cart-shiping-update-wrapper">
                  <div class="cart-shiping-update">
                    <n-link to="/shop">ادامه خرید</n-link>
                  </div>
                  <div class="cart-clear">
                    <button @click="clearCart()">خالی کردن سبد خرید</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="row" v-if="!loader">
              <div class="col-lg-4 col-md-6">

              </div>
              <div class="col-lg-4 col-md-12">
                <div class="grand-total">
                  <div class="title-wrap">
                    <h4 class="cart-bottom-title section-bg-gary-cart">مجموع :</h4>
                  </div>
                  <h5> مجموع <span>
                                  {{ total }} تومان
                                </span>
                  </h5>
                  <h4 class="grand-total-title">
                    مجموع قیمت <span>
                                  {{ total }} تومان
                                  </span>
                  </h4>
                  <n-link to="/checkout">تسویه حساب</n-link>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">

              </div>
            </div>
          </div>
          <div class="col-12" v-else>
            <div class="empty-cart text-center">
              <div class="icon">
                <i class="pe-7s-cart"></i>
              </div>
              <h4>هیچ محصولی در سبد خرید شما یافت نشد!</h4>
              <n-link to="/shop" class="empty-cart__button">همین الان خرید کن</n-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TheFooter/>
  </div>
</template>

<script>
export default {

  components: {
    HeaderWithTopbar: () => import('@/components/TheHeader'),
    Breadcrumb: () => import('@/components/Breadcrumb'),
    TheFooter: () => import('@/components/TheFooter'),
  },
  data() {
    return {
      loader: true,
      singleQuantity: 1,
      cardProducts: []
    }
  },

  computed: {
    products() {
      return this.$store.getters.getCart
    },

    total() {
      let total = 0;
      for (let i in this.$store.getters.getCart) {
        // console.log(this.$store.getters.getCart[i])
        let item = this.$store.getters.getCart[i].state.discounted_price * this.$store.getters.getCart[i].count;

        total += item;
      }

      return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

    },
  },

  methods: {
    async incrementProduct(product) {
      console.log(product)

      this.$store.dispatch('addToCartItem', product);

      const data = {
        id: product.id,
      }
      this.$axios.setToken(localStorage.getItem('116111107101110'), 'Bearer');
      const card = await this.$axios.post(`/card_inc_count`, data);
    },

    async decrementProduct(product) {

      if (product.count > 1) {
        this.$store.dispatch('decreaseProduct', product)
        const data = {
          id: product.id,
        }
        this.$axios.setToken(localStorage.getItem('116111107101110'), 'Bearer');
        const card = await this.$axios.post(`/card_dec_count`, data)
      }
    },

    async removeProduct(product) {
      // for notification
      const data = {
        id: product.id,
      }
      this.$axios.setToken(localStorage.getItem('116111107101110'), 'Bearer');
      const card = await this.$axios.delete(`/card`, {data})
      this.$notify({
        title: 'محصول از سبد شما حذف گردید!',
        type: 'success'
      })
      this.$store.dispatch('removeProductFromCart', product)
    },

    discountedPrice(product) {
      return product.price - (product.price * product.discount / 100)
    },

    async clearCart() {
      if (confirm("از خالی کردن سبد خرید خود اطمینان دارید؟")) {
        // for notification
        const user = localStorage.getItem('117115101114');
        const userr = JSON.parse(user)

        const data = {
          user_id: userr.id,
        }
        this.$axios.setToken(localStorage.getItem('116111107101110'), 'Bearer');
        const card = await this.$axios.delete(`/empty_card`, {data})
        this.$notify({
          title: 'سبد خرید شما خالی شد!',
          type: 'success'
        })

        this.$store.commit('CLEAR_CART')
      }
    },
  },

  head() {
    return {
      title: "سبد خرید"
    }
  },
  async mounted() {
    if (!localStorage.getItem('116111107101110')) window.location = '/login-register';

    else {
      this.loader = true
      const user = localStorage.getItem('117115101114');
      const userr = JSON.parse(user)
      this.$axios.setToken(localStorage.getItem('116111107101110'), 'Bearer');
      await this.$axios.get(`/card/${userr.id}`)
          .then(response => {
            this.$store.dispatch('initCart', response.data.products)
            this.cardProducts = response.data.products
            this.loader = false
          })
          .catch(error => {
            console.log(error)
            localStorage.removeItem('116111107101110');
            localStorage.removeItem('117115101114');
            localStorage.removeItem('099097114100');
            localStorage.removeItem('key');
            this.$axios.setToken(false)
            window.location = '/';

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
