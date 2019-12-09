(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-concept-map-edit-concept-map-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/edit-concept-map/edit-concept-map.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit-concept-map/edit-concept-map.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n  \n      <ion-title>\n          Edit Concept Map\n      </ion-title>\n      \n    </ion-toolbar>\n    \n  </ion-header>\n\n<ion-content>\n    \n     <cm-concept-map></cm-concept-map>\n</ion-content>\n\n<ion-footer>\n    <ion-grid style=\"background-color: gray; height: 10%;\">\n        <ion-row >\n            <ion-col>\n                <ion-button>\n                  <ion-icon slot=\"icon-only\" name='Open'></ion-icon>Select\n                </ion-button>\n              </ion-col> \n          <ion-col>\n            <ion-button (click)=\"loadLocal()\"> \n              <ion-icon slot=\"icon-only\" name='download'></ion-icon>Load Local File\n            </ion-button>\n          </ion-col>\n          <ion-col>\n              <ion-button >\n                <ion-icon slot=\"icon-only\" name='remove-circle-outline'></ion-icon>Clear\n              </ion-button>\n            </ion-col>\n           \n        </ion-row>\n        </ion-grid>\n</ion-footer>\n"

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
/* harmony import */ var _create_concept_map_conceptmap_conceptmap_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../create-concept-map/conceptmap/conceptmap.module */ "./src/app/create-concept-map/conceptmap/conceptmap.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_concept_map_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-concept-map.page */ "./src/app/edit-concept-map/edit-concept-map.page.ts");








const routes = [
    {
        path: '',
        component: _edit_concept_map_page__WEBPACK_IMPORTED_MODULE_7__["EditConceptMapPage"]
    }
];
let EditConceptMapPageModule = class EditConceptMapPageModule {
};
EditConceptMapPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _create_concept_map_conceptmap_conceptmap_module__WEBPACK_IMPORTED_MODULE_1__["ConceptMapModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
        ],
        declarations: [_edit_concept_map_page__WEBPACK_IMPORTED_MODULE_7__["EditConceptMapPage"]]
    })
], EditConceptMapPageModule);



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
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _create_concept_map_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../create-concept-map/conceptmap/conceptmap.component */ "./src/app/create-concept-map/conceptmap/conceptmap.component.ts");




let EditConceptMapPage = class EditConceptMapPage {
    constructor(_angularFireStore) {
        this._angularFireStore = _angularFireStore;
        this.importTool = {
            // todo - refactor this
            _file: undefined,
            visible: false,
            chooseFile: event => {
                if (event.target.files[0]) {
                    const reader = new FileReader();
                    reader.onloadend = e => {
                        this.importTool._file = reader.result;
                    };
                    reader.readAsText(event.target.files[0]);
                }
                else {
                    this.importTool._file = undefined;
                }
            },
            loadFile: () => {
                try {
                    this.cmap.import('{concepts:[],propositions:[]}');
                    this.importTool.visible = false;
                    this.importTool._file = undefined;
                }
                catch (err) {
                    // catch error
                }
            },
            disabled: () => !this.importTool._file
        };
    }
    ngAfterViewInit() {
        // const graph = new mxGraph(this.graphContainer.nativeElement);
        // try {
        //   const parent = graph.getDefaultParent();
        //   graph.getModel().beginUpdate();
        //   const vertex1 = graph.insertVertex(parent, '1', 'Vertex 1', 0, 0, 200, 80);
        //   const vertex2 = graph.insertVertex(parent, '2', 'Vertex 2', 0, 0, 200, 80);
        //   graph.insertEdge(parent, 'none', 'none2', vertex1, vertex2);
        // } finally {
        //   graph.getModel().endUpdate();
        //   new mxHierarchicalLayout(graph).execute(graph.getDefaultParent());
        //   }
    }
    loadLocal() {
        const db = this._angularFireStore
            .collection('ConceptMaps')
            .doc('Plants');
        db.ref.get()
            .then((doc) => {
            console.log('ref get', doc.data(), doc);
            console.log(JSON.stringify(doc.data()));
            this.cmap.import(JSON.stringify(doc.data()));
        });
        // db.valueChanges().subscribe ( res => console.log('res value changes', res));
        // db.snapshotChanges().subscribe ( res => {
        //   console.log('res snapshot', res);
        //  });
        //   .get()
        //   .then(() => {
        //     const toast = this._toastController.create({
        //       message: 'Concept Map save successfully!',
        //       duration: 2000,
        //       position: 'top'
        //     });
        //     toast.then(toastMessage => {
        //       toastMessage.present();
        //     });
        //   })
        //   .catch(err => {
        //     console.log('Error' + err);
        //   });
        // this.importTool.visible = true;
        // const filedata = new Blob ('{concepts:[{text:Test,x:263,y:227,id:e7dab002}],propositions:[]}');
        // try {
        // this.cmap.import('"{"concepts":[{"text":"Test","x":263,"y":227,"id":"e7dab002"}],"propositions":[]}"');
        // } catch (e) {
        //   console.log('error', e);
        // }
    }
};
EditConceptMapPage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_create_concept_map_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["ConceptMapComponent"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _create_concept_map_conceptmap_conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["ConceptMapComponent"])
], EditConceptMapPage.prototype, "cmap", void 0);
EditConceptMapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-edit-concept-map',
        template: __webpack_require__(/*! raw-loader!./edit-concept-map.page.html */ "./node_modules/raw-loader/index.js!./src/app/edit-concept-map/edit-concept-map.page.html"),
        styles: [__webpack_require__(/*! ./edit-concept-map.page.scss */ "./src/app/edit-concept-map/edit-concept-map.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
], EditConceptMapPage);



/***/ })

}]);
//# sourceMappingURL=edit-concept-map-edit-concept-map-module-es2015.js.map