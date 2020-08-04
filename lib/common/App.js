"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var RemoteDesktop_1 = __importDefault(require("./RemoteDesktop"));
var App = function () {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(RemoteDesktop_1.default, null)));
};
exports.default = App;
