<template>
    <div>
        <Nuxt />

        <client-only>
            <notifications position="top right" classes='vue-notification error' />
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
                isVisible: false,
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
            const [card,bookmark] = await Promise.all([
              this.$axios.get(`/card/${userr.id}`),
              this.$axios.get(`/bookmark/${userr.id}`),
            ])
                .catch(error=>{
              console.log(error)
              localStorage.removeItem('116111107101110');
              localStorage.removeItem('117115101114');
              localStorage.removeItem('099097114100');
              localStorage.removeItem('key');
              this.$axios.setToken(false)
              window.location = '/';
            });
            this.$store.dispatch('initCart',card.data.products)
            const bProd = [];
            for (let i in bookmark.data.products)
            {
              bProd.push(bookmark.data.products[i].product)
            }
            this.$store.dispatch('initWishlist',bProd)

          }
        },
    };
</script>
<style>
* {
}
</style>
