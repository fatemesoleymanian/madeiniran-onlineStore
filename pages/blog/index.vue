<template>
    <div class="blog-page-wrapper">
        <TheHeader containerClass="container" />
        <Breadcrumb pageTitle="وبلاگ" />

        <div class="blog-area pt-100 pb-100">
            <div class="container">
                <div class="row flex-row-reverse">
                    <div class="col-lg-9">
                        <div class="ml-20">
                            <div class="row">
                                <div class="col-md-6 col-12" v-for="(blog, index) in getBlog" :key="index">
                                    <BlogItemStyleTwo :blog="blog" />
                                </div>
                            </div>
                        </div>
                        <div v-if="getPaginateCount > 1">
                            <pagination class="pro-pagination-style shop-pagination mt-30"
                             v-model="currentPage" :per-page="perPage" :records="total"
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
              response:'',
                currentPage: 1,
                perPage: 6,
                total:1
            }
        },
        computed: {
            getBlog(){
                return this.$store.getters.getBlogs
            },
            
            getItems() {
                let start = (datal.data.current_page - 1) * datal.data.per_page;
                let end = datal.data.current_page  * datal.data.per_page;
                return datal.data.data.slice(start, end);
            },
            getPaginateCount() {
                return Math.ceil(this.total / this.perPage);
            },
        },
        methods: {
            async paginateClickCallback(page) {
                 let datal = await this.$axios.get(`blogs?page=${page}`);
                localStorage.setItem('blogs',datal.data.data)
                this.$store.dispatch('updateBlogs', datal.data.data);
                this.currentPage = Number(page);
            },
        },
      async mounted() {
        let datal = await this.$axios.get('blogs');
        localStorage.setItem('blogs',datal.data.data)
        this.$store.dispatch('updateBlogs', datal.data.data);
        this.response = datal.data;
        this.currentPage = this.response.current_page
        this.perPage = this.response.per_page;
        this.total = this.response.total
    
      },
      head() {
            return {
                title: "وبلاگ "
            }
        }
    };
</script>
