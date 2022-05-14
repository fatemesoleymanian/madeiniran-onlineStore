<template>
    <div class="sidebar-style" :class="classes">
        <div class="sidebar-widget">
<!--            <h4 class="pro-sidebar-title">جستجو</h4>-->
<!--            <div class="pro-sidebar-search mb-50 mt-25">-->
<!--                <form class="pro-sidebar-search-form">-->
<!--                    <input type="text" placeholder="جستجوی محصول ..." @keyup.enter="search" v-model="str">-->
<!--                    <button @click="search">-->
<!--                        <i class="pe-7s-search" ></i>-->
<!--                    </button>-->
<!--                </form>-->
<!--            </div>-->
        </div>

        <!-- category widget  -->
        <div class="sidebar-widget">
            <h4 class="pro-sidebar-title">دسته بندی ها</h4>
            <ul class="sidebar-widget-list mt-20">
              <li class="sidebar-widget-list-left">
                <n-link :to="`?category=all`" >
                  <span class="check-mark"></span>
                  همه
                </n-link>
              </li>
                <li class="sidebar-widget-list-left" v-for="(category, index) in categoryList" :key="index">
                    <n-link :to="`?category=${category.id}`" >
                        <span class="check-mark"></span>
                        {{ category.name }}
                    </n-link>
                </li>
            </ul>
        </div>

        <!-- state widget  -->
        <div class="sidebar-widget mt-50">
            <h4 class="pro-sidebar-title">ظرفیت ها</h4>
            <ul class="sidebar-widget-list mt-20">
              <li class="sidebar-widget-list-left">
                <n-link :to="`?state=all`">
                  <span class="check-mark"></span>
              همه
                </n-link>
              </li>
                <li class="sidebar-widget-list-left" v-for="(state, index) in stateList" :key="index" >
                    <n-link :to="`?state=${state}`">
                        <span class="check-mark"></span>
                        {{ state }}
                    </n-link>
                </li>
            </ul>
        </div>

        <!-- tag widget  -->
        <div class="sidebar-widget sidebar-widget__tag mt-60">
            <h4 class="pro-sidebar-title">تگ ها</h4>
            <div class="sidebar-widget-tag mt-30">
                <ul>
                  <li >
                    <n-link :to="`?tag=all`">
                      همه
                    </n-link>
                  </li>
                    <li v-for="(tag, index) in tagList" :key="index">
                        <n-link :to="`?tag=${tag.id}`">
                            {{ tag.name }}
                        </n-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["classes"],
      data()
      {
        return{
          // str:''
        }
      },
        computed: {
            categoryList() {
                return this.$store.getters.categoryList
            },
            stateList() {
                return this.$store.getters.stateList
            },
            tagList() {
                return this.$store.getters.tagList
            }
        },

        methods: {
           // async search(e)
           //  {
           //    e.preventDefault();
           //    if(this.str)
           //    {
           //      const result = await this.$axios.get(`just_products_search/${this.str}`);
           //      this.$store.dispatch('setProduct', result.data.products);
           //    }
           //
           //  },

        }
    };
</script>
