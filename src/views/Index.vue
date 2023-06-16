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
  <br>
  <br>
  <br>  


  <div>

  </div>
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
  Subforum:false,
  SubforumText:'',
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
},
mounted(){
  this.appear("分论坛 :", "SubforumText");
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
  next()
},
beforeRouteLeave(to,from,next){
  console.log('beforeRouteLeave');
  window.document.body.style.background=''
  next()
},
beforeDestroy(){
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

.private_directors{
  img{
    width: 96%;
    background: red;
  }
}
.subform_maim{
  width: 96%;
    margin-left: auto;
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
.navtop_item{
       width: 100%;
      text-align: center;
      background: rgba(0  , 0, 0 , 0.4);
}
.blockStyle1{
     width: 20px;
     height: 100%;
    background: white;
}
.toptext{
  display: flex;
    margin-left: auto;
    margin-top: 30px;
  h1{
    background: black;
    color: white;
    font-size: 13vw;
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