const axios = require('axios');

export default {

    target: 'static', // default is 'server'
    mode: 'universal',
    generate: {
        fallback: true,
        // routes() {
        //     let products = axios.get('https://api.madein-iran.com/public/api/products').then(res => {
        //         return res.data.map(product => {
        //             return '/product/' + product.id
        //         })
        //     })
        //     let blogs = axios.get('https://api.madein-iran.com/public/api/blogs').then(res => {
        //         return res.data.map(blog => {
        //             return '/blog/' + blog.id
        //         })
        //     })
        //     return [products , blogs]
        // }
        // or
        routes: ['/product/perfume-production-line','/product/paper-cup-production-line',
            '/product/bottled-water-production-line','/product/garbage-bag-production-line',
            '/product/freezer-bag-production-line','/product/plastic-nylex-bag-production-line',
            '/product/disposable-tablecloth-production-line', '/product/toilet-paper-production-line',
            '/product/tissue-production-line',
        // '/blog/17','/blog/21','/blog/22','/blog/24','/blog/26','/blog/28','/blog/29','/blog/30','/blog/31','/blog/32','/blog/33','/blog/34','/blog/35','/blog/36','/blog/37',
        ]
    },


    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: ' ساخت ایران | راه اندازی انواع کسب و کار تولیدی ',
        titleTemplate: ' %s | ساخت ایران',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
        ],
        htmlAttrs: {
            lang: 'fa',
            dir: 'rtl'
        },
        script:[
            {
                src:"/googleTagManager.js",
            },
            {
                innerHTML:`
               (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-MBSH36F');`
            }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        '~/assets/scss/style.scss',
        '~/assets/css/animation.css',
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '~/plugins/vue-awesome-swiper.js',
        '~/plugins/vuejs-pagiante.js',
        '~/plugins/observe-visibility.js',
        {
            src: '~/plugins/bootstrap.js',
            mode: 'client'
        },
        {
            src: '~/plugins/vue-js-modal',
            mode: 'client'
        },
        {
            src: '~/plugins/notifications-client.js',
            mode: 'client'
        }
    ],
    axios: {
        baseURL: "https://api.madein-iran.com/public/api",

    },
    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        '@nuxtjs/style-resources',
        '@nuxtjs/axios',
    ],

    styleResources: {
        scss: [
            '~/assets/scss/_variables.scss',
        ]
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        extractCSS: true,
        extend(config, ctx) {
        },
        babel: {
            compact: true,
        },
    },
}
