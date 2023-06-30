<template>
  <div>
    <div class="navtop_item">
      <Dialog />
    </div>
   <div class="subform_maim">
    <div class="toptext">

      <div class="SubForum_Text_style">
                              <h1>{{ SubforumText }}</h1>
                               <div v-if="Subforum1" class="style_Box1">
                             <div class="blockStyle3" ></div>
                            <div class="blockStyle4" ></div>
                        </div>  
            </div>
       
    </div>

<br><br><br>
    <h2>加入 AGI 交流群</h2>
    <div class="Nopublic">
           <div class="nopublic_img">
                <img src="../assets/erweima.png" alt="">
            </div>
           <div class="nopublic_text">
              <p style="">扫码添加小助手入群</p>
              <p style="">获取大会筹备「小道消息」</p>
              <p style="">探讨大模型最新资讯</p>

              <!-- <div class="nopublic_text_bon">
                <span >微信扫码添加小助手，</span>
                 <span>加入活动官方群</span>
              </div> -->
              
          </div>
    </div>

    <br>
    <br>
    <div class="office_hour">
      <h2>关注 Founder Park 公众号</h2>
  </div>
  <div class="Nopublic">
            <div class="nopublic_img">
                <img src="../assets/ZVWsxT.png" alt="">
            </div>
            <div class="nopublic_text">
              <p style=" margin-bottom: 2%;">扫码关注公众号</p>
              <p style=" margin-bottom: 2%;">紧跟大模型时代浪潮</p>
              <p style=" margin-bottom: 2%;">不错过任何最新内容</p>
              <!-- <p style="margin-top: 10%;font-size: 3vw;">微信扫码关注公众号</p> -->
          </div>
    </div>
    <br>
    <br>   <br>
    <br>

    <h2 >更多合作</h2>
    <p style="font-size: 6.4vw;width: 70%;">商务、媒体、活动咨询请发送至邮箱： </p>
<br>
    <p style="
    font-size: 4vw;
">founderpark@geekpark.net</p>

    <br>
    <br>
    <br>
  
    <div>
  
    </div>
    <div class="SubForum_Text">
          <h1 @click="gotoroute('/')">{{ agiTexts1 }}</h1>
              <h1 @click="gotoroute('/GuestSharing')">{{ agiTexts2 }}</h1>
              <h1  @click="gotoroute('/TicketingMethod')">{{ agiTexts3 }}</h1>
              <h1 @click="gotoroute('/CommonProblem')">{{ agiTexts4 }}</h1>
              <h1 style="color: #595757;">{{ agiTexts5 }}</h1>
              <h1  @click="gotoroute('/AboutFounder')">{{ agiTexts6 }}</h1>
              <div class="SubForum_Text_style">
                              <h1  @click="gotoroute('/AboutFounder')">{{ agiTexts7 }}</h1>
                               <div v-if="Subforum1" class="style_Box1">
                             <div class="blockStyle3" ></div>
                            <div class="blockStyle4" ></div>
                        </div>  
            </div>
    </div>
    <br>
    <br>
    <br>    <br>
    <br>
    <br>
    <br>
   </div>
   <div class="footer_img">
   <img src="../assets/footerimg2222.png" alt="">
     </div>
  </div>
  </template>
  
  <script>
  import Dialog from "../components/Navtop.vue";
  // import BufferAnimation from 'vue-scroll-buffer'
  
  export default {
    components: {
    Dialog,
  },
  data(){
  return{
    Subforumtimess:null,
    Subforum:true,
    SubforumText:'',
    Subforum1:false,
          agiTexts1: "",    // agiTexts1
        agiTexts2: "",    // agiTexts2
        agiTexts3: "",    // agiTexts3
        agiTexts4: "",    // agiTexts4
        agiTexts5: "",    // agiTexts5
        agiTexts6: "",    // agiTexts6
        agiTexts7: "",    // agiTexts7
  }
  },
  methods:{
    gotoroute(pathname){
      this.$router.push(pathname)
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
        console.log(scrollTop,'scrollTop');
        if(scrollTop > 400){
          if (this.agiTexts1 === "") {
            this.appear("首页>", "agiTexts1");
            this.appear("活动日程>", "agiTexts2");
            this.appear("购票方式>", "agiTexts3");
            this.appear("常见问题> ", "agiTexts4");
            this.appear("联系我们> ", "agiTexts5");
            // this.appear("关于 Founder  ", "agiTexts6");
            this.appear("关于我们>", "agiTexts7");
          }
        }
   },
  
  },
  mounted(){
    window.addEventListener('scroll', this.handleScroll, true);
    this.appear("联系我们", "SubforumText");
    // clearInterval(this.Subforumtimess)
    //    this.Subforumtimess = window.setTimeout(()=>{
    //     this.Intervaltimes =  window.setInterval(() => {
    //         console.log(this.Subforumtimess,'Subforumtimess');
    //          this.Subforum = !this.Subforum;
    //      }, 500);
    //     },1000)


    clearInterval(this.Subforumtimess2)
        this.Subforumtimess2 = window.setTimeout(()=>{
          this.Intervaltimes2 =  window.setInterval(() => {
              console.log(this.Subforumtimess2,'Subforumtimess');
              this.Subforum1 = !this.Subforum1;
          }, 500);
        },1000)
  },
  beforeRouteEnter(to,from,next){
    console.log('beforeRouteEnter');
    window.document.body.style.background='#D9DADA'
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
  beforeRouteLeave(to,from,next){
    console.log('beforeRouteLeave');
    window.document.body.style.background=''
    next()
  },
  beforeDestroy(){
    window.addEventListener('scroll', this.handleScroll);
      console.log(this.Subforumtimess,'beforeDestroy');
      if(this.Subforumtimess){
        window.clearInterval(this.Subforumtimess); //关闭
        window.clearInterval(this.Intervaltimes); //关闭
        this.Subforumtimess=null
      }
    },
  }
  </script>
  
  <style lang="scss" scoped>
.SubForum_Text{
  margin-top: 10%;
  margin-bottom: 10%;
}

.blockStyle3 {
  height: 84%;
}
.nopublic_text_bon{
  display: flex;
    flex-direction: column;
    font-size: 3vw;
    margin-top: 44%;
}
  .jointheCommunity{
    width: 100%;
    display: flex;
    // align-items: center;
    img{
      width: 90%;
    }
    .jointheCommunity_P{
      margin-top: 30%;
    }
    .jointheCommunity_scan{
      font-size: 7vw;
    }
  }
  .Nopublic{
    display: flex;
    width: 100%;
    // margin-top: 30px;
    margin-top: 10%;
    justify-content:space-evenly;
    align-items: center;
    .nopublic_img{
      width: 50%;
      img{
        width: 100%;
      }
    }
    .nopublic_text{
      margin-left: 20px;
      width: 46%;
      p{
      font-size: 3.5vw;
      }
    }
  }
  .private_directors{
    img{
      width: 96%;
      background: red;
    }
  }
  .subform_maim{
    width: 96%;
      margin-left: auto;
      margin-top: 20%;
  }
  .ul_list{
    white-space: normal;
    word-break: break-word;
    width: 95%;
    margin-left: auto;
  
  
    li{
      width: 96%;
    }
  }
h2{
font-size: 9vw;
font-weight: 400;
}

  .office_hour{
    h2{
      width: 91%;
      // font-size: 13vw;
    }
  }
  .office_hours{
    h1{
      font-size: 4vw;
    }
  }
  .office_img{
    display: flex;
    justify-content: space-around;
    width: 98%;
    
    align-items: center;
    img{
      width: 46%;
      margin-top: 30px;
    }
  }
  .ticket_sales{
    display: flex;
    align-items: center;
    justify-content: space-around;
    .ticket_sales_Txte{
      display: flex;
      flex-direction: column;
    }
    .ticket_sales_button{
      background: white;
      padding: 8px;
    }
  }

  </style>