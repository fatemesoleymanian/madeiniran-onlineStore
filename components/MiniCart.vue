<template>
    <div class="minicart-wrapper" :class="miniCart">
        <div class="shopping-cart-content" v-if="products.length > 0">
            <ul>
                <li class="single-shopping-cart" v-for="(product, index) in products" :key="index">
                    <div class="shopping-cart-img">
                        <n-link :to="`/product/${product.product.id}`">
                            <img :src="'https://api.madein-iran.com/public'+product.product.image" :alt="product.product.name">
                        </n-link>
                    </div>
                    <div class="shopping-cart-title">
                        <h4>
                            <n-link :to="`/product/${product.product.id}`">{{ product.product.name }}</n-link>
                        </h4>
                        <h6>تعداد : {{ product.count }}</h6>
                        <span style="font-family:persianNumber;">  {{ (product.count * product.state.discounted_price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }} تومان</span>
                    </div>
                    <div class="shopping-cart-delete">
                        <button @click="removeProduct(product)">
                            <i class="fa fa-times-circle"></i>
                        </button>
                    </div>
                </li>
            </ul>
            <div class="shopping-cart-total">
                <h4>
                    مجموع   :
                    <span class="shop-total"> {{ total }} تومان </span>
                  </h4>
            </div>
            <div class="shopping-cart-btn btn-hover text-center" @click="$emit('minicartClose')">
                <n-link to="/cart" class="default-btn">مشاهده سبد خرید</n-link>
                <n-link to="/checkout" class="default-btn">ثبت سفارش</n-link>
            </div>
        </div>
        <div class="shopping-cart-content text-center" v-else>
            <p>هیچ محصولی در سبد خرید وجود ندارد!</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["miniCart"],

        computed: {
            products() {
                return this.$store.getters.getCart
            },
            total() {
              let total =0;
              for (let i in this.$store.getters.getCart)
              {
                // console.log(this.$store.getters.getCart[i])
                let item = this.$store.getters.getCart[i].state.discounted_price * this.$store.getters.getCart[i].count;
                // console.log(item)
                total += item ;
              }
              // console.log('total '+ total)
              return  total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

            }
        },

    };
</script>
