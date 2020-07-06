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
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/components/list/list.component.ts");
/* harmony import */ var _components_add_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/add/add.component */ "./src/app/components/add/add.component.ts");




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-add");
    } }, directives: [_components_list_list_component__WEBPACK_IMPORTED_MODULE_1__["ListComponent"], _components_add_add_component__WEBPACK_IMPORTED_MODULE_2__["AddComponent"]], styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                template: `
    <app-list></app-list>
    <app-add></app-add>
  `,
                styles: [``]
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/components/list/list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _directives_background_color_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/background-color.directive */ "./src/app/directives/background-color.directive.ts");
/* harmony import */ var _components_add_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/add/add.component */ "./src/app/components/add/add.component.ts");
/* harmony import */ var _pipes_too_long_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/too-long.pipe */ "./src/app/pipes/too-long.pipe.ts");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"],
        _directives_background_color_directive__WEBPACK_IMPORTED_MODULE_5__["BackgroundColorDirective"],
        _components_add_add_component__WEBPACK_IMPORTED_MODULE_6__["AddComponent"],
        _pipes_too_long_pipe__WEBPACK_IMPORTED_MODULE_7__["TooLongPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"],
                    _directives_background_color_directive__WEBPACK_IMPORTED_MODULE_5__["BackgroundColorDirective"],
                    _components_add_add_component__WEBPACK_IMPORTED_MODULE_6__["AddComponent"],
                    _pipes_too_long_pipe__WEBPACK_IMPORTED_MODULE_7__["TooLongPipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/add/add.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/add/add.component.ts ***!
  \*************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_pet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/pet.service */ "./src/app/services/pet.service.ts");





class AddComponent {
    constructor(petService) {
        this.petService = petService;
    }
    ngOnInit() {
        this.showForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(2)]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(200)])
        });
    }
    onAdd() {
        const showPet = {
            name: this.showForm.getRawValue().name,
            type: this.showForm.getRawValue().type,
            description: this.showForm.getRawValue().description,
        };
        this.petService.addPet(showPet);
    }
}
AddComponent.ɵfac = function AddComponent_Factory(t) { return new (t || AddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_pet_service__WEBPACK_IMPORTED_MODULE_2__["PetService"])); };
AddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddComponent, selectors: [["app-add"]], decls: 12, vars: 2, consts: [[3, "formGroup"], ["for", "name"], ["type", "text", "formControlName", "name"], ["for", "type"], ["type", "number", "min", "1", "max", "2", "formControlName", "type"], ["for", "description"], ["type", "text", "formControlName", "description"], [3, "disabled", "click"]], template: function AddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "tpye");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddComponent_Template_button_click_10_listener() { return ctx.onAdd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Add pet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.showForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.showForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]], styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add',
                template: `
<form [formGroup]="showForm">
    <label for="name" ><input type="text" formControlName="name">name</label>
    <label for="type" ><input type="number" min="1" max="2" formControlName="type">tpye</label>
    <label for="description" ><input type="text" formControlName="description">description</label>
</form>
<button [disabled]="showForm.invalid" (click)="onAdd()">Add pet</button>
  `,
                styles: [``]
            }]
    }], function () { return [{ type: _services_pet_service__WEBPACK_IMPORTED_MODULE_2__["PetService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/list/list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/list/list.component.ts ***!
  \***************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_pet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/pet.service */ "./src/app/services/pet.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _directives_background_color_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/background-color.directive */ "./src/app/directives/background-color.directive.ts");
/* harmony import */ var _pipes_too_long_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/too-long.pipe */ "./src/app/pipes/too-long.pipe.ts");






function ListComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "tooLong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const pet_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("petType", pet_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pet_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pet_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, pet_r1.description));
} }
class ListComponent {
    constructor(PetService) {
        this.PetService = PetService;
        this.subscription$ = [];
        this.pets = [];
    }
    ngOnInit() {
        this.subscription$.push(this.PetService._pets$.subscribe(sub => {
            return this.pets = sub;
        }));
    }
    ngOnDestroy() {
        this.subscription$.forEach(sub => sub.unsubscribe());
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_pet_service__WEBPACK_IMPORTED_MODULE_1__["PetService"])); };
ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["appBackgroundColor", "", 3, "petType"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ListComponent_ng_container_0_Template, 8, 6, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pets);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _directives_background_color_directive__WEBPACK_IMPORTED_MODULE_3__["BackgroundColorDirective"]], pipes: [_pipes_too_long_pipe__WEBPACK_IMPORTED_MODULE_4__["TooLongPipe"]], styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list',
                template: `
<ng-container *ngFor="let pet of pets">
    <p appBackgroundColor [petType]="pet.type">{{ pet.name }}</p> <p>{{ pet.type }}</p>
    <p>{{ pet.description | tooLong }}</p>
</ng-container>

  `,
                styles: [``]
            }]
    }], function () { return [{ type: _services_pet_service__WEBPACK_IMPORTED_MODULE_1__["PetService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/directives/background-color.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/directives/background-color.directive.ts ***!
  \**********************************************************/
/*! exports provided: BackgroundColorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundColorDirective", function() { return BackgroundColorDirective; });
/* harmony import */ var _models_pet_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../models/pet.model */ "./src/app/models/pet.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class BackgroundColorDirective {
    constructor() {
        this.backgroundColor = 'transparent';
    }
    mouseE() {
        this.petType === _models_pet_model__WEBPACK_IMPORTED_MODULE_0__["PetType"].DOG ? this.backgroundColor = 'blue' : this.backgroundColor = 'red';
    }
}
BackgroundColorDirective.ɵfac = function BackgroundColorDirective_Factory(t) { return new (t || BackgroundColorDirective)(); };
BackgroundColorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: BackgroundColorDirective, selectors: [["", "appBackgroundColor", ""]], hostVars: 2, hostBindings: function BackgroundColorDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseeneter", function BackgroundColorDirective_mouseeneter_HostBindingHandler() { return ctx.mouseE(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx.backgroundColor, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefaultStyleSanitizer"]);
    } }, inputs: { petType: "petType" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BackgroundColorDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[appBackgroundColor]'
            }]
    }], function () { return []; }, { petType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['style.background']
        }], mouseE: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['mouseeneter']
        }] }); })();


/***/ }),

/***/ "./src/app/models/pet.model.ts":
/*!*************************************!*\
  !*** ./src/app/models/pet.model.ts ***!
  \*************************************/
/*! exports provided: PetType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetType", function() { return PetType; });
var PetType;
(function (PetType) {
    PetType[PetType["DOG"] = 1] = "DOG";
    PetType[PetType["CAT"] = 2] = "CAT";
})(PetType || (PetType = {}));


/***/ }),

/***/ "./src/app/pipes/too-long.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/too-long.pipe.ts ***!
  \****************************************/
/*! exports provided: TooLongPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooLongPipe", function() { return TooLongPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TooLongPipe {
    transform(value, ...args) {
        if (value.length > 20) {
            return (value.slice(1, 20) + '...');
        }
    }
}
TooLongPipe.ɵfac = function TooLongPipe_Factory(t) { return new (t || TooLongPipe)(); };
TooLongPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "tooLong", type: TooLongPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooLongPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'tooLong'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/pet.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/pet.service.ts ***!
  \*****************************************/
/*! exports provided: PetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetService", function() { return PetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_pet_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/pet.model */ "./src/app/models/pet.model.ts");




class PetService {
    constructor() {
        this._pets$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([
            {
                name: "Rexi",
                type: _models_pet_model__WEBPACK_IMPORTED_MODULE_2__["PetType"].DOG,
                description: "Etiam in congue metus. In at pulvinar nulla, sollicitudin vulputate elit. " +
                    "Mauris posuere sit amet ex nec gravida."
            },
            {
                name: "Buksi",
                type: _models_pet_model__WEBPACK_IMPORTED_MODULE_2__["PetType"].DOG,
                description: "Etiam in congue metus. In at pulvinar nulla, sollicitudin vulputate elit. " +
                    "Mauris posuere sit amet ex nec gravida."
            },
            {
                name: "Samu",
                type: _models_pet_model__WEBPACK_IMPORTED_MODULE_2__["PetType"].DOG,
                description: "Etiam in congue metus. In at pulvinar nulla, sollicitudin vulputate elit. " +
                    "Mauris posuere sit amet ex nec gravida."
            },
            {
                name: "Pajkos",
                type: _models_pet_model__WEBPACK_IMPORTED_MODULE_2__["PetType"].DOG,
                description: "Etiam in congue metus. In at pulvinar nulla, sollicitudin vulputate elit. " +
                    "Mauris posuere sit amet ex nec gravida."
            },
            {
                name: "Félix",
                type: _models_pet_model__WEBPACK_IMPORTED_MODULE_2__["PetType"].DOG,
                description: "Etiam in congue metus. In at pulvinar nulla, sollicitudin vulputate elit. " +
                    "Mauris posuere sit amet ex nec gravida."
            },
            {
                name: "Loncsos",
                type: _models_pet_model__WEBPACK_IMPORTED_MODULE_2__["PetType"].CAT,
                description: "Etiam in congue metus. In at pulvinar nulla, sollicitudin vulputate elit. " +
                    "Mauris posuere sit amet ex nec gravida."
            },
            {
                name: "Moncsos",
                type: _models_pet_model__WEBPACK_IMPORTED_MODULE_2__["PetType"].CAT,
                description: "Etiam in congue metus. In at pulvinar nulla, sollicitudin vulputate elit. " +
                    "Mauris posuere sit amet ex nec gravida."
            },
            {
                name: "Mancsos",
                type: _models_pet_model__WEBPACK_IMPORTED_MODULE_2__["PetType"].CAT,
                description: "Etiam in congue metus. In at pulvinar nulla, sollicitudin vulputate elit. " +
                    "Mauris posuere sit amet ex nec gravida."
            },
            {
                name: "Koncsos",
                type: _models_pet_model__WEBPACK_IMPORTED_MODULE_2__["PetType"].CAT,
                description: "Etiam in congue metus. In at pulvinar nulla, sollicitudin vulputate elit. " +
                    "Mauris posuere sit amet ex nec gravida."
            },
            {
                name: "Pontyos",
                type: _models_pet_model__WEBPACK_IMPORTED_MODULE_2__["PetType"].CAT,
                description: "Etiam in congue metus. In at pulvinar nulla, sollicitudin vulputate elit. " +
                    "Mauris posuere sit amet ex nec gravida."
            },
        ]);
    }
    addPet(pet) {
        const pets = this._pets$.getValue();
        pets.push(pet);
    }
}
PetService.ɵfac = function PetService_Factory(t) { return new (t || PetService)(); };
PetService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PetService, factory: PetService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PetService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
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

module.exports = __webpack_require__(/*! /home/skatole/Documents/Flow/Angular/Vizsga/Angular_exam_javito/angular-exam/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map