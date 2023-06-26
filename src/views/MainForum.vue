<template>
<div>
  <div class="navtop_item">
    <Dialog />
  </div>
 <div class="subform_maim">
  <div class="toptext">
    <h1>{{ SubforumText }}</h1> 
    <div v-if="Subforum" class="style_Box">
        <div class="blockStyle1" ></div>
        <div class="blockStyle2" ></div>
    </div>         
  </div>
  <br>
  <br>
  <br>
  <div class="office_hour">
    <h1>Office Hour</h1>
    <h1>私董会</h1>
  </div>
  <br>
  <ul class="ul_list">
    <li>2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222</li>
    <li>2222222222222222</li>
    <li>e33333333333333333333333333333333333333333333333333333333333</li>
  </ul>

  <div class="office_img">
    <img src="../assets/with.png" alt="">
    <img src="../assets/with.png" alt="">
  </div>
  <br>
  <br>
  <div class="private_directors">
    <img src="../assets/with.png" alt="">
  </div>

  <div class="ticket_sales">
        <div class="ticket_sales_Txte">
              <span>票品售出，除因不可抗力因素导致大</span>
              <span>会延期或取消，其他不支持退改</span>
        </div>
        <div class="ticket_sales_button"> 
          <div> 立即购票</div>
        </div>
  </div>

  <br>
  <br>
  <br>
  <div class="SubForum_Text">
          <h1 style="color:#595757">{{ agiTexts1 }}</h1>
              <h1>{{ agiTexts2 }}</h1>
              <h1>{{ agiTexts3 }}</h1>
              <h1>{{ agiTexts4 }}</h1>
              <h1>{{ agiTexts5 }}</h1>
              <h1>{{ agiTexts6 }}</h1>
          <div class="SubForum_Text_style">
            <h1>{{ agiTexts7 }}</h1>
              <div v-if="Subforum1" class="style_Box1">
                <div class="blockStyle1" ></div>
                <div class="blockStyle2" ></div>
            </div>  
          </div>
    </div>
  <br>
  <br>
  <br>  

  <br>


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
// import BufferAnimation from 'vue-scroll-buffer'

export default {
  components: {
  Dialog,
},
data(){
return{
        Subforumtimess:null,
        Intervaltimes2:null,
        Subforumtimess2:null,
        Intervaltimes:null,
        Subforum:false,
        SubforumText:'',
        agiTexts1: "",    // agiTexts1
      agiTexts2: "",    // agiTexts2
      agiTexts3: "",    // agiTexts3
      agiTexts4: "",    // agiTexts4
      agiTexts5: "",    // agiTexts5
      agiTexts6: "",    // agiTexts6
      Subforum1:false,
      agiTexts7: "",    // agiTexts7
}
},
methods:{
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
      if(scrollTop > 480){
        if (this.agiTexts1 === "") {
        this.appear("大会亮点>", "agiTexts1");
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
  this.appear("分论坛 :", "SubforumText");
  window.addEventListener('scroll', this.handleScroll, true);
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
    window.clearInterval(this.Subforumtimess2); //关闭
    window.clearInterval(this.Intervaltimes2); //关闭

    if(this.Subforumtimess){
      window.clearInterval(this.Subforumtimess); //关闭
      window.clearInterval(this.Intervaltimes); //关闭
      this.Subforumtimess=null
    }
  },
}
</script>

<style lang="scss" scoped>

.SubForum_Text_style{
  display: flex;
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
  font-weight: 800;


  li{
    width: 96%;
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
  font-weight: 800;
  }
  .ticket_sales_button{
    background: white;
    padding: 8px;
  }
}
</style>