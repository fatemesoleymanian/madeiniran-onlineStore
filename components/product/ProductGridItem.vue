<template>
    <div class="product-wrap mb-30">
        <div class="product-img">
            <n-link :to="`/product/${product.id}`">
                <img class="default-img" :src="'https://api.madein-iran.com/public'+product.image" :alt="product.name">
                <img class="hover-img" :src="'https://api.madein-iran.com/public'+product.image" :alt="product.name">
            </n-link>
            <div class="product-badges">
                <span class="product-label purple" v-if="product.discount>0">{{ product.discount }}%</span>
            </div>
            <div class="product-action" v-if="layout === 'twoColumn' || layout === 'threeColumn'">
                <div class="pro-same-action pro-wishlist">
                    <button class="btn" title="لیست علاقمندیها" @click="addToWishlist(product)">
                        <i :class="checkIsLiked === true ? 'fa fa-heart' : 'pe-7s-like'"></i>
                    </button>
                </div>
                <div class="pro-same-action pro-cart">
                    <n-link :to="`/product/${product.id}`" class="btn" v-if="product.state">
                        مشاهده جزئیات
                    </n-link>
                    <!-- <button class="btn" title="افزودن به سبد خرید" @click="addToCart(product)" v-else>
                        <i class="pe-7s-cart"></i>
                       افزودن به سبد خرید
                    </button> -->
                </div>
                <div class="pro-same-action pro-quickview">
                    <button class="btn" title="مشاهده سریع محصول" @click="onClick(product)">
                        <i class="pe-7s-look"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="product-content text-center">
            <h3>
                <n-link :to="`/product/${product.id}`">{{ product.name }}</n-link>
            </h3>
            <div class="product-price" v-if="auth">
               <span style="font-family:persianNumber;">{{ product.state[0].discounted_price.replace(/\B(?=(\d{3})+(?!\d))/g, ',') }} تومان </span>
               <span class="old" v-if="product.discount > 0" style="font-family:persianNumber;">{{ product.state[0].price.replace(/\B(?=(\d{3})+(?!\d))/g, ',') }}تومان</span>
            </div>
            <div class="product-content__list-view" v-if="layout === 'list'">
                <p  v-html="product.description_excerpt"></p>
                <div class="pro-action d-flex align-items-center" >
                    <div class="pro-cart btn-hover">
                        <n-link :to="`/product/${product.id}`" class="btn" v-if="product.state">
                            مشاهده جزئیات
                        </n-link>
                        <!-- <button class="btn" title="افزودن به سبد خرید" @click="addToCart(product)" v-else>
                            <i class="pe-7s-cart"></i>
                            افزودن به سبد خرید
                        </button> -->
                    </div>
                    <div class="pro-wishlist">
                        <button @click="addToWishlist(product)">
                            <i :class="checkIsLiked === true ? 'fa fa-heart' : 'fa fa-heart-o'"></i>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["product", "layout"],
        data(){
            return{
           auth: false,
            }
        },
        mounted(){
            if (localStorage.getItem('116111107101110')) {
      this.auth = true
    }
        },

      computed: {
            checkIsLiked()
            {
              if (this.$store.state.wishlist.find(el => this.product.id === el.id)) return true;
              else return  false;
            }
          },

        methods: {
            addToCart(product) {
              if (!localStorage.getItem('116111107101110')) return  window.location = '/login-register';
                const prod = {...product, cartQuantity: 1}
                // for notification
                if (this.$store.state.cart.find(el => product.id === el.id)) {
                    this.$notify({
                      type:'error',
                      title: 'این محصول در سبد خرید شما وجود دارد!' })
                } else {
                    this.$notify({
                      type:'success',
                      title: 'به سبد خرید شما افزوده شد!'})
                }

                this.$store.dispatch('addToCartItem', prod)
            },

            discountedPrice(product) {
                return product.price - (product.price * product.discount / 100)
            },

            async addToWishlist(product) {
              if (!localStorage.getItem('116111107101110')) return  window.location = '/login-register';
                // for notification
              const user = localStorage.getItem('117115101114');
              const userr = JSON.parse(user);
              const data = {
                user: userr.id,
                product: product.id,
              }
              this.$axios.setToken(localStorage.getItem('116111107101110'), 'Bearer');

              if (this.$store.state.wishlist.find(el => product.id === el.id)) {
                const remove = await  this.$axios.delete('/bookmark',{data})
                this.$store.dispatch('removeProductFromWishlist',product)
                this.$notify({
                  type:'success',
                  title: 'این محصول از لیست علاقمندیهای شما حذف شد!'})
              }
              else {
                const card = await this.$axios.post(`/bookmark`, data)
                this.$notify({
                  type:'success',
                  title: 'این محصول به لیست علاقمندیهای شما افزوده شد!'})
                this.$store.dispatch('addToWishlist', product)
              }
            },

            onClick(product) {
              const category = product.category.name;
              const states = product.state
              this.$store.dispatch('setOneCategoryProduct',category)
              this.$store.dispatch('setOneProductStates',states)
                this.$modal.show('quickview', product);
            },

        },
    };
</script>
