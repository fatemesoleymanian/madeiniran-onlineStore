<template>
    <div class="cart-page-wrapper">
        <HeaderWithTopbar containerClass="container" />
        <Breadcrumb pageTitle="ثبت سفارش" />

        <!-- checkout section start -->
        <div class="checkout-area pt-95 pb-100">
            <div class="container">
                <div class="row" v-if="order_items.length > 0">
                    <div class="col-lg-7">
                        <div class="billing-info-wrap">
                            <h3>جزئیات صورتحساب</h3>
                            <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <div class="billing-info mb-20">
                                        <label>نام و نام خانوادگی :</label>
                                        <input type="text" v-model="user_info.name">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="billing-info mb-20">
                                        <label>شماره تماس :</label>
                                        <input type="tel" v-model="user_info.phone_number" minlength="11" maxlength="11">
                                    </div>
                                </div>
<!--                                <div class="col-lg-12">-->
<!--                                    <div class="billing-info mb-20">-->
<!--                                        <label>Company Name</label>-->
<!--                                        <input type="text">-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="col-lg-12">-->
<!--                                    <div class="billing-select mb-20">-->
<!--                                        <label>Country</label>-->
<!--                                        <select>-->
<!--                                            <option>Select a country</option>-->
<!--                                            <option>Azerbaijan</option>-->
<!--                                            <option>Bahamas</option>-->
<!--                                            <option>Bahrain</option>-->
<!--                                            <option>Bangladesh</option>-->
<!--                                            <option>Barbados</option>-->
<!--                                        </select>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="col-lg-12">-->
<!--                                    <div class="billing-info mb-20">-->
<!--                                        <label>Street Address</label>-->
<!--                                        <input class="billing-address" placeholder="House number and street name" type="text">-->
<!--                                        <input placeholder="Apartment, suite, unit etc." type="text">-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="col-lg-12">-->
<!--                                    <div class="billing-info mb-20">-->
<!--                                        <label>Town / City</label>-->
<!--                                        <input type="text">-->
<!--                                    </div>-->
<!--                                </div>-->
                                <div class="col-lg-6 col-md-6">
                                    <div class="billing-info mb-20">
                                        <label>طبقه</label>
                                        <input type="number" v-model="user_info.floor" min="0" title="برای همکف 0 را وارد کنید." placeholder="برای همکف 0 را وارد کنید.">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="billing-info mb-20">
                                        <label>کد پستی</label>
                                        <input type="text"  v-model="user_info.zip_code" maxlength="10" minlength="10">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="billing-info mb-20">
                                        <label>پلاک</label>
                                        <input type="number" v-model="user_info.plaque" min="0" >
                                    </div>
                                </div>
<!--                                <div class="col-lg-6 col-md-6">-->
<!--                                    <div class="billing-info mb-20">-->
<!--                                        <label>Email Address</label>-->
<!--                                        <input type="text">-->
<!--                                    </div>-->
<!--                                </div>-->
                            </div>
                            <div class="additional-info-wrap">
<!--                                <h4>Additional information</h4>-->
                                <div class="additional-info">
                                    <label>آدرس کامل مقصد</label>
                                    <textarea placeholder="" name="address" v-model="user_info.address"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="your-order-area">
                            <h3>سفارش شما</h3>
                            <div class="your-order-wrap gray-bg-4">
                                <div class="your-order-product-info">
                                    <div class="your-order-top">
                                        <ul>
                                            <li>محصول</li>
                                            <li>قیمت به تعداد</li>
                                        </ul>
                                    </div>
                                    <div class="your-order-middle">
                                        <ul>
                                            <li v-for="(product, index) in order_items" :key="index">
                                                <span class="order-middle-left">
                                                  {{ product.product.name }}
                                                <i class="fa fa-times text-muted" aria-hidden="true"></i>
                                                  {{ product.count }}
                                                </span>
                                              <!-- <span class="order-price">
                                                {{ (product.count*product.state.discounted_price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }} تومان</span> -->
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="your-order-bottom">
                                        <ul>
                                            <li class="your-order-shipping">هزینه ارسال</li>
                                            <li>بعد از ثبت سفارش محاسبه خواهد شد</li>
                                        </ul>
                                    </div>
                                    <div class="your-order-total">
                                        <ul>
                                            <li class="order-total">مبلغ پرداختی سفارش</li>
                                            <!-- <li>{{ total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }} تومان </li> -->
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="place-order mt-25">
                                <button class="btn-hover" @click="saveOrderAndPay"> ثبت سفارش و پرداخت</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" v-else>
                    <div class="col-12">
                        <div class="empty-cart text-center">
                            <div class="icon">
                                <i class="pe-7s-cash"></i>
                            </div>
                            <h4>محصولی در سبد خرید شما برای ثبت سفارش وجود ندارد!</h4>
                            <n-link to="/shop" class="empty-cart__button">همین الان خرید کن</n-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- checkout section end -->
        <TheFooter />
    </div>
</template>

<script>
    export default {
        components: {
            HeaderWithTopbar: () => import("@/components/TheHeader"),
            Breadcrumb: () => import("@/components/Breadcrumb"),
            TheFooter: () => import("@/components/TheFooter"),
        },
      data()
      {
        return{
          user_info :'',
          order_items:[],
          total:0
        }
      },

        head() {
            return {
                title: "ثبت سفارش"
            }
        },
         async mounted() {
           if (!localStorage.getItem('116111107101110')) return window.location = '/login-register';

           else {
             const user = localStorage.getItem('117115101114');
             const userr = JSON.parse(user)
             this.$axios.setToken(localStorage.getItem('116111107101110'),'Bearer');

             const [order,user_info] = await Promise.all([
               this.$axios.get(`order/step_3/${userr.id}`),
               this.$axios.get(`order/user/${userr.id}`),
             ]);
             this.user_info = user_info.data;
             this.order_items = order.data.products;
             this.total = order.data.total_price;

             console.log(this.order_items)
           }
         },
      methods:{
        async saveOrderAndPay()
        {
          //validation
          if (this.user_info.name == null || this.user_info.name.trim() === '') return this.$notify(
              { title: 'نام و نام خانوادگی الزامی است.',
              type:'error'})
          if (this.user_info.phone_number == null || this.user_info.phone_number.trim() === '') return this.$notify({
            title: 'شماره تماس الزامی است.',
          type:'error'})
          if (this.user_info.floor == null || this.user_info.floor === '') return this.$notify({
            title: 'شماره واحد یا طبقه الزامی است.',
            type:'error'})
          if (this.user_info.zip_code == null || this.user_info.zip_code.trim() === '') return this.$notify({
            title: 'کد پستی الزامی است.',
            type:'error'})
          if (this.user_info.plaque == null || this.user_info.plaque === '') return this.$notify({
            title: 'شماره پلاک الزامی است.',
            type:'error'})
          if (this.user_info.address == null || this.user_info.address.trim() === '') return this.$notify({
            title: 'آدرس مقصد الزامی است.',
            type:'error'})
          if (this.user_info.phone_number.length !== 11 ) return this.$notify({
            title: 'شماره تماس اشتباه است.',
            type:'error'})
          if (this.user_info.zip_code.length !== 10 ) return this.$notify({
            title: 'کدپستی اشتباه است.',
            type:'error'})

          //update user information
          const user = localStorage.getItem('117115101114');
          const userr = JSON.parse(user)
          const data = {
            id:userr.id,
            name : this.user_info.name,
            phone_number : this.user_info.phone_number,
            address : this.user_info.address,
            plaque : this.user_info.plaque,
            zip_code : this.user_info.zip_code,
            floor : this.user_info.floor,
        }
          this.$axios.setToken(localStorage.getItem('116111107101110'),'Bearer');
          const update_user_info = await this.$axios.post('order/step_2',data);
          console.log(update_user_info.data.msg+'update user message')
          //GO TO PAYMENT PAGE NOW

          //save order
          // const order_data = {
          //   user: userr.id
          // }
          // const save_order = await this.$axios.post('order/step_1',order_data);
          // in methode vase vghtie ke pay ba success bood


        }
      }
    };
</script>
