<template>
    <div class="home-page-wrapper">
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
    import NewsletterStyleOne from "../components/NewsletterStyleOne";
    export default {
        components: {
          NewsletterStyleOne,
            TheHeader: () => import('@/components/TheHeader'),
            HeroSlider: () => import('@/components/hero/HeroSliderThree'),
            ServicePolicy: () => import('@/components/policy/ServicePolicy'),
            ProductWrapper: () => import('@/components/product/ProductWrapper'),
            BlogWrapper: () => import('@/components/BlogWrapper'),
          TestimonialOne: () => import('@/components/TestimonialOne'),
          TheFooter: () => import('@/components/TheFooter'),
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


