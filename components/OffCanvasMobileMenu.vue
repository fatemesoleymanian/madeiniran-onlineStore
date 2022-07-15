<template>
    <div class="offcanvas-mobile-menu-wrapper">
        <div class="mobile-menu-overlay" @click="$emit('toggleAsideMenu')"></div>
        <div class="mobile-menu-inner">
            <button class="close-btn" @click="$emit('toggleAsideMenu')">
                <i class="pe-7s-close"></i>
            </button>
            <div class="mobile-menu-inner-wrapper">
                <div class="offcanvas-mobile-search">
                <form class="mobile-search-inner">
                    <input type="text" placeholder="جستجو ..." v-model="srch" @keyup.enter="search" @keyup="suggestion"
                           @click="getSugges">
                    <button type="submit" @click="search"><i class="pe-7s-search"></i></button>
                </form>
                  <ul :class="active ? ' suggestions clearfix active border' : 'suggestions clearfix border' " id="srch-sugg">
                    <li v-for="(r,i) in results" :key="i" v-if="results.length" @click="srch=r" class="py-2">
                      {{r}}
                    </li>
                  </ul>
            </div>
            <div class="offcanvas-body-inner">
                <div class="menu-navigation">
                    <ResponsiveMobileMenu />
                </div>

                <div class="offcanvas-widget-area">
                    <ul>
                        <li>
                            <i class="fa fa-phone"></i>
                            <a href="callto:0123456789">02144652232</a>
                        </li>
                        <li>
                            <i class="fa fa-envelope"></i>
                            <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            ResponsiveMobileMenu: () => import('@/components/ResponsiveMobileMenu'),
        },
      data(){
          return {
            srch: '',
            allSuggestions: [],
            backupSuggestions: [],
            active: false,
            results:[]
          }
      },
      methods:{
        async search(e) {
          e.preventDefault();
          if (this.srch) {
            localStorage.setItem('srch',this.srch)
            window.location = '/compare';
          }
        },
        suggestion() {
          if (this.srch) {
            this.active = true
            this.results = this.allSuggestions.filter((name) => name.includes(this.srch))
          } else {
            this.active = false
          }
        },
        async getSugges(e) {
          e.preventDefault();
          const suggestion = await this.$axios.get('/products_search_suggestion');

          for (let i in suggestion.data.products) {
            this.allSuggestions.push(suggestion.data.products[i].name)
          }
          for (let i in suggestion.data.blogs) {
            this.allSuggestions.push(suggestion.data.blogs[i].title)
          }
          for (let i in suggestion.data.tags) {
            this.allSuggestions.push(suggestion.data.tags[i].name)
          }
          this.backupSuggestions = this.allSuggestions
        }
      }
    };
</script>
