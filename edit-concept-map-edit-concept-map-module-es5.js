(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-concept-map-edit-concept-map-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/edit-concept-map/edit-concept-map.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit-concept-map/edit-concept-map.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>editConceptMap</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div #graphContainer id=\"graphContainer\">\n      </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/edit-concept-map/edit-concept-map.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/edit-concept-map/edit-concept-map.module.ts ***!
  \*************************************************************/
/*! exports provided: EditConceptMapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditConceptMapPageModule", function() { return EditConceptMapPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_concept_map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-concept-map.page */ "./src/app/edit-concept-map/edit-concept-map.page.ts");







var routes = [
    {
        path: '',
        component: _edit_concept_map_page__WEBPACK_IMPORTED_MODULE_6__["EditConceptMapPage"]
    }
];
var EditConceptMapPageModule = /** @class */ (function () {
    function EditConceptMapPageModule() {
    }
    EditConceptMapPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_concept_map_page__WEBPACK_IMPORTED_MODULE_6__["EditConceptMapPage"]]
        })
    ], EditConceptMapPageModule);
    return EditConceptMapPageModule;
}());



/***/ }),

/***/ "./src/app/edit-concept-map/edit-concept-map.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/edit-concept-map/edit-concept-map.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtY29uY2VwdC1tYXAvZWRpdC1jb25jZXB0LW1hcC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/edit-concept-map/edit-concept-map.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/edit-concept-map/edit-concept-map.page.ts ***!
  \***********************************************************/
/*! exports provided: EditConceptMapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditConceptMapPage", function() { return EditConceptMapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditConceptMapPage = /** @class */ (function () {
    function EditConceptMapPage() {
    }
    EditConceptMapPage.prototype.ngAfterViewInit = function () {
        var graph = new mxGraph(this.graphContainer.nativeElement);
        try {
            var parent_1 = graph.getDefaultParent();
            graph.getModel().beginUpdate();
            var vertex1 = graph.insertVertex(parent_1, '1', 'Vertex 1', 0, 0, 200, 80);
            var vertex2 = graph.insertVertex(parent_1, '2', 'Vertex 2', 0, 0, 200, 80);
            graph.insertEdge(parent_1, 'none', 'none2', vertex1, vertex2);
        }
        finally {
            graph.getModel().endUpdate();
            new mxHierarchicalLayout(graph).execute(graph.getDefaultParent());
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('graphContainer', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], EditConceptMapPage.prototype, "graphContainer", void 0);
    EditConceptMapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-concept-map',
            template: __webpack_require__(/*! raw-loader!./edit-concept-map.page.html */ "./node_modules/raw-loader/index.js!./src/app/edit-concept-map/edit-concept-map.page.html"),
            styles: [__webpack_require__(/*! ./edit-concept-map.page.scss */ "./src/app/edit-concept-map/edit-concept-map.page.scss")]
        })
    ], EditConceptMapPage);
    return EditConceptMapPage;
}());



/***/ })

}]);
//# sourceMappingURL=edit-concept-map-edit-concept-map-module-es5.js.map