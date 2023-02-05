<template>

  <div class="login-form">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 col-12 ms-auto me-auto">
          <form>
            <div class="form">
              <input type="text" name="user-name" placeholder="نام کاربری" v-model="username"
                     style="background-color: #FFFFFF"
                     v-if="!reset_pass">
              <input type="password" name="user-password" placeholder="رمز عبور" v-model="password"
                     v-if="forgetPassword">
              <input type="password" name="user-password" placeholder="رمز عبور یکبار مصرف " v-model="otp"
                     style="text-align: center;font-size: 25px"    v-if="reset_pass">
              <div class="button-box">
                <div class="login-toggle-btn" v-if="forgetPassword && !reset_pass">
                  <a href="#" @click="forget_pass=false">رمزعبور خود را فراموش کرده اید؟</a>
                </div>
                <button type="submit" @click="login" v-if="forgetPassword" :disabled="loading" :loading="loading">
                  {{ loading ? 'لطفا صبر کنید...' : 'ورود' }}
                </button>
                <button type="submit" @click="sendOtp" v-if="!forget_pass && !reset_pass" :disabled="loading"
                        :loading="loading">
                  {{ loading ? 'لطفا صبر کنید...' : 'ارسال رمز یکبار مصرف' }}
                </button>
                <button type="submit" @click="resetPassword" v-if="reset_pass" :disabled="loading" :loading="loading">
                  {{ loading ? 'لطفا صبر کنید...' : 'تایید' }}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      forget_pass: true,
      loading: false,
      otp: '',
      reset_pass: false
    }
  },
  methods: {
    async login(e) {
      this.loading = true;
      e.preventDefault();
      if (this.username.trim() === '') {
        this.loading = false;
        return this.$notify({
          title: 'لطفا شماره موبایل یا ایمیل خود را وارد کنید.',
          type: 'error'
        });
      }
      if (this.password.trim() === '') {
        this.loading = false;
        return this.$notify({
          title: 'لطفا رمزعبور خود را وارد کنید.',
          type: 'error'
        });
      }

      this.digitConverter(this.username)
      const data = {
        'username': this.digitConverter(this.username),
        'password': this.digitConverter(this.password),
      }
      const log = await this.$axios.post('login', data)

      if (log.status === 200) {
        this.loading = false
        return this.$notify({
          title: log.data.message,
          type: 'error'
        });
      }
      if (log.status === 201) {
        localStorage.setItem('117115101114', JSON.stringify(log.data.user));
        localStorage.setItem('116111107101110', log.data.token);
        this.$notify({
          title: 'شما باموفقیت وارد حساب کاربری خود شدید!',
          type: 'success'
        });
        if (log.data.user.is_customer === 1) window.location = '/tutorial-videos';
        else this.$router.go(-1);

      }
      this.loading = false;
    },
    async sendOtp(e) {
      this.loading = true;
      e.preventDefault();
      if (this.username.trim() === '') {
        this.loading = false;
        return this.$notify({
          title: 'لطفا شماره موبایل یا ایمیل خود را وارد کنید.',
          type: 'error'
        });
      }
      const data = {
        'username': this.digitConverter(this.username),
      }
      const log = await this.$axios.post('forget_password', data)

      if (log.status === 200) {
        this.loading = false
        return this.$notify({
          title: log.data.message,
          type: 'error'
        });
      }
      if (log.status === 201) {
        this.reset_pass = true
        this.$notify({
          title: log.data.message,
          type: 'success'
        });
      }
      this.loading = false;
    },
    async resetPassword(e) {
      this.loading = true;
      e.preventDefault();
      if (this.otp.trim() === '') {
        this.loading = false;
        return this.$notify({
          title: 'لطفا رمزعبور یکبار مصرف را وارد کنید.',
          type: 'error'
        });
      }
      const data = {
        'otp': this.digitConverter(this.otp),
        'username': this.digitConverter(this.username),
      }
      const log = await this.$axios.post('reset_password', data)

      if (log.status === 200) {
        this.loading = false
        return this.$notify({
          title: log.data.message,
          type: 'error'
        });
      }
      if (log.status === 201) {
        localStorage.setItem('117115101114', JSON.stringify(log.data.user));
        localStorage.setItem('116111107101110', log.data.token);
        this.$notify({
          title: 'شما باموفقیت وارد حساب کاربری خود شدید، لطفا رمزعبور خود را تغییر دهید.!',
          type: 'success'
        });
        window.location = 'my-account';
      }
      this.loading = false;
    },
    digitConverter(Num){
      Num = Num.replace(/[٠-٩]/g, d => "٠١٢٣٤٥٦٧٨٩".indexOf(d)).replace(/[۰-۹]/g, d => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));
      return Num;
    }
  }
  , computed: {
    forgetPassword() {
      return this.forget_pass
    }
  }
}
</script>
