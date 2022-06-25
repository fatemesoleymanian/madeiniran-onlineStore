<template>
  <div class="register-form">
    <i class="fa fa-arrow-right text-right"
       style="float:right;margin-top:-35px;font-size:22px;cursor: pointer"
       aria-hidden="true"
       @click="$store.dispatch('setFlag', false)"></i>
    <div class="form">
            <span class="text-right pb-5 text-muted" style="float:right">
                لطفا کد تایید را وارد کنید ،
                <span class="text-right text-muted"
                      v-if="show">
                شما در حال ایجاد حساب کاربری در ساخت ایران هستید .
            </span>
            </span>
      <input v-model="data.code" type="text" name="user-name"
             maxlength="5"
             placeholder="" style="text-align: center;font-size: 25px" @keyup.enter="confirm">
      <div><span class="text-muted text-center " v-if="!end" style="float: right">{{ countDown }} ثانیه</span>
      <span v-if="end" style="float: right;cursor: pointer" class="text-muted text-center "
      @click="sendCode" >ارسال مجدد کد
      </span></div>
      <div class="button-box">
        <button type="submit" :disabled="loading" :loading="loading" @click="confirm">
          {{ loading ? 'لطفا صبر کنید...' : 'تایید' }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {
        code: '',
        key: ''
      },
      loading: false,
      countDown: 180,
      end:false
    }
  }
  ,
  methods: {
    async confirm() {
      this.loading = true;
      this.data.key = localStorage.getItem('key');
      if (this.data.code.trim() === '') {
        this.loading = false;
        return this.$notify({title: 'لطفا کد تایید را وارد کنید.'});

      }
      if (this.data.code.length !== 5) {
        this.loading = false;
        return this.$notify({title: 'لطفا کد تایید را به درستی وارد کنید.'});
      }
      const log = await this.$axios.post('confirm_code', this.data);
      if (log.status === 200) {
        this.loading = false;
        return this.$notify({
          type:'success',
          title: log.data.msg});
      }
      if (log.status === 201) {
        localStorage.setItem('117115101114',JSON.stringify(log.data.user));
        localStorage.setItem('116111107101110', log.data.token);
        localStorage.setItem('099097114100', log.data.card);
        window.location = '/'
      }
      console.log(log.status)
    },
    countDownTimer() {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1
          this.countDownTimer()
        }, 1000)
      }
      if (this.countDown === 0) this.end =true
    },
    async sendCode()
    {
      const dataa ={
        key:localStorage.getItem('key')
      };
      const log = await this.$axios.post('login_or_reg',dataa);
      if(log.data === 0)
      {this.$store.dispatch('setNewUser',true)}

      if(log.data === 1)
      {this.$store.dispatch('setNewUser',false)}
      if(log.data.email) {
        this.loading =false;
        return this.$notify({ title: 'خطا در ارسال کد.  لطفا مجددا وارد شوید.'});
      }
      localStorage.setItem('key',this.data.key);
      this.$notify({
        type:'success',
        title: 'کد تایید به شما ارسال شد.'});
      this.$store.dispatch('setFlag', true);
      this.end =false;
      this.countDown = 8;
      this.countDownTimer()


    }
  },
  computed: {
    show() {
      return this.$store.getters.getNewUser
    }
  },
  created() {
    this.countDownTimer()
  }
}
</script>
