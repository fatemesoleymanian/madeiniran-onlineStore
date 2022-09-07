<template>
  <div class="shop-page-wrapper">
    <HeaderWithTopbar containerClass="container"/>
    <Breadcrumb pageTitle="تماس با ما"/>
    <ContactInfo/>
    <TheFooter/>
  </div>
</template>

<script>
export default {
  components: {
    HeaderWithTopbar: () => import('@/components/TheHeader'),
    ContactInfo: () => import('@/components/ContactInfo'),
    Breadcrumb: () => import('@/components/Breadcrumb'),
    TheFooter: () => import('@/components/TheFooter')
  },
  head() {
    return {
      title: "ارتباط با ما"
    }
  }
};
</script>
