
<template>
  <div>
   
    <div class="warp_box">
                <div class="warp">
              </div> 
            <div class="warp_connect">
    <div  class="top_fixed" v-if="BoxFixed" >
       <div class="fixde_AGI">
             <div style="color: white;">AGI PLAYGROUND 2023</div>
            <div>
              <el-dropdown @command="handleCommand">
                  <span class="el-dropdown-link">
                <i class="el-icon-s-unfold"></i>
                <!-- <van-icon name="wap-nav"  size="1.3rem" color="#fff" /> -->
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="a">活动亮点</el-dropdown-item>
                    <el-dropdown-item command="b">三大模块</el-dropdown-item>
                    <el-dropdown-item command="c">嘉宾&议程</el-dropdown-item>
                    <el-dropdown-item command="d">购票方式</el-dropdown-item>
                    <el-dropdown-item command="e">关于Founder</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown> 
            </div>
       </div>
     </div>
                <div class="dialogue_img">
                <h1>{{ AIGCText1 }}</h1>          
                <h1>{{ AIGCText2 }}</h1>          
                <h1>{{ AIGCText3 }}</h1>    
                
                
                <div v-if="isblockStyle" class="style_Box">
                    <div class="blockStyle1" ></div>
                    <div class="blockStyle2" ></div>
               </div>
              <vue-typed-js
                class="desc"
                :strings="typingTexts"
                :startDelay="300"
                :typeSpeed="100"
                :backSpeed="50"
              >
                <!-- <span class="typing"></span> -->
                <span class="typing"></span>
              </vue-typed-js>
                </div>  
                <div class="warp_bottom_img">
                      <div class="img_logo">
                        <img src="../assets/组 836.png" alt="">
                      </div>
                      <div class="bottom_button">
                            <div @click="goHome">
                              <p>立即</p>
                              <p>购票</p>
                            </div>
                            <div>
                              <p>立即</p>
                              <p>分享</p>
                            </div>
                      </div>
                </div>
            </div>

            <div class="guest">
                  <br>
              <br>
              <br>
              <br>
                <!-- <h1 @click="goHome"> 点击打开小程序</h1> -->
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <h1 @click="gotorouter">{{ this.showText1 }}</h1>
                <h1  @click="gotorouter1"> {{ this.showText2 }}</h1> 
                <h1>       {{ this.showText3 }}</h1>
                <h1>       {{ this.showText4 }}</h1>
                <h1>       {{ this.showText5 }}</h1>
                <h1>       {{ this.showText6 }}</h1>
                <h1>       {{ this.showText7 }}</h1>
                <h1>       {{ this.showText8 }}</h1>
                <div v-if="isblockStyle" class="style_Boxs">
                      <div class="blockStyle1s" ></div>
                      <div class="blockStyle2s" ></div>
                  </div>
             </div>

             <div class="agiText">
             <h3> {{ agiTexts1 }}</h3>
             <h3> {{ agiTexts2}}</h3>
             <h3> {{ agiTexts3 }}</h3>
             <h3> {{ agiTexts4 }}</h3>
             <br>
             <br>
             <br>
             <h3> {{ agiTexts5 }}</h3>
             <h3> {{ agiTexts6 }}</h3>
             <h3> {{ agiTexts7 }}</h3>

             <br>
             <br>


             <h3> {{ agiTexts8 }}</h3>
             <h3> {{ agiTexts9 }}</h3>
             <h3> {{ agiTexts10 }}</h3>
             <h3> {{ agiTexts11 }}</h3>

                <!-- <h3>
                  AGI Playground 
                </h3>
                <h3>
                  - 
                </h3> 
                 <h3>
                  a place where AGI doers gather, 
                </h3>

                <h3>
                  explore & play. 
                </h3> -->
             </div>


             <div class="videobottom"> 
                      <video class="videoStyle" webkit-playsinline="" playsinline="true" preload="none"  poster=""   controls muted loop>
                        <source src="http://lc-RanMoNzS.cn-n1.lcfile.com/dbXaQw0aMa5Guz5TVcJf7lCD1e74oDGU/h265%E6%96%87%E4%BB%B6.mp4" type="video/mp4">
                      </video>
              </div>

              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
     
        

             

            
    </div>
 

  </div>
  
  </template>
  
<script>
import Vue from 'vue';
import { Toast } from 'vant';
import MobileDetect from 'mobile-detect';
Vue.use(Toast);

export default {
  data() {
    return {
      property: 'value',
      timess:null,
      Intervaltimes:null,
      BoxFixed: false,
      showText: "",     // 开场AGI文字
      showText1: "",    // 下方路由1
      showText2: "",    // 下方路由2
      showText3: "",    // 下方路由3
      showText4: "",    // 下方路由4
      AIGCText1:'',
      AIGCText2:'',
      BoxFixeds:false,
      isblockStyle:false,
      AIGCText3:'',
      showText5: "",    // 下方路由5
      showText6: "",    // 下方路由6
      showText7: "",    // 下方路由7
      showText8: "",    // 下方路由8

      agiTexts1: "",    // agiTexts1
      agiTexts2: "",    // agiTexts2
      agiTexts3: "",    // agiTexts3
      agiTexts4: "",    // agiTexts4
      agiTexts5: "",    // agiTexts5
      agiTexts6: "",    // agiTexts6
      agiTexts7: "",    // agiTexts7
      agiTexts8: "",    // agiTexts8
      agiTexts9: "",    // agiTexts9
      agiTexts10: "",    // agiTexts10
      agiTexts11: "",    // agiTexts11


      typingTexts: ["",
      ],
      isBlack: true,

    };
  },
  computed: {
    blockStyle() {
      return {
        width: '100px',
        height: '100px',
        position: 'absolute',
        top: '200px',
        left: '200px',
        backgroundColor:'red'
      };
    },
    },
  methods: {
    handleCommand(command) {
      this.$message('click on item ' + command);
    },
    // 滚动事件
    gotorouter() {
      this.$router.push('/Index');
    },
    gotorouter1() {
      this.$router.push('/Test');
    },
    appear(content, property) {
      this[property] = "";
      clearTimeout(this[property + "Timer"]);

      let _this = this;
      let speed =100;
      let count = 1;

      function changeContent() {
        _this[property] = content.substring(0, count);
        count++;

        if (count <= content.length) {
          speed -= 1;
          if (speed < 5) speed = 5;

          _this[property + "Timer"] = setTimeout(changeContent, speed);
        }
      }

      changeContent();
    },
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
if(scrollTop > 800){
  if (this.agiTexts1 === "") {
  this.appear("   AGI Playground ", "agiTexts1");
  this.appear("-", "agiTexts2");
  this.appear("a place where AGI doers gather, ", "agiTexts3");
  this.appear("explore & play. ", "agiTexts4");
  this.appear("在一个技术新浪潮到来之时， ", "agiTexts5");
  this.appear("不错过它的最好方式， ", "agiTexts6");
  this.appear("就是亲身去上手、去体验、去探索，去沉浸其中。 ", "agiTexts7");
  this.appear("Playground 概念来源 —— ", "agiTexts6");
  this.appear("在许多 AI 产品中，大家常会用 PLAYGROUND 来去指代一 ", "agiTexts8");
  this.appear("个开发或体验环境，能够让开发者、申请用户进行模型的简 ", "agiTexts10");
  this.appear("单搭建、产品功能和用户案例的体验等，比如 OpenAI  ", "agiTexts11");
  // this.appear("explore & play. ", "agiTexts4");
  }
}

      if (scrollTop > 300) {
        this.BoxFixed = true;
        if (this.showText1 === "") {
          this.appear("主论坛>", "showText1");
          this.appear("分论坛>", "showText2");
          this.appear("嘉宾 & 日程>", "showText3");
          this.appear("购票方式>", "showText4");
          this.appear("常见问题>", "showText5");
          this.appear("联系我们>", "showText6");
          this.appear("关于 Founder", "showText7");
          this.appear("Park>", "showText8");
        }
      } else {
        this.BoxFixed = false;
      }
    },
    async generateschemeUrl() {
      const res = await this.$http.post('https://webnode.geekpark.net/access_token');
      console.log(res.data.data.URl, 'data.data.URl');
      location.href = res.data.data.URl;
    },
    goHome() {
      this.generateschemeUrl();
    },
    async ga(qrId) {
      console.log(qrId, 'qrId');
    }
  },
  mounted() {

    // setInterval(() => {  
    //   this.isblockStyle = !this.isblockStyle;
    // }, 300);
  var typedCursor=document.querySelector('.typed-cursor')
  console.log(typedCursor,'typedCursor');
    this.appear("AGI", "AIGCText1");
    this.appear("PLAY-", "AIGCText2");
    this.appear("GROUND", "AIGCText3");
          // typedCursor.style.display='block'
      // typedCursor.style.fontSize='70px'
      // typedCursor.style.color='black'
      // typedCursor.style.background='black'
      // typedCursor.style.fontWeight='800'
    clearInterval(this.timess)
     this.timess = window.setTimeout(()=>{
      this.Intervaltimes =  window.setInterval(() => {
          console.log(this.timess,'timess');
           this.isblockStyle = !this.isblockStyle;
       }, 500);
      },1500)





    // this.appear("AGI  PLAY- GROUND |", "showText");
    window.addEventListener('scroll', this.handleScroll, true);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
    // clear(timess)
    console.log(this.timess,'destroyed');
    clearInterval(this.timess)
    if(this.timess){
      window.clearInterval(this.timess); //关闭
      window.clearInterval(this.Intervaltimes); //关闭
      this.timess=null

    }
  },
  beforeDestroy(){
    console.log(this.timess,'beforeDestroy');
    if(this.timess){
      window.clearInterval(this.timess); //关闭
      window.clearInterval(this.Intervaltimes); //关闭

      this.timess=null

    }

  },
  beforeRouteLeave(to, from, next) {
    console.log(this.timess,'beforeRouteLeave');
    if(this.timess){
      window.clearInterval(this.timess); //关闭
      window.clearInterval(this.Intervaltimes); //关闭

      this.timess=null
         next()
  }
  }
  }
</script>
  
<style lang="scss" scoped>
  
  // .typed-element{
  //   display: block !important;
  // }
.style_Box{
  display: flex;
  position: relative;
  top: 52.6%;
    height: 70px;
}
  .blockStyle1{
    width: 30px;
    background: black;
  }
  .blockStyle2{
    width: 30px;
    background: white;
  }

  .style_Boxs{
  display: flex;
  position: absolute;
    left: 6%;
    bottom: 0;
    height: 70px;
    left: 40%;
}
  .blockStyle1s{
    width: 30px;
    background: black;
  }
  .blockStyle2s{
    width: 30px;
    background: white;
  }
  
.warp_box{
  height: 2000px;
}
.agiText{
  // background: red;
  position: relative;
  bottom: 18%;
  margin-left: 3%;
  h3{
    color: #FFFFFF;
    width: fit-content;
    background: black;
    font-size: 3.5vw;
    font-family: 'OPPOSans_L';

  }
}
  .guest{
    width: 100%;
      /* height: 100%; */
      /* background: red; */
      position: absolute;
      color: white;
      top: 100%;
      h1{
        width: fit-content;
        background: black;
        font-family: 'OPPOSans_L';
        margin-top: 4px;
        font-size: 13vw;
        margin-left: 3%;
      }
  }
  .guest_item_list{
    width: 45%;
  }
  .top_fixed{
    // background: aliceblue;
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 99;
      text-align: center;
      background: rgba(238, 238, 238 , 0.5);
      // opacity: 0.6;
      // background-image: url('../assets/beijing.png');
      padding: 10px;
      .fixde_AGI{
        display: flex;
        width: 96%;
        justify-content: space-between;
        color: white;

      }
  }
  
  .guest_item{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
  }
  .guest_item>div>span{
    color: aliceblue;
    font-size: 18px;
  }
  .guest_item div{
    margin-top: 15px;
  }
  .typed-element,.typed-cursor{
    font-size: 70px;
    color: white;
    font-weight: 800;
    display: none;
  }
  .guest_item img{
    // width: 100%;
  
  }
  .warp_bottom_img{
    display: flex;
    /* background: #000; */
    position: absolute;
    bottom: 15%;
    align-items: center;
    justify-content:flex-end ;
    // width: 100%;
    .bottom_button{
      // background: red;
    // margin: 0px 10%;
    position: fixed;
    z-index: 99;
    bottom: 10%;
    right: 10%;
    div:nth-child(1){
      border-radius: 50%;
      padding: 11px;
      background: #FFFFFF;
      width: 80%;
      text-align: center;
   }

   div:nth-child(1):hover{
      background: black;
      color: white;
   }
      div:nth-child(2){
      border-radius: 50%;
      padding: 11px;
      background: black;
      width: 80%;
      color: #D3FF19;
      text-align: center;
      }

      div:nth-child(2):hover{
      background: #D3FF19;
      color: black;
   }
      // width: 20px;
      // height: 20px;
    }
  }
  /* .warp_bottom_img .img_logo{
     width: 50%;
  } */
  .warp_bottom_img .img_logo img{
     width: 100%;
    //  background: white;
  }
  /* .warp_bottom_img .img_address :nth-child(1){
    width: 50%;
  } */

  .warp_bottom_img>.img_logo{
    margin-right: 32%;
    width: 57%;
  }
  .warp_bottom_img>.img_address{
    width: 48%;
  }
  
  
  *{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }
  .warp{
    width: 100%;
    background-image: url(http://lc-RanMoNzS.cn-n1.lcfile.com/ijHIaFPVLopzkwCsnNrf6uz2CNn04YU6/AIGC.gif);
    background-size: 100% 100%;
    height: 100%;
    position: fixed;
    z-index: -9;
  }
  .warp_connect{
    width: 100%;
    height: 100%;
  }
  .dialogue_img{
    position: absolute;
      // width: 90%;
      margin: 0 auto;
      // display: flex;
      top: 10%;
      flex-wrap: wrap;
      left: 6%;
      h1{
        font-size: 17vw;
         width: 90%;
         color: white;
         width: fit-content;
        background: black;
        margin-top: 6px;
        margin-bottom: 5px;
        font-family: 'OPPOSans_L';
      }
  }

  .el-dropdown-link {
    cursor: pointer;
  }
 /deep/.el-dropdown-menu{
      width: 16% !important;
      text-align: center!important;
}
  
  // .videoContainer{
  //   position: fixed;
  //   width: 100%;
  //   height: 100%;
  //   overflow: hidden;
  //   z-index: -100;
  // }
  
  // .videoContainer:before{
  //   content: "";
  //   position: absolute;
  //   width: 100%;
  //   height: 100%;
  //   display: block;
  //   z-index: -1;
  //   top: 0;
  //   left: 0;
  //   background: rgba(25,29,34,.65);
  //   background-size: cover;
  // }
  
  // .fullscreenVideo{
  //   width: 100%;
  //   height: 100%;
  //   object-fit: fill
  // }

  .videobottom{
    // background: red;
    // position: fixed;
    // z-index: 999999;
    text-align: center;
    bottom: 15%;
    position: relative;
    .videoStyle{
      width: 90%;
      background: black;
    }
  }
  </style>