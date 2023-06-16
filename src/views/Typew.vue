<template>
  <div>
    <div class="distinguished">

    </div>

    <div class="dialogue">

      <div class="dialogue_img1">
              <img class="question_img" src="../assets/lvse.png" alt="">
              <img class="answer_img" src="../assets/zise.png" alt="">
      </div>
      <!-- :strings="[' 李志飞，出门问问，创始人$CEO，10:00-10:30 <br> <br> 来自于LLM技术变革,大家希望它去改变什么？降本增效？创造新体验？ <br>  <br> <br> <br>张鹏,极客公园,总裁&CEO，<br>10:30-11:00   <br>   <br>   <br> 素材生成纬度发展如何?2D是完全成熟了吗? ']"> -->
      <!-- <img class=`answer_img` src=`https://lmg.jj20.com/up/allimg/tp06/20120222122H618-0-lp.jpg`> -->
      <!-- `<img class='answer_img' src='http://5b0988e595225.cdn.sohucs.com/images/20171013/fec49f59b98041a4a16886893447f746.jpeg' alt=>` -->
      <div class="dialogue_list">
        <vue-typed-js
        :showCursor="true"
        :cursorChar="'_'"
        :fadeOutClass="'fadeOutClass'"
        :fadeOutDelay="500"
        :typeSpeed="50"
        :autoInsertCss="true"
        :bindInputFocusEvents="true"
        
        :strings="['  李志飞，出门问问，创始人`&`CEO，10:00-10:30 <br> <br> 来自于LLM技术变革,大家希望它去改变什么？降本增效？创造新体验？ <br> <br> <br>  <br>   张鹏,极客公园,总裁`&`CEO <br> 10:30-11:00   <br>   <br> 素材生成纬度发展如何 ? 2D 是完全 <br> 成熟了吗?   ^1000']">
            <p> <span class="typing"></span></p>
          </vue-typed-js>
      </div>
<!-- 

      <van-button type="primary">主要按钮</van-button>
<van-button type="info">信息按钮</van-button>
<van-button type="default">默认按钮</van-button>
<van-button type="warning">警告按钮</van-button>
<van-button type="danger">危险按钮</van-button> -->

<br><br>
      <div class="dialogue_img2">
              <img class="question_img" src="../assets/lvse.png" alt="">
              <img class="answer_img" src="../assets/zise.png" alt="">
      </div>
    </div>
  </div>
</template>
 <script>
 export default {
  
 }
    
  </script>
<style scoped lang="scss" >
.distinguished{
  width: 100%;
  background-image: url(../assets/beijing1.png);
  background-size: 100% 100% ;
  height: 100%;
  position: fixed;
  z-index: -99;
}
.dialogue {
  color: aliceblue;
  width: 100%;
  position: absolute;
  top: 51%;
}
.dialogue_img1{
  display: flex;
  flex-direction: column;
  
}
.dialogue_img1 img{
  width: 6%;
  margin: 20px 11px;
}
.dialogue_list{
  width: 80%;
  /* text-align: right; */
  left: 14%;
  top: 5%;
  position: absolute;
}
.dialogue_img2{
  display: flex;
  flex-direction: column;
}
.dialogue_img2 img{
  width: 6%;
  margin: 26px 11px;
}
</style>