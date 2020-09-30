"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.routes = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Login = _interopRequireDefault(require("@/views/Login"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  name: 'Login',
  hide: true,
  component: _Login["default"]
}, {
  name: '主页面',
  path: '/main',
  isSingle: true,
  hide: false,
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/views/Layout'));
    });
  },
  children: [{
    name: '主页面',
    path: '/main/index',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/views/Main'));
      });
    }
  }]
}, {
  name: '页面2',
  path: '/main2',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/views/Layout'));
    });
  },
  children: [{
    name: 'xxx',
    path: '/main2/xxx',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/views/System'));
      });
    }
  }, {
    name: 'xxx1',
    path: '/main2/xxx1',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/views/cont'));
      });
    }
  }, {
    name: 'xxx2',
    path: '/main2/xxx2'
  }]
}, {
  name: '系统管理',
  path: '/',
  children: [{
    path: '/',
    name: '退出'
  }]
}];
exports.routes = routes;
var originalPush = _vueRouter["default"].prototype.push;

_vueRouter["default"].prototype.push = function push(location) {
  return originalPush.call(this, location)["catch"](function (err) {
    return err;
  });
};

var _default = new _vueRouter["default"]({
  routes: routes
});

exports["default"] = _default;