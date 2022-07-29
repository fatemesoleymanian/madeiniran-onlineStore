<template>

    <div class="product-details-page-wrapper">
        <TheHeader containerClass="container" />
        <Breadcrumb :pageTitle="blogs.title" />

        <div class="Blog-details-inner pt-100 pb-100 px-4" >
          <div class="container">
                <div class="row flex-row-reverse px-2">
                    <div class="col-lg-12">
                      <div id="loading" v-if="loader"></div>
                      <div class="blog-details-wrapper ml-20">
                        <div class="blog-details-top" v-if="!loader">
                                <div class="blog-details-img">
                                    <img :src="'https://apidemo.madein-iran.com/public'+blogs.featuredImage" :alt="blogs.title">
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
                            <div class="tag-share" v-if="blogs">
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
                          <div v-if="blogs.length === 0">
                            <h3 class="text-center p-5">پستی یافت نشد!</h3>
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
                after:'',
              loader:true
            }
        },

        async created()
        {
          this.loader = true
          const [blog,id] = await Promise.all([
            this.$axios.get(`blogs/${this.id}`),
            this.$axios.get(`blogs_id/${this.id}`)
          ]);
          this.blogs = blog.data
            if(id.data.after) this.after = id.data.after.id;
            if(id.data.before) this.before = id.data.before.id
          this.loader = false
        },

        methods: {

          copyToClipboard()
          {
            navigator.clipboard.writeText(`https://madein-iran/blog/${this.id}.com`).then(() => {
              this.$notify({
                title: 'لینک پست کپی شد!',
                type:'success'
              })
            })
                .catch(() => {
                  this.$notify({
                    title: 'خطا در کپی لینک پست!',
                    type:'error'
                  })
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
