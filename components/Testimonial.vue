<template>
  <div
    class="testimonial-area pt-70"
    style="background-color: rgba(11, 75, 252, 0.23)"
  >
    <div class="container pb-30">
      <h3 class="text-center pb-5">ویدئوهای ارسالی نمایندگان ساخت ایران</h3>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12" v-for="(testimonial, index) in testimonialData" :key="index">
          <TestimonialItem :testimonial="testimonial" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TestimonialItem from "./TestimonialItem";
export default {
  components: {TestimonialItem},
  data() {
    return {
      testimonialOption: {
        loop: false,
        speed: 950,
        navigation: {
          nextEl: ".hero-slider-nav.swiper-button-next",
          prevEl: ".hero-slider-nav.swiper-button-prev",
        },
      },
      testimonialData: [],
    };
  },
  async mounted() {
    const testimonial = await this.$axios.get("/testimonial");
    this.testimonialData = testimonial.data;
  },
};
</script>
<style>
.h_iframe-aparat_embed_frame {
  position: relative;
}

.h_iframe-aparat_embed_frame .ratio {
  display: block;
  width: 100%;
  height: auto;
}

.h_iframe-aparat_embed_frame iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
