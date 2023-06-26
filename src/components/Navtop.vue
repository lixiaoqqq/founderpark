<template>
   <div class="fixde_AGI">
             <div class="nav_title">AGI PLAYGROUND 2023 <span v-if="nav_title_sapn_flag" class="nav_title_sapn"></span>
            </div>
            <div>
              <!-- <el-dropdown @command="handleCommand"> -->
                  <span class="el-dropdown-link">
                <i class="el-icon-s-unfold" @click="showPopup"></i>

                
                <!-- <van-icon name="wap-nav"  size="1.3rem" color="#fff" /> -->
                <van-popup      
                 v-model="shows"
                  closeable
                  position="top"
                  duration="0.4"
                  :style="{ height: '80%',backgroundColor:'#D3FF19' }">
                
                  <div class="button_nav">
                              <h1  @click="gotorouter('/')">{{ this.showText1 }}</h1>
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
                  </span>
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
</template>


<script>
  
  export default {
    name: 'Navtop',
  data() {
    return {
      property: 'value',
      BoxFixeds:false,
      nav_title_sapn_flag:false,
      shows:false,
      showText1:"",
      showText2:"",
      showText3:"",
      showText4:"",
      showText5:"",
      showText6:"",
      Subforum1:false,
      showText7:"",
      showText8:"",
    };
  },
  methods:{
    gotorouter(pathname){
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
    showPopup() {
      this.shows = true;

      this.appear("首页>", "showText1");
          // this.appear("分论坛>", "showText2");
          this.appear("嘉宾 & 日程>", "showText3");
          this.appear("购票方式>", "showText4");
          this.appear("常见问题>", "showText5");
          this.appear("联系我们>", "showText6");
          this.appear("关于 Founder", "showText7");
          this.appear("Park>", "showText8");
        clearInterval(this.Subforumtimess2)
        this.Subforumtimess2 = window.setTimeout(()=>{
          this.Intervaltimes2 =  window.setInterval(() => {
              console.log(this.Subforumtimess2,'Subforumtimess');
              this.Subforum1 = !this.Subforum1;
          }, 500);
        },1000)
    },
    handleCommand(command) {
        this.$message('click on item ' + command);
      },
    handleScroll() {
  
      this.BoxFixeds = true
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        // var offsetTop = document.querySelector('.img_logo').offsetTop 
        console.log(scrollTop,'scrollTop')
        // console.log(offsetTop,'offsetTop')
        if (scrollTop >0) {
          // if(this.showText==''){
          //   // this.appear("AGI  PLAY- GROUND |");
          // }

        } else {
          this.BoxFixed = false
        }
      },
  },
    mounted() {
      clearInterval(this.Subforumtimess)
       this.Subforumtimess = window.setTimeout(()=>{
        this.Intervaltimes =  window.setInterval(() => {
            console.log(this.Subforumtimess,'Subforumtimess');
             this.nav_title_sapn_flag = !this.nav_title_sapn_flag;
         }, 500);
        },1000)
    },
    destroyed() { //离开这个界面之后，删除滚动事件，不然容易除bug
      window.removeEventListener('scroll', this.handleScroll)
      clearInterval(this.Subforumtimess)
      clearInterval(this.Intervaltimes)
      clearInterval(this.Subforumtimess2)
      clearInterval(this.Intervaltimes2)
    },
}

</script>


<style lang="scss" scoped>
.fixde_AGI{
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 10px;
 
}

.button_nav {
  padding-left:5%;
  margin-top: 15%;
  h1{
    margin-top: 1%;
    font-size: 13vw;
  }
 }
.navtop_item{
  position:fixed;
    top: 0;
}

.blockStyle3{
  height: 84%;
}
.nav_title{
  color: white;
    font-size: 4vw;
    font-weight: 600;
    display: flex;
    align-items: center;
    span{
     width: 10px;
    display: block;
    height: 10px;
    background: white;
    margin-left: 10px;
    text-align: center;
    }
}
html,body#app{
  margin-top: 15%;
}
</style>