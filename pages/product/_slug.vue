<template>
    <div class="product-details-page-wrapper">
        <TheHeader containerClass="container" />
        <Breadcrumb :pageTitle="products.name" />
        <ProductDetailsWrapper  :product="products" :category="category" :states="states" />
        <ProductDetailsDescriptionReview :product="products" :faq="faq" />
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
              faq:[]
            }
        },
      async mounted() {

        const product = await this.$axios.get(`products/${this.slug}`)
        this.products = product.data;
        this.category = product.data.category.name
        this.states = product.data.state

        const faqs = await this.$axios.get(`/products_faq${this.slug}`)
            .catch(()=>{
              return this.$notify({title: 'خطایی  بوجود آمد!'})
            });
        this.faq = faqs.data;
        console.log(this.faq)
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
