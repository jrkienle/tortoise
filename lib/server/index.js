"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var koa_1 = __importDefault(require("koa"));
var koa_static_1 = __importDefault(require("koa-static"));
var nunjucks_1 = __importDefault(require("nunjucks"));
var app = new koa_1.default();
app.use(koa_static_1.default(path_1.join(__dirname, '..', '..', 'public')));
var TEMPLATE = "\n<!doctype html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n\n    <title>Tortoise</title>\n  </head>\n  <body>\n    <div id=\"root\"></div>\n\n    {% if prod %}\n    <script src=\"/app.min.js\"></script>\n    {% else %}\n    <script src=\"http://localhost:3001/app.js\"></script>\n    {% endif %}\n  </body>\n</html>\n";
app.use(function (ctx) {
    var prod = process.env.NODE_ENV === 'production';
    ctx.body = nunjucks_1.default.renderString(TEMPLATE, { prod: prod });
});
app.listen(3000);
