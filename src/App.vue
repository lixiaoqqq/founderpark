<template>
  <div id="app">
    <nav>
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
      <div  class="top_fixed" v-if="BoxFixeds" >
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
    </nav>
    <router-view/>
  </div>
</template>

<script>
  
  export default {
  data() {
    return {
      property: 'value',
      BoxFixeds:false,
    };
  },
  methods:{
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
  
    },
    destroyed() { //离开这个界面之后，删除滚动事件，不然容易除bug
      window.removeEventListener('scroll', this.handleScroll)
    },
}


</script>

<style lang="scss">
html,body,#app{
  width: 100%;
  height: 100%;
}
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: 'OPPOSans_L';

}
.el-icon-s-unfold{
  font-size: 20px;
  color: white  ;
}

</style>
