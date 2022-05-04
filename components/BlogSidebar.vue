<template>
    <div class="blog-sidebar">
        <div class="sidebar-widget">
            <h4 class="pro-sidebar-title">جستجوی وبلاگ</h4>
            <div class="pro-sidebar-search mb-55 mt-25">
                <form class="pro-sidebar-search-form">
                    <input type="text" placeholder="جستجو ...">
                    <button>
                        <i class="pe-7s-search"></i>
                    </button>
                </form>
            </div>
        </div>
        <div class="sidebar-widget">
            <h4 class="pro-sidebar-title">وبلاگ های اخیر</h4>
            <div class="sidebar-project-wrap mt-30">
                <div class="single-sidebar-blog">
                    <div class="sidebar-blog-img">
                        <n-link to="/blog/a-guide-to-latest-trends-product">
                            <img src="/img/blog/sidebar-1.jpg" alt="">
                        </n-link>
                    </div>
                    <div class="sidebar-blog-content">
                        <span>عکاسی</span>
                        <h4>
                            <n-link to="/blog/a-guide-to-latest-trends-product">
                           تیتر وبلاگ</n-link>
                        </h4>
                    </div>
                </div>
                 <div class="single-sidebar-blog">
                    <div class="sidebar-blog-img">
                        <n-link to="/blog/a-guide-to-latest-trends-product">
                            <img src="/img/blog/sidebar-1.jpg" alt="">
                        </n-link>
                    </div>
                    <div class="sidebar-blog-content">
                        <span>عکاسی</span>
                        <h4>
                            <n-link to="/blog/a-guide-to-latest-trends-product">
                           تیتر وبلاگ</n-link>
                        </h4>
                    </div>
                </div>
               
            </div>
        </div>
        <div class="sidebar-widget mt-35">
            <h4 class="pro-sidebar-title">دسته بندیها</h4>
            <ul class="sidebar-widget-list mt-20">
                <li class="sidebar-widget-list-left">
                    <n-link to="/blog/blog-without-sidebar">
                        <span class="check-mark"></span>
                        حبوبات
                        <span>8</span>
                    </n-link>
                </li>
                <li class="sidebar-widget-list-left">
                    <n-link to="/blog/blog-without-sidebar">
                        <span class="check-mark"></span>
                        غلات
                        <span>5</span>
                    </n-link>
                </li>
            </ul>
        </div>
        <div class="sidebar-widget mt-50">
            <h4 class="pro-sidebar-title">تگ</h4>
            <div class="sidebar-widget-tag mt-25">
                <ul>
                    <li>
                        <n-link to="/blog/blog-without-sidebar">سلولزی</n-link>
                    </li>
                    <li>
                        <n-link to="/blog/blog-without-sidebar">فروشگاه</n-link>
                    </li>
                   
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    };
</script>
