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
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_user_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user/dashboard/dashboard.component */ "./src/app/components/user/dashboard/dashboard.component.ts");
/* harmony import */ var _components_userauth_userauth_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/userauth/userauth.component */ "./src/app/components/userauth/userauth.component.ts");
/* harmony import */ var _components_userauth_signin_signin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/userauth/signin/signin.component */ "./src/app/components/userauth/signin/signin.component.ts");
/* harmony import */ var _components_userauth_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/userauth/signup/signup.component */ "./src/app/components/userauth/signup/signup.component.ts");
/* harmony import */ var _components_user_search_host_search_host_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/user/search-host/search-host.component */ "./src/app/components/user/search-host/search-host.component.ts");
/* harmony import */ var _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/user/profile/profile.component */ "./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var _components_user_message_message_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/user/message/message.component */ "./src/app/components/user/message/message.component.ts");
/* harmony import */ var _components_user_request_request_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/user/request/request.component */ "./src/app/components/user/request/request.component.ts");
/* harmony import */ var _components_notfound_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/notfound.component */ "./src/app/components/notfound.component.ts");
/* harmony import */ var _components_user_profile_about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/user/profile/about/about.component */ "./src/app/components/user/profile/about/about.component.ts");
/* harmony import */ var _components_user_profile_edit_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/user/profile/edit/edit.component */ "./src/app/components/user/profile/edit/edit.component.ts");
/* harmony import */ var _components_user_public_trip_public_trip_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/user/public-trip/public-trip.component */ "./src/app/components/user/public-trip/public-trip.component.ts");
/* harmony import */ var _components_user_profile_photos_photos_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/user/profile/photos/photos.component */ "./src/app/components/user/profile/photos/photos.component.ts");
/* harmony import */ var _components_user_profile_home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/user/profile/home/home.component */ "./src/app/components/user/profile/home/home.component.ts");
/* harmony import */ var _components_user_profile_references_references_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/user/profile/references/references.component */ "./src/app/components/user/profile/references/references.component.ts");
/* harmony import */ var _services_user_resolve__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/user.resolve */ "./src/app/services/user.resolve.ts");





















var routes = [
    { path: '', redirectTo: 'Userauth', pathMatch: 'full' },
    {
        path: 'Userauth', component: _components_userauth_userauth_component__WEBPACK_IMPORTED_MODULE_6__["UserauthComponent"], resolve: { TokenResolve: _services_user_resolve__WEBPACK_IMPORTED_MODULE_20__["TokenResolve"] },
        children: [
            { path: '', redirectTo: 'SignIn', pathMatch: 'full' },
            { path: 'SignUp', component: _components_userauth_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"] },
            { path: 'SignIn', component: _components_userauth_signin_signin_component__WEBPACK_IMPORTED_MODULE_7__["SigninComponent"] },
            { path: '**', component: _components_notfound_component__WEBPACK_IMPORTED_MODULE_13__["NotfoundComponent"] },
        ]
    },
    {
        path: 'Users', component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        children: [
            { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
            { path: 'Dashboard', component: _components_user_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], resolve: { users: _services_user_resolve__WEBPACK_IMPORTED_MODULE_20__["UserResolve"] } },
            { path: 'Profile/Edit', component: _components_user_profile_edit_edit_component__WEBPACK_IMPORTED_MODULE_15__["EditComponent"], resolve: { users: _services_user_resolve__WEBPACK_IMPORTED_MODULE_20__["UserResolve"], homeres: _services_user_resolve__WEBPACK_IMPORTED_MODULE_20__["HomeResolve"] } },
            {
                path: 'Profile', component: _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"], resolve: { users: _services_user_resolve__WEBPACK_IMPORTED_MODULE_20__["ProfileResolve"] },
                children: [
                    { path: '', redirectTo: 'About', pathMatch: 'full' },
                    { path: 'About', component: _components_user_profile_about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"] },
                    { path: 'Myhome', component: _components_user_profile_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"] },
                    { path: 'Photos', component: _components_user_profile_photos_photos_component__WEBPACK_IMPORTED_MODULE_17__["PhotosComponent"] },
                    { path: 'References', component: _components_user_profile_references_references_component__WEBPACK_IMPORTED_MODULE_19__["ReferencesComponent"], },
                ]
            },
            { path: 'People', redirectTo: "/Users/Profile/About", pathMatch: 'full' },
            {
                path: 'People/:id', component: _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"], resolve: { users: _services_user_resolve__WEBPACK_IMPORTED_MODULE_20__["ProfileResolve"] },
                children: [
                    { path: '', redirectTo: "About", pathMatch: 'full' },
                    { path: 'About', component: _components_user_profile_about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"] },
                    { path: 'Myhome', component: _components_user_profile_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"] },
                    { path: 'Photos', component: _components_user_profile_photos_photos_component__WEBPACK_IMPORTED_MODULE_17__["PhotosComponent"] },
                    { path: 'References', component: _components_user_profile_references_references_component__WEBPACK_IMPORTED_MODULE_19__["ReferencesComponent"], },
                ]
            },
            {
                path: 'Search',
                component: _components_user_search_host_search_host_component__WEBPACK_IMPORTED_MODULE_9__["SearchHostComponent"], resolve: { users: _services_user_resolve__WEBPACK_IMPORTED_MODULE_20__["ProfileResolve"] }
            },
            {
                path: 'PublicTrip',
                component: _components_user_public_trip_public_trip_component__WEBPACK_IMPORTED_MODULE_16__["PublicTripComponent"], resolve: { users: _services_user_resolve__WEBPACK_IMPORTED_MODULE_20__["ProfileResolve"] }
            },
            {
                path: 'PublicTrip/:id',
                component: _components_user_public_trip_public_trip_component__WEBPACK_IMPORTED_MODULE_16__["PublicTripComponent"]
            },
            { path: 'Message', component: _components_user_message_message_component__WEBPACK_IMPORTED_MODULE_11__["MessageComponent"], resolve: { users: _services_user_resolve__WEBPACK_IMPORTED_MODULE_20__["ProfileResolve"] } },
            { path: 'Request', component: _components_user_request_request_component__WEBPACK_IMPORTED_MODULE_12__["RequestComponent"], resolve: { users: _services_user_resolve__WEBPACK_IMPORTED_MODULE_20__["ProfileResolve"] } },
            { path: '404', component: _components_notfound_component__WEBPACK_IMPORTED_MODULE_13__["NotfoundComponent"] },
            { path: '**', component: _components_notfound_component__WEBPACK_IMPORTED_MODULE_13__["NotfoundComponent"] },
        ]
    },
    { path: '**', component: _components_notfound_component__WEBPACK_IMPORTED_MODULE_13__["NotfoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
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

module.exports = "/* .container{\r\n    padding-top: 70px;\r\n    max-width: 1280px;\r\n\r\n}\r\n.col{\r\n    padding: 0px ;\r\n}   \r\n\r\n.header{\r\n    \r\n    top: 0;\r\n    width: 100%;\r\n    background-color: white;\r\n    position: fixed;\r\n    z-index: 1000;\r\n}\r\n\r\n.footer{\r\n    position: absolute;\r\n    height: 200px;\r\n    background-color: white;\r\n    width: 100%;\r\n    bottom: 0;\r\n}\r\n.box{\r\n    background-color: white;\r\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.175) !important;\r\n    border-radius: 0.15rem !important;\r\n    margin-bottom: 10px;\r\n}\r\n.box-header{\r\n    padding: 15px 20px;\r\n    border-bottom: 1px solid rgba(0,0,0,0.15);\r\n}\r\n.box-header span{\r\n    font-size: 17px;\r\n    font-weight: 600;\r\n}\r\n.box-header i{\r\n    font-size: 1.1em;;\r\n    padding-right: 8px;\r\n}\r\n.photo{\r\n    object-fit: cover;\r\n    width: 200px;\r\n    height: 200px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n   border-radius: 50%;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0RHIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuY29udGFpbmVye1xyXG4gICAgcGFkZGluZy10b3A6IDcwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEyODBweDtcclxuXHJcbn1cclxuLmNvbHtcclxuICAgIHBhZGRpbmc6IDBweCA7XHJcbn0gICBcclxuXHJcbi5oZWFkZXJ7XHJcbiAgICBcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG59XHJcblxyXG4uZm9vdGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3R0b206IDA7XHJcbn1cclxuLmJveHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTc1KSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4xNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uYm94LWhlYWRlcntcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMTUpO1xyXG59XHJcbi5ib3gtaGVhZGVyIHNwYW57XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5ib3gtaGVhZGVyIGl7XHJcbiAgICBmb250LXNpemU6IDEuMWVtOztcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxufVxyXG4ucGhvdG97XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59ICovXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <router-outlet></router-outlet>\r\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'TravelHelperFrontEnd';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_userauth_userauth_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/userauth/userauth.component */ "./src/app/components/userauth/userauth.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_userauth_signin_signin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/userauth/signin/signin.component */ "./src/app/components/userauth/signin/signin.component.ts");
/* harmony import */ var _components_userauth_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/userauth/signup/signup.component */ "./src/app/components/userauth/signup/signup.component.ts");
/* harmony import */ var _components_user_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/user/header/header.component */ "./src/app/components/user/header/header.component.ts");
/* harmony import */ var _components_user_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/user/footer/footer.component */ "./src/app/components/user/footer/footer.component.ts");
/* harmony import */ var _components_user_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/user/dashboard/dashboard.component */ "./src/app/components/user/dashboard/dashboard.component.ts");
/* harmony import */ var _services_userauth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/userauth.service */ "./src/app/services/userauth.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth/auth.interceptor */ "./src/app/auth/auth.interceptor.ts");
/* harmony import */ var _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/user/profile/profile.component */ "./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var _components_user_message_message_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/user/message/message.component */ "./src/app/components/user/message/message.component.ts");
/* harmony import */ var _components_user_request_request_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/user/request/request.component */ "./src/app/components/user/request/request.component.ts");
/* harmony import */ var _components_notfound_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/notfound.component */ "./src/app/components/notfound.component.ts");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-click-outside */ "./node_modules/ng-click-outside/lib/index.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _components_user_profile_about_about_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/user/profile/about/about.component */ "./src/app/components/user/profile/about/about.component.ts");
/* harmony import */ var _components_user_people_people_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/user/people/people.component */ "./src/app/components/user/people/people.component.ts");
/* harmony import */ var _components_user_profile_edit_edit_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/user/profile/edit/edit.component */ "./src/app/components/user/profile/edit/edit.component.ts");
/* harmony import */ var _components_user_search_host_search_host_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/user/search-host/search-host.component */ "./src/app/components/user/search-host/search-host.component.ts");
/* harmony import */ var _pipes_format_data_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pipes/format-data.pipe */ "./src/app/pipes/format-data.pipe.ts");
/* harmony import */ var _components_user_public_trip_public_trip_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/user/public-trip/public-trip.component */ "./src/app/components/user/public-trip/public-trip.component.ts");
/* harmony import */ var _components_user_pubic_trip_content_pubic_trip_content_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/user/pubic-trip-content/pubic-trip-content.component */ "./src/app/components/user/pubic-trip-content/pubic-trip-content.component.ts");
/* harmony import */ var _components_user_reuse_trip_trip_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/user/reuse/trip/trip.component */ "./src/app/components/user/reuse/trip/trip.component.ts");
/* harmony import */ var _components_user_reuse_publictrip_publictrip_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/user/reuse/publictrip/publictrip.component */ "./src/app/components/user/reuse/publictrip/publictrip.component.ts");
/* harmony import */ var _components_user_reuse_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/user/reuse/dropdown/dropdown.component */ "./src/app/components/user/reuse/dropdown/dropdown.component.ts");
/* harmony import */ var _components_user_reuse_upload_upload_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/user/reuse/upload/upload.component */ "./src/app/components/user/reuse/upload/upload.component.ts");
/* harmony import */ var _components_user_profile_photos_photos_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/user/profile/photos/photos.component */ "./src/app/components/user/profile/photos/photos.component.ts");
/* harmony import */ var _components_user_profile_home_home_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/user/profile/home/home.component */ "./src/app/components/user/profile/home/home.component.ts");
/* harmony import */ var _services_user_resolve__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./services/user.resolve */ "./src/app/services/user.resolve.ts");
/* harmony import */ var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @ngx-progressbar/core */ "./node_modules/@ngx-progressbar/core/fesm5/ngx-progressbar-core.js");
/* harmony import */ var _components_user_reuse_reference_reference_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/user/reuse/reference/reference.component */ "./src/app/components/user/reuse/reference/reference.component.ts");
/* harmony import */ var _components_user_profile_references_references_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/user/profile/references/references.component */ "./src/app/components/user/profile/references/references.component.ts");
/* harmony import */ var _components_user_reuse_loading_loading_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/user/reuse/loading/loading.component */ "./src/app/components/user/reuse/loading/loading.component.ts");
/* harmony import */ var _components_user_reuse_write_reference_modal_write_reference_modal_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/user/reuse/write-reference-modal/write-reference-modal.component */ "./src/app/components/user/reuse/write-reference-modal/write-reference-modal.component.ts");
/* harmony import */ var _components_user_reuse_send_request_modal_send_request_modal_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/user/reuse/send-request-modal/send-request-modal.component */ "./src/app/components/user/reuse/send-request-modal/send-request-modal.component.ts");
/* harmony import */ var _components_user_reuse_send_message_modal_send_message_modal_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/user/reuse/send-message-modal/send-message-modal.component */ "./src/app/components/user/reuse/send-message-modal/send-message-modal.component.ts");
/* harmony import */ var _components_user_reuse_offer_to_host_offer_to_host_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/user/reuse/offer-to-host/offer-to-host.component */ "./src/app/components/user/reuse/offer-to-host/offer-to-host.component.ts");
/* harmony import */ var _components_user_reuse_carousel_modal_carousel_modal_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/user/reuse/carousel-modal/carousel-modal.component */ "./src/app/components/user/reuse/carousel-modal/carousel-modal.component.ts");


















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_userauth_userauth_component__WEBPACK_IMPORTED_MODULE_9__["UserauthComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_10__["UserComponent"],
                _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_11__["AdminComponent"],
                _components_userauth_signin_signin_component__WEBPACK_IMPORTED_MODULE_12__["SigninComponent"],
                _components_userauth_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__["SignupComponent"],
                _components_user_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                _components_user_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                _components_user_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"],
                _components_user_search_host_search_host_component__WEBPACK_IMPORTED_MODULE_28__["SearchHostComponent"],
                _components_user_people_people_component__WEBPACK_IMPORTED_MODULE_26__["PeopleComponent"],
                _pipes_format_data_pipe__WEBPACK_IMPORTED_MODULE_29__["FormatDataPipe"],
                _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__["ProfileComponent"],
                _components_user_message_message_component__WEBPACK_IMPORTED_MODULE_21__["MessageComponent"],
                _components_user_request_request_component__WEBPACK_IMPORTED_MODULE_22__["RequestComponent"],
                _components_notfound_component__WEBPACK_IMPORTED_MODULE_23__["NotfoundComponent"],
                _components_user_profile_about_about_component__WEBPACK_IMPORTED_MODULE_25__["AboutComponent"],
                _components_user_profile_edit_edit_component__WEBPACK_IMPORTED_MODULE_27__["EditComponent"],
                _components_user_public_trip_public_trip_component__WEBPACK_IMPORTED_MODULE_30__["PublicTripComponent"],
                _components_user_pubic_trip_content_pubic_trip_content_component__WEBPACK_IMPORTED_MODULE_31__["PubicTripContentComponent"],
                _components_user_reuse_trip_trip_component__WEBPACK_IMPORTED_MODULE_32__["TripComponent"],
                _components_user_reuse_publictrip_publictrip_component__WEBPACK_IMPORTED_MODULE_33__["PublictripComponent"],
                _components_user_reuse_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_34__["DropdownComponent"],
                _components_user_reuse_upload_upload_component__WEBPACK_IMPORTED_MODULE_35__["UploadComponent"],
                _components_user_profile_photos_photos_component__WEBPACK_IMPORTED_MODULE_36__["PhotosComponent"],
                _components_user_profile_home_home_component__WEBPACK_IMPORTED_MODULE_37__["HomeComponent"],
                _components_user_reuse_reference_reference_component__WEBPACK_IMPORTED_MODULE_40__["ReferenceComponent"],
                _components_user_profile_references_references_component__WEBPACK_IMPORTED_MODULE_41__["ReferencesComponent"],
                _components_user_reuse_loading_loading_component__WEBPACK_IMPORTED_MODULE_42__["LoadingComponent"],
                _components_user_reuse_write_reference_modal_write_reference_modal_component__WEBPACK_IMPORTED_MODULE_43__["WriteReferenceModalComponent"],
                _components_user_reuse_send_request_modal_send_request_modal_component__WEBPACK_IMPORTED_MODULE_44__["SendRequestModalComponent"],
                _components_user_reuse_send_message_modal_send_message_modal_component__WEBPACK_IMPORTED_MODULE_45__["SendMessageModalComponent"],
                _components_user_reuse_offer_to_host_offer_to_host_component__WEBPACK_IMPORTED_MODULE_46__["OfferToHostComponent"],
                _components_user_reuse_carousel_modal_carousel_modal_component__WEBPACK_IMPORTED_MODULE_47__["CarouselModalComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot({
                    positionClass: 'toast-custom',
                    timeOut: 1000,
                    progressBar: true
                }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                ng_click_outside__WEBPACK_IMPORTED_MODULE_24__["ClickOutsideModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModule"],
                _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_39__["NgProgressModule"].withConfig({
                    color: '#ED6504',
                    spinner: false,
                }),
            ],
            providers: [_services_userauth_service__WEBPACK_IMPORTED_MODULE_17__["UserauthService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_19__["AuthInterceptor"],
                    multi: true,
                },
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModal"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbActiveModal"],
                _services_user_resolve__WEBPACK_IMPORTED_MODULE_38__["UserResolve"],
                _services_user_resolve__WEBPACK_IMPORTED_MODULE_38__["ProfileResolve"],
                _services_user_resolve__WEBPACK_IMPORTED_MODULE_38__["TokenResolve"],
                _services_user_resolve__WEBPACK_IMPORTED_MODULE_38__["HomeResolve"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('token') != null)
            return true;
        else {
            this.router.navigate(['/Userauth']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(router) {
        this.router = router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (localStorage.getItem('token') != null) {
            var clonedReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
            });
            return next.handle(clonedReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (succ) { }, function (err) {
                if (err.status == 401) {
                    localStorage.removeItem('token');
                    _this.router.navigateByUrl('/Userauth');
                }
            }));
        }
        else
            return next.handle(req.clone());
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/components/admin/admin.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/admin/admin.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  admin works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/components/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/components/notfound.component.ts":
/*!**************************************************!*\
  !*** ./src/app/components/notfound.component.ts ***!
  \**************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notfound',
            template: '<h4>Not Found!</h4>',
            styles: ["\n\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/components/user/dashboard/dashboard.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/user/dashboard/dashboard.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\r\n    color: #27374c;\r\n}\r\na:hover{\r\n    text-decoration: none;\r\n}\r\n.content-left{\r\n    /* min-width: 220px; */\r\n    max-width: 300px; \r\n    min-width: 260px;\r\n   \r\n    padding: 0px 5px 0px 5px !important;\r\n}\r\n.content-right{\r\n    padding: 0px 5px 0px 5px !important;\r\n    min-width: 100px;\r\n}\r\n.content-right .row{\r\n    margin: 0px ;\r\n}\r\n.box-action{\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n.box-action a{\r\n    display: inline-block;\r\n    margin: 12px 0px;\r\n    font-size: 1.1em;\r\n    color: #287FB8;\r\n    font-weight: 500;\r\n}\r\n.box-action a:hover{\r\n    color: #ED6504;\r\n}\r\n.box-action i{\r\n    padding-left: 5px;\r\n}\r\n.user-info{\r\n    padding-top: 50px;\r\n    text-align: center;\r\n}\r\n.info{\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n}\r\n.status{\r\n    border-top: 1px solid rgba(0,0,0,0.15);\r\n    padding-bottom: 30px;\r\n    padding-top: 30px;\r\n}\r\n.info p{\r\n    padding: 3px 0px 3px 0px;\r\n    margin-bottom: 0px !important;\r\n}\r\n.status-value {\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n    padding: 10px 10px 10px 10px;\r\n\r\n}\r\n.profile-content{\r\n    padding: 20px;\r\n    border-bottom: 1px solid rgba(0,0,0,0.15);\r\n}\r\n.progress-bar{\r\n    text-align: left;\r\n    width: 100%;\r\n    background-color: #cdc9c9;\r\n    height: 35px;\r\n    border: 1px solid rgba(0,0,0,0.15);\r\n}\r\n.percent{\r\n    display: flex;\r\n    align-items: center;\r\n    height: 100%;\r\n    background-color: #41b866;\r\n}\r\n.progress-bar span{\r\n    padding-left: 10px;\r\n    overflow: visible;\r\n\r\n\r\n   \r\n}\r\n/* info */\r\n.proposed-box{\r\n    padding: 15px;\r\n}\r\n.proposed-box .item{\r\n   padding: 5px;\r\n}\r\n.proposed-box a{\r\n    display: block;\r\n    /* background-image: url('/assets/imgs/background.jpg'); */\r\n    background-size: cover;\r\n    background-position: center;\r\n    width: 100%;\r\n    height: 250px;\r\n    text-align: center;\r\n    color: white;\r\n }\r\n.proposed-box a:hover{\r\n   cursor: pointer;\r\n }\r\n.proposed-box p{\r\n     font-weight: 600;\r\n    font-size: 22px;\r\n    margin: 0px;\r\n    padding: 25px 0px 5px 0px;\r\n }\r\n.proposed-box span{\r\n    font-weight: 400;\r\n    font-size: 17px;\r\n}\r\n.search-box{\r\n    padding: 15px 0px;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.search-form{\r\n    display: inline-block;\r\n    text-align: center;\r\n    position: relative;\r\n    \r\n}\r\n.search-box form{\r\n    border: 2px solid #c5ccd5;\r\n    border-radius: 25px;\r\n    padding: 0.5px 10px 0.5px 20px;\r\n}\r\n.search-form input{\r\n    height: 38px;\r\n    width: 300px;\r\n    display: inline-block;\r\n     border: none;\r\n}\r\n.search-form input:focus {\r\n    outline: none;\r\n}\r\n.search-form input:hover{\r\n    cursor: pointer;\r\n}\r\n.search-box  button {\r\n\r\n    border-radius: 25px;\r\n    background: none;\r\n    border: none;\r\n}\r\n.search-box  button:focus{\r\n    outline: none;\r\n}\r\n/*find-host*/\r\n.notrip{\r\n    height: 150px;\r\n    border-bottom: 1px solid rgba(0,0,0,0.15);\r\n    display: flex;\r\n    background: #eceef0;\r\n    align-items: center;\r\n}\r\n.notrip span{\r\n    margin: auto;\r\n}\r\n/*plans*/\r\n/*public-trips*/\r\n@media screen and (max-width: 768px) {\r\n    .content-left{\r\n        flex: 0 0 100%;\r\n        max-width: 100%;\r\n        order: 2;\r\n    }\r\n    .content-right{\r\n        order: 1;\r\n\r\n    }\r\n    .hide{\r\n        display: none;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixnQkFBZ0I7O0lBRWhCLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxzQ0FBc0M7SUFDdEMsb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiw0QkFBNEI7O0FBRWhDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IseUNBQXlDO0FBQzdDO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7Ozs7QUFJckI7QUFDQSxTQUFTO0FBR1Q7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7R0FDRyxZQUFZO0FBQ2Y7QUFDQTtJQUNJLGNBQWM7SUFDZCwwREFBMEQ7SUFDMUQsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZO0NBQ2Y7QUFDQTtHQUNFLGVBQWU7Q0FDakI7QUFDQTtLQUNJLGdCQUFnQjtJQUNqQixlQUFlO0lBQ2YsV0FBVztJQUNYLHlCQUF5QjtDQUM1QjtBQUNBO0lBQ0csZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0M7SUFDRyxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHFCQUFxQjtLQUNwQixZQUFZO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7O0lBRUksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBSUEsWUFBWTtBQUNaO0lBQ0ksYUFBYTtJQUNiLHlDQUF5QztJQUN6QyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBLFFBQVE7QUFHUixlQUFlO0FBQ2Y7SUFDSTtRQUNJLGNBQWM7UUFDZCxlQUFlO1FBQ2YsUUFBUTtJQUNaO0lBQ0E7UUFDSSxRQUFROztJQUVaO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXIvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXtcclxuICAgIGNvbG9yOiAjMjczNzRjO1xyXG59XHJcbmE6aG92ZXJ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmNvbnRlbnQtbGVmdHtcclxuICAgIC8qIG1pbi13aWR0aDogMjIwcHg7ICovXHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4OyBcclxuICAgIG1pbi13aWR0aDogMjYwcHg7XHJcbiAgIFxyXG4gICAgcGFkZGluZzogMHB4IDVweCAwcHggNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbnRlbnQtcmlnaHR7XHJcbiAgICBwYWRkaW5nOiAwcHggNXB4IDBweCA1cHggIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbn1cclxuLmNvbnRlbnQtcmlnaHQgLnJvd3tcclxuICAgIG1hcmdpbjogMHB4IDtcclxufVxyXG4uYm94LWFjdGlvbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5ib3gtYWN0aW9uIGF7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDEycHggMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIGNvbG9yOiAjMjg3RkI4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uYm94LWFjdGlvbiBhOmhvdmVye1xyXG4gICAgY29sb3I6ICNFRDY1MDQ7XHJcbn1cclxuLmJveC1hY3Rpb24gaXtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcblxyXG4udXNlci1pbmZve1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmluZm97XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbi5zdGF0dXN7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjE1KTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuLmluZm8gcHtcclxuICAgIHBhZGRpbmc6IDNweCAwcHggM3B4IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5zdGF0dXMtdmFsdWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG5cclxufVxyXG4ucHJvZmlsZS1jb250ZW50e1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMTUpO1xyXG59XHJcbi5wcm9ncmVzcy1iYXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RjOWM5O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjE1KTtcclxufVxyXG4ucGVyY2VudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxYjg2NjtcclxufVxyXG4ucHJvZ3Jlc3MtYmFyIHNwYW57XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuXHJcblxyXG4gICBcclxufVxyXG4vKiBpbmZvICovXHJcblxyXG5cclxuLnByb3Bvc2VkLWJveHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuLnByb3Bvc2VkLWJveCAuaXRlbXtcclxuICAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5wcm9wb3NlZC1ib3ggYXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZ3MvYmFja2dyb3VuZC5qcGcnKTsgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiB9XHJcbiAucHJvcG9zZWQtYm94IGE6aG92ZXJ7XHJcbiAgIGN1cnNvcjogcG9pbnRlcjtcclxuIH1cclxuIC5wcm9wb3NlZC1ib3ggcHtcclxuICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAyNXB4IDBweCA1cHggMHB4O1xyXG4gfVxyXG4gLnByb3Bvc2VkLWJveCBzcGFue1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuXHJcbi5zZWFyY2gtYm94e1xyXG4gICAgcGFkZGluZzogMTVweCAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIC5zZWFyY2gtZm9ybXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIFxyXG59XHJcbi5zZWFyY2gtYm94IGZvcm17XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYzVjY2Q1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIHBhZGRpbmc6IDAuNXB4IDEwcHggMC41cHggMjBweDtcclxufVxyXG4uc2VhcmNoLWZvcm0gaW5wdXR7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5zZWFyY2gtZm9ybSBpbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5zZWFyY2gtZm9ybSBpbnB1dDpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc2VhcmNoLWJveCAgYnV0dG9uIHtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4uc2VhcmNoLWJveCAgYnV0dG9uOmZvY3Vze1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuXHJcblxyXG4vKmZpbmQtaG9zdCovXHJcbi5ub3RyaXB7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xNSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZDogI2VjZWVmMDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLm5vdHJpcCBzcGFue1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi8qcGxhbnMqL1xyXG5cclxuXHJcbi8qcHVibGljLXRyaXBzKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jb250ZW50LWxlZnR7XHJcbiAgICAgICAgZmxleDogMCAwIDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG9yZGVyOiAyO1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQtcmlnaHR7XHJcbiAgICAgICAgb3JkZXI6IDE7XHJcblxyXG4gICAgfVxyXG4gICAgLmhpZGV7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/user/dashboard/dashboard.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/user/dashboard/dashboard.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"content-left col-3 \">\r\n    <div class=\"box user-info\">\r\n      <a [routerLink]=\"['../Profile']\"><img class=\"photo img-responsive\"\r\n          [src]=\"user.avatarLocation?user.avatarLocation:'./../../../../assets/imgs/profile-picture-placeholder.png'\"></a>\r\n      <div class=\"info\">\r\n        <p style=\"font-size:30px;\">{{user.fullName}}</p>\r\n        <p>{{user.address}}</p>\r\n      </div>\r\n      <div class=\"status\">\r\n        <p style=\"font-size:18px;\">Your status</p>\r\n        <span *ngIf=\"user.id\" class=\"status-value\" [style.color]=\"user.status?'green':'red'\">\r\n          {{user.status?'Acepting Guest':'Not Acepting Guest'}}\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"box profile\">\r\n      <div class=\"box-header\">\r\n        <span>MY PROFILE</span>\r\n      </div>\r\n      <div class=\"profile-content\">\r\n        <div class=\"progress-bar\">\r\n          <div class=\"percent\" [style.width.%]=\"percent\">\r\n            <span>{{percent}}% Complete</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"box-action\">\r\n        <a routerLink=\"/Users/Profile/Edit\"><span>Complete My Profile</span><span><i\r\n              class=\"fas fa-arrow-circle-right\"></i></span> </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Content left -->\r\n  <div class=\"content-right col \">\r\n    <div class=\"box find-host\">\r\n      <div class=\"box-header\">\r\n        <i class=\"fas fa-couch\"></i> <span>FIND HOST AT WHERE YOU ARE GOING TO</span>\r\n      </div>\r\n      <div class=\"proposed-box row\">\r\n        <div class=\"item col\">\r\n          <a style=\"background-image: url('/assets/imgs/cali.jpg');\">\r\n            <p>Napa Valley, California</p>\r\n            <span>5,600+ hosts</span>\r\n          </a>\r\n        </div>\r\n        <div class=\"item col\">\r\n          <a style=\"background-image: url('/assets/imgs/bord.jpg');\">\r\n            <p>Bordeaux, France</p>\r\n            <span>6,600+ hosts</span>\r\n          </a>\r\n        </div>\r\n        <div class=\"item col hide\">\r\n          <a style=\"background-image: url('/assets/imgs/tus.jpg');\">\r\n            <p>Tuscany, Italy</p>\r\n            <span>7,600+ hosts</span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div style=\"text-align: center;border-top: solid 1px rgba(0,0,0,0.15);padding-top: 10px;\">\r\n        <span style=\"font-weight: 600\">Find hosts wherever I’m going</span>\r\n      </div>\r\n      <div class=\"search-box\">\r\n        <form (submit)=\"onSubmit(formSearch);\" #formSearch=\"ngForm\" autocomplete=\"off\" (clickOutside)=\"textInput = '';\">\r\n\r\n          <div class=\"search-form\">\r\n            <input ngModel [(ngModel)]=\"textInput\" (keyup)=\"onKeyup();\" name=\"input\" class=\"\" type=\"text\"\r\n              placeholder=\"Where are you going?\">\r\n\r\n            <app-dropdown [searchedSubject]=\"searchedSubject\"></app-dropdown>\r\n          </div>\r\n          <button type=\"submit\"><i style=\"color:#a0acbb;\" class=\"fas fa-search\"></i></button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Find host-->\r\n    <div class=\"box plans\">\r\n      <div class=\"box-header\">\r\n        <i class=\"fas fa-plane\"></i><span>YOUR TRIP'S PLANS</span>\r\n      </div>\r\n      <ng-template #loading>\r\n        <app-loading></app-loading>\r\n      </ng-template>\r\n      <ng-container *ngIf=\"trips;else loading\">\r\n        <ng-container *ngFor=\"let trip of trips\">\r\n          <app-trip [isUser]=\"isUser\" [trip]=\"trip\"></app-trip>\r\n        </ng-container>\r\n        <div *ngIf=\"(!trips.length)\" class=\"notrip\">\r\n          <span>You have no upcoming trips.</span>\r\n        </div>\r\n      </ng-container>\r\n\r\n      <div class=\"box-action\">\r\n        <a routerLink=\"/Users/PublicTrip\"><span>Your Trip's Plan</span><span><i\r\n              class=\"fas fa-arrow-circle-right\"></i></span> </a>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Plan -->\r\n    <div class=\"box public-trips\">\r\n      <div class=\"box-header\">\r\n        <i class=\"fas fa-users\"></i><span>TRAVELERS LOOKING FOR HOSTS</span>\r\n      </div>\r\n      <ng-template #loading>\r\n        <app-loading></app-loading>\r\n      </ng-template>\r\n      <ng-container *ngIf=\"publicTrips;else loading\">\r\n      <ng-container *ngFor=\"let publicTrip of publicTrips\">\r\n        <app-publictrip [publicTrip]=\"publicTrip\"></app-publictrip>\r\n      </ng-container>\r\n      </ng-container>\r\n      <div class=\"box-action\">\r\n        <a href=\"\"><span>See More Public Trips</span><span><i class=\"fas fa-arrow-circle-right\"></i></span> </a>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/components/user/dashboard/dashboard.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/user/dashboard/dashboard.component.ts ***!
  \******************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(service, activatedRoute, router) {
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.isUser = true;
        this.textInput = "";
        this.user = {};
        this.searchedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.trips=[];
        //this.user.publicTrips = [];
        this.user = this.activatedRoute.snapshot.data.users;
        var d = {
            address: this.user.address,
            gender: this.user.gender,
            birthday: this.user.birthday,
            occupation: this.user.occupation,
            fluentLanguage: this.user.fluentLanguage,
            learningLanguage: this.user.learningLanguage,
            about: this.user.about,
            interest: this.user.interest,
            status: this.user.status,
            avatarLocation: this.user.avatarLocation,
        };
        var x = Object.values(d).filter(function (x) { return (x !== null && x !== ""); }).length;
        this.percent = x / 10 * 100;
        this.service.getUserPublicTrips().subscribe(function (res) {
            _this.trips = res;
        });
        this.service.getPublicTrips().subscribe(function (res) {
            _this.publicTrips = res;
        });
    };
    DashboardComponent.prototype.onKeyup = function () {
        this.searchedSubject.next(this.textInput);
    };
    DashboardComponent.prototype.onSubmit = function (form) {
        console.log(form.value.input);
        this.router.navigate(['/Users/Search'], { queryParams: { type: 'host', location: form.value.input } });
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/user/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/user/dashboard/dashboard.component.css"), __webpack_require__(/*! ./../../../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/user/footer/footer.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/user/footer/footer.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\r\n  display: flex;\r\n  padding: 0 34.5px;\r\n  flex-direction: row;\r\n  height: 100%;\r\n}\r\n\r\n.info {\r\n  font-size: 32px;\r\n  width: 400px;\r\n}\r\n\r\n.about {\r\n  font-weight: 700;\r\n}\r\n\r\n.website {\r\n  flex: 1;\r\n  display: flex;\r\n  align-items: flex-end;\r\n  justify-content: center;\r\n}\r\n\r\n.member {\r\n  width: 400px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-end;\r\n}\r\n\r\n.list {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.list li i{\r\n  color: #34495e;\r\n  background: white;\r\n  border-radius: 50%;\r\n  border: 1px solid #EEE;\r\n  font-size: 16px;\r\n  transition: 500ms all;\r\n}\r\n\r\n.list li i:hover {\r\n  cursor: pointer;\r\n  -webkit-transform: scale(1.5);\r\n          transform: scale(1.5);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXIvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAwIDM0LjVweDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmluZm8ge1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICB3aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbi5hYm91dCB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLndlYnNpdGUge1xyXG4gIGZsZXg6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tZW1iZXIge1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmxpc3QgbGkgaXtcclxuICBjb2xvcjogIzM0NDk1ZTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0VFRTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdHJhbnNpdGlvbjogNTAwbXMgYWxsO1xyXG59XHJcblxyXG4ubGlzdCBsaSBpOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/user/footer/footer.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/user/footer/footer.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"footer\">\r\n  <div class=\"info\">\r\n    <div class=\"about\">\r\n      About\r\n    </div>\r\n    <h6>\r\n      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, recusandae unde? Ut obcaecati dolore est.\r\n    </h6>\r\n  </div>\r\n  <div class=\"website\">\r\n    Copyright @2019-2020 travelhelper.com\r\n  </div>\r\n  <div class=\"member\">\r\n    <div [style.width.px]=\"200\">\r\n        <p>\r\n            Developers\r\n        </p>\r\n          <ul class=\"list\">\r\n                <li class=\"\"><i class=\"eva eva-facebook\"></i> Nguyễn Thế Cường</li>\r\n                <li class=\"\"><i class=\"eva eva-facebook\"></i> Lê Trọng Tài</li>\r\n                <li class=\"\"><i class=\"eva eva-facebook\"></i> Nguyễn Nhật Quang</li>\r\n                <li class=\"\"><i class=\"eva eva-facebook\"></i> Nguyễn Hà Phương Nam</li>\r\n                <li class=\"\"><i class=\"eva eva-facebook\"></i> Lê Văn Hồng Quân</li>\r\n          </ul>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/user/footer/footer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/user/footer/footer.component.ts ***!
  \************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/user/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/user/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/user/header/header.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/user/header/header.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-wrapper{\r\n    max-width: 1280px;\r\n    margin: auto;\r\n    display: flex;\r\n    align-items: center;\r\n    height: 60px;\r\n}\r\na:hover{\r\n    cursor: pointer;\r\n}\r\n.menu-bar{\r\n    margin-left: auto;\r\n}\r\n.menu-bar ul{\r\n    -webkit-padding-start: 0px;\r\n            padding-inline-start: 0px;\r\n    margin: 0 auto;\r\n    list-style: none;\r\n}\r\n.menu-bar ul li{\r\n  display: inline-block;\r\n    text-align: center;\r\n\r\n}\r\n.menu-bar ul li a{\r\n    height: 60px;\r\n    color: #27374c;\r\n    padding: 0px 13px;\r\n    display: block;\r\n\r\n}\r\n.menu-bar ul li a:hover{\r\n    color: #ED6504;\r\n    text-decoration: none;\r\n}\r\n.menu-bar ul li a i{\r\n    font-size: 25px;\r\n}\r\n.menu-bar ul li .active{\r\n    color: #ED6504;\r\n    border-bottom: solid 4px #ED6504;\r\n}\r\n.menu-bar .icon{\r\n    padding-top: 8px;\r\n\r\n    height: 30px;\r\n}\r\n.menu-bar span{\r\n    font-size: 13px;\r\n}\r\n.menu-bar .name{\r\n    padding-top: 6px;\r\n    line-height: 1;\r\n\r\n}\r\n.logo{\r\n    padding-left: 10px;\r\n}\r\n.logo a{\r\n    display: inline-block;\r\n    color: #ED6504;\r\n}\r\n.logo i{\r\n    font-size: 50px;\r\n}\r\n.search-box{\r\n    padding-left: 30px;\r\n}\r\n.search-box .row,.col{\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n.search-box .search-form-1{\r\n    \r\n    text-align: center;\r\n    position: relative;\r\n   \r\n}\r\n.search-box .search-form .search-select{\r\n    display: inline-block !important;\r\n    width: 120px;\r\n    height: 40px;\r\n    border-radius: 0.25rem 0rem 0rem 0.25rem;\r\n    border-right: none;\r\n    border-color: #b7b4b4;\r\n    padding-left: 5px;\r\n}\r\n.search-box select:hover{\r\n    cursor: pointer;\r\n}\r\n.search-box .search-form-1 input{\r\n    height: 40px;\r\n    width: 300px;\r\n    display: inline-block;\r\n    border-radius:0rem 0.25rem 0.25rem 0rem;\r\n    border-color: #b7b4b4;\r\n    text-indent: 25px;\r\n}\r\n/* .search-box .search-form-1 input:hover{\r\n    cursor: pointer;\r\n} */\r\n.search-box .search-form-1 input:focus{\r\n    cursor: text;\r\n}\r\n.search-box .search-form input:focus {\r\n    outline: none;\r\n}\r\n.search-box .search-form-1  button {\r\n    width: 40px;\r\n    height: 40px;\r\n    position: absolute;\r\n    border-radius: 25px;\r\n    background: none;\r\n    border: none;\r\n    background: none;\r\n}\r\n.search-box .search-form  button:focus{\r\n    outline: none;\r\n}\r\n.search-box .search-form  i{\r\n    color: #ED6504;\r\n    font-size: 1.2em;\r\n}\r\n.button-responsive{\r\n    display: none;\r\n    align-items: center;\r\n    height: 60px;\r\n}\r\n.button-responsive button {\r\n    height: 40px;\r\n    width: 40px;\r\n    background: none;\r\n    border: none;\r\n}\r\n.button-responsive i{\r\n    -webkit-text-stroke: 1px white;\r\n    font-size: 35px;\r\n    color: #27374c;\r\n}\r\n.button-responsive  button:focus{\r\n    outline: none;\r\n}\r\n.button-responsive  button i:hover{\r\n    color: #ED6504;\r\n}\r\n.dropdown button:hover{\r\n    color: #ED6504;;\r\n}\r\n@media screen and (max-width: 890px) {\r\n    .header-wrapper{\r\n        flex-wrap: wrap;\r\n    }\r\n    .button-responsive{\r\n        margin-left: auto;\r\n        display: flex !important;\r\n    }\r\n    .search-box{\r\n        display: none;\r\n        clear: both;\r\n        padding: 0px;\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n    .search-box form{\r\n        width: 100%;\r\n\r\n    }\r\n\r\n    .search-box .search-form{\r\n        width: 100%;\r\n\r\n\r\n    }\r\n    .search-box .row,.col{\r\n        padding: 0px;\r\n        margin: 0px;\r\n    }\r\n\r\n    .search-box .search-form .search-select{\r\n        max-width: 110px;\r\n        border-radius: 0;\r\n    }\r\n    .search-box .search-form-1{\r\n       max-width: 100%;\r\n    }\r\n    .search-box .search-form-1 input{\r\n        width: 100%;\r\n        border-radius: 0;\r\n    }\r\n    .menu-bar{\r\n        display: none ;\r\n        width: 100%;\r\n    }\r\n    .menu-bar ul{\r\n        width: 100%;\r\n        padding: 0px !important;\r\n    }\r\n    .menu-bar ul li{\r\n      display: block;\r\n       background-color: white;\r\n       border-bottom: solid 1px #f2f2f2;\r\n   }\r\n   .menu-bar ul li:first-child{\r\n    border-top: solid 1px #f2f2f2;\r\n    }\r\n    .menu-bar ul li a div{\r\n       float: left;\r\n       border: none;\r\n   }\r\n   .menu-bar ul li a {\r\n    border: none !important;\r\n    height: 40px;\r\n    align-items: center;\r\n    display: flex;\r\n    }\r\n    .menu-bar .icon{\r\n        width: 40px;\r\n        height: auto;\r\n\r\n        padding-top: 0px;\r\n    }\r\n    .menu-bar .name{\r\n        padding: 0px;\r\n        padding-left: 10px;\r\n    }\r\n    .menu-bar .name span{\r\n\r\n        font-size: 1em;\r\n    }\r\n}\r\n/*---Header---*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLDBCQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjtBQUNBO0VBQ0UscUJBQXFCO0lBQ25CLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGNBQWM7O0FBRWxCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxnQkFBZ0I7O0lBRWhCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjOztBQUVsQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osWUFBWTtJQUNaLHdDQUF3QztJQUN4QyxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsdUNBQXVDO0lBQ3ZDLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7QUFDQTs7R0FFRztBQUNIO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSxhQUFhO1FBQ2IsV0FBVztRQUNYLFlBQVk7UUFDWixXQUFXO1FBQ1gsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksV0FBVzs7SUFFZjs7SUFFQTtRQUNJLFdBQVc7OztJQUdmO0lBQ0E7UUFDSSxZQUFZO1FBQ1osV0FBVztJQUNmOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGdCQUFnQjtJQUNwQjtJQUNBO09BQ0csZUFBZTtJQUNsQjtJQUNBO1FBQ0ksV0FBVztRQUNYLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksY0FBYztRQUNkLFdBQVc7SUFDZjtJQUNBO1FBQ0ksV0FBVztRQUNYLHVCQUF1QjtJQUMzQjtJQUNBO01BQ0UsY0FBYztPQUNiLHVCQUF1QjtPQUN2QixnQ0FBZ0M7R0FDcEM7R0FDQTtJQUNDLDZCQUE2QjtJQUM3QjtJQUNBO09BQ0csV0FBVztPQUNYLFlBQVk7R0FDaEI7R0FDQTtJQUNDLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYjtJQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7O1FBRVosZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO0lBQ3RCO0lBQ0E7O1FBRUksY0FBYztJQUNsQjtBQUNKO0FBQ0EsZUFBZSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLXdyYXBwZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDEyODBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcbmE6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm1lbnUtYmFye1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuLm1lbnUtYmFyIHVse1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4ubWVudS1iYXIgdWwgbGl7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG4ubWVudS1iYXIgdWwgbGkgYXtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGNvbG9yOiAjMjczNzRjO1xyXG4gICAgcGFkZGluZzogMHB4IDEzcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbn1cclxuLm1lbnUtYmFyIHVsIGxpIGE6aG92ZXJ7XHJcbiAgICBjb2xvcjogI0VENjUwNDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4ubWVudS1iYXIgdWwgbGkgYSBpe1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbi5tZW51LWJhciB1bCBsaSAuYWN0aXZle1xyXG4gICAgY29sb3I6ICNFRDY1MDQ7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCA0cHggI0VENjUwNDtcclxufVxyXG4ubWVudS1iYXIgLmljb257XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG5cclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG4ubWVudS1iYXIgc3BhbntcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG4ubWVudS1iYXIgLm5hbWV7XHJcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcblxyXG59XHJcbi5sb2dve1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcbi5sb2dvIGF7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogI0VENjUwNDtcclxufVxyXG4ubG9nbyBpe1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG59XHJcbi5zZWFyY2gtYm94e1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG59XHJcbi5zZWFyY2gtYm94IC5yb3csLmNvbHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcbi5zZWFyY2gtYm94IC5zZWFyY2gtZm9ybS0xe1xyXG4gICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIFxyXG59XHJcbi5zZWFyY2gtYm94IC5zZWFyY2gtZm9ybSAuc2VhcmNoLXNlbGVjdHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbSAwcmVtIDByZW0gMC4yNXJlbTtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgIGJvcmRlci1jb2xvcjogI2I3YjRiNDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcbi5zZWFyY2gtYm94IHNlbGVjdDpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc2VhcmNoLWJveCAuc2VhcmNoLWZvcm0tMSBpbnB1dHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6MHJlbSAwLjI1cmVtIDAuMjVyZW0gMHJlbTtcclxuICAgIGJvcmRlci1jb2xvcjogI2I3YjRiNDtcclxuICAgIHRleHQtaW5kZW50OiAyNXB4O1xyXG59XHJcbi8qIC5zZWFyY2gtYm94IC5zZWFyY2gtZm9ybS0xIGlucHV0OmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59ICovXHJcbi5zZWFyY2gtYm94IC5zZWFyY2gtZm9ybS0xIGlucHV0OmZvY3Vze1xyXG4gICAgY3Vyc29yOiB0ZXh0O1xyXG59XHJcbi5zZWFyY2gtYm94IC5zZWFyY2gtZm9ybSBpbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5zZWFyY2gtYm94IC5zZWFyY2gtZm9ybS0xICBidXR0b24ge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuLnNlYXJjaC1ib3ggLnNlYXJjaC1mb3JtICBidXR0b246Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5zZWFyY2gtYm94IC5zZWFyY2gtZm9ybSAgaXtcclxuICAgIGNvbG9yOiAjRUQ2NTA0O1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG5cclxuLmJ1dHRvbi1yZXNwb25zaXZle1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuLmJ1dHRvbi1yZXNwb25zaXZlIGJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmJ1dHRvbi1yZXNwb25zaXZlIGl7XHJcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBjb2xvcjogIzI3Mzc0YztcclxufVxyXG4uYnV0dG9uLXJlc3BvbnNpdmUgIGJ1dHRvbjpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmJ1dHRvbi1yZXNwb25zaXZlICBidXR0b24gaTpob3ZlcntcclxuICAgIGNvbG9yOiAjRUQ2NTA0O1xyXG59XHJcbi5kcm9wZG93biBidXR0b246aG92ZXJ7XHJcbiAgICBjb2xvcjogI0VENjUwNDs7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODkwcHgpIHtcclxuICAgIC5oZWFkZXItd3JhcHBlcntcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uLXJlc3BvbnNpdmV7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnNlYXJjaC1ib3h7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnNlYXJjaC1ib3ggZm9ybXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1ib3ggLnNlYXJjaC1mb3Jte1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuXHJcbiAgICB9XHJcbiAgICAuc2VhcmNoLWJveCAucm93LC5jb2x7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2gtYm94IC5zZWFyY2gtZm9ybSAuc2VhcmNoLXNlbGVjdHtcclxuICAgICAgICBtYXgtd2lkdGg6IDExMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoLWJveCAuc2VhcmNoLWZvcm0tMXtcclxuICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5zZWFyY2gtYm94IC5zZWFyY2gtZm9ybS0xIGlucHV0e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICB9XHJcbiAgICAubWVudS1iYXJ7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAubWVudS1iYXIgdWx7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubWVudS1iYXIgdWwgbGl7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2YyZjJmMjtcclxuICAgfVxyXG4gICAubWVudS1iYXIgdWwgbGk6Zmlyc3QtY2hpbGR7XHJcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2YyZjJmMjtcclxuICAgIH1cclxuICAgIC5tZW51LWJhciB1bCBsaSBhIGRpdntcclxuICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgYm9yZGVyOiBub25lO1xyXG4gICB9XHJcbiAgIC5tZW51LWJhciB1bCBsaSBhIHtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgICAubWVudS1iYXIgLmljb257XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG5cclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgfVxyXG4gICAgLm1lbnUtYmFyIC5uYW1le1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAubWVudS1iYXIgLm5hbWUgc3BhbntcclxuXHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICB9XHJcbn1cclxuLyotLS1IZWFkZXItLS0qL1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/user/header/header.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/user/header/header.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"header-wrapper\" (clickOutside)=\"isMenu = false;isSearch = false;\">\r\n    <div class=\"logo\">\r\n        <a href='/Users/Dashboard' routerLinkActive='active'>\r\n            <i class=\"fas fa-globe-asia\"></i>\r\n        </a>\r\n    </div>\r\n\r\n    <div class=\"button-responsive\">\r\n        <div class=\"search-responsive\">\r\n            <button (click)=\"isSearch = !isSearch;isMenu = false;\">\r\n                <i [ngStyle]=\"isSearch && !isMenu && {'color':'#ED6504'}\" class=\"fas fa-search \"></i></button>\r\n        </div>\r\n        <div class=\"menu-responsive\">\r\n            <button (click)=\"isMenu = !isMenu;isSearch = false;\">\r\n                <i [ngStyle]=\"isMenu && !isSearch && {'color':'#ED6504'}\" class=\"fas fa-bars\"></i></button>\r\n        </div>\r\n    </div>\r\n    <div [ngStyle]=\"isSearch && !isMenu && {'display':'flex'}\" class=\"search-box\" (clickOutside)=\"textInput = '';\">\r\n        <form #formSearch=\"ngForm\" autocomplete=\"off\" (submit)=\"onSubmit(formSearch);\">\r\n            <div class=\"search-form row\">\r\n                <select [(ngModel)]=\"textSelect\" class=\" search-select form-control shadow-sm col\" name=\"select\">\r\n                    <option value=\"host\" selected>Find Host</option>\r\n                    <option value=\"traveler\">Find Traveler</option>\r\n                </select>\r\n                <div class=\"search-form-1 col\">\r\n                    <button class=\"\" type=\"submit\"><i class=\"fas fa-search\"></i></button>\r\n                    <input [(ngModel)]=\"textInput\" (keyup)=\"onKeyup();\" class=\"form-control shadow-sm\" type=\"text\"\r\n                        name=\"input\" placeholder=\"Search for Place\">\r\n\r\n\r\n\r\n                    <app-dropdown [formSearch]=\"formSearch\" (myClick)=\"resetvalue();\"\r\n                        [searchedSubject]=\"searchedSubject\"></app-dropdown>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <nav [ngStyle]=\"isMenu && !isSearch && {'display':'block'}\" class=\"menu-bar\">\r\n        <ul>\r\n            <li>\r\n                <a (click)=\"this.isMenu = false;\" [routerLink]=\"['Dashboard']\" routerLinkActive='active'>\r\n                    <div class=\"icon\">\r\n                        <i class=\"fas fa-home\"></i>\r\n                    </div>\r\n                    <div class=\"name\">\r\n                        <span>\r\n                            Dashboard\r\n                        </span>\r\n                    </div>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a (click)=\"this.isMenu = false;\" [routerLink]=\"['Profile']\" routerLinkActive='active'>\r\n                    <div class=\"icon\">\r\n                        <i class=\"fas fa-user-circle\"></i>\r\n                    </div>\r\n                    <div class=\"name\">\r\n                        <span>\r\n                            Profile\r\n                        </span>\r\n\r\n                    </div>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a (click)=\"this.isMenu = false;\" [routerLink]=\"['Request']\" routerLinkActive='active'>\r\n                    <div class=\"icon\">\r\n                        <i class=\"fas fa-envelope\"></i>\r\n                    </div>\r\n                    <div class=\"name\">\r\n                        <span>\r\n                            Request\r\n                        </span>\r\n\r\n                    </div>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a (click)=\"this.isMenu = false;\" [routerLink]=\"['Message']\" routerLinkActive='active'>\r\n                    <div class=\"icon\">\r\n                        <i class=\"fas fa-comments\"></i>\r\n                    </div>\r\n                    <div class=\"name\">\r\n                        <span>\r\n                            Message\r\n                        </span>\r\n\r\n                    </div>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <div class=\"dropdown\" (clickOutside)=\"isdrop=false;\">\r\n                    <a class=\"\" id=\"dropdownMenu2\" data-toggle=\"dropdown\"\r\n                        (click)=\"isdrop=!isdrop\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n\r\n                        <div class=\"icon\" style=\"display: flex\">\r\n                            <div class=\"dropdown-toggle\">\r\n                                    <i class=\"fas fa-cog\"></i>\r\n                            </div>\r\n                            \r\n                        </div>\r\n                        <div class=\"name\">\r\n                            <span>\r\n                                Setting\r\n                            </span>\r\n\r\n                        </div>\r\n                    </a>\r\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenu2\"\r\n                        [style.display]=\"isdrop?'block':'none'\">\r\n                        <button class=\"dropdown-item\" type=\"button\"><i class=\"fas fa-user-cog\"></i> Change Password</button>\r\n                        <button (click)=\"onLogout();\" class=\"dropdown-item\" type=\"button\"><i class=\"fas fa-sign-out-alt\"></i> Log Out</button>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </nav>\r\n\r\n\r\n\r\n\r\n</nav>"

/***/ }),

/***/ "./src/app/components/user/header/header.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/user/header/header.component.ts ***!
  \************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, activatedRoute, service) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.service = service;
        this.subscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"];
        this.textInput = "";
        this.textSelect = "host";
        this.searchedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onLogout = function () {
        localStorage.removeItem('token');
        this.router.navigate(['/Userauth']);
    };
    HeaderComponent.prototype.onKeyup = function () {
        this.searchedSubject.next(this.textInput);
    };
    HeaderComponent.prototype.onSubmit = function (form) {
        this.textInput = '';
        this.router.navigate(['/Users/Search'], { queryParams: { type: form.value.select, location: form.value.input } });
    };
    HeaderComponent.prototype.resetvalue = function () {
        this.textInput = '';
        this.textSelect = 'host';
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/user/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/user/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/user/message/message.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/user/message/message.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/user/message/message.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/user/message/message.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n        <h4>message works!</h4>\r\n        <h3>{{select}}</h3>\r\n        <h3>{{city}}</h3>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/user/message/message.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/user/message/message.component.ts ***!
  \**************************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var MessageComponent = /** @class */ (function () {
    function MessageComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    MessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParamMap.subscribe(function (params) {
            _this.select = params.get('type');
            _this.city = params.get('location');
        });
    };
    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/components/user/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/components/user/message/message.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/components/user/people/people.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/user/people/people.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* .content-left{\r\n    min-width: 300px;\r\n    max-width: 300px;\r\n    padding: 0px 5px 0px 5px !important;\r\n\r\n\r\n}\r\n.content-right{\r\n    padding: 0px 5px 0px 5px !important;\r\n    min-width: 500px;\r\n}\r\n.content-right .row,.col{\r\n    margin: 0px ;\r\n}\r\n.menu-bar{\r\n    margin: auto;\r\n    display: flex;\r\n    align-items: center;\r\n    height: 70px;\r\n}\r\n.menu-bar ul{\r\nlist-style: none;\r\nmargin-top: 0px;\r\nmargin-bottom: 0px;\r\n}\r\n.menu-bar ul li{\r\n    display: inline-block;\r\n    text-align: center;\r\n}\r\n.menu-bar ul li a{\r\n    text-decoration: none;\r\n    color: #27374c;\r\n    margin: 0px 13px;\r\n\r\n\r\n} */\r\n\r\n.people:hover{\r\n  cursor: pointer;\r\n}\r\n\r\n.people:hover .name{\r\n  color: #365899;\r\n  text-decoration: underline;\r\n}\r\n\r\n.headers {\r\n  display: flex;\r\n  padding: 10px;\r\n\r\n}\r\n\r\n.headers img {\r\n  height: 150px;\r\n   width: 150px;\r\n}\r\n\r\nli {\r\n  border: none;\r\n  --display: flex;\r\n  --align-items: center;\r\n  padding: 0.4rem 1.25rem;\r\n  font-size: 14px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.name {\r\n  font-weight: 500;\r\n  font-size: 1.1em;\r\n  padding-top: 0px !important;\r\n}\r\n\r\n.wrapper-icon {\r\n  font-size: 16px;\r\n  height: 16px;\r\n  width: 16px;\r\n  --display: inline-block;\r\n  --background: white;\r\n  margin-right: 10px;\r\n}\r\n\r\n.list-group-item{\r\n  padding: 0.3rem 1.25rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3Blb3BsZS9wZW9wbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUNHOztBQUVIO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCwwQkFBMEI7QUFDNUI7O0FBSUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTs7QUFFZjs7QUFFQTtFQUNFLGFBQWE7R0FDWixZQUFZO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyL3Blb3BsZS9wZW9wbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKiAuY29udGVudC1sZWZ0e1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHggNXB4IDBweCA1cHggIWltcG9ydGFudDtcclxuXHJcblxyXG59XHJcbi5jb250ZW50LXJpZ2h0e1xyXG4gICAgcGFkZGluZzogMHB4IDVweCAwcHggNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xyXG59XHJcbi5jb250ZW50LXJpZ2h0IC5yb3csLmNvbHtcclxuICAgIG1hcmdpbjogMHB4IDtcclxufVxyXG4ubWVudS1iYXJ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNzBweDtcclxufVxyXG4ubWVudS1iYXIgdWx7XHJcbmxpc3Qtc3R5bGU6IG5vbmU7XHJcbm1hcmdpbi10b3A6IDBweDtcclxubWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5tZW51LWJhciB1bCBsaXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubWVudS1iYXIgdWwgbGkgYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjMjczNzRjO1xyXG4gICAgbWFyZ2luOiAwcHggMTNweDtcclxuXHJcblxyXG59ICovXHJcblxyXG4ucGVvcGxlOmhvdmVye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnBlb3BsZTpob3ZlciAubmFtZXtcclxuICBjb2xvcjogIzM2NTg5OTtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuXHJcblxyXG4uaGVhZGVycyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG5cclxufVxyXG5cclxuLmhlYWRlcnMgaW1nIHtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gICB3aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbmxpIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgLS1kaXNwbGF5OiBmbGV4O1xyXG4gIC0tYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjRyZW0gMS4yNXJlbTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDEuMWVtO1xyXG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLndyYXBwZXItaWNvbiB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGhlaWdodDogMTZweDtcclxuICB3aWR0aDogMTZweDtcclxuICAtLWRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbXtcclxuICBwYWRkaW5nOiAwLjNyZW0gMS4yNXJlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/user/people/people.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/user/people/people.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"card box people\" style=\"height: 230px\" (click)=\"onClickPeople()\">\r\n\r\n  <div class=\"headers\">\r\n      <img [src]=\"user.avatarLocation ? user.avatarLocation : img\" class=\"card-img-top\" alt=\"...\">\r\n\r\n      <div class=\"\" >\r\n        <ul class=\"list-group \">\r\n          <li class=\"list-group-item name\">{{user.fullName}}</li>\r\n          <li class=\"list-group-item\">\r\n\r\n                <i class=\"eva eva-message-square wrapper-icon\"></i>\r\n\r\n                <span><b>{{user.referenceReceived ? user.referenceReceived.length : '0'}}</b> Reference</span>\r\n          </li>\r\n\r\n          <ng-container *ngIf=\"!trip;else traveler\">\r\n            <li class=\"list-group-item\" >\r\n\r\n                <i class=\"eva eva-briefcase wrapper-icon\"></i>\r\n\r\n            <span>{{user.occupation}}</span>\r\n          </li>\r\n          </ng-container>\r\n\r\n          <ng-template #traveler>\r\n            <li class=\"list-group-item\">\r\n              <i class=\"fas fa-user-friends wrapper-icon\"></i>\r\n              <!-- <i class=\"eva eva-people wrapper-icon\"></i> -->\r\n\r\n                <span><b>{{trip.trip.travelerNumber}} Traveler{{trip.trip.travelerNumber > 1 ? 's' : ''}}</b> in town</span>\r\n            </li>\r\n          </ng-template>\r\n\r\n\r\n\r\n          <li class=\"list-group-item\">\r\n\r\n              <i class=\"eva eva-globe-2 wrapper-icon\"></i>\r\n\r\n            <span>Speak <b>{{language | formatData:0:15}}</b></span>\r\n          </li>\r\n\r\n          <ng-container *ngIf=\"trip\">\r\n            <li class=\"list-group-item\" >\r\n\r\n              <i class=\"far fa-calendar-alt wrapper-icon\"></i>\r\n\r\n            <span><b>{{trip.trip.arrivalDate | date:'MMM d'}} to {{trip.trip.departureDate | date:'MMM d'}}</b></span>\r\n          </li>\r\n          </ng-container>\r\n\r\n        </ul>\r\n      </div>\r\n  </div>\r\n  <div class=\"card-body\" [style.padding.px]=\"10\">\r\n    <ng-container *ngIf=\"trip? !trip.trip.description : !user.about;else des\">\r\n        <p class=\"text-muted\">\r\n            <i>empty</i>\r\n        </p>\r\n    </ng-container>\r\n\r\n\r\n    <ng-template #des>\r\n        <p class=\"card-text\">{{trip ? (trip.trip.description | formatData:0:50) : (user.about | formatData:0:50)}}</p>\r\n    </ng-template>\r\n\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/user/people/people.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/user/people/people.component.ts ***!
  \************************************************************/
/*! exports provided: PeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleComponent", function() { return PeopleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var src_app_models_publictrip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/publictrip */ "./src/app/models/publictrip.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var PeopleComponent = /** @class */ (function () {
    function PeopleComponent(router) {
        this.router = router;
        this.img = '/assets/imgs/profile-picture-placeholder.png';
    }
    PeopleComponent.prototype.ngOnInit = function () {
        if (this.trip) {
            console.log(this.trip);
            this.user = this.trip.user;
            this.trip.trip = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.trip);
        }
        //console.log(this.user, this.trip);
        this.language = [this.user.fluentLanguage ? this.user.fluentLanguage : '', this.user.learningLanguage ? this.user.learningLanguage : ''];
    };
    PeopleComponent.prototype.onClickPeople = function () {
        this.router.navigate(['/Users/People', this.user.id]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["User"])
    ], PeopleComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_publictrip__WEBPACK_IMPORTED_MODULE_3__["PublicTrip"])
    ], PeopleComponent.prototype, "trip", void 0);
    PeopleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-people',
            template: __webpack_require__(/*! ./people.component.html */ "./src/app/components/user/people/people.component.html"),
            styles: [__webpack_require__(/*! ./people.component.css */ "./src/app/components/user/people/people.component.css"), __webpack_require__(/*! ./../../../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PeopleComponent);
    return PeopleComponent;
}());



/***/ }),

/***/ "./src/app/components/user/profile/about/about.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/user/profile/about/about.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-overview{\r\n    margin: 0px;\r\n    padding: 10px 20px;\r\n    line-height: 2.5;\r\n}\r\n.content-aboutme{\r\n    line-height: 2.0;\r\n    padding: 10px 20px;\r\n    white-space: pre-wrap;\r\n}\r\n.content-overview span{\r\n    font-size: 1.1em;\r\n    padding: 5px 10px;\r\n}\r\n.content-overview i{\r\n    font-size: 1.1em;\r\n    width: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3Byb2ZpbGUvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9wcm9maWxlL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1vdmVydmlld3tcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuNTtcclxufVxyXG4uY29udGVudC1hYm91dG1le1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuMDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxufVxyXG4uY29udGVudC1vdmVydmlldyBzcGFue1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG59XHJcbi5jb250ZW50LW92ZXJ2aWV3IGl7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/user/profile/about/about.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/user/profile/about/about.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #loading>\r\n  <div class=\"box\">\r\n    <app-loading></app-loading>\r\n  </div>\r\n</ng-template>\r\n<ng-template #nothing>\r\n  <div class=\"nothing\">\r\n    <span>Nothing to show</span>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-container *ngIf=\"user.id && trips;else loading\">\r\n  <div class=\"box box-publictrip\">\r\n    <div class=\"box-header\">\r\n      <span>PUBLIC TRIPS</span>\r\n    </div>\r\n    <ng-container *ngIf=\"trips.length;else nothing\">\r\n      <ng-container *ngFor=\"let trip of trips\">\r\n        <app-trip [isUser]=\"isUser\" [trip]=\"trip\"></app-trip>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n  <div class=\"box box-overview\">\r\n    <div class=\"box-header\">\r\n      <span>OVERVIEW</span>\r\n    </div>\r\n    <div class=\"content-overview row\">\r\n      <div class=\"left col\">\r\n        <!-- <div class=\"item\"><i class=\"far fa-comment-dots\"></i> <span>0 references</span></div> -->\r\n        <div class=\"item\"><i class=\"fas fa-map-marker\"></i> <span>{{user.address}}</span></div>\r\n        <div class=\"item\"><i class=\"fas fa-child\"></i> <span>Fluence in {{user.fluentLanguage}}</span></div>\r\n        <div class=\"item\"> <i class=\"fas fa-book\"></i> <span>Leaning {{user.learningLanguage}}</span></div>\r\n      </div>\r\n      <div class=\"right col\">\r\n        <div class=\"item\"> <i class=\"far fa-calendar-alt\"></i><span>{{user.birthday|date:'dd/MM/yyyy'}}</span></div>\r\n        <div class=\"item\"><i class=\"fas fa-venus-mars\"></i> <span\r\n            *ngIf=\"user.gender!=null\">{{user.gender?'Male':'Female'}}</span></div>\r\n        <div class=\"item\"><i class=\"fas fa-briefcase\"></i> <span>{{user.occupation}}</span></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"box box-aboutme\">\r\n    <div class=\"box-header\">\r\n      <span>ABOUT ME</span>\r\n    </div>\r\n    <div class=\"content-aboutme\">\r\n      <p>{{user.about}}</p>\r\n      <h4>Interest</h4>\r\n\r\n      <p>{{user.interest}}</p>\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n</ng-container>"

/***/ }),

/***/ "./src/app/components/user/profile/about/about.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/user/profile/about/about.component.ts ***!
  \******************************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AboutComponent = /** @class */ (function () {
    function AboutComponent(router, service, activatedRoute) {
        this.router = router;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.user = {};
    }
    AboutComponent.prototype.ngOnDestroy = function () {
        this.navigationSubscription.unsubscribe();
    };
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                _this.load();
            }
        });
        this.load();
        this.isUser = this.service.getisUser();
    };
    AboutComponent.prototype.load = function () {
        var _this = this;
        this.user = {};
        this.trips = null;
        this.service.getUser().subscribe(function (res) {
            _this.user = res;
        });
        this.service.getProfilePublictrip().subscribe(function (res) {
            _this.trips = res;
        });
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/user/profile/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/user/profile/about/about.component.css"), __webpack_require__(/*! ./../../../../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/user/profile/edit/edit.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/user/profile/edit/edit.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a:hover{\r\n    cursor: pointer;\r\n}\r\nform{\r\n    margin-bottom: 0px;\r\n}\r\n.content-left{\r\n/* min-width: 300px;\r\nmax-width: 400px; */\r\npadding: 0px 5px 0px 5px !important;\r\nflex: 0 0 33.333333%;\r\nmax-width: 33.333333%;\r\n}\r\n.content-right{\r\nmax-width: 100%;\r\nflex: 0 0 66.666667%;\r\nmax-width: 66.666667%;\r\npadding: 0px 5px 0px 5px !important;\r\n}\r\n.user-info{\r\n    text-align: center;\r\n    padding-top: 50px;\r\n}\r\n.photo{\r\n    margin-bottom: 20px;\r\n   \r\n}\r\n.upload{\r\n    position: absolute;\r\n    opacity: 0.7;\r\n    border-radius: 50%;\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n.upload:hover{\r\n    opacity: 0.6;\r\n}\r\n.upload .top{\r\n    height: 50%;\r\n    border-radius:100px 100px 0 0  ;\r\n}\r\n.upload .bottom{\r\n    display: flex;\r\n    align-items: center;\r\n    height: 50%;\r\n    border-radius:0 0 100px 100px ;\r\n    background-color: #646363;\r\n}\r\n.upload i{\r\n    color: black;\r\n    margin:  auto;\r\n    font-size: 40px;\r\n}\r\n.box-header{\r\n    text-align: left;\r\n    border-top: 1px solid rgba(0,0,0,0.15);\r\n}\r\n.overview{\r\n text-align: left;\r\n padding-left: 20px;\r\n}\r\n.overview .item{\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n\r\n}\r\n.item  span{\r\n    font-size: 1.1em;\r\n    padding: 5px 10px;\r\n}\r\n.item i{\r\n    font-size: 1.1em;\r\n    width: 20px;\r\n}\r\n.tab-bar{\r\n    height: 50px;\r\n    display:flex;\r\n    align-items: center;\r\n    border-bottom: 1px solid rgba(0,0,0,0.15);\r\n}\r\n.tab-bar ul{\r\nlist-style: none;\r\nmargin: 0;\r\npadding: 0;\r\n\r\n}\r\n.tab-bar ul li{\r\n    display: inline-block;\r\n    text-align: center; \r\n}\r\n.tab-bar ul li a{\r\n    line-height: 50px;\r\n    padding: 0px 15px;\r\n    display: block;\r\n    text-decoration: none;\r\n    font-weight: 500;\r\n}\r\n.tab-bar ul li a span{\r\n    font-weight: 500;\r\n    font-size: 1em; \r\n}\r\n.tab-bar ul li a:hover{\r\n    cursor: pointer;\r\n    color: #ED6504;\r\n}\r\n.content{\r\n    padding: 20px;\r\n    display: none;\r\n}\r\n.content-right .selected{\r\n    display: block!important;\r\n}\r\n.content-right .active{\r\n    color: #ED6504;\r\n    font-weight: bold;\r\n}\r\n.content-right select:hover{\r\n    cursor: pointer;\r\n}\r\n.content-right button{\r\n    margin: 0px 10px;\r\n    padding: 5px 30px;\r\n}\r\n.content-right label{\r\n    word-wrap: break-word;\r\n    size: 18px;\r\n    font-weight: 600;\r\n}\r\n.button-bar{\r\n    border-top: #ecf0f1 solid 2px;\r\n    padding-top: 20px\r\n}\r\n.back-drop{\r\n    border: 0;\r\n    margin: 0;\r\n    padding: 0;\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    min-height: 100%;\r\n    min-width: 100%;\r\n    height: auto;\r\n    width: auto;\r\n    opacity: 0;\r\n    z-index: 9000;\r\n    background-color: #fff;\r\n}\r\n@media screen and (max-width: 768px){\r\n    .content-left{\r\n        flex: 0 0 100%;\r\n        max-width: 100%;\r\n       order: 2;\r\n    }\r\n    .content-right{\r\n        flex: 0 0 100%;\r\n        max-width: 100%;\r\n        order: 1;\r\n    }\r\n}\r\n.input-focus:focus{\r\n   \r\n    box-shadow: none;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3Byb2ZpbGUvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtBQUNBO21CQUNtQjtBQUNuQixtQ0FBbUM7QUFDbkMsb0JBQW9CO0FBQ3BCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsZUFBZTtBQUNmLG9CQUFvQjtBQUNwQixxQkFBcUI7QUFDckIsbUNBQW1DO0FBQ25DO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsc0NBQXNDO0FBQzFDO0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHlDQUF5QztBQUM3QztBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLFNBQVM7QUFDVCxVQUFVOztBQUVWO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7SUFDYixhQUFhO0FBQ2pCO0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0I7QUFDSjtBQUNBO0lBQ0ksU0FBUztJQUNULFNBQVM7SUFDVCxVQUFVO0lBQ1YsZUFBZTtJQUNmLE9BQU87SUFDUCxNQUFNO0lBQ04sZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBRUE7SUFDSTtRQUNJLGNBQWM7UUFDZCxlQUFlO09BQ2hCLFFBQVE7SUFDWDtJQUNBO1FBQ0ksY0FBYztRQUNkLGVBQWU7UUFDZixRQUFRO0lBQ1o7QUFDSjtBQUNBOztJQUVJLGdCQUFnQjs7QUFFcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXIvcHJvZmlsZS9lZGl0L2VkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImE6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuZm9ybXtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4uY29udGVudC1sZWZ0e1xyXG4vKiBtaW4td2lkdGg6IDMwMHB4O1xyXG5tYXgtd2lkdGg6IDQwMHB4OyAqL1xyXG5wYWRkaW5nOiAwcHggNXB4IDBweCA1cHggIWltcG9ydGFudDtcclxuZmxleDogMCAwIDMzLjMzMzMzMyU7XHJcbm1heC13aWR0aDogMzMuMzMzMzMzJTtcclxufVxyXG4uY29udGVudC1yaWdodHtcclxubWF4LXdpZHRoOiAxMDAlO1xyXG5mbGV4OiAwIDAgNjYuNjY2NjY3JTtcclxubWF4LXdpZHRoOiA2Ni42NjY2NjclO1xyXG5wYWRkaW5nOiAwcHggNXB4IDBweCA1cHggIWltcG9ydGFudDtcclxufVxyXG4udXNlci1pbmZve1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuLnBob3Rve1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgXHJcbn1cclxuLnVwbG9hZHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuLnVwbG9hZDpob3ZlcntcclxuICAgIG9wYWNpdHk6IDAuNjtcclxufVxyXG4udXBsb2FkIC50b3B7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6MTAwcHggMTAwcHggMCAwICA7XHJcbn1cclxuLnVwbG9hZCAuYm90dG9te1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6MCAwIDEwMHB4IDEwMHB4IDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDYzNjM7XHJcbn1cclxuXHJcbi51cGxvYWQgaXtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbjogIGF1dG87XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuLmJveC1oZWFkZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xNSk7XHJcbn1cclxuLm92ZXJ2aWV3e1xyXG4gdGV4dC1hbGlnbjogbGVmdDtcclxuIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG4ub3ZlcnZpZXcgLml0ZW17XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbn1cclxuLml0ZW0gIHNwYW57XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbn1cclxuLml0ZW0gaXtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICB3aWR0aDogMjBweDtcclxufVxyXG5cclxuLnRhYi1iYXJ7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xNSk7XHJcbn1cclxuLnRhYi1iYXIgdWx7XHJcbmxpc3Qtc3R5bGU6IG5vbmU7XHJcbm1hcmdpbjogMDtcclxucGFkZGluZzogMDtcclxuXHJcbn1cclxuLnRhYi1iYXIgdWwgbGl7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG59XHJcbi50YWItYmFyIHVsIGxpIGF7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi50YWItYmFyIHVsIGxpIGEgc3BhbntcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDFlbTsgXHJcbn1cclxuLnRhYi1iYXIgdWwgbGkgYTpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjRUQ2NTA0O1xyXG59XHJcbi5jb250ZW50e1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn0gICAgXHJcbiAgXHJcbi5jb250ZW50LXJpZ2h0IC5zZWxlY3RlZHtcclxuICAgIGRpc3BsYXk6IGJsb2NrIWltcG9ydGFudDtcclxufVxyXG4uY29udGVudC1yaWdodCAuYWN0aXZle1xyXG4gICAgY29sb3I6ICNFRDY1MDQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNvbnRlbnQtcmlnaHQgc2VsZWN0OmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jb250ZW50LXJpZ2h0IGJ1dHRvbntcclxuICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMzBweDtcclxufVxyXG4uY29udGVudC1yaWdodCBsYWJlbHtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIHNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5idXR0b24tYmFye1xyXG4gICAgYm9yZGVyLXRvcDogI2VjZjBmMSBzb2xpZCAycHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweFxyXG59XHJcbi5iYWNrLWRyb3B7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB6LWluZGV4OiA5MDAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgLmNvbnRlbnQtbGVmdHtcclxuICAgICAgICBmbGV4OiAwIDAgMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICBvcmRlcjogMjtcclxuICAgIH1cclxuICAgIC5jb250ZW50LXJpZ2h0e1xyXG4gICAgICAgIGZsZXg6IDAgMCAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBvcmRlcjogMTtcclxuICAgIH1cclxufVxyXG4uaW5wdXQtZm9jdXM6Zm9jdXN7XHJcbiAgIFxyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/user/profile/edit/edit.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/user/profile/edit/edit.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"user.id\">\r\n  <app-upload [from]=\"'edit'\" (myclick)=\"setAvatar($event)\"></app-upload>\r\n  <div class=\"content-left col \">\r\n    <div class=\"box user-info\">\r\n      <a class=\"upload\" (click)=\"upload.open()\">\r\n        <div class=\"top\"></div>\r\n        <div class=\"bottom\">\r\n          <i class=\"fas fa-camera\"></i>\r\n        </div>\r\n      </a>\r\n      <img class=\"photo img-responsive\"\r\n        [src]=\"user.avatarLocation?user.avatarLocation:'./../../../../assets/imgs/profile-picture-placeholder.png'\">\r\n      <p style=\"font-size:30px;\">{{user.fullName}}</p>\r\n      <p>{{user.address}}</p>\r\n      <div class=\"box-header\">\r\n        <span>OVERVIEW</span>\r\n      </div>\r\n      <div class=\"overview\">\r\n        <div class=\"item\"><i class=\"fas fa-map-marker\"></i> <span>{{user.address}}</span></div>\r\n        <div class=\"item\"><i class=\"fas fa-child\"></i> <span>Fluence in {{user.fluentLanguage}}</span></div>\r\n        <div class=\"item\"> <i class=\"fas fa-book\"></i> <span>Leaning {{user.learningLanguage}}</span></div>\r\n        <div class=\"item\"> <i class=\"far fa-calendar-alt\"></i><span>{{user.birthday|date:'dd/MM/yyyy'}}</span></div>\r\n        <div class=\"item\"><i class=\"fas fa-venus-mars\"></i> <span\r\n            *ngIf=\"user.gender!=null\">{{user.gender?'Male':'Female'}}</span></div>\r\n        <div class=\"item\"><i class=\"fas fa-briefcase\"></i> <span>{{user.occupation}}</span></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- content-left -->\r\n  <div class=\"content-right col\">\r\n    <div class=\"box\">\r\n      <div class=\" tab-bar\">\r\n        <ul class=\"nav nav-tabs\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link \" [ngClass]=\"{'active':isabout}\" (click)=\"isabout=true;\">About</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" [ngClass]=\"{'active':!isabout}\" (click)=\"isabout=false;\">My home</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <!-- tab-bar -->\r\n      <div [ngClass]=\"{'selected':isabout}\" class=\"content\">\r\n        <form class=\"form-group\" [formGroup]=\"formabout\" autocomplete=\"off\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-3 col-form-label\" for=\"Status\">Status</label>\r\n            <div style=\"max-width:250px;min-width:250px;\" class=\"col-6\">\r\n              <select id=\"Status\" class=\"form-control\" formControlName=\"status\">\r\n                <option value=\"false\" selected>Not Accepting Guest</option>\r\n                <option value=\"true\">Accepting Guest</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"FullName\" class=\"col-3 col-form-label\">Full Name<span style=\"color: red;\">*</span></label>\r\n            <div class=\"col-9\">\r\n              <input type=\"text\" class=\"form-control \" id=\"fullName\" formControlName=\"fullName\">\r\n              <label class=\"text-danger\"\r\n                *ngIf=\"formabout.get('fullName').touched && formabout.get('fullName').errors?.required\">This\r\n                field is mandatory.</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"Address\" class=\"col-3 col-form-label\">Address</label>\r\n            <div class=\"col-6\">\r\n              <input style=\"text-align: left;cursor: text;\" type=\"button\" class=\"form-control input-focus\"\r\n                formControlName=\"address\" (click)=\"show=true;showsearch();\">\r\n              <div class=\"back-drop-header\" (click)=\"show=false\" *ngIf=\"show\">\r\n              </div>\r\n              <div class=\"back-drop\" (click)=\"show=false\" *ngIf=\"show\">\r\n              </div>\r\n              <form style=\"position:relative; z-index: 901;\" autocomplete=\"off\">\r\n                <input #search name=\"search\" [(ngModel)]=\"addressInput\" class=\"form-control\" (keyup)=\"onKeyup();\"\r\n                  style=\" position:absolute;bottom: 0px \" [style.display]=\"show && issearch?'unset':'none'\">\r\n                <app-dropdown [type]=\"'select'\" (myClick)=\"show=false;formabout.get('address').setValue($event);\"\r\n                  [searchedSubject]=\"searchedSubject\"></app-dropdown>\r\n              </form>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-3 col-form-label\" for=\"Gender\">Gender</label>\r\n            <div style=\"max-width:130px;min-width:130px;\" class=\"col-3\">\r\n              <select id=\"Gender\" class=\"form-control\" formControlName=\"gender\">\r\n                <!-- <option value=\"any\">Any</option> -->\r\n                <option value=\"true\">Male</option>\r\n                <option value=\"false\">Female</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"example-date-input\" class=\"col-3 col-form-label\">BirthDay</label>\r\n            <div style=\"max-width:250px;min-width:250px;\" class=\"col-6\">\r\n              <input class=\"form-control\" type=\"date\" id=\"example-date-input\" formControlName=\"birthday\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"Occupation\" class=\"col-3 col-form-label\">Occupation</label>\r\n            <div class=\"col-9\">\r\n              <input type=\"text\" class=\"form-control\" id=\"Occupation\" formControlName=\"occupation\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"FluentLanguage\" class=\"col-3 col-form-label\">Fluent Language</label>\r\n            <div class=\"col-9\">\r\n              <input type=\"text\" class=\"form-control\" id=\"FluentLanguage\" formControlName=\"fluentLanguage\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"LearningLanguage\" class=\"col-3 col-form-label\">Learning Language</label>\r\n            <div class=\"col-9\">\r\n              <input type=\"text\" class=\"form-control\" id=\"LearningLanguage\" formControlName=\"learningLanguage\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"About\">About</label>\r\n            <textarea class=\"form-control\" id=\"About\" rows=\"5\" formControlName=\"about\"></textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"Interest\">Interest</label>\r\n            <textarea class=\"form-control\" id=\"Interest\" rows=\"5\" formControlName=\"interest\"></textarea>\r\n          </div>\r\n          <div class=\"button-bar\">\r\n            <button [disabled]=\"!formabout.valid\" (click)=\"onSaveabout();\" type=\"submit\"\r\n              class=\"btn btn-success\">Save</button>\r\n            <button (click)=\"setvalueabout();\" class=\"btn btn-secondary\">Reset</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <!-- content-about -->\r\n      <div [ngClass]=\"{'selected':!isabout}\" class=\"content\">\r\n        <form class=\"form-group\" [formGroup]=\"formhome\" autocomplete=\"off\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"maxGuest\" class=\"col-3 col-form-label\">Max Number of Guests:</label>\r\n            <div style=\"max-width:130px;min-width:130px;\" class=\"col-2\">\r\n              <input type=\"number\" min=\"0\" class=\"form-control\" id=\"maxGuest\" formControlName=\"maxGuest\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-3 col-form-label\" for=\"preferedGender\">Preferred Gender to Host</label>\r\n            <div style=\"max-width:130px;min-width:130px;\" class=\"col-6\">\r\n              <select id=\"preferedGender\" class=\"form-control\" formControlName=\"preferedGender\">\r\n                <option></option>\r\n                <option value=\"Any\">Any</option>\r\n                <option value=\"Male\">Male</option>\r\n                <option value=\"Female\">Female</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-3 col-form-label\" for=\"sleepingArrangement\">Sleeping Arrangements</label>\r\n            <div style=\"max-width:250px;min-width:250px;\" class=\"col-6\">\r\n              <select id=\"sleepingArrangement\" class=\"form-control\" formControlName=\"sleepingArrangement\">\r\n                <option></option>\r\n                <option value=\"Shared Bed\" selected>Shared Bed</option>\r\n                <option value=\"Shared Room\">Shared Room</option>\r\n                <option value=\"Public Room\">Public Room (Eg: Living Room)</option>\r\n                <option value=\"Private Room\">Private Room</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"SleepingDescription\">Description of Sleeping Arrangement</label>\r\n            <textarea class=\"form-control\" id=\"SleepingDescription\" rows=\"5\"\r\n              formControlName=\"sleepingDescription\"></textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"TransportationAccess\">Public Transportation Access</label>\r\n            <textarea class=\"form-control\" id=\"TransportationAccess\" rows=\"5\"\r\n              formControlName=\"transportationAccess\"></textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"allowedThing\">Allowed Thing</label>\r\n            <textarea class=\"form-control\" id=\"allowedThing\" rows=\"5\" formControlName=\"allowedThing\"></textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"stuff\">Stuff</label>\r\n            <textarea class=\"form-control\" id=\"stuff\" rows=\"5\" formControlName=\"stuff\"></textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"additionInfo\">Additional Information</label>\r\n            <textarea class=\"form-control\" id=\"additionInfo\" rows=\"5\" formControlName=\"additionInfo\"></textarea>\r\n          </div>\r\n          <div class=\"button-bar\">\r\n            <button (click)=\"onSavehome()\" type=\"submit\" class=\"btn btn-success\">Save</button>\r\n            <button (click)=\"setvaluehome()\" class=\"btn btn-secondary\">Reset</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <!-- content-home -->\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user/profile/edit/edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/user/profile/edit/edit.component.ts ***!
  \****************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reuse_upload_upload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../reuse/upload/upload.component */ "./src/app/components/user/reuse/upload/upload.component.ts");








var EditComponent = /** @class */ (function () {
    function EditComponent(route, fbhome, fbabout, service, toastr, activatedRoute) {
        this.route = route;
        this.fbhome = fbhome;
        this.fbabout = fbabout;
        this.service = service;
        this.toastr = toastr;
        this.activatedRoute = activatedRoute;
        this.issearch = false;
        this.user = {};
        this.addressInput = '';
        this.searchedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.formabout = this.fbabout.group({
            status: '',
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            address: '',
            gender: '',
            birthday: '',
            occupation: '',
            fluentLanguage: '',
            learningLanguage: '',
            about: '',
            interest: ''
        });
        this.formhome = this.fbhome.group({
            maxGuest: null,
            preferedGender: null,
            sleepingArrangement: null,
            sleepingDescription: null,
            transportationAccess: null,
            allowedThing: null,
            stuff: null,
            additionInfo: null
        });
    }
    EditComponent.prototype.ngOnInit = function () {
        this.isabout = true;
        this.user = this.activatedRoute.snapshot.data.users;
        this.homeres = this.activatedRoute.snapshot.data.homeres;
        this.setvalueabout();
        if (this.homeres.length) {
            this.home = this.homeres[0];
            this.setvaluehome();
        }
    };
    EditComponent.prototype.setAvatar = function (event) {
        this.user.avatarLocation = event;
    };
    EditComponent.prototype.setvalueabout = function () {
        this.formabout.setValue({
            status: (this.user.status == null ? false : this.user.status),
            fullName: this.user.fullName,
            address: this.user.address,
            gender: this.user.gender,
            birthday: (this.user.birthday == null ? null : this.user.birthday.substring(0, 10)),
            occupation: this.user.occupation,
            fluentLanguage: this.user.fluentLanguage,
            learningLanguage: this.user.learningLanguage,
            about: this.user.about,
            interest: this.user.interest
        });
    };
    EditComponent.prototype.onKeyup = function () {
        this.searchedSubject.next(this.addressInput);
    };
    EditComponent.prototype.onSaveabout = function () {
        var _this = this;
        this.service.editProfileAbout(this.formabout.value).subscribe(function (res) {
            _this.toastr.success("Saved");
            _this.route.navigateByUrl('/Users/Profile');
        });
    };
    EditComponent.prototype.showsearch = function () {
        var _this = this;
        this.issearch = true;
        this.addressInput = "";
        setTimeout(function () {
            _this.search.nativeElement.focus();
        }, 0);
    };
    EditComponent.prototype.setvaluehome = function () {
        this.formhome.setValue({
            maxGuest: this.home.maxGuest,
            preferedGender: this.home.preferedGender,
            sleepingArrangement: this.home.sleepingArrangement,
            sleepingDescription: this.home.sleepingDescription,
            transportationAccess: this.home.transportationAccess,
            allowedThing: this.home.allowedThing,
            stuff: this.home.stuff,
            additionInfo: this.home.additionInfo
        });
    };
    EditComponent.prototype.onSavehome = function () {
        var _this = this;
        if (this.home) {
            this.service.editProfileHome(this.formhome.value, this.home.homeId).subscribe(function (res) {
                _this.toastr.success("Saved");
                _this.route.navigateByUrl('/Users/Profile');
            });
        }
        else {
            this.service.createProfileHome(this.formhome.value).subscribe(function (res) {
                _this.toastr.success("Saved");
                _this.route.navigateByUrl('/Users/Profile');
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('search'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], EditComponent.prototype, "search", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_reuse_upload_upload_component__WEBPACK_IMPORTED_MODULE_7__["UploadComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _reuse_upload_upload_component__WEBPACK_IMPORTED_MODULE_7__["UploadComponent"])
    ], EditComponent.prototype, "upload", void 0);
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/components/user/profile/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/components/user/profile/edit/edit.component.css"), __webpack_require__(/*! ./../../../../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/components/user/profile/home/home.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/user/profile/home/home.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-myhome{\r\n    line-height: 2.5;\r\n    padding: 10px 20px;\r\n    white-space: pre-wrap;\r\n}\r\n.content-myhome span{\r\n    padding-right: 10px;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n}\r\n/* .nothing{\r\n    display: flex;\r\n    align-items: center;\r\n    text-align: center;\r\n    background: #eceef0;\r\n    height: 150px;\r\n}\r\n.nothing span{\r\n    margin: auto;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3Byb2ZpbGUvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTs7Ozs7Ozs7O0dBU0ciLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXIvcHJvZmlsZS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LW15aG9tZXtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbn1cclxuLmNvbnRlbnQtbXlob21lIHNwYW57XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4vKiAubm90aGluZ3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI2VjZWVmMDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbn1cclxuLm5vdGhpbmcgc3BhbntcclxuICAgIG1hcmdpbjogYXV0bztcclxufSAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/components/user/profile/home/home.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/user/profile/home/home.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #loading>\r\n    <div class=\"box\">\r\n  <app-loading></app-loading>\r\n  </div>\r\n</ng-template>\r\n<ng-container *ngIf=\"isLoading==false;else loading\">\r\n  <div class=\"box box-myhome\">\r\n    <div class=\"box-header\">\r\n      <span>MY HOME</span>\r\n    </div>\r\n    <ng-template #nothing>\r\n      <div class=\"nothing\">\r\n        <span>Nothing to show</span>\r\n      </div>\r\n    </ng-template>\r\n    <div *ngIf=\"home && !none;else nothing\" class=\"content-myhome\">\r\n      <div *ngIf=\"home.maxGuest\" class=\"item\"><span>Max Number of Guests :</span>{{home.maxGuest}}</div>\r\n      <div *ngIf=\"home.preferedGender\" class=\"item\"><span>Preferred Gender to Host\r\n          :</span>{{home.preferedGender}}</div>\r\n      <div *ngIf=\"home.sleepingArrangement\" class=\"item\"><span>Sleeping Arrangements\r\n          :</span>{{home.sleepingArrangement}}</div>\r\n      <div *ngIf=\"home.sleepingDescription\" class=\"item\"> <span>Description of Sleeping Arrangement</span>\r\n        <p>{{home.sleepingDescription}}</p>\r\n      </div>\r\n      <div *ngIf=\"home.transportationAccess\" class=\"item\"><span>Public Transportation Access </span>\r\n        <p>{{home.transportationAccess}}</p>\r\n      </div>\r\n      <div *ngIf=\"home.allowedThing\" class=\"item\"><span>Allowed Thing </span>\r\n        <p>{{home.allowedThing}}</p>\r\n      </div>\r\n      <div *ngIf=\"home.stuff\" class=\"item\"><span>Stuff </span>\r\n        <p>{{home.stuff}}</p>\r\n      </div>\r\n      <div *ngIf=\"home.additionInfo\" class=\"item\"><span>Additional Information </span>\r\n        <p>{{home.additionInfo}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-container>"

/***/ }),

/***/ "./src/app/components/user/profile/home/home.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/user/profile/home/home.component.ts ***!
  \****************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/user.service */ "./src/app/services/user.service.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, service, activatedRoute) {
        this.router = router;
        this.service = service;
        this.activatedRoute = activatedRoute;
        // user: any = {};
        this.isLoading = true;
        this.none = false;
    }
    HomeComponent.prototype.ngOnDestroy = function () {
        this.navigationSubscription.unsubscribe();
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.load();
            }
        });
        this.load();
        this.isUser = this.service.getisUser();
    };
    HomeComponent.prototype.load = function () {
        var _this = this;
        this.isLoading = true;
        this.service.getHome().subscribe(function (res) {
            _this.isLoading = false;
            if (res.length) {
                _this.home = res[0];
                var x = Object.values(_this.home).filter(function (x) { return (x === null || x === ""); }).length;
                _this.none = (x >= 9);
            }
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/user/profile/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/user/profile/home/home.component.css"), __webpack_require__(/*! ./../../../../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/user/profile/photos/photos.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/user/profile/photos/photos.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-photos{\r\npadding: 5px;\r\n}\r\n.content-photos ul {\r\n    list-style: none;\r\n    \r\n}\r\n.content-photos ul li{\r\n    display: inline-block;\r\n    \r\n}\r\n.box-header{\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.box-header button{\r\n     margin-left: auto;\r\n   \r\n}\r\n.grid-photos{\r\n    margin: 0;\r\n    padding: 0px;\r\n}\r\n.grid-item{\r\n    padding: 0px;\r\n    border: solid 5px white;\r\n}\r\n.grid-item::after{\r\n    content: \"\";\r\n\tdisplay: block;\r\n    padding-bottom: 100%;\r\n    \r\n}\r\n.content-photos  img{\r\n    width: 100%;\r\n    height: 100%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    position: absolute;\r\n}\r\na:hover{\r\n   cursor: pointer;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3Byb2ZpbGUvcGhvdG9zL3Bob3Rvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7SUFDSSxnQkFBZ0I7O0FBRXBCO0FBQ0E7SUFDSSxxQkFBcUI7O0FBRXpCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBQ0E7S0FDSyxpQkFBaUI7O0FBRXRCO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksV0FBVztDQUNkLGNBQWM7SUFDWCxvQkFBb0I7O0FBRXhCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9CQUFpQjtPQUFqQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7R0FDRyxlQUFlO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyL3Byb2ZpbGUvcGhvdG9zL3Bob3Rvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtcGhvdG9ze1xyXG5wYWRkaW5nOiA1cHg7XHJcbn1cclxuLmNvbnRlbnQtcGhvdG9zIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBcclxufVxyXG4uY29udGVudC1waG90b3MgdWwgbGl7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBcclxufVxyXG5cclxuLmJveC1oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSBcclxuLmJveC1oZWFkZXIgYnV0dG9ue1xyXG4gICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICBcclxufSBcclxuLmdyaWQtcGhvdG9ze1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbi5ncmlkLWl0ZW17XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDVweCB3aGl0ZTtcclxufVxyXG4uZ3JpZC1pdGVtOjphZnRlcntcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcclxuICAgIFxyXG59XHJcbi5jb250ZW50LXBob3RvcyAgaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5hOmhvdmVye1xyXG4gICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/user/profile/photos/photos.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/user/profile/photos/photos.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #loading>\r\n  <div class=\"box\">\r\n    <app-loading></app-loading>\r\n  </div>\r\n</ng-template>\r\n<ng-template #nothing>\r\n  <div class=\"nothing\">\r\n    <span>Nothing to show</span>\r\n  </div>\r\n</ng-template>\r\n<ng-container *ngIf=\"isLoading==false;else loading\">\r\n  <app-upload [from]=\"'photos'\" (myclick)=\"addphoto($event)\"></app-upload>\r\n  <div class=\"box box-photos\">\r\n    <div class=\"box-header\" [ngStyle]=\" isUser && {'padding': '8px 20px'}\">\r\n      <span>PHOTOS ({{photos.length}})</span>\r\n      <button *ngIf=\"isUser\" (click)=\"upload.open();\" class=\"btn btn-primary\"><i class=\"fas fa-plus\"></i>Add\r\n        Photo</button>\r\n    </div>\r\n\r\n    <ng-container *ngIf=\"photos.length;else nothing\">\r\n      <app-carousel-modal [isUser]=\"isUser\" [photos]=\"photos\" (myclick)=\"subphoto($event)\"></app-carousel-modal>\r\n      <div class=\"content-photos\">\r\n        <ul class=\"grid-photos row\">\r\n          <li class=\"grid-item  col-3\" *ngFor=\"let photo of photos; index as index\">\r\n            <a (click)=\"carousel.open(index)\"> <img [src]=\"photo.location\"></a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n\r\n\r\n\r\n</ng-container>"

/***/ }),

/***/ "./src/app/components/user/profile/photos/photos.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/user/profile/photos/photos.component.ts ***!
  \********************************************************************/
/*! exports provided: PhotosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosComponent", function() { return PhotosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reuse_upload_upload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../reuse/upload/upload.component */ "./src/app/components/user/reuse/upload/upload.component.ts");
/* harmony import */ var _reuse_carousel_modal_carousel_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reuse/carousel-modal/carousel-modal.component */ "./src/app/components/user/reuse/carousel-modal/carousel-modal.component.ts");






var PhotosComponent = /** @class */ (function () {
    function PhotosComponent(router, service, activatedRoute) {
        this.router = router;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.user = {};
        this.photos = [];
        this.isLoading = true;
    }
    PhotosComponent.prototype.ngOnDestroy = function () {
        this.navigationSubscription.unsubscribe();
    };
    PhotosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                _this.load();
            }
        });
        this.load();
        this.service.getUser().subscribe(function (res) {
            _this.user = res;
        });
        this.isUser = this.service.getisUser();
    };
    PhotosComponent.prototype.load = function () {
        var _this = this;
        this.isLoading = true;
        this.service.getImages().subscribe(function (res) {
            _this.photos = res;
            _this.isLoading = false;
        });
    };
    PhotosComponent.prototype.addphoto = function (photo) {
        this.photos.push(photo);
    };
    PhotosComponent.prototype.subphoto = function (index) {
        this.photos.splice(index, 1);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_reuse_upload_upload_component__WEBPACK_IMPORTED_MODULE_4__["UploadComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _reuse_upload_upload_component__WEBPACK_IMPORTED_MODULE_4__["UploadComponent"])
    ], PhotosComponent.prototype, "upload", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_reuse_carousel_modal_carousel_modal_component__WEBPACK_IMPORTED_MODULE_5__["CarouselModalComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _reuse_carousel_modal_carousel_modal_component__WEBPACK_IMPORTED_MODULE_5__["CarouselModalComponent"])
    ], PhotosComponent.prototype, "carousel", void 0);
    PhotosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-photos',
            template: __webpack_require__(/*! ./photos.component.html */ "./src/app/components/user/profile/photos/photos.component.html"),
            styles: [__webpack_require__(/*! ./photos.component.css */ "./src/app/components/user/profile/photos/photos.component.css"), __webpack_require__(/*! ./../../../../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PhotosComponent);
    return PhotosComponent;
}());



/***/ }),

/***/ "./src/app/components/user/profile/profile.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.content-left{\r\n    /* min-width: 220px; */\r\n    max-width: 300px; \r\n    min-width: 260px;\r\n    padding: 0px 5px 0px 5px !important;\r\n    /* margin-right: 5px !important; */\r\n    \r\n}\r\n.content-right{\r\n    padding: 0px 5px 0px 5px !important;\r\n    min-width: 100px;\r\n    /* min-width: 500px; */\r\n}\r\n.content-right .row,.col{\r\n    margin: 0px ;\r\n}\r\n.status-bar{\r\n    height: 70px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.status-bar .button-bar{\r\n    margin-left: auto;\r\n    margin-right: 20px;\r\n}\r\n.button-bar button{\r\n    margin-left: 5px;\r\n}\r\n.dropdown-menu button{\r\n    margin: 0px;\r\n}\r\n.status-bar span{\r\n    padding-left: 20px;\r\n    font-size: 30px;\r\n    font-weight: 500;\r\n}\r\n.status-bar .dropdown{\r\n    display: inline-block;\r\n}\r\n.user-info{\r\n    padding-top: 50px;\r\n    text-align: center;\r\n}\r\n.info{\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n}\r\n.info p{\r\n    padding: 3px 0px 3px 0px;\r\n    margin-bottom: 0px !important;\r\n}\r\n.menu-bar{\r\n    margin: auto;\r\n    display: flex;\r\n    align-items: center;\r\n    height: 70px;\r\n}\r\n.menu-bar ul{\r\n    -webkit-padding-start: 7px;\r\n            padding-inline-start: 7px;\r\n    list-style: none;\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n}\r\n.menu-bar ul li{\r\n    display: inline-block;\r\n    text-align: center; \r\n    margin: 0px 13px;\r\n}\r\n.menu-bar ul li a{\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n    color: #287FB8;\r\n}\r\n.menu-bar ul li a:hover{\r\n    color: #ED6504;\r\n}\r\n.menu-bar ul li .is-selected{\r\n    color: #ED6504;\r\n    font-weight: 600;\r\n}\r\n@media screen and (max-width: 768px) {\r\n    .content-left{\r\n        flex: 0 0 100%;\r\n        max-width: 100%;\r\n        order: 2;\r\n    }\r\n    .content-right{\r\n        order: 1;\r\n\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1DQUFtQztJQUNuQyxrQ0FBa0M7O0FBRXRDO0FBQ0E7SUFDSSxtQ0FBbUM7SUFDbkMsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSwwQkFBeUI7WUFBekIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSTtRQUNJLGNBQWM7UUFDZCxlQUFlO1FBQ2YsUUFBUTtJQUNaO0lBQ0E7UUFDSSxRQUFROztJQUVaO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXIvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbnRlbnQtbGVmdHtcclxuICAgIC8qIG1pbi13aWR0aDogMjIwcHg7ICovXHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4OyBcclxuICAgIG1pbi13aWR0aDogMjYwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHggNXB4IDBweCA1cHggIWltcG9ydGFudDtcclxuICAgIC8qIG1hcmdpbi1yaWdodDogNXB4ICFpbXBvcnRhbnQ7ICovXHJcbiAgICBcclxufVxyXG4uY29udGVudC1yaWdodHtcclxuICAgIHBhZGRpbmc6IDBweCA1cHggMHB4IDVweCAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgIC8qIG1pbi13aWR0aDogNTAwcHg7ICovXHJcbn1cclxuLmNvbnRlbnQtcmlnaHQgLnJvdywuY29se1xyXG4gICAgbWFyZ2luOiAwcHggO1xyXG59XHJcbi5zdGF0dXMtYmFye1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnN0YXR1cy1iYXIgLmJ1dHRvbi1iYXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG4uYnV0dG9uLWJhciBidXR0b257XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbi5kcm9wZG93bi1tZW51IGJ1dHRvbntcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcbi5zdGF0dXMtYmFyIHNwYW57XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5zdGF0dXMtYmFyIC5kcm9wZG93bntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnVzZXItaW5mb3tcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5pbmZve1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmluZm8gcHtcclxuICAgIHBhZGRpbmc6IDNweCAwcHggM3B4IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWVudS1iYXJ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNzBweDtcclxufVxyXG4ubWVudS1iYXIgdWx7XHJcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogN3B4O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4ubWVudS1iYXIgdWwgbGl7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgbWFyZ2luOiAwcHggMTNweDtcclxufVxyXG4ubWVudS1iYXIgdWwgbGkgYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiAjMjg3RkI4O1xyXG59XHJcbi5tZW51LWJhciB1bCBsaSBhOmhvdmVye1xyXG4gICAgY29sb3I6ICNFRDY1MDQ7XHJcbn1cclxuLm1lbnUtYmFyIHVsIGxpIC5pcy1zZWxlY3RlZHtcclxuICAgIGNvbG9yOiAjRUQ2NTA0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmNvbnRlbnQtbGVmdHtcclxuICAgICAgICBmbGV4OiAwIDAgMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgb3JkZXI6IDI7XHJcbiAgICB9XHJcbiAgICAuY29udGVudC1yaWdodHtcclxuICAgICAgICBvcmRlcjogMTtcclxuXHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-write-reference-modal [people]=\"user\"></app-write-reference-modal>\r\n<app-send-message-modal [people]=\"user\"></app-send-message-modal>\r\n<app-send-request-modal [people]=\"user\"></app-send-request-modal>\r\n<div class=\"row\">\r\n  <div class=\"content-left col-3 \">\r\n    <div class=\"box user-info\">\r\n      <img class=\"photo img-responsive\"\r\n        [src]=\"user.avatarLocation?user.avatarLocation:'./../../../../assets/imgs/profile-picture-placeholder.png'\">\r\n      <div class=\"info\">\r\n        <p style=\"font-size:30px;\">{{user.fullName}}</p>\r\n        <p>{{user.address}}</p>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"box\" style=\"min-height:500px\">\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"content-right col \">\r\n    <div class=\"box status-bar\">\r\n      <span class=\"status-value\" [style.color]=\"user.status?'green':'red'\">\r\n        {{user.status?'Acepting Guest':'Not Acepting Guest'}}\r\n      </span>\r\n      <div class=\"button-bar\">\r\n        <button (click)=\"sendRequestModal.open();\" *ngIf=\"!isUser&&user.status\" class=\"btn btn-primary\">Send\r\n          Request</button>\r\n        <button (click)=\"sendMessageModal.open();\" *ngIf=\"!isUser\" class=\"btn btn-primary\"><i\r\n            class=\"far fa-envelope\"></i></button>\r\n        <button *ngIf=\"isUser\" class=\"btn btn-primary\" routerLink=\"/Users/Profile/Edit\">Edit My Profile</button>\r\n        <div *ngIf=\"!isUser\" class=\"dropdown\" (clickOutside)=\"isdrop=false;\">\r\n          <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenu2\" data-toggle=\"dropdown\"\r\n            (click)=\"isdrop=!isdrop\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            More\r\n          </button>\r\n          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenu2\"\r\n            [style.display]=\"isdrop?'block':'none'\">\r\n            <button class=\"dropdown-item\" type=\"button\">Add Friend</button>\r\n            <button (click)=\"writeReferenceModal.open();\" class=\"dropdown-item\" type=\"button\">Write Reference</button>\r\n            <button class=\"dropdown-item\" type=\"button\">Report</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"box menu-bar\">\r\n      <ul>\r\n        <li><a routerLinkActive='is-selected' [routerLink]=\"['About']\"><span>About</span></a></li>\r\n        <li><a routerLinkActive='is-selected' [routerLink]=\"['Myhome']\"><span>My Home</span></a></li>\r\n        <li><a routerLinkActive='is-selected' [routerLink]=\"['Photos']\"><span>Photos</span></a></li>\r\n        <li><a routerLinkActive='is-selected' [routerLink]=\"['References']\"><span>References</span></a></li>\r\n        <li><a href=\"\"><span>Friends</span></a></li>\r\n      </ul>\r\n    </div>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reuse_write_reference_modal_write_reference_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../reuse/write-reference-modal/write-reference-modal.component */ "./src/app/components/user/reuse/write-reference-modal/write-reference-modal.component.ts");
/* harmony import */ var _reuse_send_message_modal_send_message_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reuse/send-message-modal/send-message-modal.component */ "./src/app/components/user/reuse/send-message-modal/send-message-modal.component.ts");
/* harmony import */ var _reuse_send_request_modal_send_request_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reuse/send-request-modal/send-request-modal.component */ "./src/app/components/user/reuse/send-request-modal/send-request-modal.component.ts");







var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, service, activatedRoute) {
        this.router = router;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.user = {};
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.isUser = this.service.getisUser();
        var temp = this.activatedRoute.snapshot.data.users;
        if (temp.err == '404')
            this.router.navigate(['/Users/' + temp.id]);
        else {
            this.user = temp;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_reuse_write_reference_modal_write_reference_modal_component__WEBPACK_IMPORTED_MODULE_4__["WriteReferenceModalComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _reuse_write_reference_modal_write_reference_modal_component__WEBPACK_IMPORTED_MODULE_4__["WriteReferenceModalComponent"])
    ], ProfileComponent.prototype, "writeReferenceModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_reuse_send_message_modal_send_message_modal_component__WEBPACK_IMPORTED_MODULE_5__["SendMessageModalComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _reuse_send_message_modal_send_message_modal_component__WEBPACK_IMPORTED_MODULE_5__["SendMessageModalComponent"])
    ], ProfileComponent.prototype, "sendMessageModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_reuse_send_request_modal_send_request_modal_component__WEBPACK_IMPORTED_MODULE_6__["SendRequestModalComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _reuse_send_request_modal_send_request_modal_component__WEBPACK_IMPORTED_MODULE_6__["SendRequestModalComponent"])
    ], ProfileComponent.prototype, "sendRequestModal", void 0);
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/user/profile/profile.component.css"), __webpack_require__(/*! ./../../../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/user/profile/references/references.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/user/profile/references/references.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-bar{\r\n    margin: auto;\r\n    display: flex;\r\n    align-items: center;\r\n    height: 70px;\r\n    border-bottom: 1px solid rgba(0,0,0,0.15);\r\n}\r\n.menu-bar ul{\r\n    -webkit-padding-start: 7px;\r\n            padding-inline-start: 7px;\r\n    list-style: none;\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n}\r\n.menu-bar ul li{\r\n    display: inline-block;\r\n    text-align: center; \r\n    margin: 0px 13px;\r\n}\r\n.menu-bar ul li a{\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n    color: #287FB8;\r\n}\r\n.menu-bar ul li a:hover{\r\n    color: #ED6504;\r\n    cursor: pointer;\r\n}\r\n.menu-bar ul li .is-selected{\r\n    color: #ED6504;\r\n    font-weight: 600;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3Byb2ZpbGUvcmVmZXJlbmNlcy9yZWZlcmVuY2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1oseUNBQXlDO0FBQzdDO0FBQ0E7SUFDSSwwQkFBeUI7WUFBekIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9wcm9maWxlL3JlZmVyZW5jZXMvcmVmZXJlbmNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUtYmFye1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjE1KTtcclxufVxyXG4ubWVudS1iYXIgdWx7XHJcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogN3B4O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4ubWVudS1iYXIgdWwgbGl7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgbWFyZ2luOiAwcHggMTNweDtcclxufVxyXG4ubWVudS1iYXIgdWwgbGkgYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiAjMjg3RkI4O1xyXG59XHJcbi5tZW51LWJhciB1bCBsaSBhOmhvdmVye1xyXG4gICAgY29sb3I6ICNFRDY1MDQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm1lbnUtYmFyIHVsIGxpIC5pcy1zZWxlY3RlZHtcclxuICAgIGNvbG9yOiAjRUQ2NTA0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/user/profile/references/references.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/user/profile/references/references.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #loading>\r\n  <div class=\"box\">\r\n    <app-loading></app-loading>\r\n  </div>\r\n</ng-template>\r\n<ng-template #loading1>\r\n  <app-loading></app-loading>\r\n</ng-template>\r\n<ng-template #nothing>\r\n  <div class=\"nothing\">\r\n    <span>Nothing to show</span>\r\n  </div>\r\n</ng-template>\r\n<ng-container *ngIf=\"isLoading==false;else loading\">\r\n  <div class=\"box box-references\">\r\n    <div class=\"box-header\">\r\n      <span>REFERENCES</span>\r\n    </div>\r\n    <div class=\"content-references\">\r\n      <div class=\"menu-bar\">\r\n        <ul>\r\n            <li><a [ngClass]=\"{'is-selected':type=='all'}\" (click)=\"onClick('all')\"><span>All ({{referencesres.length}})</span></a>\r\n            </li>\r\n          <li><a [ngClass]=\"{'is-selected':type=='positive'}\" (click)=\"onClick('positive')\"><span>Positive ({{positive.length}})</span></a>\r\n          </li>\r\n          <li><a [ngClass]=\"{'is-selected':type=='negative'}\" (click)=\"onClick('negative')\"><span>\r\n          Negative ({{negative.length}})</span></a></li>\r\n\r\n        </ul>\r\n      </div>\r\n\r\n      <ng-container *ngIf=\"references.length;else nothing\">\r\n        <ng-container *ngFor=\"let reference of references\">\r\n          <app-reference [reference]=\"reference\"></app-reference>\r\n        </ng-container>\r\n      </ng-container>\r\n\r\n    </div>\r\n  </div>\r\n</ng-container>"

/***/ }),

/***/ "./src/app/components/user/profile/references/references.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/user/profile/references/references.component.ts ***!
  \****************************************************************************/
/*! exports provided: ReferencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferencesComponent", function() { return ReferencesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ReferencesComponent = /** @class */ (function () {
    function ReferencesComponent(router, service, activatedRoute) {
        this.router = router;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.type = 'all';
        //user: User = {};
        this.references = [];
        this.referencesres = [];
        this.positive = [];
        this.negative = [];
        this.isLoading = true;
    }
    ReferencesComponent.prototype.ngOnDestroy = function () {
        this.navigationSubscription.unsubscribe();
    };
    ReferencesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                _this.load();
            }
        });
        this.load();
        this.isUser = this.service.getisUser();
    };
    ReferencesComponent.prototype.load = function () {
        var _this = this;
        this.isLoading = true;
        this.service.getReferences().subscribe(function (res) {
            _this.isLoading = false;
            _this.referencesres = res;
            _this.positive = _this.referencesres.filter(function (item) { return item.status == true; });
            _this.negative = _this.referencesres.filter(function (item) { return item.status == false; });
            _this.references = _this.referencesres;
        });
    };
    ReferencesComponent.prototype.onClick = function (type) {
        this.type = type;
        this.references = this.filter(this.type);
    };
    ReferencesComponent.prototype.filter = function (type) {
        if (type == 'all') {
            return this.referencesres;
        }
        else if (type == 'negative') {
            return this.negative;
        }
        else {
            return this.positive;
        }
    };
    ReferencesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-references',
            template: __webpack_require__(/*! ./references.component.html */ "./src/app/components/user/profile/references/references.component.html"),
            styles: [__webpack_require__(/*! ./references.component.css */ "./src/app/components/user/profile/references/references.component.css"), __webpack_require__(/*! ./../../../../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ReferencesComponent);
    return ReferencesComponent;
}());



/***/ }),

/***/ "./src/app/components/user/pubic-trip-content/pubic-trip-content.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/user/pubic-trip-content/pubic-trip-content.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".your-trips{\r\n  border-bottom: 1px solid rgba(0,0,0,0.15);\r\n  padding-left: 30px;\r\n}\r\n\r\n.your-trips:hover {\r\n  cursor: pointer;\r\n  background: #CCC;\r\n}\r\n\r\n.your-trips .name{\r\n  font-size: 1.3em;\r\n  font-weight: 500;\r\n  padding-right: 20px;\r\n}\r\n\r\n.your-trips .visiting{\r\n  font-size: 1em;\r\n  font-weight: 500;\r\n}\r\n\r\n.your-trips .trip-info{\r\n  clear: both;\r\n  padding: 10px 0px;\r\n}\r\n\r\n.your-trips .trip-info span{\r\n  padding-right: 10px;\r\n}\r\n\r\n.your-trips .trip-decription{\r\n  clear: both;\r\n  padding-bottom: 20px;\r\n  white-space: pre-wrap;\r\n}\r\n\r\n.your-trips .trip-decription::after{\r\n  content: '';\r\n  display: block;\r\n  clear: both;\r\n}\r\n\r\n.your-trips .trip-decription .content{\r\n  float: left;\r\n  width: 90%;\r\n}\r\n\r\n.your-trips .delete {\r\n  float: right;\r\n  width: 10%;\r\n}\r\n\r\n.your-trips .delete button{\r\n  transition: all 500ms;\r\n  opacity: 0.8;\r\n  -webkit-transform: scale(0.8);\r\n          transform: scale(0.8);\r\n}\r\n\r\n.your-trips .delete button:hover{\r\n  -webkit-transform: scale(1);\r\n          transform: scale(1);\r\n  opacity: 1;\r\n}\r\n\r\n.name:focus {\r\n  color: #365899;\r\n  text-decoration: underline;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3B1YmljLXRyaXAtY29udGVudC9wdWJpYy10cmlwLWNvbnRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUF5QztFQUN6QyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osNkJBQXFCO1VBQXJCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDJCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9wdWJpYy10cmlwLWNvbnRlbnQvcHViaWMtdHJpcC1jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIueW91ci10cmlwc3tcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjE1KTtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi55b3VyLXRyaXBzOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI0NDQztcclxufVxyXG5cclxuLnlvdXItdHJpcHMgLm5hbWV7XHJcbiAgZm9udC1zaXplOiAxLjNlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi55b3VyLXRyaXBzIC52aXNpdGluZ3tcclxuICBmb250LXNpemU6IDFlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ueW91ci10cmlwcyAudHJpcC1pbmZve1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIHBhZGRpbmc6IDEwcHggMHB4O1xyXG59XHJcblxyXG4ueW91ci10cmlwcyAudHJpcC1pbmZvIHNwYW57XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnlvdXItdHJpcHMgLnRyaXAtZGVjcmlwdGlvbntcclxuICBjbGVhcjogYm90aDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbn1cclxuXHJcbi55b3VyLXRyaXBzIC50cmlwLWRlY3JpcHRpb246OmFmdGVye1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4ueW91ci10cmlwcyAudHJpcC1kZWNyaXB0aW9uIC5jb250ZW50e1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi55b3VyLXRyaXBzIC5kZWxldGUge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB3aWR0aDogMTAlO1xyXG59XHJcblxyXG4ueW91ci10cmlwcyAuZGVsZXRlIGJ1dHRvbntcclxuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXM7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxufVxyXG5cclxuLnlvdXItdHJpcHMgLmRlbGV0ZSBidXR0b246aG92ZXJ7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4ubmFtZTpmb2N1cyB7XHJcbiAgY29sb3I6ICMzNjU4OTk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/user/pubic-trip-content/pubic-trip-content.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/user/pubic-trip-content/pubic-trip-content.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div id=\"title\" class=\"your-trips\" onclick=\"myFunction()\" (click)=\"onPublicTripClick()\">\r\n    <div class=\"traveler-info\">\r\n      <span  class=\"name\">Public Trip {{stt}} </span><br>\r\n      <span>Visiting: </span><span class=\"visiting\">{{PublicTrip.trip.destination}}</span><br>\r\n    </div>\r\n\r\n    <div class=\"trip-info\">\r\n      <span><i class=\"far fa-calendar-alt\"></i></span>\r\n      <span>{{PublicTrip.trip.arrivalDate|date:\"dd/MM/yy\" }} <i class=\"fas fa-arrow-right\"></i>\r\n        {{PublicTrip.trip.departureDate|date:\"dd/MM/yy\"}}</span>\r\n      <span><i class=\"fas fa-user-friends\"></i></span><span>{{PublicTrip.trip.travelerNumber}} Traveler</span>\r\n    </div>\r\n    <div class=\"trip-decription\">\r\n      <div class=\"content\">\r\n          {{PublicTrip.trip.description}}\r\n      </div>\r\n\r\n      <div class=\"delete d-flex justify-content-center\" >\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-toggle=\"modal\" data-target=\"#exampleModal\" (click)=\"notOnPublicTripClick()\">\r\n              <i class=\"fas fa-trash-alt\" data-toggle=\"modal\"></i>\r\n            </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\" id=\"exampleModalLabel\">Delete public trip</h5>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            Do you want to delete this pubic trip\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\r\n            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDeleteTripClick()\">Delete</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/user/pubic-trip-content/pubic-trip-content.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/user/pubic-trip-content/pubic-trip-content.component.ts ***!
  \************************************************************************************/
/*! exports provided: PubicTripContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PubicTripContentComponent", function() { return PubicTripContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_publictrip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/publictrip */ "./src/app/models/publictrip.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PubicTripContentComponent = /** @class */ (function () {
    function PubicTripContentComponent(router) {
        this.router = router;
        this.permit = true;
        this.idTrip = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.idTripDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PubicTripContentComponent.prototype.ngOnInit = function () {
        this.PublicTrip = { trip: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.PublicTrip), user: this.PublicTrip.user };
        console.log({ a: this.PublicTrip });
    };
    PubicTripContentComponent.prototype.onPublicTripClick = function () {
        if (this.permit === true) {
            this.idTrip.emit(this.PublicTrip.trip.publicTripId);
            //this.router.navigate(['/Users/PublicTrip', this.PublicTrip.trip.publicTripId]);
        }
        this.permit = true;
    };
    PubicTripContentComponent.prototype.notOnPublicTripClick = function () {
        this.permit = false;
        console.log(1);
    };
    PubicTripContentComponent.prototype.onDeleteTripClick = function () {
        this.idTripDelete.emit(this.PublicTrip.trip.publicTripId);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_publictrip__WEBPACK_IMPORTED_MODULE_2__["PublicTrip"])
    ], PubicTripContentComponent.prototype, "PublicTrip", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PubicTripContentComponent.prototype, "stt", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PubicTripContentComponent.prototype, "idTrip", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PubicTripContentComponent.prototype, "idTripDelete", void 0);
    PubicTripContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pubic-trip-content',
            template: __webpack_require__(/*! ./pubic-trip-content.component.html */ "./src/app/components/user/pubic-trip-content/pubic-trip-content.component.html"),
            styles: [__webpack_require__(/*! ./pubic-trip-content.component.css */ "./src/app/components/user/pubic-trip-content/pubic-trip-content.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PubicTripContentComponent);
    return PubicTripContentComponent;
}());



/***/ }),

/***/ "./src/app/components/user/public-trip/public-trip.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/user/public-trip/public-trip.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "legend, p{\r\n  width: 125px;\r\n  margin-left: 20px;\r\n}\r\n\r\nfieldset {\r\n  border-width: 2px;\r\n  border-style: groove;\r\n  border-color: threedface;\r\n  -o-border-image: initial;\r\n     border-image: initial;\r\n}\r\n\r\n.output {\r\n  font: 1rem 'Fira Sans', sans-serif;\r\n}\r\n\r\ninput {\r\n  margin: .4rem;\r\n}\r\n\r\n.content{\r\n  background: white;\r\n  padding-bottom: 15px;\r\n}\r\n\r\n.PublicTrip{\r\n  max-height: 450px;\r\n  overflow-y: scroll;\r\n  overflow-wrap: break-word;\r\n}\r\n\r\n.form-row {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.col{\r\n  position: unset;\r\n\r\n}\r\n\r\ninput, select{\r\n  margin: 0px;\r\n  padding: 0 5px;\r\n}\r\n\r\n.relative {\r\n  position: relative;\r\n}\r\n\r\n.relative .dropdown{\r\n  position: absolute;\r\n  width: 100%;\r\n  max-height: 150px;\r\n  overflow-y: scroll;\r\n\r\n}\r\n\r\n.relative .dropdown ul {\r\n  padding: 0;\r\n}\r\n\r\n.relative .dropdown ul li:hover{\r\n  background: #DDD;\r\n  cursor: pointer;\r\n}\r\n\r\n.input-focus:focus{\r\n\r\n  box-shadow: none;\r\n\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3B1YmxpYy10cmlwL3B1YmxpYy10cmlwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIsd0JBQXFCO0tBQXJCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFHQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7O0FBRWpCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7O0FBRXBCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBQ0E7O0VBRUUsZ0JBQWdCOztBQUVsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9wdWJsaWMtdHJpcC9wdWJsaWMtdHJpcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGVnZW5kLCBwe1xyXG4gIHdpZHRoOiAxMjVweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuZmllbGRzZXQge1xyXG4gIGJvcmRlci13aWR0aDogMnB4O1xyXG4gIGJvcmRlci1zdHlsZTogZ3Jvb3ZlO1xyXG4gIGJvcmRlci1jb2xvcjogdGhyZWVkZmFjZTtcclxuICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XHJcbn1cclxuXHJcbi5vdXRwdXQge1xyXG4gIGZvbnQ6IDFyZW0gJ0ZpcmEgU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBtYXJnaW46IC40cmVtO1xyXG59XHJcblxyXG4uY29udGVudHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLlB1YmxpY1RyaXB7XHJcbiAgbWF4LWhlaWdodDogNDUwcHg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1yb3cge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5jb2x7XHJcbiAgcG9zaXRpb246IHVuc2V0O1xyXG5cclxufVxyXG5cclxuaW5wdXQsIHNlbGVjdHtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwIDVweDtcclxufVxyXG5cclxuLnJlbGF0aXZlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5yZWxhdGl2ZSAuZHJvcGRvd257XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuXHJcbn1cclxuXHJcbi5yZWxhdGl2ZSAuZHJvcGRvd24gdWwge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5yZWxhdGl2ZSAuZHJvcGRvd24gdWwgbGk6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZDogI0RERDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmlucHV0LWZvY3VzOmZvY3Vze1xyXG5cclxuICBib3gtc2hhZG93OiBub25lO1xyXG5cclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/user/public-trip/public-trip.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/user/public-trip/public-trip.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\" style=\"margin-bottom: 10px;\">\r\n  <div class=\"col-sm-7 content box \">\r\n\r\n\r\n\r\n\r\n    <div class=\"d-flex justify-content-center text-secondary m-3\" *ngIf=\"!publicTrips;else show\">\r\n      <div class=\"spinner-border\" role=\"status\" style=\"width: 3em; height: 3em;\">\r\n        <span class=\"sr-only\">Loading...</span>\r\n      </div>\r\n    </div>\r\n\r\n    <ng-template #show>\r\n      <fieldset class=\"\">\r\n\r\n        <legend>Public Trips</legend>\r\n        <div class=\"PublicTrip\">\r\n          <ng-container *ngIf=\"publicTrips.length > 0;else noPublicTrip\">\r\n\r\n            <app-pubic-trip-content *ngFor=\"let publicTrip of publicTrips; let id = index\" [PublicTrip]=\"publicTrip\"\r\n              [stt]=\"id + 1\" (idTrip)=\"onClickPublicTrip($event)\" (idTripDelete)=\"onClickDeleteTrip($event)\">\r\n            </app-pubic-trip-content>\r\n\r\n\r\n          </ng-container>\r\n\r\n          <ng-template #noPublicTrip>\r\n            <div class=\"alert alert-primary\" role=\"alert\">\r\n              You have not public trip\r\n            </div>\r\n          </ng-template>\r\n        </div>\r\n      </fieldset>\r\n    </ng-template>\r\n  </div>\r\n\r\n  <div style=\"width: 40px;\"></div>\r\n\r\n  <div class=\"col-sm-4 content box\" style=\"margin-bottom: 10px; padding-bottom: 15px\">\r\n    <!-- <fieldset style=\"padding: 15px\"> -->\r\n    <h1>Trip's Detail</h1>\r\n    <hr />\r\n\r\n    <form [formGroup]=\"formUser\" autocomplete=\"off\" novalidate=\"true\" (ngSubmit)=\"onSubmitForm()\">\r\n      <span style=\"margin: 0.5rem\">Destination</span>\r\n      <div class=\"form-row\">\r\n        <div class=\"col relative\">\r\n\r\n\r\n\r\n          <input type=\"button\" class=\"form-control input-focus\" style=\"padding-left: 20px; cursor: text;\"\r\n            (click)=\"showform=true;showsearch();\" [(ngModel)]=\"des\" formControlName=\"destination\">\r\n          <div class=\"back-drop-header\" (click)=\"showform=false\" *ngIf=\"showform\">\r\n          </div>\r\n          <div class=\"back-drop\" (click)=\"showform=false\" *ngIf=\"showform\">\r\n          </div>\r\n          <form style=\"position:relative;z-index: 901;\" autocomplete=\"off\">\r\n            <input #search name=\"search\" [(ngModel)]=\"addressInput\" class=\"form-control\" (keyup)=\"onKeyup();\"\r\n              style=\" position:absolute;bottom: 0px ;padding-left: 20px;\"\r\n              [style.display]=\"showform &&issearch?'unset':'none'\">\r\n            <app-dropdown [type]=\"'select'\" (myClick)=\"showform=false;formUser.get('destination').setValue($event);\"\r\n              [searchedSubject]=\"searchedSubject\"></app-dropdown>\r\n          </form>\r\n\r\n          <label class=\"text-danger\"\r\n            *ngIf=\"formUser.controls.destination.dirty && formUser.controls.destination.errors?.required\">This field\r\n            is mandatory.</label>\r\n\r\n          <!-- <div class=\"dropdown list-group\" *ngIf=\"this.places.length > 0\">\r\n              <ul>\r\n                <li class=\"list-group-item\" *ngFor=\"let place of places\" (click)=\"onClickPlace(place)\">{{place}}</li>\r\n              </ul>\r\n            </div> -->\r\n\r\n        </div>\r\n        <!-- <div class=\" col\">\r\n            <input type=\"text\" class=\"form-control\"  placeholder=\"City\">\r\n          </div> -->\r\n      </div>\r\n\r\n      <!-- <div class=\"form-row\" style=\"margin-right: 10px\">\r\n          <div class=\"col\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"State/Province\">\r\n          </div>\r\n          <div class=\"col \">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Country\">\r\n          </div>\r\n        </div> -->\r\n\r\n\r\n\r\n      <div class=\"form-row\">\r\n        <div class=\"col\">\r\n          <span style=\"margin: 0.5rem\">Departure Date</span>\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"trip.departureDate\" formControlName=\"departureDate\">\r\n          <label class=\"text-danger\"\r\n            *ngIf=\"formUser.controls.departureDate.dirty && formUser.controls.departureDate.errors?.required\">This\r\n            field is mandatory.</label>\r\n        </div>\r\n        <div class=\"col\" style=\"margin-left: 5px;\">\r\n          <span style=\"margin: 0.5rem\">Arrival Date</span>\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"trip.arrivalDate\" formControlName=\"arrivalDate\">\r\n          <label class=\"text-danger\"\r\n            *ngIf=\"formUser.controls.arrivalDate.dirty && formUser.controls.arrivalDate.errors?.required\">This field\r\n            is mandatory.</label>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-row\">\r\n        <div class=\"col\">\r\n          <span style=\"margin: 0.5rem\">Traveler Number</span>\r\n          <select class=\"form-control\" id=\"\" [(ngModel)]=\"trip.travelerNumber\" formControlName=\"travelerNumber\">\r\n            <option value=\"1\">1</option>\r\n            <option value=\"2\">2</option>\r\n            <option value=\"3\">3</option>\r\n            <option value=\"4\">4</option>\r\n            <option value=\"5\">5</option>\r\n          </select>\r\n          <label class=\"text-danger\"\r\n            *ngIf=\"formUser.controls.travelerNumber.dirty && formUser.controls.travelerNumber.errors?.required\">This\r\n            field is mandatory.</label>\r\n        </div>\r\n        <div class=\"col\"></div>\r\n      </div>\r\n\r\n      <div class=\"form-row\">\r\n        <div class=\"col\">\r\n          <textarea rows=\"5\" class=\"form-control\" placeholder=\"Description about the trip\"\r\n            [(ngModel)]=\"trip.description\" formControlName=\"description\"></textarea>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- <input type=\"text\" list=\"browsers\">\r\n        <datalist id=\"browsers\">\r\n          <option value=\"Internet Explorer\">\r\n          <option value=\"Firefox\">\r\n          <option value=\"Chrome\">\r\n          <option value=\"Opera\">\r\n        </datalist> -->\r\n\r\n\r\n      <div class=\"form-row \">\r\n        <div class=\"col d-flex justify-content-end\">\r\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"formUser.invalid\">Submit</button>\r\n        </div>\r\n        <div class=\"col d-flex justify-content-center \">\r\n          <button type=\"button\" class=\"btn btn-success\" [disabled]=\"formUser.invalid\"\r\n            (click)=\"onUpdatePublicTrip()\">Update</button>\r\n        </div>\r\n        <div class=\"col d-flex justify-content-start \">\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"onClearForm()\">Clear</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"d-flex justify-content-center\">\r\n        <span class=\"text-success  \" *ngIf=\"click && check\">{{textBtn}} success</span>\r\n        <span class=\"text-danger \" *ngIf=\"click && !check\">{{textBtn}} failed\r\n          {{textBtn === 'Update' && check === false ? '(you must submit before update)' : '' }}</span>\r\n\r\n      </div>\r\n\r\n\r\n\r\n    </form>\r\n    <!-- </fieldset> -->\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user/public-trip/public-trip.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/user/public-trip/public-trip.component.ts ***!
  \**********************************************************************/
/*! exports provided: PublicTripComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicTripComponent", function() { return PublicTripComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");







var PublicTripComponent = /** @class */ (function () {
    function PublicTripComponent(userService, formBuilderService, toastr, router, activate) {
        this.userService = userService;
        this.formBuilderService = formBuilderService;
        this.toastr = toastr;
        this.router = router;
        this.activate = activate;
        this.addressInput = '';
        this.issearch = false;
        this.trip = {};
        this.searchedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    PublicTripComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activate.params.subscribe(function (data) {
            if (data.id) {
                _this.onClickPublicTrip(data.id);
            }
        });
        this.createForm();
        this.load();
    };
    PublicTripComponent.prototype.createForm = function () {
        this.formUser = this.formBuilderService.group({
            destination: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            departureDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            arrivalDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            travelerNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            description: ['']
        });
        this.subscription = this.formUser.valueChanges.subscribe(function (data) {
            console.log(data);
        });
    };
    PublicTripComponent.prototype.load = function () {
        var _this = this;
        this.subscription = this.userService.getPublicTripUser().subscribe(function (data) {
            _this.publicTrips = data;
            console.log(data);
        });
    };
    PublicTripComponent.prototype.onClickPublicTrip = function (id) {
        var _this = this;
        this.idTrip = id;
        this.subscription = this.userService.getPublicTripById(id).subscribe(function (data) {
            _this.trip = data;
            _this.trip.arrivalDate = _this.trip.arrivalDate.slice(0, 10);
            _this.trip.departureDate = _this.trip.departureDate.slice(0, 10);
            _this.des = _this.trip.destination;
            console.log(_this.trip);
        });
        this.click = false;
        this.check = null;
    };
    // onKeyUp() {
    //   if (!this.des) {
    //     this.places = [];
    //     return;
    //   }
    //   if (!this.des.trim()) {
    //     this.places = [];
    //     return;
    //   }
    //   this.subscription = this.userService.getAdressEntries(this.des).subscribe(data => {
    //     console.log(data);
    //     this.places = data;
    //   });
    // }
    // onClickPlace(place) {
    //   this.des = place;
    //   this.places = [];
    // }
    PublicTripComponent.prototype.onSubmitForm = function () {
        var _this = this;
        //this.formUser.value.travelerNumber = Number.parseInt(this.formUser.value.travelerNumber);
        console.log(this.formUser);
        var submit = false;
        this.subscription = this.userService.postPublicTrip(this.formUser.value).subscribe(function (data) {
            console.log(data);
            submit = true;
        });
        // this.router.navigate(['PublicTrip'], {relativeTo: this.activate.parent});
        this.textBtn = 'Submit';
        setTimeout(function () {
            if (submit) {
                _this.toastr.success('New public trip created', 'Create public trip success');
                _this.formUser.reset();
                _this.idTrip = null;
                _this.check = true;
                _this.click = true;
            }
            else {
                _this.toastr.error('Create public trip failed', 'Error');
                _this.check = false;
                _this.click = true;
            }
            _this.load();
        }, 1000);
    };
    PublicTripComponent.prototype.onUpdatePublicTrip = function () {
        var _this = this;
        var update = false;
        if (this.idTrip) {
            this.subscription = this.userService.putPublicTripById(this.idTrip, this.formUser.value).subscribe(function (data) {
                console.log(data);
                update = true;
            });
        }
        setTimeout(function () {
            if (update) {
                _this.check = true;
                _this.formUser.reset();
                _this.toastr.success('Updated pubic trip', 'Update public trip success');
                _this.click = true;
            }
            else {
                if (!_this.idTrip) {
                    _this.check = false;
                }
                _this.click = true;
                _this.toastr.error('Update pubic trip failed', 'Error');
            }
            _this.load();
        }, 1000);
        this.textBtn = 'Update';
    };
    PublicTripComponent.prototype.onClickDeleteTrip = function (id) {
        var _this = this;
        this.isDelete = true;
        var del = false;
        this.subscription = this.userService.deletePublicTripById(id).subscribe(function (data) {
            console.log(data);
            del = true;
            _this.idTrip = null;
            _this.load();
        });
        setTimeout(function () {
            if (del) {
                _this.toastr.success('Delete pubic trip', 'Delete public trip success');
            }
            else {
                _this.toastr.error('Delete pubic trip failed', 'Error');
            }
        }, 1000);
    };
    PublicTripComponent.prototype.onClearForm = function () {
        this.formUser.reset();
        this.idTrip = null;
        this.click = false;
    };
    PublicTripComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    PublicTripComponent.prototype.showsearch = function () {
        var _this = this;
        this.issearch = true;
        this.addressInput = "";
        setTimeout(function () {
            _this.search.nativeElement.focus();
        }, 0);
    };
    PublicTripComponent.prototype.onKeyup = function () {
        this.searchedSubject.next(this.addressInput);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('search'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PublicTripComponent.prototype, "search", void 0);
    PublicTripComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-public-trip',
            template: __webpack_require__(/*! ./public-trip.component.html */ "./src/app/components/user/public-trip/public-trip.component.html"),
            styles: [__webpack_require__(/*! ./public-trip.component.css */ "./src/app/components/user/public-trip/public-trip.component.css"), __webpack_require__(/*! ./../../../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], PublicTripComponent);
    return PublicTripComponent;
}());



/***/ }),

/***/ "./src/app/components/user/request/request.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/user/request/request.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9yZXF1ZXN0L3JlcXVlc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/user/request/request.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/user/request/request.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row11\">\r\n  <div class=\"col11\">\r\n    <h4> request works!</h4>\r\n\r\n\r\n\r\n\r\n\r\n    \r\n    <app-upload></app-upload>\r\n  \r\n    <button class=\"btn btn-lg btn-outline-primary\" (click)=\"this.upload.open()\">Launch demo modal</button>\r\n\r\n\r\n\r\n\r\n  </div>\r\n  <div class=\"col\">\r\n    asdas\r\n  </div>\r\n  \r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/user/request/request.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/user/request/request.component.ts ***!
  \**************************************************************/
/*! exports provided: RequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestComponent", function() { return RequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _reuse_upload_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../reuse/upload/upload.component */ "./src/app/components/user/reuse/upload/upload.component.ts");




var RequestComponent = /** @class */ (function () {
    function RequestComponent(modalService) {
        this.modalService = modalService;
    }
    RequestComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_reuse_upload_upload_component__WEBPACK_IMPORTED_MODULE_3__["UploadComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _reuse_upload_upload_component__WEBPACK_IMPORTED_MODULE_3__["UploadComponent"])
    ], RequestComponent.prototype, "upload", void 0);
    RequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-request',
            template: __webpack_require__(/*! ./request.component.html */ "./src/app/components/user/request/request.component.html"),
            styles: [__webpack_require__(/*! ./request.component.css */ "./src/app/components/user/request/request.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], RequestComponent);
    return RequestComponent;
}());



/***/ }),

/***/ "./src/app/components/user/reuse/carousel-modal/carousel-modal.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/user/reuse/carousel-modal/carousel-modal.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.carousel-header{\r\n    \r\n    padding: 10px 20px;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.button-bar .delbtn{\r\n    outline-style: none;\r\n    border: none;\r\n    background: none;\r\n    padding: 0px;\r\n    margin-right: 20px;\r\n    color: white;\r\n}\r\n.button-bar .delbtn:hover{\r\n    cursor: pointer;\r\n    color: #ED6504;\r\n}\r\n.button-bar{\r\n    margin-left: auto;\r\n}\r\n.carousel-header span,h4{\r\ncolor: white;\r\n\r\n}\r\n.info{\r\n    padding-left: 30px;\r\n     font-style: italic;\r\n     color: #cbc3c3;\r\n}\r\n.carousel-footer {\r\n    \r\n    display: flex;\r\n    align-items: center;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    padding-top: 20px;\r\n\r\n}\r\n.carousel-footer ul{\r\n    -webkit-margin-before: 0px;\r\n            margin-block-start: 0px;\r\n    -webkit-margin-after: 10px;\r\n            margin-block-end: 10px;\r\n    -webkit-padding-start: 0px;\r\n            padding-inline-start: 0px;\r\n    list-style: none;\r\n    white-space: nowrap;\r\n}\r\n.carousel-footer ul li:first-child{\r\n    display: inline-block;\r\n    padding-left: 0px;\r\n}\r\n.carousel-footer ul li{\r\n    display: inline-block;\r\n    padding: 5px;\r\n}\r\n.thumbnail{\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    cursor: pointer;\r\n    width: 100px;\r\n    height: 100px;\r\n}\r\n.thumbnail:hover{\r\n    border: 1px solid white;\r\n}\r\n.thumbnail-active{\r\n    border: 1px solid white;\r\n}\r\n.carousel-body{\r\n    display: flex;\r\n    align-items: center;\r\n    flex: 1 1 auto; \r\n    padding: 20px;\r\n\r\n}\r\n.view{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding-bottom: 158px;\r\n    padding-top: 66px;\r\n    padding-left: 70px;\r\n    padding-right: 70px;\r\n    display: flex;\r\n    align-items: center;\r\n\r\n}\r\n.background{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.img-view{\r\n    margin: auto;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    max-height: 100%;\r\n    max-width: 100%;\r\n    \r\n}\r\n.next{\r\n    margin-left: auto;\r\n}\r\n.previous button,.next button{\r\n    width: 50px;\r\n    height: 50px;\r\n    background: none;\r\n    border: none;\r\n    outline-style: none;\r\n}\r\n.previous button:hover,.next button:hover{\r\n    background: rgba(0, 0, 0, 0.5);\r\n}\r\n.previous button i,.next button i{\r\n   font-size: 40px;\r\n   color: white;\r\n}\r\n.content{\r\n    overflow-x: auto;\r\n}\r\n.content::-webkit-scrollbar-track\r\n{\r\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n\tborder-radius: 8px;\r\n\tbackground-color: #F5F5F5;\r\n}\r\n.content::-webkit-scrollbar\r\n{\r\n    height: 8px;\r\n    border-radius: 8px;\r\n\tbackground-color: #F5F5F5;\r\n}\r\n.content::-webkit-scrollbar-thumb\r\n{\r\n\tborder-radius: 8px;\r\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\r\n\tbackground-color: #555;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3JldXNlL2Nhcm91c2VsLW1vZGFsL2Nhcm91c2VsLW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztJQUVJLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7QUFDQSxZQUFZOztBQUVaO0FBQ0E7SUFDSSxrQkFBa0I7S0FDakIsa0JBQWtCO0tBQ2xCLGNBQWM7QUFDbkI7QUFJQTs7SUFFSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxpQkFBaUI7O0FBRXJCO0FBQ0E7SUFDSSwwQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLDBCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsMEJBQXlCO1lBQXpCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksb0JBQWlCO09BQWpCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxhQUFhOztBQUVqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFlBQVk7SUFDWixvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlOztBQUVuQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSw4QkFBOEI7QUFDbEM7QUFDQTtHQUNHLGVBQWU7R0FDZixZQUFZO0FBQ2Y7QUFHQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBOztDQUVDLGlEQUFpRDtDQUNqRCxrQkFBa0I7Q0FDbEIseUJBQXlCO0FBQzFCO0FBQ0E7O0lBRUksV0FBVztJQUNYLGtCQUFrQjtDQUNyQix5QkFBeUI7QUFDMUI7QUFFQTs7Q0FFQyxrQkFBa0I7Q0FDbEIsZ0RBQWdEO0NBQ2hELHNCQUFzQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9yZXVzZS9jYXJvdXNlbC1tb2RhbC9jYXJvdXNlbC1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jYXJvdXNlbC1oZWFkZXJ7XHJcbiAgICBcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5idXR0b24tYmFyIC5kZWxidG57XHJcbiAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uYnV0dG9uLWJhciAuZGVsYnRuOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICNFRDY1MDQ7XHJcbn1cclxuLmJ1dHRvbi1iYXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG4uY2Fyb3VzZWwtaGVhZGVyIHNwYW4saDR7XHJcbmNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuLmluZm97XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgIGNvbG9yOiAjY2JjM2MzO1xyXG59XHJcblxyXG5cclxuXHJcbi5jYXJvdXNlbC1mb290ZXIge1xyXG4gICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG5cclxufVxyXG4uY2Fyb3VzZWwtZm9vdGVyIHVse1xyXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwcHg7XHJcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxMHB4O1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbi5jYXJvdXNlbC1mb290ZXIgdWwgbGk6Zmlyc3QtY2hpbGR7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG4uY2Fyb3VzZWwtZm9vdGVyIHVsIGxpe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbi50aHVtYm5haWx7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn1cclxuLnRodW1ibmFpbDpob3ZlcntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcbi50aHVtYm5haWwtYWN0aXZle1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1ib2R5e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4OiAxIDEgYXV0bzsgXHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG5cclxufVxyXG4udmlld3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1OHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDY2cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDcwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA3MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcbi5iYWNrZ3JvdW5ke1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5pbWctdmlld3tcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIFxyXG59XHJcbi5uZXh0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuLnByZXZpb3VzIGJ1dHRvbiwubmV4dCBidXR0b257XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xyXG59XHJcbi5wcmV2aW91cyBidXR0b246aG92ZXIsLm5leHQgYnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcbi5wcmV2aW91cyBidXR0b24gaSwubmV4dCBidXR0b24gaXtcclxuICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4uY29udGVudHtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuLmNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrXHJcbntcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjMpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG59XHJcbi5jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhclxyXG57XHJcbiAgICBoZWlnaHQ6IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG59XHJcblxyXG4uY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJcclxue1xyXG5cdGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwuMyk7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzU1NTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/user/reuse/carousel-modal/carousel-modal.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/user/reuse/carousel-modal/carousel-modal.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content>\r\n  <div class=\"view\">\r\n    <img *ngIf=\"activePhoto\" style=\"z-index: 7;\" class=\"img-view\" [src]=\"activePhoto.location\">\r\n  </div>\r\n  <div class=\"background\" style=\"z-index: 5;\" (click)=\"modalRef.close()\">\r\n\r\n  </div>\r\n  <div class=\"carousel-header\" style=\"z-index: 100;\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Photo</h4>\r\n    <span class=\"info\"> {{index+1}}/{{photos.length}}</span>\r\n    <span class=\"info\">Upload Date:\r\n      {{activePhoto.createDate| date:'dd/MM/yyyy'}}</span>\r\n\r\n    <div class=\"button-bar\">\r\n      <button *ngIf=\"activePhoto && isUser\" class=\"delbtn\" (click)=\"deletePhoto()\">Delete Photo</button>\r\n      <button class=\"close\" (click)=\"modalRef.close()\">\r\n        <span><i class=\"fas fa-times\"></i></span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"carousel-body\">\r\n\r\n    <div class=\"previous\" style=\"z-index: 100;\">\r\n      <button *ngIf=\"!(index==0)\" (click)=\"action('previous');\"><i class=\"fas fa-chevron-left\"></i></button>\r\n    </div>\r\n\r\n\r\n    <div class=\"next\" style=\"z-index: 100;\">\r\n      <button *ngIf=\"!(index==photos.length-1)\" (click)=\"action('next');\"><i class=\"fas fa-chevron-right\"></i></button>\r\n    </div>\r\n\r\n\r\n  </div>\r\n  <div class=\"carousel-footer\" style=\"z-index: 100;\">\r\n    <div class=\"previous\" style=\"padding-right: 5px;\">\r\n      <button  (click)=\"content.scrollTo({left:(content.scrollLeft - 500),behavior: 'smooth'})\"><i\r\n          class=\"fas fa-chevron-left\"></i></button>\r\n    </div>\r\n    <div class=\"content\" #content id=\"content\">\r\n      <ul>\r\n        <ng-container *ngFor=\"let photo of photos; index as i\">\r\n          <li id=\"item_{{i}}\">\r\n            <img [ngClass]=\"{'thumbnail-active':i==index}\" (click)=\"onclick(photo,i)\" class=\"thumbnail\"\r\n              [src]=\"photo.location\">\r\n          </li>\r\n        </ng-container>\r\n      </ul>\r\n    </div>\r\n    <div class=\"next\" style=\"padding-left: 5px;\">\r\n      <button  (click)=\"content.scrollTo({left:(content.scrollLeft + 500),behavior: 'smooth'})\"><i\r\n          class=\"fas fa-chevron-right\"></i></button>\r\n    </div>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/components/user/reuse/carousel-modal/carousel-modal.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/user/reuse/carousel-modal/carousel-modal.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CarouselModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselModalComponent", function() { return CarouselModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var CarouselModalComponent = /** @class */ (function () {
    function CarouselModalComponent(service, toast, modalService, config, carousele) {
        this.service = service;
        this.toast = toast;
        this.modalService = modalService;
        this.carousele = carousele;
        this.myclick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        config.interval = 0;
    }
    CarouselModalComponent.prototype.ngOnInit = function () {
    };
    CarouselModalComponent.prototype.open = function (index) {
        this.index = index;
        this.activePhoto = this.photos[this.index];
        this.modalRef = this.modalService.open(this.content, { windowClass: 'carousel-modal' });
        setTimeout(function () {
            window.document.getElementById("item_" + index).scrollIntoView();
        }, 0);
    };
    CarouselModalComponent.prototype.onclick = function (photo, i) {
        // console.log(i)
        this.index = i;
        this.activePhoto = photo;
    };
    CarouselModalComponent.prototype.action = function (event) {
        if (event == 'next')
            this.index++;
        if (event == 'previous')
            this.index--;
        this.activePhoto = this.photos[this.index];
        window.document.getElementById("item_" + this.index).scrollIntoView();
        console.log(window.document.getElementById('content').scrollLeft);
    };
    CarouselModalComponent.prototype.deletePhoto = function () {
        var _this = this;
        this.service.deletePhoto(this.activePhoto.photoId).subscribe(function (res) {
            if (res.status == 204) {
                _this.myclick.emit(_this.index);
                if (_this.index === _this.photos.length)
                    _this.index--;
                _this.activePhoto = _this.photos[_this.index];
                _this.toast.success("Deleted");
            }
            else {
                _this.toast.error('Fail');
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarouselModalComponent.prototype, "myclick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarouselModalComponent.prototype, "photos", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CarouselModalComponent.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarouselModalComponent.prototype, "isUser", void 0);
    CarouselModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carousel-modal',
            template: __webpack_require__(/*! ./carousel-modal.component.html */ "./src/app/components/user/reuse/carousel-modal/carousel-modal.component.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarousel"]],
            styles: [__webpack_require__(/*! ./carousel-modal.component.css */ "./src/app/components/user/reuse/carousel-modal/carousel-modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarousel"]])
    ], CarouselModalComponent);
    return CarouselModalComponent;
}());



/***/ }),

/***/ "./src/app/components/user/reuse/dropdown/dropdown.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/user/reuse/dropdown/dropdown.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown{\r\n    max-height: 200px;\r\n    overflow-y: auto;\r\n    width: 100%;\r\n    position: absolute;\r\n    text-align: left;\r\n    z-index: 200;\r\n    \r\n}\r\n.dropdown ul{\r\n    padding: 0px !important;\r\n    margin: 0px !important;\r\n    list-style-type: none;\r\n    width: 100%;\r\n}\r\n.dropdown ul li:last-child{\r\n    border:none;\r\n}\r\n.dropdown ul li{\r\n    border-bottom: rgba(0,0,0,0.15) 1px solid;\r\n    background: white;\r\n   \r\n}\r\n.dropdown ul li:hover{\r\n    background-color: #f2f2f2;\r\n    cursor: pointer;\r\n}\r\n.dropdown ul a{\r\n    text-decoration: none;\r\n    display: flex;\r\n    align-items: center;\r\n    min-height: 40px;\r\n    overflow-wrap: break-word;\r\n    width: 100%;\r\n}\r\n.dropdown ul a span{\r\n    padding-left: 15px;\r\n    font-size: 1.2em;\r\n    font-weight: 500;\r\n    color: black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3JldXNlL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7O0FBRWhCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0kseUNBQXlDO0lBQ3pDLGlCQUFpQjs7QUFFckI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9yZXVzZS9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3due1xyXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgei1pbmRleDogMjAwO1xyXG4gICAgXHJcbn1cclxuLmRyb3Bkb3duIHVse1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmRyb3Bkb3duIHVsIGxpOmxhc3QtY2hpbGR7XHJcbiAgICBib3JkZXI6bm9uZTtcclxufVxyXG4uZHJvcGRvd24gdWwgbGl7XHJcbiAgICBib3JkZXItYm90dG9tOiByZ2JhKDAsMCwwLDAuMTUpIDFweCBzb2xpZDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICBcclxufVxyXG4uZHJvcGRvd24gdWwgbGk6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5kcm9wZG93biB1bCBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5kcm9wZG93biB1bCBhIHNwYW57XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/user/reuse/dropdown/dropdown.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/user/reuse/dropdown/dropdown.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img *ngIf=\"isload\" style=\"z-index: 210;position:absolute;height:22px;width: 22px;right: 10px ;\"\r\n  [ngStyle]=\"type=='select'?{'top':'-30px'}:{'top':'8px'}\" src=\"./../../../../../assets/imgs/spinner.gif\">\r\n\r\n<div class=\"dropdown\" (clickOutside)=\"cityNames=[];\"\r\n  [ngStyle]=\"(cityNames.length)&&  {'border': 'rgba(0,0,0,0.15) 1px solid'}\">\r\n  <ul>\r\n    <li *ngFor=\"let city of cityNames\"><a (click)=\"onClick(city);\">\r\n        <span>{{city}}</span>\r\n      </a></li>\r\n  </ul>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/user/reuse/dropdown/dropdown.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/user/reuse/dropdown/dropdown.component.ts ***!
  \**********************************************************************/
/*! exports provided: DropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return DropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var DropdownComponent = /** @class */ (function () {
    function DropdownComponent(service, activatedRoute, router) {
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.myClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.textSelect = 'host';
        this.cityNames = [];
        this.isload = false;
    }
    DropdownComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAdress(this.searchedSubject).subscribe(function (res) {
            _this.cityNames = res;
            _this.isload = false;
        });
        this.searchedSubject.subscribe(function (value) {
            _this.isload = value.length ? true : false;
            if (value.length < 1) {
                _this.cityNames = [];
            }
        });
    };
    DropdownComponent.prototype.onClick = function (city) {
        if (this.type == 'select') {
            this.myClick.emit(city);
        }
        else {
            this.myClick.emit();
            if (this.formSearch)
                this.textSelect = this.formSearch.value['select'];
            this.router.navigate(['/Users/Search'], { queryParams: { type: this.textSelect, location: city } });
        }
        this.cityNames = [];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"])
    ], DropdownComponent.prototype, "searchedSubject", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownComponent.prototype, "myClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownComponent.prototype, "formSearch", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DropdownComponent.prototype, "type", void 0);
    DropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dropdown',
            template: __webpack_require__(/*! ./dropdown.component.html */ "./src/app/components/user/reuse/dropdown/dropdown.component.html"),
            styles: [__webpack_require__(/*! ./dropdown.component.css */ "./src/app/components/user/reuse/dropdown/dropdown.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DropdownComponent);
    return DropdownComponent;
}());



/***/ }),

/***/ "./src/app/components/user/reuse/loading/loading.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/user/reuse/loading/loading.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9yZXVzZS9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/user/reuse/loading/loading.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/user/reuse/loading/loading.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height:150px;display: flex; align-items: center;justify-content: center;\">\r\n  <div>\r\n    <img style=\"height:50px;width: 50px;\" src=\"./../../../../../assets/imgs/spinner.gif\">\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user/reuse/loading/loading.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/user/reuse/loading/loading.component.ts ***!
  \********************************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/components/user/reuse/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.css */ "./src/app/components/user/reuse/loading/loading.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/components/user/reuse/offer-to-host/offer-to-host.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/user/reuse/offer-to-host/offer-to-host.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label{\r\n    font-weight: 600;\r\n}\r\n.trip-info{\r\n    border-bottom: 1px solid #dee2e6;\r\n}\r\n.message{\r\n    padding-top: 30px;\r\n}\r\nh3{\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3JldXNlL29mZmVyLXRvLWhvc3Qvb2ZmZXItdG8taG9zdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyL3JldXNlL29mZmVyLXRvLWhvc3Qvb2ZmZXItdG8taG9zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWx7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi50cmlwLWluZm97XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG4ubWVzc2FnZXtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcbmgze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/user/reuse/offer-to-host/offer-to-host.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/user/reuse/offer-to-host/offer-to-host.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Send a Offer to {{user.fullName}}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalRef.close()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"modal-body\">\r\n    <div class=\"trip-info\">\r\n      <h3>Trip Information</h3>\r\n      <form>\r\n        <div class=\"form-group\">\r\n          <label for=\"destination\">Visiting</label>\r\n          <input disabled [ngModel]=\"trip.destination\"  type=\"text\"  class=\"form-control\"\r\n            id=\"destination\" name=\"destination\">\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"arrivaldate\">Arrival Date</label>\r\n            <input disabled [ngModel]=\"trip.arrivalDate|date:'dd/MM/yyyy'\" type=\"datetime\" class=\"form-control\"\r\n              id=\"arrivaldate\" name=\"arrivaldate\">\r\n          </div>\r\n          <div class=\"form-group col\">\r\n            <label for=\"departuredate\">Departure Date</label>\r\n            <input disabled [ngModel]=\"trip.departureDate|date:'dd/MM/yyyy'\" type=\"datetime\" class=\"form-control\"\r\n              id=\"departuredate\" name=\"departuredate\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"travelerNumber\">Traveler Number</label>\r\n          <input disabled [ngModel]=\"trip.travelerNumber\" style=\"width:100px\" type=\"number\" min=\"0\" class=\"form-control\"\r\n            id=\"travelerNumber\" name=\"travelerNumber\">\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"message\">\r\n      <form #offerForm=\"ngForm\">\r\n        <div class=\"form-group\">\r\n          <label for=\"message\">Your Message<span style=\"color: red\">*</span></label>\r\n          <textarea required ngModel class=\"form-control\" name=\"message\" id=\"message\" rows=\"5\"></textarea>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modalRef.close()\">Cancel</button>\r\n    <button [disabled]=\"offerForm.invalid\" type=\"button\" class=\"btn btn-success\"\r\n      (click)=\"send(offerForm);\">Send</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/components/user/reuse/offer-to-host/offer-to-host.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/user/reuse/offer-to-host/offer-to-host.component.ts ***!
  \********************************************************************************/
/*! exports provided: OfferToHostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferToHostComponent", function() { return OfferToHostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_models_trip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/trip */ "./src/app/models/trip.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");





var OfferToHostComponent = /** @class */ (function () {
    function OfferToHostComponent(modalService, service) {
        this.modalService = modalService;
        this.service = service;
    }
    OfferToHostComponent.prototype.ngOnInit = function () {
    };
    OfferToHostComponent.prototype.open = function () {
        var _this = this;
        this.service.getPeopleProfile(this.trip.applicationUserId).subscribe(function (res) {
            _this.user = res;
            _this.modalRef = _this.modalService.open(_this.content, { size: 'lg', windowClass: 'modal-holder' });
        });
    };
    OfferToHostComponent.prototype.send = function (offerForm) {
        console.log(offerForm.value);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], OfferToHostComponent.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_trip__WEBPACK_IMPORTED_MODULE_3__["Trip"])
    ], OfferToHostComponent.prototype, "trip", void 0);
    OfferToHostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-offer-to-host',
            template: __webpack_require__(/*! ./offer-to-host.component.html */ "./src/app/components/user/reuse/offer-to-host/offer-to-host.component.html"),
            styles: [__webpack_require__(/*! ./offer-to-host.component.css */ "./src/app/components/user/reuse/offer-to-host/offer-to-host.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], OfferToHostComponent);
    return OfferToHostComponent;
}());



/***/ }),

/***/ "./src/app/components/user/reuse/publictrip/publictrip.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/user/reuse/publictrip/publictrip.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\r\n    color: #27374c;\r\n}\r\na:hover{\r\n    text-decoration: none;\r\n}\r\n.trip{\r\n    border-bottom: 1px solid rgba(0,0,0,0.15);\r\n    width: 100%;\r\n    padding: 20px;\r\n}\r\n.row{\r\n    margin: 0;\r\n}\r\n.col{\r\n    padding: 0;\r\n}\r\n.trip .avatar{\r\n    \r\n    max-width: 90px;\r\n}\r\n.trip img{\r\n    height: 70px;\r\n    width:70px;\r\n    border-radius: 50%;\r\n}\r\n.trip .trip-content{\r\n   min-width: 100px;\r\n   \r\n}\r\n.top{\r\n    width: 100%;\r\n    float: left;\r\n}\r\nspan{\r\n    word-wrap: break-word;\r\n}\r\n.traveler-info{\r\n    float: left;\r\n}\r\n.offer-button{\r\n    float: right;\r\n    padding-right: 20px ;\r\n}\r\n.offer-button button{\r\n    width: 120px;\r\n    height: 50px;\r\n}\r\n.trip-info{\r\n    clear: both;\r\n    padding: 15px 0px;\r\n}\r\n.trip-info span{\r\n    padding-right: 10px;\r\n    \r\n}\r\n.trip-decription{\r\n   clear: both;\r\n   word-wrap: break-word;\r\n   white-space: pre-wrap;\r\n   max-width: 80%;\r\n   max-height: 4.5em;\r\n   overflow: hidden; \r\n  transition: max-height 0.5s; \r\n\r\n}\r\n.trip-decription p{\r\n    margin-bottom: 0px; \r\n}\r\n.button-decription{\r\n   \r\n    padding-top: 5px;\r\n    display: flex; \r\n    max-width: 80%;\r\n}\r\n.button-decription a{\r\ncolor: #287FB8;;\r\nfont-weight: 600;\r\n}\r\n.button-decription a:hover{\r\n    cursor: pointer;\r\n    color: #ED6504;\r\n}\r\n.traveler-info .name{\r\nfont-size: 1.3em;\r\nfont-weight: 500;\r\npadding-right: 20px;\r\n}\r\n.traveler-info .bold-value{\r\n    font-size: 1em;\r\n    font-weight: 500;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3JldXNlL3B1YmxpY3RyaXAvcHVibGljdHJpcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSx5Q0FBeUM7SUFDekMsV0FBVztJQUNYLGFBQWE7QUFDakI7QUFDQTtJQUNJLFNBQVM7QUFDYjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7O0lBRUksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7QUFDQTtHQUNHLGdCQUFnQjs7QUFFbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksbUJBQW1COztBQUV2QjtBQUVBO0dBQ0csV0FBVztHQUNYLHFCQUFxQjtHQUNyQixxQkFBcUI7R0FDckIsY0FBYztHQUNkLGlCQUFpQjtHQUNqQixnQkFBZ0I7RUFDakIsMkJBQTJCOztBQUU3QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7O0lBRUksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixjQUFjO0FBQ2xCO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsZ0JBQWdCO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixtQkFBbUI7QUFDbkI7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXIvcmV1c2UvcHVibGljdHJpcC9wdWJsaWN0cmlwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhe1xyXG4gICAgY29sb3I6ICMyNzM3NGM7XHJcbn1cclxuYTpob3ZlcntcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4udHJpcHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMTUpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbi5yb3d7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLmNvbHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLnRyaXAgLmF2YXRhcntcclxuICAgIFxyXG4gICAgbWF4LXdpZHRoOiA5MHB4O1xyXG59XHJcbi50cmlwIGltZ3tcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIHdpZHRoOjcwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLnRyaXAgLnRyaXAtY29udGVudHtcclxuICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgXHJcbn1cclxuLnRvcHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuc3BhbntcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG4udHJhdmVsZXItaW5mb3tcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5vZmZlci1idXR0b257XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4IDtcclxufVxyXG4ub2ZmZXItYnV0dG9uIGJ1dHRvbntcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLnRyaXAtaW5mb3tcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgcGFkZGluZzogMTVweCAwcHg7XHJcbn1cclxuLnRyaXAtaW5mbyBzcGFue1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIFxyXG59XHJcblxyXG4udHJpcC1kZWNyaXB0aW9ue1xyXG4gICBjbGVhcjogYm90aDtcclxuICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgIG1heC13aWR0aDogODAlO1xyXG4gICBtYXgtaGVpZ2h0OiA0LjVlbTtcclxuICAgb3ZlcmZsb3c6IGhpZGRlbjsgXHJcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjVzOyBcclxuXHJcbn1cclxuLnRyaXAtZGVjcmlwdGlvbiBwe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4OyBcclxufVxyXG4uYnV0dG9uLWRlY3JpcHRpb257XHJcbiAgIFxyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbn1cclxuLmJ1dHRvbi1kZWNyaXB0aW9uIGF7XHJcbmNvbG9yOiAjMjg3RkI4OztcclxuZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uYnV0dG9uLWRlY3JpcHRpb24gYTpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjRUQ2NTA0O1xyXG59XHJcbi50cmF2ZWxlci1pbmZvIC5uYW1le1xyXG5mb250LXNpemU6IDEuM2VtO1xyXG5mb250LXdlaWdodDogNTAwO1xyXG5wYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi50cmF2ZWxlci1pbmZvIC5ib2xkLXZhbHVle1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/user/reuse/publictrip/publictrip.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/user/reuse/publictrip/publictrip.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-offer-to-host [trip]=\"publicTrip\"></app-offer-to-host>\r\n<div class=\"trip row\">\r\n  <div class=\"avatar col\">\r\n    <a routerLink=\"/Users/People/{{publicTrip.user.id}}\"><img class=\"photo\"\r\n        [src]=\"publicTrip.user.avatarLocation?publicTrip.user.avatarLocation:'./../../../../assets/imgs/profile-picture-placeholder.png'\" alt=\"\"></a>\r\n  </div>\r\n  <div class=\"trip-content col\">\r\n    <div class=\"top\">\r\n      <div class=\"traveler-info\">\r\n        <a routerLink=\"/Users/People/{{publicTrip.user.id}}\"> <span class=\"name\">{{publicTrip.user.fullName}}</span></a>\r\n        <br>\r\n        <span>Visiting: </span><span class=\"bold-value\">{{publicTrip.destination}}</span><br>\r\n        <span>From: </span><span class=\"bold-value\">{{publicTrip.user.address}}</span><br>\r\n        <span>Speakers: </span><span class=\"bold-value\">{{publicTrip.user.fluentLanguage}}</span><br>\r\n      </div>\r\n      <div class=\"offer-button \">\r\n        <button (click)=\"offerToHost.open()\" class=\"btn btn-primary\">Offer to Host</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"trip-info\">\r\n      <span><i class=\"far fa-calendar-alt\"></i></span>\r\n      <span>{{publicTrip.arrivalDate|date:\"dd/MM/yyyy\" }} <i class=\"fas fa-arrow-right\"></i>\r\n        {{publicTrip.departureDate|date:\"dd/MM/yyyy\"}}</span>\r\n      <span><i class=\"fas fa-user-friends\"></i></span><span>{{publicTrip.travelerNumber}} Traveler</span>\r\n    </div>\r\n    <div class=\"trip-decription\" (window:resize)=\"onResize($event)\" [ngStyle]=\"x && {'max-height.em':height}\">\r\n      <p #des>{{publicTrip.description}} </p>\r\n    </div>\r\n    <div class=\"button-decription\" *ngIf=\"show\">\r\n      <a style=\"margin-left:auto\"  (click)=\"x=!x\">{{x?'[-]Read Less':'[+]Read More'}}</a>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user/reuse/publictrip/publictrip.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/user/reuse/publictrip/publictrip.component.ts ***!
  \**************************************************************************/
/*! exports provided: PublictripComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublictripComponent", function() { return PublictripComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_publictrip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../models/publictrip */ "./src/app/models/publictrip.ts");
/* harmony import */ var _offer_to_host_offer_to_host_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../offer-to-host/offer-to-host.component */ "./src/app/components/user/reuse/offer-to-host/offer-to-host.component.ts");




var PublictripComponent = /** @class */ (function () {
    function PublictripComponent() {
        this.show = false;
    }
    PublictripComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.onResize(event);
        }, 0);
    };
    PublictripComponent.prototype.onResize = function (event) {
        this.height = this.des.nativeElement.offsetHeight / 16;
        this.show = (this.height > 6);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_publictrip__WEBPACK_IMPORTED_MODULE_2__["PublicTrip"])
    ], PublictripComponent.prototype, "publicTrip", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('des'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PublictripComponent.prototype, "des", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_offer_to_host_offer_to_host_component__WEBPACK_IMPORTED_MODULE_3__["OfferToHostComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _offer_to_host_offer_to_host_component__WEBPACK_IMPORTED_MODULE_3__["OfferToHostComponent"])
    ], PublictripComponent.prototype, "offerToHost", void 0);
    PublictripComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-publictrip',
            template: __webpack_require__(/*! ./publictrip.component.html */ "./src/app/components/user/reuse/publictrip/publictrip.component.html"),
            styles: [__webpack_require__(/*! ./publictrip.component.css */ "./src/app/components/user/reuse/publictrip/publictrip.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PublictripComponent);
    return PublictripComponent;
}());



/***/ }),

/***/ "./src/app/components/user/reuse/reference/reference.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/user/reuse/reference/reference.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\r\n    color: #27374c;\r\n}\r\na:hover{\r\n    text-decoration: none;\r\n}\r\n.reference{\r\n    border-bottom: 1px solid rgba(0,0,0,0.15);\r\n    width: 100%;\r\n    padding: 20px;\r\n}\r\n.row{\r\n    margin: 0;\r\n}\r\n.col{\r\n    padding: 0;\r\n}\r\n.reference .avatar{\r\n    max-width: 90px;\r\n}\r\n.reference img{\r\n    height: 70px;\r\n    width:70px;\r\n    border-radius: 50%;\r\n}\r\n.reference .reference-content{\r\n   min-width: 100px;\r\n   \r\n}\r\nspan{\r\n    word-wrap: break-word;\r\n}\r\n.user-info{\r\n    float: left;\r\n}\r\n.user-info p{\r\n    margin-bottom: 0px;\r\n}\r\n.user-info .name{\r\n    font-size: 1.3em;\r\n    font-weight: 500;\r\n}\r\n.user-info .address{\r\nmargin-bottom: 0px;\r\n}\r\n.time{\r\n    float: right;\r\n    color: #929EAE;\r\n    size: 0.9em;\r\n}\r\n.status{\r\n    clear: both;\r\n    padding: 20px 0px;\r\n}\r\n.status span{\r\n    font-weight: 600;\r\n}\r\n.reference-decription{\r\n   clear: both;\r\n   word-wrap: break-word;\r\n   white-space: pre-wrap;\r\n   max-width: 80%;\r\n   max-height: 4.5em;\r\n   overflow: hidden; \r\n  transition: max-height 0.5s; \r\n\r\n}\r\n.reference-decription p{\r\n    margin-bottom: 0px; \r\n}\r\n.button-decription{\r\n    padding-top: 5px;\r\n    display: flex; \r\n    max-width: 80%;\r\n}\r\n.button-decription a{\r\ncolor: #287FB8;;\r\nfont-weight: 600;\r\n}\r\n.button-decription a:hover{\r\n    cursor: pointer;\r\n    color: #ED6504;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3JldXNlL3JlZmVyZW5jZS9yZWZlcmVuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kseUNBQXlDO0lBQ3pDLFdBQVc7SUFDWCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7QUFDQTtHQUNHLGdCQUFnQjs7QUFFbkI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0dBQ0csV0FBVztHQUNYLHFCQUFxQjtHQUNyQixxQkFBcUI7R0FDckIsY0FBYztHQUNkLGlCQUFpQjtHQUNqQixnQkFBZ0I7RUFDakIsMkJBQTJCOztBQUU3QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGNBQWM7QUFDbEI7QUFDQTtBQUNBLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyL3JldXNlL3JlZmVyZW5jZS9yZWZlcmVuY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImF7XHJcbiAgICBjb2xvcjogIzI3Mzc0YztcclxufVxyXG5hOmhvdmVye1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5yZWZlcmVuY2V7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjE1KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG4ucm93e1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5jb2x7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbi5yZWZlcmVuY2UgLmF2YXRhcntcclxuICAgIG1heC13aWR0aDogOTBweDtcclxufVxyXG4ucmVmZXJlbmNlIGltZ3tcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIHdpZHRoOjcwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLnJlZmVyZW5jZSAucmVmZXJlbmNlLWNvbnRlbnR7XHJcbiAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgIFxyXG59XHJcbnNwYW57XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuLnVzZXItaW5mb3tcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi51c2VyLWluZm8gcHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4udXNlci1pbmZvIC5uYW1le1xyXG4gICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLnVzZXItaW5mbyAuYWRkcmVzc3tcclxubWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi50aW1le1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY29sb3I6ICM5MjlFQUU7XHJcbiAgICBzaXplOiAwLjllbTtcclxufVxyXG4uc3RhdHVze1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcclxufVxyXG4uc3RhdHVzIHNwYW57XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ucmVmZXJlbmNlLWRlY3JpcHRpb257XHJcbiAgIGNsZWFyOiBib3RoO1xyXG4gICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgIG1heC1oZWlnaHQ6IDQuNWVtO1xyXG4gICBvdmVyZmxvdzogaGlkZGVuOyBcclxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNXM7IFxyXG5cclxufVxyXG4ucmVmZXJlbmNlLWRlY3JpcHRpb24gcHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDsgXHJcbn1cclxuLmJ1dHRvbi1kZWNyaXB0aW9ue1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbn1cclxuLmJ1dHRvbi1kZWNyaXB0aW9uIGF7XHJcbmNvbG9yOiAjMjg3RkI4OztcclxuZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uYnV0dG9uLWRlY3JpcHRpb24gYTpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjRUQ2NTA0O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/user/reuse/reference/reference.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/user/reuse/reference/reference.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"reference row\">\r\n  <div class=\"avatar col\">\r\n    <a routerLink=\"/Users/People/{{reference.sender.id}}\"><img class=\"photo\"\r\n        [src]=\"reference.sender.avatarLocation?reference.sender.avatarLocation:'./../../../../assets/imgs/profile-picture-placeholder.png'\"></a>\r\n  </div>\r\n  <div class=\"reference-content col\">\r\n    <div class=\"user-info\">\r\n      <a routerLink=\"/Users/People/{{reference.sender.id}}\">\r\n        <p class=\"name\">{{reference.sender.fullName}}</p>\r\n      </a>\r\n      <p class=\"address\">{{reference.sender.address}}</p>\r\n    </div>\r\n    <div class=\"time\"><span>{{reference.createDate|date:'dd MMMM, yyyy'}}</span></div>\r\n    <div class=\"status\">\r\n      <span [style.color]=\"reference.status?'green':'red'\">{{reference.status?'Positive':'Negative'}}</span>\r\n    </div>\r\n    <div class=\"reference-decription\" (window:resize)=\"onResize($event)\" [ngStyle]=\"x && {'max-height.em':height}\">\r\n      <p #des>{{reference.content}} </p>\r\n    </div>\r\n    <div class=\"button-decription\" *ngIf=\"show\">\r\n      <a style=\"margin-left:auto\" (click)=\"x=!x\">{{x?'[-]Read Less':'[+]Read More'}}</a>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user/reuse/reference/reference.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/user/reuse/reference/reference.component.ts ***!
  \************************************************************************/
/*! exports provided: ReferenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferenceComponent", function() { return ReferenceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReferenceComponent = /** @class */ (function () {
    function ReferenceComponent() {
        this.show = false;
    }
    ReferenceComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.onResize(event);
        }, 0);
    };
    ReferenceComponent.prototype.onResize = function (event) {
        this.height = this.des.nativeElement.offsetHeight / 16;
        this.show = (this.height > 6);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ReferenceComponent.prototype, "reference", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('des'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ReferenceComponent.prototype, "des", void 0);
    ReferenceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reference',
            template: __webpack_require__(/*! ./reference.component.html */ "./src/app/components/user/reuse/reference/reference.component.html"),
            styles: [__webpack_require__(/*! ./reference.component.css */ "./src/app/components/user/reuse/reference/reference.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReferenceComponent);
    return ReferenceComponent;
}());



/***/ }),

/***/ "./src/app/components/user/reuse/send-message-modal/send-message-modal.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/user/reuse/send-message-modal/send-message-modal.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label{\r\n    font-weight: 600;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3JldXNlL3NlbmQtbWVzc2FnZS1tb2RhbC9zZW5kLW1lc3NhZ2UtbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9yZXVzZS9zZW5kLW1lc3NhZ2UtbW9kYWwvc2VuZC1tZXNzYWdlLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/user/reuse/send-message-modal/send-message-modal.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/user/reuse/send-message-modal/send-message-modal.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Send a Message to {{people.fullName}}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalRef.close()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"modal-body\">\r\n    <form #messageForm=\"ngForm\">\r\n      <div class=\"form-group\">\r\n        <label for=\"message\">Your Message<span style=\"color: red\">*</span></label>\r\n        <textarea required ngModel class=\"form-control\" name=\"message\" id=\"message\" rows=\"5\"></textarea>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modalRef.close()\">Cancel</button>\r\n    <button [disabled]=\"messageForm.invalid\" type=\"button\" class=\"btn btn-success\" (click)=\"send(messageForm);\">Send</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/components/user/reuse/send-message-modal/send-message-modal.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/user/reuse/send-message-modal/send-message-modal.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SendMessageModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMessageModalComponent", function() { return SendMessageModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");




var SendMessageModalComponent = /** @class */ (function () {
    function SendMessageModalComponent(modalService) {
        this.modalService = modalService;
    }
    SendMessageModalComponent.prototype.ngOnInit = function () {
    };
    SendMessageModalComponent.prototype.open = function () {
        this.modalRef = this.modalService.open(this.content, { windowClass: 'modal-holder' });
    };
    SendMessageModalComponent.prototype.send = function (messageForm) {
        console.log(messageForm.value);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SendMessageModalComponent.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["User"])
    ], SendMessageModalComponent.prototype, "people", void 0);
    SendMessageModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-send-message-modal',
            template: __webpack_require__(/*! ./send-message-modal.component.html */ "./src/app/components/user/reuse/send-message-modal/send-message-modal.component.html"),
            styles: [__webpack_require__(/*! ./send-message-modal.component.css */ "./src/app/components/user/reuse/send-message-modal/send-message-modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], SendMessageModalComponent);
    return SendMessageModalComponent;
}());



/***/ }),

/***/ "./src/app/components/user/reuse/send-request-modal/send-request-modal.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/user/reuse/send-request-modal/send-request-modal.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label{\r\n    font-weight: 600;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3JldXNlL3NlbmQtcmVxdWVzdC1tb2RhbC9zZW5kLXJlcXVlc3QtbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9yZXVzZS9zZW5kLXJlcXVlc3QtbW9kYWwvc2VuZC1yZXF1ZXN0LW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/user/reuse/send-request-modal/send-request-modal.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/user/reuse/send-request-modal/send-request-modal.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Send a Request to {{people.fullName}}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalRef.close()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"modal-body\">\r\n    <form #requestForm=\"ngForm\">\r\n      <div class=\"form row\">\r\n        <div class=\"form-group col\">\r\n          <label for=\"arrivaldate\">Arrival Date<span style=\"color: red\">*</span></label>\r\n          <input #arrivaldate required ngModel type=\"date\" min=\"{{now| date:'yyyy-MM-dd'}}\" [max]=\"departuredate.value\" class=\"form-control\" id=\"arrivaldate\" name=\"arrivaldate\">\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"departuredate\">Departure Date<span style=\"color: red\">*</span></label>\r\n          <input #departuredate required ngModel type=\"date\" [min]=\"arrivaldate.value\" class=\"form-control\" id=\"departuredate\" name=\"departuredate\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"travelerNumber\">Traveler Number<span style=\"color: red\">*</span></label>\r\n        <input required ngModel style=\"width:100px\" type=\"number\" min=\"0\" class=\"form-control\" id=\"travelerNumber\" name=\"travelerNumber\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"message\">Your Message<span style=\"color: red\">*</span></label>\r\n        <textarea required ngModel class=\"form-control\" name=\"message\" id=\"message\" rows=\"5\"></textarea>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modalRef.close()\">Cancel</button>\r\n    <button [disabled]=\"requestForm.invalid\" type=\"button\" class=\"btn btn-success\" (click)=\"send(requestForm);\">Send</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/components/user/reuse/send-request-modal/send-request-modal.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/user/reuse/send-request-modal/send-request-modal.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SendRequestModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendRequestModalComponent", function() { return SendRequestModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");




var SendRequestModalComponent = /** @class */ (function () {
    function SendRequestModalComponent(modalService) {
        this.modalService = modalService;
        this.now = new Date();
    }
    SendRequestModalComponent.prototype.ngOnInit = function () {
    };
    SendRequestModalComponent.prototype.open = function () {
        this.modalRef = this.modalService.open(this.content, { size: 'lg', windowClass: 'modal-holder' });
    };
    SendRequestModalComponent.prototype.send = function (requestForm) {
        console.log(requestForm.value);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SendRequestModalComponent.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["User"])
    ], SendRequestModalComponent.prototype, "people", void 0);
    SendRequestModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-send-request-modal',
            template: __webpack_require__(/*! ./send-request-modal.component.html */ "./src/app/components/user/reuse/send-request-modal/send-request-modal.component.html"),
            styles: [__webpack_require__(/*! ./send-request-modal.component.css */ "./src/app/components/user/reuse/send-request-modal/send-request-modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], SendRequestModalComponent);
    return SendRequestModalComponent;
}());



/***/ }),

/***/ "./src/app/components/user/reuse/trip/trip.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/user/reuse/trip/trip.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".your-trips{\r\n    border-bottom: 1px solid rgba(0,0,0,0.15);\r\n    padding: 20px;\r\n}\r\n.top{\r\n    width: 100%;\r\n    float: left;\r\n}\r\n.traveler-info{\r\n    float: left;\r\n    padding-top: 5px;\r\n}\r\nspan{\r\n    word-wrap: break-word;\r\n}\r\n.trip-info{\r\n    clear: both;\r\n    padding: 10px 0px;\r\n    \r\n}\r\n.trip-info span{\r\n    padding-right: 10px;\r\n}\r\n.bold-value{\r\n    font-size: 1em;\r\n    font-weight: 500;\r\n}\r\n.button{\r\n    float: right;\r\n    padding-right: 20px;\r\n}\r\n.button button{\r\n    width: 120px;\r\n    height: 50px;\r\n}\r\n.trip-decription{\r\n    clear: both;\r\n    max-width: 80%;\r\n    word-wrap: break-word;\r\n    white-space: pre-wrap;\r\n     max-height: 4.5em;\r\n     overflow: hidden; \r\n    transition: max-height 0.5s; \r\n    \r\n }\r\n.trip-decription p{\r\n     margin-bottom: 0px; \r\n }\r\n.button-decription{\r\n    padding-top: 5px;\r\n    display: flex; \r\n    max-width: 80%;\r\n}\r\n.button-decription a{\r\n    color: #287FB8;;\r\n    font-weight: 600;\r\n}\r\n.button-decription a:hover{\r\n    cursor: pointer;\r\n    color: #ED6504;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3JldXNlL3RyaXAvdHJpcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUNBQXlDO0lBQ3pDLGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjs7QUFFckI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLHFCQUFxQjtLQUNwQixpQkFBaUI7S0FDakIsZ0JBQWdCO0lBQ2pCLDJCQUEyQjs7Q0FFOUI7QUFDQTtLQUNJLGtCQUFrQjtDQUN0QjtBQUNBO0lBQ0csZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9yZXVzZS90cmlwL3RyaXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi55b3VyLXRyaXBze1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xNSk7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbi50b3B7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi50cmF2ZWxlci1pbmZve1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcbnNwYW57XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuLnRyaXAtaW5mb3tcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICBcclxufVxyXG4udHJpcC1pbmZvIHNwYW57XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5ib2xkLXZhbHVle1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5idXR0b257XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi5idXR0b24gYnV0dG9ue1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbi50cmlwLWRlY3JpcHRpb257XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgIG1heC1oZWlnaHQ6IDQuNWVtO1xyXG4gICAgIG92ZXJmbG93OiBoaWRkZW47IFxyXG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjVzOyBcclxuICAgIFxyXG4gfVxyXG4gLnRyaXAtZGVjcmlwdGlvbiBwe1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDBweDsgXHJcbiB9XHJcbiAuYnV0dG9uLWRlY3JpcHRpb257XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxufVxyXG4uYnV0dG9uLWRlY3JpcHRpb24gYXtcclxuICAgIGNvbG9yOiAjMjg3RkI4OztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmJ1dHRvbi1kZWNyaXB0aW9uIGE6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogI0VENjUwNDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/user/reuse/trip/trip.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/user/reuse/trip/trip.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-offer-to-host [trip]=\"trip\"></app-offer-to-host>\r\n<div class=\"your-trips\">\r\n  <div class=\"top\" >\r\n    <div class=\"traveler-info\">\r\n      <!-- <span class=\"name\">Public Trip</span><br> -->\r\n      <span>Visiting: </span><span class=\"bold-value\">{{trip.destination}}</span><br>\r\n    </div>\r\n    <div class=\"button\">\r\n      <button *ngIf=\"isUser\" class=\"btn btn-primary\" (click)=\"onClickTrip()\">Edit</button>\r\n      <button (click)=\"offerToHost.open()\" *ngIf=\"!isUser\" class=\"btn btn-primary\">Offer to Host</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"trip-info\">\r\n    <span><i class=\"far fa-calendar-alt\"></i></span>\r\n    <span>{{trip.arrivalDate|date:\"dd/MM/yy\" }} <i class=\"fas fa-arrow-right\"></i>\r\n      {{trip.departureDate|date:\"dd/MM/yy\"}}</span>\r\n    <span><i class=\"fas fa-user-friends\"></i></span><span>{{trip.travelerNumber}} Traveler</span>\r\n  </div>\r\n\r\n  <div (window:resize)=\"onResize($event)\" [ngStyle]=\"x && {'max-height.em':height}\" class=\"trip-decription \">\r\n    <p #des>{{trip.description}} </p>\r\n  </div>\r\n  <div class=\"button-decription\" *ngIf=\"show\" >\r\n    <a style=\"margin-left:auto\" (click)=\"x=!x\">{{x?'[-]Read Less':'[+]Read More'}}</a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/user/reuse/trip/trip.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/user/reuse/trip/trip.component.ts ***!
  \**************************************************************/
/*! exports provided: TripComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripComponent", function() { return TripComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_trip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../models/trip */ "./src/app/models/trip.ts");
/* harmony import */ var _offer_to_host_offer_to_host_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../offer-to-host/offer-to-host.component */ "./src/app/components/user/reuse/offer-to-host/offer-to-host.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var TripComponent = /** @class */ (function () {
    function TripComponent(router) {
        this.router = router;
        this.show = false;
    }
    TripComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.onResize(event);
        }, 0);
    };
    TripComponent.prototype.onResize = function (event) {
        this.height = this.des.nativeElement.offsetHeight / 16;
        this.show = (this.height > 6);
    };
    TripComponent.prototype.onClickTrip = function () {
        this.router.navigate(['/Users/PublicTrip', this.trip.publicTripId]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_trip__WEBPACK_IMPORTED_MODULE_2__["Trip"])
    ], TripComponent.prototype, "trip", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], TripComponent.prototype, "isUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('des'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TripComponent.prototype, "des", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_offer_to_host_offer_to_host_component__WEBPACK_IMPORTED_MODULE_3__["OfferToHostComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _offer_to_host_offer_to_host_component__WEBPACK_IMPORTED_MODULE_3__["OfferToHostComponent"])
    ], TripComponent.prototype, "offerToHost", void 0);
    TripComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trip',
            template: __webpack_require__(/*! ./trip.component.html */ "./src/app/components/user/reuse/trip/trip.component.html"),
            styles: [__webpack_require__(/*! ./trip.component.css */ "./src/app/components/user/reuse/trip/trip.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], TripComponent);
    return TripComponent;
}());



/***/ }),

/***/ "./src/app/components/user/reuse/upload/upload.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/user/reuse/upload/upload.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-preview{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n   \r\n}\r\n.image{\r\n    width: auto;\r\n    max-width: 100%;\r\n    max-height: 250px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    \r\n}\r\nlabel{\r\n    font-weight: 600;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3JldXNlL3VwbG9hZC91cGxvYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztBQUV2QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0JBQWlCO09BQWpCLGlCQUFpQjs7QUFFckI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9yZXVzZS91cGxvYWQvdXBsb2FkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXByZXZpZXd7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICBcclxufVxyXG4uaW1hZ2V7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBcclxufVxyXG5sYWJlbHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/user/reuse/upload/upload.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/user/reuse/upload/upload.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Upload a Photo</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalRef.close()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"modal-body\">\r\n\r\n    <div class=\"img-preview\" [style.height.px]=\"from=='photos' && 250\">\r\n      <img [ngClass]=\"{'photo':from=='edit','image':from=='photos'}\" [src]=\"imageUrl\">\r\n    </div>\r\n\r\n    <form autocomplete=\"off\" #uploadForm=\"ngForm\">\r\n      <div class=\"form-group\">\r\n        <label for=\"exampleFormControlFile1\">Select an Image</label>\r\n        <input multiple (change)=\"handleFileInput($event.target.files)\" ngModel name=\"file\" type=\"file\" class=\"form-control-file\"\r\n          id=\"exampleFormControlFile1\" required>\r\n      </div>\r\n      <div>\r\n        <ul>\r\n          <li><span>Image types allowed: GIF, JPG, PNG.</span></li>\r\n          <li><span>Image size must be 2 kB to 20 MB.</span></li>\r\n          <li><span>For best results, upload a photo with a 4:3 ratio.</span></li>\r\n          <li><span>Using script blockers may prevent image uploads from working.</span></li>\r\n        </ul>\r\n      </div>\r\n      <!-- <div class=\"form-group\">\r\n        <label for=\"exampleFormControlInput1\">Description</label>\r\n        <input required autofocus ngModel name=\"description\" type=\"text\" class=\"form-control\"\r\n          id=\"exampleFormControlInput1\">\r\n      </div> -->\r\n    </form>\r\n    <div  style=\"height: 20px;\">\r\n      <ngb-progressbar *ngIf=\"uploading\" type=\"success\" [value]=\"value\" [striped]=\"true\" [animated]=\"true\" height=\"20px\"><i\r\n          style=\"font-size: 10px\">{{value}}%</i></ngb-progressbar>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modalRef.close()\">Cancel</button>\r\n    <button [disabled]=\"uploadForm.invalid\" type=\"button\" class=\"btn btn-success\"\r\n      (click)=\"upload(uploadForm);\">Upload</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/components/user/reuse/upload/upload.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/user/reuse/upload/upload.component.ts ***!
  \******************************************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var UploadComponent = /** @class */ (function () {
    function UploadComponent(activeModal, modalService, toast, service) {
        this.activeModal = activeModal;
        this.modalService = modalService;
        this.toast = toast;
        this.service = service;
        this.myclick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fileToUpload = null;
        this.defaultUrl = './../../../../../assets/imgs/profile-picture-placeholder.png';
    }
    UploadComponent.prototype.ngOnInit = function () {
    };
    UploadComponent.prototype.open = function () {
        this.uploading = false;
        this.value = 3;
        this.modalRef = this.modalService.open(this.content, { windowClass: 'modal-holder' });
        this.imageUrl = this.defaultUrl;
    };
    UploadComponent.prototype.upload = function (uploadForm) {
        var _this = this;
        var fd = new FormData();
        //fd.append('description',uploadForm.value.description);
        fd.append('file', this.fileToUpload, this.fileToUpload.name);
        this.uploading = true;
        if (this.from == 'photos') {
            this.service.uploadPhotos(fd).subscribe(function (event) {
                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpEventType"].UploadProgress)
                    _this.value = Math.round(event.loaded / event.total * 100);
                else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpEventType"].Response) {
                    _this.modalRef.close();
                    _this.myclick.emit(event.body);
                    _this.toast.success("Uploaded");
                }
            });
        }
        if (this.from == 'edit') {
            this.service.uploadAvatar(fd).subscribe(function (event) {
                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpEventType"].UploadProgress)
                    _this.value = Math.round(event.loaded / event.total * 100);
                else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpEventType"].Response) {
                    _this.modalRef.close();
                    _this.myclick.emit(event.body.avatarLocation);
                    _this.toast.success("Update Successed");
                }
            });
        }
    };
    UploadComponent.prototype.handleFileInput = function (file) {
        var _this = this;
        this.fileToUpload = file.item(0);
        if (this.fileToUpload) {
            //show image preview
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.imageUrl = event.target.result;
            };
            reader.readAsDataURL(this.fileToUpload);
        }
        else {
            this.imageUrl = this.defaultUrl;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], UploadComponent.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UploadComponent.prototype, "from", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UploadComponent.prototype, "myclick", void 0);
    UploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! ./upload.component.html */ "./src/app/components/user/reuse/upload/upload.component.html"),
            styles: [__webpack_require__(/*! ./upload.component.css */ "./src/app/components/user/reuse/upload/upload.component.css"), __webpack_require__(/*! ./../../../../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/components/user/reuse/write-reference-modal/write-reference-modal.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/user/reuse/write-reference-modal/write-reference-modal.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label{\r\n    font-weight: 600;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3JldXNlL3dyaXRlLXJlZmVyZW5jZS1tb2RhbC93cml0ZS1yZWZlcmVuY2UtbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9yZXVzZS93cml0ZS1yZWZlcmVuY2UtbW9kYWwvd3JpdGUtcmVmZXJlbmNlLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/user/reuse/write-reference-modal/write-reference-modal.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/user/reuse/write-reference-modal/write-reference-modal.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Write a Reference for {{people.fullName}}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalRef.close()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"modal-body\">\r\n    <form class=\"form-group\" #referenceForm=\"ngForm\">\r\n      <div class=\"form-group\">\r\n        <p>Would you recommend {{people.fullName}}?</p>\r\n        <div class=\"form-check\">\r\n          <input required ngModel class=\"form-check-input\" type=\"radio\" name=\"status\" id=\"exampleRadios1\" value=\"true\">\r\n          <label class=\"form-check-label\" for=\"exampleRadios1\">\r\n            Yes, I'd recommend\r\n          </label>\r\n        </div>\r\n        <div class=\"form-check\">\r\n          <input required ngModel class=\"form-check-input\" type=\"radio\" name=\"status\" id=\"exampleRadios2\" value=\"false\">\r\n          <label class=\"form-check-label\" for=\"exampleRadios2\">\r\n            No, I wouldn't recommend\r\n          </label>\r\n        </div>\r\n        <br><br>\r\n        <p>Your reference will appear on {{people.fullName}}'s profile, so be sure that you're only sharing words you're comfortable\r\n          saying publicly. <span style=\"font-weight: 600\">You can't edit or delete it.</span> </p>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label for=\"content\">Your reference<span style=\"color: red\">*</span></label>\r\n        <textarea required ngModel class=\"form-control\" name=\"content\" id=\"content\" rows=\"5\"></textarea>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modalRef.close()\">Cancel</button>\r\n    <button [disabled]=\"referenceForm.invalid\" type=\"button\" class=\"btn btn-success\" (click)=\"send(referenceForm);\">Send</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/components/user/reuse/write-reference-modal/write-reference-modal.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/components/user/reuse/write-reference-modal/write-reference-modal.component.ts ***!
  \************************************************************************************************/
/*! exports provided: WriteReferenceModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriteReferenceModalComponent", function() { return WriteReferenceModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var WriteReferenceModalComponent = /** @class */ (function () {
    function WriteReferenceModalComponent(modalService, service, toast, route, avtiveRoute) {
        this.modalService = modalService;
        this.service = service;
        this.toast = toast;
        this.route = route;
        this.avtiveRoute = avtiveRoute;
    }
    WriteReferenceModalComponent.prototype.ngOnInit = function () {
    };
    WriteReferenceModalComponent.prototype.open = function () {
        this.modalRef = this.modalService.open(this.content, { size: 'lg', windowClass: 'modal-holder', });
        // console.log(this.route.url)
    };
    WriteReferenceModalComponent.prototype.send = function (referenceForm) {
        var _this = this;
        this.service.sendReference(referenceForm.value).subscribe(function (res) {
            _this.toast.success("You had sent a Reference");
            _this.modalRef.close();
            var x = _this.route.url == '/Users/People/' + _this.people.id + '/References';
            if (x == true) {
                _this.route.navigateByUrl('Users/People/' + _this.people.id + '/References');
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], WriteReferenceModalComponent.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["User"])
    ], WriteReferenceModalComponent.prototype, "people", void 0);
    WriteReferenceModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-write-reference-modal',
            template: __webpack_require__(/*! ./write-reference-modal.component.html */ "./src/app/components/user/reuse/write-reference-modal/write-reference-modal.component.html"),
            styles: [__webpack_require__(/*! ./write-reference-modal.component.css */ "./src/app/components/user/reuse/write-reference-modal/write-reference-modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], WriteReferenceModalComponent);
    return WriteReferenceModalComponent;
}());



/***/ }),

/***/ "./src/app/components/user/search-host/search-host.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/user/search-host/search-host.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.left {\r\n  float: left;\r\n  margin-bottom: 10px;\r\n\r\n}\r\n\r\n.clear {\r\n  clear: both;\r\n  margin-right: 10px;\r\n}\r\n\r\n.wrapper::after {\r\n  content: '';\r\n  display: block;\r\n  clear: both;\r\n}\r\n\r\n.custom {\r\n  padding: 15px 15px;\r\n}\r\n\r\n.lds-ring {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 64px;\r\n  height: 64px;\r\n  left: 46%\r\n}\r\n\r\n.lds-ring div {\r\n  box-sizing: border-box;\r\n  display: block;\r\n  position: absolute;\r\n  width: 51px;\r\n  height: 51px;\r\n  margin: 6px;\r\n  border: 6px solid #AAA;\r\n  border-radius: 50%;\r\n  -webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n          animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n  border-color: #AAA transparent transparent transparent;\r\n}\r\n\r\n.lds-ring div:nth-child(1) {\r\n  -webkit-animation-delay: -0.45s;\r\n          animation-delay: -0.45s;\r\n}\r\n\r\n.lds-ring div:nth-child(2) {\r\n  -webkit-animation-delay: -0.3s;\r\n          animation-delay: -0.3s;\r\n}\r\n\r\n.lds-ring div:nth-child(3) {\r\n  -webkit-animation-delay: -0.15s;\r\n          animation-delay: -0.15s;\r\n}\r\n\r\n@-webkit-keyframes lds-ring {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes lds-ring {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3NlYXJjaC1ob3N0L3NlYXJjaC1ob3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjs7QUFFckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUdBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1o7QUFDRjs7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0VBQThEO1VBQTlELDhEQUE4RDtFQUM5RCxzREFBc0Q7QUFDeEQ7O0FBQ0E7RUFDRSwrQkFBdUI7VUFBdkIsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsOEJBQXNCO1VBQXRCLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLCtCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUI7RUFDM0I7QUFDRjs7QUFQQTtFQUNFO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QjtFQUMzQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyL3NlYXJjaC1ob3N0L3NlYXJjaC1ob3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubGVmdCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbn1cclxuXHJcbi5jbGVhciB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5cclxuLndyYXBwZXI6OmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLmN1c3RvbSB7XHJcbiAgcGFkZGluZzogMTVweCAxNXB4O1xyXG59XHJcblxyXG4ubGRzLXJpbmcge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDY0cHg7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIGxlZnQ6IDQ2JVxyXG59XHJcbi5sZHMtcmluZyBkaXYge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA1MXB4O1xyXG4gIGhlaWdodDogNTFweDtcclxuICBtYXJnaW46IDZweDtcclxuICBib3JkZXI6IDZweCBzb2xpZCAjQUFBO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBhbmltYXRpb246IGxkcy1yaW5nIDEuMnMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSBpbmZpbml0ZTtcclxuICBib3JkZXItY29sb3I6ICNBQUEgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMSkge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNDVzO1xyXG59XHJcbi5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjNzO1xyXG59XHJcbi5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjE1cztcclxufVxyXG5Aa2V5ZnJhbWVzIGxkcy1yaW5nIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/user/search-host/search-host.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/user/search-host/search-host.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"center\">\r\n  <div class=\"wrapper\">\r\n    <div class=\"alert alert-light\" role=\"alert\">\r\n        <b>{{peoples.length}} Results</b>\r\n    </div>\r\n    <app-people\r\n      *ngFor=\"let people of peoples; let i = index\"\r\n      [ngClass]=\"{left: true, clear: i % 2 === 0 ? true : false}\"\r\n    >\r\n    </app-people>\r\n  </div>\r\n</div> -->\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-sm-2\"></div>\r\n\r\n  <div class=\"col-sm\">\r\n    <!-- <div class=\"lds-ring\" *ngIf=\"!peoples\"><div></div><div></div><div></div><div></div></div> -->\r\n\r\n    <div class=\"d-flex justify-content-center text-secondary m-3\" *ngIf=\"!hosts && !travelers; else inform\">\r\n        <div class=\"spinner-border\" role=\"status\" style=\"width: 3em; height: 3em;\">\r\n          <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n    </div>\r\n\r\n    <ng-template #inform>\r\n        <div class=\"alert alert-light box\" *ngIf=\"length === 0;else Result\">No result with key \"{{address}}\" for {{hosts ? 'hosts' : 'travelers'}}</div>\r\n        <ng-template #Result>\r\n            <div class=\"alert alert-light box\">{{length}} result{{length > 1 ? 's' : ''}} with key \"{{address}}\" for {{hosts ? 'hosts' : 'travelers'}}</div>\r\n        </ng-template>\r\n    </ng-template>\r\n\r\n\r\n\r\n    <div class=\"row\">\r\n      <ng-container *ngIf=\"hosts;else trip\">\r\n        <div class=\"col-sm-6\" *ngFor=\"let host of hosts\" [ngStyle]=\"{padding: '5px'}\">\r\n          <app-people [user]=\"host\"></app-people>\r\n        </div>\r\n      </ng-container>\r\n\r\n      <ng-template #trip>\r\n          <div class=\"col-sm-6\" *ngFor=\"let traveler of travelers\" [ngStyle]=\"{padding: '5px'}\">\r\n              <app-people [trip]=\"traveler\"></app-people>\r\n          </div>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-sm-2\">\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/user/search-host/search-host.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/user/search-host/search-host.component.ts ***!
  \**********************************************************************/
/*! exports provided: SearchHostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchHostComponent", function() { return SearchHostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");




var SearchHostComponent = /** @class */ (function () {
    // tslint:disable-next-line: no-shadowed-variable
    function SearchHostComponent(activate, UserService) {
        this.activate = activate;
        this.UserService = UserService;
    }
    SearchHostComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    SearchHostComponent.prototype.loadData = function () {
        var _this = this;
        this.subscriptionParams = this.activate.queryParams.subscribe(function (data) {
            console.log(data);
            _this.address = data.location;
            if (data.type === 'host') {
                _this.subscription = _this.UserService.getHostByAddress(_this.address).subscribe(function (users) {
                    _this.hosts = users;
                    _this.length = _this.hosts.length;
                });
            }
            else {
                _this.subscription = _this.UserService.getTravelerByAddress(_this.address).subscribe(function (trip) {
                    _this.travelers = trip;
                    _this.length = _this.travelers.length;
                    _this.hosts = null;
                });
            }
        });
    };
    SearchHostComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        if (this.subscriptionParams) {
            this.subscriptionParams.unsubscribe();
        }
    };
    SearchHostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-host',
            template: __webpack_require__(/*! ./search-host.component.html */ "./src/app/components/user/search-host/search-host.component.html"),
            styles: [__webpack_require__(/*! ./search-host.component.css */ "./src/app/components/user/search-host/search-host.component.css"), __webpack_require__(/*! ./../../../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], SearchHostComponent);
    return SearchHostComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/user/user.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/user/user.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header shadow-sm bg-white  \">\r\n    <app-header></app-header>\r\n</div>\r\n<div class=\"container\">\r\n    <ng-progress></ng-progress>\r\n    <router-outlet (activate)=\"onActivate($event)\"></router-outlet>\r\n</div>\r\n<div class=\"footer shadow-sm bg-white \">\r\n    <app-footer></app-footer>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-progressbar/core */ "./node_modules/@ngx-progressbar/core/fesm5/ngx-progressbar-core.js");




var UserComponent = /** @class */ (function () {
    function UserComponent(router) {
        this.router = router;
    }
    UserComponent.prototype.ngOnDestroy = function () {
        //this.navigationSubscription.unsubcribe();
    };
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navigationSubscription = this.router.events.subscribe(function (routerEvent) {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                _this.progressBar.start();
            }
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.progressBar.complete();
                // console.log(routerEvent)
            }
        });
    };
    UserComponent.prototype.onActivate = function (event) {
        window.scroll(0, 0);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_3__["NgProgressComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_3__["NgProgressComponent"])
    ], UserComponent.prototype, "progressBar", void 0);
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/components/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/components/user/user.component.css"), __webpack_require__(/*! ./../../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/components/userauth/signin/signin.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/userauth/signin/signin.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\r\n    font-style: italic;\r\n}\r\nbutton{\r\n    width: 200px;\r\n    \r\n}\r\ninput{\r\n    text-indent: 25px;\r\n}\r\n.form-input{\r\n    position: relative;\r\n}\r\n.form-input i{\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyYXV0aC9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7O0FBRWhCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXJhdXRoL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgXHJcbn1cclxuaW5wdXR7XHJcbiAgICB0ZXh0LWluZGVudDogMjVweDtcclxufVxyXG4uZm9ybS1pbnB1dHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uZm9ybS1pbnB1dCBpe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgbGVmdDogMTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/userauth/signin/signin.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/userauth/signin/signin.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-progress></ng-progress>\r\n<div class=\"box\" style=\"padding:20px\">\r\n  <div class=\"box-header\" style=\"text-align:center;\">\r\n    <span style=\"font-size: 25px\">LOGIN</span>\r\n  </div>\r\n\r\n  <div class=\"form-login\" style=\"padding-top:20px\">\r\n    <form (submit)=\"onSubmit(formSignin);\" #formSignin=\"ngForm\">\r\n      <div class=\"form-group\">\r\n        <label for=\"username\">Username</label>\r\n        <div class=\"form-input\">\r\n          <i class=\"fas fa-user\"></i><input required ngModel #txtusername=\"ngModel\" name=\"username\"\r\n            class=\" form-control\" id=\"username\" placeholder=\"Enter Username\">\r\n        </div>\r\n        <p class=\"text-danger\" *ngIf=\"txtusername.touched && txtusername.errors?.required\">Username is requied</p>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"password\">Password</label>\r\n        <div class=\"form-input\">\r\n          <i class=\"fas fa-key\"></i><input required ngModel #txtpassword=\"ngModel\" type=\"password\" name=\"password\"\r\n            class=\"form-control\" id=\"password\" placeholder=\"Enter Password\">\r\n        </div>\r\n        <p class=\"text-danger\" *ngIf=\"txtpassword.touched && txtpassword.errors?.required\">Password is requied</p>\r\n      </div>\r\n      <div class=\"form-group form-check\">\r\n        <input ngModel name=\"checkbox\" type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\r\n        <label class=\"form-check-label\" for=\"exampleCheck1\">Remember me</label>\r\n        <a style=\" float: right;\" href=\"\">Fogot Password?</a>\r\n      </div>\r\n      <div style=\"text-align:center\">\r\n      <button [disabled]=\"formSignin.invalid\" type=\"submit\" class=\"btn btn-primary\">Login</button>\r\n    </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/userauth/signin/signin.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/userauth/signin/signin.component.ts ***!
  \****************************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_userauth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/userauth.service */ "./src/app/services/userauth.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-progressbar/core */ "./node_modules/@ngx-progressbar/core/fesm5/ngx-progressbar-core.js");







var SigninComponent = /** @class */ (function () {
    function SigninComponent(userservice, service, router, toastr) {
        this.userservice = userservice;
        this.service = service;
        this.router = router;
        this.toastr = toastr;
    }
    SigninComponent.prototype.ngOnInit = function () {
        // if (localStorage.getItem('token') != null)
        //   this.router.navigateByUrl('/Users');
    };
    SigninComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.progressBar.start();
        this.service.login(form.value).subscribe(function (res) {
            localStorage.setItem('token', res.token);
            _this.progressBar.complete();
            _this.router.navigateByUrl('/Users');
        }, function (err) {
            _this.progressBar.complete();
            _this.toastr.error('Incorrect username or password.', 'Authentication failed.');
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_6__["NgProgressComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_6__["NgProgressComponent"])
    ], SigninComponent.prototype, "progressBar", void 0);
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/components/userauth/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/components/userauth/signin/signin.component.css"), __webpack_require__(/*! ./../../../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _services_userauth_service__WEBPACK_IMPORTED_MODULE_3__["UserauthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/components/userauth/signup/signup.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/userauth/signup/signup.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-danger{\r\n    font-style: italic;\r\n}\r\nbutton{\r\n    width:200px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcmF1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtZGFuZ2Vye1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcbmJ1dHRvbntcclxuICAgIHdpZHRoOjIwMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/userauth/signup/signup.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/userauth/signup/signup.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\" style=\"padding:20px\">\r\n  <div class=\"box-header\" style=\"text-align:center\">\r\n    <span style=\"font-size: 25px\">REGISTER</span>\r\n  </div>\r\n  <div class=\"form-singup\" style=\"padding-top:20px\">\r\n\r\n    <form [formGroup]=\"formModel\" autocomplete=\"off\" (submit)=\"onSubmit()\">\r\n      <div class=\"form-group required\">\r\n        <label>Username<span style=\"color: red;\">*</span></label>\r\n        <input class=\"form-control \" formControlName=\"UserName\"\r\n          [ngClass]=\"{'is-invalid':formModel.get('UserName').touched && formModel.get('UserName').errors?.required }\">\r\n        <label class=\"text-danger\"\r\n          *ngIf=\"formModel.get('UserName').touched && formModel.get('UserName').errors?.required\">This\r\n          field is mandatory.</label>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Email</label>\r\n        <input class=\"form-control\" formControlName=\"Email\">\r\n        <label class=\"text-danger\"\r\n          *ngIf=\"formModel.get('Email').touched && formModel.get('Email').errors?.email\">Invalid\r\n          email address.</label>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Full Name<span style=\"color: red;\">*</span></label>\r\n        <input class=\"form-control\" formControlName=\"FullName\"\r\n          [ngClass]=\"{'is-invalid':formModel.get('FullName').touched && formModel.get('FullName').errors?.required }\">\r\n        <label class=\"text-danger\"\r\n          *ngIf=\"formModel.get('FullName').touched && formModel.get('FullName').errors?.required\">This\r\n          field is mandatory.</label>\r\n      </div>\r\n      <div formGroupName=\"Passwords\">\r\n        <div class=\"form-group required\">\r\n          <label>Password<span style=\"color: red;\">*</span></label>\r\n          <input type=\"password\" class=\"form-control\" formControlName=\"Password\"\r\n            [ngClass]=\"{'is-invalid':formModel.get('Passwords.Password').touched && ((formModel.get('Passwords.Password').errors?.required) || (formModel.get('Passwords.Password').errors?.minlength)) }\">\r\n          <label class=\"text-danger\"\r\n            *ngIf=\"formModel.get('Passwords.Password').touched && formModel.get('Passwords.Password').errors?.required\">This\r\n            field is mandatory.</label>\r\n          <label class=\"text-danger\"\r\n            *ngIf=\"formModel.get('Passwords.Password').touched && formModel.get('Passwords.Password').errors?.minlength\">Minimum\r\n            4 characters required.</label>\r\n        </div>\r\n        <div class=\"form-group required\">\r\n          <label>Confirm Password<span style=\"color: red;\">*</span></label>\r\n          <input type=\"password\" class=\"form-control\" formControlName=\"ConfirmPassword\"\r\n            [ngClass]=\"{'is-invalid':formModel.get('Passwords.ConfirmPassword').touched && ((formModel.get('Passwords.ConfirmPassword').errors?.required)||(formModel.get('Passwords.ConfirmPassword').errors?.passwordMismatch)) }\">\r\n          <label class=\"text-danger\"\r\n            *ngIf=\"formModel.get('Passwords.ConfirmPassword').touched && formModel.get('Passwords.ConfirmPassword').errors?.required\">This\r\n            field is mandatory.</label>\r\n          <label class=\"text-danger\"\r\n            *ngIf=\"formModel.get('Passwords.ConfirmPassword').touched && formModel.get('Passwords.ConfirmPassword').errors?.passwordMismatch\">Confirm\r\n            Password does not match.</label>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"form-group form-check\">\r\n        <input name=\"checkbox\" type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\" formControlName=\"Checkbox\">\r\n        <label class=\"form-check-label\" for=\"exampleCheck1\">I have accept the terms of our</label>\r\n      </div>\r\n      <div style=\"text-align:center\">\r\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!formModel.valid\">Register </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/userauth/signup/signup.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/userauth/signup/signup.component.ts ***!
  \****************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_userauth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/userauth.service */ "./src/app/services/userauth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var SignupComponent = /** @class */ (function () {
    function SignupComponent(fb, service, toastr, router) {
        this.fb = fb;
        this.service = service;
        this.toastr = toastr;
        this.router = router;
        this.formModel = this.fb.group({
            UserName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email],
            FullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Passwords: this.fb.group({
                Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4)]],
                ConfirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }, { validator: this.comparePasswords }),
            Checkbox: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].requiredTrue]
        });
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.formModel.reset();
    };
    SignupComponent.prototype.comparePasswords = function (fb) {
        var confirmPswrdCtrl = fb.get('ConfirmPassword');
        //passwordMismatch
        //confirmPswrdCtrl.errors={passwordMismatch:true}
        if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
            if (fb.get('Password').value != confirmPswrdCtrl.value)
                confirmPswrdCtrl.setErrors({ passwordMismatch: true });
            else
                confirmPswrdCtrl.setErrors(null);
        }
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        var body = {
            UserName: this.formModel.value.UserName,
            Email: this.formModel.value.Email,
            FullName: this.formModel.value.FullName,
            Password: this.formModel.value.Passwords.Password
        };
        this.service.register(body).subscribe(function (res) {
            if (res.succeeded) {
                _this.formModel.reset();
                _this.toastr.success('New user created!', 'Registration successful.');
                _this.router.navigate(['Userauth/SignIn']);
            }
            else {
                res.errors.forEach(function (element) {
                    switch (element.code) {
                        case 'DuplicateUserName':
                            _this.toastr.error('Username is already taken', 'Registration failed.');
                            break;
                        default:
                            _this.toastr.error(element.description, 'Registration failed.');
                            break;
                    }
                });
            }
        }, function (err) {
            console.log(err);
        });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/components/userauth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/userauth/signup/signup.component.css"), __webpack_require__(/*! ./../../../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _services_userauth_service__WEBPACK_IMPORTED_MODULE_2__["UserauthService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/components/userauth/userauth.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/userauth/userauth.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-wrapper{\r\n    /* padding:0px 10px 0px 10px;  */\r\n    min-width: 500px;\r\n    max-width: 1280px;\r\n    margin: auto;\r\n    display: flex;\r\n    align-items: center;\r\n    height: 60px;\r\n}\r\n.logo{\r\n    padding-left: 10px;\r\n    \r\n}\r\n.logo a{\r\n    display: inline-block;\r\n    color: #ED6504;\r\n}\r\n.logo i{\r\n    font-size: 50px;\r\n}\r\n.menu-bar {\r\n   min-width: 240px;\r\n    margin-left: auto;\r\n    margin-right: 110px;\r\n}\r\n.menu-bar button{\r\n    margin-left: 20px;\r\n    width: 100px;\r\n}\r\n/*---header---*/\r\n.container{\r\n/*     \r\n    background-image: url(\"https://ht-assets.couchsurfing.com/assets/homepage/have-fun-with-couchsurfing-0c56538cda235c5806dc956559fe942179937b39d686329158cd1987801ce115.jpg\");\r\n    */\r\n    background-image: url(\"/assets/imgs/15T2.jpg\") ;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    max-width: 100% !important;\r\n    min-height: 100vh;\r\n}\r\n.container-wrapper{\r\n   max-width: 1280px;\r\n   margin: auto;\r\n}\r\n.auth-box{\r\n    /* min-height: 700px; */\r\n    /* max-height: 100%; */\r\n    min-width: 450px;\r\n    max-width: 450px;\r\n}\r\n.content{\r\n    padding-top: 100px!important;\r\n    text-align: center;\r\n    color: white;\r\n    padding-bottom: 100px!important;\r\n}\r\n@media screen and (max-width: 768px) {\r\n    .content{\r\n        flex: 0 0 100%;\r\n        max-width: 100%;\r\n        order: 2;\r\n    }\r\n    .auth-box{\r\n        flex: 0 0 100%;\r\n        max-width: 100%;\r\n        order: 1;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyYXV0aC91c2VyYXV0aC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtHQUNHLGdCQUFnQjtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7O0tBRUs7SUFDRCwrQ0FBK0M7SUFDL0Msc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIsaUJBQWlCO0FBQ3JCO0FBQ0E7R0FDRyxpQkFBaUI7R0FDakIsWUFBWTtBQUNmO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLCtCQUErQjtBQUNuQztBQUVBO0lBQ0k7UUFDSSxjQUFjO1FBQ2QsZUFBZTtRQUNmLFFBQVE7SUFDWjtJQUNBO1FBQ0ksY0FBYztRQUNkLGVBQWU7UUFDZixRQUFRO0lBQ1o7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcmF1dGgvdXNlcmF1dGguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItd3JhcHBlcntcclxuICAgIC8qIHBhZGRpbmc6MHB4IDEwcHggMHB4IDEwcHg7ICAqL1xyXG4gICAgbWluLXdpZHRoOiA1MDBweDtcclxuICAgIG1heC13aWR0aDogMTI4MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuLmxvZ297XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBcclxufVxyXG4ubG9nbyBhe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6ICNFRDY1MDQ7XHJcbn1cclxuLmxvZ28gaXtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxufVxyXG4ubWVudS1iYXIge1xyXG4gICBtaW4td2lkdGg6IDI0MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDExMHB4O1xyXG59XHJcbi5tZW51LWJhciBidXR0b257XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG4vKi0tLWhlYWRlci0tLSovXHJcbi5jb250YWluZXJ7XHJcbi8qICAgICBcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaHQtYXNzZXRzLmNvdWNoc3VyZmluZy5jb20vYXNzZXRzL2hvbWVwYWdlL2hhdmUtZnVuLXdpdGgtY291Y2hzdXJmaW5nLTBjNTY1MzhjZGEyMzVjNTgwNmRjOTU2NTU5ZmU5NDIxNzk5MzdiMzlkNjg2MzI5MTU4Y2QxOTg3ODAxY2UxMTUuanBnXCIpO1xyXG4gICAgKi9cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1ncy8xNVQyLmpwZ1wiKSA7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuLmNvbnRhaW5lci13cmFwcGVye1xyXG4gICBtYXgtd2lkdGg6IDEyODBweDtcclxuICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5hdXRoLWJveHtcclxuICAgIC8qIG1pbi1oZWlnaHQ6IDcwMHB4OyAqL1xyXG4gICAgLyogbWF4LWhlaWdodDogMTAwJTsgKi9cclxuICAgIG1pbi13aWR0aDogNDUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG59XHJcbi5jb250ZW50e1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4IWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuY29udGVudHtcclxuICAgICAgICBmbGV4OiAwIDAgMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgb3JkZXI6IDI7XHJcbiAgICB9XHJcbiAgICAuYXV0aC1ib3h7XHJcbiAgICAgICAgZmxleDogMCAwIDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG9yZGVyOiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/userauth/userauth.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/userauth/userauth.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header shadow-lg bg-white \">\r\n    <nav class=\"header-wrapper\">\r\n        <div class=\"logo\">\r\n            <a routerLink='/Users/Dashboard' routerLinkActive='active'>\r\n                <i class=\"fas fa-globe-asia\"></i>\r\n\r\n            </a>\r\n\r\n        </div>\r\n        <img style=\"height:50px;padding-left: 20px\" src=\"./../../../assets/imgs/logo.png\">\r\n\r\n\r\n        <div class=\"menu-bar\">\r\n\r\n            <button class=\"btn btn-outline-primary \" [routerLink]=\"['SignIn']\" routerLinkActive='active'>Login</button>\r\n            <button class=\"btn btn-outline-primary \" [routerLink]=\"['SignUp']\" routerLinkActive='active'>Sign\r\n                Up</button>\r\n\r\n        </div>\r\n    </nav>\r\n</div>\r\n<!-- Header -->\r\n<div class=\"container\">\r\n    <div class=\"container-wrapper row\">\r\n        <div class=\"content col\">\r\n            <h2>Stay with Locals and Meet Travelers </h2>\r\n            <h4>Join to share authentic travel experiences</h4>\r\n        </div>\r\n        <div class=\"auth-box col\">\r\n            <div class=\"form-box\">\r\n                <router-outlet (activate)=\"onActivate($event)\"></router-outlet>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n<div class=\"footer shadow-lg bg-white \">\r\n    <app-footer></app-footer>\r\n</div>"

/***/ }),

/***/ "./src/app/components/userauth/userauth.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/userauth/userauth.component.ts ***!
  \***********************************************************/
/*! exports provided: UserauthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserauthComponent", function() { return UserauthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserauthComponent = /** @class */ (function () {
    function UserauthComponent() {
    }
    UserauthComponent.prototype.ngOnInit = function () {
    };
    UserauthComponent.prototype.onActivate = function (event) {
        window.scroll(0, 0);
    };
    UserauthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userauth',
            template: __webpack_require__(/*! ./userauth.component.html */ "./src/app/components/userauth/userauth.component.html"),
            styles: [__webpack_require__(/*! ./userauth.component.css */ "./src/app/components/userauth/userauth.component.css"), __webpack_require__(/*! ./../../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserauthComponent);
    return UserauthComponent;
}());



/***/ }),

/***/ "./src/app/models/publictrip.ts":
/*!**************************************!*\
  !*** ./src/app/models/publictrip.ts ***!
  \**************************************/
/*! exports provided: PublicTrip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicTrip", function() { return PublicTrip; });
var PublicTrip = /** @class */ (function () {
    function PublicTrip() {
    }
    return PublicTrip;
}());



/***/ }),

/***/ "./src/app/models/trip.ts":
/*!********************************!*\
  !*** ./src/app/models/trip.ts ***!
  \********************************/
/*! exports provided: Trip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trip", function() { return Trip; });
var Trip = /** @class */ (function () {
    function Trip() {
    }
    return Trip;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/pipes/format-data.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/format-data.pipe.ts ***!
  \*******************************************/
/*! exports provided: FormatDataPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatDataPipe", function() { return FormatDataPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormatDataPipe = /** @class */ (function () {
    function FormatDataPipe() {
    }
    FormatDataPipe.prototype.transform = function (value, start, end) {
        if (!value) {
            return '';
        }
        if (value instanceof Array) {
            //console.log(value);
            value = value.join(', ');
        }
        // else {
        //   while(value.charAt(end) !== ' ' && value.charAt(end)) {
        //     end++;
        //   }
        // }
        return value.slice(start, end) + (end > value.length ? '' : '...');
    };
    FormatDataPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'formatData'
        })
    ], FormatDataPipe);
    return FormatDataPipe;
}());



/***/ }),

/***/ "./src/app/services/user.resolve.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.resolve.ts ***!
  \******************************************/
/*! exports provided: TokenResolve, UserResolve, HomeResolve, ProfileResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenResolve", function() { return TokenResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResolve", function() { return UserResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeResolve", function() { return HomeResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileResolve", function() { return ProfileResolve; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/user.service */ "./src/app/services/user.service.ts");




var TokenResolve = /** @class */ (function () {
    function TokenResolve(service, route) {
        this.service = service;
        this.route = route;
    }
    TokenResolve.prototype.resolve = function () {
        if (localStorage.getItem('token') != null)
            this.route.navigateByUrl('/Users');
    };
    TokenResolve = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TokenResolve);
    return TokenResolve;
}());

var UserResolve = /** @class */ (function () {
    function UserResolve(service) {
        this.service = service;
    }
    UserResolve.prototype.resolve = function () {
        return this.service.getUserProfile();
    };
    UserResolve = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], UserResolve);
    return UserResolve;
}());

var HomeResolve = /** @class */ (function () {
    function HomeResolve(service) {
        this.service = service;
    }
    HomeResolve.prototype.resolve = function () {
        return this.service.getUserHome();
    };
    HomeResolve = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], HomeResolve);
    return HomeResolve;
}());

var ProfileResolve = /** @class */ (function () {
    function ProfileResolve(service, route) {
        this.service = service;
        this.route = route;
    }
    ProfileResolve.prototype.resolve = function (activatedRouteSnapshot) {
        var _this = this;
        var id = activatedRouteSnapshot.paramMap.get('id');
        this.service.setPeopleid(id);
        this.service.getUserProfile().subscribe(function (res) {
            if (res.id == id)
                _this.route.navigate(["/Users/Profile"]);
        });
        return this.service.getUser();
    };
    ProfileResolve = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileResolve);
    return ProfileResolve;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.BaseURI = 'https://travelhelperwebsite.azurewebsites.net/api';
        this.searchHost = '/Users/Search?address=';
        this.searchTraveler = '/Publictrips/Search?destination=';
        this.userPublicTrip = '/Users/Publictrips';
        this.publicTrip = '/Publictrips/';
    }
    UserService.prototype.setPeopleid = function (id) {
        this.peopleid = id;
    };
    UserService.prototype.getisUser = function () {
        return this.peopleid ? false : true;
    };
    UserService.prototype.getUser = function () {
        if (this.getisUser())
            return this.getUserProfile();
        return this.getPeopleProfile(this.peopleid);
    };
    UserService.prototype.getProfilePublictrip = function () {
        if (this.getisUser())
            return this.getUserPublicTrips();
        return this.getPeoplePublicTrips(this.peopleid);
    };
    UserService.prototype.getHome = function () {
        if (this.getisUser())
            return this.getUserHome();
        return this.getPeopleHome(this.peopleid);
    };
    UserService.prototype.getReferences = function () {
        if (this.getisUser())
            return this.getUserReferences();
        return this.getPeopleReferences(this.peopleid);
    };
    UserService.prototype.getImages = function () {
        if (this.getisUser())
            return this.getUserImages();
        return this.getPeopleImages(this.peopleid);
    };
    //  =============================
    UserService.prototype.getUserProfile = function () {
        return this.http.get(this.BaseURI + '/Users');
    };
    UserService.prototype.getPeopleProfile = function (id) {
        return this.http.get(this.BaseURI + '/Users/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ 'err': err.status, 'id': id });
        }));
    };
    //  =============================
    UserService.prototype.getUserHome = function () {
        return this.http.get(this.BaseURI + '/Users/Homes');
    };
    UserService.prototype.getPeopleHome = function (id) {
        return this.http.get(this.BaseURI + '/Users/' + id + '/Homes');
    };
    //  =============================
    UserService.prototype.getUserPublicTrips = function () {
        return this.http.get(this.BaseURI + '/Users/Publictrips');
    };
    UserService.prototype.getPeoplePublicTrips = function (id) {
        return this.http.get(this.BaseURI + '/Users/' + id + '/Publictrips');
    };
    //  =============================
    UserService.prototype.getUserReferences = function () {
        return this.http.get(this.BaseURI + '/Users/References');
    };
    UserService.prototype.getPeopleReferences = function (id) {
        return this.http.get(this.BaseURI + '/Users/' + id + '/References');
    };
    //  =============================
    UserService.prototype.getUserImages = function () {
        return this.http.get(this.BaseURI + '/Users/Images');
    };
    UserService.prototype.getPeopleImages = function (id) {
        return this.http.get(this.BaseURI + '/Users/' + id + '/Images');
    };
    //  =============================
    UserService.prototype.uploadPhotos = function (image) {
        return this.http.post(this.BaseURI + '/Images', image, { reportProgress: true, observe: "events" });
    };
    UserService.prototype.uploadAvatar = function (image) {
        return this.http.post(this.BaseURI + '/Users/Avatar', image, { reportProgress: true, observe: "events" });
    };
    UserService.prototype.deletePhoto = function (imageId) {
        return this.http.delete(this.BaseURI + '/Images/' + imageId, { reportProgress: true, observe: "response" });
    };
    //  =============================
    UserService.prototype.sendReference = function (formReference) {
        return this.http.post(this.BaseURI + '/References/' + this.peopleid, formReference);
    };
    //  =============================
    UserService.prototype.getPublicTrips = function () {
        return this.http.get(this.BaseURI + '/Publictrips');
    };
    //  =============================
    UserService.prototype.getAdressEntries = function (term) {
        if (term.length < 1)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])();
        return this.http.get(this.BaseURI + '/Address/' + term);
    };
    UserService.prototype.getAdress = function (terms) {
        var _this = this;
        return terms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(100), 
        // distinctUntilChanged(),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (term) { return _this.getAdressEntries(term); }));
    };
    //  =============================
    UserService.prototype.editProfileAbout = function (formAbout) {
        return this.http.put(this.BaseURI + '/Users', formAbout);
    };
    UserService.prototype.editProfileHome = function (formHome, homeId) {
        return this.http.put(this.BaseURI + '/homes/' + homeId, formHome);
    };
    UserService.prototype.createProfileHome = function (formHome) {
        return this.http.post(this.BaseURI + '/homes', formHome);
    };
    //  =============================
    UserService.prototype.getHostByAddress = function (address) {
        // console.log(this.API + this.Search + address);
        return this.http.get(this.BaseURI + this.searchHost + address);
    };
    UserService.prototype.getTravelerByAddress = function (address) {
        return this.http.get(this.BaseURI + this.searchTraveler + address);
    };
    UserService.prototype.getPublicTripUser = function () {
        return this.http.get(this.BaseURI + this.userPublicTrip);
    };
    UserService.prototype.getPublicTripById = function (id) {
        return this.http.get(this.BaseURI + this.publicTrip + id);
    };
    UserService.prototype.putPublicTripById = function (id, publicTrip) {
        return this.http.put(this.BaseURI + this.publicTrip + id, publicTrip);
    };
    UserService.prototype.postPublicTrip = function (publicTrip) {
        return this.http.post(this.BaseURI + this.publicTrip, publicTrip);
    };
    UserService.prototype.deletePublicTripById = function (id) {
        return this.http.delete(this.BaseURI + this.publicTrip + id);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/userauth.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/userauth.service.ts ***!
  \**********************************************/
/*! exports provided: UserauthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserauthService", function() { return UserauthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var UserauthService = /** @class */ (function () {
    function UserauthService(fb, http) {
        this.fb = fb;
        this.http = http;
        this.BaseURI = 'https://travelhelperwebsite.azurewebsites.net/api';
    }
    UserauthService.prototype.register = function (body) {
        return this.http.post(this.BaseURI + '/ApplicationUser/Register', body);
    };
    UserauthService.prototype.login = function (formData) {
        return this.http.post(this.BaseURI + '/ApplicationUser/Login', formData);
    };
    UserauthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserauthService);
    return UserauthService;
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

module.exports = __webpack_require__(/*! C:\Users\PC\Desktop\New folder\TravelHelperAngular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map