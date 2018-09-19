"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0V0z"
}), _react.default.createElement("path", {
  d: "M8 16h12V4H8v12zm2-7h3V6h2v3h3v2h-3v3h-2v-3h-3V9z",
  opacity: ".3"
}), _react.default.createElement("path", {
  d: "M4 22h14v-2H4V6H2v14c0 1.1.9 2 2 2z"
}), _react.default.createElement("path", {
  d: "M8 2c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H8zm12 14H8V4h12v12z"
}), _react.default.createElement("path", {
  d: "M13 14h2v-3h3V9h-3V6h-2v3h-3v2h3z"
})), 'LibraryAddTwoTone');

exports.default = _default;