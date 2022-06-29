<template>
  <div>
    <header class="header-area header-padding-1 sticky-bar header-res-padding clearfix"
            :class="{'is-sticky': isSticky}">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-2 col-md-6 col-4">
            <div class="logo">
              <n-link to="/">
                <img src="/img/logo/logo.png" alt="logo" height="50px">
              </n-link>
            </div>
          </div>
          <div class="col-lg-8 d-none d-lg-block">
            <div class="main-menu">
              <nav>
                <Navigation/>
              </nav>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 col-8">
            <div class="header-right-wrap">
              <div class="same-style header-search d-none d-lg-block">
                <button class="search-active" @click="isOpenSearch = !isOpenSearch">
                  <i class="pe-7s-search"></i>
                </button>
                <div class="search-content" :class="{ active:isOpenSearch }">
                  <form>
                    <div>
                    <input type="text" placeholder="جستجو ..." v-model="srch"
                           @keyup.enter="search"
                           @keyup="suggestion"
                           @click="getSugges"/>
                      <button class="button-search" @click="search">
                        <i class="pe-7s-search"></i></button>
                    </div>

                  </form>
                  <ul :class="active ? ' suggestions clearfix active' : 'suggestions clearfix' " id="srch-sugg">
                    <li v-for="(r,i) in results" :key="i" v-if="results.length" @click="srch=r" class="py-2">
                      {{r}}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="same-style account-setting">
                <button class="account-setting-active" @click="isOpenAccountSettings = !isOpenAccountSettings"><i
                    class="pe-7s-user-female"></i></button>
                <div class="account-dropdown" :class="{ active:isOpenAccountSettings }">
                  <ul>
                    <li v-if="!auth">
                      <n-link to="/login-register">ورود | ثبت نام</n-link>
                    </li>
                    <li v-if="auth">
                      <n-link to="/my-account">پروفایل من</n-link>
                    </li>
                    <li v-if="auth">
                      <n-link to="/orders">سفارش های من</n-link>
                    </li>
                    <li v-if="auth">
                      <n-link to="/comments">دیدگاه های من</n-link>
                    </li>
                    <li v-if="auth"><a href="#" @click="logout">
                      خروج از حساب </a></li>
                  </ul>
                </div>
              </div>

              <div v-if="auth"
                   class="same-style header-wishlist  d-none d-lg-block">
                <n-link to="/wishlist"><i class="pe-7s-like"></i></n-link>
                <span class="count-style">{{ wishlistItemCount }}</span>
              </div>
              <div class="same-style cart-wrap" v-if="auth">
                <button class="icon-cart" @click="openCart = !openCart">
                  <i class="pe-7s-shopbag"></i>
                  <span class="count-style">{{ cartItemCount }}</span>
                </button>
                <MiniCart :miniCart="{ visible:openCart }" @minicartClose="openCart = !openCart"/>
              </div>
              <div class="same-style mobile-menu-toggler d-block d-lg-none">
                <button class="mobile-aside-button" @click="navOpen = !navOpen">
                  <i class="pe-7s-menu"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @toggleAsideMenu="navOpen = !navOpen" v-if="navOpen"/>
  </div>
</template>

<script>
export default {
  components: {
    Navigation: () => import("@/components/Navigation"),
    MiniCart: () => import("@/components/MiniCart"),
  },

  computed: {
    cartItemCount() {
      return this.$store.getters.cartItemCount
    },
    wishlistItemCount() {
      return this.$store.getters.wishlistItemCount
    },
    compareItemCount() {
      return this.$store.getters.compareItemCount
    }
  },

  data() {
    return {
      isSticky: false,
      isOpenSearch: false,
      isOpenAccountSettings: false,
      openCart: false,
      navOpen: false,
      auth: false,
      srch: '',
      allSuggestions: [],
      backupSuggestions: [],
      active: false,
      results: []

    }
  },

  mounted() {
    window.addEventListener('scroll', () => {
      let scroll = window.scrollY
      if (scroll >= 200) {
        this.isSticky = true
      } else {
        this.isSticky = false
      }
    });
    if (localStorage.getItem('116111107101110')) {
      this.auth = true
    }
    console.log('header')
  },
  methods: {
    async logout() {
      this.$axios.setToken(localStorage.getItem('116111107101110'), 'Bearer')
      const logout = await this.$axios.post('logout')
      localStorage.removeItem('116111107101110');
      localStorage.removeItem('117115101114');
      localStorage.removeItem('099097114100');
      localStorage.removeItem('key');
      this.$axios.setToken(false)
      window.location = '/'


    },
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
