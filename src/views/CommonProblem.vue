<template>
    <div>
      <div class="navtop_item">
        <Dialog />
      </div>
     <div class="subform_maim">
      <div class="toptext">
        <div class="toptext_left">
          <h1>{{ SubforumText }}</h1> 
        </div>
        <div class="toptext_right">
        <h1>{{ SubforumText1 }}</h1> 
        <div v-if="Subforum" class="style_Box">
           <div class="blockStyle1" ></div>
          <div class="blockSztyle2" ></div>
        </div> 
        </div>
        <br>
      </div>


        <div class="title_item">
            <div class="title">关于购票</div>
            <div class="duihua_item">
                <p>Q：购票什么时间截止？</p>
                <span>A：根据票面可用日期，大会购票于 2023年7月22日-2023年7月23日陆续截止。</span>
                <p>Q：可以换票或者退票吗？</p>
                <span>A：票品一经售出，除因不可抗力因素导致本次大会取消或延期，其它订单不支持无理由退换，请在购买时务必仔细核对订单信息。</span>

                <p>Q：在活动行上购票付款成功后，如何获得参会凭证？</p>
                <span>A：付款成功后，可在活动行页面，点击【我的】-【我的票券】-【待参加】中查看票券二维码，此二维码即为参会凭证。</span>
            </div>
        </div>

        
        <div class="title_item">
            <div class="title">关于入场</div>
            <div class="duihua_item">
                <p>Q：现场如何签到？</p>
                <span>A：票面可用日期当天，在活动现场凭购票后的票券二维码于签到处签到，并领取入场凭证。</span>

                <p>Q：离场后还可以再入场吗？</p>
                <span>A：当天离场后可以凭入场凭证再次入场。购买两日票的用户，请妥善保存入场凭证，大会持续两日期间，可凭该入场凭证再次入场。</span>

                <p>Q：会议现场是否需要对号入座? 会议中途离开，座位是否保留？</p>
                <span>A：购票用户可按照现场指引在指定区域就坐，不确保坐席，如您中途离开会场，不确保继续有座位。</span>
            </div>
        </div>

        
        <div class="title_item">
            <div class="title">关于大会现场</div>
            <div class="duihua_item">
                <p>Q：大会每日的时间安排是怎样的？</p>
                <div class="duihua_item_child"> 
                    <p>A：</p>
                    <p>场地名称：751D Park 传导空间</p>
                    <p>场地地址：北京市朝阳区北京时尚设计广场 A19</p>
                    <p>自驾：751 D·Park 北京时尚设计广场内有停车位，院内停</p>
                    <p>车位置有限，建议您尽量乘坐公共交通出行。</p>
                    <p>地铁：可乘坐 14 号线至望京南站，从 B1 口出站后，乘坐 </p>
                    <p>403 路公交车至北京电机总厂，下车步行 10 分钟左右即</p>
                    <p>可到达。</p>
                    <p>公交车：乘坐 403 路、629 路至北京电机总厂站下车步行 </p>
                    <p>10 分钟左右到达；或乘坐 909 路、688 路、955 路、418 </p>
                    <p>路、946 路、402 路至彩虹路站，下车步行 800 米左右</p>
                    <p>到达。</p>
                </div>
                <p>Q：大会场馆附近有就餐的地方吗？</p>
                <span>
                  A：附近有诸多中餐厅、西餐厅、港式餐厅等，价位不等，有多样选择。
                </span>
            </div>
        </div>

        
       
    <br>  
  
      <div class="SubForum_Text">
            <h1 @click="gotoroute('/')">{{ agiTexts1 }}</h1>
                <h1  @click="gotoroute('/GuestSharing')">{{ agiTexts2 }}</h1>
                <h1 @click="gotoroute('/ticketingMethod')">{{ agiTexts3 }}</h1>
                <h1 style="color: #595757;" >{{ agiTexts4 }}</h1>
                <h1  @click="gotoroute('/contactUs')">{{ agiTexts5 }}</h1>
                <h1 @click="gotoroute('/aboutFounder')">{{ agiTexts6 }}</h1>
                <div class="SubForum_Text_style">
                                <h1 @click="gotoroute('/aboutFounder')" >{{ agiTexts7 }}</h1>
                                 <div v-if="Subforum1" class="style_Box1">
                               <div class="blockStyle3" ></div>
                              <div class="blockStyle4" ></div>
                          </div>  
              </div>
      </div>
      <br>
      <br>
      <br>
      <br>
      <br>
  
      <div>
  
    
      </div>
      <div>
    
      </div>
     </div>
     <div class="footer_img">
      <img src="../assets/footerimg.png" alt="">
    </div>
    </div>
    
    </template>
  
    <script>
    import Dialog from "../components/Navtop.vue";
    export default {
      components: {
      Dialog,
    },
    data(){
    return{
      Subforumtimess:null,
      Subforum1:false,
      Subforum:false,
      SubforumText:'',
      SubforumText1:'',
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
        if(scrollTop > 678){
          if (this.agiTexts1 === "") {
          this.appear("首页>", "agiTexts1");
          this.appear("嘉宾 & 日程>", "agiTexts2");
          this.appear("购票方式>", "agiTexts3");
          this.appear("常见问题> ", "agiTexts4");
          this.appear("联系我们> ", "agiTexts5");
          this.appear("关于 Founder  ", "agiTexts6");
          this.appear("Park>", "agiTexts7");
  
  
          clearInterval(this.Subforumtimess2)
          this.Subforumtimess2 = window.setTimeout(()=>{
            this.Intervaltimes2 =  window.setInterval(() => {
                console.log(this.Subforumtimess2,'Subforumtimess');
                this.Subforum1 = !this.Subforum1;
            }, 500);
          },1000)
          }
  
  
        }
   },
    },
    mounted(){
      window.addEventListener('scroll', this.handleScroll, true);
      // this.appear("常见问题", "SubforumText");
      this.appear("常见问题", "SubforumText1");
      clearInterval(this.Subforumtimess)
         this.Subforumtimess = window.setTimeout(()=>{
          this.Intervaltimes =  window.setInterval(() => {
              console.log(this.Subforumtimess,'Subforumtimess');
               this.Subforum = !this.Subforum;
           }, 500);
          },1000)
    },
    beforeRouteEnter(to,from,next){
      console.log('beforeRouteEnter');
      window.document.body.style.background='#D3FF19'
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
         next('/404')
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
    
 
  
    .subform_maim{
        margin-top: 20%;
    }
    .shequ{
        // margin: 10% 0px;
        p{
            font-size: 12vw;
            margin: 5% 0px;
            font-family: 'OPPOSans_B';
        }
        span{
            font-size: 4.3vw;
        }
    }

    .blockStyle3{
        height: 84%;
    }

    .title_item{
      width: 98%;
      padding-left: 2%;
      margin-top: 10%;
      .title{
        font-size: 8vw;
        background: rgba(245, 245, 245, 0.5);
        // font-family: 'OPPOSans_B';
       
      }
      .duihua_item{
          >p{
            font-family: 'OPPOSans_B';
            font-size: 3.8vw;
            margin-top: 5%;
          }
          >span{
            font-size: 3.8vw;

          }
          .duihua_item_child{
            p{
              font-size: 3.8vw;
            }
          }
        }

    }

    .SubForum_Text{
      margin-top: 25%;
    }
    </style>