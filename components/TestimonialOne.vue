<template>
    <div class="testimonial-area pb-95 pt-95">
        <div class="container pb-30">
          <h4 class="text-center">نظرات مشتریان</h4>
            <div class="row">
                <div class="col-lg-10 ms-auto me-auto">
                    <swiper :options="testimonialOption">
                        <div class="swiper-slide single-testimonial text-center" v-for="(testimonial, index) in testimonialData" :key="index">
                            <p>{{ testimonial.desc }}</p>
                            <div class="client-info">
                                <i class="fa fa-map-signs"></i>
                                <h5>{{ testimonial.name }}</h5>
                                <span>{{ testimonial.position }}</span>
                            </div>
                        </div>
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
                    autoplay: true,
                },
                testimonialData: []
            }
        },
      async mounted()
      {
        const testimonial = await this.$axios.get('/testimonial');
        this.testimonialData = testimonial.data
      }
    }
</script>
