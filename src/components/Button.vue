<template>

<div>


          <!--这个为弹框黑色半透明背景-->
          <div @click="hidePosters" :class="{hidePoster:showPoster} "></div>
                        <!--这个为弹出的海报组件 第一种方式-->
         <!-- <invite-poster v-show="showPoster" @hideposter="hidePosters"></invite-poster> -->
                        <!--这个为弹出的海报组件 第二种方式-->
          <invite-poster v-show="showPoster" @hideposter="hidePosters"></invite-poster>
    <div class="bottom_button">
          
          <div style="
                 border-radius: 50%;
                 padding: 11px 12px;
                 background: #D3FF19;
                 width: 80%;
                 color: black;
                 text-align: center;
                 border: 1px solid;
             " 
             @click="goupiao" 
             >
             <p>票务</p>
             <p>中心</p>
           </div>
           <div 
           @click="showExtension"
           >
             <p>转发</p>
             <p>朋友</p>
           </div>
           <!-- <div 
           @click="myhome"
          >
             <p>个人</p>
             <p>中心</p>
           </div> -->
           <!-- <div>
           </div> -->
</div>

</div>
     
</template>

<script>

import InvitePoster from "./Invite_poster.vue";
export default {
    components: {
      InvitePoster,

    },
data(){
    return{
        showPoster:false
    }
},
mounted(){

},
methods:{
    hidePosters() {
        const rootElement = document.documentElement
        rootElement.style.overflow = "auto";
        this.showPoster = false;
        return;
      },
    goupiao(){
      window.location.href=this.$store.state.url
    },
    showExtension() {
      // 获取用户点击的位置坐标
    var posterImg=  document.querySelector(".content_container")  
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      console.log(scrollTop,'scrollTop');
      console.log(posterImg,'posterImg');
        posterImg.style.top = scrollTop + 400 + "px";
        this.showPoster = true;
        const rootElement = document.documentElement;
        rootElement.style.overflow = "hidden";
        return;
      },
}
}
</script>
<style lang="scss" scoped>

.bottom_button{
      // background: red;
    // margin: 0px 10%;
    position: fixed;
    z-index: 99;
    bottom: 10%;
    right: 10%;
    div:nth-child(2){
      border-radius: 50%;
      padding: 11px;
      background: #FFFFFF;
      width: 80%;
      text-align: center;
      border: 1px solid ;
   }

   div:nth-child(2):hover{
      background: black;
      color: white;
   }
      div:nth-child(3){
      border-radius: 50%;
      padding: 11px;
      background: black;
      width: 80%;
      color: #D3FF19;
      border: 1px solid ;
      text-align: center;
      }

      div:nth-child(3):hover{
      background: #D3FF19;
      color: black;
   }
      // width: 20px;
      // height: 20px;
    }
</style>