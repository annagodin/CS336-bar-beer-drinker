(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bar-details/bar-details.component */ "./src/app/bar-details/bar-details.component.ts");
/* harmony import */ var _drinker_drinker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drinker/drinker.component */ "./src/app/drinker/drinker.component.ts");
/* harmony import */ var _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./beer-details/beer-details.component */ "./src/app/beer-details/beer-details.component.ts");
/* harmony import */ var _drinker_transactions_drinker_transactions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drinker-transactions/drinker-transactions.component */ "./src/app/drinker-transactions/drinker-transactions.component.ts");
/* harmony import */ var _beers_beers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./beers/beers.component */ "./src/app/beers/beers.component.ts");
/* harmony import */ var _insight_insight_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./insight/insight.component */ "./src/app/insight/insight.component.ts");
/* harmony import */ var _items_purchased_items_purchased_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./items-purchased/items-purchased.component */ "./src/app/items-purchased/items-purchased.component.ts");
/* harmony import */ var _bartender_bartender_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bartender/bartender.component */ "./src/app/bartender/bartender.component.ts");
/* harmony import */ var _manufacturer_manufacturer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./manufacturer/manufacturer.component */ "./src/app/manufacturer/manufacturer.component.ts");
/* harmony import */ var _manufacturer_details_manufacturer_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./manufacturer-details/manufacturer-details.component */ "./src/app/manufacturer-details/manufacturer-details.component.ts");
/* harmony import */ var _drinker_analytics_drinker_analytics_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./drinker-analytics/drinker-analytics.component */ "./src/app/drinker-analytics/drinker-analytics.component.ts");
/* harmony import */ var _bartender_shifts_bartender_shifts_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bartender-shifts/bartender-shifts.component */ "./src/app/bartender-shifts/bartender-shifts.component.ts");
/* harmony import */ var _shift_details_shift_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shift-details/shift-details.component */ "./src/app/shift-details/shift-details.component.ts");
/* harmony import */ var _manf_likes_manf_likes_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./manf-likes/manf-likes.component */ "./src/app/manf-likes/manf-likes.component.ts");
/* harmony import */ var _modification_modification_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modification/modification.component */ "./src/app/modification/modification.component.ts");
/* harmony import */ var _bartender_sales_bartender_sales_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bartender-sales/bartender-sales.component */ "./src/app/bartender-sales/bartender-sales.component.ts");
/* harmony import */ var _bartender_analytics_bartender_analytics_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bartender-analytics/bartender-analytics.component */ "./src/app/bartender-analytics/bartender-analytics.component.ts");
/* harmony import */ var _bartender_ranking_bartender_ranking_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bartender-ranking/bartender-ranking.component */ "./src/app/bartender-ranking/bartender-ranking.component.ts");
/* harmony import */ var _verification_verification_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./verification/verification.component */ "./src/app/verification/verification.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var routes = [
    {
        path: 'static',
        pathMatch: 'full',
        redirectTo: 'bars'
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'bars'
    },
    {
        path: 'welcome',
        pathMatch: 'full',
        component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"]
    },
    {
        path: 'modification',
        pathMatch: 'full',
        component: _modification_modification_component__WEBPACK_IMPORTED_MODULE_17__["ModificationComponent"]
    },
    {
        path: 'bars',
        pathMatch: 'full',
        component: _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_3__["BarDetailsComponent"]
    },
    {
        path: 'drinker/:name',
        pathMatch: 'full',
        component: _drinker_transactions_drinker_transactions_component__WEBPACK_IMPORTED_MODULE_6__["DrinkerTransactionsComponent"]
    },
    {
        path: 'drinker',
        pathMatch: 'full',
        component: _drinker_drinker_component__WEBPACK_IMPORTED_MODULE_4__["DrinkerComponent"]
    },
    {
        path: 'drinker/:name/:id',
        pathMatch: 'full',
        component: _items_purchased_items_purchased_component__WEBPACK_IMPORTED_MODULE_9__["ItemsPurchasedComponent"]
    },
    {
        path: 'drinker/top-beers/:customer',
        pathMatch: 'full',
        component: _drinker_analytics_drinker_analytics_component__WEBPACK_IMPORTED_MODULE_13__["DrinkerAnalyticsComponent"]
    },
    {
        path: 'beers',
        pathMatch: 'full',
        component: _beers_beers_component__WEBPACK_IMPORTED_MODULE_7__["BeersComponent"]
    },
    {
        path: 'beers/:beer',
        pathMatch: 'full',
        component: _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_5__["BeerDetailsComponent"]
    },
    {
        path: 'insight',
        pathMatch: 'full',
        component: _insight_insight_component__WEBPACK_IMPORTED_MODULE_8__["InsightComponent"]
    },
    {
        path: 'bartender',
        pathMatch: 'full',
        component: _bartender_bartender_component__WEBPACK_IMPORTED_MODULE_10__["BartenderComponent"]
    },
    {
        path: 'bartender/:name/:bar',
        pathMatch: 'full',
        component: _bartender_shifts_bartender_shifts_component__WEBPACK_IMPORTED_MODULE_14__["BartenderShiftsComponent"]
    },
    {
        path: 'manufacturer',
        pathMatch: 'full',
        component: _manufacturer_manufacturer_component__WEBPACK_IMPORTED_MODULE_11__["ManufacturerComponent"]
    },
    {
        path: 'manufacturer/:manf',
        pathMatch: 'full',
        component: _manufacturer_details_manufacturer_details_component__WEBPACK_IMPORTED_MODULE_12__["ManufacturerDetailsComponent"]
    },
    {
        path: 'bartender/:bartender/:bar/:date',
        pathMatch: 'full',
        component: _shift_details_shift_details_component__WEBPACK_IMPORTED_MODULE_15__["ShiftDetailsComponent"]
    },
    {
        path: 'manufacturer/:manf/likes',
        pathMatch: 'full',
        component: _manf_likes_manf_likes_component__WEBPACK_IMPORTED_MODULE_16__["ManfLikesComponent"]
    },
    {
        path: 'bartender/analytics',
        pathMatch: 'full',
        component: _bartender_analytics_bartender_analytics_component__WEBPACK_IMPORTED_MODULE_19__["BartenderAnalyticsComponent"]
    },
    {
        path: 'bartender/analytics/:bar/:day/:start/:end',
        pathMatch: 'full',
        component: _bartender_ranking_bartender_ranking_component__WEBPACK_IMPORTED_MODULE_20__["BartenderRankingComponent"]
    },
    {
        path: 'bartender/:bartender/:bar/:date/:start/:end',
        pathMatch: 'full',
        component: _bartender_sales_bartender_sales_component__WEBPACK_IMPORTED_MODULE_18__["BartenderSalesComponent"]
    },
    {
        path: 'verification',
        pathMatch: 'full',
        component: _verification_verification_component__WEBPACK_IMPORTED_MODULE_21__["VerificationComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Bar Beer Drinker</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/welcome\">Home</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/bars\">Bars</a>\n        </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/drinker\">Drinker</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/beers\">Beers</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/bartender\">Bartender</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/manufacturer\">Manufacturer</a>\n        </li>\n        <li>\n        <a class=\"nav-link\" routerLink=\"/modification\">Modification</a>\n      </li>\n      <li>\n        <a class=\"nav-link\" routerLink=\"/verification\">Verification</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/insight\">Insight</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'bar-beer-drinker-plus-ui';
    }
    AppComponent.prototype.ngAfterViewInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_components_tabview_tabview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/components/tabview/tabview */ "./node_modules/primeng/components/tabview/tabview.js");
/* harmony import */ var primeng_components_tabview_tabview__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_components_tabview_tabview__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bar-details/bar-details.component */ "./src/app/bar-details/bar-details.component.ts");
/* harmony import */ var _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./beer-details/beer-details.component */ "./src/app/beer-details/beer-details.component.ts");
/* harmony import */ var _drinker_drinker_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./drinker/drinker.component */ "./src/app/drinker/drinker.component.ts");
/* harmony import */ var _drinker_transactions_drinker_transactions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./drinker-transactions/drinker-transactions.component */ "./src/app/drinker-transactions/drinker-transactions.component.ts");
/* harmony import */ var _beers_beers_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./beers/beers.component */ "./src/app/beers/beers.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _insight_insight_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./insight/insight.component */ "./src/app/insight/insight.component.ts");
/* harmony import */ var _items_purchased_items_purchased_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./items-purchased/items-purchased.component */ "./src/app/items-purchased/items-purchased.component.ts");
/* harmony import */ var _bartender_bartender_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bartender/bartender.component */ "./src/app/bartender/bartender.component.ts");
/* harmony import */ var _manufacturer_manufacturer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./manufacturer/manufacturer.component */ "./src/app/manufacturer/manufacturer.component.ts");
/* harmony import */ var _manufacturer_details_manufacturer_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./manufacturer-details/manufacturer-details.component */ "./src/app/manufacturer-details/manufacturer-details.component.ts");
/* harmony import */ var _drinker_analytics_drinker_analytics_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./drinker-analytics/drinker-analytics.component */ "./src/app/drinker-analytics/drinker-analytics.component.ts");
/* harmony import */ var _bartender_shifts_bartender_shifts_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./bartender-shifts/bartender-shifts.component */ "./src/app/bartender-shifts/bartender-shifts.component.ts");
/* harmony import */ var _shift_details_shift_details_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shift-details/shift-details.component */ "./src/app/shift-details/shift-details.component.ts");
/* harmony import */ var _manf_likes_manf_likes_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./manf-likes/manf-likes.component */ "./src/app/manf-likes/manf-likes.component.ts");
/* harmony import */ var _modification_modification_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./modification/modification.component */ "./src/app/modification/modification.component.ts");
/* harmony import */ var _bartender_sales_bartender_sales_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./bartender-sales/bartender-sales.component */ "./src/app/bartender-sales/bartender-sales.component.ts");
/* harmony import */ var _bartender_analytics_bartender_analytics_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./bartender-analytics/bartender-analytics.component */ "./src/app/bartender-analytics/bartender-analytics.component.ts");
/* harmony import */ var _bartender_ranking_bartender_ranking_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./bartender-ranking/bartender-ranking.component */ "./src/app/bartender-ranking/bartender-ranking.component.ts");
/* harmony import */ var _verification_verification_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./verification/verification.component */ "./src/app/verification/verification.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__["WelcomeComponent"],
                _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_11__["BarDetailsComponent"],
                _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_12__["BeerDetailsComponent"],
                _drinker_drinker_component__WEBPACK_IMPORTED_MODULE_13__["DrinkerComponent"],
                _drinker_transactions_drinker_transactions_component__WEBPACK_IMPORTED_MODULE_14__["DrinkerTransactionsComponent"],
                _beers_beers_component__WEBPACK_IMPORTED_MODULE_15__["BeersComponent"],
                _insight_insight_component__WEBPACK_IMPORTED_MODULE_17__["InsightComponent"],
                _items_purchased_items_purchased_component__WEBPACK_IMPORTED_MODULE_18__["ItemsPurchasedComponent"],
                _bartender_bartender_component__WEBPACK_IMPORTED_MODULE_19__["BartenderComponent"],
                _manufacturer_manufacturer_component__WEBPACK_IMPORTED_MODULE_20__["ManufacturerComponent"],
                _manufacturer_details_manufacturer_details_component__WEBPACK_IMPORTED_MODULE_21__["ManufacturerDetailsComponent"],
                _drinker_analytics_drinker_analytics_component__WEBPACK_IMPORTED_MODULE_22__["DrinkerAnalyticsComponent"],
                _bartender_shifts_bartender_shifts_component__WEBPACK_IMPORTED_MODULE_23__["BartenderShiftsComponent"],
                _shift_details_shift_details_component__WEBPACK_IMPORTED_MODULE_24__["ShiftDetailsComponent"],
                _manf_likes_manf_likes_component__WEBPACK_IMPORTED_MODULE_25__["ManfLikesComponent"],
                _modification_modification_component__WEBPACK_IMPORTED_MODULE_26__["ModificationComponent"],
                _bartender_sales_bartender_sales_component__WEBPACK_IMPORTED_MODULE_27__["BartenderSalesComponent"],
                _bartender_analytics_bartender_analytics_component__WEBPACK_IMPORTED_MODULE_28__["BartenderAnalyticsComponent"],
                _bartender_ranking_bartender_ranking_component__WEBPACK_IMPORTED_MODULE_29__["BartenderRankingComponent"],
                _verification_verification_component__WEBPACK_IMPORTED_MODULE_30__["VerificationComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__["DropdownModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                primeng_components_tabview_tabview__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"]
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bar-details/bar-details.component.css":
/*!*******************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col {\n    width: 100%;\n    height: auto;\n}\n\n.u {\n    text-decoration: underline;\n}\n\n#Analytics{\n    width: 400px;\n    margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFyLWRldGFpbHMvYmFyLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksMkJBQTJCO0NBQzlCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLGVBQWU7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9iYXItZGV0YWlscy9iYXItZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4udSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbiNBbmFseXRpY3N7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/bar-details/bar-details.component.html":
/*!********************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n        <h1 class=\"display-4\">Bar Page</h1>\n        <p class=\"lead\">Please Select Bar Under Name For Analytics For A Specific Bar</p>\n        <p class=\"lead\">Click \"Bar Analytics\" in the right corner for analytics about all bars</p>\n    </div>\n</div>\n\n<div id = \"data\">\n<div class=\"row row align-items-right\" >\n        <div class=\"col\"></div>\n        <div class=\"col\"></div>\n        <div class=\"col align-items-center\">\n       <p class=\"text-lg-center\">\n        <td (click)=\"showDataAnalytics()\">\n        <u>Bar Analytics</u></td>\n          </p>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"container\">\n        <p-table [value]=\"bars\" [paginator]=\"true\" [rows]=\"10\">\n          <ng-template pTemplate=\"header\">\n              <tr>\n                <th>Name</th>\n                <th>Licence</th>\n                <th>City</th>\n                <th>Phone</th>\n              </tr>\n          </ng-template>\n          <ng-template pTemplate=\"body\" let-bar>\n              <tr>\n                <td (click)=\"setBarSelected(bar.Bar)\">\n                    {{ bar.Bar }}\n                </td>\n                <td>{{ bar.License }}</td>\n                <td>{{ bar.City }}</td>\n                <td>{{ bar.Phone }}</td>\n              </tr>\n          </ng-template>\n        </p-table>\n      </div>\n\n<br>\n<br>\n<br>\n\n<!--- PER DATA ANALYTICS-->\n<div *ngIf=\"dataAnalytics\">\n<div id = \"Analytics\">\n<p class=\"text-monospace\">Select Beer Brand To See Which Bar Sells It The Most</p>\n<div class=\"row justify-content-center\" >\n        <div class=\"col justify-content-center\">\n                <br>\n                <p-dropdown *ngIf=\"manufacturerOptions\" [ngClass]=\"{ 'no-option-selected': selectedManufacturer === undefined || selectedManufacturer === null }\"\n                placeholder=\"Choose Beer Brand\" [options]=\"manufacturerOptions\" [(ngModel)]=\"selectedManufacturer\" showClear=\"true\"\n                (onChange)=\"setPopulateForBrandAnalytics($event.value)\"></p-dropdown>     \n                <br>\n        </div>\n        \n</div> \n</div>\n</div>\n\n<br>\n<br>\n<div id = \"GraphAnalytics\">\n<div id=\"TopPerBrand\"></div>   \n</div>\n\n\n\n<br>\n<br>\n\n\n\n<!-- PER BAR-->\n<div *ngIf=\"selectText\">\n<div class=\"container\">\n<div class=\"row justify-content-center\" >\n<div id = \"scrollHere\">\n<p class=\"text-monospace\">Select day of the week to load which beers were most sold on that day</p>\n</div>\n</div>\n</div>\n\n\n<div class=\"container\">\n<div class=\"row justify-content-center\" >\n    <div>\n          <p-dropdown class=\"float-right text-center\" [options]=\"daysOfTheWeek\" (onChange)=\"setPopulateForDay($event.value)\" ></p-dropdown>\n    </div>\n</div>\n</div>\n<br>\n\n<div class=\"container\">\n        <div class=\"row justify-content-center\" >\n                <div id=\"topBrands\"></div>\n        </div>\n    </div>\n\n<div class=\"container\">\n    <div class=\"row row align-items-center\" >\n            <div class=\"col\">\n                            <br>\n                            <div id=\"topSpender\"></div>\n            </div>\n            <div class=\"col\">\n                            <br>\n                            <div id=\"inventorySold\"></div>\n            </div>\n            <div class=\"w-100\"></div>\n            <div class=\"col\">\n                    <br>\n                    <div id=\"distributionDay\"></div>\n            </div>\n            <div class=\"col\">\n                    <br>\n                    <div id=\"distributionTime\"></div>\n            </div>\n    </div>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/bar-details/bar-details.component.ts":
/*!******************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.ts ***!
  \******************************************************/
/*! exports provided: BarDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarDetailsComponent", function() { return BarDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BarDetailsComponent = /** @class */ (function () {
    // private static $inject = ['$scope', '$location', '$anchorScroll'];
    function BarDetailsComponent(barService, route) {
        var _this = this;
        this.barService = barService;
        this.route = route;
        this.selectText = false;
        this.dataAnalytics = false;
        console.log("Select text is:", this.selectText);
        route.paramMap.subscribe(function (paramMap) {
            _this.barName = paramMap.get('bar');
            _this.barService.getBars().subscribe(function (data) {
                _this.bars = data;
            }, function (error) {
                alert('could not retrieve a list of bars');
            });
        });
        this.daysOfTheWeek = [
            {
                'label': 'Sunday',
                'value': 'Sunday'
            },
            {
                'label': 'Monday',
                'value': 'Monday'
            },
            {
                'label': 'Tuesday',
                'value': 'Tuesday'
            },
            {
                'label': 'Wednesday',
                'value': 'Wednesday'
            },
            {
                'label': 'Thursday',
                'value': 'Thursday'
            },
            {
                'label': 'Friday',
                'value': 'Friday'
            },
            {
                'label': 'Saturday',
                'value': 'Saturday'
            }
        ];
    }
    BarDetailsComponent.prototype.ngOnInit = function () {
    };
    BarDetailsComponent.prototype.showDataAnalytics = function () {
        var _this = this;
        console.log("IN LOAD BAR ANALYTICS");
        this.dataAnalytics = true;
        setTimeout(function () {
            document.getElementById('Analytics').scrollIntoView(true);
        }, 300);
        this.barService.getBeerManufacturers().subscribe(function (data) {
            _this.manufacturerOptions = data.map(function (manf) {
                return {
                    label: manf,
                    value: manf,
                };
            });
        });
    };
    BarDetailsComponent.prototype.setPopulateForBrandAnalytics = function (brand) {
        var _this = this;
        console.log("populate for brandL ", brand);
        this.barService.getTopBarsPerBrand(brand).subscribe(function (data) {
            console.log("Data is for brand stuff: ", data);
            var customer = [];
            var counts = [];
            data.forEach(function (bar) {
                customer.push(bar.Bar);
                counts.push(bar.NumBought);
            });
            _this.renderChartBrandAnalytics(customer, counts, brand);
        });
        setTimeout(function () {
            document.getElementById('GraphAnalytics').scrollIntoView(true);
        }, 300);
    };
    BarDetailsComponent.prototype.setPopulateDataForAnalyticsDay = function (brand) {
    };
    BarDetailsComponent.prototype.setBarSelected = function (bar) {
        this.barName = bar;
        this.loadAllGraphs();
    };
    BarDetailsComponent.prototype.loadAllGraphs = function () {
        var _this = this;
        this.selectText = true;
        setTimeout(function () {
            document.getElementById('scrollHere').scrollIntoView(true);
        }, 300);
        console.log("inside load all graphs for bar: ", this.barName);
        this.barService.getTopSpendersPerBar(this.barName).subscribe(function (data) {
            var customer = [];
            var counts = [];
            data.forEach(function (bar) {
                customer.push(bar.Customer);
                counts.push(bar.TotalSpent);
            });
            _this.renderChartTopSpender(customer, counts, _this.barName);
        });
        this.barService.getInventorySold(this.barName).subscribe(function (data) {
            var date = [];
            var percentage = [];
            data.forEach(function (bar) {
                date.push(bar.Date);
                percentage.push(bar.percentOfInventory);
            });
            _this.renderChartInventorySold(date, percentage, _this.barName);
        });
        this.barService.getDistributionDay(this.barName).subscribe(function (data) {
            console.log("data for day distribution: ", data);
            var day = [];
            var sales = [];
            data.forEach(function (bar) {
                day.push(bar.Day);
                sales.push(bar.totalSalesPerWeekday);
            });
            _this.renderChartDistributionDay(day, sales, _this.barName);
        });
        this.setPopulateForDay('Sunday');
    };
    BarDetailsComponent.prototype.setPopulateForDay = function (day) {
        var _this = this;
        this.barService.getTopBrandsPerDay(day, this.barName).subscribe(function (data) {
            var name = [];
            var counts = [];
            data.forEach(function (bar) {
                name.push(bar.Name);
                counts.push(bar.numBought);
            });
            _this.renderChartTopBrands(name, counts, day);
        });
        this.barService.getDistributionTime(this.barName, day).subscribe(function (data) {
            console.log("data for time is: ", data);
            var date = [];
            var percentage = [];
            data.forEach(function (bar) {
                date.push(bar.Hour);
                percentage.push(bar.numSales);
            });
            _this.renderChartDistributionTime(date, percentage, day);
        });
    };
    BarDetailsComponent.prototype.renderChartBrandAnalytics = function (bars, counts, event) {
        Highcharts.chart('TopPerBrand', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Top bars that sell the brand: ' + event + '.'
            },
            xAxis: {
                categories: bars,
                title: {
                    text: 'Bars'
                }
            },
            yAxis: {
                allowDecimals: true,
                min: 0,
                title: {
                    text: 'Amount Sold'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: counts
                }]
        });
    };
    BarDetailsComponent.prototype.renderChartDistributionTime = function (bars, counts, event) {
        Highcharts.chart('distributionTime', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Sale Distribution By Time For Day: ' + event + '.'
            },
            xAxis: {
                categories: bars,
                title: {
                    text: 'Time of Day'
                }
            },
            yAxis: {
                allowDecimals: true,
                min: 0,
                title: {
                    text: 'Number of Sales'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: counts
                }]
        });
    };
    BarDetailsComponent.prototype.renderChartDistributionDay = function (bars, counts, event) {
        Highcharts.chart('distributionDay', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Sale Distribution By Day For Bar ' + event + '.'
            },
            xAxis: {
                categories: bars,
                title: {
                    text: 'Day Of The Week'
                }
            },
            yAxis: {
                allowDecimals: true,
                min: 0,
                title: {
                    text: 'Percentage Sold'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: counts
                }]
        });
    };
    BarDetailsComponent.prototype.renderChartInventorySold = function (bars, counts, event) {
        Highcharts.chart('inventorySold', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Average % Of Inventory Sold'
            },
            xAxis: {
                categories: bars,
                title: {
                    text: 'Day Of The Week'
                }
            },
            yAxis: {
                allowDecimals: true,
                min: 0,
                title: {
                    text: 'Percentage Sold'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: counts
                }]
        });
    };
    BarDetailsComponent.prototype.renderChartTopBrands = function (bars, counts, event) {
        Highcharts.chart('topBrands', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Top Brands sold on ' + event + ' for bar: ' + this.barName + '.'
            },
            xAxis: {
                categories: bars,
                title: {
                    text: 'Beer Brands'
                }
            },
            yAxis: {
                allowDecimals: true,
                min: 0,
                title: {
                    text: 'Amount Sold'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: counts
                }]
        });
    };
    BarDetailsComponent.prototype.renderChartTopSpender = function (bars, counts, event) {
        Highcharts.chart('topSpender', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Top Spenders for Bar ' + event + '.'
            },
            xAxis: {
                categories: bars,
                title: {
                    text: 'Spender Name'
                }
            }, tooltip: {
                pointFormat: '<span>${point.y:.f}</span>'
            },
            yAxis: {
                allowDecimals: true,
                min: 0,
                title: {
                    text: 'Total Spent'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: counts
                }]
        });
    };
    BarDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bar-details',
            template: __webpack_require__(/*! ./bar-details.component.html */ "./src/app/bar-details/bar-details.component.html"),
            styles: [__webpack_require__(/*! ./bar-details.component.css */ "./src/app/bar-details/bar-details.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_2__["BarsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BarDetailsComponent);
    return BarDetailsComponent;
}());



/***/ }),

/***/ "./src/app/bars.service.ts":
/*!*********************************!*\
  !*** ./src/app/bars.service.ts ***!
  \*********************************/
/*! exports provided: BarsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarsService", function() { return BarsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarsService = /** @class */ (function () {
    function BarsService(http) {
        this.http = http;
    }
    BarsService.prototype.getBars = function () {
        return this.http.get('/api/bar');
    };
    BarsService.prototype.getBar = function (bar) {
        return this.http.get('/api/bar/' + bar);
    };
    BarsService.prototype.getMenu = function (bar) {
        return this.http.get('/api/menu/' + bar);
    };
    BarsService.prototype.getFrequentCounts = function () {
        return this.http.get('/api/frequents-data');
    };
    BarsService.prototype.getTopBrandsPerDay = function (day, bar) {
        return this.http.get('/api/top-beers-bar/' + bar + '/' + day);
    };
    BarsService.prototype.getTopSpendersPerBar = function (bar) {
        return this.http.get("api/top-spenders/" + bar);
    };
    BarsService.prototype.getInventorySold = function (bar) {
        return this.http.get("/api/inventory-distribution/" + bar);
    };
    BarsService.prototype.getDistributionTime = function (bar, day) {
        return this.http.get('/api/busiest-hours/' + bar + '/' + day);
    };
    BarsService.prototype.getDistributionDay = function (bar) {
        return this.http.get('/api/busiest-days/' + bar);
    };
    BarsService.prototype.getBeerManufacturers = function (beer) {
        if (beer) {
            return this.http.get("/api/beer-manufacturer/" + beer);
        }
        return this.http.get('/api/beer-manufacturer');
    };
    BarsService.prototype.getTopBarsPerBrand = function (manf) {
        return this.http.get('/api/top-bars-manf/' + manf);
    };
    BarsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BarsService);
    return BarsService;
}());



/***/ }),

/***/ "./src/app/bartender-analytics.service.ts":
/*!************************************************!*\
  !*** ./src/app/bartender-analytics.service.ts ***!
  \************************************************/
/*! exports provided: BartenderAnalyticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BartenderAnalyticsService", function() { return BartenderAnalyticsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BartenderAnalyticsService = /** @class */ (function () {
    function BartenderAnalyticsService(http) {
        this.http = http;
    }
    BartenderAnalyticsService.prototype.getShifts = function () {
        return this.http.get('/api/bartender/analytics');
    };
    BartenderAnalyticsService.prototype.getRanking = function (bar, day, start, end) {
        return this.http.get('/api/bartender/analytics/' + bar + '/' + day + '/' + '/' + start + '/' + end);
    };
    BartenderAnalyticsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BartenderAnalyticsService);
    return BartenderAnalyticsService;
}());



/***/ }),

/***/ "./src/app/bartender-analytics/bartender-analytics.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/bartender-analytics/bartender-analytics.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhcnRlbmRlci1hbmFseXRpY3MvYmFydGVuZGVyLWFuYWx5dGljcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/bartender-analytics/bartender-analytics.component.html":
/*!************************************************************************!*\
  !*** ./src/app/bartender-analytics/bartender-analytics.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <h1 class=\"display-4\">Shifts List</h1>\n      <p class=\"lead\">Pick a bar corresponding to a shift to view ranking of bartenders by beers sold</p>\n    </div>\n  </div>\n  \n  <div class=\"container\">\n    <p-table [value]=\"shifts\" [paginator]=\"true\" [rows]=\"20\">\n      <ng-template pTemplate=\"header\">\n          <tr>\n            <th>Bar</th>\n            <th>Day</th>\n            <th>Shift Start</th>\n            <th>Shift End</th>\n          </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-shifts>\n          <tr>\n               <td>\n                  <a routerLink=\"/bartender/analytics/{{ shifts.Bar }}/{{shifts.Day}}/{{shifts.Open}}/{{shifts.Close}}\">\n                    {{ shifts.Bar }}\n                  </a>\n                </td> \n            <td>{{ shifts.Day }}</td>\n            <td>{{ shifts.Open }}</td>\n            <td>{{ shifts.Close }}</td>\n          </tr>\n      </ng-template>\n    </p-table>\n  </div>\n  \n  "

/***/ }),

/***/ "./src/app/bartender-analytics/bartender-analytics.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/bartender-analytics/bartender-analytics.component.ts ***!
  \**********************************************************************/
/*! exports provided: BartenderAnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BartenderAnalyticsComponent", function() { return BartenderAnalyticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bartender_analytics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bartender-analytics.service */ "./src/app/bartender-analytics.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BartenderAnalyticsComponent = /** @class */ (function () {
    function BartenderAnalyticsComponent(analytics) {
        var _this = this;
        this.analytics = analytics;
        this.analytics.getShifts().subscribe(function (data) {
            _this.shifts = data;
        });
    }
    BartenderAnalyticsComponent.prototype.ngOnInit = function () {
    };
    BartenderAnalyticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bartender-analytics',
            template: __webpack_require__(/*! ./bartender-analytics.component.html */ "./src/app/bartender-analytics/bartender-analytics.component.html"),
            styles: [__webpack_require__(/*! ./bartender-analytics.component.css */ "./src/app/bartender-analytics/bartender-analytics.component.css")]
        }),
        __metadata("design:paramtypes", [_bartender_analytics_service__WEBPACK_IMPORTED_MODULE_1__["BartenderAnalyticsService"]])
    ], BartenderAnalyticsComponent);
    return BartenderAnalyticsComponent;
}());



/***/ }),

/***/ "./src/app/bartender-ranking/bartender-ranking.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/bartender-ranking/bartender-ranking.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhcnRlbmRlci1yYW5raW5nL2JhcnRlbmRlci1yYW5raW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/bartender-ranking/bartender-ranking.component.html":
/*!********************************************************************!*\
  !*** ./src/app/bartender-ranking/bartender-ranking.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <h1 class=\"display-4\">Bartenders Ranked By Beers Sold</h1>\n    </div>\n  </div>\n  \n  <div class=\"container\">\n    <p-table [value]=\"ranking\">\n      <ng-template pTemplate=\"header\">\n          <tr>\n            <th>Bartender</th>\n            <th>Beers Sold</th>\n          </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-ranking>\n          <tr>\n            <td>{{ ranking.Bartender }}</td>\n            <td>{{ ranking.totalBeersSold }}</td>\n          </tr>\n      </ng-template>\n    </p-table>\n  </div>\n  \n  "

/***/ }),

/***/ "./src/app/bartender-ranking/bartender-ranking.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/bartender-ranking/bartender-ranking.component.ts ***!
  \******************************************************************/
/*! exports provided: BartenderRankingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BartenderRankingComponent", function() { return BartenderRankingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bartender_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bartender-analytics.service */ "./src/app/bartender-analytics.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BartenderRankingComponent = /** @class */ (function () {
    function BartenderRankingComponent(analyticsService, route) {
        var _this = this;
        this.analyticsService = analyticsService;
        this.route = route;
        this.route.paramMap.subscribe(function (paramMap) {
            _this.day = paramMap.get('day');
            _this.route.paramMap.subscribe(function (paramMap) {
                _this.bar = paramMap.get('bar');
                _this.route.paramMap.subscribe(function (paramMap) {
                    _this.start = paramMap.get('start');
                    _this.route.paramMap.subscribe(function (paramMap) {
                        _this.end = paramMap.get('end');
                        _this.analyticsService.getRanking(_this.bar, _this.day, _this.start, _this.end).subscribe(function (data) {
                            _this.ranking = data;
                        });
                    });
                });
            });
        });
    }
    BartenderRankingComponent.prototype.ngOnInit = function () {
    };
    BartenderRankingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bartender-ranking',
            template: __webpack_require__(/*! ./bartender-ranking.component.html */ "./src/app/bartender-ranking/bartender-ranking.component.html"),
            styles: [__webpack_require__(/*! ./bartender-ranking.component.css */ "./src/app/bartender-ranking/bartender-ranking.component.css")]
        }),
        __metadata("design:paramtypes", [_bartender_analytics_service__WEBPACK_IMPORTED_MODULE_2__["BartenderAnalyticsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BartenderRankingComponent);
    return BartenderRankingComponent;
}());



/***/ }),

/***/ "./src/app/bartender-sales/bartender-sales.component.css":
/*!***************************************************************!*\
  !*** ./src/app/bartender-sales/bartender-sales.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhcnRlbmRlci1zYWxlcy9iYXJ0ZW5kZXItc2FsZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/bartender-sales/bartender-sales.component.html":
/*!****************************************************************!*\
  !*** ./src/app/bartender-sales/bartender-sales.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <h1 class=\"display-4\">{{bartender}} at {{bar}}</h1>\n      <p class=\"lead\">Select a shift to view the number and amount of beers sold</p>\n    </div>\n  </div>\n  \n  <div class=\"container\">\n    <p-table [value]=\"beers_sold\">\n    <ng-template pTemplate=\"header\">\n        <tr>\n          <th>Beer</th>\n          <th>Amount Sold</th>\n        </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-beers_sold>\n        <tr>\n          <td> {{beers_sold.Beer}} </td>\n          <td> {{beers_sold.numSold}}</td>\n        </tr>\n    </ng-template>\n  </p-table>\n  </div>\n  <br><br>\n  "

/***/ }),

/***/ "./src/app/bartender-sales/bartender-sales.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/bartender-sales/bartender-sales.component.ts ***!
  \**************************************************************/
/*! exports provided: BartenderSalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BartenderSalesComponent", function() { return BartenderSalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bartender_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bartender.service */ "./src/app/bartender.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BartenderSalesComponent = /** @class */ (function () {
    function BartenderSalesComponent(bartenderService, route) {
        var _this = this;
        this.bartenderService = bartenderService;
        this.route = route;
        this.route.paramMap.subscribe(function (paramMap) {
            _this.bartender = paramMap.get('bartender');
            _this.route.paramMap.subscribe(function (paramMap) {
                _this.bar = paramMap.get('bar');
                _this.route.paramMap.subscribe(function (paramMap) {
                    _this.date = paramMap.get('date');
                    _this.date = _this.convertDate(_this.date);
                    _this.route.paramMap.subscribe(function (paramMap) {
                        _this.start = paramMap.get('start');
                        _this.route.paramMap.subscribe(function (paramMap) {
                            _this.end = paramMap.get('end');
                            _this.bartenderService.getSales(_this.bartender, _this.bar, _this.date, _this.start, _this.end).subscribe(function (data) {
                                _this.beers_sold = data;
                            });
                        });
                    });
                });
            });
        });
    }
    BartenderSalesComponent.prototype.convertDate = function (temp) {
        temp.replace(/-/g, "\/");
        return temp;
    };
    BartenderSalesComponent.prototype.ngOnInit = function () {
    };
    BartenderSalesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bartender-sales',
            template: __webpack_require__(/*! ./bartender-sales.component.html */ "./src/app/bartender-sales/bartender-sales.component.html"),
            styles: [__webpack_require__(/*! ./bartender-sales.component.css */ "./src/app/bartender-sales/bartender-sales.component.css")]
        }),
        __metadata("design:paramtypes", [_bartender_service__WEBPACK_IMPORTED_MODULE_1__["BartenderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BartenderSalesComponent);
    return BartenderSalesComponent;
}());



/***/ }),

/***/ "./src/app/bartender-shifts/bartender-shifts.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/bartender-shifts/bartender-shifts.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhcnRlbmRlci1zaGlmdHMvYmFydGVuZGVyLXNoaWZ0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/bartender-shifts/bartender-shifts.component.html":
/*!******************************************************************!*\
  !*** ./src/app/bartender-shifts/bartender-shifts.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">{{bartender}} at {{bar}}</h1>\n    <p class=\"lead\">Select a shift to view the number and amount of beers sold</p>\n  </div>\n</div>\n\n<div class=\"container\">\n  <p-table [value]=\"shifts\">\n  <ng-template pTemplate=\"header\">\n      <tr>\n        <th>Date</th>\n        <th>Day</th>\n        <th>Shift Start</th>\n        <th>Shift End</th>\n      </tr>\n  </ng-template>\n  <ng-template pTemplate=\"body\" let-shifts>\n      <tr>\n        <td> \n          <a routerLink=\"/bartender/{{bartender}}/{{bar}}/{{shifts.Date}}/{{shifts.ShiftStart}}/{{shifts.ShiftEnd}}\">\n          {{ shifts.Date }}\n          </a>\n       </td>\n        <td> {{shifts.Day}} </td>\n        <td> {{shifts.ShiftStart}}</td>\n        <td> {{shifts.ShiftEnd}} </td>\n      </tr>\n  </ng-template>\n</p-table>\n</div>\n<br><br>\n"

/***/ }),

/***/ "./src/app/bartender-shifts/bartender-shifts.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/bartender-shifts/bartender-shifts.component.ts ***!
  \****************************************************************/
/*! exports provided: BartenderShiftsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BartenderShiftsComponent", function() { return BartenderShiftsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bartender_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bartender.service */ "./src/app/bartender.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BartenderShiftsComponent = /** @class */ (function () {
    function BartenderShiftsComponent(bartenderService, route) {
        var _this = this;
        this.bartenderService = bartenderService;
        this.route = route;
        this.route.paramMap.subscribe(function (paramMap) {
            _this.bartender = paramMap.get('name');
            _this.route.paramMap.subscribe(function (paramMap) {
                _this.bar = paramMap.get('bar');
                _this.bartenderService.getShifts(_this.bartender, _this.bar).subscribe(function (data) {
                    _this.shifts = data;
                    _this.shifts = _this.convertDate(_this.shifts);
                });
            });
        });
    }
    BartenderShiftsComponent.prototype.convertDate = function (temp) {
        var i = 0;
        for (i = 0; i < temp.length; i++) {
            this.shifts[i].Date = temp[i].Date.replace(/\//g, "-");
            console.log(temp[i].Date);
        }
        return temp;
    };
    BartenderShiftsComponent.prototype.ngOnInit = function () {
    };
    BartenderShiftsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bartender-shifts',
            template: __webpack_require__(/*! ./bartender-shifts.component.html */ "./src/app/bartender-shifts/bartender-shifts.component.html"),
            styles: [__webpack_require__(/*! ./bartender-shifts.component.css */ "./src/app/bartender-shifts/bartender-shifts.component.css")]
        }),
        __metadata("design:paramtypes", [_bartender_service__WEBPACK_IMPORTED_MODULE_1__["BartenderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BartenderShiftsComponent);
    return BartenderShiftsComponent;
}());



/***/ }),

/***/ "./src/app/bartender.service.ts":
/*!**************************************!*\
  !*** ./src/app/bartender.service.ts ***!
  \**************************************/
/*! exports provided: BartenderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BartenderService", function() { return BartenderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BartenderService = /** @class */ (function () {
    function BartenderService(http) {
        this.http = http;
    }
    BartenderService.prototype.getBartenders = function () {
        return this.http.get('/api/bartender');
    };
    BartenderService.prototype.getShifts = function (bartender, bar) {
        return this.http.get('/api/bartender/' + bartender + '/' + bar);
    };
    BartenderService.prototype.getSales = function (bartender, bar, date, start, end) {
        //  console.log(date);
        return this.http.get('/api/bartender/' + bartender + '/' + bar + '/' + date + '/' + start + '/' + end);
    };
    BartenderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BartenderService);
    return BartenderService;
}());



/***/ }),

/***/ "./src/app/bartender/bartender.component.css":
/*!***************************************************!*\
  !*** ./src/app/bartender/bartender.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhcnRlbmRlci9iYXJ0ZW5kZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/bartender/bartender.component.html":
/*!****************************************************!*\
  !*** ./src/app/bartender/bartender.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <h1 class=\"display-4\">Bartender</h1>\n      <p class=\"lead\">Select a bartender to view their shift details at the given bar </p>\n      <p class=\"lead\"><a routerLink=\"/bartender/analytics/\">View Bartender Analytics</a></p>\n  </div>\n</div>\n\n  <div class=\"container\">\n     <p-table #dt [value]=\"bartenders\" [paginator]=\"true\" [rows]=\"20\" [globalFilterFields]=\"['Bartender']\">\n        <ng-template pTemplate=\"header\">\n            <tr>\n              <th>Bartender</th>\n              <th>Bar</th>\n            </tr>\n           </ng-template>\n           <ng-template pTemplate=\"caption\">\n              <div style=\"text-align: right\">        \n                  <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n                  <input type=\"text\" pInputText size=\"50\" placeholder=\"Search for bartender\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\">\n              </div>\n          </ng-template>\n        <ng-template pTemplate=\"body\" let-bartenders>\n            <tr>\n              <td>\n              <a routerLink=\"/bartender/{{bartenders.Bartender}}/{{bartenders.Bar}}\">\n                {{ bartenders.Bartender }}\n              </a>\n              </td>\n              <td>\n                {{bartenders.Bar}}\n              </td>\n            </tr>\n        </ng-template>\n      </p-table>\n    </div>\n"

/***/ }),

/***/ "./src/app/bartender/bartender.component.ts":
/*!**************************************************!*\
  !*** ./src/app/bartender/bartender.component.ts ***!
  \**************************************************/
/*! exports provided: BartenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BartenderComponent", function() { return BartenderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bartender_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bartender.service */ "./src/app/bartender.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BartenderComponent = /** @class */ (function () {
    function BartenderComponent(bartenderService) {
        var _this = this;
        this.bartenderService = bartenderService;
        this.bartenderService.getBartenders().subscribe(function (data) {
            _this.bartenders = data;
        });
    }
    BartenderComponent.prototype.ngOnInit = function () {
    };
    BartenderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bartender',
            template: __webpack_require__(/*! ./bartender.component.html */ "./src/app/bartender/bartender.component.html"),
            styles: [__webpack_require__(/*! ./bartender.component.css */ "./src/app/bartender/bartender.component.css")]
        }),
        __metadata("design:paramtypes", [_bartender_service__WEBPACK_IMPORTED_MODULE_1__["BartenderService"]])
    ], BartenderComponent);
    return BartenderComponent;
}());



/***/ }),

/***/ "./src/app/beer-details/beer-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".result-count{\n    font-size: 1.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVlci1kZXRhaWxzL2JlZXItZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYmVlci1kZXRhaWxzL2JlZXItZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc3VsdC1jb3VudHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/beer-details/beer-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">{{ beerName }}</h1>\n    <p class=\"beer-details\" *ngIf=\"manufacturer\">\n      Made by <i>{{ manufacturer }}</i>\n    </p>\n  </div>\n</div>\n\n<div class=\"container\">\n  <br>\n  <div>\n    <span class=\"font-weight-light result-count\">Sold at {{ beerLocations?.length }}</span>\n    <p-dropdown class=\"float-right text-left\" *ngIf=\"filterOptions\" [options]=\"filterOptions\" (onChange)=\"sortBy($event.value)\"></p-dropdown>\n  </div>\n  <br>\n  <p-table [value]=\"beerLocations\" sortMode=\"multiple\" sortField=\"price\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th>Bar</th>\n        <th>\n          Price\n        </th>\n        <th>Customers</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-bar>\n      <tr>\n        <td><a routerLink=\"/bars/{{ bar.bar }}\">{{ bar.Bar }}</a></td>\n        <td>{{ bar.Price | currency }}</td>\n        <td>{{ bar.Customers }}</td>\n      </tr>\n    </ng-template>\n  </p-table>\n</div>"

/***/ }),

/***/ "./src/app/beer-details/beer-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.ts ***!
  \********************************************************/
/*! exports provided: BeerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeerDetailsComponent", function() { return BeerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _beers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../beers.service */ "./src/app/beers.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeerDetailsComponent = /** @class */ (function () {
    function BeerDetailsComponent(beerService, route) {
        var _this = this;
        this.beerService = beerService;
        this.route = route;
        this.route.paramMap.subscribe(function (paramMap) {
            _this.beerName = paramMap.get('beer');
            _this.beerService.getBarsSelling(_this.beerName).subscribe(function (data) {
                _this.beerLocations = data;
            });
            _this.beerService.getBeerManufacturers(_this.beerName)
                .subscribe(function (data) {
                _this.manufacturer = data;
            });
            _this.filterOptions = [
                {
                    'label': 'Low price first',
                    'value': 'low price'
                },
                {
                    'label': 'High price first',
                    'value': 'high price'
                },
                {
                    'label': 'Most frequented first',
                    'value': 'high customer'
                },
                {
                    'label': 'Least frequented first',
                    'value': 'low customer'
                }
            ];
        });
    }
    BeerDetailsComponent.prototype.ngOnInit = function () {
    };
    BeerDetailsComponent.prototype.sortBy = function (event) {
        if (event === 'low price') {
            this.beerLocations.sort(function (a, b) {
                return a.Price - b.Price;
            });
        }
        else if (event === 'high price') {
            this.beerLocations.sort(function (a, b) {
                debugger;
                return b.Price - a.Price;
            });
        }
        else if (event === 'low customer') {
            this.beerLocations.sort(function (a, b) {
                return a.Customers - b.Customers;
            });
        }
        else if (event === 'high customer') {
            this.beerLocations.sort(function (a, b) {
                return b.Customers - a.Customers;
            });
        }
    };
    BeerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beer-details',
            template: __webpack_require__(/*! ./beer-details.component.html */ "./src/app/beer-details/beer-details.component.html"),
            styles: [__webpack_require__(/*! ./beer-details.component.css */ "./src/app/beer-details/beer-details.component.css")]
        }),
        __metadata("design:paramtypes", [_beers_service__WEBPACK_IMPORTED_MODULE_1__["BeersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BeerDetailsComponent);
    return BeerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/beers.service.ts":
/*!**********************************!*\
  !*** ./src/app/beers.service.ts ***!
  \**********************************/
/*! exports provided: BeersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeersService", function() { return BeersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeersService = /** @class */ (function () {
    function BeersService(http) {
        this.http = http;
    }
    BeersService.prototype.getBeers = function () {
        return this.http.get('/api/beer');
    };
    BeersService.prototype.getBarsSelling = function (beer) {
        return this.http.get("/api/bars-selling/" + beer);
    };
    BeersService.prototype.getBeerManufacturers = function (beer) {
        if (beer) {
            return this.http.get("/api/beer-manufacturer/" + beer);
        }
        return this.http.get('/api/beer-manufacturer');
    };
    BeersService.prototype.getTopSellingBars = function (beer) {
        return this.http.get("/api/top-bars/" + beer);
    };
    BeersService.prototype.getTopCustomerPerBeer = function (beer) {
        return this.http.get("api/top-customers/" + beer);
    };
    BeersService.prototype.getBeerSaleDistribution = function (beer) {
        return this.http.get("/api/beer-sale-distribution/" + beer);
    };
    BeersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BeersService);
    return BeersService;
}());



/***/ }),

/***/ "./src/app/beers/beers.component.css":
/*!*******************************************!*\
  !*** ./src/app/beers/beers.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JlZXJzL2JlZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/beers/beers.component.html":
/*!********************************************!*\
  !*** ./src/app/beers/beers.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <h1 class=\"display-4\">Find your favorite beers!</h1>\n      <p class=\"lead\">This page can be used to see all the beers in our system or just the ones by your preferred\n        manufacturer.</p>\n        <p class=\"lead\">Please click on a beer to have some data analytics load about it. Once clicked scroll to the bottom</p>\n      <p-dropdown *ngIf=\"manufacturerOptions\" [ngClass]=\"{ 'no-option-selected': selectedManufacturer === undefined || selectedManufacturer === null }\"\n        placeholder=\"Filter by manufacturer\" [options]=\"manufacturerOptions\" [(ngModel)]=\"selectedManufacturer\" showClear=\"true\"\n        (onChange)=\"filterBeers($event.value)\"></p-dropdown>\n    </div>\n  </div>\n  <br>\n\n<div class=\"container\">\n  <h2 class=\"text-center font-weight-light\" >Beers</h2>\n  <p-table [value]=\"beers\" [paginator]=\"true\" [rows]=\"10\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th>Name</th>\n        <th>Manufacturer</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-beer>\n      <tr>\n        <td (click)=\"onBeerGraph(beer.Name)\">{{ beer.Name }}</td>\n        <td>{{ beer.Manufacturer }}</td>\n      </tr>\n    </ng-template>\n  </p-table>\n  <br><br>\n</div>\n\n\n<div id = \"scrollHere\">\n<div class=\"container\">\n  <br>\n  <div id=\"bargraph\"></div>\n</div>\n</div>\n\n\n<div class=\"container\">\n    <br>\n    <div id=\"container\"></div>\n  </div>\n\n<div class=\"container\">\n    <br>\n    <div id=\"testing\"></div>\n  </div>\n\n  "

/***/ }),

/***/ "./src/app/beers/beers.component.ts":
/*!******************************************!*\
  !*** ./src/app/beers/beers.component.ts ***!
  \******************************************/
/*! exports provided: BeersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeersComponent", function() { return BeersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _beers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../beers.service */ "./src/app/beers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeersComponent = /** @class */ (function () {
    function BeersComponent(beerService) {
        var _this = this;
        this.beerService = beerService;
        this.beerService.getBeers().subscribe(function (data) {
            _this.beers = data;
            _this.originalBeersList = data;
        });
        this.beerService.getBeerManufacturers().subscribe(function (data) {
            _this.manufacturerOptions = data.map(function (manf) {
                return {
                    label: manf,
                    value: manf,
                };
            });
        });
    }
    BeersComponent.prototype.ngOnInit = function () {
    };
    BeersComponent.prototype.filterBeers = function (manufacturer) {
        this.beers = this.originalBeersList;
        if (manufacturer) {
            this.beers = this.originalBeersList.filter(function (beer) { return beer.Manufacturer === manufacturer; });
        }
    };
    BeersComponent.prototype.onBeerGraph = function (event) {
        var _this = this;
        console.log("It has been clicked: [", event, "]");
        this.beerService.getTopSellingBars(event).subscribe(function (data) {
            console.log("Data for top selling: ", data);
            var bars = [];
            var counts = [];
            data.forEach(function (bar) {
                bars.push(bar.Bar);
                counts.push(bar.NumBought);
            });
            _this.renderChartTopBars(bars, counts, event);
        });
        this.beerService.getTopCustomerPerBeer(event).subscribe(function (data) {
            var customer = [];
            var counts = [];
            data.forEach(function (bar) {
                customer.push(bar.Customer);
                counts.push(bar.NumBought);
            });
            _this.renderChartTopCustomerPerBeer(customer, counts, event);
        });
        this.beerService.getBeerSaleDistribution(event).subscribe(function (data) {
            var hour = [];
            var counts = [];
            data.forEach(function (bar) {
                hour.push(bar.Hour);
                console.log("what: ", bar.Hour);
                counts.push(bar.NumBought);
            });
            _this.renderChartSaleDistribution(hour, counts, event);
        });
        setTimeout(function () {
            document.getElementById('scrollHere').scrollIntoView(true);
        }, 400);
    };
    BeersComponent.prototype.renderChartSaleDistribution = function (bars, counts, event) {
        console.log("Chart");
        Highcharts.chart('testing', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Hourly Distribution of Sales of ' + event
            },
            subtitle: {
                text: 'Hours when ' + event + ' is most popular'
            },
            xAxis: {
                categories: bars,
                title: {
                    text: 'Time (24hr)'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of Beers Purchased'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            "series": [{
                    data: counts
                }]
        });
    };
    BeersComponent.prototype.renderChartTopCustomerPerBeer = function (bars, counts, event) {
        Highcharts.chart('container', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Top Buyers of: ' + event + '.'
            },
            subtitle: {
                text: 'Top 10 Customers Who Buy ' + event
            },
            xAxis: {
                categories: bars,
                title: {
                    text: 'Customers'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of Beers Purchased'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            "series": [{
                    data: counts
                }]
        });
    };
    BeersComponent.prototype.renderChartTopBars = function (bars, counts, event) {
        Highcharts.chart('bargraph', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Top Bars That Sell: ' + event + '.'
            },
            subtitle: {
                text: 'Top 10 Bars Who Sell ' + event + 'The Most'
            },
            xAxis: {
                categories: bars,
                title: {
                    text: 'Bar'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of Beers Sold'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: counts
                }]
        });
    };
    BeersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beers',
            template: __webpack_require__(/*! ./beers.component.html */ "./src/app/beers/beers.component.html"),
            styles: [__webpack_require__(/*! ./beers.component.css */ "./src/app/beers/beers.component.css")]
        }),
        __metadata("design:paramtypes", [_beers_service__WEBPACK_IMPORTED_MODULE_1__["BeersService"]])
    ], BeersComponent);
    return BeersComponent;
}());



/***/ }),

/***/ "./src/app/drinker-analytics/drinker-analytics.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/drinker-analytics/drinker-analytics.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyaW5rZXItYW5hbHl0aWNzL2RyaW5rZXItYW5hbHl0aWNzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/drinker-analytics/drinker-analytics.component.html":
/*!********************************************************************!*\
  !*** ./src/app/drinker-analytics/drinker-analytics.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  drinker-analytics works!\n</p>\n"

/***/ }),

/***/ "./src/app/drinker-analytics/drinker-analytics.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/drinker-analytics/drinker-analytics.component.ts ***!
  \******************************************************************/
/*! exports provided: DrinkerAnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkerAnalyticsComponent", function() { return DrinkerAnalyticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DrinkerAnalyticsComponent = /** @class */ (function () {
    function DrinkerAnalyticsComponent() {
    }
    DrinkerAnalyticsComponent.prototype.ngOnInit = function () {
    };
    DrinkerAnalyticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drinker-analytics',
            template: __webpack_require__(/*! ./drinker-analytics.component.html */ "./src/app/drinker-analytics/drinker-analytics.component.html"),
            styles: [__webpack_require__(/*! ./drinker-analytics.component.css */ "./src/app/drinker-analytics/drinker-analytics.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DrinkerAnalyticsComponent);
    return DrinkerAnalyticsComponent;
}());



/***/ }),

/***/ "./src/app/drinker-service.service.ts":
/*!********************************************!*\
  !*** ./src/app/drinker-service.service.ts ***!
  \********************************************/
/*! exports provided: DrinkerServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkerServiceService", function() { return DrinkerServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrinkerServiceService = /** @class */ (function () {
    function DrinkerServiceService(http) {
        this.http = http;
    }
    DrinkerServiceService.prototype.getTransactions = function (customer) {
        return this.http.get('/api/drinker/' + customer);
    };
    DrinkerServiceService.prototype.getCustomers = function () {
        return this.http.get('api/drinker');
    };
    DrinkerServiceService.prototype.getItemsPurchased = function (id, customer) {
        return this.http.get('/api/drinker/' + customer + '/' + id);
    };
    DrinkerServiceService.prototype.getTopSellingBeer = function (customer) {
        return this.http.get('api/top-beers/' + customer);
    };
    DrinkerServiceService.prototype.getSpendingPerDay = function (customer) {
        return this.http.get('/api/total-spending-day/' + customer);
    };
    DrinkerServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DrinkerServiceService);
    return DrinkerServiceService;
}());



/***/ }),

/***/ "./src/app/drinker-transactions/drinker-transactions.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/drinker-transactions/drinker-transactions.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyaW5rZXItdHJhbnNhY3Rpb25zL2RyaW5rZXItdHJhbnNhY3Rpb25zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/drinker-transactions/drinker-transactions.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/drinker-transactions/drinker-transactions.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">{{drinkerName}}</h1>\n    <p class=\"lead\">Transactions ordered by time and grouped by bar.</p>\n    <p class=\"lead\">Scroll Down For Drinker Data Analytics</p>\n\n  </div>\n</div>\n\n<div class=\"container\">\n  <p-table [value]=\"transactions\" [paginator]=\"true\" [rows]=\"10\">\n    <ng-template pTemplate=\"header\">\n        <tr>\n          <th>ID</th>\n          <th>Bar</th>\n          <th>Date</th>\n          <th>Day</th>\n          <th>Time</th>\n          <th>Tip</th>\n          <th>Total Cost</th>\n        </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-transactions>\n        <tr>\n            <td>\n                <a routerLink=\"/drinker/{{ transactions.Customer }}/{{transactions.ID}}\">\n                  {{ transactions.ID }}\n                </a>\n              </td>\n          <td>{{ transactions.Bar }}</td>\n          <td>{{ transactions.Date }}</td>\n          <td>{{ transactions.Day }}</td>\n          <td>{{ transactions.Time }}</td>\n          <td>{{ transactions.Tip }}%</td>\n          <td>{{ transactions.TotalCost | currency}}</td>\n        </tr>\n    </ng-template>\n  </p-table>\n</div>\n\n\n<div class=\"container\">\n  <br>\n  <div id=\"bargraph\"></div>\n</div>\n\n<div class=\"container\">\n  <br>\n  <div id=\"container\"></div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/drinker-transactions/drinker-transactions.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/drinker-transactions/drinker-transactions.component.ts ***!
  \************************************************************************/
/*! exports provided: DrinkerTransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkerTransactionsComponent", function() { return DrinkerTransactionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _drinker_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../drinker-service.service */ "./src/app/drinker-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DrinkerTransactionsComponent = /** @class */ (function () {
    function DrinkerTransactionsComponent(drinkerService, route) {
        var _this = this;
        this.drinkerService = drinkerService;
        this.route = route;
        this.route.paramMap.subscribe(function (paramMap) {
            _this.drinkerName = paramMap.get('name');
            _this.drinkerService.getTransactions(_this.drinkerName).subscribe(function (data) {
                _this.transactions = data;
            });
        });
        this.loadGraphs(this.drinkerName);
    }
    DrinkerTransactionsComponent.prototype.ngOnInit = function () {
    };
    DrinkerTransactionsComponent.prototype.loadGraphs = function (name) {
        var _this = this;
        this.drinkerService.getTopSellingBeer(name).subscribe(function (data) {
            var beers = [];
            var counts = [];
            data.forEach(function (bar) {
                beers.push(bar.Name);
                counts.push(bar.numBought);
            });
            _this.renderChartTopBars(beers, counts, name);
        });
        this.drinkerService.getSpendingPerDay(name).subscribe(function (data) {
            var date = [];
            var counts = [];
            data.forEach(function (bar) {
                date.push(bar.Date);
                counts.push(bar.TotalSpent);
            });
            _this.renderChartSpending(date, counts, name);
        });
    };
    DrinkerTransactionsComponent.prototype.renderChartSpending = function (bars, counts, event) {
        Highcharts.chart('container', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Spending Per Day For Customer ' + event + '.'
            },
            subtitle: {
                text: 'This customer only became 21 two weeks ago, so only has 2 weeks of data'
            },
            xAxis: {
                categories: bars,
                title: {
                    text: 'Dates'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total Cost'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            "series": [{
                    data: counts
                }]
        });
    };
    DrinkerTransactionsComponent.prototype.renderChartTopBars = function (bars, counts, event) {
        Highcharts.chart('bargraph', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Top Beers Purchased by ' + event + '.'
            },
            xAxis: {
                categories: bars,
                title: {
                    text: 'Beers'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of Beers Sold'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: counts
                }]
        });
    };
    DrinkerTransactionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drinker-transactions',
            template: __webpack_require__(/*! ./drinker-transactions.component.html */ "./src/app/drinker-transactions/drinker-transactions.component.html"),
            styles: [__webpack_require__(/*! ./drinker-transactions.component.css */ "./src/app/drinker-transactions/drinker-transactions.component.css")]
        }),
        __metadata("design:paramtypes", [_drinker_service_service__WEBPACK_IMPORTED_MODULE_1__["DrinkerServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DrinkerTransactionsComponent);
    return DrinkerTransactionsComponent;
}());



/***/ }),

/***/ "./src/app/drinker/drinker.component.css":
/*!***********************************************!*\
  !*** ./src/app/drinker/drinker.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyaW5rZXIvZHJpbmtlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/drinker/drinker.component.html":
/*!************************************************!*\
  !*** ./src/app/drinker/drinker.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Drinker Page</h1>\n    <p class=\"lead\">Select a customer to view their transactions.</p>\n  </div>\n</div>\n\n<div class=\"container\">\n    <p-table [value]=\"drinkers\" [paginator]=\"true\" [rows]=\"10\">\n    <ng-template pTemplate=\"header\">\n        <tr>\n          <th>Customer</th>\n        </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-drinkers>\n        <tr>\n          <td>\n            <a routerLink=\"/drinker/{{ drinkers.Customer }}\">\n              {{ drinkers.Customer }}\n            </a>\n          </td>\n        </tr>\n    </ng-template>\n  </p-table>\n</div>\n<br><br>\n"

/***/ }),

/***/ "./src/app/drinker/drinker.component.ts":
/*!**********************************************!*\
  !*** ./src/app/drinker/drinker.component.ts ***!
  \**********************************************/
/*! exports provided: DrinkerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkerComponent", function() { return DrinkerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _drinker_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../drinker-service.service */ "./src/app/drinker-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrinkerComponent = /** @class */ (function () {
    function DrinkerComponent(drinkerService) {
        this.drinkerService = drinkerService;
        this.getDrinkers();
    }
    DrinkerComponent.prototype.ngOnInit = function () {
    };
    DrinkerComponent.prototype.getDrinkers = function () {
        var _this = this;
        this.drinkerService.getCustomers().subscribe(function (data) {
            _this.drinkers = data;
        }, function (error) {
            alert('could not retrieve a list of drinkers');
        });
    };
    DrinkerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drinker',
            template: __webpack_require__(/*! ./drinker.component.html */ "./src/app/drinker/drinker.component.html"),
            styles: [__webpack_require__(/*! ./drinker.component.css */ "./src/app/drinker/drinker.component.css")]
        }),
        __metadata("design:paramtypes", [_drinker_service_service__WEBPACK_IMPORTED_MODULE_1__["DrinkerServiceService"]])
    ], DrinkerComponent);
    return DrinkerComponent;
}());



/***/ }),

/***/ "./src/app/insight/insight.component.css":
/*!***********************************************!*\
  !*** ./src/app/insight/insight.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc2lnaHQvaW5zaWdodC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/insight/insight.component.html":
/*!************************************************!*\
  !*** ./src/app/insight/insight.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n  <div id=\"bargraph\"></div>\n</div>"

/***/ }),

/***/ "./src/app/insight/insight.component.ts":
/*!**********************************************!*\
  !*** ./src/app/insight/insight.component.ts ***!
  \**********************************************/
/*! exports provided: InsightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsightComponent", function() { return InsightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InsightComponent = /** @class */ (function () {
    function InsightComponent(barService) {
        var _this = this;
        this.barService = barService;
        this.barService.getFrequentCounts().subscribe(function (data) {
            console.log(data);
            var bars = [];
            var counts = [];
            data.forEach(function (bar) {
                bars.push(bar.bar);
                counts.push(bar.frequentCount);
            });
            _this.renderChart(bars, counts);
        });
    }
    InsightComponent.prototype.ngOnInit = function () {
    };
    InsightComponent.prototype.renderChart = function (bars, counts) {
        Highcharts.chart('bargraph', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Frequenting count at bars'
            },
            xAxis: {
                categories: bars,
                title: {
                    text: 'Bar'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of customers'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: counts
                }]
        });
    };
    InsightComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-insight',
            template: __webpack_require__(/*! ./insight.component.html */ "./src/app/insight/insight.component.html"),
            styles: [__webpack_require__(/*! ./insight.component.css */ "./src/app/insight/insight.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_1__["BarsService"]])
    ], InsightComponent);
    return InsightComponent;
}());



/***/ }),

/***/ "./src/app/items-purchased/items-purchased.component.css":
/*!***************************************************************!*\
  !*** ./src/app/items-purchased/items-purchased.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW1zLXB1cmNoYXNlZC9pdGVtcy1wdXJjaGFzZWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/items-purchased/items-purchased.component.html":
/*!****************************************************************!*\
  !*** ./src/app/items-purchased/items-purchased.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">{{drinkerName}}</h1>\n    <p class=\"lead\">Items purchased for transaction {{id}}.</p>\n  </div>\n</div>\n\n<div class=\"container\">\n    <p-table [value]=\"items\">\n      <ng-template pTemplate=\"header\">\n          <tr>\n            <th>Name</th>\n            <th>Type</th>\n            <th>Price</th>\n          </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-item>\n          <tr>\n              <td>{{ item.Name }}</td>\n              <td>{{ item.type }}</td>\n              <td>{{ item.price }}</td>\n          </tr>\n      </ng-template>\n    </p-table>\n    <br><br>\n  </div>\n  \n  \n  "

/***/ }),

/***/ "./src/app/items-purchased/items-purchased.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/items-purchased/items-purchased.component.ts ***!
  \**************************************************************/
/*! exports provided: ItemsPurchasedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsPurchasedComponent", function() { return ItemsPurchasedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _drinker_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../drinker-service.service */ "./src/app/drinker-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemsPurchasedComponent = /** @class */ (function () {
    function ItemsPurchasedComponent(drinkerService, route) {
        var _this = this;
        this.drinkerService = drinkerService;
        this.route = route;
        this.route.paramMap.subscribe(function (paramMap) {
            _this.id = paramMap.get('id');
            _this.route.paramMap.subscribe(function (paramMap) {
                _this.drinkerName = paramMap.get('name');
                _this.drinkerService.getItemsPurchased(_this.id, _this.drinkerName).subscribe(function (data) {
                    _this.items = data;
                });
            });
        });
    }
    ItemsPurchasedComponent.prototype.ngOnInit = function () {
    };
    ItemsPurchasedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-items-purchased',
            template: __webpack_require__(/*! ./items-purchased.component.html */ "./src/app/items-purchased/items-purchased.component.html"),
            styles: [__webpack_require__(/*! ./items-purchased.component.css */ "./src/app/items-purchased/items-purchased.component.css")]
        }),
        __metadata("design:paramtypes", [_drinker_service_service__WEBPACK_IMPORTED_MODULE_1__["DrinkerServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ItemsPurchasedComponent);
    return ItemsPurchasedComponent;
}());



/***/ }),

/***/ "./src/app/manf-likes/manf-likes.component.css":
/*!*****************************************************!*\
  !*** ./src/app/manf-likes/manf-likes.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmYtbGlrZXMvbWFuZi1saWtlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/manf-likes/manf-likes.component.html":
/*!******************************************************!*\
  !*** ./src/app/manf-likes/manf-likes.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <h1 class=\"display-4\">{{manf}}</h1>\n      <p class=\"lead\">Details about the past week.</p>\n    </div>\n  </div>\n\n  <ul class=\"nav nav-tabs\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"/manufacturer/{{ manf }}\">Sales</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" href=\"/manufacturer/{{ manf }}/likes\">Likes</a>\n        </li>\n      </ul>\n  \n  \n      <div class=\"container\">\n          <p-table [value]=\"likes\">\n              <ng-template pTemplate=\"header\">\n                  <tr>\n                      <th>Region Where Beers are Liked Most</th>\n                      <th>Number of Customers</th>\n                  </tr>\n              </ng-template>\n              <ng-template pTemplate=\"body\" let-likes>\n                  <tr>\n                      <td>{{likes.City}}</td>\n                      <td>{{likes.numLikes}}</td>\n                  </tr>\n              </ng-template>\n          </p-table>\n          <br><br>\n        </div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/manf-likes/manf-likes.component.ts":
/*!****************************************************!*\
  !*** ./src/app/manf-likes/manf-likes.component.ts ***!
  \****************************************************/
/*! exports provided: ManfLikesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManfLikesComponent", function() { return ManfLikesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _manufacturer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manufacturer.service */ "./src/app/manufacturer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManfLikesComponent = /** @class */ (function () {
    function ManfLikesComponent(manfService, route) {
        var _this = this;
        this.manfService = manfService;
        this.route = route;
        this.route.paramMap.subscribe(function (paramMap) {
            _this.manf = paramMap.get('manf');
            _this.manfService.getManfLikes(_this.manf).subscribe(function (data) {
                _this.likes = data;
            });
        });
    }
    ManfLikesComponent.prototype.ngOnInit = function () {
    };
    ManfLikesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manf-likes',
            template: __webpack_require__(/*! ./manf-likes.component.html */ "./src/app/manf-likes/manf-likes.component.html"),
            styles: [__webpack_require__(/*! ./manf-likes.component.css */ "./src/app/manf-likes/manf-likes.component.css")]
        }),
        __metadata("design:paramtypes", [_manufacturer_service__WEBPACK_IMPORTED_MODULE_1__["ManufacturerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ManfLikesComponent);
    return ManfLikesComponent;
}());



/***/ }),

/***/ "./src/app/manufacturer-details/manufacturer-details.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/manufacturer-details/manufacturer-details.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbnVmYWN0dXJlci1kZXRhaWxzL21hbnVmYWN0dXJlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/manufacturer-details/manufacturer-details.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/manufacturer-details/manufacturer-details.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <h1 class=\"display-4\">{{manf}}</h1>\n      <p class=\"lead\">Details about the past week.</p>\n    </div>\n  </div>\n\n  <ul class=\"nav nav-tabs\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" href=\"/manufacturer/{{ manf }}\">Sales</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"/manufacturer/{{ manf }}/likes\">Likes</a>\n        </li>\n      </ul>\n  \n  <div class=\"container\">\n  <p-table [value]=\"sales\">\n      <ng-template pTemplate=\"header\">\n          <tr>\n              <th>Region With Highest Sales</th>\n              <th>Beers Sold</th>\n          </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-sales>\n          <tr>\n              <td>{{sales.City}}</td>\n              <td>{{sales.totalSales}}</td>\n          </tr>\n      </ng-template>\n  </p-table>\n  <br><br>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/manufacturer-details/manufacturer-details.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/manufacturer-details/manufacturer-details.component.ts ***!
  \************************************************************************/
/*! exports provided: ManufacturerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManufacturerDetailsComponent", function() { return ManufacturerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _manufacturer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manufacturer.service */ "./src/app/manufacturer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManufacturerDetailsComponent = /** @class */ (function () {
    function ManufacturerDetailsComponent(manfService, route) {
        var _this = this;
        this.manfService = manfService;
        this.route = route;
        this.route.paramMap.subscribe(function (paramMap) {
            _this.manf = paramMap.get('manf');
            _this.manfService.getManfSales(_this.manf).subscribe(function (data) {
                _this.sales = data;
            });
        });
    }
    ManufacturerDetailsComponent.prototype.ngOnInit = function () {
    };
    ManufacturerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manufacturer-details',
            template: __webpack_require__(/*! ./manufacturer-details.component.html */ "./src/app/manufacturer-details/manufacturer-details.component.html"),
            styles: [__webpack_require__(/*! ./manufacturer-details.component.css */ "./src/app/manufacturer-details/manufacturer-details.component.css")]
        }),
        __metadata("design:paramtypes", [_manufacturer_service__WEBPACK_IMPORTED_MODULE_1__["ManufacturerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ManufacturerDetailsComponent);
    return ManufacturerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/manufacturer.service.ts":
/*!*****************************************!*\
  !*** ./src/app/manufacturer.service.ts ***!
  \*****************************************/
/*! exports provided: ManufacturerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManufacturerService", function() { return ManufacturerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManufacturerService = /** @class */ (function () {
    function ManufacturerService(http) {
        this.http = http;
    }
    ManufacturerService.prototype.getManufacturers = function () {
        return this.http.get('/api/manufacturer');
    };
    ManufacturerService.prototype.getManfSales = function (manf) {
        return this.http.get('/api/manufacturer/' + manf);
    };
    ManufacturerService.prototype.getManfLikes = function (manf) {
        return this.http.get('/api/manufacturer/' + manf + '/likes');
    };
    ManufacturerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ManufacturerService);
    return ManufacturerService;
}());



/***/ }),

/***/ "./src/app/manufacturer/manufacturer.component.css":
/*!*********************************************************!*\
  !*** ./src/app/manufacturer/manufacturer.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbnVmYWN0dXJlci9tYW51ZmFjdHVyZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/manufacturer/manufacturer.component.html":
/*!**********************************************************!*\
  !*** ./src/app/manufacturer/manufacturer.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Choose a beer manufacturer!</h1>\n    <!-- <p class=\"lead\">This page can be used to see all the beers in our system or just the ones by your preferred\n      manufacturer.</p> -->\n  </div>\n</div>\n<br>\n\n<div class=\"container\">\n<p-table [value]=\"manufacturer\">\n  <ng-template pTemplate=\"header\">\n    <tr>\n      <th>Manufacturer</th>\n    </tr>\n  </ng-template>\n  <ng-template pTemplate=\"body\" let-manufacturer>\n    <tr>\n      <td>\n          <a routerLink=\"/manufacturer/{{ manufacturer.Manufacturer }}\">\n            {{ manufacturer.Manufacturer }}\n          </a>\n      </td>\n    </tr>\n  </ng-template>\n</p-table>\n<br><br>\n</div>\n"

/***/ }),

/***/ "./src/app/manufacturer/manufacturer.component.ts":
/*!********************************************************!*\
  !*** ./src/app/manufacturer/manufacturer.component.ts ***!
  \********************************************************/
/*! exports provided: ManufacturerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManufacturerComponent", function() { return ManufacturerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _manufacturer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manufacturer.service */ "./src/app/manufacturer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManufacturerComponent = /** @class */ (function () {
    function ManufacturerComponent(manfService) {
        var _this = this;
        this.manfService = manfService;
        this.manfService.getManufacturers().subscribe(function (data) {
            _this.manufacturer = data;
        });
    }
    ManufacturerComponent.prototype.ngOnInit = function () { };
    ManufacturerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manufacturer',
            template: __webpack_require__(/*! ./manufacturer.component.html */ "./src/app/manufacturer/manufacturer.component.html"),
            styles: [__webpack_require__(/*! ./manufacturer.component.css */ "./src/app/manufacturer/manufacturer.component.css")]
        }),
        __metadata("design:paramtypes", [_manufacturer_service__WEBPACK_IMPORTED_MODULE_1__["ManufacturerService"]])
    ], ManufacturerComponent);
    return ManufacturerComponent;
}());



/***/ }),

/***/ "./src/app/modification.service.ts":
/*!*****************************************!*\
  !*** ./src/app/modification.service.ts ***!
  \*****************************************/
/*! exports provided: ModificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificationService", function() { return ModificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModificationService = /** @class */ (function () {
    function ModificationService(http) {
        this.http = http;
    }
    /**
     *  UPDATE / DELETE FUNCTIONS
     */
    ModificationService.prototype.getBars = function () {
        return this.http.get('/api/bar');
    };
    /**
     *  INSERT FUNCTIONS
     */
    ModificationService.prototype.getBarCols = function () {
        var arr;
        arr = ['Bars', 'city', 'phone', 'license'];
        return arr;
    };
    ModificationService.prototype.getBartendersCols = function () {
        var arr;
        arr = ['Bartender', 'bar', 'day', 'shiftStart', 'ShiftEnd'];
        return arr;
    };
    ModificationService.prototype.getCustomersCols = function () {
        var arr;
        arr = ['name', 'city', 'phone'];
        return arr;
    };
    ModificationService.prototype.getItemCols = function () {
        var arr;
        arr = ['type', 'name', 'manufacturer', 'base'];
        return arr;
    };
    ModificationService.prototype.getFrequentsCols = function () {
        var arr;
        arr = ['name', 'bar'];
        return arr;
    };
    ModificationService.prototype.getItemsByIdCols = function () {
        var arr;
        arr = ['id', 'type', 'name', 'price'];
        return arr;
    };
    ModificationService.prototype.getLikesCols = function () {
        var arr;
        arr = ['customer', 'beer'];
        return arr;
    };
    ModificationService.prototype.getMasterSellsCols = function () {
        var arr;
        arr = ['bar', 'margin', 'name', 'type', 'base', 'price'];
        return arr;
    };
    ModificationService.prototype.getOpenHoursCols = function () {
        var arr;
        arr = ['bar', 'day', 'open', 'close'];
        return arr;
    };
    ModificationService.prototype.getShiftHoursCols = function () {
        var arr;
        arr = ['bar', 'Bar', 'day', 'open', 'close'];
        return arr;
    };
    ModificationService.prototype.getStoresCols = function () {
        var arr;
        arr = ['bar', 'Beer', 'day', 'amount'];
        return arr;
    };
    ModificationService.prototype.getTransactionsCols = function () {
        var arr;
        arr = ['Bartender', 'Bar', 'day', 'shiftStart', 'ShiftEnd'];
        return arr;
    };
    ModificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ModificationService);
    return ModificationService;
}());



/***/ }),

/***/ "./src/app/modification/modification.component.css":
/*!*********************************************************!*\
  !*** ./src/app/modification/modification.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "dl {\n    display: block;\n    margin-top: 1em;\n    margin-bottom: 1em;\n    margin-left: 0;\n    margin-right: 0;\n}\n\n.divider{\n    width:5px;\n    height:auto;\n    display:inline-block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kaWZpY2F0aW9uL21vZGlmaWNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1oscUJBQXFCO0NBQ3hCIiwiZmlsZSI6InNyYy9hcHAvbW9kaWZpY2F0aW9uL21vZGlmaWNhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4uZGl2aWRlcntcbiAgICB3aWR0aDo1cHg7XG4gICAgaGVpZ2h0OmF1dG87XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modification/modification.component.html":
/*!**********************************************************!*\
  !*** ./src/app/modification/modification.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Modification Page</h1>\n    <p class=\"lead\">This page can be used to modify our database. We allow insertions, deletions and updates into our table.\n      To get started select a database you would like to use and an action you would like to perform.\n    </p>\n  </div>\n</div>\n<br>\n\n<!-- MAIN DISPLAY ON LOAD-->\n\n<div class=\"container\">\n<div class=\"row\">\n    <div class=\"col\">\n        <p class=\"font-weight-bold\">Please select a database where you would like to perform an action.</p>\n        <br>\n        <p-dropdown class=\"float-center\" *ngIf=\"databaseOptions\" [options]=\"databaseOptions\" placeholder=\"Select DataBase\" (onChange)=\"setDatabase($event.value)\"\n        autoWidth=\"false\" [style]=\"{'width':'100%'}\"></p-dropdown>\n    </div>\n    <div class=\"col\">\n        <p class=\"font-weight-bold\">Please select a action you would like to perform.</p>\n        <br>\n        <p-dropdown class=\"float-center\" *ngIf=\"modificationOptions\" [options]=\"modificationOptions\" placeholder=\"Select Modification\" (onChange)=\"setModification($event.value)\" \n        autoWidth=\"false\" [style]=\"{'width':'100%'}\"></p-dropdown>\n    </div>\n  </div>\n</div>\n\n  \n  <br>\n  <br>\n  <br>\n\n  <div class=\"container\">\n  <button type=\"button\" class=\"btn btn-primary btn-lg btn-pull-right\" value=\"generateForm\" (click)=\"generateFormUpdate()\">Generate Form</button>\n  </div>\n\n  <br>\n  <br>\n  <br>\n\n  <div *ngIf= \"loadTable\">\n  <div id = \"scrollHere\">\n  <p class=\"text-monospace\">Update Form: Please select a column you wish to edit.</p>\n  <div class=\"container\">\n      <p-table [value]=\"bars\" [paginator]=\"true\" [rows]=\"10\">\n        <ng-template pTemplate=\"header\">\n            <tr>\n              <th>Name</th>\n              <th>Licence</th>\n              <th>City</th>\n              <th>Phone</th>\n              <th>Button</th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-bar>\n            <tr>\n              <td>\n                  {{ bar.Bar }}\n              </td>\n              <td>{{ bar.License }}</td>\n              <td>{{ bar.City }}</td>\n              <td>{{ bar.Phone }}</td>\n              <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"tableData(bar)\"\n              >Choose Column</button>\n              </td>\n            </tr>\n        </ng-template>\n      </p-table>\n    </div>\n  </div>\n</div>\n<br>\n<br>\n<br>\n\n\n \n\n\n  <!-- CODE FOR INSERT MODIFICATION-->\n  <div *ngIf= \"loadForm\">\n  <div id = \"scrollHere\">\n  <div class=\"row justify-content-center\" >\n  <p class=\"text-monospace\">Form: Please enter data for the following columns.</p>\n  </div>\n  <div class=\"row justify-content-center\" >\n  <ng-template ngFor let-col [ngForOf]=\"colInfoUpdate\" let-i=\"index\">\n    <form>\n      <div class=\"col\">\n      <div class=\"form-group\">\n        <label for=\"formGroupExample\">{{ col }}</label>\n        <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" placeholder=\"Insert new {{ col }}\" \n        [(ngModel)]=\"formData[col]\" name=\"{{col}}\">\n    </div>\n    </div>\n    </form>\n  </ng-template>\n</div>\n  </div>\n</div>\n\n  <!-- CODE FOR INSERT MODIFICATION-->\n  <div *ngIf= \"loadFormUpdate\">\n      <div id = \"scrollHere\">\n      <div class=\"row justify-content-center\" >\n      <p class=\"text-monospace\">Form: Please enter data for the following columns.</p>\n      </div>\n      <div class=\"row justify-content-center\" >\n      <ng-template ngFor let-col [ngForOf]=\"colInfoUpdate\" let-i=\"index\">\n        <form>\n          <div class=\"col\">\n          <div class=\"form-group\">\n            <label for=\"formGroupExample\">{{ col }}</label>\n            <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" placeholder=\"Insert new data\" \n            [(ngModel)]=\"formData[col]\" name=\"{{col}}\">\n        </div>\n        </div>\n        </form>\n      </ng-template>\n    </div>\n      </div>\n    </div>\n\n<!-- END INSERT ONE-->\n    <br>\n    <br>\n\n<div class=\"row justify-content-center\" >\n  <div *ngIf= \"loadForm\">\n    <button type=\"button\" class=\"btn btn-primary btn-lg btn-pull-right\" (click)=\"enterData()\">Enter Data</button>\n    <div class=\"divider\"></div>\n    <button type=\"button\" class=\"btn btn-primary btn-lg btn-pull-right\" (click)=\"clearData()\">Cancel Entry</button>\n  </div>\n</div>\n\n\n<div class=\"row justify-content-center\" >\n    <div *ngIf= \"loadFormUpdate\">\n      <button type=\"button\" class=\"btn btn-primary btn-lg btn-pull-right\" (click)=\"enterData()\">Enter Data</button>\n      <div class=\"divider\"></div>\n      <button type=\"button\" class=\"btn btn-primary btn-lg btn-pull-right\" (click)=\"clearData()\">Cancel Entry</button>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/modification/modification.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modification/modification.component.ts ***!
  \********************************************************/
/*! exports provided: ModificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificationComponent", function() { return ModificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modification.service */ "./src/app/modification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModificationComponent = /** @class */ (function () {
    function ModificationComponent(modificationService) {
        this.modificationService = modificationService;
        this.loadForm = false;
        this.insertMessage = false;
        this.updateMessage = false;
        this.loadFormUpdate = false;
        this.formData = {};
        this.tableTest = {};
        this.loadPopUp = true;
        this.loadTable = false;
        console.log("form value: ", this.loadForm);
        this.databaseOptions = [
            {
                'label': 'Bars',
                'value': 'Bars'
            },
            {
                'label': 'Bartenders',
                'value': 'Bartenders'
            },
            {
                'label': 'Customers',
                'value': 'Customers'
            },
            {
                'label': 'Frequents',
                'value': 'Frequents'
            },
            {
                'label': 'Item',
                'value': 'Item'
            },
            {
                'label': 'ItemsById',
                'value': 'ItemsById'
            },
            {
                'label': 'Likes',
                'value': 'Likes'
            },
            {
                'label': 'MasterSells',
                'value': 'MasterSells'
            },
            {
                'label': 'OpenHours',
                'value': 'OpenHours'
            },
            {
                'label': 'ShiftHours',
                'value': 'ShiftHours'
            },
            {
                'label': 'Stores',
                'value': 'Stores'
            },
            {
                'label': 'Transactions',
                'value': 'Transactions'
            }
        ];
        this.modificationOptions = [
            {
                'label': 'Update',
                'value': 'Update'
            },
            {
                'label': 'Delete',
                'value': 'Delete'
            },
            {
                'label': 'Insert',
                'value': 'Insert'
            }
        ];
    }
    ModificationComponent.prototype.tableData = function (bar) {
        console.log("this is what table data returns: ", bar);
        var arr;
        arr = [bar.Bar, bar.City, bar.License, bar.Phone];
        this.colInfoUpdate = arr;
        this.loadFormUpdate = true;
    };
    ModificationComponent.prototype.ngOnInit = function () {
    };
    ModificationComponent.prototype.generateFormUpdate = function () {
        this.loadTable = false;
        this.loadForm = false;
        this.loadFormUpdate = true;
        this.insertMessage = false;
        this.updateMessage = false;
        console.log("Button Worked");
        console.log("the current db is: [", this.currentDatabase, "]");
        console.log("Mod Type: [", this.modificationType, "]");
        if (this.modificationType == "Update") {
            this.Update();
        }
        else {
            console.log("WRONG AGAIN");
        }
    };
    ModificationComponent.prototype.generateForm = function () {
        this.loadTable = false;
        this.loadFormUpdate = false;
        this.loadForm = false;
        this.insertMessage = false;
        this.updateMessage = false;
        console.log("Button Worked");
        console.log("the current db is: [", this.currentDatabase, "]");
        console.log("Mod Type: [", this.modificationType, "]");
        if (this.modificationType == "Insert") {
            this.Insert();
        }
        else {
            console.log("WRONG AGAIN");
        }
    };
    ModificationComponent.prototype.Update = function () {
        var _this = this;
        this.updateMessage = true;
        this.insertMessage = false;
        console.log("Update msg value: ", this.updateMessage);
        setTimeout(function () {
            document.getElementById('scrollHere').scrollIntoView(true);
        }, 200);
        if (this.currentDatabase == 'Bars') {
            console.log("load bars for update");
            this.loadTable = true;
            this.modificationService.getBars().subscribe(function (data) {
                _this.bars = data;
            });
        }
        ;
    };
    ModificationComponent.prototype.Insert = function () {
        this.updateMessage = false;
        setTimeout(function () {
            document.getElementById('scrollHere').scrollIntoView(true);
        }, 100);
        this.insertMessage = true;
        if (this.currentDatabase == null || this.modificationType == null) {
            console.log("the current whatever is null");
        }
        else if (this.currentDatabase == "Bars" && this.modificationType == "Insert") {
            this.generateBarsUpdate();
        }
        else if (this.currentDatabase == "Bartenders" && this.modificationType == "Insert") {
            this.generateBartendersUpdate();
        }
        else if (this.currentDatabase == "Customers" && this.modificationType == "Insert") {
            this.generateCustomersUpdate();
        }
        else if (this.currentDatabase == "Item" && this.modificationType == "Insert") {
            this.generateItemUpdate();
        }
        else if (this.currentDatabase == "Frequents" && this.modificationType == "Insert") {
            this.generateFrequentsUpdate();
        }
        else if (this.currentDatabase == "Frequents" && this.modificationType == "Insert") {
            this.generateFrequentsUpdate();
        }
        else if (this.currentDatabase == "ItemsById" && this.modificationType == "Insert") {
            this.generateItemsByIdUpdate();
        }
        else if (this.currentDatabase == "Likes" && this.modificationType == "Insert") {
            this.generateLikesUpdate();
        }
        else if (this.currentDatabase == "MasterSells" && this.modificationType == "Insert") {
            this.generateMasterSellsUpdate();
        }
        else if (this.currentDatabase == "OpenHours" && this.modificationType == "Insert") {
            this.generateOpenHoursUpdate();
        }
        else if (this.currentDatabase == "ShiftHours" && this.modificationType == "Insert") {
            this.generateShiftHoursUpdate();
        }
        else if (this.currentDatabase == "Stores" && this.modificationType == "Insert") {
            this.generateStoresUpdate();
        }
        else if (this.currentDatabase == "Transactions" && this.modificationType == "Insert") {
            this.generateTransactionsUpdate();
        }
        else {
            console.log("WRONG ");
        }
    };
    /**
     *  UPDATE FORMS
     */
    ModificationComponent.prototype.generateBarsUpdate = function () {
        this.colInfoUpdate = this.modificationService.getBarCols();
        console.log(this.colInfoUpdate);
        this.loadForm = true;
        setTimeout(function () {
            document.getElementById('scrollHere').scrollIntoView(true);
        }, 100);
    };
    ModificationComponent.prototype.generateBartendersUpdate = function () {
        this.loadForm = true;
        this.colInfoUpdate = this.modificationService.getBartendersCols();
        setTimeout(function () {
            document.getElementById('scrollHere').scrollIntoView(true);
        }, 100);
    };
    ModificationComponent.prototype.generateCustomersUpdate = function () {
        this.loadForm = true;
        this.colInfoUpdate = this.modificationService.getCustomersCols();
        setTimeout(function () {
            document.getElementById('scrollHere').scrollIntoView(true);
        }, 100);
    };
    ModificationComponent.prototype.generateItemUpdate = function () {
        this.loadForm = true;
        this.colInfoUpdate = this.modificationService.getItemCols();
        setTimeout(function () {
            document.getElementById('scrollHere').scrollIntoView(true);
        }, 100);
    };
    ModificationComponent.prototype.generateFrequentsUpdate = function () {
        this.loadForm = true;
        this.colInfoUpdate = this.modificationService.getFrequentsCols();
        setTimeout(function () {
            document.getElementById('scrollHere').scrollIntoView(true);
        }, 100);
    };
    ModificationComponent.prototype.generateItemsByIdUpdate = function () {
        this.loadForm = true;
        this.colInfoUpdate = this.modificationService.getItemsByIdCols();
        setTimeout(function () {
            document.getElementById('scrollHere').scrollIntoView(true);
        }, 100);
    };
    ModificationComponent.prototype.generateLikesUpdate = function () {
        this.loadForm = true;
        this.colInfoUpdate = this.modificationService.getLikesCols();
        setTimeout(function () {
            document.getElementById('scrollHere').scrollIntoView(true);
        }, 100);
    };
    ModificationComponent.prototype.generateMasterSellsUpdate = function () {
        this.loadForm = true;
        this.colInfoUpdate = this.modificationService.getMasterSellsCols();
        setTimeout(function () {
            document.getElementById('scrollHere').scrollIntoView(true);
        }, 100);
    };
    ModificationComponent.prototype.generateOpenHoursUpdate = function () {
        this.loadForm = true;
        this.colInfoUpdate = this.modificationService.getOpenHoursCols();
        setTimeout(function () {
            document.getElementById('scrollHere').scrollIntoView(true);
        }, 100);
    };
    ModificationComponent.prototype.generateShiftHoursUpdate = function () {
        this.loadForm = true;
        this.colInfoUpdate = this.modificationService.getShiftHoursCols();
        setTimeout(function () {
            document.getElementById('scrollHere').scrollIntoView(true);
        }, 100);
    };
    ModificationComponent.prototype.generateStoresUpdate = function () {
        this.loadForm = true;
        this.colInfoUpdate = this.modificationService.getStoresCols();
        setTimeout(function () {
            document.getElementById('scrollHere').scrollIntoView(true);
        }, 100);
    };
    ModificationComponent.prototype.generateTransactionsUpdate = function () {
        this.loadForm = true;
        this.colInfoUpdate = this.modificationService.getTransactionsCols();
        setTimeout(function () {
            document.getElementById('scrollHere').scrollIntoView(true);
        }, 100);
    };
    //INITIALIZE DATA
    ModificationComponent.prototype.setDatabase = function (database) {
        console.log("**DATABASE SELECTED IN SET MENU: ", database);
        this.currentDatabase = database;
    };
    ModificationComponent.prototype.setModification = function (modType) {
        console.log("**MOD SELECTED IN SET MENU: ", modType);
        this.modificationType = modType;
    };
    ModificationComponent.prototype.clearData = function () {
        this.loadForm = false;
        this.loadFormUpdate = false;
        this.insertMessage = false;
        this.updateMessage = false;
        this.loadPopUp = true;
        this.loadTable = false;
    };
    ModificationComponent.prototype.enterData = function () {
        for (var _i = 0, _a = Object.keys(this.formData); _i < _a.length; _i++) {
            var a = _a[_i];
            console.log("new entry is: ", this.formData[a]);
            console.log("key is: ", a);
        }
    };
    ModificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modification',
            template: __webpack_require__(/*! ./modification.component.html */ "./src/app/modification/modification.component.html"),
            styles: [__webpack_require__(/*! ./modification.component.css */ "./src/app/modification/modification.component.css")]
        }),
        __metadata("design:paramtypes", [_modification_service__WEBPACK_IMPORTED_MODULE_1__["ModificationService"]])
    ], ModificationComponent);
    return ModificationComponent;
}());



/***/ }),

/***/ "./src/app/shift-details/shift-details.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shift-details/shift-details.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoaWZ0LWRldGFpbHMvc2hpZnQtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shift-details/shift-details.component.html":
/*!************************************************************!*\
  !*** ./src/app/shift-details/shift-details.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  shift-details works!\n</p>\n"

/***/ }),

/***/ "./src/app/shift-details/shift-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shift-details/shift-details.component.ts ***!
  \**********************************************************/
/*! exports provided: ShiftDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiftDetailsComponent", function() { return ShiftDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ShiftDetailsComponent = /** @class */ (function () {
    function ShiftDetailsComponent() {
    }
    //   shifts: Shifts[];
    //   bartender : string
    //   bar : string
    //   date : string
    //   constructor(
    //    private bartenderService: BartenderService,
    //    private route: ActivatedRoute) {
    //      this.route.paramMap.subscribe((paramMap) => {
    //        this.bartender = paramMap.get('name');
    //        this.route.paramMap.subscribe((paramMap) => {
    //         this.bar = paramMap.get('bar');
    //         this.route.paramMap.subscribe((paramMap) => {
    //           this.date = paramMap.get('date');
    //        this.bartenderService.getShifts(this.bartender, this.bar).subscribe(
    //          data => {
    //            this.shifts = data;
    //          }
    //        );
    //      });
    //  });
    // }
    ShiftDetailsComponent.prototype.ngOnInit = function () {
    };
    ShiftDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shift-details',
            template: __webpack_require__(/*! ./shift-details.component.html */ "./src/app/shift-details/shift-details.component.html"),
            styles: [__webpack_require__(/*! ./shift-details.component.css */ "./src/app/shift-details/shift-details.component.css")]
        })
    ], ShiftDetailsComponent);
    return ShiftDetailsComponent;
}());



/***/ }),

/***/ "./src/app/verification.service.ts":
/*!*****************************************!*\
  !*** ./src/app/verification.service.ts ***!
  \*****************************************/
/*! exports provided: VerificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationService", function() { return VerificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VerificationService = /** @class */ (function () {
    function VerificationService(http) {
        this.http = http;
    }
    VerificationService.prototype.verify_trans = function () {
        return this.http.get('/api/verification/transactions');
    };
    VerificationService.prototype.verify_residency = function () {
        return this.http.get('/api/verification/residency');
    };
    VerificationService.prototype.verify_price = function () {
        return this.http.get('/api/verification/price');
    };
    VerificationService.prototype.verify_inventory = function () {
        return this.http.get('/api/verification/inventory');
    };
    VerificationService.prototype.verify_shifts = function () {
        return this.http.get('/api/verification/shifts');
    };
    VerificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], VerificationService);
    return VerificationService;
}());



/***/ }),

/***/ "./src/app/verification/verification.component.css":
/*!*********************************************************!*\
  !*** ./src/app/verification/verification.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmaWNhdGlvbi92ZXJpZmljYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/verification/verification.component.html":
/*!**********************************************************!*\
  !*** ./src/app/verification/verification.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Verification Queries</h1>\n    <!-- <p class=\"lead\">Transactions ordered by time and grouped by bar.</p> -->\n    </div>\n    </div>\n\n    <p-tabView>\n      <p-tabPanel header=\"Pattern 1\" >\n          Verify transactions/bills cannot be issued  at times when the given bar is closed: <br>\n          <br>\n          Select NOT EXISTS(select * from Transactions t, OpenHours o  where o.Bar=t.bar and o.day=t.day and STR_TO_DATE(t.time, '%h%p') not between (STR_TO_DATE(o.open,'%h%p')) and STR_TO_DATE(o.close, '%h%p')) \n          as Transaction_Hours_Verification; <br> <br>\n          <p-button label=\"Verify\" (onClick)=\"handle1($event)\" id ={1}> </p-button>\n          <div *ngIf=\"hand1\">True</div>\n      </p-tabPanel>\n      <p-tabPanel header=\"Pattern 2\" >\n        Verify drinkers cannot frequent bars in different city than they live: <br>\n        <br>\n        Select NOT EXISTS (Select distinct f.Name, b.Bar from Frequents f, Customers c, Bars b where f.Name = c.name\n        and f.bar = b.bar and c.city <> b.city) as Verify_Customer_Residency; <br><br>\n        <p-button label=\"Verify\" (onClick)=\"handle2($event)\" id ={2}> </p-button>\n        <div *ngIf=\"hand2\">True</div>\n      </p-tabPanel>\n      <p-tabPanel header=\"Pattern 3\" >\n        Verify for every two beers, b1 and b2, different bars may charge differently for b1 and b2 but b1 should either be less\n        expensive than b2 in ALL bars or more expensive than b2 in ALL bars: <br>\n        <br>\n        select not exists(select b1.Name, b2.Name from MasterSells b1, MasterSells b2, MasterSells b3, MasterSells b4\n            where b1.Type = \"Beer\" \n            and b1.type = b2.type \n            and b2.type = b3.type \n            and b3.type = b4.type \n            and (b1.price > b2.price and b1.bar = b2.bar) \n            and (b2.price > b1.price and b3.bar = b4.bar) \n            and b1.bar <> b3.bar) \n            as Verify_Beer_Price_Constraint; \n            <br><br>\n        <p-button label=\"Verify\" (onClick)=\"handle3($event)\" id ={3}> </p-button>\n        <div *ngIf=\"hand3\">True</div>\n      </p-tabPanel>\n      <p-tabPanel header=\"Pattern 4\" >\n        Verify a bar cannot sell more beers of specific brand, than it has in its inventory: <br>\n        <br>\n        select not exists ( \n            select i.Name, s.Amount, count(*) as beerCount from Transactions t, ItemsByID i, Stores s \n            where t.ID = i.ID \n            and t.day = s.day \n            and i.Name = s.Beer \n            and t.Bar = s.Bar \n            and i.Type = \"Beer\" \n            group by i.Name, s.Amount \n            having beerCount > s.Amount \n            ) as Verify_Inventory_Constraint;\n            <br><br>\n        <p-button label=\"Verify\" (onClick)=\"handle4($event)\" id ={4}> </p-button>\n        <div *ngIf=\"hand4\">True</div>\n    </p-tabPanel>\n    <p-tabPanel header=\"Pattern 5\" >\n      Verify a bartender cannot work more than one shift a day: <br>\n      <br>\n      select not exists(select b1.Bartender\n            from Bartenders b1\n            group by b1.Bartender, b1.Day \n            having count(b1.Day) > 1)\n            as Verify_Bartender_Shift_Constraint;\n            <br><br>\n        <p-button label=\"Verify\" (onClick)=\"handle5($event)\" id ={5}> </p-button>\n        <div *ngIf=\"hand5\">True</div>\n  </p-tabPanel>\n  </p-tabView>"

/***/ }),

/***/ "./src/app/verification/verification.component.ts":
/*!********************************************************!*\
  !*** ./src/app/verification/verification.component.ts ***!
  \********************************************************/
/*! exports provided: VerificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationComponent", function() { return VerificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _verification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../verification.service */ "./src/app/verification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VerificationComponent = /** @class */ (function () {
    function VerificationComponent(verifyService) {
        this.hand1 = false;
        this.hand2 = false;
        this.hand3 = false;
        this.hand4 = false;
        this.hand5 = false;
        var test1 = verifyService.verify_inventory();
        console.log(test1);
    }
    VerificationComponent.prototype.handle1 = function ($event) {
        this.hand1 = true;
    };
    VerificationComponent.prototype.handle2 = function ($event) {
        this.hand2 = true;
    };
    VerificationComponent.prototype.handle3 = function ($event) {
        this.hand3 = true;
    };
    VerificationComponent.prototype.handle4 = function ($event) {
        this.hand4 = true;
    };
    VerificationComponent.prototype.handle5 = function ($event) {
        this.hand5 = true;
    };
    VerificationComponent.prototype.ngOnInit = function () {
    };
    VerificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-verification',
            template: __webpack_require__(/*! ./verification.component.html */ "./src/app/verification/verification.component.html"),
            styles: [__webpack_require__(/*! ./verification.component.css */ "./src/app/verification/verification.component.css")]
        }),
        __metadata("design:paramtypes", [_verification_service__WEBPACK_IMPORTED_MODULE_1__["VerificationService"]])
    ], VerificationComponent);
    return VerificationComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixXQUFXO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogNTAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <h1 class=\"display-4\">Welcome to Bar Beer Drinker Plus!</h1>\n      <p class=\"lead\">This is our final project for Principles of Info and Data Management.\n        Written by: Alex, Anna, Danielle!\n      </p>\n    </div>\n  </div>\n\n  \n\n    <img class=\"fit-picture\"\n    src=\"https://media.giphy.com/media/SEre9eirTBgdO/giphy.gif\"\n    alt=\"Drinking\" \n    class=\"center\"\n    />\n  <br><br>"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(barService) {
        this.barService = barService;
        this.getBars();
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent.prototype.getBars = function () {
        var _this = this;
        this.barService.getBars().subscribe(function (data) {
            _this.bars = data;
        }, function (error) {
            alert('could not retrieve a list of bars');
        });
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_1__["BarsService"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/alexchachura/Documents/bbdp-takeReal/bar-beer-drinker-plus-ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map