<template>
    <div class="description-review-area pb-90">
        <div class="container">
            <div class="description-review-wrapper">
                <div class="description-review-topbar nav">
                    <a data-bs-toggle="tab" class="active" href="#details">مشخصات فنی</a>
                      <a data-bs-toggle="tab" href="#comments">دیدگاه ها</a>
                      <a data-bs-toggle="tab" href="#fqs">پرسش های متداول</a>
                </div>
                <div class="tab-content description-review-bottom">
                    <div id="comments" class="tab-pane ">
                      <div class="row">
                        <div class="col-lg-7">
                          <div class="review-wrapper" v-for="(c,i) in product.comment" :key="i" v-if="product.comment.length">
                            <div class="single-review" v-if="c.status === 1 ">
                              <div class="review-img px-2">
                                <img style="border-radius:50%;float: left; "
                                     width="30" height="30" src="/img/testimonial/testi-1.png"
                                     :alt="c.user_id">
                              </div>
                              <div class="review-content" v-if="c.status === 1 ">
                                <div class="review-top-wrap">
                                  <div class="review-left">
                                    <div class="review-name" v-if="c.user_id === you">
                                      <h4>دیدگاه شما</h4>
                                    </div>
                                  </div>
                                </div>
                                <div class="review-bottom">
                                  <p v-if="c.status === 1 ">{{c.comment}}</p>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                        <div class="col-lg-5">
                          <div class="ratting-form-wrapper pl-50">
                            <h3 class="py-3">افزودن دیدگاه</h3>
                            <div class="ratting-form">
                              <form>
                                <div class="row">
                                  <div class="col-md-12">
                                    <div class="rating-form-style form-submit">
                                      <textarea v-model="comment"  name="Your Review" placeholder="دیدگاه شما درباره ی محصول"></textarea>
                                      <input type="submit" value="ثبت دیدگاه" @click="saveComment">
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
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
                                                    <a href="#form" class=" p-2" @click="ques_number=f.id" >انتخاب سوال</a>
                                                </div>
                                            </div>
                                            <div class="review-bottom">
                                                <p>{{f.question}}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="single-review child-review ">
                                        <div class="review-content w-100">
                                            <div class="review-top-wrap">
                                                <div class="review-left">
                                                  <div class="review-name" >
                                                    <h4>پاسخ</h4>
                                                  </div>
                                                </div>
                                            </div>
                                            <div class="review-bottom">
                                                <p>{{f.answer}}</p>
                                            </div>
                                        </div>
                                    </div>
                                  <hr class="bg-dark h-25">
                                </div>
                            </div>
                            <div class="col-lg-12 py-5">
                                <div class="ratting-form-wrapper pl-50" id="form">
                                    <h3 class="py-3">درصورتی که راجع به هر یک از پرسش ها و پاسخ ها برای شما سوالی بوجود آمده است ،  پس از مشخص کردن سوال فرم زیر را پرکنید تا کارشناسان با شما تماس بگیرند.</h3>
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
                                                       class="float-start" id="faq_form" :disabled="saving" @click="saveForm">
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
      props:['product','faq'],
      data(){
        return{
          saving:false,
          comment:'',
          you:'',
          ques_number:'',
          full_name:'',
          phone_number:''
        }
      },
      async mounted() {
        const user = localStorage.getItem('117115101114');
        const userr = JSON.parse(user);
        this.you = userr.id
        console.log(this.faq)
      },
      methods:{
        async saveComment(e)
        {
          e.preventDefault()
          if (!localStorage.getItem('116111107101110')) return  window.location = '/login-register';

          if (this.comment.trim() === '') return  this.$notify({title: 'لطفا دیدگاه خود را وارد کنید!'})
          const data = {
            product:this.product.id,
            user:this.you,
            comment:this.comment,
          }
          this.$axios.setToken(localStorage.getItem('116111107101110'), 'Bearer');
          const comment = await this.$axios.post('pcomment/save',data)
          .catch(()=>{
            return this.$notify({title: 'خطایی در ثبت دیدگاه بوجود آمد!'})
          })
          this.$notify({title: comment.data.msg})
        },
        async saveForm(e)
        {
          this.saving=true
          e.preventDefault();
          if (!localStorage.getItem('116111107101110')) return  window.location = '/login-register';
          if (this.ques_number === '') {
            this.saving=false
            return this.$notify({
              title: "خطا",
              text: "لطفا سوال مدنظر را انتخاب کنید!",
              type: 'error',
            });
          }
          if (this.full_name.trim() === '') {
            this.saving=false
            return this.$notify({
            title: "خطا",
            text: "لطفا نام و نام خانوادگی خود را وارد کنید!",
            type: 'error',
          });}
          if (this.phone_number.trim() === '') {
            this.saving=false
            return this.$notify({
            title: "خطا",
            text: "لطفا شماره تماس خود را وارد کنید!",
            type: 'error',
          });}
          if (this.phone_number.length !== 11) {
            this.saving=false
            return this.$notify({

            title: "خطا",
            text: "لطفا شماره تماس را به درستی وارد کنید!",
            type: 'error',
          });}

          const data = {
            faq_id:this.ques_number,
            full_name:this.full_name,
            phone_number:this.phone_number
          }
          this.$axios.setToken(localStorage.getItem('116111107101110'), 'Bearer');
          const form = await this.$axios.post('/faq_form',data)
          .catch(()=>{
            this.saving=false
            return this.$notify({title: 'خطایی در ارسال اطلاعات بوجود آمد!'})
          })
          this.$notify({title: form.data.msg});
          this.saving=false
        }
      }

    };
</script>
