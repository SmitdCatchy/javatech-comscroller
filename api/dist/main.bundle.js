webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#container{\r\n  text-align: center;\r\n}\r\n#headerspace{\r\n  width: 100%;\r\n  height: 80px;\r\n  background-color: #000;\r\n}\r\nrouter-outlet{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <div id=\"headerspace\"></div>\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n  <app-header></app-header>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(userService) {
        this.userService = userService;
        this.loginUser = "";
        this.loginPass = "";
        this.regName = "";
        this.regNick = "";
        this.regMail = "";
        this.regPass = "";
    }
    AppComponent.prototype.login = function () {
        this.err = this.userService.login(this.loginUser, this.loginPass);
        if (this.err === "") {
            this.loginUser = "";
            this.loginPass = "";
        }
    };
    AppComponent.prototype.logout = function () {
        this.userService.logout();
    };
    AppComponent.prototype.register = function () {
        this.rerr = this.userService.register(this.regName, this.regNick, this.regMail, this.regPass);
        if (this.rerr === "") {
            this.loginUser = "";
            this.loginPass = "";
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_index_index_component__ = __webpack_require__("../../../../../src/app/pages/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_modules_modules_component__ = __webpack_require__("../../../../../src/app/pages/modules/modules.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_account_account_component__ = __webpack_require__("../../../../../src/app/pages/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_module_module_component__ = __webpack_require__("../../../../../src/app/pages/module/module.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_register_register_component__ = __webpack_require__("../../../../../src/app/pages/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_header_dropdownmenu_dropdownmenu_component__ = __webpack_require__("../../../../../src/app/components/header/dropdownmenu/dropdownmenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_header_navigation_navigation_component__ = __webpack_require__("../../../../../src/app/components/header/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_editor_editor_component__ = __webpack_require__("../../../../../src/app/pages/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_scene_service__ = __webpack_require__("../../../../../src/app/services/scene.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_module_service__ = __webpack_require__("../../../../../src/app/services/module.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_carrier_service__ = __webpack_require__("../../../../../src/app/services/carrier.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_play_play_component__ = __webpack_require__("../../../../../src/app/pages/play/play.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_index_component__["a" /* IndexComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_modules_modules_component__["a" /* ModulesComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_account_account_component__["a" /* AccountComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pages_module_module_component__["a" /* ModuleComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_header_dropdownmenu_dropdownmenu_component__["a" /* DropdownmenuComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_header_navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_editor_editor_component__["a" /* EditorComponent */],
                __WEBPACK_IMPORTED_MODULE_21__pages_play_play_component__["a" /* PlayComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* AppRoutingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_18__services_scene_service__["a" /* SceneService */],
                __WEBPACK_IMPORTED_MODULE_19__services_module_service__["a" /* ModuleService */],
                __WEBPACK_IMPORTED_MODULE_20__services_carrier_service__["a" /* CarrierService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_index_index_component__ = __webpack_require__("../../../../../src/app/pages/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_modules_modules_component__ = __webpack_require__("../../../../../src/app/pages/modules/modules.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_editor_editor_component__ = __webpack_require__("../../../../../src/app/pages/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_play_play_component__ = __webpack_require__("../../../../../src/app/pages/play/play.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_account_account_component__ = __webpack_require__("../../../../../src/app/pages/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_register_component__ = __webpack_require__("../../../../../src/app/pages/register/register.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__pages_index_index_component__["a" /* IndexComponent */] },
    { path: 'modules', component: __WEBPACK_IMPORTED_MODULE_3__pages_modules_modules_component__["a" /* ModulesComponent */] },
    { path: 'read', component: __WEBPACK_IMPORTED_MODULE_5__pages_play_play_component__["a" /* PlayComponent */] },
    { path: 'play', component: __WEBPACK_IMPORTED_MODULE_5__pages_play_play_component__["a" /* PlayComponent */] },
    { path: 'read/:name', component: __WEBPACK_IMPORTED_MODULE_5__pages_play_play_component__["a" /* PlayComponent */] },
    { path: 'play/:name', component: __WEBPACK_IMPORTED_MODULE_5__pages_play_play_component__["a" /* PlayComponent */] },
    { path: 'editor', component: __WEBPACK_IMPORTED_MODULE_4__pages_editor_editor_component__["a" /* EditorComponent */] },
    { path: 'editor/:name', component: __WEBPACK_IMPORTED_MODULE_4__pages_editor_editor_component__["a" /* EditorComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login_component__["a" /* LoginComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_7__pages_account_account_component__["a" /* AccountComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__pages_register_register_component__["a" /* RegisterComponent */] },
    { path: '**', redirectTo: 'modules', pathMatch: 'full' }
    // { path: '**',     redirectTo: 'error', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p{\r\n  margin: 0;\r\n  line-height: 40px;\r\n  text-align: center;\r\n  box-shadow: 0 0 10px 0 #000;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Copyright © Smile in the Dark 2017\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/header/dropdownmenu/dropdownmenu.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"toggleMenu()\" class=\"dropdownbtn\">&#xf0c9;</button>\n<app-navigation (click)=\"toggleMenu()\" class=\"dropdown {{menuState}}\"></app-navigation>\n"

/***/ }),

/***/ "../../../../../src/app/components/header/dropdownmenu/dropdownmenu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropdown {\n  background: #000;\n  color: #fff;\n  position: fixed;\n  left: 0;\n  right: 0;\n  height: auto;\n  right: auto;\n  width: 100%;\n  top: 40px;\n  z-index: 999;\n  line-height: 40px;\n  box-shadow: 0 0 10px 0 #000; }\n\n.dropdownbtn {\n  font-family: ICON;\n  position: fixed;\n  color: #9b9b9b;\n  font-size: 30px;\n  line-height: 40px;\n  left: 0;\n  top: 0;\n  margin: 0;\n  padding: 0;\n  width: 40px;\n  height: 40px;\n  background-color: #000;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  transition: left 0.5s, color 0.5s;\n  z-index: 1001;\n  cursor: pointer; }\n  .dropdownbtn:hover {\n    color: #FFF; }\n  .dropdownbtn:active {\n    color: #FFF; }\n  .dropdownbtn:focus {\n    color: #FFF; }\n\n.out {\n  top: -120px;\n  transition: top 0.5s; }\n\n.in {\n  top: 40px;\n  transition: top 0.5s; }\n\nbutton {\n  border: none; }\n  button:focus {\n    outline: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/dropdownmenu/dropdownmenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownmenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownmenuComponent = (function () {
    function DropdownmenuComponent() {
        this.menuState = 'out';
    }
    DropdownmenuComponent.prototype.ngOnInit = function () {
    };
    DropdownmenuComponent.prototype.toggleMenu = function () {
        this.menuState = this.menuState === 'out' ? 'in' : 'out';
    };
    DropdownmenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dropdownmenu',
            template: __webpack_require__("../../../../../src/app/components/header/dropdownmenu/dropdownmenu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/header/dropdownmenu/dropdownmenu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DropdownmenuComponent);
    return DropdownmenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#header{\r\n  position: fixed;\r\n  top: 0;\r\n  height: 80px;\r\n  line-height: 80px;\r\n  width: 100%;\r\n  background-color: #000;\r\n  transition: height 0.5s;\r\n  z-index: 1000;\r\n  box-shadow: 0 0 10px 0 #000;\r\n}\r\n#header-small{\r\n  position: fixed;\r\n  top: 0;\r\n  height: 40px;\r\n  line-height: 40px;\r\n  width: 100%;\r\n  background-color: #000;\r\n  transition: height 0.5s;\r\n  z-index: 1000;\r\n  box-shadow: 0 0 10px 0 #000;\r\n}\r\n#header-resp{\r\n  position: fixed;\r\n  top: 0;\r\n  height: 40px;\r\n  line-height: 40px;\r\n  background-color: #000;\r\n  transition: height 0.5s;\r\n  z-index: 1000;\r\n  width: 100%;\r\n  box-shadow: 0 0 10px 0 #000;\r\n}\r\n#header-width{\r\n  margin-left: 50%;\r\n  -webkit-transform: translate(-50%);\r\n  transform: translate(-50%);\r\n  width: 100%;\r\n}\r\n\r\n@media (min-width: 720px) { #header-width{ width: 640px; } }\r\n@media (min-width: 1000px) { #header-width{ width: 920px; } }\r\n@media (min-width: 1200px) { #header-width{ width: 1140px; } }\r\n\r\n#header-image{\r\n  height: 80px;\r\n  width: 80px;\r\n  background-image: url(" + __webpack_require__("../../../../../src/media/images/cms_logo.png") + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: contain;\r\n  float: left;\r\n  transition: height 0.3s, width 0.3s, display 0.3s;\r\n  margin-right: 20px;\r\n}\r\n#header-image-wide{\r\n  height: 40px;\r\n  width: 180px;\r\n  background-image: url(" + __webpack_require__("../../../../../src/media/images/cms_logo_text.png") + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: contain;\r\n  float: left;\r\n  transition: height 0.3s, width 0.3s, display 0.3s;\r\n}\r\n#header-resp #header-image-wide{\r\n  height: 40px;\r\n  width: 240px;\r\n  background-image: url(" + __webpack_require__("../../../../../src/media/images/cms_logo_text.png") + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: contain;\r\n  margin-left: 50%;\r\n  -webkit-transform: translate(-50%);\r\n  transform: translate(-50%);\r\n}\r\n#navigation{\r\n  float: right;\r\n}\r\n.disabled{\r\n  display:none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"{{header_style}}\">\n  <div id=\"header-width\">\n    <div id=\"{{header_image_style}}\"></div>\n    <app-navigation class={{land}} id=\"navigation\"></app-navigation>\n  </div>\n</header>\n<app-dropdownmenu class={{port}} id=\"dropdownmenu\"></app-dropdownmenu>\n"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
        this.land = "disabled";
        this.port = "disabled";
        this.login = "disabled";
        this.document_width = document.documentElement.clientWidth;
        this.document_height = document.documentElement.clientHeight;
        this.container_width = 1140;
        this.container_min_height = 0;
        this.header_style = "header";
        this.header_image_style = "header-image";
        this.account_image_style = "acc-image";
        this.isLandscape = document.documentElement.clientWidth >= 720;
        this.resize();
    }
    HeaderComponent.prototype.resize = function () {
        this.document_width = document.documentElement.clientWidth;
        this.document_height = document.documentElement.clientHeight;
        this.isLandscape = document.documentElement.clientWidth >= 720;
        if (window.pageYOffset > 10 && this.isLandscape) {
            this.header_style = "header-small";
            this.header_image_style = "header-image-wide";
            this.account_image_style = "acc-image-small";
            this.land = "";
            this.port = "disabled";
        }
        else if (this.isLandscape) {
            this.header_style = "header";
            this.header_image_style = "header-image";
            this.account_image_style = "acc-image";
            this.land = "";
            this.port = "disabled";
        }
        else {
            this.header_style = "header-resp";
            this.header_image_style = "header-image-wide";
            this.account_image_style = "disabled";
            this.land = "disabled";
            this.port = "";
            this.container_width = this.document_width;
        }
    };
    HeaderComponent.prototype.onResize = function (event) {
        this.resize();
    };
    HeaderComponent.prototype.onWindowScroll = function ($event) {
        this.resize();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HeaderComponent.prototype, "onResize", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HeaderComponent.prototype, "onWindowScroll", null);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/header/navigation/navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul{\r\n  float: left;\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n  display: inline-block;\r\n}\r\nli{\r\n  height: inherit;\r\n  min-height: 40px;\r\n  line-height: inherit;\r\n  float: left;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  font-family: CGB;\r\n  font-size: 20px;\r\n  color: rgba(155,155,155,1);\r\n  transition: color 0.5s, background-color 0.5s, height 0.5s, width 0.5s, display 0.5s, line-height 0.5s, background-image 0.3s;\r\n  cursor: pointer;\r\n}\r\nli:hover{\r\n  background-color: rgba(50,50,50,1);\r\n  color: #FFF;\r\n}\r\n.selected li{\r\n  color: #FFF;\r\n  background-color: rgba(50,50,50,1);\r\n  cursor: default;\r\n}\r\n\r\nbutton{\r\n  height: inherit;\r\n  min-height: 30px;\r\n  line-height: inherit;\r\n  float: left;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  font-family: CGB;\r\n  font-size: 20px;\r\n  color: rgba(155,155,155,1);\r\n  background-color: #555555;\r\n  transition: color 0.5s, background-color 0.5s, height 0.5s, width 0.5s, display 0.5s, line-height 0.5s, background-image 0.3s;\r\n  cursor: pointer;\r\n}\r\nbutton:hover{\r\n  background-color: rgba(50,50,50,1);\r\n  color: #FFF;\r\n}\r\n.selected button{\r\n  color: #FFF;\r\n  background-color: rgba(50,50,50,1);\r\n  cursor: default;\r\n}\r\n\r\n.disabled{\r\n  display: none;\r\n}\r\n.enabled{\r\n  display: block;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\r\n  <a routerLink=\"\" routerLinkActive=\"selected\" [routerLinkActiveOptions]=\"{ exact: true }\"><li class=\"\"><div>Index</div></li></a>\r\n  <a routerLink=\"modules\" routerLinkActive=\"selected\" [routerLinkActiveOptions]=\"{ exact: true }\"><li class=\"\"><div>Modules</div></li></a>\r\n  <a *ngIf=\"userService.user.role === 'GUEST'; else elseBlock\" routerLink=\"login\" routerLinkActive=\"selected\" [routerLinkActiveOptions]=\"{ exact: true }\">\r\n    <li class=\"\">\r\n      <div >Log in</div>\r\n    </li>\r\n  </a>\r\n\r\n  <ng-template #elseBlock>\r\n\r\n    <a *ngIf=\"router.url.includes('profile')\" (click)=\"logout()\">\r\n      <li class=\"\">\r\n        <div >Logout</div>\r\n      </li>\r\n    </a>\r\n    <a routerLink=\"profile\" routerLinkActive=\"disabled\" [routerLinkActiveOptions]=\"{ exact: true }\"><li class=\"\"><div>{{userService.user.nickname}}</div></li></a>\r\n\r\n  </ng-template>\r\n\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/header/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationComponent = (function () {
    function NavigationComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    NavigationComponent.prototype.ngOnInit = function () { };
    NavigationComponent.prototype.logout = function () {
        this.userService.logout();
        this.router.navigate(['/login']);
    };
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navigation',
            template: __webpack_require__("../../../../../src/app/components/header/navigation/navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/header/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/Module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Module; });
var Module = (function () {
    function Module(_id, _owner, _name, _type, _description, _image, _startScene, _isPublic, _finished, _approved, _approvedBy, _published, _views, _rate) {
        this.id = _id;
        this.owner = _owner;
        this.name = _name;
        this.type = _type;
        this.description = _description;
        this.image = _image;
        if (_image.split(':')[0] === 'http' ||
            _image.split(':')[0] === 'https') {
            this.imageToLoad = _image;
        }
        else {
            this.imageToLoad = "../../../../media/" + _image;
        }
        this.startscene = _startScene;
        this.isPublic = _isPublic;
        this.finished = _finished;
        this.approved = _approved;
        this.approvedBy = _approvedBy;
        this.published = _published;
        this.views = _views;
        this.rate = _rate;
    }
    return Module;
}());



/***/ }),

/***/ "../../../../../src/app/models/Scene.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Scene; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SceneObject; });
var Scene = (function () {
    function Scene(_id, _mId, _background, _objects) {
        this.toPreload = [];
        this.id = _id;
        this.mId = _mId;
        if (_background === "none") {
            this.background = "#000";
        }
        else {
            this.background = _background;
        }
        this.objects = _objects;
        for (var _i = 0, _a = this.objects; _i < _a.length; _i++) {
            var o = _a[_i];
            var check = o.action.split(':');
            if (check[1] === 'scene') {
                var id = +check[2];
                this.toPreload.push(id);
            }
        }
    }
    Scene.prototype.getStyle = function () {
        if (this.background.charAt(0) === "#" ||
            this.background.split('(')[0] === "rgb" ||
            this.background.split('(')[0] === "rgba") {
            return {
                'background': this.background
            };
        }
        else if (this.background.split(':')[0] === 'http' || this.background.split(':')[0] === 'https') {
            return {
                'background-image': 'url(' + this.background + ')',
                'background-repeat': 'no-repeat',
                'background-position': 'center',
                'background-size': '100% 100%'
            };
        }
        else {
            return {
                'background-image': 'url(../../../../media/' + this.background + ')',
                'background-repeat': 'no-repeat',
                'background-position': 'center',
                'background-size': '100% 100%'
            };
        }
    };
    return Scene;
}());

var SceneObject = (function () {
    function SceneObject(_id, _sId, _type, _action, _x, _y, _w, _h, _z, _cont, _style, _event) {
        this.imageToPreload = '';
        this.id = _id;
        this.sId = _sId;
        this.type = _type;
        this.action = _action;
        this.x = _x;
        this.y = _y;
        this.w = _w;
        this.h = _h;
        this.z = _z;
        this.cont = _cont;
        this.style = _style;
        this.event = _event;
        if (_event === "10" || _event.slice(-2) === "10")
            this.max = "10";
        else if (isNaN(+_event.slice(-1)))
            this.max = "1";
        else
            this.max = _event.slice(-1);
    }
    SceneObject.prototype.getEvents = function () {
        // console.log(actClass);
        // let act = +actClass.slice(3);
        // console.log(act);
        if (this.event.charAt(1) === '-') {
            var limits = this.event.split('-');
            var min = +limits[0];
            var max = +limits[1];
            var events = [];
            for (var i = min; i <= max; i++) {
                events.push(+i);
            }
            return events;
        }
        else if (this.event.charAt(1) === ',') {
            var nums = this.event.split(',');
            var events = [];
            for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
                var n = nums_1[_i];
                events.push(+n);
            }
            return events;
        }
        else {
            if (!isNaN(+this.event)) {
                return [+this.event];
            }
            else {
                return [1];
            }
        }
    };
    SceneObject.prototype.getStyle = function (w, h) {
        var x = this.stageX(this.x, w) + 'px';
        var y = this.stageY(this.y, h) + 'px';
        var width = this.stageX(this.w, w) + 'px';
        var height = this.stageY(this.h, h) + 'px';
        var z = this.z;
        var bg = '#FFF';
        var bgs = 'cover';
        var color = '#000';
        var size = this.stageX(30, w) + 'px';
        var family = 'CGR';
        var style = 'normal';
        var textShadow = '';
        var align = 'left';
        var border = '';
        var radius = '';
        var boxShadow = '';
        var margin = '';
        var padding = '';
        var display = "";
        var opacity = "";
        var overflow = "";
        var attributes = this.style.split(';');
        for (var _i = 0, attributes_1 = attributes; _i < attributes_1.length; _i++) {
            var atr = attributes_1[_i];
            var datas = atr.split(":");
            if (datas[0].trim() === 'color') {
                color = datas[1];
            }
            if (datas[0].trim() === 'font-size') {
                size = this.stageX(+datas[1].match(/\d+/)[0], w) + 'px';
            }
            if (datas[0].trim() === 'font-family') {
                family = datas[1];
            }
            if (datas[0].trim() === 'font-style') {
                style = datas[1];
            }
            if (datas[0].trim() === 'text-shadow') {
                textShadow = datas[1];
            }
            if (datas[0].trim() === 'text-align') {
                align = datas[1];
            }
            if (datas[0].trim() === 'border') {
                border = datas[1];
            }
            if (datas[0].trim() === 'border-radius') {
                radius = datas[1];
            }
            if (datas[0].trim() === 'box-shadow') {
                boxShadow = datas[1];
            }
            if (datas[0].trim() === 'margin') {
                margin = datas[1];
            }
            if (datas[0].trim() === 'padding') {
                padding = datas[1];
            }
            if (datas[0].trim() === 'display') {
                display = datas[1];
            }
            if (datas[0].trim() === 'opacity') {
                opacity = datas[1];
            }
            if (datas[0].trim() === 'overflow') {
                overflow = datas[1];
            }
            if (this.type === 'img') {
                bg = this.cont;
                bgs = 'contain';
            }
            if (datas[0] === 'background') {
                bg = datas[1];
            }
            if (datas[0] === 'scale') {
                bgs = datas[1];
            }
        }
        if (bg !== '' && bg.charAt(0) !== "#") {
            this.imageToPreload = bg;
        }
        if (bg === "none") {
            bg = "#000";
        }
        // console.log("#####-BEGIN-#####");
        // console.log(bg);
        // console.log(bg.charAt(0));
        // console.log(bg.split('(')[0]);
        // console.log(bg.split(':')[0]);
        // console.log("#####-END-#####");
        if (bg.charAt(0) === "#" ||
            bg.split('(')[0] === "rgb" ||
            bg.split('(')[0] === "rgba") {
            return {
                'position': 'absolute',
                'left': x,
                'top': y,
                'width': width,
                'height': height,
                'z-index': z,
                'color': color,
                'font-size': size,
                'font-family': family,
                'font-style': style,
                'text-shadow': textShadow,
                'text-align': align,
                'white-space': 'pre-wrap',
                'border': border,
                'border-radius': radius,
                'box-shadow': boxShadow,
                'margin': margin,
                'padding': padding,
                'opacity': opacity,
                'overflow': overflow,
                'display': 'flex',
                'justify-content': 'center',
                'align-items': 'center',
                'background-color': bg
            };
        }
        else if (bg.split(':')[0] === 'http' || bg.split(':')[0] === 'https') {
            return {
                'position': 'absolute',
                'left': x,
                'top': y,
                'width': width,
                'height': height,
                'z-index': z,
                'color': color,
                'font-size': size,
                'font-family': family,
                'font-style': style,
                'text-shadow': textShadow,
                'text-align': align,
                'white-space': 'pre-wrap',
                'border': border,
                'border-radius': radius,
                'box-shadow': boxShadow,
                'margin': margin,
                'padding': padding,
                'opacity': opacity,
                'overflow': overflow,
                'display': 'flex',
                'justify-content': 'center',
                'align-items': 'center',
                'background-image': 'url(' + bg + ')',
                'background-repeat': 'no-repeat',
                'background-position': 'center',
                'background-size': '100% 100%'
            };
        }
        else {
            return {
                'position': 'absolute',
                'left': x,
                'top': y,
                'width': width,
                'height': height,
                'z-index': z,
                'color': color,
                'font-size': size,
                'font-family': family,
                'font-style': style,
                'text-shadow': textShadow,
                'text-align': align,
                'white-space': 'pre-wrap',
                'border': border,
                'border-radius': radius,
                'box-shadow': boxShadow,
                'margin': margin,
                'padding': padding,
                'opacity': opacity,
                'overflow': overflow,
                'display': 'flex',
                'justify-content': 'center',
                'align-items': 'center',
                'background-image': 'url(../../../../media/' + bg + ')',
                'background-repeat': 'no-repeat',
                'background-position': 'center',
                'background-size': '100% 100%'
            };
        }
    };
    SceneObject.prototype.stageX = function (c, w) {
        var document_width = 1920; //normalized width
        var stage_width = w;
        return c * stage_width / document_width;
    };
    SceneObject.prototype.stageY = function (c, h) {
        var document_height = 1080; //normalized height
        var stage_height = h;
        return c * stage_height / document_height;
    };
    return SceneObject;
}());



/***/ }),

/***/ "../../../../../src/app/models/User.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(_id, _username, _nickname, _role, _completedGames) {
        this.id = _id;
        this.username = _username;
        this.nickname = _nickname;
        this.role = _role;
        this.completedGames = _completedGames;
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/pages/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"account\" [style.min-height.px]=\"container_min_height\">\n  <h1>{{userService.user.nickname}}</h1>\n  <h2>{{userService.user.username}}</h2>\n  <h2>{{userService.user.role}}</h2>\n  <h2>{{userService.user.id}}</h2>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/account/account.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  background-image: url(" + __webpack_require__("../../../../../src/media/backgrounds/smitd_bg_crystals.png") + ");\n  background-repeat: repeat;\n  background-position: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n#account {\n  background-color: rgba(0, 0, 0, 0.5);\n  width: 100%; }\n\n@media (min-width: 720px) {\n  #account {\n    width: 640px; } }\n\n@media (min-width: 1000px) {\n  #account {\n    width: 920px; } }\n\n@media (min-width: 1200px) {\n  #account {\n    width: 1140px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountComponent = (function () {
    function AccountComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        // min-height
        this.document_height = document.documentElement.clientHeight;
        this.container_min_height = 0;
    }
    AccountComponent.prototype.resize = function () {
        this.document_height = document.documentElement.clientHeight;
        this.container_min_height = this.document_height - 120;
    };
    AccountComponent.prototype.ngOnInit = function () {
        this.resize();
        if (this.userService.user.role === "GUEST")
            this.router.navigate(['/']);
    };
    AccountComponent.prototype.onResize = function (event) {
        this.resize();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AccountComponent.prototype, "onResize", null);
    AccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-account',
            template: __webpack_require__("../../../../../src/app/pages/account/account.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/account/account.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"editor\" [style.min-height.px]=\"container_min_height\">\n\n  <div id=\"properties\" *ngIf=\"moduleId === 0; else editor\">\n    <input class=\"text-input\" type=\"text\" [(ngModel)]=\"moduleName\" placeholder=\"Module Name\">\n    <form class=\"type\">\n      <ul>\n        <li *ngFor=\"let type of types; let idx = index\">\n          <input type=\"radio\" id=\"{{ type.name }}\" name=\"selector\" (change)=\"onSelectionChange(type)\" [value]=\"type.id\" [checked]=\"(idx === selectedId)\">\n          <label for=\"{{ type.name }}\">\n            {{ type.name }}\n            <div class=\"check\"><div class=\"inside\"></div></div>\n          </label>\n        </li>\n      </ul>\n    </form>\n    <input class=\"text-input\" type=\"text\" [(ngModel)]=\"moduleImg\" placeholder=\"Module Image Source\"><br>\n    <textarea class=\"text-area\" style=\"margin-top: 0px;\" maxlength=\"100\" [(ngModel)]=\"moduleDesc\" placeholder=\"Description\"></textarea><br>\n\n    <button type=\"button\" name=\"button\" (click)=\"createModule()\" [disabled]=\"invalid()\">Create</button>\n\n  </div>\n  <ng-template #editor>\n    <ul id=\"editor-menu\">\n      <li class=\"{{prop_active}}\" (click)=\"switch('p')\" title=\"Module Properties\"><p>&#xf15c;</p></li>\n      <li class=\"{{graph_active}}\" (click)=\"switch('g')\" title=\"Scenes Graph\"><p>&#xf0e8;</p></li>\n      <li class=\"{{blueprint_active}}\" (click)=\"switch('b')\" title=\"Scene Editor\"><p>&#xf247;</p></li>\n      <li class=\"{{canvas_active}}\" (click)=\"switch('c')\" title=\"Canvas\"><p>&#xf212;</p></li>\n      <li class=\"{{folder_active}}\" (click)=\"switch('f')\" title=\"Folder\"><p>&#xf07c;</p></li>\n    </ul>\n\n    <!-- SUMMARY -->\n    <div class=\"separator {{sum_active}}\"></div>\n    <div class=\"{{sum_active}}\">\n      <h3>To edit the module choose from the apparent options above.</h3>\n    </div>\n\n    <!-- PROPERTIES -->\n    <div class=\"separator {{prop_active}}\"></div>\n    <div id=\"properties\" class=\"{{prop_active}}\">\n      <div class=\"module-img\"\n        [ngStyle]=\"{'background-image':'url(' + moduleImgDisp + ')'}\"\n      ></div>\n      <input class=\"text-input\" type=\"text\" [(ngModel)]=\"moduleName\" placeholder=\"Module Name\">\n      <form class=\"type\">\n        <ul>\n          <li *ngFor=\"let type of types; let idx = index\">\n            <input type=\"radio\" id=\"{{ type.name }}\" name=\"selector\" (change)=\"onSelectionChange(type)\" [value]=\"type.id\" [checked]=\"(idx === selectedId)\">\n            <label for=\"{{ type.name }}\">\n              {{ type.name }}\n              <div class=\"check\"><div class=\"inside\"></div></div>\n            </label>\n          </li>\n        </ul>\n      </form>\n      <input class=\"text-input\" type=\"text\" [(ngModel)]=\"moduleImg\" placeholder=\"Module Image Source\"><br>\n      <textarea class=\"text-area\" style=\"margin-top: 0px;\" maxlength=\"100\" [(ngModel)]=\"moduleDesc\" placeholder=\"Description\"></textarea><br>\n\n      <div class=\"checker\">\n       <p>My module should be available for everyone.</p>\n         <section>\n           <div class=\"checkbox\">\n             <input type=\"checkbox\" value=\"public\" id=\"checkboxInput\" name=\"\" [checked]=\"isPublic\" (change)=\"isPublic = (isPublic === 0)?1:0\"/>\n             <label for=\"checkboxInput\"></label>\n          </div>\n        </section>\n      </div>\n\n      <div class=\"checker\">\n       <p>My module is ready to be published*.</p>\n         <section>\n           <div class=\"checkbox\">\n             <input type=\"checkbox\" value=\"ready\" id=\"checkboxInput\" name=\"\" [checked]=\"isFinished\" (change)=\"isFinished = (isFinished === 0)?1:0\"/>\n             <label for=\"checkboxInput\"></label>\n          </div>\n        </section>\n      </div>\n\n      <button type=\"button\" name=\"button\" (click)=\"setModule()\" [disabled]=\"invalid()\">Submit</button>\n      <p class=\"note\" *ngIf=\"isFinished === 1\">\n        If you selected this module to be published a Moderator will determine if it fits the required criteria to be published.<br>\n        If it is successfully published you will lose all your rights to edit this module, but if you need to edit the module you\n        can revoke its release, but if you do so, this module will lose its tracked rating and view count.\n      </p>\n    </div>\n\n    <!-- GRAPH -->\n    <div class=\"separator {{graph_active}}\"></div>\n    <div id=\"graph\" class=\"{{graph_active}}\">\n      <h3>ISOLATED SCENES</h3>\n      <div class=\"isolated\">\n\n        <div id=\"node-new\"  class=\"node\" (click)=\"createScene()\">\n          <div class=\"node-body\" (mouseenter)=\"hovered(0)\" >&#xf067;</div>\n        </div>\n        <div id=\"node-del\"  class=\"node\" (click)=\"deleteScene()\" >\n          <div class=\"node-body\" (mouseenter)=\"hovered(0)\" >&#xf00d;</div>\n        </div>\n        <div id=\"node-{{node.id}}\"  class=\"node\" *ngFor=\"let node of isolated\">\n          <div [ngClass]=\"{'highlight': isOver(node.id), 'selected' : isSelected(node.id)}\" class=\"node-body isolated-node\"\n            (click)=\"select(node.id, node.mask)\" (mouseenter)=\"hovered(node.id)\">{{node.mask}}</div>\n        </div>\n      </div>\n      <h3>GRAPH</h3>\n      <div id=\"check\" class=\"graph\">\n\n        <div class=\"level\" *ngFor=\"let level of pos_nodes; let i = index\">\n          <div id=\"node-{{node.id}}\"  class=\"node\" *ngFor=\"let node of level\">\n            <div [ngClass]=\"\n            {\n             'highlightchild': isOverParent(node.id) || isOnPath(node.id),\n             'highlight': isOver(node.id),\n             'selected' : isSelected(node.id),\n             'unreachable' : isUnreachable(node.id) ,\n             'root' : node.id === startId ,\n             'deadend' : isDeadend(node.id)\n           }\" class=\"node-body\" (click)=\"select(node.id, node.mask)\" (dblclick)=\"showPathFromRoot(node.id)\"\n           (mouseenter)=\"hovered(node.id)\">{{node.mask}} {{index}}</div>\n          </div>\n        </div>\n\n        <div id=\"line-{{link.from}}-{{link.to}}\" [ngClass]=\"{\n            'unreachable' : isUnreachable(link.from),\n            'highlightline': isOver(link.from),\n            'highlightlinepath': isLineOnPath(link.from, link.to)\n          }\" class=\"node-line\" *ngFor=\"let link of links\"\n          [style.height.px]=\"100\"></div>\n\n      </div>\n\n    </div>\n\n    <!-- BLUEPRINT -->\n    <div class=\"separator {{blueprint_active}}\"></div>\n    <div id=\"plan\" class=\"{{blueprint_active}}\">\n      <div id=\"blueprint\"\n      (mousemove)=\"onMouseMove($event)\" (mouseup)=\"onMouseButton($event,'none', 0)\" (mouseleave)=\"onMouseButton($event,'none', 0)\"\n      (touchmove)=\"onMouseMove($event)\" (touchend)=\"onMouseButton($event,'none', 0)\" (touchcancel)=\"onMouseButton($event,'none', 0)\" >\n        <div #obj{{curr.obj.id}} id=\"obj{{curr.obj.id}}\" class=\"object\" *ngFor=\"let curr of currentObjects\" style=\"position:absolute;\"\n                [style.left.px] = \"stageX(curr.obj.x)\"\n                [style.top.px] = \"stageY(curr.obj.y)\"\n                [style.width.px] = \"stageX(curr.obj.w)\"\n                [style.height.px] = \"stageY(curr.obj.h)\"\n                [style.zIndex] = \"curr.obj.z\"\n              >\n\n          <div class=\"move\" (mousedown)=\"onMouseButton($event,'drag',curr.obj.id)\" (draggable)=\"onMouseButton($event,'drag',curr.obj.id)\"\n            [ngClass]=\"{ 'move-selected' : curr.mask === currentObject.mask }\"\n          >\n          </div>\n\n          <div class=\"n-resize activeresize\" (mousedown)=\"onMouseButton($event,'n',curr.obj.id)\" (touchstart)=\"onMouseButton($event,'n',curr.obj.id)\"\n            [ngStyle]=\"{'border-color': curr.mask === currentObject.mask ? '#0F0' : ''}\"></div>\n          <div class=\"s-resize\" (mousedown)=\"onMouseButton($event,'s',curr.obj.id)\" (touchstart)=\"onMouseButton($event,'s',curr.obj.id)\"\n            [ngStyle]=\"{'border-color': curr.mask === currentObject.mask ? '#0F0' : ''}\"></div>\n          <div class=\"w-resize\" (mousedown)=\"onMouseButton($event,'w',curr.obj.id)\" (touchstart)=\"onMouseButton($event,'w',curr.obj.id)\"\n            [ngStyle]=\"{'border-color': curr.mask === currentObject.mask ? '#0F0' : ''}\"></div>\n          <div class=\"e-resize\" (mousedown)=\"onMouseButton($event,'e',curr.obj.id)\" (touchstart)=\"onMouseButton($event,'e',curr.obj.id)\"\n            [ngStyle]=\"{'border-color': curr.mask === currentObject.mask ? '#0F0' : ''}\"></div>\n          <div class=\"nw-resize\" (mousedown)=\"onMouseButton($event,'nw',curr.obj.id)\" (touchstart)=\"onMouseButton($event,'nw',curr.obj.id)\">\n            <div class=\"nw-resize-n\"\n              [ngStyle]=\"{'border-color': curr.mask === currentObject.mask ? '#0F0' : ''}\"></div>\n            <div class=\"nw-resize-w\"\n              [ngStyle]=\"{'border-color': curr.mask === currentObject.mask ? '#0F0' : ''}\"></div>\n          </div>\n          <div class=\"ne-resize\" (mousedown)=\"onMouseButton($event,'ne',curr.obj.id)\" (touchstart)=\"onMouseButton($event,'ne',curr.obj.id)\">\n            <div class=\"ne-resize-n\"\n              [ngStyle]=\"{'border-color': curr.mask === currentObject.mask ? '#0F0' : ''}\"></div>\n            <div class=\"ne-resize-e\"\n              [ngStyle]=\"{'border-color': curr.mask === currentObject.mask ? '#0F0' : ''}\"></div>\n          </div>\n          <div class=\"sw-resize\" (mousedown)=\"onMouseButton($event,'sw',curr.obj.id)\" (touchstart)=\"onMouseButton($event,'sw',curr.obj.id)\">\n            <div class=\"sw-resize-s\"\n              [ngStyle]=\"{'border-color': curr.mask === currentObject.mask ? '#0F0' : ''}\"></div>\n            <div class=\"sw-resize-w\"\n              [ngStyle]=\"{'border-color': curr.mask === currentObject.mask ? '#0F0' : ''}\"></div>\n          </div>\n          <div class=\"se-resize\" (mousedown)=\"onMouseButton($event,'se',curr.obj.id)\" (touchstart)=\"onMouseButton($event,'se',curr.obj.id)\">\n            <div class=\"se-resize-s\"\n              [ngStyle]=\"{'border-color': curr.mask === currentObject.mask ? '#0F0' : ''}\"></div>\n            <div class=\"se-resize-e\"\n              [ngStyle]=\"{'border-color': curr.mask === currentObject.mask ? '#0F0' : ''}\"></div>\n          </div>\n        </div>\n        <div class=\"mask\" *ngFor=\"let curr of currentObjects\" (mousedown)=\"onMouseButton($event,'drag',curr.obj.id)\" (touchstart)=\"onMouseButton($event,'drag',curr.obj.id)\"\n          (click)=\"LOG(curr.obj.action.split(':'))\"\n          [style.left.px] = \"stageX(curr.obj.x) + stageX(curr.obj.w)/2 - 15\"\n          [style.top.px] = \"stageY(curr.obj.y) + stageY(curr.obj.h)/2 - 15\"\n          [style.zIndex] = \"curr.obj.z + 2000\"\n          [ngClass]=\"{\n            'listener' : curr.obj.action.split(':')[0] !== 'none' ,\n            'action' : curr.obj.action.split(':')[0] !== 'none' && curr.obj.action.split(':')[1] !== '',\n            'target' : curr.obj.action.split(':')[0] !== 'none' && curr.obj.action.split(':')[1] !== '' && curr.obj.action.split(':')[2] !== ''\n          }\"\n        >{{curr.mask}}</div>\n      </div>\n\n      <div id=\"objectparams\" *ngIf=\"selectedMask !== -1\">\n        <!-- <h3>Selected Object: {{maskId}}</h3> -->\n        <div id=\"sceneproperties\"\n          [ngStyle]=\"{'display': (sceneProp)?'block':'none' }\"\n        >\n        <textarea class=\"text-area\" type=\"text\" [(ngModel)]=\"currentScene.background\" placeholder=\"Background\"></textarea>\n\n        </div>\n        <div id=\"objectproperties\"\n          [ngStyle]=\"{'display': (objectProp)?'block':'none' }\"\n        >\n          <input class=\"text-input-editor\" type=\"text\" [(ngModel)]=\"currentObject.obj.type\" placeholder=\"Type\">\n          <input class=\"text-input-editor\" type=\"text\" [(ngModel)]=\"currentObject.maskAction\" (input)=\"maskingAction()\" placeholder=\"Action\">\n          <input class=\"text-input-editor\" type=\"text\" [(ngModel)]=\"currentObject.obj.event\" placeholder=\"Event\">\n          <br>\n          <textarea class=\"text-area\" type=\"text\" [(ngModel)]=\"currentObject.obj.cont\" placeholder=\"Content\"></textarea>\n          <br>\n          <textarea class=\"text-area\" type=\"text\" [(ngModel)]=\"currentObject.obj.style\" placeholder=\"Style\"></textarea>\n          <br>\n          <input class=\"text-input-editor\" type=\"text\" [(ngModel)]=\"currentObject.obj.x\" placeholder=\"Coordinate X\">\n          <input class=\"text-input-editor\" type=\"text\" [(ngModel)]=\"currentObject.obj.y\" placeholder=\"Coordinate Y\">\n          <input class=\"text-input-editor\" type=\"text\" [(ngModel)]=\"currentObject.obj.z\" placeholder=\"Coordinate Z\">\n          <br>\n          <input class=\"text-input-editor\" type=\"text\" [(ngModel)]=\"currentObject.obj.w\" placeholder=\"Width\">\n          <input class=\"text-input-editor\" type=\"text\" [(ngModel)]=\"currentObject.obj.h\" placeholder=\"Height\">\n        </div>\n        <div id=\"editbuttons\">\n          <button title=\"Scene Properties\"(click)=\"toggleSceneProp()\"\n            [ngStyle]=\"{'color': (sceneProp)?'#0C0':'' }\"\n          ><p>&#xf022;</p></button>\n          <button title=\"Object Properties\" (click)=\"toggleObjectProp()\"\n            [ngStyle]=\"{'color': (objectProp)?'#0C0':'' }\"\n          ><p>&#xf03e;</p></button>\n          <button title=\"Add Object\" class=\"addObject\" (click)=\"addObject()\" ><p>&#xf055;</p></button>\n          <button  title=\"Remove Selected Object\" class=\"removeObject\"(click)=\"removeObject(maskId)\" [disabled]=\"maskId === 1 || currentObject.obj.action !== 'none' \">\n            <p>&#xf056;</p></button>\n          <button title=\"Upload Changes Properties\" class=\"uploadChanges\" (click)=\"submitScene()\" ><p>&#xf0ee;</p></button>\n        </div>\n\n      </div>\n\n    </div>\n    <!-- CANVAS -->\n    <div class=\"separator {{canvas_active}}\"></div>\n    <div id=\"displayCanvas\" class=\"{{canvas_active}}\">\n      <div id=\"stage\">\n\n        <div id=\"current\" class=\" scene {{currentAnim}} \" [ngClass]=\"getCurrentAct()\"\n        [ngStyle]=\"canvasScene.getStyle()\">\n          <div id=\"sceneObject\" *ngFor =\"let obj of canvasScene.objects\"\n            class=\"{{activeEvent(obj.getEvents())}}\"\n            [ngClass]=\"{'link' : obj.action.split(':')[0] === 'click'}\"\n            (click)=\"handleSceneClicks(obj.action)\"\n            [ngStyle]=\"obj.getStyle(canvasDisplayW, canvasDisplayH)\"\n          >\n            <p *ngIf=\"obj.type === 'txt'\">{{obj.cont}}</p>\n          </div>\n        </div>\n      </div>\n      <div id=\"canvasbuttons\">\n        <!-- <button (click)=\"toggleSceneProp()\" >&#xf022;</button> -->\n        <button (click)=\"prevAct()\" >&#xf0a8;</button>\n        <button disabled >{{currentAct}}</button>\n        <button (click)=\"nextAct()\" >&#xf0a9;</button>\n        <!-- <button (click)=\"submitScene()\" >&#xf0ee;</button> -->\n      </div>\n    </div>\n\n  </ng-template>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/editor/editor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  background-image: url(" + __webpack_require__("../../../../../src/media/backgrounds/smitd_bg_crystals.png") + ");\n  background-repeat: repeat;\n  background-position: top;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n#editor {\n  background: linear-gradient(-90deg, transparent 0%, rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 0.5) 90%, transparent 100%);\n  width: 100%;\n  height: auto; }\n\n@media (min-width: 720px) {\n  #editor {\n    width: 640px; } }\n\n@media (min-width: 1000px) {\n  #editor {\n    width: 920px; } }\n\n@media (min-width: 1200px) {\n  #editor {\n    width: 1140px; } }\n\n@media (min-width: 0) {\n  #editor a {\n    color: #555;\n    text-decoration: none;\n    margin: 10px;\n    margin-top: 20px;\n    transition: color 0.2s; }\n    #editor a:hover {\n      color: #FFF; }\n  #editor-menu {\n    width: 100%;\n    list-style: none;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 0;\n    margin: 0 0 -10px 0;\n    background: #000;\n    min-height: 40px;\n    overflow: hidden; }\n  #editor-menu li {\n    font-family: ICON;\n    font-size: 200%;\n    color: #646464;\n    height: 40px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    transition: color 0.25s;\n    overflow: hidden; }\n    #editor-menu li:hover {\n      color: #0F0; }\n  #editor-menu p {\n    margin: 0; }\n  #editor-menu .true {\n    color: #FFF; }\n    #editor-menu .true:hover {\n      color: #A00; }\n  .module-img {\n    height: 200px;\n    width: 200px;\n    margin-left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    background: rgba(0, 0, 0, 0.5);\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    border-radius: 50%;\n    border: 5px solid #323232; }\n  .false {\n    display: none; }\n  .true {\n    display: block; }\n  .separator {\n    height: 1px;\n    width: 80%;\n    background-color: #323232;\n    border: 2px solid #323232;\n    margin: 10px 10%;\n    box-shadow: 0 0 10px 5px black; } }\n\n@media (min-width: 0) {\n  .text-input {\n    font-family: CGB;\n    font-size: 120%;\n    color: #FFF;\n    width: 60%;\n    max-width: 360px;\n    height: 30px;\n    border-radius: 5px;\n    text-align: center;\n    background-color: #323232;\n    border: 5px solid #323232;\n    margin: 10px;\n    box-shadow: 0 0 10px 5px black;\n    transition: background 0.2s, border 0.2s, color 0.2s; }\n    .text-input:focus {\n      background-color: #1e1e1e;\n      outline: none; }\n  .text-area {\n    resize: vertical;\n    font-family: CGR;\n    font-size: 100%;\n    color: #FFF;\n    width: 60%;\n    max-width: 360px;\n    height: 30px;\n    min-height: 30px;\n    border-radius: 5px;\n    text-align: justify;\n    background-color: #323232;\n    border: 5px solid #323232;\n    margin: 10px;\n    box-shadow: 0 0 10px 5px black;\n    transition: background 0.2s, border 0.2s, color 0.2s; }\n    .text-area:focus {\n      background-color: #1e1e1e;\n      outline: none; }\n  button {\n    cursor: pointer;\n    font-family: CGB;\n    font-size: 120%;\n    color: #FFF;\n    width: 62%;\n    max-width: 370px;\n    height: 40px;\n    border-radius: 5px;\n    text-align: center;\n    background-color: #1e1e1e;\n    border: 5px solid #1e1e1e;\n    margin: 10px;\n    box-shadow: 0 0 10px 5px black;\n    transition: background 0.2s, border 0.2s, color 0.2s; }\n    button:focus {\n      outline: none;\n      background-color: #333;\n      border: 5px solid #333; }\n    button:hover {\n      background-color: #333;\n      border: 5px solid #333; }\n    button:active {\n      color: #999;\n      background-color: #111;\n      border: 5px solid #111; }\n  button:disabled {\n    color: #999;\n    background-color: #111;\n    border: 5px solid #111;\n    cursor: default; }\n  .note {\n    text-align: justify;\n    margin: -5px 0 10px 0;\n    font-size: 90%;\n    color: #646464;\n    width: 60%;\n    max-width: 360px;\n    overflow: hidden;\n    position: relative;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%); }\n  .type {\n    width: 60%;\n    max-width: 360px;\n    min-height: 35px;\n    overflow: hidden;\n    position: relative;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    background-color: #323232;\n    border: 5px solid #323232;\n    border-radius: 5px;\n    box-shadow: 0 0 10px 5px black; }\n  .type ul {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    list-style: none;\n    font-family: CGB;\n    font-size: 120%;\n    color: #FFF;\n    text-align: center;\n    padding: 0;\n    margin: 0; }\n  .type ul li {\n    color: #969696;\n    height: 80px;\n    margin: 10px; }\n  .type ul li input[type=radio] {\n    position: absolute;\n    visibility: hidden; }\n  .type ul li label {\n    display: block;\n    position: relative;\n    cursor: pointer;\n    transition: color .25s linear; }\n  .type ul li:hover label {\n    color: #FFFFFF; }\n  .type ul li .check {\n    position: relative;\n    margin: 10px 0;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    border: 5px solid #1e1e1e;\n    border-radius: 100%;\n    height: 25px;\n    width: 25px;\n    transition: border .25s linear;\n    -webkit-transition: border .25s linear; }\n  .type ul li label:hover .check {\n    border: 5px solid #FFF; }\n  .type ul li input[type=radio]:checked ~ label:hover .check {\n    border: 5px solid #0F0; }\n  .type ul li .check::before {\n    display: block;\n    position: relative;\n    content: '';\n    border-radius: 100%;\n    height: 15px;\n    width: 15px;\n    top: 5px;\n    margin: auto;\n    transition: background 0.25s linear;\n    -webkit-transition: background 0.25s linear; }\n  .type ul li input[type=radio]:checked ~ label .check {\n    border: 5px solid #0F0; }\n  .type ul li input[type=radio]:checked ~ label .check::before {\n    background: #0F0; }\n  .type ul li input[type=radio]:checked ~ label {\n    color: #0F0; }\n  .checker {\n    font-family: CGR;\n    color: #FFF;\n    margin: 10px;\n    margin-left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    width: 62%;\n    max-width: 370px;\n    text-align: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .checker p {\n    margin: 0; }\n  .checkbox input[type=checkbox] {\n    opacity: 0;\n    width: 80px;\n    height: 40px;\n    position: absolute;\n    left: -4px;\n    top: -5px;\n    z-index: 800;\n    cursor: pointer; }\n  .checkbox input[type=checkbox]:disabled {\n    opacity: 0;\n    width: 80px;\n    height: 40px;\n    position: absolute;\n    left: -4px;\n    top: -5px;\n    z-index: 800;\n    cursor: default; }\n  .checkbox {\n    width: 80px;\n    height: 40px;\n    background: #333;\n    margin-right: 10px;\n    border-radius: 50px;\n    position: relative;\n    box-shadow: 0 0 10px 5px black; }\n  .checkbox:before {\n    font-family: ICON;\n    content: '\\F00C';\n    position: absolute;\n    top: 5px;\n    left: 5px;\n    height: 30px;\n    width: 30px;\n    border-radius: 100%;\n    color: #0F0;\n    font-size: 20px;\n    line-height: 30px;\n    background-color: #222; }\n  .checkbox:after {\n    font-family: ICON;\n    content: '\\F00D';\n    position: absolute;\n    top: 5px;\n    left: 45px;\n    height: 30px;\n    width: 30px;\n    border-radius: 100%;\n    color: #F00;\n    font-size: 21px;\n    line-height: 30px;\n    background-color: #222; }\n  .checkbox label {\n    display: block;\n    width: 30px;\n    height: 30px;\n    border-radius: 50px;\n    transition: all .5s ease;\n    position: absolute;\n    top: 5px;\n    z-index: 1;\n    left: 5px;\n    background: red; }\n  .checkbox input[type=checkbox]:checked + label {\n    left: 45px;\n    background: lime; } }\n\n@media (min-width: 0) {\n  .graph {\n    width: 80%;\n    margin-left: 10%;\n    margin-right: 10%; }\n  h3 {\n    width: 100%;\n    text-align: center; }\n  .isolated {\n    width: 80%;\n    min-height: 100px;\n    max-height: 200px;\n    overflow: auto;\n    margin-left: 10%;\n    margin-right: 10%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .level {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .node {\n    position: relative;\n    width: 30px;\n    height: 30px;\n    margin: 10px; }\n  #node-new .node-body {\n    font-family: ICON;\n    text-align: center;\n    font-size: 75%;\n    line-height: 30px; }\n    #node-new .node-body:hover {\n      border: 2.5px solid #FA0;\n      z-index: 12;\n      background: #420; }\n    #node-new .node-body:active {\n      border: 2.5px solid #FB0;\n      z-index: 12;\n      background: #310; }\n  #node-del .node-body {\n    font-family: ICON;\n    text-align: center;\n    font-size: 75%;\n    line-height: 30px; }\n    #node-del .node-body:hover {\n      border: 2.5px solid #A00;\n      z-index: 12;\n      background: #300; }\n    #node-del .node-body:active {\n      border: 2.5px solid #F00;\n      z-index: 12;\n      background: #200; }\n  .node-body {\n    font-family: CGB;\n    position: absolute;\n    top: 0;\n    left: 0;\n    text-align: center;\n    line-height: 30px;\n    font-size: 12px;\n    color: #CCC;\n    z-index: 10;\n    width: 30px;\n    height: 30px;\n    background: #111;\n    border: 2.5px solid #333;\n    border-radius: 50%;\n    box-shadow: 0 0 4px 2px black;\n    transition: border 0.25s, background 0.25s; }\n  .node-body p {\n    width: 100%; }\n  .node-line {\n    position: absolute;\n    z-index: 8;\n    height: 0;\n    width: 0;\n    border: 1.5px solid #333;\n    background-color: #333;\n    margin: 10px;\n    border-radius: 50%;\n    box-shadow: 0 0 2px 1px black;\n    transition: border 0.25s, background 0.25s; }\n  .selected {\n    background: #090;\n    border: 2.5px solid darkgreen;\n    text-shadow: 0 0 5px black; }\n  .highlight {\n    border: 2.5px solid #0F0;\n    z-index: 12; }\n  .highlightchild {\n    border: 2.5px solid darkgreen;\n    z-index: 12; }\n  .deadend {\n    background: #300; }\n  .selected.deadend {\n    background: #900;\n    border: 2.5px solid #640000; }\n  .highlight.deadend {\n    border: 2.5px solid #F00; }\n  .highlightchild.deadend {\n    border: 2.5px solid #640000; }\n  .unreachable {\n    background: #003; }\n  .selected.unreachable {\n    background: #009;\n    border: 2.5px solid #0000c8; }\n  .highlight.unreachable {\n    border: 2.5px solid #00F; }\n  .highlightchild.unreachable {\n    border: 2.5px solid #0000c8; }\n  .root {\n    background: #420; }\n  .selected.root {\n    background: #960;\n    border: 2.5px solid #643c00; }\n  .highlight.root {\n    border: 2.5px solid #FA0; }\n  .highlightchild.root {\n    border: 2.5px solid #643c00; }\n  .highlightline {\n    border: 1.5px solid #0F0;\n    background-color: #0F0;\n    z-index: 11; }\n  .highlightlinepath {\n    border: 1.5px solid #643c00;\n    background-color: #643c00;\n    z-index: 11; }\n  .highlightline.unreachable {\n    border: 1.5px solid #00F;\n    background-color: #00F;\n    z-index: 11; }\n  .highlightlinepath.unreachable {\n    border: 1.5px solid #0000c8;\n    background-color: #0000c8;\n    z-index: 11; }\n  .selected.isolated-node {\n    background: #969696;\n    border: 2.5px solid #646464; }\n  .highlight.isolated-node {\n    border: 2.5px solid #c8c8c8; } }\n\n@media (min-width: 0) and (min-width: 720px) {\n  .selected.isolated-node {\n    background: #969696;\n    border: 5px solid #646464; }\n  .highlight.isolated-node {\n    border: 5px solid #c8c8c8; }\n  #node-new .node-body {\n    font-size: 150%;\n    line-height: 50px; }\n    #node-new .node-body:hover {\n      border: 5px solid #FA0; }\n    #node-new .node-body:active {\n      border: 5px solid #FB0; }\n  #node-del .node-body {\n    font-size: 150%;\n    line-height: 48px; }\n    #node-del .node-body:hover {\n      border: 5px solid #A00; }\n    #node-del .node-body:active {\n      border: 5px solid #F00; }\n  .node {\n    position: relative;\n    width: 60px;\n    height: 60px;\n    margin: 10px; }\n  .node-body {\n    line-height: 50px;\n    font-size: 20px;\n    width: 50px;\n    height: 50px;\n    border: 5px solid #333; }\n  .node-line {\n    border: 2.5px solid #333; }\n  .selected {\n    background: #090;\n    border: 5px solid darkgreen;\n    text-shadow: 0 0 5px rgba(0, 0, 0, 0.5); }\n  .highlight {\n    border: 5px solid #0F0;\n    z-index: 12; }\n  .highlightchild {\n    border: 5px solid darkgreen;\n    z-index: 12; }\n  .deadend {\n    background: #300; }\n  .selected.deadend {\n    background: #900;\n    border: 5px solid #640000; }\n  .highlight.deadend {\n    border: 5px solid #F00; }\n  .highlightchild.deadend {\n    border: 5px solid #640000; }\n  .unreachable {\n    background: #003; }\n  .selected.unreachable {\n    background: #009;\n    border: 5px solid #0000c8; }\n  .highlight.unreachable {\n    border: 5px solid #00F; }\n  .highlightchild.unreachable {\n    border: 5px solid #0000c8; }\n  .root {\n    background: #420; }\n  .selected.root {\n    background: #960;\n    border: 5px solid #643c00; }\n  .highlight.root {\n    border: 5px solid #FA0; }\n  .highlightchild.root {\n    border: 5px solid #643c00; }\n  .highlightline {\n    border: 2.5px solid #0F0;\n    background-color: #0F0;\n    z-index: 11; }\n  .highlightlinepath {\n    border: 2.5px solid #643c00;\n    background-color: #643c00;\n    z-index: 11; }\n  .highlightline.unreachable {\n    border: 2.5px solid #00F;\n    background-color: #00F;\n    z-index: 11; }\n  .highlightlinepath.unreachable {\n    border: 2.5px solid #0000c8;\n    background-color: #0000c8;\n    z-index: 11; } }\n\n@media (min-width: 0) {\n  #plan {\n    margin-bottom: 10px; }\n  #blueprint {\n    overflow: hidden;\n    position: relative;\n    margin-left: 10vw;\n    width: 80vw;\n    height: 45vw;\n    background: #141414;\n    background: linear-gradient(-90deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));\n    box-shadow: 0 0 10px 5px black;\n    margin-bottom: 0;\n    -webkit-touch-callout: none;\n    /* iOS Safari */\n    -webkit-user-select: none;\n    /* Safari */\n    /* Konqueror HTML */\n    -moz-user-select: none;\n    /* Firefox */\n    -ms-user-select: none;\n    /* Internet Explorer/Edge */\n    user-select: none;\n    /* Non-prefixed version, currently\r\n                                     supported by Chrome and Opera */ } }\n\n@media (min-width: 0) and (min-width: 720px) {\n  #blueprint {\n    margin-left: 62px;\n    width: 512px;\n    height: 288px; } }\n\n@media (min-width: 0) and (min-width: 1000px) {\n  #blueprint {\n    margin-left: 92px;\n    width: 736px;\n    height: 416px; } }\n\n@media (min-width: 0) and (min-width: 1200px) {\n  #blueprint {\n    margin-left: 114px;\n    width: 912px;\n    height: 512px; } }\n\n@media (min-width: 0) {\n  #objectparams {\n    overflow: hidden;\n    position: relative;\n    min-height: 40px;\n    margin-top: 0;\n    margin-bottom: 10px;\n    margin-left: 10%;\n    width: 80%; }\n  #sceneproperties {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    width: 100%;\n    border-top: 5px solid #1e1e1e;\n    background: #141414;\n    background: linear-gradient(-90deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));\n    box-shadow: 0 0 10px 5px black; }\n  #objectproperties {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    width: 100%;\n    border-top: 5px solid #1e1e1e;\n    background: #141414;\n    background: linear-gradient(-90deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));\n    box-shadow: 0 0 10px 5px black; }\n  #editbuttons {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    width: 100%;\n    border-top: 5px solid #1e1e1e; }\n  .text-input-editor {\n    font-family: CGB;\n    font-size: 100%;\n    color: #FFF;\n    width: 60%;\n    max-width: 140px;\n    height: 30px;\n    border-radius: 5px;\n    text-align: center;\n    background-color: #323232;\n    border: 5px solid #323232;\n    margin: 10px;\n    box-shadow: 0 0 10px 5px black;\n    transition: background 0.2s, border 0.2s, color 0.2s; }\n    .text-input-editor:focus {\n      background-color: #1e1e1e;\n      outline: none; }\n  .object {\n    overflow: hidden;\n    position: relative;\n    overflow: hidden; }\n  #objectparams .text-area {\n    resize: vertical;\n    font-family: CGB;\n    font-size: 100%;\n    color: #FFF;\n    width: 60%;\n    max-width: 490px;\n    height: 80px;\n    line-height: 30px;\n    min-height: 30px;\n    border-radius: 5px;\n    text-align: justify;\n    background-color: #323232;\n    border: 5px solid #323232;\n    margin: 10px;\n    box-shadow: 0 0 10px 5px black;\n    transition: background 0.2s, border 0.2s, color 0.2s; }\n    #objectparams .text-area:focus {\n      background-color: #1e1e1e;\n      outline: none; }\n  #objectparams button {\n    cursor: pointer;\n    font-family: ICON;\n    font-size: 120%;\n    color: #AAA;\n    width: 60%;\n    max-width: 40px;\n    height: 40px;\n    border-radius: 0;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    text-align: center;\n    background-color: #1e1e1e;\n    border: 5px solid #1e1e1e;\n    margin: 10px;\n    margin-top: -5px;\n    box-shadow: 0 0 10px 5px black;\n    transition: all 0.2s; }\n    #objectparams button:hover {\n      color: #FFF;\n      background-color: #333;\n      border: 5px solid #333; }\n    #objectparams button:active {\n      color: #FFF;\n      color: #999;\n      background-color: #111;\n      border: 5px solid #111; }\n  #objectparams button:disabled {\n    color: #555;\n    background-color: #111;\n    border: 5px solid #111;\n    cursor: default; }\n  #objectparams #editbuttons .addObject:focus {\n    color: #AAA; }\n  #objectparams #editbuttons .addObject:hover {\n    color: #FA0; }\n  #objectparams #editbuttons .addObject:active {\n    color: #D80; }\n  #objectparams #editbuttons .removeObject:focus {\n    color: #AAA; }\n  #objectparams #editbuttons .removeObject:hover {\n    color: #C00; }\n  #objectparams #editbuttons .removeObject:active {\n    color: #A00; }\n  #objectparams #editbuttons .uploadChanges:focus {\n    color: #AAA; }\n  #objectparams #editbuttons .uploadChanges:hover {\n    color: #0C0; }\n  #objectparams #editbuttons .uploadChanges:active {\n    color: #0A0; }\n  #objectparams #editbuttons :disabled:focus {\n    color: #555; }\n  #objectparams #editbuttons :disabled:hover {\n    color: #555; }\n  #objectparams #editbuttons :disabled:active {\n    color: #555; }\n  #objectparams button p {\n    margin: 0;\n    margin-left: -1px; }\n  #objectparams .addObject p {\n    margin: 0;\n    margin-left: 0px; }\n  #objectparams .removeObject p {\n    margin: 0;\n    margin-left: 0px; }\n  .move {\n    cursor: move;\n    position: absolute;\n    z-index: 9;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(10, 10, 10, 0.65);\n    outline: 4px solid rgba(100, 100, 100, 0.2);\n    outline-offset: -4px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .move:active {\n      background-color: rgba(10, 10, 10, 0.85);\n      outline: 4px solid rgba(100, 100, 100, 0.25); }\n  .move-selected {\n    background-color: rgba(0, 20, 0, 0.65);\n    outline: 4px solid rgba(0, 200, 0, 0.2); }\n    .move-selected:active {\n      background-color: rgba(0, 20, 0, 0.85);\n      outline: 4px solid rgba(0, 200, 0, 0.3); }\n  .mask {\n    cursor: move;\n    position: absolute;\n    z-index: 2000;\n    width: 20px;\n    height: 20px;\n    line-height: 20px;\n    text-align: center;\n    overflow: hidden;\n    border-radius: 50%;\n    font-size: 15px;\n    font-family: sans-serif;\n    font-weight: bold;\n    margin: 5px;\n    padding: 0;\n    background-color: #444; }\n  .listener {\n    background-color: #800; }\n  .action {\n    background-color: #860; }\n  .target {\n    background-color: #080; }\n  .n-resize {\n    cursor: n-resize;\n    position: absolute;\n    z-index: 9;\n    left: 50%;\n    top: 0;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    width: 10px;\n    height: 0px;\n    border-top: 4px solid #646464;\n    transition: border 0.25s, width 0.25s; }\n    .n-resize:hover {\n      width: 15px;\n      border-top: 4px solid #969696; }\n  .s-resize {\n    cursor: s-resize;\n    position: absolute;\n    z-index: 9;\n    left: 50%;\n    bottom: 0;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    width: 10px;\n    height: 0px;\n    border-bottom: 4px solid #646464;\n    transition: border 0.25s, width 0.25s; }\n    .s-resize:hover {\n      width: 15px;\n      border-bottom: 4px solid #969696; }\n  .w-resize {\n    cursor: w-resize;\n    position: absolute;\n    z-index: 9;\n    left: 0;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    width: 0px;\n    height: 10px;\n    border-left: 4px solid #646464;\n    transition: border 0.25s, height 0.25s; }\n    .w-resize:hover {\n      height: 15px;\n      border-left: 4px solid #969696; }\n  .e-resize {\n    cursor: e-resize;\n    position: absolute;\n    z-index: 9;\n    right: 0;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    width: 0px;\n    height: 10px;\n    border-right: 4px solid #646464;\n    transition: border 0.25s, height 0.25s; }\n    .e-resize:hover {\n      height: 15px;\n      border-right: 4px solid #969696; }\n  .nw-resize {\n    cursor: nw-resize;\n    position: absolute;\n    z-index: 9;\n    left: 0;\n    top: 0;\n    width: 4px;\n    height: 4px; }\n    .nw-resize:hover .nw-resize-n {\n      width: 15px;\n      border-top: 4px solid #969696; }\n    .nw-resize:hover .nw-resize-w {\n      height: 15px;\n      border-left: 4px solid #969696; }\n    .nw-resize-n {\n      position: absolute;\n      z-index: 9;\n      left: 0;\n      top: 0;\n      width: 10px;\n      height: 0px;\n      border-top: 4px solid #646464;\n      transition: border 0.25s, width 0.25s; }\n    .nw-resize-w {\n      position: absolute;\n      z-index: 9;\n      left: 0;\n      top: 0;\n      width: 0px;\n      height: 10px;\n      border-left: 4px solid #646464;\n      transition: border 0.25s, height 0.25s; }\n  .ne-resize {\n    cursor: ne-resize;\n    position: absolute;\n    z-index: 9;\n    right: 0;\n    top: 0;\n    width: 4px;\n    height: 4px; }\n    .ne-resize:hover .ne-resize-n {\n      width: 15px;\n      border-top: 4px solid #969696; }\n    .ne-resize:hover .ne-resize-e {\n      height: 15px;\n      border-right: 4px solid #969696; }\n    .ne-resize-n {\n      position: absolute;\n      z-index: 9;\n      right: 0;\n      top: 0;\n      width: 10px;\n      height: 0px;\n      border-top: 4px solid #646464;\n      transition: border 0.25s, width 0.25s; }\n    .ne-resize-e {\n      position: absolute;\n      z-index: 9;\n      right: 0;\n      top: 0;\n      width: 0px;\n      height: 10px;\n      border-right: 4px solid #646464;\n      transition: border 0.25s, height 0.25s; }\n  .sw-resize {\n    cursor: sw-resize;\n    position: absolute;\n    z-index: 9;\n    left: 0;\n    bottom: 0;\n    width: 4px;\n    height: 4px; }\n    .sw-resize:hover .sw-resize-s {\n      width: 15px;\n      border-bottom: 4px solid #969696; }\n    .sw-resize:hover .sw-resize-w {\n      height: 15px;\n      border-left: 4px solid #969696; }\n    .sw-resize-s {\n      position: absolute;\n      z-index: 9;\n      left: 0;\n      bottom: 0;\n      width: 10px;\n      height: 0px;\n      border-bottom: 4px solid #646464;\n      transition: border 0.25s, width 0.25s; }\n    .sw-resize-w {\n      position: absolute;\n      z-index: 9;\n      left: 0;\n      bottom: 0;\n      width: 0px;\n      height: 10px;\n      border-left: 4px solid #646464;\n      transition: border 0.25s, height 0.25s; }\n  .se-resize {\n    cursor: se-resize;\n    position: absolute;\n    z-index: 9;\n    right: 0;\n    bottom: 0;\n    width: 4px;\n    height: 4px; }\n    .se-resize:hover .se-resize-s {\n      width: 15px;\n      border-bottom: 4px solid #969696; }\n    .se-resize:hover .se-resize-e {\n      height: 15px;\n      border-right: 4px solid #969696; }\n    .se-resize-s {\n      position: absolute;\n      z-index: 9;\n      right: 0;\n      bottom: 0;\n      width: 10px;\n      height: 0px;\n      border-bottom: 4px solid #646464;\n      transition: border 0.25s, width 0.25s; }\n    .se-resize-e {\n      position: absolute;\n      z-index: 9;\n      right: 0;\n      bottom: 0;\n      width: 0px;\n      height: 10px;\n      border-right: 4px solid #646464;\n      transition: border 0.25s, height 0.25s; } }\n\n@media (min-width: 0) {\n  #stage {\n    overflow: hidden;\n    position: relative;\n    margin-left: 10vw;\n    width: 80vw;\n    height: 45vw;\n    background-color: #000;\n    box-shadow: 0 0 10px 5px black; } }\n\n@media (min-width: 0) and (min-width: 720px) {\n  #stage {\n    margin-left: 62px;\n    width: 512px;\n    height: 288px; } }\n\n@media (min-width: 0) and (min-width: 1000px) {\n  #stage {\n    margin-left: 92px;\n    width: 736px;\n    height: 416px; } }\n\n@media (min-width: 0) and (min-width: 1200px) {\n  #stage {\n    margin-left: 114px;\n    width: 912px;\n    height: 512px; } }\n\n@media (min-width: 0) {\n  #canvasbuttons {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    margin-left: 10%;\n    width: 80%;\n    border-top: 5px solid #1e1e1e; }\n  #canvasbuttons button {\n    cursor: pointer;\n    font-family: ICON;\n    font-size: 120%;\n    color: #FFF;\n    width: 60%;\n    max-width: 40px;\n    height: 40px;\n    border-radius: 0;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    text-align: center;\n    background-color: #1e1e1e;\n    border: 5px solid #1e1e1e;\n    margin: 10px;\n    margin-top: -5px;\n    box-shadow: 0 0 10px 5px black;\n    transition: background 0.2s, border 0.2s, color 0.2s; }\n    #canvasbuttons button:focus {\n      outline: none;\n      background-color: #333;\n      border: 5px solid #333; }\n    #canvasbuttons button:hover {\n      background-color: #333;\n      border: 5px solid #333; }\n    #canvasbuttons button:active {\n      color: #999;\n      background-color: #111;\n      border: 5px solid #111; }\n  #canvasbuttons button:disabled {\n    font-family: CGB;\n    cursor: default;\n    text-align: center;\n    width: 60%;\n    max-width: 60px; }\n    #canvasbuttons button:disabled:focus {\n      outline: none;\n      background-color: #1e1e1e;\n      border: 5px solid #1e1e1e; }\n    #canvasbuttons button:disabled:hover {\n      background-color: #1e1e1e;\n      border: 5px solid #1e1e1e; }\n    #canvasbuttons button:disabled:active {\n      background-color: #1e1e1e;\n      border: 5px solid #1e1e1e; }\n  .scene {\n    overflow: hidden;\n    background-color: #222;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    -o-box-shadow: 0 0 10px 0 #111 inset, 0 0 10px 0 #111;\n    box-shadow: 0 0 10px 0 #111 inset, 0 0 10px 0 #111; }\n  .link {\n    cursor: pointer; }\n  /*maximum 10 events in van scene*/\n  .pas1 .event1 {\n    opacity: 1;\n    visibility: visible; }\n  .act1 .event1 {\n    -webkit-animation: fadeinevent 0.25s;\n            animation: fadeinevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas1 .event2 {\n    opacity: 0;\n    visibility: hidden; }\n  .act1 .event2 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas1 .event3 {\n    opacity: 0;\n    visibility: hidden; }\n  .act1 .event3 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas1 .event4 {\n    opacity: 0;\n    visibility: hidden; }\n  .act1 .event4 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas1 .event5 {\n    opacity: 0;\n    visibility: hidden; }\n  .act1 .event5 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas1 .event6 {\n    opacity: 0;\n    visibility: hidden; }\n  .act1 .event6 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas1 .event7 {\n    opacity: 0;\n    visibility: hidden; }\n  .act1 .event7 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas1 .event8 {\n    opacity: 0;\n    visibility: hidden; }\n  .act1 .event8 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas1 .event9 {\n    opacity: 0;\n    visibility: hidden; }\n  .act1 .event9 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas1 .event10 {\n    opacity: 0;\n    visibility: hidden; }\n  .act1 .event10 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  /*maximum 10 events in van scene*/\n  .pas2 .event1 {\n    opacity: 0;\n    visibility: hidden; }\n  .act2 .event1 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas2 .event2 {\n    opacity: 1;\n    visibility: visible; }\n  .act2 .event2 {\n    -webkit-animation: fadeinevent 0.25s;\n            animation: fadeinevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas2 .event3 {\n    opacity: 0;\n    visibility: hidden; }\n  .act2 .event3 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas2 .event4 {\n    opacity: 0;\n    visibility: hidden; }\n  .act2 .event4 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas2 .event5 {\n    opacity: 0;\n    visibility: hidden; }\n  .act2 .event5 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas2 .event6 {\n    opacity: 0;\n    visibility: hidden; }\n  .act2 .event6 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas2 .event7 {\n    opacity: 0;\n    visibility: hidden; }\n  .act2 .event7 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas2 .event8 {\n    opacity: 0;\n    visibility: hidden; }\n  .act2 .event8 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas2 .event9 {\n    opacity: 0;\n    visibility: hidden; }\n  .act2 .event9 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas2 .event10 {\n    opacity: 0;\n    visibility: hidden; }\n  .act2 .event10 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  /*maximum 10 events in van scene*/\n  .pas3 .event1 {\n    opacity: 0;\n    visibility: hidden; }\n  .act3 .event1 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas3 .event2 {\n    opacity: 0;\n    visibility: hidden; }\n  .act3 .event2 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas3 .event3 {\n    opacity: 1;\n    visibility: visible; }\n  .act3 .event3 {\n    -webkit-animation: fadeinevent 0.25s;\n            animation: fadeinevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas3 .event4 {\n    opacity: 0;\n    visibility: hidden; }\n  .act3 .event4 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas3 .event5 {\n    opacity: 0;\n    visibility: hidden; }\n  .act3 .event5 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas3 .event6 {\n    opacity: 0;\n    visibility: hidden; }\n  .act3 .event6 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas3 .event7 {\n    opacity: 0;\n    visibility: hidden; }\n  .act3 .event7 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas3 .event8 {\n    opacity: 0;\n    visibility: hidden; }\n  .act3 .event8 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas3 .event9 {\n    opacity: 0;\n    visibility: hidden; }\n  .act3 .event9 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas3 .event10 {\n    opacity: 0;\n    visibility: hidden; }\n  .act3 .event10 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  /*maximum 10 events in van scene*/\n  .pas4 .event1 {\n    opacity: 0;\n    visibility: hidden; }\n  .act4 .event1 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas4 .event2 {\n    opacity: 0;\n    visibility: hidden; }\n  .act4 .event2 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas4 .event3 {\n    opacity: 0;\n    visibility: hidden; }\n  .act4 .event3 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas4 .event4 {\n    opacity: 1;\n    visibility: visible; }\n  .act4 .event4 {\n    -webkit-animation: fadeinevent 0.25s;\n            animation: fadeinevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas4 .event5 {\n    opacity: 0;\n    visibility: hidden; }\n  .act4 .event5 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas4 .event6 {\n    opacity: 0;\n    visibility: hidden; }\n  .act4 .event6 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas4 .event7 {\n    opacity: 0;\n    visibility: hidden; }\n  .act4 .event7 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas4 .event8 {\n    opacity: 0;\n    visibility: hidden; }\n  .act4 .event8 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas4 .event9 {\n    opacity: 0;\n    visibility: hidden; }\n  .act4 .event9 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas4 .event10 {\n    opacity: 0;\n    visibility: hidden; }\n  .act4 .event10 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  /*maximum 10 events in van scene*/\n  .pas5 .event1 {\n    opacity: 0;\n    visibility: hidden; }\n  .act5 .event1 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas5 .event2 {\n    opacity: 0;\n    visibility: hidden; }\n  .act5 .event2 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas5 .event3 {\n    opacity: 0;\n    visibility: hidden; }\n  .act5 .event3 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas5 .event4 {\n    opacity: 0;\n    visibility: hidden; }\n  .act5 .event4 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas5 .event5 {\n    opacity: 1;\n    visibility: visible; }\n  .act5 .event5 {\n    -webkit-animation: fadeinevent 0.25s;\n            animation: fadeinevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas5 .event6 {\n    opacity: 0;\n    visibility: hidden; }\n  .act5 .event6 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas5 .event7 {\n    opacity: 0;\n    visibility: hidden; }\n  .act5 .event7 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas5 .event8 {\n    opacity: 0;\n    visibility: hidden; }\n  .act5 .event8 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas5 .event9 {\n    opacity: 0;\n    visibility: hidden; }\n  .act5 .event9 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas5 .event10 {\n    opacity: 0;\n    visibility: hidden; }\n  .act5 .event10 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  /*maximum 10 events in van scene*/\n  .pas6 .event1 {\n    opacity: 0;\n    visibility: hidden; }\n  .act6 .event1 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas6 .event2 {\n    opacity: 0;\n    visibility: hidden; }\n  .act6 .event2 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas6 .event3 {\n    opacity: 0;\n    visibility: hidden; }\n  .act6 .event3 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas6 .event4 {\n    opacity: 0;\n    visibility: hidden; }\n  .act6 .event4 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas6 .event5 {\n    opacity: 0;\n    visibility: hidden; }\n  .act6 .event5 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas6 .event6 {\n    opacity: 1;\n    visibility: visible; }\n  .act6 .event6 {\n    -webkit-animation: fadeinevent 0.25s;\n            animation: fadeinevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas6 .event7 {\n    opacity: 0;\n    visibility: hidden; }\n  .act6 .event7 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas6 .event8 {\n    opacity: 0;\n    visibility: hidden; }\n  .act6 .event8 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas6 .event9 {\n    opacity: 0;\n    visibility: hidden; }\n  .act6 .event9 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas6 .event10 {\n    opacity: 0;\n    visibility: hidden; }\n  .act6 .event10 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  /*maximum 10 events in van scene*/\n  .pas7 .event1 {\n    opacity: 0;\n    visibility: hidden; }\n  .act7 .event1 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas7 .event2 {\n    opacity: 0;\n    visibility: hidden; }\n  .act7 .event2 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas7 .event3 {\n    opacity: 0;\n    visibility: hidden; }\n  .act7 .event3 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas7 .event4 {\n    opacity: 0;\n    visibility: hidden; }\n  .act7 .event4 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas7 .event5 {\n    opacity: 0;\n    visibility: hidden; }\n  .act7 .event5 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas7 .event6 {\n    opacity: 0;\n    visibility: hidden; }\n  .act7 .event6 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas7 .event7 {\n    opacity: 1;\n    visibility: visible; }\n  .act7 .event7 {\n    -webkit-animation: fadeinevent 0.25s;\n            animation: fadeinevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas7 .event8 {\n    opacity: 0;\n    visibility: hidden; }\n  .act7 .event8 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas7 .event9 {\n    opacity: 0;\n    visibility: hidden; }\n  .act7 .event9 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas7 .event10 {\n    opacity: 0;\n    visibility: hidden; }\n  .act7 .event10 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  /*maximum 10 events in van scene*/\n  .pas8 .event1 {\n    opacity: 0;\n    visibility: hidden; }\n  .act8 .event1 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas8 .event2 {\n    opacity: 0;\n    visibility: hidden; }\n  .act8 .event2 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas8 .event3 {\n    opacity: 0;\n    visibility: hidden; }\n  .act8 .event3 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas8 .event4 {\n    opacity: 0;\n    visibility: hidden; }\n  .act8 .event4 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas8 .event5 {\n    opacity: 0;\n    visibility: hidden; }\n  .act8 .event5 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas8 .event6 {\n    opacity: 0;\n    visibility: hidden; }\n  .act8 .event6 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas8 .event7 {\n    opacity: 0;\n    visibility: hidden; }\n  .act8 .event7 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas8 .event8 {\n    opacity: 1;\n    visibility: visible; }\n  .act8 .event8 {\n    -webkit-animation: fadeinevent 0.25s;\n            animation: fadeinevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas8 .event9 {\n    opacity: 0;\n    visibility: hidden; }\n  .act8 .event9 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas8 .event10 {\n    opacity: 0;\n    visibility: hidden; }\n  .act8 .event10 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  /*maximum 10 events in van scene*/\n  .pas9 .event1 {\n    opacity: 0;\n    visibility: hidden; }\n  .act9 .event1 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas9 .event2 {\n    opacity: 0;\n    visibility: hidden; }\n  .act9 .event2 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas9 .event3 {\n    opacity: 0;\n    visibility: hidden; }\n  .act9 .event3 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas9 .event4 {\n    opacity: 0;\n    visibility: hidden; }\n  .act9 .event4 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas9 .event5 {\n    opacity: 0;\n    visibility: hidden; }\n  .act9 .event5 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas9 .event6 {\n    opacity: 0;\n    visibility: hidden; }\n  .act9 .event6 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas9 .event7 {\n    opacity: 0;\n    visibility: hidden; }\n  .act9 .event7 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas9 .event8 {\n    opacity: 0;\n    visibility: hidden; }\n  .act9 .event8 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas9 .event9 {\n    opacity: 1;\n    visibility: visible; }\n  .act9 .event9 {\n    -webkit-animation: fadeinevent 0.25s;\n            animation: fadeinevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas9 .event10 {\n    opacity: 0;\n    visibility: hidden; }\n  .act9 .event10 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  /*maximum 10 events in van scene*/\n  .pas10 .event1 {\n    opacity: 0;\n    visibility: hidden; }\n  .act10 .event1 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas10 .event2 {\n    opacity: 0;\n    visibility: hidden; }\n  .act10 .event2 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas10 .event3 {\n    opacity: 0;\n    visibility: hidden; }\n  .act10 .event3 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas10 .event4 {\n    opacity: 0;\n    visibility: hidden; }\n  .act10 .event4 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas10 .event5 {\n    opacity: 0;\n    visibility: hidden; }\n  .act10 .event5 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas10 .event6 {\n    opacity: 0;\n    visibility: hidden; }\n  .act10 .event6 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas10 .event7 {\n    opacity: 0;\n    visibility: hidden; }\n  .act10 .event7 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas10 .event8 {\n    opacity: 0;\n    visibility: hidden; }\n  .act10 .event8 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas10 .event9 {\n    opacity: 0;\n    visibility: hidden; }\n  .act10 .event9 {\n    -webkit-animation: fadeoutevent 0.25s;\n            animation: fadeoutevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  .pas10 .event10 {\n    opacity: 1;\n    visibility: visible; }\n  .act10 .event10 {\n    -webkit-animation: fadeinevent 0.25s;\n            animation: fadeinevent 0.25s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out; }\n  @-webkit-keyframes fadeinevent {\n    from {\n      opacity: 0;\n      visibility: hidden; }\n    to {\n      opacity: 1;\n      visibility: visible; } }\n  @keyframes fadeinevent {\n    from {\n      opacity: 0;\n      visibility: hidden; }\n    to {\n      opacity: 1;\n      visibility: visible; } }\n  @-webkit-keyframes fadeoutevent {\n    from {\n      opacity: 1;\n      visibility: visible; }\n    to {\n      opacity: 0;\n      visibility: hidden; } }\n  @keyframes fadeoutevent {\n    from {\n      opacity: 1;\n      visibility: visible; }\n    to {\n      opacity: 0;\n      visibility: hidden; } }\n  .fade {\n    -webkit-animation: fadein 0.8s;\n    /* Safari, Chrome and Opera > 12.1 */\n    /* Firefox < 16 */\n    /* Internet Explorer */\n    /* Opera < 12.1 */\n    animation: fadein 0.8s;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  @keyframes fadein {\n    from {\n      opacity: 0; }\n    to {\n      opacity: 1; } }\n  /* Firefox < 16 */\n  /* Safari, Chrome and Opera > 12.1 */\n  @-webkit-keyframes fadein {\n    from {\n      opacity: 0; }\n    to {\n      opacity: 1; } }\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  .swipe-up {\n    -webkit-animation: swipeinup 0.8s;\n    /* Safari, Chrome and Opera > 12.1 */\n    /* Firefox < 16 */\n    /* Internet Explorer */\n    /* Opera < 12.1 */\n    animation: swipeinup 0.8s;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  @keyframes swipeinup {\n    from {\n      -webkit-transform: translateY(100%);\n              transform: translateY(100%); }\n    to {\n      -webkit-transform: translateY(0);\n              transform: translateY(0); } }\n  /* Firefox < 16 */\n  /* Safari, Chrome and Opera > 12.1 */\n  @-webkit-keyframes swipeinup {\n    from {\n      -webkit-transform: translateY(100%);\n              transform: translateY(100%); }\n    to {\n      -webkit-transform: translateY(0);\n              transform: translateY(0); } }\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  .swipe-right {\n    -webkit-animation: swipeinright 0.8s;\n    /* Safari, Chrome and Opera > 12.1 */\n    /* Firefox < 16 */\n    /* Internet Explorer */\n    /* Opera < 12.1 */\n    animation: swipeinright 0.8s;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  @keyframes swipeinright {\n    from {\n      -webkit-transform: translateX(-100%);\n              transform: translateX(-100%); }\n    to {\n      -webkit-transform: translateX(0);\n              transform: translateX(0); } }\n  /* Firefox < 16 */\n  /* Safari, Chrome and Opera > 12.1 */\n  @-webkit-keyframes swipeinright {\n    from {\n      -webkit-transform: translateX(-100%);\n              transform: translateX(-100%); }\n    to {\n      -webkit-transform: translateX(0);\n              transform: translateX(0); } }\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  .swipe-down {\n    -webkit-animation: swipeindown 0.8s;\n    /* Safari, Chrome and Opera > 12.1 */\n    /* Firefox < 16 */\n    /* Internet Explorer */\n    /* Opera < 12.1 */\n    animation: swipeindown 0.8s;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  @keyframes swipeindown {\n    from {\n      -webkit-transform: translateY(-100%);\n              transform: translateY(-100%); }\n    to {\n      -webkit-transform: translateY(0);\n              transform: translateY(0); } }\n  /* Firefox < 16 */\n  /* Safari, Chrome and Opera > 12.1 */\n  @-webkit-keyframes swipeindown {\n    from {\n      -webkit-transform: translateY(-100%);\n              transform: translateY(-100%); }\n    to {\n      -webkit-transform: translateY(0);\n              transform: translateY(0); } }\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  .swipe-left {\n    -webkit-animation: swipeinleft 0.8s;\n    /* Safari, Chrome and Opera > 12.1 */\n    /* Firefox < 16 */\n    /* Internet Explorer */\n    /* Opera < 12.1 */\n    animation: swipeinleft 0.8s;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  @keyframes swipeinleft {\n    from {\n      -webkit-transform: translateX(100%);\n              transform: translateX(100%); }\n    to {\n      -webkit-transform: translateX(0);\n              transform: translateX(0); } }\n  /* Firefox < 16 */\n  /* Safari, Chrome and Opera > 12.1 */\n  @-webkit-keyframes swipeinleft {\n    from {\n      -webkit-transform: translateX(100%);\n              transform: translateX(100%); }\n    to {\n      -webkit-transform: translateX(0);\n              transform: translateX(0); } }\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  .fade-out {\n    -webkit-animation: fadeout 0.8s;\n    /* Safari, Chrome and Opera > 12.1 */\n    /* Firefox < 16 */\n    /* Internet Explorer */\n    /* Opera < 12.1 */\n    animation: fadeout 0.8s;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  @keyframes fadeout {\n    from {\n      opacity: 1; }\n    to {\n      opacity: 0; } }\n  /* Firefox < 16 */\n  /* Safari, Chrome and Opera > 12.1 */\n  @-webkit-keyframes fadeout {\n    from {\n      opacity: 1; }\n    to {\n      opacity: 0; } }\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  .swipe-out-up {\n    -webkit-animation: swipeoutup 0.8s;\n    /* Safari, Chrome and Opera > 12.1 */\n    /* Firefox < 16 */\n    /* Internet Explorer */\n    /* Opera < 12.1 */\n    animation: swipeoutup 0.8s;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  @keyframes swipeoutup {\n    from {\n      -webkit-transform: translateY(0);\n              transform: translateY(0); }\n    to {\n      -webkit-transform: translateY(-100%);\n              transform: translateY(-100%); } }\n  /* Firefox < 16 */\n  /* Safari, Chrome and Opera > 12.1 */\n  @-webkit-keyframes swipeoutup {\n    from {\n      -webkit-transform: translateY(0);\n              transform: translateY(0); }\n    to {\n      -webkit-transform: translateY(-100%);\n              transform: translateY(-100%); } }\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  .swipe-out-right {\n    -webkit-animation: swipeoutright 0.8s;\n    /* Safari, Chrome and Opera > 12.1 */\n    /* Firefox < 16 */\n    /* Internet Explorer */\n    /* Opera < 12.1 */\n    animation: swipeoutright 0.8s;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  @keyframes swipeoutright {\n    from {\n      -webkit-transform: translateX(0);\n              transform: translateX(0); }\n    to {\n      -webkit-transform: translateX(100%);\n              transform: translateX(100%); } }\n  /* Firefox < 16 */\n  /* Safari, Chrome and Opera > 12.1 */\n  @-webkit-keyframes swipeoutright {\n    from {\n      -webkit-transform: translateX(0);\n              transform: translateX(0); }\n    to {\n      -webkit-transform: translateX(100%);\n              transform: translateX(100%); } }\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  .swipe-out-down {\n    -webkit-animation: swipeoutdown 0.8s;\n    /* Safari, Chrome and Opera > 12.1 */\n    /* Firefox < 16 */\n    /* Internet Explorer */\n    /* Opera < 12.1 */\n    animation: swipeoutdown 0.8s;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  @keyframes swipeoutdown {\n    from {\n      -webkit-transform: translateY(0);\n              transform: translateY(0); }\n    to {\n      -webkit-transform: translateY(100%);\n              transform: translateY(100%); } }\n  /* Firefox < 16 */\n  /* Safari, Chrome and Opera > 12.1 */\n  @-webkit-keyframes swipeoutdown {\n    from {\n      -webkit-transform: translateY(0);\n              transform: translateY(0); }\n    to {\n      -webkit-transform: translateY(100%);\n              transform: translateY(100%); } }\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  .swipe-out-left {\n    -webkit-animation: swipeoutleft 0.8s;\n    /* Safari, Chrome and Opera > 12.1 */\n    /* Firefox < 16 */\n    /* Internet Explorer */\n    /* Opera < 12.1 */\n    animation: swipeoutleft 0.8s;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  @keyframes swipeoutleft {\n    from {\n      -webkit-transform: translateX(0);\n              transform: translateX(0); }\n    to {\n      -webkit-transform: translateX(-100%);\n              transform: translateX(-100%); } }\n  /* Firefox < 16 */\n  /* Safari, Chrome and Opera > 12.1 */\n  @-webkit-keyframes swipeoutleft {\n    from {\n      -webkit-transform: translateX(0);\n              transform: translateX(0); }\n    to {\n      -webkit-transform: translateX(-100%);\n              transform: translateX(-100%); } }\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  .fadeC {\n    -webkit-animation: fadeinC 0.8s;\n    /* Safari, Chrome and Opera > 12.1 */\n    /* Firefox < 16 */\n    /* Internet Explorer */\n    /* Opera < 12.1 */\n    animation: fadeinC 0.8s;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  @keyframes fadeinC {\n    from {\n      opacity: 0; }\n    to {\n      opacity: 1; } }\n  /* Firefox < 16 */\n  /* Safari, Chrome and Opera > 12.1 */\n  @-webkit-keyframes fadeinC {\n    from {\n      opacity: 0; }\n    to {\n      opacity: 1; } }\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  .swipe-upC {\n    -webkit-animation: swipeinupC 0.8s;\n    /* Safari, Chrome and Opera > 12.1 */\n    /* Firefox < 16 */\n    /* Internet Explorer */\n    /* Opera < 12.1 */\n    animation: swipeinupC 0.8s;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  @keyframes swipeinupC {\n    from {\n      -webkit-transform: translateY(100%);\n              transform: translateY(100%); }\n    to {\n      -webkit-transform: translateY(0);\n              transform: translateY(0); } }\n  /* Firefox < 16 */\n  /* Safari, Chrome and Opera > 12.1 */\n  @-webkit-keyframes swipeinupC {\n    from {\n      -webkit-transform: translateY(100%);\n              transform: translateY(100%); }\n    to {\n      -webkit-transform: translateY(0);\n              transform: translateY(0); } }\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  .swipe-rightC {\n    -webkit-animation: swipeinrightC 0.8s;\n    /* Safari, Chrome and Opera > 12.1 */\n    /* Firefox < 16 */\n    /* Internet Explorer */\n    /* Opera < 12.1 */\n    animation: swipeinrightC 0.8s;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  @keyframes swipeinrightC {\n    from {\n      -webkit-transform: translateX(-100%);\n              transform: translateX(-100%); }\n    to {\n      -webkit-transform: translateX(0);\n              transform: translateX(0); } }\n  /* Firefox < 16 */\n  /* Safari, Chrome and Opera > 12.1 */\n  @-webkit-keyframes swipeinrightC {\n    from {\n      -webkit-transform: translateX(-100%);\n              transform: translateX(-100%); }\n    to {\n      -webkit-transform: translateX(0);\n              transform: translateX(0); } }\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  .swipe-downC {\n    -webkit-animation: swipeindownC 0.8s;\n    /* Safari, Chrome and Opera > 12.1 */\n    /* Firefox < 16 */\n    /* Internet Explorer */\n    /* Opera < 12.1 */\n    animation: swipeindownC 0.8s;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  @keyframes swipeindownC {\n    from {\n      -webkit-transform: translateY(-100%);\n              transform: translateY(-100%); }\n    to {\n      -webkit-transform: translateY(0);\n              transform: translateY(0); } }\n  /* Firefox < 16 */\n  /* Safari, Chrome and Opera > 12.1 */\n  @-webkit-keyframes swipeindownC {\n    from {\n      -webkit-transform: translateY(-100%);\n              transform: translateY(-100%); }\n    to {\n      -webkit-transform: translateY(0);\n              transform: translateY(0); } }\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  .swipe-leftC {\n    -webkit-animation: swipeinleftC 0.8s;\n    /* Safari, Chrome and Opera > 12.1 */\n    /* Firefox < 16 */\n    /* Internet Explorer */\n    /* Opera < 12.1 */\n    animation: swipeinleftC 0.8s;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  @keyframes swipeinleftC {\n    from {\n      -webkit-transform: translateX(100%);\n              transform: translateX(100%); }\n    to {\n      -webkit-transform: translateX(0);\n              transform: translateX(0); } }\n  /* Firefox < 16 */\n  /* Safari, Chrome and Opera > 12.1 */\n  @-webkit-keyframes swipeinleftC {\n    from {\n      -webkit-transform: translateX(100%);\n              transform: translateX(100%); }\n    to {\n      -webkit-transform: translateX(0);\n              transform: translateX(0); } }\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  .fade-outC {\n    -webkit-animation: fadeoutC 0.8s;\n    /* Safari, Chrome and Opera > 12.1 */\n    /* Firefox < 16 */\n    /* Internet Explorer */\n    /* Opera < 12.1 */\n    animation: fadeoutC 0.8s;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  @keyframes fadeoutC {\n    from {\n      opacity: 1; }\n    to {\n      opacity: 0; } }\n  /* Firefox < 16 */\n  /* Safari, Chrome and Opera > 12.1 */\n  @-webkit-keyframes fadeoutC {\n    from {\n      opacity: 1; }\n    to {\n      opacity: 0; } }\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  .swipe-out-upC {\n    -webkit-animation: swipeoutupC 0.8s;\n    /* Safari, Chrome and Opera > 12.1 */\n    /* Firefox < 16 */\n    /* Internet Explorer */\n    /* Opera < 12.1 */\n    animation: swipeoutupC 0.8s;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  @keyframes swipeoutupC {\n    from {\n      -webkit-transform: translateY(0);\n              transform: translateY(0); }\n    to {\n      -webkit-transform: translateY(-100%);\n              transform: translateY(-100%); } }\n  /* Firefox < 16 */\n  /* Safari, Chrome and Opera > 12.1 */\n  @-webkit-keyframes swipeoutupC {\n    from {\n      -webkit-transform: translateY(0);\n              transform: translateY(0); }\n    to {\n      -webkit-transform: translateY(-100%);\n              transform: translateY(-100%); } }\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  .swipe-out-rightC {\n    -webkit-animation: swipeoutrightC 0.8s;\n    /* Safari, Chrome and Opera > 12.1 */\n    /* Firefox < 16 */\n    /* Internet Explorer */\n    /* Opera < 12.1 */\n    animation: swipeoutrightC 0.8s;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  @keyframes swipeoutrightC {\n    from {\n      -webkit-transform: translateX(0);\n              transform: translateX(0); }\n    to {\n      -webkit-transform: translateX(100%);\n              transform: translateX(100%); } }\n  /* Firefox < 16 */\n  /* Safari, Chrome and Opera > 12.1 */\n  @-webkit-keyframes swipeoutrightC {\n    from {\n      -webkit-transform: translateX(0);\n              transform: translateX(0); }\n    to {\n      -webkit-transform: translateX(100%);\n              transform: translateX(100%); } }\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  .swipe-out-downC {\n    -webkit-animation: swipeoutdownC 0.8s;\n    /* Safari, Chrome and Opera > 12.1 */\n    /* Firefox < 16 */\n    /* Internet Explorer */\n    /* Opera < 12.1 */\n    animation: swipeoutdownC 0.8s;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  @keyframes swipeoutdownC {\n    from {\n      -webkit-transform: translateY(0);\n              transform: translateY(0); }\n    to {\n      -webkit-transform: translateY(100%);\n              transform: translateY(100%); } }\n  /* Firefox < 16 */\n  /* Safari, Chrome and Opera > 12.1 */\n  @-webkit-keyframes swipeoutdownC {\n    from {\n      -webkit-transform: translateY(0);\n              transform: translateY(0); }\n    to {\n      -webkit-transform: translateY(100%);\n              transform: translateY(100%); } }\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  .swipe-out-leftC {\n    -webkit-animation: swipeoutleftC 0.8s;\n    /* Safari, Chrome and Opera > 12.1 */\n    /* Firefox < 16 */\n    /* Internet Explorer */\n    /* Opera < 12.1 */\n    animation: swipeoutleftC 0.8s;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  @keyframes swipeoutleftC {\n    from {\n      -webkit-transform: translateX(0);\n              transform: translateX(0); }\n    to {\n      -webkit-transform: translateX(-100%);\n              transform: translateX(-100%); } }\n  /* Firefox < 16 */\n  /* Safari, Chrome and Opera > 12.1 */\n  @-webkit-keyframes swipeoutleftC {\n    from {\n      -webkit-transform: translateX(0);\n              transform: translateX(0); }\n    to {\n      -webkit-transform: translateX(-100%);\n              transform: translateX(-100%); } }\n  /* Internet Explorer */\n  /* Opera < 12.1 */ }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/editor/editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_module_service__ = __webpack_require__("../../../../../src/app/services/module.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_scene_service__ = __webpack_require__("../../../../../src/app/services/scene.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_Module__ = __webpack_require__("../../../../../src/app/models/Module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_Scene__ = __webpack_require__("../../../../../src/app/models/Scene.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_forkJoin__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/forkJoin.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EditorComponent = (function () {
    function EditorComponent(moduleService, sceneService, userService, route, router, renderer, cdr) {
        this.moduleService = moduleService;
        this.sceneService = sceneService;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.renderer = renderer;
        this.cdr = cdr;
        // EDITOR
        this.sum_active = false;
        this.prop_active = false;
        this.graph_active = false;
        this.blueprint_active = true;
        this.canvas_active = false;
        this.folder_active = false;
        this.moduleName = "";
        this.moduleImg = "";
        this.moduleImgDisp = "";
        this.moduleDesc = "";
        this.isPublic = 0;
        this.isFinished = 0;
        this.types = [
            { id: 1, name: 'Comic' },
            { id: 2, name: 'Adventure' },
            { id: 3, name: 'Novel' }
        ];
        this.selectedType = {
            id: 0,
            name: "none"
        };
        //GRAPH
        this.currentScene = {
            "id": 0,
            "background": "none",
        };
        this.startId = 0;
        this.scenes = [];
        this.canvasScenes = [];
        this.nodes = [];
        this.links = [];
        this.pos_nodes = [[]];
        this.isolated = [];
        this.sceneId = -1;
        this.selectedMask = -1;
        this.onPath = [];
        //BLUEPRINT
        this.sceneProp = false;
        this.objectProp = false;
        this.isMouseDown = false;
        this.mouseAction = "none";
        // startId
        this.objectId = 0;
        this.maskId = 0;
        this.currentObject = {
            "mask": 0,
            "maskAction": "none",
            "obj": {
                "type": "0",
                "action": "none",
                "id": 0,
                "x": 0,
                "y": 0,
                "w": 0,
                "h": 0,
                "z": 0,
                "event": 0
            }
        };
        this.currentObjects = [];
        this.objects = [];
        this.canvasScene = new __WEBPACK_IMPORTED_MODULE_5__models_Scene__["a" /* Scene */](0, 0, "#000", []);
        this.currentAct = 1;
        this.previousAct = 0;
        this.maxAct = 1;
        this.initialEvent = true;
        this.currentAnim = "fade";
        // min-height
        this.document_height = document.documentElement.clientHeight;
        this.document_width = document.documentElement.clientHeight;
        // min height
        this.container_min_height = 0;
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resize();
        this.moduleId = this.moduleService.selectedModule;
        if (this.moduleId !== 0) {
            //PROPERTIES
            this.moduleService.getModuleById(this.moduleId).subscribe(function (result) {
                var t = result.module;
                _this.current = new __WEBPACK_IMPORTED_MODULE_4__models_Module__["a" /* Module */](t.id, t.owner, t.name, t.type, t.description, t.image, t.startscene, t.isPublic, t.finished, t.approved, t.approvedBy, t.published, t.views, t.rate);
                _this.moduleName = _this.current.name;
                if (_this.current.type === "Comic") {
                    _this.selectedId = 0;
                    _this.selectedType.name = "Comic";
                    _this.selectedType.id = 1;
                }
                if (_this.current.type === "Adventure") {
                    _this.selectedId = 1;
                    _this.selectedType.name = "Adventure";
                    _this.selectedType.id = 2;
                }
                if (_this.current.type === "Novel") {
                    _this.selectedId = 2;
                    _this.selectedType.name = "Novel";
                    _this.selectedType.id = 3;
                }
                _this.moduleImg = _this.current.image;
                _this.moduleImgDisp = _this.current.imageToLoad;
                _this.moduleDesc = _this.current.description;
                _this.isPublic = _this.current.isPublic;
                _this.isFinished = _this.current.finished;
                //GRAPH
                _this.startId = _this.current.startscene;
                _this.fillArrays(false, []);
            });
        }
    };
    EditorComponent.prototype.ngAfterViewChecked = function () {
        if (this.graph_active)
            this.drawLines();
        this.cdr.detectChanges();
    };
    EditorComponent.prototype.switch = function (w) {
        var _this = this;
        if (w === "p")
            this.prop_active = !this.prop_active;
        if (w === "g")
            this.graph_active = !this.graph_active;
        if (w === "b")
            this.blueprint_active = !this.blueprint_active;
        if (w === "c")
            this.canvas_active = !this.canvas_active;
        if (w === "f")
            this.folder_active = !this.folder_active;
        if (this.graph_active)
            setTimeout(function () { _this.drawLines(); }, 10);
        if (this.blueprint_active)
            setTimeout(function () { _this.setCanvas(); }, 10);
        if (this.canvas_active)
            setTimeout(function () { _this.setCanvasDisplay(); }, 10);
        if (this.prop_active === false &&
            this.graph_active === false &&
            this.blueprint_active === false &&
            this.canvas_active === false &&
            this.folder_active === false)
            this.prop_active = true;
        // ) this.sum_active = true;
        // else this.sum_active = false;
    };
    EditorComponent.prototype.onSelectionChange = function (type) {
        this.selectedType = Object.assign({}, this.selectedType, type);
    };
    EditorComponent.prototype.invalid = function () {
        if (this.moduleName === '')
            return true;
        if (this.selectedType.id === 0)
            return true;
        return false;
    };
    EditorComponent.prototype.setModule = function () {
        var _this = this;
        var createDesc = this.moduleDesc;
        var createImg = this.moduleImg;
        if (createDesc === "") {
            createDesc = "Default description.";
        }
        if (createImg === "") {
            createImg = "images/smitd_logo.png";
        }
        this.moduleService.updateModule(this.moduleId, this.moduleName, this.selectedType.name, createDesc, createImg, this.isPublic, this.isFinished).subscribe(function (result) {
            if (_this.isFinished) {
                _this.router.navigate(['modules']);
            }
            _this.ngOnInit();
        });
    };
    EditorComponent.prototype.createModule = function () {
        var _this = this;
        var createDesc = this.moduleDesc;
        var createImg = this.moduleImg;
        if (createDesc === "") {
            createDesc = "Default description.";
        }
        if (createImg === "") {
            createImg = "images/smitd_logo.png";
        }
        this.moduleService.createModule(this.moduleName, this.selectedType.name, createDesc, createImg).subscribe(function (result) {
            if (result.err) {
                _this.moduleName = "";
            }
            else {
                _this.router.navigate(['editor/' + _this.moduleName]);
                _this.moduleService.selectedModule = result.moduleId;
                _this.ngOnInit();
            }
        });
    };
    EditorComponent.prototype.fillArrays = function (update, data) {
        var _this = this;
        var scenesT = [];
        var canvasScenesT = [];
        var nodesT = [];
        var linksT = [];
        var isolatedT = [];
        var objectsT = [];
        this.sceneService.getScenesByModuleId(this.moduleId).subscribe(function (result) {
            var promises = [];
            for (var _i = 0, _a = result.scenes; _i < _a.length; _i++) {
                var scene = _a[_i];
                var promise = _this.sceneService.getObjectsBySceneId(scene.id);
                promises.push(promise);
            }
            //  scene sceneobject separation!!!!!!!!!!!!!!!!!!!!
            __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].forkJoin(promises).subscribe(function (res) {
                for (var i_1 = 0; i_1 < result.scenes.length; i_1++) {
                    var scene = result.scenes[i_1];
                    var loopable = res;
                    var objects = [];
                    var canvasObjects = [];
                    for (var _i = 0, _a = loopable[i_1].objects; _i < _a.length; _i++) {
                        var obj = _a[_i];
                        objects.push(obj);
                        canvasObjects.push(new __WEBPACK_IMPORTED_MODULE_5__models_Scene__["b" /* SceneObject */](obj.id, obj.sId, obj.type, obj.action, obj.x, obj.y, obj.w, obj.h, obj.z, obj.cont, obj.style, obj.event));
                    }
                    scenesT.push(new __WEBPACK_IMPORTED_MODULE_5__models_Scene__["a" /* Scene */](scene.id, scene.mId, scene.background, objects));
                    canvasScenesT.push(new __WEBPACK_IMPORTED_MODULE_5__models_Scene__["a" /* Scene */](scene.id, scene.mId, scene.background, canvasObjects));
                }
                var i = 0;
                for (var _b = 0, scenesT_1 = scenesT; _b < scenesT_1.length; _b++) {
                    var scene = scenesT_1[_b];
                    for (var _c = 0, _d = scene.toPreload; _c < _d.length; _c++) {
                        var ref = _d[_c];
                        var newLink = true;
                        for (var _e = 0, linksT_1 = linksT; _e < linksT_1.length; _e++) {
                            var link = linksT_1[_e];
                            if (link.from === scene.id && link.to === ref) {
                                newLink = false;
                                break;
                            }
                        }
                        if (newLink)
                            linksT.push({ "from": scene.id, "to": ref });
                    }
                    var sceneObjects = [];
                    var j = 0;
                    for (var _f = 0, _g = scene.objects; _f < _g.length; _f++) {
                        var obj = _g[_f];
                        sceneObjects.push({ "mask": ++j, "obj": obj });
                    }
                    nodesT.push({ "mask": ++i, "id": scene.id, "background": scene.background, "objects": sceneObjects });
                }
                for (var i_2 = 0; i_2 < nodesT.length; i_2++) {
                    var node = nodesT[i_2];
                    for (var j = 0; j < node.objects.length; j++) {
                        var object = node.objects[j];
                        var action = object.obj.action;
                        var maskAction = "none";
                        if (action.split(":")[1] === "scene" && !isNaN(+action.split(":")[2])) {
                            for (var _h = 0, nodesT_1 = nodesT; _h < nodesT_1.length; _h++) {
                                var n = nodesT_1[_h];
                                if (n.id === +action.split(":")[2]) {
                                    maskAction = action.split(":")[0] + ":" +
                                        action.split(":")[1] + ":" + n.mask +
                                        ":" + action.split(":")[3];
                                }
                            }
                        }
                        else {
                            maskAction = action;
                        }
                        nodesT[i_2].objects[j] = {
                            "mask": object.mask,
                            "maskAction": maskAction,
                            "obj": object.obj
                        };
                    }
                }
                for (var _j = 0, nodesT_2 = nodesT; _j < nodesT_2.length; _j++) {
                    var node_1 = nodesT_2[_j];
                    var iso = true;
                    for (var _k = 0, linksT_2 = linksT; _k < linksT_2.length; _k++) {
                        var link = linksT_2[_k];
                        if (link.to === node_1.id || link.from === node_1.id) {
                            iso = false;
                            break;
                        }
                    }
                    if (iso && node_1.id !== _this.startId)
                        isolatedT.push(node_1);
                }
                _this.scenes = scenesT;
                _this.canvasScenes = canvasScenesT;
                _this.nodes = nodesT;
                _this.links = linksT;
                _this.isolated = isolatedT;
                _this.pos_nodes = [];
                if (!update) {
                    var node_2 = _this.nodes[0];
                    if (node_2.mask === 1) {
                        _this.select(node_2.id, node_2.mask);
                    }
                    else {
                        for (var _l = 0, _m = _this.nodes; _l < _m.length; _l++) {
                            var n = _m[_l];
                            if (n.mask === 1) {
                                _this.select(node_2.id, node_2.mask);
                            }
                        }
                    }
                }
                _this.buildTree(_this.startId);
                _this.orderTree(_this.startId);
                if (_this.sceneId !== -1) {
                    for (var _o = 0, _p = _this.nodes; _o < _p.length; _o++) {
                        var node_3 = _p[_o];
                        if (node_3.id === _this.sceneId) {
                            _this.currentObjects = [];
                            for (var _q = 0, _r = node_3.objects; _q < _r.length; _q++) {
                                var obj = _r[_q];
                                _this.currentObjects.push(obj);
                            }
                            for (var _s = 0, _t = node_3.objects; _s < _t.length; _s++) {
                                var obj = _t[_s];
                                _this.currentObjects.push(obj);
                            }
                            for (var _u = 0, _v = _this.canvasScenes; _u < _v.length; _u++) {
                                var scene = _v[_u];
                                if (scene.id === _this.sceneId) {
                                    var max = 1;
                                    for (var _w = 0, _x = scene.objects; _w < _x.length; _w++) {
                                        var obj = _x[_w];
                                        if (max < +obj.max) {
                                            max = +obj.max;
                                        }
                                    }
                                    _this.maxAct = max;
                                    _this.currentAct = 1;
                                    if (_this.maxAct > 10)
                                        _this.maxAct = 10;
                                    break;
                                }
                            }
                            if (!update)
                                _this.currentObject = _this.currentObjects[0];
                            else {
                                for (var _y = 0, _z = _this.currentObjects; _y < _z.length; _y++) {
                                    var obj = _z[_y];
                                    if (obj.mask === +data[1]) {
                                        _this.currentObject = obj;
                                    }
                                }
                            }
                            if (!update)
                                _this.objectId = node_3.objects[0].obj.id;
                            if (!update)
                                _this.maskId = node_3.objects[0].mask;
                            break;
                        }
                    }
                    for (var _0 = 0, _1 = _this.canvasScenes; _0 < _1.length; _0++) {
                        var scene = _1[_0];
                        if (scene.id === _this.sceneId) {
                            _this.canvasScene = scene;
                            break;
                        }
                    }
                }
                setTimeout(function () { _this.drawLines(); }, 0);
                setTimeout(function () { _this.setCanvas(); }, 0);
                setTimeout(function () { _this.setCanvasDisplay(); }, 0);
            });
        });
    };
    EditorComponent.prototype.buildTree = function (sid) {
        var lvl = 0;
        this.insertNode(this.getNode(sid), lvl);
        lvl++;
        for (var _i = 0, _a = this.links; _i < _a.length; _i++) {
            var link = _a[_i];
            var parent_1 = this.getNode(link.from);
            var child = this.getNode(link.to);
            if (!this.isNode(parent_1.id)) {
                this.insertNode(parent_1, 1);
            }
            if (!this.isNode(child.id)) {
                this.insertNode(child, this.getNodeLevel(parent_1.id) + 1);
            }
        }
    };
    EditorComponent.prototype.orderTree = function (sid) {
        var changed = true;
        for (var q = 0; q < this.nodes.length * (this.pos_nodes.length - 1); q++) {
            changed = false;
            for (var level = 1; level < this.pos_nodes.length; level++) {
                for (var _i = 0, _a = this.pos_nodes[level]; _i < _a.length; _i++) {
                    var node = _a[_i];
                    var counter = [];
                    var max = 0;
                    var most = 0;
                    for (var c = 0; c < this.pos_nodes.length; c++) {
                        counter.push(0);
                    }
                    for (var i = 0; i < this.pos_nodes.length; i++) {
                        for (var j = 0; j < this.pos_nodes[i].length; j++) {
                            for (var _b = 0, _c = this.links; _b < _c.length; _b++) {
                                var link = _c[_b];
                                if (link.from === this.pos_nodes[i][j].id && link.to === node.id)
                                    counter[i]++;
                            }
                        }
                    }
                    for (var m = 0; m < counter.length; m++) {
                        if (counter[m] > max) {
                            max = counter[m];
                            most = m;
                        }
                    }
                    if (node.lvl !== most + 1) {
                        changed = true;
                        var removed = false;
                        var moving = node;
                        moving.lvl = most + 1;
                        while (moving.lvl + 1 > this.pos_nodes.length) {
                            this.pos_nodes.push([]);
                        }
                        for (var i = 0; i < this.pos_nodes.length; i++) {
                            for (var j = 0; j < this.pos_nodes[i].length; j++) {
                                if (node.id === this.pos_nodes[i][j].id) {
                                    this.pos_nodes[i].splice(j, 1);
                                    removed = true;
                                    break;
                                }
                            }
                            if (removed)
                                break;
                        }
                        this.pos_nodes[most + 1].push(moving);
                        break;
                    }
                    for (var lvl = 0; lvl < this.pos_nodes.length; lvl++) {
                        if (this.pos_nodes[lvl].length === 0) {
                            this.pos_nodes.splice(lvl, 1);
                        }
                    }
                }
                if (changed)
                    break;
            }
            if (!changed)
                break;
        }
    };
    EditorComponent.prototype.insertNode = function (node, lvl) {
        while (this.pos_nodes.length - 1 < lvl) {
            this.pos_nodes.push([]);
        }
        this.pos_nodes[lvl].push({ "id": node.id, "lvl": lvl, "mask": node.mask });
    };
    EditorComponent.prototype.isNode = function (id) {
        for (var _i = 0, _a = this.pos_nodes; _i < _a.length; _i++) {
            var level = _a[_i];
            for (var _b = 0, level_1 = level; _b < level_1.length; _b++) {
                var n = level_1[_b];
                if (id === n.id) {
                    return true;
                }
            }
        }
        return false;
    };
    EditorComponent.prototype.getNodeLevel = function (id) {
        for (var _i = 0, _a = this.pos_nodes; _i < _a.length; _i++) {
            var level = _a[_i];
            for (var _b = 0, level_2 = level; _b < level_2.length; _b++) {
                var n = level_2[_b];
                if (id === n.id) {
                    return n.lvl;
                }
            }
        }
    };
    EditorComponent.prototype.getNode = function (id) {
        var newNode;
        for (var _i = 0, _a = this.nodes; _i < _a.length; _i++) {
            var n = _a[_i];
            if (n.id == id) {
                newNode = n;
            }
        }
        return newNode;
    };
    EditorComponent.prototype.linksOfNode = function (node) {
        var toReturn = [];
        for (var _i = 0, _a = this.links; _i < _a.length; _i++) {
            var link = _a[_i];
            if (link.from === node.id)
                toReturn.push(link);
        }
        return toReturn;
    };
    EditorComponent.prototype.drawLines = function () {
        for (var _i = 0, _a = this.links; _i < _a.length; _i++) {
            var link = _a[_i];
            var nodeFrom = document.getElementById("node-" + link.from);
            var nodeXfrom = nodeFrom.offsetLeft;
            var nodeYfrom = nodeFrom.offsetTop;
            var nodeTo = document.getElementById("node-" + link.to);
            var nodeXto = nodeTo.offsetLeft;
            var nodeYto = nodeTo.offsetTop;
            var line = document.getElementById("line-" + link.from + "-" + link.to);
            var lpx = 0;
            var lpy = 0;
            var hor = 0;
            var ver = 0;
            var len = 0;
            var deg = 0;
            var mod = 1;
            if (nodeYfrom < nodeYto) {
                ver = nodeYto - nodeYfrom;
                lpy = nodeYfrom + ver / 2;
            }
            else {
                ver = nodeYfrom - nodeYto;
                lpy = nodeYto + ver / 2;
                mod *= -1;
            }
            if (nodeXfrom < nodeXto) {
                hor = nodeXto - nodeXfrom;
                lpx = nodeXfrom + hor / 2;
            }
            else {
                hor = nodeXfrom - nodeXto;
                lpx = nodeXto + hor / 2;
                mod *= -1;
            }
            len = Math.sqrt(ver * ver + hor * hor);
            deg = Math.asin(ver / len) * 180 / Math.PI * mod + 90;
            var width = 60;
            var correction = 18;
            if (this.document_width < 720) {
                width = 30;
                correction = 7;
            }
            var tl = len - width;
            line.style.left = lpx + correction + "px";
            line.style.top = lpy - tl / 2 + correction + "px";
            line.style.height = tl + "px";
            line.style.transform = "rotate(" + deg + "deg)";
            line.style.transformOrigin = "center center";
        }
    };
    EditorComponent.prototype.hovered = function (id) {
        this.over = id;
        this.onPath = [];
    };
    EditorComponent.prototype.isOver = function (id) {
        if (id === this.over)
            return true;
        return false;
    };
    EditorComponent.prototype.isOverParent = function (id) {
        for (var _i = 0, _a = this.links; _i < _a.length; _i++) {
            var link = _a[_i];
            if (link.from === this.over && link.to === id)
                return true;
        }
        return false;
    };
    EditorComponent.prototype.select = function (id, mask) {
        this.selected = id;
        this.selectedMask = mask;
        this.sceneId = id;
        for (var _i = 0, _a = this.canvasScenes; _i < _a.length; _i++) {
            var scene = _a[_i];
            if (scene.id === this.sceneId) {
                this.canvasScene = scene;
                break;
            }
        }
        for (var _b = 0, _c = this.nodes; _b < _c.length; _b++) {
            var node = _c[_b];
            if (node.id === this.sceneId) {
                this.currentScene = node;
                this.currentObjects = [];
                for (var _d = 0, _e = node.objects; _d < _e.length; _d++) {
                    var obj = _e[_d];
                    this.currentObjects.push(obj);
                }
                this.currentObject = this.currentObjects[0];
                this.objectId = node.objects[0].obj.id;
                this.maskId = node.objects[0].mask;
                break;
            }
        }
        for (var _f = 0, _g = this.canvasScenes; _f < _g.length; _f++) {
            var scene = _g[_f];
            if (scene.id === this.sceneId) {
                var max = 1;
                for (var _h = 0, _j = scene.objects; _h < _j.length; _h++) {
                    var obj = _j[_h];
                    if (max < +obj.max) {
                        max = +obj.max;
                    }
                }
                this.maxAct = max;
                this.currentAct = 1;
                if (this.maxAct > 10)
                    this.maxAct = 10;
                break;
            }
        }
    };
    EditorComponent.prototype.isSelected = function (id) {
        if (id === this.selected)
            return true;
        return false;
    };
    EditorComponent.prototype.isDeadend = function (id) {
        for (var _i = 0, _a = this.links; _i < _a.length; _i++) {
            var link = _a[_i];
            if (link.from === id)
                return false;
        }
        return true;
    };
    EditorComponent.prototype.isUnreachable = function (id) {
        if (this.startId === id)
            return false;
        for (var _i = 0, _a = this.links; _i < _a.length; _i++) {
            var link = _a[_i];
            if (link.to === id)
                return false;
        }
        return true;
    };
    EditorComponent.prototype.isRoot = function (id) {
        if (id === this.startId)
            return true;
        return false;
    };
    EditorComponent.prototype.isOnPath = function (id) {
        for (var _i = 0, _a = this.onPath; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p === id)
                return true;
        }
        return false;
    };
    EditorComponent.prototype.isLineOnPath = function (from, to) {
        var f = false;
        var t = false;
        for (var _i = 0, _a = this.onPath; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p === from) {
                f = true;
                break;
            }
        }
        for (var _b = 0, _c = this.onPath; _b < _c.length; _b++) {
            var p = _c[_b];
            if (p === to) {
                t = true;
                break;
            }
        }
        return f && t;
    };
    EditorComponent.prototype.showPathFromRoot = function (id) {
        this.onPath.push(id);
        this.getPath(id, [0]);
    };
    EditorComponent.prototype.getPath = function (id, checked) {
        for (var _i = 0, checked_1 = checked; _i < checked_1.length; _i++) {
            var c = checked_1[_i];
            if (c === id)
                return;
        }
        checked.push(id);
        if (id === this.startId)
            return;
        for (var _a = 0, _b = this.links; _a < _b.length; _a++) {
            var link = _b[_a];
            if (link.to === id) {
                this.onPath.push(link.from);
                this.getPath(link.from, checked);
            }
        }
    };
    EditorComponent.prototype.createScene = function () {
        var _this = this;
        this.sceneService.createSceneByModuleId(this.moduleId).subscribe(function (res) {
            _this.fillArrays(false, []);
        });
    };
    EditorComponent.prototype.deleteScene = function () {
        var _this = this;
        if (this.sceneId !== this.startId) {
            var deletable = true;
            for (var _i = 0, _a = this.links; _i < _a.length; _i++) {
                var link = _a[_i];
                if (link.from === this.sceneId ||
                    link.to === this.sceneId)
                    deletable = false;
            }
            if (deletable) {
                this.sceneService.deleteSceneById(this.sceneId).subscribe(function (res) {
                    _this.fillArrays(false, []);
                    _this.sceneId = _this.startId;
                });
            }
            this.currentObjects = [];
            for (var _b = 0, _c = this.nodes[0].objects; _b < _c.length; _b++) {
                var obj = _c[_b];
                this.currentObjects.push(obj);
            }
            this.currentObject = this.currentObjects[0];
            this.objectId = this.nodes[0].objects[0].obj.id;
            this.maskId = this.nodes[0].objects[0].mask;
            this.selectedMask = this.maskId;
            // this.selected = this.nodes[0].id;
        }
    };
    EditorComponent.prototype.toggleSceneProp = function () {
        this.sceneProp = !this.sceneProp;
    };
    EditorComponent.prototype.toggleObjectProp = function () {
        this.objectProp = !this.objectProp;
    };
    EditorComponent.prototype.submitScene = function () {
        var _this = this;
        this.sceneService.updateSceneById(this.currentScene.id, this.currentScene.background).subscribe(function (res) {
            var promises = [];
            for (var _i = 0, _a = _this.nodes; _i < _a.length; _i++) {
                var scene = _a[_i];
                if (scene.id === _this.sceneId) {
                    for (var _b = 0, _c = scene.objects; _b < _c.length; _b++) {
                        var obj = _c[_b];
                        var promise = _this.sceneService.updateSceneObjectById(obj.obj);
                        promises.push(promise);
                    }
                }
            }
            __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].forkJoin(promises).subscribe(function (res) {
                console.log(res);
                _this.fillArrays(true, [_this.objectId, _this.maskId]);
            });
        });
    };
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!FOCUS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    EditorComponent.prototype.addObject = function () {
        var _this = this;
        var _loop_1 = function (scene) {
            if (scene.id === this_1.sceneId) {
                this_1.sceneService.createSceneObjectBySceneId(this_1.sceneId).subscribe(function (result) {
                    var newObj = {
                        "mask": _this.currentObjects.length,
                        "maskAction": "none",
                        "obj": {
                            "id": result.objectId,
                            "sId": _this.sceneId,
                            "type": "txt",
                            "action": "none",
                            "x": 860,
                            "y": 440,
                            "w": 200,
                            "h": 200,
                            "z": 10,
                            "cont": "default",
                            "style": "background:#AAA;color:#000;border-radius:50%;",
                            "event": "1"
                        }
                    };
                    scene.objects.push(newObj);
                    _this.currentObjects.push(newObj);
                });
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this.nodes; _i < _a.length; _i++) {
            var scene = _a[_i];
            _loop_1(scene);
        }
    };
    EditorComponent.prototype.removeObject = function (mask) {
        var _this = this;
        if (mask !== 1) {
            this.sceneService.deleteSceneObjectById(this.objectId).subscribe(function (result) {
                for (var _i = 0, _a = _this.nodes; _i < _a.length; _i++) {
                    var scene = _a[_i];
                    if (scene.id === _this.sceneId) {
                        for (var o = 0; o < scene.objects.length; o++) {
                            if (scene.objects[o].obj.id === _this.objectId) {
                                scene.objects.splice(o, 1);
                            }
                        }
                    }
                }
                for (var o = 0; o < _this.currentObjects.length; o++) {
                    if (_this.currentObjects[o].obj.id === _this.objectId) {
                        _this.currentObjects.splice(o, 1);
                    }
                }
                _this.objectId = _this.currentObjects[0].obj.id;
                _this.maskId = _this.currentObjects[0].mask;
            });
        }
    };
    EditorComponent.prototype.maskingAction = function () {
        this.currentObject.obj.action = this.unmaskAction(this.currentObject.maskAction);
    };
    EditorComponent.prototype.unmaskAction = function (maskedAction) {
        var listener = maskedAction.split(':')[0];
        var action = maskedAction.split(':')[1];
        var final = "none";
        if (listener === "click") {
            final = "click:";
            if (action === "scene") {
                final += "scene:";
                var maskedId = +maskedAction.split(':')[2];
                if (!isNaN(maskedId)) {
                    for (var _i = 0, _a = this.nodes; _i < _a.length; _i++) {
                        var node = _a[_i];
                        if (node.mask === maskedId && this.selectedMask !== maskedId) {
                            if (maskedAction.split(':')[3] === "fade") {
                                final += node.id + ":fade:fade-out";
                            }
                            else if (maskedAction.split(':')[3] === "swipe-left") {
                                final += node.id + ":swipe-left:swipe-out-left";
                            }
                            else if (maskedAction.split(':')[3] === "swipe-right") {
                                final += node.id + ":swipe-right:swipe-out-right";
                            }
                            else if (maskedAction.split(':')[3] === "swipe-up") {
                                final += node.id + ":swipe-up:swipe-out-up";
                            }
                            else if (maskedAction.split(':')[3] === "swipe-down") {
                                final += node.id + ":swipe-down:swipe-out-down";
                            }
                            else {
                                final += node.id + ":none:none";
                            }
                        }
                    }
                }
            }
            if (action === "event") {
                final += "event:";
                var eventNum = +maskedAction.split(':')[2];
                if (!isNaN(eventNum) && eventNum > 0 && eventNum < 11) {
                    final += eventNum;
                }
            }
        }
        return final;
    };
    EditorComponent.prototype.stageX = function (x) {
        return ((x * this.canvasW) / 1920);
    };
    EditorComponent.prototype.stageY = function (y) {
        return ((y * this.canvasH) / 1080);
    };
    EditorComponent.prototype.objectX = function (x) {
        return ((x / this.canvasW) * 1920);
    };
    EditorComponent.prototype.objectY = function (y) {
        return ((y / this.canvasH) * 1080);
    };
    EditorComponent.prototype.currObj = function () {
        for (var _i = 0, _a = this.nodes; _i < _a.length; _i++) {
            var scene = _a[_i];
            if (scene.id === this.sceneId) {
                for (var _b = 0, _c = scene.objects; _b < _c.length; _b++) {
                    var node = _c[_b];
                    if (node.obj.id === this.objectId) {
                        this.currentObject = node;
                    }
                }
            }
        }
    };
    EditorComponent.prototype.setCanvas = function () {
        this.canvasX = document.getElementById("blueprint").offsetLeft;
        this.canvasY = document.getElementById("blueprint").offsetTop;
        this.canvasW = document.getElementById("blueprint").offsetWidth;
        this.canvasH = document.getElementById("blueprint").offsetHeight;
    };
    EditorComponent.prototype.onMouseButton = function (event, type, id) {
        if (type === void 0) { type = "none"; }
        for (var _i = 0, _a = this.currentObjects; _i < _a.length; _i++) {
            var obj = _a[_i];
            if (obj.obj.id === id) {
                this.currentObject = obj;
                this.objectId = obj.obj.id;
                this.maskId = obj.mask;
            }
        }
        this.isMouseDown = event.buttons === 1;
        this.mouseAction = type;
        if (type !== "none") {
            this.initX = event.clientX;
            this.initY = event.clientY;
            this.initObjX = document.getElementById("obj" + this.objectId).offsetLeft;
            this.initObjY = document.getElementById("obj" + this.objectId).offsetTop;
            this.initObjW = document.getElementById("obj" + this.objectId).offsetWidth;
            this.initObjH = document.getElementById("obj" + this.objectId).offsetHeight;
        }
    };
    EditorComponent.prototype.onMouseMove = function (event) {
        if (this.isMouseDown) {
            if (this.mouseAction === "drag") {
                var obj = document.getElementById("obj" + this.objectId);
                var offsetX = event.clientX - this.initX;
                var newX = this.initObjX + offsetX;
                if (newX < 0)
                    newX = 0;
                if (newX > this.canvasW - obj.offsetWidth)
                    newX = this.canvasW - obj.offsetWidth;
                this.renderer.setStyle(obj, 'left', newX + 'px');
                this.currentObject.obj.x = Math.round(this.objectX(newX));
                var offsetY = event.clientY - this.initY;
                var newY = this.initObjY + offsetY;
                if (newY < 0)
                    newY = 0;
                if (newY > this.canvasH - obj.offsetHeight)
                    newY = this.canvasH - obj.offsetHeight;
                this.renderer.setStyle(obj, 'top', newY + 'px');
                this.currentObject.obj.y = Math.round(this.objectY(newY));
            }
            if (this.mouseAction === "e") {
                var obj = document.getElementById("obj" + this.objectId);
                var offsetX = event.clientX - this.initX;
                var newW = this.initObjW + offsetX;
                if (newW < 30)
                    newW = 30;
                if (newW > this.canvasW)
                    newW = this.canvasW;
                this.renderer.setStyle(obj, 'width', newW + 'px');
                this.currentObject.obj.w = (Math.round(this.objectY(newW)) > 1920) ? 1920 : Math.round(this.objectY(newW));
            }
            if (this.mouseAction === "s") {
                var obj = document.getElementById("obj" + this.objectId);
                var offsetY = event.clientY - this.initY;
                var newH = this.initObjH + offsetY;
                if (newH < 30)
                    newH = 30;
                if (newH > this.canvasH)
                    newH = this.canvasH;
                this.renderer.setStyle(obj, 'height', newH + 'px');
                this.currentObject.obj.h = (Math.round(this.objectY(newH)) > 1080) ? 1080 : Math.round(this.objectY(newH));
            }
            if (this.mouseAction === "w") {
                var obj = document.getElementById("obj" + this.objectId);
                var offsetX = event.clientX - this.initX;
                var newW = this.initObjW - offsetX;
                if (newW < 30)
                    newW = 30;
                if (newW > this.canvasW)
                    newW = this.canvasW;
                this.renderer.setStyle(obj, 'width', newW + 'px');
                this.currentObject.obj.w = (Math.round(this.objectY(newW)) > 1920) ? 1920 : Math.round(this.objectY(newW));
                offsetX = event.clientX - this.initX;
                var newX = this.initObjX + offsetX;
                if (newX < 0)
                    newX = 0;
                if (newX - this.canvasX > this.canvasW - obj.offsetWidth)
                    newX = this.canvasW - obj.offsetWidth + this.canvasX;
                if (newX > this.initObjX + this.initObjW - 30)
                    newX = this.initObjX + this.initObjW - 30;
                this.renderer.setStyle(obj, 'left', newX + 'px');
                this.currentObject.obj.x = Math.round(this.objectY(newX));
            }
            if (this.mouseAction === "n") {
                var obj = document.getElementById("obj" + this.objectId);
                var offsetY = event.clientY - this.initY;
                var newH = this.initObjH - offsetY;
                if (newH < 30)
                    newH = 30;
                if (newH > this.canvasH)
                    newH = this.canvasH;
                this.renderer.setStyle(obj, 'height', newH + 'px');
                this.currentObject.obj.h = (Math.round(this.objectY(newH)) > 1080) ? 1080 : Math.round(this.objectY(newH));
                offsetY = event.clientY - this.initY;
                var newY = this.initObjY + offsetY;
                if (newY < 0)
                    newY = 0;
                if (newY > this.canvasH - obj.offsetHeight)
                    newY = this.canvasH - obj.offsetHeight;
                if (newY > this.initObjY + this.initObjH - 30)
                    newY = this.initObjY + this.initObjH - 30;
                this.renderer.setStyle(obj, 'top', newY + 'px');
                this.currentObject.obj.y = Math.round(this.objectY(newY));
            }
            if (this.mouseAction === "nw") {
                var obj = document.getElementById("obj" + this.objectId);
                var offsetY = event.clientY - this.initY;
                var newH = this.initObjH - offsetY;
                if (newH < 30)
                    newH = 30;
                if (newH > this.canvasH)
                    newH = this.canvasH;
                this.renderer.setStyle(obj, 'height', newH + 'px');
                this.currentObject.obj.h = (Math.round(this.objectY(newH)) > 1080) ? 1080 : Math.round(this.objectY(newH));
                offsetY = event.clientY - this.initY;
                var newY = this.initObjY + offsetY;
                if (newY < 0)
                    newY = 0;
                if (newY > this.canvasH - obj.offsetHeight)
                    newY = this.canvasH - obj.offsetHeight;
                if (newY > this.initObjY + this.initObjH - 30)
                    newY = this.initObjY + this.initObjH - 30;
                this.renderer.setStyle(obj, 'top', newY + 'px');
                this.currentObject.obj.y = Math.round(this.objectY(newY));
                var offsetX = event.clientX - this.initX;
                var newW = this.initObjW - offsetX;
                if (newW < 30)
                    newW = 30;
                if (newW > this.canvasW)
                    newW = this.canvasW;
                this.renderer.setStyle(obj, 'width', newW + 'px');
                this.currentObject.obj.w = (Math.round(this.objectY(newW)) > 1920) ? 1920 : Math.round(this.objectY(newW));
                offsetX = event.clientX - this.initX;
                var newX = this.initObjX + offsetX;
                if (newX < 0)
                    newX = 0;
                if (newX - this.canvasX > this.canvasW - obj.offsetWidth)
                    newX = this.canvasW - obj.offsetWidth + this.canvasX;
                if (newX > this.initObjX + this.initObjW - 30)
                    newX = this.initObjX + this.initObjW - 30;
                this.renderer.setStyle(obj, 'left', newX + 'px');
                this.currentObject.obj.x = Math.round(this.objectY(newX));
            }
            if (this.mouseAction === "ne") {
                var obj = document.getElementById("obj" + this.objectId);
                var offsetY = event.clientY - this.initY;
                var newH = this.initObjH - offsetY;
                if (newH < 30)
                    newH = 30;
                if (newH > this.canvasH)
                    newH = this.canvasH;
                this.renderer.setStyle(obj, 'height', newH + 'px');
                this.currentObject.obj.h = (Math.round(this.objectY(newH)) > 1080) ? 1080 : Math.round(this.objectY(newH));
                offsetY = event.clientY - this.initY;
                var newY = this.initObjY + offsetY;
                if (newY < 0)
                    newY = 0;
                if (newY > this.canvasH - obj.offsetHeight)
                    newY = this.canvasH - obj.offsetHeight;
                if (newY > this.initObjY + this.initObjH - 30)
                    newY = this.initObjY + this.initObjH - 30;
                this.renderer.setStyle(obj, 'top', newY + 'px');
                this.currentObject.obj.y = Math.round(this.objectY(newY));
                var offsetX = event.clientX - this.initX;
                var newW = this.initObjW + offsetX;
                if (newW < 30)
                    newW = 30;
                if (newW > this.canvasW)
                    newW = this.canvasW;
                this.renderer.setStyle(obj, 'width', newW + 'px');
                this.currentObject.obj.w = (Math.round(this.objectY(newW)) > 1920) ? 1920 : Math.round(this.objectY(newW));
            }
            if (this.mouseAction === "sw") {
                var obj = document.getElementById("obj" + this.objectId);
                var offsetY = event.clientY - this.initY;
                var newH = this.initObjH + offsetY;
                if (newH < 30)
                    newH = 30;
                if (newH > this.canvasH)
                    newH = this.canvasH;
                this.renderer.setStyle(obj, 'height', newH + 'px');
                this.currentObject.obj.h = (Math.round(this.objectY(newH)) > 1080) ? 1080 : Math.round(this.objectY(newH));
                var offsetX = event.clientX - this.initX;
                var newW = this.initObjW - offsetX;
                if (newW < 30)
                    newW = 30;
                if (newW > this.canvasW)
                    newW = this.canvasW;
                this.renderer.setStyle(obj, 'width', newW + 'px');
                this.currentObject.obj.w = (Math.round(this.objectY(newW)) > 1920) ? 1920 : Math.round(this.objectY(newW));
                offsetX = event.clientX - this.initX;
                var newX = this.initObjX + offsetX;
                if (newX < 0)
                    newX = 0;
                if (newX - this.canvasX > this.canvasW - obj.offsetWidth)
                    newX = this.canvasW - obj.offsetWidth + this.canvasX;
                if (newX > this.initObjX + this.initObjW - 30)
                    newX = this.initObjX + this.initObjW - 30;
                this.renderer.setStyle(obj, 'left', newX + 'px');
                this.currentObject.obj.x = Math.round(this.objectY(newX));
            }
            if (this.mouseAction === "se") {
                var obj = document.getElementById("obj" + this.objectId);
                var offsetY = event.clientY - this.initY;
                var newH = this.initObjH + offsetY;
                if (newH < 30)
                    newH = 30;
                if (newH > this.canvasH)
                    newH = this.canvasH;
                this.renderer.setStyle(obj, 'height', newH + 'px');
                this.currentObject.obj.h = (Math.round(this.objectY(newH)) > 1080) ? 1080 : Math.round(this.objectY(newH));
                var offsetX = event.clientX - this.initX;
                var newW = this.initObjW + offsetX;
                if (newW < 30)
                    newW = 30;
                if (newW > this.canvasW)
                    newW = this.canvasW;
                this.renderer.setStyle(obj, 'width', newW + 'px');
                this.currentObject.obj.w = (Math.round(this.objectY(newW)) > 1920) ? 1920 : Math.round(this.objectY(newW));
            }
        }
    };
    EditorComponent.prototype.setCanvasDisplay = function () {
        this.canvasDisplayX = document.getElementById("stage").offsetLeft;
        this.canvasDisplayY = document.getElementById("stage").offsetTop;
        this.canvasDisplayW = document.getElementById("stage").offsetWidth;
        this.canvasDisplayH = document.getElementById("stage").offsetHeight;
    };
    EditorComponent.prototype.nextAct = function () {
        this.initialEvent = false;
        this.previousAct = this.currentAct;
        this.currentAct++;
        if (this.currentAct > this.maxAct)
            this.currentAct = 1;
    };
    EditorComponent.prototype.prevAct = function () {
        this.initialEvent = false;
        this.previousAct = this.currentAct;
        this.currentAct--;
        if (this.currentAct < 1)
            this.currentAct = this.maxAct;
    };
    EditorComponent.prototype.handleSceneClicks = function (input) {
        var action = input.split(':');
        if (action[0] === "click") {
            if (action[1] === 'scene') {
                if (this.currentAnim === action[4])
                    this.currentAnim = action[4] + "C";
                else
                    this.currentAnim = action[4];
                this.currentAct = 1;
                this.initialEvent = true;
            }
            if (action[1] === 'event') {
                if (this.currentAct !== +action[2]) {
                    this.initialEvent = false;
                    this.previousAct = this.currentAct;
                    this.currentAct = +action[2];
                }
            }
        }
    };
    EditorComponent.prototype.getCurrentAct = function () {
        if (this.initialEvent) {
            // console.log("pas");
            return "pas" + this.currentAct;
        }
        else {
            // console.log("act");
            return "act" + this.currentAct;
        }
    };
    EditorComponent.prototype.activeEvent = function (events) {
        var init = "0";
        var curr = false;
        var prev = false;
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var e = events_1[_i];
            if (e === this.currentAct) {
                curr = true;
            }
            if (e === this.previousAct) {
                prev = true;
            }
        }
        if (curr && prev) {
            init = "stay";
        }
        else if (curr) {
            init = "" + this.currentAct;
        }
        else {
            if (this.currentAct < 5)
                init = "" + (this.currentAct + 1);
            else
                init = "" + (this.currentAct - 1);
        }
        return "event" + init;
    };
    EditorComponent.prototype.getDimensions = function () {
        if (this.document_width >= 1200) {
            this.stageWidth = 912;
            this.stageHeight = 512;
        }
        else if (this.document_width >= 1000) {
            this.stageWidth = 736;
            this.stageHeight = 416;
        }
        else if (this.document_width >= 720) {
            this.stageWidth = 512;
            this.stageHeight = 288;
        }
        else {
            this.stageWidth = this.document_width * 80 / 100;
            this.stageHeight = this.document_height * 80 / 100;
        }
    };
    EditorComponent.prototype.LOG = function (log) {
        console.log(log);
    };
    EditorComponent.prototype.resize = function () {
        this.document_height = document.documentElement.clientHeight;
        this.document_width = document.documentElement.clientWidth;
        this.container_min_height = this.document_height - 120;
    };
    EditorComponent.prototype.onResize = function (event) {
        this.resize();
        if (this.moduleService.selectedModule !== 0)
            this.drawLines();
        if (this.moduleService.selectedModule !== 0)
            this.setCanvas();
        if (this.moduleService.selectedModule !== 0)
            this.setCanvasDisplay();
        if (this.moduleService.selectedModule !== 0)
            this.getDimensions();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], EditorComponent.prototype, "onResize", null);
    EditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-editor',
            template: __webpack_require__("../../../../../src/app/pages/editor/editor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/editor/editor.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_module_service__["a" /* ModuleService */],
            __WEBPACK_IMPORTED_MODULE_2__services_scene_service__["a" /* SceneService */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"index\" [style.min-height.px]=\"container_min_height\">\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/index/index.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  background-image: url(" + __webpack_require__("../../../../../src/media/backgrounds/smitd_bg_crystals.png") + ");\n  background-repeat: repeat;\n  background-position: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n#index {\n  background-color: rgba(0, 0, 0, 0.5);\n  width: 100%; }\n\n@media (min-width: 720px) {\n  #index {\n    width: 640px; } }\n\n@media (min-width: 1000px) {\n  #index {\n    width: 920px; } }\n\n@media (min-width: 1200px) {\n  #index {\n    width: 1140px; } }\n\n.icon {\n  font-family: ICON;\n  font-size: 200%; }\n\np {\n  margin: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndexComponent = (function () {
    function IndexComponent() {
        // min-height
        this.document_height = document.documentElement.clientHeight;
        this.container_min_height = 0;
    }
    IndexComponent.prototype.resize = function () {
        this.document_height = document.documentElement.clientHeight;
        this.container_min_height = this.document_height - 120;
    };
    IndexComponent.prototype.ngOnInit = function () {
        this.resize();
    };
    IndexComponent.prototype.onResize = function (event) {
        this.resize();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], IndexComponent.prototype, "onResize", null);
    IndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-index',
            template: __webpack_require__("../../../../../src/app/pages/index/index.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"login\" [style.min-height.px]=\"container_min_height\">\n\n    <img class=\"himg\" src=\"../../../../media/images/smitd_logo_text.png\"><br>\n\n    <h1>Login</h1>\n\n    <form [formGroup]=\"loginForm\" novalidate>\n        <input type=\"text\" class=\"form-control\" formControlName=\"username\" placeholder=\"Username\" ><br>\n        <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\" ><br>\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"submit()\" [disabled]=\"!loginForm.valid\">Login</button>\n    </form>\n    <div class=\"error\" *ngIf=\" err !== '' \"> Invalid username or password </div>\n\n    <div class=\"separator\">\n        <div></div><p >or</p><div></div>\n    </div>\n    <a routerLink=\"/register\">Create a free SMITD Account</a>\n    <br>\n    <!-- <br><a href=\"\">Can't log in?</a> -->\n    <br>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  background-image: url(" + __webpack_require__("../../../../../src/media/backgrounds/smitd_bg_crystals.png") + ");\n  background-repeat: repeat;\n  background-position: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n#login {\n  background-color: rgba(0, 0, 0, 0.5);\n  width: 100%; }\n\n@media (min-width: 720px) {\n  #login {\n    width: 640px; } }\n\n@media (min-width: 1000px) {\n  #login {\n    width: 920px; } }\n\n@media (min-width: 1200px) {\n  #login {\n    width: 1140px; } }\n\n#login a {\n  color: #555;\n  text-decoration: none;\n  margin: 10px;\n  margin-top: 20px;\n  transition: color 0.2s; }\n  #login a:hover {\n    color: #FFF; }\n\n.error {\n  margin-top: 10px;\n  font-family: CGB;\n  color: #c80000; }\n\ninput {\n  font-family: CGB;\n  font-size: 120%;\n  color: #FFF;\n  width: 60%;\n  max-width: 360px;\n  height: 30px;\n  border-radius: 5px;\n  text-align: center;\n  background-color: #323232;\n  border: 5px solid #323232;\n  margin: 10px; }\n  input:focus {\n    background-color: black;\n    outline: none; }\n\nbutton {\n  font-family: CGB;\n  font-size: 120%;\n  color: #FFF;\n  width: 62%;\n  max-width: 370px;\n  height: 40px;\n  border-radius: 5px;\n  text-align: center;\n  background-color: #1e1e1e;\n  border: 5px solid #1e1e1e;\n  margin: 10px;\n  transition: background 0.2s, border 0.2s, color 0.2s; }\n  button:focus {\n    outline: none;\n    background-color: #333;\n    border: 5px solid #333; }\n  button:hover {\n    background-color: #333;\n    border: 5px solid #333; }\n  button:active {\n    color: #999;\n    background-color: #111;\n    border: 5px solid #111; }\n\nbutton:disabled {\n  color: #999;\n  background-color: #111;\n  border: 5px solid #111;\n  cursor: not-allowed; }\n\n.himg {\n  width: 60%;\n  max-width: 360px; }\n\n.separator {\n  text-align: center;\n  text-transform: uppercase;\n  color: #555;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.separator div {\n  border: 1px solid #333;\n  margin: 10px;\n  width: 25%;\n  max-width: 160px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.err = "";
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required])
        });
        // min-height
        this.document_height = document.documentElement.clientHeight;
        this.container_min_height = 0;
    }
    LoginComponent.prototype.resize = function () {
        this.document_height = document.documentElement.clientHeight;
        this.container_min_height = this.document_height - 120;
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.resize();
        if (this.userService.user.role !== "GUEST")
            this.router.navigate(['/']);
    };
    LoginComponent.prototype.onResize = function (event) {
        this.resize();
    };
    LoginComponent.prototype.submit = function () {
        this.err = this.userService.login(this.username.value, this.password.value);
        if (this.err === "")
            this.router.navigate(['/']);
    };
    Object.defineProperty(LoginComponent.prototype, "username", {
        get: function () {
            return this.loginForm.get('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () {
            return this.loginForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LoginComponent.prototype, "onResize", null);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/pages/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/module/module.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/module/module.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  module works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/pages/module/module.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModuleComponent = (function () {
    function ModuleComponent() {
    }
    ModuleComponent.prototype.ngOnInit = function () {
    };
    ModuleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-module',
            template: __webpack_require__("../../../../../src/app/pages/module/module.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/module/module.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ModuleComponent);
    return ModuleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/modules/modules.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"modules\" [style.min-height.px]=\"container_min_height\">\n  <div class=\"sortandfilter\" *ngIf=\"userService.user.role != 'GUEST'\">\n    <div class=\"icon add\" (click)=\"iconAdd()\" >\n      <p>&#xf067;</p>\n    </div>\n  </div>\n\n  <div class=\"list\">\n\n    <div *ngFor=\"let module of modules\">\n\n      <div class=\"module-tab\" *ngIf=\"\n        module.owner === userService.user.id ||\n        (\n          userService.user.role == 'GUEST' &&\n          module.isPublic === 1 &&\n          module.approved === 1\n        ) ||(\n          userService.user.role == 'USER' &&\n          module.approved === 1\n        ) ||\n        userService.user.role == 'MODERATOR' ||\n        userService.user.role == 'ADMIN'\"\n      >\n\n        <div class=\"module-img\"\n          [ngStyle]=\"{'background-image':'url(' + module.imageToLoad + ')'}\"\n        ></div>\n        <div class=\"module-img-shadow\"></div>\n        <h2 class=\"module-title\" title=\"{{module.name}}\">{{module.name}}</h2>\n        <h3 class=\"module-type\">{{module.type}}</h3>\n        <div class=\"stars\">\n          <div class=\"star-empty s1\">☆</div>\n          <div class=\"star-empty s2\">☆</div>\n          <div class=\"star-empty s3\">☆</div>\n          <div class=\"star-empty s4\">☆</div>\n          <div class=\"star-empty s5\">☆</div>\n          <div *ngIf=\"module.rate >= 1\" class=\"star s1\">★</div>\n          <div *ngIf=\"module.rate >= 1.5 &&\n            module.rate < 2\" class=\"star-half s2\">★</div>\n          <div *ngIf=\"module.rate >= 2\" class=\"star s2\">★</div>\n          <div *ngIf=\"module.rate >= 2.5 &&\n            module.rate < 3\" class=\"star-half s3\">★</div>\n          <div *ngIf=\"module.rate >= 3\" class=\"star s3\">★</div>\n          <div *ngIf=\"module.rate >= 3.5 &&\n            module.rate < 4\" class=\"star-half s4\">★</div>\n          <div *ngIf=\"module.rate >= 4\" class=\"star s4\">★</div>\n          <div *ngIf=\"module.rate >= 4.5 &&\n            module.rate < 5\" class=\"star-half s5\">★</div>\n          <div *ngIf=\"module.rate >= 5\" class=\"star s5\">★</div>\n        </div>\n        <!-- <div class=\"module-description\"><p>{{module.description}}</p></div> -->\n\n        <div class=\"icons\">\n          <div class=\"icon play\" *ngIf=\"\n            (\n              userService.user.role == 'GUEST'&&\n              module.finished === 1 &&\n              module.isPublic === 1\n            ) ||\n            (\n              userService.user.role != 'GUEST' &&\n              module.finished === 1 &&\n              module.approved === 1\n            )\"\n            (click)=\"iconPlay(module.id, module.type, module.name)\"\n            >\n            <p>&#xf054;</p>\n          </div>\n          <div class=\"icon edit\" *ngIf=\"\n            (module.owner === userService.user.id  &&\n            module.finished === 0)\"\n            (click)=\"iconEdit(module.id, module.name)\">\n            <p class=\"hammer\" >&#xf0e3;</p>\n            <p class=\"wrench\" >&#xf0ad;</p>\n          </div>\n          <div class=\"icon remove\" *ngIf=\"\n            ((userService.user.role == 'ADMIN' ||\n            userService.user.role == 'MODERATOR') &&\n            module.finished === 1 &&\n            module.approved === 1)\n            ||\n            (userService.user.id == module.owner &&\n            userService.user.id == 'USER' &&\n            module.finished === 1 &&\n            module.approved === 1)\"\n            (click)=\"iconDisapprove(module.id)\">\n            <p>&#xf00d;</p>\n          </div>\n          <div class=\"icon wait\" *ngIf=\"\n            (userService.user.id == module.owner &&\n            userService.user.role == 'USER' &&\n            module.finished === 1 &&\n            module.approved === 0)\">\n            <p class=\"rotating\">&#xf013;</p>\n          </div>\n          <div class=\"icon accept small\" *ngIf=\"\n            (userService.user.role == 'ADMIN' ||\n            userService.user.role == 'MODERATOR') &&\n            module.finished === 1 &&\n            module.approved === 0\"\n            (click)=\"iconApprove(module.id)\">\n            <p>&#xf00c;</p>\n          </div>\n          <div class=\"icon test\" *ngIf=\"\n            (\n              userService.user.id == module.owner &&\n              module.finished === 0\n            ) ||\n            (\n              userService.user.role == 'MODERATOR' &&\n              module.finished === 0\n            ) ||\n            (\n              userService.user.role == 'ADMIN' &&\n              module.finished === 0\n            )||\n            (\n              userService.user.role == 'MODERATOR' &&\n              module.finished === 1 &&\n              module.approved === 0\n            ) ||\n            (\n              userService.user.role == 'ADMIN' &&\n              module.finished === 1 &&\n              module.approved === 0\n            )\"\n            (click)=\"iconPlay(module.id, module.type, module.name)\"\n            >\n            <p>&#xf054;</p>\n          </div>\n          <div class=\"icon deny small\" *ngIf=\"\n            (userService.user.role == 'ADMIN' ||\n            userService.user.role == 'MODERATOR') &&\n            module.finished === 1 &&\n            module.approved === 0\"\n            (click)=\"iconDisapprove(module.id)\">\n            <p>&#xf00d;</p>\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/modules/modules.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n:host {\n  background-image: url(" + __webpack_require__("../../../../../src/media/backgrounds/smitd_bg_crystals.png") + ");\n  background-repeat: repeat;\n  background-position: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n#modules {\n  background: linear-gradient(-90deg, transparent, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.5), transparent);\n  width: 100%; }\n\n@media (min-width: 720px) {\n  #modules {\n    width: 640px; } }\n\n@media (min-width: 1000px) {\n  #modules {\n    width: 920px; } }\n\n@media (min-width: 1200px) {\n  #modules {\n    width: 1140px; } }\n\n.sortandfilter {\n  width: 100%;\n  background: #000;\n  margin: 0;\n  padding: 10px 0 0 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.text-input {\n  font-family: CGB;\n  font-size: 120%;\n  color: #FFF;\n  width: 90%;\n  height: 30px;\n  border-radius: 5px;\n  text-align: center;\n  background-color: #323232;\n  border: 5px solid #323232;\n  margin: 10px 5% 5px 5%; }\n  .text-input:focus {\n    background-color: #1e1e1e;\n    outline: none; }\n\n.checkers {\n  width: 90%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.checker {\n  font-family: CGR;\n  color: #FFF;\n  margin-left: 50%;\n  -webkit-transform: translate(-50%);\n          transform: translate(-50%);\n  width: 100px;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 5px -40px 5px 70px; }\n\n.checker p {\n  font-family: CGB;\n  margin: 5px; }\n\n.checkbox input[type=checkbox] {\n  opacity: 0;\n  width: 80px;\n  height: 80px;\n  position: absolute;\n  left: -4px;\n  top: -5px;\n  z-index: 800;\n  cursor: pointer; }\n\n.checkbox {\n  width: 80px;\n  height: 40px;\n  background: #323232;\n  border-radius: 50px;\n  position: relative; }\n\n.checkbox:before {\n  font-family: CGB;\n  content: '\\2714';\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  height: 30px;\n  width: 30px;\n  border-radius: 100%;\n  color: #0F0;\n  font-size: 25px;\n  line-height: 30px;\n  background-color: #222; }\n\n.checkbox:after {\n  font-family: CGB;\n  content: '\\2716';\n  position: absolute;\n  top: 5px;\n  left: 45px;\n  height: 30px;\n  width: 30px;\n  border-radius: 100%;\n  color: #F00;\n  font-size: 25px;\n  line-height: 30px;\n  background-color: #222; }\n\n.checkbox label {\n  display: block;\n  width: 30px;\n  height: 30px;\n  border-radius: 50px;\n  transition: all .5s ease;\n  cursor: pointer;\n  position: absolute;\n  top: 5px;\n  z-index: 1;\n  left: 5px;\n  background: red; }\n\n.checkbox input[type=checkbox]:checked + label {\n  left: 45px;\n  background: lime; }\n\n.checkbox input[type=checkbox]:disabled + label {\n  left: 5px;\n  width: 70px;\n  background: #1e1e1e; }\n\n.list {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline; }\n\n.module-tab {\n  position: relative;\n  width: 200px;\n  height: 390px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n  border-radius: 100px;\n  background: linear-gradient(rgba(20, 20, 20, 0.5), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5), rgba(20, 20, 20, 0.75));\n  padding-bottom: 10px;\n  margin: 40px;\n  box-shadow: 0 0 10px 5px black; }\n\n.module-img {\n  height: 200px;\n  width: 200px;\n  background-image: #000;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  border-radius: 50%; }\n\n.module-img-shadow {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 200px;\n  width: 200px;\n  border-radius: 50%;\n  box-shadow: inset 0 0 20px 2px #000; }\n\n.module-title {\n  font-size: 125%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 100%;\n  margin: 10px 0; }\n\n.module-type {\n  color: #646464;\n  width: 100%;\n  margin: 0; }\n\n.stars {\n  position: relative;\n  overflow: hidden;\n  height: 40px;\n  width: 200px;\n  display: block;\n  padding: 0 5px 10px 5px; }\n\n.star {\n  width: 40px;\n  height: 40px;\n  color: #FC0;\n  font-size: 40px;\n  line-height: 40px;\n  margin: 0;\n  padding: 0;\n  text-shadow: 0 0 5px #EB0; }\n  .star-empty {\n    width: 40px;\n    height: 40px;\n    color: #646464;\n    font-size: 40px;\n    line-height: 40px;\n    margin: 0;\n    padding: 0;\n    text-shadow: 0 0 10px #000; }\n  .star-half {\n    overflow: hidden;\n    width: 16.75px;\n    height: 40px;\n    color: #FC0;\n    font-size: 40px;\n    line-height: 40px;\n    margin: 0;\n    margin-left: 3px;\n    margin-right: 20.25px;\n    padding: 0;\n    text-shadow: 0 0 5px #EB0; }\n\n.s1 {\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.s2 {\n  position: absolute;\n  left: 40px;\n  top: 0; }\n\n.s3 {\n  position: absolute;\n  left: 80px;\n  top: 0; }\n\n.s4 {\n  position: absolute;\n  left: 120px;\n  top: 0; }\n\n.s5 {\n  position: absolute;\n  left: 160px;\n  top: 0; }\n\n.icons {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.icon {\n  overflow: hidden;\n  font-family: CGB;\n  background-color: #323232;\n  color: #141414;\n  text-shadow: 0 0 5px #0a0a0a;\n  height: 60px;\n  width: 60px;\n  line-height: 60px;\n  font-size: 50px;\n  border-radius: 50%;\n  outline: none;\n  margin: 0 5px 10px 5px;\n  cursor: pointer;\n  box-shadow: 0 0 10px 3px black;\n  transition: color 0.5s, text-shadow 0.5s; }\n\n.small {\n  margin-top: -5px;\n  height: 40px;\n  width: 40px;\n  line-height: 40px;\n  font-size: 20px; }\n\n.play p {\n  font-family: ICON;\n  font-size: 80%;\n  margin: 0;\n  padding: 0;\n  margin-left: 4px;\n  margin-top: 2px;\n  transition: color 0.5s, text-shadow 0.5s; }\n  .play p:hover {\n    color: #0F0;\n    text-shadow: 0 0 10px #0F0; }\n\n.test p {\n  font-family: ICON;\n  font-size: 80%;\n  margin: 0;\n  padding: 0;\n  margin-left: 4px;\n  margin-top: 2px;\n  transition: color 0.5s, text-shadow 0.5s; }\n  .test p:hover {\n    color: #FA0;\n    text-shadow: 0 0 10px #FA0; }\n\n.edit {\n  position: relative; }\n\n.edit .wrench {\n  position: absolute;\n  font-family: ICON;\n  font-size: 80%;\n  top: -42px;\n  left: 12px;\n  transition: color 0.5s, text-shadow 0.5s; }\n\n.edit:hover p {\n  color: #FA0;\n  text-shadow: 0 0 10px #FA0; }\n\n.wait p {\n  font-family: ICON;\n  cursor: default;\n  font-size: 100%;\n  margin: 0;\n  margin-top: 0px;\n  text-shadow: none;\n  transition: color 0.5s, text-shadow 0.5s; }\n\n.add p {\n  font-family: ICON;\n  font-size: 80%;\n  margin: 0;\n  margin-top: 2px;\n  margin-left: 0.5px;\n  transition: color 0.5s, text-shadow 0.5s; }\n  .add p:hover {\n    color: #FA0;\n    text-shadow: 0 0 10px #FA0; }\n\n.remove p {\n  font-family: ICON;\n  font-size: 45px;\n  margin: 0;\n  margin-top: -1px;\n  margin-left: 1px;\n  transition: color 0.5s, text-shadow 0.5s; }\n  .remove p:hover {\n    color: #A00;\n    text-shadow: 0 0 10px #A00; }\n\n.accept p {\n  font-family: ICON;\n  font-size: 30px;\n  margin: 0;\n  padding: 0;\n  margin-left: 1px;\n  margin-top: 0px;\n  transition: color 0.5s, text-shadow 0.5s; }\n  .accept p:hover {\n    color: #0F0;\n    text-shadow: 0 0 10px #0F0; }\n\n.deny p {\n  font-family: ICON;\n  font-size: 30px;\n  margin: 0;\n  margin-top: 0;\n  margin-left: 1px;\n  transition: color 0.5s, text-shadow 0.5s; }\n  .deny p:hover {\n    color: #A00;\n    text-shadow: 0 0 10px #A00; }\n\n@-webkit-keyframes rotating /* Safari and Chrome */ {\n  from {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes rotating {\n  from {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n.rotating {\n  -webkit-animation: rotating 3s linear infinite;\n  animation: rotating 3s linear infinite; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/modules/modules.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModulesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_module_service__ = __webpack_require__("../../../../../src/app/services/module.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_carrier_service__ = __webpack_require__("../../../../../src/app/services/carrier.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_Module__ = __webpack_require__("../../../../../src/app/models/Module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ModulesComponent = (function () {
    function ModulesComponent(moduleService, userService, carrierService, route, router) {
        this.moduleService = moduleService;
        this.userService = userService;
        this.carrierService = carrierService;
        this.route = route;
        this.router = router;
        this.modules = [];
        this.hammer = String.fromCodePoint(0x02692);
        this.routerLink = "/editor/new";
        // min-height
        this.document_height = document.documentElement.clientHeight;
        this.container_min_height = 0;
    }
    ModulesComponent.prototype.ngOnInit = function () {
        this.loadModuls();
        this.resize();
    };
    ModulesComponent.prototype.loadModuls = function () {
        var _this = this;
        this.moduleService.getModules().subscribe(function (results) {
            var temp = results.modules;
            var newModules = [];
            for (var _i = 0, temp_1 = temp; _i < temp_1.length; _i++) {
                var t = temp_1[_i];
                newModules.push(new __WEBPACK_IMPORTED_MODULE_4__models_Module__["a" /* Module */](t.id, t.owner, t.name, t.type, t.description, t.image, t.startscene, t.isPublic, t.finished, t.approved, t.approvedBy, t.published, t.views, t.rate));
            }
            _this.modules = newModules;
        });
    };
    ModulesComponent.prototype.iconAdd = function () {
        this.moduleService.selectedModule = 0;
        this.router.navigate(['editor/new']);
    };
    ModulesComponent.prototype.iconPlay = function (id, type, name) {
        this.moduleService.selectedModule = id;
        if (type === "Adventure") {
            this.router.navigate(['play/' + name]);
        }
        else {
            this.router.navigate(['read/' + name]);
        }
    };
    ModulesComponent.prototype.iconEdit = function (id, name) {
        this.moduleService.selectedModule = id;
        this.router.navigate(['editor/' + name]);
    };
    ModulesComponent.prototype.iconApprove = function (id) {
        var _this = this;
        this.moduleService.approveModule(id).subscribe(function (results) {
            _this.ngOnInit();
        });
    };
    ModulesComponent.prototype.iconDisapprove = function (id) {
        var _this = this;
        this.moduleService.disapproveModule(id).subscribe(function (results) {
            _this.ngOnInit();
        });
    };
    ModulesComponent.prototype.resize = function () {
        this.document_height = document.documentElement.clientHeight;
        this.container_min_height = this.document_height - 120;
    };
    ModulesComponent.prototype.onResize = function (event) {
        this.resize();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ModulesComponent.prototype, "onResize", null);
    ModulesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-modules',
            template: __webpack_require__("../../../../../src/app/pages/modules/modules.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/modules/modules.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_module_service__["a" /* ModuleService */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_carrier_service__["a" /* CarrierService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], ModulesComponent);
    return ModulesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/play/play.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"play\" [style.min-height.px]=\"container_min_height\">\n  <div id=\"stage\"\n    [ngStyle]=\"{\n      'position' : fullscreen ? 'absolute' : '',\n      'top' : fullscreen ? '0' : '',\n      'left' : fullscreen ? '0' : '',\n      'z-index' : fullscreen ? '9001' : '',\n      'width' : fullscreen ? document_width+'px' : '',\n      'height' : fullscreen ? document_height+'px' : '',\n      'opacity' : fullscreenOnce ? resizeCorrection() : ''}\"\n  >\n    <div id=\"even\" class=\" scene {{animEven}} \" [ngClass]=\"getEvenAct()\"\n      [ngStyle]=\"evenScene.getStyle()\"\n    >\n      <div id=\"sceneObject\" *ngFor =\"let obj of evenScene.objects\"\n      class=\"{{activeEvenEvent(obj.getEvents())}}\"\n      [ngClass]=\"{'link' : obj.action.split(':')[0] === 'click'}\"\n      (click)=\"handleSceneClicks(obj.action)\"\n      [ngStyle]=\"obj.getStyle(stageW, stageH)\"\n      >\n        <p *ngIf=\"obj.type === 'txt'\">{{obj.cont}}</p>\n      </div>\n    </div>\n\n    <div id=\"odd\" class=\" scene {{animOdd}} \" [ngClass]=\"getOddAct()\"\n      [ngStyle]=\"oddScene.getStyle()\"\n    >\n      <div id=\"sceneObject\" *ngFor =\"let obj of oddScene.objects\"\n      class=\"{{activeOddEvent(obj.getEvents())}}\"\n      [ngClass]=\"{'link' : obj.action.split(':')[0] === 'click'}\"\n      (click)=\"handleSceneClicks(obj.action)\"\n      [ngStyle]=\"obj.getStyle(stageW, stageH)\"\n      >\n        <p *ngIf=\"obj.type === 'txt'\">{{obj.cont}}</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/play/play.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  background-image: url(" + __webpack_require__("../../../../../src/media/backgrounds/smitd_bg_crystals.png") + ");\n  background-repeat: repeat;\n  background-position: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n#play {\n  background: linear-gradient(-90deg, transparent 0%, rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 0.5) 90%, transparent 100%);\n  width: 100%; }\n\n@media (min-width: 720px) {\n  #play {\n    width: 640px; } }\n\n@media (min-width: 1000px) {\n  #play {\n    width: 920px; } }\n\n@media (min-width: 1200px) {\n  #play {\n    width: 1140px; } }\n\n#stage {\n  overflow: hidden;\n  position: relative;\n  width: 100vw;\n  height: 56.25vw;\n  background-color: #000;\n  box-shadow: 0 0 10px 5px black; }\n\n@media (min-width: 720px) {\n  #stage {\n    width: 640px;\n    height: 360px; } }\n\n@media (min-width: 1000px) {\n  #stage {\n    width: 920px;\n    height: 517.5px; } }\n\n@media (min-width: 1200px) {\n  #stage {\n    width: 1140px;\n    height: 641.25px; } }\n\n#stage:-moz-full-screen {\n  position: absolute;\n  z-index: 9001;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh; }\n\n#stage:-webkit-full-screen {\n  position: absolute;\n  z-index: 9001;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh; }\n\n#stage:-ms-fullscreen {\n  position: absolute;\n  z-index: 9001;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh; }\n\n#stage:fullscreen {\n  position: absolute;\n  z-index: 9001;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh; }\n\n.scene {\n  overflow: hidden;\n  background-color: #222;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  -o-box-shadow: 0 0 10px 0 #111 inset, 0 0 10px 0 #111;\n  box-shadow: 0 0 10px 0 #111 inset, 0 0 10px 0 #111; }\n\n.link {\n  cursor: pointer; }\n\n/*maximum 10 events in van scene*/\n.pas1 .event1 {\n  opacity: 1;\n  visibility: visible; }\n\n.act1 .event1 {\n  -webkit-animation: fadeinevent 0.25s;\n          animation: fadeinevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas1 .event2 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act1 .event2 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas1 .event3 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act1 .event3 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas1 .event4 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act1 .event4 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas1 .event5 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act1 .event5 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas1 .event6 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act1 .event6 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas1 .event7 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act1 .event7 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas1 .event8 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act1 .event8 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas1 .event9 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act1 .event9 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas1 .event10 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act1 .event10 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n/*maximum 10 events in van scene*/\n.pas2 .event1 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act2 .event1 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas2 .event2 {\n  opacity: 1;\n  visibility: visible; }\n\n.act2 .event2 {\n  -webkit-animation: fadeinevent 0.25s;\n          animation: fadeinevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas2 .event3 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act2 .event3 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas2 .event4 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act2 .event4 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas2 .event5 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act2 .event5 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas2 .event6 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act2 .event6 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas2 .event7 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act2 .event7 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas2 .event8 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act2 .event8 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas2 .event9 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act2 .event9 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas2 .event10 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act2 .event10 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n/*maximum 10 events in van scene*/\n.pas3 .event1 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act3 .event1 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas3 .event2 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act3 .event2 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas3 .event3 {\n  opacity: 1;\n  visibility: visible; }\n\n.act3 .event3 {\n  -webkit-animation: fadeinevent 0.25s;\n          animation: fadeinevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas3 .event4 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act3 .event4 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas3 .event5 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act3 .event5 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas3 .event6 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act3 .event6 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas3 .event7 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act3 .event7 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas3 .event8 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act3 .event8 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas3 .event9 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act3 .event9 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas3 .event10 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act3 .event10 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n/*maximum 10 events in van scene*/\n.pas4 .event1 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act4 .event1 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas4 .event2 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act4 .event2 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas4 .event3 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act4 .event3 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas4 .event4 {\n  opacity: 1;\n  visibility: visible; }\n\n.act4 .event4 {\n  -webkit-animation: fadeinevent 0.25s;\n          animation: fadeinevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas4 .event5 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act4 .event5 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas4 .event6 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act4 .event6 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas4 .event7 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act4 .event7 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas4 .event8 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act4 .event8 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas4 .event9 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act4 .event9 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas4 .event10 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act4 .event10 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n/*maximum 10 events in van scene*/\n.pas5 .event1 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act5 .event1 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas5 .event2 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act5 .event2 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas5 .event3 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act5 .event3 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas5 .event4 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act5 .event4 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas5 .event5 {\n  opacity: 1;\n  visibility: visible; }\n\n.act5 .event5 {\n  -webkit-animation: fadeinevent 0.25s;\n          animation: fadeinevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas5 .event6 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act5 .event6 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas5 .event7 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act5 .event7 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas5 .event8 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act5 .event8 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas5 .event9 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act5 .event9 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas5 .event10 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act5 .event10 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n/*maximum 10 events in van scene*/\n.pas6 .event1 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act6 .event1 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas6 .event2 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act6 .event2 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas6 .event3 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act6 .event3 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas6 .event4 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act6 .event4 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas6 .event5 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act6 .event5 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas6 .event6 {\n  opacity: 1;\n  visibility: visible; }\n\n.act6 .event6 {\n  -webkit-animation: fadeinevent 0.25s;\n          animation: fadeinevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas6 .event7 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act6 .event7 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas6 .event8 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act6 .event8 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas6 .event9 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act6 .event9 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas6 .event10 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act6 .event10 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n/*maximum 10 events in van scene*/\n.pas7 .event1 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act7 .event1 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas7 .event2 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act7 .event2 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas7 .event3 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act7 .event3 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas7 .event4 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act7 .event4 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas7 .event5 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act7 .event5 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas7 .event6 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act7 .event6 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas7 .event7 {\n  opacity: 1;\n  visibility: visible; }\n\n.act7 .event7 {\n  -webkit-animation: fadeinevent 0.25s;\n          animation: fadeinevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas7 .event8 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act7 .event8 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas7 .event9 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act7 .event9 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas7 .event10 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act7 .event10 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n/*maximum 10 events in van scene*/\n.pas8 .event1 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act8 .event1 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas8 .event2 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act8 .event2 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas8 .event3 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act8 .event3 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas8 .event4 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act8 .event4 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas8 .event5 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act8 .event5 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas8 .event6 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act8 .event6 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas8 .event7 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act8 .event7 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas8 .event8 {\n  opacity: 1;\n  visibility: visible; }\n\n.act8 .event8 {\n  -webkit-animation: fadeinevent 0.25s;\n          animation: fadeinevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas8 .event9 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act8 .event9 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas8 .event10 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act8 .event10 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n/*maximum 10 events in van scene*/\n.pas9 .event1 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act9 .event1 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas9 .event2 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act9 .event2 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas9 .event3 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act9 .event3 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas9 .event4 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act9 .event4 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas9 .event5 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act9 .event5 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas9 .event6 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act9 .event6 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas9 .event7 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act9 .event7 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas9 .event8 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act9 .event8 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas9 .event9 {\n  opacity: 1;\n  visibility: visible; }\n\n.act9 .event9 {\n  -webkit-animation: fadeinevent 0.25s;\n          animation: fadeinevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas9 .event10 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act9 .event10 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n/*maximum 10 events in van scene*/\n.pas10 .event1 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act10 .event1 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas10 .event2 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act10 .event2 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas10 .event3 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act10 .event3 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas10 .event4 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act10 .event4 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas10 .event5 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act10 .event5 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas10 .event6 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act10 .event6 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas10 .event7 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act10 .event7 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas10 .event8 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act10 .event8 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas10 .event9 {\n  opacity: 0;\n  visibility: hidden; }\n\n.act10 .event9 {\n  -webkit-animation: fadeoutevent 0.25s;\n          animation: fadeoutevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n.pas10 .event10 {\n  opacity: 1;\n  visibility: visible; }\n\n.act10 .event10 {\n  -webkit-animation: fadeinevent 0.25s;\n          animation: fadeinevent 0.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n\n@-webkit-keyframes fadeinevent {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@keyframes fadeinevent {\n  from {\n    opacity: 0;\n    visibility: hidden; }\n  to {\n    opacity: 1;\n    visibility: visible; } }\n\n@-webkit-keyframes fadeoutevent {\n  from {\n    opacity: 1;\n    visibility: visible; }\n  to {\n    opacity: 0;\n    visibility: hidden; } }\n\n@keyframes fadeoutevent {\n  from {\n    opacity: 1;\n    visibility: visible; }\n  to {\n    opacity: 0;\n    visibility: hidden; } }\n\n.fade {\n  -webkit-animation: fadein 0.8s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: fadein 0.8s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out; }\n\n@keyframes fadein {\n  from {\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%);\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes fadein {\n  from {\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%);\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n/* Internet Explorer */\n\n/* Opera < 12.1 */\n\n.swipe-up {\n  -webkit-animation: swipeinup 0.8s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: swipeinup 0.8s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out; }\n\n@keyframes swipeinup {\n  from {\n    -webkit-transform: translateY(100%);\n            transform: translateY(100%); }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes swipeinup {\n  from {\n    -webkit-transform: translateY(100%);\n            transform: translateY(100%); }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n/* Internet Explorer */\n\n/* Opera < 12.1 */\n\n.swipe-right {\n  -webkit-animation: swipeinright 0.8s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: swipeinright 0.8s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out; }\n\n@keyframes swipeinright {\n  from {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); }\n  to {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes swipeinright {\n  from {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); }\n  to {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n\n/* Internet Explorer */\n\n/* Opera < 12.1 */\n\n.swipe-down {\n  -webkit-animation: swipeindown 0.8s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: swipeindown 0.8s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out; }\n\n@keyframes swipeindown {\n  from {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%); }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes swipeindown {\n  from {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%); }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n/* Internet Explorer */\n\n/* Opera < 12.1 */\n\n.swipe-left {\n  -webkit-animation: swipeinleft 0.8s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: swipeinleft 0.8s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out; }\n\n@keyframes swipeinleft {\n  from {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%); }\n  to {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes swipeinleft {\n  from {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%); }\n  to {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n\n/* Internet Explorer */\n\n/* Opera < 12.1 */\n\n.fade-out {\n  -webkit-animation: fadeout 0.8s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: fadeout 0.8s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out; }\n\n@keyframes fadeout {\n  0% {\n    opacity: 1; }\n  99% {\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateY(100%);\n            transform: translateY(100%);\n    opacity: 0; } }\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes fadeout {\n  0% {\n    opacity: 1; }\n  99% {\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateY(100%);\n            transform: translateY(100%);\n    opacity: 0; } }\n\n/* Internet Explorer */\n\n/* Opera < 12.1 */\n\n.swipe-out-up {\n  -webkit-animation: swipeoutup 0.8s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: swipeoutup 0.8s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out; }\n\n@keyframes swipeoutup {\n  from {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  to {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%); } }\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes swipeoutup {\n  from {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  to {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%); } }\n\n/* Internet Explorer */\n\n/* Opera < 12.1 */\n\n.swipe-out-right {\n  -webkit-animation: swipeoutright 0.8s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: swipeoutright 0.8s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out; }\n\n@keyframes swipeoutright {\n  from {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  to {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%); } }\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes swipeoutright {\n  from {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  to {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%); } }\n\n/* Internet Explorer */\n\n/* Opera < 12.1 */\n\n.swipe-out-down {\n  -webkit-animation: swipeoutdown 0.8s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: swipeoutdown 0.8s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out; }\n\n@keyframes swipeoutdown {\n  from {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  to {\n    -webkit-transform: translateY(100%);\n            transform: translateY(100%); } }\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes swipeoutdown {\n  from {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  to {\n    -webkit-transform: translateY(100%);\n            transform: translateY(100%); } }\n\n/* Internet Explorer */\n\n/* Opera < 12.1 */\n\n.swipe-out-left {\n  -webkit-animation: swipeoutleft 0.8s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: swipeoutleft 0.8s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out; }\n\n@keyframes swipeoutleft {\n  from {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  to {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); } }\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes swipeoutleft {\n  from {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  to {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); } }\n\n/* Internet Explorer */\n\n/* Opera < 12.1 */\n\n.fadeC {\n  -webkit-animation: fadeinC 0.8s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: fadeinC 0.8s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out; }\n\n@keyframes fadeinC {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes fadeinC {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n/* Internet Explorer */\n\n/* Opera < 12.1 */\n\n.swipe-upC {\n  -webkit-animation: swipeinupC 0.8s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: swipeinupC 0.8s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out; }\n\n@keyframes swipeinupC {\n  from {\n    -webkit-transform: translateY(100%);\n            transform: translateY(100%); }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes swipeinupC {\n  from {\n    -webkit-transform: translateY(100%);\n            transform: translateY(100%); }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n/* Internet Explorer */\n\n/* Opera < 12.1 */\n\n.swipe-rightC {\n  -webkit-animation: swipeinrightC 0.8s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: swipeinrightC 0.8s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out; }\n\n@keyframes swipeinrightC {\n  from {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); }\n  to {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes swipeinrightC {\n  from {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); }\n  to {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n\n/* Internet Explorer */\n\n/* Opera < 12.1 */\n\n.swipe-downC {\n  -webkit-animation: swipeindownC 0.8s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: swipeindownC 0.8s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out; }\n\n@keyframes swipeindownC {\n  from {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%); }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes swipeindownC {\n  from {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%); }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n/* Internet Explorer */\n\n/* Opera < 12.1 */\n\n.swipe-leftC {\n  -webkit-animation: swipeinleftC 0.8s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: swipeinleftC 0.8s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out; }\n\n@keyframes swipeinleftC {\n  from {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%); }\n  to {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes swipeinleftC {\n  from {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%); }\n  to {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n\n/* Internet Explorer */\n\n/* Opera < 12.1 */\n\n.fade-outC {\n  -webkit-animation: fadeoutC 0.8s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: fadeoutC 0.8s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out; }\n\n@keyframes fadeoutC {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes fadeoutC {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n/* Internet Explorer */\n\n/* Opera < 12.1 */\n\n.swipe-out-upC {\n  -webkit-animation: swipeoutupC 0.8s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: swipeoutupC 0.8s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out; }\n\n@keyframes swipeoutupC {\n  from {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  to {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%); } }\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes swipeoutupC {\n  from {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  to {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%); } }\n\n/* Internet Explorer */\n\n/* Opera < 12.1 */\n\n.swipe-out-rightC {\n  -webkit-animation: swipeoutrightC 0.8s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: swipeoutrightC 0.8s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out; }\n\n@keyframes swipeoutrightC {\n  from {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  to {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%); } }\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes swipeoutrightC {\n  from {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  to {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%); } }\n\n/* Internet Explorer */\n\n/* Opera < 12.1 */\n\n.swipe-out-downC {\n  -webkit-animation: swipeoutdownC 0.8s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: swipeoutdownC 0.8s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out; }\n\n@keyframes swipeoutdownC {\n  from {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  to {\n    -webkit-transform: translateY(100%);\n            transform: translateY(100%); } }\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes swipeoutdownC {\n  from {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  to {\n    -webkit-transform: translateY(100%);\n            transform: translateY(100%); } }\n\n/* Internet Explorer */\n\n/* Opera < 12.1 */\n\n.swipe-out-leftC {\n  -webkit-animation: swipeoutleftC 0.8s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: swipeoutleftC 0.8s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out; }\n\n@keyframes swipeoutleftC {\n  from {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  to {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); } }\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes swipeoutleftC {\n  from {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  to {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); } }\n\n/* Internet Explorer */\n\n/* Opera < 12.1 */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/play/play.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_module_service__ = __webpack_require__("../../../../../src/app/services/module.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_scene_service__ = __webpack_require__("../../../../../src/app/services/scene.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_Module__ = __webpack_require__("../../../../../src/app/models/Module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_Scene__ = __webpack_require__("../../../../../src/app/models/Scene.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/forkJoin.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PlayComponent = (function () {
    function PlayComponent(moduleService, sceneService, userService, route, router) {
        this.moduleService = moduleService;
        this.sceneService = sceneService;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.switch = false;
        // sceneId: number;
        this.oddScene = new __WEBPACK_IMPORTED_MODULE_5__models_Scene__["a" /* Scene */](0, 0, "#000", []);
        this.oddAct = 1;
        this.oddPrev = 1;
        this.evenScene = new __WEBPACK_IMPORTED_MODULE_5__models_Scene__["a" /* Scene */](0, 0, "#000", []);
        this.evenAct = 1;
        this.evenPrev = 1;
        this.initial = true;
        this.animOdd = "fade";
        this.animEven = "fade-out";
        this.container_min_height = 0;
        this.document_height = document.documentElement.clientHeight;
        this.document_width = document.documentElement.clientHeight;
        this.fullscreen = false;
        this.fullscreenOnce = false;
    }
    PlayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resize();
        this.setStage();
        this.moduleId = this.moduleService.selectedModule;
        if (this.moduleId !== 0) {
            this.moduleService.getModuleById(this.moduleId).subscribe(function (result) {
                var t = result.module;
                _this.currentModule = new __WEBPACK_IMPORTED_MODULE_4__models_Module__["a" /* Module */](t.id, t.owner, t.name, t.type, t.description, t.image, t.startscene, t.isPublic, t.finished, t.approved, t.approvedBy, t.published, t.views, t.rate);
                // this.sceneId = this.currentModule.startscene;
                _this.loadScene(_this.currentModule.startscene);
            });
        }
        else {
            this.router.navigate(['modules']);
        }
    };
    PlayComponent.prototype.loadScene = function (sceneId) {
        var _this = this;
        this.sceneService.getSceneById(sceneId).subscribe(function (result) {
            _this.sceneService.getObjectsBySceneId(sceneId).subscribe(function (res) {
                _this.switch = !_this.switch;
                var scene = result.scene;
                var loopable = res.objects;
                var objects = [];
                for (var _i = 0, loopable_1 = loopable; _i < loopable_1.length; _i++) {
                    var obj = loopable_1[_i];
                    objects.push(new __WEBPACK_IMPORTED_MODULE_5__models_Scene__["b" /* SceneObject */](obj.id, obj.sId, obj.type, obj.action, obj.x, obj.y, obj.w, obj.h, obj.z, obj.cont, obj.style, obj.event));
                }
                if (_this.switch) {
                    _this.oddScene = new __WEBPACK_IMPORTED_MODULE_5__models_Scene__["a" /* Scene */](scene.id, scene.mId, scene.background, objects);
                    _this.oddAct = 1;
                    _this.oddPrev = 1;
                    _this.initial = true;
                }
                else {
                    _this.evenScene = new __WEBPACK_IMPORTED_MODULE_5__models_Scene__["a" /* Scene */](scene.id, scene.mId, scene.background, objects);
                    _this.evenAct = 1;
                    _this.evenPrev = 1;
                    _this.initial = true;
                }
                console.log("odd:" + _this.switch);
            });
        });
    };
    PlayComponent.prototype.handleSceneClicks = function (input) {
        this.initial = false;
        var action = input.split(':');
        if (action[0] === "click") {
            if (action[1] === 'scene') {
                if (this.switch) {
                    if (this.animEven === action[3])
                        this.animEven = action[3] + "C";
                    else
                        this.animEven = action[3];
                    if (this.animOdd === action[4])
                        this.animOdd = action[4] + "C";
                    else
                        this.animOdd = action[4];
                }
                else {
                    if (this.animOdd === action[3])
                        this.animOdd = action[3] + "C";
                    else
                        this.animOdd = action[3];
                    if (this.animEven === action[4])
                        this.animEven = action[4] + "C";
                    else
                        this.animEven = action[4];
                }
                this.loadScene(+action[2]);
            }
            if (action[1] === 'event') {
                if (this.switch) {
                    if (this.oddAct !== +action[2]) {
                        this.oddPrev = this.oddAct;
                        this.oddAct = +action[2];
                    }
                }
                else {
                    if (this.evenAct !== +action[2]) {
                        this.evenPrev = this.evenAct;
                        this.evenAct = +action[2];
                    }
                }
            }
        }
    };
    PlayComponent.prototype.getOddAct = function () {
        if (this.initial) {
            return "pas" + this.oddAct;
        }
        else {
            return "act" + this.oddAct;
        }
    };
    PlayComponent.prototype.getEvenAct = function () {
        if (this.initial) {
            return "pas" + this.evenAct;
        }
        else {
            return "act" + this.evenAct;
        }
    };
    PlayComponent.prototype.activeOddEvent = function (events) {
        var init = "0";
        var curr = false;
        var prev = false;
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var e = events_1[_i];
            if (e === this.oddAct) {
                curr = true;
            }
            if (e === this.oddPrev) {
                prev = true;
            }
        }
        if (curr && prev) {
            init = "stay";
        }
        else if (curr) {
            init = "" + this.oddAct;
        }
        else {
            if (this.oddAct < 5)
                init = "" + (this.oddAct + 1);
            else
                init = "" + (this.oddAct - 1);
        }
        return "event" + init;
    };
    PlayComponent.prototype.activeEvenEvent = function (events) {
        var init = "0";
        var curr = false;
        var prev = false;
        for (var _i = 0, events_2 = events; _i < events_2.length; _i++) {
            var e = events_2[_i];
            if (e === this.evenAct) {
                curr = true;
            }
            if (e === this.evenPrev) {
                prev = true;
            }
        }
        if (curr && prev) {
            init = "stay";
        }
        else if (curr) {
            init = "" + this.evenAct;
        }
        else {
            if (this.evenAct < 5)
                init = "" + (this.evenAct + 1);
            else
                init = "" + (this.evenAct - 1);
        }
        return "event" + init;
    };
    PlayComponent.prototype.LOG = function (log) {
        console.log(log);
    };
    PlayComponent.prototype.resize = function () {
        this.document_height = document.documentElement.clientHeight;
        this.document_width = document.documentElement.clientWidth;
        if (screen.height === window.innerHeight) {
            console.log("fullscreen");
            this.fullscreen = true;
            this.fullscreenOnce = true;
        }
        else {
            this.fullscreen = false;
            this.fullscreenOnce = true;
        }
        this.container_min_height = this.document_height - 120;
    };
    PlayComponent.prototype.resizeCorrection = function () {
        var _this = this;
        console.log(0);
        this.fullscreenOnce = false;
        setTimeout(function () {
            _this.setStage();
        }, 0);
        return 1;
    };
    PlayComponent.prototype.setStage = function () {
        this.stageX = document.getElementById("stage").offsetLeft;
        this.stageY = document.getElementById("stage").offsetTop;
        this.stageW = document.getElementById("stage").offsetWidth;
        this.stageH = document.getElementById("stage").offsetHeight;
    };
    PlayComponent.prototype.onResize = function (event) {
        this.resize();
        this.setStage();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PlayComponent.prototype, "onResize", null);
    PlayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-play',
            template: __webpack_require__("../../../../../src/app/pages/play/play.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/play/play.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_module_service__["a" /* ModuleService */],
            __WEBPACK_IMPORTED_MODULE_2__services_scene_service__["a" /* SceneService */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]])
    ], PlayComponent);
    return PlayComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"register\"  [style.min-height.px]=\"container_min_height\">\n\n    <img class=\"himg\" src=\"../../../../media/images/smitd_logo_text.png\"><br>\n\n    <h1>Create an account</h1>\n    <form [formGroup]=\"registerForm\" novalidate>\n        <input type=\"text\" class=\"form-control text-input\" formControlName=\"username\" placeholder=\"Username\" ><br>\n        <input type=\"password\" class=\"form-control text-input\" formControlName=\"password\" placeholder=\"Password\" ><br>\n        <input type=\"password\" class=\"form-control text-input\" formControlName=\"confirm\"  placeholder=\"Confirm Password\" ><br>\n        <input type=\"text\" class=\"form-control text-input\" formControlName=\"email\" placeholder=\"Email\"><br>\n        <input type=\"text\" class=\"form-control text-input\" formControlName=\"nickname\" placeholder=\"Nickname\"><br>\n        <div class=\"checker\">\n            <section>\n                <div class=\"checkbox\">\n                    <input type=\"checkbox\" id=\"checkboxInput\" [checked]=\"check.value\"  (change)=\"changeValue()\" >\n                    <label for=\"checkboxInput\"></label>\n                </div>\n            </section>\n            <p>I agree to the terms.</p>\n\n        </div>\n\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"submit()\" [disabled]=\"!registerForm.valid || !check.value || !confirmed()\">Registration</button>\n\n    </form>\n    <div *ngIf=\" err !== '' \"> {{err}} </div>\n    <div class=\"separator\">\n        <div></div><p >or</p><div></div>\n    </div>\n    <a routerLink=\"/login\">Log in with your SMITD Account</a>\n    <br>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  background-image: url(" + __webpack_require__("../../../../../src/media/backgrounds/smitd_bg_crystals.png") + ");\n  background-repeat: repeat;\n  background-position: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n#register {\n  background-color: rgba(0, 0, 0, 0.5);\n  width: 100%; }\n\nh1 {\n  margin: 10px; }\n\n@media (min-width: 720px) {\n  #register {\n    width: 640px; } }\n\n@media (min-width: 1000px) {\n  #register {\n    width: 920px; } }\n\n@media (min-width: 1200px) {\n  #register {\n    width: 1140px; } }\n\n#register a {\n  color: #555;\n  text-decoration: none;\n  margin: 10px;\n  margin-top: 20px;\n  transition: color 0.2s; }\n  #register a:hover {\n    color: #FFF; }\n\n.text-input {\n  font-family: CGB;\n  font-size: 120%;\n  color: #FFF;\n  width: 60%;\n  max-width: 360px;\n  height: 30px;\n  border-radius: 5px;\n  text-align: center;\n  background-color: #323232;\n  border: 5px solid #323232;\n  margin: 10px; }\n  .text-input:focus {\n    background-color: #1e1e1e;\n    outline: none; }\n\nbutton {\n  font-family: CGB;\n  font-size: 120%;\n  color: #FFF;\n  width: 62%;\n  max-width: 370px;\n  height: 40px;\n  border-radius: 5px;\n  text-align: center;\n  background-color: #1e1e1e;\n  border: 5px solid #1e1e1e;\n  margin: 10px;\n  transition: background 0.2s, border 0.2s, color 0.2s; }\n  button:focus {\n    outline: none;\n    background-color: #333;\n    border: 5px solid #333; }\n  button:hover {\n    background-color: #333;\n    border: 5px solid #333; }\n  button:active {\n    color: #999;\n    background-color: #111;\n    border: 5px solid #111; }\n\nbutton:disabled {\n  color: #999;\n  background-color: #111;\n  border: 5px solid #111;\n  cursor: not-allowed; }\n\n.himg {\n  width: 60%;\n  max-width: 360px; }\n\n.separator {\n  text-align: center;\n  text-transform: uppercase;\n  color: #555;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.separator div {\n  border: 1px solid #333;\n  margin: 10px;\n  width: 25%;\n  max-width: 160px; }\n\n.checker {\n  font-family: CGR;\n  color: #FFF;\n  margin-left: 50%;\n  -webkit-transform: translate(-50%);\n          transform: translate(-50%);\n  width: 62%;\n  max-width: 370px;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.checkbox input[type=checkbox] {\n  opacity: 0;\n  width: 80px;\n  height: 80px;\n  position: absolute;\n  left: -4px;\n  top: -5px;\n  z-index: 800;\n  cursor: pointer; }\n\n.checkbox {\n  width: 80px;\n  height: 40px;\n  background: #333;\n  margin-right: 10px;\n  border-radius: 50px;\n  position: relative; }\n\n.checkbox:before {\n  font-family: ICON;\n  content: '\\F00C';\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  height: 30px;\n  width: 30px;\n  border-radius: 100%;\n  color: #0F0;\n  font-size: 20px;\n  line-height: 30px;\n  background-color: #222; }\n\n.checkbox:after {\n  font-family: ICON;\n  content: '\\F00D';\n  position: absolute;\n  top: 5px;\n  left: 45px;\n  height: 30px;\n  width: 30px;\n  border-radius: 100%;\n  color: #F00;\n  font-size: 21px;\n  line-height: 30px;\n  background-color: #222; }\n\n.checkbox label {\n  display: block;\n  width: 30px;\n  height: 30px;\n  border-radius: 50px;\n  transition: all .5s ease;\n  cursor: pointer;\n  position: absolute;\n  top: 5px;\n  z-index: 1;\n  left: 5px;\n  background: red; }\n\n.checkbox input[type=checkbox]:checked + label {\n  left: 45px;\n  background: lime; }\n\n.checkbox input[type=checkbox]:disabled + label {\n  left: 5px;\n  width: 70px;\n  background: #1e1e1e; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.err = "";
        this.registerForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
            confirm: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
            nickname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required])
        });
        this.check = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](false);
        // min-height
        this.document_height = document.documentElement.clientHeight;
        this.container_min_height = 0;
    }
    RegisterComponent.prototype.confirmed = function () {
        return this.username.value === this.confirm.value;
    };
    RegisterComponent.prototype.resize = function () {
        this.document_height = document.documentElement.clientHeight;
        this.container_min_height = this.document_height - 120;
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.resize();
        if (this.userService.user.role !== "GUEST")
            this.router.navigate(['/']);
    };
    RegisterComponent.prototype.onResize = function (event) {
        this.resize();
    };
    RegisterComponent.prototype.submit = function () {
        this.err = this.userService.register(this.username.value, this.nickname.value, this.email.value, this.password.value);
        if (this.err === '') {
            this.err = this.userService.login(this.username.value, this.password.value);
            this.router.navigate(['/']);
        }
    };
    Object.defineProperty(RegisterComponent.prototype, "username", {
        get: function () {
            return this.registerForm.get('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password", {
        get: function () {
            return this.registerForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "confirm", {
        get: function () {
            return this.registerForm.get('confirm');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "email", {
        get: function () {
            return this.registerForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "nickname", {
        get: function () {
            return this.registerForm.get('nickname');
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.changeValue = function () {
        this.check = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](!this.check.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], RegisterComponent.prototype, "onResize", null);
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/pages/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/carrier.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrierService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CarrierService = (function () {
    function CarrierService() {
    }
    CarrierService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], CarrierService);
    return CarrierService;
}());



/***/ }),

/***/ "../../../../../src/app/services/module.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_ServerRoutes__ = __webpack_require__("../../../../../src/app/utils/ServerRoutes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ModuleService = (function () {
    // selectedModule = 43;
    function ModuleService(http, route, userService) {
        this.http = http;
        this.route = route;
        this.userService = userService;
        this.selectedModule = 0;
    }
    // CREATE
    ModuleService.prototype.createModule = function (name, type, desc, img) {
        var send = {
            "owner": this.userService.user.id,
            "name": name,
            "type": type,
            "description": desc,
            "image": img
        };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__utils_ServerRoutes__["b" /* Server */].routeTo(__WEBPACK_IMPORTED_MODULE_5__utils_ServerRoutes__["a" /* Routes */].MODULE_CREATE), send)
            .map(function (res) { return res.json(); });
    };
    // READ
    ModuleService.prototype.getModuleById = function (id) {
        console.log;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__utils_ServerRoutes__["b" /* Server */].routeTo(__WEBPACK_IMPORTED_MODULE_5__utils_ServerRoutes__["a" /* Routes */].MODULE_GET_ID) + id)
            .map(function (res) { return res.json(); });
    };
    ModuleService.prototype.getModules = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__utils_ServerRoutes__["b" /* Server */].routeTo(__WEBPACK_IMPORTED_MODULE_5__utils_ServerRoutes__["a" /* Routes */].MODULE_GET_ALL))
            .map(function (res) { return res.json(); });
    };
    // UPDATE
    ModuleService.prototype.updateModule = function (id, name, type, desc, img, isPublic, finished) {
        var send = {
            "id": id,
            "name": name,
            "type": type,
            "description": desc,
            "image": img,
            "isPublic": isPublic,
            "finished": finished
        };
        return this.http.put(__WEBPACK_IMPORTED_MODULE_5__utils_ServerRoutes__["b" /* Server */].routeTo(__WEBPACK_IMPORTED_MODULE_5__utils_ServerRoutes__["a" /* Routes */].MODULE_UPDATE), send)
            .map(function (res) { return res.json(); });
    };
    ModuleService.prototype.rateModule = function (id, rate) {
        var send = {
            "id": +id,
            "rate": +rate,
        };
        return this.http.put(__WEBPACK_IMPORTED_MODULE_5__utils_ServerRoutes__["b" /* Server */].routeTo(__WEBPACK_IMPORTED_MODULE_5__utils_ServerRoutes__["a" /* Routes */].MODULE_RATE), send)
            .map(function (res) { return res.json(); });
    };
    ModuleService.prototype.approveModule = function (id) {
        var send = {
            "id": +id,
            "by": +this.userService.user.id,
        };
        return this.http.put(__WEBPACK_IMPORTED_MODULE_5__utils_ServerRoutes__["b" /* Server */].routeTo(__WEBPACK_IMPORTED_MODULE_5__utils_ServerRoutes__["a" /* Routes */].MODULE_APPROVE), send)
            .map(function (res) { return res.json(); });
    };
    ModuleService.prototype.disapproveModule = function (id) {
        var send = {
            "id": +id,
            "by": +this.userService.user.id,
        };
        return this.http.put(__WEBPACK_IMPORTED_MODULE_5__utils_ServerRoutes__["b" /* Server */].routeTo(__WEBPACK_IMPORTED_MODULE_5__utils_ServerRoutes__["a" /* Routes */].MODULE_DISAPPROVE), send)
            .map(function (res) { return res.json(); });
    };
    //DELETE
    ModuleService.prototype.deleteModule = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_5__utils_ServerRoutes__["b" /* Server */].routeTo(__WEBPACK_IMPORTED_MODULE_5__utils_ServerRoutes__["a" /* Routes */].MODULE_DELETE) + id)
            .map(function (res) { return res.json(); });
    };
    ModuleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]])
    ], ModuleService);
    return ModuleService;
}());



/***/ }),

/***/ "../../../../../src/app/services/scene.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SceneService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_ServerRoutes__ = __webpack_require__("../../../../../src/app/utils/ServerRoutes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SceneService = (function () {
    function SceneService(http, route, userService) {
        this.http = http;
        this.route = route;
        this.userService = userService;
        this.selectedScene = 0;
    }
    SceneService.prototype.createSceneByModuleId = function (id) {
        var send = {
            "mId": id
        };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__utils_ServerRoutes__["b" /* Server */].routeTo(__WEBPACK_IMPORTED_MODULE_5__utils_ServerRoutes__["a" /* Routes */].SCENE_CREATE), send)
            .map(function (res) { return res.json(); });
    };
    SceneService.prototype.getSceneById = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__utils_ServerRoutes__["b" /* Server */].routeTo(__WEBPACK_IMPORTED_MODULE_5__utils_ServerRoutes__["a" /* Routes */].SCENE_GET_ID) + id)
            .map(function (res) { return res.json(); });
    };
    SceneService.prototype.getScenesByModuleId = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__utils_ServerRoutes__["b" /* Server */].routeTo(__WEBPACK_IMPORTED_MODULE_5__utils_ServerRoutes__["a" /* Routes */].SCENE_GET_MID) + id)
            .map(function (res) { return res.json(); });
    };
    SceneService.prototype.updateSceneById = function (id, background) {
        var send = {
            "id": id,
            "background": background
        };
        return this.http.put(__WEBPACK_IMPORTED_MODULE_5__utils_ServerRoutes__["b" /* Server */].routeTo(__WEBPACK_IMPORTED_MODULE_5__utils_ServerRoutes__["a" /* Routes */].SCENE_UPDATE), send)
            .map(function (res) { return res.json(); });
    };
    SceneService.prototype.deleteSceneById = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_5__utils_ServerRoutes__["b" /* Server */].routeTo(__WEBPACK_IMPORTED_MODULE_5__utils_ServerRoutes__["a" /* Routes */].SCENE_DELETE) + id)
            .map(function (res) { return res.json(); });
    };
    //
    // // SCENE OBJECTS
    SceneService.prototype.createSceneObjectBySceneId = function (id) {
        var send = {
            "sId": id
        };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__utils_ServerRoutes__["b" /* Server */].routeTo(__WEBPACK_IMPORTED_MODULE_5__utils_ServerRoutes__["a" /* Routes */].OBJECT_CREATE), send)
            .map(function (res) { return res.json(); });
    };
    SceneService.prototype.getObjectsBySceneId = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__utils_ServerRoutes__["b" /* Server */].routeTo(__WEBPACK_IMPORTED_MODULE_5__utils_ServerRoutes__["a" /* Routes */].OBJECT_GET_SID) + id)
            .map(function (res) { return res.json(); });
    };
    SceneService.prototype.updateSceneObjectById = function (obj) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_5__utils_ServerRoutes__["b" /* Server */].routeTo(__WEBPACK_IMPORTED_MODULE_5__utils_ServerRoutes__["a" /* Routes */].OBJECT_UPDATE), obj)
            .map(function (res) { return res.json(); });
    };
    SceneService.prototype.deleteSceneObjectById = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_5__utils_ServerRoutes__["b" /* Server */].routeTo(__WEBPACK_IMPORTED_MODULE_5__utils_ServerRoutes__["a" /* Routes */].OBJECT_DELETE) + id)
            .map(function (res) { return res.json(); });
    };
    SceneService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]])
    ], SceneService);
    return SceneService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_User__ = __webpack_require__("../../../../../src/app/models/User.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService() {
        this.users = [
            {
                'data': new __WEBPACK_IMPORTED_MODULE_1__models_User__["a" /* User */](1, "admin", "Master", "ADMIN", []),
                'pass': 'admin'
            },
            {
                'data': new __WEBPACK_IMPORTED_MODULE_1__models_User__["a" /* User */](2, "norbertbang", "Opti", "USER", []),
                'pass': 'admin'
            },
            {
                'data': new __WEBPACK_IMPORTED_MODULE_1__models_User__["a" /* User */](8, "catchy", "Catchy", "USER", []),
                'pass': 'admin'
            },
            {
                'data': new __WEBPACK_IMPORTED_MODULE_1__models_User__["a" /* User */](4, "szofia", "Szofia", "USER", []),
                'pass': 'admin'
            },
            {
                'data': new __WEBPACK_IMPORTED_MODULE_1__models_User__["a" /* User */](5, "dudu", "Dudu", "USER", []),
                'pass': 'dudu'
            }
        ];
        this.user = new __WEBPACK_IMPORTED_MODULE_1__models_User__["a" /* User */](-1, "error", "Guest", "GUEST", []);
        // this.user = new User(1,"debug","Catchy","ADMIN",[]);
        // this.user = new User(8,"debug","Catchy","USER",[]);
    }
    UserService.prototype.login = function (username, password) {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (username === user.data.username) {
                if (password === user.pass) {
                    this.user = user.data;
                }
                else
                    return "Wrong password!";
            }
        }
        if (this.user.role === "GUEST") {
            return "User does not exist!";
        }
        return "";
    };
    UserService.prototype.logout = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_1__models_User__["a" /* User */](-1, "error", "Guest", "GUEST", []);
    };
    UserService.prototype.register = function (name, nick, email, pass) {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (name === user.data.username) {
                return "User already exists!";
            }
        }
        var newUser = new __WEBPACK_IMPORTED_MODULE_1__models_User__["a" /* User */](this.users.length, name, nick, "USER", []);
        this.users.push({ 'data': newUser, 'pass': pass });
        this.user = newUser;
        return "";
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/utils/ServerRoutes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Server; });
var Routes = (function () {
    function Routes() {
    }
    Routes.MODULE_CREATE = 'module/create';
    Routes.MODULE_GET_ID = 'module/id/';
    Routes.MODULE_GET_ALL = 'module/all';
    Routes.MODULE_UPDATE = 'module/update';
    Routes.MODULE_RATE = 'module/rate';
    Routes.MODULE_APPROVE = 'module/approve';
    Routes.MODULE_DISAPPROVE = 'module/disapprove';
    Routes.MODULE_DELETE = 'module/delete/';
    Routes.SCENE_CREATE = 'scene/create';
    Routes.SCENE_GET_ID = 'scene/id/';
    Routes.SCENE_GET_MID = 'scene/all/';
    Routes.SCENE_UPDATE = 'scene/update';
    Routes.SCENE_DELETE = 'scene/delete/';
    Routes.OBJECT_CREATE = 'object/create';
    Routes.OBJECT_GET_ID = 'object/id/';
    Routes.OBJECT_GET_SID = 'object/all/';
    Routes.OBJECT_UPDATE = 'object/update';
    Routes.OBJECT_DELETE = 'object/delete/';
    return Routes;
}());

var Server = (function () {
    function Server() {
    }
    Server.routeTo = function (route) {
        return "http://" + Server.address + ":" + Server.port + "/" + Server.prefix + "/" + route;
    };
    Server.address = '178.48.168.217';
    Server.port = '8080';
    Server.prefix = 'api';
    return Server;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
// console.log = function() {}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/media/backgrounds/smitd_bg_crystals.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "smitd_bg_crystals.4810f11c0eeb1a32e0c0.png";

/***/ }),

/***/ "../../../../../src/media/images/cms_logo.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cms_logo.7d29255b18d18461c784.png";

/***/ }),

/***/ "../../../../../src/media/images/cms_logo_text.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cms_logo_text.3e4cfb0945ec6c84bbeb.png";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map