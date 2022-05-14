<template>
    <div class="product-wrap mb-30">
        <div class="product-img">
            <n-link :to="`/product/${product.id}`">
                <img class="default-img" :src="product.image" :alt="product.name">
                <img class="hover-img" :src="product.image" :alt="product.name">
            </n-link>
            <div class="product-badges">
                <span class="product-label pink" v-if="product.state">جدید</span>
                <span class="product-label purple" v-if="product.discount">-{{ product.discount }}%</span>
            </div>
            <div class="product-action" v-if="layout === 'twoColumn' || layout === 'threeColumn'">
                <div class="pro-same-action pro-wishlist">
                    <button class="btn" title="لیست علاقمندیها" @click="addToWishlist(product)">
                        <i class="pe-7s-like"></i>
                    </button>
                </div>
                <div class="pro-same-action pro-cart">
                    <n-link :to="`/product/${product.id}`" class="btn" v-if="product.state">
                        مشاهده جزئیات
                    </n-link>
                    <button class="btn" title="افزودن به سبد خرید" @click="addToCart(product)" v-else>
                        <i class="pe-7s-cart"></i>
                       افزودن به سبد خرید
                    </button>
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
            <div class="product-rating" v-if="product.discount">
                <i class="fa fa-star-o yellow"></i>
                <i class="fa fa-star-o yellow"></i>
                <i class="fa fa-star-o yellow"></i>
                <i class="fa fa-star-o yellow"></i>
                <i class="fa fa-star-o yellow"></i>
            </div>
<!--            <div class="product-rating" v-if="product.rating == 4">-->
<!--                <i class="fa fa-star-o yellow"></i>-->
<!--                <i class="fa fa-star-o yellow"></i>-->
<!--                <i class="fa fa-star-o yellow"></i>-->
<!--                <i class="fa fa-star-o yellow"></i>-->
<!--                <i class="fa fa-star-o"></i>-->
<!--            </div>-->
<!--            <div class="product-rating" v-if="product.rating == 3">-->
<!--                <i class="fa fa-star-o yellow"></i>-->
<!--                <i class="fa fa-star-o yellow"></i>-->
<!--                <i class="fa fa-star-o yellow"></i>-->
<!--                <i class="fa fa-star-o"></i>-->
<!--                <i class="fa fa-star-o"></i>-->
<!--            </div>-->
<!--            <div class="product-rating" v-if="product.rating == 2">-->
<!--                <i class="fa fa-star-o yellow"></i>-->
<!--                <i class="fa fa-star-o yellow"></i>-->
<!--                <i class="fa fa-star-o"></i>-->
<!--                <i class="fa fa-star-o"></i>-->
<!--                <i class="fa fa-star-o"></i>-->
<!--            </div>-->
<!--            <div class="product-rating" v-if="product.rating == 1">-->
<!--                <i class="fa fa-star-o yellow"></i>-->
<!--                <i class="fa fa-star-o"></i>-->
<!--                <i class="fa fa-star-o"></i>-->
<!--                <i class="fa fa-star-o"></i>-->
<!--                <i class="fa fa-star-o"></i>-->
<!--            </div>-->
            <div class="product-price">
                <span>{{ product.state[0].discounted_price }} تومان </span>-
                <span class="old" v-if="product.discount > 0">{{ product.state[0].price }}تومان</span>
            </div>
            <div class="product-content__list-view" v-if="layout === 'list'">
                <p  v-html="product.description_excerpt"></p>
                <div class="pro-action d-flex align-items-center" >
                    <div class="pro-cart btn-hover">
                        <n-link :to="`/product/${product.id}`" class="btn" v-if="product.state">
                            مشاهده جزئیات
                        </n-link>
                        <button class="btn" title="افزودن به سبد خرید" @click="addToCart(product)" v-else>
                            <i class="pe-7s-cart"></i>
                            افزودن به سبد خرید
                        </button>
                    </div>
                    <div class="pro-wishlist">
                        <button @click="addToWishlist(product)">
                            <i class="fa fa-heart-o"></i>
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

        methods: {
            addToCart(product) {
                const prod = {...product, cartQuantity: 1}
                // for notification
                if (this.$store.state.cart.find(el => product.id === el.id)) {
                    this.$notify({ title: 'این محصول در سبد خرید شما وجود دارد!' })
                } else {
                    this.$notify({ title: 'به سبد خرید شما افزوده شد!'})
                }

                this.$store.dispatch('addToCartItem', prod)
            },

            discountedPrice(product) {
                return product.price - (product.price * product.discount / 100)
            },

            addToWishlist(product) {
                // for notification
                if (this.$store.state.wishlist.find(el => product.id === el.id)) {
                    this.$notify({ title: 'این محصول در لیست علاقمندیهای شما وجود دارد!' })
                } else {
                    this.$notify({ title: 'این محصول به لیست علاقمندی های شما افزوده شد!'})
                }

                this.$store.dispatch('addToWishlist', product)
            },

            onClick(product) {
                this.$modal.show('quickview', product);
            },

        },
    };
</script>
