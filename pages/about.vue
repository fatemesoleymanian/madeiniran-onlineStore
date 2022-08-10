<template>
    <div class="about-page-wrapper">
        <HeaderWithTopbar containerClass="container" />
        <Breadcrumb pageTitle="درباره ما" />
<!--        <WelcomeMessage class="pt-100 pb-95" />-->
<!--      description-->
      <div class="support-area pt-100 pb-90">
        <div class="container">
          <div class="row mtn-30 ">
            <div class="col-6 mt-30">
              <div class="support-wrap support-1">
                <div class="support-content">
                  <h3 class="p-3">درباره شرکت ساخت ایران</h3>
                  <p style="font-size: 1.1em;">
                    شرکت ساخت ایران با هدف راه‌اندازی کسب و کار از نوع تولیدی در ظرفیت‌های تولیدی خانگی، کارگاهی و کارخانه تاسیس شده‌است. طی 3 سال گذشته این شرکت توانسته امکانات و شرایط لازم انواع خطوط تولید با حداقل سرمایه و بالاترین بازدهی را برای علاقه‌مندان فراهم کند.
                    <br>
                    شروع رسمی فعالیت ساخت ایران در دو بخش خواهد بود:
                    <b>اول</b> اگر شما ایده‌ای دارید و برای اجرای آن نیاز به شرکت و تیم ساخت ایران دارید. <b>دوم</b> ایده‌هایی که در حال حاضر برای سال جاری توسط شرکت ساخت ایران تدوین و برنامه‌ریزی شده‌است، که از ایده‌ی اولیه تا ساخت ماشین‌آلات و سپس تامین مواد اولیه و در نهایت بازاریابی و برندینگ کالاهای نهایی، همراه شما خواهند بود.
                    <br>
                    شما نیز اگر ایده‌ی تولیدی در ذهنتان دارید و برای اجرای آن نیاز به تیم متخصص دارید یا اگر ایده‌ای ندارید ولی تمایل به راه‌اندازی واحد تولیدی خودتان را دارید فرم پایین این صفحه را پر کنید.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-6 text-center ">
              <div class=" text-center">
                <div class="support-icon">
                  <img class="animated"
                       src="../static/img/banner/about.png" alt="about-us">
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <!--      description-->
        <AboutMission />
<!--      departments-->
<!--      <TeamMembers />-->
      <!--      departments-->
      <TestimonialOne />
      <NewsletterStyleOne />
      <TheFooter />
    </div>
</template>

<script>
import NewsletterStyleOne from "../components/NewsletterStyleOne";
    import TestimonialOne from "../components/TestimonialOne";
    import ServicePolicy from "../components/policy/ServicePolicy";
    export default {
        components: {
          NewsletterStyleOne,
          ServicePolicy,
          TestimonialOne,
            HeaderWithTopbar: () => import('@/components/TheHeader'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            // WelcomeMessage: () => import('@/components/WelcomeMessage'),
            AboutMission: () => import('@/components/AboutMission'),
            // TeamMembers: () => import('@/components/TeamMembers'),
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
