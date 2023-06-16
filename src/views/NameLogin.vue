<template>
    <div class="hello">
    <v-touch v-on:swipeup="nextPage"  v-on:swipedown="prevPage" class="wrapper">
      内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
      内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内
      容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内
      容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
      内容内容内容内容内容内容内容内容内容
    </v-touch>
  </div>
  </template>
  
  <script>
  export default {
    data(){
        return{
            data:[]
        }
    },
    methods: {
      nextPage() {
        // 切换到下一页
        setTimeout(() => {
        this.$router.push('/')
      }, 1000);
      },
      prevPage() {
        // 切换到上一页
        setTimeout(() => {
          this.$router.push('/about')
      }, 1000);

      }
    }
  }
  </script>
  