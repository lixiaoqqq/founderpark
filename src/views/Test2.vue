<template>
<div>

  <div @click="showExtension">分享海报</div>
 <!--这个为弹框黑色半透明背景-->
 <div @click="hidePosters" :class="{hidePoster:showPoster}"></div>
 <!--这个为弹出的海报组件 第一种方式-->
 <!-- <invite-poster v-show="showPoster" @hideposter="hidePosters"></invite-poster> -->
 <!--这个为弹出的海报组件 第二种方式-->
 <invite-poster v-show="showPoster" @hideposter="hidePosters"></invite-poster>
  
  
</div>
 
 </template>
 
 <script>
 import InvitePoster from "../components/Invite_poster.vue";
  
  export default {
   data() {
      return {
        showPoster: false,
        hidePoster: false,
      };
    },
    components: {
      InvitePoster,
    },
  methods: {
      showExtension() {
        this.showPoster = true;
        return;
      },
      hidePosters() {
        this.showPoster = false;
        return;
      }
    },
  }  
 </script>
 <style lang="scss" scoped>
 .hidePoster {
     position: fixed;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     z-index: 998;
     background: rgba(0, 0, 0, 0.6);
   }
 </style>