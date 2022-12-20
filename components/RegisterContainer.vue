<template>
  <div class="register-form">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 col-12 ms-auto me-auto">
          <div class="entrance">
            <Register v-if="!flag"/>
            <Confirmation v-if="flag"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Register from "@/components/Register";
import Confirmation from "@/components/Confirmation";
export default {
  components: {
    Confirmation,
    Register,
  },
  data() {
    return {
      data: {
        code: '',
        key: ''
      },
      loading: false,
      countDown: 180,
      end:false
    }
  }
  ,
  computed: {
    flag() {
      return this.$store.getters.getFlag
    }
  },
}
</script>
