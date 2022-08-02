<template>
  <div class="description-review-area pb-90">
    <div class="container">
      <div class="description-review-wrapper">
        <div class="description-review-topbar nav">
          <a data-bs-toggle="tab" class="active" href="#details">مشخصات فنی</a>
          <a data-bs-toggle="tab" href="#representation">فرم درخواست نمایندگی</a>
          <a data-bs-toggle="tab" href="#fqs">پرسش های متداول</a>
          <a data-bs-toggle="tab" href="#comments">دیدگاه ها</a>
        </div>
        <div class="tab-content description-review-bottom">
          <div id="representation" class="tab-pane ">
            <div class="row">
              <div class="col-lg-2"></div>
              <div class="col-lg-8 col-12">
                <div class="ratting-form-wrapper pl-50">
                  <div class="ratting-form">
                    <form>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="rating-form-style mb-10">
                            <input placeholder="نام و نام خانودگی" type="text" v-model="full_name">
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="rating-form-style mb-10">
                            <input placeholder="شماره تماس" type="text" v-model="phone_number">
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="rating-form-style mb-10">
                            <input placeholder="شهر مورد درخواست " v-model="city" type="text">
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="rating-form-style mb-10">
                            <input placeholder="سن" type="text" v-model="age">
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="rating-form-style mb-10">
                            <div class="form-floating">
                              <select class="form-select form-control-sm" id="education" name="education"
                                      v-model="education">
                                <option>زیر دیپلم</option>
                                <option>دیپلم</option>
                                <option>کاردانی</option>
                                <option>کارشناسی</option>
                                <option> کارشناسی ارشد</option>
                                <option> دکتری</option>
                              </select>
                              <label for="education" class="form-label">تحصیلات</label>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="rating-form-style mb-10">
                            <div class="form-floating">
                              <select class="form-select" id="package" name="package" v-model="selected_package">
                                <option v-for="(s,i) in product.state" :key="i">{{ s.type }}</option>
                              </select>
                              <label for="package" class="form-label">پکیج مد نظر</label>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="rating-form-style mb-10">
                            <input placeholder="رشته تحصیلی" type="text" v-model="course">
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="rating-form-style mb-10">
                            <input placeholder="سوابق شغلی " type="text" v-model="work_experience">
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="rating-form-style mb-10">
                            <input placeholder="شغل فعلی" type="text" v-model="job">
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="rating-form-style mb-10">
                            <span>اگر قبلا با کارشناسان مجموعه ما تماس داشتید کارشناس مربوطه خود را انتخاب کنید :</span>
                            <div class="form-floating mb-3 mt-3">
                              <select class="form-select" id="experts" name="experts" v-model="experts">
                                <option>خانم صادقی</option>
                                <option>خانم طهرانی</option>
                                <option>خانم مقدم</option>
                              </select>
                              <label for="experts" class="form-label">کارشناس مربوطه</label>
                            </div>
                          </div>
                        </div>

                        <div class="col-md-12">
                          <div class="rating-form-style form-submit">
                            <textarea name="Your Review" placeholder="دلایل شما برای دریافت نمایندگی"
                                      v-model="reasons"></textarea>
                            <input type="submit" :value="sending ? 'در حال ثبت  ...' : 'ثبت '"
                                   class="float-start text-start"
                                   :disabled="sending" :loading="sending" @click="saveRepresent">
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-lg-2"></div>
            </div>
          </div>
          <div id="details" class="tab-pane active" v-html="product.description">
          </div>
          <div id="fqs" class="tab-pane">
            <div class="row">
              <div class="col-lg-12">
                <div class="review-wrapper py-3" v-for="(f,i) in faq" :key="i" v-if="faq.length">
                  <div class="single-review">
                    <div class="review-content  w-100">
                      <div class="review-top-wrap">
                        <div class="review-left">
                          <div class="review-name">
                            <h4>سوال :</h4>
                          </div>
                        </div>
                        <div class="review-left">
                          <a href="#form" class=" p-2" @click="ques_number=f.id">انتخاب سوال</a>
                        </div>
                      </div>
                      <div class="review-bottom">
                        <p>{{ f.question }}</p>
                      </div>
                    </div>
                  </div>
                  <div class="single-review child-review ">
                    <div class="review-content w-100">
                      <div class="review-top-wrap">
                        <div class="review-left">
                          <div class="review-name">
                            <h4>پاسخ</h4>
                          </div>
                        </div>
                      </div>
                      <div class="review-bottom">
                        <p>{{ f.answer }}</p>
                      </div>
                    </div>
                  </div>
                  <hr class="bg-dark h-25">
                </div>
              </div>
              <div class="col-lg-12 py-5">
                <div class="ratting-form-wrapper pl-50" id="form">
                  <h3 class="py-3">درصورتی که راجع به هر یک از پرسش ها و پاسخ ها برای شما سوالی بوجود آمده است ، پس از
                    مشخص کردن سوال فرم زیر را پرکنید تا کارشناسان با شما تماس بگیرند.</h3>
                  <div class="ratting-form py-3">
                    <form>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="rating-form-style mb-10">
                            <input placeholder="نام و نام خانوادگی :" type="text" v-model="full_name">
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="rating-form-style mb-10">
                            <input placeholder="شماره تماس :" type="tel" v-model="phone_number">
                          </div>
                        </div>

                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <div class="rating-form-style form-submit py-3">
                            <input type="submit" :value="saving ? 'در حال ارسال اطلاعات' : 'ارسال اطلاعات'"
                                   class="float-start" id="faq_form" :disabled="saving" @click="saveQuestion">
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="comments" class="tab-pane">
            <div class="row">
            <div class="col-lg-7">
              <div class="review-wrapper" v-for="comment in product.comment" :key="comment" v-if="product.comment.length">
                <div class="single-review" v-if="comment.status === 1">
                  <div class="review-img">
                    <img src="/img/testimonial/testi-1.png"  class="rounded" :alt="product.name">
                  </div>
                  <div class="review-content">
                    <div class="review-top-wrap">
                      <div class="review-left">
                        <div class="review-name" v-if="comment.user_id === yourId">
                          <h4>دیدگاه شما</h4>
                        </div>
                      </div>
                    </div>
                    <div class="review-bottom px-3">
                      <p>{{comment.comment}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="ratting-form-wrapper pl-50">
                <h3 class="py-3">دیدگاه خود را اضافه کنید.</h3>
                <div class="ratting-form">
                  <form>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="rating-form-style form-submit">
                          <textarea name="comment" placeholder="متن دیدگاه" v-model="yourCommentForProduct"></textarea>
                          <input type="submit" :value="commenting ? 'در حال ارسال دیدگاه' : ' ارسال دیدگاه'" class="float-start"
                                 :disabled="commenting" @click="saveComment">
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product', 'faq'],
  data() {
    return {
      saving: false,
      sending: false,
      commenting: false,
      city: '',
      age: '',
      ques_number: '',
      full_name: '',
      phone_number: '',
      education: '',
      course: '',
      work_experience: '',
      job: '',
      selected_package: '',
      reasons: '',
      experts: '',
      yourId: '',
      productComments: [],
      yourCommentForProduct: ''
    }
  },
  async created() {
    if (localStorage.getItem('117115101114')) {
      const user = localStorage.getItem('117115101114');
      const userr = JSON.parse(user);
      this.yourId = userr.id;
    }
  },
  methods: {
    async saveRepresent(e) {
      e.preventDefault()
      this.sending = true
      if (!localStorage.getItem('116111107101110')) return window.location = '/login-register';
      if (this.full_name.trim() === '') {
        this.sending = false;
        return this.$notify({
          text: ".لطفا نام و نام خانوادگی را وارد کنید",
          type: "error",
        });
      }
      if (this.phone_number.trim() === '') {
        this.sending = false;
        return this.$notify({
          text: ".لطفا شماره تماس را وارد کنید",
          type: "error",
        });
      }
      if (this.phone_number.length !== 11) {
        this.sending = false;
        return this.$notify({
          text: ".لطفا تلفن همراه را به درستی وارد کنید",
          type: "error",
        });
      }
      if (this.city.trim() === '') {
        this.sending = false;
        return this.$notify({
          text: ".لطفا شهر مورد درخواست را وارد کنید",
          type: "error",
        });
      }

      const data = {
        product: this.product.name,
        city: this.city,
        age: this.age,
        full_name: this.full_name,
        phone_number: this.phone_number,
        education: this.education,
        course: this.course,
        work_experience: this.work_experience,
        job: this.job,
        selected_package: this.selected_package,
        reasons: this.reasons,
        experts: this.experts,

      }
      this.$axios.setToken(localStorage.getItem('116111107101110'), 'Bearer');
      const comment = await this.$axios.post('product_represent', data)
          .catch(() => {
            this.sending = false
            return this.$notify({
              type: 'error',
              title: 'خطایی در ثبت اطلاعات بوجود آمد!'
            })
          })
      this.$notify({
        type: 'success',
        title: comment.data.msg
      })
      this.sending = false
    },
    async saveQuestion(e) {
      this.saving = true
      e.preventDefault();
      if (!localStorage.getItem('116111107101110')) return window.location = '/login-register';
      if (this.ques_number === '') {
        this.saving = false
        return this.$notify({
          title: "خطا",
          text: "لطفا سوال مدنظر را انتخاب کنید!",
          type: 'error',
        });
      }
      if (this.full_name.trim() === '') {
        this.saving = false
        return this.$notify({
          title: "خطا",
          text: "لطفا نام و نام خانوادگی خود را وارد کنید!",
          type: 'error',
        });
      }
      if (this.phone_number.trim() === '') {
        this.saving = false
        return this.$notify({
          title: "خطا",
          text: "لطفا شماره تماس خود را وارد کنید!",
          type: 'error',
        });
      }
      if (this.phone_number.length !== 11) {
        this.saving = false
        return this.$notify({

          title: "خطا",
          text: "لطفا شماره تماس را به درستی وارد کنید!",
          type: 'error',
        });
      }

      const data = {
        faq_id: this.ques_number,
        full_name: this.full_name,
        phone_number: this.phone_number
      }
      this.$axios.setToken(localStorage.getItem('116111107101110'), 'Bearer');
      const form = await this.$axios.post('/faq_form', data)
          .catch(() => {
            this.saving = false
            return this.$notify({
              type: 'error',
              title: 'خطایی در ارسال اطلاعات بوجود آمد!'
            })
          })
      this.$notify({title: form.data.msg});
      this.saving = false
    },
    async saveComment(e) {
      this.commenting = true;
      e.preventDefault();
      if (!localStorage.getItem('116111107101110')) return window.location = '/login-register';
      if (this.yourCommentForProduct.trim() === '') {
        this.commenting = false;
        return this.$notify({
          text: ".لطفا دیدگاه خود را درباره ی محصول وارد کنید",
          type: "error",
        });
      }

      const data = {
        user: this.yourId,
        product: this.product.id,
        comment: this.yourCommentForProduct
      }
      this.$axios.setToken(localStorage.getItem('116111107101110'), 'Bearer');
      const comment = await this.$axios.post('pcomment/save', data)
          .catch(() => {
            this.commenting = false
            return this.$notify({
              type: 'error',
              title: 'خطایی در ثبت دیدگاه بوجود آمد!'
            })
          })
      this.$notify({
        type: 'success',
        title: comment.data.msg
      })
      this.commenting = false

    }
  }

};
</script>
