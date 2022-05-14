<template>
    <div class="minicart-wrapper" :class="miniCart">
        <div class="shopping-cart-content" v-if="products.length > 0">
            <ul>
                <li class="single-shopping-cart" v-for="(product, index) in products" :key="index">
                    <div class="shopping-cart-img">
                        <n-link :to="`/product/${product.name}`">
                            <img :src="product.image" :alt="product.name">
                        </n-link>
                    </div>
                    <div class="shopping-cart-title">
                        <h4>
                            <n-link :to="`/product/${product.name}`">{{ product.name }}</n-link>
                        </h4>
                        <h6>تعداد : {{ product.cartQuantity }}</h6>
                        <span>  {{ product.discount }} تومان</span>
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
                    مجموع :
                    <span class="shop-total"> {{ total }} تومان</span>
                  </h4>
            </div>
            <div class="shopping-cart-btn btn-hover text-center" @click="$emit('minicartClose')">
                <n-link to="/cart" class="default-btn">مشاهده سبد خرید</n-link>
                <n-link to="/checkout" class="default-btn">پرداخت</n-link>
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
                return this.$store.getters.getTotal
            }
        },

        methods: {
            removeProduct(product) {
                // for notification
                this.$notify({ title: 'محصول از سبد خرید حذف شد!'})
                this.$store.dispatch('removeProductFromCart', product)
            },


        },
    };
</script>
