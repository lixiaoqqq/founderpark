<template>
    <div>
      <span ref="typedElement"></span>
    </div>
  </template>
  
  <script>
  
  import Typed from 'typed.js';
  
  export default {
    mounted() {
      this.initializeTyped();
    },
    methods: {
      initializeTyped() {
        const options = {
          strings: ['Hello', 'World'],
          typeSpeed: 50,
          loop: false,
          showCursor:true,
          cursorChar:'1'
        };
  
        new Typed(this.$refs.typedElement, options);
      }
    }
  };
  </script>
  