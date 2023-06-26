<template>
    <div class="talent_poster">
      <div class="content_container" >
        <vue-canvas-poster
          :widthPixels="1000"
          :painting="painting"
          @success="success"
          @fail="fail"
        ></vue-canvas-poster>
        <img :src="posterImg"  />
         <!--第一种方式-->
         <p style="color: white;">长按复制图片分享</p>
        <p @click="$emit('hideposter')"><span>X</span></p>
        <!--第二种方式-->
        <!--<p @click="$listeners.hideposter"><span>X</span></p>-->
      </div>
    </div>
  </template>
  <script>
  export default {
    middleware: "",
    props: {},
    components: {},
    data() {
      return {
        showPoster: true,
        posterImg: "", //生成的海报
        painting: {
          width: "550px",
          height: "876px",
          background: require("../assets/未标题-1-05.png"),
          views: [
            {
              type: "image",
            //   url: 'http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIxbEZu0fBQOYlTLTpqtoezkNiaCBQ4ZXZAKhvPiaFAdI91vBsUkpiaDH4mp4qGvcVo2EaxRrp5fMia8w/132',
              css: {
                top: "20px",
                left: "36px",
                borderRadius: "40px",
                width: "80px",
                height: "80px",
              },
            },
            {
              type: "text",
            //   text: "故事以外",
              css: {
                top: "48px",
                left: "136px",
                width: "360px",
                maxLines: 1,
                fontSize: "26px",
              },
            },
            {
              type: "qrcode",
              content: "你好，我是小愛同學",
              css: {
                bottom: "153px",
                left: "32px",
                color: "#000",
                background: "#fff",
                width: "100px",
                height: "100px",
                borderWidth: "10px",
                borderColor: "#fff",
              },
            },
          ],
        },
      };
    },
    created() {},
    methods: {
      success(src) {
        this.posterImg = src;
      },
      fail(err) {
        alert(err);
      },
    },
  };
  </script>
  <style lang="scss">
  .talent_poster {
    width: 100%;
    .content_container {
      position: absolute;
      width: 80%;
      top: 50%;
      left: 50%;
      overflow: hidden;
      z-index: 999;
      transform: translate(-50%, -50%);
      margin: 0 auto;
      img {
        width: 100%;
        height: 100%;
        margin-bottom: 10px;
      }
      p {
        text-align: center;
        span {
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.7);
          width: 30px;
          color: rgba(255, 255, 255, 0.7);
          text-align: center;
          line-height: 28px;
          height: 30px;
          display: inline-block;
        }
      }
    }
  }
  </style>
   