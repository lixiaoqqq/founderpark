"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

var _axios = _interopRequireDefault(require("axios"));

var _elementUi = _interopRequireDefault(require("element-ui"));

require("element-ui/lib/theme-chalk/index.css");

var _vueTypedJs = _interopRequireDefault(require("vue-typed-js"));

var _video = _interopRequireDefault(require("video.js"));

require("video.js/dist/video-js.min.css");

var _vant = require("vant");

require("@/assets/font/font.css");

var _vueCanvasPoster = _interopRequireDefault(require("vue-canvas-poster"));

require("vant/lib/index.css");

require("../src/loythcss/dist/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 引入video.js
_vue["default"].prototype.$video = _video["default"];

_vue["default"].use(_vueCanvasPoster["default"]);

_vue["default"].use(_vant.Tab);

_vue["default"].use(_vant.Tabs);

_vue["default"].use(_vant.Popup);

_vue["default"].use(_vant.Cell);

_vue["default"].use(_vueTypedJs["default"]);

_vue["default"].use(_elementUi["default"]);

_vue["default"].use(_vant.Overlay);

_vue["default"].use(_vant.DropdownMenu);

_vue["default"].use(_vant.DropdownItem);

_vue["default"].use(_vant.Icon);

_vue["default"].use(_vant.Button);

_vue["default"].use(_vant.ImagePreview);

_vue["default"].prototype.$http = _axios["default"];
_vue["default"].config.productionTip = false;
new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');