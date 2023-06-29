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

      <span style="margin-top: 5%;">活动更新中,实际以现场为准</span>

    </div>  


        <div class="guestlist">
            <div class="timeTab">
                <div @click="tabclick(index)" :class="curindex==index?'actives':''"  v-for="(item,index) in guestlist" :key="index">
              
                  <div>
                    {{ item.datatime }}
                  </div>
                  <div style="
                      font-size: 6vw;
                  ">{{item.weeks}}</div>
                  
                
                
                </div>
            </div>

            <transition mode="out-in">
            <component :is="currentView"></component>
           </transition>
        </div>

        <!-- <div style="
    padding: 0 2%;
" class="SubForum_Text_style">
        <h1>{{ showText8 }}</h1>
               <div v-if="Subforum1" class="style_Box1">
              <div class="blockStyle3" ></div>
             <div class="blockStyle4" ></div>
            </div>  
        </div> -->

        <div class="Face_Design">
              <!-- <img src="../assets/with.png" alt=""> -->
              <!-- <p>票品售出，除因不可抗力因素导致大会延期或取消，其他不支持退改</p> -->

              
              <div @click="goupiao" class="aig_show_btngp">
                   立即购票>
              </div>
        </div>

    <br>
    <br>   <br>
    <br>

    <br>
    <div class="SubForum_Text">
          <h1 @click="gotoroute('/')">{{ agiTexts1 }}</h1>
              <h1 style="color:#595757 ;">{{ agiTexts2 }}</h1>
              <h1 @click="gotoroute('/ticketingMethod')">{{ agiTexts3 }}</h1>
              <h1 @click="gotoroute('/commonProblem')"> {{ agiTexts4 }}</h1>
              <h1 @click="gotoroute('/contactUs')">{{ agiTexts5 }}</h1>
              <h1 @click="gotoroute('/aboutFounder')">{{ agiTexts6 }}</h1>
              <div class="SubForum_Text_style">
                              <h1 @click="gotoroute('/aboutFounder')">{{ agiTexts7 }}</h1>
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
  import Tab1 from "../components/Tabbranner1.vue";
  import Tab2 from "../components/Tabbranner_two.vue";
  export default {
    components: {
    Dialog,
    Tab1,
    Tab2
  },
  data(){
  return{
    Subforumtimess:null,
    active: 2,
    Subforum1:false,
    showText8:'',
    curindex:'0',
    currentView:"Tab1",
    guestlist:[
      {
          datatime:"07/22",
          weeks:"（六）",
          children:[
            {
              titlename:'Open Talk',
              childrenlist:[
                {
                  times:'10:00-10:20AM',
                  name:'李志飞'
                },
                {
                  times:'10:00-10:20AM',
                  name:'李志飞'
                },
                {
                  times:'10:00-10:20AM',
                  name:'李志飞'
                }
              ]
            },
            {
              titlename:'Workshop A',
              childrenlist:[
                {
                  times:'13:00-14:30AM',
                  name:'李志飞'
                },
                {
                  times:'13:00-14:30AM',
                  name:'李志飞'
                },
                {
                  times:'13:00-14:30AM',
                  name:'李志飞'
                }
              ]
            },

          ]
      },
      {
          datatime:"07/23",
          weeks:"（日）",

          children:[
            {
              titlename:'Open Talk',
              childrenlist:[
                {
                  times:'10:00-10:20AM',
                  name:'李志飞'
                },
                {
                  times:'10:00-10:20AM',
                  name:'李志飞'
                },
                {
                  times:'10:00-10:20AM',
                  name:'李志飞'
                }
              ]
            },
            {
              titlename:'Workshop A',
              childrenlist:[
                {
                  times:'13:00-14:30AM',
                  name:'李志飞'
                },
                {
                  times:'13:00-14:30AM',
                  name:'李志飞'
                },
                {
                  times:'13:00-14:30AM',
                  name:'李志飞'
                }
              ]
            },

          ]
      }
    ],
    Subforum:false,
    SubforumText:'',
    SubforumText1:'',
    // SubforumText3:'',
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
    goupiao(){
      window.location.href=this.$store.state.url
    },
    gotoroute(pathname){
      this.$router.push(pathname)
    },
    tabclick(index){
      console.log(this.guestlist,'guestlist');
      console.log(index);
      this.curindex=index
      if(index==0){
        this.currentView='Tab1'
      }else{
        this.currentView='Tab2'
      }
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
      if(scrollTop > 2000){
        if (this.agiTexts1 === "") {
        this.appear("首页>", "agiTexts1");
        this.appear("嘉宾 & 日程>", "agiTexts2");
        this.appear("购票方式>", "agiTexts3");
        this.appear("常见问题> ", "agiTexts4");
        this.appear("联系我们> ", "agiTexts5");
        this.appear("关于 Founder  ", "agiTexts6");
        this.appear("Park>", "agiTexts7");
        this.appear("购票方式", "showText8");
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


    console.log(this.guestlist,'guestlist');
    window.addEventListener('scroll', this.handleScroll, true);
    // this.appear("拟定 ", "SubforumText");
    this.appear("嘉宾日程", "SubforumText1");
    // this.appear("购票方式", "SubforumText3");
    clearInterval(this.Subforumtimess)
    clearInterval(this.Intervaltimes)
       this.Subforumtimess = window.setTimeout(()=>{
        this.Intervaltimes =  window.setInterval(() => {
            console.log(this.Subforumtimess,'Subforumtimess');
             this.Subforum = !this.Subforum;
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
        window.clearInterval(this.Subforumtimess2)
        window.clearInterval(this.Intervaltimes2)
        this.Subforumtimess=null
      }
    },
  }
  </script>
  
  <style lang="scss" scoped>
.actives{
  background-position-x: left !important;
  background-size: 100% 5px !important;
}
  .tablist_itme{
    margin-bottom: 3%;
  }
// .guestlist{
//   padding: 0 2%;
// }


.Face_Design{
  margin: 10% 0;
  padding: 0 2%;
  // width: 100%;
  img{
    width: 100%;
  }
  p{
    font-size: 3.8vw;
    margin: 5% 0;
  }
}
  .timeTab{
    display: flex;
    justify-content: space-evenly;
    font-size: 10vw;
    color:  #595757;
    margin: 10% 0;
>div{
  font-family: 'OPPOSans_R';
  background: linear-gradient(to right,#000,#000) no-repeat right bottom;
  // background: linear-gradient(to right,#ec695c,#61c454) no-repeat right bottom;

        background-size: 0px 2px;
        transition:background-size 800ms;
        display: flex;
}
  }

  .tablist>p{
      font-size: 8vw;
    }
  
  .blockStyle3{
    // width: 20px;
    height: 84%;
    background: white;
  }
  .subform_main_h1{
    h1{
      margin-top:14% ;
      font-size: 11vw;
    }
  }
  .tablist_itme_list{
    display: flex;
    padding: 10px 0px;
    justify-content: space-between;
  }
  .tablist_itme_list_ms{
    width: 48%;
  }
  .tablist_itme_list_tp{
    width: 15%;
    img{
      width: 100%;
    }
  }


  .tablist_itme_list_wz>p{
       font-size: 3vw;
  }

  .tablist_itme_list_ms ul li {
    font-size: 3vw;
  }
  // .tablist_itme_list_ms>p::before {
  //     content: "";
  //     display: inline-block;
  //     width: 10px;
  //     height: 10px;
  //     background-color: black;
  //     border-radius: 50%;
  //     margin-right: 5px;
  //   }
  .tablist_itme_list_wz>p::before {
      content: "";
      display: inline-block;
      width: 10px;
      height: 10px;
      background-color: black;
      border-radius: 50%;
      margin-right: 5px;
    }
    .tablist_itme_list_wz p{
      margin-left: 10%;
    }
  .private_directors{
    img{
      width: 96%;
      background: red;
    }
  }
  .subform_maim{
    width: 100%;
      // margin-left: auto;
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


.run-enter-from,
.run-leave-to {
  opacity: 0;
}
// 元素进入结束的状态 ｜ 元素开始离开的状态。     这里不写也可以！！！！！！

  .v-enter,.v-leave-to{
            opacity: 0;
            transform: translateX(150px)
        }
        .v-enter-active,.v-leave-active{
            transition: all 0.2s ease;
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

  // .SubForum_Text{
  //   h1{
  //     font-size: 11vw;
  //   background: black;
  //   color: white;
  //   width: fit-content;
  //   margin-top: 3%;
  //   }
  // }

  .blockSztyle2{
    height: 5%;
    background: black;
  }
  </style>