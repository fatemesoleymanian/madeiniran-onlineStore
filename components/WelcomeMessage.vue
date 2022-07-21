<template>
    <div class="welcome-area">
        <div class="container">
            <div class="welcome-content text-center">
                <h5>{{ subTitle }}</h5>
                <h1>{{ title }}</h1>
                <p>{{ desc }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: "به فروشگاه خط تولید ساخت ایران خوش آمدید!",
                subTitle: "ما چه کسانی هستیم",
                desc: ""
            }
        },
    };
</script>
