<template>
    <div class="subscribe-area-3 pb-100">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-5 col-lg-7 ms-auto me-auto">
                    <div class="subscribe-style-3 text-center">
                        <h2 style="font-size: 26pt">فرم تقاضای خط تولید </h2>
                        <p class="pb-5">چنانچه به دنبال راه اندازه خط تولید خود هستید فرم زیر را پر کنید.</p>
                      <div class="description-review-area py-4">
                        <div class="container">
                          <div class="description-review-wrapper">
                            <div class="description-review-topbar nav">
                              <a data-bs-toggle="tab" href="#new-ideas" style="font-size: 14pt">ایده شخصی دارم</a>
                              <a data-bs-toggle="tab" href="#empty-ideas" style="font-size: 14pt">ایده ای ندارم</a>
                            </div>
                            <div class="tab-content description-review-bottom">
                              <div id="new-ideas" class="tab-pane ">
                                <div class="row">
                                  <div class="col-12">
                                    <div class="ratting-form-wrapper pl-50" id="form-new">
                                      <div class="ratting-form py-3">
                                        <form>
                                          <div class="row  w-100">
                                            <div class="col-md-12">
                                              <div class="rating-form-style mb-10">
                                                <input placeholder="نام و نام خانوادگی :" type="text" v-model="new_ideas.full_name">
                                              </div>
                                            </div>
                                            <div class="col-md-12 ">
                                              <div class="rating-form-style mb-10">
                                                <input placeholder="شماره تماس :" type="tel" v-model="new_ideas.phone_number">
                                              </div>
                                            </div>
                                            <div class="col-md-12 ">
                                              <div class="rating-form-style form-submit">
                                                <textarea v-model="new_ideas.description"
                                                          name="Your Review" placeholder="ایده مدنظر یا درخواست ایده تولیدی:"></textarea>
                                              </div>
                                            </div>

                                          </div>
                                          <div class="row">
                                            <div class="col-md-12 text-center">
                                              <div class="rating-form-style form-submit py-3">
                                                <input type="submit" :value="new_ideas.saving ? 'در حال ارسال اطلاعات' : 'ارسال اطلاعات'"
                                                       class="float-start" id="faq_form" :disabled="new_ideas.saving"
                                                       @click="saveWIthIdeas">
                                              </div>
                                            </div>
                                          </div>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div id="empty-ideas" class="tab-pane">
                                <div class="row">
                                  <div class="col-12">
                                    <div class="ratting-form-wrapper pl-50" id="form-empty">
                                      <div class="ratting-form py-3">
                                        <form>
                                          <div class="row  w-100">
                                            <div class="col-md-12">
                                              <div class="rating-form-style mb-10">
                                                <input placeholder="نام و نام خانوادگی :" type="text" v-model="empty_ideas.full_name">
                                              </div>
                                            </div>
                                            <div class="col-md-12 ">
                                              <div class="rating-form-style mb-10">
                                                <input placeholder="شماره تماس :" type="tel" v-model="empty_ideas.phone_number">
                                              </div>
                                            </div>

                                          </div>
                                          <div class="row">
                                            <div class="col-md-12 text-center">
                                              <div class="rating-form-style form-submit py-3">
                                                <input type="submit" :value="empty_ideas.saving ? 'در حال ارسال اطلاعات' : 'ارسال اطلاعات'"
                                                       class="float-start"  :disabled="empty_ideas.saving"
                                                       @click="saveEmptyIdeas">
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data()
      {
        return{
          new_ideas:{
            saving:false,
            full_name:'',
            phone_number:'',
            description:''
      },
          empty_ideas:{
            saving:false,
            full_name:'',
            phone_number:'',
          },
        }
      },
      methods:{
        async saveWIthIdeas(e)
        {
          e.preventDefault()
          if (this.new_ideas.full_name.trim() === '') return this.$notify({
            title: "خطا!",
            text: "لطفا نام و نام خانوادگی خود را وارد کنید.",
            type: 'error',
          });
          if (this.new_ideas.phone_number === '') return this.$notify({
            title: "خطا!",
            text: "لطفا شماره تماس خود را وارد کنید.",
            type: 'error',
          });
          if (this.new_ideas.description.trim() === '') return this.$notify({
            title: "خطا!",
            text: "لطفا ایده مدنظر خود را وارد کنید.",
            type: 'error',
          });
          if (this.new_ideas.phone_number.length !== 11) return this.$notify({
            title: "خطا!",
            text: "لطفا شماره تماس خود رابه درستی وارد کنید.",
            type: 'error',
          });

          this.new_ideas.saving = true
          const data = {
            full_name : this.new_ideas.full_name,
            phone_number : this.new_ideas.phone_number,
            description : this.new_ideas.description,
          }
          const idea = await this.$axios.post('/job_production_ideas', data)
          .catch(()=>{
            this.new_ideas.saving = true
            return this.$notify({
              title: "عملیات ناموفق!",
              text: "خطایی در ثبت اطلاعات رخ داد.",
              type: 'error',
            });
          });
          this.new_ideas.saving = false
          return this.$notify({
            title: "عملیات موفق!",
            text: "اطلاعات با موفقیت ثبت گردید، منتظر تماس ما باشید.",
            type: 'success',
          });
        },
        async saveEmptyIdeas(e)
        {
          e.preventDefault()
          if (this.empty_ideas.full_name.trim() === '') return this.$notify({
            title: "خطا!",
            text: "لطفا نام و نام خانوادگی خود را وارد کنید.",
            type: 'error',
          });
          if (this.empty_ideas.phone_number === '') return this.$notify({
            title: "خطا!",
            text: "لطفا شماره تماس خود را وارد کنید.",
            type: 'error',
          });
          if (this.empty_ideas.phone_number.length !== 11) return this.$notify({
            title: "خطا!",
            text: "لطفا شماره تماس خود رابه درستی وارد کنید.",
            type: 'error',
          });

          this.empty_ideas.saving = true
          const data = {
            full_name : this.empty_ideas.full_name,
            phone_number : this.empty_ideas.phone_number,
          }
          const empty = await this.$axios.post('/job_production_empty', data)
              .catch(()=>{
                this.empty_ideas.saving = true
                return this.$notify({
                  title: "عملیات ناموفق!",
                  text: "خطایی در ثبت اطلاعات رخ داد.",
                  type: 'error',
                });
              });
          this.empty_ideas.saving = false
          return this.$notify({
            title: "عملیات موفق!",
            text: "اطلاعات با موفقیت ثبت گردید، منتظر تماس ما باشید.",
            type: 'success',
          });
        }
      }

    };
</script>
