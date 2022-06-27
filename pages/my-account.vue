<template>
  <div class="shop-page-wrapper">
    <HeaderWithTopbar containerClass="container"/>
    <Breadcrumb pageTitle="حساب من"/>

    <div class="my-account-area pb-80 pt-100">
      <div class="container">
        <div class="row">
          <div class="ms-auto me-auto col-lg-9">
            <div class="my-account-wrapper">
              <div id="faq" class="panel-group">
                <div class="panel panel-default single-my-account">
                  <div class="panel-heading my-account-title">
                    <h3 class="panel-title"><a data-bs-toggle="collapse" href="#my-account-1">
                      اطلاعات حساب کاربری </a></h3>
                  </div>
                  <div id="my-account-1" class="panel-collapse collapse show" data-bs-parent="#faq">
                    <div class="panel-body">
                      <div class="myaccount-info-wrapper">
                        <div class="account-info-wrapper">
                          <h4>جزئیات اطلاعات حساب</h4>
                        </div>
                        <div class="row">
                          <div class="col-lg-6 col-md-6">
                            <div class="billing-info">
                              <label>نام و نام خانوادگی</label>
                              <input type="text" v-model="data.name">
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="billing-info">
                              <label>رمز عبور</label>
                              <input type="password" v-model="data.password">
                            </div>
                          </div>
                          <div class="col-lg-12 col-md-12">
                            <div class="billing-info">
                              <label>آدرس ایمیل</label>
                              <input type="email" v-model="data.email">
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="billing-info">
                              <label>شماره تلفن همراه</label>
                              <input type="tel" v-model="data.phone_number">
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="billing-info">
                              <label>شماره تلفن ثابت</label>
                              <input type="tel" v-model="data.home_number">
                            </div>
                          </div>
                        </div>
                        <div class="billing-back-btn">
                          <div class="billing-back">
                            <a href="#"><i class="fa fa-arrow-up"></i> بازگشت</a>
                          </div>
                          <div class="billing-btn">
                            <button type="submit" @click="update" v-if="show">ثبت</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default single-my-account">
                  <div class="panel-heading my-account-title">
                    <h3 class="panel-title">
                      <a data-bs-toggle="collapse" href="#my-account-2">
                        اطلاعات تکمیلی </a></h3>
                  </div>
                  <div id="my-account-2" class="panel-collapse collapse" data-bs-parent="#faq">
                    <div class="panel-body">
                      <div class="myaccount-info-wrapper">
                        <div class="account-info-wrapper">
                          <h4>جزئیات اطلاعات تکمیلی</h4>
                        </div>
                        <div class="row">
                          <div class="col-lg-12 col-md-12">
                            <div class="billing-info">
                              <label>شغل</label>
                              <input type="text" v-model="data.job">
                            </div>
                          </div>
                          <div class="col-lg-12 col-md-12">
                            <div class="billing-info">
                              <label>کد ملی</label>
                              <input type="text" maxlength="10" v-model="data.national_id">
                            </div>
                          </div>
                          <div class="col-lg-12 col-md-12">
                            <div class="billing-info">
                              <label>نام شرکت</label>
                              <input type="text" v-model="data.company_name">
                            </div>
                          </div>


                        </div>
                        <div class="billing-back-btn">
                          <div class="billing-back">
                            <a href="#"><i class="fa fa-arrow-up"></i> بازگشت</a>
                          </div>
                          <div class="billing-btn">
                            <button type="submit" @click="update" v-if="show">ثبت</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default single-my-account">
                  <div class="panel-heading my-account-title">
                    <h3 class="panel-title">
                      <a data-bs-toggle="collapse" href="#my-account-3">
                        اطلاعات کامل آدرس
                      </a></h3>
                  </div>
                  <div id="my-account-3" class="panel-collapse collapse" data-bs-parent="#faq">
                    <div class="panel-body">
                      <div class="myaccount-info-wrapper">
                        <div class="account-info-wrapper">
                          <h4>  جزئیات آدرس</h4>
                        </div>
                        <div class="entries-wrapper">
                          <div class="row">
                            <div class="col-md-6 d-flex align-items-center justify-content-center">
                              <div class="entries-info text-center">
                                <div class="col-lg-12 col-md-12">
                                  <div class="billing-info">
                                    <input type="number" placeholder="پلاک" v-model="data.plaque" :readonly="edit"/>
                                  </div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                  <div class="billing-info">
                                    <input type="text" maxlength="10" placeholder="کد پستی"
                                           :readonly="edit"  v-model="data.zip_code"/>
                                  </div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                  <div class="billing-info">
                                    <input type="number" placeholder="طبقه" v-model="data.floor"
                                           :readonly="edit"/>
                                  </div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                  <div class="billing-info">
                                    <textarea placeholder="آدرس کامل"
                                              :readonly="edit" v-model="data.address"></textarea>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6 d-flex align-items-center justify-content-center">
                              <div class="entries-edit-delete text-center">
                                <button class="edit" @click="editAddress">ویرایش</button>
                                <button @click="deleteAddress">حذف</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="billing-back-btn">
                          <div class="billing-back">
                            <a href="#"><i class="fa fa-arrow-up"></i> بازگشت</a>
                          </div>
                          <div class="billing-btn">
                            <button type="submit" @click="update" v-if="show">ثبت</button>
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
    </div>
    <TheFooter/>
  </div>
</template>

<script>
export default {
  components: {
    HeaderWithTopbar: () => import("@/components/TheHeader"),
    Breadcrumb: () => import("@/components/Breadcrumb"),
    TheFooter: () => import("@/components/TheFooter"),
  },
  head() {
    return {
      title: "حساب من",
    }
  },
  data()
  {
    return{
      data: {
        name:'',
        phone_number:'',
        home_number:'',
        national_id:'',
        job:'',
        company_name:'',
        email:'',
        password:'',
        address:'',
        plaque:'',
        zip_code:'',
        floor:0,
        id:''
      },
      show:true,
      edit:true
    }
  },
  created() {

  },
  async mounted() {
    if (!localStorage.getItem('116111107101110')) return window.location = '/login-register';
    // return     console.log(localStorage.getItem('117115101114'))

    await this.$axios.setToken(localStorage.getItem('116111107101110'),'Bearer');
    const user = JSON.parse(localStorage.getItem('117115101114'));

    const info = await  this.$axios.get(`show_acc/${user.id}`);
    this.data.name = info.data.name
    this.data.phone_number = info.data.phone_number
    this.data.home_number = info.data.home_number
    this.data.national_id = info.data.national_id
    this.data.company_name = info.data.company_name
    this.data.email = info.data.email
    this.data.password = info.data.password
    this.data.address = info.data.address
    this.data.plaque = info.data.plaque
    this.data.job = info.data.job
    this.data.zip_code = info.data.zip_code
    this.data.floor = info.data.floor
    this.data.id = info.data.id
  },
  methods:{
    async update()
    {
      if (this.data.phone_number === null) return this.$notify({
        title:'لطفا شماره تلفن همره را وارد کنید.',
        type:'error'})
      if (this.data.address === null) return this.$notify({
        title:'لطفا آدرس را وارد کنید.',
        type:'error'})
      if (this.data.name === null) return this.$notify({
        title:'لطفا نام و نام خانوداگی را وارد کنید.',
        type:'error'})
      this.show =false;
      this.$axios.setToken(localStorage.getItem('116111107101110'),'Bearer');
      const result = await this.$axios.put('update_acc',this.data);
      this.show =true
      if (result.status === 200)
      return this.$notify({
        title:'ویرایش با موفقیت انجام شد.',
        type:'success'
      })
    },
    editAddress()
    {
      this.edit =false
    },
    deleteAddress()
    {
      this.data.plaque = ''
      this.data.zip_code = ''
      this.data.floor = ''
      this.data.address = ''
    }
  }
}
</script>
