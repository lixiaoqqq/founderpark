<template>
  <div id="app">
    <nav>
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
      <!-- <div  class="top_fixed" v-if="BoxFixeds" >
       <div class="fixde_AGI">
             <div style="color: white;font-size: 4vw;font-weight: 600;">AGI PLAYGROUND 2023</div>
            <div>
              <el-dropdown @command="handleCommand">
                  <span class="el-dropdown-link">
                <i class="el-icon-s-unfold"></i>
                <van-icon name="wap-nav"  size="1.3rem" color="#fff" />
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
     </div> -->
    </nav>
    <router-view/>
  </div>
</template>

<script>
// import BufferAnimation from 'vue-scroll-buffer'
  
  export default {
  data() {
    return {
      property: 'value',
      BoxFixeds:false,
    };
  },

  methods:{
    // handleCommand(command) {
    //     this.$message('click on item ' + command);
    //   },
    // handleScroll() {
  
    //   this.BoxFixeds = true
    //     var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    //     // var offsetTop = document.querySelector('.img_logo').offsetTop 
    //     console.log(scrollTop,'scrollTop')
    //     // console.log(offsetTop,'offsetTop')
    //     if (scrollTop >0) {
    //       // if(this.showText==''){
    //       //   // this.appear("AGI  PLAY- GROUND |");
    //       // }

    //     } else {
    //       this.BoxFixed = false
    //     }
    //   },
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
         next('/404')
     }else{
      next()
  }
},
  mounted() {


    
    // BufferAnimation(1)
  
    },
    destroyed() { //离开这个界面之后，删除滚动事件，不然容易除bug
      window.removeEventListener('scroll', this.handleScroll)
    },
}


</script>

<style lang="scss">

.el-icon-s-unfold {
    background: url('./assets/AGI1-icon.png') center center no-repeat;
    background-size: 24px;
}
 
.el-icon-s-unfold:before {
    content: "11";
    visibility: hidden;
}
html,body,#app{
  width: 100%;
  height: 100%;
}
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: 'OPPOSans_R';

}
.el-icon-s-unfold{
  font-size: 20px;
  color: white  ;
}

.footer_img{
  width: 100%;
  img{
    width: 100%;
    display: block;
  }
}
.SubForum_Text{
  margin-left: 2%;
  margin-top: 10%;
  margin-bottom: 20%;
}
.SubForum_Text>h1{
  font-size: 11vw;
    background: black;
    color: white;
    width: fit-content;
    margin-top: 2%;
  }

  .SubForum_Text_style{
    display: flex;
    margin-top: 2%;

  }
  .SubForum_Text_style>h1{
    font-size: 11vw;
    background: black;
    color: white;
    width: fit-content;
  }

  .blockStyle3{
    // width: 20px;
    height: 100%;
    background: white;
  }
  .blockStyle1{
    // width: 20px;
    height: 100%;
    background: white;
  }
  .style_Box{
    display: flex;
    position: relative;
    top: 53.6%;
    width: 10.4%;
    height: 15.3vw;
    flex-direction: column;
    margin-top: 1%;
    z-index: -9;
  }

  .navtop_item{
         width: 100%;
        text-align: center;
        background: rgba(0  , 0, 0 , 0.4);
        position:fixed;
        top: 0;
  }
  
.toptext{
  display: flex;
    margin-left: auto;
    margin-top: 30px;
    width: 98%;
  h1{
    background: black;
    color: white;
    font-size: 12vw;
  }
}
.style_Box1{
  display: flex;
    flex-direction: column;
    width: 11%;
    margin-top: 1% !important;
}
.blockStyle4{
  height: 10%;
    background: black;
}
.blockStyle1{
  background: white;
    height: 100%;
}
.blockStyle2{
  height: 5%;
    background: black;
}
h1{
        font-size: 14.4vw;
        color: white;
        width: -moz-fit-content;
        width: fit-content;
        background: black;
        margin-top: 1%;
        margin-bottom: 1%;
        font-family: 'OPPOSans_R';
        line-height: 15.3vw;
      }

.tablist_itme_time{
    background: white;
    border-top: 1px solid;
    padding: 5px;
    font-size: 4vw;
    font-family: 'OPPOSans_B';

  }
</style>
