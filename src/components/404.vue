<template>
    <div class="warp_box">
        <div class="box">
    
          <div class="box_left">
               <p>找不到页面了哦,请使用手机端访问网站!</p>
               <div class="box_left_img">
                  <img src="../assets/ZVWsxT.png" alt="">
               </div>
               <p style="
        text-align: center;">
                请使用手机扫码访问网站
               </p>
    
          </div>
        <div class="box_right">
             <img src="../assets/404.png" alt="">
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
    }
      .box{
        display: flex;
        align-items: center;
        height: 100%;
        justify-content: center;
        width: 50%;
        margin: 0 auto;
        .box_left{

          .box_left_img{
            display: flex;
            align-items: center;
            justify-content: center;
          margin-top: 10%;
          }
          // width: 50%;
          p{
            font-size: 1vw;
            text-align: center;
          }
        }
        .box_right{
          width: 40%;
          img{
            width: 100%;
          }
        }
      }
    </style>