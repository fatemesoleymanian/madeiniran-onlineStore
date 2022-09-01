<template>
  <footer class="footer-area bg-gray pt-100 pb-70">
    <div class="container">
      <div class="row px-1">
        <div class="col-lg-2 col-sm-4 ">
          <div class="copyright mb-30">
            <div class="footer-logo mt-0 pt-0 text-center">
              <n-link to="/">
                <img src="/img/logo/logo.png" alt="logo">
              </n-link>
            </div>
            <p class="pt-5">© 2022 <a href="#" target="_blank">ساخت ایران</a>.<br> All Rights Reserved</p>
            <div class="row pt-3">
              <div class="col-12">
                <div class="d-flex align-content-between justify-content-between">
                  <div class="copyright mb-30 " >
                    <div class="footer-logo" >
                      <a referrerpolicy="origin" target="_blank"
                         href="https://trustseal.enamad.ir/?id=293199&amp;Code=G6w73PAJDl7irj1t0umR">
                        <img
                            referrerpolicy="origin"
                            src="https://Trustseal.eNamad.ir/logo.aspx?id=293199&amp;Code=G6w73PAJDl7irj1t0umR" alt=""
                            style="cursor:pointer" id="G6w73PAJDl7irj1t0umR">
                      </a>
                    </div>
                  </div>
                  <div class="copyright mb-30 " >
                    <div class="footer-logo">
                      <img referrerpolicy='origin' id='rgvjjxlzjzpeesgtapfuesgt' style='cursor:pointer'
                           onclick='window.open("https://logo.samandehi.ir/Verify.aspx?id=317050&p=xlaorfthjyoeobpddshwobpd", "Popup","toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30")'
                           alt='logo-samandehi'
                           src='https://logo.samandehi.ir/logo.aspx?id=317050&p=qftinbpdyndtlymaujynlyma'/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-sm-4 ">
          <div class="footer-widget mb-30 ml-30">
            <div class="footer-title">
              <h3 style="font-weight: 700">نقشه سایت</h3>
            </div>
            <div class="footer-list">
              <ul>
                <li>
                  <n-link to="/shop">خطوط تولید</n-link>
                </li>
                <li>
                  <n-link to="/blog">وبلاگ</n-link>
                </li>
                <li>
                  <n-link to="/about">درباره ما</n-link>
                </li>
                <li>
                  <n-link to="/contact">تماس با ما</n-link>
                </li>
                <li>
                  <n-link to="/terms-conditions">قوانین و مقررات</n-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-4">
          <div class="footer-widget mb-30 ml-50">
            <div class="footer-title">
              <h3 style="font-weight: 700">راه های تماس</h3>
            </div>
            <div class="footer-list">
              <ul>
                <li>
                  <p>تلفن : <br>021-72418400 | 021-72418401 <br>021-72418402 | 021-72418403</p></li>
                <li><p>واتس اپ : <br>09190808506 | 09190808507 <br>09902121045 | 09902121046</p></li>
                <li><p>آدرس : تهران - خیابان ولیعصر - روبروی پارک ملت - برج سایه - طبقه چهاردهم.</p></li>
                <li><p>شبکه‌های اجتماعی: <a href="https://www.instagram.com/madein_ir.ir/"
                                            target="_blank">اینستاگرام</a> - <a
                    href="https://www.aparat.com/madein_ir.ir" target="_blank">آپارات</a></p></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 border rounded-3 pt-3">
          <div class="footer-widget mb-30 ml-10">
            <div class="footer-title">
              <h3><b> ثبت نام در خبرنامه</b></h3>
            </div>
            <div class="subscribe-style">
              <p>با ثبت‌نام در خبرنامه هر دو ماه یک بار با ارائه خطوط تولید جدید، شما می‌‌توانید از طریق دریافت پیامک،
                در جریان جزئیات قرار بگیرید.</p>
              <div class="subscribe-form">
                <form class="mc-form">
                  <input class="email" type="text" required placeholder="نام و نام خانوادگی:" name="email"
                         v-model="informationObj.full_name">
                  <input class="email" type="text" required placeholder="شماره تلفن همراه:" name="email"
                         v-model="informationObj.phone_number">
                  <button class="button float-start fw-bolder" style="font-size: 18px" name="subscribe"
                          @click="checkAndRegisterInNewsletter"
                          :disabled="makeButtonLoading" :loading="makeButtonLoading" id="news_letter_btn">
                    {{ !makeButtonLoading ? 'ثبت نام' : 'کمی صبر کنید...' }}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </footer>
</template>

<script>
export default {
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

};
</script>
