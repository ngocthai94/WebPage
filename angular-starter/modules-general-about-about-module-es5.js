function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-general-about-about-module"], {
  /***/
  "./src/app/modules/general/about/about.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/modules/general/about/about.component.ts ***!
    \**********************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppModulesGeneralAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Services_Services_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../Services/Services.module */
    "./src/app/Services/Services.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AboutComponent =
    /*#__PURE__*/
    function () {
      //constructor() { }
      // private products =[];
      // private category =[];
      function AboutComponent(callapi, http) {
        _classCallCheck(this, AboutComponent);

        this.callapi = callapi;
        this.http = http;
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.callapi.GetDataAsyns('/assets/data/category.json').then(function (data) {
            console.log(data);
          }).catch(function (error) {
            console.log("Erro:" + error);
          }); // this.products = [
          //   {"id":1, "categoryID":1, "name":"Licensed Frozen Hat","description":"Incidunt et magni","price":"170.00","quantity":56840},
          //   {"id":2, "categoryID":1, "name":"Rustic Concrete Chicken","description":"Sint libero mollitia","price":"302.00","quantity":9358},
          //   {"id":3, "categoryID":2, "name":"Fantastic Metal Computer","description":"In consequuntur cupiditat","price":"279.00","quantity":90316},
          //   {"id":4, "categoryID":3, "name":"Refined Concrete Chair","description":"Saepe nemo praesentium","price":"760.00","quantity":5899}];
          //   console.log(this.products);
        }
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_Services_module__WEBPACK_IMPORTED_MODULE_1__["ServiceModule"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 3,
      vars: 0,
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZ2VuZXJhbC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.css']
        }]
      }], function () {
        return [{
          type: _Services_Services_module__WEBPACK_IMPORTED_MODULE_1__["ServiceModule"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/general/about/about.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/modules/general/about/about.module.ts ***!
    \*******************************************************/

  /*! exports provided: AboutModule */

  /***/
  function srcAppModulesGeneralAboutAboutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutModule", function () {
      return AboutModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./about.component */
    "./src/app/modules/general/about/about.component.ts"); //import { AboutRoutingModule } from './about-routing.module';


    var AboutModule = function AboutModule() {
      _classCallCheck(this, AboutModule);
    };

    AboutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AboutModule
    });
    AboutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AboutModule_Factory(t) {
        return new (t || AboutModule)();
      },
      providers: [],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutModule, {
        declarations: [_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]],
          declarations: [_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]],
          providers: []
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=modules-general-about-about-module-es5.js.map