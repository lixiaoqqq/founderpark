<template>
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
</template>


<script>
  
  export default {
    name: 'Navtop',
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


<style lang="scss" scoped>
.fixde_AGI{
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 10px
}
</style>