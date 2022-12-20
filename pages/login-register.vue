<template>
  <div class="shop-page-wrapper">
    <HeaderWithTopbar containerClass="container"/>
    <Breadcrumb pageTitle="ورود | ثبت نام"/>

    <div class="login-register-area pt-100 pb-100">
      <div class="container">
        <div class="login-register-tab-list nav">
          <button @click="comA('Login')" :class="{ active: isActive === 'Login' }" >
            ورود
          </button>
          <button @click="comA('RegisterContainer')" :class="{ active: isActive === 'Register' }" >
            ثبت نام
          </button>
        </div>
        <div class="row">
          <div class="col-lg-7 col-12 ms-auto me-auto">
            <component :is="isActive" />
          </div>
        </div>
      </div>
    </div>

    <TheFooter/>
  </div>
</template>

<script>
import HeaderWithTopbar from "@/components/TheHeader";
import Login from "@/components/Login";
import Register from "@/components/Register";
import Confirmation from "@/components/Confirmation";
import RegisterContainer from "@/components/RegisterContainer";
import Breadcrumb from "@/components/Breadcrumb";
import TheFooter from "@/components/TheFooter";

export default {
  components: {
    HeaderWithTopbar,
    Login,
    Confirmation,
    RegisterContainer,
    Register,
    Breadcrumb,
    TheFooter
  },

  data() {
    return {
      isActive: "Login",

    };
  },

  methods: {
    comA(item) {
      this.isActive = item;
    }
  },
  mounted() {
    if (localStorage.getItem('116111107101110')) window.location = '/my-account';
  },

  head() {
    return {
      title: "ورود | ثبت نام"
    }
  }
};
</script>
<style scoped>
input{
}
</style>
