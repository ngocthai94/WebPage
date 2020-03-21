(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Services/Services.module.ts":
/*!*********************************************!*\
  !*** ./src/app/Services/Services.module.ts ***!
  \*********************************************/
/*! exports provided: ServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceModule", function() { return ServiceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




//import category  from './../data/category';
class ServiceModule {
    constructor(http) {
        this.http = http;
    }
    //File Json phải tạo trong thư mục assets // mới nhận được
    GetDataAsyns(url) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http.get(url).toPromise();
        });
    }
    getMedia(url) {
        return this.http.get(url);
    }
}
ServiceModule.ɵfac = function ServiceModule_Factory(t) { return new (t || ServiceModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ServiceModule.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ServiceModule, factory: ServiceModule.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ServiceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modules_general_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/general/not-found/not-found.component */ "./src/app/modules/general/not-found/not-found.component.ts");


//import { AdminComponent } from './layouts/admin/admin.component';
//import { HomeComponent } from './modules/general/home/home.component';



const routes = [
    //Layout Tong Wat
    {
        path: 'about',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-general-about-about-module */ "modules-general-about-about-module").then(__webpack_require__.bind(null, /*! ./modules/general/about/about.module */ "./src/app/modules/general/about/about.module.ts"))
            .then(mod => mod.AboutModule)
    },
    {
        path: 'contact',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-general-contact-contact-module */ "modules-general-contact-contact-module").then(__webpack_require__.bind(null, /*! ./modules/general/contact/contact.module */ "./src/app/modules/general/contact/contact.module.ts"))
            .then(mod => mod.ContactModule)
    },
    {
        path: 'signin',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-general-signin-signin-module */ "modules-general-signin-signin-module").then(__webpack_require__.bind(null, /*! ./modules/general/signin/signin.module */ "./src/app/modules/general/signin/signin.module.ts"))
            .then(mod => mod.SigninModule)
    },
    { path: '**', component: _modules_general_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                declarations: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'angular-starter';
        this.version = 'Angular version 9.0.5';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "kenny"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                template: '<div class="kenny">'
                    + '<router-outlet></router-outlet>'
                    + '</div>',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/admin/admin.component */ "./src/app/layouts/admin/admin.component.ts");
/* harmony import */ var _layouts_authen_authen_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/authen/authen.component */ "./src/app/layouts/authen/authen.component.ts");
/* harmony import */ var _layouts_client_client_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/client/client.component */ "./src/app/layouts/client/client.component.ts");
/* harmony import */ var _modules_general_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/general/not-found/not-found.component */ "./src/app/modules/general/not-found/not-found.component.ts");
/* harmony import */ var _routes_modules_admin_admin_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes_modules/admin/admin-routing.module */ "./src/app/routes_modules/admin/admin-routing.module.ts");
/* harmony import */ var _routes_modules_client_client_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes_modules/client/client-routing.module */ "./src/app/routes_modules/client/client-routing.module.ts");
/* harmony import */ var _routes_modules_authen_authen_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./routes_modules/authen/authen-routing.module */ "./src/app/routes_modules/authen/authen-routing.module.ts");
/* harmony import */ var _modules_general_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/general/header/header.component */ "./src/app/modules/general/header/header.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _Services_Services_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Services/Services.module */ "./src/app/Services/Services.module.ts");





//import { HomeComponent } from './modules/general/home/home.component';
//Layout Temlate phải khai báo AppModule bắt buộc(layout admin + Clinet + Authen) 
// =. AdminComponent Layout chính Temlate admin

// =. AuthenComponent Layout chính Temlate authen

// =. ClientComponent Layout chính Temlate client


//Go Router con phải khai báo AppModule bắt buộc







//import { from } from 'rxjs';
//End Router
//Khai báo những Module, Router, component chung của dự án
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_Services_Services_module__WEBPACK_IMPORTED_MODULE_14__["ServiceModule"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__["PathLocationStrategy"] }], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _routes_modules_admin_admin_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingAdminModule"],
            _routes_modules_client_client_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingClientModule"],
            _routes_modules_authen_authen_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingAuthenModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
            //HeaderComponent,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"],
        _layouts_client_client_component__WEBPACK_IMPORTED_MODULE_7__["ClientComponent"],
        _layouts_authen_authen_component__WEBPACK_IMPORTED_MODULE_6__["AuthenComponent"],
        _modules_general_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
        _modules_general_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _routes_modules_admin_admin_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingAdminModule"],
        _routes_modules_client_client_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingClientModule"],
        _routes_modules_authen_authen_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingAuthenModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
        //HeaderComponent,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"],
                    _layouts_client_client_component__WEBPACK_IMPORTED_MODULE_7__["ClientComponent"],
                    _layouts_authen_authen_component__WEBPACK_IMPORTED_MODULE_6__["AuthenComponent"],
                    _modules_general_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
                    _modules_general_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _routes_modules_admin_admin_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingAdminModule"],
                    _routes_modules_client_client_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingClientModule"],
                    _routes_modules_authen_authen_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingAuthenModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
                    //HeaderComponent,
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                ],
                providers: [_Services_Services_module__WEBPACK_IMPORTED_MODULE_14__["ServiceModule"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__["PathLocationStrategy"] }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layouts/admin/admin.component.ts":
/*!**************************************************!*\
  !*** ./src/app/layouts/admin/admin.component.ts ***!
  \**************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AdminComponent {
    constructor() {
    }
    ngOnInit() { }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-layout"]], decls: 1795, vars: 0, consts: [["rel", "icon", "href", "assets/images/favicon.ico", "type", "image/x-icon"], ["rel", "stylesheet", "href", "http://html.codedthemes.com/gradient-able/bootstrap/default/assets/css/style.css"], [1, "loader-bg"], [1, "loader-track"], [1, "loader-fill"], [1, "pcoded-navbar", "menupos-fixed", "menu-light"], [1, "navbar-wrapper"], [1, "navbar-content", "scroll-div"], [1, "nav", "pcoded-inner-navbar"], [1, "nav-item", "pcoded-menu-caption"], [1, "nav-item", "pcoded-hasmenu"], ["href", "#!", 1, "nav-link"], [1, "pcoded-micon"], [1, "feather", "icon-home"], [1, "pcoded-mtext"], [1, "pcoded-submenu"], ["href", "index.html"], ["href", "dashboard-sale.html"], [1, "feather", "icon-layout"], [1, "pcoded-hasmenu"], ["href", "#!"], ["href", "layout-static.html", "target", "_blank"], ["href", "layout-fixed.html", "target", "_blank"], ["href", "layout-menu-fixed.html", "target", "_blank"], ["href", "layout-mini-menu.html", "target", "_blank"], ["href", "layout-rtl.html", "target", "_blank"], ["href", "layout-horizontal.html", "target", "_blank"], ["href", "layout-horizontal-2.html", "target", "_blank"], ["href", "layout-horizontal-rtl.html", "target", "_blank"], ["href", "layout-box.html", "target", "_blank"], ["href", "layout-light.html", "target", "_blank"], ["href", "layout-dark.html", "target", "_blank"], [1, "pcoded-badge", "badge", "badge-danger"], [1, "feather", "icon-layers"], [1, "pcoded-badge", "badge", "badge-success"], ["href", "widget-statistic.html"], ["href", "widget-data.html"], ["href", "widget-chart.html"], [1, "feather", "icon-users"], ["href", "user-profile.html"], ["href", "user-card.html"], ["href", "user-list.html"], [1, "feather", "icon-box"], ["href", "bc_alert.html"], ["href", "bc_button.html"], ["href", "bc_badges.html"], ["href", "bc_breadcrumb-pagination.html"], ["href", "bc_card.html"], ["href", "bc_collapse.html"], ["href", "bc_carousel.html"], ["href", "bc_grid.html"], ["href", "bc_progress.html"], ["href", "bc_modal.html"], ["href", "bc_spinner.html"], ["href", "bc_tabs.html"], ["href", "bc_typography.html"], ["href", "bc_tooltip-popover.html"], ["href", "bc_toasts.html"], ["href", "bc_extra.html"], [1, "feather", "icon-gitlab"], ["href", "ac_alert.html"], ["href", "ac-datepicker-componant.html"], ["href", "ac_lightbox.html"], ["href", "ac_notification.html"], ["href", "ac_pnotify.html"], ["href", "ac_rating.html"], ["href", "ac_rangeslider.html"], ["href", "ac_syntax_highlighter.html"], [1, "nav-item"], ["href", "animation.html", 1, "nav-link"], [1, "feather", "icon-aperture"], [1, "feather", "icon-feather"], ["href", "icon-feather.html"], ["href", "icon-fontawsome.html"], [1, "feather", "icon-file-text"], ["href", "form_elements.html"], ["href", "form-elements-advance.html"], ["href", "form-validation.html"], ["href", "form-masking.html"], ["href", "form-wizard.html"], ["href", "form-picker.html"], ["href", "form-select.html"], [1, "feather", "icon-align-justify"], ["href", "tbl_bootstrap.html"], ["href", "tbl_sizing.html"], ["href", "tbl_border.html"], ["href", "tbl_styling.html"], [1, "feather", "icon-package"], ["href", "dt_basic.html"], ["href", "dt_advance.html"], ["href", "dt_styling.html"], ["href", "dt_api.html"], ["href", "dt_plugin.html"], ["href", "dt_sources.html"], [1, "feather", "icon-server"], ["href", "dt_ext_autofill.html"], ["href", "dt_ext_basic_buttons.html"], ["href", "dt_ext_export_buttons.html"], ["href", "dt_ext_col_reorder.html"], ["href", "dt_ext_fixed_columns.html"], ["href", "dt_ext_fixed_header.html"], ["href", "dt_ext_key_table.html"], ["href", "dt_ext_responsive.html"], ["href", "dt_ext_row_reorder.html"], ["href", "dt_ext_scroller.html"], ["href", "dt_ext_select.html"], [1, "feather", "icon-pie-chart"], ["href", "chart-apex.html"], ["href", "chart-chartjs.html"], ["href", "chart-highchart.html"], ["href", "chart-knob.html"], ["href", "chart-peity.html"], [1, "feather", "icon-map"], ["href", "map-google.html"], ["href", "map-api.html"], [1, "feather", "icon-lock"], ["href", "auth-signup.html", "target", "_blank"], ["href", "auth-signup-img-side.html", "target", "_blank"], ["href", "auth-signin.html", "target", "_blank"], ["href", "auth-signin-img-side.html", "target", "_blank"], ["href", "auth-reset-password.html", "target", "_blank"], ["href", "auth-reset-password-img-side.html", "target", "_blank"], ["href", "auth-change-password.html", "target", "_blank"], ["href", "auth-change-password-img-side.html", "target", "_blank"], ["href", "auth-profile-settings.html", "target", "_blank"], ["href", "auth-tabs.html", "target", "_blank"], [1, "feather", "icon-sliders"], ["href", "maint-error.html"], ["href", "maint-offline-ui.html", "target", "_blank"], ["href", "maint-maintance.html", "target", "_blank"], [1, "feather", "icon-mail"], ["href", "email_inbox.html"], ["href", "email_read.html"], ["href", "email_compose.html"], [1, "feather", "icon-clipboard"], ["href", "task-list.html"], ["href", "task-board.html"], ["href", "task-detail.html"], ["href", "todo.html", 1, "nav-link"], [1, "feather", "icon-check-square"], [1, "feather", "icon-image"], ["href", "gallery-grid.html"], ["href", "gallery-masonry.html"], [1, "feather", "icon-help-circle"], ["href", "hd-help-desk.html"], ["href", "hd-dashboard.html"], ["href", "hd-cust-list.html"], ["href", "hd-detail.html"], ["href", "hd-new-ticket.html"], [1, "feather", "icon-file-plus"], ["href", "editor-classic.html"], ["href", "editor-trumbowyg.html"], [1, "feather", "icon-file-minus"], ["href", "invoice.html"], ["href", "invoice-summary.html"], ["href", "invoice-list.html"], ["href", "full-calendar.html", 1, "nav-link"], [1, "feather", "icon-calendar"], ["href", "file-upload.html", 1, "nav-link"], [1, "feather", "icon-upload-cloud"], ["href", "image_crop.html", 1, "nav-link"], [1, "feather", "icon-scissors"], ["href", "#", 1, "nav-link"], [1, "feather", "icon-menu"], ["href", "#"], [1, "nav-item", "disabled"], [1, "feather", "icon-power"], ["href", "sample-page.html", 1, "nav-link"], [1, "feather", "icon-sidebar"], [1, "card", "text-center"], [1, "card-block"], ["type", "button", "data-dismiss", "alert", "aria-hidden", "true", 1, "close"], [1, "feather", "icon-sunset", "f-40"], [1, "mt-3"], ["href", "#!", "target", "_blank", 1, "btn", "btn-primary", "btn-sm", "text-white", "m-0"], [1, "navbar", "pcoded-header", "navbar-expand-lg", "navbar-light", "headerpos-fixed", "header-blue"], [1, "m-header"], ["id", "mobile-collapse", "href", "#!", 1, "mobile-menu"], ["href", "#!", 1, "b-brand"], ["src", "assets/images/logo.png", "alt", "", 1, "logo"], ["src", "assets/images/logo-icon.png", "alt", "", 1, "logo-thumb"], ["href", "#!", 1, "mob-toggler"], [1, "feather", "icon-more-vertical"], [1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], ["href", "#!", 1, "pop-search"], [1, "feather", "icon-search"], [1, "search-bar"], ["type", "text", "placeholder", "Search here", 1, "form-control", "border-0", "shadow-none"], ["type", "button", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], ["href", "#!", "onclick", "javascript:toggleFullScreen()", 1, "full-screen"], [1, "feather", "icon-maximize"], [1, "navbar-nav", "ml-auto"], [1, "dropdown"], ["href", "#", "data-toggle", "dropdown", 1, "dropdown-toggle"], [1, "icon", "feather", "icon-bell"], [1, "badge", "bg-danger"], [1, "sr-only"], [1, "dropdown-menu", "dropdown-menu-right", "notification"], [1, "noti-head"], [1, "d-inline-block", "m-b-0"], [1, "float-right"], ["href", "#!", 1, "m-r-10"], [1, "noti-body"], [1, "n-title"], [1, "m-b-0"], [1, "notification"], [1, "media"], ["src", "assets/images/user/avatar-1.jpg", "alt", "Generic placeholder image", 1, "img-radius"], [1, "media-body"], [1, "n-time", "text-muted"], [1, "icon", "feather", "icon-clock", "m-r-10"], ["src", "assets/images/user/avatar-2.jpg", "alt", "Generic placeholder image", 1, "img-radius"], [1, "noti-footer"], ["href", "#!", 1, "displayChatbox", "dropdown-toggle"], [1, "icon", "feather", "icon-mail"], [1, "badge", "bg-success"], [1, "dropdown", "drp-user"], ["href", "#!", "data-toggle", "dropdown", 1, "dropdown-toggle"], ["src", "assets/images/user/avatar-1.jpg", "alt", "User-Profile-Image", 1, "img-radius", "wid-40"], [1, "dropdown-menu", "dropdown-menu-right", "profile-notification"], [1, "pro-head"], ["src", "assets/images/user/avatar-1.jpg", "alt", "User-Profile-Image", 1, "img-radius"], ["href", "auth-signin.html", "title", "Logout", 1, "dud-logout"], [1, "feather", "icon-log-out"], [1, "pro-body"], ["href", "user-profile.html", 1, "dropdown-item"], [1, "feather", "icon-user"], ["href", "email_inbox.html", 1, "dropdown-item"], ["href", "auth-signin.html", 1, "dropdown-item"], [1, "header-user-list"], ["href", "#!", 1, "h-close-text"], [1, "feather", "icon-x"], ["id", "chatTab", "role", "tablist", 1, "nav", "nav-tabs"], ["id", "chat-tab", "data-toggle", "tab", "href", "#chat", "role", "tab", "aria-controls", "chat", "aria-selected", "true", 1, "nav-link", "active", "text-uppercase", "border-0"], [1, "feather", "icon-message-circle", "mr-2"], ["id", "user-tab", "data-toggle", "tab", "href", "#user", "role", "tab", "aria-controls", "user", "aria-selected", "false", 1, "nav-link", "text-uppercase", "border-0"], [1, "feather", "icon-users", "mr-2"], ["id", "setting-tab", "data-toggle", "tab", "href", "#setting", "role", "tab", "aria-controls", "setting", "aria-selected", "false", 1, "nav-link", "text-uppercase", "border-0"], [1, "feather", "icon-settings", "mr-2"], ["id", "chatTabContent", 1, "tab-content"], ["id", "chat", "role", "tabpanel", "aria-labelledby", "chat-tab", 1, "tab-pane", "fade", "show", "active"], [1, "h-list-header"], [1, "input-group"], ["type", "text", "id", "search-friends", "placeholder", "Search Friend . . .", 1, "form-control"], [1, "h-list-body"], [1, "main-friend-cont", "scroll-div"], [1, "main-friend-list"], ["data-id", "1", "data-status", "online", "data-username", "Josephin Doe", 1, "media", "userlist-box"], ["href", "#!", 1, "media-left"], ["src", "assets/images/user/avatar-1.jpg", "alt", "Generic placeholder image ", 1, "media-object", "img-radius"], [1, "live-status"], [1, "chat-header"], [1, "d-block", "text-c-green"], ["data-id", "2", "data-status", "online", "data-username", "Lary Doe", 1, "media", "userlist-box"], ["src", "assets/images/user/avatar-2.jpg", "alt", "Generic placeholder image", 1, "media-object", "img-radius"], ["data-id", "3", "data-status", "online", "data-username", "Alice", 1, "media", "userlist-box"], ["src", "assets/images/user/avatar-3.jpg", "alt", "Generic placeholder image", 1, "media-object", "img-radius"], ["data-id", "4", "data-status", "offline", "data-username", "Alia", 1, "media", "userlist-box"], ["src", "assets/images/user/avatar-1.jpg", "alt", "Generic placeholder image", 1, "media-object", "img-radius"], [1, "d-block", "text-muted"], ["data-id", "5", "data-status", "offline", "data-username", "Suzen", 1, "media", "userlist-box"], ["src", "assets/images/user/avatar-4.jpg", "alt", "Generic placeholder image", 1, "media-object", "img-radius"], ["id", "user", "role", "tabpanel", "aria-labelledby", "user-tab", 1, "tab-pane", "fade"], [1, "media", "px-3", "d-flex", "align-items-center", "mt-3"], ["href", "#!", 1, "media-left", "m-r-15"], [1, "hei-50", "wid-50", "bg-primary", "img-radius", "d-flex", "text-white", "f-22", "align-items-center", "justify-content-center"], [1, "icon", "feather", "icon-users"], [1, "chat-header", "f-w-600", "mb-0"], [1, "media", "p-3", "d-flex", "align-items-center"], [1, "icon", "feather", "icon-user-plus"], [1, "d-block"], [1, "hei-50", "wid-50", "img-radius", "bg-success", "d-flex", "text-white", "f-22", "align-items-center", "justify-content-center"], [1, "hei-50", "wid-50", "bg-danger", "img-radius", "d-flex", "text-white", "f-22", "align-items-center", "justify-content-center"], ["id", "setting", "role", "tabpanel", "aria-labelledby", "setting-tab", 1, "tab-pane", "fade"], [1, "p-4", "main-friend-cont", "scroll-div"], [1, "mt-2"], [1, "feather", "icon-monitor", "mr-2"], [1, "form-group", "mb-0"], [1, "switch", "switch-primary", "d-inline", "m-r-10"], ["type", "checkbox", "id", "cn-p-1", "checked", ""], ["for", "cn-p-1", 1, "cr"], [1, "f-w-600"], [1, "text-muted", "ml-5"], ["type", "checkbox", "id", "cn-p-5"], ["for", "cn-p-5", 1, "cr"], [1, "mb-0", "mt-5"], [1, "feather", "icon-layout", "mr-2"], ["type", "checkbox", "id", "cn-p-3", "checked", ""], ["for", "cn-p-3", 1, "cr"], [1, "text-muted", "mb-0", "ml-5"], [1, "form-group", "mb-4"], ["type", "checkbox", "id", "cn-p-4", "checked", ""], ["for", "cn-p-4", 1, "cr"], [1, "feather", "icon-globe", "mr-2"], ["type", "checkbox", "id", "cn-p-2"], ["for", "cn-p-2", 1, "cr"], [1, "header-chat"], ["href", "#!", 1, "h-back-user-list"], [1, "feather", "icon-chevron-left"], [1, "main-chat-cont", "scroll-div"], [1, "main-friend-chat"], [1, "media", "chat-messages"], ["href", "#!", 1, "media-left", "photo-table"], ["src", "assets/images/user/avatar-2.jpg", "alt", "Generic placeholder image", 1, "media-object", "img-radius", "img-radius", "m-t-5"], [1, "media-body", "chat-menu-content"], [1, ""], [1, "chat-cont"], [1, "chat-time"], [1, "media-body", "chat-menu-reply"], ["href", "#!", 1, "media-right", "photo-table"], ["src", "assets/images/user/avatar-1.jpg", "alt", "Generic placeholder image", 1, "media-object", "img-radius", "img-radius", "m-t-5"], [1, "h-list-footer"], ["type", "file", 1, "chat-attach", 2, "display", "none"], ["href", "#!", 1, "input-group-prepend", "btn", "btn-success", "btn-attach"], [1, "feather", "icon-paperclip"], ["type", "text", "name", "h-chat-text", "placeholder", "Write hear . . ", 1, "form-control", "h-auto", "h-send-chat"], ["type", "submit", 1, "input-group-append", "btn-send", "btn", "btn-primary"], [1, "feather", "icon-message-circle"], [1, "pcoded-main-container"], [1, "pcoded-content"], [1, "page-header"], [1, "page-block"], [1, "row", "align-items-center"], [1, "col-md-12"], [1, "page-header-title"], [1, "m-b-10"], [1, "breadcrumb"], [1, "breadcrumb-item"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "col-md-6"], [1, "form-group"], ["for", "exampleInputEmail1"], ["type", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "Enter email", 1, "form-control"], ["id", "emailHelp", 1, "form-text", "text-muted"], ["for", "exampleInputPassword1"], ["type", "password", "id", "exampleInputPassword1", "placeholder", "Password", 1, "form-control"], [1, "form-group", "form-check"], ["type", "checkbox", "id", "exampleCheck1", 1, "form-check-input"], ["for", "exampleCheck1", 1, "form-check-label"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "text", "placeholder", "Text", 1, "form-control"], ["for", "exampleFormControlSelect1"], ["id", "exampleFormControlSelect1", 1, "form-control"], ["for", "exampleFormControlTextarea1"], ["id", "exampleFormControlTextarea1", "rows", "3", 1, "form-control"], [1, "mt-5"], ["type", "text", "placeholder", ".form-control-lg", 1, "mb-3", "form-control", "form-control-lg"], ["type", "text", "placeholder", "Default input", 1, "mb-3", "form-control"], ["type", "text", "placeholder", ".form-control-sm", 1, "mb-3", "form-control", "form-control-sm"], [1, "mb-3", "form-control", "form-control-lg"], [1, "mb-3", "form-control"], ["for", "formControlRange"], ["type", "range", "id", "formControlRange", 1, "form-control-range"], ["type", "text", "placeholder", "Readonly input here\u2026", "readonly", "", 1, "form-control"], [1, "form-group", "row"], ["for", "staticEmail", 1, "col-sm-3", "col-form-label"], [1, "col-sm-9"], ["type", "text", "readonly", "", "id", "staticEmail", "value", "email@example.com", 1, "form-control-plaintext"], ["for", "inputPassword", 1, "col-sm-3", "col-form-label"], ["type", "password", "id", "inputPassword", "placeholder", "Password", 1, "form-control"], [1, "form-inline"], [1, "form-group", "mb-2"], ["for", "staticEmail2", 1, "sr-only"], ["type", "text", "readonly", "", "id", "staticEmail2", "value", "email@example.com", 1, "form-control-plaintext"], [1, "form-group", "mx-sm-3", "mb-2"], ["for", "inputPassword2", 1, "sr-only"], ["type", "password", "id", "inputPassword2", "placeholder", "Password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "mb-2"], [1, "form-row"], [1, "form-group", "col-md-6"], ["for", "inputEmail4"], ["type", "email", "id", "inputEmail4", "placeholder", "Email", 1, "form-control"], ["for", "inputPassword4"], ["type", "password", "id", "inputPassword4", "placeholder", "Password", 1, "form-control"], ["for", "inputAddress"], ["type", "text", "id", "inputAddress", "placeholder", "1234 Main St", 1, "form-control"], ["for", "inputAddress2"], ["type", "text", "id", "inputAddress2", "placeholder", "Apartment, studio, or floor", 1, "form-control"], ["for", "inputCity"], ["type", "text", "id", "inputCity", 1, "form-control"], [1, "form-group", "col-md-4"], ["for", "inputState"], ["id", "inputState", 1, "form-control"], ["selected", ""], [1, "form-group", "col-md-2"], ["for", "inputZip"], ["type", "text", "id", "inputZip", 1, "form-control"], [1, "form-check"], ["type", "checkbox", "id", "gridCheck", 1, "form-check-input"], ["for", "gridCheck", 1, "form-check-label"], ["for", "inputEmail3", 1, "col-sm-3", "col-form-label"], ["type", "email", "id", "inputEmail3", "placeholder", "Email", 1, "form-control"], ["for", "inputPassword3", 1, "col-sm-3", "col-form-label"], ["type", "password", "id", "inputPassword3", "placeholder", "Password", 1, "form-control"], ["type", "radio", "name", "gridRadios", "id", "gridRadios1", "value", "option1", "checked", "", 1, "form-check-input"], ["for", "gridRadios1", 1, "form-check-label"], ["type", "radio", "name", "gridRadios", "id", "gridRadios2", "value", "option2", 1, "form-check-input"], ["for", "gridRadios2", 1, "form-check-label"], [1, "form-check", "disabled"], ["type", "radio", "name", "gridRadios", "id", "gridRadios3", "value", "option3", "disabled", "", 1, "form-check-input"], ["for", "gridRadios3", 1, "form-check-label"], [1, "col-sm-3"], ["type", "checkbox", "id", "gridCheck1", 1, "form-check-input"], ["for", "gridCheck1", 1, "form-check-label"], [1, "col-sm-10"], ["for", "colFormLabelSm", 1, "col-sm-3", "col-form-label", "col-form-label-sm"], ["type", "email", "id", "colFormLabelSm", "placeholder", "col-form-label-sm", 1, "form-control", "form-control-sm"], ["for", "colFormLabel", 1, "col-sm-3", "col-form-label"], ["type", "email", "id", "colFormLabel", "placeholder", "col-form-label", 1, "form-control"], ["for", "colFormLabelLg", 1, "col-sm-3", "col-form-label", "col-form-label-lg"], ["type", "email", "id", "colFormLabelLg", "placeholder", "col-form-label-lg", 1, "form-control", "form-control-lg"], ["for", "inputPassword5"], ["type", "password", "id", "inputPassword5", "aria-describedby", "passwordHelpBlock", 1, "form-control"], ["id", "passwordHelpBlock", 1, "form-text", "text-muted"], [1, "form-group", "mt-3"], ["for", "inputPassword6"], ["type", "password", "id", "inputPassword6", "aria-describedby", "passwordHelpInline", 1, "form-control", "mx-sm-3"], ["id", "passwordHelpInline", 1, "text-muted"], ["novalidate", "", 1, "needs-validation"], [1, "col-md-4", "mb-3"], ["for", "validationCustom01"], ["type", "text", "id", "validationCustom01", "placeholder", "First name", "value", "Mark", "required", "", 1, "form-control"], [1, "valid-feedback"], ["for", "validationCustom02"], ["type", "text", "id", "validationCustom02", "placeholder", "Last name", "value", "Otto", "required", "", 1, "form-control"], ["for", "validationCustomUsername"], [1, "input-group-prepend"], ["id", "inputGroupPrepend", 1, "input-group-text"], ["type", "text", "id", "validationCustomUsername", "placeholder", "Username", "aria-describedby", "inputGroupPrepend", "required", "", 1, "form-control"], [1, "invalid-feedback"], [1, "col-md-6", "mb-3"], ["for", "validationCustom03"], ["type", "text", "id", "validationCustom03", "placeholder", "City", "required", "", 1, "form-control"], [1, "col-md-3", "mb-3"], ["for", "validationCustom04"], ["type", "text", "id", "validationCustom04", "placeholder", "State", "required", "", 1, "form-control"], ["for", "validationCustom05"], ["type", "text", "id", "validationCustom05", "placeholder", "Zip", "required", "", 1, "form-control"], ["type", "checkbox", "value", "", "id", "invalidCheck", "required", "", 1, "form-check-input"], ["for", "invalidCheck", 1, "form-check-label"], [1, "was-validated"], [1, "custom-control", "custom-checkbox", "mb-3"], ["type", "checkbox", "id", "customControlValidation1", "required", "", 1, "custom-control-input"], ["for", "customControlValidation1", 1, "custom-control-label"], [1, "custom-control", "custom-radio"], ["type", "radio", "id", "customControlValidation2", "name", "radio-stacked", "required", "", 1, "custom-control-input"], ["for", "customControlValidation2", 1, "custom-control-label"], [1, "custom-control", "custom-radio", "mb-3"], ["type", "radio", "id", "customControlValidation3", "name", "radio-stacked", "required", "", 1, "custom-control-input"], ["for", "customControlValidation3", 1, "custom-control-label"], ["required", "", 1, "custom-select"], ["value", ""], ["value", "1"], ["value", "2"], ["value", "3"], [1, "custom-file"], ["type", "file", "id", "validatedCustomFile", "required", "", 1, "custom-file-input"], ["for", "validatedCustomFile", 1, "custom-file-label"], ["for", "validationTooltip01"], ["type", "text", "id", "validationTooltip01", "placeholder", "First name", "value", "Mark", "required", "", 1, "form-control"], [1, "valid-tooltip"], ["for", "validationTooltip02"], ["type", "text", "id", "validationTooltip02", "placeholder", "Last name", "value", "Otto", "required", "", 1, "form-control"], ["for", "validationTooltipUsername"], ["id", "validationTooltipUsernamePrepend", 1, "input-group-text"], ["type", "text", "id", "validationTooltipUsername", "placeholder", "Username", "aria-describedby", "validationTooltipUsernamePrepend", "required", "", 1, "form-control"], [1, "invalid-tooltip"], ["for", "validationTooltip03"], ["type", "text", "id", "validationTooltip03", "placeholder", "City", "required", "", 1, "form-control"], ["for", "validationTooltip04"], ["type", "text", "id", "validationTooltip04", "placeholder", "State", "required", "", 1, "form-control"], ["for", "validationTooltip05"], ["type", "text", "id", "validationTooltip05", "placeholder", "Zip", "required", "", 1, "form-control"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "customCheck1", 1, "custom-control-input"], ["for", "customCheck1", 1, "custom-control-label"], [1, "custom-control", "custom-switch"], ["type", "checkbox", "id", "customswitch1", 1, "custom-control-input"], ["for", "customswitch1", 1, "custom-control-label"], ["type", "radio", "id", "customRadio1", "name", "customRadio", 1, "custom-control-input"], ["for", "customRadio1", 1, "custom-control-label"], ["type", "radio", "id", "customRadio2", "name", "customRadio", 1, "custom-control-input"], ["for", "customRadio2", 1, "custom-control-label"], [1, "custom-control", "custom-radio", "custom-control-inline"], ["type", "radio", "id", "customRadioInline1", "name", "customRadioInline1", 1, "custom-control-input"], ["for", "customRadioInline1", 1, "custom-control-label"], ["type", "radio", "id", "customRadioInline2", "name", "customRadioInline1", 1, "custom-control-input"], ["for", "customRadioInline2", 1, "custom-control-label"], ["for", "customRange1"], ["type", "range", "id", "customRange1", 1, "custom-range"], ["for", "customRange2"], ["type", "range", "min", "0", "max", "5", "id", "customRange2", 1, "custom-range"], ["for", "customRange3"], ["type", "range", "min", "0", "max", "5", "step", "0.5", "id", "customRange3", 1, "custom-range"], [1, "input-group", "mb-3"], ["id", "basic-addon1", 1, "input-group-text"], ["type", "text", "placeholder", "Username", "aria-label", "Username", "aria-describedby", "basic-addon1", 1, "form-control"], ["type", "text", "placeholder", "Recipient's username", "aria-label", "Recipient's username", "aria-describedby", "basic-addon2", 1, "form-control"], [1, "input-group-append"], ["id", "basic-addon2", 1, "input-group-text"], ["for", "basic-url"], ["id", "basic-addon3", 1, "input-group-text"], ["type", "text", "id", "basic-url", "aria-describedby", "basic-addon3", 1, "form-control"], [1, "input-group-text"], ["type", "text", "aria-label", "Amount (to the nearest dollar)", 1, "form-control"], ["aria-label", "With textarea", 1, "form-control"], [1, "input-group", "input-group-sm", "mb-3"], ["id", "inputGroup-sizing-sm", 1, "input-group-text"], ["type", "text", "aria-label", "Small", "aria-describedby", "inputGroup-sizing-sm", 1, "form-control"], ["id", "inputGroup-sizing-default", 1, "input-group-text"], ["type", "text", "aria-label", "Default", "aria-describedby", "inputGroup-sizing-default", 1, "form-control"], [1, "input-group", "input-group-lg"], ["id", "inputGroup-sizing-lg", 1, "input-group-text"], ["type", "text", "aria-label", "Large", "aria-describedby", "inputGroup-sizing-sm", 1, "form-control"], ["type", "checkbox", "aria-label", "Checkbox for following text input"], ["type", "text", "aria-label", "Text input with checkbox", 1, "form-control"], ["type", "radio", "aria-label", "Radio button for following text input"], ["type", "text", "aria-label", "Text input with radio button", 1, "form-control"], ["type", "text", 1, "form-control"], ["type", "button", 1, "btn", "btn-primary"], ["type", "text", "placeholder", "", "aria-label", "", "aria-describedby", "basic-addon1", 1, "form-control"], ["type", "button", 1, "btn", "btn-secondary"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "dropdown-menu"], ["href", "#!", 1, "dropdown-item"], ["role", "separator", 1, "dropdown-divider"], ["type", "text", "aria-label", "Text input with dropdown button", 1, "form-control"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle", "dropdown-toggle-split"], ["type", "text", "aria-label", "Text input with segmented dropdown button", 1, "form-control"], ["for", "inputGroupSelect01", 1, "input-group-text"], ["id", "inputGroupSelect01", 1, "custom-select"], ["id", "inputGroupSelect02", 1, "custom-select"], ["for", "inputGroupSelect02", 1, "input-group-text"], ["id", "inputGroupSelect03", 1, "custom-select"], ["id", "inputGroupSelect04", 1, "custom-select"], ["type", "file", "id", "inputGroupFile01", 1, "custom-file-input"], ["for", "inputGroupFile01", 1, "custom-file-label"], ["type", "file", "id", "inputGroupFile02", 1, "custom-file-input"], ["for", "inputGroupFile02", 1, "custom-file-label"], [1, "input-group", "cust-file-button", "mb-3"], ["type", "file", "id", "inputGroupFile03", 1, "custom-file-input"], ["for", "inputGroupFile03", 1, "custom-file-label"], [1, "input-group", "cust-file-button"], ["type", "file", "id", "inputGroupFile04", 1, "custom-file-input"], ["for", "inputGroupFile04", 1, "custom-file-label"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Page layouts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Static");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Fixed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Navbar fixed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Collapse menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Vertical RTL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Horizontal v2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Horizontal RTL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Box layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Light layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Dark layout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Hot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Widget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "100+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Statistic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "User Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "User List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "UI Element");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Badges");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Breadcrumb & paggination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Collapse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Grid system");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Tabs & pills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Typography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Tooltip & popovers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Toasts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Advance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "a", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Sweet alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Datepicker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Lightbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Pnotify");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Rangeslider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Syntax highlighter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "li", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Animations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "i", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "a", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Feather");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Font Awesome 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "i", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Form elements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "a", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Form advance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Form validation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "a", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Form masking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "a", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Form wizard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Form picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "a", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Form select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](251, "i", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "Bootstrap table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "a", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Basic table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "a", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Sizing table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "a", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "Border table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "a", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "Styling table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "i", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "Data table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "a", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "Basic initialization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "a", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "Advance initialization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "a", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "Styling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "a", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "a", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "Plug-in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "a", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "Data sources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](295, "i", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "DT extensions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "Autofill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "a", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "Basic button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "a", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "Data export");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "a", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "Col reorder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "a", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "Fixed columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "a", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "Fixed header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "a", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "Key table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "a", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "Responsive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "a", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "Row reorder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "a", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "Scroller");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "a", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "Select table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "Chart & Maps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](343, "i", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "Apex Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "a", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "Chart js");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "a", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "Highchart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "a", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "Knob");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "a", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "Peity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](365, "i", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "Maps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "a", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, "Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "Gmap search API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "Pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](381, "i", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "Authentication");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "a", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "a", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, "Sign up v2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "a", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "a", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, "Sign in v2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "a", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, "Reset password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "a", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, "Reset password v2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, "Change password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "a", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, "Change password v2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "a", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](411, "Profile settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "a", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414, "Tabs Authentication");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](418, "i", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](420, "Maintenance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "a", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](424, "Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "a", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, "Offline UI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "a", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](430, "Maintenance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, "App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](437, "i", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "a", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443, "Inbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "a", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](446, "Read mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "a", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, "Compose mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](453, "i", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](455, "Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "a", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](459, "List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "a", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, "Board");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "a", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](465, "Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "li", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "a", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](469, "i", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](471, "To-Do");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](475, "i", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](477, "Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "a", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](481, "Grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "a", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](484, "Masonry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](485, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](488, "i", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](490, "Helpdesk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](491, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](492, "NEW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "a", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](496, "Helpdesk dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "a", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](499, "Customer dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "a", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](502, "Customer list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "a", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](505, "Customer detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "a", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](508, "Ticket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](511, "Extension");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](512, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](515, "i", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](517, "Editor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](519, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "a", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](521, "CK editor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](523, "a", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](524, "Trumbowyg editor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](526, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](527, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](528, "i", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](529, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](530, "Invoice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](532, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "a", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](534, "Invoice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](535, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](536, "a", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](537, "Invoice summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](539, "a", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](540, "Invoice list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](541, "li", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](542, "a", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](544, "i", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](545, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](546, "Full calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](547, "li", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](548, "a", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](550, "i", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](551, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](552, "File upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](553, "li", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](554, "a", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](555, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](556, "i", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](557, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](558, "Image cropper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](559, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](560, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](561, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](562, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](563, "a", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](564, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](565, "i", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](566, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](567, "Menu levels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](568, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](569, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](570, "a", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](571, "Menu Level 2.1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](572, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](573, "a", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](574, "Menu level 2.2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](575, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](576, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](577, "a", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](578, "Menu level 3.1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](579, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](580, "a", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](581, "Menu level 3.2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](582, "li", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](583, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](584, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](585, "i", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](586, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](587, "Disabled menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](588, "li", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](589, "a", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](590, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](591, "i", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](592, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](593, "Sample page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](594, "div", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](595, "div", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](596, "button", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](597, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](598, "i", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](599, "h6", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](600, "Help?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](601, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](602, "Please contact us on our email for need any support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](603, "a", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](604, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](605, "header", 175);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](606, "div", 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](607, "a", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](608, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](609, "a", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](610, "img", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](611, "img", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](612, "a", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](613, "i", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](614, "div", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](615, "ul", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](616, "li", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](617, "a", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](618, "i", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](619, "div", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](620, "input", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](621, "button", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](622, "span", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](623, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](624, "li", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](625, "a", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](626, "i", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](627, "ul", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](628, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](629, "div", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](630, "a", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](631, "i", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](632, "span", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](633, "span", 198);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](634, "div", 199);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](635, "div", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](636, "h6", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](637, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](638, "div", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](639, "a", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](640, "mark as read");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](641, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](642, "clear all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](643, "ul", 204);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](644, "li", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](645, "p", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](646, "NEW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](647, "li", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](648, "div", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](649, "img", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](650, "div", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](651, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](652, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](653, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](654, "span", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](655, "i", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](656, "5 min");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](657, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](658, "New ticket Added");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](659, "li", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](660, "p", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](661, "EARLIER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](662, "li", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](663, "div", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](664, "img", 213);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](665, "div", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](666, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](667, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](668, "Joseph William");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](669, "span", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](670, "i", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](671, "10 min");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](672, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](673, "Prchace New Theme and make payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](674, "li", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](675, "div", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](676, "img", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](677, "div", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](678, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](679, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](680, "Sara Soudein");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](681, "span", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](682, "i", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](683, "12 min");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](684, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](685, "currently login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](686, "li", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](687, "div", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](688, "img", 213);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](689, "div", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](690, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](691, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](692, "Joseph William");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](693, "span", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](694, "i", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](695, "30 min");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](696, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](697, "Prchace New Theme and make payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](698, "div", 214);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](699, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](700, "show all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](701, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](702, "div", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](703, "a", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](704, "i", 216);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](705, "span", 217);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](706, "span", 198);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](707, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](708, "div", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](709, "a", 219);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](710, "img", 220);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](711, "div", 221);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](712, "div", 222);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](713, "img", 223);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](714, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](715, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](716, "a", 224);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](717, "i", 225);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](718, "ul", 226);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](719, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](720, "a", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](721, "i", 228);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](722, " Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](723, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](724, "a", 229);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](725, "i", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](726, " My Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](727, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](728, "a", 230);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](729, "i", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](730, " Lock Screen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](731, "section", 231);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](732, "a", 232);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](733, "i", 233);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](734, "ul", 234);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](735, "li", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](736, "a", 235);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](737, "i", 236);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](738, "Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](739, "li", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](740, "a", 237);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](741, "i", 238);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](742, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](743, "li", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](744, "a", 239);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](745, "i", 240);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](746, "Setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](747, "div", 241);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](748, "div", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](749, "div", 243);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](750, "div", 244);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](751, "input", 245);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](752, "div", 246);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](753, "div", 247);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](754, "div", 248);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](755, "div", 249);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](756, "a", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](757, "img", 251);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](758, "div", 252);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](759, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](760, "div", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](761, "h6", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](762, "Josephin Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](763, "small", 254);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](764, "Typing . . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](765, "div", 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](766, "a", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](767, "img", 256);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](768, "div", 252);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](769, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](770, "div", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](771, "h6", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](772, "Lary Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](773, "small", 254);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](774, "online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](775, "div", 257);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](776, "a", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](777, "img", 258);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](778, "div", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](779, "h6", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](780, "Alice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](781, "small", 254);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](782, "online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](783, "div", 259);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](784, "a", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](785, "img", 260);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](786, "div", 252);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](787, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](788, "div", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](789, "h6", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](790, "Alia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](791, "small", 261);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](792, "10 min ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](793, "div", 262);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](794, "a", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](795, "img", 263);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](796, "div", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](797, "h6", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](798, "Suzen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](799, "small", 261);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](800, "15 min ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](801, "div", 249);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](802, "a", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](803, "img", 251);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](804, "div", 252);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](805, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](806, "div", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](807, "h6", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](808, "Josephin Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](809, "small", 254);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](810, "Typing . . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](811, "div", 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](812, "a", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](813, "img", 256);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](814, "div", 252);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](815, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](816, "div", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](817, "h6", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](818, "Lary Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](819, "small", 254);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](820, "online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](821, "div", 257);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](822, "a", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](823, "img", 258);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](824, "div", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](825, "h6", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](826, "Alice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](827, "small", 254);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](828, "online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](829, "div", 259);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](830, "a", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](831, "img", 260);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](832, "div", 252);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](833, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](834, "div", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](835, "h6", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](836, "Alia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](837, "small", 261);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](838, "10 min ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](839, "div", 262);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](840, "a", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](841, "img", 263);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](842, "div", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](843, "h6", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](844, "Suzen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](845, "small", 261);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](846, "15 min ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](847, "div", 249);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](848, "a", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](849, "img", 251);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](850, "div", 252);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](851, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](852, "div", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](853, "h6", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](854, "Josephin Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](855, "small", 254);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](856, "Typing . . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](857, "div", 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](858, "a", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](859, "img", 256);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](860, "div", 252);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](861, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](862, "div", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](863, "h6", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](864, "Lary Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](865, "small", 254);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](866, "online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](867, "div", 257);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](868, "a", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](869, "img", 258);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](870, "div", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](871, "h6", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](872, "Alice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](873, "small", 254);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](874, "online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](875, "div", 264);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](876, "div", 246);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](877, "div", 247);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](878, "div", 248);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](879, "div", 265);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](880, "a", 266);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](881, "div", 267);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](882, "i", 268);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](883, "div", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](884, "p", 269);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](885, "New Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](886, "div", 270);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](887, "a", 266);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](888, "div", 267);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](889, "i", 271);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](890, "div", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](891, "p", 269);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](892, "New Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](893, "div", 249);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](894, "a", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](895, "img", 251);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](896, "div", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](897, "p", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](898, "Josephin Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](899, "small", 272);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](900, "i am not what happened . .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](901, "div", 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](902, "a", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](903, "img", 256);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](904, "div", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](905, "h6", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](906, "Lary Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](907, "small", 272);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](908, "Avalable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](909, "div", 257);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](910, "a", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](911, "img", 258);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](912, "div", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](913, "h6", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](914, "Alice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](915, "small", 272);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](916, "hear using Elite able");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](917, "div", 259);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](918, "a", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](919, "div", 273);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](920, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](921, "div", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](922, "h6", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](923, "Alia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](924, "small", 261);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](925, "Avalable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](926, "div", 262);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](927, "a", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](928, "img", 263);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](929, "div", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](930, "h6", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](931, "Suzen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](932, "small", 261);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](933, "Avalable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](934, "div", 249);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](935, "a", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](936, "div", 274);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](937, "JD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](938, "div", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](939, "h6", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](940, "Josephin Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](941, "small", 261);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](942, "Don't send me image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](943, "div", 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](944, "a", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](945, "img", 256);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](946, "div", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](947, "h6", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](948, "Lary Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](949, "small", 261);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](950, "not send free msg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](951, "div", 275);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](952, "div", 276);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](953, "h6", 277);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](954, "i", 278);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](955, "Desktop settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](956, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](957, "div", 279);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](958, "div", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](959, "input", 281);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](960, "label", 282);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](961, "label", 283);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](962, "Allow desktop notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](963, "p", 284);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](964, "you get lettest content at a time when data will updated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](965, "div", 279);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](966, "div", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](967, "input", 285);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](968, "label", 286);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](969, "label", 283);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](970, "Store Cookie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](971, "h6", 287);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](972, "i", 288);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](973, "Application settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](974, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](975, "div", 279);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](976, "div", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](977, "input", 289);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](978, "label", 290);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](979, "label", 283);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](980, "Backup Storage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](981, "p", 291);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](982, "Automaticaly take backup as par schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](983, "div", 292);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](984, "div", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](985, "input", 293);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](986, "label", 294);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](987, "label", 283);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](988, "Allow guest to print file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](989, "h6", 287);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](990, "i", 295);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](991, "System settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](992, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](993, "div", 279);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](994, "div", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](995, "input", 296);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](996, "label", 297);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](997, "label", 283);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](998, "View other user chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](999, "p", 284);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1000, "Allow to show public user message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1001, "section", 298);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1002, "div", 243);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1003, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1004, "Josephin Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1005, "a", 299);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1006, "i", 300);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1007, "div", 246);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1008, "div", 301);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1009, "div", 302);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1010, "div", 303);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1011, "a", 304);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1012, "img", 305);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1013, "div", 306);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1014, "div", 307);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1015, "p", 308);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1016, "hello tell me something");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1017, "p", 308);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1018, "about yourself?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1019, "p", 309);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1020, "8:20 a.m.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1021, "div", 303);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1022, "div", 310);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1023, "div", 307);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1024, "p", 308);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1025, "Ohh! very nice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1026, "p", 309);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1027, "8:22 a.m.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1028, "a", 311);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1029, "img", 312);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1030, "div", 303);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1031, "a", 304);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1032, "img", 305);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1033, "div", 306);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1034, "div", 307);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1035, "p", 308);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1036, "can you help me?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1037, "p", 309);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1038, "8:20 a.m.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1039, "div", 313);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1040, "div", 244);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1041, "input", 314);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1042, "a", 315);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1043, "i", 316);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1044, "input", 317);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1045, "button", 318);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1046, "i", 319);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1047, "section", 320);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1048, "div", 321);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1049, "div", 322);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1050, "div", 323);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1051, "div", 324);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1052, "div", 325);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1053, "div", 326);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1054, "h5", 327);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1055, "Form Elements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1056, "ul", 328);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1057, "li", 329);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1058, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1059, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1060, "li", 329);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1061, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1062, "Form Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1063, "li", 329);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1064, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1065, "Form Elements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1066, "div", 330);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1067, "div", 331);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1068, "div", 332);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1069, "div", 333);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1070, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1071, "Basic Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1072, "div", 334);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1073, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1074, "Form controls");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1075, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1076, "div", 330);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1077, "div", 335);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1078, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1079, "div", 336);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1080, "label", 337);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1081, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1082, "input", 338);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1083, "small", 339);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1084, "We'll never share your email with anyone else.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1085, "div", 336);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1086, "label", 340);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1087, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1088, "input", 341);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1089, "div", 342);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1090, "input", 343);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1091, "label", 344);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1092, "Check me out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1093, "button", 345);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1094, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1095, "div", 335);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1096, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1097, "div", 336);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1098, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1099, "Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1100, "input", 346);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1101, "div", 336);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1102, "label", 347);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1103, "Example select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1104, "select", 348);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1105, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1106, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1107, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1108, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1109, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1110, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1111, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1112, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1113, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1114, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1115, "div", 336);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1116, "label", 349);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1117, "Example textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1118, "textarea", 350);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1119, "h5", 351);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1120, "Sizing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1121, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1122, "div", 330);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1123, "div", 335);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1124, "input", 352);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1125, "input", 353);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1126, "input", 354);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1127, "div", 335);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1128, "select", 355);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1129, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1130, "Large select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1131, "select", 356);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1132, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1133, "Default select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1134, "h5", 351);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1135, "Range Inputs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1136, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1137, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1138, "div", 336);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1139, "label", 357);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1140, "Example Range input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1141, "input", 358);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1142, "div", 330);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1143, "div", 335);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1144, "h5", 351);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1145, "Readonly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1146, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1147, "input", 359);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1148, "div", 335);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1149, "h5", 351);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1150, "Readonly plain Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1151, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1152, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1153, "div", 360);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1154, "label", 361);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1155, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1156, "div", 362);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1157, "input", 363);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1158, "div", 360);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1159, "label", 364);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1160, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1161, "div", 362);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1162, "input", 365);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1163, "h5", 351);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1164, "Inline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1165, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1166, "form", 366);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1167, "div", 367);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1168, "label", 368);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1169, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1170, "input", 369);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1171, "div", 370);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1172, "label", 371);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1173, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1174, "input", 372);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1175, "button", 373);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1176, "Confirm identity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1177, "h5", 351);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1178, "Form Grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1179, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1180, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1181, "div", 374);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1182, "div", 375);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1183, "label", 376);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1184, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1185, "input", 377);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1186, "div", 375);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1187, "label", 378);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1188, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1189, "input", 379);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1190, "div", 336);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1191, "label", 380);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1192, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1193, "input", 381);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1194, "div", 336);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1195, "label", 382);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1196, "Address 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1197, "input", 383);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1198, "div", 374);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1199, "div", 375);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1200, "label", 384);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1201, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1202, "input", 385);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1203, "div", 386);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1204, "label", 387);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1205, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1206, "select", 388);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1207, "option", 389);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1208, "select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1209, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1210, "Large select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1211, "div", 390);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1212, "label", 391);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1213, "Zip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1214, "input", 392);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1215, "div", 336);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1216, "div", 393);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1217, "input", 394);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1218, "label", 395);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1219, "Check me out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1220, "button", 345);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1221, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1222, "div", 330);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1223, "div", 335);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1224, "h5", 351);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1225, "Horizontal Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1226, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1227, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1228, "div", 360);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1229, "label", 396);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1230, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1231, "div", 362);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1232, "input", 397);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1233, "div", 360);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1234, "label", 398);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1235, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1236, "div", 362);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1237, "input", 399);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1238, "fieldset", 336);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1239, "div", 330);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1240, "label", 398);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1241, "Radios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1242, "div", 362);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1243, "div", 393);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1244, "input", 400);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1245, "label", 401);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1246, "First radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1247, "div", 393);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1248, "input", 402);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1249, "label", 403);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1250, "Second radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1251, "div", 404);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1252, "input", 405);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1253, "label", 406);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1254, "Third disabled radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1255, "div", 360);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1256, "div", 407);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1257, "Checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1258, "div", 362);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1259, "div", 393);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1260, "input", 408);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1261, "label", 409);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1262, "Example checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1263, "div", 360);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1264, "div", 410);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1265, "button", 345);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1266, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1267, "div", 335);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1268, "h5", 351);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1269, "Horizontal Form Label Sizing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1270, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1271, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1272, "div", 360);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1273, "label", 411);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1274, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1275, "div", 362);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1276, "input", 412);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1277, "div", 360);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1278, "label", 413);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1279, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1280, "div", 362);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1281, "input", 414);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1282, "div", 360);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1283, "label", 415);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1284, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1285, "div", 362);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1286, "input", 416);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1287, "h5", 351);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1288, "Help Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1289, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1290, "label", 417);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1291, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1292, "input", 418);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1293, "small", 419);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1294, "Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1295, "form", 366);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1296, "div", 420);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1297, "label", 421);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1298, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1299, "input", 422);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1300, "small", 423);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1301, "Must be 8-20 characters long.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1302, "h5", 351);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1303, "Validation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1304, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1305, "form", 424);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1306, "div", 374);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1307, "div", 425);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1308, "label", 426);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1309, "First name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1310, "input", 427);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1311, "div", 428);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1312, "\nLooks good!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1313, "div", 425);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1314, "label", 429);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1315, "Last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1316, "input", 430);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1317, "div", 428);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1318, "\nLooks good!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1319, "div", 425);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1320, "label", 431);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1321, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1322, "div", 244);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1323, "div", 432);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1324, "span", 433);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1325, "@");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1326, "input", 434);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1327, "div", 435);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1328, "\nPlease choose a username.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1329, "div", 374);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1330, "div", 436);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1331, "label", 437);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1332, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1333, "input", 438);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1334, "div", 435);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1335, "\nPlease provide a valid city.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1336, "div", 439);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1337, "label", 440);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1338, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1339, "input", 441);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1340, "div", 435);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1341, "\nPlease provide a valid state.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1342, "div", 439);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1343, "label", 442);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1344, "Zip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1345, "input", 443);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1346, "div", 435);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1347, "\nPlease provide a valid zip.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1348, "div", 336);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1349, "div", 393);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1350, "input", 444);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1351, "label", 445);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1352, "Agree to terms and conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1353, "div", 435);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1354, "\nYou must agree before submitting.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1355, "button", 345);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1356, "Submit form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1357, "h5", 351);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1358, "Supported Elements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1359, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1360, "form", 446);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1361, "div", 447);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1362, "input", 448);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1363, "label", 449);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1364, "Check this custom checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1365, "div", 435);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1366, "Example invalid feedback text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1367, "div", 450);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1368, "input", 451);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1369, "label", 452);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1370, "Toggle this custom radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1371, "div", 453);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1372, "input", 454);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1373, "label", 455);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1374, "Or toggle this other custom radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1375, "div", 435);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1376, "More example invalid feedback text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1377, "div", 336);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1378, "select", 456);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1379, "option", 457);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1380, "Open this select menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1381, "option", 458);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1382, "One");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1383, "option", 459);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1384, "Two");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1385, "option", 460);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1386, "Three");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1387, "div", 435);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1388, "Example invalid custom select feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1389, "div", 461);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1390, "input", 462);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1391, "label", 463);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1392, "Choose file...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1393, "div", 435);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1394, "Example invalid custom file feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1395, "h5", 351);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1396, "Tooltips");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1397, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1398, "form", 424);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1399, "div", 374);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1400, "div", 425);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1401, "label", 464);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1402, "First name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1403, "input", 465);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1404, "div", 466);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1405, "\nLooks good!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1406, "div", 425);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1407, "label", 467);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1408, "Last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1409, "input", 468);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1410, "div", 466);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1411, "\nLooks good!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1412, "div", 425);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1413, "label", 469);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1414, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1415, "div", 244);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1416, "div", 432);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1417, "span", 470);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1418, "@");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1419, "input", 471);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1420, "div", 472);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1421, "\nPlease choose a unique and valid username.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1422, "div", 374);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1423, "div", 436);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1424, "label", 473);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1425, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1426, "input", 474);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1427, "div", 472);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1428, "\nPlease provide a valid city.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1429, "div", 439);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1430, "label", 475);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1431, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1432, "input", 476);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1433, "div", 472);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1434, "\nPlease provide a valid state.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1435, "div", 439);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1436, "label", 477);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1437, "Zip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1438, "input", 478);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1439, "div", 472);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1440, "\nPlease provide a valid zip.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1441, "button", 345);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1442, "Submit form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1443, "h3", 351);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1444, "Checkboxes and Radios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1445, "div", 330);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1446, "div", 335);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1447, "h5", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1448, "Checkboxes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1449, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1450, "div", 479);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1451, "input", 480);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1452, "label", 481);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1453, "Check this custom checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1454, "div", 335);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1455, "h5", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1456, "Switches");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1457, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1458, "div", 482);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1459, "input", 483);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1460, "label", 484);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1461, "Check this custom Switches");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1462, "div", 330);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1463, "div", 335);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1464, "h5", 351);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1465, "Radios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1466, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1467, "div", 450);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1468, "input", 485);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1469, "label", 486);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1470, "Toggle this custom radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1471, "div", 450);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1472, "input", 487);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1473, "label", 488);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1474, "Or toggle this other custom radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1475, "h5", 351);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1476, "Inline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1477, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1478, "div", 489);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1479, "input", 490);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1480, "label", 491);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1481, "Toggle this custom radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1482, "div", 489);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1483, "input", 492);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1484, "label", 493);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1485, "Or toggle this other custom radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1486, "div", 335);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1487, "h5", 351);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1488, "Range");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1489, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1490, "label", 494);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1491, "Example range");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1492, "input", 495);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1493, "label", 496);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1494, "Example range");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1495, "input", 497);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1496, "label", 498);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1497, "Example range");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1498, "input", 499);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1499, "div", 332);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1500, "div", 333);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1501, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1502, "Input Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1503, "div", 334);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1504, "div", 500);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1505, "div", 432);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1506, "span", 501);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1507, "@");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1508, "input", 502);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1509, "div", 500);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1510, "input", 503);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1511, "div", 504);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1512, "span", 505);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1513, "@example.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1514, "label", 506);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1515, "Your vanity URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1516, "div", 500);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1517, "div", 432);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1518, "span", 507);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1519, "https://example.com/users/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1520, "input", 508);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1521, "div", 500);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1522, "div", 432);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1523, "span", 509);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1524, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1525, "input", 510);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1526, "div", 504);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1527, "span", 509);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1528, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1529, "div", 244);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1530, "div", 432);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1531, "span", 509);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1532, "With textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1533, "textarea", 511);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1534, "div", 330);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1535, "div", 335);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1536, "h5", 351);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1537, "Sizing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1538, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1539, "div", 512);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1540, "div", 432);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1541, "span", 513);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1542, "Small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1543, "input", 514);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1544, "div", 500);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1545, "div", 432);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1546, "span", 515);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1547, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1548, "input", 516);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1549, "div", 517);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1550, "div", 432);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1551, "span", 518);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1552, "Large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1553, "input", 519);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1554, "div", 335);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1555, "h5", 351);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1556, "Checkboxes and radios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1557, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1558, "div", 500);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1559, "div", 432);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1560, "div", 509);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1561, "input", 520);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1562, "input", 521);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1563, "div", 244);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1564, "div", 432);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1565, "div", 509);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1566, "input", 522);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1567, "input", 523);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1568, "div", 335);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1569, "h5", 351);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1570, "Multiple inputs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1571, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1572, "div", 244);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1573, "div", 432);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1574, "span", 509);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1575, "First and last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1576, "input", 524);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1577, "input", 524);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1578, "div", 335);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1579, "h5", 351);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1580, "Multiple addons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1581, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1582, "div", 500);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1583, "div", 432);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1584, "span", 509);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1585, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1586, "span", 509);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1587, "0.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1588, "input", 510);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1589, "div", 244);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1590, "input", 510);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1591, "div", 504);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1592, "span", 509);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1593, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1594, "span", 509);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1595, "0.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1596, "h5", 351);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1597, "Button Addons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1598, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1599, "div", 330);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1600, "div", 335);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1601, "div", 500);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1602, "div", 432);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1603, "button", 525);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1604, "Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1605, "input", 526);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1606, "div", 500);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1607, "input", 503);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1608, "div", 504);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1609, "button", 525);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1610, "Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1611, "div", 335);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1612, "div", 500);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1613, "div", 432);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1614, "button", 525);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1615, "Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1616, "button", 527);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1617, "Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1618, "input", 526);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1619, "div", 244);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1620, "input", 503);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1621, "div", 504);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1622, "button", 527);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1623, "Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1624, "button", 525);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1625, "Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1626, "div", 335);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1627, "h5", 351);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1628, "Buttons With Dropdowns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1629, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1630, "div", 500);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1631, "div", 432);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1632, "button", 528);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1633, "Dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1634, "div", 529);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1635, "a", 530);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1636, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1637, "a", 530);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1638, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1639, "a", 530);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1640, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1641, "div", 531);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1642, "a", 530);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1643, "Separated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1644, "input", 532);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1645, "div", 244);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1646, "input", 532);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1647, "div", 504);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1648, "button", 528);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1649, "Dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1650, "div", 529);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1651, "a", 530);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1652, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1653, "a", 530);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1654, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1655, "a", 530);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1656, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1657, "div", 531);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1658, "a", 530);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1659, "Separated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1660, "div", 335);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1661, "h5", 351);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1662, "Segmented Buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1663, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1664, "div", 500);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1665, "div", 432);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1666, "button", 527);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1667, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1668, "button", 533);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1669, "span", 198);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1670, "Toggle\nDropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1671, "div", 529);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1672, "a", 530);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1673, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1674, "a", 530);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1675, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1676, "a", 530);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1677, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1678, "div", 531);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1679, "a", 530);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1680, "Separated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1681, "input", 534);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1682, "div", 244);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1683, "input", 534);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1684, "div", 504);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1685, "button", 527);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1686, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1687, "button", 533);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1688, "span", 198);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1689, "Toggle\nDropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1690, "div", 529);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1691, "a", 530);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1692, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1693, "a", 530);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1694, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1695, "a", 530);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1696, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1697, "div", 531);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1698, "a", 530);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1699, "Separated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1700, "h3", 351);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1701, "Custom Forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1702, "div", 330);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1703, "div", 335);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1704, "h5", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1705, "Custom Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1706, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1707, "div", 500);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1708, "div", 432);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1709, "label", 535);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1710, "Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1711, "select", 536);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1712, "option", 389);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1713, "Choose...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1714, "option", 458);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1715, "One");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1716, "option", 459);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1717, "Two");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1718, "option", 460);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1719, "Three");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1720, "div", 500);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1721, "select", 537);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1722, "option", 389);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1723, "Choose...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1724, "option", 458);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1725, "One");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1726, "option", 459);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1727, "Two");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1728, "option", 460);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1729, "Three");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1730, "div", 504);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1731, "label", 538);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1732, "Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1733, "div", 500);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1734, "div", 432);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1735, "button", 525);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1736, "Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1737, "select", 539);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1738, "option", 389);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1739, "Choose...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1740, "option", 458);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1741, "One");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1742, "option", 459);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1743, "Two");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1744, "option", 460);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1745, "Three");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1746, "div", 244);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1747, "select", 540);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1748, "option", 389);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1749, "Choose...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1750, "option", 458);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1751, "One");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1752, "option", 459);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1753, "Two");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1754, "option", 460);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1755, "Three");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1756, "div", 504);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1757, "button", 525);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1758, "Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1759, "div", 335);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1760, "h5", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1761, "Custom File Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1762, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1763, "div", 500);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1764, "div", 432);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1765, "span", 509);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1766, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1767, "div", 461);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1768, "input", 541);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1769, "label", 542);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1770, "Choose file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1771, "div", 500);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1772, "div", 461);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1773, "input", 543);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1774, "label", 544);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1775, "Choose file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1776, "div", 504);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1777, "span", 509);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1778, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1779, "div", 545);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1780, "div", 432);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1781, "button", 525);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1782, "Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1783, "div", 461);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1784, "input", 546);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1785, "label", 547);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1786, "Choose file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1787, "div", 548);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1788, "div", 461);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1789, "input", 549);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1790, "label", 550);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1791, "Choose file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1792, "div", 504);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1793, "button", 525);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1794, "Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layout',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/layouts/authen/authen.component.ts":
/*!****************************************************!*\
  !*** ./src/app/layouts/authen/authen.component.ts ***!
  \****************************************************/
/*! exports provided: AuthenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenComponent", function() { return AuthenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AuthenComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
AuthenComponent.ɵfac = function AuthenComponent_Factory(t) { return new (t || AuthenComponent)(); };
AuthenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthenComponent, selectors: [["app-layout"]], decls: 3, vars: 0, template: function AuthenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Authen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layout',
                templateUrl: './authen.component.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/layouts/client/client.component.ts":
/*!****************************************************!*\
  !*** ./src/app/layouts/client/client.component.ts ***!
  \****************************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class ClientComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ClientComponent.ɵfac = function ClientComponent_Factory(t) { return new (t || ClientComponent)(); };
ClientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientComponent, selectors: [["app-layout"]], decls: 577, vars: 0, consts: [["href", "https://fonts.googleapis.com/css?family=Montserrat:400,700%7CVarela+Round", "rel", "stylesheet"], ["type", "text/css", "rel", "stylesheet", "href", "https://colorlib.com/etc/creative-agency/css/bootstrap.min.css"], ["type", "text/css", "rel", "stylesheet", "href", "https://colorlib.com/etc/creative-agency/css/owl.carousel.css"], ["type", "text/css", "rel", "stylesheet", "href", "https://colorlib.com/etc/creative-agency/css/owl.theme.default.css"], ["type", "text/css", "rel", "stylesheet", "href", "https://colorlib.com/etc/creative-agency/css/magnific-popup.css"], ["rel", "stylesheet", "href", "https://colorlib.com/etc/creative-agency/css/font-awesome.min.css"], ["type", "text/css", "rel", "stylesheet", "href", "https://colorlib.com/etc/creative-agency/css/style.css"], ["id", "home"], [1, "bg-img", 2, "background-image", "url('assets/image/background.jpg')"], [1, "overlay"], ["id", "nav", 1, "navbar", "nav-transparent"], [1, "container"], [1, "navbar-header"], [1, "navbar-brand"], ["href", "index.html"], ["src", "https://colorlib.com/etc/creative-agency/img/logo.png", "alt", "logo", 1, "logo"], ["src", "https://colorlib.com/etc/creative-agency/img/logo-alt.png", "alt", "logo", 1, "logo-alt"], [1, "nav-collapse"], [1, "main-nav", "nav", "navbar-nav", "navbar-right"], ["routerLink", "/"], ["routerLink", "/list-about"], ["routerLink", "/list-contact"], ["routerLink", "/signin"], ["routerLink", "/admin"], [1, "home-wrapper"], [1, "row"], [1, "col-md-10", "col-md-offset-1"], [1, "home-content"], [1, "white-text"], [1, "white-btn"], [1, "main-btn"], ["id", "about", 1, "section", "md-padding"], [1, "section-header", "text-center"], [1, "title"], [1, "col-md-4"], [1, "about"], [1, "fa", "fa-cogs"], ["href", "#"], [1, "fa", "fa-magic"], [1, "fa", "fa-mobile"], ["id", "portfolio", 1, "section", "md-padding", "bg-grey"], [1, "col-md-4", "col-xs-6", "work"], ["src", "assets/image/work1.jpg", "alt", "", 1, "img-responsive"], [1, "work-content"], [1, "work-link"], [1, "fa", "fa-external-link"], ["href", "assets/image/work1.jpg", 1, "lightbox"], [1, "fa", "fa-search"], ["src", "https://colorlib.com/etc/creative-agency/img/work2.jpg", "alt", "", 1, "img-responsive"], ["href", "https://colorlib.com/etc/creative-agency/img/work2.jpg", 1, "lightbox"], ["src", "https://colorlib.com/etc/creative-agency/img/work3.jpg", "alt", "", 1, "img-responsive"], ["href", "https://colorlib.com/etc/creative-agency/img/work3.jpg", 1, "lightbox"], ["src", "https://colorlib.com/etc/creative-agency/img/work4.jpg", "alt", "", 1, "img-responsive"], ["href", "https://colorlib.com/etc/creative-agency/img/work4.jpg", 1, "lightbox"], ["src", "https://colorlib.com/etc/creative-agency/img/work5.jpg", "alt", "", 1, "img-responsive"], ["href", "https://colorlib.com/etc/creative-agency/img/work5.jpg", 1, "lightbox"], ["src", "https://colorlib.com/etc/creative-agency/img/work6.jpg", "alt", "", 1, "img-responsive"], ["href", "https://colorlib.com/etc/creative-agency/img/work6.jpg", 1, "lightbox"], ["id", "service", 1, "section", "md-padding"], [1, "col-md-4", "col-sm-6"], [1, "service"], [1, "fa", "fa-diamond"], [1, "fa", "fa-rocket"], [1, "fa", "fa-pencil"], [1, "fa", "fa-flask"], ["id", "features", 1, "section", "md-padding", "bg-grey"], [1, "col-md-6"], [1, "section-header"], [1, "feature"], [1, "fa", "fa-check"], ["id", "about-slider", 1, "owl-carousel", "owl-theme"], ["src", "https://colorlib.com/etc/creative-agency/img/about1.jpg", "alt", "", 1, "img-responsive"], ["src", "https://colorlib.com/etc/creative-agency/img/about2.jpg", "alt", "", 1, "img-responsive"], ["id", "numbers", 1, "section", "sm-padding"], [1, "bg-img", 2, "background-image", "url('https://colorlib.com/etc/creative-agency/img/background2.jpg')"], [1, "col-sm-3", "col-xs-6"], [1, "number"], [1, "fa", "fa-users"], [1, "counter"], [1, "fa", "fa-trophy"], [1, "fa", "fa-coffee"], [1, "fa", "fa-file"], ["id", "pricing", 1, "section", "md-padding"], [1, "col-sm-4"], [1, "pricing"], [1, "price-head"], [1, "price-title"], [1, "price"], [1, "duration"], [1, "price-content"], [1, "price-btn"], [1, "outline-btn"], ["id", "testimonial", 1, "section", "md-padding"], [1, "bg-img", 2, "background-image", "url('https://colorlib.com/etc/creative-agency/img/background3.jpg')"], ["id", "testimonial-slider", 1, "owl-carousel", "owl-theme"], [1, "testimonial"], [1, "testimonial-meta"], ["src", "https://colorlib.com/etc/creative-agency/img/perso1.jpg", "alt", ""], ["src", "https://colorlib.com/etc/creative-agency/img/perso2.jpg", "alt", ""], ["id", "team", 1, "section", "md-padding"], [1, "team"], [1, "team-img"], ["src", "https://colorlib.com/etc/creative-agency/img/team1.jpg", "alt", "", 1, "img-responsive"], [1, "team-social"], [1, "fa", "fa-facebook"], [1, "fa", "fa-google-plus"], [1, "fa", "fa-twitter"], [1, "team-content"], ["src", "https://colorlib.com/etc/creative-agency/img/team2.jpg", "alt", "", 1, "img-responsive"], ["src", "https://colorlib.com/etc/creative-agency/img/team3.jpg", "alt", "", 1, "img-responsive"], ["id", "blog", 1, "section", "md-padding", "bg-grey"], [1, "blog"], [1, "blog-img"], ["src", "https://colorlib.com/etc/creative-agency/img/blog1.jpg", "alt", "", 1, "img-responsive"], [1, "blog-content"], [1, "blog-meta"], [1, "fa", "fa-user"], [1, "fa", "fa-clock-o"], [1, "fa", "fa-comments"], ["href", "blog-single.html"], ["src", "https://colorlib.com/etc/creative-agency/img/blog2.jpg", "alt", "", 1, "img-responsive"], ["src", "https://colorlib.com/etc/creative-agency/img/blog3.jpg", "alt", "", 1, "img-responsive"], ["id", "contact", 1, "section", "md-padding"], [1, "contact"], [1, "fa", "fa-phone"], [1, "fa", "fa-envelope"], ["href", "/cdn-cgi/l/email-protection", "data-cfemail", "f7929a969e9bb784828787988583d994989a", 1, "__cf_email__"], [1, "fa", "fa-map-marker"], [1, "col-md-8", "col-md-offset-2"], [1, "contact-form"], ["type", "text", "placeholder", "Name", 1, "input"], ["type", "email", "placeholder", "Email", 1, "input"], ["type", "text", "placeholder", "Subject", 1, "input"], ["placeholder", "Message", 1, "input"], ["id", "footer", 1, "sm-padding", "bg-dark"], [1, "col-md-12"], [1, "footer-logo"], ["src", "https://colorlib.com/etc/creative-agency/img/logo-alt.png", "alt", "logo"], [1, "footer-follow"], [1, "fa", "fa-instagram"], [1, "fa", "fa-linkedin"], [1, "fa", "fa-youtube"], [1, "footer-copyright"], ["href", "https://colorlib.com", "target", "_blank"], ["id", "back-to-top"]], template: function ClientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "link", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "link", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "header", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nav", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "signin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h1", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "We Are Creative Agency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Morbi mattis felis at nunc. Duis viverra diam non justo. In nisl. Nullam sit amet magna in magna gravida vehicula. Mauris tincidunt sem sed arcu. Nunc posuere.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Get Started!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h2", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Welcome to Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Fully Customizible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Read more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Awesome Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Read more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Fully Responsive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Read more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h2", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Featured Works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Lorem ipsum dolor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Lorem ipsum dolor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Lorem ipsum dolor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Lorem ipsum dolor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Lorem ipsum dolor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Lorem ipsum dolor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "h2", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "What we offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "App Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "i", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Graphic Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Creative Idea");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Awesome Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Brand Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "h2", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Why Choose Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Molestie at elementum eu facilisis sed odio. Scelerisque in dictum non consectetur a erat. Aliquam id diam maecenas ultricies mi eget mauris. Ultrices sagittis orci a scelerisque purus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Quis varius quam quisque id diam vel quam elementum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "Mauris augue neque gravida in fermentum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Orci phasellus egestas tellus rutrum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Nec feugiat nisl pretium fusce id velit ut tortor pretium.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "img", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "img", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "i", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "451");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Happy clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "i", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "Awards won");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "i", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "154");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "K");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "Cups of Coffee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](277, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "45");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "Projects completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "h2", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "Pricing Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "span", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "Basic plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "$9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "span", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "/ month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "ul", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "1GB Disk Space");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "100 Email Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "24/24 Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "button", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "Purchase now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "span", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "Silver plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "$19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "span", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "/ month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "ul", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "1GB Disk Space");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "100 Email Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "24/24 Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "button", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "Purchase now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "span", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "Gold plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "$39");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "span", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "/ month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "ul", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "1GB Disk Space");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "100 Email Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "24/24 Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "button", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "Purchase now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](360, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](367, "img", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, "Web Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "Molestie at elementum eu facilisis sed odio. Scelerisque in dictum non consectetur a erat. Aliquam id diam maecenas ultricies mi eget mauris.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](376, "img", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, "Web Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "Molestie at elementum eu facilisis sed odio. Scelerisque in dictum non consectetur a erat. Aliquam id diam maecenas ultricies mi eget mauris.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "h2", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "Our Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](392, "img", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](396, "i", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](398, "i", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](400, "i", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, "Web Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](409, "img", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](413, "i", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](415, "i", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](417, "i", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](420, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](422, "Web Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](426, "img", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](430, "i", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](432, "i", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](434, "i", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](437, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, "Web Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "h2", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](445, "Recents news");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](449, "img", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "ul", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](453, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](454, "John doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](456, "i", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](457, "18 Oct");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](459, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](460, "57");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, "Molestie at elementum eu facilisis sed odio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](464, "Nec feugiat nisl pretium fusce id velit ut tortor pretium. Nisl purus in mollis nunc sed. Nunc non blandit massa enim nec.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "a", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](466, "Read more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](470, "img", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "ul", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](474, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](475, "John doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](477, "i", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](478, "18 Oct");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](480, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](481, "57");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](483, "Molestie at elementum eu facilisis sed odio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](485, "Nec feugiat nisl pretium fusce id velit ut tortor pretium. Nisl purus in mollis nunc sed. Nunc non blandit massa enim nec.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "a", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](487, "Read more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](491, "img", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "ul", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](495, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](496, "John doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](498, "i", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](499, "18 Oct");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](501, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](502, "57");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](504, "Molestie at elementum eu facilisis sed odio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](505, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](506, "Nec feugiat nisl pretium fusce id velit ut tortor pretium. Nisl purus in mollis nunc sed. Nunc non blandit massa enim nec.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "a", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](508, "Read more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](511, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](512, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "h2", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](514, "Get in touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](515, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](517, "i", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](519, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](521, "512-421-3940");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](523, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](524, "i", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](526, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](527, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](528, "a", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](529, "[email\u00A0protected]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](530, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](532, "i", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](534, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](535, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](536, "1739 Bubby Drive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](537, "div", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "form", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](539, "input", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](540, "input", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](541, "input", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](542, "textarea", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](544, "Send message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](545, "footer", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](546, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](547, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](548, "div", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "div", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](550, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](551, "img", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](552, "ul", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](553, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](554, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](555, "i", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](556, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](557, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](558, "i", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](559, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](560, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](561, "i", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](562, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](563, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](564, "i", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](565, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](566, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](567, "i", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](568, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](569, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](570, "i", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](571, "div", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](572, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](573, "Copyright \u00A9 2017. All Rights Reserved. Designed by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](574, "a", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](575, "Colorlib");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](576, "div", 144);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layout',
                templateUrl: './client.component.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/general/header/header.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/general/header/header.component.ts ***!
  \************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HeaderComponent {
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 12, vars: 0, consts: [["routerLink", "/"], ["routerLink", "/about"], ["routerLink", "/contact"], ["routerLink", "/signin"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "signin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/general/not-found/not-found.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/general/not-found/not-found.component.ts ***!
  \******************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NotFoundComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 2, vars: 0, template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "not-found works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZ2VuZXJhbC9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/routes_modules/admin/admin-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/routes_modules/admin/admin-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: AppRoutingAdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingAdminModule", function() { return AppRoutingAdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layouts/admin/admin.component */ "./src/app/layouts/admin/admin.component.ts");





//Routes trang admin
const routes_admin = [
    {
        path: 'admin',
        component: _layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"],
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() | modules-general-about-about-module */ "modules-general-about-about-module").then(__webpack_require__.bind(null, /*! ../../modules/general/about/about.module */ "./src/app/modules/general/about/about.module.ts"))
                    .then(mod => mod.AboutModule)
            },
            {
                path: 'list-contact',
                loadChildren: () => __webpack_require__.e(/*! import() | modules-general-contact-contact-module */ "modules-general-contact-contact-module").then(__webpack_require__.bind(null, /*! ../../modules/general/contact/contact.module */ "./src/app/modules/general/contact/contact.module.ts"))
                    .then(mod => mod.ContactModule)
            },
        ]
    },
];
class AppRoutingAdminModule {
}
AppRoutingAdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingAdminModule });
AppRoutingAdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingAdminModule_Factory(t) { return new (t || AppRoutingAdminModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes_admin, { useHash: true, enableTracing: true })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingAdminModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingAdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes_admin, { useHash: true, enableTracing: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                declarations: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/routes_modules/authen/authen-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/routes_modules/authen/authen-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: AppRoutingAuthenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingAuthenModule", function() { return AppRoutingAuthenModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layouts_authen_authen_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layouts/authen/authen.component */ "./src/app/layouts/authen/authen.component.ts");





//Routes trang admin
const routes_authen = [
    {
        path: 'authen',
        component: _layouts_authen_authen_component__WEBPACK_IMPORTED_MODULE_2__["AuthenComponent"],
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() | modules-general-about-about-module */ "modules-general-about-about-module").then(__webpack_require__.bind(null, /*! ../../modules/general/about/about.module */ "./src/app/modules/general/about/about.module.ts"))
                    .then(mod => mod.AboutModule)
            },
            {
                path: 'list-contact',
                loadChildren: () => __webpack_require__.e(/*! import() | modules-general-contact-contact-module */ "modules-general-contact-contact-module").then(__webpack_require__.bind(null, /*! ../../modules/general/contact/contact.module */ "./src/app/modules/general/contact/contact.module.ts"))
                    .then(mod => mod.ContactModule)
            },
        ]
    },
];
class AppRoutingAuthenModule {
}
AppRoutingAuthenModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingAuthenModule });
AppRoutingAuthenModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingAuthenModule_Factory(t) { return new (t || AppRoutingAuthenModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes_authen, { useHash: true, enableTracing: true })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingAuthenModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingAuthenModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes_authen, { useHash: true, enableTracing: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                declarations: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/routes_modules/client/client-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/routes_modules/client/client-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: AppRoutingClientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingClientModule", function() { return AppRoutingClientModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layouts_client_client_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layouts/client/client.component */ "./src/app/layouts/client/client.component.ts");





//Routes trang admin
const routes_client = [
    {
        path: '',
        component: _layouts_client_client_component__WEBPACK_IMPORTED_MODULE_2__["ClientComponent"],
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() | component-client-home-home-module */ "component-client-home-home-module").then(__webpack_require__.bind(null, /*! ../../component/client/home/home.module */ "./src/app/component/client/home/home.module.ts"))
                    .then(mod => mod.HomeClientModule)
            },
            {
                path: 'list-contact',
                loadChildren: () => __webpack_require__.e(/*! import() | modules-general-contact-contact-module */ "modules-general-contact-contact-module").then(__webpack_require__.bind(null, /*! ../../modules/general/contact/contact.module */ "./src/app/modules/general/contact/contact.module.ts"))
                    .then(mod => mod.ContactModule)
            },
            {
                path: 'list-about',
                loadChildren: () => __webpack_require__.e(/*! import() | modules-general-about-about-module */ "modules-general-about-about-module").then(__webpack_require__.bind(null, /*! ../../modules/general/about/about.module */ "./src/app/modules/general/about/about.module.ts"))
                    .then(mod => mod.AboutModule)
            },
        ]
    },
];
class AppRoutingClientModule {
}
AppRoutingClientModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingClientModule });
AppRoutingClientModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingClientModule_Factory(t) { return new (t || AppRoutingClientModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes_client, { useHash: true, enableTracing: true })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingClientModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingClientModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes_client, { useHash: true, enableTracing: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                declarations: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\KENNY\TaiLieuAngular9\Lazy-loading\angular-example-lazy-loading-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map