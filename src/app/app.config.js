"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_routes_1 = require("./app.routes");
exports.appConfig = {
    providers: [(0, core_1.provideZoneChangeDetection)({ eventCoalescing: true }), (0, router_1.provideRouter)(app_routes_1.routes)]
};
