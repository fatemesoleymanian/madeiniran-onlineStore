<template>
  <div class="blog-wrap mb-25">
    <div class="blog-img">
      <a :href="`https://madein-iran.com/blog/${blog.slug}/`">
        <img :src="blog.featured_image.large" :alt="blog.title" />
      </a>
      <!--            <span>{{ blog.category.name}}</span>-->
    </div>
    <div class="blog-content-wrap">
      <div class="blog-content text-center text-dark rounded">
        <h3>
          <a
            :href="`https://madein-iran.com/blog/${blog.slug}/`"
            class="text-dark"
            >{{ blog.title }}</a
          >
        </h3>
        <span class="text-dark fw-lighter" style="z-index: 1">
          {{ blog.post_excerpt.substring(0, 55) }}...
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["blog"],

  methods: {},
};
</script>
