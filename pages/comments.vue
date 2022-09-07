<template>
  <div class="shop-page-wrapper">
    <HeaderWithTopbar containerClass="container"/>
    <Breadcrumb pageTitle="دیدگاه های من"/>
    <div class="container p-5 my-5 border" style="border-radius: 5px">
      <div class="row my-5">
        <div class="col-md-2 pb-sm-3">
          <h3 class="d-flex justify-content-center py-5 text-dark"
              style="font-weight: 500">دیدگاه ها</h3>
        </div>
        <div class="col-md-10">
          <div class="review-wrapper rounded bg-gray" style="border-top:1px solid #0b4dfc; "
               v-for="(c,i) in product_comments" :key="i" v-if="product_comments">
            <div class="row text-center fw-bold py-4 my-2">
              <div class="col-3"><h4>{{ c.comment }}</h4></div>
              <div class="col-3"><h5>ایجاد در {{ c.created_at }}</h5></div>
              <div class="col-3"><p>{{ c.status ? 'تایید شده' : 'هنوز تایید نشده' }}</p></div>
              <div class="col-3">
                <p><a style="color: #0b4dfc" :href="`/product/${c.product_id}`">
                  مشاهده محصول
                </a>
                </p></div>
            </div>

          </div>
          <div class="review-wrapper rounded bg-gray" style="border-top:1px solid #0b4dfc; "
               v-for="(c,i) in blog_comments" :key="i" v-if="blog_comments">
            <div class="row text-center fw-bold py-4 my-2">
              <div class="col-3"><h4>{{ c.comment }}</h4></div>
              <div class="col-3"><h5>ایجاد در {{ c.created_at }}</h5></div>
              <div class="col-3"><p>{{ c.status ? 'تایید شده' : 'هنوز تایید نشده' }}</p></div>
              <div class="col-3">
                <p><a style="color: #0b4dfc" :href="`/blog/${c.blog_id}`">
                  مشاهده پست
                </a>
                </p></div>
            </div>

          </div>

        </div>

        <div v-if="!product_comments.length && !blog_comments.length">
          <div class="text-center">
            <h5 class="fw-bold">هنوز هیچ نظری ندارید!</h5>
          </div>
        </div>
      </div>
    </div>
    <the-footer/>
  </div>
</template>

<script>
export default {
  components: {
    HeaderWithTopbar: () => import("@/components/TheHeader"),
    Breadcrumb: () => import('@/components/Breadcrumb'),
    ProductGridItem: () => import('@/components/product/ProductGridItem'),
    QuickView: () => import('@/components/QuickView'),
    TheFooter: () => import('@/components/TheFooter'),
  },

  data() {
    return {
      product_comments: [],
      blog_comments: [],
    }
  },


  async mounted() {
    const user = localStorage.getItem('117115101114');
    const userr = JSON.parse(user);
    await this.$axios.get(`/show_comments${userr.id}`)
        .then((res) => {
          console.log(res)
          this.product_comments = res.data[0].comment;
          this.blog_comments = res.data[0].blog_comment;
        })
        .catch(() => {
          return this.$notify({
            text: 'خطایی رخ داد !',
            type: 'error'
          });
        });
  },
  head() {
    return {
      title: "دیدگاه های من "
    }
  },

};
</script>
