<template>
  <div>
    <!-- //视频背景 -->
    <!-- <div class="videoContainer">
        <video class="fullscreenVideo" id="bgVid"  autoplay muted loop playsinline="">
          <source src="http://lc-RanMoNzS.cn-n1.lcfile.com/6PoMrwjxpDe8gSRerOyaYf3Rn3CwK7sB/mp.mp4" type="video/mp4">
    </video>  
    </div> -->
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
                <h1 style="color: white;">
                    {{ this.showText }}
                </h1>
                </div>  
                <div class="warp_bottom_img">
                      <div class="img_logo">
                        <img src="../assets/未标题-1-10.png" alt="">
                      </div>
                      <div class="img_address">
                        <img src="../assets/未标题-1-12.png" alt="">
                        <img src="../assets/未标题-1-11.png" alt="">
                      </div>
                </div>
            </div>

            <div class="guest">
                <h1 @click="goHome"> 点击打开小程序</h1>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                {{ this.showText }}
             </div>

            
    </div>
  
  </div>
  
  </template>
  
  <script>
  export default {
  data() {
    return {
      property: 'value',
      BoxFixed:false,
      timer: null, //settimeout
      showText: "",
    };
  },
  methods: {
    handleCommand(command) {
        this.$message('click on item ' + command);
      },
     //滚动事件
     appear(content) {
      const _this = this;
 
      this.showText = "";
      clearTimeout(this.timer);
 
      var speed = 100; //设置定时的速度 越来越快
      var count = 1;
 
      function changeContent() {
        _this.showText = content.substring(0, count); //截取字符串
        count++;
 
        if (count != content.length + 1) {
          speed -= 1;
          if (speed < 5) speed = 5;
 
          _this.timer = setTimeout(changeContent, speed);
        }
      }
      changeContent();
    },
      handleScroll() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        // var offsetTop = document.querySelector('.img_logo').offsetTop 
        console.log(scrollTop,'scrollTop')
        // console.log(offsetTop,'offsetTop')
        if (scrollTop >500) {
          this.BoxFixed = true

          // if(this.showText==''){
          //   // this.appear("AGI  PLAY- GROUND |");
          // }

        } else {
          this.BoxFixed = false
        }
      },
    async  generateschemeUrl(){
          const  res= await this.$http.get('https://webnode.geekpark.net/access_token')
     console.log(res.data.data.URl,'data.data.URl');
    //  const normalLink = this.convertWechatLink(res.data.data.URl);
    //  console.log(normalLink); 
    //  location.href=normalLink
     location.href=res.data.data.URl
      },  
      goHome(){
        // console.log(222);
        this.generateschemeUrl()
        // window.location.href='https://idurl.cn/uYfUed'
      }
    },
    mounted() {
     // 向页面添加股东事件
     this.appear("AGI  PLAY- GROUND |");
      window.addEventListener('scroll', this.handleScroll, true);
    },
    destroyed() { //离开这个界面之后，删除滚动事件，不然容易除bug
      window.removeEventListener('scroll', this.handleScroll)
    },
  }
  </script>
  <style lang="scss">
  
  
  
.warp_box{
  height: 2000px;
}
  .guest{
    width: 100%;
      /* height: 100%; */
      /* background: red; */
      position: absolute;
    color: white;

      top: 100%;
  }
  .guest_item_list{
    width: 45%;
  }
  .top_fixed{
    // background: aliceblue;
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 999;
      text-align: center;
      background: #eee;
      // opacity: 0.6;
      background-image: url('../assets/beijing.png');
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
  .guest_item img{
    width: 100%;
  
  }
  .warp_bottom_img{
    display: flex;
    /* background: #000; */
    position: absolute;
    bottom: 10%;
    align-items: flex-end;
    justify-content: space-around;
    width: 100%;
  }
  /* .warp_bottom_img .img_logo{
     width: 50%;
  } */
  .warp_bottom_img .img_logo img{
     width: 100%;
  }
  /* .warp_bottom_img .img_address :nth-child(1){
    width: 50%;
  } */
  .img_address img{
     width: 91%;
  }
  .warp_bottom_img>.img_logo{
    width: 32%;
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
    // background-image: url(../assets/未标题-1-05.png);
    background-size: 100% 100%;
    height: 100%;
    position: fixed;
    z-index: -999;
  }
  .warp_connect{
    width: 100%;
    height: 100%;
  }
  .dialogue_img{
    position: absolute;
      width: 90%;
      margin: 0 auto;
      display: flex;
      top: 10%;
      flex-wrap: wrap;
      left: 6%;
      h1{
        font-size: 70px;
        width: 90%;
      }
  }
  .dialogue_img img{
    margin: 5px 20px;
  }
  .dialogue_img img:nth-child(1) {
    width: 80%;
  }
  .dialogue_img img:nth-child(2) {
    width: 95%;
  }
  .el-dropdown-link {
    cursor: pointer;
  }
 /deep/.el-dropdown-menu{
      width: 16% !important;
      text-align: center!important;
}
  
  .videoContainer{
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -100;
  }
  
  .videoContainer:before{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    z-index: -1;
    top: 0;
    left: 0;
    background: rgba(25,29,34,.65);
    background-size: cover;
  }
  
  .fullscreenVideo{
    width: 100%;
    height: 100%;
    object-fit: fill
  }
  </style>