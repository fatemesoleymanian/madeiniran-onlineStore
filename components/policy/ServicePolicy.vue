<template>
  <div class="support-area pt-100 pb-90">
    <div class="container">
      <div class="row mtn-30">
        <div class="col-md-6 col-sm-12 mt-30">
          <div class="support-wrap support-1">
            <div class="support-content">
              <h3 class="p-3 text-white">درباره شرکت ساخت ایران</h3>
              <p class="text-white">
                شرکت ساخت ایران با هدف راه‌اندازی کسب و کار از نوع تولیدی در
                ظرفیت‌های تولیدی خانگی، کارگاهی و کارخانه تاسیس شده‌است. طی 3
                سال گذشته این شرکت توانسته امکانات و شرایط لازم انواع خطوط تولید
                با حداقل سرمایه و بالاترین بازدهی را برای علاقه‌مندان فراهم کند.
              </p>
              <h6 class="d-flex float-start more-info px-2 py-1">
                <router-link to="/about/" class="text-white"
                  >اطلاعات بیشتر...</router-link
                >
              </h6>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 text-center">
          <div class="text-center">
            <div class="support-icon">
              <img
                class="animated"
                src="../../static/img/banner/about.png"
                alt="about-us"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.more-info {
  background-color: transparent !important;
  border: 1px solid #f3f3f3 !important;
  border-radius: 10px !important;
  text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}
.more-info:hover {
  background-color: white !important;
  color: #3b3965 !important;
}
.more-info:hover > a {
  color: #3b3965 !important;
}
</style>
