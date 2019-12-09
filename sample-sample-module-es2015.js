(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sample-sample-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/sample/sample.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sample/sample.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      MyVizLearn\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-button (click)=\"setSampleMap()\"> SetMaptoFirebase </ion-button> -->\n  <ion-card>\n    <ion-card-title>Solar System</ion-card-title>\n      <ion-card-header>\n  <ngx-graph\n    [links]=\"links\"\n    [nodes]=\"nodes\"\n    [autoCenter]=\"true\"\n    [panningEnabled]=\"true\"\n    [enableZoom]=\"true\"\n    [autoZoom]=\"true\"\n  >\n    <ng-template #defsTemplate>\n      <svg:marker\n        id=\"arrow\"\n        viewBox=\"0 -5 10 10\"\n        refX=\"8\"\n        refY=\"0\"\n        markerWidth=\"4\"\n        markerHeight=\"4\"\n        orient=\"auto\"\n      >\n        <svg:path d=\"M0,-5L10,0L0,5\" class=\"arrow-head\" />\n      </svg:marker>\n    </ng-template>\n\n    <ng-template #nodeTemplate let-node>\n      <svg:g class=\"node\">\n        <svg:rect\n          [attr.width]=\"node.dimension.width\"\n          [attr.height]=\"node.dimension.height\"\n          [attr.fill]=\"node.data.color\"\n          \n        />\n        <svg:text \n          alignment-baseline=\"central\"\n          [attr.x]=\"10\"\n          [attr.y]=\"node.dimension.height / 2\"\n          onclick=\"alert(node.label)\"\n        >\n          {{ node.label }}\n        </svg:text>\n      </svg:g>\n    </ng-template>\n\n    <ng-template #linkTemplate let-link>\n      <svg:g class=\"edge\">\n        <svg:path\n          class=\"line\"\n          stroke-width=\"2\"\n          marker-end=\"url(#arrow)\"\n        ></svg:path>\n        <svg:text class=\"edge-label\" text-anchor=\"middle\">\n          <textPath\n            class=\"text-path\"\n            [attr.href]=\"'#' + link.id\"\n            [style.dominant-baseline]=\"link.dominantBaseline\"\n            startOffset=\"50%\"\n          >\n            {{ link.label }}\n          </textPath>\n        </svg:text>\n      </svg:g>\n    </ng-template>\n  </ngx-graph>\n      </ion-card-header>\n      <ion-row class=\"cardfooter\">\n          <ion-col>\n                <p>Sun</p>\n          </ion-col>\n          <ion-col>\n              <p>Sun is the the brightest star in the solar system</p>\n        </ion-col>\n        </ion-row>\n        <ion-row class=\"cardfooter\">\n            <ion-col>\n                  <p>Planet</p>\n            </ion-col>\n            <ion-col>\n                <a href=\"https://en.wikipedia.org/wiki/Planet\">https://en.wikipedia.org/wiki/Planet</a>\n          </ion-col>\n          </ion-row>\n  </ion-card>\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/sample/data.ts":
/*!********************************!*\
  !*** ./src/app/sample/data.ts ***!
  \********************************/
/*! exports provided: nodes, links */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodes", function() { return nodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "links", function() { return links; });
const nodes = [
    {
        id: 'solarsystem',
        label: 'Solar System'
    }, {
        id: 'sun',
        label: 'Sun'
    }, {
        id: 'planets',
        label: 'Planets'
    }
    //   , {
    //     id: 'othercelestialbodies',
    //     label: 'Other Celestial Bodies'
    //   }
];
const links = [
    {
        id: 'a',
        source: 'solarsystem',
        target: 'sun',
        label: 'includes'
    }, {
        id: 'b',
        source: 'solarsystem',
        target: 'planets',
        label: 'includes'
    },
    {
        id: 'd',
        source: 'planets',
        target: 'sun',
        label: 'orbit'
    }
];


/***/ }),

/***/ "./src/app/sample/sample.module.ts":
/*!*****************************************!*\
  !*** ./src/app/sample/sample.module.ts ***!
  \*****************************************/
/*! exports provided: SamplePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplePageModule", function() { return SamplePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sample_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sample.page */ "./src/app/sample/sample.page.ts");
/* harmony import */ var _swimlane_ngx_graph__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-graph */ "./node_modules/@swimlane/ngx-graph/fesm2015/swimlane-ngx-graph.js");







// NGX Graph support

const routes = [
    {
        path: '',
        component: _sample_page__WEBPACK_IMPORTED_MODULE_6__["SamplePage"]
    }
];
let SamplePageModule = class SamplePageModule {
};
SamplePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _swimlane_ngx_graph__WEBPACK_IMPORTED_MODULE_7__["NgxGraphModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_sample_page__WEBPACK_IMPORTED_MODULE_6__["SamplePage"]]
    })
], SamplePageModule);



/***/ }),

/***/ "./src/app/sample/sample.page.scss":
/*!*****************************************!*\
  !*** ./src/app/sample/sample.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".concept-info {\n  margin-top: 24px;\n  margin-bottom: 24px;\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FtcGxlL0M6XFxVc2Vyc1xcbmlydXNcXERvY3VtZW50c1xcR2FUZWNoIC0gT01TQ1NcXENTNjQ2MCAtIEVkdVRlY2hcXHByb2plY3RcXE15RmluYWxQcm9qZWN0L3NyY1xcYXBwXFxzYW1wbGVcXHNhbXBsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3NhbXBsZS9zYW1wbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9zYW1wbGUvc2FtcGxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb25jZXB0LWluZm9cclxue1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn0iLCIuY29uY2VwdC1pbmZvIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/sample/sample.page.ts":
/*!***************************************!*\
  !*** ./src/app/sample/sample.page.ts ***!
  \***************************************/
/*! exports provided: SamplePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplePage", function() { return SamplePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ "./src/app/sample/data.ts");




// NGX Graph Support

// import { link } from "fs";
let SamplePage = class SamplePage {
    constructor(_angularFireStore, _angularFireAuth) {
        this._angularFireStore = _angularFireStore;
        this._angularFireAuth = _angularFireAuth;
        this.nodes = _data__WEBPACK_IMPORTED_MODULE_4__["nodes"];
        this.conceptMap = {
            node: [],
            edge: []
        };
        // clusters: ClusterNode[] = clusters;
        this.links = _data__WEBPACK_IMPORTED_MODULE_4__["links"];
        // console.log("check concepMap",this.conceptMap)
        // this.conceptMapInfo = _angularFireStore
        //   .collection("sampleMap")
        //   .doc("solarSystem")
        //   .valueChanges()
        //   .subscribe(result => {
        //     console.log(result as String);
        //     // this.conceptMap = result;
        //     this.nodes = this.conceptMap.node;
        //     this.links = this.conceptMap.edge;
        //   });
    }
    ngOnInit() {
        console.log(this.conceptMap);
    }
    setSampleMap() {
        this.conceptMap.node = _data__WEBPACK_IMPORTED_MODULE_4__["nodes"];
        this.conceptMap.edge = _data__WEBPACK_IMPORTED_MODULE_4__["links"];
        this._angularFireStore
            .collection("sampleMap")
            .doc("solarSystem")
            .set({
            node: this.conceptMap.node,
            edge: this.conceptMap.edge
        })
            .then(result => console.info(result))
            .catch(err => {
            console.log("Error" + err);
        });
    }
};
SamplePage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] }
];
SamplePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-sample",
        template: __webpack_require__(/*! raw-loader!./sample.page.html */ "./node_modules/raw-loader/index.js!./src/app/sample/sample.page.html"),
        styles: [__webpack_require__(/*! ./sample.page.scss */ "./src/app/sample/sample.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
], SamplePage);



/***/ })

}]);
//# sourceMappingURL=sample-sample-module-es2015.js.map