<template>

  <div>
    <!-- Google Tag Manager (noscript) -->
    <noscript>
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MBSH36F"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
    </noscript>
    <!-- End Google Tag Manager (noscript) -->

      <Nuxt />

        <client-only>
            <notifications position="bottom right" classes='vue-notification error' style="z-index:9999;"/>
        </client-only>

        <button class="scroll-top" @click="scrollToTop" :class="{ 'show': isVisible }">
            <i class="fa fa-angle-double-up"></i>
        </button>
    </div>
</template>

<script>
    export default {
        name: "default",
        data() {
            return {
                isVisible: false
            };
        },
        methods: {
            scrollToTop() {
                window.scroll({
                    top: 0,
                    behavior: "smooth",
                });
            },
        },
        async mounted() {
            window.addEventListener("scroll", () => {
                let scroll = window.scrollY;
                if (scroll >= 500) {
                    this.isVisible = true;
                }
                else {
                    this.isVisible = false;
                }
            });
          if (localStorage.getItem('116111107101110'))
          {
            const user = localStorage.getItem('117115101114');
            const userr = JSON.parse(user)
            this.$axios.setToken(localStorage.getItem('116111107101110'),'Bearer');
            const bookmark = await this.$axios.get(`/bookmark/${userr.id}`).catch(error=>{
            //   console.log(error)
              localStorage.removeItem('116111107101110');
              localStorage.removeItem('117115101114');
              localStorage.removeItem('099097114100');
              localStorage.removeItem('key');
              this.$axios.setToken(false)
              window.location = '/';
            });
            const bProd = [];
            for (let i in bookmark.data.products)
            {
              bProd.push(bookmark.data.products[i].product)
            }
            this.$store.dispatch('initWishlist',bProd)

          }
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-D7DCQ6RL0W');

        },
    };
</script>
<style>
* {
}
</style>
