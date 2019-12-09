(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["plants-plants-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/plants/plants.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/plants/plants.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>\n        MyVizLearn\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <!-- <ion-button (click)=\"setSampleMap()\"> SetMaptoFirebase </ion-button> -->\n    <ion-card>\n      <ion-card-title>Plant</ion-card-title>\n        <ion-card-header>\n    <ngx-graph\n      [links]=\"links\"\n      [nodes]=\"nodes\"\n      [autoCenter]=\"true\"\n      [panningEnabled]=\"true\"\n      [enableZoom]=\"true\"\n      [autoZoom]=\"true\"\n    >\n      <ng-template #defsTemplate>\n        <svg:marker\n          id=\"arrow\"\n          viewBox=\"0 -5 10 10\"\n          refX=\"8\"\n          refY=\"0\"\n          markerWidth=\"4\"\n          markerHeight=\"4\"\n          orient=\"auto\"\n        >\n          <svg:path d=\"M0,-5L10,0L0,5\" class=\"arrow-head\" />\n        </svg:marker>\n      </ng-template>\n  \n      <ng-template #nodeTemplate let-node>\n        <svg:g class=\"node\">\n          <svg:rect\n            [attr.width]=\"node.dimension.width\"\n            [attr.height]=\"node.dimension.height\"\n            [attr.fill]=\"node.data.color\"\n            \n          />\n          <svg:text \n            alignment-baseline=\"central\"\n            [attr.x]=\"10\"\n            [attr.y]=\"node.dimension.height / 2\"\n            onclick=\"alert(node.label)\"\n          >\n            {{ node.label }}\n          </svg:text>\n        </svg:g>\n      </ng-template>\n  \n      <ng-template #linkTemplate let-link>\n        <svg:g class=\"edge\">\n          <svg:path\n            class=\"line\"\n            stroke-width=\"2\"\n            marker-end=\"url(#arrow)\"\n          ></svg:path>\n          <svg:text class=\"edge-label\" text-anchor=\"middle\">\n            <textPath\n              class=\"text-path\"\n              [attr.href]=\"'#' + link.id\"\n              [style.dominant-baseline]=\"link.dominantBaseline\"\n              startOffset=\"50%\"\n            >\n              {{ link.label }}\n            </textPath>\n          </svg:text>\n        </svg:g>\n      </ng-template>\n    </ngx-graph>\n        </ion-card-header>\n        <ion-card-content>\n          \n        </ion-card-content>\n        <ion-row class=\"cardfooter\">\n            <ion-col>\n                  Sunlight\n            </ion-col>\n            <ion-col>\n                <p>All plants use sunlight to make food (sugars) in a process called photosynthesis. They store the food in their leaves and the energy flows to other animals that eat the leaves</p>\n          </ion-col>\n          </ion-row>\n          <ion-row class=\"cardfooter\">\n              <ion-col>\n                    Sunlight\n              </ion-col>\n              <ion-col>\n                  <a href=\"https://en.wikipedia.org/wiki/Sunlight\">https://en.wikipedia.org/wiki/Sunlight</a>\n            </ion-col>\n            </ion-row>\n            <ion-row class=\"cardfooter\">\n                <ion-col>\n                      <p>Root</p>\n                </ion-col>\n                <ion-col>\n                    <a href=\"https://en.wikipedia.org/wiki/Root\">https://en.wikipedia.org/wiki/Root</a>\n              </ion-col>\n              </ion-row>\n    </ion-card>\n    \n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/plants/data.ts":
/*!********************************!*\
  !*** ./src/app/plants/data.ts ***!
  \********************************/
/*! exports provided: nodes, links */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodes", function() { return nodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "links", function() { return links; });
var nodes = [
    {
        id: 'plant',
        label: 'Plant'
    }, {
        id: 'roots',
        label: 'Roots'
    }, {
        id: 'flowers',
        label: 'Flowers'
    },
    {
        id: 'leaves',
        label: 'Leaves'
    }, {
        id: 'sunlight',
        label: 'Sunlight'
    }
    //   , {
    //     id: 'othercelestialbodies',
    //     label: 'Other Celestial Bodies'
    //   }
];
var links = [
    {
        id: 'a',
        source: 'plant',
        target: 'roots',
        label: 'has'
    }, {
        id: 'b',
        source: 'plant',
        target: 'flowers',
        label: 'has'
    },
    {
        id: 'c',
        source: 'plant',
        target: 'leaves',
        label: 'has'
    },
    {
        id: 'd',
        source: 'plant',
        target: 'sunlight',
        label: 'needs'
    }
];


/***/ }),

/***/ "./src/app/plants/plants.module.ts":
/*!*****************************************!*\
  !*** ./src/app/plants/plants.module.ts ***!
  \*****************************************/
/*! exports provided: PlantsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlantsPageModule", function() { return PlantsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _plants_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plants.page */ "./src/app/plants/plants.page.ts");
/* harmony import */ var _swimlane_ngx_graph__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-graph */ "./node_modules/@swimlane/ngx-graph/fesm5/swimlane-ngx-graph.js");








var routes = [
    {
        path: '',
        component: _plants_page__WEBPACK_IMPORTED_MODULE_6__["PlantsPage"]
    }
];
var PlantsPageModule = /** @class */ (function () {
    function PlantsPageModule() {
    }
    PlantsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _swimlane_ngx_graph__WEBPACK_IMPORTED_MODULE_7__["NgxGraphModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_plants_page__WEBPACK_IMPORTED_MODULE_6__["PlantsPage"]]
        })
    ], PlantsPageModule);
    return PlantsPageModule;
}());



/***/ }),

/***/ "./src/app/plants/plants.page.scss":
/*!*****************************************!*\
  !*** ./src/app/plants/plants.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYW50cy9wbGFudHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/plants/plants.page.ts":
/*!***************************************!*\
  !*** ./src/app/plants/plants.page.ts ***!
  \***************************************/
/*! exports provided: PlantsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlantsPage", function() { return PlantsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ "./src/app/plants/data.ts");




// NGX Graph Support

// import { map } from 'rxjs/operators';
var PlantsPage = /** @class */ (function () {
    function PlantsPage(_angularFireStore, _angularFireAuth) {
        this._angularFireStore = _angularFireStore;
        this._angularFireAuth = _angularFireAuth;
        this.nodes = _data__WEBPACK_IMPORTED_MODULE_4__["nodes"];
        this.conceptMap = {
            node: [],
            edge: []
        };
        // clusters: ClusterNode[] = clusters;
        this.links = _data__WEBPACK_IMPORTED_MODULE_4__["links"];
        console.log('check concepMap', this.conceptMap);
        console.log('node', this.nodes);
        console.log('link', this.links);
        // const db = _angularFireStore
        //   .collection('ConceptMaps')
        //   .doc('Plants');
        // db.ref.get()
        //   .then((doc) => {
        //     console.log('ref get', doc.data());
        //     console.log(JSON.stringify(doc.data()));
        //     const val = doc.data();
        //     this.nodes = val.concepts;
        //     this.links = val.propositions;
        //   });
        // this.nodes = this.conceptMap.node;
        // this.links = this.conceptMap.edge;
    }
    PlantsPage.prototype.ngOnInit = function () {
        console.log(this.conceptMap);
    };
    PlantsPage.prototype.setSampleMap = function () {
        this.conceptMap.node = _data__WEBPACK_IMPORTED_MODULE_4__["nodes"];
        this.conceptMap.edge = _data__WEBPACK_IMPORTED_MODULE_4__["links"];
        this._angularFireStore
            .collection('sampleMap')
            .doc('solarSystem')
            .set({
            node: this.conceptMap.node,
            edge: this.conceptMap.edge
        })
            .then(function (result) { return console.info(result); })
            .catch(function (err) {
            console.log('Error' + err);
        });
    };
    PlantsPage.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] }
    ]; };
    PlantsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-plants',
            template: __webpack_require__(/*! raw-loader!./plants.page.html */ "./node_modules/raw-loader/index.js!./src/app/plants/plants.page.html"),
            styles: [__webpack_require__(/*! ./plants.page.scss */ "./src/app/plants/plants.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], PlantsPage);
    return PlantsPage;
}());



/***/ })

}]);
//# sourceMappingURL=plants-plants-module-es5.js.map