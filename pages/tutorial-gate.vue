<template>
  <div class="shop-page-wrapper">
    <HeaderWithTopbar containerClass="container"/>
    <Breadcrumb pageTitle="ورود به بخش آموزشی"/>

    <div class="login-register-area pt-100 pb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 col-12 ms-auto me-auto">
            <div class="entrance">
              <div class="login-form">
                <div class="form">
                  <span class="text-right pb-5 text-muted" style="float:right">برای مشاهده ویدئو های آموزشی لطفا نام کاربری و رمز عبور خود را وارد  کنید.</span>
                  <input type="text" name="user-name" placeholder="نام کاربری (تلفن همراه با صفر اول)" v-model="data.user_name" >
                  <input type="text" name="password" placeholder="رمزعبور" v-model="data.password" @keyup.enter="login">
                  <div class="button-box">
                    <button type="submit" @click="login" :disabled="loading" :loading="loading">
                      {{ loading ? 'در حال پردازش اطلاعات' : 'ورود'}}</button>
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
import HeaderWithTopbar from "@/components/TheHeader";
import Breadcrumb from "@/components/Breadcrumb";
import TheFooter from "@/components/TheFooter";

export default {
  name: "tutorial-gate",
  components: {Breadcrumb, HeaderWithTopbar,TheFooter},

  data() {
    return {
      data:{
        user_name:'',
        password:'',
        id:''
      },
      loading:false,
    };
  },

  methods: {
    async login(e)
    {
      this.loading = true;
      e.preventDefault();
      if(this.data.user_name.trim() === '' )
      {
        this.loading = false;
        return this.$notify({
          title: 'لطفا نام کاربری خود را وارد کنید.',
          type:'error'});
      }
      if(this.data.password.trim() === '' )
      {
        this.loading = false;
        return this.$notify({
          title: 'لطفا رمزعبور خود را وارد کنید.',
          type:'error'});
      }

      const user = JSON.parse(localStorage.getItem('117115101114'));
      this.data.id =user.id;
      this.$axios.setToken(localStorage.getItem('116111107101110'), 'Bearer');
      await this.$axios.post('/customers/login',this.data)
      .then(()=>{
      user.is_customer = 1;
        localStorage.removeItem('117115101114');
        localStorage.setItem('117115101114',JSON.stringify(user));
      window.location = "tutorial-videos";
      })
      .catch(()=>{
        this.$notify({
          text: 'شما اجازه دسترسی به ویدئو های آموزشی را ندارید !',
          type: 'error'
        });
      });
      this.loading = false

    }
  },
  mounted() {
    if (!localStorage.getItem('116111107101110')) window.location = '/login-register';

    const user = JSON.parse(localStorage.getItem('117115101114'));

    if (user.is_customer) return window.location = '/tutorial-videos';
  },
  head() {
    return {
      title: "ورود به بخش آموزشی"
    }
  }
}
</script>

<style scoped>

</style>
