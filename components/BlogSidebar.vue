<template>
    <div class="blog-sidebar">
        <div class="sidebar-widget">
            <h4 class="pro-sidebar-title">جستجوی وبلاگ</h4>
            <div class="pro-sidebar-search mb-55 mt-25">
                <form class="pro-sidebar-search-form">
                    <input type="text" placeholder="جستجو ..." v-model="str">
                    <button @click="search_blog">
                        <i class="pe-7s-search"></i>
                    </button>
                </form>
            </div>
        </div>
        <div class="sidebar-widget">
            <h4 class="pro-sidebar-title">پست های اخیر</h4>
            <div class="sidebar-project-wrap mt-30" v-for="(blog ,i ) in latest" :key="i" v-if="latest.length">

                 <div class="single-sidebar-blog">
                    <div class="sidebar-blog-img">
                        <n-link :to="`/blog/${blog.id}`">
                            <img :src="'https://apidemo.madein-iran.com/public'+blog.featuredImage" :alt="blog.title">
                        </n-link>
                    </div>
                    <div class="sidebar-blog-content">
                        <span>{{blog.category.name}}</span>
                        <h4>
                            <n-link :to="`/blog/${blog.id}`">
                          {{blog.title}}
                          </n-link>
                        </h4>
                    </div>
                </div>

            </div>
        </div>
      <span class="clear_blog_filter py-4" @click="clearFilter" >حذف همه فیلتر ها  <i class="fa fa-trash" aria-hidden="true"></i></span>
      <div class="sidebar-widget mt-35">
            <h4 class="pro-sidebar-title">دسته بندیها</h4>
            <ul class="sidebar-widget-list mt-20" v-for="(c,i) in categories" :key="i" v-if="categories.length">
                <li class="sidebar-widget-list-left" @click="filterCat(c.name)">
                    <a href="#">
                        <span class="check-mark"></span>
                        {{c.name}}
                        <span>{{c.blog.length}}</span>
                    </a>
                </li>

            </ul>
        </div>
        <div class="sidebar-widget mt-50">
            <h4 class="pro-sidebar-title">تگ</h4>
            <div class="sidebar-widget-tag mt-25">
                <ul v-for="(t,i) in tags" :key="i" v-if="tags.length">
                    <li @click="filterTag(t.name)">
                        <a href="#">{{t.name}}</a>
                    </li>

                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data()
        {
            return{
                str:'',
                latest:[],
                categories:[],
                tags:[],
              blogs_no_filter:[]
            }

        },
        async mounted(){
            const [tags,categories,latestBlogs] = await Promise.all(
                  [
                this.$axios.get('/tags_only_blog'),
                 this.$axios.get('blog_categories'),
                this.$axios.get('blogs_latest')
            ]);

            this.tags = tags.data;
            this.categories =categories.data;

            this.latest = latestBlogs.data;
            this.blogs_no_filter = this.$store.getters.getBlogs

        },
        methods:{
            async search_blog(e){
                e.preventDefault();
                if(this.str)
                {
                    const result = await this.$axios.get(`blogs/search/${this.str}`);
                    console.log(result.data.blogs.data)
                   this.$store.dispatch('updateBlogs', result.data.blogs.data);
                   console.log(this.$store.getters.getBlogs)
                }
            },
            filterCat(key)
            {
                let blogs = this.$store.getters.getBlogs
                 this.$store.dispatch('updateBlogs',blogs.filter((blog) => blog.category.name.match(key)));
            },
            filterTag(key)
            {
                let blogs = this.$store.getters.getBlogs
                 this.$store.dispatch('updateBlogs',blogs.filter(blog => {
                   return blog.tag.some(n=>{
                       return n.name.match(key)
                   })
                 }
                 ));
            },
          clearFilter()
          {
            this.$store.dispatch('updateBlogs',this.blogs_no_filter)
          }
        }

    };
</script>
