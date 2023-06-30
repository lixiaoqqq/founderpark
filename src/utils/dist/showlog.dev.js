"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function showlog(log) {
  if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test") {
    console.log(log);
  }
}

var _default = showlog;
exports["default"] = _default;