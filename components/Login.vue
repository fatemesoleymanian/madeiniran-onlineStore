<template>

    <div class="login-form">
        <div class="form">
            <span class="text-right pb-5 text-muted" style="float:right">لطفا شماره موبایل یا ایمیل خود را وارد کنید.</span>
            <input type="text" name="user-name" placeholder="" v-model="data.key" @keyup.enter="login">
            <div class="button-box">
                <button type="submit" @click="login" :disabled="loading" :loading="loading">
                    {{ loading ? 'در حال پردازش اطلاعات' : 'ورود'}}</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data()
    {
        return{
            data:{
                key:''
            },
            loading:false,
        }
    },
    methods:{
    async login(e)
        {
            this.loading = true;
            e.preventDefault();
            if(this.data.key.trim() === '' )
            {
                this.loading = false;
                 return this.$notify({
                   title: 'لطفا شماره موبایل یا ایمیل خود را وارد کنید.',
                   type:'error'});
            }

            const log = await this.$axios.post('login_or_reg',this.data);
             if(log.data === 0)
             {this.$store.dispatch('setNewUser',true)}

              if(log.data === 1)
             {this.$store.dispatch('setNewUser',false)}
            if(log.data.email) {
                this.loading =false;

                return this.$notify({
                  title: 'خطا در ارسال کد.  لطفا مجددا وارد شوید.',
                  type:'error'});

            }
            localStorage.setItem('key',this.data.key);
            this.$notify({
              title: 'کد تایید به شما ارسال شد.',
              type:'success'});
            this.loading =false;
             this.$store.dispatch('setFlag', true);

        }
    }
}
</script>
