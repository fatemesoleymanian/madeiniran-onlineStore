<template>
    <div class="blog-wrap mb-25">
        <div class="blog-img">
            <n-link :to="`/blog/${blog.id}`">
                <img :src="'https://apidemo.madein-iran.com/public'+blog.featuredImage" :alt="blog.title">
            </n-link>
            <span>{{ blog.category.name}}</span>
        </div>
        <div class="blog-content-wrap">
            <div class="blog-content text-center">
                <h3>
                    <n-link :to="`/blog/${blog.id}`">{{ blog.title }}</n-link>
                </h3>
                <span >{{blog.post_excerpt.substring(0,55)}}...</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["blog"],

        methods: {

        },
    };
</script>
