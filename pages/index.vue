<template>
    <div class="home-page-wrapper">
      <newsletters-popup />
        <TheHeader />
        <HeroSlider />
        <ServicePolicy />
        <ProductWrapper :isSectionTitle=true />
        <BlogWrapper />
      <TestimonialOne />
      <NewsletterStyleOne />
        <TheFooter />
    </div>
</template>

<script>
    export default {
        components: {
          NewslettersPopup: () => import('@/components/newslettersPopup'),
            TheHeader: () => import('@/components/TheHeader'),
            HeroSlider: () => import('@/components/hero/HeroSliderThree'),
            ServicePolicy: () => import('@/components/policy/ServicePolicy'),
            ProductWrapper: () => import('@/components/product/ProductWrapper'),
            BlogWrapper: () => import('@/components/BlogWrapper'),
          TestimonialOne: () => import('@/components/TestimonialOne'),
          TheFooter: () => import('@/components/TheFooter'),
          NewsletterStyleOne : () => import('@/components/NewsletterStyleOne')
        },
        head() {
            return {
                title: 'فروشگاه ساخت ایران',
              meta:[
              {
                hid:'فروشگاه خط تولید',
                name:'فروشگاه ساخت ایران',
                content:'فروشگاه خط تولید ساخت ایران'
              }]
            }
        },

    };
</script>


