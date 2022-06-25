<template>
    <div class="about-page-wrapper">
        <HeaderWithTopbar containerClass="container" />
        <Breadcrumb pageTitle="درباره ما" />
        <WelcomeMessage class="pt-100 pb-95" />
<!--      description-->
      <div class="support-area pb-90">
        <div class="container">
          <div class="row mtn-30 ">
            <div class="col-6 mt-30">
              <div class="support-wrap support-1">
                <div class="support-content">
                  <h5>TITLE</h5>
                  <p><router-link to="/about">LINK</router-link></p>
                </div>
              </div>
            </div>
            <div class="col-6 text-center ">
              <div class="support-wrap support-1">
                <div class="support-icon">
                  <img class="animated w-100" width="500" height="100"
                       src="../static/img/slider/cosmetics-slider-2.jpg" alt="about-us">
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <!--      description-->
        <AboutMission />
<!--      departments-->
      <h2 class="text-center p-5">دپارتمان ها</h2>
<!--      departments-->
      <TestimonialOne />
        <TeamMembers />
        <TheFooter />
    </div>
</template>

<script>
    import TestimonialOne from "../components/TestimonialOne";
    export default {
        components: {
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
