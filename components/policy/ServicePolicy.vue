<template>
    <div class="support-area pt-100 pb-90">
        <div class="container">
            <div class="row mtn-30 border">
                <div class="col-6 mt-30">
                    <div class="support-wrap support-1">
                        <div class="support-content">
                            <h5>TITLE</h5>
                          <p><router-link to="/about">LINK</router-link></p>
                        </div>
                    </div>
                </div>
              <div class="col-6 text-center border">
                <div class="support-wrap support-1">
                  <div class="support-icon">
                    <img class="animated w-100" width="500" height="100"
                         src="../../static/img/slider/cosmetics-slider-2.jpg" alt="about-us">
                  </div>

                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                policies: [
                    {
                        icon: "/img/icon-img/support-1.png",
                        title: "Free Shipping",
                        subTitle: "Free shipping on all order"
                    },
                    {
                        icon: "/img/icon-img/support-2.png",
                        title: "Support 24/7",
                        subTitle: "Support 24 hours a day"
                    },
                    {
                        icon: "/img/icon-img/support-3.png",
                        title: "Money Return",
                        subTitle: "30 days for free return"
                    },
                    {
                        icon: "/img/icon-img/support-4.png",
                        title: "Order Discount",
                        subTitle: "10% off on your first order"
                    },
                ]
            }
        },
    };
</script>
