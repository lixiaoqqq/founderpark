<template>
 <div>
  <div class="video-container">
   <video :style="fixStyle" autoplay loop muted class="fillWidth" :canplay="canplay" >
     <source src="http://lc-RanMoNzS.cn-n1.lcfile.com/6PoMrwjxpDe8gSRerOyaYf3Rn3CwK7sB/mp.mp4" type="video/mp4" />
     <!-- 浏览器不支持 video 标签，建议升级浏览器。 -->
     <source src="http://lc-RanMoNzS.cn-n1.lcfile.com/6PoMrwjxpDe8gSRerOyaYf3Rn3CwK7sB/mp.mp4" type="video/webm"/>
     <!-- 浏览器不支持 video 标签，建议升级浏览器。 -->
    </video>
  </div>
</div>
 </div>
</template>

<script>
// require('videojs-contrib-hls/dist/videojs-contrib-hls.js')
export default {
    data() {
      return {
        playerOptions: {
          // videojs and plugin options
          height: '360',
          autoplay: true,
          muted: true,
          sources: [{
            withCredentials: false,
            type: "application/x-mpegURL",
            src: "http://lc-RanMoNzS.cn-n1.lcfile.com/6PoMrwjxpDe8gSRerOyaYf3Rn3CwK7sB/mp.mp4"
          }],
          controlBar: {
            timeDivider: false,
            durationDisplay: false
          },
          flash: { hls: { withCredentials: false }},
          html5: { hls: { withCredentials: false }},
          poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-5.jpg"
        }
      }
    },
    mounted() {
    // 屏幕自适应
    // 获取屏幕宽高，根据不同屏幕调整视频的宽高自适应大小
    window.onresize = () => {
      const windowWidth = document.body.clientWidth
      const windowHeight = document.body.clientHeight
      const windowAspectRatio = windowHeight / windowWidth
      let videoWidth
      let videoHeight
      if (windowAspectRatio < 0.5625) {
        videoWidth = windowWidth
        videoHeight = videoWidth * 0.5625
        this.fixStyle = {
          height: windowWidth * 0.5625 + 'px',
          width: windowWidth + 'px',
          'margin-bottom': (windowHeight - videoHeight) / 2 + 'px',
          'margin-left': 'initial'
        }
      } else {
        videoHeight = windowHeight
        videoWidth = videoHeight / 0.5625
        this.fixStyle = {
          height: windowHeight + 'px',
          width: windowHeight / 0.5625 + 'px',
          'margin-left': (windowWidth - videoWidth) / 2 + 'px',
          'margin-bottom': 'initial'
        }
      }
  }
  },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    methods: {
      playerReadied(player) {
        var hls = player.tech({ IWillNotUseThisInPlugins: true }).hls
        player.tech_.hls.xhr.beforeRequest = function(options) {
          // console.log(options)
          return options
        }
      }
    }
  }
</script>
<style scoped>
.homepage-hero-module,
.video-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.video-container {
  z-index: 0;
  position: absolute;
}

.fillWidth {
  width: 100%;
}
</style>