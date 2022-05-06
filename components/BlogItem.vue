<template>
    <div class="blog-wrap mb-25">
        <div class="blog-img">
            <n-link :to="`/blog/${blog.id}`">
                <img :src="blog.featuredImage" :alt="blog.title">
            </n-link>
            <span>{{ blog.category.name}}</span>
        </div>
        <div class="blog-content-wrap">
            <div class="blog-content text-center">
                <h3>
                    <n-link :to="`/blog/${blog.id}`">{{ blog.title }}</n-link>
                </h3>
                <span>By <n-link to="">Made in Iran</n-link></span>
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
            }
        },
    };
</script>
