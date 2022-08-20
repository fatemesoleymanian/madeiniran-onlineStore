<template>
  <div class="shop-page-wrapper">
    <TheHeader containerClass="container"/>
    <Breadcrumb pageTitle="سفارشات من"/>
    <div class="container p-5 my-5 border" style="border-radius: 5px">
      <div class="row my-5">
        <div class="col-md-2 pb-sm-3">
          <h3 class="d-flex justify-content-center py-5 text-dark"
              style="font-weight: 500" v-if="orders">سفارشات</h3>
        </div>
        <div class="col-md-10">
    <div class="my-account-area pb-80 pt-100">
      <div class="container">
        <div class="row">
          <div class="ms-auto me-auto col-lg-12">
            <div class="my-account-wrapper">
              <div id="faq" class="panel-group">
                <div class="panel panel-default single-my-account" v-for="(o,i) in orders" :key="i" v-if="orders" >
                  <div class="panel-heading my-account-title" @click="showItems(o.card_id)">
                    <h3 class="panel-title">
                      <a data-bs-toggle="collapse" :href="`#my-account${i}`">ایجاد شده در
                      {{o.created_at}}
                      </a>
                    </h3>
                  </div>
                  <div :id="`my-account${i}`" class="panel-collapse collapse" data-bs-parent="#faq">
                    <div id="loading" v-if="loader"></div>
                    <div class="panel-body">
                      <div class="myaccount-info-wrapper">
                        <div class="account-info-wrapper d-flex justify-content-between">
                          <h4>جزئیات سفارش</h4>
                          <h4>{{o.current_state}}</h4>
                        </div>
                        <div class="row">
                          <div class="col-lg-12 col-md-12" v-for="(d,j) in details" :key="j" v-if="details.length && !loader">
                            <div class="billing-info d-flex justify-content-between align-items-center">
                            <img :src="'https://api.madein-iran.com/public'+d.product.image" :alt="d.product.name"
                                 width="100" height="100">
                              <h4>
                                <a :href="`/product/${d.product.id}`">
                                {{d.product.name}}
                              </a>
                              </h4>
                              <h5>ظرفیت : {{d.state.type}}</h5>
                              <!-- <h5>{{d.state.discounted_price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}} تومان</h5> -->
                              <h5> به تعداد {{d.count}}</h5>
                            </div>
                          </div>
                        </div>
                        <div class="billing-back-btn float-start">
                          <div class="billing-btn">
                            <!-- <h5 >{{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}} تومان</h5> -->
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="!orders.length">
                  <div class="text-center">
                    <h5 class="fw-bold">هنوز هیچ سفارشی ثبت نشده است! !</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader";
import Breadcrumb from "../components/Breadcrumb";
import TheFooter from "../components/TheFooter";
export default {
  name: "orders",
  components: {TheFooter, Breadcrumb, TheHeader},
  data()
  {
    return {
      orders:[],
      details:[],
      total:'',
      loader:false,
    }

  },
  async mounted()
  {
    const user = localStorage.getItem('117115101114');
    const userr = JSON.parse(user);
    await this.$axios.get(`/orders/${userr.id}`)
    .then((res)=>{
      this.orders = res.data
    })
    .catch(()=>{
      return this.$notify({
        text:'خطایی رخ داد !',
        type:'error'
      });
    });
  },
  head() {
    return {
      title: " سفارشات من"
    }
  },
  methods:{
    async showItems(card)
    {
      this.loader = true
      await this.$axios.get(`order/items${card}`)
      .then((res)=>{
        this.details = res.data.products;
        console.log(this.details)
        this.total = res.data.total_price;
      })
      .catch((e)=>{
        return this.$notify({
          text:e.response.msg,
          type:'error'
        });
      });
      this.loader = false
    }
  }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:100);


#loading {
  margin: 50px auto;
  width: 80px;
  height: 80px;
  border: 3px solid rgba(0,0,0,.5);
  border-radius: 50%;
  border-top-color: #000;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}

</style>
