import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueTypedJs from 'vue-typed-js'
// 引入video.js
import Videojs from 'video.js'
import 'video.js/dist/video-js.min.css' 
Vue.prototype.$video = Videojs 
import { DropdownMenu, DropdownItem,Icon,ImagePreview,Overlay,Button, Tab, Tabs,Popup,Cell   } from 'vant';
import '@/assets/font/font.css'
import CanvasPoster from 'vue-canvas-poster' 
import 'vant/lib/index.css'
import '../src/loythcss/dist/index.css'
import showlog from './utils/showlog';
Vue.prototype.showlog = showlog;

Vue.use(CanvasPoster)
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Popup);
Vue.use(Cell);
Vue.use(VueTypedJs)
Vue.use(ElementUI);
Vue.use(Overlay);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Icon);
Vue.use(Button);
Vue.use(ImagePreview);

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
