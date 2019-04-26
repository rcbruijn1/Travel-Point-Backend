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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _user_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/register/register.component */ "./src/app/user/register/register.component.ts");
/* harmony import */ var _services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/guards/auth.guard */ "./src/app/services/guards/auth.guard.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _journey_journey_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./journey/journey.component */ "./src/app/journey/journey.component.ts");
/* harmony import */ var _journey_journey_form_journey_form_journey_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./journey/journey-form/journey-form/journey-form.component */ "./src/app/journey/journey-form/journey-form/journey-form.component.ts");
/* harmony import */ var _journey_journey_detail_journey_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./journey/journey-detail/journey-detail.component */ "./src/app/journey/journey-detail/journey-detail.component.ts");










var routes = [
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"], canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'user/login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'user/register', component: _user_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'journey', component: _journey_journey_component__WEBPACK_IMPORTED_MODULE_7__["JourneyComponent"], canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'createJourney/:cityName', component: _journey_journey_form_journey_form_journey_form_component__WEBPACK_IMPORTED_MODULE_8__["JourneyFormComponent"], canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'journey-detail/:id', component: _journey_journey_detail_journey_detail_component__WEBPACK_IMPORTED_MODULE_9__["JourneyDetailComponent"], canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = ".container-fluid{\r\n    background: linear-gradient(#68BE9A, #A0F0A8);\r\n    min-height: 100vh;\r\n    height: -webkit-max-content;\r\n    height: -moz-max-content;\r\n    height: max-content;\r\n    padding: 0px;\r\n}\r\n\r\n.navbar {\r\n    background-color: rgb(34, 59, 91);\r\n    padding: 0px;\r\n}\r\n\r\n.hamburger-menu{\r\n    padding: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.date {\r\n    color: white;\r\n    padding: 20px;\r\n    margin-right: 10px;  \r\n    font-size: 20px;\r\n    letter-spacing: 2px;\r\n}\r\n\r\n.ham {\r\n    width: 35px;\r\n    height: 2px;\r\n    background-color: white !important;\r\n    margin: 6px 0;\r\n  }\r\n\r\n.navbar-brand{\r\n      color: white !important;\r\n      padding: 20px;\r\n      font-size: 25px;\r\n      letter-spacing: 2px;\r\n      \r\n  }\r\n\r\n.sidenav {\r\n    height: 100vh;\r\n    width: 0;\r\n    position: fixed;\r\n    z-index: 11;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: white;\r\n    overflow-x: hidden;\r\n    transition: 0.4s;\r\n    text-align:center;\r\n  }\r\n\r\n.sidenav .closebtn {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    font-size: 36px;\r\n    margin-right: 20px;\r\n    color: rgba(34, 59, 91, 1);\r\n  }\r\n\r\n.sidenav .closebtn:hover {\r\n    text-decoration: none;\r\n  }\r\n\r\n.section-user{\r\n      height: 35%;\r\n      width: 100%;\r\n      background: linear-gradient(#68BE9A, #A0F0A8);\r\n      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n      display: flex;\r\n      flex-direction: row;\r\n  }\r\n\r\n.section-user > #user {\r\n     margin: auto;\r\n     color: rgba(34, 59, 91, 1);\r\n  }\r\n\r\n.list-group-item, .list-group-item>a{\r\n        color: #25838C ;\r\n        padding: 20px;\r\n        font-size: 20px;\r\n        letter-spacing: 2px;    \r\n  }\r\n\r\n.list-group-item{\r\n      border: 0px;\r\n      padding: 0;\r\n  }\r\n\r\n.list-group-item>a{\r\n      float: left;\r\n  }\r\n\r\n.list-group-item:hover{\r\n      background-color: rgba(34, 59, 91, 0.5);\r\n  }\r\n\r\n#toggle_fade {\r\n    background-color: rgba(0, 0, 0, .4);\r\n    display: none;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    right: 0;\r\n    z-index: 10;\r\n}\r\n\r\n@media screen and (max-width: 1200px){\r\n    \r\n    .ham{\r\n        cursor: pointer;\r\n    }\r\n   \r\n\r\n    .navbar-brand{\r\n        font-size: 20px;\r\n        padding: 10px;\r\n    }\r\n\r\n    .date{\r\n        width: -webkit-max-content;\r\n        width: -moz-max-content;\r\n        width: max-content;\r\n        margin-right: 0px;\r\n        padding: 5px !important;\r\n        padding-top: 10px !important;\r\n        padding-right: 10px !important;\r\n        font-size: 10px;\r\n        padding: 10px;\r\n        margin-left: 0 !important;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4Q0FBOEM7SUFDOUMsa0JBQWtCO0lBQ2xCLDRCQUFvQjtJQUFwQix5QkFBb0I7SUFBcEIsb0JBQW9CO0lBQ3BCLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxrQ0FBa0M7SUFDbEMsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMsY0FBYztHQUNmOztBQUVEO01BQ0ksd0JBQXdCO01BQ3hCLGNBQWM7TUFDZCxnQkFBZ0I7TUFDaEIsb0JBQW9COztHQUV2Qjs7QUFFRDtJQUNFLGNBQWM7SUFDZCxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixPQUFPO0lBQ1AsUUFBUTtJQUNSLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtHQUNuQjs7QUFFRDtJQUNFLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsU0FBUztJQUNULGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsMkJBQTJCO0dBQzVCOztBQUVEO0lBQ0Usc0JBQXNCO0dBQ3ZCOztBQUVEO01BQ0ksWUFBWTtNQUNaLFlBQVk7TUFDWiw4Q0FBOEM7TUFDOUMsNkVBQTZFO01BQzdFLGNBQWM7TUFDZCxvQkFBb0I7R0FDdkI7O0FBSUQ7S0FDRyxhQUFhO0tBQ2IsMkJBQTJCO0dBQzdCOztBQUdEO1FBQ00sZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsb0JBQW9CO0dBQ3pCOztBQUVEO01BQ0ksWUFBWTtNQUNaLFdBQVc7R0FDZDs7QUFFRDtNQUNJLFlBQVk7R0FDZjs7QUFFRDtNQUNJLHdDQUF3QztHQUMzQzs7QUFFRDtJQUNFLG9DQUFvQztJQUNwQyxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsT0FBTztJQUNQLFNBQVM7SUFDVCxZQUFZO0NBQ2Y7O0FBRUQ7O0lBRUk7UUFDSSxnQkFBZ0I7S0FDbkI7OztJQUdEO1FBQ0ksZ0JBQWdCO1FBQ2hCLGNBQWM7S0FDakI7O0lBRUQ7UUFDSSwyQkFBbUI7UUFBbkIsd0JBQW1CO1FBQW5CLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsd0JBQXdCO1FBQ3hCLDZCQUE2QjtRQUM3QiwrQkFBK0I7UUFDL0IsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCwwQkFBMEI7S0FDN0I7Q0FDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNjhCRTlBLCAjQTBGMEE4KTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQsIDU5LCA5MSk7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5oYW1idXJnZXItbWVudXtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5kYXRlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7ICBcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbn1cclxuXHJcbi5oYW0ge1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDZweCAwO1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhci1icmFuZHtcclxuICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgXHJcbiAgfVxyXG5cclxuICAuc2lkZW5hdiB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxMTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5zaWRlbmF2IC5jbG9zZWJ0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGNvbG9yOiByZ2JhKDM0LCA1OSwgOTEsIDEpO1xyXG4gIH1cclxuXHJcbiAgLnNpZGVuYXYgLmNsb3NlYnRuOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLXVzZXJ7XHJcbiAgICAgIGhlaWdodDogMzUlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM2OEJFOUEsICNBMEYwQTgpO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxuXHJcblxyXG5cclxuICAuc2VjdGlvbi11c2VyID4gI3VzZXIge1xyXG4gICAgIG1hcmdpbjogYXV0bztcclxuICAgICBjb2xvcjogcmdiYSgzNCwgNTksIDkxLCAxKTtcclxuICB9XHJcblxyXG5cclxuICAubGlzdC1ncm91cC1pdGVtLCAubGlzdC1ncm91cC1pdGVtPmF7XHJcbiAgICAgICAgY29sb3I6ICMyNTgzOEMgO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7ICAgIFxyXG4gIH1cclxuXHJcbiAgLmxpc3QtZ3JvdXAtaXRlbXtcclxuICAgICAgYm9yZGVyOiAwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuICAubGlzdC1ncm91cC1pdGVtPmF7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgLmxpc3QtZ3JvdXAtaXRlbTpob3ZlcntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNCwgNTksIDkxLCAwLjUpO1xyXG4gIH1cclxuXHJcbiAgI3RvZ2dsZV9mYWRlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjQpO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KXtcclxuICAgIFxyXG4gICAgLmhhbXtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgIFxyXG5cclxuICAgIC5uYXZiYXItYnJhbmR7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRhdGV7XHJcbiAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <nav class=\"navbar\">\n    <a (click)=\"openNav()\" (click)=\"getUser()\" class=\"hamburger-menu\" *ngIf=\"authService.loggedIn()\">     \n      <div class=\"ham\"></div>\n      <div class=\"ham\"></div>\n      <div class=\"ham\"></div>\n    </a>\n    <a class=\"navbar-brand mr-auto mb-0 h1\" routerLink=\"/\">Traveler</a>\n    <span class=\"date ml-auto\">{{dateNow | date:'fullDate'}}</span>\n  </nav>\n  <div id=\"mySidenav\" class=\"sidenav\">\n      <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\n    <section *ngIf=\"user\" class=\"section-user\">\n        <span id=\"user\"><fa name=\"far fa-user\" size=\"3x\"></fa><h5>{{user.username}}</h5><hr style=\"border-color: #25838C\"><h5>{{user.email}}</h5></span>       \n    </section>\n    <section class=\"section-options\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\"><a href=\"\" routerLink=\"/journey\" (click)=\"closeNav()\" >Start a new journey</a></li>\n      </ul>\n      <ul class=\"list-group\">\n          <li class=\"list-group-item\"><a href=\"\" (click)=\"onLogOutClick()\">Logout</a></li>\n        </ul>\n    </section>\n    </div>\n    <div id=\"toggle_fade\"></div>\n  <router-outlet></router-outlet>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.title = 'Traveler';
        this.dateNow = Date.now();
    }
    // ngOnInit() {
    //   this.authService.getProfile().subscribe(profile => {
    //     let jsonResponse:any = profile;
    //     this.user = jsonResponse;
    //   })
    // }
    AppComponent.prototype.getUser = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        console.log(this.user);
    };
    AppComponent.prototype.openNav = function () {
        var x = window.matchMedia("(max-width: 900px)");
        var y = window.matchMedia("(max-width: 600px)");
        if (x.matches) {
            document.getElementById("mySidenav").style.width = "50%";
            document.getElementById("toggle_fade").style.display = "block";
        }
        if (y.matches) {
            document.getElementById("mySidenav").style.width = "100%";
            document.getElementById("toggle_fade").style.display = "block";
        }
        else {
            document.getElementById("mySidenav").style.width = "20%";
            document.getElementById("toggle_fade").style.display = "block";
        }
    };
    AppComponent.prototype.closeNav = function () {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("toggle_fade").style.display = "none";
    };
    AppComponent.prototype.onLogOutClick = function () {
        this.authService.logout();
        this.router.navigate(['user/login']);
        this.closeNav();
        return false;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _user_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/register/register.component */ "./src/app/user/register/register.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/guards/auth.guard */ "./src/app/services/guards/auth.guard.ts");
/* harmony import */ var _journey_journey_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./journey/journey.component */ "./src/app/journey/journey.component.ts");
/* harmony import */ var _journey_journey_form_journey_form_journey_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./journey/journey-form/journey-form/journey-form.component */ "./src/app/journey/journey-form/journey-form/journey-form.component.ts");
/* harmony import */ var _journey_journey_detail_journey_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./journey/journey-detail/journey-detail.component */ "./src/app/journey/journey-detail/journey-detail.component.ts");

//Angular Modules





//Additional Modules



//Components

//Services












function tokenGetter() {
    return localStorage.getItem('acces_token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _user_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _user_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_16__["MainComponent"],
                _journey_journey_component__WEBPACK_IMPORTED_MODULE_18__["JourneyComponent"],
                _journey_journey_form_journey_form_journey_form_component__WEBPACK_IMPORTED_MODULE_19__["JourneyFormComponent"],
                _journey_journey_detail_journey_detail_component__WEBPACK_IMPORTED_MODULE_20__["JourneyDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_15__["JwtModule"].forRoot({ config: {
                        tokenGetter: tokenGetter
                    } }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__["AngularFontAwesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot({
                    timeOut: 3000,
                    positionClass: "toast-top-full-width",
                    preventDuplicates: false
                })
            ],
            providers: [_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_15__["JwtHelperService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], _services_validate_service__WEBPACK_IMPORTED_MODULE_11__["ValidateService"], _services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/journey/journey-detail/journey-detail.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/journey/journey-detail/journey-detail.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid{\r\n    height: 100vh;\r\n    width: 90vw;\r\n}\r\n\r\n.container{\r\n    height: 75%;\r\n    width: 75%;\r\n    margin-top: 5rem;\r\n    background-color: #25838C;\r\n    border-radius: 20px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.card{\r\n    background: transparent;\r\n    border: 0px;\r\n    border-right: 1px solid #A0F0A8;\r\n    width: 25%;\r\n    padding: 20px;\r\n}\r\n\r\n.journey-prop{\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.card-title,.prop-header{\r\n    color: #A0F0A8;\r\n}\r\n\r\n.title{\r\n    color: white;\r\n}\r\n\r\n.locations-list{\r\n    width: 75%;\r\n    padding: 20px;\r\n}\r\n\r\n.card-container{\r\n    display:flex;\r\n    flex-direction: row;\r\n    background-color: #A0F0A8;\r\n    padding: 20px;\r\n    margin: 20px;\r\n    justify-content: space-between;\r\n}\r\n\r\n.custom-card{\r\n    width: -webkit-max-content;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.btn{\r\n    margin-left:10px;\r\n}\r\n\r\n.btn:hover{\r\n    opacity: 0.7;\r\n}\r\n\r\n.btn-view{\r\n    background-color: #25838C;\r\n    color: white;\r\n}\r\n\r\n.delete-header{\r\n    color: red;\r\n    cursor: pointer;\r\n    font-size: 15px;\r\n}\r\n\r\n.btn-crud{\r\n    font-size: 14px;\r\n    padding: 10px;\r\n    height: -webkit-max-content;\r\n    height: -moz-max-content;\r\n    height: max-content;\r\n    margin: 0px;\r\n    margin-top: 5px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n@media screen and (max-width: 1450px){\r\n    .container-fluid{\r\n        width: 100vw;\r\n        height: -webkit-max-content;\r\n        height: -moz-max-content;\r\n        height: max-content;\r\n        margin-bottom: 20px;\r\n    }\r\n\r\n    .container{\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        height: -webkit-max-content;\r\n        height: -moz-max-content;\r\n        height: max-content;\r\n        width: 100%;\r\n    }\r\n\r\n    .card{\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        width: 100%;\r\n        border: none;\r\n        border-radius: 0px;\r\n        border-bottom: 1px solid #A0F0A8;\r\n    }\r\n\r\n    .card-body{\r\n        width: 100%;\r\n    }\r\n\r\n    .locations-list{\r\n        width: 100%;\r\n        padding: 0px;\r\n    }\r\n\r\n    .card-container{\r\n        margin-left: 0px;\r\n        margin-right: 0px;\r\n    }\r\n\r\n    .flex-title{\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n    }\r\n\r\n    .title{\r\n        font-size: 14px;\r\n    }\r\n\r\n    .card-btns{\r\n        display: flex;\r\n        flex-direction: row;\r\n        height: -webkit-max-content;\r\n        height: -moz-max-content;\r\n        height: max-content;\r\n    }\r\n\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam91cm5leS9qb3VybmV5LWRldGFpbC9qb3VybmV5LWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLG9CQUFvQjtJQUNwQiw0QkFBNEI7Q0FDL0I7O0FBRUQ7SUFDSSx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxXQUFXO0lBQ1gsY0FBYztDQUNqQjs7QUFFRDtJQUNJLHFCQUFxQjtDQUN4Qjs7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksV0FBVztJQUNYLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLDBCQUEwQjtJQUMxQixjQUFjO0lBQ2QsYUFBYTtJQUNiLCtCQUErQjtDQUNsQzs7QUFHRDtJQUNJLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsd0JBQXdCO0NBQzNCOztBQUVEO0lBQ0ksaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksYUFBYTtDQUNoQjs7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLDRCQUFvQjtJQUFwQix5QkFBb0I7SUFBcEIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHVCQUF1QjtJQUN2Qix3QkFBd0I7Q0FDM0I7O0FBR0Q7SUFDSTtRQUNJLGFBQWE7UUFDYiw0QkFBb0I7UUFBcEIseUJBQW9CO1FBQXBCLG9CQUFvQjtRQUNwQixvQkFBb0I7S0FDdkI7O0lBRUQ7UUFDSSx1QkFBdUI7UUFDdkIsd0JBQXdCO1FBQ3hCLDRCQUFvQjtRQUFwQix5QkFBb0I7UUFBcEIsb0JBQW9CO1FBQ3BCLFlBQVk7S0FDZjs7SUFFRDtRQUNJLGNBQWM7UUFDZCx1QkFBdUI7UUFDdkIsd0JBQXdCO1FBQ3hCLFlBQVk7UUFDWixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLGlDQUFpQztLQUNwQzs7SUFFRDtRQUNJLFlBQVk7S0FDZjs7SUFFRDtRQUNJLFlBQVk7UUFDWixhQUFhO0tBQ2hCOztJQUVEO1FBQ0ksaUJBQWlCO1FBQ2pCLGtCQUFrQjtLQUNyQjs7SUFFRDtRQUNJLGNBQWM7UUFDZCx1QkFBdUI7UUFDdkIsd0JBQXdCO0tBQzNCOztJQUVEO1FBQ0ksZ0JBQWdCO0tBQ25COztJQUVEO1FBQ0ksY0FBYztRQUNkLG9CQUFvQjtRQUNwQiw0QkFBb0I7UUFBcEIseUJBQW9CO1FBQXBCLG9CQUFvQjtLQUN2Qjs7O0NBR0oiLCJmaWxlIjoic3JjL2FwcC9qb3VybmV5L2pvdXJuZXktZGV0YWlsL2pvdXJuZXktZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiA5MHZ3O1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiA3NSU7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTgzOEM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5jYXJke1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNBMEYwQTg7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmpvdXJuZXktcHJvcHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSwucHJvcC1oZWFkZXJ7XHJcbiAgICBjb2xvcjogI0EwRjBBODtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubG9jYXRpb25zLWxpc3R7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBMEYwQTg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5cclxuLmN1c3RvbS1jYXJke1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0bntcclxuICAgIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbn1cclxuXHJcbi5idG46aG92ZXJ7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbi5idG4tdmlld3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTgzOEM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5kZWxldGUtaGVhZGVye1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLmJ0bi1jcnVke1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDUwcHgpe1xyXG4gICAgLmNvbnRhaW5lci1mbHVpZHtcclxuICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJke1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQTBGMEE4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWJvZHl7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvY2F0aW9ucy1saXN0e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1jb250YWluZXJ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZmxleC10aXRsZXtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1idG5ze1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/journey/journey-detail/journey-detail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/journey/journey-detail/journey-detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"container\">\n    <div *ngIf=\"activeJourney\" class=\"card\">\n      <div class=\"card-body\">\n        <h3 class=\"card-title\" style=\"text-decoration: underline; padding-bottom: 20px;\">{{activeJourney.name}}</h3>\n        <div class=\"journey-prop\">\n          <h4 class=\"prop-header\">City:</h4>\n          <h5 class=\"title\">{{activeJourney.city}}</h5>\n        </div>\n        <div class=\"journey-prop\">\n          <h4 class=\"prop-header\">Date:</h4>\n          <h5 class=\"title\" style=\"font-size: 15px;\">{{activeJourney.departure_date | date:'longDate'}} -\n            {{activeJourney.return_date | date:'longDate'}}</h5>\n        </div>\n        <div class=\"journey-prop\">\n          <h4 class=\"prop-header\">Description <a *ngIf=\"!edit\" (click)=\"toggleEdit()\"\n              style=\"color:lightblue; font-size:18px; cursor: pointer;\">(edit) </a>:</h4>\n          <h5 *ngIf=\"!edit\" class=\"title\">{{activeJourney.description}}</h5>\n          <form (submit)=\"update()\">\n            <textarea *ngIf=\"edit\" [(ngModel)]=\"journey_description\" name=\"journey_description\" class=\"form-control\"\n              placeholder=\"{{activeJourney.description}}\"></textarea>\n            <input *ngIf=\"edit\" type=\"submit\" class=\"btn btn-primary btn-crud\" value=\"Submit\">\n          </form>\n        </div>\n        <div class=\"journey-prop\">\n          <h5 *ngIf=\"!delete\" class=\"delete-header\" (click)=\"toggleDelete()\" >(delete this journey)</h5>\n          <h5 *ngIf=\"delete\" class=\"delete-header\">Fill in the name of your journey to confirm</h5>\n          <form (submit)=\"deleteJourney()\">\n            <textarea *ngIf=\"delete\" [(ngModel)]=\"confirm_string\" name=\"confirm_string\" class=\"form-control\"></textarea>\n            <input *ngIf=\"delete\" type=\"submit\" class=\"btn btn-danger btn-crud\" value=\"Delete\">\n          </form>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"locations\" class=\"locations-list\">\n      <div class=\"card-container\" *ngFor=\"let f of locations; let i = index\">\n        <div class=\"custom-card\">\n          <div class=\"flex-title\">\n            <h5 class=\"title\">{{f.name}}</h5>\n          </div>\n        </div>\n        <div class=\"card-btns\">\n          <button class=\"btn btn-view\" (click)=\"openVenue(content,f)\">VIEW</button>\n          <button class=\"btn btn-danger\" (click)=\"deleteLocation(i,f._id)\">DELETE</button>\n        </div>\n      </div>\n\n      <ng-template #content let-modal>\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\" id=\"modal-basic-title\">{{activeLocation.name}}</h4>\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div *ngIf=\"activeLocation\" class=\"modal-body\">\n          <div class=\"card-modal\">\n            <img class=\"card-img\" src=\"{{activeLocation.imagePath}}\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">{{activeLocation.address}}</h5>\n              <h6 class=\"card-title\">{{activeLocation.category}}</h6>\n              <p class=\"card-text\">{{activeLocation.description}}</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Close</button>\n        </div>\n      </ng-template>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/journey/journey-detail/journey-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/journey/journey-detail/journey-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: JourneyDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JourneyDetailComponent", function() { return JourneyDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_journey_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/journey.service */ "./src/app/services/journey.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_services_city_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/city.service */ "./src/app/services/city.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");







var JourneyDetailComponent = /** @class */ (function () {
    function JourneyDetailComponent(router, currentRoute, journeyService, modalService, cityService, toastr) {
        this.router = router;
        this.currentRoute = currentRoute;
        this.journeyService = journeyService;
        this.modalService = modalService;
        this.cityService = cityService;
        this.toastr = toastr;
        this.edit = false;
        this.delete = false;
    }
    JourneyDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.currentRoute.params.subscribe(function (params) {
            _this.journeyId = params.id;
        });
        console.log(this.journeyId);
        this.journeyService.getJourneyById(this.journeyId).subscribe(function (res) {
            var jsonResponse = res;
            _this.activeJourney = jsonResponse;
            _this.locations = _this.activeJourney.locations;
            console.log(_this.activeJourney);
        });
    };
    JourneyDetailComponent.prototype.toggleEdit = function () {
        this.edit = true;
    };
    JourneyDetailComponent.prototype.toggleDelete = function () {
        this.delete = true;
    };
    JourneyDetailComponent.prototype.update = function () {
        var _this = this;
        var update = {
            description: this.journey_description
        };
        this.journeyService.updateJourney(this.journeyId, update).subscribe(function (res) {
            console.log(res);
            _this.edit = false;
            _this.ngOnInit();
        });
    };
    JourneyDetailComponent.prototype.deleteJourney = function () {
        if (this.confirm_string === this.activeJourney.name) {
            this.journeyService.deleteJourney(this.activeJourney._id).subscribe(function (res) {
                console.log(res);
            });
            this.toastr.success('Journey deleted successfully', 'Successfully', {
                easing: 'ease-in', easeTime: 300
            });
            this.router.navigate(['/']);
        }
        else {
            this.toastr.warning('Please fill in the correct journey name to confirm deleting this journey', 'Invalid', {
                easing: 'ease-in', easeTime: 300
            });
        }
    };
    JourneyDetailComponent.prototype.deleteLocation = function (i, f) {
        this.journeyService.deleteLocation(f, this.journeyId).subscribe(function (journey) {
            console.log(journey + 'deleted');
        });
        this.locations.splice(i, 1);
        console.log(this.locations);
    };
    JourneyDetailComponent.prototype.openVenue = function (content, f) {
        var _this = this;
        this.activeLocation = f;
        this.modalService.open(content, { centered: true, size: 'sm' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    JourneyDetailComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    JourneyDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-journey-detail',
            template: __webpack_require__(/*! ./journey-detail.component.html */ "./src/app/journey/journey-detail/journey-detail.component.html"),
            styles: [__webpack_require__(/*! ./journey-detail.component.css */ "./src/app/journey/journey-detail/journey-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_journey_service__WEBPACK_IMPORTED_MODULE_3__["JourneyService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"], src_app_services_city_service__WEBPACK_IMPORTED_MODULE_5__["CityService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], JourneyDetailComponent);
    return JourneyDetailComponent;
}());



/***/ }),

/***/ "./src/app/journey/journey-form/journey-form/journey-form.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/journey/journey-form/journey-form/journey-form.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    height: 80vh;\r\n    width: 75vw;\r\n    background-color: rgba(34, 59, 91, 1);\r\n    padding: 0;\r\n    margin: auto;\r\n    margin-top: 75px;\r\n    border-radius: 20px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.btn-confirm{\r\n  background-color: #68BE9A;\r\n  color: white;\r\n  align-self: flex-start;\r\n  letter-spacing: 1px;\r\n  margin: auto;\r\n  margin-bottom: 50px;\r\n  padding: 10px;\r\n  border-radius: 20px;\r\n}\r\n\r\n.page-header{\r\n    padding: 25px;\r\n    text-align: center;\r\n    color: white;\r\n    letter-spacing: 2px;\r\n    border-bottom: #f1f1f1 1px solid;\r\n}\r\n\r\nform{\r\n    max-height: 100%;\r\n    width: 40%;\r\n    margin: auto;\r\n  }\r\n\r\n@media screen and (max-width: 900px){\r\n    .container{\r\n      height: -webkit-max-content;\r\n      height: -moz-max-content;\r\n      height: max-content;\r\n      width: 90vw;\r\n      margin-bottom: 50px;\r\n    }\r\n\r\n    form{\r\n      width: 80%;\r\n      height: -webkit-max-content;\r\n      height: -moz-max-content;\r\n      height: max-content;\r\n      padding: 20px;\r\n    }\r\n\r\n    .card-container{\r\n      display: block;\r\n    }\r\n\r\n    .locations-list{\r\n      margin: 0px !important;\r\n    }\r\n\r\n    .btn.btn-view{\r\n      margin-right: 5px;\r\n    }\r\n\r\n    .title{\r\n      font-size: 14px;\r\n    }\r\n  }\r\n\r\n.form-control{\r\n    border-radius: 20px;\r\n    margin-bottom: 20px;\r\n    padding: 25px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.form-group > label{\r\n  color: white;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n::-webkit-inner-spin-button { \r\n  display:none;\r\n}\r\n\r\n.btn.btn-success{\r\n    font-size: 20px;\r\n    letter-spacing: 1px;\r\n    margin: auto;\r\n    background-color: #68BE9A;\r\n    border-radius: 20px;\r\n  }\r\n\r\n.btn.btn-success:hover{\r\n    background-color: #A0F0A8;\r\n    border-radius: 20px;\r\n  }\r\n\r\n.locations-list{\r\n    max-height: 80%;\r\n    align-self: center;\r\n    width: 100%;\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n    margin: 20px;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n/* width */\r\n\r\n::-webkit-scrollbar {\r\n  \r\n  width: 10px;\r\n}\r\n\r\n::-webkit-scr\r\n\r\n/* Track */\r\n::-webkit-scrollbar-track {\r\n  background: #f1f1f1; \r\n  box-shadow: inset 0 0 5px grey; \r\n  border-radius: 10px;\r\n  background-clip: padding-box;\r\n}\r\n\r\n/* Handle */\r\n\r\n::-webkit-scrollbar-thumb {\r\n\r\n  background: #68BE9A;\r\n  opacity: 0.3;\r\n  border-radius: 10px;\r\n}\r\n\r\n/* Handle on hover */\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: #A0F0A8; \r\n  \r\n}\r\n\r\n.card-container{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    align-items: baseline;\r\n  }\r\n\r\n.custom-card{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    margin: 20px;\r\n    background-color: rgb(36, 131, 140);\r\n    color: white;\r\n    border-radius: 20px;\r\n    width: 100%;\r\n    margin-right: 10px;\r\n    margin-left: 10px;\r\n    padding: 20px;\r\n    height: -webkit-max-content;\r\n    height: -moz-max-content;\r\n    height: max-content;\r\n  }\r\n\r\n.flex-title{\r\n    width: 60%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    min-height: -webkit-max-content;\r\n    min-height: -moz-max-content;\r\n    min-height: max-content;\r\n  }\r\n\r\n.btn.btn-view{\r\n    background-color:  #68BE9A;\r\n    color: white;\r\n    height: -webkit-max-content;\r\n    height: -moz-max-content;\r\n    height: max-content;\r\n  }\r\n\r\n.btn.btn-add{\r\n    background-color: rgb(160, 239, 168);\r\n    color: white;\r\n    height: -webkit-max-content;\r\n    height: -moz-max-content;\r\n    height: max-content;\r\n  }\r\n\r\n.card-img{\r\n    margin: auto;\r\n    max-width: 100%;\r\n    max-height: 350px;\r\n    border-top-right-radius: 20px;\r\n    border-top-left-radius: 20px;\r\n  }\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam91cm5leS9qb3VybmV5LWZvcm0vam91cm5leS1mb3JtL2pvdXJuZXktZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsV0FBVztJQUNYLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsZ0JBQWdCO0NBQ25COztBQUVEO0VBQ0UsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLG9CQUFvQjtDQUNyQjs7QUFFRDtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixpQ0FBaUM7Q0FDcEM7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGFBQWE7R0FDZDs7QUFFRDtJQUNFO01BQ0UsNEJBQW9CO01BQXBCLHlCQUFvQjtNQUFwQixvQkFBb0I7TUFDcEIsWUFBWTtNQUNaLG9CQUFvQjtLQUNyQjs7SUFFRDtNQUNFLFdBQVc7TUFDWCw0QkFBb0I7TUFBcEIseUJBQW9CO01BQXBCLG9CQUFvQjtNQUNwQixjQUFjO0tBQ2Y7O0lBRUQ7TUFDRSxlQUFlO0tBQ2hCOztJQUVEO01BQ0UsdUJBQXVCO0tBQ3hCOztJQUVEO01BQ0Usa0JBQWtCO0tBQ25COztJQUVEO01BQ0UsZ0JBQWdCO0tBQ2pCO0dBQ0Y7O0FBR0Q7SUFDRSxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCw2RUFBNkU7Q0FDaEY7O0FBRUQ7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLG9CQUFvQjtHQUNyQjs7QUFFRDtJQUNFLDBCQUEwQjtJQUMxQixvQkFBb0I7R0FDckI7O0FBRUQ7SUFDRSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixvQkFBb0I7R0FDckI7O0FBRUQsV0FBVzs7QUFDYjs7RUFFRSxZQUFZO0NBQ2I7O0FBRUQ7Ozs7RUFJRSxvQkFBb0I7RUFDcEIsK0JBQStCO0VBQy9CLG9CQUFvQjtFQUNwQiw2QkFBNkI7Q0FDOUI7O0FBRUQsWUFBWTs7QUFDWjs7RUFFRSxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLG9CQUFvQjtDQUNyQjs7QUFFRCxxQkFBcUI7O0FBQ3JCO0VBQ0Usb0JBQW9COztDQUVyQjs7QUFFQztJQUNFLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsOEJBQThCO0lBQzlCLHNCQUFzQjtHQUN2Qjs7QUFFRDtJQUNFLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsK0JBQStCO0lBQy9CLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsNEJBQW9CO0lBQXBCLHlCQUFvQjtJQUFwQixvQkFBb0I7R0FDckI7O0FBRUQ7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsZ0NBQXdCO0lBQXhCLDZCQUF3QjtJQUF4Qix3QkFBd0I7R0FDekI7O0FBRUQ7SUFDRSwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLDRCQUFvQjtJQUFwQix5QkFBb0I7SUFBcEIsb0JBQW9CO0dBQ3JCOztBQUVEO0lBQ0UscUNBQXFDO0lBQ3JDLGFBQWE7SUFDYiw0QkFBb0I7SUFBcEIseUJBQW9CO0lBQXBCLG9CQUFvQjtHQUNyQjs7QUFFRDtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5Qiw2QkFBNkI7R0FDOUIiLCJmaWxlIjoic3JjL2FwcC9qb3VybmV5L2pvdXJuZXktZm9ybS9qb3VybmV5LWZvcm0vam91cm5leS1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgd2lkdGg6IDc1dnc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM0LCA1OSwgOTEsIDEpO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5idG4tY29uZmlybXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjhCRTlBO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4ucGFnZS1oZWFkZXJ7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGJvcmRlci1ib3R0b206ICNmMWYxZjEgMXB4IHNvbGlkO1xyXG59XHJcblxyXG5mb3Jte1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCl7XHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gICAgICB3aWR0aDogOTB2dztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIH1cclxuXHJcbiAgICBmb3Jte1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWNvbnRhaW5lcntcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvY2F0aW9ucy1saXN0e1xyXG4gICAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4uYnRuLXZpZXd7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50aXRsZXtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC5mb3JtLWNvbnRyb2x7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCA+IGxhYmVse1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24geyBcclxuICBkaXNwbGF5Om5vbmU7XHJcbn1cclxuXHJcbi5idG4uYnRuLXN1Y2Nlc3N7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY4QkU5QTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4uYnRuLXN1Y2Nlc3M6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTBGMEE4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB9XHJcblxyXG4gIC5sb2NhdGlvbnMtbGlzdHtcclxuICAgIG1heC1oZWlnaHQ6IDgwJTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcblxyXG4gIC8qIHdpZHRoICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIFxyXG4gIHdpZHRoOiAxMHB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2NyXHJcblxyXG4vKiBUcmFjayAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxOyBcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IGdyZXk7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxufVxyXG5cclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG5cclxuICBiYWNrZ3JvdW5kOiAjNjhCRTlBO1xyXG4gIG9wYWNpdHk6IDAuMztcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI0EwRjBBODsgXHJcbiAgXHJcbn1cclxuXHJcbiAgLmNhcmQtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tY2FyZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM2LCAxMzEsIDE0MCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gIH1cclxuICBcclxuICAuZmxleC10aXRsZXtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWluLWhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICAuYnRuLmJ0bi12aWV3e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICM2OEJFOUE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gIH1cclxuXHJcbiAgLmJ0bi5idG4tYWRke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MCwgMjM5LCAxNjgpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICB9XHJcblxyXG4gIC5jYXJkLWltZ3tcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDM1MHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gIH1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/journey/journey-form/journey-form/journey-form.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/journey/journey-form/journey-form/journey-form.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!toggled\" class=\"container\">\n  <form (submit)=\"onJourneySubmit()\">\n    <h4 class=\"page-header\">Please fill in the details of your new journey</h4>\n    <div class=\"form-group\">\n      <label>Name</label>\n      <input type=\"text\" [(ngModel)]=\"journey_name\" name=\"journey_name\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Departure Date</label>\n      <input type=\"date\" max=\"3000-12-31\" min=\"1000-01-01\" [(ngModel)]=\"journey_departure_date\"\n        name=\"journey_departure_date\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Return Date</label>\n      <input type=\"date\" max=\"3000-12-31\" min=\"1000-01-01\" [(ngModel)]=\"journey_return_date\" name=\"journey_return_date\"\n        class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Description</label>\n      <textarea [(ngModel)]=\"journey_description\" name=\"journey_description\" class=\"form-control\"></textarea>\n    </div>\n    <input type=\"submit\" class=\"btn btn-success\" value=\"Next step\">\n  </form>\n</div>\n\n<div *ngIf=\"toggled\" class=\"container\">\n  <div class=\"locations-list\">\n    <div id=\"hide\" class=\"card-container\" *ngFor=\"let f of foundLocations; let i = index\">\n      <div class=\"custom-card\">\n        <div class=\"flex-title\">\n          <h5 class=\"title\">{{f.venue.name}}</h5>\n        </div>\n        <button class=\"btn btn-view\" (click)=\"openVenue(content,f.venue.id)\">VIEW</button>\n        <button class=\"btn btn-add\" (click)=\"addLocation(i,f.venue)\">ADD</button>\n      </div>\n    </div>\n  </div>\n    <button id=\"test\" class=\"btn btn-confirm\" (click)=\"confirmed()\" routerLink='/'>Confirm</button>\n</div>\n\n<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">City Locations</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div *ngIf=\"activeVenue\" class=\"modal-body\">\n    <div class=\"card\">\n      <img class=\"card-img\" src=\"{{activeVenue.bestPhoto.prefix}}300x500{{activeVenue.bestPhoto.suffix}}\"\n        alt=\"Card image cap\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{activeVenue.name}}</h5>\n        <p class=\"card-text\">{{activeVenue.description}}</p>\n        <h6 class=\"card-title\">{{activeVenue.location.address}}, {{activeVenue.location.city}}</h6>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Close</button>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/journey/journey-form/journey-form/journey-form.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/journey/journey-form/journey-form/journey-form.component.ts ***!
  \*****************************************************************************/
/*! exports provided: JourneyFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JourneyFormComponent", function() { return JourneyFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_journey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/journey.service */ "./src/app/services/journey.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_city_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/city.service */ "./src/app/services/city.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_services_validate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");









var JourneyFormComponent = /** @class */ (function () {
    function JourneyFormComponent(cityService, journeyService, authService, currentRoute, modalService, validateService, toastr) {
        this.cityService = cityService;
        this.journeyService = journeyService;
        this.authService = authService;
        this.currentRoute = currentRoute;
        this.modalService = modalService;
        this.validateService = validateService;
        this.toastr = toastr;
        this.toggled = false;
    }
    JourneyFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            var jsonResponse = profile;
            _this.user_id = jsonResponse._id;
            console.log(_this.user_id);
        });
        this.sub = this.currentRoute.params.subscribe(function (params) {
            _this.currentCity = params.cityName;
        });
        console.log(this.currentCity);
        this.cityService.getFourSquareLocations(this.currentCity).subscribe(function (res) {
            var jsonResponse = res;
            _this.foundLocations = jsonResponse.response.groups[0].items;
            console.log(_this.foundLocations);
        });
    };
    JourneyFormComponent.prototype.delete = function (i, f) {
    };
    JourneyFormComponent.prototype.toggle = function () {
        this.toggled = true;
    };
    JourneyFormComponent.prototype.untoggle = function () {
        this.toggled = false;
    };
    JourneyFormComponent.prototype.onJourneySubmit = function () {
        var _this = this;
        var new_journey = {
            name: this.journey_name,
            departure_date: this.journey_departure_date,
            return_date: this.journey_return_date,
            description: this.journey_description,
            city: this.currentCity
        };
        //Validate fields
        if (!this.validateService.validateForm(new_journey)) {
            this.toastr.warning('Please fill in all the fields', 'Invalid', {
                easing: 'ease-in', easeTime: 300
            });
            return false;
        }
        var id = this.user_id;
        this.journeyService.addJourney(new_journey).subscribe(function (journey) {
            if (journey) {
                _this.currentJourney = journey;
                _this.journeyService.addJourneyToUser(journey, id).subscribe(function (user) {
                    if (user) {
                        _this.authService.getProfile().subscribe(function (profile) {
                            _this.toastr.success('Created your journey!', 'Success', {
                                easing: 'ease-in', easeTime: 300
                            });
                        });
                        //clear Form
                        _this.journey_name = '';
                        _this.journey_departure_date = new Date();
                        _this.journey_return_date = new Date();
                        _this.journey_description = '';
                        _this.toggle();
                    }
                    else {
                        _this.untoggle();
                        _this.toastr.error('Failed to create journey', 'Failed', {
                            easing: 'ease-in', easeTime: 300
                        });
                        // this.flashMessage.show("Failed to add!", {cssClass: 'alert-danger', timeout: 3000});
                    }
                });
            }
        });
    };
    JourneyFormComponent.prototype.addLocation = function (i, f) {
        var _this = this;
        this.cityService.getFourSquareVenue(f.id).subscribe(function (res) {
            var jsonResponse = res;
            console.log(jsonResponse);
            var newLocation = {
                name: jsonResponse.response.venue.name,
                address: jsonResponse.response.venue.location.address,
                category: jsonResponse.response.venue.categories[0].name,
                description: jsonResponse.response.venue.description,
                imagePath: jsonResponse.response.venue.bestPhoto.prefix + '300x500' + jsonResponse.response.venue.bestPhoto.suffix
            };
            if (newLocation.description == undefined) {
                newLocation.description = 'No description';
            }
            // console.log(newLocation);
            // console.log(this.currentJourney);
            _this.journeyService.addLocationToJourney(newLocation, _this.currentJourney).subscribe(function (res) {
                if (res) {
                    _this.toastr.success('Location added to your journey!', 'Success', {
                        easing: 'ease-in', easeTime: 300
                    });
                }
                else {
                    _this.toastr.error('Failed to add location!', 'Failed', {
                        easing: 'ease-in', easeTime: 300
                    });
                }
            });
        });
        this.foundLocations.splice(i, 1);
        console.log(this.foundLocations);
    };
    JourneyFormComponent.prototype.confirmed = function () {
        this.toastr.success('Your journey is created successfully!', 'Success', {
            easing: 'ease-in', easeTime: 300
        });
    };
    JourneyFormComponent.prototype.openVenue = function (content, venueId) {
        var _this = this;
        this.cityService.getFourSquareVenue(venueId).subscribe(function (res) {
            var jsonResponse = res;
            _this.activeVenue = jsonResponse.response.venue;
            console.log(_this.activeVenue);
        });
        this.modalService.open(content, { centered: true }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    JourneyFormComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    JourneyFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-journey-form',
            template: __webpack_require__(/*! ./journey-form.component.html */ "./src/app/journey/journey-form/journey-form/journey-form.component.html"),
            styles: [__webpack_require__(/*! ./journey-form.component.css */ "./src/app/journey/journey-form/journey-form/journey-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_city_service__WEBPACK_IMPORTED_MODULE_5__["CityService"], src_app_services_journey_service__WEBPACK_IMPORTED_MODULE_2__["JourneyService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"], src_app_services_validate_service__WEBPACK_IMPORTED_MODULE_7__["ValidateService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]])
    ], JourneyFormComponent);
    return JourneyFormComponent;
}());



/***/ }),

/***/ "./src/app/journey/journey.component.css":
/*!***********************************************!*\
  !*** ./src/app/journey/journey.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    height: 75vh;\r\n    width: 75vw;\r\n    background-color: rgba(34, 59, 91, 1);\r\n    padding: 0;\r\n    margin: auto;\r\n    margin-top: 75px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.container.container-search{\r\n    display: grid;\r\n    grid-template-columns: 50% 50%;\r\n}\r\n\r\n.container-journey{\r\n  display: flex;\r\n  flex-direction: row;\r\n  height: 80%;\r\n  max-height: 80%;\r\n}\r\n\r\n/* Grid-Left */\r\n\r\n.grid-left{\r\n    border-top-left-radius: 20px;\r\n    border-bottom-left-radius: 20px;\r\n}\r\n\r\n.container-header{\r\n    text-align: center;\r\n    letter-spacing: 2px;\r\n    color: white;\r\n    padding: 15px;\r\n}\r\n\r\n/* SEARCH */\r\n\r\n.flexbox {\r\n    background: inherit;\r\n    width: inherit;\r\n    height: 20%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-left:20px;\r\n    margin-right:20px;\r\n  }\r\n\r\n.search > form {\r\n    display: inline-block;\r\n    position: relative;\r\n  }\r\n\r\n.search > form:after {\r\n    content: \"\";\r\n    background: #68BE9A;\r\n    width: 8px;\r\n    height: 40px;\r\n    position: absolute;\r\n    top: 40px;\r\n    right: -10px;\r\n    -webkit-transform: rotate(135deg);\r\n            transform: rotate(135deg);\r\n    box-shadow: 1px 0 #0091c2;\r\n  }\r\n\r\n.search > form > input {\r\n    color: white;\r\n    font-size: 16px;\r\n    background: rgba(34, 59, 91, 1);\r\n    width: 50px;\r\n    height: 50px;\r\n    padding: 10px;\r\n    border: solid 3px #68BE9A;\r\n    outline: none;\r\n    border-radius: 35px;\r\n    box-shadow: 0 1px #0091c2;\r\n    transition: width 0.5s;\r\n  }\r\n\r\n.search > form > input::-webkit-input-placeholder {\r\n    color: #efefef;\r\n    opacity: 1;\r\n  }\r\n\r\n.search > form > input::-ms-input-placeholder {\r\n    color: #efefef;\r\n    opacity: 1;\r\n  }\r\n\r\n.search > form > input::placeholder {\r\n    color: #efefef;\r\n    opacity: 1;\r\n  }\r\n\r\n.search > form > input::-ms-placeholder {\r\n    color: #efefef;\r\n  }\r\n\r\n.search > form > input::-ms-input-placeholder {\r\n    color: #efefef;\r\n  }\r\n\r\n.search > form > input:focus,\r\n  .search > form > input:valid,\r\n  .search > form > input:active {\r\n    width: 250px;\r\n    background-color:rgba(34, 59, 91, 1) !important;\r\n  }\r\n\r\n/* END SEARCH */\r\n\r\n.results{\r\n      height: inherit;\r\n      width: 100%;\r\n  }\r\n\r\n.cityResult{\r\n      padding: 50px;\r\n      margin-left: 20px;\r\n      margin-right: 20px;\r\n      color: white;\r\n      letter-spacing: 2px;\r\n  }\r\n\r\n.cityResult>div{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-evenly;\r\n  }\r\n\r\n.found-btn{\r\n    color: #A0F0A8;\r\n    transition: 0.4s ease;\r\n  }\r\n\r\n.found-btn:hover{\r\n    font-size: 30px;\r\n    letter-spacing: 3px;\r\n  }\r\n\r\n.btn.btn-result:hover,.btn.btn-result:active,.btn.btn-result:focus{\r\n    background-color: #A0F0A8;\r\n    color: rgba(0, 0, 0, 0.4);\r\n  }\r\n\r\n/* Form */\r\n\r\n.grid-form{\r\n    height: 100%;\r\n    width: 40%;\r\n    padding: 50px;\r\n    padding-top: 0px;\r\n    padding-bottom: 0px;\r\n    border-right: #68BE9A solid 1px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n\r\n  }\r\n\r\n.page-header{\r\n    padding-bottom: 25px;\r\n    text-align: center;\r\n    color: white;\r\n    letter-spacing: 2px;\r\n    border-bottom: #f1f1f1 1px solid;\r\n\r\n}\r\n\r\n.btn.btn-success{\r\n  margin: 20px;\r\n  background-color: #68BE9A;\r\n  border-radius: 20px;\r\n}\r\n\r\n.btn.btn-success:hover{\r\n  margin: 20px;\r\n  background-color: #A0F0A8;\r\n  border-radius: 20px;\r\n}\r\n\r\n.return{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n}\r\n\r\n.btn-return{\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n  color: #68BE9A;\r\n  padding: 25px;\r\n}\r\n\r\n.btn-return > fa{\r\n  margin-left: 0;\r\n}\r\n\r\n.btn-return:hover{\r\n  background-color: transparent;\r\n}\r\n\r\n/* END Grid-Left */\r\n\r\n/* Grid-Right */\r\n\r\n.grid-right{\r\n    background-image: url('https://i1.wp.com/www.martijnmureau.nl/wp-content/uploads/2017/02/portfolio_header_breda.jpg?fit=1600%2C900&ssl=1');\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    border-top-right-radius: 20px;\r\n    border-bottom-right-radius: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n\r\n}\r\n\r\n.grid-r-header{\r\n    color: white;\r\n    text-align: center;\r\n    letter-spacing: 2px;\r\n    z-index: 2;\r\n}\r\n\r\n.btn-suggest {\r\n    background-color: rgba(255, 255, 255, 0);\r\n    border-color: white;\r\n    color: white;\r\n    margin:auto;\r\n    margin-top: 50px;\r\n    padding: 20px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.btn-suggest:hover{\r\n  background-color: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n@media screen and (max-width: 900px){\r\n\r\n  .container{\r\n    max-width: 80vw;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .container.container-search{\r\n    grid-template-columns: auto;\r\n    width: 100%;\r\n    max-height: 60vh;\r\n  }\r\n  \r\n  /* #suggestion, .grid-r-header, .btn-suggest, hr{\r\n    display: none;\r\n  }\r\n*/\r\n  .grid-left{\r\n    max-width: 100%;\r\n \r\n  }\r\n\r\n  .grid-right{\r\n    display: none;\r\n  }\r\n  \r\n  .results{\r\n    max-width: 100%;\r\n  }\r\n\r\n  .cityResult {\r\n    height: 75%;\r\n    padding: 20px;\r\n  }\r\n\r\n  .cityResult>h4{\r\n    font-size: 15px;\r\n  }\r\n\r\n  .found-btn{\r\n    font-size: 20px;\r\n  }\r\n\r\n  .found-btn:hover{\r\n    text-decoration: underline;\r\n    letter-spacing: 2px;\r\n    font-size: 20px;\r\n  }\r\n\r\n  .container-toggled{\r\n    height: -webkit-max-content;\r\n    height: -moz-max-content;\r\n    height: max-content;\r\n  }\r\n  .container-journey{\r\n    flex-direction: column;\r\n    height: 100%;\r\n    \r\n  }\r\n  .grid-form{\r\n    width: 100%;\r\n    padding: 0px;\r\n    padding-bottom: 20px;\r\n    margin-bottom: 50px;\r\n    border-bottom: #f1f1f1 1px solid;\r\n    border-right: none ;\r\n  }\r\n  .page-header{\r\n    border: none;\r\n  }\r\n\r\n  .grid-locations{\r\n    width: 100% !important;\r\n    padding: 1px !important; \r\n    padding-bottom: 20px !important;\r\n  }\r\n\r\n  .locations-list{\r\n    width: 100%;\r\n    margin-right: 5px !important;\r\n    padding-left: 0px !important;\r\n    padding-right: 15px !important;\r\n  }\r\n\r\n  .custom-card{\r\n    margin-right:5px !important;\r\n  }\r\n\r\n  .custom-card.btn{\r\n    padding: 5px;\r\n    font-size: 14px;\r\n  }\r\n\r\n  .title{\r\n    font-size: 15px;\r\n  }\r\n}\r\n\r\n/* Gird-Right Locations */\r\n\r\n.grid-locations{\r\n  height: 100%;\r\n  width: 60%;\r\n  padding-right: 10px;\r\n  padding-left: 10px;\r\n  \r\n}\r\n\r\n.grid-locations > .page-header{\r\n  border-bottom: 0px;\r\n}\r\n\r\n.locations-list{\r\n  max-height: 500px;\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\r\n  padding-left: 50px;\r\n  padding-right: 50px;\r\n}\r\n\r\n.custom-card{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  margin: 10px;\r\n  background-color: #68BE9A;\r\n  color: white;\r\n  border-radius: 20px;\r\n  width: 100%;\r\n  padding: 20px;\r\n  height: -webkit-max-content;\r\n  height: -moz-max-content;\r\n  height: max-content;\r\n}\r\n\r\n.flex-title{\r\n  width: 60%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.flex-buttons{\r\n  width: 40%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n}\r\n\r\n.title{\r\n  letter-spacing: 2px;\r\n  float: left;\r\n}\r\n\r\n.custom-card .btn{\r\n  background-color: #25838C;\r\n  color: white;\r\n  float: right;\r\n  cursor: pointer;\r\n}\r\n\r\n.card-img{\r\n  margin: auto;\r\n  max-width: 100%;\r\n  max-height: 350px;\r\n  border-top-right-radius: 20px;\r\n  border-top-left-radius: 20px;\r\n}\r\n\r\n/* width */\r\n\r\n::-webkit-scrollbar {\r\n  \r\n  width: 10px;\r\n}\r\n\r\n::-webkit-scr\r\n\r\n/* Track */\r\n::-webkit-scrollbar-track {\r\n  background: #f1f1f1; \r\n  box-shadow: inset 0 0 5px grey; \r\n  border-radius: 10px;\r\n  background-clip: padding-box;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n/* Handle */\r\n\r\n::-webkit-scrollbar-thumb {\r\n\r\n  background: #68BE9A;\r\n  opacity: 0.3;\r\n  border-radius: 10px;\r\n}\r\n\r\n/* Handle on hover */\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: #A0F0A8; \r\n  \r\n}\r\n\r\n/* END Grid-Right */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam91cm5leS9qb3VybmV5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHNDQUFzQztJQUN0QyxXQUFXO0lBQ1gsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QsK0JBQStCO0NBQ2xDOztBQUVEO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osZ0JBQWdCO0NBQ2pCOztBQUVELGVBQWU7O0FBRWY7SUFDSSw2QkFBNkI7SUFDN0IsZ0NBQWdDO0NBQ25DOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsY0FBYztDQUNqQjs7QUFFRCxZQUFZOztBQUVaO0lBQ0ksb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixZQUFZO0lBQ1osY0FBYztJQUNkLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtHQUNuQjs7QUFHRDtJQUNFLHNCQUFzQjtJQUN0QixtQkFBbUI7R0FDcEI7O0FBRUQ7SUFDRSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixhQUFhO0lBQ2Isa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQiwwQkFBMEI7R0FDM0I7O0FBSUQ7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsdUJBQXVCO0dBQ3hCOztBQUVEO0lBQ0UsZUFBZTtJQUNmLFdBQVc7R0FDWjs7QUFIRDtJQUNFLGVBQWU7SUFDZixXQUFXO0dBQ1o7O0FBSEQ7SUFDRSxlQUFlO0lBQ2YsV0FBVztHQUNaOztBQUVEO0lBQ0UsZUFBZTtHQUNoQjs7QUFFRDtJQUNFLGVBQWU7R0FDaEI7O0FBRUQ7OztJQUdFLGFBQWE7SUFDYixnREFBZ0Q7R0FDakQ7O0FBR0QsZ0JBQWdCOztBQUVoQjtNQUNJLGdCQUFnQjtNQUNoQixZQUFZO0dBQ2Y7O0FBRUQ7TUFDSSxjQUFjO01BQ2Qsa0JBQWtCO01BQ2xCLG1CQUFtQjtNQUNuQixhQUFhO01BQ2Isb0JBQW9CO0dBQ3ZCOztBQUVEO0lBQ0UsY0FBYztJQUNkLG9CQUFvQjtJQUNwQiw4QkFBOEI7R0FDL0I7O0FBRUQ7SUFDRSxlQUFlO0lBQ2Ysc0JBQXNCO0dBQ3ZCOztBQUVEO0lBQ0UsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtHQUNyQjs7QUFJRDtJQUNFLDBCQUEwQjtJQUMxQiwwQkFBMEI7R0FDM0I7O0FBRUQsVUFBVTs7QUFFVjtJQUNFLGFBQWE7SUFDYixXQUFXO0lBQ1gsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsZ0NBQWdDO0lBQ2hDLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsd0JBQXdCOztHQUV6Qjs7QUFHRDtJQUNFLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixpQ0FBaUM7O0NBRXBDOztBQUVEO0VBQ0UsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsNEJBQTRCO0NBQzdCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLE9BQU87RUFDUCxRQUFRO0VBQ1IsZUFBZTtFQUNmLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSw4QkFBOEI7Q0FDL0I7O0FBRUQsbUJBQW1COztBQUdqQixnQkFBZ0I7O0FBRWxCO0lBQ0ksMklBQTJJO0lBQzNJLHFCQUFrQjtPQUFsQixrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLGlDQUFpQztJQUNqQyxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLHdCQUF3Qjs7Q0FFM0I7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSx5Q0FBeUM7SUFDekMsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxvQkFBb0I7Q0FDdkI7O0FBRUQ7RUFDRSwyQ0FBMkM7Q0FDNUM7O0FBRUQ7O0VBRUU7SUFDRSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0dBQ3JCOztFQUVEO0lBQ0UsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixpQkFBaUI7R0FDbEI7O0VBRUQ7OztFQUdBO0VBQ0E7SUFDRSxnQkFBZ0I7O0dBRWpCOztFQUVEO0lBQ0UsY0FBYztHQUNmOztFQUVEO0lBQ0UsZ0JBQWdCO0dBQ2pCOztFQUVEO0lBQ0UsWUFBWTtJQUNaLGNBQWM7R0FDZjs7RUFFRDtJQUNFLGdCQUFnQjtHQUNqQjs7RUFFRDtJQUNFLGdCQUFnQjtHQUNqQjs7RUFFRDtJQUNFLDJCQUEyQjtJQUMzQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0dBQ2pCOztFQUVEO0lBQ0UsNEJBQW9CO0lBQXBCLHlCQUFvQjtJQUFwQixvQkFBb0I7R0FDckI7RUFDRDtJQUNFLHVCQUF1QjtJQUN2QixhQUFhOztHQUVkO0VBQ0Q7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsaUNBQWlDO0lBQ2pDLG9CQUFvQjtHQUNyQjtFQUNEO0lBQ0UsYUFBYTtHQUNkOztFQUVEO0lBQ0UsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixnQ0FBZ0M7R0FDakM7O0VBRUQ7SUFDRSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3QiwrQkFBK0I7R0FDaEM7O0VBRUQ7SUFDRSw0QkFBNEI7R0FDN0I7O0VBRUQ7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0dBQ2pCOztFQUVEO0lBQ0UsZ0JBQWdCO0dBQ2pCO0NBQ0Y7O0FBR0QsMEJBQTBCOztBQUUxQjtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLG1CQUFtQjs7Q0FFcEI7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQiwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixjQUFjO0VBQ2QsNEJBQW9CO0VBQXBCLHlCQUFvQjtFQUFwQixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLHVCQUF1QjtFQUN2Qix3QkFBd0I7Q0FDekI7O0FBRUQ7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLG9CQUFvQjtFQUNwQiw4QkFBOEI7Q0FDL0I7O0FBRUQ7RUFDRSxvQkFBb0I7RUFDcEIsWUFBWTtDQUNiOztBQUVEO0VBQ0UsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixhQUFhO0VBQ2IsZ0JBQWdCO0NBQ2pCOztBQUdEO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLDZCQUE2QjtDQUM5Qjs7QUFFRCxXQUFXOztBQUNYOztFQUVFLFlBQVk7Q0FDYjs7QUFFRDs7OztFQUlFLG9CQUFvQjtFQUNwQiwrQkFBK0I7RUFDL0Isb0JBQW9CO0VBQ3BCLDZCQUE2QjtFQUM3QixtQkFBbUI7Q0FDcEI7O0FBRUQsWUFBWTs7QUFDWjs7RUFFRSxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLG9CQUFvQjtDQUNyQjs7QUFFRCxxQkFBcUI7O0FBQ3JCO0VBQ0Usb0JBQW9COztDQUVyQjs7QUFFRCxvQkFBb0IiLCJmaWxlIjoic3JjL2FwcC9qb3VybmV5L2pvdXJuZXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDc1dmg7XHJcbiAgICB3aWR0aDogNzV2dztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzQsIDU5LCA5MSwgMSk7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIuY29udGFpbmVyLXNlYXJjaHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XHJcbn1cclxuXHJcbi5jb250YWluZXItam91cm5leXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbiAgbWF4LWhlaWdodDogODAlO1xyXG59XHJcblxyXG4vKiBHcmlkLUxlZnQgKi9cclxuXHJcbi5ncmlkLWxlZnR7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1oZWFkZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLyogU0VBUkNIICovXHJcblxyXG4uZmxleGJveCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICBoZWlnaHQ6IDIwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDoyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5zZWFyY2ggPiBmb3JtIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLnNlYXJjaCA+IGZvcm06YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJhY2tncm91bmQ6ICM2OEJFOUE7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0MHB4O1xyXG4gICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAwICMwMDkxYzI7XHJcbiAgfVxyXG5cclxuXHJcbiAgXHJcbiAgLnNlYXJjaCA+IGZvcm0gPiBpbnB1dCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDM0LCA1OSwgOTEsIDEpO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAzcHggIzY4QkU5QTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggIzAwOTFjMjtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNXM7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2ggPiBmb3JtID4gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjZWZlZmVmO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgXHJcbiAgLnNlYXJjaCA+IGZvcm0gPiBpbnB1dDo6LW1zLXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjZWZlZmVmO1xyXG4gIH1cclxuICBcclxuICAuc2VhcmNoID4gZm9ybSA+IGlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNlZmVmZWY7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2ggPiBmb3JtID4gaW5wdXQ6Zm9jdXMsXHJcbiAgLnNlYXJjaCA+IGZvcm0gPiBpbnB1dDp2YWxpZCxcclxuICAuc2VhcmNoID4gZm9ybSA+IGlucHV0OmFjdGl2ZSB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMzQsIDU5LCA5MSwgMSkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG5cclxuICAvKiBFTkQgU0VBUkNIICovXHJcblxyXG4gIC5yZXN1bHRze1xyXG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmNpdHlSZXN1bHR7XHJcbiAgICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICB9XHJcblxyXG4gIC5jaXR5UmVzdWx0PmRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgfVxyXG5cclxuICAuZm91bmQtYnRue1xyXG4gICAgY29sb3I6ICNBMEYwQTg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XHJcbiAgfVxyXG5cclxuICAuZm91bmQtYnRuOmhvdmVye1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgLmJ0bi5idG4tcmVzdWx0OmhvdmVyLC5idG4uYnRuLXJlc3VsdDphY3RpdmUsLmJ0bi5idG4tcmVzdWx0OmZvY3Vze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0EwRjBBODtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgfVxyXG5cclxuICAvKiBGb3JtICovXHJcblxyXG4gIC5ncmlkLWZvcm17XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgcGFkZGluZzogNTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAjNjhCRTlBIHNvbGlkIDFweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIC5wYWdlLWhlYWRlcntcclxuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGJvcmRlci1ib3R0b206ICNmMWYxZjEgMXB4IHNvbGlkO1xyXG5cclxufVxyXG5cclxuLmJ0bi5idG4tc3VjY2Vzc3tcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY4QkU5QTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uYnRuLmJ0bi1zdWNjZXNzOmhvdmVye1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTBGMEE4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5yZXR1cm57XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmJ0bi1yZXR1cm57XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGNvbG9yOiAjNjhCRTlBO1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbn1cclxuXHJcbi5idG4tcmV0dXJuID4gZmF7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5idG4tcmV0dXJuOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4vKiBFTkQgR3JpZC1MZWZ0ICovXHJcblxyXG5cclxuICAvKiBHcmlkLVJpZ2h0ICovXHJcblxyXG4uZ3JpZC1yaWdodHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9pMS53cC5jb20vd3d3Lm1hcnRpam5tdXJlYXUubmwvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDIvcG9ydGZvbGlvX2hlYWRlcl9icmVkYS5qcGc/Zml0PTE2MDAlMkM5MDAmc3NsPTEnKTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4uZ3JpZC1yLWhlYWRlcntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uYnRuLXN1Z2dlc3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLmJ0bi1zdWdnZXN0OmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpe1xyXG5cclxuICAuY29udGFpbmVye1xyXG4gICAgbWF4LXdpZHRoOiA4MHZ3O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIuY29udGFpbmVyLXNlYXJjaHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogNjB2aDtcclxuICB9XHJcbiAgXHJcbiAgLyogI3N1Z2dlc3Rpb24sIC5ncmlkLXItaGVhZGVyLCAuYnRuLXN1Z2dlc3QsIGhye1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiovXHJcbiAgLmdyaWQtbGVmdHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuIFxyXG4gIH1cclxuXHJcbiAgLmdyaWQtcmlnaHR7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAucmVzdWx0c3tcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jaXR5UmVzdWx0IHtcclxuICAgIGhlaWdodDogNzUlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcblxyXG4gIC5jaXR5UmVzdWx0Pmg0e1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmZvdW5kLWJ0bntcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcblxyXG4gIC5mb3VuZC1idG46aG92ZXJ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyLXRvZ2dsZWR7XHJcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gIH1cclxuICAuY29udGFpbmVyLWpvdXJuZXl7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgXHJcbiAgfVxyXG4gIC5ncmlkLWZvcm17XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIGJvcmRlci1ib3R0b206ICNmMWYxZjEgMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lIDtcclxuICB9XHJcbiAgLnBhZ2UtaGVhZGVye1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmdyaWQtbG9jYXRpb25ze1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDFweCAhaW1wb3J0YW50OyBcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubG9jYXRpb25zLWxpc3R7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1jYXJke1xyXG4gICAgbWFyZ2luLXJpZ2h0OjVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1jYXJkLmJ0bntcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcblxyXG4gIC50aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKiBHaXJkLVJpZ2h0IExvY2F0aW9ucyAqL1xyXG5cclxuLmdyaWQtbG9jYXRpb25ze1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogNjAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIFxyXG59XHJcblxyXG4uZ3JpZC1sb2NhdGlvbnMgPiAucGFnZS1oZWFkZXJ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4ubG9jYXRpb25zLWxpc3R7XHJcbiAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogNTBweDtcclxufVxyXG5cclxuLmN1c3RvbS1jYXJke1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2OEJFOUE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG59XHJcblxyXG4uZmxleC10aXRsZXtcclxuICB3aWR0aDogNjAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZsZXgtYnV0dG9uc3tcclxuICB3aWR0aDogNDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5jdXN0b20tY2FyZCAuYnRue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTgzOEM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4uY2FyZC1pbWd7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiAzNTBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4vKiB3aWR0aCAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICBcclxuICB3aWR0aDogMTBweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjclxyXG5cclxuLyogVHJhY2sgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTsgXHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCBncmV5OyBcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4vKiBIYW5kbGUgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcblxyXG4gIGJhY2tncm91bmQ6ICM2OEJFOUE7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjQTBGMEE4OyBcclxuICBcclxufVxyXG5cclxuLyogRU5EIEdyaWQtUmlnaHQgKi8iXX0= */"

/***/ }),

/***/ "./src/app/journey/journey.component.html":
/*!************************************************!*\
  !*** ./src/app/journey/journey.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!toggled\" class=\"container container-search\">\n  <div class=\"grid-left\">\n    <h2 class=\"container-header\">Search City</h2>\n    <div class=\"flexbox\">\n      <div class=\"search\">\n        <form (submit)=\"searchCity()\" autocomplete=\"off\">\n          <input hidden autocomplete=\"false\">\n          <input id=\"input\" type=\"text\" placeholder=\"       Search . . .\" name=\"search\" [(ngModel)]=\"searchText\"\n            required>\n          <input type=\"submit\" style=\"display:none\" />\n        </form>\n      </div>\n    </div>\n    <div class=\"results\">\n      <div class=\"cityResult\" *ngIf=\"foundCity\">\n          <h4 style=\"text-align:center; padding-bottom:50px; padding-top: 25px;\">Did you mean?</h4>\n        <div>\n          <h3 class=\"found-btn\" style=\"cursor: pointer;\" (click)=\"toggle()\" (click)=\"getLocations()\">{{foundCity.geocode.displayString}}</h3>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"grid-right\">\n    <div id=\"suggestion\" style=\"display:flex; flex-direction: column; justify-content: center;\">\n      <h3 class=\"grid-r-header\">Suggestion of the Day</h3>\n      <hr style=\"width: 50px; border-color: white;\">\n      <h5 class=\"grid-r-header\">Breda, the Netherlands</h5>\n      <button class=\"btn-suggest\" (click)=\"toggleSuggest()\">EXPLORE</button>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"toggled\" class=\"container container-toggled\">\n  <div class=\"return\">\n  <button class=\"btn btn-return\" (click)=\"untoggle()\">\n    <fa name=\"arrow-left\" size=\"2x\"></fa>\n  </button>\n</div>\n  <div *ngIf=\"foundCity\" class=\"container-journey\">\n    <div class=\"grid-form\">\n        <h2 class=\"page-header\">{{foundCity.geocode.displayString}}</h2>\n        <button class=\"btn btn-success\" [routerLink]= \"['/createJourney', foundCity.geocode.displayString]\">Create Journey</button>\n    </div>\n    <div class=\"grid-locations\">\n      <h5 class=\"page-header\">Explore the locations of {{foundCity.geocode.displayString}}:</h5>\n      <div class=\"locations-list\">\n        <div *ngFor=\"let f of foundLocations\" class=\"custom-card\">\n          <div class=\"flex-title\">\n            <h5 class=\"title\">{{f.venue.name}}</h5>\n          </div>\n          <div class=\"flex-buttons\">\n            <a class=\"btn\" (click)=\"openVenue(content,f.venue.id)\">View Details</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <ng-template #content let-modal>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">City Locations</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div *ngIf=\"activeVenue\" class=\"modal-body\">\n      <div class=\"card\">\n        <img class=\"card-img\" src=\"{{activeVenue.bestPhoto.prefix}}300x500{{activeVenue.bestPhoto.suffix}}\"\n          alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{activeVenue.name}}</h5>\n          <p class=\"card-text\">{{activeVenue.description}}</p>\n          <h6 class=\"card-title\">{{activeVenue.location.address}}, {{activeVenue.location.city}}</h6>\n        </div>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Close</button>\n    </div>\n  </ng-template>"

/***/ }),

/***/ "./src/app/journey/journey.component.ts":
/*!**********************************************!*\
  !*** ./src/app/journey/journey.component.ts ***!
  \**********************************************/
/*! exports provided: JourneyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JourneyComponent", function() { return JourneyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_city_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/city.service */ "./src/app/services/city.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");




var JourneyComponent = /** @class */ (function () {
    function JourneyComponent(cityService, modalService) {
        this.cityService = cityService;
        this.modalService = modalService;
        this.suggestCity = "Breda";
        this.toggled = false;
        this.suggestToggled = false;
    }
    JourneyComponent.prototype.ngOnInit = function () {
    };
    JourneyComponent.prototype.searchCity = function () {
        var _this = this;
        console.log(this.searchText);
        this.cityService.getFourSquareCity(this.searchText).subscribe(function (res) {
            var jsonResponse = res;
            _this.foundCity = jsonResponse.response;
            document.getElementById("input").blur();
            console.log(_this.foundCity);
        });
    };
    JourneyComponent.prototype.searchSuggestCity = function () {
        var _this = this;
        this.cityService.getFourSquareCity(this.suggestCity).subscribe(function (res) {
            var jsonResponse = res;
            _this.foundCity = jsonResponse.response;
            _this.getLocations();
            _this.suggestToggled = true;
        });
    };
    JourneyComponent.prototype.getLocations = function () {
        var _this = this;
        this.cityService.getFourSquareLocations(this.foundCity.headerLocation).subscribe(function (res) {
            var jsonResponse = res;
            _this.foundLocations = jsonResponse.response.groups[0].items;
            console.log(_this.foundLocations);
        });
    };
    JourneyComponent.prototype.toggle = function () {
        this.toggled = true;
    };
    JourneyComponent.prototype.toggleSuggest = function () {
        this.searchSuggestCity();
        if (this.suggestToggled = true)
            this.toggled = true;
    };
    JourneyComponent.prototype.untoggle = function () {
        this.toggled = false;
    };
    JourneyComponent.prototype.openVenue = function (content, venueId) {
        var _this = this;
        this.cityService.getFourSquareVenue(venueId).subscribe(function (res) {
            var jsonResponse = res;
            _this.activeVenue = jsonResponse.response.venue;
            console.log(_this.activeVenue);
        });
        this.modalService.open(content, { centered: true }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    JourneyComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    JourneyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-journey',
            template: __webpack_require__(/*! ./journey.component.html */ "./src/app/journey/journey.component.html"),
            styles: [__webpack_require__(/*! ./journey.component.css */ "./src/app/journey/journey.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_city_service__WEBPACK_IMPORTED_MODULE_2__["CityService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], JourneyComponent);
    return JourneyComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid{\r\n min-height: 90vh;\r\n height: -webkit-max-content;\r\n height: -moz-max-content;\r\n height: max-content;\r\n display: flex;\r\n flex-direction: row;\r\n justify-content: center;\r\n}\r\n\r\n.main-grid{\r\n    display: grid;\r\n    grid-template-columns: auto auto auto;\r\n    grid-gap: 25px;\r\n    justify-content: start;\r\n    padding: 150px;\r\n    width: -webkit-max-content;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n}\r\n\r\n.card {\r\n    min-height: 450px;\r\n    max-height: -webkit-max-content;\r\n    max-height: -moz-max-content;\r\n    max-height: max-content;\r\n    min-width: 450px;\r\n    border-radius: 20px;\r\n    background-color: rgb(34, 59, 91);\r\n    /* display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    border: 0px; */\r\n}\r\n\r\n.card-title{\r\n    text-align: center;\r\n    margin-bottom: 50px;\r\n    letter-spacing: 2px;\r\n    padding-left: 50px;\r\n    padding-right: 50px;\r\n    color: white;\r\n}\r\n\r\n.card-text{\r\n    margin-bottom: 150px;\r\n}\r\n\r\n.card-body{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    height: -webkit-max-content;\r\n    height: -moz-max-content;\r\n    height: max-content;\r\n}\r\n\r\nspan{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n}\r\n\r\n.btn{\r\n    border-radius: 20px;\r\n    background-color: #25838C;\r\n    border-color: transparent;\r\n    width: -webkit-max-content;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n    margin: auto;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    color: white;\r\n    letter-spacing: 1px;\r\n    font-size: 18px;\r\n}\r\n\r\n.btn:hover{\r\n    border: 1px solid #68BE9A;\r\n}\r\n\r\n.btn-plus{\r\n    border-radius: 45px;\r\n    background-color: #25838C;\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n    -webkit-transform: rotate(180deg);\r\n            transform: rotate(180deg);\r\n    transition: ease  0.5s;\r\n    border-color: transparent;\r\n}\r\n\r\n.btn-plus:hover{\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n}\r\n\r\n@media screen and (max-width: 1400px) {\r\n    .main-grid{\r\n        grid-template-columns: auto auto;\r\n    }\r\n\r\n}\r\n\r\n@media screen and (max-width: 900px) {\r\n    .main-grid{\r\n        grid-template-columns: auto;\r\n        padding: 20px;\r\n    }\r\n\r\n    .card {\r\n        width: 100%;\r\n        min-height: 0px;\r\n        min-width: 0px;\r\n    }\r\n\r\n\r\n    .card-title{\r\n        font-size: 15px;\r\n    }\r\n\r\n} \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxpQkFBaUI7Q0FDakIsNEJBQW9CO0NBQXBCLHlCQUFvQjtDQUFwQixvQkFBb0I7Q0FDcEIsY0FBYztDQUNkLG9CQUFvQjtDQUNwQix3QkFBd0I7Q0FDeEI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2Qsc0NBQXNDO0lBQ3RDLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0NBQ3RCOztBQUdEO0lBQ0ksa0JBQWtCO0lBQ2xCLGdDQUF3QjtJQUF4Qiw2QkFBd0I7SUFBeEIsd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0NBQWtDO0lBQ2xDOzs7bUJBR2U7Q0FDbEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxxQkFBcUI7Q0FDeEI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4Qiw0QkFBb0I7SUFBcEIseUJBQW9CO0lBQXBCLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsd0JBQXdCO0NBQzNCOztBQUVEO0lBQ0ksb0JBQW9CO0lBQ3BCLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7O0FBR0Q7SUFDSSxvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLDRCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsMEJBQTBCO0NBQzdCOztBQUVEO0lBQ0ksOEJBQXNCO1lBQXRCLHNCQUFzQjtDQUN6Qjs7QUFFRDtJQUNJO1FBQ0ksaUNBQWlDO0tBQ3BDOztDQUVKOztBQUVEO0lBQ0k7UUFDSSw0QkFBNEI7UUFDNUIsY0FBYztLQUNqQjs7SUFFRDtRQUNJLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsZUFBZTtLQUNsQjs7O0lBR0Q7UUFDSSxnQkFBZ0I7S0FDbkI7O0NBRUoiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWR7XHJcbiBtaW4taGVpZ2h0OiA5MHZoO1xyXG4gaGVpZ2h0OiBtYXgtY29udGVudDtcclxuIGRpc3BsYXk6IGZsZXg7XHJcbiBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYWluLWdyaWR7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcclxuICAgIGdyaWQtZ2FwOiAyNXB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICAgIHBhZGRpbmc6IDE1MHB4O1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG59XHJcblxyXG5cclxuLmNhcmQge1xyXG4gICAgbWluLWhlaWdodDogNDUwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICAgIG1pbi13aWR0aDogNDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM0LCA1OSwgOTEpO1xyXG4gICAgLyogZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMHB4OyAqL1xyXG59XHJcblxyXG4uY2FyZC10aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNhcmQtdGV4dHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1MHB4O1xyXG59XHJcblxyXG4uY2FyZC1ib2R5e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbn1cclxuXHJcbnNwYW57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYnRue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTgzOEM7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uYnRuOmhvdmVye1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzY4QkU5QTtcclxufVxyXG5cclxuXHJcbi5idG4tcGx1c3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDQ1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjU4MzhDO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlICAwLjVzO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmJ0bi1wbHVzOmhvdmVye1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcclxuICAgIC5tYWluLWdyaWR7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XHJcbiAgICB9XHJcblxyXG59IFxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgIC5tYWluLWdyaWR7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDBweDtcclxuICAgICAgICBtaW4td2lkdGg6IDBweDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLmNhcmQtdGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG5cclxufSAiXX0= */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\" class=\"container-fluid\">\n  <div *ngIf=\"!detailed\" class=\"main-grid\">\n\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h3 class=\"card-title\">Start a new journey</h3>\n          <span><a routerLink=\"/journey\" class=\"btn btn-plus btn-success\">\n              <fa name=\"plus\" size=\"4x\"></fa>\n            </a></span>\n        </div>\n      </div>\n\n      <div *ngFor=\"let j of user.journey\" class=\"card\">\n        <div class=\"card-body\">\n          <h3 class=\"card-title\" style=\"text-decoration: underline;\">{{j.name}}</h3>\n          <h5 class=\"card-title\" style=\"font-size: 15px;\">{{j.departure_date | date:'longDate'}} - {{j.return_date | date:'longDate'}}</h5>\n          <button class=\"btn\" [routerLink]= \"['/journey-detail', j._id]\">Manage Journey</button>\n        </div>\n      </div>\n      \n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");



var MainComponent = /** @class */ (function () {
    function MainComponent(authService) {
        this.authService = authService;
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            var jsonResponse = profile;
            _this.user = jsonResponse;
            console.log(profile);
        });
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");





var AuthService = /** @class */ (function () {
    function AuthService(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
        this.baseurl = 'http://localhost:3000/';
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this.http.post('api/v1/user/register', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((function (res) { return res; })));
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this.http.post('api/v1/user/authenticate', user, { headers: headers });
    };
    AuthService.prototype.getProfile = function () {
        this.loadToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        headers = headers.append('Authorization', this.authToken);
        return this.http.get('api/v1/user/profile', { headers: headers });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loggedIn = function () {
        var token = localStorage.getItem('id_token');
        // Check whether the token is expired and return
        // true or false
        return !this.jwtHelper.isTokenExpired(token);
    };
    AuthService.prototype.isAdmin = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        if (this.user.admin == true) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/city.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/city.service.ts ***!
  \******************************************/
/*! exports provided: CityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityService", function() { return CityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var CityService = /** @class */ (function () {
    function CityService(_http) {
        this._http = _http;
        this.baseUrl = 'http://localhost:3000/api/v1/cities';
        this.extUrl = 'https://api.foursquare.com/v2/venues/explore?client_id=NQQ0UUXTCYP1F5K4OMR2XDNY0XV13LQKB231H2KMRUUV3C0F&client_secret=N2PCHUU0PLKSDMPF4V55VC2VZZEDZFBGZBNYEP3ZUE1CNQQD&v=20180323&locale=en&near=';
    }
    CityService.prototype.getFourSquareCity = function (searchText) {
        return this._http.get(this.extUrl + searchText)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((function (res) { return res; })));
    };
    CityService.prototype.getFourSquareLocations = function (cityName) {
        return this._http.get(this.extUrl + cityName)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    CityService.prototype.getFourSquareVenue = function (venueId) {
        return this._http.get('https://api.foursquare.com/v2/venues/' + venueId + '?client_id=NQQ0UUXTCYP1F5K4OMR2XDNY0XV13LQKB231H2KMRUUV3C0F&client_secret=N2PCHUU0PLKSDMPF4V55VC2VZZEDZFBGZBNYEP3ZUE1CNQQD&v=20180323')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    CityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CityService);
    return CityService;
}());



/***/ }),

/***/ "./src/app/services/guards/auth.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/services/guards/auth.guard.ts ***!
  \***********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // canActivate(){
    //   if(this.authService.loggedIn() == false){
    //     this.router.navigate(['/']);
    //     return true
    //   }else{
    //     this.router.navigate(['/user/login']);
    //     return false;
    //   }
    // }
    AuthGuard.prototype.canActivate = function () {
        if (!this.authService.loggedIn()) {
            this.router.navigate(['user/login']);
            return false;
        }
        return true;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/journey.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/journey.service.ts ***!
  \*********************************************/
/*! exports provided: JourneyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JourneyService", function() { return JourneyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var JourneyService = /** @class */ (function () {
    function JourneyService(_http) {
        this._http = _http;
        this.baseurl = 'http://localhost:3000/';
    }
    JourneyService.prototype.getJourneys = function () {
        return this._http.get('api/v1/journeys')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((function (res) { return res; })));
    };
    JourneyService.prototype.getJourneyById = function (id) {
        return this._http.get('api/v1/journeys' + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((function (res) { return res; })));
    };
    JourneyService.prototype.deleteJourney = function (journeyId) {
        console.log(journeyId);
        return this._http.delete('api/v1/journeys' + '/' + journeyId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((function (res) { return res; })));
    };
    JourneyService.prototype.deleteLocation = function (id, journeyId) {
        console.log(journeyId);
        return this._http.delete('api/v1/city-locations/' + id + '&' + journeyId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((function (res) { return res; })));
    };
    JourneyService.prototype.updateJourney = function (id, update) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this._http.put('api/v1/journeys/update/' + id, update, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((function (res) { return res; })));
    };
    JourneyService.prototype.addJourney = function (journey) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this._http.post('api/v1/journeys', journey, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((function (res) { return res; })));
    };
    JourneyService.prototype.addJourneyToUser = function (journey, id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this._http.put('api/v1/journeys/user' + '/' + id, journey, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((function (res) { return res; })));
    };
    JourneyService.prototype.addLocationToJourney = function (location, journey) {
        var journeyId = journey._id;
        console.log(journeyId);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this._http.post('api/v1/journeys/location' + '/' + journeyId, location, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((function (res) { return res; })));
    };
    JourneyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], JourneyService);
    return JourneyService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateForm = function (new_journey) {
        if (new_journey.name == undefined || new_journey.departure_date == undefined || new_journey.return_date == undefined || new_journey.description == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    height: 90vh;\r\n}\r\n\r\n@media screen and (max-width: 600px){\r\n   .container-fluid{\r\n       height: 100vh;\r\n   }\r\n\r\n   #img-section{\r\n       display: none;\r\n   }\r\n\r\n   .page-header{\r\n       margin-bottom: 50px !important;\r\n   }\r\n\r\n   #pass{\r\n       margin-bottom: 0px;\r\n   }\r\n}\r\n\r\n.container{\r\n    display: flex;\r\n    align-content: flex-start;\r\n    height: 80%;\r\n    padding: 0;\r\n    border-radius: 20px;\r\n    background-color: rgb(34, 59, 91);\r\n\r\n}\r\n\r\n.grid-section{\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n}\r\n\r\n.grid-section > img{\r\n    height: 100%;\r\n    width: 100%;\r\n    border-top-right-radius: 20px;\r\n    border-bottom-right-radius: 20px;\r\n    \r\n}\r\n\r\n.grid-section > form{\r\n    padding: 50px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.page-header{\r\n    margin-bottom: 100px;\r\n    text-align: center;\r\n    color: white;\r\n    letter-spacing: 2px;\r\n}\r\n\r\n.form-control{\r\n    border-radius: 20px;\r\n    margin-bottom: 30px;\r\n    padding: 25px;\r\n}\r\n\r\n.grid-section > form > .btn{\r\n   align-self: center;\r\n   width: 50%;\r\n   padding: 15px;\r\n   border-radius: 20px;\r\n   background-color: #68BE9A;\r\n   font-size: 20px;\r\n   letter-spacing: 1px;\r\n}\r\n\r\n.grid-section > form > .btn:hover{\r\n    background-color: #A0F0A8;\r\n    color: rgba(0, 0, 0, 0.4);\r\n }\r\n\r\nform > p{\r\n    padding: 10px;\r\n    margin-top:20px;\r\n    text-align: center;\r\n}\r\n\r\nform > p > span > a{\r\n    color: palevioletred;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsYUFBYTtDQUNoQjs7QUFFRDtHQUNHO09BQ0ksY0FBYztJQUNqQjs7R0FFRDtPQUNJLGNBQWM7SUFDakI7O0dBRUQ7T0FDSSwrQkFBK0I7SUFDbEM7O0dBRUQ7T0FDSSxtQkFBbUI7SUFDdEI7Q0FDSDs7QUFDRDtJQUNJLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsa0NBQWtDOztDQUVyQzs7QUFFRDtJQUNJLFlBQVk7SUFDWixhQUFhOztDQUVoQjs7QUFFRDtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osOEJBQThCO0lBQzlCLGlDQUFpQzs7Q0FFcEM7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGNBQWM7Q0FDakI7O0FBRUQ7R0FDRyxtQkFBbUI7R0FDbkIsV0FBVztHQUNYLGNBQWM7R0FDZCxvQkFBb0I7R0FDcEIsMEJBQTBCO0dBQzFCLGdCQUFnQjtHQUNoQixvQkFBb0I7Q0FDdEI7O0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsMEJBQTBCO0VBQzVCOztBQUVGO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxxQkFBcUI7Q0FDeEIiLCJmaWxlIjoic3JjL2FwcC91c2VyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogOTB2aDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xyXG4gICAuY29udGFpbmVyLWZsdWlke1xyXG4gICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgfVxyXG5cclxuICAgI2ltZy1zZWN0aW9ue1xyXG4gICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgfVxyXG5cclxuICAgLnBhZ2UtaGVhZGVye1xyXG4gICAgICAgbWFyZ2luLWJvdHRvbTogNTBweCAhaW1wb3J0YW50O1xyXG4gICB9XHJcblxyXG4gICAjcGFzc3tcclxuICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgfVxyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQsIDU5LCA5MSk7XHJcblxyXG59XHJcblxyXG4uZ3JpZC1zZWN0aW9ue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG59XHJcblxyXG4uZ3JpZC1zZWN0aW9uID4gaW1ne1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi5ncmlkLXNlY3Rpb24gPiBmb3Jte1xyXG4gICAgcGFkZGluZzogNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnBhZ2UtaGVhZGVye1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9se1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG59XHJcblxyXG4uZ3JpZC1zZWN0aW9uID4gZm9ybSA+IC5idG57XHJcbiAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgd2lkdGg6IDUwJTtcclxuICAgcGFkZGluZzogMTVweDtcclxuICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogIzY4QkU5QTtcclxuICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4uZ3JpZC1zZWN0aW9uID4gZm9ybSA+IC5idG46aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTBGMEE4O1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuIH1cclxuXHJcbmZvcm0gPiBwe1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi10b3A6MjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuZm9ybSA+IHAgPiBzcGFuID4gYXtcclxuICAgIGNvbG9yOiBwYWxldmlvbGV0cmVkO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n<div class=\"container jumbotron\">\n    <section class=\"grid-section \">\n    <form (submit)=\"onLoginSubmit()\">\n        <h2 class=\"page-header\">Login</h2>\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Username\">\n      </div>\n      <div id=\"pass\" class=\"form-group\">\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\">\n      </div>\n      <input type=\"submit\" class=\"btn btn-success\" value=\"Login\">\n      <p style=\"color:white;\">Don't have an account yet?<span style=\"padding-left:10px; padding-right:10px;\"><a href=\"\" routerLink=\"/user/register\">SIGN UP NOW!</a></span></p>\n    </form>\n   </section>\n   <section id=\"img-section\" class=\"grid-section\">\n      <img src=\"https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260\" alt=\"\">\n   </section>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, toastr) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            _this.data = data;
            if (_this.data.success) {
                console.log(data);
                _this.toastr.success('Logged in successfully!', 'Logged in', {
                    easing: 'ease-in', easeTime: 300
                });
                _this.authService.storeUserData(_this.data.token, _this.data.user);
                _this.router.navigate(['/']);
            }
            else {
                _this.toastr.error('Something went wrong!', 'Login failed', {
                    easing: 'ease-in', easeTime: 300
                });
                _this.router.navigate(['/user/login']);
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/user/register/register.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    height: 90vh;\r\n}\r\n\r\n@media screen and (max-width: 600px){\r\n    .container-fluid{\r\n        min-height: 100vh;\r\n        height: -webkit-max-content;\r\n        height: -moz-max-content;\r\n        height: max-content;\r\n    }\r\n\r\n    .container{\r\n        height: -webkit-max-content;\r\n        height: -moz-max-content;\r\n        height: max-content;\r\n        margin-top: 25px;\r\n    }\r\n\r\n    #img-section{\r\n        display: none;\r\n    }\r\n\r\n    form{\r\n        padding: 15px;\r\n    }\r\n\r\n    #last{\r\n        margin-bottom: 0px;\r\n    }\r\n }\r\n\r\n.container{\r\n    display: flex;\r\n    align-content: flex-start;\r\n    height: 80%;\r\n    padding: 0;\r\n    border-radius: 20px;\r\n    background-color: rgb(34, 59, 91);\r\n\r\n}\r\n\r\n.grid-section{\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n}\r\n\r\n.grid-section > img{\r\n    height: 100%;\r\n    width: 100%;\r\n    border-top-right-radius: 20px;\r\n    border-bottom-right-radius: 20px;\r\n    \r\n}\r\n\r\n.grid-section > form{\r\n    /* padding: 50px; */\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.page-header{\r\n    padding: 50px;\r\n    text-align: center;\r\n    color: white;\r\n    letter-spacing: 2px;\r\n}\r\n\r\n.form-control{\r\n    border-radius: 20px;\r\n    margin-bottom: 20px;\r\n    padding: 25px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.grid-section > form > .btn{\r\n   align-self: center;\r\n   width: 40%;\r\n   padding: 15px;\r\n   border-radius: 20px;  \r\n   background-color: #68BE9A;\r\n   font-size: 20px;\r\n   letter-spacing: 1px;\r\n}\r\n\r\n.grid-section > form > .btn:hover{\r\n    background-color: #A0F0A8;\r\n    color: rgba(0, 0, 0, 0.4);\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsYUFBYTtDQUNoQjs7QUFFRDtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLDRCQUFvQjtRQUFwQix5QkFBb0I7UUFBcEIsb0JBQW9CO0tBQ3ZCOztJQUVEO1FBQ0ksNEJBQW9CO1FBQXBCLHlCQUFvQjtRQUFwQixvQkFBb0I7UUFDcEIsaUJBQWlCO0tBQ3BCOztJQUVEO1FBQ0ksY0FBYztLQUNqQjs7SUFFRDtRQUNJLGNBQWM7S0FDakI7O0lBRUQ7UUFDSSxtQkFBbUI7S0FDdEI7RUFDSDs7QUFFRjtJQUNJLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsa0NBQWtDOztDQUVyQzs7QUFFRDtJQUNJLFlBQVk7SUFDWixhQUFhOztDQUVoQjs7QUFFRDtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osOEJBQThCO0lBQzlCLGlDQUFpQzs7Q0FFcEM7O0FBRUQ7SUFDSSxvQkFBb0I7SUFDcEIsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCw2RUFBNkU7Q0FDaEY7O0FBR0Q7R0FDRyxtQkFBbUI7R0FDbkIsV0FBVztHQUNYLGNBQWM7R0FDZCxvQkFBb0I7R0FDcEIsMEJBQTBCO0dBQzFCLGdCQUFnQjtHQUNoQixvQkFBb0I7Q0FDdEI7O0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsMEJBQTBCO0VBQzVCIiwiZmlsZSI6InNyYy9hcHAvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDkwdmg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgIC5jb250YWluZXItZmx1aWR7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIH1cclxuXHJcbiAgICAjaW1nLXNlY3Rpb257XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICBmb3Jte1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2xhc3R7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgfVxyXG4gfVxyXG5cclxuLmNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNCwgNTksIDkxKTtcclxuXHJcbn1cclxuXHJcbi5ncmlkLXNlY3Rpb257XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbn1cclxuXHJcbi5ncmlkLXNlY3Rpb24gPiBpbWd7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICBcclxufVxyXG5cclxuLmdyaWQtc2VjdGlvbiA+IGZvcm17XHJcbiAgICAvKiBwYWRkaW5nOiA1MHB4OyAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucGFnZS1oZWFkZXJ7XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuXHJcblxyXG4uZ3JpZC1zZWN0aW9uID4gZm9ybSA+IC5idG57XHJcbiAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgd2lkdGg6IDQwJTtcclxuICAgcGFkZGluZzogMTVweDtcclxuICAgYm9yZGVyLXJhZGl1czogMjBweDsgIFxyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjhCRTlBO1xyXG4gICBmb250LXNpemU6IDIwcHg7XHJcbiAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbi5ncmlkLXNlY3Rpb24gPiBmb3JtID4gLmJ0bjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBMEYwQTg7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gfSJdfQ== */"

/***/ }),

/***/ "./src/app/user/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/user/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n<div class=\"container jumbotron\">\n    <section class=\"grid-section \">\n    <form (submit)=\"onRegisterSubmit()\">\n        <h2 class=\"page-header\">Register</h2>\n      <div class=\"form-group\">\n        <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" placeholder=\"Name\" required>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" placeholder=\"Username\" required minlength=\"2\" maxlength=\"20\">\n      </div>\n      <div class=\"form-group\">\n        <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\" required>\n      </div>\n      <div id=\"last\" class=\"form-group\">\n        <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" required minlength=\"4\" maxlength=\"20\">\n      </div>\n      <input type=\"submit\" class=\"btn btn-success\"  value=\"Submit\">\n    </form>\n    </section>\n    <section  id=\"img-section\" class=\"grid-section\">\n        <img src=\"https://images.pexels.com/photos/129830/pexels-photo-129830.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260\" alt=\"\">\n     </section>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_validate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, authService, router, toastr) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password
        };
        console.log(user);
        //Validate fields
        if (!this.validateService.validateRegister(user)) {
            this.toastr.warning('Please fill in all the fields.', 'Invalid', {
                easing: 'ease-in', easeTime: 300
            });
            return false;
        }
        //Validate email
        if (!this.validateService.validateEmail(user.email)) {
            this.toastr.warning('Please fill a correct e-mail.', 'Invalid', {
                easing: 'ease-in', easeTime: 300
            });
            return false;
        }
        //Authenticate user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data) {
                _this.toastr.success('You have registered successfully!.', 'Registered', {
                    easing: 'ease-in', easeTime: 300
                });
                _this.router.navigate(['/user/login']);
            }
            else {
                _this.toastr.error('Failed to register', 'Failed', {
                    easing: 'ease-in', easeTime: 300
                });
                _this.router.navigate(['/user/register']);
            }
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/user/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_validate_service__WEBPACK_IMPORTED_MODULE_4__["ValidateService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], RegisterComponent);
    return RegisterComponent;
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

module.exports = __webpack_require__(/*! D:\dev\trip-guru-server\travel-point\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map