<template>
    <div class="product-details-page-wrapper">
        <TheHeader containerClass="container" />
        <Breadcrumb :pageTitle="products.name" />
        <ProductDetailsWrapper  :product="products" :category="category" :states="states"/>
        <ProductDetailsDescriptionReview :product="products" />
        <TheFooter />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                slug: this.$route.params.slug,
              products:'',
              category:'',
              states:'',
            }
        },
      async mounted() {

        const product = await this.$axios.get(`products/${this.slug}`)
        this.products = product.data;
        this.category = product.data.category.name
        this.states = product.data.state
      },

        head() {
            return {
                title: this.products.name
            }
        },

        methods: {

        },
    };
</script>
