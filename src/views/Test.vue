<template>
    <div>
            <div>
                <p @click="gitlcikcs">你是谁</p>
               <h1>{{ showText }}</h1>
                </div>
             <div>
              <p @click="gitlcikc">你是极客公园吗</p>
             <h1>{{ showTexts }}</h1>
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        timer: null, //settimeout
        showText: "",

        timers: null, //settimeout
        showTexts: "",
      };
    },
   
    mounted() {
        
    },
   
    methods: {
        gitlcikcs(){
            this.appear("俄乌局势发生变化？泽连斯基点名批评西方国家，喊话普京坐下来谈。");
        },
        gitlcikc(){
            this.appear1("极客公园nsssssss");
        },
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

      appear1(contents) {
        const _this = this;
        this.showTexts = "";
        clearTimeout(this.timers);
   
        var speed = 100; //设置定时的速度 越来越快
        var count = 1;
   
        function changeContent1() {
          _this.showTexts = contents.substring(0, count); //截取字符串
          count++;
          if (count != contents.length + 1) {
            speed -= 1;
            if (speed < 5) speed = 5;
            _this.times = setTimeout(changeContent1, speed);
          }
        }
        changeContent1();
      },
    },
  };
  </script>