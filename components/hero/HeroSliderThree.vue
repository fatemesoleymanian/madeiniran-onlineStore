<template>
    <div class="slider-area nav-style-1">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(slider, index) in sliderData" :key="index"
                          class="single-slider-2 slider-height-2 d-flex align-items-center bg-img"
             :style="{ backgroundImage:`url(https://api.madein-iran.com/public${slider.image})` }">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7 col-md-8 ms-auto">
                            <div class="slider-content-3 slider-animation-1 text-center">
                                <h3 v-show="slider.sub_title">{{ slider.sub_title  }}</h3>
                                <h1 v-show="slider.title">{{ slider.title }}</h1>
                                <h4 v-show="slider.text">{{ slider.text }}</h4>
                                <div v-show="slider.link" class="slider-btn btn-hover">
                                    <a v-show="slider.link" :href="slider.link">{{slider.button_content}}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>

            <!-- Swiper Navigation Start -->
            <div class="hero-slider-nav swiper-button-prev">
                <i class="pe-7s-angle-left"></i>
            </div>
            <div class="hero-slider-nav swiper-button-next">
                <i class="pe-7s-angle-right"></i>
            </div>
            <!-- Swiper Navigation End -->
        </swiper>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                swiperOption: {
                    loop: true,
                    speed: 750,
                    slidesPerView: 1,
                    spaceBetween: 10,
                    autoplay: {
                        delay: 6000
                    },
                    effect: "fade",
                    fadeEffect: {
                        crossFade: true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                },

                sliderData: []
            }
        },
        async mounted()
       {
            const slider = await this.$axios.get('/slider_home')
            this.sliderData = slider.data
       }
    };
</script>
