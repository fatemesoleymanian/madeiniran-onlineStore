<template>
  <div class="product-details-page-wrapper">
    <TheHeader containerClass="container" />
    <Breadcrumb :pageTitle="products.name" />
    <ProductDetailsWrapper
      :product="products"
      :category="category"
      :states="states"
      :default_price="default_price"
    />
    <ProductDetailsDescriptionReview :product="products" :faq="faq" />
    <TheFooter />
  </div>
</template>

<script>
export default {
  data() {
    return {
      slug: this.$route.params.slug,
      products: "",
      category: "",
      states: "",
      faq: [],
      default_price: "",
    };
  },
  async created() {
    const product = await this.$axios.get(`products/${this.slug}`);
    this.products = product.data;
    this.category = product.data.category.name;
    this.states = product.data.state;
    if (this.states.length > 0) {
      let lengthh = this.states.length - 1;
      this.default_price = JSON.stringify(
        this.states[lengthh].discounted_price
      ).slice(1, -1);
    }
    const faqs = await this.$axios
      .get(`/products_faq${this.slug}`)
      .catch(() => {
        return this.$notify({
          title: "خطایی  بوجود آمد!",
          type: "error",
        });
      });
    this.faq = faqs.data;
  },

  head() {
    return {
      title: this.products.pageTitle,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.products.metaDescription,
        },
      ],
      link: [
        {
          rel: "canonical",
          href: `https://madein-iran.com/product/${this.slug}/`,
        },
      ],
    };
  },
};
</script>
<style scoped>
</style>

