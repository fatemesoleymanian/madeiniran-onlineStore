<template>
    <div class="blog-wrap-2 mb-30">
        <div class="blog-img-2">
            <n-link :to="`/blog/${blog.id}`">
                <img :src="'http://localhost:8000'+blog.featuredImage" :alt="blog.title">
            </n-link>
        </div>
        <div class="blog-content-2">
            <div class="blog-meta-2">
                <ul>
                    <li>{{ blog.updated_at }}</li>

                </ul>
            </div>
            <h4>
                <n-link :to="`/blog/${blog.id}`">{{ blog.title }}</n-link>
            </h4>
            <p>{{ blog.post_excerpt }}</p>
            <div class="blog-share-comment">
                <div class="blog-btn-2">
                    <n-link :to="`/blog/${blog.id}`">بیشتر ...</n-link>
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
            navigator.clipboard.writeText(`https://madein-iran/blog/${this.blog.id}.com`).then(() => {
              this.$notify({ title: 'لینک بلاگ کپی شد!'})
            })
                .catch(() => {
                  this.$notify({ title: 'خطا در کپی لینک بلاگ!'})
                });
          }
        },
    };
</script>
