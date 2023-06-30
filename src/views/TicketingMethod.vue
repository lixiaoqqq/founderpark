<template>
  <div>
    <div class="navtop_item">
      <Dialog />
    </div>
   <div class="subform_maim">
    <div class="toptext">
      <div class="toptext_left">
        <!-- <h1>{{ SubforumText }}</h1>  -->
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
      <div class="method">
        <div class="private_directors">
       <img src="../assets/7.22zao1.png" alt="">
    </div>

    <div     class="rotate"></div>
    <div class="price_item">
      
      <div class="price_item_left">
    
        <p>¥399</p>


        <span>¥499</span>
        
      </div >
        <div class="price_item_right">
          <!-- <p>7 月 22 日 单日票</p> -->
          <p>7 月 10 日 恢复原价</p>
        </div>
    </div>
    <div class="ticket_sales">
            <!-- <div class="ticket_sales_Txte">
                  <span>票品售出，除因不可抗力因素导致大</span>
                  <span>会延期或取消，其他不支持退改</span>
            </div> -->
            <!-- <div class="ticket_sales_button"> 
              <div> 立即购票</div>
            </div> -->
            <!-- <TicketButton/> -->

            </div>
    </div>
    <div class="method">
        <div class="private_directors">
          <img src="../assets/7.22早2.png" alt="">

    </div>
    <div 
    class="rotate"
   ></div>
    <div class="price_item">
      
      <div class="price_item_left">
    
        <p>¥399</p>


        <span>¥499</span>
        
      </div >
        <div class="price_item_right">
          <!-- <p>7 月 23 日 单日票</p> -->
          <p>7 月 10 日 恢复原价</p>
        </div>
    </div>
    <div class="ticket_sales">
            <!-- <div class="ticket_sales_Txte">
                  <span>票品售出，除因不可抗力因素导致大</span>
                  <span>会延期或取消，其他不支持退改</span>
            </div> -->
            <!-- <div class="ticket_sales_button"> 
              <div> 立即购票</div>
            </div> -->
            <!-- <TicketButton/> -->

            </div>
    </div>
    <div class="method">
        <div class="private_directors">
          <img src="../assets/7.22早3.png" alt="">


    </div>

    <div
    class="rotate"
    style=""></div>
    <div class="price_item">
      
      <div class="price_item_left">
    
        <p>¥549</p>


        <span>¥799</span>
        
      </div >
        <div class="price_item_right">
          <!-- <p>两日通享票</p> -->
          <p>7 月 10 日 恢复原价</p>
        </div>
    </div>
    <div class="ticket_sales">
            <!-- <div class="ticket_sales_Txte">
                  <span>票品售出，除因不可抗力因素导致大</span>
                  <span>会延期或取消，其他不支持退改</span>
            </div> -->
            <!-- <div class="ticket_sales_button"> 
              <div> 立即购票</div>
            </div> -->
            <TicketButton/>
            </div>
    </div>
  <br>

    <div class="SubForum_Text">
          <h1 @click="gotoroute('/')">{{ agiTexts1 }}</h1>
              <h1  @click="gotoroute('/GuestSharing')">{{ agiTexts2 }}</h1>
              <h1 style="color: #595757;">{{ agiTexts3 }}</h1>
              <h1  @click="gotoroute('/commonProblem')">{{ agiTexts4 }}</h1>
              <h1  @click="gotoroute('/contactUs')">{{ agiTexts5 }}</h1>
              <h1  @click="gotoroute('/aboutFounder')">{{ agiTexts6 }}</h1>
              <div class="SubForum_Text_style">
                              <h1  @click="gotoroute('/aboutFounder')">{{ agiTexts7 }}</h1>
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
        <img src="../assets/footerimg2222.png" alt="">
     </div>
  </div>
  </template>
  <script>
  import Dialog from "../components/Navtop.vue";
  import TicketButton from "../components/Buynow.vue";
  export default {
    components: {
    Dialog,
    TicketButton,
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
      if(scrollTop > 600){
        if (this.agiTexts1 === "") {
        this.appear("首页>", "agiTexts1");
        this.appear("活动日程>", "agiTexts2");
        this.appear("购票方式>", "agiTexts3");
        this.appear("常见问题> ", "agiTexts4");
        this.appear("联系我们> ", "agiTexts5");
        // this.appear("关于 Founder  ", "agiTexts6");
        this.appear("关于我们>", "agiTexts7");


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
    // this.appear("购票信息 &  :", "SubforumText");
    this.appear("购票方式", "SubforumText1");
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
    window.document.body.style.background='rgb(159,203,255)'
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
  
  .subform_main_h1{
    h1{
      font-size: 11vw;
    }
  }
.ticket_sales_button{
  margin-top: 10%;
}
  .blockStyle3{
    height: 84%;
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

  

  .private_directors{
    margin-top: 5%;
  }
.ticket_sales_Txte{
  font-size: 3.5vw;
  width: 98%;
  color: #fff;
  margin: 5% 0px;
}

  .toptext{
     display: flex;
     flex-direction: column;
      margin-left: auto;
      margin-top: 30px;
      .toptext_left{
        display: flex;
      }
      .toptext_right{
        display: flex;
        // margin-top: 13px
      }
    h1{
      background: black;
      color: white;
      font-size: 12vw;
      width: fit-content;
      // width: max-content;
    }
  }
  .office_hour{
    h1{
      font-size: 11vw;
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

  .price_item{
    width: 96%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3%;
    .price_item_left{
      display: flex;
      p{
        font-size: 10vw;
      }
      div{
        width: 5%;
        height: 1px;
        border-top: 1px solid;
        transform: rotate(60deg);
        position: relative;
        top: 10px;
        color: red;
        left: 3%;
      }
      p{
        font-family: 'OPPOSans_B';
      }
      span{
        color: #595757;
        font-size: 6vw;

      }
    }
    .price_item_right{
      text-align: right;
    }
  }

  // .SubForum_Text{
  //   h1{
  //     font-size: 11vw;
  //   background: black;
  //   color: white;
  //   width: fit-content;
  //   margin-top: 3%;
  //   }
  // }


  .rotate{
    width: 60px;
    height: 1px;
    border-top: 3px solid;
    transform: rotate(15deg);
    position: relative;
    top: 30px;
    color: #E60012;
    left: 27%;
    z-index: -9;

  }
  .price_item_left span{
    font-family: 'OPPOSans_B';
  }
  </style>