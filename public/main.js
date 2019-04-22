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

module.exports = ".container-fluid{\r\n    background: linear-gradient(#68BE9A, #A0F0A8);\r\n    min-height: 100vh;\r\n    height: -webkit-max-content;\r\n    height: -moz-max-content;\r\n    height: max-content;\r\n    padding: 0px;\r\n}\r\n\r\n.navbar {\r\n    background-color: rgb(34, 59, 91);\r\n    padding: 0px;\r\n}\r\n\r\n.hamburger-menu{\r\n    padding: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.date {\r\n    color: white;\r\n    padding: 20px;\r\n    margin-right: 10px;  \r\n    font-size: 20px;\r\n    letter-spacing: 2px;\r\n}\r\n\r\n.ham {\r\n    width: 35px;\r\n    height: 2px;\r\n    background-color: white !important;\r\n    margin: 6px 0;\r\n  }\r\n\r\n.navbar-brand{\r\n      color: white !important;\r\n      padding: 20px;\r\n      font-size: 25px;\r\n      letter-spacing: 2px;\r\n      \r\n  }\r\n\r\n.sidenav {\r\n    height: 100vh;\r\n    width: 0;\r\n    position: fixed;\r\n    z-index: 11;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: white;\r\n    overflow-x: hidden;\r\n    transition: 0.4s;\r\n    text-align:center;\r\n  }\r\n\r\n.sidenav .closebtn {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    font-size: 36px;\r\n    margin-right: 20px;\r\n    color: rgba(34, 59, 91, 1);\r\n  }\r\n\r\n.sidenav .closebtn:hover {\r\n    text-decoration: none;\r\n  }\r\n\r\n.section-user{\r\n      height: 35%;\r\n      width: 100%;\r\n      background: linear-gradient(#68BE9A, #A0F0A8);\r\n      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n      display: flex;\r\n      flex-direction: row;\r\n  }\r\n\r\n.section-user > #user {\r\n     margin: auto;\r\n     color: rgba(34, 59, 91, 1);\r\n  }\r\n\r\n.list-group-item, .list-group-item>a{\r\n        color: #25838C ;\r\n        padding: 20px;\r\n        font-size: 20px;\r\n        letter-spacing: 2px;    \r\n  }\r\n\r\n.list-group-item{\r\n      border: 0px;\r\n      padding: 0;\r\n  }\r\n\r\n.list-group-item>a{\r\n      float: left;\r\n  }\r\n\r\n.list-group-item:hover{\r\n      background-color: rgba(34, 59, 91, 0.5);\r\n  }\r\n\r\n#toggle_fade {\r\n    background-color: rgba(0, 0, 0, .4);\r\n    display: none;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    right: 0;\r\n    z-index: 10;\r\n}\r\n\r\n@media screen and (max-width: 900px){\r\n\r\n    .date{\r\n        font-size: 15px;\r\n        padding: 10px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4Q0FBOEM7SUFDOUMsa0JBQWtCO0lBQ2xCLDRCQUFvQjtJQUFwQix5QkFBb0I7SUFBcEIsb0JBQW9CO0lBQ3BCLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxrQ0FBa0M7SUFDbEMsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMsY0FBYztHQUNmOztBQUVEO01BQ0ksd0JBQXdCO01BQ3hCLGNBQWM7TUFDZCxnQkFBZ0I7TUFDaEIsb0JBQW9COztHQUV2Qjs7QUFFRDtJQUNFLGNBQWM7SUFDZCxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixPQUFPO0lBQ1AsUUFBUTtJQUNSLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtHQUNuQjs7QUFFRDtJQUNFLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsU0FBUztJQUNULGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsMkJBQTJCO0dBQzVCOztBQUVEO0lBQ0Usc0JBQXNCO0dBQ3ZCOztBQUVEO01BQ0ksWUFBWTtNQUNaLFlBQVk7TUFDWiw4Q0FBOEM7TUFDOUMsNkVBQTZFO01BQzdFLGNBQWM7TUFDZCxvQkFBb0I7R0FDdkI7O0FBSUQ7S0FDRyxhQUFhO0tBQ2IsMkJBQTJCO0dBQzdCOztBQUdEO1FBQ00sZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsb0JBQW9CO0dBQ3pCOztBQUVEO01BQ0ksWUFBWTtNQUNaLFdBQVc7R0FDZDs7QUFFRDtNQUNJLFlBQVk7R0FDZjs7QUFFRDtNQUNJLHdDQUF3QztHQUMzQzs7QUFFRDtJQUNFLG9DQUFvQztJQUNwQyxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsT0FBTztJQUNQLFNBQVM7SUFDVCxZQUFZO0NBQ2Y7O0FBRUQ7O0lBRUk7UUFDSSxnQkFBZ0I7UUFDaEIsY0FBYztLQUNqQjtDQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM2OEJFOUEsICNBMEYwQTgpO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNCwgNTksIDkxKTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLmhhbWJ1cmdlci1tZW51e1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmRhdGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDsgIFxyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxufVxyXG5cclxuLmhhbSB7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogNnB4IDA7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLWJyYW5ke1xyXG4gICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICBcclxuICB9XHJcblxyXG4gIC5zaWRlbmF2IHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDExO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnNpZGVuYXYgLmNsb3NlYnRuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6IHJnYmEoMzQsIDU5LCA5MSwgMSk7XHJcbiAgfVxyXG5cclxuICAuc2lkZW5hdiAuY2xvc2VidG46aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tdXNlcntcclxuICAgICAgaGVpZ2h0OiAzNSU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzY4QkU5QSwgI0EwRjBBOCk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC5zZWN0aW9uLXVzZXIgPiAjdXNlciB7XHJcbiAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgIGNvbG9yOiByZ2JhKDM0LCA1OSwgOTEsIDEpO1xyXG4gIH1cclxuXHJcblxyXG4gIC5saXN0LWdyb3VwLWl0ZW0sIC5saXN0LWdyb3VwLWl0ZW0+YXtcclxuICAgICAgICBjb2xvcjogIzI1ODM4QyA7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDsgICAgXHJcbiAgfVxyXG5cclxuICAubGlzdC1ncm91cC1pdGVte1xyXG4gICAgICBib3JkZXI6IDBweDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gIC5saXN0LWdyb3VwLWl0ZW0+YXtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAubGlzdC1ncm91cC1pdGVtOmhvdmVye1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM0LCA1OSwgOTEsIDAuNSk7XHJcbiAgfVxyXG5cclxuICAjdG9nZ2xlX2ZhZGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNCk7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCl7XHJcblxyXG4gICAgLmRhdGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <nav class=\"navbar\">\n    <a (click)=\"openNav()\" class=\"hamburger-menu\" *ngIf=\"authService.loggedIn()\">\n      <div class=\"ham\"></div>\n      <div class=\"ham\"></div>\n      <div class=\"ham\"></div>\n    </a>\n    <a class=\"navbar-brand mr-auto mb-0 h1\" routerLink=\"/\">Traveler</a>\n    <span class=\"date ml-auto\">{{dateNow | date:'fullDate'}}</span>\n  </nav>\n  <div id=\"mySidenav\" class=\"sidenav\">\n      <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\n    <section *ngIf=\"user\" class=\"section-user\">\n        <span id=\"user\"><fa name=\"far fa-user\" size=\"3x\"></fa><h5>{{user.name}}</h5><hr style=\"border-color: #25838C\"><h5>{{user.email}}</h5></span>       \n    </section>\n    <section class=\"section-options\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\"><a href=\"\" routerLink=\"/journey\" (click)=\"closeNav()\" >Start a new journey</a></li>\n      </ul>\n      <ul class=\"list-group\">\n          <li class=\"list-group-item\"><a href=\"\" (click)=\"onLogOutClick()\">Logout</a></li>\n        </ul>\n    </section>\n    </div>\n    <div id=\"toggle_fade\"></div>\n  <router-outlet></router-outlet>\n</div>"

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
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            var jsonResponse = profile;
            _this.user = jsonResponse;
        });
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
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _user_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/register/register.component */ "./src/app/user/register/register.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/guards/auth.guard */ "./src/app/services/guards/auth.guard.ts");
/* harmony import */ var _journey_journey_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./journey/journey.component */ "./src/app/journey/journey.component.ts");
/* harmony import */ var _journey_journey_form_journey_form_journey_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./journey/journey-form/journey-form/journey-form.component */ "./src/app/journey/journey-form/journey-form/journey-form.component.ts");
/* harmony import */ var _journey_journey_detail_journey_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./journey/journey-detail/journey-detail.component */ "./src/app/journey/journey-detail/journey-detail.component.ts");

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
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _user_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _user_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_14__["MainComponent"],
                _journey_journey_component__WEBPACK_IMPORTED_MODULE_16__["JourneyComponent"],
                _journey_journey_form_journey_form_journey_form_component__WEBPACK_IMPORTED_MODULE_17__["JourneyFormComponent"],
                _journey_journey_detail_journey_detail_component__WEBPACK_IMPORTED_MODULE_18__["JourneyDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__["JwtModule"].forRoot({ config: {
                        tokenGetter: tokenGetter
                    } }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_5__["AngularFontAwesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
            ],
            providers: [_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__["JwtHelperService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _services_validate_service__WEBPACK_IMPORTED_MODULE_9__["ValidateService"], _services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
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

module.exports = ".container-fluid{\r\n    height: 100vh;\r\n    width: 90vw;\r\n}\r\n\r\n.container{\r\n    height: 75%;\r\n    width: 75%;\r\n    margin-top: 5rem;\r\n    background-color: #25838C;\r\n    border-radius: 20px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.card{\r\n    background: transparent;\r\n    border: 0px;\r\n    border-right: 1px solid #A0F0A8;\r\n    width: 25%;\r\n    padding: 20px;\r\n}\r\n\r\n.journey-prop{\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.card-title,.prop-header{\r\n    color: #A0F0A8;\r\n}\r\n\r\n.title{\r\n    color: white;\r\n}\r\n\r\n.locations-list{\r\n    width: 75%;\r\n    padding: 20px;\r\n}\r\n\r\n.card-container{\r\n    display:flex;\r\n    flex-direction: row;\r\n    background-color: #A0F0A8;\r\n    padding: 20px;\r\n    margin: 20px;\r\n    justify-content: space-between;\r\n}\r\n\r\n.custom-card{\r\n    width: -webkit-max-content;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n}\r\n\r\n.btn{\r\n    margin-left:10px;\r\n}\r\n\r\n.btn:hover{\r\n    opacity: 0.7;\r\n}\r\n\r\n.btn-view{\r\n    background-color: #25838C;\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam91cm5leS9qb3VybmV5LWRldGFpbC9qb3VybmV5LWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLG9CQUFvQjtJQUNwQiw0QkFBNEI7Q0FDL0I7O0FBRUQ7SUFDSSx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxXQUFXO0lBQ1gsY0FBYztDQUNqQjs7QUFFRDtJQUNJLHFCQUFxQjtDQUN4Qjs7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksV0FBVztJQUNYLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLDBCQUEwQjtJQUMxQixjQUFjO0lBQ2QsYUFBYTtJQUNiLCtCQUErQjtDQUNsQzs7QUFHRDtJQUNJLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksYUFBYTtDQUNoQjs7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvam91cm5leS9qb3VybmV5LWRldGFpbC9qb3VybmV5LWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogOTB2dztcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICAgIGhlaWdodDogNzUlO1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIG1hcmdpbi10b3A6IDVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjU4MzhDO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uY2FyZHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjQTBGMEE4O1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5qb3VybmV5LXByb3B7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmNhcmQtdGl0bGUsLnByb3AtaGVhZGVye1xyXG4gICAgY29sb3I6ICNBMEYwQTg7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxvY2F0aW9ucy1saXN0e1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTBGMEE4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuXHJcbi5jdXN0b20tY2FyZHtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxufVxyXG5cclxuLmJ0bntcclxuICAgIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbn1cclxuXHJcbi5idG46aG92ZXJ7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbi5idG4tdmlld3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTgzOEM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/journey/journey-detail/journey-detail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/journey/journey-detail/journey-detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"container\">\n    <div *ngIf=\"activeJourney\" class=\"card\">\n      <div class=\"card-body\">\n        <h3 class=\"card-title\" style=\"text-decoration: underline; padding-bottom: 20px;\">{{activeJourney.name}}</h3>\n        <div class=\"journey-prop\">\n          <h4 class=\"prop-header\">City:</h4>\n          <h5 class=\"title\">{{activeJourney.city}}</h5>\n        </div>\n        <div class=\"journey-prop\">\n          <h4 class=\"prop-header\">Date:</h4>\n          <h5 class=\"title\" style=\"font-size: 15px;\">{{activeJourney.departure_date | date:'longDate'}} -\n            {{activeJourney.return_date | date:'longDate'}}</h5>\n        </div>\n        <div class=\"journey-prop\">\n          <h4 class=\"prop-header\">Description <a *ngIf=\"!edit\" (click)=\"toggleEdit()\"\n              style=\"color:lightblue; font-size:18px; cursor: pointer;\">(edit) </a>:</h4>\n          <h5 *ngIf=\"!edit\" class=\"title\">{{activeJourney.description}}</h5>\n          <form (submit)=\"update()\">\n            <textarea *ngIf=\"edit\" [(ngModel)]=\"journey_description\" name=\"journey_description\" class=\"form-control\"\n              placeholder=\"{{activeJourney.description}}\"></textarea>\n            <input *ngIf=\"edit\" type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" style=\"margin: 0px;\">\n          </form>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"locations\" class=\"locations-list\">\n      <div class=\"card-container\" *ngFor=\"let f of locations; let i = index\">\n        <div class=\"custom-card\">\n          <div class=\"flex-title\">\n            <h5 class=\"title\">{{f.name}}</h5>\n          </div>\n        </div>\n        <div class=\"card-btns\">\n          <button class=\"btn btn-view\" (click)=\"openVenue(content,f)\">VIEW</button>\n          <button class=\"btn btn-danger\" (click)=\"deleteLocation(i,f._id)\">DELETE</button>\n        </div>\n      </div>\n\n      <ng-template #content let-modal>\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\" id=\"modal-basic-title\">{{activeLocation.name}}</h4>\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div *ngIf=\"activeLocation\" class=\"modal-body\">\n          <div class=\"card-modal\">\n            <img class=\"card-img\" src=\"{{activeLocation.imagePath}}\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">{{activeLocation.address}}</h5>\n              <h6 class=\"card-title\">{{activeLocation.category}}</h6>\n              <p class=\"card-text\">{{activeLocation.description}}</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Close</button>\n        </div>\n      </ng-template>\n\n    </div>\n  </div>\n</div>"

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






var JourneyDetailComponent = /** @class */ (function () {
    function JourneyDetailComponent(currentRoute, journeyService, modalService, cityService) {
        this.currentRoute = currentRoute;
        this.journeyService = journeyService;
        this.modalService = modalService;
        this.cityService = cityService;
        this.edit = false;
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_journey_service__WEBPACK_IMPORTED_MODULE_3__["JourneyService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"], src_app_services_city_service__WEBPACK_IMPORTED_MODULE_5__["CityService"]])
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

module.exports = ".container{\r\n    height: 80vh;\r\n    width: 75vw;\r\n    background-color: rgba(34, 59, 91, 1);\r\n    padding: 0;\r\n    margin: auto;\r\n    margin-top: 75px;\r\n    border-radius: 20px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.btn-confirm{\r\n  background-color: #68BE9A;\r\n  color: white;\r\n  align-self: flex-start;\r\n  letter-spacing: 1px;\r\n  margin-left: 100px;\r\n  margin-bottom: 50px;\r\n  padding: 10px;\r\n  border-radius: 20px;\r\n}\r\n\r\n.page-header{\r\n    padding: 25px;\r\n    text-align: center;\r\n    color: white;\r\n    letter-spacing: 2px;\r\n    border-bottom: #f1f1f1 1px solid;\r\n}\r\n\r\nform{\r\n    max-height: 100%;\r\n    width: 40%;\r\n    margin: auto;\r\n  }\r\n\r\n@media screen and (max-width: 900px){\r\n    .container{\r\n      height: -webkit-max-content;\r\n      height: -moz-max-content;\r\n      height: max-content;\r\n      margin-bottom: 50px;\r\n    }\r\n\r\n    form{\r\n      width: 80%;\r\n      height: -webkit-max-content;\r\n      height: -moz-max-content;\r\n      height: max-content;\r\n      padding: 20px;\r\n    }\r\n\r\n    .card-container{\r\ndisplay: block;\r\n    }\r\n  }\r\n\r\n.form-control{\r\n    border-radius: 20px;\r\n    margin-bottom: 20px;\r\n    padding: 25px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.form-group > label{\r\n  color: white;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n::-webkit-inner-spin-button { \r\n  display:none;\r\n}\r\n\r\n.btn.btn-success{\r\n    font-size: 20px;\r\n    letter-spacing: 1px;\r\n    margin: auto;\r\n    background-color: #68BE9A;\r\n    border-radius: 20px;\r\n  }\r\n\r\n.btn.btn-success:hover{\r\n    background-color: #A0F0A8;\r\n    border-radius: 20px;\r\n  }\r\n\r\n.locations-list{\r\n    max-height: 80%;\r\n    align-self: center;\r\n    width: 100%;\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n    margin: 50px;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n/* width */\r\n\r\n::-webkit-scrollbar {\r\n  \r\n  width: 10px;\r\n}\r\n\r\n::-webkit-scr\r\n\r\n/* Track */\r\n::-webkit-scrollbar-track {\r\n  background: #f1f1f1; \r\n  box-shadow: inset 0 0 5px grey; \r\n  border-radius: 10px;\r\n  background-clip: padding-box;\r\n}\r\n\r\n/* Handle */\r\n\r\n::-webkit-scrollbar-thumb {\r\n\r\n  background: #68BE9A;\r\n  opacity: 0.3;\r\n  border-radius: 10px;\r\n}\r\n\r\n/* Handle on hover */\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: #A0F0A8; \r\n  \r\n}\r\n\r\n.card-container{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    align-items: baseline;\r\n  }\r\n\r\n.custom-card{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    margin: 20px;\r\n    background-color: rgb(36, 131, 140);\r\n    color: white;\r\n    border-radius: 20px;\r\n    width: 65%;\r\n    padding: 20px;\r\n    height: -webkit-max-content;\r\n    height: -moz-max-content;\r\n    height: max-content;\r\n  }\r\n\r\n.flex-title{\r\n    width: 60%;\r\n  }\r\n\r\n.btn.btn-view{\r\n    background-color:  rgb(36, 131, 140);\r\n    color: white;\r\n    height: -webkit-max-content;\r\n    height: -moz-max-content;\r\n    height: max-content;\r\n  }\r\n\r\n.btn.btn-add{\r\n    background-color: rgb(160, 239, 168);\r\n    color: white;\r\n    height: -webkit-max-content;\r\n    height: -moz-max-content;\r\n    height: max-content;\r\n  }\r\n\r\n.card-img{\r\n    margin: auto;\r\n    max-width: 100%;\r\n    max-height: 350px;\r\n    border-top-right-radius: 20px;\r\n    border-top-left-radius: 20px;\r\n  }\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam91cm5leS9qb3VybmV5LWZvcm0vam91cm5leS1mb3JtL2pvdXJuZXktZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsV0FBVztJQUNYLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsZ0JBQWdCO0NBQ25COztBQUVEO0VBQ0UsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLG9CQUFvQjtDQUNyQjs7QUFFRDtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixpQ0FBaUM7Q0FDcEM7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGFBQWE7R0FDZDs7QUFFRDtJQUNFO01BQ0UsNEJBQW9CO01BQXBCLHlCQUFvQjtNQUFwQixvQkFBb0I7TUFDcEIsb0JBQW9CO0tBQ3JCOztJQUVEO01BQ0UsV0FBVztNQUNYLDRCQUFvQjtNQUFwQix5QkFBb0I7TUFBcEIsb0JBQW9CO01BQ3BCLGNBQWM7S0FDZjs7SUFFRDtBQUNKLGVBQWU7S0FDVjtHQUNGOztBQUdEO0lBQ0Usb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsNkVBQTZFO0NBQ2hGOztBQUVEO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixvQkFBb0I7R0FDckI7O0FBRUQ7SUFDRSwwQkFBMEI7SUFDMUIsb0JBQW9CO0dBQ3JCOztBQUVEO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isb0JBQW9CO0dBQ3JCOztBQUVELFdBQVc7O0FBQ2I7O0VBRUUsWUFBWTtDQUNiOztBQUVEOzs7O0VBSUUsb0JBQW9CO0VBQ3BCLCtCQUErQjtFQUMvQixvQkFBb0I7RUFDcEIsNkJBQTZCO0NBQzlCOztBQUVELFlBQVk7O0FBQ1o7O0VBRUUsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixvQkFBb0I7Q0FDckI7O0FBRUQscUJBQXFCOztBQUNyQjtFQUNFLG9CQUFvQjs7Q0FFckI7O0FBRUM7SUFDRSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLDhCQUE4QjtJQUM5QixzQkFBc0I7R0FDdkI7O0FBRUQ7SUFDRSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLCtCQUErQjtJQUMvQixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGNBQWM7SUFDZCw0QkFBb0I7SUFBcEIseUJBQW9CO0lBQXBCLG9CQUFvQjtHQUNyQjs7QUFFRDtJQUNFLFdBQVc7R0FDWjs7QUFFRDtJQUNFLHFDQUFxQztJQUNyQyxhQUFhO0lBQ2IsNEJBQW9CO0lBQXBCLHlCQUFvQjtJQUFwQixvQkFBb0I7R0FDckI7O0FBRUQ7SUFDRSxxQ0FBcUM7SUFDckMsYUFBYTtJQUNiLDRCQUFvQjtJQUFwQix5QkFBb0I7SUFBcEIsb0JBQW9CO0dBQ3JCOztBQUVEO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLDZCQUE2QjtHQUM5QiIsImZpbGUiOiJzcmMvYXBwL2pvdXJuZXkvam91cm5leS1mb3JtL2pvdXJuZXktZm9ybS9qb3VybmV5LWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICB3aWR0aDogNzV2dztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzQsIDU5LCA5MSwgMSk7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmJ0bi1jb25maXJte1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2OEJFOUE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5wYWdlLWhlYWRlcntcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogI2YxZjFmMSAxcHggc29saWQ7XHJcbn1cclxuXHJcbmZvcm17XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KXtcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybXtcclxuICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICAgICAgcGFkZGluZzogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1jb250YWluZXJ7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC5mb3JtLWNvbnRyb2x7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCA+IGxhYmVse1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24geyBcclxuICBkaXNwbGF5Om5vbmU7XHJcbn1cclxuXHJcbi5idG4uYnRuLXN1Y2Nlc3N7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY4QkU5QTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4uYnRuLXN1Y2Nlc3M6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTBGMEE4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB9XHJcblxyXG4gIC5sb2NhdGlvbnMtbGlzdHtcclxuICAgIG1heC1oZWlnaHQ6IDgwJTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgbWFyZ2luOiA1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcblxyXG4gIC8qIHdpZHRoICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIFxyXG4gIHdpZHRoOiAxMHB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2NyXHJcblxyXG4vKiBUcmFjayAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxOyBcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IGdyZXk7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxufVxyXG5cclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG5cclxuICBiYWNrZ3JvdW5kOiAjNjhCRTlBO1xyXG4gIG9wYWNpdHk6IDAuMztcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI0EwRjBBODsgXHJcbiAgXHJcbn1cclxuXHJcbiAgLmNhcmQtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tY2FyZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM2LCAxMzEsIDE0MCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gIH1cclxuICBcclxuICAuZmxleC10aXRsZXtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgfVxyXG5cclxuICAuYnRuLmJ0bi12aWV3e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYigzNiwgMTMxLCAxNDApO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICB9XHJcblxyXG4gIC5idG4uYnRuLWFkZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjAsIDIzOSwgMTY4KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1pbWd7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICB9XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/journey/journey-form/journey-form/journey-form.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/journey/journey-form/journey-form/journey-form.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!toggled\" class=\"container\">\n  <form (submit)=\"onJourneySubmit()\">\n    <h4 class=\"page-header\">Please fill in the details of your new journey</h4>\n    <div class=\"form-group\">\n      <label>Name</label>\n      <input type=\"text\" [(ngModel)]=\"journey_name\" name=\"journey_name\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Departure Date</label>\n      <input type=\"date\" max=\"3000-12-31\" min=\"1000-01-01\" [(ngModel)]=\"journey_departure_date\"\n        name=\"journey_departure_date\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Return Date</label>\n      <input type=\"date\" max=\"3000-12-31\" min=\"1000-01-01\" [(ngModel)]=\"journey_return_date\" name=\"journey_return_date\"\n        class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Description</label>\n      <textarea [(ngModel)]=\"journey_description\" name=\"journey_description\" class=\"form-control\"></textarea>\n    </div>\n    <input type=\"submit\" class=\"btn btn-success\" value=\"Next step\">\n  </form>\n</div>\n\n<div *ngIf=\"toggled\" class=\"container\">\n  <div class=\"locations-list\">\n    <div id=\"hide\" class=\"card-container\" *ngFor=\"let f of foundLocations; let i = index\">\n      <div class=\"custom-card\">\n        <div class=\"flex-title\">\n          <h5 class=\"title\">{{f.venue.name}}</h5>\n        </div>\n      </div>\n      <button class=\"btn btn-view\" (click)=\"openVenue(content,f.venue.id)\">VIEW</button>\n      <button class=\"btn btn-add\" (click)=\"addLocation(i,f.venue)\">ADD</button>\n    </div>\n  </div>\n    <button id=\"test\" class=\"btn btn-confirm\" routerLink='/'>Confirm</button>\n</div>\n\n<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">City Locations</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div *ngIf=\"activeVenue\" class=\"modal-body\">\n    <div class=\"card\">\n      <img class=\"card-img\" src=\"{{activeVenue.bestPhoto.prefix}}300x500{{activeVenue.bestPhoto.suffix}}\"\n        alt=\"Card image cap\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{activeVenue.name}}</h5>\n        <p class=\"card-text\">{{activeVenue.description}}</p>\n        <h6 class=\"card-title\">{{activeVenue.location.address}}, {{activeVenue.location.city}}</h6>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Close</button>\n  </div>\n</ng-template>"

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








var JourneyFormComponent = /** @class */ (function () {
    function JourneyFormComponent(cityService, journeyService, authService, currentRoute, modalService, validateService) {
        this.cityService = cityService;
        this.journeyService = journeyService;
        this.authService = authService;
        this.currentRoute = currentRoute;
        this.modalService = modalService;
        this.validateService = validateService;
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
            window.alert('Please fill in all the fields');
            return false;
        }
        var id = this.user_id;
        this.journeyService.addJourney(new_journey).subscribe(function (journey) {
            if (journey) {
                _this.currentJourney = journey;
                _this.journeyService.addJourneyToUser(journey, id).subscribe(function (user) {
                    if (user) {
                        _this.authService.getProfile().subscribe(function (profile) {
                            console.log(profile);
                            console.log(_this.currentJourney);
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
                        console.log('fail');
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
            _this.journeyService.addLocationToJourney(newLocation, _this.currentJourney).subscribe();
        });
        this.foundLocations.splice(i, 1);
        console.log(this.foundLocations);
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
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"], src_app_services_validate_service__WEBPACK_IMPORTED_MODULE_7__["ValidateService"]])
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

module.exports = ".container{\r\n    height: 75vh;\r\n    width: 75vw;\r\n    background-color: rgba(34, 59, 91, 1);\r\n    padding: 0;\r\n    margin: auto;\r\n    margin-top: 75px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.container.container-search{\r\n    display: grid;\r\n    grid-template-columns: 50% 50%;\r\n}\r\n\r\n.container-journey{\r\n  display: flex;\r\n  flex-direction: row;\r\n  height: 80%;\r\n  max-height: 80%;\r\n}\r\n\r\n/* Grid-Left */\r\n\r\n.grid-left{\r\n    border-top-left-radius: 20px;\r\n    border-bottom-left-radius: 20px;\r\n}\r\n\r\n.container-header{\r\n    text-align: center;\r\n    letter-spacing: 2px;\r\n    color: white;\r\n    padding: 15px;\r\n}\r\n\r\n/* SEARCH */\r\n\r\n.flexbox {\r\n    background: inherit;\r\n    width: inherit;\r\n    height: 20%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-left:20px;\r\n    margin-right:20px;\r\n  }\r\n\r\n.search > form {\r\n    display: inline-block;\r\n    position: relative;\r\n  }\r\n\r\n.search > form:after {\r\n    content: \"\";\r\n    background: #68BE9A;\r\n    width: 8px;\r\n    height: 40px;\r\n    position: absolute;\r\n    top: 40px;\r\n    right: -10px;\r\n    -webkit-transform: rotate(135deg);\r\n            transform: rotate(135deg);\r\n    box-shadow: 1px 0 #0091c2;\r\n  }\r\n\r\n.search > form > input {\r\n    color: white;\r\n    font-size: 16px;\r\n    background: rgba(34, 59, 91, 1);\r\n    width: 50px;\r\n    height: 50px;\r\n    padding: 10px;\r\n    border: solid 3px #68BE9A;\r\n    outline: none;\r\n    border-radius: 35px;\r\n    box-shadow: 0 1px #0091c2;\r\n    transition: width 0.5s;\r\n  }\r\n\r\n.search > form > input::-webkit-input-placeholder {\r\n    color: #efefef;\r\n    opacity: 1;\r\n  }\r\n\r\n.search > form > input::-ms-input-placeholder {\r\n    color: #efefef;\r\n    opacity: 1;\r\n  }\r\n\r\n.search > form > input::placeholder {\r\n    color: #efefef;\r\n    opacity: 1;\r\n  }\r\n\r\n.search > form > input::-ms-placeholder {\r\n    color: #efefef;\r\n  }\r\n\r\n.search > form > input::-ms-input-placeholder {\r\n    color: #efefef;\r\n  }\r\n\r\n.search > form > input:focus,\r\n  .search > form > input:valid,\r\n  .search > form > input:active {\r\n    width: 250px;\r\n    background-color:rgba(34, 59, 91, 1) !important;\r\n  }\r\n\r\n/* \r\n  #input:-webkit-autofill,\r\n  #input:-webkit-autofill:hover, \r\n  #input:-webkit-autofill:focus, \r\n  #input:-webkit-autofill:active {\r\n    background-color:rgba(34, 59, 91, 1) !important;\r\n  } */\r\n\r\n/* END SEARCH */\r\n\r\n.results{\r\n      height: inherit;\r\n      width: 100%;\r\n  }\r\n\r\n.cityResult{\r\n      padding: 50px;\r\n      margin-left: 20px;\r\n      margin-right: 20px;\r\n      color: white;\r\n      letter-spacing: 2px;\r\n  }\r\n\r\n.cityResult>div{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-evenly;\r\n  }\r\n\r\n.found-btn{\r\n    color: #A0F0A8;\r\n    transition: 0.4s ease;\r\n  }\r\n\r\n.found-btn:hover{\r\n    font-size: 30px;\r\n    letter-spacing: 3px;\r\n  }\r\n\r\n.btn.btn-result:hover,.btn.btn-result:active,.btn.btn-result:focus{\r\n    background-color: #A0F0A8;\r\n    color: rgba(0, 0, 0, 0.4);\r\n  }\r\n\r\n/* Form */\r\n\r\n.grid-form{\r\n    height: 100%;\r\n    width: 40%;\r\n    padding: 50px;\r\n    padding-top: 0px;\r\n    padding-bottom: 0px;\r\n    border-right: #68BE9A solid 1px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n\r\n  }\r\n\r\n.page-header{\r\n    padding-bottom: 25px;\r\n    text-align: center;\r\n    color: white;\r\n    letter-spacing: 2px;\r\n    border-bottom: #f1f1f1 1px solid;\r\n\r\n}\r\n\r\n.btn.btn-success{\r\n  margin: 20px;\r\n  background-color: #68BE9A;\r\n  border-radius: 20px;\r\n}\r\n\r\n.btn.btn-success:hover{\r\n  margin: 20px;\r\n  background-color: #A0F0A8;\r\n  border-radius: 20px;\r\n}\r\n\r\n.return{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n}\r\n\r\n.btn-return{\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n  color: #68BE9A;\r\n  padding: 25px;\r\n}\r\n\r\n.btn-return > fa{\r\n  margin-left: 0;\r\n}\r\n\r\n.btn-return:hover{\r\n  background-color: transparent;\r\n}\r\n\r\n/* END Grid-Left */\r\n\r\n/* Grid-Right */\r\n\r\n.grid-right{\r\n    background-image: url('https://i1.wp.com/www.martijnmureau.nl/wp-content/uploads/2017/02/portfolio_header_breda.jpg?fit=1600%2C900&ssl=1');\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    border-top-right-radius: 20px;\r\n    border-bottom-right-radius: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n\r\n}\r\n\r\n.grid-r-header{\r\n    color: white;\r\n    text-align: center;\r\n    letter-spacing: 2px;\r\n    z-index: 2;\r\n}\r\n\r\n.btn-suggest {\r\n    background-color: rgba(255, 255, 255, 0);\r\n    border-color: white;\r\n    color: white;\r\n    margin:auto;\r\n    margin-top: 50px;\r\n    padding: 20px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.btn-suggest:hover{\r\n  background-color: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n@media screen and (max-width: 900px){\r\n\r\n  .container{\r\n    max-width: 80vw;\r\n  }\r\n\r\n  .container.container-search{\r\n    grid-template-columns: auto;\r\n    width: 100%;\r\n  }\r\n  \r\n  /* #suggestion, .grid-r-header, .btn-suggest, hr{\r\n    display: none;\r\n  }\r\n*/\r\n  .grid-left{\r\n    max-width: 100%;\r\n  }\r\n\r\n  .grid-right{\r\n    display: none;\r\n  }\r\n  \r\n  .results{\r\n    max-width: 100%;\r\n  }\r\n\r\n  .cityResult>h4{\r\n    font-size: 15px;\r\n  }\r\n\r\n  .found-btn{\r\n    font-size: 20px;\r\n  }\r\n\r\n  .found-btn:hover{\r\n    text-decoration: underline;\r\n    letter-spacing: 2px;\r\n    font-size: 20px;\r\n  }\r\n\r\n  .container-toggled{\r\n    height: -webkit-max-content;\r\n    height: -moz-max-content;\r\n    height: max-content;\r\n  }\r\n  .container-journey{\r\n    flex-direction: column;\r\n    height: 100%;\r\n    \r\n  }\r\n  .grid-form{\r\n    width: 100%;\r\n    padding: 0px;\r\n    padding-bottom: 20px;\r\n    margin-bottom: 50px;\r\n    border-bottom: #f1f1f1 1px solid;\r\n    border-right: none ;\r\n  }\r\n  .page-header{\r\n    border: none;\r\n  }\r\n\r\n  .grid-locations{\r\n    width: 100% !important; \r\n  }\r\n\r\n  .locations-list{\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n/* Gird-Right Locations */\r\n\r\n.grid-locations{\r\n  height: 100%;\r\n  width: 60%;\r\n  padding-right: 10px;\r\n  padding-left: 10px;\r\n  \r\n}\r\n\r\n.grid-locations > .page-header{\r\n  border-bottom: 0px;\r\n}\r\n\r\n.locations-list{\r\n  max-height: 500px;\r\n  overflow-y: scroll;\r\n  padding-left: 50px;\r\n  padding-right: 50px;\r\n}\r\n\r\n.custom-card{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  margin: 10px;\r\n  background-color: #68BE9A;\r\n  color: white;\r\n  border-radius: 20px;\r\n  width: 100%;\r\n  padding: 20px;\r\n  height: -webkit-max-content;\r\n  height: -moz-max-content;\r\n  height: max-content;\r\n}\r\n\r\n.flex-title{\r\n  width: 60%;\r\n}\r\n\r\n.flex-buttons{\r\n  width: 40%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n}\r\n\r\n.title{\r\n  letter-spacing: 2px;\r\n  float: left;\r\n}\r\n\r\n.custom-card .btn{\r\n  background-color: white;\r\n  color: #68BE9A;\r\n  float: right;\r\n  cursor: pointer;\r\n}\r\n\r\n.card-img{\r\n  margin: auto;\r\n  max-width: 100%;\r\n  max-height: 350px;\r\n  border-top-right-radius: 20px;\r\n  border-top-left-radius: 20px;\r\n}\r\n\r\n/* width */\r\n\r\n::-webkit-scrollbar {\r\n  \r\n  width: 10px;\r\n}\r\n\r\n::-webkit-scr\r\n\r\n/* Track */\r\n::-webkit-scrollbar-track {\r\n  background: #f1f1f1; \r\n  box-shadow: inset 0 0 5px grey; \r\n  border-radius: 10px;\r\n  background-clip: padding-box;\r\n}\r\n\r\n/* Handle */\r\n\r\n::-webkit-scrollbar-thumb {\r\n\r\n  background: #68BE9A;\r\n  opacity: 0.3;\r\n  border-radius: 10px;\r\n}\r\n\r\n/* Handle on hover */\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: #A0F0A8; \r\n  \r\n}\r\n\r\n/* END Grid-Right */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam91cm5leS9qb3VybmV5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHNDQUFzQztJQUN0QyxXQUFXO0lBQ1gsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QsK0JBQStCO0NBQ2xDOztBQUVEO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osZ0JBQWdCO0NBQ2pCOztBQUVELGVBQWU7O0FBRWY7SUFDSSw2QkFBNkI7SUFDN0IsZ0NBQWdDO0NBQ25DOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsY0FBYztDQUNqQjs7QUFFRCxZQUFZOztBQUVaO0lBQ0ksb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixZQUFZO0lBQ1osY0FBYztJQUNkLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtHQUNuQjs7QUFHRDtJQUNFLHNCQUFzQjtJQUN0QixtQkFBbUI7R0FDcEI7O0FBRUQ7SUFDRSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixhQUFhO0lBQ2Isa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQiwwQkFBMEI7R0FDM0I7O0FBSUQ7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsdUJBQXVCO0dBQ3hCOztBQUVEO0lBQ0UsZUFBZTtJQUNmLFdBQVc7R0FDWjs7QUFIRDtJQUNFLGVBQWU7SUFDZixXQUFXO0dBQ1o7O0FBSEQ7SUFDRSxlQUFlO0lBQ2YsV0FBVztHQUNaOztBQUVEO0lBQ0UsZUFBZTtHQUNoQjs7QUFFRDtJQUNFLGVBQWU7R0FDaEI7O0FBRUQ7OztJQUdFLGFBQWE7SUFDYixnREFBZ0Q7R0FDakQ7O0FBQ0g7Ozs7OztNQU1NOztBQUVKLGdCQUFnQjs7QUFFaEI7TUFDSSxnQkFBZ0I7TUFDaEIsWUFBWTtHQUNmOztBQUVEO01BQ0ksY0FBYztNQUNkLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkIsYUFBYTtNQUNiLG9CQUFvQjtHQUN2Qjs7QUFFRDtJQUNFLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsOEJBQThCO0dBQy9COztBQUVEO0lBQ0UsZUFBZTtJQUNmLHNCQUFzQjtHQUN2Qjs7QUFFRDtJQUNFLGdCQUFnQjtJQUNoQixvQkFBb0I7R0FDckI7O0FBSUQ7SUFDRSwwQkFBMEI7SUFDMUIsMEJBQTBCO0dBQzNCOztBQUVELFVBQVU7O0FBRVY7SUFDRSxhQUFhO0lBQ2IsV0FBVztJQUNYLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGdDQUFnQztJQUNoQyxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLHdCQUF3Qjs7R0FFekI7O0FBR0Q7SUFDRSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsaUNBQWlDOztDQUVwQzs7QUFFRDtFQUNFLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLDRCQUE0QjtDQUM3Qjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixPQUFPO0VBQ1AsUUFBUTtFQUNSLGVBQWU7RUFDZixjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsOEJBQThCO0NBQy9COztBQUVELG1CQUFtQjs7QUFHakIsZ0JBQWdCOztBQUVsQjtJQUNJLDJJQUEySTtJQUMzSSxxQkFBa0I7T0FBbEIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixpQ0FBaUM7SUFDakMsY0FBYztJQUNkLHVCQUF1QjtJQUN2Qix3QkFBd0I7O0NBRTNCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsV0FBVztDQUNkOztBQUVEO0lBQ0kseUNBQXlDO0lBQ3pDLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsb0JBQW9CO0NBQ3ZCOztBQUVEO0VBQ0UsMkNBQTJDO0NBQzVDOztBQUVEOztFQUVFO0lBQ0UsZ0JBQWdCO0dBQ2pCOztFQUVEO0lBQ0UsNEJBQTRCO0lBQzVCLFlBQVk7R0FDYjs7RUFFRDs7O0VBR0E7RUFDQTtJQUNFLGdCQUFnQjtHQUNqQjs7RUFFRDtJQUNFLGNBQWM7R0FDZjs7RUFFRDtJQUNFLGdCQUFnQjtHQUNqQjs7RUFFRDtJQUNFLGdCQUFnQjtHQUNqQjs7RUFFRDtJQUNFLGdCQUFnQjtHQUNqQjs7RUFFRDtJQUNFLDJCQUEyQjtJQUMzQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0dBQ2pCOztFQUVEO0lBQ0UsNEJBQW9CO0lBQXBCLHlCQUFvQjtJQUFwQixvQkFBb0I7R0FDckI7RUFDRDtJQUNFLHVCQUF1QjtJQUN2QixhQUFhOztHQUVkO0VBQ0Q7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsaUNBQWlDO0lBQ2pDLG9CQUFvQjtHQUNyQjtFQUNEO0lBQ0UsYUFBYTtHQUNkOztFQUVEO0lBQ0UsdUJBQXVCO0dBQ3hCOztFQUVEO0lBQ0UsWUFBWTtHQUNiO0NBQ0Y7O0FBR0QsMEJBQTBCOztBQUUxQjtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLG1CQUFtQjs7Q0FFcEI7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGNBQWM7RUFDZCw0QkFBb0I7RUFBcEIseUJBQW9CO0VBQXBCLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLDhCQUE4QjtDQUMvQjs7QUFFRDtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLGFBQWE7RUFDYixnQkFBZ0I7Q0FDakI7O0FBR0Q7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsNkJBQTZCO0NBQzlCOztBQUVELFdBQVc7O0FBQ1g7O0VBRUUsWUFBWTtDQUNiOztBQUVEOzs7O0VBSUUsb0JBQW9CO0VBQ3BCLCtCQUErQjtFQUMvQixvQkFBb0I7RUFDcEIsNkJBQTZCO0NBQzlCOztBQUVELFlBQVk7O0FBQ1o7O0VBRUUsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixvQkFBb0I7Q0FDckI7O0FBRUQscUJBQXFCOztBQUNyQjtFQUNFLG9CQUFvQjs7Q0FFckI7O0FBRUQsb0JBQW9CIiwiZmlsZSI6InNyYy9hcHAvam91cm5leS9qb3VybmV5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiA3NXZoO1xyXG4gICAgd2lkdGg6IDc1dnc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM0LCA1OSwgOTEsIDEpO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyLmNvbnRhaW5lci1zZWFyY2h7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWpvdXJuZXl7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGhlaWdodDogODAlO1xyXG4gIG1heC1oZWlnaHQ6IDgwJTtcclxufVxyXG5cclxuLyogR3JpZC1MZWZ0ICovXHJcblxyXG4uZ3JpZC1sZWZ0e1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXItaGVhZGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi8qIFNFQVJDSCAqL1xyXG5cclxuLmZsZXhib3gge1xyXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6MjBweDtcclxuICAgIG1hcmdpbi1yaWdodDoyMHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICAuc2VhcmNoID4gZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2ggPiBmb3JtOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjhCRTlBO1xyXG4gICAgd2lkdGg6IDhweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDBweDtcclxuICAgIHJpZ2h0OiAtMTBweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMCAjMDA5MWMyO1xyXG4gIH1cclxuXHJcblxyXG4gIFxyXG4gIC5zZWFyY2ggPiBmb3JtID4gaW5wdXQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgzNCwgNTksIDkxLCAxKTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlcjogc29saWQgM3B4ICM2OEJFOUE7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4ICMwMDkxYzI7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzO1xyXG4gIH1cclxuICBcclxuICAuc2VhcmNoID4gZm9ybSA+IGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogI2VmZWZlZjtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2ggPiBmb3JtID4gaW5wdXQ6Oi1tcy1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogI2VmZWZlZjtcclxuICB9XHJcbiAgXHJcbiAgLnNlYXJjaCA+IGZvcm0gPiBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjZWZlZmVmO1xyXG4gIH1cclxuICBcclxuICAuc2VhcmNoID4gZm9ybSA+IGlucHV0OmZvY3VzLFxyXG4gIC5zZWFyY2ggPiBmb3JtID4gaW5wdXQ6dmFsaWQsXHJcbiAgLnNlYXJjaCA+IGZvcm0gPiBpbnB1dDphY3RpdmUge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDM0LCA1OSwgOTEsIDEpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4vKiBcclxuICAjaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCxcclxuICAjaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpob3ZlciwgXHJcbiAgI2lucHV0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsIFxyXG4gICNpbnB1dDotd2Via2l0LWF1dG9maWxsOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMzQsIDU5LCA5MSwgMSkgIWltcG9ydGFudDtcclxuICB9ICovXHJcblxyXG4gIC8qIEVORCBTRUFSQ0ggKi9cclxuXHJcbiAgLnJlc3VsdHN7XHJcbiAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuY2l0eVJlc3VsdHtcclxuICAgICAgcGFkZGluZzogNTBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIH1cclxuXHJcbiAgLmNpdHlSZXN1bHQ+ZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICB9XHJcblxyXG4gIC5mb3VuZC1idG57XHJcbiAgICBjb2xvcjogI0EwRjBBODtcclxuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcclxuICB9XHJcblxyXG4gIC5mb3VuZC1idG46aG92ZXJ7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gIH1cclxuXHJcblxyXG5cclxuICAuYnRuLmJ0bi1yZXN1bHQ6aG92ZXIsLmJ0bi5idG4tcmVzdWx0OmFjdGl2ZSwuYnRuLmJ0bi1yZXN1bHQ6Zm9jdXN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTBGMEE4O1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICB9XHJcblxyXG4gIC8qIEZvcm0gKi9cclxuXHJcbiAgLmdyaWQtZm9ybXtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBib3JkZXItcmlnaHQ6ICM2OEJFOUEgc29saWQgMXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgLnBhZ2UtaGVhZGVye1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogI2YxZjFmMSAxcHggc29saWQ7XHJcblxyXG59XHJcblxyXG4uYnRuLmJ0bi1zdWNjZXNze1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjhCRTlBO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5idG4uYnRuLXN1Y2Nlc3M6aG92ZXJ7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNBMEYwQTg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLnJldHVybntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uYnRuLXJldHVybntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgY29sb3I6ICM2OEJFOUE7XHJcbiAgcGFkZGluZzogMjVweDtcclxufVxyXG5cclxuLmJ0bi1yZXR1cm4gPiBmYXtcclxuICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG5cclxuLmJ0bi1yZXR1cm46aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi8qIEVORCBHcmlkLUxlZnQgKi9cclxuXHJcblxyXG4gIC8qIEdyaWQtUmlnaHQgKi9cclxuXHJcbi5ncmlkLXJpZ2h0e1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2kxLndwLmNvbS93d3cubWFydGlqbm11cmVhdS5ubC93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMi9wb3J0Zm9saW9faGVhZGVyX2JyZWRhLmpwZz9maXQ9MTYwMCUyQzkwMCZzc2w9MScpO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5ncmlkLXItaGVhZGVye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5idG4tc3VnZ2VzdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uYnRuLXN1Z2dlc3Q6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCl7XHJcblxyXG4gIC5jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDgwdnc7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyLmNvbnRhaW5lci1zZWFyY2h7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLyogI3N1Z2dlc3Rpb24sIC5ncmlkLXItaGVhZGVyLCAuYnRuLXN1Z2dlc3QsIGhye1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiovXHJcbiAgLmdyaWQtbGVmdHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5ncmlkLXJpZ2h0e1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnJlc3VsdHN7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuY2l0eVJlc3VsdD5oNHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcblxyXG4gIC5mb3VuZC1idG57XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuZm91bmQtYnRuOmhvdmVye1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lci10b2dnbGVke1xyXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICB9XHJcbiAgLmNvbnRhaW5lci1qb3VybmV5e1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIFxyXG4gIH1cclxuICAuZ3JpZC1mb3Jte1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAjZjFmMWYxIDFweCBzb2xpZDtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZSA7XHJcbiAgfVxyXG4gIC5wYWdlLWhlYWRlcntcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcblxyXG4gIC5ncmlkLWxvY2F0aW9uc3tcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7IFxyXG4gIH1cclxuXHJcbiAgLmxvY2F0aW9ucy1saXN0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLyogR2lyZC1SaWdodCBMb2NhdGlvbnMgKi9cclxuXHJcbi5ncmlkLWxvY2F0aW9uc3tcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBcclxufVxyXG5cclxuLmdyaWQtbG9jYXRpb25zID4gLnBhZ2UtaGVhZGVye1xyXG4gIGJvcmRlci1ib3R0b206IDBweDtcclxufVxyXG5cclxuLmxvY2F0aW9ucy1saXN0e1xyXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogNTBweDtcclxufVxyXG5cclxuLmN1c3RvbS1jYXJke1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2OEJFOUE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG59XHJcblxyXG4uZmxleC10aXRsZXtcclxuICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG4uZmxleC1idXR0b25ze1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmN1c3RvbS1jYXJkIC5idG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6ICM2OEJFOUE7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbi5jYXJkLWltZ3tcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDM1MHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi8qIHdpZHRoICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIFxyXG4gIHdpZHRoOiAxMHB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2NyXHJcblxyXG4vKiBUcmFjayAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxOyBcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IGdyZXk7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxufVxyXG5cclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG5cclxuICBiYWNrZ3JvdW5kOiAjNjhCRTlBO1xyXG4gIG9wYWNpdHk6IDAuMztcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI0EwRjBBODsgXHJcbiAgXHJcbn1cclxuXHJcbi8qIEVORCBHcmlkLVJpZ2h0ICovIl19 */"

/***/ }),

/***/ "./src/app/journey/journey.component.html":
/*!************************************************!*\
  !*** ./src/app/journey/journey.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!toggled\" class=\"container container-search\">\n  <div class=\"grid-left\">\n    <h2 class=\"container-header\">Search City</h2>\n    <div class=\"flexbox\">\n      <div class=\"search\">\n        <form (submit)=\"searchCity()\" autocomplete=\"off\">\n          <input hidden autocomplete=\"false\">\n          <input id=\"input\" type=\"text\" placeholder=\"       Search . . .\" name=\"search\" [(ngModel)]=\"searchText\"\n            required>\n          <input type=\"submit\" style=\"display:none\" />\n        </form>\n      </div>\n    </div>\n    <div class=\"results\">\n      <div class=\"cityResult\" *ngIf=\"foundCity\">\n          <h4 style=\"text-align:center; padding-bottom:50px; padding-top: 25px;\">Did you mean?</h4>\n        <div>\n          <h3 class=\"found-btn\" style=\"cursor: pointer;\" (click)=\"toggle()\" (click)=\"getLocations()\">{{foundCity.geocode.displayString}}</h3>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"grid-right\">\n    <div id=\"suggestion\" style=\"display:flex; flex-direction: column; justify-content: center;\">\n      <h3 class=\"grid-r-header\">Suggestion of the Day</h3>\n      <hr style=\"width: 50px; border-color: white;\">\n      <h5 class=\"grid-r-header\">Breda, the Netherlands</h5>\n      <button class=\"btn-suggest\">EXPLORE</button>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"toggled\" class=\"container container-toggled\">\n  <div class=\"return\">\n  <button class=\"btn btn-return\" (click)=\"untoggle()\">\n    <fa name=\"arrow-left\" size=\"2x\"></fa>\n  </button>\n</div>\n  <div *ngIf=\"foundCity\" class=\"container-journey\">\n    <div class=\"grid-form\">\n        <h2 class=\"page-header\">{{foundCity.geocode.displayString}}</h2>\n        <button class=\"btn btn-success\" [routerLink]= \"['/createJourney', foundCity.geocode.displayString]\">Create Journey</button>\n    </div>\n    <div class=\"grid-locations\">\n      <h5 class=\"page-header\">Explore the locations of {{foundCity.geocode.displayString}}:</h5>\n      <div class=\"locations-list\">\n        <div *ngFor=\"let f of foundLocations\" class=\"custom-card\">\n          <div class=\"flex-title\">\n            <h5 class=\"title\">{{f.venue.name}}</h5>\n          </div>\n          <div class=\"flex-buttons\">\n            <a class=\"btn\" (click)=\"openVenue(content,f.venue.id)\">View Details</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <ng-template #content let-modal>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">City Locations</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div *ngIf=\"activeVenue\" class=\"modal-body\">\n      <div class=\"card\">\n        <img class=\"card-img\" src=\"{{activeVenue.bestPhoto.prefix}}300x500{{activeVenue.bestPhoto.suffix}}\"\n          alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{activeVenue.name}}</h5>\n          <p class=\"card-text\">{{activeVenue.description}}</p>\n          <h6 class=\"card-title\">{{activeVenue.location.address}}, {{activeVenue.location.city}}</h6>\n        </div>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Close</button>\n    </div>\n  </ng-template>"

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
        this.toggled = false;
    }
    JourneyComponent.prototype.ngOnInit = function () {
    };
    JourneyComponent.prototype.onJourneySubmit = function () {
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
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/v1/user/register', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((function (res) { return res; }))); /// .pipe(map(res => res.json())); aanpassen mocht dit nieuwe code niet functioneren.
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/v1/user/authenticate', user, { headers: headers });
        // .pipe(map((res:Response) => res.json()));
    };
    AuthService.prototype.getProfile = function () {
        this.loadToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json'); // create header object
        headers = headers.append('Authorization', this.authToken); // add a new header, creating a new object
        return this.http.get('http://localhost:3000/api/v1/user/profile', { headers: headers });
        // .pipe(map((res:Response) => res.json()));
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    // loggedIn(){
    //      console.log(this.jwtHelper.isTokenExpired())
    //     return this.jwtHelper.isTokenExpired();
    // }
    AuthService.prototype.loggedIn = function () {
        var token = localStorage.getItem('id_token');
        // Check whether the token is expired and return
        // true or false
        return !this.jwtHelper.isTokenExpired(token);
    };
    AuthService.prototype.isAdmin = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        // console.log(this.user.admin);
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
        this.baseUrl = 'http://localhost:3000/api/v1/journeys';
    }
    JourneyService.prototype.getJourneys = function () {
        return this._http.get(this.baseUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((function (res) { return res; })));
    };
    JourneyService.prototype.getJourneyById = function (id) {
        return this._http.get(this.baseUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((function (res) { return res; })));
    };
    JourneyService.prototype.deleteLocation = function (id, journeyId) {
        console.log(journeyId);
        return this._http.delete('http://localhost:3000/api/v1/city-locations/' + id + '&' + journeyId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((function (res) { return res; })));
    };
    JourneyService.prototype.updateJourney = function (id, update) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this._http.put('http://localhost:3000/api/v1/journeys/update/' + id, update, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((function (res) { return res; })));
    };
    JourneyService.prototype.addJourney = function (journey) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this._http.post('http://localhost:3000/api/v1/journeys', journey, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((function (res) { return res; })));
    };
    JourneyService.prototype.addJourneyToUser = function (journey, id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this._http.put('http://localhost:3000/api/v1/journeys/user' + '/' + id, journey, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((function (res) { return res; })));
    };
    JourneyService.prototype.addLocationToJourney = function (location, journey) {
        var journeyId = journey._id;
        console.log(journeyId);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this._http.post('http://localhost:3000/api/v1/journeys/location' + '/' + journeyId, location, { headers: headers })
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

module.exports = ".container-fluid{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    height: 90vh;\r\n}\r\n\r\n@media screen and (max-width: 600px){\r\n   .container-fluid{\r\n       height: 100vh;\r\n   }\r\n}\r\n\r\n.container{\r\n    display: flex;\r\n    align-content: flex-start;\r\n    height: 80%;\r\n    padding: 0;\r\n    border-radius: 20px;\r\n    background-color: rgb(34, 59, 91);\r\n\r\n}\r\n\r\n.grid-section{\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n}\r\n\r\n.grid-section > img{\r\n    height: 100%;\r\n    width: 100%;\r\n    border-top-right-radius: 20px;\r\n    border-bottom-right-radius: 20px;\r\n    \r\n}\r\n\r\n.grid-section > form{\r\n    padding: 50px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.page-header{\r\n    margin-bottom: 100px;\r\n    text-align: center;\r\n    color: white;\r\n    letter-spacing: 2px;\r\n}\r\n\r\n.form-control{\r\n    border-radius: 20px;\r\n    margin-bottom: 30px;\r\n    padding: 25px;\r\n}\r\n\r\n.grid-section > form > .btn{\r\n   align-self: center;\r\n   width: 50%;\r\n   padding: 15px;\r\n   border-radius: 20px;\r\n   background-color: #68BE9A;\r\n   font-size: 20px;\r\n   letter-spacing: 1px;\r\n}\r\n\r\n.grid-section > form > .btn:hover{\r\n    background-color: #A0F0A8;\r\n    color: rgba(0, 0, 0, 0.4);\r\n }\r\n\r\n.grid-section > p{\r\n    text-align: center;\r\n}\r\n\r\n.grid-section > p > span > a{\r\n    color: palevioletred;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsYUFBYTtDQUNoQjs7QUFFRDtHQUNHO09BQ0ksY0FBYztJQUNqQjtDQUNIOztBQUNEO0lBQ0ksY0FBYztJQUNkLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osV0FBVztJQUNYLG9CQUFvQjtJQUNwQixrQ0FBa0M7O0NBRXJDOztBQUVEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7O0NBRWhCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsaUNBQWlDOztDQUVwQzs7QUFFRDtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsY0FBYztDQUNqQjs7QUFFRDtHQUNHLG1CQUFtQjtHQUNuQixXQUFXO0dBQ1gsY0FBYztHQUNkLG9CQUFvQjtHQUNwQiwwQkFBMEI7R0FDMUIsZ0JBQWdCO0dBQ2hCLG9CQUFvQjtDQUN0Qjs7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQiwwQkFBMEI7RUFDNUI7O0FBRUY7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxxQkFBcUI7Q0FDeEIiLCJmaWxlIjoic3JjL2FwcC91c2VyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogOTB2aDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xyXG4gICAuY29udGFpbmVyLWZsdWlke1xyXG4gICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgfVxyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQsIDU5LCA5MSk7XHJcblxyXG59XHJcblxyXG4uZ3JpZC1zZWN0aW9ue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG59XHJcblxyXG4uZ3JpZC1zZWN0aW9uID4gaW1ne1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi5ncmlkLXNlY3Rpb24gPiBmb3Jte1xyXG4gICAgcGFkZGluZzogNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnBhZ2UtaGVhZGVye1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9se1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG59XHJcblxyXG4uZ3JpZC1zZWN0aW9uID4gZm9ybSA+IC5idG57XHJcbiAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgd2lkdGg6IDUwJTtcclxuICAgcGFkZGluZzogMTVweDtcclxuICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogIzY4QkU5QTtcclxuICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4uZ3JpZC1zZWN0aW9uID4gZm9ybSA+IC5idG46aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTBGMEE4O1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuIH1cclxuXHJcbi5ncmlkLXNlY3Rpb24gPiBwe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZ3JpZC1zZWN0aW9uID4gcCA+IHNwYW4gPiBhe1xyXG4gICAgY29sb3I6IHBhbGV2aW9sZXRyZWQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n<div class=\"container jumbotron\">\n    <section class=\"grid-section \">\n    <form (submit)=\"onLoginSubmit()\">\n        <h2 class=\"page-header\">Login</h2>\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Username\">\n      </div>\n      <div class=\"form-group\">\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\">\n      </div>\n      <input type=\"submit\" class=\"btn btn-success\" value=\"Login\">\n    </form>\n    <p style=\"color:white;\">Don't have an account yet?<span style=\"padding-left:10px; padding-right:10px;\"><a href=\"\" routerLink=\"/user/register\">SIGN UP NOW!</a></span></p>\n   </section>\n   <section class=\"grid-section\">\n      <img src=\"https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260\" alt=\"\">\n   </section>\n  </div>\n</div>"

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




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
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
                console.log('logged in');
                _this.authService.storeUserData(_this.data.token, _this.data.user);
                // this.flashMessage.show("Logged in successfuly!", {cssClass: 'alert-success', timeout: 3000});
                _this.router.navigate(['/']);
            }
            else {
                window.alert('Please fill in the correct username/password');
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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

module.exports = ".container-fluid{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    height: 90vh;\r\n}\r\n\r\n@media screen and (max-width: 600px){\r\n    .container-fluid{\r\n        min-height: 100vh;\r\n    }\r\n }\r\n\r\n.container{\r\n    display: flex;\r\n    align-content: flex-start;\r\n    height: 80%;\r\n    padding: 0;\r\n    border-radius: 20px;\r\n    background-color: rgb(34, 59, 91);\r\n\r\n}\r\n\r\n.grid-section{\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n}\r\n\r\n.grid-section > img{\r\n    height: 100%;\r\n    width: 100%;\r\n    border-top-right-radius: 20px;\r\n    border-bottom-right-radius: 20px;\r\n    \r\n}\r\n\r\n.grid-section > form{\r\n    /* padding: 50px; */\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.page-header{\r\n    padding: 50px;\r\n    text-align: center;\r\n    color: white;\r\n    letter-spacing: 2px;\r\n}\r\n\r\n.form-control{\r\n    border-radius: 20px;\r\n    margin-bottom: 20px;\r\n    padding: 25px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.grid-section > form > .btn{\r\n   align-self: center;\r\n   width: 40%;\r\n   padding: 15px;\r\n   margin-top: 20px;\r\n   border-radius: 20px;  \r\n   background-color: #68BE9A;\r\n   font-size: 20px;\r\n   letter-spacing: 1px;\r\n}\r\n\r\n.grid-section > form > .btn:hover{\r\n    background-color: #A0F0A8;\r\n    color: rgba(0, 0, 0, 0.4);\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsYUFBYTtDQUNoQjs7QUFFRDtJQUNJO1FBQ0ksa0JBQWtCO0tBQ3JCO0VBQ0g7O0FBRUY7SUFDSSxjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLGtDQUFrQzs7Q0FFckM7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osYUFBYTs7Q0FFaEI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixpQ0FBaUM7O0NBRXBDOztBQUVEO0lBQ0ksb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsNkVBQTZFO0NBQ2hGOztBQUdEO0dBQ0csbUJBQW1CO0dBQ25CLFdBQVc7R0FDWCxjQUFjO0dBQ2QsaUJBQWlCO0dBQ2pCLG9CQUFvQjtHQUNwQiwwQkFBMEI7R0FDMUIsZ0JBQWdCO0dBQ2hCLG9CQUFvQjtDQUN0Qjs7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQiwwQkFBMEI7RUFDNUIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogOTB2aDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xyXG4gICAgLmNvbnRhaW5lci1mbHVpZHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIH1cclxuIH1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQsIDU5LCA5MSk7XHJcblxyXG59XHJcblxyXG4uZ3JpZC1zZWN0aW9ue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG59XHJcblxyXG4uZ3JpZC1zZWN0aW9uID4gaW1ne1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi5ncmlkLXNlY3Rpb24gPiBmb3Jte1xyXG4gICAgLyogcGFkZGluZzogNTBweDsgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnBhZ2UtaGVhZGVye1xyXG4gICAgcGFkZGluZzogNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2x7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG59XHJcblxyXG5cclxuLmdyaWQtc2VjdGlvbiA+IGZvcm0gPiAuYnRue1xyXG4gICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgIHdpZHRoOiA0MCU7XHJcbiAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDIwcHg7ICBcclxuICAgYmFja2dyb3VuZC1jb2xvcjogIzY4QkU5QTtcclxuICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4uZ3JpZC1zZWN0aW9uID4gZm9ybSA+IC5idG46aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTBGMEE4O1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuIH0iXX0= */"

/***/ }),

/***/ "./src/app/user/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/user/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n<div class=\"container jumbotron\">\n    <section class=\"grid-section \">\n    <form (submit)=\"onRegisterSubmit()\">\n        <h2 class=\"page-header\">Register</h2>\n      <div class=\"form-group\">\n        <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" placeholder=\"Name\" required>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" placeholder=\"Username\" required minlength=\"2\" maxlength=\"20\">\n      </div>\n      <div class=\"form-group\">\n        <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\" required>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" required minlength=\"4\" maxlength=\"20\">\n      </div>\n      <input type=\"submit\" class=\"btn btn-success\"  value=\"Submit\">\n    </form>\n    </section>\n    <section class=\"grid-section\">\n        <img src=\"https://images.pexels.com/photos/129830/pexels-photo-129830.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260\" alt=\"\">\n     </section>\n  </div>\n</div>"

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





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, authService, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
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
            window.alert('Please fill in all the fields');
            return false;
        }
        //Validate email
        if (!this.validateService.validateEmail(user.email)) {
            window.alert('Please fill in a correct e-mail');
            return false;
        }
        //Authenticate user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data) {
                window.alert('Registered successfuly');
                _this.router.navigate(['/user/login']);
            }
            else {
                window.alert('Failed to register');
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_validate_service__WEBPACK_IMPORTED_MODULE_4__["ValidateService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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