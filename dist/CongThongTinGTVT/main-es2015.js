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

/***/ "./src/app/another/image-hd/image-hd.component.ts":
/*!********************************************************!*\
  !*** ./src/app/another/image-hd/image-hd.component.ts ***!
  \********************************************************/
/*! exports provided: ImageHDComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageHDComponent", function() { return ImageHDComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/call-api.service */ "./src/services/call-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class ImageHDComponent {
    constructor(callApiService, activeRouter) {
        this.callApiService = callApiService;
        this.activeRouter = activeRouter;
        this.url = 'Media/GetListImage?TheLoaiTinID=21&SoLuong=5&PortalID=0';
    }
    ngOnInit() {
        this.callApiService.getMedia(this.url)
            .subscribe((data) => {
            this.medias = data;
            AppendSilides(data);
        });
        //  const empid = this.activeRouter.snapshot.params.TinTucID;
        //  this.callApiService.getMedia(this.url + empid)
        //   .subscribe((data: IMedia[]) => {
        //     this.medias = data;
        //     let a = lamTron(data);
        //     console.log(a);
        //   });
    }
}
ImageHDComponent.ɵfac = function ImageHDComponent_Factory(t) { return new (t || ImageHDComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__["CallApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ImageHDComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageHDComponent, selectors: [["app-image-hd"]], decls: 19, vars: 0, consts: [[1, "sgt-hoatdong", "py-5", "bg-white"], [1, "container"], [1, "text-danger", "text-center", "mb-5"], ["id", "gallery-hoatdong", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carouselExampleCaptions", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleCaptions", "data-slide-to", "1"], ["data-target", "#carouselExampleCaptions", "data-slide-to", "2"], ["id", "Slide_Master", 1, "carousel-inner"], ["href", "#gallery-hoatdong", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#gallery-hoatdong", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"]], template: function ImageHDComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "H\u00CCNH \u1EA2NH - HO\u1EA0T \u0110\u1ED8NG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fub3RoZXIvaW1hZ2UtaGQvaW1hZ2UtaGQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageHDComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-image-hd',
                templateUrl: './image-hd.component.html',
                styleUrls: ['./image-hd.component.css']
            }]
    }], function () { return [{ type: src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__["CallApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/another/survey/survey.component.ts":
/*!****************************************************!*\
  !*** ./src/app/another/survey/survey.component.ts ***!
  \****************************************************/
/*! exports provided: SurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyComponent", function() { return SurveyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SurveyComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
SurveyComponent.ɵfac = function SurveyComponent_Factory(t) { return new (t || SurveyComponent)(); };
SurveyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SurveyComponent, selectors: [["app-survey"]], decls: 90, vars: 0, consts: [["onsubmit", "return alert('Ch\u1EE9c n\u0103ng \u0111ang x\u00E2y d\u1EF1ng!')", 1, "sgt-thamdoykiennguoidan", "py-5"], [1, "container"], [1, "text-danger", "text-center", "mb-5"], [1, "row"], [1, "col-sm-10", "offset-sm-1"], [1, "card-group"], [1, "card"], [1, "card-body"], [1, "card-title", "text-center", "mb-5"], [1, "text-primary"], [1, "form-group"], [1, "form-check"], [1, "form-check-label"], ["type", "radio", "name", "cauhoi-1", "id", "0", 1, "form-check-input"], ["type", "radio", "name", "cauhoi-1", "id", "1", 1, "form-check-input"], ["type", "radio", "name", "cauhoi-1", "id", "2", 1, "form-check-input"], ["type", "radio", "name", "cauhoi-1", "id", "3", 1, "form-check-input"], ["type", "radio", "name", "cauhoi-2", "id", "4", 1, "form-check-input"], ["type", "radio", "name", "cauhoi-2", "id", "5", 1, "form-check-input"], ["type", "radio", "name", "cauhoi-2", "id", "6", 1, "form-check-input"], ["type", "radio", "name", "cauhoi-2", "id", "7", 1, "form-check-input"], ["type", "radio", "name", "cauhoi-3", "id", "8", 1, "form-check-input"], ["type", "radio", "name", "cauhoi-3", "id", "9", 1, "form-check-input"], ["type", "radio", "name", "cauhoi-3", "id", "10", 1, "form-check-input"], [1, "text-center", "mt-5"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary"]], template: function SurveyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "TH\u0102M D\u00D2 \u00DD KI\u1EBEN NG\u01AF\u1EDCI D\u00C2N");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "H\u1ED3 s\u01A1 c\u1EE7a b\u1EA1n \u0111\u01B0\u1EE3c gi\u1EA3i quy\u1EBFt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Tr\u01B0\u1EDBc h\u1EB9n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u0110\u00FAng h\u1EB9n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Tr\u1EC5 h\u1EB9n m\u1ED9t \u00EDt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Qu\u00E1 tr\u1EC5 h\u1EB9n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "2.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Th\u00E1i \u0111\u1ED9 trao \u0111\u1ED5i, h\u01B0\u1EDBng d\u1EABn, gi\u1EA3i th\u00EDch c\u1EE7a c\u00E1n b\u1ED9, c\u00F4ng ch\u1EE9c");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " L\u1ECBch s\u1EF1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Kh\u00F3 ch\u1ECBu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " D\u1EC5 hi\u1EC3u ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Kh\u00F3 hi\u1EC3u ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "b", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "3.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Vi\u1EC7c c\u00F4ng khai quy tr\u00ECnh, th\u1EE7 t\u1EE5c, bi\u1EC3u m\u1EABu h\u00E0nh ch\u00EDnh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " R\u00F5 r\u00E0ng ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Ch\u01B0a r\u00F5 r\u00E0ng ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Ch\u1EA5p nh\u1EADn \u0111\u01B0\u1EE3c ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "G\u1EECI \u00DD KI\u1EBEN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fub3RoZXIvc3VydmV5L3N1cnZleS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SurveyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-survey',
                templateUrl: './survey.component.html',
                styleUrls: ['./survey.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/another/tra-cuu/tra-cuu.component.ts":
/*!******************************************************!*\
  !*** ./src/app/another/tra-cuu/tra-cuu.component.ts ***!
  \******************************************************/
/*! exports provided: TraCuuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraCuuComponent", function() { return TraCuuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TraCuuComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
TraCuuComponent.ɵfac = function TraCuuComponent_Factory(t) { return new (t || TraCuuComponent)(); };
TraCuuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TraCuuComponent, selectors: [["app-tra-cuu"]], decls: 87, vars: 0, consts: [[1, "sgt-dichvucong", "py-5"], [1, "container"], [1, "card-deck"], [1, "card"], ["src", "http://via.placeholder.com/480x320", "alt", "...", 1, "card-img-top"], [1, "card-body"], [1, "card-title", "text-danger", "text-center"], [1, "card-text", "text-muted", "text-justify"], [1, "list-group", "list-group-flush"], [1, "list-group-item", "d-flex"], ["src", "assets/images/icon-store.svg", "alt", "icon"], ["href", "#", 1, "text-decoration-none", "text-dark", "ml-2"], [1, "align-middle"], ["onsubmit", "return alert('Ch\u1EE9c n\u0103ng \u0111ang ho\u00E0n thi\u1EC7n!')", 1, "text-center"], [1, "form-group"], ["type", "text", "placeholder", "Nh\u1EADp s\u1ED1 bi\u00EAn nh\u1EADn h\u1ED3 s\u01A1", 1, "form-control"], ["stype", "submit", 1, "btn", "btn-danger"], ["onsubmit", "return alert('Ch\u1EE9c n\u0103ng \u0111ang ho\u00E0n thi\u1EC7n!')", 1, "text-center", "py-3"]], template: function TraCuuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "D\u1ECACH V\u1EE4 C\u00D4NG TR\u1EF0C TUY\u1EBEN M\u1EE8C \u0110\u1ED8 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " V\u1EDBi n\u1ED7 l\u1EF1c c\u1EA3i ti\u1EBFn th\u01B0\u1EDDng xuy\u00EAn \u0111\u1EC3 ph\u1EE5c v\u1EE5 ng\u00E0y c\u00E0ng t\u1ED1t h\u01A1n, SGTVT m\u1EDF r\u1ED9ng cung c\u1EA5p d\u1ECBch v\u1EE5 gi\u1EA3i quy\u1EBFt th\u1EE7 t\u1EE5c tr\u1EF1c tuy\u1EBFn. Xin m\u1EDDi ch\u1ECDn l\u0129nh v\u1EF1c \u0111\u0103ng k\u00FD. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0110\u01AF\u1EDCNG B\u1ED8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0110\u01AF\u1EDCNG TH\u1EE6Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "S\u00C1T H\u1EA0CH V\u00C0 C\u1EA4P GI\u1EA4Y PH\u00C9P LX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "C\u1EA4P THO\u00C1T N\u01AF\u1EDAC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "C\u00D4NG VI\u00CAN C\u00C2Y XANH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "V\u1EACN T\u1EA2I \u0110\u01AF\u1EDCNG B\u1ED8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "TRA C\u1EE8U T\u00CCNH TR\u1EA0NG X\u1EEC L\u00DD H\u1ED2 S\u01A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Vui l\u00F2ng nh\u1EADp s\u1ED1 bi\u00EAn nh\u1EADn h\u1ED3 s\u01A1 v\u00E0 nh\u1EA5n n\u00FAt tra c\u1EE9u \u0111\u1EC3 bi\u1EBFt k\u1EBFt qu\u1EA3 h\u1ED3 s\u01A1 c\u1EE7a qu\u00FD v\u1ECB \u0111\u1EBFn th\u1EDDi \u0111i\u1EC3m hi\u1EC7n t\u1EA1i. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "TRA C\u1EE8U");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "DOANH NGHI\u1EC6P V\u1EACN T\u1EA2I TR\u1EF0C TUY\u1EBEN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u0110\u1EC3 t\u00ECm hi\u1EC3u th\u00F4ng tin chi ti\u1EBFt v\u1EC1 doanh nghi\u1EC7p v\u1EADn t\u1EA3i tr\u1EF1c tuy\u1EBFn, xin m\u1EDDi qu\u00FD kh\u00E1ch tra c\u1EE9u th\u00F4ng tin th\u1EE7 t\u1EE5c h\u00E0nh v\u1EDBi c\u00E1c m\u1EE5c sau \u0111\u00E2y: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " PH\u00D9 HI\u1EC6U XE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " TH\u00D4NG TIN DOANH NGHI\u1EC6P V\u1EACN T\u1EA2I ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " GI\u1EA4Y PH\u00C9P V\u1EACN T\u1EA2I ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " TH\u00D4NG TIN SERVICE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " TH\u00D4NG TIN GIAO TH\u00D4NG TP.HCM ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "XEM TH\u00CAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fub3RoZXIvdHJhLWN1dS90cmEtY3V1LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TraCuuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tra-cuu',
                templateUrl: './tra-cuu.component.html',
                styleUrls: ['./tra-cuu.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _topBar_yeu_cau_yeu_cau_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topBar/yeu-cau/yeu-cau.component */ "./src/app/topBar/yeu-cau/yeu-cau.component.ts");
/* harmony import */ var _topBar_co_cau_to_chuc_co_cau_to_chuc_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topBar/co-cau-to-chuc/co-cau-to-chuc.component */ "./src/app/topBar/co-cau-to-chuc/co-cau-to-chuc.component.ts");
/* harmony import */ var _topBar_chuc_nang_nghiep_vu_chuc_nang_nghiep_vu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./topBar/chuc-nang-nghiep-vu/chuc-nang-nghiep-vu.component */ "./src/app/topBar/chuc-nang-nghiep-vu/chuc-nang-nghiep-vu.component.ts");
/* harmony import */ var _topBar_list_tin_tuc_list_tin_tuc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./topBar/list-tin-tuc/list-tin-tuc.component */ "./src/app/topBar/list-tin-tuc/list-tin-tuc.component.ts");
/* harmony import */ var _topBar_lien_he_lien_he_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./topBar/lien-he/lien-he.component */ "./src/app/topBar/lien-he/lien-he.component.ts");
/* harmony import */ var _topBar_hoi_dap_hoi_dap_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./topBar/hoi-dap/hoi-dap.component */ "./src/app/topBar/hoi-dap/hoi-dap.component.ts");
/* harmony import */ var _topBar_gioi_thieu_gioi_thieu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./topBar/gioi-thieu/gioi-thieu.component */ "./src/app/topBar/gioi-thieu/gioi-thieu.component.ts");
/* harmony import */ var _morePages_more_page_more_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./morePages/more-page/more-page.component */ "./src/app/morePages/more-page/more-page.component.ts");
/* harmony import */ var _detailPages_detail_media_detail_media_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./detailPages/detail-media/detail-media.component */ "./src/app/detailPages/detail-media/detail-media.component.ts");
/* harmony import */ var _morePages_more_page_media_more_page_media_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./morePages/more-page-media/more-page-media.component */ "./src/app/morePages/more-page-media/more-page-media.component.ts");
/* harmony import */ var _thong_tin_du_an_thong_tin_du_an_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./thong-tin-du-an/thong-tin-du-an.component */ "./src/app/thong-tin-du-an/thong-tin-du-an.component.ts");
/* harmony import */ var _detailPages_detailpage_detailpage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./detailPages/detailpage/detailpage.component */ "./src/app/detailPages/detailpage/detailpage.component.ts");
/* harmony import */ var _body_body_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./body/body.component */ "./src/app/body/body.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


















const routes = [
    { path: '', redirectTo: '/Trang-Chu', pathMatch: 'full' },
    { path: 'Trang-Chu', component: _body_body_component__WEBPACK_IMPORTED_MODULE_13__["BodyComponent"] },
    { path: 'Gioi-Thieu', component: _topBar_gioi_thieu_gioi_thieu_component__WEBPACK_IMPORTED_MODULE_7__["GioiThieuComponent"] },
    { path: 'Chuc-Nang-Nghiep-Vu', component: _topBar_chuc_nang_nghiep_vu_chuc_nang_nghiep_vu_component__WEBPACK_IMPORTED_MODULE_3__["ChucNangNghiepVuComponent"] },
    { path: 'Co-Cau-To-Chuc', component: _topBar_co_cau_to_chuc_co_cau_to_chuc_component__WEBPACK_IMPORTED_MODULE_2__["CoCauToChucComponent"] },
    { path: 'Tin-Tuc', component: _topBar_list_tin_tuc_list_tin_tuc_component__WEBPACK_IMPORTED_MODULE_4__["ListTinTucComponent"] },
    { path: 'Cau-Hoi-Thuong-Gap', component: _topBar_hoi_dap_hoi_dap_component__WEBPACK_IMPORTED_MODULE_6__["HoiDapComponent"] },
    { path: 'Gui-Cau-Hoi-Yeu-Cau', component: _topBar_yeu_cau_yeu_cau_component__WEBPACK_IMPORTED_MODULE_1__["YeuCauComponent"] },
    { path: 'Lien-He', component: _topBar_lien_he_lien_he_component__WEBPACK_IMPORTED_MODULE_5__["LienHeComponent"] },
    { path: 'Tin-Tuc/:DanhMuc/:TheLoaiTinID', component: _morePages_more_page_more_page_component__WEBPACK_IMPORTED_MODULE_8__["MorePageComponent"] },
    { path: 'detail/:TinTucID', component: _detailPages_detailpage_detailpage_component__WEBPACK_IMPORTED_MODULE_12__["DetailpageComponent"] },
    { path: 'dauTuPhatTrien', component: _thong_tin_du_an_thong_tin_du_an_component__WEBPACK_IMPORTED_MODULE_11__["ThongTinDuAnComponent"] },
    // {path: 'moreNewsList/:TheLoaiTinID', component: MorePageComponent},
    { path: 'MediaList', component: _morePages_more_page_media_more_page_media_component__WEBPACK_IMPORTED_MODULE_10__["MorePageMediaComponent"] },
    { path: 'mediaDetail/:MediaID', component: _detailPages_detail_media_detail_media_component__WEBPACK_IMPORTED_MODULE_9__["DetailMediaComponent"] },
    { path: '404', component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_0__["NotfoundComponent"] },
    { path: '**', redirectTo: '/404' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot(routes)
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_15__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]]
            }]
    }], null, null); })();
const routingComponents = [_body_body_component__WEBPACK_IMPORTED_MODULE_13__["BodyComponent"], _detailPages_detailpage_detailpage_component__WEBPACK_IMPORTED_MODULE_12__["DetailpageComponent"], _thong_tin_du_an_thong_tin_du_an_component__WEBPACK_IMPORTED_MODULE_11__["ThongTinDuAnComponent"], _morePages_more_page_more_page_component__WEBPACK_IMPORTED_MODULE_8__["MorePageComponent"], _morePages_more_page_media_more_page_media_component__WEBPACK_IMPORTED_MODULE_10__["MorePageMediaComponent"],
    _detailPages_detail_media_detail_media_component__WEBPACK_IMPORTED_MODULE_9__["DetailMediaComponent"], _topBar_gioi_thieu_gioi_thieu_component__WEBPACK_IMPORTED_MODULE_7__["GioiThieuComponent"], _topBar_hoi_dap_hoi_dap_component__WEBPACK_IMPORTED_MODULE_6__["HoiDapComponent"], _topBar_lien_he_lien_he_component__WEBPACK_IMPORTED_MODULE_5__["LienHeComponent"], _topBar_list_tin_tuc_list_tin_tuc_component__WEBPACK_IMPORTED_MODULE_4__["ListTinTucComponent"], _topBar_chuc_nang_nghiep_vu_chuc_nang_nghiep_vu_component__WEBPACK_IMPORTED_MODULE_3__["ChucNangNghiepVuComponent"],
    _topBar_co_cau_to_chuc_co_cau_to_chuc_component__WEBPACK_IMPORTED_MODULE_2__["CoCauToChucComponent"], _topBar_yeu_cau_yeu_cau_component__WEBPACK_IMPORTED_MODULE_1__["YeuCauComponent"], _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_0__["NotfoundComponent"]];


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
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _another_tra_cuu_tra_cuu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./another/tra-cuu/tra-cuu.component */ "./src/app/another/tra-cuu/tra-cuu.component.ts");
/* harmony import */ var _another_survey_survey_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./another/survey/survey.component */ "./src/app/another/survey/survey.component.ts");
/* harmony import */ var _another_image_hd_image_hd_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./another/image-hd/image-hd.component */ "./src/app/another/image-hd/image-hd.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");








class AppComponent {
    constructor() {
        this.title = 'CongThongTinGTVT';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 0, consts: [[1, "container", "py-3", "bg-white"], ["type", "button", 1, "scroll-top", "btn", "btn-lg", "btn-primary", "rounded-circle"], [1, "fas", "fa-chevron-up"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-tra-cuu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-survey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-image-hd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _another_tra_cuu_tra_cuu_component__WEBPACK_IMPORTED_MODULE_3__["TraCuuComponent"], _another_survey_survey_component__WEBPACK_IMPORTED_MODULE_4__["SurveyComponent"], _another_image_hd_image_hd_component__WEBPACK_IMPORTED_MODULE_5__["ImageHDComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
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
/* harmony import */ var _detailPages_detailpage_thong_tin_can_biet_thong_tin_can_biet_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detailPages/detailpage/thong-tin-can-biet/thong-tin-can-biet.component */ "./src/app/detailPages/detailpage/thong-tin-can-biet/thong-tin-can-biet.component.ts");
/* harmony import */ var _detailPages_detailpage_tin_tuc_tin_tuc_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detailPages/detailpage/tin-tuc/tin-tuc.component */ "./src/app/detailPages/detailpage/tin-tuc/tin-tuc.component.ts");
/* harmony import */ var _body_body_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./body/body.component */ "./src/app/body/body.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _body_map_top_map_top_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./body/map-top/map-top.component */ "./src/app/body/map-top/map-top.component.ts");
/* harmony import */ var _body_mot_cua_dien_tu_mot_cua_dien_tu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./body/mot-cua-dien-tu/mot-cua-dien-tu.component */ "./src/app/body/mot-cua-dien-tu/mot-cua-dien-tu.component.ts");
/* harmony import */ var _body_dich_vu_dich_vu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./body/dich-vu/dich-vu.component */ "./src/app/body/dich-vu/dich-vu.component.ts");
/* harmony import */ var _body_media_media_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./body/media/media.component */ "./src/app/body/media/media.component.ts");
/* harmony import */ var _body_link_website_link_website_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./body/link-website/link-website.component */ "./src/app/body/link-website/link-website.component.ts");
/* harmony import */ var _body_thong_ke_thong_ke_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./body/thong-ke/thong-ke.component */ "./src/app/body/thong-ke/thong-ke.component.ts");
/* harmony import */ var _body_ht_van_ban_ht_van_ban_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./body/ht-van-ban/ht-van-ban.component */ "./src/app/body/ht-van-ban/ht-van-ban.component.ts");
/* harmony import */ var _body_lichlam_lichlam_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./body/lichlam/lichlam.component */ "./src/app/body/lichlam/lichlam.component.ts");
/* harmony import */ var _body_kehoach_kehoach_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./body/kehoach/kehoach.component */ "./src/app/body/kehoach/kehoach.component.ts");
/* harmony import */ var _body_promotions_promotion01_promotion01_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./body/promotions/promotion01/promotion01.component */ "./src/app/body/promotions/promotion01/promotion01.component.ts");
/* harmony import */ var _body_promotions_promotion02_promotion02_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./body/promotions/promotion02/promotion02.component */ "./src/app/body/promotions/promotion02/promotion02.component.ts");
/* harmony import */ var _body_hoatdongkhac_hoatdongkhac_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./body/hoatdongkhac/hoatdongkhac.component */ "./src/app/body/hoatdongkhac/hoatdongkhac.component.ts");
/* harmony import */ var _body_hoantdongkhac02_hoantdongkhac02_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./body/hoantdongkhac02/hoantdongkhac02.component */ "./src/app/body/hoantdongkhac02/hoantdongkhac02.component.ts");
/* harmony import */ var _another_survey_survey_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./another/survey/survey.component */ "./src/app/another/survey/survey.component.ts");
/* harmony import */ var _another_image_hd_image_hd_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./another/image-hd/image-hd.component */ "./src/app/another/image-hd/image-hd.component.ts");
/* harmony import */ var _another_tra_cuu_tra_cuu_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./another/tra-cuu/tra-cuu.component */ "./src/app/another/tra-cuu/tra-cuu.component.ts");
/* harmony import */ var _body_news_news_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./body/news/news.component */ "./src/app/body/news/news.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _morePages_more_page_more_page_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./morePages/more-page/more-page.component */ "./src/app/morePages/more-page/more-page.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _paginate_ngx_paginate_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./paginate/ngx-paginate.module */ "./src/app/paginate/ngx-paginate.module.ts");
/* harmony import */ var _detailPages_detailpage_detailpage_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./detailPages/detailpage/detailpage.component */ "./src/app/detailPages/detailpage/detailpage.component.ts");
/* harmony import */ var _thong_tin_du_an_thong_tin_du_an_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./thong-tin-du-an/thong-tin-du-an.component */ "./src/app/thong-tin-du-an/thong-tin-du-an.component.ts");
/* harmony import */ var _morePages_more_page_media_more_page_media_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./morePages/more-page-media/more-page-media.component */ "./src/app/morePages/more-page-media/more-page-media.component.ts");
/* harmony import */ var _detailPages_detail_media_detail_media_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./detailPages/detail-media/detail-media.component */ "./src/app/detailPages/detail-media/detail-media.component.ts");
/* harmony import */ var _topBar_gioi_thieu_gioi_thieu_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./topBar/gioi-thieu/gioi-thieu.component */ "./src/app/topBar/gioi-thieu/gioi-thieu.component.ts");
/* harmony import */ var _topBar_hoi_dap_hoi_dap_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./topBar/hoi-dap/hoi-dap.component */ "./src/app/topBar/hoi-dap/hoi-dap.component.ts");
/* harmony import */ var _topBar_lien_he_lien_he_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./topBar/lien-he/lien-he.component */ "./src/app/topBar/lien-he/lien-he.component.ts");
/* harmony import */ var _topBar_list_tin_tuc_list_tin_tuc_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./topBar/list-tin-tuc/list-tin-tuc.component */ "./src/app/topBar/list-tin-tuc/list-tin-tuc.component.ts");
/* harmony import */ var _topBar_chuc_nang_nghiep_vu_chuc_nang_nghiep_vu_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./topBar/chuc-nang-nghiep-vu/chuc-nang-nghiep-vu.component */ "./src/app/topBar/chuc-nang-nghiep-vu/chuc-nang-nghiep-vu.component.ts");
/* harmony import */ var _topBar_co_cau_to_chuc_co_cau_to_chuc_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./topBar/co-cau-to-chuc/co-cau-to-chuc.component */ "./src/app/topBar/co-cau-to-chuc/co-cau-to-chuc.component.ts");
/* harmony import */ var _topBar_yeu_cau_yeu_cau_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./topBar/yeu-cau/yeu-cau.component */ "./src/app/topBar/yeu-cau/yeu-cau.component.ts");





























// import {NgxPaginationModule} from 'ngx-pagination';
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _paginate_ngx_paginate_module__WEBPACK_IMPORTED_MODULE_29__["NgxPaginateModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
        _body_map_top_map_top_component__WEBPACK_IMPORTED_MODULE_9__["MapTopComponent"],
        _body_mot_cua_dien_tu_mot_cua_dien_tu_component__WEBPACK_IMPORTED_MODULE_10__["MotCuaDienTuComponent"],
        _body_dich_vu_dich_vu_component__WEBPACK_IMPORTED_MODULE_11__["DichVuComponent"],
        _body_media_media_component__WEBPACK_IMPORTED_MODULE_12__["MediaComponent"],
        _body_link_website_link_website_component__WEBPACK_IMPORTED_MODULE_13__["LinkWebsiteComponent"],
        _body_thong_ke_thong_ke_component__WEBPACK_IMPORTED_MODULE_14__["ThongKeComponent"],
        _body_promotions_promotion01_promotion01_component__WEBPACK_IMPORTED_MODULE_18__["Promotion01Component"],
        _body_promotions_promotion02_promotion02_component__WEBPACK_IMPORTED_MODULE_19__["Promotion02Component"],
        _body_hoatdongkhac_hoatdongkhac_component__WEBPACK_IMPORTED_MODULE_20__["HoatdongkhacComponent"],
        _body_hoantdongkhac02_hoantdongkhac02_component__WEBPACK_IMPORTED_MODULE_21__["Hoantdongkhac02Component"],
        _another_survey_survey_component__WEBPACK_IMPORTED_MODULE_22__["SurveyComponent"],
        _another_image_hd_image_hd_component__WEBPACK_IMPORTED_MODULE_23__["ImageHDComponent"],
        _another_tra_cuu_tra_cuu_component__WEBPACK_IMPORTED_MODULE_24__["TraCuuComponent"],
        _body_ht_van_ban_ht_van_ban_component__WEBPACK_IMPORTED_MODULE_15__["HtVanBanComponent"],
        _body_lichlam_lichlam_component__WEBPACK_IMPORTED_MODULE_16__["LichlamComponent"],
        _body_kehoach_kehoach_component__WEBPACK_IMPORTED_MODULE_17__["KehoachComponent"], _body_body_component__WEBPACK_IMPORTED_MODULE_2__["BodyComponent"], _detailPages_detailpage_detailpage_component__WEBPACK_IMPORTED_MODULE_30__["DetailpageComponent"], _thong_tin_du_an_thong_tin_du_an_component__WEBPACK_IMPORTED_MODULE_31__["ThongTinDuAnComponent"], _morePages_more_page_more_page_component__WEBPACK_IMPORTED_MODULE_27__["MorePageComponent"], _morePages_more_page_media_more_page_media_component__WEBPACK_IMPORTED_MODULE_32__["MorePageMediaComponent"], _detailPages_detail_media_detail_media_component__WEBPACK_IMPORTED_MODULE_33__["DetailMediaComponent"], _topBar_gioi_thieu_gioi_thieu_component__WEBPACK_IMPORTED_MODULE_34__["GioiThieuComponent"], _topBar_hoi_dap_hoi_dap_component__WEBPACK_IMPORTED_MODULE_35__["HoiDapComponent"], _topBar_lien_he_lien_he_component__WEBPACK_IMPORTED_MODULE_36__["LienHeComponent"], _topBar_list_tin_tuc_list_tin_tuc_component__WEBPACK_IMPORTED_MODULE_37__["ListTinTucComponent"], _topBar_chuc_nang_nghiep_vu_chuc_nang_nghiep_vu_component__WEBPACK_IMPORTED_MODULE_38__["ChucNangNghiepVuComponent"], _topBar_co_cau_to_chuc_co_cau_to_chuc_component__WEBPACK_IMPORTED_MODULE_39__["CoCauToChucComponent"], _topBar_yeu_cau_yeu_cau_component__WEBPACK_IMPORTED_MODULE_40__["YeuCauComponent"], _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_28__["NotfoundComponent"], _body_body_component__WEBPACK_IMPORTED_MODULE_2__["BodyComponent"],
        _body_news_news_component__WEBPACK_IMPORTED_MODULE_25__["NewsComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_26__["FooterComponent"],
        _morePages_more_page_more_page_component__WEBPACK_IMPORTED_MODULE_27__["MorePageComponent"],
        _detailPages_detailpage_tin_tuc_tin_tuc_component__WEBPACK_IMPORTED_MODULE_1__["TinTucComponent"],
        _detailPages_detailpage_thong_tin_can_biet_thong_tin_can_biet_component__WEBPACK_IMPORTED_MODULE_0__["ThongTinCanBietComponent"],
        // DateTimePickerComponent,
        _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_28__["NotfoundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
        _paginate_ngx_paginate_module__WEBPACK_IMPORTED_MODULE_29__["NgxPaginateModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                    _body_map_top_map_top_component__WEBPACK_IMPORTED_MODULE_9__["MapTopComponent"],
                    _body_mot_cua_dien_tu_mot_cua_dien_tu_component__WEBPACK_IMPORTED_MODULE_10__["MotCuaDienTuComponent"],
                    _body_dich_vu_dich_vu_component__WEBPACK_IMPORTED_MODULE_11__["DichVuComponent"],
                    _body_media_media_component__WEBPACK_IMPORTED_MODULE_12__["MediaComponent"],
                    _body_link_website_link_website_component__WEBPACK_IMPORTED_MODULE_13__["LinkWebsiteComponent"],
                    _body_thong_ke_thong_ke_component__WEBPACK_IMPORTED_MODULE_14__["ThongKeComponent"],
                    _body_promotions_promotion01_promotion01_component__WEBPACK_IMPORTED_MODULE_18__["Promotion01Component"],
                    _body_promotions_promotion02_promotion02_component__WEBPACK_IMPORTED_MODULE_19__["Promotion02Component"],
                    _body_hoatdongkhac_hoatdongkhac_component__WEBPACK_IMPORTED_MODULE_20__["HoatdongkhacComponent"],
                    _body_hoantdongkhac02_hoantdongkhac02_component__WEBPACK_IMPORTED_MODULE_21__["Hoantdongkhac02Component"],
                    _another_survey_survey_component__WEBPACK_IMPORTED_MODULE_22__["SurveyComponent"],
                    _another_image_hd_image_hd_component__WEBPACK_IMPORTED_MODULE_23__["ImageHDComponent"],
                    _another_tra_cuu_tra_cuu_component__WEBPACK_IMPORTED_MODULE_24__["TraCuuComponent"],
                    _body_ht_van_ban_ht_van_ban_component__WEBPACK_IMPORTED_MODULE_15__["HtVanBanComponent"],
                    _body_lichlam_lichlam_component__WEBPACK_IMPORTED_MODULE_16__["LichlamComponent"],
                    _body_kehoach_kehoach_component__WEBPACK_IMPORTED_MODULE_17__["KehoachComponent"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["routingComponents"],
                    _body_body_component__WEBPACK_IMPORTED_MODULE_2__["BodyComponent"],
                    _body_news_news_component__WEBPACK_IMPORTED_MODULE_25__["NewsComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_26__["FooterComponent"],
                    _morePages_more_page_more_page_component__WEBPACK_IMPORTED_MODULE_27__["MorePageComponent"],
                    _detailPages_detailpage_tin_tuc_tin_tuc_component__WEBPACK_IMPORTED_MODULE_1__["TinTucComponent"],
                    _detailPages_detailpage_thong_tin_can_biet_thong_tin_can_biet_component__WEBPACK_IMPORTED_MODULE_0__["ThongTinCanBietComponent"],
                    // DateTimePickerComponent,
                    _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_28__["NotfoundComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                    _paginate_ngx_paginate_module__WEBPACK_IMPORTED_MODULE_29__["NgxPaginateModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/body/body.component.ts":
/*!****************************************!*\
  !*** ./src/app/body/body.component.ts ***!
  \****************************************/
/*! exports provided: BodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function() { return BodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news/news.component */ "./src/app/body/news/news.component.ts");
/* harmony import */ var _promotions_promotion01_promotion01_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./promotions/promotion01/promotion01.component */ "./src/app/body/promotions/promotion01/promotion01.component.ts");
/* harmony import */ var _hoatdongkhac_hoatdongkhac_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hoatdongkhac/hoatdongkhac.component */ "./src/app/body/hoatdongkhac/hoatdongkhac.component.ts");
/* harmony import */ var _promotions_promotion02_promotion02_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./promotions/promotion02/promotion02.component */ "./src/app/body/promotions/promotion02/promotion02.component.ts");
/* harmony import */ var _hoantdongkhac02_hoantdongkhac02_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hoantdongkhac02/hoantdongkhac02.component */ "./src/app/body/hoantdongkhac02/hoantdongkhac02.component.ts");
/* harmony import */ var _map_top_map_top_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map-top/map-top.component */ "./src/app/body/map-top/map-top.component.ts");
/* harmony import */ var _mot_cua_dien_tu_mot_cua_dien_tu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mot-cua-dien-tu/mot-cua-dien-tu.component */ "./src/app/body/mot-cua-dien-tu/mot-cua-dien-tu.component.ts");
/* harmony import */ var _ht_van_ban_ht_van_ban_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ht-van-ban/ht-van-ban.component */ "./src/app/body/ht-van-ban/ht-van-ban.component.ts");
/* harmony import */ var _kehoach_kehoach_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./kehoach/kehoach.component */ "./src/app/body/kehoach/kehoach.component.ts");
/* harmony import */ var _dich_vu_dich_vu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dich-vu/dich-vu.component */ "./src/app/body/dich-vu/dich-vu.component.ts");
/* harmony import */ var _media_media_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./media/media.component */ "./src/app/body/media/media.component.ts");
/* harmony import */ var _link_website_link_website_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./link-website/link-website.component */ "./src/app/body/link-website/link-website.component.ts");
/* harmony import */ var _thong_ke_thong_ke_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./thong-ke/thong-ke.component */ "./src/app/body/thong-ke/thong-ke.component.ts");















class BodyComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
BodyComponent.ɵfac = function BodyComponent_Factory(t) { return new (t || BodyComponent)(); };
BodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BodyComponent, selectors: [["app-body"]], decls: 25, vars: 0, consts: [[1, "row"], [1, "col-sm-8"], [1, "col-sm-4"], [1, "col-sm-12"], [1, "col-sm-12", "mt-4"]], template: function BodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-news", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-promotion01", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-hoatdongkhac", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-promotion02", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-hoantdongkhac02", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-map-top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-mot-cua-dien-tu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-ht-van-ban");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-kehoach");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-dich-vu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-link-website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-thong-ke");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_news_news_component__WEBPACK_IMPORTED_MODULE_1__["NewsComponent"], _promotions_promotion01_promotion01_component__WEBPACK_IMPORTED_MODULE_2__["Promotion01Component"], _hoatdongkhac_hoatdongkhac_component__WEBPACK_IMPORTED_MODULE_3__["HoatdongkhacComponent"], _promotions_promotion02_promotion02_component__WEBPACK_IMPORTED_MODULE_4__["Promotion02Component"], _hoantdongkhac02_hoantdongkhac02_component__WEBPACK_IMPORTED_MODULE_5__["Hoantdongkhac02Component"], _map_top_map_top_component__WEBPACK_IMPORTED_MODULE_6__["MapTopComponent"], _mot_cua_dien_tu_mot_cua_dien_tu_component__WEBPACK_IMPORTED_MODULE_7__["MotCuaDienTuComponent"], _ht_van_ban_ht_van_ban_component__WEBPACK_IMPORTED_MODULE_8__["HtVanBanComponent"], _kehoach_kehoach_component__WEBPACK_IMPORTED_MODULE_9__["KehoachComponent"], _dich_vu_dich_vu_component__WEBPACK_IMPORTED_MODULE_10__["DichVuComponent"], _media_media_component__WEBPACK_IMPORTED_MODULE_11__["MediaComponent"], _link_website_link_website_component__WEBPACK_IMPORTED_MODULE_12__["LinkWebsiteComponent"], _thong_ke_thong_ke_component__WEBPACK_IMPORTED_MODULE_13__["ThongKeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvYm9keS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BodyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-body',
                templateUrl: './body.component.html',
                styleUrls: ['./body.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/body/dich-vu/dich-vu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/body/dich-vu/dich-vu.component.ts ***!
  \***************************************************/
/*! exports provided: DichVuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DichVuComponent", function() { return DichVuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/call-api.service */ "./src/services/call-api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function DichVuComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dichvu_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", dichvu_r37.UrlLienKet, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/jpeg;base64,", dichvu_r37.Image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class DichVuComponent {
    constructor(callApiService, http, router) {
        this.callApiService = callApiService;
        this.http = http;
        this.router = router;
        this.dichvu = [];
        this.url = 'LienKet/GetListBanner?PortalID=0';
    }
    ngOnInit() {
        this.callApiService.getDichVu(this.url)
            .subscribe((data) => {
            this.dichvu = data;
            window.scroll(0, 0);
        });
    }
}
DichVuComponent.ɵfac = function DichVuComponent_Factory(t) { return new (t || DichVuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__["CallApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
DichVuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DichVuComponent, selectors: [["app-dich-vu"]], decls: 5, vars: 1, consts: [[1, "sgt-danhmuctin--title"], ["href", "#", 1, "text-decoration-none", "d-flex", "justify-content-between"], [1, "d-inline-block", "pb-2", "text-dark"], [3, "href", 4, "ngFor", "ngForOf"], [3, "href"], ["alt", "image-3", 1, "w-100", 3, "src"]], template: function DichVuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "D\u1ECACH V\u1EE4 C\u00D4NG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DichVuComponent_a_4_Template, 2, 2, "a", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dichvu);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvZGljaC12dS9kaWNoLXZ1LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DichVuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dich-vu',
                templateUrl: './dich-vu.component.html',
                styleUrls: ['./dich-vu.component.css']
            }]
    }], function () { return [{ type: src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__["CallApiService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/body/hoantdongkhac02/hoantdongkhac02.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/body/hoantdongkhac02/hoantdongkhac02.component.ts ***!
  \*******************************************************************/
/*! exports provided: Hoantdongkhac02Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hoantdongkhac02Component", function() { return Hoantdongkhac02Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/call-api.service */ "./src/services/call-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function Hoantdongkhac02Component_ul_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", ctx_r80.tinMot.TinTucID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/jpeg;base64,", ctx_r80.tinMot.Avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r80.tinMot.TieuDe);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r80.tinMot.TieuDe);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r80.tinMot.TieuDe);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r80.tinMot.TieuDe, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("innerHtml", ctx_r80.tinMot.MoTa, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function Hoantdongkhac02Component_ul_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thongtin_r88 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", thongtin_r88.TinTucID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](thongtin_r88.TieuDe);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" | ", thongtin_r88.LastUpdDate, "");
} }
function Hoantdongkhac02Component_ul_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", ctx_r82.tinMot1.TinTucID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/jpeg;base64,", ctx_r82.tinMot1.Avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r82.tinMot1.TieuDe);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r82.tinMot1.TieuDe);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r82.tinMot1.TieuDe, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("innerHtml", ctx_r82.tinMot1.MoTa, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function Hoantdongkhac02Component_ul_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thongtin_r89 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", thongtin_r89.TinTucID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](thongtin_r89.TieuDe);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" | ", thongtin_r89.LastUpdDate, "");
} }
function Hoantdongkhac02Component_ul_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", ctx_r84.tinMot2.TinTucID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/jpeg;base64,", ctx_r84.tinMot2.Avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r84.tinMot2.TieuDe);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r84.tinMot2.TieuDe);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r84.tinMot2.TieuDe, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("innerHtml", ctx_r84.tinMot2.MoTa, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function Hoantdongkhac02Component_ul_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thongtin_r90 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", thongtin_r90.TinTucID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](thongtin_r90.TieuDe);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" | ", thongtin_r90.LastUpdDate, "");
} }
function Hoantdongkhac02Component_ul_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", ctx_r86.tinMot3.TinTucID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/jpeg;base64,", ctx_r86.tinMot3.Avatar, " pointer", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r86.tinMot3.TieuDe);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r86.tinMot3.TieuDe);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r86.tinMot3.TieuDe, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("innerHtml", ctx_r86.tinMot3.MoTa, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function Hoantdongkhac02Component_ul_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thongtin_r91 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", thongtin_r91.TinTucID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](thongtin_r91.TieuDe);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" | ", thongtin_r91.LastUpdDate, "");
} }
class Hoantdongkhac02Component {
    // urlChuDe = 'TinTuc/GetList_TheLoaiTinTuc';
    constructor(callApiService, router) {
        this.callApiService = callApiService;
        this.router = router;
        this.thongtin = [];
        this.thongtin1 = [];
        this.thongtin2 = [];
        this.thongtin3 = [];
        this.url = 'TinTuc/GetList_ByTheLoai?TheLoaiTinID=13&SoLuong=3';
        this.url1 = 'TinTuc/GetList_ByTheLoai?TheLoaiTinID=14&SoLuong=3';
        this.url2 = 'TinTuc/GetList_ByTheLoai?TheLoaiTinID=30&SoLuong=3';
        this.url3 = 'TinTuc/GetList_ByTheLoai?TheLoaiTinID=31&SoLuong=3';
        this.urlCLDHKH = 'Chien-Luoc-Dinh-Huong-Ke-Hoach/' + btoa('13') + '.html';
        this.urlTTCDDH = 'Thong-Tin-Chi-Dao-Dieu-Hanh/' + btoa('14') + '.html';
        this.urlGTDB = 'Giao-Thong-Duong-Bo/' + btoa('30') + '.html';
        this.urlGTDT = 'Giao-Thong-Duong-Thuy/' + btoa('31') + '.html';
    }
    ngOnInit() {
        this.callApiService.getThongtin(this.url)
            .subscribe((data) => {
            // tslint:disable-next-line: only-arrow-functions
            data.forEach(function (item) {
                const thuGonTieuDe = ((item.TieuDe.length >= 65) ? item.TieuDe.substring(0, 65) + '...' : item.TieuDe.substring(0));
                item.TieuDe = thuGonTieuDe;
                const thuGonMoTa = ((item.TieuDe.length < 65) ? item.MoTa.substring(0, 120) + '...' : item.MoTa.substring(0, 135)) + '...';
                item.MoTa = thuGonMoTa;
            });
            this.tinMot = data[data.length - 1];
            this.thongtin = data;
        });
        this.callApiService.getThongtin(this.url1)
            .subscribe((data) => {
            this.thongtin1 = data;
            // tslint:disable-next-line: only-arrow-functions
            data.forEach(function (item) {
                const thuGonTieuDe = ((item.TieuDe.length >= 65) ? item.TieuDe.substring(0, 65) + '...' : item.TieuDe.substring(0));
                item.TieuDe = thuGonTieuDe;
                const thuGonMoTa = ((item.TieuDe.length < 65) ? item.MoTa.substring(0, 125) + '...' : item.MoTa.substring(0, 110)) + '...';
                item.MoTa = thuGonMoTa;
            });
            this.tinMot1 = data[data.length - 1];
            this.thongtin1 = data;
        });
        this.callApiService.getThongtin(this.url2)
            .subscribe((data) => {
            // tslint:disable-next-line: only-arrow-functions
            data.forEach(function (item) {
                const thuGonTieuDe = ((item.TieuDe.length >= 60) ? item.TieuDe.substring(0, 60) + '...' : item.TieuDe.substring(0));
                item.TieuDe = thuGonTieuDe;
                const thuGonMoTa = ((item.TieuDe.length < 60) ? item.MoTa.substring(0, 130) + '...' : item.MoTa.substring(0, 110) + '...');
                item.MoTa = thuGonMoTa;
            });
            this.tinMot2 = data[data.length - 1];
            this.thongtin2 = data;
        });
        this.callApiService.getThongtin(this.url3)
            .subscribe((data) => {
            this.thongtin3 = data;
            // tslint:disable-next-line: only-arrow-functions
            data.forEach(function (item) {
                const thuGonTieuDe = ((item.TieuDe.length >= 60) ? item.TieuDe.substring(0, 60) + '...' : item.TieuDe.substring(0));
                item.TieuDe = thuGonTieuDe;
                const thuGonMoTa = ((item.TieuDe.length < 60) ? item.MoTa.substring(0, 125) + '...' : item.MoTa.substring(0, 110)) + '...';
                item.MoTa = thuGonMoTa;
            });
            this.tinMot3 = data[data.length - 1];
            this.thongtin3 = data;
        });
    }
}
Hoantdongkhac02Component.ɵfac = function Hoantdongkhac02Component_Factory(t) { return new (t || Hoantdongkhac02Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__["CallApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
Hoantdongkhac02Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Hoantdongkhac02Component, selectors: [["app-hoantdongkhac02"]], decls: 41, vars: 12, consts: [[1, "col-sm-12", "mt-3"], [1, "sgt-danhmuctin"], [1, "row"], [1, "col-sm-12", "col-lg-6"], [1, "sgt-danhmuctin--title", "text-primary"], [1, "text-decoration-none", "d-flex", "justify-content-between", 3, "routerLink"], [1, "d-inline-block", "pb-2", "pointer"], ["id", "xthem", 1, "text-muted", "pointer"], ["class", "list-unstyled", 3, "routerLink", 4, "ngIf"], ["class", "fa-ul mb-0 tieude", 4, "ngFor", "ngForOf"], [1, "d-inline-block", "pb-2"], [1, "text-muted"], [1, "list-unstyled", 3, "routerLink"], [1, "media"], ["onerror", "this.onerror=null;this.src='https://amerikicklanghorne.com/wp-content/uploads/2017/04/default-image.jpg';", 1, "mr-3", "pointer", 3, "src", "alt", "title"], [1, "media-body"], [1, "text-decoration-none", "pointer"], ["id", "chuDe", 1, "mt-0", "mb-0", "text-dark"], [3, "title"], [1, "text-muted", 3, "innerHtml"], [1, "fa-ul", "mb-0", "tieude"], [1, "fa-li"], [1, "fas", "fa-chevron-right", "text-danger"], [1, "text-dark", "text-decoration-none", "pointer", 3, "routerLink"], ["alt", "tinMot1.TieuDe8", "onerror", "this.onerror=null;this.src='https://amerikicklanghorne.com/wp-content/uploads/2017/04/default-image.jpg';", 1, "mr-3", "pointer", 3, "src", "title"], ["src", "", 1, "pointer"], ["alt", "...", "onerror", "this.onerror=null;this.src='https://amerikicklanghorne.com/wp-content/uploads/2017/04/default-image.jpg';", 1, "mr-3", "pointer", 3, "src", "title"], ["alt", "...", "onerror", "this.onerror=null;this.src='https://amerikicklanghorne.com/wp-content/uploads/2017/04/default-image.jpg';", 1, "mr-3", 3, "src", "title"]], template: function Hoantdongkhac02Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Chi\u1EBFn l\u01B0\u1EE3c-\u0110\u1ECBnh h\u01B0\u1EDBng- K\u1EBF ho\u1EA1ch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Xem th\u00EAm >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, Hoantdongkhac02Component_ul_10_Template, 9, 7, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, Hoantdongkhac02Component_ul_11_Template, 8, 3, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Th\u00F4ng tin ch\u1EC9 \u0111\u1EA1o \u0111i\u1EC1u h\u00E0nh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "small", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Xem th\u00EAm >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, Hoantdongkhac02Component_ul_20_Template, 9, 6, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, Hoantdongkhac02Component_ul_21_Template, 8, 3, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Giao th\u00F4ng \u0111\u01B0\u1EDDng b\u1ED9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "small", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Xem th\u00EAm >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, Hoantdongkhac02Component_ul_30_Template, 9, 6, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, Hoantdongkhac02Component_ul_31_Template, 8, 3, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Giao th\u00F4ng \u0111\u01B0\u1EDDng thu\u1EF7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "small", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Xem th\u00EAm >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, Hoantdongkhac02Component_ul_39_Template, 9, 6, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, Hoantdongkhac02Component_ul_40_Template, 8, 3, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/Tin-Tuc/", ctx.urlCLDHKH, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tinMot);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.thongtin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/Tin-Tuc/", ctx.urlTTCDDH, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tinMot1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.thongtin1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/Tin-Tuc/", ctx.urlGTDB, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tinMot2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.thongtin2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/Tin-Tuc/url", ctx.urlGTDT, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tinMot3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.thongtin3);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".pointer[_ngcontent-%COMP%] {cursor: pointer;}\n\nimg[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 145px;\n}\n\n\n\np[_ngcontent-%COMP%] {\nline-height: 20px;\n}\n\na[_ngcontent-%COMP%] {\n  text-align: justify;\n\n }\n\n.tieude[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #1384BC !important;\n}\n\n.chuyenmuc[_ngcontent-%COMP%] {\n  padding-bottom: 10px !important;\n    margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9ob2FudGRvbmdraGFjMDIvaG9hbnRkb25na2hhYzAyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBVSxlQUFlLENBQUM7O0FBRTFCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTs7R0FFRzs7QUFFSDtBQUNBLGlCQUFpQjtBQUNqQjs7QUFDQztFQUNDLG1CQUFtQjs7Q0FFcEI7O0FBQ0Q7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwrQkFBK0I7SUFDN0IsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYm9keS9ob2FudGRvbmdraGFjMDIvaG9hbnRkb25na2hhYzAyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9pbnRlciB7Y3Vyc29yOiBwb2ludGVyO31cblxuaW1nIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE0NXB4O1xufVxuXG4vKiBpbWc6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMnB4IDFweCByZ2JhKDAsIDE0MCwgMTg2LCAwLjUpO1xufSAqL1xuXG5wIHtcbmxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuIGEge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuXG4gfVxuLnRpZXVkZSBhOmhvdmVyIHtcbiAgY29sb3I6ICMxMzg0QkMgIWltcG9ydGFudDtcbn1cblxuLmNodXllbm11YyB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Hoantdongkhac02Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hoantdongkhac02',
                templateUrl: './hoantdongkhac02.component.html',
                styleUrls: ['./hoantdongkhac02.component.css']
            }]
    }], function () { return [{ type: src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__["CallApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/body/hoatdongkhac/hoatdongkhac.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/body/hoatdongkhac/hoatdongkhac.component.ts ***!
  \*************************************************************/
/*! exports provided: HoatdongkhacComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoatdongkhacComponent", function() { return HoatdongkhacComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/call-api.service */ "./src/services/call-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function HoatdongkhacComponent_ul_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", ctx_r68.tinMot.TinTucID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/jpeg;base64,", ctx_r68.tinMot.Avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r68.tinMot.TieuDe);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r68.tinMot.TieuDe);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r68.tinMot.TieuDe);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r68.tinMot.TieuDe, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("innerHtml", ctx_r68.tinMot.MoTa, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function HoatdongkhacComponent_ul_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0 \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thongtin_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", thongtin_r76.TinTucID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", thongtin_r76.TieuDe, " |");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](thongtin_r76.LastUpdDate);
} }
function HoatdongkhacComponent_ul_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", ctx_r70.tinMot1.TinTucID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/jpeg;base64,", ctx_r70.tinMot1.Avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r70.tinMot1.TieuDe);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r70.tinMot1.TieuDe);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r70.tinMot1.TieuDe, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("innerHtml", ctx_r70.tinMot1.MoTa, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function HoatdongkhacComponent_ul_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0 \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thongtin_r77 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", thongtin_r77.TinTucID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", thongtin_r77.TieuDe, " |");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](thongtin_r77.LastUpdDate);
} }
function HoatdongkhacComponent_ul_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", ctx_r72.tinMot2.TinTucID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/jpeg;base64,", ctx_r72.tinMot2.Avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r72.tinMot2.TieuDe);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r72.tinMot2.TieuDe);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r72.tinMot2.TieuDe, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("innerHtml", ctx_r72.tinMot2.MoTa, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function HoatdongkhacComponent_ul_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thongtin_r78 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", thongtin_r78.TinTucID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", thongtin_r78.TieuDe, " |");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](thongtin_r78.LastUpdDate);
} }
function HoatdongkhacComponent_ul_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", ctx_r74.tinMot3.TinTucID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/jpeg;base64,", ctx_r74.tinMot3.Avatar, " pointer", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r74.tinMot3.TieuDe);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r74.tinMot3.TieuDe);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r74.tinMot3.TieuDe, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("innerHtml", ctx_r74.tinMot3.MoTa, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function HoatdongkhacComponent_ul_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thongtin_r79 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", thongtin_r79.TinTucID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", thongtin_r79.TieuDe, " |");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](thongtin_r79.LastUpdDate);
} }
class HoatdongkhacComponent {
    // urlChuDe = 'TinTuc/GetList_TheLoaiTinTuc';
    constructor(callApiService, router) {
        this.callApiService = callApiService;
        this.router = router;
        this.thongtin = [];
        this.thongtin1 = [];
        this.thongtin2 = [];
        this.thongtin3 = [];
        this.url = 'TinTuc/GetList_ByTheLoai?TheLoaiTinID=9&SoLuong=4';
        this.url1 = 'TinTuc/GetList_ByTheLoai?TheLoaiTinID=10&SoLuong=4';
        this.url2 = 'TinTuc/GetList_ByTheLoai?TheLoaiTinID=11&SoLuong=4';
        this.url3 = 'TinTuc/GetList_ByTheLoai?TheLoaiTinID=12&SoLuong=4';
        this.urlGTSGT = 'Gioi-Thieu-So-Giao-Thong-Van-Tai/' + btoa('9') + '.html';
        this.urlCDVTT = 'Cac-Don-Vi-Truc-Thuoc/' + btoa('10') + '.html';
        this.urlVTHK = 'Van-Tai-Hanh-Khach-Cong-Cong/' + btoa('11') + '.html';
        this.urlCCHC = 'Cai-Cach-Hanh-Chinh/' + btoa('12') + '.html';
    }
    ngOnInit() {
        this.callApiService.getThongtin(this.url)
            .subscribe((data) => {
            // tslint:disable-next-line: only-arrow-functions
            data.forEach(function (item) {
                const thuGonTieuDe = ((item.TieuDe.length >= 65) ? item.TieuDe.substring(0, 65) + '...' : item.TieuDe.substring(0));
                item.TieuDe = thuGonTieuDe;
                const thuGonMoTa = ((item.TieuDe.length < 65) ? item.MoTa.substring(0, 150) + '...' : item.MoTa.substring(0, 135)) + '...';
                item.MoTa = thuGonMoTa;
            });
            this.tinMot = data[data.length - 1];
            this.thongtin = data;
        });
        this.callApiService.getThongtin(this.url1)
            .subscribe((data) => {
            this.thongtin1 = data;
            // tslint:disable-next-line: only-arrow-functions
            data.forEach(function (item) {
                const thuGonTieuDe = ((item.TieuDe.length >= 65) ? item.TieuDe.substring(0, 65) + '...' : item.TieuDe.substring(0));
                item.TieuDe = thuGonTieuDe;
                const thuGonMoTa = ((item.TieuDe.length < 65) ? item.MoTa.substring(0, 125) + '...' : item.MoTa.substring(0, 110)) + '...';
                item.MoTa = thuGonMoTa;
            });
            this.tinMot1 = data[data.length - 1];
            this.thongtin1 = data;
        });
        this.callApiService.getThongtin(this.url2)
            .subscribe((data) => {
            // tslint:disable-next-line: only-arrow-functions
            data.forEach(function (item) {
                const thuGonTieuDe = ((item.TieuDe.length >= 60) ? item.TieuDe.substring(0, 60) + '...' : item.TieuDe.substring(0));
                item.TieuDe = thuGonTieuDe;
                const thuGonMoTa = ((item.TieuDe.length < 60) ? item.MoTa.substring(0, 130) + '...' : item.MoTa.substring(0, 110) + '...');
                item.MoTa = thuGonMoTa;
            });
            this.tinMot2 = data[data.length - 1];
            this.thongtin2 = data;
        });
        this.callApiService.getThongtin(this.url3)
            .subscribe((data) => {
            this.thongtin3 = data;
            // tslint:disable-next-line: only-arrow-functions
            data.forEach(function (item) {
                const thuGonTieuDe = ((item.TieuDe.length >= 60) ? item.TieuDe.substring(0, 60) + '...' : item.TieuDe.substring(0));
                item.TieuDe = thuGonTieuDe;
                const thuGonMoTa = ((item.TieuDe.length < 60) ? item.MoTa.substring(0, 150) + '...' : item.MoTa.substring(0, 110)) + '...';
                item.MoTa = thuGonMoTa;
            });
            this.tinMot3 = data[data.length - 1];
            this.thongtin3 = data;
        });
        // ChuDE call api
        // this.callApiService.getChuDe(this.urlChuDe)
        // .subscribe((data: IChuDe[]) => {
        //   this.chude = data;
        // });
        // !@!#$@!#$%# end call api
        // this.http.get<IDetail>(this.url)
        //  .subscribe(ata => {
        //   this.details = data;
        //    console.log(data);
        //  this.addForm.patchValue(data);
        // })d
    }
    // onSelect(thongtin){
    //   this.router.navigate(['detail/', thongtin]);
    // }
    // selectTinTuc(thongtin: IThongtin): void {
    //   localStorage.removeItem('selectTinTucID');
    //   localStorage.setItem('selectTinTucID', thongtin.TinTucID.toString() );
    //   this.router.navigate(['detail']);
    //   window.scroll(0, 0);
    // }
    onPageDetailS(TinTucID) {
        console.log(TinTucID);
        localStorage.removeItem('TinTucID');
        localStorage.setItem('TinTucID', TinTucID.toString());
        this.router.navigate(['detail']);
        window.scroll(0, 0);
    }
}
HoatdongkhacComponent.ɵfac = function HoatdongkhacComponent_Factory(t) { return new (t || HoatdongkhacComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__["CallApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HoatdongkhacComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HoatdongkhacComponent, selectors: [["app-hoatdongkhac"]], decls: 40, vars: 12, consts: [[1, "col-sm-12", "mt-3"], [1, "sgt-danhmuctin"], [1, "row"], [1, "col-sm-12", "col-lg-6", "chuyenmuc"], [1, "sgt-danhmuctin--title", "text-primary"], [1, "text-decoration-none", "d-flex", "justify-content-between", 3, "routerLink"], [1, "d-inline-block", "pb-2", "pointer"], ["id", "xthem", 1, "text-muted", "pointer"], ["class", "list-unstyled", 3, "routerLink", 4, "ngIf"], ["class", "fa-ul mb-0 tieude", 4, "ngFor", "ngForOf"], [1, "d-inline-block", "pb-2"], [1, "text-muted"], [1, "list-unstyled", 3, "routerLink"], [1, "media"], ["onerror", "this.onerror=null;this.src='https://amerikicklanghorne.com/wp-content/uploads/2017/04/default-image.jpg';", 1, "mr-3", "pointer", 3, "src", "alt", "title"], [1, "media-body"], [1, "text-decoration-none", "pointer"], ["id", "chuDe", 1, "mt-0", "mb-0", "text-dark"], [3, "title"], [1, "text-muted", 3, "innerHtml"], [1, "fa-ul", "mb-0", "tieude"], [1, "fa-li"], [1, "fas", "fa-chevron-right", "text-danger"], [1, "text-dark", "text-decoration-none", "pointer", 3, "routerLink"], ["alt", "...", "onerror", "this.onerror=null;this.src='https://amerikicklanghorne.com/wp-content/uploads/2017/04/default-image.jpg';", 1, "mr-3", "pointer", 3, "src", "title"], ["src", "", 1, "pointer"], ["alt", "...", "onerror", "this.onerror=null;this.src='https://amerikicklanghorne.com/wp-content/uploads/2017/04/default-image.jpg';", 1, "mr-3", 3, "src", "title"]], template: function HoatdongkhacComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Gi\u1EDBi thi\u1EC7u S\u1EDF giao th\u00F4ng v\u1EADn t\u1EA3i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Xem th\u00EAm >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HoatdongkhacComponent_ul_10_Template, 9, 7, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HoatdongkhacComponent_ul_11_Template, 9, 3, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "C\u00E1c \u0111\u01A1n v\u1ECB tr\u1EF1c thu\u1ED9c");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "small", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Xem th\u00EAm >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HoatdongkhacComponent_ul_19_Template, 9, 6, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HoatdongkhacComponent_ul_20_Template, 9, 3, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "V\u1EADn t\u1EA3i h\u00E0nh kh\u00E1ch c\u00F4ng c\u1ED9ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "small", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Xem th\u00EAm >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, HoatdongkhacComponent_ul_29_Template, 9, 6, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, HoatdongkhacComponent_ul_30_Template, 9, 3, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "C\u1EA3i c\u00E1ch h\u00E0nh ch\u00EDnh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "small", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Xem th\u00EAm >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, HoatdongkhacComponent_ul_38_Template, 9, 6, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, HoatdongkhacComponent_ul_39_Template, 9, 3, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/Tin-Tuc/", ctx.urlGTSGT, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tinMot);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.thongtin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/Tin-Tuc/", ctx.urlCDVTT, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tinMot1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.thongtin1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/Tin-Tuc/", ctx.urlVTHK, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tinMot2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.thongtin2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/Tin-Tuc/", ctx.urlCCHC, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tinMot3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.thongtin3);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".pointer[_ngcontent-%COMP%] {cursor: pointer;}\n\nimg[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 145px;\n}\n\n\n\np[_ngcontent-%COMP%] {\nline-height: 20px;\n}\n\na[_ngcontent-%COMP%] {\n  text-align: justify;\n\n }\n\n.tieude[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #1384BC !important;\n}\n\n.chuyenmuc[_ngcontent-%COMP%] {\n  padding-bottom: 10px !important;\n    margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9ob2F0ZG9uZ2toYWMvaG9hdGRvbmdraGFjLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBVSxlQUFlLENBQUM7O0FBRTFCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTs7R0FFRzs7QUFFSDtBQUNBLGlCQUFpQjtBQUNqQjs7QUFDQztFQUNDLG1CQUFtQjs7Q0FFcEI7O0FBQ0Q7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwrQkFBK0I7SUFDN0IsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYm9keS9ob2F0ZG9uZ2toYWMvaG9hdGRvbmdraGFjLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9pbnRlciB7Y3Vyc29yOiBwb2ludGVyO31cblxuaW1nIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE0NXB4O1xufVxuXG4vKiBpbWc6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMnB4IDFweCByZ2JhKDAsIDE0MCwgMTg2LCAwLjUpO1xufSAqL1xuXG5wIHtcbmxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuIGEge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuXG4gfVxuLnRpZXVkZSBhOmhvdmVyIHtcbiAgY29sb3I6ICMxMzg0QkMgIWltcG9ydGFudDtcbn1cblxuLmNodXllbm11YyB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HoatdongkhacComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hoatdongkhac',
                templateUrl: './hoatdongkhac.component.html',
                styleUrls: ['./hoatdongkhac.component.css']
            }]
    }], function () { return [{ type: src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__["CallApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/body/ht-van-ban/ht-van-ban.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/body/ht-van-ban/ht-van-ban.component.ts ***!
  \*********************************************************/
/*! exports provided: HtVanBanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtVanBanComponent", function() { return HtVanBanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HtVanBanComponent {
    constructor() {
    }
    ngOnInit() {
    }
    onSelect() {
        alert('Chức năng đang hoàn thiện !!!');
    }
}
HtVanBanComponent.ɵfac = function HtVanBanComponent_Factory(t) { return new (t || HtVanBanComponent)(); };
HtVanBanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HtVanBanComponent, selectors: [["app-ht-van-ban"]], decls: 43, vars: 0, consts: [[1, "sgt-danhmuctin--title"], [1, "text-decoration-none", "d-flex", "justify-content-between", "pointer\u00E7", 3, "click"], [1, "d-inline-block", "pb-2", "text-dark", "pointer"], [1, "form-group"], ["id", "pills-tinnoibat", "role", "tabpanel", "aria-labelledby", "pills-tinnoibat-tab", 1, "tab-pane", "fade", "show", "active", "pointer"], [1, "fa-ul", "mb-0", 3, "click"], [1, "fa-li"], [1, "fas", "fa-chevron-right"], [1, "text-dark", "text-decoration-none"], [1, "my-2"]], template: function HtVanBanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HtVanBanComponent_Template_a_click_1_listener() { return ctx.onSelect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "H\u1EC6 TH\u1ED0NG DANH M\u1EE4C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HtVanBanComponent_Template_ul_click_7_listener() { return ctx.onSelect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "V\u0103n b\u1EA3n ph\u1EA1m Quy ph\u00E1p lu\u1EADt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "V\u0103n b\u1EA3n ch\u1EC9 \u0111\u1EA1o \u0111i\u1EC1u h\u00E0nh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "B\u00E1o c\u00E1o t\u00ECnh h\u00ECnh KT-XH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "B\u00E1o c\u00E1o chuy\u00EAn \u0111\u1EC1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "G\u00F3p \u00FD d\u1EF1 th\u1EA3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "T\u00E0i li\u1EC7u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvaHQtdmFuLWJhbi9odC12YW4tYmFuLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HtVanBanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ht-van-ban',
                templateUrl: './ht-van-ban.component.html',
                styleUrls: ['./ht-van-ban.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/body/kehoach/kehoach.component.ts":
/*!***************************************************!*\
  !*** ./src/app/body/kehoach/kehoach.component.ts ***!
  \***************************************************/
/*! exports provided: KehoachComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KehoachComponent", function() { return KehoachComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/call-api.service */ "./src/services/call-api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function KehoachComponent_ul_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r63.TenDayDu);
} }
class KehoachComponent {
    constructor(callApiService, http, activeRouter, router) {
        this.callApiService = callApiService;
        this.http = http;
        this.activeRouter = activeRouter;
        this.router = router;
        this.url = 'DuAnDauTu/GetListLoaiDuAn?ParentID=18';
        this.callApiService.getDauTu(this.url)
            .subscribe((data) => {
            this.dautuList = data;
            window.scroll(0, 0);
        });
    }
    ngOnInit() {
    }
    onPageDetailS(ID) {
        localStorage.removeItem('ID');
        localStorage.setItem('ID', ID.toString());
        this.router.navigate(['dauTuPhatTrien']);
        window.scroll(0, 0);
    }
    goToTop() {
        goUp();
    }
}
KehoachComponent.ɵfac = function KehoachComponent_Factory(t) { return new (t || KehoachComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__["CallApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
KehoachComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KehoachComponent, selectors: [["app-kehoach"]], decls: 8, vars: 1, consts: [[1, "sgt-danhmuctin--title"], ["routerLink", "#", 1, "text-decoration-none", "d-flex", "justify-content-between"], [1, "d-inline-block", "pb-2", "text-dark"], [1, "form-group"], ["id", "pills-tinnoibat", "role", "tabpanel", "aria-labelledby", "pills-tinnoibat-tab", 1, "tab-pane", "fade", "show", "active"], ["class", "fa-ul mb-0", 4, "ngFor", "ngForOf"], [1, "fa-ul", "mb-0"], [1, "pointer"], [1, "fa-li"], [1, "fas", "fa-chevron-right"], ["routerLink", "/dauTuPhatTrien", 1, "text-dark", "text-decoration-none"], [1, "my-2"]], template: function KehoachComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "K\u1EBE HO\u1EA0CH D\u1EF0 \u00C1N H\u1EA0NG M\u1EE4C \u0110\u1EA6U T\u01AF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, KehoachComponent_ul_7_Template, 7, 1, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dautuList);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvZHkva2Vob2FjaC9rZWhvYWNoLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KehoachComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-kehoach',
                templateUrl: './kehoach.component.html',
                styleUrls: ['./kehoach.component.css']
            }]
    }], function () { return [{ type: src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__["CallApiService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/body/lichlam/lichlam.component.ts":
/*!***************************************************!*\
  !*** ./src/app/body/lichlam/lichlam.component.ts ***!
  \***************************************************/
/*! exports provided: LichlamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichlamComponent", function() { return LichlamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LichlamComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
LichlamComponent.ɵfac = function LichlamComponent_Factory(t) { return new (t || LichlamComponent)(); };
LichlamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LichlamComponent, selectors: [["app-lichlam"]], decls: 5, vars: 0, consts: [[1, "sgt-danhmuctin--title"], ["href", "#", 1, "text-decoration-none", "d-flex", "justify-content-between"], [1, "d-inline-block", "pb-2", "text-dark"]], template: function LichlamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "L\u1ECACH L\u00C0M VI\u1EC6C H\u0110ND - UBND");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "form");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvbGljaGxhbS9saWNobGFtLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LichlamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lichlam',
                templateUrl: './lichlam.component.html',
                styleUrls: ['./lichlam.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/body/link-website/link-website.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/body/link-website/link-website.component.ts ***!
  \*************************************************************/
/*! exports provided: LinkWebsiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkWebsiteComponent", function() { return LinkWebsiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/call-api.service */ "./src/services/call-api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function LinkWebsiteComponent_div_5_div_3_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r55.UrlLienKet);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r55.TieuDe);
} }
function LinkWebsiteComponent_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LinkWebsiteComponent_div_5_div_3_Template_select_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r56.changeSelect($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "--Ch\u1ECDn web s\u1EDF ng\u00E0nh--");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LinkWebsiteComponent_div_5_div_3_option_4_Template, 2, 2, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r52.lienket);
} }
function LinkWebsiteComponent_div_5_div_4_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r59.UrlLienKet);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r59.TieuDe);
} }
function LinkWebsiteComponent_div_5_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LinkWebsiteComponent_div_5_div_4_Template_select_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r60.changeSelect($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "--Ch\u1ECDn web qu\u1EADn, huy\u1EC7n--");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LinkWebsiteComponent_div_5_div_4_option_4_Template, 2, 2, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r53.lienket2);
} }
function LinkWebsiteComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LinkWebsiteComponent_div_5_div_3_Template, 5, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LinkWebsiteComponent_div_5_div_4_Template, 5, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r51.TenDayDu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", link_r51.ID == 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", link_r51.ID == 26);
} }
class LinkWebsiteComponent {
    constructor(callApiService, http, router, activeRouter) {
        this.callApiService = callApiService;
        this.http = http;
        this.router = router;
        this.activeRouter = activeRouter;
        this.linked = [];
        this.lienket = [];
        this.lienket2 = [];
        this.kieuTrungGian = [];
        this.url = 'LienKet/GetListLoaiLienKet?ParentID=20';
        this.urlLienKet = 'LienKet/GetListLienKet?PortalID=0&LoaiLienKetID=25';
        this.urlLienKet2 = 'LienKet/GetListLienKet?PortalID=0&LoaiLienKetID=26';
    }
    ngOnInit() {
        // // tslint:disable-next-line: variable-name
        // let _kieuTrungGian: ITrungGian = null;
        // _kieuTrungGian.loai = 'fgdgf';
        // this.callApiService.getLinked(this.url)
        // .subscribe((data: ILinked[]) => {
        //   data.forEach(function(item) {
        //     alert(_kieuTrungGian.loai);
        //     this.callApiService.getLinked(this.urlLienKet + item.ID)
        //     // tslint:disable-next-line: no-shadowed-variable
        //     .subscribe((data1: ILinked[]) => {
        //       _kieuTrungGian.listUrl = data1;
        //     });
        //   });
        //   this.kieuTrungGian.push(_kieuTrungGian);
        // });
        this.callApiService.getLinked(this.url)
            .subscribe((data) => {
            this.linked = data;
        });
        this.callApiService.getLinked(this.urlLienKet)
            .subscribe((data) => {
            this.lienket = data;
        });
        this.callApiService.getLinked(this.urlLienKet2)
            .subscribe((data) => {
            this.lienket2 = data;
        });
    }
    changeSelect(url) {
        window.open(url, '_blank');
    }
}
LinkWebsiteComponent.ɵfac = function LinkWebsiteComponent_Factory(t) { return new (t || LinkWebsiteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__["CallApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
LinkWebsiteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LinkWebsiteComponent, selectors: [["app-link-website"]], decls: 6, vars: 1, consts: [[1, "sgt-danhmuctin--title"], ["href", "#", 1, "text-decoration-none", "d-flex", "justify-content-between"], [1, "d-inline-block", "pb-2", "text-dark"], ["class", "form-group", 4, "ngFor", "ngForOf"], [1, "form-group"], ["for", "inputState"], [4, "ngIf"], ["id", "inputState", 1, "form-control", 3, "change"], ["selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function LinkWebsiteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "LI\u00CAN K\u1EBET WEBSITE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LinkWebsiteComponent_div_5_Template, 5, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.linked);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvbGluay13ZWJzaXRlL2xpbmstd2Vic2l0ZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinkWebsiteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-link-website',
                templateUrl: './link-website.component.html',
                styleUrls: ['./link-website.component.css']
            }]
    }], function () { return [{ type: src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__["CallApiService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/body/map-top/map-top.component.ts":
/*!***************************************************!*\
  !*** ./src/app/body/map-top/map-top.component.ts ***!
  \***************************************************/
/*! exports provided: MapTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTopComponent", function() { return MapTopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MapTopComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
MapTopComponent.ɵfac = function MapTopComponent_Factory(t) { return new (t || MapTopComponent)(); };
MapTopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapTopComponent, selectors: [["app-map-top"]], decls: 28, vars: 0, consts: [[1, "sgt-danhmuctin--title"], ["href", "#", 1, "text-decoration-none", "d-flex", "justify-content-between"], [1, "d-inline-block", "pb-2", "text-dark"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-hinhanh", "role", "tabpanel", "aria-labelledby", "pills-hinhanh-tab", 1, "tab-pane", "fade", "show", "active"], ["id", "gallery", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "assets/images/ban-do-dien-tich-cac-quan-tphcm-full-hd.jpg", "alt", "...", 1, "d-block", "w-100", "img-thumbnail"], [1, "carousel-item"], ["src", "assets/images/ban-do-quy-hoach-tphcm-full-hd.jpg", "alt", "...", 1, "d-block", "w-100", "img-thumbnail"], ["src", "assets/images/ban-do-quan-1-tphcm-full-hd.jpg", "alt", "...", 1, "d-block", "w-100", "img-thumbnail"], ["src", "assets/images/ban-do-quan-2-tphcm-map-full-hd.jpg", "alt", "...", 1, "d-block", "w-100", "img-thumbnail"], ["src", "assets/images/ban-do-quan-3-tphcm-full-hd.jpg", "alt", "...", 1, "d-block", "w-100", "img-thumbnail"], ["src", "assets/images/ban-do-quan-4-tphcm-map-full-hd.jpg", "alt", "...", 1, "d-block", "w-100", "img-thumbnail"], ["src", "assets/images/ban-do-quan-5-tphcm-full-hd.jpg", "alt", "...", 1, "d-block", "w-100", "img-thumbnail"], ["src", "assets/images/ban-do-quan-6-tphcm-map-full-hd.jpg", "alt", "...", 1, "d-block", "w-100", "img-thumbnail"], ["src", "assets/images/ban-do-quan-7-tphcm-full-hd.jpg", "alt", "...", 1, "d-block", "w-100", "img-thumbnail"], ["src", "assets/images/ban-do-quan-10-tphcm-map-full-hd.jpg", "alt", "...", 1, "d-block", "w-100", "img-thumbnail"]], template: function MapTopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "B\u1EA2N \u0110\u1ED2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["img[_ngcontent-%COMP%] {\n  display: block;\n  max-width:500px;\n  max-height:250px;\n  width: auto;\n  height: auto;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9tYXAtdG9wL21hcC10b3AuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFpQjtLQUFqQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9ib2R5L21hcC10b3AvbWFwLXRvcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOjUwMHB4O1xuICBtYXgtaGVpZ2h0OjI1MHB4O1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapTopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map-top',
                templateUrl: './map-top.component.html',
                styleUrls: ['./map-top.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/body/media/media.component.ts":
/*!***********************************************!*\
  !*** ./src/app/body/media/media.component.ts ***!
  \***********************************************/
/*! exports provided: MediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaComponent", function() { return MediaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/call-api.service */ "./src/services/call-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function MediaComponent_div_12_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const media_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/mediaDetail/", media_r43.MediaID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/jpeg;base64,", media_r43.Thumbnail, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](media_r43.TenMedia);
} }
function MediaComponent_div_12_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const media_r43 = ctx_r48.$implicit;
    const i_r44 = ctx_r48.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/mediaDetail/", media_r43.MediaID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/jpeg;base64,", media_r43.Thumbnail, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", media_r43.TenMedia, " ", i_r44, "");
} }
function MediaComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MediaComponent_div_12_div_1_div_1_Template, 7, 3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MediaComponent_div_12_div_1_div_2_Template, 7, 4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r44 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r44 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r44 != 0);
} }
function MediaComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MediaComponent_div_12_div_1_Template, 3, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r38.mediass);
} }
function MediaComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MediaComponent {
    constructor(callApiService, activeRouter) {
        this.callApiService = callApiService;
        this.activeRouter = activeRouter;
        this.url = 'Media/GetListImage?TheLoaiTinID=21&SoLuong=3&PortalID=0';
        this.urlVideo = 'Media/GetListImage?TheLoaiTinID=22&SoLuong=5&PortalID=0';
    }
    ngOnInit() {
        // this.callApiService.getMedia(this.url)
        // .subscribe((data: IMedia[]) => {
        //   this.media = data;
        //   console.log(data);
        // });
        const empid = this.activeRouter.snapshot.params.MediaID;
        this.callApiService.getMedia(this.url + empid)
            .subscribe((data) => {
            // SlideImagecarousel(data);
            this.mediass = data;
        });
        // carousel();
        const empidd = this.activeRouter.snapshot.params.MediaID;
        this.callApiService.getMedia(this.urlVideo + empidd)
            .subscribe((data) => {
            this.mediass = data;
        });
        // carousel();
    }
}
MediaComponent.ɵfac = function MediaComponent_Factory(t) { return new (t || MediaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__["CallApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
MediaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MediaComponent, selectors: [["app-media"]], decls: 29, vars: 2, consts: [["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills", "mb-3", "sgt-tabmodule"], [1, "nav-item"], ["id", "pills-hinhanh-tab", "data-toggle", "pill", "href", "#pills-hinhanh", "role", "tab", "aria-controls", "pills-hinhanh", "aria-selected", "true", 1, "nav-link", "active"], ["id", "pills-video-tab", "data-toggle", "pill", "href", "#pills-video", "role", "tab", "aria-controls", "pills-video", "aria-selected", "false", 1, "nav-link"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-hinhanh", "role", "tabpanel", "aria-labelledby", "pills-hinhanh-tab", 1, "tab-pane", "fade", "show", "active"], ["id", "gallery", "data-ride", "carousel", 1, "carousel", "slide"], ["class", "carousel-inner", 4, "ngFor", "ngForOf"], ["id", "xthem", "routerLink", "/MediaList", 1, "text-muted", "pointer"], ["href", "#gallery", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], ["href", "#gallery", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], ["id", "pills-video", "role", "tabpanel", "aria-labelledby", "pills-video-tab", 1, "tab-pane", "fade"], ["id", "video", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], ["class", "carousel-item active", 4, "ngFor", "ngForOf"], ["href", "#video", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["href", "#video", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["id", "xthem", "routerLink", "/404", 1, "text-muted", "pointer"], [4, "ngFor", "ngForOf"], ["class", "carousel-item active pointer", 3, "routerLink", 4, "ngIf"], ["class", "carousel-item pointer", 3, "routerLink", 4, "ngIf"], [1, "carousel-item", "active", "pointer", 3, "routerLink"], ["alt", "...", 1, "d-block", "w-100", 3, "src"], [1, "card-img-overlay", "p-0", "d-flex", "justify-content-end", "align-items-end"], [1, "bg-dark", "py-2", "px-3", "w-100", "text-decoration-none", "text-white"], [1, "card-text", "mb-1"], [1, "carousel-item", "pointer", 3, "routerLink"], [1, "carousel-item", "active"], ["src", "data:image/jpeg;base64,", "alt", "...", 1, "d-block", "w-100"]], template: function MediaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "H\u00CCNH \u1EA2NH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "VIDEO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MediaComponent_div_12_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Xem th\u00EAm >>>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, MediaComponent_div_22_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "small", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Xem th\u00EAm >>>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mediass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.videoHD);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["#xthem[_ngcontent-%COMP%] {\n  margin-left: 260px;\n  font-style: italic ;\n}\n\n#xthem[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.chunho[_ngcontent-%COMP%] {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9tZWRpYS9tZWRpYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFHQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2JvZHkvbWVkaWEvbWVkaWEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN4dGhlbSB7XG4gIG1hcmdpbi1sZWZ0OiAyNjBweDtcbiAgZm9udC1zdHlsZTogaXRhbGljIDtcbn1cblxuI3h0aGVtOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cblxuLmNodW5obyB7XG4gIGZsb2F0OiByaWdodDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-media',
                templateUrl: './media.component.html',
                styleUrls: ['./media.component.css']
            }]
    }], function () { return [{ type: src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__["CallApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/body/mot-cua-dien-tu/mot-cua-dien-tu.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/body/mot-cua-dien-tu/mot-cua-dien-tu.component.ts ***!
  \*******************************************************************/
/*! exports provided: MotCuaDienTuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotCuaDienTuComponent", function() { return MotCuaDienTuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MotCuaDienTuComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
MotCuaDienTuComponent.ɵfac = function MotCuaDienTuComponent_Factory(t) { return new (t || MotCuaDienTuComponent)(); };
MotCuaDienTuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MotCuaDienTuComponent, selectors: [["app-mot-cua-dien-tu"]], decls: 3, vars: 0, consts: [[1, "lv-Motcua-title", 2, "text-align", "center"], ["name", "I1", "id", "I1", "src", "https://dichvucong.hochiminhcity.gov.vn/icloudgate/version4/ps/page/bs/statistic/report-frame-unit.cpx?firm=25.98.H29", "marginwidth", "0", "marginheight", "0", "scrolling", "no", "width", "170", "height", "255", "frameborder", "0"]], template: function MotCuaDienTuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvbW90LWN1YS1kaWVuLXR1L21vdC1jdWEtZGllbi10dS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MotCuaDienTuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mot-cua-dien-tu',
                templateUrl: './mot-cua-dien-tu.component.html',
                styleUrls: ['./mot-cua-dien-tu.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/body/news/news.component.ts":
/*!*********************************************!*\
  !*** ./src/app/body/news/news.component.ts ***!
  \*********************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/call-api.service */ "./src/services/call-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function NewsComponent_ul_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thongtin_r95 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", thongtin_r95.TinTucID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](thongtin_r95.TieuDe);
} }
function NewsComponent_ul_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thongtin_r96 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", thongtin_r96.TinTucID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](thongtin_r96.TieuDe);
} }
function NewsComponent_ul_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thongtin_r97 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", thongtin_r97.TinTucID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](thongtin_r97.TieuDe);
} }
class NewsComponent {
    constructor(callApiService, router) {
        this.callApiService = callApiService;
        this.router = router;
        this.check = 0;
        this.check2 = 0;
        this.tinMoi = [];
        this.tinNoiBat = [];
        this.tinXemNhieu = [];
        this.url = 'TinTuc/TinNoiBat?PortalID=0&SoLuong=4';
        this.url2 = 'TinTuc/TinMoiNhat?PortalID=0&SoLuong=4';
        this.url3 = 'TinTuc/TinXemNhieu?PortalID=0&SoLuong=4';
    }
    ngOnInit() {
        this.callApiService.getThongtin(this.url)
            .subscribe((data) => {
            this.tinNoiBat = data;
        });
        this.callApiService.getThongtin(this.url2)
            .subscribe((data) => {
            this.tinMoi = data;
        });
        this.callApiService.getThongtin(this.url3)
            .subscribe((data) => {
            this.tinXemNhieu = data;
        });
    }
    //   onSelect(thongtin) {
    //     this.router.navigate(['detail/', thongtin]);
    //   }
    //   onLoadingTinMoi() {
    //     if (this.check === 0) {
    //       this.check = 1;
    //       this.callApiService.getThongtin(this.url2)
    //       .subscribe((data: IThongtin[]) => {
    //         this.tinMoi = data;
    //       });
    //     }
    //   }
    //   onLoadingXemNhieuNhat() {
    //     if (this.check2 === 0) {
    //       this.check2 = 1;
    //       this.callApiService.getThongtin(this.url3)
    //     .subscribe((data: IThongtin[]) => {
    //       this.tinXemNhieu = data;
    //     });
    //   }
    // }
    // selectTinTuc(thongtin: IThongtin): void {
    //   localStorage.removeItem('selectTinTucID');
    //   localStorage.setItem('selectTinTucID', thongtin.TinTucID.toString() );
    //   this.router.navigate(['detail']);
    //   window.scroll(0, 0);
    // }
    onPageDetailS(TinTucID) {
        localStorage.removeItem('TinTucID');
        localStorage.setItem('TinTucID', TinTucID.toString());
        this.router.navigate(['detail']);
        window.scroll(0, 0);
    }
}
NewsComponent.ɵfac = function NewsComponent_Factory(t) { return new (t || NewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__["CallApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsComponent, selectors: [["app-news"]], decls: 51, vars: 3, consts: [[1, "col-sm-12", "col-lg-6", "mt-2", "mt-lg-0"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-hinhanh", "role", "tabpanel", "aria-labelledby", "pills-hinhanh-tab", 1, "tab-pane", "fade", "show", "active"], ["id", "gallery", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "https://image.thanhnien.vn/660/uploaded/maithu/2020_03_14/nguoidandeokhautrangphongdichtaisanbaytsn-doclap21_stes_nctg.jpg", "alt", "...", 1, "d-block", "w-100"], [1, "card-img-overlay", "p-0", "d-flex", "justify-content-end", "align-items-end"], ["href", "https://thanhnien.vn/thoi-su/hang-nghin-viet-kieu-hoi-huong-vi-dich-covid-19-1197629.html", 1, "bg-dark", "py-2", "px-3", "w-100", "text-decoration-none", "text-white"], [1, "card-text", "mb-1"], [1, "card-title", "mb-0"], [1, "carousel-item"], ["src", "https://image.thanhnien.vn/660/uploaded/minhnguyet/2020_03_17/may-khau-trang1_yatc.jpg", "alt", "...", 1, "d-block", "w-100"], ["href", "https://thanhnien.vn/gioi-tre/may-khau-trang-y-te-phong-dich-covid-19-1197355.html", 1, "bg-dark", "py-2", "px-3", "w-100", "text-decoration-none", "text-white"], ["src", "https://image.thanhnien.vn/660/uploaded/hanvt/2020_03_18/anh7_lvxz.jpg", "alt", "...", 1, "d-block", "w-100"], ["href", "https://thanhnien.vn/thoi-su/benh-nhan-covid-19-thu-68-la-nguoi-my-song-tai-da-nang-vua-ve-tu-singapore-1197690.html", 1, "bg-dark", "py-2", "px-3", "w-100", "text-decoration-none", "text-white"], ["href", "#gallery", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], ["href", "#gallery", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "col-sm-12", "col-lg-6"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills", "mb-3", "sgt-tabtin", "d-flex", "flex-nowrap"], [1, "nav-item"], ["id", "pills-tinnoibat-tab", "data-toggle", "pill", "href", "#pills-tinnoibat", "role", "tab", "aria-controls", "pills-tinnoibat", "aria-selected", "true", 1, "nav-link", "active", "py-1", "px-2", "text-nowrap"], ["id", "pills-tinmoi-tab", "data-toggle", "pill", "href", "#pills-tinmoi", "role", "tab", "aria-controls", "pills-tinmoi", "aria-selected", "false", 1, "nav-link", "py-1", "px-2", "text-nowrap"], ["id", "pills-tindocnhieunhat-tab", "data-toggle", "pill", "href", "#pills-tindocnhieunhat", "role", "tab", "aria-controls", "pills-tindocnhieunhat", "aria-selected", "false", 1, "nav-link", "py-1", "px-2", "text-nowrap"], ["id", "pills-tabContent", 1, "tab-content", "sgt-tabtin-content", "p-1"], ["id", "pills-tinnoibat", "role", "tabpanel", "aria-labelledby", "pills-tinnoibat-tab", 1, "tab-pane", "fade", "show", "active"], ["class", "fa-ul mb-0", 4, "ngFor", "ngForOf"], ["id", "pills-tinmoi", "role", "tabpanel", "aria-labelledby", "pills-tinmoi-tab", 1, "tab-pane", "fade"], ["id", "pills-tindocnhieunhat", "role", "tabpanel", "aria-labelledby", "pills-tindocnhieunhat-tab", 1, "tab-pane", "fade"], [1, "fa-ul", "mb-0"], [1, "fa-li"], [1, "fas", "fa-chevron-right", "text-danger"], [1, "text-dark", "text-decoration-none", "pointer", 3, "routerLink"]], template: function NewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " H\u00E0ng ngh\u00ECn Vi\u1EC7t ki\u1EC1u h\u1ED3i h\u01B0\u01A1ng v\u00EC d\u1ECBch Covid-19 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " May kh\u1EA9u trang y t\u1EBF ph\u00F2ng d\u1ECBch Covid-19 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " B\u1EC7nh nh\u00E2n Covid-19 th\u1EE9 68 l\u00E0 ng\u01B0\u1EDDi M\u1EF9 s\u1ED1ng t\u1EA1i \u0110\u00E0 N\u1EB5ng, v\u1EEBa v\u1EC1 t\u1EEB Singapore ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Tin n\u1ED5i b\u1EADt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Tin m\u1EDBi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Xem nhi\u1EC1u nh\u1EA5t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, NewsComponent_ul_46_Template, 6, 2, "ul", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, NewsComponent_ul_48_Template, 6, 2, "ul", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, NewsComponent_ul_50_Template, 6, 2, "ul", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tinNoiBat);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tinMoi);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tinXemNhieu);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".card-img-overlay[_ngcontent-%COMP%]{\n  opacity: 90%;\n}\n\nimg[_ngcontent-%COMP%] {\n  display: block;\n  max-width:400px;\n  max-height:300px;\n  width: auto;\n  height: auto;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9uZXdzL25ld3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQWlCO0tBQWpCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvbmV3cy9uZXdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1pbWctb3ZlcmxheXtcbiAgb3BhY2l0eTogOTAlO1xufVxuXG5pbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOjQwMHB4O1xuICBtYXgtaGVpZ2h0OjMwMHB4O1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-news',
                templateUrl: './news.component.html',
                styleUrls: ['./news.component.css']
            }]
    }], function () { return [{ type: src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__["CallApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/body/promotions/promotion01/promotion01.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/body/promotions/promotion01/promotion01.component.ts ***!
  \**********************************************************************/
/*! exports provided: Promotion01Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Promotion01Component", function() { return Promotion01Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/call-api.service */ "./src/services/call-api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function Promotion01Component_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const promo_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", promo_r65.UrlLienKet, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/jpeg;base64,", promo_r65.Image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class Promotion01Component {
    constructor(callApiService, http, router, activeRouter) {
        this.callApiService = callApiService;
        this.http = http;
        this.router = router;
        this.activeRouter = activeRouter;
        this.promo = [];
        this.url = 'LienKet/GetListTieuDiem?PortalID=0';
    }
    ngOnInit() {
        this.callApiService.getDichVu(this.url)
            .subscribe((data) => {
            // tslint:disable-next-line: prefer-const
            let dichvu1 = [];
            // tslint:disable-next-line: only-arrow-functions
            data.forEach(function (item) {
                if (item.ViTri === 1) {
                    dichvu1.push(item);
                }
            });
            this.promo = dichvu1;
        });
    }
}
Promotion01Component.ɵfac = function Promotion01Component_Factory(t) { return new (t || Promotion01Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__["CallApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
Promotion01Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Promotion01Component, selectors: [["app-promotion01"]], decls: 2, vars: 1, consts: [[1, "col-sm-12", "mt-3"], [3, "href", 4, "ngFor", "ngForOf"], [3, "href"], ["alt", "image-3", 1, "w-100", "img-thumbnail", 3, "src"]], template: function Promotion01Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Promotion01Component_a_1_Template, 2, 2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.promo);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvcHJvbW90aW9ucy9wcm9tb3Rpb24wMS9wcm9tb3Rpb24wMS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Promotion01Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-promotion01',
                templateUrl: './promotion01.component.html',
                styleUrls: ['./promotion01.component.css']
            }]
    }], function () { return [{ type: src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__["CallApiService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/body/promotions/promotion02/promotion02.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/body/promotions/promotion02/promotion02.component.ts ***!
  \**********************************************************************/
/*! exports provided: Promotion02Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Promotion02Component", function() { return Promotion02Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/call-api.service */ "./src/services/call-api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function Promotion02Component_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const promo_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", promo_r67.UrlLienKet, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/jpeg;base64,", promo_r67.Image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class Promotion02Component {
    constructor(callApiService, http, router) {
        this.callApiService = callApiService;
        this.http = http;
        this.router = router;
        this.promo = [];
        this.url = 'LienKet/GetListTieuDiem?PortalID=0';
    }
    ngOnInit() {
        this.callApiService.getDichVu(this.url)
            .subscribe((data) => {
            // tslint:disable-next-line: prefer-const
            let dichvu2 = [];
            // tslint:disable-next-line: only-arrow-functions
            data.forEach(function (item) {
                if (item.ViTri === 2) {
                    dichvu2.push(item);
                }
            });
            this.promo = dichvu2;
        });
    }
}
Promotion02Component.ɵfac = function Promotion02Component_Factory(t) { return new (t || Promotion02Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__["CallApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
Promotion02Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Promotion02Component, selectors: [["app-promotion02"]], decls: 2, vars: 1, consts: [[1, "col-sm-12", "mt-3"], [3, "href", 4, "ngFor", "ngForOf"], [3, "href"], ["alt", "image-3", 1, "w-100", "img-thumbnail", 3, "src"]], template: function Promotion02Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Promotion02Component_a_1_Template, 2, 2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.promo);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvcHJvbW90aW9ucy9wcm9tb3Rpb24wMi9wcm9tb3Rpb24wMi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Promotion02Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-promotion02',
                templateUrl: './promotion02.component.html',
                styleUrls: ['./promotion02.component.css']
            }]
    }], function () { return [{ type: src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__["CallApiService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/body/thong-ke/thong-ke.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/body/thong-ke/thong-ke.component.ts ***!
  \*****************************************************/
/*! exports provided: ThongKeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongKeComponent", function() { return ThongKeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ThongKeComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ThongKeComponent.ɵfac = function ThongKeComponent_Factory(t) { return new (t || ThongKeComponent)(); };
ThongKeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThongKeComponent, selectors: [["app-thong-ke"]], decls: 24, vars: 0, consts: [[1, "sgt-danhmuctin--title"], ["href", "#", 1, "text-decoration-none", "d-flex", "justify-content-between"], [1, "d-inline-block", "pb-2", "text-dark"], [1, "d-flex", "justify-content-between"], [1, "text-primary"]], template: function ThongKeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "TH\u1ED0NG K\u00CA TRUY C\u1EACP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "H\u00F4m nay:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "879");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Tu\u1EA7n n\u00E0y:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "1706");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Th\u00E1ng n\u00E0y:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "2939");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "T\u1ED5ng truy c\u1EADp:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "292804");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["p[_ngcontent-%COMP%] {\n  margin-bottom: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS90aG9uZy1rZS90aG9uZy1rZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYm9keS90aG9uZy1rZS90aG9uZy1rZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThongKeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-thong-ke',
                templateUrl: './thong-ke.component.html',
                styleUrls: ['./thong-ke.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/detailPages/detail-media/detail-media.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/detailPages/detail-media/detail-media.component.ts ***!
  \********************************************************************/
/*! exports provided: DetailMediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailMediaComponent", function() { return DetailMediaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/call-api.service */ "./src/services/call-api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _detailpage_tin_tuc_tin_tuc_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../detailpage/tin-tuc/tin-tuc.component */ "./src/app/detailPages/detailpage/tin-tuc/tin-tuc.component.ts");
/* harmony import */ var _body_dich_vu_dich_vu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../body/dich-vu/dich-vu.component */ "./src/app/body/dich-vu/dich-vu.component.ts");
/* harmony import */ var _body_media_media_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../body/media/media.component */ "./src/app/body/media/media.component.ts");
/* harmony import */ var _body_thong_ke_thong_ke_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../body/thong-ke/thong-ke.component */ "./src/app/body/thong-ke/thong-ke.component.ts");
/* harmony import */ var _body_promotions_promotion02_promotion02_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../body/promotions/promotion02/promotion02.component */ "./src/app/body/promotions/promotion02/promotion02.component.ts");











function DetailMediaComponent_div_3_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tinlq_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "detail/", tinlq_r8.TinTucID, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/jpeg;base64,", tinlq_r8.Avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tinlq_r8.TieuDe);
} }
function DetailMediaComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailMediaComponent_div_3_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.inBai(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "In b\u00E0i vi\u1EBFt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailMediaComponent_div_3_Template_i_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.inBai(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0110\u1ED9 t\u01B0\u01A1ng ph\u1EA3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailMediaComponent_div_3_Template_a_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.giamPhanQuang(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailMediaComponent_div_3_Template_a_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.tangPhanQuang(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Font ch\u1EEF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailMediaComponent_div_3_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.tangSize(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailMediaComponent_div_3_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.giamSize(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "b", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "S\u01B0u t\u1EA7m");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h6", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "b", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "TIN LI\u00CAN QUAN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, DetailMediaComponent_div_3_div_53_Template, 6, 3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "app-promotion02");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.detailMedia.TenMedia);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("innerHtml", ctx_r6.detailMedia.LastUpdDate, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", ctx_r6.detailMedia.Views, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("innerHtml", ctx_r6.detailMedia.MoTa, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/jpeg;base64,", ctx_r6.detailMedia.Avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("innerHtml", ctx_r6.detailMedia.MoTa, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("innerHtml", ctx_r6.detailMedia.MediaContent, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.tinLienQuan);
} }
class DetailMediaComponent {
    constructor(callApiService, http, router, render, activeRouter) {
        this.callApiService = callApiService;
        this.http = http;
        this.router = router;
        this.render = render;
        this.activeRouter = activeRouter;
        this.url = 'Media/GetMediaDetails?MediaID=';
        this.url2 = 'TinTuc/TinLienQuan?TinTucID=1&SoLuong=5';
    }
    ngOnInit() {
        const empid = this.activeRouter.snapshot.params.MediaID;
        this.callApiService.getMediaDetail(this.url + empid)
            .subscribe((data) => {
            this.detailMedia = data;
            window.scroll(0, 0);
        });
        this.callApiService.getTinLienQuan(this.url2)
            .subscribe((data) => {
            //   // tslint:disable-next-line: only-arrow-functions
            // data.forEach(function(item) {
            // const thuGonTieuDe = ((item.TieuDe.length >= 65) ? item.TieuDe.substring(0, 65) + '...' : item.TieuDe.substring(0));
            // item.TieuDe = thuGonTieuDe ;
            // this.tinLienQuan.TieuDe = data[data.length - 1];
            this.tinLienQuan = data;
        });
        // });
    }
    tangPhanQuang() {
        DecreaseContrast();
    }
    giamPhanQuang() {
        IncreaseContrast();
    }
    tangSize() {
        tangFormChu();
    }
    giamSize() {
        giamFormChu();
    }
    inBai() {
        PrintElem('#printContent');
    }
}
DetailMediaComponent.ɵfac = function DetailMediaComponent_Factory(t) { return new (t || DetailMediaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__["CallApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
DetailMediaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailMediaComponent, selectors: [["app-detail-media"]], decls: 12, vars: 1, consts: [["id", "content-news-info", 1, "row", "news-info"], ["id", "printContent", 1, "col-sm-8"], [1, "row"], ["class", "col-md-12 ", 4, "ngIf"], [1, "col-sm-4"], [1, "mt-4"], [1, "col-md-12"], [1, "content"], ["id", "notPrint", 1, "col-lg-16-", "col-md-16", "col-sm-16", "col-xs-16"], [1, "fa", "fa-clock-o"], [1, "text-muted", "blog-post", "thoigian", 3, "innerHtml"], [1, "text-muted", "fa", "fa-eye", "fontchu"], ["id", "btnPrintContent", 1, "text-muted", "fontchu", 2, "cursor", "pointer", 3, "click"], [1, "fa", "fa-print", 3, "click"], ["id", "detail-icon", 1, "detail-icon", "fontchu"], [1, "text-muted"], ["id", "btnIncreaseContrast", "title", "T\u0103ng \u0111\u1ED9 t\u01B0\u01A1ng ph\u1EA3n", 2, "cursor", "pointer", 3, "click"], [1, "icon", 2, "font-size", "18px"], [1, "fa", "fa-adjust"], ["id", "btnDecreaseContrast", "title", "Gi\u1EA3m \u0111\u1ED9 t\u01B0\u01A1ng ph\u1EA3n", 2, "cursor", "pointer", 3, "click"], [1, "icon", 2, "font-size", "16px"], [1, "text-muted", "fontchu"], ["id", "btnIncreaseFontSize", "title", "T\u0103ng font ch\u1EEF", 1, "btn", "btn-xs", "btn-default", 3, "click"], [1, "icon", 2, "font-size", "19px"], [1, "fa", "fa-font"], ["id", "btnDecreaseFontSize", "title", "Gi\u1EA3m font ch\u1EEF", 1, "btn", "btn-xs", "btn-default", 2, "margin-right", "5px", 3, "click"], [1, "icon", 2, "font-size", "15px"], ["id", "btn-share"], [1, "col-lg-16", "col-md-16", "col-sm-16", "col-xs-16"], ["data-href", "", "data-oaid", "579745863508352884", "data-layout", "1", "data-color", "blue", "data-customize", "false", 1, "zalo-share-button"], [1, "motaText"], [1, "blog-post", 3, "innerHtml"], ["onerror", "this.onerror=null;this.src=''", 1, "img-fluid", 3, "src"], [1, "font-italic", "text-muted", 3, "innerHtml"], [1, "text-right"], [1, "row", "mt-5"], [1, "col-sm-12"], [1, "sgt-danhmuctin--title", "text-primary"], [1, "text-decoration-none"], [1, "d-block", "pb-2"], [1, "row", "mt-2"], [1, "col-lg-3", "col-md-6"], ["class", "card border-light pointer", 4, "ngFor", "ngForOf"], [1, "row", "mt-3", "mb-3", "mb-sm-0"], [1, "card", "border-light", "pointer"], [1, "tinlquan", 3, "href"], ["alt", "...", 1, "mr-3", "w-100", 3, "src"], [1, "card-body", "p-2"], [1, "card-text", "text-decoration-none", "sgt-link-hover", "text-dark", "tinlqtd"]], template: function DetailMediaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DetailMediaComponent_div_3_Template, 56, 8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-tin-tuc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-dich-vu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-thong-ke");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detailMedia);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _detailpage_tin_tuc_tin_tuc_component__WEBPACK_IMPORTED_MODULE_5__["TinTucComponent"], _body_dich_vu_dich_vu_component__WEBPACK_IMPORTED_MODULE_6__["DichVuComponent"], _body_media_media_component__WEBPACK_IMPORTED_MODULE_7__["MediaComponent"], _body_thong_ke_thong_ke_component__WEBPACK_IMPORTED_MODULE_8__["ThongKeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _body_promotions_promotion02_promotion02_component__WEBPACK_IMPORTED_MODULE_9__["Promotion02Component"]], styles: ["#TextNoiDung[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 100% !important;\n  margin-left: auto !important;\n  margin-right: auto !important;\n  display: block !important;\n}\n\n.motaText[_ngcontent-%COMP%]     img {\n  width: 100%;\n}\n\n.thoigian[_ngcontent-%COMP%] {\n  letter-spacing: 1px;\n}\n\n#btnIncreaseContrast[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n\n#btnIncreaseFontSize[_ngcontent-%COMP%]{\n  margin-bottom: 5px;\n  padding: 4px;\n}\n\n#btnDecreaseFontSize[_ngcontent-%COMP%]{\n  margin-bottom: 2px;\npadding: 0px;\n}\n\n.fontchu[_ngcontent-%COMP%]{\n  margin-left: 27px;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.content[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n\n.tinlquan[_ngcontent-%COMP%]{\n  text-decoration: none;\n  text-align: justify;\n  font-size: 15px;\n}\n\n.tinlquan[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #1384BC !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlsUGFnZXMvZGV0YWlsLW1lZGlhL2RldGFpbC1tZWRpYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIsWUFBWTtBQUNaOztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFHQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbFBhZ2VzL2RldGFpbC1tZWRpYS9kZXRhaWwtbWVkaWEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNUZXh0Tm9pRHVuZyBpbWcge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5tb3RhVGV4dCA+Pj4gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50aG9pZ2lhbiB7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbiNidG5JbmNyZWFzZUNvbnRyYXN0IHtcbiAgcGFkZGluZzogNHB4O1xufVxuXG4jYnRuSW5jcmVhc2VGb250U2l6ZXtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nOiA0cHg7XG59XG5cbiNidG5EZWNyZWFzZUZvbnRTaXple1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG5wYWRkaW5nOiAwcHg7XG59XG4uZm9udGNodXtcbiAgbWFyZ2luLWxlZnQ6IDI3cHg7XG59XG5cbmhyIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5jb250ZW50IHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuXG4udGlubHF1YW57XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLnRpbmxxdWFuIGE6aG92ZXIge1xuICBjb2xvcjogIzEzODRCQyAhaW1wb3J0YW50O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailMediaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detail-media',
                templateUrl: './detail-media.component.html',
                styleUrls: ['./detail-media.component.css']
            }]
    }], function () { return [{ type: src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__["CallApiService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/detailPages/detailpage/detailpage.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/detailPages/detailpage/detailpage.component.ts ***!
  \****************************************************************/
/*! exports provided: DetailpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailpageComponent", function() { return DetailpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/call-api.service */ "./src/services/call-api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _tin_tuc_tin_tuc_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tin-tuc/tin-tuc.component */ "./src/app/detailPages/detailpage/tin-tuc/tin-tuc.component.ts");
/* harmony import */ var _thong_tin_can_biet_thong_tin_can_biet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./thong-tin-can-biet/thong-tin-can-biet.component */ "./src/app/detailPages/detailpage/thong-tin-can-biet/thong-tin-can-biet.component.ts");
/* harmony import */ var _body_dich_vu_dich_vu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../body/dich-vu/dich-vu.component */ "./src/app/body/dich-vu/dich-vu.component.ts");
/* harmony import */ var _body_media_media_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../body/media/media.component */ "./src/app/body/media/media.component.ts");
/* harmony import */ var _body_thong_ke_thong_ke_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../body/thong-ke/thong-ke.component */ "./src/app/body/thong-ke/thong-ke.component.ts");
/* harmony import */ var _body_promotions_promotion02_promotion02_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../body/promotions/promotion02/promotion02.component */ "./src/app/body/promotions/promotion02/promotion02.component.ts");












function DetailpageComponent_div_3_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tinlq_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "detail/", tinlq_r28.TinTucID, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/jpeg;base64,", tinlq_r28.Avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tinlq_r28.TieuDe);
} }
function DetailpageComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailpageComponent_div_3_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.inBai(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "In b\u00E0i vi\u1EBFt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailpageComponent_div_3_Template_i_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.inBai(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0110\u1ED9 t\u01B0\u01A1ng ph\u1EA3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailpageComponent_div_3_Template_a_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.giamPhanQuang(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailpageComponent_div_3_Template_a_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.tangPhanQuang(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Font ch\u1EEF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailpageComponent_div_3_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.tangSize(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailpageComponent_div_3_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.giamSize(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "b", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "S\u01B0u t\u1EA7m");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h6", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "b", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "TIN LI\u00CAN QUAN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, DetailpageComponent_div_3_div_53_Template, 6, 3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "app-promotion02");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r26.details.TieuDe);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("innerHtml", ctx_r26.details.LastUpdDate, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", ctx_r26.details.Views, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("innerHtml", ctx_r26.details.MoTa, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/jpeg;base64,", ctx_r26.details.Avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("innerHtml", ctx_r26.details.MoTa, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("innerHtml", ctx_r26.details.NoiDung, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r26.tinLienQuan);
} }
class DetailpageComponent {
    constructor(callApiService, http, router, render, activeRouter) {
        this.callApiService = callApiService;
        this.http = http;
        this.router = router;
        this.render = render;
        this.activeRouter = activeRouter;
        this.fonts = 18;
        this.url = 'TinTuc/DetailTinTuc?TinTucID=';
        this.url2 = 'TinTuc/TinLienQuan?TinTucID=1&SoLuong=5';
    }
    ngOnInit() {
        // let urrl = window.location.href;
        // this.linked = urrl;
        // console.log(urrl);
        const empid = this.activeRouter.snapshot.params.TinTucID;
        this.callApiService.getProfile(this.url + empid)
            .subscribe((data) => {
            this.details = data;
            window.scroll(0, 0);
        });
        // let empid = localStorage.getItem('selectTinTucID');
        // this.callApiService.getProfile(this.url)
        // .subscribe((data: IDetail[]) => {
        //   this.details = data;
        // });
        // this.activeRouter.params.subscribe((params) => {
        //   // tslint:disable-next-line:prefer-const
        //   let id = params['{{details.TiTucID}}'];
        //   this.callApiService.getProfile(this.url + id)
        //   .subscribe(data => {
        //     this.details = data;
        //     console.log(data);
        //     });
        // });
        this.callApiService.getTinLienQuan(this.url2)
            .subscribe((data) => {
            //   // tslint:disable-next-line: only-arrow-functions
            // data.forEach(function(item) {
            // const thuGonTieuDe = ((item.TieuDe.length >= 65) ? item.TieuDe.substring(0, 65) + '...' : item.TieuDe.substring(0));
            // item.TieuDe = thuGonTieuDe ;
            // this.tinLienQuan.TieuDe = data[data.length - 1];
            this.tinLienQuan = data;
        });
        // });
        // this.http.get<IDetail>(this.url)
        //  .subscribe(data => {
        //   this.details = data;
        //    console.log(data);
        //  this.addForm.patchValue(data);
        // })
        // this.callApiService.GetServicer(this.url)
        // .subscribe(data => {
        //   this.details[] = data;
        //   console.log(data);
        // });
        // this.callApiService.GetServicer(this.url)
        // .subscribe((data: IDetail) => {
        //   this.details = data;
        //   console.log(data);
        // });
    }
    // TS tăng giảm sizer chữ
    // zoomIn(event) {
    //  this.fonts = this.fonts + 1 ;
    //  const clarr = document.getElementsByClassName('motaText');
    //  this.render.setAttribute(clarr.item(0), 'style', 'font-size:' + this.fonts + 'px');
    // }
    // zoomOut(event) {
    //   this.fonts = this.fonts - 1 ;
    //   const clarr = document.getElementsByClassName('motaText');
    //   this.render.setAttribute(clarr.item(0), 'style', 'font-size:' + this.fonts + 'px');
    //  }
    // ###### end #######
    tangPhanQuang() {
        DecreaseContrast();
    }
    giamPhanQuang() {
        IncreaseContrast();
    }
    tangSize() {
        tangFormChu();
    }
    giamSize() {
        giamFormChu();
    }
    inBai() {
        PrintElem('#printContent');
    }
    reload() {
        tai_lai_trang();
    }
}
DetailpageComponent.ɵfac = function DetailpageComponent_Factory(t) { return new (t || DetailpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__["CallApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
DetailpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailpageComponent, selectors: [["app-detailpage"]], decls: 14, vars: 1, consts: [["id", "content-news-info", 1, "row", "news-info"], ["id", "printContent", 1, "col-sm-8"], [1, "row"], ["class", "col-md-12 ", 4, "ngIf"], [1, "col-sm-4"], [1, "mt-4"], [1, "col-md-12"], [1, "content"], ["id", "notPrint", 1, "col-lg-16-", "col-md-16", "col-sm-16", "col-xs-16"], [1, "fa", "fa-clock-o"], [1, "text-muted", "blog-post", "thoigian", 3, "innerHtml"], [1, "text-muted", "fa", "fa-eye", "fontchu"], ["id", "btnPrintContent", 1, "text-muted", "fontchu", 2, "cursor", "pointer", 3, "click"], [1, "fa", "fa-print", 3, "click"], ["id", "detail-icon", 1, "detail-icon", "fontchu"], [1, "text-muted"], ["id", "btnIncreaseContrast", "title", "T\u0103ng \u0111\u1ED9 t\u01B0\u01A1ng ph\u1EA3n", 2, "cursor", "pointer", 3, "click"], [1, "icon", 2, "font-size", "18px"], [1, "fa", "fa-adjust"], ["id", "btnDecreaseContrast", "title", "Gi\u1EA3m \u0111\u1ED9 t\u01B0\u01A1ng ph\u1EA3n", 2, "cursor", "pointer", 3, "click"], [1, "icon", 2, "font-size", "16px"], [1, "text-muted", "fontchu"], ["id", "btnIncreaseFontSize", "title", "T\u0103ng font ch\u1EEF", 1, "btn", "btn-xs", "btn-default", 3, "click"], [1, "icon", 2, "font-size", "19px"], [1, "fa", "fa-font"], ["id", "btnDecreaseFontSize", "title", "Gi\u1EA3m font ch\u1EEF", 1, "btn", "btn-xs", "btn-default", 2, "margin-right", "5px", 3, "click"], [1, "icon", 2, "font-size", "15px"], ["id", "btn-share"], [1, "col-lg-16", "col-md-16", "col-sm-16", "col-xs-16"], ["data-href", "", "data-oaid", "579745863508352884", "data-layout", "1", "data-color", "blue", "data-customize", "false", 1, "zalo-share-button"], [1, "motaText"], [1, "blog-post", 3, "innerHtml"], ["onerror", "this.onerror=null;this.src=''", 1, "img-fluid", 3, "src"], [1, "font-italic", "text-muted", 3, "innerHtml"], [1, "text-right"], [1, "row", "mt-5"], [1, "col-sm-12"], [1, "sgt-danhmuctin--title", "text-primary"], [1, "text-decoration-none"], [1, "d-block", "pb-2"], [1, "row", "mt-2"], [1, "col-lg-3", "col-md-6"], ["class", "card border-light pointer", 4, "ngFor", "ngForOf"], [1, "row", "mt-3", "mb-3", "mb-sm-0"], [1, "card", "border-light", "pointer"], [1, "tinlquan", 3, "href"], ["alt", "...", 1, "mr-3", "w-100", 3, "src"], [1, "card-body", "p-2"], [1, "card-text", "text-decoration-none", "sgt-link-hover", "text-dark", "tinlqtd"]], template: function DetailpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DetailpageComponent_div_3_Template, 56, 8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-tin-tuc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-thong-tin-can-biet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-dich-vu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-thong-ke");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.details);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _tin_tuc_tin_tuc_component__WEBPACK_IMPORTED_MODULE_5__["TinTucComponent"], _thong_tin_can_biet_thong_tin_can_biet_component__WEBPACK_IMPORTED_MODULE_6__["ThongTinCanBietComponent"], _body_dich_vu_dich_vu_component__WEBPACK_IMPORTED_MODULE_7__["DichVuComponent"], _body_media_media_component__WEBPACK_IMPORTED_MODULE_8__["MediaComponent"], _body_thong_ke_thong_ke_component__WEBPACK_IMPORTED_MODULE_9__["ThongKeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _body_promotions_promotion02_promotion02_component__WEBPACK_IMPORTED_MODULE_10__["Promotion02Component"]], styles: ["#TextNoiDung[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 100% !important;\n  margin-left: auto !important;\n  margin-right: auto !important;\n  display: block !important;\n}\n\n.motaText[_ngcontent-%COMP%]     img {\n  width: 100%;\n}\n\n.thoigian[_ngcontent-%COMP%] {\n  letter-spacing: 1px;\n}\n\n#btnIncreaseContrast[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n\n#btnIncreaseFontSize[_ngcontent-%COMP%]{\n  margin-bottom: 5px;\n  padding: 4px;\n}\n\n#btnDecreaseFontSize[_ngcontent-%COMP%]{\n  margin-bottom: 2px;\npadding: 0px;\n}\n\n.fontchu[_ngcontent-%COMP%]{\n  margin-left: 27px;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.content[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n\n.tinlquan[_ngcontent-%COMP%]{\n  text-decoration: none;\n  text-align: justify;\n  font-size: 15px;\n}\n\n.tinlquan[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #1384BC !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlsUGFnZXMvZGV0YWlscGFnZS9kZXRhaWxwYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQixZQUFZO0FBQ1o7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUdBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlsUGFnZXMvZGV0YWlscGFnZS9kZXRhaWxwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjVGV4dE5vaUR1bmcgaW1nIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG4ubW90YVRleHQgPj4+IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGhvaWdpYW4ge1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4jYnRuSW5jcmVhc2VDb250cmFzdCB7XG4gIHBhZGRpbmc6IDRweDtcbn1cblxuI2J0bkluY3JlYXNlRm9udFNpemV7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgcGFkZGluZzogNHB4O1xufVxuXG4jYnRuRGVjcmVhc2VGb250U2l6ZXtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xucGFkZGluZzogMHB4O1xufVxuLmZvbnRjaHV7XG4gIG1hcmdpbi1sZWZ0OiAyN3B4O1xufVxuXG5ociB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uY29udGVudCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cblxuLnRpbmxxdWFue1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi50aW5scXVhbiBhOmhvdmVyIHtcbiAgY29sb3I6ICMxMzg0QkMgIWltcG9ydGFudDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detailpage',
                templateUrl: './detailpage.component.html',
                styleUrls: ['./detailpage.component.css']
            }]
    }], function () { return [{ type: src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__["CallApiService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/detailPages/detailpage/thong-tin-can-biet/thong-tin-can-biet.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/detailPages/detailpage/thong-tin-can-biet/thong-tin-can-biet.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ThongTinCanBietComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinCanBietComponent", function() { return ThongTinCanBietComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ThongTinCanBietComponent {
    constructor() {
    }
    ngOnInit() {
    }
    onSelect() {
        alert('Chức năng đang hoàn thiện !!!');
    }
}
ThongTinCanBietComponent.ɵfac = function ThongTinCanBietComponent_Factory(t) { return new (t || ThongTinCanBietComponent)(); };
ThongTinCanBietComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThongTinCanBietComponent, selectors: [["app-thong-tin-can-biet"]], decls: 25, vars: 0, consts: [[1, "sgt-danhmuctin--title"], [1, "text-decoration-none", "d-flex", "justify-content-between", "pointer", 3, "click"], [1, "d-inline-block", "pb-2", "text-dark"], [1, "form-group"], ["id", "pills-tinnoibat", "role", "tabpanel", "aria-labelledby", "pills-tinnoibat-tab", 1, "tab-pane", "fade", "show", "active"], [1, "fa-ul", "mb-0", "pointer", 3, "click"], [1, "fa-li"], [1, "fas", "fa-chevron-right"], [1, "text-dark", "text-decoration-none"], [1, "my-2"]], template: function ThongTinCanBietComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThongTinCanBietComponent_Template_a_click_1_listener() { return ctx.onSelect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "TH\u00D4NG TIN C\u1EA6N BI\u1EBET");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThongTinCanBietComponent_Template_ul_click_7_listener() { return ctx.onSelect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "V\u0103n b\u1EA3n ph\u1EA1m Quy ph\u00E1p lu\u1EADt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "V\u0103n b\u1EA3n ch\u1EC9 \u0111\u1EA1o \u0111i\u1EC1u h\u00E0nh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "B\u00E1o c\u00E1o t\u00ECnh h\u00ECnh KT-XH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbFBhZ2VzL2RldGFpbHBhZ2UvdGhvbmctdGluLWNhbi1iaWV0L3Rob25nLXRpbi1jYW4tYmlldC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThongTinCanBietComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-thong-tin-can-biet',
                templateUrl: './thong-tin-can-biet.component.html',
                styleUrls: ['./thong-tin-can-biet.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/detailPages/detailpage/tin-tuc/tin-tuc.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/detailPages/detailpage/tin-tuc/tin-tuc.component.ts ***!
  \*********************************************************************/
/*! exports provided: TinTucComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinTucComponent", function() { return TinTucComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/call-api.service */ "./src/services/call-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function TinTucComponent_ul_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thongtin_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "detail/", thongtin_r2.TinTucID, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](thongtin_r2.TieuDe);
} }
function TinTucComponent_ul_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thongtin_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "detail/", thongtin_r3.TinTucID, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](thongtin_r3.TieuDe);
} }
class TinTucComponent {
    constructor(callApiService, router) {
        this.callApiService = callApiService;
        this.router = router;
        this.check = 0;
        this.check2 = 0;
        this.tinMoi = [];
        this.tinNoiBat = [];
        this.tinXemNhieu = [];
        this.url = 'TinTuc/TinNoiBat?PortalID=0&SoLuong=4';
        this.url2 = 'TinTuc/TinMoiNhat?PortalID=0&SoLuong=4';
        this.url3 = 'TinTuc/TinXemNhieu?PortalID=0&SoLuong=4';
    }
    ngOnInit() {
        this.callApiService.getThongtin(this.url)
            .subscribe((data) => {
            this.tinNoiBat = data;
        });
        this.callApiService.getThongtin(this.url2)
            .subscribe((data) => {
            this.tinMoi = data;
        });
        this.callApiService.getThongtin(this.url3)
            .subscribe((data) => {
            this.tinXemNhieu = data;
        });
    }
    //   onSelect(thongtin) {
    //     this.router.navigate(['detail/', thongtin]);
    //   }
    //   onLoadingTinMoi() {
    //     if (this.check === 0) {
    //       this.check = 1;
    //       this.callApiService.getThongtin(this.url2)
    //       .subscribe((data: IThongtin[]) => {
    //         this.tinMoi = data;
    //       });
    //     }
    //   }
    //   onLoadingXemNhieuNhat() {
    //     if (this.check2 === 0) {
    //       this.check2 = 1;
    //       this.callApiService.getThongtin(this.url3)
    //     .subscribe((data: IThongtin[]) => {
    //       this.tinXemNhieu = data;
    //     });
    //   }
    // }
    // selectTinTuc(thongtin: IThongtin): void {
    //   localStorage.removeItem('selectTinTucID');
    //   localStorage.setItem('selectTinTucID', thongtin.TinTucID.toString() );
    //   this.router.navigate(['detail']);
    //   window.scroll(0, 0);
    // }
    onPageDetailS(TinTucID) {
        this.router.navigate(['/detail', TinTucID]);
        window.scroll(0, 0);
    }
}
TinTucComponent.ɵfac = function TinTucComponent_Factory(t) { return new (t || TinTucComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__["CallApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
TinTucComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TinTucComponent, selectors: [["app-tin-tuc"]], decls: 14, vars: 2, consts: [["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills", "mb-3", "sgt-tabtin", "d-flex", "flex-nowrap"], [1, "nav-item"], ["id", "pills-tinmoi-tab", "data-toggle", "pill", "href", "#pills-tinmoi", "role", "tab", "aria-controls", "pills-tinmoi", "aria-selected", "false", 1, "nav-link", "active"], ["id", "pills-tindocnhieunhat-tab", "data-toggle", "pill", "href", "#pills-tindocnhieunhat", "role", "tab", "aria-controls", "pills-tindocnhieunhat", "aria-selected", "false", 1, "nav-link"], ["id", "pills-tabContent", 1, "tab-content", "sgt-tabtin-content", "p-1"], ["id", "pills-tinmoi", "role", "tabpanel", "aria-labelledby", "pills-tinmoi-tab", 1, "tab-pane", "fade", "show", "active"], ["class", "fa-ul mb-0", 4, "ngFor", "ngForOf"], ["id", "pills-tindocnhieunhat", "role", "tabpanel", "aria-labelledby", "pills-tindocnhieunhat-tab", 1, "tab-pane", "fade"], [1, "fa-ul", "mb-0"], [1, "fa-li"], [1, "fas", "fa-chevron-right", "text-danger"], [1, "text-dark", "text-decoration-none", "pointer", 3, "href"]], template: function TinTucComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "TIN M\u1EDAI NH\u1EA4T");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "XEM NHI\u1EC0U NH\u1EA4T");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TinTucComponent_ul_11_Template, 6, 2, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TinTucComponent_ul_13_Template, 6, 2, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tinMoi);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tinXemNhieu);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbFBhZ2VzL2RldGFpbHBhZ2UvdGluLXR1Yy90aW4tdHVjLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TinTucComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tin-tuc',
                templateUrl: './tin-tuc.component.html',
                styleUrls: ['./tin-tuc.component.css']
            }]
    }], function () { return [{ type: src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__["CallApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 42, vars: 0, consts: [[1, "footer-above"], [1, "container"], [1, "row"], [1, "col-md-4", "d-sm-flex", "justify-content-center", "align-items-center", "py-3", "py-sm-0"], [1, "text-white", "mb-0"], [1, "text-white", "my-2"], [1, "col-md-4", "my-3"], [1, "text-white", "mb-3"], [1, "text-white-50"], [1, "fa-ul"], [1, "text-white"], [1, "fa-li"], [1, "fas", "fa-map-marker-alt"], [1, "fas", "fa-phone-volume"], [1, "fas", "fa-fax"], [1, "fas", "fa-envelope"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4490909799083!2d106.6983140146225!3d10.77687519232122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f478c6de181%3A0xdd18899ab18d22f5!2zU-G7nyBHaWFvIHRow7RuZyBW4bqtbiB04bqjaSBUUC5IQ00!5e0!3m2!1svi!2s!4v1580713915889!5m2!1svi!2s", "frameborder", "0", "allowfullscreen", "", 1, "w-100", "h-100", 2, "border", "0"], [1, "footer-below"], [1, "container-fluid"], [1, "row", "py-3"], [1, "col"], [1, "text-center", "mb-0", "text-white-50"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "H\u1ED6 TR\u1EE2 K\u1EF8 THU\u1EACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "(84.8) 38.290.451");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "S\u1EDE GIAO TH\u00D4NG V\u1EACN T\u1EA2I");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Th\u00E0nh Ph\u1ED1 H\u1ED3 Ch\u00ED Minh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "63 L\u00FD T\u1EF1 Tr\u1ECDng, P.B\u1EBFn Ngh\u00E9, Q.1, TP.HCM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "(84.8) 38.290.451");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " (84.8) 38.290.458");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "sgtvt@tphcm.gov.vn\u200B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "iframe", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h6", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u00A9 2019 B\u1EA3n quy\u1EC1n n\u1ED9i dung thu\u1ED9c SGTVT - TP. H\u1ED3 Ch\u00ED Minh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HeaderComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goHome() {
        this.router.navigate(['Trang-Chu']);
        window.scroll(0, 0);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 46, vars: 0, consts: [[1, "banner", "d-none", "d-md-block", 2, "background-image", "url('data:image/jpeg;base64,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/wC2r7xB461bRBcvPDGJJ0glSOONfJit+d6orEjzDgFj174rV5XQyzKcPinQhTbcKbnCUpSvNz0s5Na8u9jKvmDrVZ0VUm+VppOKSskutvPuepN4N1GKytZkht181IzkT8kNHu5B6V81DOMMsRWhKdR8kpxt7N2TUrfPa12d8MJUlSpztF88YyvzfzRv+poeI43nsrGO1+WS3jkWbJwNwiiUbS2QRuVuQB+tYYGUFWrOpqpyi4ejlJu9rdGjvpXSknraKS+V10PnvwTrWsRXCu96/lLfWbygLCSUWQF9o8vJOwEDGD05Br9IzPA4KpSmo0FzOhVjHWa95xaX2++uz+4+RVWrCtRbnZc8G7JbKSv07dD0f4h63/bl7FHp8zky6Z9mUSxrHmV57kjOQSF+defr6V87kGWfUoXr04pRxSqPkm5e6oU133916HuYzGRq0aqjJuUqUoq8Ulezt0LXw1nudPutM0q9kJla5unZECshR4ZHXLqBz8uT6fSnxNQpVaGLxFGCUVSpJNtppqcE9G2eXl9ecMTRpyk/ik2klb4ZNdPI+gmwXJUccY/LmvzhReifQ+o5uZXvuJgVoktuqAcOe1UF0tyYY7Cml6E81+46rVwJEOKu239f15CbJafUBwODV20B6kgx1p2Jv0dx2admF0KKvqNO5KuMVX6ksdVkjhQty1f/AC9B1WA5RS7epLH1RItUgCqActNf1/X6jRKKTEx1VEQVQH+UhX+px/hgFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQA5HeN1kjdo3Qhk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wpy524QjF2ta8UldXf52L/hmO61NtRa4nM6eXG8Szsz+X5pl6AhgDgKDt9ByRissdOnhlQUIckuZqTgkr8vLvtfW9r/5mmGlObqe87aNXb0u5WOI8I+EvItNTSZLGSeQoLeQK58p/KkCtlogVw5DZUE8ZxkYr6XG50nKk4vEKKT51ePvK6urKet10bR5rwbco/w27pLfv/hLNn4L1RNb0tr27sriMTwGRDJcPujEp3Jh7dVORng4BJ6gVDzzDPC4j2dPEQnyy5ZWgrS5NHdVG1bvrYurgq0a9JOcHC0XKN5WkuZ305bO9rHdjwzLaeKbTULdrSG2hRcxReYj7jBLGWVREI8ksP4hkA/SvMnmsK+W1aFRVp1Jv4p8so2U4ySbc77J9OxSwEo4iNWPs4xXRXT2advdt17npMWTEpJyTnJ7nk18vNJ1Jcq5dnt/dXY9eGkFHquvzZJSUbdirjgR6c0Wa6is31HjmtErepGxKo/z/n/61UolP5kgHTpVIndj6oocBmmgbsSCq6kMWq0EO4oKul8yRf8AH+lV0v8A11Ex9UiRQaZSeg+rGPB4H+f8+9JbkvcdVEi00AVYDhTRSJR0oZLHU4iCqA/ykK/1OP8ADAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgC3Y6hf6XdQ32mXt3p19btvt7yxuZrS6gcdHhuLd45omH95HU+9RUp06sHTqwhUhJWlCpFThJdnGSaa9UaUqtWhONWjUqUakHeNSlOVOcX3jODUk/NNH1X8Of29P2zv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')"], [1, "container"], ["src", "assets/images/banner-title.png", "alt", "banner-title", 1, "img-fluid"], [1, "menu-bar", "shadow-lg"], [1, "navbar", "navbar-expand-lg", "navbar-light"], ["href", "/", 1, "navbar-brand", "d-inline-block", "d-sm-none"], [1, "text-white", "mb-0"], [1, "text-white-50"], ["type", "button", "data-toggle", "collapse", "data-target", "#dnnNav", "aria-controls", "dnnNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "ml-auto"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], [1, "nav-link", "active", "pointer", 3, "click"], [1, "fas", "fa-home"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "dropdown-menu"], ["routerLink", "Gioi-Thieu", 1, "dropdown-item"], ["routerLink", "Chuc-Nang-Nghiep-Vu", 1, "dropdown-item"], ["routerLink", "Co-Cau-To-Chuc", 1, "dropdown-item"], ["routerLink", "/Tin-Tuc", 1, "nav-link", "pointer"], ["routerLink", "Cau-Hoi-Thuong-Gap", 1, "dropdown-item"], ["routerLink", "Gui-Cau-Hoi-Yeu-Cau", 1, "dropdown-item"], ["routerLink", "Lien-He", 1, "nav-link", "pointer"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "S\u1EDE GIAO TH\u00D4NG V\u1EACN T\u1EA2I");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Th\u00E0nh ph\u1ED1 H\u1ED3 Ch\u00ED Minh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_20_listener() { return ctx.goHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "GI\u1EDAI THI\u1EC6U");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Gi\u1EDBi thi\u1EC7u chung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Ch\u1EE9c n\u0103ng nghi\u1EC7p v\u1EE5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "C\u01A1 c\u1EA5u t\u1ED5 ch\u1EE9c");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "TIN T\u1EE8C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "H\u1ECEI \u0110\u00C1P");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "C\u00E2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "G\u1EEDi c\u00E2u h\u1ECFi, y\u00EAu c\u1EA7u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "LI\u00CAN H\u1EC6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".pointer[_ngcontent-%COMP%] {cursor: pointer;}\n\n\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  display: block;\n  visibility: hidden;\n  opacity:0;\n  transform: translateY(50px);\n  transition:.5s ease all;\n}\n\n\n\n.dropdown-menu.show[_ngcontent-%COMP%] {\n  display: block;\n  visibility: visible;\n  opacity:1;\n  transform: translateY(0px);\n  transition:.5s ease all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQVUsZUFBZSxDQUFDOzs7O0FBSTFCO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsMkJBQTJCO0VBQzNCLHVCQUF1QjtBQUN6Qjs7OztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsMEJBQTBCO0VBQzFCLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb2ludGVyIHtjdXJzb3I6IHBvaW50ZXI7fVxuXG5cblxuLmRyb3Bkb3duLW1lbnUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OjA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KTtcbiAgdHJhbnNpdGlvbjouNXMgZWFzZSBhbGw7XG59XG5cbi5kcm9wZG93bi1tZW51LnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eToxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgdHJhbnNpdGlvbjouNXMgZWFzZSBhbGw7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/morePages/more-page-media/more-page-media.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/morePages/more-page-media/more-page-media.component.ts ***!
  \************************************************************************/
/*! exports provided: MorePageMediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorePageMediaComponent", function() { return MorePageMediaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_call_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/call-api.service */ "./src/services/call-api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _paginate_paginate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../paginate/paginate.component */ "./src/app/paginate/paginate.component.ts");
/* harmony import */ var _detailPages_detailpage_tin_tuc_tin_tuc_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../detailPages/detailpage/tin-tuc/tin-tuc.component */ "./src/app/detailPages/detailpage/tin-tuc/tin-tuc.component.ts");
/* harmony import */ var _body_dich_vu_dich_vu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../body/dich-vu/dich-vu.component */ "./src/app/body/dich-vu/dich-vu.component.ts");
/* harmony import */ var _body_media_media_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../body/media/media.component */ "./src/app/body/media/media.component.ts");
/* harmony import */ var _body_thong_ke_thong_ke_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../body/thong-ke/thong-ke.component */ "./src/app/body/thong-ke/thong-ke.component.ts");











function MorePageMediaComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mediaList_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/mediaDetail/", mediaList_r17.MediaID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/jpeg;base64,", mediaList_r17.Thumbnail, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/mediaDetail/", mediaList_r17.MediaID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", mediaList_r17.TenMedia, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", mediaList_r17.LastUpdDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("L\u01B0\u1EE3t xem: ", mediaList_r17.Views, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("innerHTML", mediaList_r17.MoTa, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class MorePageMediaComponent {
    constructor(callApiService, http, router, activRouter) {
        this.callApiService = callApiService;
        this.http = http;
        this.router = router;
        this.activRouter = activRouter;
        this.listMedia = [];
        this.page = {
            currentPage: 1,
            pageSize: 5,
        };
    }
    ngOnInit() {
        this.loadData(this.page.currentPage);
    }
    loadData(pageNum) {
        const url = 'Media/GetList_ByType?pageNumber=' + pageNum + '&rowsPerPage=' + this.page.pageSize + '&TheLoaiTinID=21&PortalID=0';
        this.callApiService.getMediaList(url)
            .subscribe((data) => {
            this.listMedia = data;
            this.page.totalItems = data[0].TotalCount;
            window.scroll(0, 0);
        });
    }
    pageChange(pageState, isPageSizeChange = false) {
        // alert(pageState.currentPage);
        this.loadData(pageState.currentPage);
    }
}
MorePageMediaComponent.ɵfac = function MorePageMediaComponent_Factory(t) { return new (t || MorePageMediaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__["CallApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
MorePageMediaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MorePageMediaComponent, selectors: [["app-more-page-media"]], decls: 13, vars: 2, consts: [["id", "content-news-info", 1, "row", "news-info"], ["id", "printContent", 1, "col-sm-8"], ["class", "first-item all", 4, "ngFor", "ngForOf"], [1, "container"], [3, "page", "pageChange", "pageSizeChange"], [1, "col-sm-4"], [1, "mt-4"], [1, "first-item", "all"], [1, "row"], [1, "col-md-4", 3, "routerLink"], ["onerror", "this.onerror=null;this.src='https://amerikicklanghorne.com/wp-content/uploads/2017/04/default-image.jpg';", 1, "pull-left", "pointer", 3, "src"], [1, "col-md-8"], ["id", "noidung", 1, "pointer", 3, "routerLink"], [1, "text-muted", 2, "margin-bottom", "5px !important", "font-size", "14px"], [1, "fa", "fa-clock-o"], [1, "fa", "fa-eye", "luotxem"], ["id", "BodyContent_ctl00_ctl02_rptStoryLineThumbnail_lbSumary_0", 1, "desc"], [2, "text-align", "justify"], [2, "font-family", "Times New Roman,Times,serif"], [2, "font-size", "18px"], [2, "color", "#000000", 3, "innerHTML"]], template: function MorePageMediaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MorePageMediaComponent_div_2_Template, 19, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngx-paginate", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function MorePageMediaComponent_Template_ngx_paginate_pageChange_4_listener($event) { return ctx.pageChange($event); })("pageSizeChange", function MorePageMediaComponent_Template_ngx_paginate_pageSizeChange_4_listener($event) { return ctx.pageChange($event, true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-tin-tuc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-dich-vu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-thong-ke");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listMedia);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", ctx.page);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _paginate_paginate_component__WEBPACK_IMPORTED_MODULE_5__["NgxPaginateComponent"], _detailPages_detailpage_tin_tuc_tin_tuc_component__WEBPACK_IMPORTED_MODULE_6__["TinTucComponent"], _body_dich_vu_dich_vu_component__WEBPACK_IMPORTED_MODULE_7__["DichVuComponent"], _body_media_media_component__WEBPACK_IMPORTED_MODULE_8__["MediaComponent"], _body_thong_ke_thong_ke_component__WEBPACK_IMPORTED_MODULE_9__["ThongKeComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["img[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  padding: 5px;\n  width: 240px;\n}\n\nimg[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);\n}\n\n.container[_ngcontent-%COMP%] {\n  margin-left: 200px;\n  padding-top: 25px;\n}\n\n.first-item[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n\n.luotxem[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n#noidung[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 20px;\n}\n\n.all[_ngcontent-%COMP%]     .first-item  {\n  width: 100%;\n}\n\n.all[_ngcontent-%COMP%]     img {\n  width: 100%;\n}\n\n.all[_ngcontent-%COMP%]     .container {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9yZVBhZ2VzL21vcmUtcGFnZS1tZWRpYS9tb3JlLXBhZ2UtbWVkaWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDhDQUE4QztBQUNoRDs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL21vcmVQYWdlcy9tb3JlLXBhZ2UtbWVkaWEvbW9yZS1wYWdlLW1lZGlhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDI0MHB4O1xufVxuXG5pbWc6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMnB4IDFweCByZ2JhKDAsIDE0MCwgMTg2LCAwLjUpO1xufVxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG59XG4uZmlyc3QtaXRlbSB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4ubHVvdHhlbSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4jbm9pZHVuZyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmFsbCA+Pj4gLmZpcnN0LWl0ZW0gIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hbGwgPj4+IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYWxsID4+PiAuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MorePageMediaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-more-page-media',
                templateUrl: './more-page-media.component.html',
                styleUrls: ['./more-page-media.component.css']
            }]
    }], function () { return [{ type: _services_call_api_service__WEBPACK_IMPORTED_MODULE_1__["CallApiService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/morePages/more-page/more-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/morePages/more-page/more-page.component.ts ***!
  \************************************************************/
/*! exports provided: MorePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorePageComponent", function() { return MorePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/call-api.service */ "./src/services/call-api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _paginate_paginate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../paginate/paginate.component */ "./src/app/paginate/paginate.component.ts");
/* harmony import */ var _detailPages_detailpage_tin_tuc_tin_tuc_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../detailPages/detailpage/tin-tuc/tin-tuc.component */ "./src/app/detailPages/detailpage/tin-tuc/tin-tuc.component.ts");
/* harmony import */ var _body_dich_vu_dich_vu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../body/dich-vu/dich-vu.component */ "./src/app/body/dich-vu/dich-vu.component.ts");
/* harmony import */ var _body_media_media_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../body/media/media.component */ "./src/app/body/media/media.component.ts");
/* harmony import */ var _body_thong_ke_thong_ke_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../body/thong-ke/thong-ke.component */ "./src/app/body/thong-ke/thong-ke.component.ts");











function MorePageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", list_r5.TinTucID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/jpeg;base64,", list_r5.Avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", list_r5.TinTucID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", list_r5.TieuDe, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", list_r5.LastUpdDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("L\u01B0\u1EE3t xem: ", list_r5.Views, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("innerHTML", list_r5.MoTa, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class MorePageComponent {
    // url = 'TinTuc/GetList_ByTheLoai_Paging?pageNumber=1&rowsPerPage=10&TheLoaiTinID=';
    constructor(callApiService, http, activeRouter) {
        this.callApiService = callApiService;
        this.http = http;
        this.activeRouter = activeRouter;
        this.tinTucList = [];
        this.page = {
            currentPage: 1,
            pageSize: 5,
        };
    }
    ngOnInit() {
        // this.page.totalItems = 140;
        this.loadData(this.page.currentPage);
    }
    loadData(pageNum) {
        const empid = this.activeRouter.snapshot.params.TheLoaiTinID;
        const id = atob(empid.replace(/.html/g, ''));
        const url = 'TinTuc/GetList_ByTheLoai_Paging?pageNumber=' + pageNum + '&rowsPerPage=' + this.page.pageSize + '&TheLoaiTinID=' + id + '';
        this.callApiService.getDetailList(url)
            .subscribe((data) => {
            this.tinTucList = data;
            console.log(data[0].TotalCount);
            this.page.totalItems = data[0].TotalCount;
            window.scroll(0, 0);
        });
    }
    pageChange(pageState, isPageSizeChange = false) {
        // alert(pageState.currentPage);
        this.loadData(pageState.currentPage);
    }
}
MorePageComponent.ɵfac = function MorePageComponent_Factory(t) { return new (t || MorePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__["CallApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
MorePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MorePageComponent, selectors: [["app-more-page"]], decls: 15, vars: 2, consts: [["id", "content-news-info", 1, "row", "news-info"], ["id", "printContent", 1, "col-sm-8", "all"], ["class", "first-item", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-md-3"], [1, "col-md-9"], [3, "page", "pageChange", "pageSizeChange"], [1, "col-sm-4"], [1, "mt-4"], [1, "first-item"], [1, "col-md-4", 3, "routerLink"], ["onerror", "this.onerror=null;this.src='https://amerikicklanghorne.com/wp-content/uploads/2017/04/default-image.jpg';", 1, "pull-left", "pointer", 3, "src"], [1, "col-md-8"], ["id", "noidung", 1, "pointer", 3, "routerLink"], [1, "text-muted", 2, "margin-bottom", "5px !important", "font-size", "14px"], [1, "fa", "fa-clock-o"], [1, "fa", "fa-eye", "luotxem"], ["id", "BodyContent_ctl00_ctl02_rptStoryLineThumbnail_lbSumary_0", 1, "desc"], [2, "text-align", "justify"], [2, "font-family", "Times New Roman,Times,serif"], [2, "font-size", "18px"], [2, "color", "#000000", 3, "innerHTML"]], template: function MorePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MorePageComponent_div_2_Template, 20, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ngx-paginate", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function MorePageComponent_Template_ngx_paginate_pageChange_6_listener($event) { return ctx.pageChange($event); })("pageSizeChange", function MorePageComponent_Template_ngx_paginate_pageSizeChange_6_listener($event) { return ctx.pageChange($event, true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-tin-tuc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-dich-vu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-thong-ke");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tinTucList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", ctx.page);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _paginate_paginate_component__WEBPACK_IMPORTED_MODULE_5__["NgxPaginateComponent"], _detailPages_detailpage_tin_tuc_tin_tuc_component__WEBPACK_IMPORTED_MODULE_6__["TinTucComponent"], _body_dich_vu_dich_vu_component__WEBPACK_IMPORTED_MODULE_7__["DichVuComponent"], _body_media_media_component__WEBPACK_IMPORTED_MODULE_8__["MediaComponent"], _body_thong_ke_thong_ke_component__WEBPACK_IMPORTED_MODULE_9__["ThongKeComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["img[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  padding: 5px;\n  width: 240px;\n}\n\nimg[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);\n}\n\n#noidung[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight:bold;\n}\n\n#noidung[_ngcontent-%COMP%]:hover {\n  transition: all .3s ease-out;\n  box-shadow:  0 -1px 0 0 white inset, 0 -2px 0 0 color-accent inset ;\n  text-decoration: none;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin-left: 150px;\n  padding-top: 25px;\n  font-size: 15px;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0.25rem;\n}\n\n.page-link[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: #007bff;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n}\n\n.page-link[_ngcontent-%COMP%]:hover {\n  z-index: 2;\n  color: #0056b3;\n  text-decoration: none;\n  background-color: #e9ecef;\n  border-color: #dee2e6;\n}\n\n.page-link[_ngcontent-%COMP%]:focus {\n  z-index: 2;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.page-link[_ngcontent-%COMP%]:not(:disabled):not(.disabled) {\n  cursor: pointer;\n}\n\n.page-item[_ngcontent-%COMP%]:first-child   .page-link[_ngcontent-%COMP%] {\n  margin-left: 0;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n\n.page-item[_ngcontent-%COMP%]:last-child   .page-link[_ngcontent-%COMP%] {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n\n.first-item[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n\n.luotxem[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.all[_ngcontent-%COMP%]     .first-item  {\n  width: 100%;\n}\n\n.all[_ngcontent-%COMP%]     img {\n  width: 100%;\n}\n\n.container[_ngcontent-%COMP%]     ngx-paginate{\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9yZVBhZ2VzL21vcmUtcGFnZS9tb3JlLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsbUVBQW1FO0VBQ25FLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUVFLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLHNCQUFzQjtFQUN0Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7RUFDVixnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsY0FBYztFQUNkLCtCQUErQjtFQUMvQixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsbUNBQW1DO0FBQ3JDOztBQUdBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOzs7Ozs7OztHQVFHIiwiZmlsZSI6InNyYy9hcHAvbW9yZVBhZ2VzL21vcmUtcGFnZS9tb3JlLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogNXB4O1xuICB3aWR0aDogMjQwcHg7XG59XG5cbmltZzpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAycHggMXB4IHJnYmEoMCwgMTQwLCAxODYsIDAuNSk7XG59XG5cbiNub2lkdW5nIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDpib2xkO1xufVxuXG4jbm9pZHVuZzpob3ZlciB7XG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1vdXQ7XG4gIGJveC1zaGFkb3c6ICAwIC0xcHggMCAwIHdoaXRlIGluc2V0LCAwIC0ycHggMCAwIGNvbG9yLWFjY2VudCBpbnNldCA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbi1sZWZ0OiAxNTBweDtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnBhZ2luYXRpb24ge1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuXG4ucGFnZS1saW5rIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICBsaW5lLWhlaWdodDogMS4yNTtcbiAgY29sb3I6ICMwMDdiZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG59XG5cbi5wYWdlLWxpbms6aG92ZXIge1xuICB6LWluZGV4OiAyO1xuICBjb2xvcjogIzAwNTZiMztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xuICBib3JkZXItY29sb3I6ICNkZWUyZTY7XG59XG5cbi5wYWdlLWxpbms6Zm9jdXMge1xuICB6LWluZGV4OiAyO1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgwLCAxMjMsIDI1NSwgMC4yNSk7XG59XG5cbi5wYWdlLWxpbms6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucGFnZS1pdGVtOmZpcnN0LWNoaWxkIC5wYWdlLWxpbmsge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4yNXJlbTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4yNXJlbTtcbn1cblxuLnBhZ2UtaXRlbTpsYXN0LWNoaWxkIC5wYWdlLWxpbmsge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4yNXJlbTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuMjVyZW07XG59XG5cblxuLmZpcnN0LWl0ZW0ge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4ubHVvdHhlbSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uYWxsID4+PiAuZmlyc3QtaXRlbSAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFsbCA+Pj4gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250YWluZXIgPj4+IG5neC1wYWdpbmF0ZXtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8qIEBtZWRpYSAobWF4LXdpZHRoOiA4OTBweCkge1xuICAucGFnZS1lbnRyeS5kaXNhYmxlZFtfbmdjb250ZW50LWlrcy1jNDJdIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLnBhZ2UtZW50cnkuZGlzYWJsZWRbX25nY29udGVudC1pa3MtYzQyXSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn0gKi9cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MorePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-more-page',
                templateUrl: './more-page.component.html',
                styleUrls: ['./more-page.component.css']
            }]
    }], function () { return [{ type: src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__["CallApiService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/notfound/notfound.component.ts":
/*!************************************************!*\
  !*** ./src/app/notfound/notfound.component.ts ***!
  \************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class NotfoundComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        window.scroll(0, 0);
    }
    goHome() {
        this.router.navigate(['Trang-Chu']);
        window.scroll(0, 0);
    }
}
NotfoundComponent.ɵfac = function NotfoundComponent_Factory(t) { return new (t || NotfoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NotfoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotfoundComponent, selectors: [["app-notfound"]], decls: 9, vars: 0, consts: [[1, "tong"], ["src", "assets/images/404.png", "alt", ""], [1, "chudau"], [1, "chucuoi"], [1, "button", 2, "vertical-align", "middle", 3, "click"]], template: function NotfoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Trang kh\u00F4ng t\u1ED3n t\u1EA1i ho\u1EB7c \u0111\u00E3 b\u1ECB xo\u00E1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "R\u1EA5t xin l\u1ED7i v\u00EC s\u1EF1 b\u1EA5t ti\u1EC7n n\u00E0y nh\u01B0ng trang b\u1EA1n y\u00EAu c\u1EA7u kh\u00F4ng t\u1ED3n t\u1EA1i ho\u1EB7c \u0111\u00E3 b\u1ECB xo\u00E1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotfoundComponent_Template_button_click_6_listener() { return ctx.goHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Tr\u1EDF v\u1EC1 Trang ch\u1EE7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h1[_ngcontent-%COMP%] {\n  text-align: center;\n  text-transform: uppercase;\n  color: red;\n}\n.tong[_ngcontent-%COMP%]     img{\n  width: 30%;\n}\nimg[_ngcontent-%COMP%]{\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\np[_ngcontent-%COMP%] {\ntext-align: center;\n}\n.chudau[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.button[_ngcontent-%COMP%] {\n  display: block;\n  border-radius: 4px;\n  background-color: #1384BC;\n  border: none;\n  color: #FFFFFF;\n  text-align: center;\n  font-size: 15px;\n  padding: 20px;\n  width: 200px;\n  transition: all 0.5s;\n  cursor: pointer;\n  margin: auto;\n}\n.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  transition: 0.5s;\n}\n.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n  content: '\\00bb';\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  right: -20px;\n  transition: 0.5s;\n}\n.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  padding-right: 25px;\n}\n.button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:after {\n  opacity: 1;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBRUE7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsTUFBTTtFQUNOLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7QUFDViIsImZpbGUiOiJzcmMvYXBwL25vdGZvdW5kL25vdGZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHJlZDtcbn1cbi50b25nID4+PiBpbWd7XG4gIHdpZHRoOiAzMCU7XG59XG5cbmltZ3tcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbnAge1xudGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNodWRhdSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTM4NEJDO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5idXR0b24gc3BhbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5idXR0b24gc3BhbjphZnRlciB7XG4gIGNvbnRlbnQ6ICdcXDAwYmInO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IC0yMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uYnV0dG9uOmhvdmVyIHNwYW4ge1xuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xufVxuXG4uYnV0dG9uOmhvdmVyIHNwYW46YWZ0ZXIge1xuICBvcGFjaXR5OiAxO1xuICByaWdodDogMDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotfoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notfound',
                templateUrl: './notfound.component.html',
                styleUrls: ['./notfound.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/paginate/ngx-paginate.module.ts":
/*!*************************************************!*\
  !*** ./src/app/paginate/ngx-paginate.module.ts ***!
  \*************************************************/
/*! exports provided: NgxPaginateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPaginateModule", function() { return NgxPaginateModule; });
/* harmony import */ var _paginate_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paginate.component */ "./src/app/paginate/paginate.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




class NgxPaginateModule {
}
NgxPaginateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NgxPaginateModule });
NgxPaginateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NgxPaginateModule_Factory(t) { return new (t || NgxPaginateModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgxPaginateModule, { declarations: [_paginate_component__WEBPACK_IMPORTED_MODULE_0__["NgxPaginateComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]], exports: [_paginate_component__WEBPACK_IMPORTED_MODULE_0__["NgxPaginateComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxPaginateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                ],
                exports: [_paginate_component__WEBPACK_IMPORTED_MODULE_0__["NgxPaginateComponent"]],
                declarations: [_paginate_component__WEBPACK_IMPORTED_MODULE_0__["NgxPaginateComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/paginate/paginate.component.ts":
/*!************************************************!*\
  !*** ./src/app/paginate/paginate.component.ts ***!
  \************************************************/
/*! exports provided: NgxPaginateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPaginateComponent", function() { return NgxPaginateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
//by Thaivn



const _c0 = function (a0) { return { "disabled": a0 }; };
function NgxPaginateComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxPaginateComponent_span_1_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r103.setPage(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r98.page.currentPage === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r98.internalOptions.titles.firstPage, " ");
} }
function NgxPaginateComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxPaginateComponent_span_2_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r106); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r105.previousPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r99.page.currentPage === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r99.internalOptions.titles.previousPage, " ");
} }
const _c1 = function (a0) { return { "active": a0 }; };
function NgxPaginateComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxPaginateComponent_span_4_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r109); const num_r107 = ctx.$implicit; const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r108.setPage(num_r107); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const num_r107 = ctx.$implicit;
    const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, num_r107 === ctx_r100.page.currentPage));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](num_r107);
} }
function NgxPaginateComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxPaginateComponent_span_5_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r110.nextPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r101.page.currentPage === ctx_r101.page.numberOfPages));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r101.internalOptions.titles.nextPage, " ");
} }
function NgxPaginateComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxPaginateComponent_span_6_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r113); const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r112.setPage(ctx_r112.page.numberOfPages); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r102.page.currentPage === ctx_r102.page.numberOfPages));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r102.internalOptions.titles.lastPage, " ");
} }
const defaults = {
    spanPages: 2,
    previousPage: true,
    nextPage: true,
    firstPage: true,
    lastPage: true,
    titles: {
        firstPage: 'Trang đầu',
        previousPage: 'Trang trước',
        lastPage: 'Trang cuối',
        nextPage: 'Trang sau',
        pageSize: 'Số lượng trên mỗi trang'
    },
    pageSizes: [{
            value: 10,
            display: '10'
        }]
};
class NgxPaginateComponent {
    constructor() {
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageSizeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.range = [];
    }
    ngOnInit() {
        this.range = [];
        this.setOptions();
        this.calculateRange();
    }
    setOptions() {
        if (!this.options) {
            this.options = defaults;
        }
        if (!this.options.titles) {
            this.options.titles = defaults.titles;
        }
        this.internalOptions = {
            spanPages: this.options.spanPages || defaults.spanPages,
            previousPage: this.options.previousPage !== undefined ? this.options.previousPage : defaults.previousPage,
            nextPage: this.options.nextPage !== undefined ? this.options.nextPage : defaults.nextPage,
            firstPage: this.options.firstPage !== undefined ? this.options.firstPage : defaults.firstPage,
            lastPage: this.options.lastPage !== undefined ? this.options.lastPage : defaults.lastPage,
            titles: {
                firstPage: this.options.titles.firstPage || defaults.titles.firstPage,
                previousPage: this.options.titles.previousPage || defaults.titles.previousPage,
                lastPage: this.options.titles.lastPage || defaults.titles.lastPage,
                nextPage: this.options.titles.nextPage || defaults.titles.nextPage,
                pageSize: this.options.titles.pageSize || defaults.titles.pageSize
            },
            pageSizes: this.options.pageSizes || defaults.pageSizes.slice()
        };
    }
    setPageSize(pageSize) {
        this.page.pageSize = parseInt(pageSize, 10);
        this.pageSizeChange.emit(this.page);
    }
    calculateRange() {
        this.range.length = 0;
        this.page.numberOfPages = Math.ceil(this.page.totalItems / this.page.pageSize);
        if (this.page.numberOfPages === 0) {
            this.page.numberOfPages = 1;
        }
        let upperSpan;
        if (this.page.currentPage - this.options.spanPages > 0) {
            for (let i = this.page.currentPage - this.options.spanPages; i < this.page.currentPage; i++) {
                this.range.push(i);
            }
            upperSpan = this.options.spanPages;
        }
        else {
            upperSpan = this.options.spanPages * 2;
            for (let i = 1; i < this.page.currentPage; i++) {
                this.range.push(i);
                upperSpan--;
            }
        }
        this.range.push(this.page.currentPage);
        if (this.page.currentPage + upperSpan <= this.page.numberOfPages) {
            for (let i = this.page.currentPage + 1; i <= this.page.currentPage + upperSpan; i++) {
                this.range.push(i);
            }
        }
        else {
            for (let i = this.page.currentPage + 1; i <= this.page.numberOfPages; i++) {
                this.range.push(i);
                upperSpan--;
            }
            if (upperSpan > 0) {
                while (upperSpan > 0 && this.range[0] - 1 > 0) {
                    this.range.unshift(this.range[0] - 1);
                    upperSpan--;
                }
            }
        }
    }
    setPage(page) {
        if (this.page.currentPage !== page) {
            this.page.currentPage = page;
            this.calculateRange();
            this.pageChange.emit(this.page);
        }
    }
    previousPage() {
        if (this.page.currentPage > 1) {
            this.setPage(this.page.currentPage - 1);
        }
    }
    nextPage() {
        if (this.page.currentPage < this.page.numberOfPages) {
            this.setPage(this.page.currentPage + 1);
        }
    }
    ngDoCheck() {
        if (this.page) {
            this.calculateRange();
        }
    }
    ngOnChanges(changes) {
        if (changes['options'] && changes['options'].currentValue) {
            this.setOptions();
        }
    }
}
NgxPaginateComponent.ɵfac = function NgxPaginateComponent_Factory(t) { return new (t || NgxPaginateComponent)(); };
NgxPaginateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxPaginateComponent, selectors: [["ngx-paginate"]], inputs: { options: "options", page: "page" }, outputs: { pageChange: "pageChange", pageSizeChange: "pageSizeChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 5, consts: [[1, "pages"], ["class", "first-page-button page-entry", 3, "ngClass", "click", 4, "ngIf"], ["class", "prev-button page-entry", 3, "ngClass", "click", 4, "ngIf"], [1, "page-selection"], ["class", "page-entry", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "next-button page-entry", 3, "ngClass", "click", 4, "ngIf"], ["class", "last-page-button page-entry", 3, "ngClass", "click", 4, "ngIf"], [1, "first-page-button", "page-entry", 3, "ngClass", "click"], [1, "prev-button", "page-entry", 3, "ngClass", "click"], [1, "page-entry", 3, "ngClass", "click"], [1, "next-button", "page-entry", 3, "ngClass", "click"], [1, "last-page-button", "page-entry", 3, "ngClass", "click"]], template: function NgxPaginateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxPaginateComponent_span_1_Template, 2, 4, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxPaginateComponent_span_2_Template, 2, 4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgxPaginateComponent_span_4_Template, 2, 4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgxPaginateComponent_span_5_Template, 2, 4, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NgxPaginateComponent_span_6_Template, 2, 4, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.internalOptions.firstPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.internalOptions.previousPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.range);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.internalOptions.nextPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.internalOptions.lastPage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.page-selection[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\nselect[_ngcontent-%COMP%] {\n  height: 30px;\n}\n\n.pages[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.page-entry[_ngcontent-%COMP%] {\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  background-color: #EEEDEE;\n  margin: 0 1px;\n  cursor: pointer;\n  white-space: nowrap;\n  min-width: 14px;\n  width: auto;\n  padding: 0 8px;\n}\n\n.page-entry.active[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #b6b6b6;\n  cursor: default;\n}\n\n.page-entry.disabled[_ngcontent-%COMP%] {\n  opacity: 0.3;\n  cursor: default;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob2FuZ3NvbnVpL1dvcmtzL0Rldi9Db25nVGhvbmdUaW4vQ29uZ1Rob25nVGluR1RWVC9zcmMvYXBwL3BhZ2luYXRlL3BhZ2luYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdpbmF0ZS9wYWdpbmF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0RGOztBREdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDQUY7O0FER0E7RUFDRSxZQWRPO0FDY1Q7O0FER0E7RUFDRSxhQUFBO0FDQUY7O0FER0E7RUFDRSxZQXRCTztFQXVCUCxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNBRjs7QURDRTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNDSjs7QURDRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdpbmF0ZS9wYWdpbmF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRoZWlnaHQ6IDMwcHg7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4ucGFnZS1zZWxlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbnNlbGVjdCB7XHJcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xyXG59XHJcblxyXG4ucGFnZXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5wYWdlLWVudHJ5IHtcclxuICBoZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFREVFO1xyXG4gIG1hcmdpbjogMCAxcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgbWluLXdpZHRoOiAxNHB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDAgOHB4O1xyXG4gICYuYWN0aXZlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODIsIDE4MiwgMTgyKTtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICB9XHJcbiAgJi5kaXNhYmxlZCB7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnBhZ2Utc2VsZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbnNlbGVjdCB7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLnBhZ2VzIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnBhZ2UtZW50cnkge1xuICBoZWlnaHQ6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUVERUU7XG4gIG1hcmdpbjogMCAxcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWluLXdpZHRoOiAxNHB4O1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogMCA4cHg7XG59XG4ucGFnZS1lbnRyeS5hY3RpdmUge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNmI2YjY7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbi5wYWdlLWVudHJ5LmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC4zO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59Il19 */", "@media (max-width: 780px){\n.page-entry.disabled[_ngcontent-%COMP%]{\n  display: none !important;\n}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hdGUvcGFnaW5hdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hdGUvcGFnaW5hdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQG1lZGlhIChtYXgtd2lkdGg6IDc4MHB4KXtcbi5wYWdlLWVudHJ5LmRpc2FibGVke1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxPaginateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-paginate',
                templateUrl: './paginate.component.html',
                styleUrls: ['./paginate.component.scss', './paginate.component.css']
            }]
    }], function () { return []; }, { options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], pageSizeChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/thong-tin-du-an/thong-tin-du-an.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/thong-tin-du-an/thong-tin-du-an.component.ts ***!
  \**************************************************************/
/*! exports provided: ThongTinDuAnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinDuAnComponent", function() { return ThongTinDuAnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/call-api.service */ "./src/services/call-api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _detailPages_detailpage_tin_tuc_tin_tuc_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../detailPages/detailpage/tin-tuc/tin-tuc.component */ "./src/app/detailPages/detailpage/tin-tuc/tin-tuc.component.ts");
/* harmony import */ var _body_dich_vu_dich_vu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../body/dich-vu/dich-vu.component */ "./src/app/body/dich-vu/dich-vu.component.ts");
/* harmony import */ var _body_media_media_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../body/media/media.component */ "./src/app/body/media/media.component.ts");
/* harmony import */ var _body_thong_ke_thong_ke_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../body/thong-ke/thong-ke.component */ "./src/app/body/thong-ke/thong-ke.component.ts");










function ThongTinDuAnComponent_option_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "option", 29);
} }
function ThongTinDuAnComponent_option_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const taitro_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", taitro_r23.ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](taitro_r23.TenDayDu);
} }
function ThongTinDuAnComponent_option_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const loaiDA_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", loaiDA_r24.ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](loaiDA_r24.TenDayDu);
} }
function ThongTinDuAnComponent_tr_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r25.MaDuAn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r25.TieuDe);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r25.TenLinhVuc, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r25.LoaiHinhTaiTro, " ");
} }
class ThongTinDuAnComponent {
    constructor(callApiService, http, router, render, activeRouter) {
        this.callApiService = callApiService;
        this.http = http;
        this.router = router;
        this.render = render;
        this.activeRouter = activeRouter;
        this.taitro = [];
        this.linhvuc = [];
        this.loaiDA = [];
        this.urlTaiTro = 'DuAnDauTu/GetListLoaiDuAn?ParentID=19';
        this.urlLinhVuc = 'DuAnDauTu/GetListLoaiDuAn?ParentID=17';
        this.urlLoaiDA = 'DuAnDauTu/GetListLoaiDuAn?ParentID=18';
        this.url = 'DuAnDauTu/GetListDuAnDauTu?pageNumber=1&rowsPerPage=10&PortalID=0&LoaiDuAnDauTu=';
        this.callApiService.getDuAn(this.urlTaiTro)
            .subscribe((data) => {
            this.taitro = data;
        });
        this.callApiService.getDuAn(this.urlLinhVuc)
            .subscribe((data) => {
            this.linhvuc = data;
        });
        this.callApiService.getDuAn(this.urlLoaiDA)
            .subscribe((data) => {
            this.loaiDA = data;
        });
    }
    ngOnInit() {
        this.onLoad();
        window.scroll(0, 0);
    }
    // tangPhanQuang() {
    //   DecreaseContrast();
    // }
    // giamPhanQuang() {
    //   IncreaseContrast();
    // }
    // tangSize() {
    //   tangFormChu();
    // }
    // giamSize() {
    //   giamFormChu();
    // }
    // inBai() {
    //   PrintElem('#printContent');
    // }
    onSearch() {
        this.callApiService.getDuAn(this.url + this.loaiDuAnID)
            .subscribe((data) => {
            this.dulieu = data;
        });
        // console.log(this.tenDuAn);
        // console.log(this.fromDate);
        // console.log(this.toDate);
        // console.log(this.linhVucID);
        // console.log(this.loaiHinhTaiTroID);
    }
    //   searched(value) {
    // console.log(value);
    //   }
    onLoad() {
        const empid = this.activeRouter.snapshot.params.ID;
        this.callApiService.getDuAn(this.url + empid)
            .subscribe((data) => {
            this.thongtin = data;
            // console.log(data);
        });
    }
    reSearch(id) {
        console.log(id);
        this.callApiService.getDuAn(this.url + id)
            .subscribe((data) => {
            this.dulieu = data;
            console.log(data);
        });
    }
}
ThongTinDuAnComponent.ɵfac = function ThongTinDuAnComponent_Factory(t) { return new (t || ThongTinDuAnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__["CallApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
ThongTinDuAnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThongTinDuAnComponent, selectors: [["app-thong-tin-du-an"]], decls: 80, vars: 4, consts: [["id", "content-news-info", 1, "row", "news-info"], ["id", "printContent", 1, "col-sm-8"], [1, "first-item", "motaText"], [1, "card", "card-body"], [1, "row"], ["role", "search", 1, "col-sm-2", 2, "line-height", "2.5"], ["role", "search", "id", "form123", 1, "col-sm-4"], ["type", "text", "name", "searchString", "autocomplete", "off", "value", "", "placeholder", "Nh\u1EADp t\u1EEB kh\u00F3a", 1, "form-control", 2, "width", "100%", 3, "input"], ["role", "search", 1, "col-sm-2"], ["type", "submit", 1, "btn", "btn-default", 3, "click"], ["role", "search", 1, "col-sm-4"], ["type", "date", "data-date", "", "data-date-format", "DD MMMM YYYY", "id", "dateFrom", "name", "dateFrom", 3, "input"], ["role", "search", 1, "col-sm-2,5", 2, "line-height", "2.5"], ["type", "date", "id", "dateTo", "name", "dateTo", 3, "input"], ["name", "linhvuc", "id", "linhvuc", 1, "form-control", 3, "input"], ["value", "0"], ["value", "1", 4, "ngFor", "ngForOf"], ["name", "loaihinhtaitro", "id", "loaihinhtaitro", 1, "form-control", 3, "input"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "loaiduan", "id", "loaiduan", 1, "form-control", 3, "input"], [1, "table-responsive"], [1, "table", "table-striped", "table-bordered", "table-hover", "dataTables-example"], ["width", "85", 2, "text-align", "center"], [2, "text-align", "center"], ["width", "200", 2, "text-align", "center"], ["width", "150", 2, "text-align", "center"], ["class", "gradeX", 4, "ngFor", "ngForOf"], [1, "col-sm-4"], [1, "mt-4"], ["value", "1"], [3, "value"], [1, "gradeX"], [2, "vertical-align", "middle"]], template: function ThongTinDuAnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "T\u00EAn d\u1EF1 \u00E1n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ThongTinDuAnComponent_Template_input_input_9_listener($event) { return ctx.tenDuAn = $event.target.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThongTinDuAnComponent_Template_button_click_11_listener() { return ctx.onSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "T\u00ECm ki\u1EBFm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "T\u1EEB ng\u00E0y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ThongTinDuAnComponent_Template_input_input_19_listener($event) { return ctx.fromDate = $event.target.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \u00A0 \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0111\u1EBFn ng\u00E0y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u00A0 \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ThongTinDuAnComponent_Template_input_input_26_listener($event) { return ctx.toDate = $event.target.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "L\u0129nh v\u1EF1c");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ThongTinDuAnComponent_Template_select_input_33_listener($event) { return ctx.linhVucID = $event.target.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "-- Ch\u1ECDn l\u0129nh v\u1EF1c --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ThongTinDuAnComponent_option_36_Template, 1, 0, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Lo\u1EA1i h\u00ECnh t\u00E0i tr\u1EE3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ThongTinDuAnComponent_Template_select_input_42_listener($event) { return ctx.loaiHinhTaiTroID = $event.target.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "-- Ch\u1ECDn lo\u1EA1i h\u00ECnh t\u00E0i tr\u1EE3 --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ThongTinDuAnComponent_option_45_Template, 2, 2, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Lo\u1EA1i d\u1EF1 \u00E1n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ThongTinDuAnComponent_Template_select_input_52_listener($event) { return ctx.loaiDuAnID = $event.target.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "-- Ch\u1ECDn lo\u1EA1i d\u1EF1 \u00E1n --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ThongTinDuAnComponent_option_55_Template, 2, 2, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "table", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "M\u00E3 d\u1EF1 \u00E1n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "T\u00EAn d\u1EF1 \u00E1n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "L\u0129nh v\u1EF1c");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Lo\u1EA1i h\u00ECnh t\u00E0i tr\u1EE3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, ThongTinDuAnComponent_tr_70_Template, 9, 4, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "app-tin-tuc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "app-dich-vu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "app-media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "app-thong-ke");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.linhvuc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.taitro);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.loaiDA);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dulieu);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _detailPages_detailpage_tin_tuc_tin_tuc_component__WEBPACK_IMPORTED_MODULE_5__["TinTucComponent"], _body_dich_vu_dich_vu_component__WEBPACK_IMPORTED_MODULE_6__["DichVuComponent"], _body_media_media_component__WEBPACK_IMPORTED_MODULE_7__["MediaComponent"], _body_thong_ke_thong_ke_component__WEBPACK_IMPORTED_MODULE_8__["ThongKeComponent"]], styles: [".form-control[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.card[_ngcontent-%COMP%] {\n  border: 0;\n  border-radius: .25rem;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0,0,0,.125);\n  border-radius: .25rem;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n      position: relative;\n  }\n.card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  padding: 1.25rem;\n}\n.tieuDe[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\nb[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-style: bold;\n  \n}\n\n.btn[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  display: inline-block;\n  text-decoration: none;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n}\n.btn[_ngcontent-%COMP%]:focus, .btn[_ngcontent-%COMP%]:active:focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n.btn[_ngcontent-%COMP%]:hover, .btn[_ngcontent-%COMP%]:focus {\n  color: #333;\n  text-decoration: none;\n}\n.btn[_ngcontent-%COMP%]:active {\n  background-image: none;\n  outline: 0;\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n}\n\n.btn-default[_ngcontent-%COMP%] {\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc;\n}\n.btn-default[_ngcontent-%COMP%]:focus {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #8c8c8c;\n}\n.btn-default[_ngcontent-%COMP%]:hover {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n.btn-default[_ngcontent-%COMP%]:active {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n#datepicker[_ngcontent-%COMP%]{\n  width:180px;\n  }\n#datepicker[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:hover{\n  cursor: pointer;\n  }\n.table-responsive[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    min-height: 0.01%;\n}\n@media screen and (max-width:767px) {\n    .table-responsive[_ngcontent-%COMP%] {\n        width: 100%;\n        margin-bottom: 15px;\n        overflow-y: hidden;\n        -ms-overflow-style: -ms-autohiding-scrollbar;\n        border: 1px solid #ddd;\n    }\n\n        .table-responsive[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%] {\n            margin-bottom: 0;\n        }\n\n            .table-responsive[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n                white-space: nowrap;\n            }\n\n        .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%] {\n            border: 0;\n        }\n\n            .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child, .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child, .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child, .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]:first-child, .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]:first-child, .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]:first-child {\n                border-left: 0;\n            }\n\n            .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child, .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child, .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child, .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]:last-child, .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]:last-child, .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]:last-child {\n                border-right: 0;\n            }\n\n            .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:last-child    > th[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:last-child    > th[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:last-child    > td[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:last-child    > td[_ngcontent-%COMP%] {\n                border-bottom: 0;\n            }\n}\n\n[type=\"date\"][_ngcontent-%COMP%] {\n  background:#fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png)  97% 50% no-repeat ;\n}\n[type=\"date\"][_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  display: none;\n}\n[type=\"date\"][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  opacity: 0;\n}\n\nbody[_ngcontent-%COMP%] {\n  padding: 4em;\n  background: #e5e5e5;\n  font: 13px/1.4 Geneva, 'Lucida Sans', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;\n}\nlabel[_ngcontent-%COMP%] {\n  display: block;\n}\ninput[_ngcontent-%COMP%] {\n  border: 1px solid #c4c4c4;\n  border-radius: 5px;\n  background-color: #fff;\n  padding: 5px 5px;\n  box-shadow: inset 0 3px 6px rgba(0,0,0,0.1);\n  width: 210px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhvbmctdGluLWR1LWFuL3Rob25nLXRpbi1kdS1hbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBR2xCLGFBQWE7RUFJYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGtDQUFrQztFQUNsQyxxQkFBcUI7QUFDdkI7QUFFRTtNQUNJLGtCQUFrQjtFQUN0QjtBQUVGO0VBR0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7QUFFQTs7R0FFRztBQUdIO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUV0QiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsNkJBQTZCO0FBQy9CO0FBQ0E7O0VBRUUsb0JBQW9CO0VBQ3BCLDBDQUEwQztFQUMxQyxvQkFBb0I7QUFDdEI7QUFDQTs7RUFFRSxXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUVWLCtDQUErQztBQUNqRDtBQUVBOzhCQUM4QjtBQUM5QjtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCO0FBR0E7RUFDRSxXQUFXO0VBQ1g7QUFDQTtFQUNBLGVBQWU7RUFDZjtBQUdBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQiw0Q0FBNEM7UUFDNUMsc0JBQXNCO0lBQzFCOztRQUVJO1lBQ0ksZ0JBQWdCO1FBQ3BCOztZQUVJO2dCQUNJLG1CQUFtQjtZQUN2Qjs7UUFFSjtZQUNJLFNBQVM7UUFDYjs7WUFFSTtnQkFDSSxjQUFjO1lBQ2xCOztZQUVBO2dCQUNJLGVBQWU7WUFDbkI7O1lBRUE7Z0JBQ0ksZ0JBQWdCO1lBQ3BCO0FBQ1o7QUFFQTs7R0FFRztBQUdIO0VBQ0UsNEhBQTRIO0FBQzlIO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUdBQWlHO0FBQ25HO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsMkNBQTJDO0VBQzNDLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3Rob25nLXRpbi1kdS1hbi90aG9uZy10aW4tZHUtYW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uZm9ybS1jb250cm9sIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY2FyZCB7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4td2lkdGg6IDA7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpO1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG59XG5cbiAgLmNhcmQgLmNhcmQtYm9keSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuLmNhcmQtYm9keSB7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIC1tcy1mbGV4OiAxIDEgYXV0bztcbiAgZmxleDogMSAxIGF1dG87XG4gIHBhZGRpbmc6IDEuMjVyZW07XG59XG5cbi50aWV1RGUge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtc3R5bGU6IGJvbGQ7XG4gIC8qIG1hcmdpbi1sZWZ0OjMwJTsgKi9cbn1cblxuLyogI2Zvcm0xMjMge1xuICBtYXJnaW4tbGVmdDowJTtcbn0gKi9cblxuXG4uYnRuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLW1zLXRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5idG46Zm9jdXMsXG4uYnRuOmFjdGl2ZTpmb2N1cyB7XG4gIG91dGxpbmU6IHRoaW4gZG90dGVkO1xuICBvdXRsaW5lOiA1cHggYXV0byAtd2Via2l0LWZvY3VzLXJpbmctY29sb3I7XG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xufVxuLmJ0bjpob3Zlcixcbi5idG46Zm9jdXMge1xuICBjb2xvcjogIzMzMztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmJ0bjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBvdXRsaW5lOiAwO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgM3B4IDVweCByZ2JhKDAsIDAsIDAsIC4xMjUpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDNweCA1cHggcmdiYSgwLCAwLCAwLCAuMTI1KTtcbn1cblxuLyogZGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLmJ0bi1kZWZhdWx0IHtcbiAgY29sb3I6ICMzMzM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1jb2xvcjogI2NjYztcbn1cbi5idG4tZGVmYXVsdDpmb2N1cyB7XG4gIGNvbG9yOiAjMzMzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xuICBib3JkZXItY29sb3I6ICM4YzhjOGM7XG59XG4uYnRuLWRlZmF1bHQ6aG92ZXIge1xuICBjb2xvcjogIzMzMztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbiAgYm9yZGVyLWNvbG9yOiAjYWRhZGFkO1xufVxuLmJ0bi1kZWZhdWx0OmFjdGl2ZSB7XG4gIGNvbG9yOiAjMzMzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xuICBib3JkZXItY29sb3I6ICNhZGFkYWQ7XG59XG5cblxuI2RhdGVwaWNrZXJ7XG4gIHdpZHRoOjE4MHB4O1xuICB9XG4gICNkYXRlcGlja2VyID4gc3Bhbjpob3ZlcntcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cblxuICAudGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBtaW4taGVpZ2h0OiAwLjAxJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCkge1xuICAgIC50YWJsZS1yZXNwb25zaXZlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgfVxuXG4gICAgICAgIC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cblxuICAgICAgICAgICAgLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUgPiB0aGVhZCA+IHRyID4gdGgsIC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlID4gdGJvZHkgPiB0ciA+IHRoLCAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZSA+IHRmb290ID4gdHIgPiB0aCwgLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUgPiB0aGVhZCA+IHRyID4gdGQsIC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlID4gdGJvZHkgPiB0ciA+IHRkLCAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZSA+IHRmb290ID4gdHIgPiB0ZCB7XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCB7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAgICAgLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUtYm9yZGVyZWQgPiB0aGVhZCA+IHRyID4gdGg6Zmlyc3QtY2hpbGQsIC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGJvZHkgPiB0ciA+IHRoOmZpcnN0LWNoaWxkLCAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCA+IHRmb290ID4gdHIgPiB0aDpmaXJzdC1jaGlsZCwgLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUtYm9yZGVyZWQgPiB0aGVhZCA+IHRyID4gdGQ6Zmlyc3QtY2hpbGQsIC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGJvZHkgPiB0ciA+IHRkOmZpcnN0LWNoaWxkLCAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCA+IHRmb290ID4gdHIgPiB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGhlYWQgPiB0ciA+IHRoOmxhc3QtY2hpbGQsIC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGJvZHkgPiB0ciA+IHRoOmxhc3QtY2hpbGQsIC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGZvb3QgPiB0ciA+IHRoOmxhc3QtY2hpbGQsIC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGhlYWQgPiB0ciA+IHRkOmxhc3QtY2hpbGQsIC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGJvZHkgPiB0ciA+IHRkOmxhc3QtY2hpbGQsIC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGZvb3QgPiB0ciA+IHRkOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyOmxhc3QtY2hpbGQgPiB0aCwgLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUtYm9yZGVyZWQgPiB0Zm9vdCA+IHRyOmxhc3QtY2hpbGQgPiB0aCwgLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyOmxhc3QtY2hpbGQgPiB0ZCwgLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUtYm9yZGVyZWQgPiB0Zm9vdCA+IHRyOmxhc3QtY2hpbGQgPiB0ZCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICAgICAgICAgIH1cbn1cblxuLyogLm1vdGFUZXh0ID4+PiBjYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG59ICovXG5cblxuW3R5cGU9XCJkYXRlXCJdIHtcbiAgYmFja2dyb3VuZDojZmZmIHVybChodHRwczovL2NkbjEuaWNvbmZpbmRlci5jb20vZGF0YS9pY29ucy9jY19tb25vX2ljb25fc2V0L2JsYWNrcy8xNngxNi9jYWxlbmRhcl8yLnBuZykgIDk3JSA1MCUgbm8tcmVwZWF0IDtcbn1cblt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5bdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi8qIGN1c3RvbSBzdHlsZXMgKi9cbmJvZHkge1xuICBwYWRkaW5nOiA0ZW07XG4gIGJhY2tncm91bmQ6ICNlNWU1ZTU7XG4gIGZvbnQ6IDEzcHgvMS40IEdlbmV2YSwgJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG5sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzRjNGM0O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMSk7XG4gIHdpZHRoOiAyMTBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThongTinDuAnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-thong-tin-du-an',
                templateUrl: './thong-tin-du-an.component.html',
                styleUrls: ['./thong-tin-du-an.component.css']
            }]
    }], function () { return [{ type: src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__["CallApiService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/topBar/chuc-nang-nghiep-vu/chuc-nang-nghiep-vu.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/topBar/chuc-nang-nghiep-vu/chuc-nang-nghiep-vu.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ChucNangNghiepVuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChucNangNghiepVuComponent", function() { return ChucNangNghiepVuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _detailPages_detailpage_tin_tuc_tin_tuc_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../detailPages/detailpage/tin-tuc/tin-tuc.component */ "./src/app/detailPages/detailpage/tin-tuc/tin-tuc.component.ts");
/* harmony import */ var _body_dich_vu_dich_vu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../body/dich-vu/dich-vu.component */ "./src/app/body/dich-vu/dich-vu.component.ts");
/* harmony import */ var _body_media_media_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../body/media/media.component */ "./src/app/body/media/media.component.ts");
/* harmony import */ var _body_thong_ke_thong_ke_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../body/thong-ke/thong-ke.component */ "./src/app/body/thong-ke/thong-ke.component.ts");






class ChucNangNghiepVuComponent {
    constructor() {
    }
    ngOnInit() {
    }
    tangPhanQuang() {
        DecreaseContrast();
    }
    giamPhanQuang() {
        IncreaseContrast();
    }
    tangSize() {
        tangFormChu();
    }
    giamSize() {
        giamFormChu();
    }
    inBai() {
        PrintElem('#printContent');
    }
}
ChucNangNghiepVuComponent.ɵfac = function ChucNangNghiepVuComponent_Factory(t) { return new (t || ChucNangNghiepVuComponent)(); };
ChucNangNghiepVuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChucNangNghiepVuComponent, selectors: [["app-chuc-nang-nghiep-vu"]], decls: 231, vars: 0, consts: [["id", "content-news-info", 1, "row", "news-info"], ["id", "printContent", 1, "col-sm-8"], [1, "row"], [1, "col-md-12"], [1, "content"], ["id", "notPrint", 1, "col-lg-16-", "col-md-16", "col-sm-16", "col-xs-16"], ["id", "btnPrintContent", 1, "text-muted", "fontchu", 2, "cursor", "pointer", 3, "click"], [1, "fa", "fa-print", 3, "click"], ["id", "detail-icon", 1, "detail-icon"], [1, "text-muted", "fontchu"], ["id", "btnIncreaseContrast", "title", "T\u0103ng \u0111\u1ED9 t\u01B0\u01A1ng ph\u1EA3n", 2, "cursor", "pointer", 3, "click"], [1, "icon", 2, "font-size", "18px"], [1, "fa", "fa-adjust"], ["id", "btnDecreaseContrast", "title", "Gi\u1EA3m \u0111\u1ED9 t\u01B0\u01A1ng ph\u1EA3n", 2, "cursor", "pointer", 3, "click"], [1, "icon", 2, "font-size", "15px"], ["id", "btnIncreaseFontSize", "title", "T\u0103ng font ch\u1EEF", 1, "btn", "btn-xs", "btn-default", 3, "click"], [1, "icon", 2, "font-size", "19px"], [1, "fa", "fa-font"], ["id", "btnDecreaseFontSize", "title", "Gi\u1EA3m font ch\u1EEF", 1, "btn", "btn-xs", "btn-default", 2, "margin-right", "5px", 3, "click"], ["id", "btn-share"], [1, "col-lg-16", "col-md-16", "col-sm-16", "col-xs-16"], ["data-href", "", "data-oaid", "579745863508352884", "data-layout", "1", "data-color", "blue", "data-customize", "false", 1, "zalo-share-button"], [1, "gtcont", "motaText"], [2, "text-align", "justify", "line-height", "150%"], [2, "line-height", "150%", "font-family", "'arial','sans-serif'", "color", "rgb(6, 58, 196)", "font-size", "15px"], [2, "line-height", "150%", "font-family", "'arial','sans-serif'", "font-size", "15px"], [2, "color", "rgb(6, 58, 196)"], [1, "col-sm-4"], [1, "mt-4"]], template: function ChucNangNghiepVuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "CH\u1EE8C N\u0102NG NGHI\u1EC6P V\u1EE4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChucNangNghiepVuComponent_Template_a_click_9_listener() { return ctx.inBai(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "In b\u00E0i vi\u1EBFt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChucNangNghiepVuComponent_Template_i_click_11_listener() { return ctx.inBai(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0110\u1ED9 t\u01B0\u01A1ng ph\u1EA3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChucNangNghiepVuComponent_Template_a_click_15_listener() { return ctx.giamPhanQuang(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChucNangNghiepVuComponent_Template_a_click_18_listener() { return ctx.tangPhanQuang(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Font ch\u1EEF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChucNangNghiepVuComponent_Template_button_click_23_listener() { return ctx.tangSize(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChucNangNghiepVuComponent_Template_button_click_26_listener() { return ctx.giamSize(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "V\u1EC1 ph\u00E1p lu\u1EADt: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " 1.Tr\u00EAn c\u01A1 s\u1EDF c\u00E1c quy \u0111\u1ECBnh c\u1EE7a ph\u00E1p lu\u1EADt, c\u00E1c v\u0103n b\u1EA3n quy \u0111\u1ECBnh c\u1EE7a Ch\u00EDnh ph\u1EE7, c\u00E1c v\u0103n b\u1EA3n quy \u0111\u1ECBnh, h\u01B0\u1EDBng d\u1EABn c\u1EE7a B\u1ED9 qu\u1EA3n l\u00FD ng\u00E0nh, nghi\u00EAn c\u1EE9u, th\u1EC3 ch\u1EBF h\u00F3a th\u00E0nh c\u00E1c v\u0103n b\u1EA3n quy ph\u1EA1m ph\u00E1p lu\u1EADt theo y\u00EAu c\u1EA7u qu\u1EA3n l\u00FD nh\u00E0 n\u01B0\u1EDBc theo ng\u00E0nh c\u1EE7a S\u1EDF, tr\u00ECnh UBND th\u00E0nh ph\u1ED1 ban h\u00E0nh v\u00E0 ch\u1ECBu tr\u00E1ch nhi\u1EC7m h\u01B0\u1EDBng d\u1EABn, tri\u1EC3n khai th\u1EF1c hi\u1EC7n c\u00E1c quy \u0111\u1ECBnh \u0111\u00F3, nh\u1EB1m \u0111\u1EA3m b\u1EA3o t\u00EDnh th\u1ED1ng nh\u1EA5t, hi\u1EC7u l\u1EF1c v\u00E0 hi\u1EC7u qu\u1EA3 trong ph\u1EA1m vi to\u00E0n th\u00E0nh ph\u1ED1. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " 2.Th\u1EF1c hi\u1EC7n c\u00F4ng t\u00E1c thanh tra v\u00E0 ki\u1EC3m tra vi\u1EC7c th\u1EF1c hi\u1EC7n ph\u00E1p lu\u1EADt GTVT tr\u00EAn \u0111\u1ECBa b\u00E0n th\u00E0nh ph\u1ED1, \u0111\u1EA3m b\u1EA3o nhi\u1EC7m v\u1EE5 qu\u1EA3n l\u00FD nh\u00E0 n\u01B0\u1EDBc ng\u00E0nh GTVT tr\u00EAn c\u00E1c l\u0129nh v\u1EF1c giao th\u00F4ng \u0111\u01B0\u1EDDng b\u1ED9, \u0111\u01B0\u1EDDng thu\u1EF7, b\u1EBFn c\u1EA3ng, tho\u00E1t n\u01B0\u1EDBc, chi\u1EBFu s\u00E1ng. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " 3.T\u1ED5 ch\u1EE9c c\u00F4ng t\u00E1c s\u00E1t h\u1EA1ch, c\u1EA5p, thu h\u1ED3i, gia h\u1EA1n gi\u1EA5y ph\u00E9p b\u1EB1ng thuy\u1EC1n, m\u00E1y tr\u01B0\u1EDFng t\u00E0u s\u00F4ng h\u1EA1ng 3, l\u00E1i t\u00E0u v\u00E0 c\u00E1c lo\u1EA1i gi\u1EA5y ph\u00E9p kh\u00E1c ... thu\u1ED9c ch\u1EE9c n\u0103ng c\u1EE7a S\u1EDF theo quy \u0111\u1ECBnh c\u1EE7a ph\u00E1p lu\u1EADt, s\u1EF1 ph\u00E2n c\u1EA5p c\u1EE7a B\u1ED9 qu\u1EA3n l\u00FD chuy\u00EAn ng\u00E0nh v\u00E0 c\u1EE7a \u1EE6y ban nh\u00E2n d\u00E2n th\u00E0nh ph\u1ED1. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " 4.Ph\u1ED1i h\u1EE3p v\u1EDBi c\u00E1c ng\u00E0nh c\u00F3 li\u00EAn quan trong vi\u1EC7c gi\u00E1o d\u1EE5c, tuy\u00EAn truy\u1EC1n, th\u00F4ng tin ph\u1ED5 bi\u1EBFn c\u00E1c v\u0103n b\u1EA3n quy ph\u1EA1m lu\u1EADt c\u00F3 li\u00EAn quan \u0111\u1EBFn ng\u00E0nh giao th\u00F4ng v\u1EADn t\u1EA3i. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "V\u1EC1 quy ho\u1EA1ch, k\u1EBF ho\u1EA1ch: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " 1.Tr\u00ECnh \u1EE6y ban nh\u00E2n d\u00E2n th\u00E0nh ph\u1ED1 quy ho\u1EA1ch ph\u00E1t tri\u1EC3n ng\u00E0nh GTVT th\u00E0nh ph\u1ED1, ph\u00F9 h\u1EE3p v\u1EDBi quy ho\u1EA1ch ph\u00E1t tri\u1EC3n kinh t\u1EBF x\u00E3 h\u1ED9i chung c\u1EE7a c\u1EA3 n\u01B0\u1EDBc v\u00E0 c\u1EE7a th\u00E0nh ph\u1ED1 H\u1ED3 Ch\u00ED Minh. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " 2.Tr\u00ECnh \u1EE6y ban nh\u00E2n d\u00E2n th\u00E0nh ph\u1ED1 ph\u01B0\u01A1ng h\u01B0\u1EDBng, m\u1EE5c ti\u00EAu, k\u1EBF ho\u1EA1ch 5 n\u0103m v\u00E0 h\u00E0ng n\u0103m c\u1EE7a ng\u00E0nh GTVT (k\u1EC3 c\u1EA3 khu v\u1EF1c qu\u1EADn huy\u1EC7n), h\u01B0\u1EDBng d\u1EABn v\u00E0 t\u1ED5 ch\u1EE9c th\u1EF1c hi\u1EC7n quy ho\u1EA1ch, k\u1EBF ho\u1EA1ch \u0111\u01B0\u1EE3c duy\u1EC7t trong to\u00E0n ng\u00E0nh. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " 3.Tr\u00ECnh \u1EE6y ban nh\u00E2n d\u00E2n th\u00E0nh ph\u1ED1 c\u00E1c k\u1EBF ho\u1EA1ch \u0111\u1EA7u t\u01B0 XDCB ph\u00E1t tri\u1EC3n ng\u00E0nh GTVT tr\u00EAn to\u00E0n \u0111\u1ECBa b\u00E0n th\u00E0nh ph\u1ED1, tr\u00EAn c\u01A1 s\u1EDF \u0111\u00F3 \u0111\u1EC1 xu\u1EA5t s\u1EF1 ph\u00E2n c\u00F4ng ph\u00E2n c\u1EA5p cho c\u00E1c \u0111\u01A1n v\u1ECB v\u00E0 \u0111\u1ECBa ph\u01B0\u01A1ng tr\u00EAn \u0111\u1ECBa b\u00E0n th\u00E0nh ph\u1ED1 t\u1ED5 ch\u1EE9c th\u1EF1c hi\u1EC7n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " 4.Ch\u1EC9 \u0111\u1EA1o, h\u01B0\u1EDBng d\u1EABn v\u00E0 ki\u1EC3m tra vi\u1EC7c th\u1EF1c hi\u1EC7n c\u00E1c ch\u01B0\u01A1ng tr\u00ECnh, d\u1EF1 \u00E1n \u0111\u1EA7u t\u01B0 ph\u00E1t tri\u1EC3n do S\u1EDF ph\u1EE5 tr\u00E1ch tr\u00EAn \u0111\u1ECBa b\u00E0n th\u00E0nh ph\u1ED1, theo d\u00F5i qu\u00E1 tr\u00ECnh th\u1EF1c hi\u1EC7n k\u1EBF ho\u1EA1ch ng\u00E0nh, \u0111\u1EC1 xu\u1EA5t v\u1EDBi \u1EE6y ban nh\u00E2n d\u00E2n th\u00E0nh ph\u1ED1 \u0111\u1EC3 x\u1EED l\u00FD c\u00E1c v\u1EA5n \u0111\u1EC1 ph\u00E1t sinh trong qu\u00E1 tr\u00ECnh th\u1EF1c hi\u1EC7n k\u1EBF ho\u1EA1ch. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "V\u1EC1 qu\u1EA3n l\u00FD x\u00E2y d\u1EF1ng c\u00E1c c\u00F4ng tr\u00ECnh chuy\u00EAn ng\u00E0nh: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " 1.Th\u1EF1c hi\u1EC7n ch\u1EE9c n\u0103ng qu\u1EA3n l\u00FD nh\u00E0 n\u01B0\u1EDBc \u0111\u1ED1i v\u1EDBi c\u00E1c t\u1ED5 ch\u1EE9c, c\u00E1 nh\u00E2n th\u1EF1c hi\u1EC7n d\u1EF1 \u00E1n \u0111\u1EA7u t\u01B0, x\u00E2y d\u1EF1ng c\u00F4ng tr\u00ECnh giao th\u00F4ng v\u1EADn t\u1EA3i tr\u00EAn \u0111\u1ECBa b\u00E0n th\u00E0nh ph\u1ED1 theo \u0111\u00FAng ph\u00E1p lu\u1EADt c\u1EE7a nh\u00E0 n\u01B0\u1EDBc v\u00E0 h\u01B0\u1EDBng d\u1EABn c\u1EE7a c\u00E1c B\u1ED9 qu\u1EA3n l\u00FD chuy\u00EAn ng\u00E0nh. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " 2.C\u00F3 \u00FD ki\u1EBFn chuy\u00EAn ng\u00E0nh v\u1EC1 c\u00E1c d\u1EF1 \u00E1n \u0111\u1EA7u t\u01B0 thu\u1ED9c l\u0129nh v\u1EF1c giao th\u00F4ng v\u1EADn t\u1EA3i khi c\u01A1 quan th\u1EA9m \u0111\u1ECBnh c\u00F3 v\u0103n b\u1EA3n \u0111\u1EC1 ngh\u1ECB. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " 3.Gi\u00FAp \u1EE6y ban nh\u00E2n d\u00E2n th\u00E0nh ph\u1ED1 ch\u1EC9 \u0111\u1EA1o, \u0111\u00F4n \u0111\u1ED1c, ki\u1EC3m tra v\u00E0 h\u01B0\u1EDBng d\u1EABn vi\u1EC7c th\u1EF1c hi\u1EC7n x\u00E2y d\u1EF1ng c\u00E1c c\u00F4ng tr\u00ECnh thu\u1ED9c ng\u00E0nh giao th\u00F4ng v\u1EADn t\u1EA3i, c\u00F4ng t\u00E1c \u0111\u1EA5u th\u1EA7u c\u00F4ng tr\u00ECnh chuy\u00EAn ng\u00E0nh theo \u0111\u00FAng \u0111i\u1EC1u l\u1EC7 qu\u1EA3n l\u00FD x\u00E2y d\u1EF1ng c\u01A1 b\u1EA3n c\u1EE7a nh\u00E0 n\u01B0\u1EDBc. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " 4.T\u1ED5 ch\u1EE9c th\u1EA9m \u0111\u1ECBnh, ph\u00EA duy\u1EC7t c\u00E1c h\u1ED3 s\u01A1 thi\u1EBFt k\u1EBF d\u1EF1 to\u00E1n, h\u1ED3 s\u01A1 \u0111\u1EA5u th\u1EA7u c\u00E1c c\u00F4ng tr\u00ECnh chuy\u00EAn ng\u00E0nh theo ph\u00E2n c\u1EA5p, u\u1EF7 quy\u1EC1n c\u1EE7a \u1EE6y ban nh\u00E2n d\u00E2n th\u00E0nh ph\u1ED1. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " 5.Tr\u00ECnh c\u1EA5p tr\u00EAn ph\u00EA duy\u1EC7t c\u00E1c d\u1EF1 \u00E1n c\u00F3 li\u00EAn quan \u0111\u1EBFn c\u00E1c c\u00F4ng tr\u00ECnh thu\u1ED9c ng\u00E0nh giao th\u00F4ng v\u1EADn t\u1EA3i th\u00E0nh ph\u1ED1. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "V\u1EC1 qu\u1EA3n l\u00FD ch\u1EA5t l\u01B0\u1EE3ng c\u00F4ng tr\u00ECnh chuy\u00EAn ng\u00E0nh: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " S\u1EDF c\u00F3 nhi\u1EC7m v\u1EE5 qu\u1EA3n l\u00FD ng\u00E0nh theo ph\u00E2n c\u1EA5p c\u1EE7a \u1EE6y ban nh\u00E2n d\u00E2n th\u00E0nh ph\u1ED1 v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng c\u00E1c c\u00F4ng tr\u00ECnh x\u00E2y d\u1EF1ng theo Ngh\u1ECB \u0111\u1ECBnh 209/2004/N\u0110-CP ng\u00E0y 16/12/2004 c\u1EE7a Ch\u00EDnh ph\u1EE7 v\u1EC1 qu\u1EA3n l\u00FD ch\u1EA5t l\u01B0\u1EE3ng c\u00F4ng tr\u00ECnh x\u00E2y d\u1EF1ng : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " 1.H\u01B0\u1EDBng d\u1EABn, ki\u1EC3m tra vi\u1EC7c th\u1EF1c hi\u1EC7n c\u00E1c v\u0103n b\u1EA3n quy ph\u1EA1m ph\u00E1p lu\u1EADt v\u1EC1 qu\u1EA3n l\u00FD ch\u1EA5t l\u01B0\u1EE3ng c\u00F4ng tr\u00ECnh x\u00E2y d\u1EF1ng chuy\u00EAn ng\u00E0nh t\u1EA1i th\u00E0nh ph\u1ED1. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " 2.Ki\u1EC3m tra \u0111\u1ECBnh k\u1EF3 ho\u1EB7c \u0111\u1ED9t xu\u1EA5t c\u00F4ng t\u00E1c qu\u1EA3n l\u00FD ch\u1EA5t l\u01B0\u1EE3ng c\u00F4ng tr\u00ECnh x\u00E2y d\u1EF1ng chuy\u00EAn ng\u00E0nh c\u1EE7a ch\u1EE7 \u0111\u1EA7u t\u01B0, t\u1ED5 ch\u1EE9c t\u01B0 v\u1EA5n thi\u1EBFt k\u1EBF m\u00E0 doanh nghi\u1EC7p x\u00E2y d\u1EF1ng \u0111\u1ED1i v\u1EDBi c\u00E1c c\u00F4ng tr\u00ECnh chuy\u00EAn ng\u00E0nh thu\u1ED9c d\u1EF1 \u00E1n \u0111\u1EA7u t\u01B0 nh\u00F3m B,C do th\u00E0nh ph\u1ED1 ph\u00E2n c\u1EA5p qu\u1EA3n l\u00FD. Tr\u1EF1c ti\u1EBFp t\u1ED5 ch\u1EE9c ki\u1EC3m tra ch\u1EA5t l\u01B0\u1EE3ng c\u00F4ng tr\u00ECnh x\u00E2y d\u1EF1ng chuy\u00EAn ng\u00E0nh t\u1EA1i \u0111\u1ECBa ph\u01B0\u01A1ng khi c\u1EA7n thi\u1EBFt. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " 3.Ki\u1EBFn ngh\u1ECB x\u1EED l\u00FD c\u00E1c v\u1EA5n \u0111\u1EC1 v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng c\u00F4ng tr\u00ECnh x\u00E2y d\u1EF1ng chuy\u00EAn ng\u00E0nh. Ph\u1ED1i h\u1EE3p v\u1EDBi S\u1EDF X\u00E2y d\u1EF1ng \u0111\u1EC3 gi\u1EA3i quy\u1EBFt s\u1EF1 c\u1ED1 c\u00F4ng tr\u00ECnh x\u00E2y d\u1EF1ng chuy\u00EAn ng\u00E0nh t\u1EA1i th\u00E0nh ph\u1ED1. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " 4.B\u00E1o c\u00E1o \u0111\u1ECBnh k\u1EF3 v\u1EC1 t\u00ECnh h\u00ECnh ch\u1EA5t l\u01B0\u1EE3ng c\u00F4ng tr\u00ECnh x\u00E2y d\u1EF1ng chuy\u00EAn ng\u00E0nh thu\u1ED9c ph\u1EA1m vi \u0111\u01B0\u1EE3c ph\u00E2n c\u1EA5p qu\u1EA3n l\u00FD g\u1EDFi S\u1EDF X\u00E2y d\u1EF1ng th\u00E0nh ph\u1ED1 theo m\u1EABu quy \u0111\u1ECBnh \u0111\u1EC3 t\u1ED5ng h\u1EE3p b\u00E1o c\u00E1o \u1EE6y ban nh\u00E2n d\u00E2n th\u00E0nh ph\u1ED1. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "V\u1EC1 qu\u1EA3n l\u00FD c\u01A1 s\u1EDF h\u1EA1 t\u1EA7ng k\u1EF9 thu\u1EADt chuy\u00EAn ng\u00E0nh giao th\u00F4ng v\u1EADn t\u1EA3i: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " 1.Tr\u00ECnh \u1EE6y ban nh\u00E2n d\u00E2n th\u00E0nh ph\u1ED1 c\u00E1c quy ch\u1EBF t\u1ED5 ch\u1EE9c qu\u1EA3n l\u00FD v\u00E0 khai th\u00E1c h\u1EC7 th\u1ED1ng c\u00F4ng tr\u00ECnh chuy\u00EAn ng\u00E0nh giao th\u00F4ng v\u1EADn t\u1EA3i t\u1EA1i \u0111\u1ECBa ph\u01B0\u01A1ng. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " 2.T\u1ED5 ch\u1EE9c v\u00E0 h\u01B0\u1EDBng d\u1EABn c\u00E1c \u0111\u01A1n v\u1ECB qu\u1EA3n l\u00FD v\u00E0 ch\u1EE7 c\u00F4ng tr\u00ECnh trong vi\u1EC7c duy tu, b\u1EA3o d\u01B0\u1EE1ng v\u00E0 b\u1EA3o v\u1EC7 h\u1EC7 th\u1ED1ng giao th\u00F4ng \u0111\u01B0\u1EDDng b\u1ED9, \u0111\u01B0\u1EDDng thu\u1EF7, c\u1EA5p tho\u00E1t n\u01B0\u1EDBc v\u1EC9a h\u00E8 h\u1EC7 th\u1ED1ng \u0111\u00E8n chi\u1EBFu s\u00E1ng c\u00F4ng c\u1ED9ng, \u0111\u00E8n t\u00EDn hi\u1EC7u giao th\u00F4ng c\u1EE7a th\u00E0nh ph\u1ED1 v\u00E0 c\u00E1c tuy\u1EBFn \u0111\u01B0\u1EDDng s\u00F4ng, \u0111\u01B0\u1EDDng b\u1ED9 do Trung \u01B0\u01A1ng u\u1EF7 th\u00E1c. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " 3.T\u1ED5 ch\u1EE9c ph\u00E2n lu\u1ED3ng giao th\u00F4ng tr\u00EAn \u0111\u1ECBa b\u00E0n th\u00E0nh ph\u1ED1 v\u00E0 ch\u1EC9 \u0111\u1EA1o h\u01B0\u1EDBng d\u1EABn c\u00E1c \u0111\u01A1n v\u1ECB qu\u1EA3n l\u00FD c\u00F4ng tr\u00ECnh giao th\u00F4ng. Thi\u1EBFt l\u1EADp h\u1EC7 th\u1ED1ng bi\u1EC3n b\u00E1o, th\u00F4ng b\u00E1o, t\u00EDn hi\u1EC7u giao th\u00F4ng tr\u00EAn \u0111\u1ECBa b\u00E0n th\u00E0nh ph\u1ED1, d\u1EF1a theo c\u00E1c quy \u0111\u1ECBnh c\u1EE7a nh\u00E0 n\u01B0\u1EDBc v\u00E0 B\u1ED9 giao th\u00F4ng v\u1EADn t\u1EA3i. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " Th\u1EA9m \u0111\u1ECBnh v\u00E0 \u0111\u1EC1 xu\u1EA5t \u1EE6y ban nh\u00E2n d\u00E2n th\u00E0nh ph\u1ED1 ph\u00E2n lo\u1EA1i h\u1EC7 th\u1ED1ng giao th\u00F4ng thu\u1ED9c th\u00E0nh ph\u1ED1 qu\u1EA3n l\u00FD.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " Tr\u00ECnh \u1EE6y ban nh\u00E2n d\u00E2n th\u00E0nh ph\u1ED1 c\u00E1c ch\u00EDnh s\u00E1ch, v\u00E0 c\u00E1c d\u1ECBch v\u1EE5 tho\u00E1t n\u01B0\u1EDBc tr\u00EAn \u0111\u1ECBa b\u00E0n th\u00E0nh ph\u1ED1. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "V\u1EC1 qu\u1EA3n l\u00FD c\u00F4ng vi\u00EAn c\u00E2y xanh: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " 1.Tr\u00ECnh \u1EE6y ban nh\u00E2n d\u00E2n th\u00E0nh ph\u1ED1 c\u00E1c quy ch\u1EBF qu\u1EA3n l\u00FD, khai th\u00E1c v\u00E0 s\u1EED d\u1EE5ng c\u00F4ng tr\u00ECnh c\u00F4ng vi\u00EAn, c\u00E2y xanh tr\u00EAn \u0111\u1ECBa b\u00E0n th\u00E0nh ph\u1ED1. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " 2.Qu\u1EA3n l\u00FD v\u00E0 ph\u00E1t tri\u1EC3n h\u1EC7 th\u1ED1ng c\u00E1c c\u00F4ng vi\u00EAn, c\u00E2y xanh th\u00E0nh ph\u1ED1 bao g\u1ED3m c\u00E1c v\u01B0\u1EDDn \u01B0\u01A1m c\u00E2y, b\u1EA3o d\u01B0\u1EE1ng, \u0111\u1ED1n h\u1EA1 c\u00E2y, \u0111\u1ED1n m\u00E9 c\u00E2y, tr\u1ED3ng m\u1EDBi c\u00E2y xanh th\u00E0nh ph\u1ED1, nu\u00F4i d\u01B0\u1EE1ng v\u00E0 ph\u00E1t tri\u1EC3n \u0111\u00E0n th\u00FA c\u1EE7a Th\u1EA3o c\u1EA7m vi\u00EAn. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "V\u1EC1 qu\u1EA3n l\u00FD v\u1EADn t\u1EA3i: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " 1.Tr\u00ECnh \u1EE6y ban nh\u00E2n d\u00E2n th\u00E0nh ph\u1ED1 quy ho\u1EA1ch b\u1EBFn b\u00E3i, lu\u1ED3ng tuy\u1EBFn v\u1EADn t\u1EA3i h\u00E0nh kh\u00E1ch li\u00EAn t\u1EC9nh, n\u1ED9i t\u1EC9nh, qu\u1EA3n l\u00FD \u0111i\u1EC3m d\u1EEBng, \u0111\u1EADu, nh\u00E0 ch\u1EDD, nh\u00E0 ga tr\u00EAn \u0111\u1ECBa b\u00E0n th\u00E0nh ph\u1ED1. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " 2.Tr\u00ECnh \u1EE6y ban nh\u00E2n d\u00E2n th\u00E0nh ph\u1ED1 \u0111\u1ECBnh h\u01B0\u1EDBng, quy ho\u1EA1ch, ph\u00E1t tri\u1EC3n h\u1EC7 th\u1ED1ng h\u1EA1 t\u1EA7ng v\u00E0 ph\u01B0\u01A1ng ti\u1EC7n v\u1EADn t\u1EA3i h\u00E0nh kh\u00E1ch c\u00F4ng c\u1ED9ng. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " Tr\u00ECnh \u1EE6y ban nh\u00E2n d\u00E2n th\u00E0nh ph\u1ED1 c\u00E1c ch\u00EDnh s\u00E1ch, gi\u00E1 c\u01B0\u1EDBc v\u1EADn t\u1EA3i h\u00E0ng ho\u00E1, h\u00E0nh kh\u00E1ch c\u00F4ng c\u1ED9ng. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " 3.T\u1ED5 ch\u1EE9c ch\u1EC9 \u0111\u1EA1o vi\u1EC7c ph\u1ED1i h\u1EE3p c\u00E1c l\u1EF1c l\u01B0\u1EE3ng v\u1EADn t\u1EA3i c\u1EE7a \u0111\u1ECBa ph\u01B0\u01A1ng \u1ED5n \u0111\u1ECBnh tuy\u1EBFn v\u1EADn t\u1EA3i h\u00E0ng ho\u00E1, h\u00E0nh kh\u00E1ch \u0111\u00E1p \u1EE9ng nhu c\u1EA7u v\u1EADn chuy\u1EC3n trong ph\u1EA1m vi \u0111\u1ECBa b\u00E0n th\u00E0nh ph\u1ED1 v\u00E0 li\u00EAn t\u1EC9nh nh\u1EB1m thi\u1EBFt l\u1EADp tr\u1EADt t\u1EF1 v\u1EADn t\u1EA3i tr\u00EAn \u0111\u1ECBa b\u00E0n th\u00E0nh ph\u1ED1. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " 4.T\u1ED5ng h\u1EE3p t\u00ECnh h\u00ECnh v\u1EADn t\u1EA3i, b\u1EBFn b\u00E3i tr\u00EAn \u0111\u1ECBa b\u00E0n th\u00E0nh ph\u1ED1 \u0111\u1EC3 \u0111\u1EC1 xu\u1EA5t cho UBND th\u00E0nh ph\u1ED1, b\u1ED9 chuy\u00EAn ng\u00E0nh nh\u1EEFng bi\u1EC7n ph\u00E1p ch\u1EA5n ch\u1EC9nh, qu\u1EA3n l\u00FD cho ph\u00F9 h\u1EE3p v\u1EDBi t\u1EEBng th\u1EDDi k\u1EF3. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " 5.T\u1ED5 ch\u1EE9c qu\u1EA3n l\u00FD h\u00E0nh ch\u00EDnh c\u00E1c ph\u01B0\u01A1ng ti\u1EC7n v\u1EADn t\u1EA3i \u0111\u01B0\u1EDDng th\u1EE7y v\u00E0 ph\u01B0\u01A1ng ti\u1EC7n thi c\u00F4ng c\u01A1 gi\u1EDBi, t\u1ED5 ch\u1EE9c \u0111\u0103ng k\u00FD c\u1EA5p bi\u1EC3n s\u1ED1 xe m\u00E1y thi c\u00F4ng. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " T\u1ED5 ch\u1EE9c qu\u1EA3n l\u00FD c\u00E1c ph\u01B0\u01A1ng ti\u1EC7n v\u1EADn t\u1EA3i b\u1ED9, th\u1EE7y tr\u00EAn \u0111\u1ECBa b\u00E0n th\u00E0nh ph\u1ED1. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " 6.Quy\u1EBFt \u0111\u1ECBnh t\u1EA1m \u0111\u00ECnh ch\u1EC9, \u0111\u00ECnh ch\u1EC9 c\u00F3 th\u1EDDi h\u1EA1n ho\u1EB7c t\u01B0\u1EDBc quy\u1EC1n khai th\u00E1c c\u1EE7a doanh nghi\u1EC7p xe bu\u00FDt, xe li\u00EAn t\u1EC9nh khi c\u00F3 vi ph\u1EA1m trong ho\u1EA1t \u0111\u1ED9ng xe bu\u00FDt, xe li\u00EAn t\u1EC9nh theo quy \u0111\u1ECBnh hi\u1EC7n h\u00E0nh. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " Ph\u00EA duy\u1EC7t v\u00E0 ban h\u00E0nh k\u1EBF ho\u1EA1ch gi\u1EA3ng d\u1EA1y, c\u00E1c gi\u00E1o tr\u00ECnh h\u1ECDc t\u1EADp, b\u1ED3i d\u01B0\u1EE1ng nghi\u1EC7p v\u1EE5 chuy\u00EAn v\u1EC1 ho\u1EA1t \u0111\u1ED9ng xe bu\u00FDt, xe li\u00EAn t\u1EC9nh cho l\u00E1i xe, nh\u00E2n vi\u00EAn b\u00E1n v\u00E9 xe bu\u00FDt, xe li\u00EAn t\u1EC9nh. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " 7.V\u1EC1 qu\u1EA3n l\u00FD k\u1EF9 thu\u1EADt ph\u01B0\u01A1ng ti\u1EC7n c\u01A1 gi\u1EDBi giao th\u00F4ng \u0111\u01B0\u1EDDng b\u1ED9: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " a)T\u1ED5 ch\u1EE9c \u0111\u0103ng ki\u1EC3m k\u1EF9 thu\u1EADt, \u0111\u0103ng k\u00FD v\u00E0 ki\u1EC3m tra k\u1EF9 thu\u1EADt c\u00E1c ph\u01B0\u01A1ng ti\u1EC7n v\u1EADn t\u1EA3i (b\u1ED9 v\u00E0 thu\u1EF7) c\u00E1c ph\u01B0\u01A1ng ti\u1EC7n thi c\u00F4ng c\u00F4ng tr\u00ECnh giao th\u00F4ng theo quy \u0111\u1ECBnh c\u1EE7a B\u1ED9 Giao th\u00F4ng v\u1EADn t\u1EA3i v\u00E0 h\u01B0\u1EDBng d\u1EABn c\u1EE7a c\u1EE5c qu\u1EA3n l\u00FD chuy\u00EAn ng\u00E0nh c\u1EA5p ph\u00E9p l\u01B0u h\u00E0nh c\u00E1c ph\u01B0\u01A1ng ti\u1EC7n v\u1EADn t\u1EA3i thu\u1EF7 b\u1ED9. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " b)Th\u1EA9m \u0111\u1ECBnh tr\u00ECnh duy\u1EC7t ho\u1EB7c x\u00E9t duy\u1EC7t thi\u1EBFt k\u1EBF: s\u1EEDa \u0111\u1ED5i, ph\u1EE5c h\u1ED3i v\u00E0 \u0111\u00F3ng m\u1EDBi c\u00E1c ph\u01B0\u01A1ng ti\u1EC7n v\u1EADn t\u1EA3i theo quy \u0111\u1ECBnh c\u1EE7a B\u1ED9 Giao th\u00F4ng v\u1EADn t\u1EA3i ho\u1EB7c c\u1EE7a c\u1EE5c qu\u1EA3n l\u00FD chuy\u00EAn ng\u00E0nh. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " 8.Qu\u1EA3n l\u00FD \u0111\u00E0o t\u1EA1o, t\u1ED5 ch\u1EE9c s\u00E1t h\u1EA1ch v\u00E0 c\u1EA5p \u0111\u1ED5i gi\u1EA5y ph\u00E9p l\u00E1i xe \u00F4t\u00F4, m\u00F4t\u00F4, b\u1EB1ng thuy\u1EC1n, m\u00E1y tr\u01B0\u1EDFng t\u00E0u s\u00F4ng c\u00E1c lo\u1EA1i theo quy \u0111\u1ECBnh. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, " Thu th\u1EADp, t\u1ED5ng h\u1EE3p th\u00F4ng tin v\u00E0 \u1EE9ng d\u1EE5ng c\u00E1c ti\u1EBFn b\u1ED9 khoa h\u1ECDc k\u1EF9 thu\u1EADt trong v\u00E0 ngo\u00E0i n\u01B0\u1EDBc v\u00E0o th\u1EF1c ti\u1EC5n c\u1EE7a ng\u00E0nh. L\u1EADp k\u1EBF ho\u1EA1ch v\u00E0 th\u1EF1c hi\u1EC7n c\u00E1c \u0111\u1EC1 t\u00E0i khoa h\u1ECDc k\u1EF9 thu\u1EADt \u0111\u01B0\u1EE3c duy\u1EC7t trong k\u1EBF ho\u1EA1ch h\u00E0ng n\u0103m. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, " V\u1EC1 t\u1ED5 ch\u1EE9c v\u00E0 qu\u1EA3n l\u00FD c\u00F4ng ch\u1EE9c vi\u00EAn ch\u1EE9c nh\u00E0 n\u01B0\u1EDBc: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, " 1.Nghi\u00EAn c\u1EE9u, \u0111\u1EC1 xu\u1EA5t v\u1EDBi \u1EE6y ban nh\u00E2n d\u00E2n th\u00E0nh ph\u1ED1 ph\u01B0\u01A1ng \u00E1n ki\u1EC7n to\u00E0n t\u1ED5 ch\u1EE9c ng\u00E0nh giao th\u00F4ng v\u1EADn t\u1EA3i ph\u00F9 h\u1EE3p v\u1EDBi t\u00ECnh h\u00ECnh v\u00E0 \u0111\u1EB7c \u0111i\u1EC3m c\u1EE7a t\u1EEBng giai \u0111o\u1EA1n ph\u00E1t tri\u1EC3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, " 2.T\u1ED5 ch\u1EE9c vi\u1EC7c th\u1EF1c hi\u1EC7n ti\u00EAu chu\u1EA9n ho\u00E1 c\u00E1c ch\u1EE9c danh c\u00F4ng ch\u1EE9c vi\u00EAn ch\u1EE9c c\u1EE7a ng\u00E0nh theo quy \u0111\u1ECBnh c\u1EE7a Ch\u00EDnh ph\u1EE7 v\u00E0 h\u01B0\u1EDBng d\u1EABn c\u1EE7a c\u00E1c B\u1ED9, Ng\u00E0nh. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, " 3.Quy ho\u1EA1ch v\u00E0 t\u1ED5 ch\u1EE9c th\u1EF1c hi\u1EC7n vi\u1EC7c \u0111\u00E0o t\u1EA1o, \u0111\u00E0o t\u1EA1o l\u1EA1i, b\u1ED3i d\u01B0\u1EE1ng, b\u1ED1 tr\u00ED s\u1EED d\u1EE5ng v\u00E0 qu\u1EA3n l\u00FD \u0111\u1ED9i ng\u0169 chuy\u00EAn m\u00F4n k\u1EF9 thu\u1EADt nghi\u1EC7p v\u1EE5 thu\u1ED9c ng\u00E0nh; X\u00E2y d\u1EF1ng k\u1EBF ho\u1EA1ch tuy\u1EC3n d\u1EE5ng, s\u1EED d\u1EE5ng c\u00F4ng ch\u1EE9c, vi\u00EAn ch\u1EE9c thu\u1ED9c s\u1EDF v\u00E0 \u0111\u1EC1 ngh\u1ECB c\u01A1 quan c\u00F3 th\u1EA9m quy\u1EC1n qu\u1EA3n l\u00FD c\u00F4ng ch\u1EE9c xem x\u00E9t ph\u00EA duy\u1EC7t theo \u0111\u00FAng quy \u0111\u1ECBnh c\u1EE7a nh\u00E0 n\u01B0\u1EDBc. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " 4.Ph\u1ED1i h\u1EE3p v\u1EDBi Gi\u00E1m \u0111\u1ED1c S\u1EDF N\u1ED9i v\u1EE5 th\u00E0nh ph\u1ED1 tr\u00ECnh \u1EE6y ban nh\u00E2n d\u00E2n th\u00E0nh ph\u1ED1 b\u1ED5 nhi\u1EC7m, mi\u1EC5m nhi\u1EC7m, \u0111i\u1EC1u \u0111\u1ED9ng, c\u00E1ch ch\u1EE9c c\u00E1c ch\u1EE9c v\u1EE5 c\u00F4ng ch\u1EE9c vi\u00EAn ch\u1EE9c nh\u00E0 n\u01B0\u1EDBc c\u1EE7a S\u1EDF thu\u1ED9c di\u1EC7n \u1EE6y ban nh\u00E2n d\u00E2n th\u00E0nh ph\u1ED1 qu\u1EA3n l\u00FD, th\u1EF1c hi\u1EC7n c\u00F4ng t\u00E1c qu\u1EA3n l\u00FD c\u00E1n b\u1ED9 theo ph\u00E2n c\u1EA5p qu\u1EA3n l\u00FD c\u1EE7a \u1EE6y ban nh\u00E2n d\u00E2n th\u00E0nh ph\u1ED1 v\u00E0 theo nguy\u00EAn t\u1EAFc qu\u1EA3n l\u00FD c\u00E1n b\u1ED9. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "V\u1EC1 quan h\u1EC7 \u0111\u1ED1i ngo\u1EA1i: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, " 1.Gi\u00FAp \u1EE6y ban nh\u00E2n d\u00E2n th\u00E0nh ph\u1ED1 nghi\u00EAn c\u1EE9u v\u00E0 \u0111\u1EC1 xu\u1EA5t c\u00E1c d\u1EF1 \u00E1n thu h\u00FAt v\u1ED1n \u0111\u1EA7u t\u01B0 n\u01B0\u1EDBc ngo\u00E0i thu\u1ED9c ng\u00E0nh giao th\u00F4ng v\u1EADn t\u1EA3i. Tham gia \u0111\u00E0m ph\u00E1n, k\u00FD k\u1EBFt v\u1EDBi c\u00E1c t\u1ED5 ch\u1EE9c, c\u00E1 nh\u00E2n n\u01B0\u1EDBc ngo\u00E0i \u0111\u1EC3 th\u1EF1c hi\u1EC7n c\u00E1c d\u1EF1 \u00E1n n\u00E0y. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, " 2.Gi\u00FAp \u1EE6y ban nh\u00E2n d\u00E2n th\u00E0nh ph\u1ED1 ch\u1EC9 \u0111\u1EA1o c\u00E1c \u0111\u01A1n v\u1ECB qu\u1EA3n l\u00FD th\u1EF1c hi\u1EC7n c\u00E1c d\u1EF1 \u00E1n c\u00F3 v\u1ED1n \u0111\u1EA7u t\u01B0 n\u01B0\u1EDBc ngo\u00E0i li\u00EAn quan \u0111\u1EBFn ng\u00E0nh giao th\u00F4ng v\u1EADn t\u1EA3i. Theo d\u00F5i n\u1EAFm t\u00ECnh h\u00ECnh v\u00E0 ti\u1EBFn \u0111\u1ED9 th\u1EF1c hi\u1EC7n c\u00E1c d\u1EF1 \u00E1n n\u00E0y. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, " 3.T\u1ED5 ch\u1EE9c c\u00E1c h\u1ED9i ngh\u1ECB, h\u1ED9i th\u1EA3o qu\u1ED1c t\u1EBF thu\u1ED9c ng\u00E0nh giao th\u00F4ng v\u1EADn t\u1EA3i khi \u0111\u01B0\u1EE3c \u1EE6y ban nh\u00E2n d\u00E2n th\u00E0nh ph\u1ED1 cho ph\u00E9p ho\u1EB7c u\u1EF7 quy\u1EC1n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "\u0110\u1ED1i v\u1EDBi c\u00E1c t\u1ED5 ch\u1EE9c s\u1EF1 nghi\u1EC7p tr\u1EF1c thu\u1ED9c S\u1EDF:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, " 1.Ph\u1ED1i h\u1EE3p v\u1EDBi S\u1EDF N\u1ED9i v\u1EE5 th\u00E0nh ph\u1ED1 tr\u00ECnh \u1EE6y ban nh\u00E2n d\u00E2n th\u00E0nh ph\u1ED1 quy\u1EBFt \u0111\u1ECBnh th\u00E0nh l\u1EADp, t\u00E1ch nh\u1EADp, gi\u1EA3i th\u1EC3 c\u00E1c t\u1ED5 ch\u1EE9c s\u1EF1 nghi\u1EC7p tr\u1EF1c thu\u1ED9c S\u1EDF. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, " 2.T\u1ED5ng h\u1EE3p v\u00E0 tr\u00ECnh \u1EE6y ban nh\u00E2n d\u00E2n th\u00E0nh ph\u1ED1 d\u1EF1 to\u00E1n kinh ph\u00ED h\u00E0ng n\u0103m cho c\u00E1c \u0111\u01A1n v\u1ECB s\u1EF1 nghi\u1EC7p tr\u1EF1c thu\u1ED9c, c\u00F9ng v\u1EDBi S\u1EDF T\u00E0i Ch\u00E1nh th\u00E0nh ph\u1ED1 duy\u1EC7t quy\u1EBFt to\u00E1n cho c\u00E1c \u0111\u01A1n v\u1ECB n\u00E0y. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, " 3.Ki\u1EC3m tra vi\u1EC7c th\u1EF1c hi\u1EC7n nhi\u1EC7m v\u1EE5, s\u1EED d\u1EE5ng kinh ph\u00ED, t\u00E0i s\u1EA3n \u0111\u01B0\u1EE3c c\u1EA5p, bi\u00EAn ch\u1EBF lao \u0111\u1ED9ng \u0111\u01B0\u1EE3c giao theo \u0111\u00FAng m\u1EE5c \u0111\u00EDch v\u00E0 c\u00F3 hi\u1EC7u qu\u1EA3. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "app-tin-tuc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "app-dich-vu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "app-media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "app-thong-ke");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_detailPages_detailpage_tin_tuc_tin_tuc_component__WEBPACK_IMPORTED_MODULE_1__["TinTucComponent"], _body_dich_vu_dich_vu_component__WEBPACK_IMPORTED_MODULE_2__["DichVuComponent"], _body_media_media_component__WEBPACK_IMPORTED_MODULE_3__["MediaComponent"], _body_thong_ke_thong_ke_component__WEBPACK_IMPORTED_MODULE_4__["ThongKeComponent"]], styles: ["#TextNoiDung[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 100% !important;\n  margin-left: auto !important;\n  margin-right: auto !important;\n  display: block !important;\n}\n\n.motaText[_ngcontent-%COMP%]     img {\n  width: 100%;\n}\n\n.thoigian[_ngcontent-%COMP%] {\n  letter-spacing: 1px;\n}\n\n#btnIncreaseContrast[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n\n#btnIncreaseFontSize[_ngcontent-%COMP%]{\n  margin-bottom: 5px;\n  padding: 4px;\n}\n\n#btnDecreaseFontSize[_ngcontent-%COMP%]{\n  margin-bottom: 2px;\npadding: 0px;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.thoigian[_ngcontent-%COMP%] {\n  letter-spacing: 1px;\n}\n\n.fontchu[_ngcontent-%COMP%]{\n  margin-left: 27px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wQmFyL2NodWMtbmFuZy1uZ2hpZXAtdnUvY2h1Yy1uYW5nLW5naGllcC12dS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIsWUFBWTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3RvcEJhci9jaHVjLW5hbmctbmdoaWVwLXZ1L2NodWMtbmFuZy1uZ2hpZXAtdnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNUZXh0Tm9pRHVuZyBpbWcge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5tb3RhVGV4dCA+Pj4gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50aG9pZ2lhbiB7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbiNidG5JbmNyZWFzZUNvbnRyYXN0IHtcbiAgcGFkZGluZzogNHB4O1xufVxuXG4jYnRuSW5jcmVhc2VGb250U2l6ZXtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nOiA0cHg7XG59XG5cbiNidG5EZWNyZWFzZUZvbnRTaXple1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG5wYWRkaW5nOiAwcHg7XG59XG5cbmhyIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi50aG9pZ2lhbiB7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uZm9udGNodXtcbiAgbWFyZ2luLWxlZnQ6IDI3cHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChucNangNghiepVuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chuc-nang-nghiep-vu',
                templateUrl: './chuc-nang-nghiep-vu.component.html',
                styleUrls: ['./chuc-nang-nghiep-vu.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/topBar/co-cau-to-chuc/co-cau-to-chuc.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/topBar/co-cau-to-chuc/co-cau-to-chuc.component.ts ***!
  \*******************************************************************/
/*! exports provided: CoCauToChucComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoCauToChucComponent", function() { return CoCauToChucComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _detailPages_detailpage_tin_tuc_tin_tuc_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../detailPages/detailpage/tin-tuc/tin-tuc.component */ "./src/app/detailPages/detailpage/tin-tuc/tin-tuc.component.ts");
/* harmony import */ var _body_dich_vu_dich_vu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../body/dich-vu/dich-vu.component */ "./src/app/body/dich-vu/dich-vu.component.ts");
/* harmony import */ var _body_media_media_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../body/media/media.component */ "./src/app/body/media/media.component.ts");
/* harmony import */ var _body_thong_ke_thong_ke_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../body/thong-ke/thong-ke.component */ "./src/app/body/thong-ke/thong-ke.component.ts");






class CoCauToChucComponent {
    constructor() {
    }
    ngOnInit() {
    }
    tangPhanQuang() {
        DecreaseContrast();
    }
    giamPhanQuang() {
        IncreaseContrast();
    }
    tangSize() {
        tangFormChu();
    }
    giamSize() {
        giamFormChu();
    }
    inBai() {
        PrintElem('#printContent');
    }
}
CoCauToChucComponent.ɵfac = function CoCauToChucComponent_Factory(t) { return new (t || CoCauToChucComponent)(); };
CoCauToChucComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoCauToChucComponent, selectors: [["app-co-cau-to-chuc"]], decls: 136, vars: 0, consts: [["id", "content-news-info", 1, "row", "news-info"], ["id", "printContent", 1, "col-sm-8"], [1, "row"], [1, "col-md-12"], [1, "content"], ["id", "notPrint", 1, "col-lg-16-", "col-md-16", "col-sm-16", "col-xs-16"], ["id", "btnPrintContent", 1, "text-muted", "fontchu", 2, "cursor", "pointer", 3, "click"], [1, "fa", "fa-print", 3, "click"], ["id", "detail-icon", 1, "detail-icon"], [1, "text-muted", "fontchu"], ["id", "btnIncreaseContrast", "title", "T\u0103ng \u0111\u1ED9 t\u01B0\u01A1ng ph\u1EA3n", 2, "cursor", "pointer", 3, "click"], [1, "icon", 2, "font-size", "18px"], [1, "fa", "fa-adjust"], ["id", "btnDecreaseContrast", "title", "Gi\u1EA3m \u0111\u1ED9 t\u01B0\u01A1ng ph\u1EA3n", 2, "cursor", "pointer", 3, "click"], [1, "icon", 2, "font-size", "16px"], ["id", "btnIncreaseFontSize", "title", "T\u0103ng font ch\u1EEF", 1, "btn", "btn-xs", "btn-default", 3, "click"], [1, "icon", 2, "font-size", "19px"], [1, "fa", "fa-font"], ["id", "btnDecreaseFontSize", "title", "Gi\u1EA3m font ch\u1EEF", 1, "btn", "btn-xs", "btn-default", 2, "margin-right", "5px", 3, "click"], [1, "icon", 2, "font-size", "15px"], ["id", "btn-share"], [1, "col-lg-16", "col-md-16", "col-sm-16", "col-xs-16"], ["data-href", "", "data-oaid", "579745863508352884", "data-layout", "1", "data-color", "blue", "data-customize", "false", 1, "zalo-share-button"], ["id", "ctl00_m_g_6ea14784_f7bf_4250_83c6_4a474c7e7356", 1, "motaText"], [1, "hinhanh"], ["src", "assets/images/page-1.png", "alt", "", 1, "img-thumbnail"], [0, "xmlns", "rs", "urn:schemas-microsoft-com:rowset", 0, "xmlns", "z", "#RowsetSchema", 0, "xmlns", "cs", "urn:my-scripts", 1, "container_top_left1", 2, "cursor", "pointer"], [1, "div_header_style1"], [1, "a_header_style1", 2, "text-transform", "uppercase", "font-size", "11px", "font-weight", "bold", "text-decoration", "none"], ["border", "0", "cellspacing", "0", "cellpadding", "0", "width", "100%", 0, "xmlns", "rs", "urn:schemas-microsoft-com:rowset", 0, "xmlns", "z", "#RowsetSchema", 0, "xmlns", "cs", "urn:my-scripts"], [1, "TitleFront"], ["href", "/gioithieu/thongtingioithieu/Lists/Posts/Post.aspx?CategoryId=1&ItemID=92&PublishedDate=2019-10-23T15:00:00Z"], [1, "ShowDate"], [1, "tinHT", 2, "padding-bottom", "10px"], [1, "ContentText", 2, "text-align", "justify"], ["href", "/gioithieu/thongtingioithieu/Lists/Posts/Post.aspx?CategoryId=1&ItemID=89&PublishedDate=2019-01-15T16:10:00Z"], ["href", "/gioithieu/thongtingioithieu/Lists/Posts/Post.aspx?CategoryId=1&ItemID=85&PublishedDate=2019-01-02T18:05:00Z"], ["href", "/gioithieu/thongtingioithieu/Lists/Posts/Post.aspx?CategoryId=1&ItemID=81&PublishedDate=2015-10-28T16:05:00Z"], ["href", "/gioithieu/thongtingioithieu/Lists/Posts/Post.aspx?CategoryId=1&ItemID=80&PublishedDate=2015-10-28T07:45:00Z"], ["width", "100%", 1, "Other"], ["border", "0", "cellspacing", "0", "cellpadding", "0", "width", "100%", 0, "xmlns", "rs", "urn:schemas-microsoft-com:rowset", 0, "xmlns", "z", "#RowsetSchema", 0, "xmlns", "cs", "urn:my-scripts", 1, "tbtinkhac"], [1, "OtherTitle"], ["href", "/gioithieu/thongtingioithieu/Lists/Posts/Post.aspx?CategoryId=1&ItemID=38&PublishedDate=2011-08-11T09:10:00Z"], ["href", "/gioithieu/thongtingioithieu/Lists/Posts/Post.aspx?CategoryId=1&ItemID=39&PublishedDate=2011-08-11T09:10:00Z"], [1, "col-sm-4"], [1, "mt-4"]], template: function CoCauToChucComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "C\u01A0 C\u1EA4U T\u1ED4 CH\u1EE8C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoCauToChucComponent_Template_a_click_9_listener() { return ctx.inBai(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "In b\u00E0i vi\u1EBFt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoCauToChucComponent_Template_i_click_11_listener() { return ctx.inBai(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0110\u1ED9 t\u01B0\u01A1ng ph\u1EA3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoCauToChucComponent_Template_a_click_15_listener() { return ctx.giamPhanQuang(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoCauToChucComponent_Template_a_click_18_listener() { return ctx.tangPhanQuang(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Font ch\u1EEF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoCauToChucComponent_Template_button_click_23_listener() { return ctx.tangSize(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoCauToChucComponent_Template_button_click_26_listener() { return ctx.giamSize(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "C\u01A1 c\u1EA5u t\u1ED5 ch\u1EE9c");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "table", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Ph\u00E2n c\u00F4ng nhi\u1EC7m v\u1EE5 Ban Gi\u00E1m \u0111\u1ED1c S\u1EDF GTVT TPHCM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " (23/10) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Ph\u00E2n c\u00F4ng nhi\u1EC7m v\u1EE5 c\u00E1c th\u00E0nh vi\u00EAn Ban Gi\u00E1m \u0111\u1ED1c S\u1EDF Giao th\u00F4ng v\u1EADn t\u1EA3i th\u00E0nh ph\u1ED1 H\u1ED3 Ch\u00ED Minh theo Quy\u1EBFt \u0111\u1ECBnh s\u1ED1 5084/Q\u0110-SGTVT ng\u00E0y 22/10/2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Ph\u00E2n c\u00F4ng nhi\u1EC7m v\u1EE5 c\u00E1c th\u00E0nh vi\u00EAn Ban Gi\u00E1m \u0111\u1ED1c S\u1EDF GTVT TP.HCM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " (15/01) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Ph\u00E2n c\u00F4ng nhi\u1EC7m v\u1EE5 c\u00E1c th\u00E0nh vi\u00EAn Ban Gi\u00E1m \u0111\u1ED1c S\u1EDF GTVT TP.HCM theo Quy\u1EBFt \u0111\u1ECBnh s\u1ED1 317/TB-SGTVT ng\u00E0y 15/01/2019 c\u1EE7a S\u1EDF Giao th\u00F4ng v\u1EADn t\u1EA3i.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Ph\u00E2n c\u00F4ng nhi\u1EC7m v\u1EE5 c\u00E1c th\u00E0nh vi\u00EAn Ban Gi\u00E1m \u0111\u1ED1c S\u1EDF Giao th\u00F4ng v\u1EADn t\u1EA3i theo Quy\u1EBFt \u0111\u1ECBnh s\u1ED1 3342/Q\u0110-SGTVT ng\u00E0y 04 th\u00E1ng 7 n\u0103m 2017.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " (02/01) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Ph\u00E2n c\u00F4ng nhi\u1EC7m v\u1EE5 c\u00E1c th\u00E0nh vi\u00EAn Ban Gi\u00E1m \u0111\u1ED1c S\u1EDF Giao th\u00F4ng v\u1EADn t\u1EA3i th\u00E0nh ph\u1ED1 H\u1ED3 Ch\u00ED Minh.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Ph\u00E2n c\u00F4ng nhi\u1EC7m v\u1EE5 c\u00E1c th\u00E0nh vi\u00EAn Ban Gi\u00E1m \u0111\u1ED1c S\u1EDF Giao th\u00F4ng v\u1EADn t\u1EA3i theo Quy\u1EBFt \u0111\u1ECBnh s\u1ED1 4742/Q\u0110-SGTVT ng\u00E0y 06 th\u00E1ng 10 n\u0103m 2015");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " (28/10) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " STT H\u1ECC V\u00C0 T\u00CAN L\u0128NH V\u1EF0C PH\u1EE4 TR\u00C1CH 1 \u00A0 \u00A0 B\u00D9I XU\u00C2N C\u01AF\u1EDCNG\u00A0- GI\u00C1M \u0110\u1ED0C \u0110i\u00EA\u0323n thoa\u0323i : 38.223.782 a) La\u0303nh \u0111\u1EA1o, chi\u0309 \u0111a\u0323o \u0111i\u1EC1u h\u00E0nh v\u00E0 qu\u1EA3n l\u00FD to\u00E0n di\u1EC7n ca\u0301c ho\u1EA1t \u0111\u1ED9ng c\u1EE7a S\u1EDF Giao th\u00F4ng v\u1EADn t\u1EA3i. b) Ph\u1EE5 tr\u00E1ch c\u00E1...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "T\u1ED5 ch\u1EE9c b\u1ED9 m\u00E1y c\u01A1 quan S\u1EDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " (28/10) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "S\u1EDF Giao th\u00F4ng v\u1EADn t\u1EA3i do Gi\u00E1m \u0111\u1ED1c ph\u1EE5 tr\u00E1ch chung, c\u00F3 m\u1ED9t s\u1ED1 Ph\u00F3 gi\u00E1m \u0111\u1ED1c gi\u00FAp vi\u1EC7c theo s\u1EF1 ph\u00E2n c\u00F4ng c\u1EE7a Gi\u00E1m \u0111\u1ED1c. Gi\u00E1m \u0111\u1ED1c S\u1EDF do ch\u1EE7 t\u1ECBch \u1EE6y ban nh\u00E2n d\u00E2n Th\u00E0nh ph\u1ED1 b\u1ED5 nhi\u1EC7m. Ph\u00F3 Gi\u00E1m \u0111\u1ED1c S\u1EDF do ch\u1EE7 t\u1ECBch \u1EE6y ban nh\u00E2n d\u00E2n Th\u00E0nh ph\u1ED1 b\u1ED5 nhi\u1EC7m theo \u0111\u1EC1 ngh\u1ECB c\u1EE7a Gi\u00E1m \u0111\u1ED1c S\u1EDF, c\u00E1c ch\u1EE9c danh kh\u00E1c c\u1EE7a S\u1EDF do Gi\u00E1m \u0111\u1ED1c S\u1EDF b\u1ED5 nhi\u1EC7m v\u00E0 mi\u1EC5n nhi\u1EC7m theo s\u1EF1 ph\u00E2n c\u1EA5p qu\u1EA3n l\u00FD c\u00E1n b\u1ED9 c\u1EE7a Th\u00E0nh u\u1EF7 v\u00E0 \u1EE6y ban nh\u00E2n d\u00E2n Th\u00E0...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "table", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "table", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "td", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "TIN \u0110\u00C3 \u0110\u01AFA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "table", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "td", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Ch\u1EE9c n\u0103ng, nhi\u1EC7m v\u1EE5 c\u1EE7a c\u00E1c ph\u00F2ng ban chuy\u00EAn m\u00F4n nghi\u1EC7p v\u1EE5 tr\u1EF1c thu\u1ED9c S\u1EDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " (11/08) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "C\u01A1 c\u1EA5u t\u1ED5 ch\u1EE9c c\u1EE7a S\u1EDF Giao th\u00F4ng v\u1EADn t\u1EA3i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " (11/08) ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "app-tin-tuc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "app-dich-vu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "app-media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "app-thong-ke");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_detailPages_detailpage_tin_tuc_tin_tuc_component__WEBPACK_IMPORTED_MODULE_1__["TinTucComponent"], _body_dich_vu_dich_vu_component__WEBPACK_IMPORTED_MODULE_2__["DichVuComponent"], _body_media_media_component__WEBPACK_IMPORTED_MODULE_3__["MediaComponent"], _body_thong_ke_thong_ke_component__WEBPACK_IMPORTED_MODULE_4__["ThongKeComponent"]], styles: ["#TextNoiDung[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 100% !important;\n  margin-left: auto !important;\n  margin-right: auto !important;\n  display: block !important;\n}\n\n.motaText[_ngcontent-%COMP%]     img {\n  width: 100%;\n}\n\n.thoigian[_ngcontent-%COMP%] {\n  letter-spacing: 1px;\n}\n\n#btnIncreaseContrast[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n\n#btnIncreaseFontSize[_ngcontent-%COMP%]{\n  margin-bottom: 5px;\n  padding: 4px;\n}\n\n#btnDecreaseFontSize[_ngcontent-%COMP%]{\n  margin-bottom: 2px;\npadding: 0px;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.thoigian[_ngcontent-%COMP%] {\n  letter-spacing: 1px;\n}\n\n.fontchu[_ngcontent-%COMP%]{\n  margin-left: 27px;\n}\n\n.hinhanh[_ngcontent-%COMP%]     img {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wQmFyL2NvLWNhdS10by1jaHVjL2NvLWNhdS10by1jaHVjLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQixZQUFZO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvdG9wQmFyL2NvLWNhdS10by1jaHVjL2NvLWNhdS10by1jaHVjLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjVGV4dE5vaUR1bmcgaW1nIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG4ubW90YVRleHQgPj4+IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGhvaWdpYW4ge1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4jYnRuSW5jcmVhc2VDb250cmFzdCB7XG4gIHBhZGRpbmc6IDRweDtcbn1cblxuI2J0bkluY3JlYXNlRm9udFNpemV7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgcGFkZGluZzogNHB4O1xufVxuXG4jYnRuRGVjcmVhc2VGb250U2l6ZXtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xucGFkZGluZzogMHB4O1xufVxuXG5ociB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4udGhvaWdpYW4ge1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLmZvbnRjaHV7XG4gIG1hcmdpbi1sZWZ0OiAyN3B4O1xufVxuXG4uaGluaGFuaCA+Pj4gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoCauToChucComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-co-cau-to-chuc',
                templateUrl: './co-cau-to-chuc.component.html',
                styleUrls: ['./co-cau-to-chuc.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/topBar/gioi-thieu/gioi-thieu.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/topBar/gioi-thieu/gioi-thieu.component.ts ***!
  \***********************************************************/
/*! exports provided: GioiThieuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GioiThieuComponent", function() { return GioiThieuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _detailPages_detailpage_tin_tuc_tin_tuc_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../detailPages/detailpage/tin-tuc/tin-tuc.component */ "./src/app/detailPages/detailpage/tin-tuc/tin-tuc.component.ts");
/* harmony import */ var _body_dich_vu_dich_vu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../body/dich-vu/dich-vu.component */ "./src/app/body/dich-vu/dich-vu.component.ts");
/* harmony import */ var _body_media_media_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../body/media/media.component */ "./src/app/body/media/media.component.ts");
/* harmony import */ var _body_thong_ke_thong_ke_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../body/thong-ke/thong-ke.component */ "./src/app/body/thong-ke/thong-ke.component.ts");






class GioiThieuComponent {
    constructor() {
    }
    ngOnInit() {
    }
    tangPhanQuang() {
        DecreaseContrast();
    }
    giamPhanQuang() {
        IncreaseContrast();
    }
    tangSize() {
        tangFormChu();
    }
    giamSize() {
        giamFormChu();
    }
    inBai() {
        PrintElem('#printContent');
    }
}
GioiThieuComponent.ɵfac = function GioiThieuComponent_Factory(t) { return new (t || GioiThieuComponent)(); };
GioiThieuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GioiThieuComponent, selectors: [["app-gioi-thieu"]], decls: 128, vars: 0, consts: [["id", "content-news-info", 1, "row", "news-info"], ["id", "printContent", 1, "col-sm-8"], [1, "row"], [1, "col-md-12"], [1, "content"], ["id", "notPrint", 1, "col-lg-16-", "col-md-16", "col-sm-16", "col-xs-16"], ["id", "btnPrintContent", 1, "text-muted", "fontchu", 2, "cursor", "pointer", 3, "click"], [1, "fa", "fa-print", 3, "click"], ["id", "detail-icon", 1, "detail-icon"], [1, "text-muted", "fontchu"], ["id", "btnIncreaseContrast", "title", "T\u0103ng \u0111\u1ED9 t\u01B0\u01A1ng ph\u1EA3n", 2, "cursor", "pointer", 3, "click"], [1, "icon", 2, "font-size", "18px"], [1, "fa", "fa-adjust"], ["id", "btnDecreaseContrast", "title", "Gi\u1EA3m \u0111\u1ED9 t\u01B0\u01A1ng ph\u1EA3n", 2, "cursor", "pointer", 3, "click"], [1, "icon", 2, "font-size", "16px"], ["id", "btnIncreaseFontSize", "title", "T\u0103ng font ch\u1EEF", 1, "btn", "btn-xs", "btn-default", 3, "click"], [1, "icon", 2, "font-size", "19px"], [1, "fa", "fa-font"], ["id", "btnDecreaseFontSize", "title", "Gi\u1EA3m font ch\u1EEF", 1, "btn", "btn-xs", "btn-default", 2, "margin-right", "5px", 3, "click"], [1, "icon", 2, "font-size", "15px"], ["id", "btn-share"], [1, "col-lg-16", "col-md-16", "col-sm-16", "col-xs-16"], ["data-href", "", "data-oaid", "579745863508352884", "data-layout", "1", "data-color", "blue", "data-customize", "false", 1, "zalo-share-button"], [1, "gtcont", "motaText"], ["align", "center"], [2, "line-height", "150%", "font-family", "arial,sans-serif", "color", "rgb(22, 89, 156)", "font-size", "15px"], [2, "line-height", "150%", "font-family", "arial,sans-serif", "font-size", "15px"], [2, "line-height", "150%", "font-family", "arial,sans-serif", "color", "rgb(0, 85, 141)", "font-size", "15px"], [2, "font-family", "tahoma", "font-size", "12px"], [2, "color", "rgb(0, 85, 141)"], [2, "color", "rgb(0, 0, 255)"], [2, "text-align", "justify", "line-height", "150%"], ["href", "/gioithieu/Documents/QDThanhLapSo.doc"], ["color", "#0000ff"], ["size", "2", "face", "Arial"], ["href", "/gioithieu/Documents/QD1187-2007.gif"], ["href", "/gioithieu/Documents/QD22-2007.gif"], ["href", "/gioithieu/Documents/QD53.gif"], ["href", "/gioithieu/Documents/D70.doc"], [1, "col-sm-4"], [1, "mt-4"]], template: function GioiThieuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "GI\u1EDAI THI\u1EC6U S\u1EDE GIAO TH\u00D4NG V\u1EACN T\u1EA2I");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GioiThieuComponent_Template_a_click_9_listener() { return ctx.inBai(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "In b\u00E0i vi\u1EBFt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GioiThieuComponent_Template_i_click_11_listener() { return ctx.inBai(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0110\u1ED9 t\u01B0\u01A1ng ph\u1EA3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GioiThieuComponent_Template_a_click_15_listener() { return ctx.giamPhanQuang(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GioiThieuComponent_Template_a_click_18_listener() { return ctx.tangPhanQuang(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Font ch\u1EEF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GioiThieuComponent_Template_button_click_23_listener() { return ctx.tangSize(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GioiThieuComponent_Template_button_click_26_listener() { return ctx.giamSize(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Tr\u1EE5 s\u1EDF \u0111\u1EB7t t\u1EA1i s\u1ED1: 63 L\u00FD T\u1EF1 Tr\u1ECDng, P.B\u1EBFn Ngh\u00E9, Q.1, TP. HCM\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u0110i\u1EC7n tho\u1EA1i:3 8.290.451- 38.237.439. S\u1ED1 Fax 38.290.458");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "H\u1ED9p th\u01B0 \u0111i\u1EC7n t\u1EED:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "sgtvt@tphcm.gov.vn\u200B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "S\u1EDF Giao th\u00F4ng v\u1EADn t\u1EA3i th\u00E0nh ph\u1ED1 H\u1ED3 Ch\u00ED Minh l\u00E0 c\u01A1 quan chuy\u00EAn m\u00F4n thu\u1ED9c \u1EE6y ban nh\u00E2n d\u00E2n th\u00E0nh ph\u1ED1, tham m\u01B0u, gi\u00FAp \u1EE6y ban nh\u00E2n d\u00E2n th\u00E0nh ph\u1ED1 th\u1EF1c hi\u1EC7n ch\u1EE9c n\u0103ng qu\u1EA3n l\u00FD nh\u00E0 n\u01B0\u1EDBc v\u1EC1 l\u0129nh v\u1EF1c giao th\u00F4ng v\u1EADn t\u1EA3i (\u0111\u01B0\u1EDDng b\u1ED9, \u0111\u01B0\u1EDDng th\u1EE7y n\u1ED9i \u0111\u1ECBa), h\u1EA1 t\u1EA7ng k\u1EF9 thu\u1EADt \u0111\u00F4 th\u1ECB (c\u1EA5p tho\u00E1t n\u01B0\u1EDBc, c\u00F4ng vi\u00EAn c\u00E2y xanh v\u00E0 chi\u1EBFu s\u00E1ng, b\u00E3i \u0111\u1ED7 xe \u0111\u00F4 th\u1ECB) trong ph\u1EA1m vi th\u00E0nh ph\u1ED1 v\u00E0 th\u1EF1c hi\u1EC7n m\u1ED9t s\u1ED1 nhi\u1EC7m v\u1EE5, quy\u1EC1n h\u1EA1n theo s\u1EF1 \u1EE7y quy\u1EC1n c\u1EE7a \u1EE6y ban nh\u00E2n d\u00E2n th\u00E0nh ph\u1ED1 v\u00E0 theo quy \u0111\u1ECBnh c\u1EE7a ph\u00E1p lu\u1EADt. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "S\u1EDF Giao th\u00F4ng v\u1EADn t\u1EA3i th\u00E0nh ph\u1ED1 c\u00F3 t\u01B0 c\u00E1ch ph\u00E1p nh\u00E2n, c\u00F3 con d\u1EA5u ri\u00EAng, \u0111\u01B0\u1EE3c c\u1EA5p kinh ph\u00ED ho\u1EA1t \u0111\u1ED9ng, \u0111\u01B0\u1EE3c m\u1EDF t\u00E0i kho\u1EA3n t\u1EA1i Kho b\u1EA1c Nh\u00E0 n\u01B0\u1EDBc theo qui \u0111\u1ECBnh c\u1EE7a Nh\u00E0 n\u01B0\u1EDBc.\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "S\u1EDF Giao th\u00F4ng v\u1EADn t\u1EA3i ch\u1ECBu s\u1EF1 ch\u1EC9 \u0111\u1EA1o, qu\u1EA3n l\u00FD v\u1EC1 t\u1ED5 ch\u1EE9c, bi\u00EAn ch\u1EBF v\u00E0 c\u00F4ng t\u00E1c c\u1EE7a \u1EE6y ban nh\u00E2n d\u00E2n th\u00E0nh ph\u1ED1, \u0111\u1ED3ng th\u1EDDi ch\u1ECBu s\u1EF1 ch\u1EC9 \u0111\u1EA1o, ki\u1EC3m tra v\u1EC1 nghi\u1EC7p v\u1EE5 c\u1EE7a B\u1ED9 Giao th\u00F4ng v\u1EADn t\u1EA3i v\u00E0 B\u1ED9 X\u00E2y d\u1EF1ng\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "font", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Quy\u1EBFt \u0111\u1ECBnh th\u00E0nh l\u1EADp S\u1EDF Giao th\u00F4ng c\u00F4ng ch\u00EDnh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "font", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Quy\u1EBFt \u0111\u1ECBnh 1187/Q\u0110-UB ng\u00E0y 21/03/2005 c\u1EE7a ch\u1EE7 t\u1ECBch UBNDTP v/v \u0111\u1ED5i t\u00EAn S\u1EDF Giao th\u00F4ng c\u00F4ng ch\u00E1nh th\u00E0nh ph\u1ED1 th\u00E0nh S\u1EDF Giao th\u00F4ng - C\u00F4ng ch\u00EDnh tr\u1EF1c ti\u1EBFp thu\u1ED9c \u1EE6y ban nh\u00E2n d\u00E2n th\u00E0nh ph\u1ED1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "font", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Quy\u1EBFt \u0111\u1ECBnh 22/2007/Q\u0110-UBND ng\u00E0y 09/02/2007 c\u1EE7a UBNDTP v\u1EC1 ban h\u00E0nh quy ch\u1EBF t\u1ED5 ch\u1EE9c v\u00E0 ho\u1EA1t \u0111\u1ED9ng c\u1EE7a S\u1EDF Giao th\u00F4ng - C\u00F4ng ch\u00EDnh th\u00E0nh ph\u1ED1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "font", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "font", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "font", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Quy\u1EBFt \u0111\u1ECBnh S\u1EDF Giao th\u00F4ng - C\u00F4ng ch\u00EDnh th\u00E0nh S\u1EDF Giao th\u00F4ng v\u1EADn t\u1EA3i th\u00E0nh ph\u1ED1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "font", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Quy\u1EBFt \u0111\u1ECBnh 70/2010/Q\u0110-UBND ng\u00E0y 17/9/2010 c\u1EE7a Ch\u1EE7 t\u1ECBch UBND TP v/v ban h\u00E0nh quy ch\u1EBF t\u1ED5 ch\u1EE9c v\u00E0 ho\u1EA1t \u0111\u1ED9ng c\u1EE7a S\u1EDF Giao th\u00F4ng v\u1EADn t\u1EA3i TPHCM.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "app-tin-tuc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "app-dich-vu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "app-media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "app-thong-ke");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_detailPages_detailpage_tin_tuc_tin_tuc_component__WEBPACK_IMPORTED_MODULE_1__["TinTucComponent"], _body_dich_vu_dich_vu_component__WEBPACK_IMPORTED_MODULE_2__["DichVuComponent"], _body_media_media_component__WEBPACK_IMPORTED_MODULE_3__["MediaComponent"], _body_thong_ke_thong_ke_component__WEBPACK_IMPORTED_MODULE_4__["ThongKeComponent"]], styles: ["#TextNoiDung[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 100% !important;\n  margin-left: auto !important;\n  margin-right: auto !important;\n  display: block !important;\n}\n\n.motaText[_ngcontent-%COMP%]     img {\n  width: 100%;\n}\n\n.thoigian[_ngcontent-%COMP%] {\n  letter-spacing: 1px;\n}\n\n#btnIncreaseContrast[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n\n#btnIncreaseFontSize[_ngcontent-%COMP%]{\n  margin-bottom: 5px;\n  padding: 4px;\n}\n\n#btnDecreaseFontSize[_ngcontent-%COMP%]{\n  margin-bottom: 2px;\npadding: 0px;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.fontchu[_ngcontent-%COMP%]{\n  margin-left: 27px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wQmFyL2dpb2ktdGhpZXUvZ2lvaS10aGlldS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIsWUFBWTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3RvcEJhci9naW9pLXRoaWV1L2dpb2ktdGhpZXUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNUZXh0Tm9pRHVuZyBpbWcge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5tb3RhVGV4dCA+Pj4gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50aG9pZ2lhbiB7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbiNidG5JbmNyZWFzZUNvbnRyYXN0IHtcbiAgcGFkZGluZzogNHB4O1xufVxuXG4jYnRuSW5jcmVhc2VGb250U2l6ZXtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nOiA0cHg7XG59XG5cbiNidG5EZWNyZWFzZUZvbnRTaXple1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG5wYWRkaW5nOiAwcHg7XG59XG5cbmhyIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5mb250Y2h1e1xuICBtYXJnaW4tbGVmdDogMjdweDtcbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GioiThieuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gioi-thieu',
                templateUrl: './gioi-thieu.component.html',
                styleUrls: ['./gioi-thieu.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/topBar/hoi-dap/hoi-dap.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/topBar/hoi-dap/hoi-dap.component.ts ***!
  \*****************************************************/
/*! exports provided: HoiDapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoiDapComponent", function() { return HoiDapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _detailPages_detailpage_tin_tuc_tin_tuc_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../detailPages/detailpage/tin-tuc/tin-tuc.component */ "./src/app/detailPages/detailpage/tin-tuc/tin-tuc.component.ts");
/* harmony import */ var _body_dich_vu_dich_vu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../body/dich-vu/dich-vu.component */ "./src/app/body/dich-vu/dich-vu.component.ts");
/* harmony import */ var _body_media_media_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../body/media/media.component */ "./src/app/body/media/media.component.ts");
/* harmony import */ var _body_thong_ke_thong_ke_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../body/thong-ke/thong-ke.component */ "./src/app/body/thong-ke/thong-ke.component.ts");






class HoiDapComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HoiDapComponent.ɵfac = function HoiDapComponent_Factory(t) { return new (t || HoiDapComponent)(); };
HoiDapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HoiDapComponent, selectors: [["app-hoi-dap"]], decls: 99, vars: 0, consts: [["id", "content-news-info", 1, "row", "news-info"], ["id", "printContent", 1, "col-sm-8"], [1, "row"], [1, "col-md-12"], [1, "content"], ["id", "accordion", 1, "panel-group"], [1, "panel", "panel-default"], [1, "panel-heading", 2, "background-color", "#1384BC"], [1, "panel-title"], ["data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapse_1", 2, "color", "#fff", "text-decoration", "none"], ["id", "collapse_1", 1, "panel-collapse", "collapse"], [1, "panel-body"], ["data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapse_2", 2, "color", "#fff", "text-decoration", "none"], ["id", "collapse_2", 1, "panel-collapse", "collapse"], ["data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapse_3", 2, "color", "#fff", "text-decoration", "none"], ["id", "collapse_3", 1, "panel-collapse", "collapse"], ["data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapse_4", 2, "color", "#fff", "text-decoration", "none"], ["id", "collapse_4", 1, "panel-collapse", "collapse"], ["data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapse_5", 2, "color", "#fff", "text-decoration", "none"], ["id", "collapse_5", 1, "panel-collapse", "collapse"], ["data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapse_6", 2, "color", "#fff", "text-decoration", "none"], ["id", "collapse_6", 1, "panel-collapse", "collapse"], ["data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapse_7", 2, "color", "#fff", "text-decoration", "none"], ["id", "collapse_7", 1, "panel-collapse", "collapse"], ["data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapse_8", 2, "color", "#fff", "text-decoration", "none"], ["id", "collapse_8", 1, "panel-collapse", "collapse"], ["data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapse_9", 2, "color", "#fff", "text-decoration", "none"], ["id", "collapse_9", 1, "panel-collapse", "collapse"], ["data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapse_10", 2, "color", "#fff", "text-decoration", "none"], ["id", "collapse_10", 1, "panel-collapse", "collapse"], [1, "col-sm-4"], [1, "mt-4"]], template: function HoiDapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "C\u00C2U H\u1ECEI TH\u01AF\u1EDCNG G\u1EB6P");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " C\u00E2u h\u1ECFi 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Tr\u1EA3 l\u1EDDi c\u00E2u h\u1ECFi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " C\u00E2u h\u1ECFi 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Tr\u1EA3 l\u1EDDi c\u00E2u h\u1ECFi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " C\u00E2u h\u1ECFi 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Tr\u1EA3 l\u1EDDi c\u00E2u h\u1ECFi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " C\u00E2u h\u1ECFi 4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Tr\u1EA3 l\u1EDDi c\u00E2u h\u1ECFi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " C\u00E2u h\u1ECFi 5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Tr\u1EA3 l\u1EDDi c\u00E2u h\u1ECFi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " C\u00E2u h\u1ECFi 5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Tr\u1EA3 l\u1EDDi c\u00E2u h\u1ECFi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " C\u00E2u h\u1ECFi 7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Tr\u1EA3 l\u1EDDi c\u00E2u h\u1ECFi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " C\u00E2u h\u1ECFi 8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Tr\u1EA3 l\u1EDDi c\u00E2u h\u1ECFi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " C\u00E2u h\u1ECFi 9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Tr\u1EA3 l\u1EDDi c\u00E2u h\u1ECFi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " C\u00E2u h\u1ECFi 10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Tr\u1EA3 l\u1EDDi c\u00E2u h\u1ECFi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "app-tin-tuc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "app-dich-vu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "app-media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "app-thong-ke");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_detailPages_detailpage_tin_tuc_tin_tuc_component__WEBPACK_IMPORTED_MODULE_1__["TinTucComponent"], _body_dich_vu_dich_vu_component__WEBPACK_IMPORTED_MODULE_2__["DichVuComponent"], _body_media_media_component__WEBPACK_IMPORTED_MODULE_3__["MediaComponent"], _body_thong_ke_thong_ke_component__WEBPACK_IMPORTED_MODULE_4__["ThongKeComponent"]], styles: ["#accordion[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin-left: 20px;\n}\n\n.panel-body[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wQmFyL2hvaS1kYXAvaG9pLWRhcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC90b3BCYXIvaG9pLWRhcC9ob2ktZGFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYWNjb3JkaW9uIGEge1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4ucGFuZWwtYm9keSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HoiDapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hoi-dap',
                templateUrl: './hoi-dap.component.html',
                styleUrls: ['./hoi-dap.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/topBar/lien-he/lien-he.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/topBar/lien-he/lien-he.component.ts ***!
  \*****************************************************/
/*! exports provided: LienHeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LienHeComponent", function() { return LienHeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _detailPages_detailpage_tin_tuc_tin_tuc_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../detailPages/detailpage/tin-tuc/tin-tuc.component */ "./src/app/detailPages/detailpage/tin-tuc/tin-tuc.component.ts");
/* harmony import */ var _body_dich_vu_dich_vu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../body/dich-vu/dich-vu.component */ "./src/app/body/dich-vu/dich-vu.component.ts");
/* harmony import */ var _body_media_media_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../body/media/media.component */ "./src/app/body/media/media.component.ts");
/* harmony import */ var _body_thong_ke_thong_ke_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../body/thong-ke/thong-ke.component */ "./src/app/body/thong-ke/thong-ke.component.ts");






class LienHeComponent {
    constructor() {
    }
    ngOnInit() {
    }
    tangPhanQuang() {
        DecreaseContrast();
    }
    giamPhanQuang() {
        IncreaseContrast();
    }
    tangSize() {
        tangFormChu();
    }
    giamSize() {
        giamFormChu();
    }
    inBai() {
        PrintElem('#printContent');
    }
}
LienHeComponent.ɵfac = function LienHeComponent_Factory(t) { return new (t || LienHeComponent)(); };
LienHeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LienHeComponent, selectors: [["app-lien-he"]], decls: 62, vars: 0, consts: [["id", "content-news-info", 1, "row", "news-info"], ["id", "printContent", 1, "col-sm-8"], [1, "row"], [1, "col-md-12"], [1, "content"], ["id", "notPrint", 1, "col-lg-16-", "col-md-16", "col-sm-16", "col-xs-16"], ["id", "btnPrintContent", 1, "text-muted", "fontchu", 2, "cursor", "pointer", 3, "click"], [1, "fa", "fa-print", 3, "click"], ["id", "detail-icon", 1, "detail-icon"], [1, "text-muted", "fontchu"], ["id", "btnIncreaseContrast", "title", "T\u0103ng \u0111\u1ED9 t\u01B0\u01A1ng ph\u1EA3n", 2, "cursor", "pointer", 3, "click"], [1, "icon", 2, "font-size", "18px"], [1, "fa", "fa-adjust"], ["id", "btnDecreaseContrast", "title", "Gi\u1EA3m \u0111\u1ED9 t\u01B0\u01A1ng ph\u1EA3n", 2, "cursor", "pointer", 3, "click"], [1, "icon", 2, "font-size", "16px"], ["id", "btnIncreaseFontSize", "title", "T\u0103ng font ch\u1EEF", 1, "btn", "btn-xs", "btn-default", 3, "click"], [1, "icon", 2, "font-size", "19px"], [1, "fa", "fa-font"], ["id", "btnDecreaseFontSize", "title", "Gi\u1EA3m font ch\u1EEF", 1, "btn", "btn-xs", "btn-default", 2, "margin-right", "5px", 3, "click"], [1, "icon", 2, "font-size", "15px"], ["id", "btn-share"], [1, "col-lg-16", "col-md-16", "col-sm-16", "col-xs-16"], ["data-href", "", "data-oaid", "579745863508352884", "data-layout", "1", "data-color", "blue", "data-customize", "false", 1, "zalo-share-button"], [1, "col-md-13", "my-3", "map"], ["src", "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15677.796373936322!2d106.700503!3d10.776875!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdd18899ab18d22f5!2zU-G7nyBHaWFvIHRow7RuZyBW4bqtbiB04bqjaSBUUC5IQ00!5e0!3m2!1svi!2sus!4v1583806410251!5m2!1svi!2sus", "width", "800", "height", "500", "frameborder", "0", "allowfullscreen", "", "aria-hidden", "false", "tabindex", "0", 2, "border", "0"], [1, "infor"], ["id", "tieuded", "href", "#"], ["href", "#"], [1, "col-sm-4"], [1, "mt-4"]], template: function LienHeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "LI\u00CAN H\u1EC6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LienHeComponent_Template_a_click_9_listener() { return ctx.inBai(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "In b\u00E0i vi\u1EBFt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LienHeComponent_Template_i_click_11_listener() { return ctx.inBai(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0110\u1ED9 t\u01B0\u01A1ng ph\u1EA3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LienHeComponent_Template_a_click_15_listener() { return ctx.giamPhanQuang(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LienHeComponent_Template_a_click_18_listener() { return ctx.tangPhanQuang(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Font ch\u1EEF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LienHeComponent_Template_button_click_23_listener() { return ctx.tangSize(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LienHeComponent_Template_button_click_26_listener() { return ctx.giamSize(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "iframe", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "S\u1EDF Giao th\u00F4ng V\u1EADn t\u1EA3i TPHCM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u0110\u1ECBa ch\u1EC9 : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "63 L\u00FD T\u1EF1 Tr\u1ECDng, B\u1EBFn Ngh\u00E9, Qu\u1EADn 1, H\u1ED3 Ch\u00ED Minh 700000, Vi\u1EC7t Nam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "(84.8) 38.290.451");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "S\u1ED1 fax : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "(84.8) 38.290.458");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Email : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "sgtvt@tphcm.gov.vn\u200B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "app-tin-tuc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "app-dich-vu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "app-media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "app-thong-ke");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_detailPages_detailpage_tin_tuc_tin_tuc_component__WEBPACK_IMPORTED_MODULE_1__["TinTucComponent"], _body_dich_vu_dich_vu_component__WEBPACK_IMPORTED_MODULE_2__["DichVuComponent"], _body_media_media_component__WEBPACK_IMPORTED_MODULE_3__["MediaComponent"], _body_thong_ke_thong_ke_component__WEBPACK_IMPORTED_MODULE_4__["ThongKeComponent"]], styles: ["#TextNoiDung[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 100% !important;\n  margin-left: auto !important;\n  margin-right: auto !important;\n  display: block !important;\n}\n\n.motaText[_ngcontent-%COMP%]     img {\n  width: 100%;\n}\n\n.map[_ngcontent-%COMP%]     iframe {\n  width: 100%;\n}\n\n.thoigian[_ngcontent-%COMP%] {\n  letter-spacing: 1px;\n}\n\n#btnIncreaseContrast[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n\n#btnIncreaseFontSize[_ngcontent-%COMP%]{\n  margin-bottom: 5px;\n  padding: 4px;\n}\n\n#btnDecreaseFontSize[_ngcontent-%COMP%]{\n  margin-bottom: 2px;\npadding: 0px;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.infor[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  font-style: italic;\n  font-weight: normal;\n  font-size: 20px;\n}\n\n.infor[_ngcontent-%COMP%] {\n  font-family: 'Times New Roman', Times, serif;\n  font-weight: bold;\n}\n\n#tieuded[_ngcontent-%COMP%]{\n  font-size: 30px;\n}\n\n.fontchu[_ngcontent-%COMP%]{\n  margin-left: 27px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wQmFyL2xpZW4taGUvbGllbi1oZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIsWUFBWTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDRDQUE0QztFQUM1QyxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvdG9wQmFyL2xpZW4taGUvbGllbi1oZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI1RleHROb2lEdW5nIGltZyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLm1vdGFUZXh0ID4+PiBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hcCA+Pj4gaWZyYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50aG9pZ2lhbiB7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbiNidG5JbmNyZWFzZUNvbnRyYXN0IHtcbiAgcGFkZGluZzogNHB4O1xufVxuXG4jYnRuSW5jcmVhc2VGb250U2l6ZXtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nOiA0cHg7XG59XG5cbiNidG5EZWNyZWFzZUZvbnRTaXple1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG5wYWRkaW5nOiAwcHg7XG59XG5cbmhyIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uaW5mb3IgYXtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5pbmZvciB7XG4gIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiN0aWV1ZGVke1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5mb250Y2h1e1xuICBtYXJnaW4tbGVmdDogMjdweDtcbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LienHeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lien-he',
                templateUrl: './lien-he.component.html',
                styleUrls: ['./lien-he.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/topBar/list-tin-tuc/list-tin-tuc.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/topBar/list-tin-tuc/list-tin-tuc.component.ts ***!
  \***************************************************************/
/*! exports provided: ListTinTucComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTinTucComponent", function() { return ListTinTucComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/call-api.service */ "./src/services/call-api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _detailPages_detailpage_tin_tuc_tin_tuc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../detailPages/detailpage/tin-tuc/tin-tuc.component */ "./src/app/detailPages/detailpage/tin-tuc/tin-tuc.component.ts");
/* harmony import */ var _body_dich_vu_dich_vu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../body/dich-vu/dich-vu.component */ "./src/app/body/dich-vu/dich-vu.component.ts");
/* harmony import */ var _body_media_media_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../body/media/media.component */ "./src/app/body/media/media.component.ts");
/* harmony import */ var _body_thong_ke_thong_ke_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../body/thong-ke/thong-ke.component */ "./src/app/body/thong-ke/thong-ke.component.ts");









class ListTinTucComponent {
    constructor(callApiService, http, activeRouter) {
        this.callApiService = callApiService;
        this.http = http;
        this.activeRouter = activeRouter;
        this.tinTucList = [];
        this.urlGTSGT = 'Gioi-Thieu-So-Giao-Thong-Van-Tai/' + btoa('9') + '.html';
        this.urlCDVTT = 'Cac-Don-Vi-Truc-Thuoc/' + btoa('10') + '.html';
        this.urlVTHK = 'Van-Tai-Hanh-Khach-Cong-Cong/' + btoa('11') + '.html';
        this.urlCCHC = 'Cai-Cach-Hanh-Chinh/' + btoa('12') + '.html';
        this.urlCLDHKH = 'Chien-Luoc-Dinh-Huong-Ke-Hoach/' + btoa('13') + '.html';
        this.urlTTCDDH = 'Thong-Tin-Chi-Dao-Dieu-Hanh/' + btoa('14') + '.html';
        this.urlGTDB = 'Giao-Thong-Duong-Bo/' + btoa('30') + '.html';
        this.urlGTDT = 'Giao-Thong-Duong-Thuy/' + btoa('31') + '.html';
        this.url = 'TinTuc/GetList_ByTheLoai_Paging?pageNumber=1&rowsPerPage=10&TheLoaiTinID=';
        const empid = this.activeRouter.snapshot.params.TheLoaiTinID;
        this.callApiService.getDetailList(this.url + empid)
            .subscribe((data) => {
            this.tinTucList = data;
            window.scroll(0, 0);
        });
    }
    ngOnInit() {
    }
}
ListTinTucComponent.ɵfac = function ListTinTucComponent_Factory(t) { return new (t || ListTinTucComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__["CallApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
ListTinTucComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListTinTucComponent, selectors: [["app-list-tin-tuc"]], decls: 58, vars: 8, consts: [["id", "content-news-info", 1, "row", "news-info"], ["id", "printContent", 1, "col-sm-8"], [1, "first-item"], [1, "row"], [1, "col-md-8", "tieude"], ["id", "noidung", 1, "text-dark", "pointer", 3, "routerLink"], [1, "first-item", "tieude"], [1, "col-sm-4"], [1, "mt-4"]], template: function ListTinTucComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Gi\u1EDBi thi\u1EC7u S\u1EDF giao th\u00F4ng v\u1EADn t\u1EA3i ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "C\u00E1c \u0111\u01A1n v\u1ECB tr\u1EF1c thu\u1ED9c ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "V\u1EADn t\u1EA3i h\u00E0nh kh\u00E1ch c\u00F4ng c\u1ED9ng ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "C\u1EA3i c\u00E1ch h\u00E0nh ch\u00EDnh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Chi\u1EBFn l\u01B0\u1EE3c-\u0110\u1ECBnh h\u01B0\u1EDBng- K\u1EBF ho\u1EA1ch ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Th\u00F4ng tin ch\u1EC9 \u0111\u1EA1o \u0111i\u1EC1u h\u00E0nh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Giao th\u00F4ng \u0111\u01B0\u1EDDng b\u1ED9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Giao th\u00F4ng \u0111\u01B0\u1EDDng thu\u1EF7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "app-tin-tuc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "app-dich-vu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "app-media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "app-thong-ke");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/Tin-Tuc/", ctx.urlGTSGT, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/Tin-Tuc/", ctx.urlCDVTT, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/Tin-Tuc/", ctx.urlVTHK, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/Tin-Tuc/", ctx.urlCCHC, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/Tin-Tuc/", ctx.urlCLDHKH, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/Tin-Tuc/", ctx.urlTTCDDH, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/Tin-Tuc/", ctx.urlGTDB, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/Tin-Tuc/", ctx.urlGTDT, "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _detailPages_detailpage_tin_tuc_tin_tuc_component__WEBPACK_IMPORTED_MODULE_4__["TinTucComponent"], _body_dich_vu_dich_vu_component__WEBPACK_IMPORTED_MODULE_5__["DichVuComponent"], _body_media_media_component__WEBPACK_IMPORTED_MODULE_6__["MediaComponent"], _body_thong_ke_thong_ke_component__WEBPACK_IMPORTED_MODULE_7__["ThongKeComponent"]], styles: ["img[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  padding: 5px;\n  width: 240px;\n}\n\nimg[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);\n}\n\n#noidung[_ngcontent-%COMP%] {\n  font-size: 21px;\n  font-weight:bold;\n  font-family: 'Times New Roman', Times, serif;\n}\n\n#noidung[_ngcontent-%COMP%]:hover {\n  transition: all .3s ease-out;\n  box-shadow:  0 -1px 0 0 white inset, 0 -2px 0 0 color-accent inset ;\n  text-decoration: none;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin-left: 200px;\n  padding-top: 25px;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0.25rem;\n}\n\n.page-link[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: #007bff;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n}\n\n.page-link[_ngcontent-%COMP%]:hover {\n  z-index: 2;\n  color: #0056b3;\n  text-decoration: none;\n  background-color: #e9ecef;\n  border-color: #dee2e6;\n}\n\n.page-link[_ngcontent-%COMP%]:focus {\n  z-index: 2;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.page-link[_ngcontent-%COMP%]:not(:disabled):not(.disabled) {\n  cursor: pointer;\n}\n\n.page-item[_ngcontent-%COMP%]:first-child   .page-link[_ngcontent-%COMP%] {\n  margin-left: 0;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n\n.page-item[_ngcontent-%COMP%]:last-child   .page-link[_ngcontent-%COMP%] {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n\n.tieude[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #1384BC !important;\n}\n\n.tieude[_ngcontent-%COMP%] {\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wQmFyL2xpc3QtdGluLXR1Yy9saXN0LXRpbi10dWMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLG1FQUFtRTtFQUNuRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBRUUsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsK0JBQStCO0VBQy9CLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxtQ0FBbUM7QUFDckM7O0FBR0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7O0FBRUEiLCJmaWxlIjoic3JjL2FwcC90b3BCYXIvbGlzdC10aW4tdHVjL2xpc3QtdGluLXR1Yy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIHdpZHRoOiAyNDBweDtcbn1cblxuaW1nOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDJweCAxcHggcmdiYSgwLCAxNDAsIDE4NiwgMC41KTtcbn1cblxuI25vaWR1bmcge1xuICBmb250LXNpemU6IDIxcHg7XG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xufVxuXG4jbm9pZHVuZzpob3ZlciB7XG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1vdXQ7XG4gIGJveC1zaGFkb3c6ICAwIC0xcHggMCAwIHdoaXRlIGluc2V0LCAwIC0ycHggMCAwIGNvbG9yLWFjY2VudCBpbnNldCA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG59XG5cbi5wYWdpbmF0aW9uIHtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cblxuLnBhZ2UtbGluayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xuICBtYXJnaW4tbGVmdDogLTFweDtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIGNvbG9yOiAjMDA3YmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xufVxuXG4ucGFnZS1saW5rOmhvdmVyIHtcbiAgei1pbmRleDogMjtcbiAgY29sb3I6ICMwMDU2YjM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcbiAgYm9yZGVyLWNvbG9yOiAjZGVlMmU2O1xufVxuXG4ucGFnZS1saW5rOmZvY3VzIHtcbiAgei1pbmRleDogMjtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMCwgMTIzLCAyNTUsIDAuMjUpO1xufVxuXG4ucGFnZS1saW5rOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBhZ2UtaXRlbTpmaXJzdC1jaGlsZCAucGFnZS1saW5rIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuMjVyZW07XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuMjVyZW07XG59XG5cbi5wYWdlLWl0ZW06bGFzdC1jaGlsZCAucGFnZS1saW5rIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuMjVyZW07XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjI1cmVtO1xufVxuXG5cbi50aWV1ZGUgYTpob3ZlciB7XG4gIGNvbG9yOiAjMTM4NEJDICFpbXBvcnRhbnQ7XG59XG5cbi50aWV1ZGUge1xuXG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListTinTucComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-tin-tuc',
                templateUrl: './list-tin-tuc.component.html',
                styleUrls: ['./list-tin-tuc.component.css']
            }]
    }], function () { return [{ type: src_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__["CallApiService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/topBar/yeu-cau/yeu-cau.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/topBar/yeu-cau/yeu-cau.component.ts ***!
  \*****************************************************/
/*! exports provided: YeuCauComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauComponent", function() { return YeuCauComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _detailPages_detailpage_tin_tuc_tin_tuc_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../detailPages/detailpage/tin-tuc/tin-tuc.component */ "./src/app/detailPages/detailpage/tin-tuc/tin-tuc.component.ts");
/* harmony import */ var _body_dich_vu_dich_vu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../body/dich-vu/dich-vu.component */ "./src/app/body/dich-vu/dich-vu.component.ts");
/* harmony import */ var _body_media_media_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../body/media/media.component */ "./src/app/body/media/media.component.ts");
/* harmony import */ var _body_thong_ke_thong_ke_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../body/thong-ke/thong-ke.component */ "./src/app/body/thong-ke/thong-ke.component.ts");






class YeuCauComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
YeuCauComponent.ɵfac = function YeuCauComponent_Factory(t) { return new (t || YeuCauComponent)(); };
YeuCauComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YeuCauComponent, selectors: [["app-yeu-cau"]], decls: 51, vars: 0, consts: [["id", "content-news-info", 1, "row", "news-info"], ["id", "printContent", 1, "col-sm-8"], [1, "row"], [1, "col-md-12"], [1, "content"], [1, "textChuDe"], ["id", "textInput", 1, "input-group", "mb-3"], [1, "input-group-prepend"], ["id", "inputGroup-sizing-default", 1, "input-group-text"], ["type", "text", "aria-label", "Default", "aria-describedby", "inputGroup-sizing-default", "placeholder", "Nh\u00E2p \u0111\u1EA7y \u0111\u1EE7 h\u1ECD v\u00E0 t\u00EAn", 1, "form-control"], [1, "input-group", "mb-3"], ["type", "text", "aria-label", "Default", "aria-describedby", "inputGroup-sizing-default", "placeholder", "Nh\u1EADp \u0111\u1ECBa ch\u1EC9 email (example@gmail.com)", 1, "form-control"], ["type", "text", "oninput", "this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');", "aria-label", "Default", "aria-describedby", "inputGroup-sizing-default", "placeholder", "Nh\u1EADp s\u1ED1 \u0111i\u1EC7n tho\u1EA1i", 1, "form-control"], ["id", "thongtincauhoi", 1, "textChuDe"], ["id", "inputcauhoi", 1, "input-group", "mb-3"], ["type", "text", "aria-label", "Default", "aria-describedby", "inputGroup-sizing-default", "placeholder", "Nh\u1EADp ti\u00EAu \u0111\u1EC1 b\u1EA1n mu\u1ED1n h\u1ECFi", 1, "form-control"], [1, "input-group", "textArea"], [1, "input-group-text"], ["aria-label", "With textarea", "placeholder", "Nh\u1EADp n\u1ED9i dung b\u1EA1n mu\u1ED1n h\u1ECFi", 1, "form-control"], [1, "input-group"], ["type", "submit", "value", "G\u1EEDi \u0111i", "name", "btsend", 1, "btn", "btn-primary"], [1, "col-sm-4"], [1, "mt-4"]], template: function YeuCauComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "G\u1EECI C\u00C2U H\u1ECEI, Y\u00CAU C\u1EA6U");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Th\u00F4ng tin ng\u01B0\u1EDDi \u0111\u1EB7t c\u00E2u h\u1ECFi:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "H\u1ECD v\u00E0 t\u00EAn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Th\u00F4ng tin c\u00E2u h\u1ECFi:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Ti\u00EAu \u0111\u1EC1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "N\u1ED9i dung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "app-tin-tuc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "app-dich-vu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "app-media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "app-thong-ke");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_detailPages_detailpage_tin_tuc_tin_tuc_component__WEBPACK_IMPORTED_MODULE_1__["TinTucComponent"], _body_dich_vu_dich_vu_component__WEBPACK_IMPORTED_MODULE_2__["DichVuComponent"], _body_media_media_component__WEBPACK_IMPORTED_MODULE_3__["MediaComponent"], _body_thong_ke_thong_ke_component__WEBPACK_IMPORTED_MODULE_4__["ThongKeComponent"]], styles: [".textArea[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n}\n.textChuDe[_ngcontent-%COMP%]{\n  font-size: 20px;\n}\n#textInput[_ngcontent-%COMP%]{\n  margin-top: -16px;\n}\n#thongtincauhoi[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n#inputcauhoi[_ngcontent-%COMP%]{\n  margin-top: -20px;\n}\n.input-group-text[_ngcontent-%COMP%]{\n  font-size: 15px;\n}\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: grey;\n  font-size: 15px;\n  text-align: justify;\n}\n[_ngcontent-%COMP%]::-moz-placeholder {\n  color: grey;\n  font-size: 15px;\n  text-align: justify;\n}\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: grey;\n  font-size: 15px;\n  text-align: justify;\n}\n[_ngcontent-%COMP%]::placeholder {\n  color: grey;\n  font-size: 15px;\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wQmFyL3lldS1jYXUveWV1LWNhdS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUpBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFKQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBSkE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3RvcEJhci95ZXUtY2F1L3lldS1jYXUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0QXJlYSB7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuLnRleHRDaHVEZXtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuI3RleHRJbnB1dHtcbiAgbWFyZ2luLXRvcDogLTE2cHg7XG59XG5cbiN0aG9uZ3RpbmNhdWhvaSB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbiNpbnB1dGNhdWhvaXtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG59XG5cbi5pbnB1dC1ncm91cC10ZXh0e1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogZ3JleTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YeuCauComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-yeu-cau',
                templateUrl: './yeu-cau.component.html',
                styleUrls: ['./yeu-cau.component.css']
            }]
    }], function () { return []; }, null); })();


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

/***/ "./src/services/call-api.service.ts":
/*!******************************************!*\
  !*** ./src/services/call-api.service.ts ***!
  \******************************************/
/*! exports provided: CallApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallApiService", function() { return CallApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



// import { map } from 'rxjs/operators';
class CallApiService {
    constructor(http) {
        this.http = http;
        this.api = 'http://192.168.1.37:8111/api/';
    }
    getThongtin(url) {
        return this.http.get(this.api + url);
    }
    getChuDe(url) {
        return this.http.get(this.api + url);
    }
    getDetail(url) {
        return this.http.get(this.api + url);
    }
    GetServicer(url) {
        return this.http.get(this.api + url);
    }
    // GetList(url) {
    //   return this.http.get<Object[]>(this.api + url);
    // }
    getProfile(url) {
        return this.http.get(this.api + url);
    }
    getTinLienQuan(url) {
        return this.http.get(this.api + url);
    }
    getMedia(url) {
        return this.http.get(this.api + url);
    }
    getMediaList(url) {
        return this.http.get(this.api + url);
    }
    getMediaDetail(url) {
        return this.http.get(this.api + url);
    }
    getDetailList(url) {
        return this.http.get(this.api + url);
    }
    getDauTu(url) {
        return this.http.get(this.api + url);
    }
    getDuAn(url) {
        return this.http.get(this.api + url);
    }
    getLinked(url) {
        return this.http.get(this.api + url);
    }
    getDichVu(url) {
        return this.http.get(this.api + url);
    }
}
CallApiService.ɵfac = function CallApiService_Factory(t) { return new (t || CallApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CallApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CallApiService, factory: CallApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CallApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hoangsonui/Works/Dev/CongThongTin/CongThongTinGTVT/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map