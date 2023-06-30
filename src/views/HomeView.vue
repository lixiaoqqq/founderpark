
<template>
  <div class="box_bigbox">
        

  <div class="warp_box">
                <div class="warp">
                  
                </div> 
            <div class="warp_connect">
             <div  class="top_fixed" v-if="BoxFixed" >
       <div class="fixde_AGI">
             <div class="nav_title"  >AGI PLAYGROUND 2023
               <!-- <span v-if="nav_title_sapn_flag" class="nav_title_sapn"></span>  -->
              
              
              </div>
            <div>
              <!-- <el-dropdown @command="handleCommand"> -->
                  <span class="el-dropdown-link">
                <i class="el-icon-s-unfold" @click="showPopup" ></i>
                <!-- <van-icon name="wap-nav" size="1.3rem" color="#fff" /> -->
                  </span>
                  <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell> -->
                  <van-popup      
                 v-model="shows"
                  closeable
                  close-icon="http://lc-RanMoNzS.cn-n1.lcfile.com/1hsCGAIF6prDox6YTyKcNVAQ6OdrCLlM/CLOSE_.png"
                  position="top"
                  duration="0.4"
                  :style="{ height: '80%',backgroundColor:'#D3FF19' }">
                
                  <div class="button_navs_top">
                              <h1 >{{ this.showText1 }}</h1>
                              <!-- <h1  @click="gotorouter('SubForum')"> {{ this.showText2 }}</h1>  -->
                              <h1 @click="gotorouter('/GuestSharing')">       {{ this.showText3 }}</h1>
                              <h1 @click="gotorouter('/ticketingMethod')">       {{ this.showText4 }}</h1>
                              <h1 @click="gotorouter('/commonProblem')">       {{ this.showText5 }}</h1>
                              <h1 @click="gotorouter('/ContactUs')">       {{ this.showText6 }}</h1>
                              <h1  @click="gotorouter('/aboutFounder')">       {{ this.showText7 }}</h1>
                              <div class="SubForum_Text_style">
                              <h1  @click="gotorouter('/aboutFounder')">{{ showText8 }}</h1>
                               <div v-if="Subforum1" class="style_Box1">
                             <div class="blockStyle3" ></div>
                            <div class="blockStyle4" ></div>
                        </div>  
                     </div>
                 </div>
                </van-popup>
                  <!-- <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="a">活动亮点</el-dropdown-item>
                    <el-dropdown-item command="b">三大模块</el-dropdown-item>
                    <el-dropdown-item command="c">嘉宾&议程</el-dropdown-item>
                    <el-dropdown-item command="d">购票方式</el-dropdown-item>
                    <el-dropdown-item command="e">关于Founder</el-dropdown-item>
                  </el-dropdown-menu> -->
                <!-- </el-dropdown>  -->
            </div>
       </div>

  
     </div>
   
                <div class="dialogue_img">
                <h1>{{ AIGCText1 }}</h1>          
                <h1>{{ AIGCText2 }}</h1>          
                <h1>{{ AIGCText3 }}</h1>    
                <div v-if="isblockStyle" class="style_Box_home">
                    <div class="blockStyle1_home" ></div>
                    <div class="blockStyle2_home" ></div>
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
          
            </div>
            <div class="warp_bottom_img">
                      <div class="img_logo">
                        <img src="../assets/组 836.png" alt="">
                     </div>
                     
            </div>
     
            <div class="warp_bottom_img_two">
                      <div class="img_logo_two">
                        <p style="
                          font-size: 9vw;
                      ">07/22-07/23</p>
                    <p>北京 751D·PARK 传导空间</p>

                     </div>
                     
                     
            </div>

            
       
  
          
           <div class="agiText">
             <!-- <h3> {{ agiTexts1 }}</h3>
             <h3> {{ agiTexts2}}</h3>
             <h3> {{ agiTexts3 }}</h3>
             <h3> {{ agiTexts4 }}</h3>
             <h3> {{ agiTexts5 }}</h3>
             <h3> {{ agiTexts6 }}</h3>
             <br><br> -->
             <h3> {{ agiTexts7 }}</h3>
             <h3> {{ agiTexts }}</h3>
             <h3> {{ agiTexts8 }}</h3>
             <h3> {{ agiTexts9 }}</h3>
             <h3> {{ agiTexts10 }}</h3>
             <h3> {{ agiTexts11 }}</h3>
             <h3> {{ agiText1 }}</h3>
             <br>
             <h3 style="font-family:'OPPOSans_B'; color: #D3FF19;"> {{ agiText2 }}</h3>
             <h3 style="font-family:'OPPOSans_B'; color: #D3FF19;"> {{ agiText3 }}</h3>
             <h3 style="font-family:'OPPOSans_B'; color: #D3FF19;"> {{ agiText4 }}</h3>
             <br>
             <!-- <h3> {{ agiText5 }}</h3>
             <h3> {{ agiText6 }}</h3> 
             <h3> {{ agiText7 }}</h3> -->
             <!-- <br><br> -->
             <h3 style="font-family:'OPPOSans_B'; color: #D3FF19;"> {{ agiText8 }}</h3>
             <h3 style="font-family:'OPPOSans_B'; color: #D3FF19;"> {{ agiText9 }}</h3>
             <!-- <h3 style="font-family:'OPPOSans_B';"> {{ agiText10 }}</h3>
             <h3 style="font-family:'OPPOSans_B';"> {{ agiText11 }}</h3> -->
           </div>
           <div class="mengceng">
           </div>
          <div class="videobottom"> 
                      <video ref="video" class="videoStyle" webkit-playsinline="" playsinline="true" preload="none"  poster="../assets/fengmian1.jpg" x5-video-player-type="h5"    controls  loop>
                        <source src="http://lc-RanMoNzS.cn-n1.lcfile.com/hOkSoOMf4yV9D3456Dzc8zyGgjOCgNbV/AI%20Quest%E6%A8%AA%E7%89%88_0625_x264.mp4" type="video/mp4">
                      </video>
                      <!-- <button @click="toggleFullScreen">
                      <h1>
                        全屏
                      </h1>
                      </button> -->

                      <div class="agi_shwo">
                        <h1> {{ agiTexts12 }}</h1>
                            <div style="
                                  margin-top: 15%;
                              " class="agi_shwo_item">
                              <h2>{{ agiTexts13 }} </h2>
                              <!-- <h2>{{ agiTexts14 }}</h2> -->
                                  <br>
                              <p>{{ agiTexts15 }}</p>
                              <p>{{ agiTexts16 }}</p>
                              <p>{{ agiTexts17 }}</p>
                              <p>{{ agiTexts18 }}</p>
                              <!-- <p>{{ agiTexts14 }}</p> -->
                            </div>
                            <div class="agi_shwo_item">
                              <h2>{{ agiTexts19 }} </h2>
                              <!-- <h2>{{ agiTexts20 }}</h2> -->
                                  <br>
                              <p>{{ agiTexts26 }}</p>
                              <p>{{ agiTexts21 }}</p>
                              <p>{{ agiTexts22 }}</p>
                              <p>{{ agiTexts23 }}</p>
                              <!-- <p>{{ agiTexts24 }}</p>
                              <p>{{ agiTexts25 }}</p> -->
                            </div>
                            <div class="agi_shwo_item">
                              <h2>{{ agiTexts32 }} </h2>
                              <!-- <h2>{{ agiTexts27 }}</h2> -->
                                  <br>
                              <p>{{ agiTexts28 }}</p>
                              <p>{{ agiTexts29 }}</p>
                              <p>{{ agiTexts30 }}</p>
                              <!-- <p>{{ agiTexts31 }}</p> -->
                            </div>
                            <div class="agi_shwo_item">
                              <!-- <h2>{{ agiTexts33 }} </h2> -->
                              <h2>{{ agiTexts34 }}</h2>
                                  <br>
                              <p>{{ agiTexts35 }}</p>
                              <p>{{ agiTexts36 }}</p>
                              <p>{{ agiTexts37 }}</p>
                              <p>{{ agiTexts38 }}</p>
                            </div>

                            <div class="agi_shwo_item">
                              <h2>{{ agiTexts13 }} </h2>
                              <h2>{{ agiTexts14 }}</h2>
                                  <br>
                              <p>{{ agiTexts15 }}</p>
                              <p>{{ agiTexts16 }}</p>
                              <p>{{ agiTexts17 }}</p>
                              <p>{{ agiTexts18 }}</p>
                            </div>
                            <!-- <div class="agi_shwo_item">
                              <h2>{{ agiTexts39 }} </h2>
                              <h2>{{ agiTexts40 }}</h2>
                              <h2>{{ agiTexts41 }}</h2>
                                  <br>
                              <p>{{ agiTexts42 }}</p>
                              <p>{{ agiTexts43 }}</p>
                              <p>{{ agiTexts44 }}</p>
                              <p>{{ agiTexts45 }}</p>
                            </div> -->
                            <div class="aig_show_btn">
                              <div   @click="chakan"  class="aig_show_btnck">
                              查看日程>
                              </div>
                              <div  @click="goupiao" class="aig_show_btngp">
                                  立即购票>
                              </div>

                            </div>

                        
                       </div>
                       <div class="button_nav">
                              <h1 style="background: black; color: #595757;" @click="goTop">{{ this.showText1 }}</h1>
                              <!-- <h1  @click="gotorouter('SubForum')"> {{ this.showText2 }}</h1>  -->
                              <h1 @click="gotorouter('/GuestSharing')">       {{ this.showText3 }}</h1>
                              <h1 @click="gotorouter('/ticketingMethod')">       {{ this.showText4 }}</h1>
                              <h1 @click="gotorouter('/commonProblem')">       {{ this.showText5 }}</h1>
                              <h1 @click="gotorouter('/ContactUs')">       {{ this.showText6 }}</h1>
                              <h1  @click="gotorouter('/aboutFounder')">       {{ this.showText7 }}</h1>
                              <div class="SubForum_Text_style">
                              <h1  @click="gotorouter('/aboutFounder')">{{ showText8 }}</h1>
                               <div v-if="Subforum1" class="style_Box1">
                             <div class="blockStyle3" ></div>
                            <div class="blockStyle4" ></div>
                        </div>  
                          </div>
                            </div>

                        <div class="Sponsor">
                          <div>主办方</div>
                          <div>
                            <img  style="
    width: 40%;
" src="../assets/logo1.png" alt="">
                          </div>
                          <div>
                            联合出品方
                          </div>
                          <div>
                            <img  style="
    width: 18%;
" src="../assets/logo2.png" alt="">

                          </div>
                          <div>
                            Demo Show 联合发起方
                          </div>
                          <div>
                            <img  style="
    width: 20%;
"  src="../assets/logo3.png" alt="">

                          </div>
                          <div>
                            战略合作伙伴
                          </div>
                          <div>
                            <img style="
    width: 100%;
"  src="../assets/footerlogo111.jpeg" alt="">

                          </div>

                        </div>
                       <div class="footer_img">
                         <img src="../assets/footer22.jpg" alt="">
                      </div>
                 
                </div>
            </div>


         <!-- <div class="bottom_button">
          
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
                              <p>立即</p>
                              <p>购票</p>
                            </div>
                            <div 
                            @click="showExtension"
                            >
                              <p>立即</p>
                              <p>分享</p>
                            </div>
                            <div 
                            @click="myhome"
                           >
                              <p>个人</p>
                              <p>中心</p>
                            </div> 
                            <div>
                            </div>
        </div>
                          -->
<div class="heart" v-if="isjiantou">
  <img src="../assets/xiahua_icon.png" alt="">
</div>


                  </div>
                  
  </template>
<script>
import Vue from 'vue';
import { Toast } from 'vant';
import MobileDetect from 'mobile-detect';
import InvitePoster from "../components/Invite_poster.vue";
import Errors from "../components/404.vue";
import Buttons from "../components/Button.vue";
Vue.use(Toast);
export default {
  data() {
    
    return {
      property: 'value',
      showPoster: false,
      Subforumtimess2:null,
      Intervaltimes2:null,
        hidePoster: false,
        shows: false,
      timess:null,
      Subforum1:false,
      isjiantou:false,
      Intervaltimes:null,
      BoxFixed: false,
      // nav_title_sapn_flag:false,
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
      agiTexts12: "",    // agiTexts12
      agiTexts13: "",    // agiTexts13
      agiTexts14: "",    // agiTexts14

      agiTexts15: "",    // agiTexts15
      agiTexts16: "",    // agiTexts16
      agiTexts17: "",    // agiTexts17
      agiTexts18: "",    


      agiTexts19: "",    
      agiTexts20: "",    
      agiTexts21: "",    
      agiTexts22: "",    
      agiTexts23: "",    
      agiTexts24: "",    
      agiTexts25: "",    
      agiTexts26: "",    // agiTexts26
      agiTexts27: "",    
      agiTexts28: "",    
      agiTexts29: "",    
      agiTexts30: "",    

      agiTexts31: "",    
      agiTexts32: "",    




      agiTexts33: "",    
      agiTexts34: "",    
      agiTexts35: "",    
      agiTexts36: "",    
      agiTexts37: "",    
      agiTexts38: "",    
      agiTexts39: "",    
      agiTexts40: "",    
      agiTexts41: "",    
      agiTexts42: "",    
      agiTexts43: "",    
      agiTexts44: "",    
      agiTexts45: "",    

      agiText10:'',
      agiText9:'',
      agiText8:'',
      agiText7:'',
      agiText6:'',
      agiText5:'',
      agiText4:'',
      agiText3:'',
      agiText2:'',
      agiText1:'',
      agiText11:'',
      agiTexts:'',
      typingTexts: ["",
      ],
      isBlack: true,
    };
  },
  components: {
      InvitePoster,
      Errors,
      Buttons,
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

    // toggleFullScreen() {
    //   const video = this.$refs.video;
      

    //   console.log(video,'video');
    //   if (video.requestFullscreen) {
    //     video.requestFullscreen();
    //   } else if (video.webkitRequestFullscreen) {
    //     video.webkitRequestFullscreen();
    //   } else if (video.mozRequestFullScreen) {
    //     video.mozRequestFullScreen();
    //   } else if (video.msRequestFullscreen) {
    //     video.msRequestFullscreen();
    //   }
    // },
    // exitFullScreen() {
    //   if (!document.fullscreenElement) {
    //     const video = this.$refs.video;
    //     if (video.webkitExitFullscreen) {
    //       video.webkitExitFullscreen();
    //     } else if (video.mozCancelFullScreen) {
    //       video.mozCancelFullScreen();
    //     } else if (video.msExitFullscreen) {
    //       video.msExitFullscreen();
    //     }
    //   }
    // },
    showPopup() {
      this.shows = true;
      this.appear("首页>", "showText1");
          // this.appear("分论坛>", "showText2");
          this.appear("活动日程>", "showText3");
          this.appear("购票方式>", "showText4");
          this.appear("常见问题>", "showText5");
          this.appear("联系我们>", "showText6");
          // this.appear("关于 Founder", "showText7");
          this.appear("关于我们>", "showText8");
    },

    myhome(){
      window.location.href='https://www.huodongxing.com/user/regevents'
    },
    goupiao(){
      window.location.href=this.$store.state.url
    },
    chakan(){
      this.$router.push('/GuestSharing')
    },
    goTop(){
      console.log('222');
      let top = document.documentElement.scrollTop//获取点击时页面的滚动条纵坐标位置 
      const timeTop = setInterval(() => {
        document.documentElement.scrollTop = top -= 50//一次减50往上滑动
        if (top <= 0) {
          clearInterval(timeTop)
        }
      }, 5)//定时调用函数使其更顺滑
    },
    
    showExtension() {
      // 获取用户点击的位置坐标
    var posterImg=  document.querySelector(".content_container")  
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      console.log(scrollTop,'scrollTop');
      console.log(posterImg,'posterImg');
          posterImg.style.top = scrollTop+400 + "px";
        this.showPoster = true;
        const rootElement = document.documentElement;
        rootElement.style.overflow = "hidden";
        return;
      },
      hidePosters() {
        const rootElement = document.documentElement
        rootElement.style.overflow = "auto";
        this.showPoster = false;
        return;
      },
    handleCommand(command) {
      this.$message('click on item ' + command);
    },
  
    gotorouter(routers) {
      console.log(routers,'routers');
      this.$router.push(routers);

      
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

      if(scrollTop>0){
        this.isjiantou=false
      }
if(scrollTop > 300){
  if (this.agiTexts7=== "") {
  // this.appear(" Playground 概念来源 ——", "agiTexts1");
  // this.appear("在许多 AI 产品中，大家常会用 PLAYGROUND 来去指代一", "agiTexts2");
  // this.appear("个开发或体验环境，能够让开发者、申请用户进行模型的简 ", "agiTexts3");
  // this.appear("单搭建、产品功能和用户案例的体验等，比如 OpenAI . ", "agiTexts4");
  // this.appear("Playground，Cohere Playground，NVIDIA AI Play- ", "agiTexts5");
  // this.appear("ground …", "agiTexts6");
  this.appear("随着技术的不断变革，全新的 AGI 浪潮正席卷而来 ", "agiTexts7");
  this.appear("我们看到在这波浪潮中，聚集着一批属于 AGI 时代的 Doers", "agiTexts");
  this.appear("他们 —— ", "agiTexts8");
  this.appear("对 AGI 时代的新变化充满着求知和好奇 ", "agiTexts10");
  this.appear("拥有专业的垂直领域认知； ", "agiTexts11");
  this.appear(" 是一群具有 AI 原生创新思维（AI-Native）的创业者；", "agiText1");
  this.appear(" 身处于这样的技术新浪潮中", "agiText2");
  this.appear(" 不错过它的最好方式，就是亲身去体验、去探索、去沉浸其中", "agiText3");
  // this.appear("中", "agiText4");
  // this.appear(" ", "agiText5");
  // this.appear(" 不错过它的最好方式，就是亲身去体验、去探索、去沉浸其", "agiText6");
  // this.appear(" 就是亲身去体验、去探索、去沉浸其中。", "agiText7");
  this.appear(" AGI Playground ", "agiText8");
  this.appear(" 与 AGI 行动者们在这里聚集、探索和相互启发 ", "agiText9");
  // this.appear(" 让我们与 AGI 行动者们在这里聚集、探索和相互启", "agiText10");
  // this.appear(" 发。", "agiText11");

  



  
  // this.appear("explore & play. ", "agiTexts4");
  }
}
if(scrollTop > 500){
      if(this.agiTexts12==''){
            this.appear("这里有......", "agiTexts12");
            this.appear(" AGI 公开课 ", "agiTexts13");
            // this.appear("/Open Talk ", "agiTexts14");
            this.appear("看当下 AGI 领域最具公信力、话语权、前瞻性的行业领袖 ", "agiTexts15");
            this.appear("与旗帜人物从技术概念到应用落地，从技术变革到产品创", "agiTexts16");
            this.appear("新，深扒大模型技术的底层逻辑，起底新范式变革的底层", "agiTexts17");
            this.appear("思维", "agiTexts18");
            this.appear("AGI 研讨工坊", "agiTexts19");
            // this.appear("/Workshop", "agiTexts20");
            this.appear("与率先入场的技术行家、产品玩家和业务专家进行深入交", "agiTexts26");
            this.appear("流，从每个人都能用起来的产品实操，到每个组织都必须", "agiTexts21");
            this.appear("思考的业务转型，全方位把握个体与组织如何丝滑迈入 ", "agiTexts22");
            this.appear("AGI 时代的技巧与策略", "agiTexts23");
            // this.appear("全方位把握个体与组织如何丝滑迈入 AGI 时代的的技巧与", "agiTexts24");
            // this.appear("策略。", "agiTexts25");
      }

}


if(scrollTop > 800){
      if(this.agiTexts32==''){
            this.appear("AGI 创新小赛", "agiTexts32");
            // this.appear("/Demo Show", "agiTexts27");
            this.appear("与投资人、大模型技术专家和产品行家一起，看优秀早期大", "agiTexts28");
            this.appear("模型团队的创新路演，让思想得到更新和打磨，为创新带来", "agiTexts29");
            this.appear("丰富灵感", "agiTexts30");
            // this.appear("实可行的灵感。", "agiTexts31");
            // this.appear("1份", "agiTexts33");
            this.appear("AGI 创新力量全景图", "agiTexts34");
            this.appear("Founder Park 与一线投资人、技术专家联合研究，现场发", "agiTexts35");
            this.appear("布完整版 AGI 创新力量全景图，描绘产业全貌，帮助创新", "agiTexts36");
            this.appear("者看到更多创新机遇", "agiTexts37");
            // this.appear("实可行的灵感。", "agiTexts38");

            // this.appear("除此以外，现场还有 ", "agiTexts39");

            // this.appear("AGI 体验区 ", "agiTexts40");
            // this.appear("/Play Zone", "agiTexts41");
            // this.appear("全天候展示模型平台和技术解决方案，直接上手最新创新产", "agiTexts42");
            // this.appear("品和工具，", "agiTexts43");
            // this.appear("在这里，你可以和来自各领域的创新者们自由交流，", "agiTexts44");
            // this.appear("结识更多志同道合之人，遇到有影响力的合作伙伴。", "agiTexts45");


   
            
      }

}

      if (scrollTop > 300) {
        this.BoxFixed = true;

        clearInterval(this.Subforumtimess)
      //  this.Subforumtimess = window.setTimeout(()=>{
      //   this.Intervaltimes =  window.setInterval(() => {
      //       console.log(this.Subforumtimess,'Subforumtimess');
      //        this.nav_title_sapn_flag = !this.nav_title_sapn_flag;
      //    }, 500);
      //   },1000)
        if (this.showText1 === "") {
          this.appear("首页>", "showText1");
          // this.appear("分论坛>", "showText2");
          this.appear("活动日程>", "showText3");
          this.appear("购票方式>", "showText4");
          this.appear("常见问题>", "showText5");
          this.appear("联系我们>", "showText6");
          // this.appear("关于 Founder", "showText7");
          this.appear("关于我们>", "showText8");
        clearInterval(this.Subforumtimess2)
        this.Subforumtimess2 = window.setTimeout(()=>{
          this.Intervaltimes2 =  window.setInterval(() => {
              console.log(this.Subforumtimess2,'Subforumtimess');
              this.Subforum1 = !this.Subforum1;
          }, 500);
        },1000)
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

      // let top = document.documentElement.scrollTop//获取点击时页面的滚动条纵坐标位置 
      const timeTops = setTimeout(() => {

          const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          console.log('scrollTop',scrollTop);
        // document.documentElement.scrollTop = top -= 50//一次减50往上滑动
        if (scrollTop <= 0) {
          // clearInterval(timeTop)
          this.isjiantou=true
        }
      }, 2000)//定时调用函数使其更顺滑
    // document.addEventListener("fullscreenchange", this.exitFullScreen);
    // document.addEventListener("webkitfullscreenchange", this.exitFullScreen);
    // document.addEventListenebeforeDestroyr("mozfullscreenchange", this.exitFullScreen);
    // document.addEventListener("MSFullscreenChange", this.exitFullScreen);
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
    window.clearInterval(this.Intervaltimes2); //关闭

    window.clearInterval(this.Subforumtimess2); //关闭

    if(this.timess){
      window.clearInterval(this.timess); //关闭
      window.clearInterval(this.Intervaltimes); //关闭
      this.timess=null

    }
  },
  beforeDestroy(){
    // document.removeEventListener("fullscreenchange", this.exitFullScreen);
    // document.removeEventListener("webkitfullscreenchange", this.exitFullScreen);
    // document.removeEventListener("mozfullscreenchange", this.exitFullScreen);
    // document.removeEventListener("MSFullscreenChange", this.exitFullScreen);
    console.log(this.timess,'beforeDestroy');
    if(this.timess){
      window.clearInterval(this.timess); //关闭
      window.clearInterval(this.Intervaltimes); //关闭
      this.timess=null

    }

  },
  beforeRouteEnter(to,from,next){
  console.log('beforeRouteEnter');
  // window.document.body.style.background='#D3FF19'
       const LinnerWidth=window.innerWidth
        const big_box =document.querySelector('.box_bigbox')
      console.log(window.innerWidth,'window.innerWidth');
      if(LinnerWidth>768){
         console.log(big_box,'big_box');
        //  big_box.style.display='none'
          console.log('请使用手机查看网站');
        //  alert('请使用手机访问网站')
         next('/desktop')
     }else{
      next()
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

.heart{
    animation: heart 1.3s ease-in-out 0.7s infinite alternate;
    position: fixed;
    font-size: 6vw;
    left: 44%;
    width: 12%;
    // background: red;
    bottom: 6%;
    img{
      width: 100%;
      display: block;
    }
    // transform: rotate(90deg);
}

//margin-top会发生卡顿
@keyframes heart{
from{margin-top:0px;}
to{margin-top:-6px;}
}

//用transform就流畅了
@keyframes heart{
from{transform:translate(0,0)}
to{transform:translate(0,6px)}
}


.style_Box_home{
  display: flex;
  height: 17vw;
  width: 12%;
}
.blockStyle2_home{
  height: 100%;
    background: white;
    width: 75%;
}
.blockStyle1_home{
  height: 100%;
  background: black;
  width: 25%;

}
.nav_title{
  color: white;
    font-size: 4vw;
    display: flex;
    align-items: center;
    font-family:'OPPOSans_B' ;
    margin-left: 2%;
    width: 90%;
    span{
     width: 10px;
    display: block;
    height: 10px;
    background: white;
    margin-left: 10px;
    text-align: center;
    }
}
.button_nav {
  background: #1E1E1E;
    padding: 25% 4%;
  h1{
    margin-top: 1%;
  }
}
.Sponsor{
  background: #FFFFFF;
    text-align: left;
    padding: 5% 3%;
    div{
      margin-top: 5%;
      font-size: 5vw;
    
    }
}


.button_navs_top{
  padding-left:5%;
  margin-top: 15%;
  h1{
    margin-top: 1%;
    font-size: 13vw;
  }
}
  .aig_show_btn{
    margin-top: 30%;
    margin-bottom: 40%;
  }
.aig_show_btnck{
  text-align: center;
  color: black;
  background: #FFFFFF;
  width: 98%;
  font-size: 13vw
}

  .style_Boxs{
  display: flex;
  position: absolute;
    left: 6%;
    bottom: 0;
    height: 70px;
    // left: 40%;
}

  .footer_img{
    // margin-top: 60%;
  }
.warp_box{
  height: 2000px;
}
.agiText{
  // background: red;
    position: absolute;
  // bottom: 10%;
    position: absolute;
    backdrop-filter: blur(160px);
    padding: 10% 0;
    width: 92%;
    top: 100%;
    margin-left: 4%;
  h3{
    color: #FFFFFF;
    width: fit-content;
    background: black;
    font-size: 3.3vw;
    font-family: 'OPPOSans_R';

  }
}
  .guest{
    width: 100%;
      /* height: 100%; */
      /* background: red; */
      position: absolute;
      color: white;
      top: 100%;
    
  }
  .blockStyle1{
    background: black;
  }
  .SubForum_Text_style{
    // margin-left: 3%;
    margin-top: 1%;

  }
  .SubForum_Text_style>h1{
    width: fit-content;
        background: black;
        font-family: 'OPPOSans_R';
        font-size: 13vw;
  }
  .guest>h1{
        width: fit-content;
        background: black;
        // font-family: 'OPPOSans_L';
        margin-top: 2%;
        font-size: 13vw;
        margin-left: 3%;
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
      background: rgba(24, 24, 24 , 0.4);
      // opacity: 0.6;
      // background-image: url('../assets/beijing.png');
      padding: 10px;
      .fixde_AGI{
        display: flex;
        width: 96%;
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
    display: none;
  }
  .guest_item img{
    // width: 100%;
  
  }
  .warp_bottom_img{
    // display: flex;
    // /* background: #000; */
    // position: relative;
    // bottom: 31%;
    // align-items: center;
    // justify-content: flex-end;
    // width: 100%;
 
  }
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
  .warp_bottom_img .img_logo img{
     width: 100%;
    //  background: white;
  }


  .warp_bottom_img>.img_logo{
    margin-right: 32%;
    width: 62%;
    display: flex;
    /* background: #000; */
    position: absolute;
    align-items: center;
    justify-content: flex-end;
    top: 63%;
    left: 4%;
    
  }
  .warp_bottom_img>.img_address{
    width: 48%;
  }
  
  
    .img_logo_two{
      width: 60%;
      position: absolute;
        top: 77%;
        color: white;
        left: 4%;
        p{
          font-family: 'OPPOSans_B';
        }
      img{
        width: 100%;
      }
    }
  *{
    margin: 0;
    padding: 0;
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
      left: 4%;
      h1{
        font-size: 19vw;
        color: white;
        width: -moz-fit-content;
        width: fit-content;
        background: black;
        margin-top: 1%;
        margin-bottom: 1%;
        font-family: 'OPPOSans_B';
        line-height: 17.3vw;
      }
  }

  .el-dropdown-link {
    cursor: pointer;
  }
 /deep/.el-dropdown-menu{
      width: 16% !important;
      text-align: center!important;
}
// .el-dropdown::v-deep{
//   span{
//     i{
//       font-size: 5vw  !important;
//     }
//   }
// }
/deep/.el-icon-s-unfold{
  font-size: 5vw  !important;
}
/deep/.van-popup__close-icon{
    font-size:60px !important;
}
/deep/.van-popup__close-icon{
font-size: 60px!important;
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

// .mengceng{
//    top: -63%;
//     position: relative;
//     height: 1000px;
//     background: rgba(24, 24, 24, 0.5);
//     z-index: 9;
//     width: 92%;
//     margin: 0 auto;
// }
  .videobottom{
    // background: red;
    // position: fixed;
    // z-index: 999999;
    width: 100%;
    text-align: center;
    position: absolute;
    top: 130%;
    margin-top: 20%;

    .videoStyle{
      width: 92%;
      background: black;
      height: 600px;
    }
  }
   .hidePoster {
     position: fixed;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     z-index: 998;
     background: rgba(0, 0, 0, 0.6);
   }
   .agi_shwo{
    margin-left: 4%;
    margin-right: 4%;
    margin-top: 30%;
   }


   .agi_shwo_item{
      margin-top: 30%;
      // padding-right: 2%;

    h2{
      display: flex;
      font-size: 9vw;
      color: #D3FF19;
      background: black;
      width: fit-content;
    }
    // h2:nth-child(1){
    //   margin-top: 10%;
    // }
    p{
      display: flex;
      font-size: 3.5vw;
      color: white;
      background: black;
      width: fit-content;
      text-align: left;
    }
    .agi_shwo_item_img{
      display: flex;
      margin-top: 5%;
      justify-content: space-between;
      margin-bottom: 5%;
      width: 98%;
      img{
        width: 49%;
      }
    }
   }

//    .agi_shwo .agi_shwo_item:nth-child(1){
//   margin-top: 15% !important;
// }
 
  </style>