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
  methods:{
    getTheScript(){
      const scripts = {
        "paper-cup-production-line":{"@context":"https://schema.org/","@type":"Product","name":"خط تولید لیوان کاغذی","image":"https://api.madein-iran.com/public/storage/img/products/1673693538.jpg","description":"خرید و راه اندازی خط تولید لیوان کاغذی با هزینه و قیمت ارزان و پردرآمد. ماشین آلات و دستگاههای بسته‌بندی. تک جداره، دوجداره و سیل. مواد اولیه با مشاوره رایگان","brand":"شرکت ساخت ایران","aggregateRating":{"@type":"AggregateRating","ratingValue":"5","bestRating":"5","worstRating":"1","ratingCount":"52"},"sku":"33"},
        "perfume-production-line": {"@context":"https://schema.org/","@type":"Product","name":"خط تولید عطر و ادکلن","image":"https://api.madein-iran.com/public/storage/img/products/1678193283.jpg","description":" خرید و راه اندازی خط تولید عطر و ادکلن با هزینه و قیمت ارزان و پردرآمد. ماشین آلات و دستگاهها و پرکن برقی و پنوماتیک. مواد اولیه شیشه، اسپری، جعبه. مشاوره رایگان","brand":"شرکت ساخت ایران","aggregateRating":{"@type":"AggregateRating","ratingValue":"5","bestRating":"5","worstRating":"1","ratingCount":"43"},"sku":"34"},
        "bottled-water-production-line":{"@context":"https://schema.org/","@type":"Product","name":"خط تولید آب معدنی","image":"https://api.madein-iran.com/public/storage/img/products/1673693538.jpg","description":"خرید و راه اندازی خط تولید آب معدنی یا آشامیدنی با هزینه و قیمت ارزان و پردرآمد. ماشین آلات و دستگاههای آماده‌سازی بطری و بسته‌بندی. مواد اولیه با مشاوره رایگان","brand":"شرکت ساخت ایران","aggregateRating":{"@type":"AggregateRating","ratingValue":"5","bestRating":"5","worstRating":"1","ratingCount":"41"},"sku":"32"},
        "garbage-bag-production-line":{"@context":"https://schema.org/","@type":"Product","name":"خط تولید کیسه زباله","image":"https://api.madein-iran.com/public/storage/img/products/1673693622.jpg","description":"خرید و راه اندازی خط تولید کیسه زباله با هزینه و قیمت ارزان و پردرآمد. ماشین آلات و دستگاههای نایلون برای طاقه‌ها و بسته‌بندی. تامین مواد اولیه با مشاوره رایگان","brand":"شرکت ساخت ایران","aggregateRating":{"@type":"AggregateRating","ratingValue":"5","bestRating":"5","worstRating":"1","ratingCount":"29"},"sku":"31"},
        "freezer-bag-production-line":{"@context":"https://schema.org/","@type":"Product","name":"خط تولید کیسه فریزر","image":"https://api.madein-iran.com/public/storage/img/products/1673693650.jpg","description":"خرید و راه اندازی خط تولید کیسه فریزر با هزینه و قیمت ارزان و پردرآمد. ماشین آلات و دستگاه نایلون برای طاقه‌ها و بسته‌بندی و رول کن. مواد اولیه با مشاوره رایگان","brand":"شرکت ساخت ایران","aggregateRating":{"@type":"AggregateRating","ratingValue":"5","bestRating":"5","worstRating":"1","ratingCount":"61"},"sku":"30"},
        "plastic-nylex-bag-production-line":{"@context":"https://schema.org/","@type":"Product","name":"خط تولید انواع نایلون و نایلکس","image":"https://api.madein-iran.com/public/storage/img/products/1673693691.jpg","description":"خرید و راه‌اندازی خط تولید نایلون و نایلکس با هزینه و قیمت ارزان و پردرآمد. ماشین آلات نایلون برای طاقه‌ها و بسته‌بندی. رولی و برگی. مواد اولیه با مشاوره رایگان","brand":"شرکت ساخت ایران","aggregateRating":{"@type":"AggregateRating","ratingValue":"5","bestRating":"5","worstRating":"1","ratingCount":"53"},"sku":"29"},
        "disposable-tablecloth-production-line":{"@context":"https://schema.org/","@type":"Product","name":"خط تولید سفره یکبار مصرف","image":"https://api.madein-iran.com/public/storage/img/products/1673693718.jpg","description":"خرید و راه‌اندازی خط تولید سفره یکبار مصرف با هزینه و قیمت ارزان و پردرآمد. ماشین آلات پرکن تک رول و دو رول برای طاقه‌ها و بسته‌بندی. مواد اولیه و مشاوره رایگان","brand":"شرکت ساخت ایران","aggregateRating":{"@type":"AggregateRating","ratingValue":"5","bestRating":"5","worstRating":"1","ratingCount":"76"},"sku":"21"},
        "toilet-paper-production-line":{"@context":"https://schema.org/","@type":"Product","name":"خط تولید دستمال کاغذی دلسی (توالت)","image":"https://api.madein-iran.com/public/storage/img/products/1673693746.jpg","description":"خرید و راه‌اندازی خط تولید دستمال کاغذی دلسی (توالت) با هزینه و قیمت ارزان و پردرآمد. ماشین آلات رول کن، پرکن، برش و دوخت. مواد اولیه با مشاوره و آموزش رایگان","brand":"شرکت ساخت ایران","aggregateRating":{"@type":"AggregateRating","ratingValue":"5","bestRating":"5","worstRating":"1","ratingCount":"94"},"sku":"20"},
        "tissue-production-line":{"@context":"https://schema.org/","@type":"Product","name":"خط تولید دستمال کاغذی رومیزی","image":"https://api.madein-iran.com/public/storage/img/products/1673693783.jpg","description":"خرید و راه‌اندازی خط تولید دستمال کاغذی رومیزی با هزینه و قیمت ارزان و پردرآمد. ماشین آلات بسته‌بندی پرکن رومیزی و نواری. مواد اولیه با مشاوره و آموزش رایگان","brand":"شرکت ساخت ایران","aggregateRating":{"@type":"AggregateRating","ratingValue":"5","bestRating":"5","worstRating":"1","ratingCount":"123"},"sku":"19"},
      };
      let output = null;
      // Read key
      for (let key in scripts) {
        if (key ===this.slug) {
          return output = scripts[key];
        }
      }
      return  output;
    },
    getPageTitle(){
      const names = {
        "paper-cup-production-line":"خط تولید لیوان کاغذی",
        "perfume-production-line":"خط تولید عطر و ادکلن",
        "bottled-water-production-line":"خط تولید آب معدنی",
        "garbage-bag-production-line":"خط تولید کیسه زباله",
        "freezer-bag-production-line":"خط تولید کیسه فریزر",
        "plastic-nylex-bag-production-line":"خط تولید انواع نایلون و نایلکس",
        "disposable-tablecloth-production-line":"خط تولید سفره یکبار مصرف",
        "toilet-paper-production-line":"خط تولید دستمال کاغذی دلسی (توالت)",
        "tissue-production-line":"خط تولید دستمال کاغذی رومیزی",
      };
      let output = null;
      // Read key
      for (let key in names) {
        if (key ===this.slug) {
          return output = names[key];
        }
      }

      return  output;
    }
  },
  async created() {
    const product = await this.$axios.get(`products/${this.slug}`);
    this.products = product.data;
    this.products.metaKeyword = JSON.parse(this.products.metaKeyword)

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
      script: [
        {
          type: "application/ld+json",
          json: {
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "خانه",
                item: "https://madein-iran.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                "name": "لیست خط تولید",
                item: "https://madein-iran.com/production-lines/",
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": this.getPageTitle() ,
                "item": `https://madein-iran.com/product/${this.slug}/`
              },
            ],
          },
        },
        {
          type: "application/ld+json",
          json: this.getTheScript()

        }
      ],
    };
  },
};
</script>
<style scoped>
</style>

