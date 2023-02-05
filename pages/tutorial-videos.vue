<template>
  <div class="shop-page-wrapper">
    <HeaderWithTopbar containerClass="container"/>
    <Breadcrumb pageTitle="ویدئو های آموزشی"/>

    <div class="my-account-area pb-80 pt-100">
      <div class="container">
        <div class="row">
          <div class="ms-auto me-auto col-lg-9">
            <div class="my-account-wrapper">
              <div id="faq" class="panel-group">
                <div class="panel panel-default single-my-account">
                  <div class="panel-heading my-account-title">
                    <h3 class="panel-title">
                      <a data-bs-toggle="collapse" href="#my-account-1">
                        مهندسی بازاریابی و فروش
                      </a>
                    </h3>
                  </div>
                  <div id="my-account-1" class="panel-collapse collapse show" data-bs-parent="#faq">
                    <div class="panel-body">
                      <div class="myaccount-info-wrapper">
                        <div class="row">
                          <video-player :src="selected_item.src" class="my-2" controlsList="nodownload"
                          :posetr="selected_item.poster"
                            allowFullscreen
                             allow="false"
                             type="video/mp4"/>
                          <span class="p-3 fw-bold"><b>{{selected_item.title}}</b></span>

                          <div class="sidebar-widget mx-2 ">
                            <ul class="sidebar-widget-list mt-20" v-for="i in category_1" :key="i">
                              <li class="sidebar-widget-list-left p-3 border-bottom" :id="i.id" >
                                <a href="#" @click="showSelectedVideo(i)">
                                  <span class="check-mark2"></span>
                                 {{i.title}}
                                  <span style="min-width: 30px;min-height: 20px;">{{i.time}}</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TheFooter/>
  </div>
</template>

<script>
import HeaderWithTopbar from "@/components/TheHeader";
import Breadcrumb from "@/components/Breadcrumb";
import TheFooter from "@/components/TheFooter";
import VideoPlayer from 'nuxt-video-player';
require('nuxt-video-player/src/assets/css/main.css');

export default {
  name: "tutorial-videos",
  components: {Breadcrumb, HeaderWithTopbar,TheFooter,VideoPlayer},
  head() {
    return {
      title: "ویدئو های آموزشی"
    }
  },
  methods:{
    showSelectedVideo(video)
    {
      this.selected_item.src = video.src;
      this.selected_item.poster = video.poster;
      this.selected_item.title = video.title;
      document.getElementById(video.id).style.color= "#799cf7";
    }
  },
  data()
  {
    return{
      selected_item:{
        poster:"./static/thumbnails/ep-01.jpg",
        src:"https://api.madein-iran.com/public/storage/videos/part-01-low.mp4",
        title:'قسمت اول',
      },
      category_1:[
        {
          id:"cat1-pt1",
          poster:"./static/thumbnails/ep-01.jpg",
          src:"https://api.madein-iran.com/public/storage/videos/part-01-low.mp4",
          title:'قسمت اول',
          time:'59:12'
        },
        {
          id:"cat1-pt2",
          poster:"./static/thumbnails/ep-02.png",
          src:"https://api.madein-iran.com/public/storage/videos/part-02-low.mp4",
          title:'قسمت دوم',
          time:'34:24'
        },
      ]
    }
  },
  mounted() {
    document.addEventListener("contextmenu", function (e){
      e.preventDefault();
    }, false);
    if (!localStorage.getItem('116111107101110')) window.location = '/login-register';
  }
}
</script>

<style scoped>

</style>
