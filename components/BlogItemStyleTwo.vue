<template>
    <div class="blog-wrap-2 mb-30">
        <div class="blog-img-2">
            <a :href="`https://madein-iran.com/blog/${blog.id}/`">
                <img :src="'https://api.madein-iran.com/public'+blog.featuredImage" :alt="blog.title">
            </a>
        </div>
        <div class="blog-content-2">
            <div class="blog-meta-2">
                <ul>
                    <li>{{ blog.created_at }}</li>

                </ul>
            </div>
            <h4>
                <a :href="`https://madein-iran.com/blog/${blog.id}/`">{{ blog.title }}</a>
            </h4>
            <p>{{ blog.post_excerpt }}</p>
            <div class="blog-share-comment">
                <div class="blog-btn-2">
                    <a :href="`https://madein-iran.com/blog/${blog.id}/`">بیشتر ...</a>
                </div>
                <div class="blog-share">
                    <div class="share-social">
                        <ul>
                            <li>
                                <a class="twitter" @click="copyToClipboard">
                                   <i class="fa fa-share" aria-hidden="true"></i>
                                 </a>
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
        props: ["blog"],

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
            navigator.clipboard.writeText(`https://madein-iran.com/blog/${this.blog.id}/`).then(() => {
              this.$notify({
                type:'success',
                title: 'لینک پست کپی شد!'})
            })
                .catch(() => {
                  this.$notify({
                    type:'error',
                    title: 'خطا در کپی لینک پست!'})
                });
          }
        },
    };
</script>
