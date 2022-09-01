<template>
  <div>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" hidden
            id="newsletterPopUpButton"></button>

    <div class="modal " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
         data-keyboard="false" data-backdrop="static">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title float-end ml-auto fw-bolder" id="exampleModalLabel" style="margin-left: auto;"> ثبت
              نام در
              خبرنامه</h5>
            <button type="button" class="btn-close float-start" style="margin-right: auto;margin-left: -10px"
                    data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <p>با ثبت‌نام در خبرنامه هر دو ماه یک بار با ارائه خطوط تولید جدید، شما می‌‌توانید از طریق دریافت پیامک،
                در جریان جزئیات قرار بگیرید.</p>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label">نام و نام خانوادگی:</label>
                <input type="text" class="form-control" id="recipient-name" v-model="informationObj.full_name">
              </div>
              <div class="mb-3">
                <label for="phonenumber" class="col-form-label">شماره تلفن همراه:</label>
                <input type="tel" class="form-control" id="phonenumber" v-model="informationObj.phone_number"/>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="checkAndRegisterInNewsletter"
                    :disabled="makeButtonLoading" :loading="makeButtonLoading" id="news_letter_btn">
              {{ !makeButtonLoading ? 'ثبت نام' : 'کمی صبر کنید...' }}
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "newslettersPopup",
  data() {
    return {
      informationObj: {
        full_name: '',
        phone_number: '',
      },
      makeButtonLoading: false
    }
  },
  methods: {
    async checkAndRegisterInNewsletter(e) {
      e.preventDefault();
      if (this.informationObj.full_name.trim() === '') return this.$notify({
        title: "خطا!",
        text: 'لطفا نام و نام خانوادگی خود را وارد کنید.',
        type: 'error'
      });
      if (this.informationObj.phone_number.trim() === '') return this.$notify({
        title: "خطا!",
        text: 'لطفا شماره تلفن همراه خود را وارد کنید.',
        type: 'error'
      });
      if (this.informationObj.phone_number.length !== 11) return this.$notify({
        title: "خطا!",
        text: "لطفا شماره تلفن همراه خود رابه درستی وارد کنید.",
        type: 'error',
      });
      this.makeButtonLoading = true;
      document.getElementById('news_letter_btn').style.opacity = 0;
      await this.$axios.post('/add_new_receiver', this.informationObj)
          .then((response) => {
            this.makeButtonLoading = false
            return this.$notify({
              title: "سپاس از مشارکت شما!",
              text: response.data.msg,
              type: 'success',
            });
          })
          .catch(() => {
            this.makeButtonLoading = false
      document.getElementById('news_letter_btn').style.opacity = 1;
            return this.$notify({
              title: "عملیات ناموفق!",
              text: "خطایی در ثبت اطلاعات رخ داد.",
              type: 'error',
            });
          });
    },
  },
  mounted() {
    document.getElementById('newsletterPopUpButton').click();
  }
}
</script>

<style scoped>

</style>
