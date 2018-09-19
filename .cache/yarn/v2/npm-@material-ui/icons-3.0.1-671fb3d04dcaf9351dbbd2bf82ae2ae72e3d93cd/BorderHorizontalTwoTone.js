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
}), _react.default.createElement("g", null, _react.default.createElement("path", {
  d: "M11 3h2v2h-2zM19 3h2v2h-2zM19 7h2v2h-2zM15 3h2v2h-2zM3 19h2v2H3zM3 15h2v2H3zM3 7h2v2H3zM7 19h2v2H7zM11 7h2v2h-2zM7 3h2v2H7zM3 3h2v2H3zM15 19h2v2h-2zM11 19h2v2h-2zM19 15h2v2h-2zM19 19h2v2h-2zM11 15h2v2h-2zM3 11h18v2H3z"
}))), 'BorderHorizontalTwoTone');

exports.default = _default;