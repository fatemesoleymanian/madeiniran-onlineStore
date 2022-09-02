<template>
  <div class="testimonial-area pb-95 pt-95">
    <div class="container pb-30">
      <h3 class="text-center pb-3">ویدئوهای ارسالی از طرف نمایندگان</h3>
      <div class="row">
        <div class="col-lg-10 ms-auto me-auto">
          <swiper :options="testimonialOption">
            <div class="swiper-slide single-testimonial text-center" v-for="(testimonial, index) in testimonialData"
                 :key="index">
              <div class="h_iframe-aparat_embed_frame">
                <span style="display: block;padding-top: 57%">
                </span>
                <iframe :src="testimonial.video" allowFullScreen="true"
                        webkitallowfullscreen="true" mozallowfullscreen="true" frameborder="0">
                </iframe>
              </div>
              <div class="client-info">
                <h5 v-if="testimonial.name">
                  {{ testimonial.name }}
                </h5>
                <span v-if="testimonial.position">{{ testimonial.position }}</span>
              </div>
            </div>
            <!-- Swiper Navigation Start -->
            <div class="hero-slider-nav swiper-button-prev">
              <i class="pe-7s-angle-left ml-5 pl-5"
                 style="margin-left: 30px;color:#0b4dfc;font-size: 2.5rem;font-weight: 700; transform: rotate(180deg); "></i>
            </div>
            <div class="hero-slider-nav swiper-button-next">
              <i class="pe-7s-angle-right mr-5 pr-5"
                 style="margin-right: 30px;color:#0b4dfc;font-size: 2.5rem;font-weight: 700; transform: rotate(180deg); "></i>
            </div>
            <!-- Swiper Navigation End -->
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testimonialOption: {
        loop: true,
        speed: 950,
        navigation: {
          nextEl: '.hero-slider-nav.swiper-button-next',
          prevEl: '.hero-slider-nav.swiper-button-prev',
        },
      },
      testimonialData: []
    }
  },
  async mounted() {
    const testimonial = await this.$axios.get('/testimonial');
    this.testimonialData = testimonial.data
  }
}
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
