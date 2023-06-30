<template>
    <div class="warp_box">
        <div class="box_404">
            <!-- <img src="../assets/404页面背景.jpg" alt=""> -->

          <div class="left">
              <img src="../assets/404-切图-06.png" alt="">
            </div>
            <div class="left1">
              <img src="../assets/404-切图-04.png" alt="">
            </div>
            <div class="left2">
              <img src="../assets/404-切图-05.png" alt="">
            </div>
            <div class="box_gif_img">
                <img src="../assets/logo-motion.gif" alt="">
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

      var bottom_button=document.querySelector('.bottom_button')
    console.log(bottom_button,'bottom_button');
    bottom_button.style.display='none'
            // this.$nextTick=(()=>{
        
            // })
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

// @media only screen and (max-width: 3500px) {
//     .box_404{
//       background-image: url(../assets/404_3.png) ;
//       background-position: center;
//     background-size: auto;

//     }
// }
// @media only screen and (max-width: 2200px) {
//   .warp_box .box_404 .box_gif_img{
//     width: 28%;
//   }
//     .box_404{
//       background-image: url(../assets/404_2.png) ;
//       background-position: center;
// background-size: auto;

//     }
// }

img{
  width: 100%;
  display: block;
}
.left{
    width: 23%;
    position: absolute;
    right: 16%;
    top: 64%;
}

.left2{
  width: 30%;
    position: absolute;
    top: 73%;
    left: 19%;
}
.bottom_button{
  display: none  !important;
}
    .warp_box{
      height: 100%;
      .box_404{
        background-image: url(../assets/404_1.png) ;
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

.left1{
    width: 18%;
    position: absolute;
    right: 19%;
    top: 19%;
}


@media only screen and (min-width: 1280px) {
  .warp_box .box_404 .box_gif_img{
    width: 30%;
  }
    .box_404{
      background-image: url(../assets/404_1.png) ;

      background-position: center;
    background-size: auto;

    }
}


@media only screen and (min-width: 1580px) {
  .warp_box .box_404 .box_gif_img{
    width: 22%;
  }
    .box_404{
      background-image: url(../assets/404_2.png) ;

      background-position: center;
    background-size: auto;

    }
}

@media only screen and (min-width: 2200px) {
  // .warp_box .box_404 .box_gif_img{
  //   width: 22%;
  // }
    .box_404{
      background-image: url(../assets/404_3.png) ;

    //   background-position: center;
    // background-size: auto;

    }
}
</style>