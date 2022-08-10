<template>
    <div class="team-area pt-95 pb-70">
        <div class="container">
            <div class="section-title-2 text-center mb-60">
                <h2>دپارتمان ها</h2>
<!--                <p>There are few team members for our company</p>-->
            </div>
            <div class="row">
                <div class="col-lg-3 col-sm-6" v-for="(member, index) in teamMemberData" :key="index">
                    <div class="team-wrapper mb-30">
                        <div class="team-img">
                            <img :src="'https://api.madein-iran.com/public'+member.iconImage" :alt="member.name">
<!--                            <div class="team-action">-->
<!--                                <a :href="s" v-for="(social, index) in member.socialLink" :key="index">-->
<!--                                    <i :class="social.icon"></i>-->
<!--                                </a>-->
<!--                            </div>-->
                        </div>
                        <div class="team-content text-center">
                            <h4>{{ member.name }}</h4>
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
                teamMemberData:[]
            }
        },
      async created()
      {
        let p = await this.$axios.get('/departments')
        this.teamMemberData = p.data
        console.log(p)
      }
    };
</script>
