<template>
  <div class="form">
    <span class="text-right pb-5 text-muted" style="float:right">
      <b class="text-body">لطفا شماره موبایل یا ایمیل خود را وارد کنید .</b>( تلفن همراه با صفر وارد شود)
    </span>
    <input type="text" name="user-name" placeholder="" v-model="data.key" @keyup.enter="login">
    <div class="button-box">
      <button type="submit" @click="login" :disabled="loading" :loading="loading">
        {{ loading ? 'در حال پردازش اطلاعات' : 'ورود' }}
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {
        key: ''
      },
      loading: false,
    }
  },
  methods: {
    async login(e) {
      this.loading = true;
      e.preventDefault();
      if (this.data.key.trim() === '') {
        this.loading = false;
        return this.$notify({
          title: 'لطفا شماره موبایل یا ایمیل خود را وارد کنید.',
          type: 'error'
        });
      }
      this.data.key = this.digitConverter(this.data.key)

      const log = await this.$axios.post('register', this.data);

      if (log.data.email) {
        this.loading = false;

        return this.$notify({
          title: 'خطا در ارسال کد.  لطفا مجددا وارد شوید.',
          type: 'error'
        });

      }
      if (log.status === 200)
      {
        this.loading = false;
        return this.$notify({
          title: log.data.message,
          type: 'error'
        });
      }
      if (log.status === 201)
      {
        localStorage.setItem('key', this.data.key);
        this.$notify({
          title: log.data.message,
          type: 'success'
        });
        this.loading = false;
        this.$store.dispatch('setFlag', false);
      }


    },
    digitConverter(Num){
      Num = Num.replace(/[٠-٩]/g, d => "٠١٢٣٤٥٦٧٨٩".indexOf(d)).replace(/[۰-۹]/g, d => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));
      return Num;
    }
  }
}
</script>
