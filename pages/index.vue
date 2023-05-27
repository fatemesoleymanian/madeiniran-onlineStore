<template>
  <div class="home-page-wrapper">
    <newsletters-popup />
    <TheHeader />
    <HeroSlider />
    <Steps />
    <ServicePolicy />
    <ProductWrapper :isSectionTitle="true" />
    <BlogWrapper />
    <Testimonial />
    <NewsletterStyleOne />
    <TheFooter />
  </div>
</template>

<script>
import Testimonials from "../components/Steps";
import Steps from "../components/Steps";
export default {
  components: {
    Steps,
    Testimonials,
    NewslettersPopup: () => import("@/components/newslettersPopup"),
    TheHeader: () => import("@/components/TheHeader"),
    HeroSlider: () => import("@/components/hero/HeroSliderThree"),
    ServicePolicy: () => import("@/components/policy/ServicePolicy"),
    ProductWrapper: () => import("@/components/product/ProductWrapper"),
    BlogWrapper: () => import("@/components/BlogWrapper"),
    Testimonial: () => import("@/components/Testimonial"),
    TheFooter: () => import("@/components/TheFooter"),
    NewsletterStyleOne: () => import("@/components/NewsletterStyleOne"),
  },
  head() {
    return {
      // title: 'راه اندازی انواع کسب و کار تولیدی',
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "شرکت ساخت ایران با هدف راه‌اندازی کسب و کارهای تولیدی خانگی، کارگاهی و کارخانه تاسیس شده و امکانات لازم برای انواع خطوط تولید با بالاترین بازدهی را فراهم می نماید.",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://madein-iran.com",
        },
      ],
      script: [
        {
          type: "application/ld+json",
          json: {
            "@context": "https://schema.org/",
            "@type": "LocalBusiness",
            name: "شرکت ساخت ایران | راه اندازی انواع کسب و کار تولیدی",
            image: "https://madein-iran.com/img/logo/logo.png",
            "@id": "https://madein-iran.com",
            url: "https://madein-iran.com",
            telephone: "+982172418400",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "تهران - خیابان ولیعصر - روبروی پارک ملت  برج سایه - طبقه چهاردهم",
              addressLocality: "تهران",
              postalCode: "",
              addressCountry: "IR",
            },
            priceRange: "IRR",
            geo: {
              "@type": "GeoCoordinates",
              latitude: 35.776261,
              longitude: 51.413484,
            },
            sameAs: [
              "https://www.instagram.com/madein_ir.ir/",
              "https://www.aparat.com/madein_ir.ir",
            ],
          },
        },
        {
          type: "application/ld+json",
          json: {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            name: "ساخت ایران",
            url: "https://madein-iran.com",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://madein-iran.com/search/?query={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          },
        },
      ],
    };
  },
};
</script>


