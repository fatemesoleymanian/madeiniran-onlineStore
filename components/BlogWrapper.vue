<template>
    <div class="blog-area pb-55">
        <div class="container">
            <SectionTitleWithSubTitle title="مجله ساخت ایران" classes="section-title mb-55" />
            <div class="row">
                <div class="col-lg-4 col-sm-6" v-for="(blog, index) in blogs" :key="index">
                    <BlogItem :blog="blog" />
                </div>
              <div class="view-more text-center mt-20 toggle-btn2">
                <n-link to="/blog" class="loadMore2">مشاهده همه</n-link>
              </div>

            </div>
        </div>
    </div>
</template>

<script>

    export default {
        components: {
            BlogItem: () => import('@/components/BlogItem')
        },

        data() {
            return {
              blogs:[]
            }
        },
      async mounted() {
        const blog = await this.$axios.get('/blogs-random')
        this.blogs = blog.data
      }
    };
</script>
