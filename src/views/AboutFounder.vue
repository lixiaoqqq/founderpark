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


        <div style="
                font-size: 3.8vw;
                margin: 5% 0px;
            ">
            <span>Founder Park 是极客公园孵化的科技创业者社区，面向 AGI 时代里的优秀创业者，推动创新产品的诞生。通过对优秀创业者的筛选、运营和服务（知识服务、创新服务、投融资服务），促进优秀创业者之间的深度联结、认知流动和共同成长</span>
            <br>
            <br>
            <br>
            <p>—— Founders Backing Founders。</p>
        </div>


        <div class="shequ">
            <p>AGI社区</p>
            <span>
                于 2023 年 3 月成立，我们通过高质量的认知分享和主题活动，集聚了超 3000 位致力在大模型相关领域创业的创业者、产品经理、研发工程师、对大模型技术和场景应用开发进展感兴趣的学者及投资人。群内会定期举办线上产品分享研讨会、组织跨群的资源交流和 AGI 国内活动信息交换。
            </span>
        </div>

        <div class="shequ">
            <p>前沿社</p>
            <span>
                由极客公园于 2017 年发起成立的优秀科技企业家社区，聚集了 40 余位优秀的新生代创业者和商业领袖，80% 为公司 B 轮以上及 IPO 阶段，平均年龄 40 岁左右。每月前沿社都将组织闭⻔学习交流活动，深度探讨技术前沿趋势、商业组织成长的方法论，追求以最有效率的学习和沟通机制，帮助企业家自我提升、刷新认知。
            </span>
        </div>

        <div class="shequ">
            <p>Global Ready 社区</p>
            <span>
                一个面向全球化发展的创业者社区，通过创业者实战分享、互动讨论、沉浸式实地考察，在全球范围内建立优秀创业者、投资人以及行业专家的网络节点，帮助创业者在全球市场更高效率地创造价值。
            </span>
        </div>
        <br>
      </div>

  
    <br>
  
      <div class="SubForum_Text">
            <h1 @click="gotoroute('/')">{{ agiTexts1 }}</h1>
                <h1  @click="gotoroute('/GuestSharing')">{{ agiTexts2 }}</h1>
                <h1  @click="gotoroute('/ticketingMethod')"  >{{ agiTexts3 }}</h1>
                <h1  @click="gotoroute('/commonProblem')">{{ agiTexts4 }}</h1>
                <h1  @click="gotoroute('/contactUs')">{{ agiTexts5 }}</h1>
                <h1 style="color: #595757;" >{{ agiTexts6 }}</h1>
                <div class="SubForum_Text_style">
                                <h1 style="color: #595757;" >{{ agiTexts7 }}</h1>
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
        <img src="../assets/foter.png" alt="">
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
      this.appear("关于 Founder", "SubforumText");
      this.appear("Park：", "SubforumText1");
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
      window.document.body.style.background='#00FFCE'
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
  }
      next()
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
    </style>