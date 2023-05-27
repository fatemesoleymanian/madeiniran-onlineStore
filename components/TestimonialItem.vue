<template>
  <div class="blog-wrap-2 mb-30">
    <div class="blog-img-2">
      <div class="h_iframe-aparat_embed_frame">
        <span style="display: block; padding-top: 57%"> </span>
        <iframe
            :src="testimonial.video"
            allowFullScreen="true"
            class="box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            frameborder="0"
        >
        </iframe>
      </div>

    </div>
    <div class="blog-content-2">

      <h4 class="text-center fw-bold" v-if="testimonial.name">
       {{testimonial.name}}
      </h4>
      <p v-if="testimonial.position">{{ testimonial.position }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name:"TestimonialItem",
  props: ["testimonial"],
};
</script>
<style>
.h_iframe-aparat_embed_frame {
  position: relative;
}

.h_iframe-aparat_embed_frame .ratio {
  display: block;
  width: 100%;
  height: auto;
}

.h_iframe-aparat_embed_frame iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
