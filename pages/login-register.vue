<template>
    <div class="shop-page-wrapper">
        <HeaderWithTopbar containerClass="container" />
        <Breadcrumb pageTitle="ورود | ثبت نام" />
        
        <div class="login-register-area pt-100 pb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 col-12 ms-auto me-auto">
                        <div class="entrance">
                        <Login v-if="!flag"/>
                        <Register v-if="flag"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <TheFooter />
    </div>
</template>

<script>
    import HeaderWithTopbar from "@/components/TheHeader";
    import Login from "@/components/Login";
    import Register from "@/components/Register";
    import Breadcrumb from "@/components/Breadcrumb";
    import TheFooter from "@/components/TheFooter";
    export default {
        components: {
            HeaderWithTopbar,
            Login,
            Register,
            Breadcrumb,
            TheFooter
        },

        data() {
            return {
                
            };
        },

        methods:{
           
          
        },
        mounted()
        {
             if (localStorage.getItem('116111107101110')) window.location = '/my-account';  
        },
        computed: {
             flag(){
             return this.$store.getters.getFlag
             }
        },
        head() {
            return {
                title: "ورود | ثبت نام"
            }
        }
    };
</script>
