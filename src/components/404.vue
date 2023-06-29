<template>
    <div class="warp_box">
        <div class="box_404">
            <!-- <img src="../assets/404页面背景.jpg" alt=""> -->
            <div class="box_gif_img">
                <img src="../assets/404页面动图.gif" alt="">
            </div>
            <div class="box_img">
                <img src="../assets/pc_erweima.jpg" alt="">
            </div>
        </div>
    </div>  
    </template>
    
    <script>
    export default {
    data(){
      return {
    
      }
    },
    mounted(){
     
    },
    beforeRouteEnter(to,from,next){
      // window.document.body.style.background='rgb(246,246,246)'
      window.document.body.style.background='#fff'
      next()
    },
    beforeRouteLeave(to,from,next){
      console.log('beforeRouteLeave');
      window.document.body.style.background=''
      next()
    },
    }
    </script>
    <style lang="scss" scoped>
    .warp_box{
      height: 100%;
      .box_404{
        background-image: url(../assets/404页面150dpi.png);
        background-size: 100% 100%;
        height: 100%;
        .box_img{
         width: 10%;
         position: absolute;
         top: 30%;
         left: 71%;
          img{
            width: 100%;
            display: block;
          
          }
        }
        .box_gif_img{
          width: 30%;
          position: absolute;
          top: 20%;
          left: 19%;
          img{
            width: 100%;
          }
        }
      }
  }

//   @media only screen and (min-width: 1920px) {



// }
</style>