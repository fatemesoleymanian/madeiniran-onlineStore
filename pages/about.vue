<template>
    <div class="about-page-wrapper">
        <HeaderWithTopbar containerClass="container" />
        <Breadcrumb pageTitle="درباره ما" />
        <WelcomeMessage class="pt-100 pb-95" />
<!--      description-->
      <ServicePolicy />
      <!--      description-->
        <AboutMission />
<!--      departments-->
      <TeamMembers />
      <!--      departments-->
      <TestimonialOne />
        <TheFooter />
    </div>
</template>

<script>
    import TestimonialOne from "../components/TestimonialOne";
    import ServicePolicy from "../components/policy/ServicePolicy";
    export default {
        components: {
          ServicePolicy,
          TestimonialOne,
            HeaderWithTopbar: () => import('@/components/TheHeader'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            WelcomeMessage: () => import('@/components/WelcomeMessage'),
            AboutMission: () => import('@/components/AboutMission'),
            TeamMembers: () => import('@/components/TeamMembers'),
            BrandLogoCarousel: () => import('@/components/BrandLogoCarousel'),
            TheFooter: () => import('@/components/TheFooter'),
        },
      data()
      {
        return{
          items:[]
        }
      },
      async mounted() {
            await this.$axios.get('departments')
          .then((res)=>{
            this.items = res.data
          })
      },
      head() {
            return {
                title: "درباره ما"
            }
        },
    };
</script>
