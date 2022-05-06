<template>
    <div class="product-details-page-wrapper">
        <TheHeader containerClass="container" />
        <Breadcrumb :pageTitle="blogs.title" />

        <div class="Blog-details-inner pt-100 pb-100">
            <div class="container">
                <div class="row flex-row-reverse">
                    <div class="col-lg-12">
                        <div class="blog-details-wrapper ml-20">
                            <div class="blog-details-top">
                                <div class="blog-details-img">
                                    <img :src="blogs.featuredImage" :alt="blogs.title">
                                </div>
                                <div class="blog-details-content">
                                    <div class="blog-meta-2">
                                        <ul>
                                            <li>{{ blogs.updated_at }}</li>

                                        </ul>
                                    </div>
                                    <h3>{{ blogs.title }}</h3>
                                    <div v-html="blogs.post"></div>
                                </div>
                            </div>
                            <div class="tag-share">
                                <div class="dec-tag">
                                    <ul v-for="(tag,i) in blogs.tag" :key="i" v-if="blogs.tag.length">
                                        <li>{{ tag.name }}</li>

                                    </ul>
                                </div>
                                <div class="blog-share">

                                    <div class="share-social">
                                        <ul>
                                            <li @click="copyToClipboard">
                                                 <a class="twitter" >
                                                     <i class="fa fa-share" aria-hidden="true"></i>
                                                 </a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="next-previous-post">
                                <a :href="`/blog/${before}`" v-if="before"> 
                                <i class="fa fa-angle-right"></i>  پست قبل 
                                </a>
                                <a :href="`/blog/${after}`" v-if="after"> 
                                پست بعد <i class="fa fa-angle-left"></i>
                                </a>
                            </div>
                          <!-- comments here-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <TheFooter />
    </div>
</template>

<script>

    export default {
        data() {
            return {
                blogs:[],
                id: this.$route.params.slug,
                before:'',
                after:''
            }
        },

       async mounted () {
          const blog = await this.$axios.get(`blogs/${this.id}`)
          this.blogs = blog.data
        },
        async created()
        {
            const id = await this.$axios.get(`blogs_id/${this.id}`);
            if(id.data.after) this.after = id.data.after.id;
            if(id.data.before) this.before = id.data.before.id
        },

        methods: {
            slugify(text) {
                return text
                    .toString()
                    .toLowerCase()
                    .replace(/\s+/g, "-") // Replace spaces with -
                    .replace(/[^\w-]+/g, "") // Remove all non-word chars
                    .replace(/--+/g, "-") // Replace multiple - with single -
                    .replace(/^-+/, "") // Trim - from start of text
                    .replace(/-+$/, ""); // Trim - from end of text
            },
          copyToClipboard()
          {
            navigator.clipboard.writeText(`https://madein-iran/blog/${this.id}.com`).then(() => {
              this.$notify({ title: 'لینک بلاگ کپی شد!'})
            })
                .catch(() => {
                  this.$notify({ title: 'خطا در کپی لینک بلاگ!'})
                });
          }
        },

        head() {
            return {
                title: this.blogs.title
            }
        },
    };
</script>
