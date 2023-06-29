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

@media only screen and (max-width: 3500px) {
    .box_404{
      background-image: url(http://lc-RanMoNzS.cn-n1.lcfile.com/c8tqRyYtkFPxQSeQDkVEQA1Px2KvsSpF/404%E9%A1%B5%E9%9D%A2300dpi.png);
    }
}
@media only screen and (max-width: 2200px) {
  .warp_box .box_404 .box_gif_img{
    width: 28%;
  }
    .box_404{
      background-image: url(../assets/404页面150dpi.png);
    }
}


@media only screen and (max-width: 1291px) {
  .warp_box .box_404 .box_gif_img{
    width: 28%;
  }
    .box_404{
      background-image: url(../assets/404页面背景1.jpg);
    }
}


    .warp_box{
      height: 100%;
      .box_404{
        // background-image: url(http://lc-RanMoNzS.cn-n1.lcfile.com/c8tqRyYtkFPxQSeQDkVEQA1Px2KvsSpF/404%E9%A1%B5%E9%9D%A2300dpi.png);
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
          width: 22%;
          position: absolute;
          top: 20%;
          left: 19%;
          img{
            width: 100%;
          }
        }
      }
  }


</style>