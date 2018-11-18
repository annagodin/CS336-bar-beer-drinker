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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















//bye
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
        path: 'bars',
        pathMatch: 'full',
        component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"]
    },
    {
        path: 'modification',
        pathMatch: 'full',
        component: _modification_modification_component__WEBPACK_IMPORTED_MODULE_17__["ModificationComponent"]
    },
    {
        path: 'bars/:bar',
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

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" href=\"#\">Bar Beer Drinker</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\"\r\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" routerLink=\"/bars\">Home</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" routerLink=\"/drinker\">Drinker</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" routerLink=\"/beers\">Beers</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" routerLink=\"/bartender\">Bartender</a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" routerLink=\"/manufacturer\">Manufacturer</a>\r\n        </li>\r\n        <li>\r\n        <a class=\"nav-link\" routerLink=\"/modification\">Modification</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" routerLink=\"/insight\">Insight</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bar-details/bar-details.component */ "./src/app/bar-details/bar-details.component.ts");
/* harmony import */ var _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./beer-details/beer-details.component */ "./src/app/beer-details/beer-details.component.ts");
/* harmony import */ var _drinker_drinker_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./drinker/drinker.component */ "./src/app/drinker/drinker.component.ts");
/* harmony import */ var _drinker_transactions_drinker_transactions_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./drinker-transactions/drinker-transactions.component */ "./src/app/drinker-transactions/drinker-transactions.component.ts");
/* harmony import */ var _beers_beers_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./beers/beers.component */ "./src/app/beers/beers.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _insight_insight_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./insight/insight.component */ "./src/app/insight/insight.component.ts");
/* harmony import */ var _items_purchased_items_purchased_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./items-purchased/items-purchased.component */ "./src/app/items-purchased/items-purchased.component.ts");
/* harmony import */ var _bartender_bartender_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./bartender/bartender.component */ "./src/app/bartender/bartender.component.ts");
/* harmony import */ var _manufacturer_manufacturer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./manufacturer/manufacturer.component */ "./src/app/manufacturer/manufacturer.component.ts");
/* harmony import */ var _manufacturer_details_manufacturer_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./manufacturer-details/manufacturer-details.component */ "./src/app/manufacturer-details/manufacturer-details.component.ts");
/* harmony import */ var _drinker_analytics_drinker_analytics_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./drinker-analytics/drinker-analytics.component */ "./src/app/drinker-analytics/drinker-analytics.component.ts");
/* harmony import */ var _bartender_shifts_bartender_shifts_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./bartender-shifts/bartender-shifts.component */ "./src/app/bartender-shifts/bartender-shifts.component.ts");
/* harmony import */ var _shift_details_shift_details_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shift-details/shift-details.component */ "./src/app/shift-details/shift-details.component.ts");
/* harmony import */ var _manf_likes_manf_likes_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./manf-likes/manf-likes.component */ "./src/app/manf-likes/manf-likes.component.ts");
/* harmony import */ var _modification_modification_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modification/modification.component */ "./src/app/modification/modification.component.ts");
/* harmony import */ var _bartender_sales_bartender_sales_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./bartender-sales/bartender-sales.component */ "./src/app/bartender-sales/bartender-sales.component.ts");
/* harmony import */ var _bartender_analytics_bartender_analytics_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./bartender-analytics/bartender-analytics.component */ "./src/app/bartender-analytics/bartender-analytics.component.ts");
/* harmony import */ var _bartender_ranking_bartender_ranking_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./bartender-ranking/bartender-ranking.component */ "./src/app/bartender-ranking/bartender-ranking.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_8__["WelcomeComponent"],
                _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_9__["BarDetailsComponent"],
                _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_10__["BeerDetailsComponent"],
                _drinker_drinker_component__WEBPACK_IMPORTED_MODULE_11__["DrinkerComponent"],
                _drinker_transactions_drinker_transactions_component__WEBPACK_IMPORTED_MODULE_12__["DrinkerTransactionsComponent"],
                _beers_beers_component__WEBPACK_IMPORTED_MODULE_13__["BeersComponent"],
                _insight_insight_component__WEBPACK_IMPORTED_MODULE_15__["InsightComponent"],
                _items_purchased_items_purchased_component__WEBPACK_IMPORTED_MODULE_16__["ItemsPurchasedComponent"],
                _bartender_bartender_component__WEBPACK_IMPORTED_MODULE_17__["BartenderComponent"],
                _manufacturer_manufacturer_component__WEBPACK_IMPORTED_MODULE_18__["ManufacturerComponent"],
                _manufacturer_details_manufacturer_details_component__WEBPACK_IMPORTED_MODULE_19__["ManufacturerDetailsComponent"],
                _drinker_analytics_drinker_analytics_component__WEBPACK_IMPORTED_MODULE_20__["DrinkerAnalyticsComponent"],
                _bartender_shifts_bartender_shifts_component__WEBPACK_IMPORTED_MODULE_21__["BartenderShiftsComponent"],
                _shift_details_shift_details_component__WEBPACK_IMPORTED_MODULE_22__["ShiftDetailsComponent"],
                _manf_likes_manf_likes_component__WEBPACK_IMPORTED_MODULE_23__["ManfLikesComponent"],
                _modification_modification_component__WEBPACK_IMPORTED_MODULE_24__["ModificationComponent"],
                _bartender_sales_bartender_sales_component__WEBPACK_IMPORTED_MODULE_25__["BartenderSalesComponent"],
                _bartender_analytics_bartender_analytics_component__WEBPACK_IMPORTED_MODULE_26__["BartenderAnalyticsComponent"],
                _bartender_ranking_bartender_ranking_component__WEBPACK_IMPORTED_MODULE_27__["BartenderRankingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__["DropdownModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhci1kZXRhaWxzL2Jhci1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/bar-details/bar-details.component.html":
/*!********************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n    <div class=\"container\">\r\n        <h1 class=\"display-4\">{{ barName }}</h1>\r\n        <p class=\"bar-details\" *ngIf=\"barDetails\">\r\n            {{ barDetails?.City }} <span *ngIf=\"barDetails.City && barDetails.Phone\">|</span> {{ barDetails?.Phone }}\r\n            <br>\r\n            {{ barDetails?.License }}\r\n        </p>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n    <h2 class=\"text-center font-weight-light\">Bar Menu</h2>\r\n    <br>\r\n    <p-table [value]=\"menu\">\r\n        <ng-template pTemplate=\"header\">\r\n            <tr>\r\n                <th>Name</th>\r\n                <th>Type</th>\r\n                <th>Manufacturer</th>\r\n                <th>Price</th>\r\n                <th>Likes</th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-item>\r\n            <tr>\r\n                <td><a routerLink=\"/beers/{{ item.Name }}\">{{ item.Name }}</a></td>\r\n                <td>{{ item.Type }}</td>\r\n                <td>{{ item.Manufacturer }}</td>\r\n                <td>{{ item.Price | currency}}</td>\r\n                <td>{{ item.likes }}</td> \r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n</div>"

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
    function BarDetailsComponent(barService, route) {
        var _this = this;
        this.barService = barService;
        this.route = route;
        route.paramMap.subscribe(function (paramMap) {
            _this.barName = paramMap.get('bar');
            barService.getBar(_this.barName).subscribe(function (data) {
                _this.barDetails = data;
            }, function (error) {
                if (error.status === 404) {
                    alert('Bar not found');
                }
                else {
                    console.error(error.status + ' - ' + error.body);
                    alert('An error occurred on the server. Please check the browser console.');
                }
            });
            barService.getMenu(_this.barName).subscribe(function (data) {
                console.log("this is bar name", _this.barName);
                _this.menu = data;
            });
        });
    }
    BarDetailsComponent.prototype.ngOnInit = function () {
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

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n    <div class=\"container\">\r\n      <h1 class=\"display-4\">{{bartender}} at {{bar}}</h1>\r\n      <p class=\"lead\">Select a shift to view the number and amount of beers sold</p>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"container\">\r\n    <p-table [value]=\"beers_sold\">\r\n    <ng-template pTemplate=\"header\">\r\n        <tr>\r\n          <th>Beer</th>\r\n          <th>Amount Sold</th>\r\n        </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-beers_sold>\r\n        <tr>\r\n          <td> {{beers_sold.Beer}} </td>\r\n          <td> {{beers_sold.numSold}}</td>\r\n        </tr>\r\n    </ng-template>\r\n  </p-table>\r\n  </div>\r\n  <br><br>\r\n  "

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

module.exports = ".result-count{\r\n    font-size: 1.25rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVlci1kZXRhaWxzL2JlZXItZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYmVlci1kZXRhaWxzL2JlZXItZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc3VsdC1jb3VudHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/beer-details/beer-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4\">{{ beerName }}</h1>\r\n    <p class=\"beer-details\" *ngIf=\"manufacturer\">\r\n      Made by <i>{{ manufacturer }}</i>\r\n    </p>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <br>\r\n  <div>\r\n    <span class=\"font-weight-light result-count\">Sold at {{ beerLocations?.length }}</span>\r\n    <p-dropdown class=\"float-right text-left\" *ngIf=\"filterOptions\" [options]=\"filterOptions\" (onChange)=\"sortBy($event.value)\"></p-dropdown>\r\n  </div>\r\n  <br>\r\n  <p-table [value]=\"beerLocations\" sortMode=\"multiple\" sortField=\"price\">\r\n    <ng-template pTemplate=\"header\">\r\n      <tr>\r\n        <th>Bar</th>\r\n        <th>\r\n          Price\r\n        </th>\r\n        <th>Customers</th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-bar>\r\n      <tr>\r\n        <td><a routerLink=\"/bars/{{ bar.bar }}\">{{ bar.Bar }}</a></td>\r\n        <td>{{ bar.Price | currency }}</td>\r\n        <td>{{ bar.Customers }}</td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table>\r\n</div>"

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

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n    <div class=\"container\">\r\n      <h1 class=\"display-4\">Find your favorite beers!</h1>\r\n      <p class=\"lead\">This page can be used to see all the beers in our system or just the ones by your preferred\r\n        manufacturer.</p>\r\n        <p class=\"lead\">Please click on a beer to have some data analytics load about it.</p>\r\n      <p-dropdown *ngIf=\"manufacturerOptions\" [ngClass]=\"{ 'no-option-selected': selectedManufacturer === undefined || selectedManufacturer === null }\"\r\n        placeholder=\"Filter by manufacturer\" [options]=\"manufacturerOptions\" [(ngModel)]=\"selectedManufacturer\" showClear=\"true\"\r\n        (onChange)=\"filterBeers($event.value)\"></p-dropdown>\r\n    </div>\r\n  </div>\r\n  <br>\r\n\r\n<div class=\"container\">\r\n  <h2 class=\"text-center font-weight-light\" >Beers</h2>\r\n  <p-table [value]=\"beers\" [paginator]=\"true\" [rows]=\"10\">\r\n    <ng-template pTemplate=\"header\">\r\n      <tr>\r\n        <th>Name</th>\r\n        <th>Manufacturer</th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-beer>\r\n      <tr>\r\n        <td (click)=\"onBeerGraph(beer.Name)\">{{ beer.Name }}</td>\r\n        <td>{{ beer.Manufacturer }}</td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table>\r\n  <br><br>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <br>\r\n  <div id=\"bargraph\"></div>\r\n</div>\r\n\r\n\r\n<div class=\"container\">\r\n    <br>\r\n    <div id=\"container\"></div>\r\n  </div>\r\n\r\n<div class=\"container\">\r\n    <br>\r\n    <div id=\"testing\"></div>\r\n  </div>\r\n  "

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
            console.log("Data:", data);
            var hour = [];
            var counts = [];
            data.forEach(function (bar) {
                hour.push(bar.Hour);
                console.log("Hour :", bar.Hour);
                counts.push(bar.NumBought);
                console.log("Num :", bar.NumBought);
            });
            _this.renderChartSaleDistribution(hour, counts, event);
        });
    };
    BeersComponent.prototype.renderChartSaleDistribution = function (bars, counts, event) {
        Highcharts.chart('testing', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Beers Purchased The Most By ' + event + '.'
            },
            xAxis: {
                categories: bars,
                title: {
                    text: 'Time (Military)'
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
                text: 'Top 10 Customers Who Buy ' + event + '.'
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

module.exports = "<p>\r\n  drinker-analytics works!\r\n</p>\r\n"

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

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4\">{{drinkerName}}</h1>\r\n    <p class=\"lead\">Transactions ordered by time and grouped by bar.</p>\r\n    <p class=\"lead\">Scroll Down For Drinker Data Analytics</p>\r\n\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <p-table [value]=\"transactions\" [paginator]=\"true\" [rows]=\"10\">\r\n    <ng-template pTemplate=\"header\">\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>Bar</th>\r\n          <th>Date</th>\r\n          <th>Day</th>\r\n          <th>Time</th>\r\n          <th>Tip</th>\r\n          <th>Total Cost</th>\r\n        </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-transactions>\r\n        <tr>\r\n            <td>\r\n                <a routerLink=\"/drinker/{{ transactions.Customer }}/{{transactions.ID}}\">\r\n                  {{ transactions.ID }}\r\n                </a>\r\n              </td>\r\n          <td>{{ transactions.Bar }}</td>\r\n          <td>{{ transactions.Date }}</td>\r\n          <td>{{ transactions.Day }}</td>\r\n          <td>{{ transactions.Time }}</td>\r\n          <td>{{ transactions.Tip }}%</td>\r\n          <td>{{ transactions.TotalCost | currency}}</td>\r\n        </tr>\r\n    </ng-template>\r\n  </p-table>\r\n</div>\r\n\r\n\r\n<div class=\"container\">\r\n  <br>\r\n  <div id=\"bargraph\"></div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <br>\r\n  <div id=\"container\"></div>\r\n</div>\r\n\r\n"

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

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Drinker Page</h1>\n    <p class=\"lead\">Select a customer to view their transactions.</p>\n  </div>\n</div>\n\n<div class=\"container\">\n    <p-table [value]=\"drinkers\" [paginator]=\"true\" [rows]=\"20\">\n    <ng-template pTemplate=\"header\">\n        <tr>\n          <th>Customer</th>\n        </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-drinkers>\n        <tr>\n          <td>\n            <a routerLink=\"/drinker/{{ drinkers.Customer }}\">\n              {{ drinkers.Customer }}\n            </a>\n          </td>\n        </tr>\n    </ng-template>\n  </p-table>\n</div>\n<br><br>\n"

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

module.exports = "<div class=\"container\">\r\n  <br>\r\n  <div id=\"bargraph\"></div>\r\n</div>"

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

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4\">{{drinkerName}}</h1>\r\n    <p class=\"lead\">Items purchased for transaction {{id}}.</p>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n    <p-table [value]=\"items\">\r\n      <ng-template pTemplate=\"header\">\r\n          <tr>\r\n            <th>Name</th>\r\n            <th>Type</th>\r\n            <th>Price</th>\r\n          </tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"body\" let-item>\r\n          <tr>\r\n              <td>{{ item.Name }}</td>\r\n              <td>{{ item.type }}</td>\r\n              <td>{{ item.price }}</td>\r\n          </tr>\r\n      </ng-template>\r\n    </p-table>\r\n    <br><br>\r\n  </div>\r\n  \r\n  \r\n  "

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
    function ModificationService() {
    }
    ModificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGlmaWNhdGlvbi9tb2RpZmljYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modification/modification.component.html":
/*!**********************************************************!*\
  !*** ./src/app/modification/modification.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4\">Modification Page</h1>\r\n    <p class=\"lead\">This page can be used to modify our database. We allow insertions, deletions and updates into our table.\r\n      To get started select a database you would like to use and an action you would like to perform.\r\n    </p>\r\n  </div>\r\n</div>\r\n<br>\r\n\r\n\r\n  <div class=\"container\">\r\n      <div>\r\n        <p-dropdown class=\"float-left text-left\" *ngIf=\"databaseOptions\" [options]=\"databaseOptions\" (onChange)=\"setDatabase($event.value)\"\r\n        [style]=\"{'width':'150%'}\"></p-dropdown>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"container\">\r\n        <div>\r\n          <p-dropdown class=\"float-right text-left\" *ngIf=\"modificationOptions\" [options]=\"modificationOptions\" (onChange)=\"setModification($event.value)\" \r\n          [style]=\"{'width':'150%'}\"></p-dropdown>\r\n        </div>\r\n      </div>\r\n  "

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
        this.databaseOptions = [
            {
                'label': 'Bars',
                'value': 'Bars'
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
                'label': 'ItemsByID',
                'value': 'ItemsByID'
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
    ModificationComponent.prototype.ngOnInit = function () {
    };
    ModificationComponent.prototype.setDatabase = function (database) {
        this.currentDatabase = database;
        console.log("the current db is: ", this.currentDatabase);
    };
    ModificationComponent.prototype.setModification = function (modType) {
        this.modificationType = modType;
        console.log("Mod Type: ", this.modificationType);
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

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n    <div class=\"container\">\r\n      <h1 class=\"display-4\">Welcome to Bar Beer Drinker!</h1>\r\n      <p class=\"lead\">This is a demo application to learn how to create a clean, responsive web interface.</p>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"container\">\r\n  \r\n    <p-table [value]=\"bars\">\r\n      <ng-template pTemplate=\"header\">\r\n          <tr>\r\n            <th>Name</th>\r\n            <th>Licence</th>\r\n            <th>City</th>\r\n            <th>Phone</th>\r\n          </tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"body\" let-bar>\r\n          <tr>\r\n            <td>\r\n              <a routerLink=\"/bars/{{ bar.Bar }}\">\r\n                {{ bar.Bar }}\r\n              </a>\r\n            </td>\r\n            <td>{{ bar.License }}</td>\r\n            <td>{{ bar.City }}</td>\r\n            <td>{{ bar.Phone }}</td>\r\n          </tr>\r\n      </ng-template>\r\n    </p-table>\r\n  </div>\r\n  \r\n  <br><br>"

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

module.exports = __webpack_require__(/*! C:\Users\Danielle\github\bbdp-take2\bar-beer-drinker-plus-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map