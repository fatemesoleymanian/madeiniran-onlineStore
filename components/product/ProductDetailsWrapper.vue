<template>
  <div class="shop-area pt-100 pb-100">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="product-details-slider">
            <div class="product-details-img">
              <div class="product-badges">
                <span class="product-label purple" v-if="product.discount> 0">{{ product.discount }}%</span>
              </div>
              <swiper :options="swiperOptionTop" ref="swiperTop">
                <div class="large-img swiper-slide">
                  <img class="img-fluid" :src="'https://api.madein-iran.com/public'+product.image" :alt="product.name">
                </div>
              </swiper>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6">
          <div class="product-details-content ml-70">
            <h2>{{ product.name }}</h2>
            <div class="product-details-price" v-if="auth && states.length">
              <span style="font-family:persianNumber;" >  {{ discounted_price.replace(/\B(?=(\d{3})+(?!\d))/g, ',') }} تومان  </span>
              <span class="old" v-if="product.discount > 0" style="font-family:persianNumber;">{{ pricee.replace(/\B(?=(\d{3})+(?!\d))/g, ',') }} تومان</span>
            </div>
            <div class="pro-details-rating-wrap">
              <!--                            <div class="pro-details-rating" v-if="product.state ">-->
              <!--                                <i class="fa fa-star-o yellow"></i>-->
              <!--                                <i class="fa fa-star-o yellow"></i>-->
              <!--                                <i class="fa fa-star-o yellow"></i>-->
              <!--                                <i class="fa fa-star-o yellow"></i>-->
              <!--                                <i class="fa fa-star-o yellow"></i>-->
              <!--                            </div>-->
              <!--                            <div class="pro-details-rating" v-if="product.rating == 4">-->
              <!--                                <i class="fa fa-star-o yellow"></i>-->
              <!--                                <i class="fa fa-star-o yellow"></i>-->
              <!--                                <i class="fa fa-star-o yellow"></i>-->
              <!--                                <i class="fa fa-star-o yellow"></i>-->
              <!--                                <i class="fa fa-star-o"></i>-->
              <!--                            </div>-->
              <!--                            <div class="pro-details-rating" v-if="product.rating == 3">-->
              <!--                                <i class="fa fa-star-o yellow"></i>-->
              <!--                                <i class="fa fa-star-o yellow"></i>-->
              <!--                                <i class="fa fa-star-o yellow"></i>-->
              <!--                                <i class="fa fa-star-o"></i>-->
              <!--                                <i class="fa fa-star-o"></i>-->
              <!--                            </div>-->
              <!--                            <div class="pro-details-rating" v-if="product.rating == 2">-->
              <!--                                <i class="fa fa-star-o yellow"></i>-->
              <!--                                <i class="fa fa-star-o yellow"></i>-->
              <!--                                <i class="fa fa-star-o"></i>-->
              <!--                                <i class="fa fa-star-o"></i>-->
              <!--                                <i class="fa fa-star-o"></i>-->
              <!--                            </div>-->
              <!--                            <div class="pro-details-rating" v-if="product.rating == 1">-->
              <!--                                <i class="fa fa-star-o yellow"></i>-->
              <!--                                <i class="fa fa-star-o"></i>-->
              <!--                                <i class="fa fa-star-o"></i>-->
              <!--                                <i class="fa fa-star-o"></i>-->
              <!--                                <i class="fa fa-star-o"></i>-->
              <!--                            </div>-->
              <!--                            <span><a href="#">{{ product.discount }} Reviews</a></span>-->
            </div>
            <div class="p" v-html="product.description_excerpt"></div>
              <br>
                 <h6 v-if="!auth"><a href="/login-register">برای مشاهده قیمت وارد حساب کاربری خود شوید.</a></h6>

            <div class="pro-details-size-color" v-if="states.length">
              <button @click="navigateToRepresentationForm" class="btn btn-outline-primary">
                <a href="#description" style="color: #0b4dfc;font-size: 13px">برای دریافت مشاوره فرم درخواست نمایندگی خط تولید مورد نظر خود را پر کنید.</a>
                <i class="fa fa-arrow-down"></i>
              </button>
              <!--                            <div class="pro-details-color-wrap">-->
              <!--                                <h6 class="label">Color</h6>-->
              <!--                                <div class="pro-details-color-content">-->
              <!--                                    <label :class="item" class="radio" v-for="(item, index) in product.variation.color" :key="index" >-->
              <!--                                        <input type="radio" name="colorGroup"/>-->
              <!--                                        <span class="check-mark"></span>-->
              <!--                                    </label>-->
              <!--                                </div>-->
              <!--                            </div>-->
              <div class="pro-details-size-wrap">
                <h6 class="label">ظرفیت ها :</h6>
                <div class="pro-details-size-content">
                  <label class="radio" v-for="(item, index) in product.state" :key="index">
                    <input type="radio" name="sizeGroup" checked  @click="priceByState(index)"/>
                    <span class="check-mark" style="font-family:persianNumber;">{{ item.type }}</span>
                  </label>
                </div>
              </div>
            </div>
            <div class="pro-details-quality">
              <!-- <div class="cart-plus-minus">
                <button @click="decreaseQuantity()" class="dec qtybutton">-</button>
                <input class="cart-plus-minus-box" type="text" :value="singleQuantity" readonly>
                <button @click="increaseQuantity()" class="inc qtybutton">+</button>
              </div> -->
              <!-- <div class="pro-details-cart btn-hover">
                <button @click="addToCart(product)">افزودن به سبد خرید</button>
              </div> -->
              <div class="pro-details-wishlist">
                <button @click="addToWishlist(product)" title="لیست علاقمندیها">
                  <i :class="checkIsLiked === true ? 'fa fa-heart' : 'fa fa-heart-o'"></i>
                </button>
              </div>
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
                  <n-link :to="`/shop?tag=`">{{ tag.name }},</n-link>
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
    </div>
  </div>
</template>

<script>
export default {

  props: ['product','category','states'],
  data() {
    return {
      singleQuantity: 1,
      auth: false,
      swiperOptionTop: {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        effect: 'fade',
        loopedSlides: 5, // looped slides should be the same
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },

      slug: this.$route.params.slug,
      indexOfState:this.states.length-1,
      pricee :'',
      discounted_price:'',
      state_id : ''
    }
  },

  // mounted() {
  //     // this.$nextTick(() => {
  //     //     const swiperTop = this.$refs.swiperTop.$swiper
  //     //     const swiperThumbs = this.$refs.swiperThumbs.$swiper
  //     //     swiperTop.controller.control = swiperThumbs
  //     //     swiperThumbs.controller.control = swiperTop
  //     // })
  //   return console.log(this.product)
  // },
    mounted() {
      if (localStorage.getItem('116111107101110')) {
      this.auth = true
    }
      this.indexOfState=(this.states.length-1)
   this.settingPrice()
    },
  computed:{
    checkIsLiked()
    {
      if (this.$store.state.wishlist.find(el => this.product.id === el.id)) return true;
      else return  false;
    }
  },

  methods: {
    navigateToRepresentationForm()
    {
      document.getElementById('ask_form').click();
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

  },
};
</script>


