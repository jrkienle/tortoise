"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_novnc_1 = __importDefault(require("react-novnc"));
var RemoteDesktop = function () {
    return react_1.default.createElement(react_novnc_1.default, { connectionName: "", onDisconnected: function () { }, password: "" });
};
exports.default = RemoteDesktop;
