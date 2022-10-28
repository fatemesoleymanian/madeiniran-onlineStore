<template>
    <client-only>
        <modal name="quickview" @before-open="beforeOpen" width="50%" :scrollable="true" height=auto >
            <div class="quickview-wrapper row">
                <div class="col-md-6">
                    <div class="product-details-slider">
                        <div class="product-details-img">
                            <div class="product-badges">
                                <span class="product-label purple" v-if="product.discount>0">{{ product.discount }}%</span>
                            </div>
                            <swiper :options="swiperOptionTop">
                                <div class="large-img swiper-slide" >
                                    <img class="img-fluid" :src="'https://api.madein-iran.com/public'+product.image" :alt="product.name">
                                </div>
                            </swiper>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="product-details-content">
                        <div slot="top-right">
                            <button @click="$modal.hide('quickview')" class="modal-close">
                                <i class="fa fa-times"></i>
                            </button>
                        </div>
                        <h2>{{ product.name }}</h2>
                        <div class="product-details-price" v-if="auth">
                            <span style="font-family:persianNumber;" > {{ discounted_price.replace(/\B(?=(\d{3})+(?!\d))/g, ',') }} تومان </span>
                            <span class="old" v-if="product.discount > 0">{{ pricee.replace(/\B(?=(\d{3})+(?!\d))/g, ',') }} تومان</span>
                        </div>
                        <p>{{ product.description_excerpt }}</p>
                    <h6 v-if="!auth"><a href="/login-register">برای مشاهده قیمت وارد حساب کاربری خود شوید.</a></h6>
                        <div class="pro-details-size-color" v-if="product.state">
                            <div class="pro-details-size-wrap">
                                <h6 class="label">ظرفیت ها</h6>
                                <div class="pro-details-size-content">
                                    <label class="radio" v-for="(item, index) in product.state" :key="index">
                                        <input type="radio" name="sizeGroup" checked @click="priceByState(index)" />
                                        <span class="check-mark">{{ item.type }}</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="pro-details-quality">
                            <div class="cart-plus-minus">
                                <button @click="decreaseQuantity()" class="dec qtybutton">-</button>
                                <input class="cart-plus-minus-box" type="text" :value="singleQuantity" readonly>
                                <button @click="increaseQuantity()" class="inc qtybutton">+</button>
                            </div>
                            <div class="pro-details-cart btn-hover">
                                <button @click="addToCart(product)">افزودن به سبد خرید</button>
                            </div>
                            <div class="pro-details-wishlist">
                                <button @click="addToWishlist(product)">
                                  <i :class="checkIsLiked === true ? 'fa fa-heart' : 'fa fa-heart-o'"></i></button>
                            </div>
<!--                            <div class="pro-details-compare">-->
<!--                                <button @click="addToCompare(product)"><i class="pe-7s-shuffle"></i></button>-->
<!--                            </div>-->
                        </div>
                        <div class="pro-details-meta">
                            <span class="label">دسته بندی :</span>
                            <ul>
                                <li>
                                    <n-link :to="`/shop?category=`">{{ category }}</n-link>
                                </li>
                            </ul>
                        </div>
                        <div class="pro-details-meta">
                            <span class="label">تگ ها :</span>
                            <ul>
                                <li v-for="(tag, index) in product.tag" :key="index">
                                    <n-link :to="`/shop?tag=${tag}`">{{ tag.name }},</n-link>
                                </li>
                            </ul>
                        </div>
<!--                        <div class="pro-details-social">-->
<!--                            <ul>-->
<!--                                <li>-->
<!--                                    <a href="https://www.facebook.com/" target="_blank">-->
<!--                                        <i class="fa fa-facebook"></i>-->
<!--                                    </a>-->
<!--                                </li>-->
<!--                                <li>-->
<!--                                    <a href="https://dribbble.com/" target="_blank">-->
<!--                                        <i class="fa fa-dribbble"></i>-->
<!--                                    </a>-->
<!--                                </li>-->
<!--                                <li>-->
<!--                                    <a href="https://www.pinterest.com/" target="_blank">-->
<!--                                        <i class="fa fa-pinterest-p"></i>-->
<!--                                    </a>-->
<!--                                </li>-->
<!--                                <li>-->
<!--                                    <a href="https://twitter.com/" target="_blank">-->
<!--                                        <i class="fa fa-twitter"></i>-->
<!--                                    </a>-->
<!--                                </li>-->
<!--                                <li>-->
<!--                                    <a href="https://www.linkedin.com/" target="_blank">-->
<!--                                        <i class="fa fa-linkedin"></i>-->
<!--                                    </a>-->
<!--                                </li>-->
<!--                            </ul>-->
<!--                        </div>-->
                    </div>
                </div>
            </div>
        </modal>
    </client-only>
</template>

<script>
    export default {
        data() {
            return {
                item: '',
                singleQuantity: 1,

                swiperOptionTop: {
                    loop: true,
                    slidesPerView : 1,
                    spaceBetween: 10,
                    effect: 'fade',
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },
              category:'',
              states:[],
              pricee :'',
              discounted_price:'',
              state_id : '',
              indexOfState:'',
              auth: false,
            }
        },
      computed: {
            product() {
              this.states = this.$store.getters.getOneProductStates

              this.category = this.$store.getters.getOneCategory;
              this.settingPrice();
                return this.item;
            },
        checkIsLiked()
        {
          if (this.$store.state.wishlist.find(el => this.product.id === el.id)) return true;
          else return  false;
        }
        },

      methods: {
            beforeOpen ({params: product}) {
                this.item = product
            },
          priceByState(index)
          {
            this.indexOfState = index;
            this.settingPrice()
          },
          settingPrice()
          {
            for (let i in this.states)
            {
              if (i == this.indexOfState)
              {
                this.pricee = this.states[i].price;
                this.discounted_price = this.states[i].discounted_price;
                this.state_id = this.states[i].id

              }

            }
          },
          async addToCart(product) {
            if (!localStorage.getItem('116111107101110')) return window.location = '/login-register';

            if (this.state_id === '') return  this.$notify({title: 'لطفا ظرفیت محصول را انتخاب کنید!'})


            const prod = {...product, cartQuantity: this.singleQuantity}
            // for notification
            if (this.$store.state.cart.find(el => this.state_id === el.state_id  )) {
              this.$notify({title: 'این محصول در سبد خرید شما وجود دارد!'})
            }
            else {
              const user = localStorage.getItem('117115101114');
              const userr = JSON.parse(user)

              const data = {
                user_id: userr.id,
                product: product.id,
                state: this.state_id,
                count:this.singleQuantity
              }
              this.$axios.setToken(localStorage.getItem('116111107101110'), 'Bearer');
              const card = await this.$axios.post(`/card`, data);
              this.$notify({
                type:'success',
                title: 'محصول با موفقیت به سبد خرید افزوده شد!'})
              const newPro = await  this.$axios.get(`/card_one_pro/${card.data.msg.id}`);
              this.$store.dispatch('addToCartItem',newPro.data.product[0] )
            }

          },

            discountedPrice(product) {
                return product.price - (product.price * product.discount / 100)
            },

            increaseQuantity(){
              if (!localStorage.getItem('116111107101110')) return  window.location = '/login-register';
              if (this.product.inventory >= this.singleQuantity) this.singleQuantity++
            },

            decreaseQuantity() {
              if (!localStorage.getItem('116111107101110')) return  window.location = '/login-register';
              if (this.singleQuantity > 1) this.singleQuantity--
            },

            async addToWishlist(product) {
              if (!localStorage.getItem('116111107101110')) return window.location = '/login-register';
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
                this.$notify({title: 'این محصول از لیست علاقمندیهای شما حذف شد!'})
              }
              else {
                const card = await this.$axios.post(`/bookmark`, data)
                this.$notify({title: 'این محصول به لیست علاقمندیهای شما افزوده شد!'})
                this.$store.dispatch('addToWishlist', product)
              }
            },


        },
        mounted(){
          if (localStorage.getItem('116111107101110')) {
           this.auth = true
    }
        }
    };
</script>

<style lang="scss">
    .quickview-wrapper {
        .product-details-content {
            @media #{$xs-layout} {
                padding-top: 30px;
            }
            .pro-details-cart {
                &.btn-hover {
                    button {
                        @media #{$xxs-layout}{
                            padding: 23px 15px;
                        }
                    }
                }
            }
        }
    }
    .vm--overlay {
        background-color: rgba($dark, 0.8);
      @media #{$md-layout} {
        right: 0;
        bottom: 0;
      }

    }
    .vm--modal {
        padding: 15px;
        overflow-y: auto;
    }
    .modal-close {
        top: -20px;
        right: -20px;
        width: 40px;
        height: 40px;
        color: $white;
        font-size: 20px;
        border-radius: 50%;
        position: absolute;
        border: 1px solid $theme-color;
        background-color: $theme-color;
    }
    .quickview-nav {
        color: $black;
        width: 40px;
        height: 40px;
        font-size: 40px;
        line-height: 40px;
        background-color: rgba($black, 0.2);
        transition: 0.4s;
        &:hover {
            color: $white;
            background-color: $theme-color;
        }
    }
    .vm--container.scrollable .vm--modal {
        width: 1000px !important;
        left: 25% !important;
        transform: translateX(-50%);
        overflow: unset;
        @media #{$md-layout}{
            width: 700px !important;
          left: 35% !important;
        }
        @media #{$xs-layout}{
            width: 320px !important;
            top: 30px !important;
        }
      @media #{$xxs-layout} {
        left: 40% !important;
      }
        @media only screen and(min-width: 480px) and (max-width: 579px){
            width: 420px !important;
        }
      @media only screen and(min-width: 390px) and (max-width: 450px){
        left: 35% !important;
      }
        @media #{$sm-layout}{
            width: 500px !important;
        }
    }
</style>
