<template>
    <div class="product-details-page-wrapper">
        <TheHeader containerClass="container" />
        <Breadcrumb :pageTitle="blog.title" />

        <div class="Blog-details-inner pt-100 pb-100">
            <div class="container">
                <div class="row flex-row-reverse">
                    <div class="col-lg-9">
                        <div class="blog-details-wrapper ml-20">
                            <div class="blog-details-top">
                                <div class="blog-details-img">
                                    <img :src="blog.imgSrc" :alt="blog.title">
                                </div>
                                <div class="blog-details-content">
                                    <div class="blog-meta-2">
                                        <ul>
                                            <li>{{ blog.date }}</li>
                                        
                                        </ul>
                                    </div>
                                    <h3>{{ blog.title }}</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprhendit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qei officia deser mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. </p>
                                    <blockquote>Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt labo dolor magna aliqua. Ut enim ad minim veniam quis nostrud.</blockquote> 
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehendrit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </div>
                            </div>
                            <div class="tag-share">
                                <div class="dec-tag">
                                    <ul>
                                        <li><a href="#">تگ مربوطه ی اول</a></li>
                                       
                                    </ul>
                                </div>
                                <div class="blog-share">
                                  
                                    <div class="share-social">
                                        <ul>
                                            <li>
                                                 <a class="twitter" href="#" target="_blank">
                                                     <i class="fa fa-share" aria-hidden="true"></i>
                                                 </a>
                                            </li>
                                        
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="next-previous-post">
                                <a href="#"> <i class="fa fa-angle-right"></i>  پست قبل </a>
                                <a href="#"> پست بعد <i class="fa fa-angle-left"></i></a>
                            </div>
                          <!-- comments here-->
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </div>
        <TheFooter />
    </div>
</template>

<script>
    import blog from "@/data/blog.json";

    export default {
        data() {
            return {
                blog,
                slug: this.$route.params.slug
            }
        },

        mounted () {
            this.blog = blog.find(blog => this.slugify(blog.title) === this.slug);
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
            }
        },

        head() {
            return {
                title: this.blog.title
            }
        },
    };
</script>
