<template>

  <div class="product-details-page-wrapper">
    <TheHeader containerClass="container"/>
    <Breadcrumb :pageTitle="blogs.title"/>

    <div class="Blog-details-inner pt-100 pb-100 px-4">
      <div class="container">
        <div class="row flex-row-reverse px-2">
          <div class="col-lg-12">
            <div id="loading" v-if="loader"></div>
            <div class="blog-details-wrapper ml-20">
              <div class="blog-details-top" v-if="!loader">
                <div class="blog-details-img">
                  <img :src="'https://api.madein-iran.com/public'+blogs.featuredImage" :alt="blogs.title">
                </div>
                <div class="blog-details-content">
                  <div class="blog-meta-2">
                    <ul>
                      <li>{{ blogs.created_at }}</li>

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
                        <a class="twitter">
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
                  <i class="fa fa-angle-right"></i> پست قبل
                </a>
                <a :href="`/blog/${after}`" v-if="after">
                  پست بعد <i class="fa fa-angle-left"></i>
                </a>
              </div>
              <!-- comments here-->
              <div class="blog-comment-wrapper mt-55">
                <div class="single-comment-wrapper mt-35" v-for="comment in blogs.comment" :key="comment"
                     v-if="blogs.comment.length">
                  <div class="review-img px-4" v-if="comment.status === 1">
                    <img src="/img/testimonial/testi-1.png" class="rounded" :alt="blogs.title">
                  </div>
                  <div class="blog-comment-content" v-if="comment.status === 1">
                    <h4 v-if="comment.user_id === yourId" class="py-3">دیدگاه شما</h4>
                    <span>{{ comment.updated_at }} </span>
                    <p>{{ comment.comment }}</p>
                  </div>
                </div>
              </div>
              <div class="blog-reply-wrapper mt-55">
                <h4 class="blog-dec-title">دیدگاه خود را اضافه کنید.</h4>
                <form class="blog-form">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="text-leave">
                        <textarea placeholder="متن دیدگاه" v-model="yourComment"></textarea>
                        <button type="submit" :disabled="commenting" @click="saveCommentForPost" class="float-start">
                          {{ commenting ? 'در حال ارسال دیدگاه...' : ' ارسال دیدگاه' }}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TheFooter/>
  </div>
</template>

<script>

export default {
  data() {
    return {
      blogs: [],
      id: this.$route.params.slug,
      before: '',
      after: '',
      loader: true,
      commenting: false,
      yourComment: '',
      yourId: ''
    }
  },

  async created() {
    this.loader = true
    const [blog, id] = await Promise.all([
      this.$axios.get(`blogs/${this.id}`),
      this.$axios.get(`blogs_id/${this.id}`)
    ]);
    this.blogs = blog.data
    if (id.data.after) this.after = id.data.after.id;
    if (id.data.before) this.before = id.data.before.id
    this.loader = false

    if (localStorage.getItem('117115101114')) {
      const user = localStorage.getItem('117115101114');
      const userr = JSON.parse(user);
      this.yourId = userr.id;
    }
    console.log(this.blogs.comment)
  },

  methods: {

    copyToClipboard() {
      navigator.clipboard.writeText(`https://madein-iran.com/blog/${this.id}`).then(() => {
        this.$notify({
          title: 'لینک پست کپی شد!',
          type: 'success'
        })
      })
          .catch(() => {
            this.$notify({
              title: 'خطا در کپی لینک پست!',
              type: 'error'
            })
          });
    },
    async saveCommentForPost(e) {
      this.commenting = true;
      e.preventDefault();
      if (!localStorage.getItem('116111107101110')) return window.location = '/login-register';
      if (this.yourComment.trim() === '') {
        this.commenting = false;
        return this.$notify({
          text: ".لطفا دیدگاه خود را درباره ی پست وارد کنید",
          type: "error",
        });
      }

      const data = {
        user: this.yourId,
        blog: this.blogs.id,
        comment: this.yourComment
      }
      this.$axios.setToken(localStorage.getItem('116111107101110'), 'Bearer');
      const comment = await this.$axios.post('post_comment', data)
          .catch(() => {
            this.commenting = false
            return this.$notify({
              type: 'error',
              title: 'خطایی در ثبت دیدگاه بوجود آمد!'
            })
          })
      this.$notify({
        type: 'success',
        title: comment.data.msg
      })
      this.commenting = false
    }
  },

  head() {
    return {
      title: this.blogs.title,
      meta: [
        {
          hid: this.blogs.metaKeyword,
          name: this.blogs.pageTitle,
          content: this.blogs.metaDescription
        }]
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
  border: 3px solid rgba(0, 0, 0, .5);
  border-radius: 50%;
  border-top-color: #000;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}

@-webkit-keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>
