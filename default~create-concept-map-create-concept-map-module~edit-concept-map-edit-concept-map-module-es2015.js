(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~create-concept-map-create-concept-map-module~edit-concept-map-edit-concept-map-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/create-concept-map/conceptmap/conceptmap.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/create-concept-map/conceptmap/conceptmap.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n/* Concept map element specific styles*/\n:host {\n  display: block;\n  position: absolute;\n  overflow: hidden;\n}\n</style>\n\n<!-- define SVG arrow marker used by propositions -->\n<svg>\n  <defs>\n    <marker id=\"cm-arrow\"  refX=\"10\" refY=\"5\" markerWidth=\"12\" markerHeight=\"8\" orient=\"auto\" >\n      <path stroke=\"#f00\" stroke-width=\"3\" d=\"M 0,20 L 10,5 L 0,10 L 4,5 z\"/>\n    </marker>\n  </defs>\n</svg>\n\n<cm-concept *ngFor=\"let c of cmap.concepts\" [concept]=\"c\" [style.top.px]=\"c.y\" [style.left.px]=\"c.x\" [(cmContenteditableModel)]=\"c.text\">{{c.x}}-{{c.y}}</cm-concept>\n<cm-proposition *ngFor=\"let p of cmap.propositions\" [proposition]=\"p\"></cm-proposition>\n\n<div *ngIf=\"rubberband\" id=\"rubber-band\" [style.top.px] = \"rubberband.top\" [style.left.px] = \"rubberband.left\" [style.width.px] = \"rubberband.width\" [style.height.px] = \"rubberband.height\"></div>\n\n<cm-handle *ngIf=\"getSingleSelection\" [from]=\"getSingleSelection\"></cm-handle>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/create-concept-map/conceptmap/handle.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/create-concept-map/conceptmap/handle.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg>\n  <svg:path *ngIf=\"!dragged\" [attr.d]=\"linePath()\"></svg:path>\n  <svg:path *ngIf=\"dragged\" [attr.d]=\"linePath()\" marker-end=\"url(#cm-arrow)\"></svg:path>\n</svg>\n\n<div *ngIf=\"!dragged\" id=\"cm-handle-label\" class=\"prevent-select\" [style.left.px]=\"x\" [style.top.px]=\"y\" (mousedown)=\"mouseDown($event);\">\n  Drag to Connect\n</div>\n<div *ngIf=\"!dragged\" id=\"cm-handle-label\" class=\"prevent-select\" [style.left.px]=\"x\" [style.top.px]=\"y\" (mousedown)=\"mouseDown($event);\">\n  Drag to Connect\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/create-concept-map/conceptmap/proposition.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/create-concept-map/conceptmap/proposition.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg>\n  <svg:path [attr.d]=\"svgLinePath\" marker-end=\"url(#cm-arrow)\"></svg:path>\n</svg>\n\n<div #label class=\"cm-label\" [style.top.px]=\"labelY\" [style.left.px]=\"labelX\" (mousedown)=\"mouseDown($event);\" (mouseup)=\"mouseUp($event);\" (dblclick)=\"doubleClick($event);\" (keydown)=\"keyDown($event)\" [class.selected]=\"selected\" [class.prevent-select]=\"preventSelect\" [attr.contenteditable]=\"editable\" [(cmContenteditableModel)]=\"proposition.text\"></div>\n"

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm2015/add/operator/first.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm2015/add/operator/first.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _operator_first__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/first */ "./node_modules/rxjs-compat/_esm2015/operator/first.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.first = _operator_first__WEBPACK_IMPORTED_MODULE_1__["first"];
//# sourceMappingURL=first.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm2015/operator/first.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm2015/operator/first.js ***!
  \*************************************************************/
/*! exports provided: first */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "first", function() { return first; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");

function first(...args) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])(...args)(this);
}
//# sourceMappingURL=first.js.map

/***/ }),

/***/ "./src/app/create-concept-map/conceptmap/componentmanager.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/create-concept-map/conceptmap/componentmanager.service.ts ***!
  \***************************************************************************/
/*! exports provided: ComponentManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentManager", function() { return ComponentManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


/**
 * Component Manager service collects all component so communication could be easier.
 * All concept and proposition component should register them self into the manager upon initiation.
 */
let ComponentManager = class ComponentManager {
    /**
     * Component Manager service collects all component so communication could be easier.
     * All concept and proposition component should register them self into the manager upon initiation.
     */
    constructor() {
        this.conceptComponents = new Set();
        this.propositionComponents = new Set();
    }
    addConceptComponent(component) {
        this.conceptComponents.add(component);
    }
    getConceptComponent(concept) {
        return Array.from(this.conceptComponents).find(c => c.concept === concept);
    }
    removeConceptComponent(component) {
        this.conceptComponents.delete(component);
    }
    addPropositionComponent(component) {
        this.propositionComponents.add(component);
    }
    removePropositionComponent(component) {
        this.propositionComponents.delete(component);
    }
};
ComponentManager = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ComponentManager);



/***/ }),

/***/ "./src/app/create-concept-map/conceptmap/concept.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/create-concept-map/conceptmap/concept.component.ts ***!
  \********************************************************************/
/*! exports provided: ConceptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConceptComponent", function() { return ConceptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _conceptmap_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conceptmap.types */ "./src/app/create-concept-map/conceptmap/conceptmap.types.ts");
/* harmony import */ var _mouse_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mouse.service */ "./src/app/create-concept-map/conceptmap/mouse.service.ts");
/* harmony import */ var _selection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selection.service */ "./src/app/create-concept-map/conceptmap/selection.service.ts");
/* harmony import */ var _componentmanager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentmanager.service */ "./src/app/create-concept-map/conceptmap/componentmanager.service.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./src/app/create-concept-map/conceptmap/utils.ts");







/**
 * Concept component. Define the concept html element.
 */
let ConceptComponent = class ConceptComponent {
    constructor(selection, mouse, manager, element) {
        this.selection = selection;
        this.mouse = mouse;
        this.manager = manager;
        this.element = element;
        this.selected = false;
        this.preventSelect = true;
        this.editable = false;
        this.ctrlA = new _utils__WEBPACK_IMPORTED_MODULE_6__["KeyCombination"]('A', [_utils__WEBPACK_IMPORTED_MODULE_6__["KeyCombination"].modifierKey.ctrl]);
    }
    get height() {
        return this.element.nativeElement.offsetHeight;
    }
    get width() {
        return this.element.nativeElement.offsetWidth;
    }
    ngOnInit() {
        this.manager.addConceptComponent(this);
        // get focus on creation
        if (!this.concept.text) {
            window.setTimeout(() => {
                this.selection.clear();
                this.selection.addConceptComponent(this);
                this.enableEdit();
            }, 0);
        }
    }
    ngOnDestroy() {
        this.manager.removeConceptComponent(this);
    }
    select() {
        this.selected = true;
    }
    deselect() {
        this.selected = false;
        if (this.editable) {
            this.disableEdit();
        }
    }
    enableEdit() {
        this.editable = true;
        this.preventSelect = false;
        window.setTimeout(() => {
            this.element.nativeElement.focus();
            const range = document.createRange();
            range.selectNodeContents(this.element.nativeElement);
            const sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        }, 0);
    }
    disableEdit() {
        this.editable = false;
        this.preventSelect = true;
    }
    mouseDown(event) {
        this.mouse.down(this, event);
        if (event.which === 1) {
            if (!this.editable /* disable drag while been editable */) {
                if (event.ctrlKey || event.shiftKey) {
                    if (this.selected) {
                        let dragged = false;
                        this.mouse.drag(e => dragged = true, e => {
                            if (e.browserEvent.which === 1 && !dragged) {
                                this.selection.removeConceptComponent(this);
                            }
                        });
                    }
                    else {
                        this.selection.addConceptComponent(this);
                    }
                }
                else {
                    if (this.selected) {
                        let dragged = false;
                        this.mouse.drag(e => dragged = true, e => {
                            if (e.browserEvent.which === 1 && !dragged) {
                                this.selection.clear();
                                this.selection.addConceptComponent(this);
                            }
                        });
                    }
                    else {
                        this.selection.clear();
                        this.selection.addConceptComponent(this);
                    }
                }
                this.mouse.drag(e => {
                    this.mouse.cursorStyle = 'move';
                    this.selection.selectedConceptComponent.forEach((c) => {
                        c.concept.x += e.browserEvent.movementX;
                        c.concept.y += e.browserEvent.movementY;
                    });
                }, e => {
                    if (e.browserEvent.which === 1) {
                        this.mouse.cursorStyle = 'default';
                    }
                });
            }
        }
        event.stopPropagation();
    }
    mouseUp(event) {
        this.mouse.up(this, event);
        event.stopPropagation();
    }
    doubleClick(event) {
        event.stopPropagation();
        // when not selecting
        if (!event.ctrlKey && !event.shiftKey) {
            if (!this.editable) {
                this.enableEdit();
            }
        }
    }
    keyDown(event) {
        if (this.ctrlA.match(event) || (event.key === 'Delete' || event.key === 'Del' || event.which === 46)) {
            event.stopPropagation();
        }
        setTimeout(() => { }, 0); // used to manually trigger angular life cycle check to detect element size change.
    }
};
ConceptComponent.ctorParameters = () => [
    { type: _selection_service__WEBPACK_IMPORTED_MODULE_4__["SelectionService"] },
    { type: _mouse_service__WEBPACK_IMPORTED_MODULE_3__["MouseService"] },
    { type: _componentmanager_service__WEBPACK_IMPORTED_MODULE_5__["ComponentManager"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _conceptmap_types__WEBPACK_IMPORTED_MODULE_2__["Concept"])
], ConceptComponent.prototype, "concept", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.selected'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ConceptComponent.prototype, "selected", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.prevent-select'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ConceptComponent.prototype, "preventSelect", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.contenteditable'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ConceptComponent.prototype, "editable", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mousedown', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], ConceptComponent.prototype, "mouseDown", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseup', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], ConceptComponent.prototype, "mouseUp", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dblclick', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], ConceptComponent.prototype, "doubleClick", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], ConceptComponent.prototype, "keyDown", null);
ConceptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cm-concept',
        template: '',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_selection_service__WEBPACK_IMPORTED_MODULE_4__["SelectionService"],
        _mouse_service__WEBPACK_IMPORTED_MODULE_3__["MouseService"],
        _componentmanager_service__WEBPACK_IMPORTED_MODULE_5__["ComponentManager"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], ConceptComponent);



/***/ }),

/***/ "./src/app/create-concept-map/conceptmap/conceptmap.component.css":
/*!************************************************************************!*\
  !*** ./src/app/create-concept-map/conceptmap/conceptmap.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\ncm-concept {\n  position: absolute;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  min-height: 1em;\n  z-index: 1;\n\n  background-color: lightgrey;\n  padding: 6px 18px;\n  border: 1px solid black;\n}\n\nsvg {\n  position: absolute;\n  overflow: visible;\n  top: 0;\n  left: 0;\n  /* z-index: -1; */\n}\n\npath {\n  stroke: #000000;\n  stroke-width: 1;\n}\n\n#cm-handle-label {\n  padding: 2px 4px;\n  position: absolute;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  background-color: white;\n  border: 1px solid black;\n}\n\n.prevent-select {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.selected {\n  box-shadow: 0 0 1px 2px cornflowerblue;\n}\n\n.cm-label {\n  position: absolute;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  min-height: 1em;\n\n  background-color:#fff;\n  padding: 4px 10px;\n  border-radius: 10px;\n}\n\n#rubber-band {\n  background-color: #99ccff;\n  border: 1px solid #0000dd;\n  position: absolute;\n  opacity: 0.3;\n  z-index: 2;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLWNvbmNlcHQtbWFwL2NvbmNlcHRtYXAvY29uY2VwdG1hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixVQUFVOztFQUVWLDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixNQUFNO0VBQ04sT0FBTztFQUNQLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0VBQ2hDLHVCQUF1QjtFQUN2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBaUI7S0FBakIsc0JBQWlCO01BQWpCLHFCQUFpQjtVQUFqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsd0NBQWdDO1VBQWhDLGdDQUFnQztFQUNoQyxlQUFlOztFQUVmLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1jb25jZXB0LW1hcC9jb25jZXB0bWFwL2NvbmNlcHRtYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY20tY29uY2VwdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIG1pbi1oZWlnaHQ6IDFlbTtcbiAgei1pbmRleDogMTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gIHBhZGRpbmc6IDZweCAxOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuc3ZnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICAvKiB6LWluZGV4OiAtMTsgKi9cbn1cblxucGF0aCB7XG4gIHN0cm9rZTogIzAwMDAwMDtcbiAgc3Ryb2tlLXdpZHRoOiAxO1xufVxuXG4jY20taGFuZGxlLWxhYmVsIHtcbiAgcGFkZGluZzogMnB4IDRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4ucHJldmVudC1zZWxlY3Qge1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnNlbGVjdGVkIHtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAycHggY29ybmZsb3dlcmJsdWU7XG59XG5cbi5jbS1sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIG1pbi1oZWlnaHQ6IDFlbTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XG4gIHBhZGRpbmc6IDRweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4jcnViYmVyLWJhbmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTljY2ZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMGRkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDAuMztcbiAgei1pbmRleDogMjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/create-concept-map/conceptmap/conceptmap.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/create-concept-map/conceptmap/conceptmap.component.ts ***!
  \***********************************************************************/
/*! exports provided: ConceptMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConceptMapComponent", function() { return ConceptMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _conceptmap_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conceptmap.types */ "./src/app/create-concept-map/conceptmap/conceptmap.types.ts");
/* harmony import */ var _mouse_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mouse.service */ "./src/app/create-concept-map/conceptmap/mouse.service.ts");
/* harmony import */ var _selection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selection.service */ "./src/app/create-concept-map/conceptmap/selection.service.ts");
/* harmony import */ var _componentmanager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentmanager.service */ "./src/app/create-concept-map/conceptmap/componentmanager.service.ts");






/**
 * Representing the selection rubber band
 */
class RubberBand {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    include(x, y) {
        return this.top < y && y < this.top + this.height && this.left < x && x < this.left + this.width;
    }
}
RubberBand.ctorParameters = () => [
    { type: Number },
    { type: Number }
];
/**
 * Concept Map component. Define the concept map element.
 * This element contains a number of concept and propositon elements to create a concept map.
 */
let ConceptMapComponent = class ConceptMapComponent {
    constructor(mouse, selection, manager, cmap) {
        this.mouse = mouse;
        this.selection = selection;
        this.manager = manager;
        this.cmap = cmap;
        this.cursorStyle = 'default';
    }
    ngDoCheck() {
        this.cursorStyle = this.mouse.cursorStyle;
    }
    /**
     * This method will return a single concept component if it's the only selected one, otherwise undefined
     */
    get getSingleSelection() {
        if (this.selection.selectedConceptComponent.size === 1 && this.selection.selectedPropositionComponent.size === 0) {
            return this.selection.selectedConceptComponent.values().next().value;
        }
        return undefined;
    }
    import(data) {
        this.selection.clear();
        this.cmap.parseJson(data);
    }
    export() {
        return this.cmap.toJson();
    }
    deleteSelected() {
        Array.from(this.manager.propositionComponents).filter(p => p.selected).forEach(p => this.cmap.removeProposition(p.proposition));
        Array.from(this.manager.conceptComponents).filter(c => c.selected).forEach(c => this.cmap.removeConcept(c.concept));
        this.selection.clear();
    }
    selectAll() {
        this.selection.clear();
        this.manager.conceptComponents.forEach(concept => this.selection.addConceptComponent(concept));
    }
    doubleClick(event) {
        console.log(event);
        this.cmap.addConcept('', event.layerX, event.layerY, ['none']);
        // this.cmap.addConcept('', event.clientX, event.clientY);
    }
    mouseDown(event) {
        this.mouse.down(this, event);
        if (event.which === 1) {
            if (event.altKey) {
                this.mouse.drag(e => {
                    this.mouse.cursorStyle = 'move';
                    this.cmap.concepts.forEach(c => {
                        c.x += e.browserEvent.movementX;
                        c.y += e.browserEvent.movementY;
                    });
                }, e => {
                    if (e.browserEvent.which === 1) {
                        this.mouse.cursorStyle = 'default';
                    }
                });
            }
            else {
                if (!event.ctrlKey) {
                    this.selection.clear();
                }
                this.mouse.drag(e => {
                    // create rubber band if drag starts.
                    if (!this.rubberband) {
                        this.rubberband = new RubberBand(this.mouse.position.x, this.mouse.position.y);
                    }
                    this.rubberband.top = Math.min(this.rubberband.y, this.mouse.position.y);
                    this.rubberband.left = Math.min(this.rubberband.x, this.mouse.position.x);
                    this.rubberband.width = Math.max(this.rubberband.x, this.mouse.position.x) - this.rubberband.left;
                    this.rubberband.height = Math.max(this.rubberband.y, this.mouse.position.y) - this.rubberband.top;
                    // select components
                    // todo: better control-select operation
                    this.manager.conceptComponents.forEach(c => {
                        if (this.rubberband.include(c.concept.x, c.concept.y)) {
                            this.selection.addConceptComponent(c);
                        }
                        else {
                            this.selection.removeConceptComponent(c);
                        }
                    });
                    this.manager.propositionComponents.forEach(p => {
                        if (this.rubberband.include(p.labelX, p.labelY)) {
                            this.selection.addPropositionComponent(p);
                        }
                        else {
                            this.selection.removePropositionComponent(p);
                        }
                    });
                }, e => {
                    if (e.browserEvent.which === 1) {
                        this.rubberband = undefined;
                    }
                });
            }
        }
    }
    mouseUp(event) {
        this.mouse.up(this, event);
    }
    mouseMove(event) {
        this.mouse.move(this, event);
    }
};
ConceptMapComponent.ctorParameters = () => [
    { type: _mouse_service__WEBPACK_IMPORTED_MODULE_3__["MouseService"] },
    { type: _selection_service__WEBPACK_IMPORTED_MODULE_4__["SelectionService"] },
    { type: _componentmanager_service__WEBPACK_IMPORTED_MODULE_5__["ComponentManager"] },
    { type: _conceptmap_types__WEBPACK_IMPORTED_MODULE_2__["ConceptMap"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.cursor'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ConceptMapComponent.prototype, "cursorStyle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dblclick', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], ConceptMapComponent.prototype, "doubleClick", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mousedown', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], ConceptMapComponent.prototype, "mouseDown", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseup', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], ConceptMapComponent.prototype, "mouseUp", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mousemove', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], ConceptMapComponent.prototype, "mouseMove", null);
ConceptMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cm-concept-map',
        template: __webpack_require__(/*! raw-loader!./conceptmap.component.html */ "./node_modules/raw-loader/index.js!./src/app/create-concept-map/conceptmap/conceptmap.component.html"),
        styles: [__webpack_require__(/*! ./conceptmap.component.css */ "./src/app/create-concept-map/conceptmap/conceptmap.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_mouse_service__WEBPACK_IMPORTED_MODULE_3__["MouseService"],
        _selection_service__WEBPACK_IMPORTED_MODULE_4__["SelectionService"],
        _componentmanager_service__WEBPACK_IMPORTED_MODULE_5__["ComponentManager"],
        _conceptmap_types__WEBPACK_IMPORTED_MODULE_2__["ConceptMap"]])
], ConceptMapComponent);



/***/ }),

/***/ "./src/app/create-concept-map/conceptmap/conceptmap.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/create-concept-map/conceptmap/conceptmap.module.ts ***!
  \********************************************************************/
/*! exports provided: ConceptMapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConceptMapModule", function() { return ConceptMapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _conceptmap_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./conceptmap.component */ "./src/app/create-concept-map/conceptmap/conceptmap.component.ts");
/* harmony import */ var _concept_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./concept.component */ "./src/app/create-concept-map/conceptmap/concept.component.ts");
/* harmony import */ var _proposition_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./proposition.component */ "./src/app/create-concept-map/conceptmap/proposition.component.ts");
/* harmony import */ var _handle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./handle.component */ "./src/app/create-concept-map/conceptmap/handle.component.ts");
/* harmony import */ var _mouse_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mouse.service */ "./src/app/create-concept-map/conceptmap/mouse.service.ts");
/* harmony import */ var _selection_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./selection.service */ "./src/app/create-concept-map/conceptmap/selection.service.ts");
/* harmony import */ var _conceptmap_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./conceptmap.types */ "./src/app/create-concept-map/conceptmap/conceptmap.types.ts");
/* harmony import */ var _componentmanager_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./componentmanager.service */ "./src/app/create-concept-map/conceptmap/componentmanager.service.ts");
/* harmony import */ var _contenteditable_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contenteditable.directive */ "./src/app/create-concept-map/conceptmap/contenteditable.directive.ts");












/**
 * ConceptMap module
 */
let ConceptMapModule = class ConceptMapModule {
};
ConceptMapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["ConceptMapComponent"],
            _concept_component__WEBPACK_IMPORTED_MODULE_4__["ConceptComponent"],
            _proposition_component__WEBPACK_IMPORTED_MODULE_5__["PropositionComponent"],
            _handle_component__WEBPACK_IMPORTED_MODULE_6__["HandleComponent"],
            _contenteditable_directive__WEBPACK_IMPORTED_MODULE_11__["ContenteditableDirective"]
        ],
        imports: [
            // BrowserModule
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ],
        exports: [
            _conceptmap_component__WEBPACK_IMPORTED_MODULE_3__["ConceptMapComponent"]
        ],
        providers: [
            _mouse_service__WEBPACK_IMPORTED_MODULE_7__["MouseService"],
            _selection_service__WEBPACK_IMPORTED_MODULE_8__["SelectionService"],
            _conceptmap_types__WEBPACK_IMPORTED_MODULE_9__["ConceptMap"],
            _componentmanager_service__WEBPACK_IMPORTED_MODULE_10__["ComponentManager"]
        ]
    })
], ConceptMapModule);



/***/ }),

/***/ "./src/app/create-concept-map/conceptmap/conceptmap.types.ts":
/*!*******************************************************************!*\
  !*** ./src/app/create-concept-map/conceptmap/conceptmap.types.ts ***!
  \*******************************************************************/
/*! exports provided: Concept, Proposition, ConceptMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Concept", function() { return Concept; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Proposition", function() { return Proposition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConceptMap", function() { return ConceptMap; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


/**
 * Represent concepts in concept maps.
 */
class Concept {
    constructor(text, x, y, resources) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.resources = [];
    }
}
Concept.ctorParameters = () => [
    { type: String },
    { type: Number },
    { type: Number },
    { type: undefined }
];
/**
 * Represent propositions in concept maps. It points from one concept to another
 */
class Proposition {
    constructor(text, from, to) {
        this.text = text;
        this.from = from;
        this.to = to;
    }
}
Proposition.ctorParameters = () => [
    { type: String },
    { type: Concept },
    { type: Concept }
];
function randomHex(range = 0xffffffff) {
    return Math.floor(Math.random() * range).toString(16);
}
/**
 * A collection of concepts and propositions.
 */
let ConceptMap = class ConceptMap {
    /**
     * A collection of concepts and propositions.
     */
    constructor() {
        this.concepts = new Set();
        this.propositions = new Set();
        this.getID = randomHex;
    }
    addConcept(text, x, y, resources) {
        this.concepts.add(new Concept(text, x, y, resources));
    }
    addProposition(text, from, to) {
        this.propositions.add(new Proposition(text, from, to));
    }
    removeProposition(prop) {
        this.propositions.delete(prop);
    }
    /**
     * Remove a concept and all propositions that links to and from it.
     */
    removeConcept(concept) {
        for (const prop of Array.from(this.propositions).filter(p => p.from === concept || p.to === concept)) {
            this.removeProposition(prop);
        }
        this.concepts.delete(concept);
    }
    /**
     * Export a concept map to JSON format
     * will assign every concept with an id.
     */
    toJson() {
        const map = {
            concepts: [],
            propositions: []
        };
        // Efforts to avoid id collisions - not sure whether necessary :/
        const ids = new Set();
        const conceptIDs = new Map();
        this.concepts.forEach(c => {
            let id = this.getID();
            while (ids.has(id)) {
                id = this.getID();
            }
            ids.add(id);
            conceptIDs.set(c, id);
            map.concepts.push({ text: c.text, x: c.x, y: c.y, id: id, resources: c.resources });
        });
        this.propositions.forEach(p => {
            map.propositions.push({
                text: p.text,
                from: conceptIDs.get(p.from),
                to: conceptIDs.get(p.to)
            });
        });
        return JSON.stringify(map);
    }
    /**
     * Parse a JSON string into a concept map
     * will overwrite current map if loaded successfully
     */
    parseJson(data) {
        const map = JSON.parse(data);
        const concepts = new Set();
        const propositions = new Set();
        const lookup = {};
        for (const c of map.concepts) {
            const concept = new Concept(c.text, c.x, c.y, c.resources);
            lookup[c.id] = concept;
            concepts.add(concept);
        }
        for (const p of map.propositions) {
            propositions.add(new Proposition(p.text, lookup[p.from], lookup[p.to]));
        }
        this.concepts = concepts;
        this.propositions = propositions;
    }
};
ConceptMap = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ConceptMap);



/***/ }),

/***/ "./src/app/create-concept-map/conceptmap/contenteditable.directive.ts":
/*!****************************************************************************!*\
  !*** ./src/app/create-concept-map/conceptmap/contenteditable.directive.ts ***!
  \****************************************************************************/
/*! exports provided: ContenteditableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContenteditableDirective", function() { return ContenteditableDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContenteditableDirective = class ContenteditableDirective {
    constructor(element) {
        this.element = element;
        this.cmContenteditableModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnChanges(changes) {
        this.refreshView();
    }
    updateModel() {
        setTimeout(() => this.cmContenteditableModelChange.emit(this.element.nativeElement.innerHTML), 0);
    }
    refreshView() {
        this.element.nativeElement.innerHTML = this.cmContenteditableModel;
    }
};
ContenteditableDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ContenteditableDirective.prototype, "cmContenteditableModel", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ContenteditableDirective.prototype, "cmContenteditableModelChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('blur'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], ContenteditableDirective.prototype, "updateModel", null);
ContenteditableDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[cmContenteditableModel]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], ContenteditableDirective);



/***/ }),

/***/ "./src/app/create-concept-map/conceptmap/handle.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/create-concept-map/conceptmap/handle.component.ts ***!
  \*******************************************************************/
/*! exports provided: HandleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleComponent", function() { return HandleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _conceptmap_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conceptmap.types */ "./src/app/create-concept-map/conceptmap/conceptmap.types.ts");
/* harmony import */ var _mouse_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mouse.service */ "./src/app/create-concept-map/conceptmap/mouse.service.ts");
/* harmony import */ var _concept_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./concept.component */ "./src/app/create-concept-map/conceptmap/concept.component.ts");





/**
 * Handle component. used to create propositions.
 * This component is draggable so the user can create propositions by dragging from a concept to another.
 */
let HandleComponent = class HandleComponent {
    constructor(mouse, cmap) {
        this.mouse = mouse;
        this.cmap = cmap;
        this.conceptPosition = { x: -1, y: -1, height: -1 };
    }
    ngOnChanges() {
        this.x = this.from.concept.x;
        this.y = this.from.concept.y - this.from.height / 2 - 20;
    }
    ngDoCheck() {
        // check if the belonging concept moved and update position if needed
        if (this.from.concept.x !== this.conceptPosition.x
            ||
                this.from.concept.y !== this.conceptPosition.y
            ||
                this.from.height !== this.conceptPosition.height) {
            this.conceptPosition.x = this.from.concept.x;
            this.conceptPosition.y = this.from.concept.y;
            this.conceptPosition.height = this.from.height;
            this.ngOnChanges();
        }
    }
    createProposition(from, to) {
        if (!Array.from(this.cmap.propositions).some(p => p.from === from && p.to === to || p.from === to && p.to === from)) {
            this.cmap.propositions.add(new _conceptmap_types__WEBPACK_IMPORTED_MODULE_2__["Proposition"]('', from, to));
        }
    }
    linePath() {
        return [
            'M', this.from.concept.x, this.from.concept.y,
            'L', this.x, this.y
        ].join(' ');
    }
    mouseDown(event) {
        this.mouse.down(this, event);
        if (event.which === 1) {
            this.mouse.drag(e => {
                this.dragged = true;
                this.x = this.mouse.position.x;
                this.y = this.mouse.position.y;
            }, e => {
                if (e.browserEvent.which === 1) {
                    if (e.component.concept) {
                        this.createProposition(this.from.concept, e.component.concept);
                    }
                    this.dragged = false;
                    this.x = this.from.concept.x;
                    this.y = this.from.concept.y - this.from.height / 2 - 16;
                }
            });
        }
        event.stopPropagation();
    }
};
HandleComponent.ctorParameters = () => [
    { type: _mouse_service__WEBPACK_IMPORTED_MODULE_3__["MouseService"] },
    { type: _conceptmap_types__WEBPACK_IMPORTED_MODULE_2__["ConceptMap"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _concept_component__WEBPACK_IMPORTED_MODULE_4__["ConceptComponent"])
], HandleComponent.prototype, "from", void 0);
HandleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cm-handle',
        template: __webpack_require__(/*! raw-loader!./handle.component.html */ "./node_modules/raw-loader/index.js!./src/app/create-concept-map/conceptmap/handle.component.html"),
        styles: [__webpack_require__(/*! ./conceptmap.component.css */ "./src/app/create-concept-map/conceptmap/conceptmap.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_mouse_service__WEBPACK_IMPORTED_MODULE_3__["MouseService"],
        _conceptmap_types__WEBPACK_IMPORTED_MODULE_2__["ConceptMap"]])
], HandleComponent);



/***/ }),

/***/ "./src/app/create-concept-map/conceptmap/mouse.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/create-concept-map/conceptmap/mouse.service.ts ***!
  \****************************************************************/
/*! exports provided: MouseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseService", function() { return MouseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_add_operator_first__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/first */ "./node_modules/rxjs-compat/_esm2015/add/operator/first.js");




/**
 * An event wrapper that also records the component emitted this event.
 */
class MouseEvent {
    constructor(component, event) {
        this.component = component;
        this.browserEvent = event;
    }
}
MouseEvent.ctorParameters = () => [
    null,
    null
];
/**
 * MouseService, deals with user interaction.
 * This service operates on rxjs Subject to make events observable
 * and also provides drag handling.
 */
let MouseService = class MouseService {
    /**
     * MouseService, deals with user interaction.
     * This service operates on rxjs Subject to make events observable
     * and also provides drag handling.
     */
    constructor() {
        this.cursorStyle = 'default';
        this.position = { x: 0, y: 0 }; // cursor position
        this.mouseMoveEvents = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.mouseUpEvents = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.mouseDownEvents = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * Should be called when there is a mouse down event
     */
    down(sourceComponent, event) {
        this.mouseDownEvents.next(new MouseEvent(sourceComponent, event));
    }
    /**
     * Should be called when there is a mouse up event
     */
    up(sourceComponent, event) {
        this.mouseUpEvents.next(new MouseEvent(sourceComponent, event));
    }
    /**
     * Should be called when there is a mouse move event
     * this function uses customised movement calculation and also filters zero distance movements.
     */
    move(sourceComponent, event) {
        // Object.defineProperty(event, 'movementX', {value : event.clientX - this.position.x});
        // Object.defineProperty(event, 'movementY', {value : event.clientY - this.position.y}); 
        Object.defineProperty(event, 'movementX', { value: event.layerX - this.position.x });
        Object.defineProperty(event, 'movementY', { value: event.layerY - this.position.y });
        // const bounds = event.target.getBoundingClientRect();
        // const x = event.clientX - bounds.left;
        // const y = event.clientY - bounds.top;
        // console.log('x -',x,' y- ',y);
        // console.log('layer x - ',event.layerX," layer y-",event.layerY);
        // console.log('client x - ',event.clientX," client y-",event.clientY);
        this.position.x = event.layerX;
        this.position.y = event.layerY;
        // this.position.x = event.clientX;
        // this.position.y = event.clientY;
        //  this condition filters some mousemove events that are actually not moved on Chrome
        if (event.movementX !== 0 || event.movementY !== 0) {
            this.mouseMoveEvents.next(new MouseEvent(sourceComponent, event));
        }
    }
    /**
     * Subscribe to drag operation
     * Should be called after a mouse down event
     * OnDrag callback will be executed on every mouse move, and OnDragEnd will be executed on mouse up.
     */
    drag(onDrag, onDragEnd) {
        const mouseMoveSub = this.mouseMoveEvents.subscribe(onDrag);
        this.mouseUpEvents.first().subscribe(event => {
            onDragEnd(event);
            mouseMoveSub.unsubscribe();
        });
    }
};
MouseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], MouseService);



/***/ }),

/***/ "./src/app/create-concept-map/conceptmap/proposition.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/create-concept-map/conceptmap/proposition.component.ts ***!
  \************************************************************************/
/*! exports provided: PropositionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropositionComponent", function() { return PropositionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _conceptmap_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conceptmap.types */ "./src/app/create-concept-map/conceptmap/conceptmap.types.ts");
/* harmony import */ var _mouse_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mouse.service */ "./src/app/create-concept-map/conceptmap/mouse.service.ts");
/* harmony import */ var _selection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selection.service */ "./src/app/create-concept-map/conceptmap/selection.service.ts");
/* harmony import */ var _componentmanager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentmanager.service */ "./src/app/create-concept-map/conceptmap/componentmanager.service.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./src/app/create-concept-map/conceptmap/utils.ts");







/**
 * Function used to calculate how proposition lines are to be clipped by concepts
 */
function rectangleClip(rectWidth, rectHeight, x, y) {
    const heightBound = rectHeight / 2;
    const widthBound = rectWidth / 2;
    /*
      * The two condition below indecates the direction of the 'from' concept at the 'to' concept
      * which is needed to decide which edge of the 'to' concept should be used for clipping.
      *
      * t1, t2 will show values as illustrated below.
      *             \  false, true /
      *              +------------+
      * false, false | to concept | true, true
      *              +------------+
      *             /  true, false \
      */
    const t1 = heightBound / widthBound * x + y > 0; // true - on lower right region, false - on upper left region
    const t2 = heightBound / widthBound * x - y > 0; // true - on upper right region, false - on lower left region
    const clipped = { x: 0, y: 0 };
    if (t1) {
        if (t2) {
            // true, ture - clip with the right edge
            clipped.x = -widthBound;
            clipped.y = -widthBound * y / x;
        }
        else {
            // true, false - clip with the bottom edge
            clipped.y = -heightBound;
            clipped.x = -heightBound * x / y;
        }
    }
    else {
        if (t2) {
            // false, ture - clip with the top edge
            clipped.y = heightBound;
            clipped.x = heightBound * x / y;
        }
        else {
            // false, false - clip with the left edge
            clipped.x = widthBound;
            clipped.y = widthBound * y / x;
        }
    }
    return clipped;
}
/**
 * Proposition component. Define the Proposition html element.
 * This element further contains an SVG path and a label.
 */
let PropositionComponent = class PropositionComponent {
    constructor(selection, mouse, manager) {
        this.selection = selection;
        this.mouse = mouse;
        this.manager = manager;
        this.selected = false;
        this.preventSelect = true;
        this.editable = false;
        this.ctrlA = new _utils__WEBPACK_IMPORTED_MODULE_6__["KeyCombination"]('A', [_utils__WEBPACK_IMPORTED_MODULE_6__["KeyCombination"].modifierKey.ctrl]);
        this.shape = {
            from: { height: 0, width: 0 },
            to: { height: 0, width: 0 },
            diff: { x: 0, y: 0 },
            startClipping: { x: 0, y: 0 },
            endClippint: { x: 0, y: 0 },
            label: { x: 0, y: 0 }
        };
    }
    get labelX() {
        return (this.from.concept.x + this.shape.startClipping.x + this.to.concept.x + this.shape.endClippint.x) / 2;
    }
    get labelY() {
        return (this.from.concept.y + this.shape.startClipping.y + this.to.concept.y + this.shape.endClippint.y) / 2;
    }
    get svgLinePath() {
        return [
            'M', this.from.concept.x + this.shape.startClipping.x, this.from.concept.y + this.shape.startClipping.y,
            'L', this.to.concept.x + this.shape.endClippint.x, this.to.concept.y + this.shape.endClippint.y
        ].join(' ');
    }
    ngOnInit() {
        this.manager.addPropositionComponent(this);
        this.from = this.manager.getConceptComponent(this.proposition.from);
        this.to = this.manager.getConceptComponent(this.proposition.to);
        // get focus on creation
        if (!this.proposition.text) { // todo - a better way to detect is needed.
            window.setTimeout(() => {
                this.selection.clear();
                this.selection.addPropositionComponent(this);
                this.enableEdit();
            }, 0);
        }
    }
    ngDoCheck() {
        // update line path if needed //
        const vx = this.to.concept.x - this.from.concept.x;
        const vy = this.to.concept.y - this.from.concept.y;
        if (this.shape.diff.x !== vx || this.shape.diff.y !== vy
            ||
                this.shape.from.width !== this.from.width || this.shape.from.height !== this.from.height
            ||
                this.shape.to.width !== this.to.width || this.shape.to.height !== this.to.height) {
            this.shape.diff.x = vx;
            this.shape.diff.y = vy;
            this.shape.from.width = this.from.width;
            this.shape.from.height = this.from.height;
            this.shape.to.width = this.to.width;
            this.shape.to.height = this.to.height;
            const fromClipped = rectangleClip(this.from.width, this.from.height, -this.shape.diff.x, -this.shape.diff.y);
            const toClipped = rectangleClip(this.to.width, this.to.height, this.shape.diff.x, this.shape.diff.y);
            this.shape.startClipping.x = fromClipped.x;
            this.shape.startClipping.y = fromClipped.y;
            this.shape.endClippint.x = toClipped.x;
            this.shape.endClippint.y = toClipped.y;
        }
    }
    ngOnDestroy() {
        this.manager.removePropositionComponent(this);
    }
    select() {
        this.selected = true;
    }
    deselect() {
        this.selected = false;
        if (this.editable) {
            this.disableEdit();
        }
    }
    enableEdit() {
        this.editable = true;
        this.preventSelect = false;
        window.setTimeout(() => {
            this.label.nativeElement.focus();
            const range = document.createRange();
            range.selectNodeContents(this.label.nativeElement);
            const sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        }, 0);
    }
    disableEdit() {
        this.editable = false;
        this.preventSelect = true;
    }
    doubleClick(event) {
        event.stopPropagation();
        // when not selecting
        if (!event.ctrlKey && !event.shiftKey) {
            if (!this.editable) {
                this.enableEdit();
            }
        }
    }
    mouseDown(event) {
        this.mouse.down(this, event);
        if (event.which === 1) {
            if (!this.editable /* disable drag while been editable */) {
                if (event.ctrlKey || event.shiftKey) {
                    if (this.selected) {
                        let dragged = false;
                        this.mouse.drag(e => dragged = true, e => {
                            if (e.browserEvent.which === 1 && !dragged) {
                                this.selection.removePropositionComponent(this);
                            }
                        });
                    }
                    else {
                        this.selection.addPropositionComponent(this);
                    }
                }
                else {
                    if (this.selected) {
                        let dragged = false;
                        this.mouse.drag(e => dragged = true, e => {
                            if (e.browserEvent.which === 1 && !dragged) {
                                this.selection.clear();
                                this.selection.addPropositionComponent(this);
                            }
                        });
                    }
                    else {
                        this.selection.clear();
                        this.selection.addPropositionComponent(this);
                    }
                }
                this.mouse.drag(e => {
                    this.mouse.cursorStyle = 'move';
                    this.selection.selectedConceptComponent.forEach((c) => {
                        if (c !== this.from && c !== this.to) {
                            c.concept.x += e.browserEvent.movementX;
                            c.concept.y += e.browserEvent.movementY;
                        }
                    });
                    for (const c of [this.from, this.to]) {
                        c.concept.x += e.browserEvent.movementX;
                        c.concept.y += e.browserEvent.movementY;
                    }
                }, e => {
                    if (e.browserEvent.which === 1) {
                        this.mouse.cursorStyle = 'default';
                    }
                });
            }
        }
        event.stopPropagation();
    }
    mouseUp(event) {
        this.mouse.up(this, event);
        event.stopPropagation();
    }
    keyDown(event) {
        if (this.ctrlA.match(event) || (event.key === 'Delete' || event.key === 'Del' || event.which === 46)) {
            event.stopPropagation();
        }
        setTimeout(() => { }, 0); // used to manually trigger angular life cycle check to detect element size change.
    }
};
PropositionComponent.ctorParameters = () => [
    { type: _selection_service__WEBPACK_IMPORTED_MODULE_4__["SelectionService"] },
    { type: _mouse_service__WEBPACK_IMPORTED_MODULE_3__["MouseService"] },
    { type: _componentmanager_service__WEBPACK_IMPORTED_MODULE_5__["ComponentManager"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _conceptmap_types__WEBPACK_IMPORTED_MODULE_2__["Proposition"])
], PropositionComponent.prototype, "proposition", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('label', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], PropositionComponent.prototype, "label", void 0);
PropositionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cm-proposition',
        template: __webpack_require__(/*! raw-loader!./proposition.component.html */ "./node_modules/raw-loader/index.js!./src/app/create-concept-map/conceptmap/proposition.component.html"),
        styles: [__webpack_require__(/*! ./conceptmap.component.css */ "./src/app/create-concept-map/conceptmap/conceptmap.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_selection_service__WEBPACK_IMPORTED_MODULE_4__["SelectionService"],
        _mouse_service__WEBPACK_IMPORTED_MODULE_3__["MouseService"],
        _componentmanager_service__WEBPACK_IMPORTED_MODULE_5__["ComponentManager"]])
], PropositionComponent);



/***/ }),

/***/ "./src/app/create-concept-map/conceptmap/selection.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/create-concept-map/conceptmap/selection.service.ts ***!
  \********************************************************************/
/*! exports provided: SelectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionService", function() { return SelectionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


/**
 * SelectionService is used to mark elements as selected.
 */
let SelectionService = class SelectionService {
    /**
     * SelectionService is used to mark elements as selected.
     */
    constructor() {
        this.selectedConceptComponent = new Set();
        this.selectedPropositionComponent = new Set();
    }
    addConceptComponent(component) {
        this.selectedConceptComponent.add(component);
        component.select();
    }
    addPropositionComponent(component) {
        this.selectedPropositionComponent.add(component);
        component.select();
    }
    removeConceptComponent(component) {
        if (this.selectedConceptComponent.delete(component)) {
            component.deselect();
        }
    }
    removePropositionComponent(component) {
        if (this.selectedPropositionComponent.delete(component)) {
            component.deselect();
        }
    }
    clear() {
        this.selectedConceptComponent.forEach(c => c.deselect());
        this.selectedPropositionComponent.forEach(c => c.deselect());
        this.selectedPropositionComponent.clear();
        this.selectedConceptComponent.clear();
    }
};
SelectionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SelectionService);



/***/ }),

/***/ "./src/app/create-concept-map/conceptmap/utils.ts":
/*!********************************************************!*\
  !*** ./src/app/create-concept-map/conceptmap/utils.ts ***!
  \********************************************************/
/*! exports provided: ModifierKey, KeyCombination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifierKey", function() { return ModifierKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyCombination", function() { return KeyCombination; });
/**
 * Modifier keys object
 */
class ModifierKey {
    constructor(predicate) {
        this.predicate = predicate;
    }
    match(keyboardEvent) {
        return this.predicate(keyboardEvent);
    }
    notMatch(keyboardEvent) {
        return !this.predicate(keyboardEvent);
    }
}
ModifierKey.ctrl = new ModifierKey(event => event.ctrlKey);
ModifierKey.shift = new ModifierKey(event => event.shift);
ModifierKey.alt = new ModifierKey(event => event.altKey);
ModifierKey.meta = new ModifierKey(event => event.metaKey);
ModifierKey.ctorParameters = () => [
    { type: Function }
];
/**
 * Object used to match keyboard events
 * Will match keyboard events that have exactly same set of modifier keys.
 */
class KeyCombination {
    constructor(key, modifiers) {
        this.excludes = [ModifierKey.ctrl, ModifierKey.shift, ModifierKey.alt, ModifierKey.meta];
        this.key = key.toUpperCase();
        this.modifiers = modifiers;
        this.excludes = this.excludes.filter(m => !modifiers.includes(m));
    }
    match(keyboardEvent) {
        return (keyboardEvent.key ? keyboardEvent.key.toUpperCase() === this.key : keyboardEvent.which === this.key.charCodeAt(0)) &&
            this.modifiers.every(m => m.match(keyboardEvent)) && this.excludes.every(m => m.notMatch(keyboardEvent));
    }
}
KeyCombination.modifierKey = ModifierKey;
KeyCombination.ctorParameters = () => [
    { type: String },
    { type: Array }
];


/***/ })

}]);
//# sourceMappingURL=default~create-concept-map-create-concept-map-module~edit-concept-map-edit-concept-map-module-es2015.js.map