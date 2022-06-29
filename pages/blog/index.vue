<template>
    <div class="blog-page-wrapper">
        <TheHeader containerClass="container" />
        <Breadcrumb pageTitle="وبلاگ" />

        <div class="blog-area pt-100 pb-100">
            <div class="container">
              <div id="loading" v-if="loader"></div>
              <div class="row flex-row-reverse">
                    <div class="col-lg-9">
                        <div class="ml-20">
                            <div class="row">
                                <div class="col-md-6 col-12" v-for="(blog, index) in getItems" :key="index">
                                    <BlogItemStyleTwo :blog="blog" />
                                </div>
                            </div>
                        </div>
                        <div v-if="getPaginateCount > 1">
                            <pagination class="pro-pagination-style shop-pagination mt-30"
                             v-model="currentPage" :per-page="perPage" :records="response.length"
                              @paginate="paginateClickCallback" :page-count="getPaginateCount" />
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </div>
        <TheFooter />
    </div>
</template>

<script>
    export default {
        components: {
            TheHeader: () => import("@/components/TheHeader"),
            BlogItemStyleTwo: () => import("@/components/BlogItemStyleTwo"),
            BlogSidebar: () => import("@/components/BlogSidebar"),
            TheFooter: () => import("@/components/TheFooter")
        },
        data() {
            return {
            blogs : this.$store.getters.getBlogs,
              response:[],
                currentPage: 1,
                perPage: 6,
              loader:true,
              datal:''
            }
        },
        computed: {
            getBlog(){
                return this.$store.getters.getBlogs
            },

            getItems() {
                let start = (this.currentPage - 1) * this.perPage;
                let end = this.currentPage  * this.perPage;
                return this.response.slice(start, end);
            },
            getPaginateCount() {
                return Math.ceil(this.response.length / this.perPage);
            },
        },
        methods: {
            async paginateClickCallback(page) {
              this.loader = true
                 let datal = await this.$axios.get(`blogs?page=${page}`);
                localStorage.setItem('blogs',datal.data.data)
                this.$store.dispatch('updateBlogs', datal.data.data);
                this.currentPage = Number(page);
                this.loader = false
            },
        },
      async mounted() {
          this.loader = true
        let datal = await this.$axios.get('blogs');
        localStorage.setItem('blogs',datal.data)
        this.$store.dispatch('updateBlogs', datal.data);
        this.response = datal.data;
      this.loader = false
      },
      head() {
            return {
                title: "وبلاگ "
            }
        }
    };
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:100);


#loading {
  margin: 50px auto;
  width: 80px;
  height: 80px;
  border: 3px solid rgba(0,0,0,.5);
  border-radius: 50%;
  border-top-color: #000;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
</style>
