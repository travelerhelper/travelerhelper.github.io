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
/* harmony import */ var _components_notfound_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/notfound.component */ "./src/app/components/notfound.component.ts");
/* harmony import */ var _components_user_profile_about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/user/profile/about/about.component */ "./src/app/components/user/profile/about/about.component.ts");
/* harmony import */ var _components_user_profile_edit_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/user/profile/edit/edit.component */ "./src/app/components/user/profile/edit/edit.component.ts");
/* harmony import */ var _components_user_public_trip_public_trip_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/user/public-trip/public-trip.component */ "./src/app/components/user/public-trip/public-trip.component.ts");
/* harmony import */ var _components_user_profile_photos_photos_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/user/profile/photos/photos.component */ "./src/app/components/user/profile/photos/photos.component.ts");
/* harmony import */ var _components_user_profile_home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/user/profile/home/home.component */ "./src/app/components/user/profile/home/home.component.ts");
/* harmony import */ var _components_user_profile_references_references_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/user/profile/references/references.component */ "./src/app/components/user/profile/references/references.component.ts");
/* harmony import */ var _components_user_change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/user/change-pass/change-pass.component */ "./src/app/components/user/change-pass/change-pass.component.ts");
/* harmony import */ var _services_user_resolve__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/user.resolve */ "./src/app/services/user.resolve.ts");
/* harmony import */ var _components_user_profile_friends_friends_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/user/profile/friends/friends.component */ "./src/app/components/user/profile/friends/friends.component.ts");
/* harmony import */ var _components_user_activity_activity_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/user/activity/activity.component */ "./src/app/components/user/activity/activity.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_admin_dashboard_admin_dashboard_admin_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/admin/dashboard-admin/dashboard-admin.component */ "./src/app/components/admin/dashboard-admin/dashboard-admin.component.ts");

























var routes = [
    { path: '', redirectTo: 'Userauth', pathMatch: 'full' },
    {
        path: 'Userauth', component: _components_userauth_userauth_component__WEBPACK_IMPORTED_MODULE_6__["UserauthComponent"], resolve: { TokenResolve: _services_user_resolve__WEBPACK_IMPORTED_MODULE_20__["TokenResolve"] },
        children: [
            { path: '', redirectTo: 'SignIn', pathMatch: 'full' },
            { path: 'SignUp', component: _components_userauth_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"] },
            { path: 'SignIn', component: _components_userauth_signin_signin_component__WEBPACK_IMPORTED_MODULE_7__["SigninComponent"] },
            { path: '**', component: _components_notfound_component__WEBPACK_IMPORTED_MODULE_12__["NotfoundComponent"] },
        ]
    },
    {
        path: 'Users', component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        children: [
            { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
            { path: 'Dashboard', component: _components_user_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], resolve: { users: _services_user_resolve__WEBPACK_IMPORTED_MODULE_20__["UserResolve"], placesres: _services_user_resolve__WEBPACK_IMPORTED_MODULE_20__["PlacesDashboardResolve"] } },
            { path: 'Profile/Edit', component: _components_user_profile_edit_edit_component__WEBPACK_IMPORTED_MODULE_14__["EditComponent"], resolve: { users: _services_user_resolve__WEBPACK_IMPORTED_MODULE_20__["UserResolve"], homeres: _services_user_resolve__WEBPACK_IMPORTED_MODULE_20__["HomeResolve"] } },
            {
                path: 'Profile', component: _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"], resolve: { users: _services_user_resolve__WEBPACK_IMPORTED_MODULE_20__["ProfileResolve"] },
                children: [
                    { path: '', redirectTo: 'About', pathMatch: 'full' },
                    { path: 'About', component: _components_user_profile_about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"] },
                    { path: 'Myhome', component: _components_user_profile_home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"] },
                    { path: 'Photos', component: _components_user_profile_photos_photos_component__WEBPACK_IMPORTED_MODULE_16__["PhotosComponent"] },
                    { path: 'References', component: _components_user_profile_references_references_component__WEBPACK_IMPORTED_MODULE_18__["ReferencesComponent"] },
                    { path: 'Friends', component: _components_user_profile_friends_friends_component__WEBPACK_IMPORTED_MODULE_21__["FriendsComponent"] },
                ]
            },
            { path: 'People', redirectTo: "/Users/Profile/About", pathMatch: 'full' },
            { path: 'People/404', component: _components_notfound_component__WEBPACK_IMPORTED_MODULE_12__["NotfoundComponent"] },
            {
                path: 'People/:id', component: _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"], resolve: { users: _services_user_resolve__WEBPACK_IMPORTED_MODULE_20__["ProfileResolve"], isFriend: _services_user_resolve__WEBPACK_IMPORTED_MODULE_20__["IsFriendResolve"] },
                children: [
                    { path: '', redirectTo: "About", pathMatch: 'full' },
                    { path: 'About', component: _components_user_profile_about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"] },
                    { path: 'Myhome', component: _components_user_profile_home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"] },
                    { path: 'Photos', component: _components_user_profile_photos_photos_component__WEBPACK_IMPORTED_MODULE_16__["PhotosComponent"] },
                    { path: 'References', component: _components_user_profile_references_references_component__WEBPACK_IMPORTED_MODULE_18__["ReferencesComponent"] },
                ]
            },
            {
                path: 'Search',
                component: _components_user_search_host_search_host_component__WEBPACK_IMPORTED_MODULE_9__["SearchHostComponent"], resolve: { users: _services_user_resolve__WEBPACK_IMPORTED_MODULE_20__["ProfileResolve"] }
            },
            {
                path: 'PublicTrip',
                component: _components_user_public_trip_public_trip_component__WEBPACK_IMPORTED_MODULE_15__["PublicTripComponent"], resolve: { users: _services_user_resolve__WEBPACK_IMPORTED_MODULE_20__["ProfileResolve"] }
            },
            {
                path: 'PublicTrip/:id',
                component: _components_user_public_trip_public_trip_component__WEBPACK_IMPORTED_MODULE_15__["PublicTripComponent"], resolve: { users: _services_user_resolve__WEBPACK_IMPORTED_MODULE_20__["UserResolve"] }
            },
            {
                path: 'ChangePassword',
                component: _components_user_change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_19__["ChangePassComponent"], resolve: { users: _services_user_resolve__WEBPACK_IMPORTED_MODULE_20__["UserResolve"] }
            },
            {
                path: 'Message', component: _components_user_message_message_component__WEBPACK_IMPORTED_MODULE_11__["MessageComponent"],
                resolve: { user: _services_user_resolve__WEBPACK_IMPORTED_MODULE_20__["UserResolve"], DefaultUserChatResolve: _services_user_resolve__WEBPACK_IMPORTED_MODULE_20__["DefaultUserChatResolve"], listUserChats: _services_user_resolve__WEBPACK_IMPORTED_MODULE_20__["ListUserChatResolve"], currentUserChat: _services_user_resolve__WEBPACK_IMPORTED_MODULE_20__["CurrentUserChatResolve"] }
            },
            // { path: 'Message/:id', component: MessageComponent, resolve: { users: UserResolve }},
            { path: 'Activity', component: _components_user_activity_activity_component__WEBPACK_IMPORTED_MODULE_22__["ActivityComponent"], resolve: { users: _services_user_resolve__WEBPACK_IMPORTED_MODULE_20__["UserResolve"] } },
            { path: '404', component: _components_notfound_component__WEBPACK_IMPORTED_MODULE_12__["NotfoundComponent"] },
            { path: '**', component: _components_notfound_component__WEBPACK_IMPORTED_MODULE_12__["NotfoundComponent"] },
        ]
    },
    {
        path: 'Admin', component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_23__["AdminComponent"],
        children: [
            {
                path: 'Dashboard', component: _components_admin_dashboard_admin_dashboard_admin_component__WEBPACK_IMPORTED_MODULE_24__["DashboardAdminComponent"]
            }
        ]
    },
    { path: '**', component: _components_notfound_component__WEBPACK_IMPORTED_MODULE_12__["NotfoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload', useHash: true })],
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
/* harmony import */ var _components_notfound_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/notfound.component */ "./src/app/components/notfound.component.ts");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-click-outside */ "./node_modules/ng-click-outside/lib/index.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _components_user_profile_about_about_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/user/profile/about/about.component */ "./src/app/components/user/profile/about/about.component.ts");
/* harmony import */ var _components_user_people_people_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/user/people/people.component */ "./src/app/components/user/people/people.component.ts");
/* harmony import */ var _components_user_profile_edit_edit_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/user/profile/edit/edit.component */ "./src/app/components/user/profile/edit/edit.component.ts");
/* harmony import */ var _components_user_search_host_search_host_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/user/search-host/search-host.component */ "./src/app/components/user/search-host/search-host.component.ts");
/* harmony import */ var _pipes_format_data_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pipes/format-data.pipe */ "./src/app/pipes/format-data.pipe.ts");
/* harmony import */ var _components_user_public_trip_public_trip_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/user/public-trip/public-trip.component */ "./src/app/components/user/public-trip/public-trip.component.ts");
/* harmony import */ var _components_user_pubic_trip_content_pubic_trip_content_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/user/pubic-trip-content/pubic-trip-content.component */ "./src/app/components/user/pubic-trip-content/pubic-trip-content.component.ts");
/* harmony import */ var _components_user_reuse_trip_trip_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/user/reuse/trip/trip.component */ "./src/app/components/user/reuse/trip/trip.component.ts");
/* harmony import */ var _components_user_reuse_publictrip_publictrip_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/user/reuse/publictrip/publictrip.component */ "./src/app/components/user/reuse/publictrip/publictrip.component.ts");
/* harmony import */ var _components_user_reuse_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/user/reuse/dropdown/dropdown.component */ "./src/app/components/user/reuse/dropdown/dropdown.component.ts");
/* harmony import */ var _components_user_reuse_upload_upload_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/user/reuse/upload/upload.component */ "./src/app/components/user/reuse/upload/upload.component.ts");
/* harmony import */ var _components_user_profile_photos_photos_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/user/profile/photos/photos.component */ "./src/app/components/user/profile/photos/photos.component.ts");
/* harmony import */ var _components_user_profile_home_home_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/user/profile/home/home.component */ "./src/app/components/user/profile/home/home.component.ts");
/* harmony import */ var _services_user_resolve__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./services/user.resolve */ "./src/app/services/user.resolve.ts");
/* harmony import */ var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @ngx-progressbar/core */ "./node_modules/@ngx-progressbar/core/fesm5/ngx-progressbar-core.js");
/* harmony import */ var _components_user_reuse_reference_reference_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/user/reuse/reference/reference.component */ "./src/app/components/user/reuse/reference/reference.component.ts");
/* harmony import */ var _components_user_profile_references_references_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/user/profile/references/references.component */ "./src/app/components/user/profile/references/references.component.ts");
/* harmony import */ var _components_user_reuse_loading_loading_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/user/reuse/loading/loading.component */ "./src/app/components/user/reuse/loading/loading.component.ts");
/* harmony import */ var _components_user_reuse_write_reference_modal_write_reference_modal_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/user/reuse/write-reference-modal/write-reference-modal.component */ "./src/app/components/user/reuse/write-reference-modal/write-reference-modal.component.ts");
/* harmony import */ var _components_user_reuse_send_request_modal_send_request_modal_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/user/reuse/send-request-modal/send-request-modal.component */ "./src/app/components/user/reuse/send-request-modal/send-request-modal.component.ts");
/* harmony import */ var _components_user_reuse_send_message_modal_send_message_modal_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/user/reuse/send-message-modal/send-message-modal.component */ "./src/app/components/user/reuse/send-message-modal/send-message-modal.component.ts");
/* harmony import */ var _components_user_reuse_offer_to_host_offer_to_host_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/user/reuse/offer-to-host/offer-to-host.component */ "./src/app/components/user/reuse/offer-to-host/offer-to-host.component.ts");
/* harmony import */ var _components_user_reuse_carousel_modal_carousel_modal_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/user/reuse/carousel-modal/carousel-modal.component */ "./src/app/components/user/reuse/carousel-modal/carousel-modal.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_user_change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/user/change-pass/change-pass.component */ "./src/app/components/user/change-pass/change-pass.component.ts");
/* harmony import */ var _components_user_reuse_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/user/reuse/delete-modal/delete-modal.component */ "./src/app/components/user/reuse/delete-modal/delete-modal.component.ts");
/* harmony import */ var _components_user_profile_friends_friends_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/user/profile/friends/friends.component */ "./src/app/components/user/profile/friends/friends.component.ts");
/* harmony import */ var _components_user_reuse_send_report_modal_send_report_modal_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/user/reuse/send-report-modal/send-report-modal.component */ "./src/app/components/user/reuse/send-report-modal/send-report-modal.component.ts");
/* harmony import */ var _components_user_activity_activity_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/user/activity/activity.component */ "./src/app/components/user/activity/activity.component.ts");
/* harmony import */ var _components_user_reuse_item_activity_item_activity_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/user/reuse/item-activity/item-activity.component */ "./src/app/components/user/reuse/item-activity/item-activity.component.ts");
/* harmony import */ var _components_admin_dashboard_admin_dashboard_admin_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/admin/dashboard-admin/dashboard-admin.component */ "./src/app/components/admin/dashboard-admin/dashboard-admin.component.ts");
/* harmony import */ var _components_user_reuse_item_notification_item_notification_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./components/user/reuse/item-notification/item-notification.component */ "./src/app/components/user/reuse/item-notification/item-notification.component.ts");
/* harmony import */ var _components_user_message_box_chat_box_chat_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./components/user/message/box-chat/box-chat.component */ "./src/app/components/user/message/box-chat/box-chat.component.ts");
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm5/time-ago-pipe.js");
/* harmony import */ var _pipes_format_date_pipe__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./pipes/format-date.pipe */ "./src/app/pipes/format-date.pipe.ts");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");






























































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
                _components_user_search_host_search_host_component__WEBPACK_IMPORTED_MODULE_27__["SearchHostComponent"],
                _components_user_people_people_component__WEBPACK_IMPORTED_MODULE_25__["PeopleComponent"],
                _pipes_format_data_pipe__WEBPACK_IMPORTED_MODULE_28__["FormatDataPipe"],
                _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__["ProfileComponent"],
                _components_user_message_message_component__WEBPACK_IMPORTED_MODULE_21__["MessageComponent"],
                _components_notfound_component__WEBPACK_IMPORTED_MODULE_22__["NotfoundComponent"],
                _components_user_profile_about_about_component__WEBPACK_IMPORTED_MODULE_24__["AboutComponent"],
                _components_user_profile_edit_edit_component__WEBPACK_IMPORTED_MODULE_26__["EditComponent"],
                _components_user_public_trip_public_trip_component__WEBPACK_IMPORTED_MODULE_29__["PublicTripComponent"],
                _components_user_pubic_trip_content_pubic_trip_content_component__WEBPACK_IMPORTED_MODULE_30__["PubicTripContentComponent"],
                _components_user_reuse_trip_trip_component__WEBPACK_IMPORTED_MODULE_31__["TripComponent"],
                _components_user_reuse_publictrip_publictrip_component__WEBPACK_IMPORTED_MODULE_32__["PublictripComponent"],
                _components_user_reuse_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_33__["DropdownComponent"],
                _components_user_reuse_upload_upload_component__WEBPACK_IMPORTED_MODULE_34__["UploadComponent"],
                _components_user_profile_photos_photos_component__WEBPACK_IMPORTED_MODULE_35__["PhotosComponent"],
                _components_user_profile_home_home_component__WEBPACK_IMPORTED_MODULE_36__["HomeComponent"],
                _components_user_reuse_reference_reference_component__WEBPACK_IMPORTED_MODULE_39__["ReferenceComponent"],
                _components_user_profile_references_references_component__WEBPACK_IMPORTED_MODULE_40__["ReferencesComponent"],
                _components_user_reuse_loading_loading_component__WEBPACK_IMPORTED_MODULE_41__["LoadingComponent"],
                _components_user_reuse_write_reference_modal_write_reference_modal_component__WEBPACK_IMPORTED_MODULE_42__["WriteReferenceModalComponent"],
                _components_user_reuse_send_request_modal_send_request_modal_component__WEBPACK_IMPORTED_MODULE_43__["SendRequestModalComponent"],
                _components_user_reuse_send_message_modal_send_message_modal_component__WEBPACK_IMPORTED_MODULE_44__["SendMessageModalComponent"],
                _components_user_reuse_offer_to_host_offer_to_host_component__WEBPACK_IMPORTED_MODULE_45__["OfferToHostComponent"],
                _components_user_reuse_carousel_modal_carousel_modal_component__WEBPACK_IMPORTED_MODULE_46__["CarouselModalComponent"],
                _components_user_change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_48__["ChangePassComponent"],
                _components_user_reuse_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_49__["DeleteModalComponent"],
                _components_user_profile_friends_friends_component__WEBPACK_IMPORTED_MODULE_50__["FriendsComponent"],
                _components_user_reuse_send_report_modal_send_report_modal_component__WEBPACK_IMPORTED_MODULE_51__["SendReportModalComponent"],
                _components_user_activity_activity_component__WEBPACK_IMPORTED_MODULE_52__["ActivityComponent"],
                _components_user_reuse_item_activity_item_activity_component__WEBPACK_IMPORTED_MODULE_53__["ItemActivityComponent"],
                _components_admin_dashboard_admin_dashboard_admin_component__WEBPACK_IMPORTED_MODULE_54__["DashboardAdminComponent"],
                _components_user_reuse_item_notification_item_notification_component__WEBPACK_IMPORTED_MODULE_55__["ItemNotificationComponent"],
                _components_user_message_box_chat_box_chat_component__WEBPACK_IMPORTED_MODULE_56__["BoxChatComponent"],
                time_ago_pipe__WEBPACK_IMPORTED_MODULE_57__["TimeAgoPipe"],
                _pipes_format_date_pipe__WEBPACK_IMPORTED_MODULE_58__["FormatDate"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot({
                    positionClass: 'toast-custom',
                    timeOut: 3000,
                    progressBar: true
                }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                ng_click_outside__WEBPACK_IMPORTED_MODULE_23__["ClickOutsideModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModule"],
                _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_38__["NgProgressModule"].withConfig({
                    color: '#ED6504',
                    spinner: false,
                }),
                ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_59__["InfiniteScrollModule"]
            ],
            providers: [_services_userauth_service__WEBPACK_IMPORTED_MODULE_17__["UserauthService"],
                Location, { provide: _angular_common__WEBPACK_IMPORTED_MODULE_47__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_47__["HashLocationStrategy"] },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_19__["AuthInterceptor"],
                    multi: true,
                },
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModal"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbActiveModal"],
                _services_user_resolve__WEBPACK_IMPORTED_MODULE_37__["UserResolve"],
                _services_user_resolve__WEBPACK_IMPORTED_MODULE_37__["ProfileResolve"],
                _services_user_resolve__WEBPACK_IMPORTED_MODULE_37__["TokenResolve"],
                _services_user_resolve__WEBPACK_IMPORTED_MODULE_37__["HomeResolve"],
                _services_user_resolve__WEBPACK_IMPORTED_MODULE_37__["PlacesDashboardResolve"],
                _services_user_resolve__WEBPACK_IMPORTED_MODULE_37__["IsFriendResolve"],
                _services_user_resolve__WEBPACK_IMPORTED_MODULE_37__["ListUserChatResolve"],
                _services_user_resolve__WEBPACK_IMPORTED_MODULE_37__["CurrentUserChatResolve"],
                _services_user_resolve__WEBPACK_IMPORTED_MODULE_37__["DefaultUserChatResolve"],
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

module.exports = ".content{\r\n  height: 100%;\r\n  width: 100%;\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n\r\n.container {\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n  padding-top: 60px !important;\r\n  margin: 0px ;\r\n  max-width: 100% !important;\r\n}\r\n\r\n.menu{\r\n  height:100%;\r\n  padding: 0px;\r\n  color: #AAA;\r\n  position: fixed;\r\n  max-width: 25%;\r\n  width: 100%;\r\n}\r\n\r\n.menu li{\r\n  display: block;\r\n  width: 100%;\r\n  border-bottom: 1px solid rgb(102, 102, 102) !important\r\n}\r\n\r\n.menu li:last-child{\r\n  border-bottom: none !important;\r\n}\r\n\r\n.menu li:hover a{\r\n  color: white;\r\n  background: #2a2d31;\r\n}\r\n\r\n.menu a{\r\n  color: #AAA;\r\n  padding-left: 10%;\r\n}\r\n\r\n.menu i{\r\n  margin-right: 15px;\r\n}\r\n\r\n.left {\r\n  padding: 0px;\r\n}\r\n\r\n.headerContent{\r\n  background: #343a40 ;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWDtBQUNGOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgcGFkZGluZy10b3A6IDYwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW46IDBweCA7XHJcbiAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tZW51e1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBjb2xvcjogI0FBQTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbWF4LXdpZHRoOiAyNSU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tZW51IGxpe1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTAyLCAxMDIsIDEwMikgIWltcG9ydGFudFxyXG59XHJcblxyXG4ubWVudSBsaTpsYXN0LWNoaWxke1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1lbnUgbGk6aG92ZXIgYXtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogIzJhMmQzMTtcclxufVxyXG5cclxuLm1lbnUgYXtcclxuICBjb2xvcjogI0FBQTtcclxuICBwYWRkaW5nLWxlZnQ6IDEwJTtcclxufVxyXG5cclxuLm1lbnUgaXtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5sZWZ0IHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXJDb250ZW50e1xyXG4gIGJhY2tncm91bmQ6ICMzNDNhNDAgO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n  <div class=\"header shadow-sm bg-white  \">\r\n      <div class=\"row box \" style=\"  margin: 0px !important;\">\r\n        <div class=\"col-sm-3\"></div>\r\n          <div class=\"col-sm headerContent\" style=\"padding: 0px;\">\r\n\r\n            <app-header [admin]=\"true\"></app-header>\r\n\r\n          </div>\r\n        </div>\r\n  </div>\r\n  <div class=\"container\">\r\n      <div class=\"row content\">\r\n          <div class=\"col-sm-3 left\">\r\n            <nav class=\"navbar menu navbar-expand-lg navbar-dark bg-dark flex-column\">\r\n              <div style=\"padding: 20px 0px 20px 0px\">\r\n                <img class=\"photo img-responsive\"\r\n                [src]=\"'/assets/imgs/profile-picture-placeholder.png'\">\r\n\r\n              </div>\r\n\r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link active\" href=\"#\"> <span><i class=\"fas fa-chalkboard\"></i></span>  Dashboard</a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#\"> <span> <i class=\"fas fa-users\"></i></span> Users</a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#\"> <span> <i class=\"fas fa-book-open\"></i></span> Report</a>\r\n              </li>\r\n              <li class=\"nav-item \">\r\n                <a class=\"nav-link \" href=\"#\"  ><span> <i class=\"fas fa-user-slash\"></i> </span>Banned</a>\r\n              </li>\r\n\r\n            </nav>\r\n          </div>\r\n\r\n          <div class=\"col-sm-9 right\">\r\n\r\n            <div class=\"\">\r\n              <router-outlet></router-outlet>\r\n            </div>\r\n          </div>\r\n        </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n"

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

/***/ "./src/app/components/admin/dashboard-admin/dashboard-admin.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/admin/dashboard-admin/dashboard-admin.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  padding-top: 20px !important;\r\n}\r\n\r\n\r\n.wrapicon {\r\n  margin: auto;\r\n  font-size: 40px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9kYXNoYm9hcmQtYWRtaW4vZGFzaGJvYXJkLWFkbWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBNEI7QUFDOUI7OztBQUdBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluL2Rhc2hib2FyZC1hZG1pbi9kYXNoYm9hcmQtYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4ud3JhcGljb24ge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/admin/dashboard-admin/dashboard-admin.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/admin/dashboard-admin/dashboard-admin.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-sm-3 box\" style=\"font-size: 25px;  background: #007bff; color: white\">\r\n      <div class=\"d-flex align-items-center\">\r\n        <div class=\"wrapicon\">\r\n            <i class=\"fas fa-users\"></i>\r\n        </div>\r\n        <div class=\"m-auto\" style=\"padding: 20px;\">\r\n          <div >123456</div>\r\n          <div >Users</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-1\"></div>\r\n\r\n    <div class=\"col-sm-3 box\" style=\"font-size: 25px; background: #ffc107; color: white\">\r\n      <div class=\"d-flex align-items-center\">\r\n        <div class=\"wrapicon\">\r\n            <i class=\"fas fa-sticky-note\"></i>\r\n        </div>\r\n        <div class=\"m-auto\" style=\"padding: 20px;\">\r\n          <div>5555</div>\r\n          <div>Reports</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-1\"></div>\r\n\r\n    <div class=\"col-sm-3 box\" style=\"font-size: 25px; background: #dc3545; color: white\">\r\n      <div class=\"d-flex align-items-center\">\r\n        <div class=\"wrapicon\">\r\n          <i class=\"fas fa-user-slash\"></i>\r\n        </div>\r\n        <div class=\"m-auto\" style=\"padding: 20px;\">\r\n          <div>1243</div>\r\n          <div>Banned</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n  <!-- part 2 -->\r\n\r\n\r\n\r\n  <div class=\"card box\" style=\"margin-top: 20px;\">\r\n    <div class=\"card-header bg-warning\" style=\"color: white\">\r\n        <i class=\"fas fa-list\"></i> List reports\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <table class=\"table table-bordered\">\r\n        <thead>\r\n          <tr>\r\n            <th scope=\"col\">STT</th>\r\n            <th scope=\"col\">User report</th>\r\n            <th scope=\"col\">User is reported</th>\r\n            <th scope=\"col\">Content</th>\r\n            <th scope=\"col\">Action</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <th scope=\"row\">1</th>\r\n            <td>2</td>\r\n            <td>3</td>\r\n            <td>4</td>\r\n            <td>\r\n                <button class=\"btn btn-primary\">View</button>\r\n              </td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">2</th>\r\n            <td>Jacob</td>\r\n            <td>Thornton</td>\r\n            <td>@fat</td>\r\n            <td>\r\n                <button class=\"btn btn-primary\">View</button>\r\n              </td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">3</th>\r\n            <td>Larry</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n            <td>\r\n                <button class=\"btn btn-primary\">View</button>\r\n              </td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">...</th>\r\n            <td>...</td>\r\n            <td>...</td>\r\n            <td>...</td>\r\n            <td>...</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <a href=\"#\" class=\"btn btn-warning\" style=\"color: white\">See more</a>\r\n    </div>\r\n  </div>\r\n\r\n\r\n<!-- part 3 -->\r\n\r\n<div class=\"card box\" style=\"margin-top: 20px;\">\r\n  <div class=\"card-header bg-danger\" style=\"color: white\">\r\n    <i class=\"fas fa-list\"></i> List user is banned\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <table class=\"table table-bordered\">\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\">STT</th>\r\n          <th scope=\"col\">User is banned</th>\r\n          <th scope=\"col\">Action</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <th scope=\"row\">1</th>\r\n          <td>2</td>\r\n          <td>\r\n            <button class=\"btn btn-primary\">Active</button>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th scope=\"row\">2</th>\r\n          <td>Jacob</td>\r\n          <td>\r\n            <button class=\"btn btn-primary\">Active</button>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th scope=\"row\">3</th>\r\n          <td>Larry</td>\r\n          <td>\r\n            <button class=\"btn btn-primary\">Active</button>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th scope=\"row\">...</th>\r\n          <td>...</td>\r\n          <td>...</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <a href=\"#\" class=\"btn btn-danger\">See more</a>\r\n  </div>\r\n</div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/admin/dashboard-admin/dashboard-admin.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/admin/dashboard-admin/dashboard-admin.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DashboardAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardAdminComponent", function() { return DashboardAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardAdminComponent = /** @class */ (function () {
    function DashboardAdminComponent() {
    }
    DashboardAdminComponent.prototype.ngOnInit = function () {
    };
    DashboardAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-admin',
            template: __webpack_require__(/*! ./dashboard-admin.component.html */ "./src/app/components/admin/dashboard-admin/dashboard-admin.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-admin.component.css */ "./src/app/components/admin/dashboard-admin/dashboard-admin.component.css"), __webpack_require__(/*! ./../../../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardAdminComponent);
    return DashboardAdminComponent;
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

/***/ "./src/app/components/user/activity/activity.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/user/activity/activity.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content{\r\n    padding: 20px;\r\n}\r\n.box-activity{\r\n    margin-left: -10px;\r\n    margin-right: -10px;\r\n}\r\n.tab-bar{\r\n    background-color: #ecedf0;\r\n}\r\n.tab-bar .nav-link{\r\n    min-height: 50px;\r\n    font-weight: 500;\r\n}\r\n.tab-bar .active{\r\n    color: #ED6504;\r\n    font-weight: 600;\r\n    border-bottom: solid 4px;\r\n}\r\n.nav-tabs{\r\n    padding-top: 4px;\r\n}\r\na{\r\n    color: #27374c;\r\n}\r\n.tab-bar a{\r\n    text-decoration: none;\r\n    font-size: 20px;\r\n}\r\n.tab-bar a:hover{\r\n    color: #ED6504;\r\n}\r\n.tab-menu .active{\r\n    color: #ED6504;\r\n    font-weight: 600;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL2FjdGl2aXR5L2FjdGl2aXR5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyL2FjdGl2aXR5L2FjdGl2aXR5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLmJveC1hY3Rpdml0eXtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogLTEwcHg7XHJcbn1cclxuLnRhYi1iYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZGYwO1xyXG59XHJcbi50YWItYmFyIC5uYXYtbGlua3tcclxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi50YWItYmFyIC5hY3RpdmV7XHJcbiAgICBjb2xvcjogI0VENjUwNDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCA0cHg7XHJcbn1cclxuLm5hdi10YWJze1xyXG4gICAgcGFkZGluZy10b3A6IDRweDtcclxufVxyXG5he1xyXG4gICAgY29sb3I6ICMyNzM3NGM7XHJcbn1cclxuLnRhYi1iYXIgYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4udGFiLWJhciBhOmhvdmVye1xyXG4gICAgY29sb3I6ICNFRDY1MDQ7XHJcbn1cclxuLnRhYi1tZW51IC5hY3RpdmV7XHJcbiAgICBjb2xvcjogI0VENjUwNDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/user/activity/activity.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/user/activity/activity.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #loading>\r\n  <app-loading></app-loading>\r\n</ng-template>\r\n<ng-template #nothing>\r\n  <div class=\"nothing\">\r\n    <span>Nothing to show</span>\r\n  </div>\r\n</ng-template>\r\n<div class=\"box box-activity\">\r\n  <div class=\"tab-bar\">\r\n    <ul class=\"nav \">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [ngClass]=\"{'active':data.type==='notification'}\" [routerLink]=\"\"\r\n          [queryParams]=\"{type:'notification'}\">Notification</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [ngClass]=\"{'active':data.type==='travelrequest'}\" [routerLink]=\"\"\r\n          [queryParams]=\"{type:'travelrequest'}\">Travel Request</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [ngClass]=\"{'active':data.type==='hostoffer'}\" [routerLink]=\"\"\r\n          [queryParams]=\"{type:'hostoffer'}\">Host Offer</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [ngClass]=\"{'active':data.type==='friendrequest'}\" [routerLink]=\"\"\r\n          [queryParams]=\"{type:'friendrequest'}\">Friend Request</a>\r\n      </li>\r\n      <!-- <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [ngClass]=\"{'active':type==='notification'}\" [routerLink]=\"\"\r\n          [queryParams]=\"{type:'notification'}\">Notification</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [ngClass]=\"{'active':type==='request'}\" [routerLink]=\"\"\r\n          [queryParams]=\"{type:'request'}\">Your Request</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [ngClass]=\"{'active':type==='offer'}\" [routerLink]=\"\" [queryParams]=\"{type:'offer'}\">Your\r\n          Offer</a>\r\n      </li> -->\r\n    </ul>\r\n  </div>\r\n\r\n  <div *ngIf=\"data.type!='notification'\" class=\"tab-menu\">\r\n    <ul class=\"nav nav-tabs\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [ngClass]=\"{'active':data.select==='received'}\" [routerLink]=\"\"\r\n          [queryParams]=\"{type:data.type}\">Received</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [ngClass]=\"{'active':data.select==='sent'}\" [routerLink]=\"\"\r\n          [queryParams]=\"{type:data.type,select:'sent'}\">Sent</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"content\">\r\n    <ng-container *ngIf=\"isLoading==false;else loading\">\r\n      <ng-container *ngIf=\"items.length;else nothing\">\r\n        <ng-container *ngFor=\"let item of items\">\r\n          <app-item-activity *ngIf=\"data.type!='notification'\" (myClick)=\"onAction($event)\" [item]=\"item\" [data]=\"data\">\r\n          </app-item-activity>\r\n          <app-item-notification *ngIf=\"data.type=='notification'\" (myClick)=\"onAction($event)\" [item]=\"item\"\r\n            [data]=\"data\"></app-item-notification>\r\n        </ng-container>\r\n      </ng-container>\r\n\r\n    </ng-container>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user/activity/activity.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/user/activity/activity.component.ts ***!
  \****************************************************************/
/*! exports provided: ActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityComponent", function() { return ActivityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var Data = /** @class */ (function () {
    function Data() {
    }
    return Data;
}());
var ActivityComponent = /** @class */ (function () {
    function ActivityComponent(router, activatedRoute, service, toast) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.service = service;
        this.toast = toast;
        this.data = { type: 'notification' };
    }
    ActivityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (res) {
            // console.log(this.data)
            //  console.log(res)
            if (res.type) {
                if (!res.select) {
                    var temp = { type: res.type, select: 'received' };
                    _this.data = temp;
                    //console.log(123)
                }
                else {
                    _this.data = res;
                }
            }
            console.log(_this.data);
            _this.getItem(_this.data.type, _this.data.select);
        });
    };
    ActivityComponent.prototype.getItem = function (type, select) {
        var _this = this;
        this.isLoading = true;
        this.items = [];
        switch (type) {
            case 'notification': {
                this.service.getNotification().subscribe(function (res) {
                    _this.isLoading = false;
                    _this.items = res;
                    console.log(_this.items);
                });
                break;
            }
            case 'travelrequest': {
                if (select == 'received') {
                    this.service.getTraveRequest().subscribe(function (res) {
                        _this.items = res;
                        _this.isLoading = false;
                        console.log(_this.items);
                    });
                }
                else if (select == 'sent') {
                    this.service.getSentTraveRequest().subscribe(function (res) {
                        _this.items = res;
                        _this.isLoading = false;
                        console.log(_this.items);
                    });
                }
                else {
                    this.isLoading = false;
                }
                break;
            }
            case 'hostoffer': {
                if (select == 'received') {
                    this.service.getHostOffer().subscribe(function (res) {
                        _this.items = res;
                        _this.isLoading = false;
                        console.log(_this.items);
                    });
                }
                else if (select == 'sent') {
                    this.service.getSentHostOffer().subscribe(function (res) {
                        _this.items = res;
                        _this.isLoading = false;
                        console.log(_this.items);
                    });
                }
                else {
                    this.isLoading = false;
                }
                break;
            }
            case 'friendrequest': {
                if (select == 'received') {
                    this.service.getFriendRequest().subscribe(function (res) {
                        _this.items = res;
                        _this.isLoading = false;
                        console.log(_this.items);
                    });
                }
                else if (select == 'sent') {
                    this.service.getSentFriendRequest().subscribe(function (res) {
                        _this.items = res;
                        _this.isLoading = false;
                        console.log(_this.items);
                    });
                }
                else {
                    this.isLoading = false;
                }
                break;
            }
            default: {
                this.isLoading = false;
                break;
            }
        }
    };
    // getItem(type, select) {
    //   this.isLoading = true;
    //   this.items = [];
    //   if (select == 'received') {
    //     if (type == 'travelrequest') {
    //       this.service.getTraveRequest().subscribe(
    //         res => {
    //           this.items = res;
    //           this.isLoading = false;
    //           console.log(this.items)
    //         }
    //       );
    //     }
    //     else if (type == 'hostoffer') {
    //       this.service.getHostOffer().subscribe(
    //         res => {
    //           this.items = res;
    //           this.isLoading = false;
    //           console.log(this.items)
    //         }
    //       );
    //     }
    //     else if (type == 'friendrequest') {
    //       this.service.getFriendRequest().subscribe(
    //         res => {
    //           this.items = res;
    //           this.isLoading = false;
    //           console.log(this.items)
    //         }
    //       )
    //     } else {
    //       this.isLoading = false;
    //     }
    //   } else if (select == 'sent') {
    //     if (type == 'travelrequest') {
    //       this.service.getSentTraveRequest().subscribe(
    //         res => {
    //           this.items = res;
    //           this.isLoading = false;
    //           console.log(this.items)
    //         }
    //       );
    //     }
    //     else if (type == 'hostoffer') {
    //       this.service.getSentHostOffer().subscribe(
    //         res => {
    //           this.items = res;
    //           this.isLoading = false;
    //           console.log(this.items)
    //         }
    //       );
    //     }
    //     else if (type == 'friendrequest') {
    //       this.service.getSentFriendRequest().subscribe(
    //         res => {
    //           this.items = res;
    //           this.isLoading = false;
    //           console.log(this.items)
    //         }
    //       )
    //     } else {
    //       this.isLoading = false;
    //     }
    //   } else if (!select) {
    //     if (type == 'notification') {
    //       this.service.getNotification().subscribe(
    //         res => {
    //           this.isLoading = false;
    //           this.items = res;
    //           console.log(this.items)
    //         }
    //       )
    //     } else {
    //       this.isLoading = false;
    //       this.items = [];
    //     }
    //   } else {
    //     this.isLoading = false;
    //     this.items = [];
    //   }
    // }
    ActivityComponent.prototype.onAction = function (event) {
        var _this = this;
        if (event.type == 'ignore') {
            if (this.data.type == 'travelrequest') {
                this.service.ignoreRequest(event.id).subscribe(function (res) {
                    if (res.status == 204) {
                        _this.toast.success('Deleted');
                        _this.items = _this.items.filter(function (item) { return item.travelRequestId !== event.id; });
                    }
                    else {
                        _this.toast.success('Fail');
                    }
                });
            }
            else if (this.data.type == 'hostoffer') {
                this.service.ignoreHostOffer(event.id).subscribe(function (res) {
                    if (res.status == 204) {
                        _this.toast.success('Deleted');
                        _this.items = _this.items.filter(function (item) { return item.hostOfferId !== event.id; });
                    }
                    else {
                        _this.toast.success('Fail');
                    }
                });
            }
            else if (this.data.type == 'friendrequest') {
                this.service.ignoreFriendRequest(event.id).subscribe(function (res) {
                    if (res.status == 204) {
                        _this.toast.success('Deleted');
                        _this.items = _this.items.filter(function (item) { return item.friendRequestId !== event.id; });
                    }
                    else {
                        _this.toast.success('Fail');
                    }
                });
            }
        }
        else if (event.type == 'delete') {
            this.service.deleteNotification(event.id).subscribe(function (res) {
                if (res.status == 204) {
                    _this.toast.success('Deleted');
                    _this.items = _this.items.filter(function (item) { return item.id !== event.id; });
                }
                else {
                    _this.toast.success('Fail');
                }
            });
        }
        else if (event.type == 'acceptfriend') {
            // console.log(event)
            this.service.acceptFriendRequest(event.id).subscribe(function (res) {
                _this.toast.success('Accepted');
                _this.items = _this.items.filter(function (item) { return item.friendRequestId !== event.id; });
            });
        }
    };
    ActivityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-activity',
            template: __webpack_require__(/*! ./activity.component.html */ "./src/app/components/user/activity/activity.component.html"),
            styles: [__webpack_require__(/*! ./activity.component.css */ "./src/app/components/user/activity/activity.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], ActivityComponent);
    return ActivityComponent;
}());



/***/ }),

/***/ "./src/app/components/user/change-pass/change-pass.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/user/change-pass/change-pass.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n  margin-bottom: 10px;\r\n  padding-top: 20px !important;\r\n  padding-bottom: 20px !important;\r\n}\r\n\r\n\r\n\r\n.form-control:focus{\r\n  outline: none;\r\n  box-shadow: none;\r\n}\r\n\r\n\r\n\r\n.edit-form{\r\n  border: 1px solid #CCC;\r\n  border-radius: 5px;\r\n}\r\n\r\n\r\n\r\ninput {\r\n  width: 90%;\r\n  display: inline;\r\n  border: none;\r\n}\r\n\r\n\r\n\r\nspan:hover{\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL2NoYW5nZS1wYXNzL2NoYW5nZS1wYXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLCtCQUErQjtBQUNqQzs7OztBQUlBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7OztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7OztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixZQUFZO0FBQ2Q7Ozs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXIvY2hhbmdlLXBhc3MvY2hhbmdlLXBhc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBwYWRkaW5nLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLmZvcm0tY29udHJvbDpmb2N1c3tcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5lZGl0LWZvcm17XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0NDQztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICB3aWR0aDogOTAlO1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbnNwYW46aG92ZXJ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/user/change-pass/change-pass.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/user/change-pass/change-pass.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\r\n  <div class=\"row\">\r\n    <div class=\"col\"></div>\r\n\r\n    <div class=\"col frame\">\r\n      <div class=\"card box\">\r\n          <div class=\"card-header\" style=\"background-color: #007bff; color: white\">\r\n            Change Password\r\n          </div>\r\n          <div class=\"card-body\">\r\n              <form [formGroup]=\"formChangePass\" autocomplete=\"off\" novalidate=\"true\" (ngSubmit)=\"SavePassword()\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"oldPassword\">Old Password <span style=\"color: red\">*</span> </label>\r\n                    <div class=\"edit-form\">\r\n                      <input type=\"password\" class=\"form-control \" id=\"oldPassword\" formControlName=\"OldPassword\" [(ngModel)]=\"txtOldPass\" >\r\n                      <span id=\"click\" (click)=\"onClickOldPass()\">\r\n                        <i *ngIf=\"!showOldPass; else notShowOldPass\" class=\"fas fa-eye-slash\"></i>\r\n                        <ng-template #notShowOldPass>\r\n\r\n                          <i class=\"fas fa-eye\"></i>\r\n                        </ng-template>\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                      <label for=\"newPass\">New Password <span style=\"color: red\">*</span> </label>\r\n                      <div class=\"edit-form\">\r\n                        <input type=\"password\" class=\"form-control \" id=\"newPass\" formControlName=\"NewPassword\" [(ngModel)]=\"txtNewPass\" >\r\n                        <span (click)=\"onClickNewPass()\">\r\n                          <i *ngIf=\"!showNewPass;else notShowNewPass\" class=\"fas fa-eye-slash\"></i>\r\n                          <ng-template #notShowNewPass>\r\n\r\n                            <i class=\"fas fa-eye\"></i>\r\n                          </ng-template>\r\n                        </span>\r\n                      </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\" style=\"margin-bottom: 10px;\">\r\n                      <label for=\"confirmPass\">Confirm Password <span style=\"color: red\">*</span></label>\r\n                      <div class=\"edit-form\">\r\n                        <input type=\"password\" class=\"form-control \" id=\"confirmPass\" formControlName=\"ConfirmPassword\" [(ngModel)]=\"txtConfirmPass\" >\r\n                        <span (click)=\"onClickConfirmPass()\">\r\n                          <i *ngIf=\"!showConfirmPass; else notShowConfirmPass\" class=\"fas fa-eye-slash\"></i>\r\n                          <ng-template #notShowConfirmPass>\r\n\r\n                            <i class=\"fas fa-eye\"></i>\r\n                          </ng-template>\r\n                        </span>\r\n                      </div>\r\n                  </div>\r\n\r\n                  <div style=\"margin-bottom: 10px;\">\r\n\r\n                    <span class=\"text-success\" *ngIf=\"check === true\">\r\n                      {{txtMessage}}\r\n                    </span>\r\n                    <span class=\"text-danger\" *ngIf=\"check === false\">\r\n                      {{txtMessage}}\r\n                    </span>\r\n                  </div>\r\n                  <button type=\"submit\" class=\"btn btn-primary\" >Save</button>\r\n                </form>\r\n          </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col\"></div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/user/change-pass/change-pass.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/user/change-pass/change-pass.component.ts ***!
  \**********************************************************************/
/*! exports provided: ChangePassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePassComponent", function() { return ChangePassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");




var ChangePassComponent = /** @class */ (function () {
    function ChangePassComponent(formBuilderService, userService) {
        this.formBuilderService = formBuilderService;
        this.userService = userService;
        this.showOldPass = false;
        this.showNewPass = false;
        this.showConfirmPass = false;
    }
    ChangePassComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    ChangePassComponent.prototype.createForm = function () {
        this.formChangePass = this.formBuilderService.group({
            OldPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            NewPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            ConfirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    ChangePassComponent.prototype.SavePassword = function () {
        var _this = this;
        console.log(this.formChangePass.value);
        if (this.txtConfirmPass !== this.txtNewPass) {
            this.check = false;
            this.txtMessage = 'New password does not match';
        }
        else {
            var success = false;
            var password = {
                OldPassword: this.formChangePass.value.OldPassword,
                NewPassword: this.formChangePass.value.NewPassword
            };
            this.subscription = this.userService.changePassword(password).subscribe(function (data) {
                _this.formChangePass.reset();
                _this.txtMessage = 'Change password success';
                _this.check = true;
            }, function (err) {
                console.log(err);
                _this.txtMessage = 'Please provide your correct current password';
                _this.check = false;
            });
        }
        // setTimeout(() => {
        //   if(!success){
        //     console.log('fail')
        //   }
        // }, 1000);
    };
    ChangePassComponent.prototype.onClickOldPass = function () {
        this.showOldPass = !this.showOldPass;
        if (this.showOldPass) {
            document.getElementById('oldPassword').setAttribute('type', 'text');
        }
        else {
            document.getElementById('oldPassword').setAttribute('type', 'password');
        }
    };
    ChangePassComponent.prototype.onClickNewPass = function () {
        this.showNewPass = !this.showNewPass;
        if (this.showNewPass) {
            document.getElementById('newPass').setAttribute('type', 'text');
        }
        else {
            document.getElementById('newPass').setAttribute('type', 'password');
        }
    };
    ChangePassComponent.prototype.onClickConfirmPass = function () {
        this.showConfirmPass = !this.showConfirmPass;
        if (this.showConfirmPass) {
            document.getElementById('confirmPass').setAttribute('type', 'text');
        }
        else {
            document.getElementById('confirmPass').setAttribute('type', 'password');
        }
    };
    ChangePassComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    ChangePassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-pass',
            template: __webpack_require__(/*! ./change-pass.component.html */ "./src/app/components/user/change-pass/change-pass.component.html"),
            styles: [__webpack_require__(/*! ./change-pass.component.css */ "./src/app/components/user/change-pass/change-pass.component.css"), __webpack_require__(/*! ./../../../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ChangePassComponent);
    return ChangePassComponent;
}());



/***/ }),

/***/ "./src/app/components/user/dashboard/dashboard.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/user/dashboard/dashboard.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-left{\r\n    /* min-width: 220px; */\r\n    max-width: 300px; \r\n    min-width: 260px;\r\n   \r\n    padding: 0px 5px 0px 5px !important;\r\n}\r\n.content-right{\r\n    padding: 0px 5px 0px 5px !important;\r\n    min-width: 100px;\r\n}\r\n.content-right .row{\r\n    margin: 0px ;\r\n}\r\n.user-info{\r\n    padding-top: 50px;\r\n    text-align: center;\r\n}\r\n.info{\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n}\r\n.status{\r\n    border-top: 1px solid rgba(0,0,0,0.15);\r\n    padding-bottom: 30px;\r\n    padding-top: 30px;\r\n}\r\n.info p{\r\n    padding: 3px 0px 3px 0px;\r\n    margin-bottom: 0px !important;\r\n}\r\n.status-value {\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n    padding: 10px 10px 10px 10px;\r\n\r\n}\r\n.profile-content{\r\n    padding: 20px;\r\n    /* border-bottom: 1px solid rgba(0,0,0,0.15); */\r\n}\r\n.progress-bar{\r\n    text-align: left;\r\n    width: 100%;\r\n    background-color: #cdc9c9;\r\n    height: 35px;\r\n    border: 1px solid rgba(0,0,0,0.15);\r\n}\r\n.percent{\r\n    display: flex;\r\n    align-items: center;\r\n    height: 100%;\r\n    background-color: #41b866;\r\n}\r\n.progress-bar span{\r\n    padding-left: 10px;\r\n    overflow: visible;\r\n\r\n\r\n   \r\n}\r\n/* info */\r\n.proposed-box{\r\n    padding: 15px;\r\n}\r\n.proposed-box .item1{\r\n   padding: 5px;\r\n  \r\n}\r\n.proposed-box a{\r\n    text-decoration: none;\r\n    display: block;\r\n    background-size: cover;\r\n    background-position: center;\r\n    width: 100%;\r\n    height: 250px;\r\n    text-align: center;\r\n    color: white;\r\n }\r\n.proposed-box a:hover{\r\n   cursor: pointer;\r\n }\r\n.proposed-box p{\r\n     font-weight: 600;\r\n    font-size: 22px;\r\n    margin: 0px;\r\n    padding: 25px 0px 5px 0px;\r\n }\r\n.proposed-box span{\r\n    font-weight: 400;\r\n    font-size: 17px;\r\n}\r\n.search-box{\r\n    padding: 15px 0px;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.search-form{\r\n    display: inline-block;\r\n    text-align: center;\r\n    position: relative;\r\n    \r\n}\r\n.search-box form{\r\n    border: 2px solid #c5ccd5;\r\n    border-radius: 25px;\r\n    padding: 0.5px 10px 0.5px 20px;\r\n}\r\n.search-form input{\r\n    height: 38px;\r\n    width: 250px;\r\n    display: inline-block;\r\n     border: none;\r\n}\r\n.search-form input:focus {\r\n    outline: none;\r\n}\r\n.search-form input:hover{\r\n    cursor: pointer;\r\n}\r\n.search-box  button {\r\n\r\n    border-radius: 25px;\r\n    background: none;\r\n    border: none;\r\n}\r\n.search-box  button:focus{\r\n    outline: none;\r\n}\r\n/*find-host*/\r\n.notrip{\r\n    height: 150px;\r\n    border-bottom: 1px solid rgba(0,0,0,0.15);\r\n    display: flex;\r\n    background: #eceef0;\r\n    align-items: center;\r\n}\r\n.notrip span{\r\n    margin: auto;\r\n}\r\n/*plans*/\r\n/*public-trips*/\r\n@media screen and (max-width: 768px) {\r\n    .content-left{\r\n        flex: 0 0 100%;\r\n        max-width: 100%;\r\n        order: 2;\r\n    }\r\n    .content-right{\r\n        order: 1;\r\n\r\n    }\r\n    .hide{\r\n        display: none;\r\n    }\r\n    \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsZ0JBQWdCOztJQUVoQixtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLG1DQUFtQztJQUNuQyxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLHNDQUFzQztJQUN0QyxvQkFBb0I7SUFDcEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDRCQUE0Qjs7QUFFaEM7QUFDQTtJQUNJLGFBQWE7SUFDYiwrQ0FBK0M7QUFDbkQ7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjs7OztBQUlyQjtBQUNBLFNBQVM7QUFHVDtJQUNJLGFBQWE7QUFDakI7QUFDQTtHQUNHLFlBQVk7O0FBRWY7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZO0NBQ2Y7QUFDQTtHQUNFLGVBQWU7Q0FDakI7QUFDQTtLQUNJLGdCQUFnQjtJQUNqQixlQUFlO0lBQ2YsV0FBVztJQUNYLHlCQUF5QjtDQUM1QjtBQUNBO0lBQ0csZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0M7SUFDRyxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHFCQUFxQjtLQUNwQixZQUFZO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7O0lBRUksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBSUEsWUFBWTtBQUNaO0lBQ0ksYUFBYTtJQUNiLHlDQUF5QztJQUN6QyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBLFFBQVE7QUFHUixlQUFlO0FBQ2Y7SUFDSTtRQUNJLGNBQWM7UUFDZCxlQUFlO1FBQ2YsUUFBUTtJQUNaO0lBQ0E7UUFDSSxRQUFROztJQUVaO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCOztBQUVKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LWxlZnR7XHJcbiAgICAvKiBtaW4td2lkdGg6IDIyMHB4OyAqL1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDsgXHJcbiAgICBtaW4td2lkdGg6IDI2MHB4O1xyXG4gICBcclxuICAgIHBhZGRpbmc6IDBweCA1cHggMHB4IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5jb250ZW50LXJpZ2h0e1xyXG4gICAgcGFkZGluZzogMHB4IDVweCAwcHggNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG59XHJcbi5jb250ZW50LXJpZ2h0IC5yb3d7XHJcbiAgICBtYXJnaW46IDBweCA7XHJcbn1cclxuXHJcblxyXG4udXNlci1pbmZve1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmluZm97XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbi5zdGF0dXN7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjE1KTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuLmluZm8gcHtcclxuICAgIHBhZGRpbmc6IDNweCAwcHggM3B4IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5zdGF0dXMtdmFsdWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG5cclxufVxyXG4ucHJvZmlsZS1jb250ZW50e1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIC8qIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMTUpOyAqL1xyXG59XHJcbi5wcm9ncmVzcy1iYXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RjOWM5O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjE1KTtcclxufVxyXG4ucGVyY2VudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxYjg2NjtcclxufVxyXG4ucHJvZ3Jlc3MtYmFyIHNwYW57XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuXHJcblxyXG4gICBcclxufVxyXG4vKiBpbmZvICovXHJcblxyXG5cclxuLnByb3Bvc2VkLWJveHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuLnByb3Bvc2VkLWJveCAuaXRlbTF7XHJcbiAgIHBhZGRpbmc6IDVweDtcclxuICBcclxufVxyXG4ucHJvcG9zZWQtYm94IGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiB9XHJcbiAucHJvcG9zZWQtYm94IGE6aG92ZXJ7XHJcbiAgIGN1cnNvcjogcG9pbnRlcjtcclxuIH1cclxuIC5wcm9wb3NlZC1ib3ggcHtcclxuICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAyNXB4IDBweCA1cHggMHB4O1xyXG4gfVxyXG4gLnByb3Bvc2VkLWJveCBzcGFue1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuXHJcbi5zZWFyY2gtYm94e1xyXG4gICAgcGFkZGluZzogMTVweCAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIC5zZWFyY2gtZm9ybXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIFxyXG59XHJcbi5zZWFyY2gtYm94IGZvcm17XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYzVjY2Q1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIHBhZGRpbmc6IDAuNXB4IDEwcHggMC41cHggMjBweDtcclxufVxyXG4uc2VhcmNoLWZvcm0gaW5wdXR7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5zZWFyY2gtZm9ybSBpbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5zZWFyY2gtZm9ybSBpbnB1dDpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc2VhcmNoLWJveCAgYnV0dG9uIHtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4uc2VhcmNoLWJveCAgYnV0dG9uOmZvY3Vze1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuXHJcblxyXG4vKmZpbmQtaG9zdCovXHJcbi5ub3RyaXB7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xNSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZDogI2VjZWVmMDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLm5vdHJpcCBzcGFue1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi8qcGxhbnMqL1xyXG5cclxuXHJcbi8qcHVibGljLXRyaXBzKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jb250ZW50LWxlZnR7XHJcbiAgICAgICAgZmxleDogMCAwIDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG9yZGVyOiAyO1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQtcmlnaHR7XHJcbiAgICAgICAgb3JkZXI6IDE7XHJcblxyXG4gICAgfVxyXG4gICAgLmhpZGV7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/user/dashboard/dashboard.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/user/dashboard/dashboard.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"content-left col-3 \">\r\n    <div class=\"box user-info\">\r\n      <a [routerLink]=\"['../Profile']\"><img class=\"photo img-responsive\"\r\n          [src]=\"user.avatarLocation?user.avatarLocation:'./../../../../assets/imgs/profile-picture-placeholder.png'\"></a>\r\n      <div class=\"info\">\r\n        <p style=\"font-size:30px;font-weight: 600\">{{user.fullName}}</p>\r\n        <p style=\"font-size: 20px;\">{{user.address}}</p>\r\n      </div>\r\n      <div class=\"status\">\r\n        <p style=\"font-size:18px;\">Your status</p>\r\n        <div style=\"display: flex;align-items: center; justify-content: center\">\r\n          <i *ngIf=\"user.status;else not\" class=\"color-icon\"\r\n            style=\" width: 40px;height: 40px; background-image: url(https://img.icons8.com/color/96/000000/ok.png)\"></i>\r\n          <ng-template #not>\r\n            <i class=\"color-icon\"\r\n              style=\" width: 40px;height: 40px; background-image: url(https://img.icons8.com/color/96/000000/cancel.png)\"></i>\r\n          </ng-template>\r\n          <span *ngIf=\"user.id\" class=\"status-value\" [style.color]=\"user.status?'green':'red'\">\r\n            {{user.status?'Acepting Guest':'Not Acepting Guest'}}\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"box profile\">\r\n      <div class=\"box-header\">\r\n        <span>MY PROFILE</span>\r\n      </div>\r\n      <div class=\"profile-content\">\r\n        <div class=\"progress-bar\">\r\n          <div class=\"percent\" [style.width.%]=\"percent\">\r\n            <span>{{percent}}% Complete</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"box-action\">\r\n        <a routerLink=\"/Users/Profile/Edit\"><span>Complete My Profile</span><span><i\r\n              class=\"fas fa-arrow-circle-right\"></i></span> </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Content left -->\r\n  <div class=\"content-right col \">\r\n    <div class=\"box find-host\">\r\n      <div class=\"box-header\">\r\n        <i class=\"fas fa-couch\"></i> <span>FIND HOST AT WHERE YOU ARE GOING TO</span>\r\n      </div>\r\n      <div class=\"proposed-box row\">\r\n        <ng-container *ngFor=\"let place of places; let i=index\">\r\n          <div [@fadeInOut] class=\"item1 col\" [ngClass]=\"{'hide':i==2}\">\r\n            <a [routerLink]=\"'/Users/Search'\" [queryParams]=\"{type:'host',location:place.place}\"\r\n              [ngStyle]=\"{'background-image':'url('+place.imageLocation+')'}\">\r\n              <p>{{place.place}}</p>\r\n              <span>{{place.hostNumber}}+ hosts</span>\r\n            </a>\r\n          </div>\r\n        </ng-container>\r\n\r\n        <!-- <ng-container *ngIf=\"x\">\r\n          <div [@fadeInOut] class=\"item1 col\">\r\n            <a [routerLink]=\"'/Users/Search'\" [queryParams]=\"{type:'host',location:places[0].place}\"\r\n              [ngStyle]=\"{'background-image':'url('+places[0].imageLocation+')'}\">\r\n              <p>{{places[0].place}}</p>\r\n              <span>{{places[0].hostNumber}}+ hosts</span>\r\n            </a>\r\n          </div>\r\n          <div [@fadeInOut] class=\"item1 col\">\r\n            <a [routerLink]=\"'/Users/Search'\" [queryParams]=\"{type:'host',location:places[1].place}\"\r\n              [ngStyle]=\"{'background-image':'url('+places[1].imageLocation+')'}\">\r\n              <p>{{places[1].place}}</p>\r\n              <span>{{places[1].hostNumber}}+ hosts</span>\r\n            </a>\r\n          </div>\r\n          <div [@fadeInOut] class=\"item1 col hide\">\r\n            <a [routerLink]=\"'/Users/Search'\" [queryParams]=\"{type:'host',location:places[2].place}\"\r\n              [ngStyle]=\"{'background-image':'url('+places[2].imageLocation+')'}\">\r\n              <p>{{places[2].place}}</p>\r\n              <span>{{places[2].hostNumber}}+ hosts</span>\r\n            </a>\r\n          </div>\r\n        </ng-container> -->\r\n      </div>\r\n\r\n\r\n\r\n\r\n      <div style=\"text-align: center;border-top: solid 1px rgba(0,0,0,0.15);padding-top: 10px;\">\r\n        <span style=\"font-weight: 600\">Find hosts wherever I’m going</span>\r\n      </div>\r\n      <div class=\"search-box\">\r\n        <form (submit)=\"onSubmit(formSearch);\" #formSearch=\"ngForm\" autocomplete=\"off\" (clickOutside)=\"textInput = '';\">\r\n\r\n          <div class=\"search-form\">\r\n            <input ngModel [(ngModel)]=\"textInput\" (keyup)=\"onKeyup();\" name=\"input\" class=\"\" type=\"text\"\r\n              placeholder=\"Where are you going?\">\r\n\r\n            <app-dropdown [searchedSubject]=\"searchedSubject\"></app-dropdown>\r\n          </div>\r\n          <button type=\"submit\"><i style=\"color:#a0acbb;\" class=\"fas fa-search\"></i></button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Find host-->\r\n    <div class=\"box plans\">\r\n      <div class=\"box-header\">\r\n        <i class=\"fas fa-plane\"></i><span>YOUR TRIP'S PLANS</span>\r\n      </div>\r\n      <ng-template #loading>\r\n        <app-loading></app-loading>\r\n      </ng-template>\r\n      <ng-template #nothing>\r\n        <div class=\"nothing\">\r\n          <span>Nothing to show</span>\r\n        </div>\r\n      </ng-template>\r\n      <ng-container *ngIf=\"trips;else loading\">\r\n        <ng-container *ngIf=\"trips.length;else nothing\">\r\n          <ng-container *ngFor=\"let trip of trips\">\r\n\r\n            <app-trip [isUser]=\"isUser\" [trip]=\"trip\"></app-trip>\r\n\r\n          </ng-container>\r\n        </ng-container>\r\n        <!-- <div *ngIf=\"(!trips.length)\" class=\"notrip\">\r\n          <span>You have no upcoming trips.</span>\r\n        </div> -->\r\n      </ng-container>\r\n\r\n      <div class=\"box-action\">\r\n        <a routerLink=\"/Users/PublicTrip\"><span>Your Trip's Plan</span><span><i\r\n              class=\"fas fa-arrow-circle-right\"></i></span> </a>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Plan -->\r\n    <div class=\"box public-trips\">\r\n      <div class=\"box-header\">\r\n        <i class=\"fas fa-users\"></i><span>TRAVELERS LOOKING FOR HOSTS</span>\r\n      </div>\r\n      <ng-template #loading>\r\n        <app-loading></app-loading>\r\n      </ng-template>\r\n      <ng-container *ngIf=\"publicTrips;else loading\">\r\n        <ng-container *ngIf=\"publicTrips.length;else nothing\">\r\n          <ng-container *ngFor=\"let publicTrip of publicTrips\">\r\n\r\n            <app-publictrip (myClick)=\"openofferToHostModal($event)\" [publicTrip]=\"publicTrip\"></app-publictrip>\r\n\r\n          </ng-container>\r\n        </ng-container>\r\n      </ng-container>\r\n      <div class=\"box-action\">\r\n        <a [routerLink]=\"'/Users/Search'\" [queryParams]=\"{type:'traveler',location:user.address}\"><span>See More Public\r\n            Trips</span><span><i class=\"fas fa-arrow-circle-right\"></i></span> </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <app-offer-to-host></app-offer-to-host>"

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
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _reuse_offer_to_host_offer_to_host_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reuse/offer-to-host/offer-to-host.component */ "./src/app/components/user/reuse/offer-to-host/offer-to-host.component.ts");







var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(service, activatedRoute, router) {
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.places = [];
        this.placesres = [];
        this.isUser = true;
        this.textInput = "";
        this.user = {};
        this.searchedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    DashboardComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interval);
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.placesres = this.activatedRoute.snapshot.data.placesres;
        this.places = this.randomPlace(this.placesres);
        this.interval = setInterval(function () {
            // this.places =[];
            _this.places = _this.randomPlace(_this.placesres);
        }, 4000);
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
    DashboardComponent.prototype.randomPlace = function (ress) {
        var temp = [];
        var temps = ress;
        var _loop_1 = function (i) {
            var idx = Math.floor(Math.random() * temps.length);
            temp.push(temps[idx]);
            temps = temps.filter(function (items) { return temps.indexOf(items) !== idx; });
        };
        for (var i = 0; i < 3; i++) {
            _loop_1(i);
        }
        return temp;
    };
    DashboardComponent.prototype.onKeyup = function () {
        this.searchedSubject.next(this.textInput);
    };
    DashboardComponent.prototype.onSubmit = function (form) {
        console.log(form.value.input);
        this.router.navigate(['/Users/Search'], { queryParams: { type: 'host', location: form.value.input } });
    };
    DashboardComponent.prototype.openofferToHostModal = function (event) {
        this.offerToHost.open(event);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_reuse_offer_to_host_offer_to_host_component__WEBPACK_IMPORTED_MODULE_6__["OfferToHostComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _reuse_offer_to_host_offer_to_host_component__WEBPACK_IMPORTED_MODULE_6__["OfferToHostComponent"])
    ], DashboardComponent.prototype, "offerToHost", void 0);
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/user/dashboard/dashboard.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(1000)),
                ]),
            ],
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/user/dashboard/dashboard.component.css"), __webpack_require__(/*! ./../../../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
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

module.exports = ".container-footer{\r\n  width: 100%;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n  max-width: 1280px;\r\n  margin-right: auto;\r\n    margin-left: auto;\r\n}\r\n\r\n\r\n.footer1 {\r\n  display: flex;\r\n  padding: 0 34.5px;\r\n  flex-direction: row;\r\n  height: 100%;\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n}\r\n\r\n\r\n.info {\r\n  font-size: 32px;\r\n  width: 400px;\r\n}\r\n\r\n\r\n.about {\r\n  font-weight: 700;\r\n  color: #ED6504;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n\r\n.website {\r\n  flex: 1;\r\n  display: flex;\r\n  align-items: flex-end;\r\n  justify-content: center;\r\n}\r\n\r\n\r\n.member {\r\n  width: 400px;\r\n  /* display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-end; */\r\n}\r\n\r\n\r\n.list {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n\r\ni{\r\n  /* color: #34495e;\r\n  background: white; */\r\n  --border-radius: 50%;\r\n  --border: 1px solid #EEE;\r\n  font-size: 16px;\r\n  transition: 500ms all;\r\n  margin-right: 10px;\r\n}\r\n\r\n\r\ni:hover {\r\n  cursor: pointer;\r\n  -webkit-transform: scale(1.5);\r\n          transform: scale(1.5);\r\n}\r\n\r\n\r\np{\r\n  margin: 0px;\r\n  font-weight: 500;\r\n}\r\n\r\n\r\nhr {\r\n  border-top: 2px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n\r\n.col-sm {\r\n  padding-left: 20px !important;\r\n  padding-right: 20px !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7SUFDaEIsaUJBQWlCO0FBQ3JCOzs7QUFHQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOzs7QUFFQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHVCQUF1QjtBQUN6Qjs7O0FBRUE7RUFDRSxZQUFZO0VBQ1o7OzBCQUV3QjtBQUMxQjs7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7O0FBRUE7RUFDRTtzQkFDb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsNkJBQXFCO1VBQXJCLHFCQUFxQjtBQUN2Qjs7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOzs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsOEJBQThCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZm9vdGVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIG1heC13aWR0aDogMTI4MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG5cclxuLmZvb3RlcjEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMCAzNC41cHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIHdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuLmFib3V0IHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjRUQ2NTA0O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi53ZWJzaXRlIHtcclxuICBmbGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubWVtYmVyIHtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgLyogZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDsgKi9cclxufVxyXG5cclxuLmxpc3Qge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbml7XHJcbiAgLyogY29sb3I6ICMzNDQ5NWU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7ICovXHJcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLS1ib3JkZXI6IDFweCBzb2xpZCAjRUVFO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0cmFuc2l0aW9uOiA1MDBtcyBhbGw7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5pOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG59XHJcblxyXG5cclxucHtcclxuICBtYXJnaW46IDBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5ociB7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLmNvbC1zbSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/user/footer/footer.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/user/footer/footer.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n<div class=\"footer1 row\">\r\n  <div class=\"info col\">\r\n    <div class=\"about\">\r\n      About\r\n    </div>\r\n    <h6>\r\n      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, recusandae unde? Ut obcaecati dolore est.\r\n    </h6>\r\n  </div>\r\n  <div class=\"website col\">\r\n    Copyright @2019-2020 travelhelper.com\r\n  </div>\r\n  <div class=\"member col\">\r\n    <div [style.width.px]=\"200\">\r\n        <p>\r\n            FOLLOW US\r\n        </p>\r\n          <ul class=\"list\">\r\n                <li class=\"\"><i class=\"eva eva-github-outline\"></i></li>\r\n                <li class=\"\"><i class=\"eva eva-facebook\"></i></li>\r\n          </ul>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div> -->\r\n\r\n<div class=\"container-footer\" style=\"padding-top: 20px !important\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm\">\r\n\r\n      <div class=\"about\">\r\n        ABOUT\r\n      </div>\r\n      <span>\r\n        This website is about to help people around the world when they travel.\r\n      </span>\r\n\r\n    </div>\r\n    <div class=\"col-sm\">\r\n        <div class=\"about\">\r\n            JOIN TRAVEL\r\n          </div>\r\n          <span>\r\n            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, recusandae unde? Ut obcaecati dolore est.\r\n          </span>\r\n          <div>\r\n            <img src=\"../../../../assets/imgs/world-map-wheat.png\" alt=\"\" height=\"80%\" width=\"100%\">\r\n\r\n          </div>\r\n    </div>\r\n    <div class=\"col-sm\">\r\n      <ul class=\"list\">\r\n          <div class=\"about\">\r\n              CONTACT US\r\n            </div>\r\n        <li class=\"\">\r\n            <div class=\"row\">\r\n                <div class=\"col-1\"><i class=\"fas fa-home \"></i></div>\r\n                <div class=\"col\">\r\n                  <p>ADDRESS</p>\r\n                  <span>54 Nguyễn Lương Bằng, Hoà Khánh Bắc, Liên Chiểu, Đà Nẵng 550000</span></div>\r\n            </div>\r\n        </li>\r\n\r\n        <li class=\"\">\r\n          <div class=\"row\">\r\n              <div class=\"col-1\"><i class=\"fas fa-phone \"></i></div>\r\n              <div class=\"col\">\r\n                <p>PHONE</p>\r\n                <span>0902449450</span></div>\r\n          </div>\r\n        </li>\r\n\r\n        <li class=\"\">\r\n          <div class=\"row\">\r\n              <div class=\"col-1\"><i class=\"far fa-envelope \"></i></div>\r\n              <div class=\"col\">\r\n                <p>EMAIL</p>\r\n                <span>email@email.com</span></div>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <hr style=\"color: #888\">\r\n\r\n  <div class=\"container-footer\" style=\"padding-bottom: 10px; padding-top: 10px !important\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm\">\r\n            <h6>Copyright @2019-2020 travelhelper.com</h6>\r\n        </div>\r\n        <div class=\"col-sm\">\r\n\r\n        </div>\r\n        <div class=\"col-sm\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <h6>FOLLOW US </h6>\r\n\r\n              <i class=\"eva eva-github\"></i>\r\n              <i class=\"eva eva-facebook\"></i>\r\n              <i class=\"eva eva-twitter\"></i>\r\n              <i class=\"fab fa-instagram\"></i>\r\n\r\n            </div>\r\n\r\n            <div class=\"col\">\r\n                <h6>MOBILE APP </h6>\r\n\r\n                <i class=\"fab fa-android\"></i>\r\n                <i class=\"fab fa-apple\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n"

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

module.exports = ".header-wrapper{\r\n    max-width: 1280px;\r\n    margin: auto;\r\n    display: flex;\r\n    align-items: center;\r\n    height: 60px;\r\n}\r\na:hover{\r\n    cursor: pointer;\r\n}\r\n.menu-bar{\r\n    margin-left: auto;\r\n}\r\n.menu-bar ul{\r\n    -webkit-padding-start: 0px;\r\n            padding-inline-start: 0px;\r\n    margin: 0 auto;\r\n    list-style: none;\r\n}\r\n.menu-bar ul li{\r\n  display: inline-block;\r\n    text-align: center;\r\n\r\n}\r\n.menu-bar ul li a{\r\n    height: 60px;\r\n    color: wheat;\r\n    padding: 0px 13px;\r\n    display: block;\r\n\r\n}\r\n.menu-bar ul li a:hover{\r\n    color: #ED6504;\r\n    text-decoration: none;\r\n}\r\n.menu-bar ul li a i{\r\n    font-size: 25px;\r\n}\r\n.menu-bar ul li .active{\r\n    color: #ED6504;\r\n    border-bottom: solid 4px #ED6504;\r\n}\r\n.menu-bar .icon{\r\n    padding-top: 8px;\r\n\r\n    height: 30px;\r\n}\r\n.menu-bar span{\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n}\r\n.menu-bar .name{\r\n    padding-top: 6px;\r\n    line-height: 1;\r\n\r\n}\r\n.logo{\r\n    padding-left: 10px;\r\n}\r\n.logo a{\r\n    display: inline-block;\r\n    color: #ED6504;\r\n}\r\n.logo i{\r\n    font-size: 50px;\r\n}\r\n.search-box{\r\n    padding-left: 30px;\r\n}\r\n.search-box .row,.col{\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n.search-box .search-form-1{\r\n    \r\n    text-align: center;\r\n    position: relative;\r\n   \r\n}\r\n.search-box .search-form .search-select{\r\n    display: inline-block !important;\r\n    width: 120px;\r\n    height: 40px;\r\n    border-radius: 0.25rem 0rem 0rem 0.25rem;\r\n    border-right: none;\r\n    border-color: #b7b4b4;\r\n    padding-left: 5px;\r\n    font-weight: 500;\r\n}\r\n.search-select option{\r\n font-weight: 500;\r\n}\r\n.search-box select:hover{\r\n    cursor: pointer;\r\n}\r\n.search-box .search-form-1 input{\r\n    height: 40px;\r\n    width: 300px;\r\n    display: inline-block;\r\n    border-radius:0rem 0.25rem 0.25rem 0rem;\r\n    border-color: #b7b4b4;\r\n    text-indent: 25px;\r\n}\r\n/* .search-box .search-form-1 input:hover{\r\n    cursor: pointer;\r\n} */\r\n.search-box .search-form-1 input:focus{\r\n    cursor: text;\r\n}\r\n.search-box .search-form input:focus {\r\n    outline: none;\r\n}\r\n.search-box .search-form-1  button {\r\n    width: 40px;\r\n    height: 40px;\r\n    position: absolute;\r\n    border-radius: 25px;\r\n    background: none;\r\n    border: none;\r\n    background: none;\r\n}\r\n.search-box .search-form  button:focus{\r\n    outline: none;\r\n}\r\n.search-box .search-form  i{\r\n    color: #ED6504;\r\n    font-size: 1.2em;\r\n}\r\n.button-responsive{\r\n    display: none;\r\n    align-items: center;\r\n    height: 60px;\r\n}\r\n.button-responsive button {\r\n    padding: 0px;\r\n    height: 40px;\r\n    /* width: 40px; */\r\n    background: none;\r\n    border: none;\r\n}\r\n.button-responsive i{\r\n    /* -webkit-text-stroke: 1px white; */\r\n    font-size: 35px;\r\n    color: wheat;\r\n}\r\n.button-responsive  button:focus{\r\n    outline: none;\r\n}\r\n.button-responsive  button:hover i{\r\n    color: #ED6504;\r\n    \r\n}\r\n.dropdown button:hover{\r\n    color: #ED6504;;\r\n}\r\n.dropdown-menu{\r\n    top: -10px!important;\r\n}\r\n.dropdown-item{\r\n    padding: 0.25rem 0.5rem !important;\r\n}\r\n@media screen and (max-width: 890px) {\r\n    .header-wrapper{\r\n        flex-wrap: wrap;\r\n    }\r\n    .button-responsive{\r\n        margin-left: auto;\r\n        display: flex !important;\r\n    }\r\n    .search-box{\r\n        display: none;\r\n        clear: both;\r\n        padding: 0px;\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n    .search-box form{\r\n        width: 100%;\r\n\r\n    }\r\n\r\n    .search-box .search-form{\r\n        width: 100%;\r\n\r\n\r\n    }\r\n    .search-box .row,.col{\r\n        padding: 0px;\r\n        margin: 0px;\r\n    }\r\n\r\n    .search-box .search-form .search-select{\r\n        max-width: 110px;\r\n     \r\n    }\r\n    .search-box .search-form-1{\r\n       max-width: 100%;\r\n    }\r\n    .search-box .search-form-1 input{\r\n        width: 100%;\r\n     \r\n    }\r\n    .menu-bar{\r\n        display: none ;\r\n        width: 100%;\r\n    }\r\n    .menu-bar ul{\r\n        width: 100%;\r\n        padding: 0px !important;\r\n    }\r\n    .menu-bar ul li{\r\n      display: block;\r\n      background-color: #27374c;\r\n       border-bottom: solid 1px #f2f2f2;\r\n   }\r\n   .menu-bar ul li:first-child{\r\n    border-top: solid 1px #f2f2f2;\r\n    }\r\n    .menu-bar ul li a div{\r\n       float: left;\r\n       border: none;\r\n   }\r\n   .menu-bar ul li a {\r\n    border: none !important;\r\n    height: 40px;\r\n    align-items: center;\r\n    display: flex;\r\n    }\r\n    .menu-bar .icon{\r\n        width: 40px;\r\n        height: auto;\r\n        text-align: left;\r\n        padding-top: 0px;\r\n    }\r\n    .menu-bar .name{\r\n        padding: 0px;\r\n        padding-left: 10px;\r\n    }\r\n    .menu-bar .name span{\r\n\r\n        font-size: 1em;\r\n    }\r\n    .dropdown-menu{\r\n        -webkit-transform: translate3d(10px, 30px, 0px)!important;\r\n                transform: translate3d(10px, 30px, 0px)!important;\r\n    }\r\n}\r\n/*---Header---*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLDBCQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjtBQUNBO0VBQ0UscUJBQXFCO0lBQ25CLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGNBQWM7O0FBRWxCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxnQkFBZ0I7O0lBRWhCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjOztBQUVsQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osWUFBWTtJQUNaLHdDQUF3QztJQUN4QyxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsdUNBQXVDO0lBQ3ZDLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7QUFDQTs7R0FFRztBQUNIO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGNBQWM7O0FBRWxCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGtDQUFrQztBQUN0QztBQUNBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSxhQUFhO1FBQ2IsV0FBVztRQUNYLFlBQVk7UUFDWixXQUFXO1FBQ1gsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksV0FBVzs7SUFFZjs7SUFFQTtRQUNJLFdBQVc7OztJQUdmO0lBQ0E7UUFDSSxZQUFZO1FBQ1osV0FBVztJQUNmOztJQUVBO1FBQ0ksZ0JBQWdCOztJQUVwQjtJQUNBO09BQ0csZUFBZTtJQUNsQjtJQUNBO1FBQ0ksV0FBVzs7SUFFZjtJQUNBO1FBQ0ksY0FBYztRQUNkLFdBQVc7SUFDZjtJQUNBO1FBQ0ksV0FBVztRQUNYLHVCQUF1QjtJQUMzQjtJQUNBO01BQ0UsY0FBYztNQUNkLHlCQUF5QjtPQUN4QixnQ0FBZ0M7R0FDcEM7R0FDQTtJQUNDLDZCQUE2QjtJQUM3QjtJQUNBO09BQ0csV0FBVztPQUNYLFlBQVk7R0FDaEI7R0FDQTtJQUNDLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYjtJQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO0lBQ3RCO0lBQ0E7O1FBRUksY0FBYztJQUNsQjtJQUNBO1FBQ0kseURBQWlEO2dCQUFqRCxpREFBaUQ7SUFDckQ7QUFDSjtBQUNBLGVBQWUiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXIvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci13cmFwcGVye1xyXG4gICAgbWF4LXdpZHRoOiAxMjgwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNjBweDtcclxufVxyXG5hOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5tZW51LWJhcntcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcbi5tZW51LWJhciB1bHtcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuLm1lbnUtYmFyIHVsIGxpe1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuLm1lbnUtYmFyIHVsIGxpIGF7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBjb2xvcjogd2hlYXQ7XHJcbiAgICBwYWRkaW5nOiAwcHggMTNweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxufVxyXG4ubWVudS1iYXIgdWwgbGkgYTpob3ZlcntcclxuICAgIGNvbG9yOiAjRUQ2NTA0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5tZW51LWJhciB1bCBsaSBhIGl7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuLm1lbnUtYmFyIHVsIGxpIC5hY3RpdmV7XHJcbiAgICBjb2xvcjogI0VENjUwNDtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDRweCAjRUQ2NTA0O1xyXG59XHJcbi5tZW51LWJhciAuaWNvbntcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcblxyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcbi5tZW51LWJhciBzcGFue1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4ubWVudS1iYXIgLm5hbWV7XHJcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcblxyXG59XHJcbi5sb2dve1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcbi5sb2dvIGF7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogI0VENjUwNDtcclxufVxyXG4ubG9nbyBpe1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG59XHJcbi5zZWFyY2gtYm94e1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG59XHJcbi5zZWFyY2gtYm94IC5yb3csLmNvbHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcbi5zZWFyY2gtYm94IC5zZWFyY2gtZm9ybS0xe1xyXG4gICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIFxyXG59XHJcbi5zZWFyY2gtYm94IC5zZWFyY2gtZm9ybSAuc2VhcmNoLXNlbGVjdHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbSAwcmVtIDByZW0gMC4yNXJlbTtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgIGJvcmRlci1jb2xvcjogI2I3YjRiNDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uc2VhcmNoLXNlbGVjdCBvcHRpb257XHJcbiBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5zZWFyY2gtYm94IHNlbGVjdDpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc2VhcmNoLWJveCAuc2VhcmNoLWZvcm0tMSBpbnB1dHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6MHJlbSAwLjI1cmVtIDAuMjVyZW0gMHJlbTtcclxuICAgIGJvcmRlci1jb2xvcjogI2I3YjRiNDtcclxuICAgIHRleHQtaW5kZW50OiAyNXB4O1xyXG59XHJcbi8qIC5zZWFyY2gtYm94IC5zZWFyY2gtZm9ybS0xIGlucHV0OmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59ICovXHJcbi5zZWFyY2gtYm94IC5zZWFyY2gtZm9ybS0xIGlucHV0OmZvY3Vze1xyXG4gICAgY3Vyc29yOiB0ZXh0O1xyXG59XHJcbi5zZWFyY2gtYm94IC5zZWFyY2gtZm9ybSBpbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5zZWFyY2gtYm94IC5zZWFyY2gtZm9ybS0xICBidXR0b24ge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuLnNlYXJjaC1ib3ggLnNlYXJjaC1mb3JtICBidXR0b246Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5zZWFyY2gtYm94IC5zZWFyY2gtZm9ybSAgaXtcclxuICAgIGNvbG9yOiAjRUQ2NTA0O1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG5cclxuLmJ1dHRvbi1yZXNwb25zaXZle1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuLmJ1dHRvbi1yZXNwb25zaXZlIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAvKiB3aWR0aDogNDBweDsgKi9cclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmJ1dHRvbi1yZXNwb25zaXZlIGl7XHJcbiAgICAvKiAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggd2hpdGU7ICovXHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBjb2xvcjogd2hlYXQ7XHJcbn1cclxuLmJ1dHRvbi1yZXNwb25zaXZlICBidXR0b246Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5idXR0b24tcmVzcG9uc2l2ZSAgYnV0dG9uOmhvdmVyIGl7XHJcbiAgICBjb2xvcjogI0VENjUwNDtcclxuICAgIFxyXG59XHJcbi5kcm9wZG93biBidXR0b246aG92ZXJ7XHJcbiAgICBjb2xvcjogI0VENjUwNDs7XHJcbn1cclxuLmRyb3Bkb3duLW1lbnV7XHJcbiAgICB0b3A6IC0xMHB4IWltcG9ydGFudDtcclxufVxyXG4uZHJvcGRvd24taXRlbXtcclxuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODkwcHgpIHtcclxuICAgIC5oZWFkZXItd3JhcHBlcntcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uLXJlc3BvbnNpdmV7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnNlYXJjaC1ib3h7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnNlYXJjaC1ib3ggZm9ybXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1ib3ggLnNlYXJjaC1mb3Jte1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuXHJcbiAgICB9XHJcbiAgICAuc2VhcmNoLWJveCAucm93LC5jb2x7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2gtYm94IC5zZWFyY2gtZm9ybSAuc2VhcmNoLXNlbGVjdHtcclxuICAgICAgICBtYXgtd2lkdGg6IDExMHB4O1xyXG4gICAgIFxyXG4gICAgfVxyXG4gICAgLnNlYXJjaC1ib3ggLnNlYXJjaC1mb3JtLTF7XHJcbiAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoLWJveCAuc2VhcmNoLWZvcm0tMSBpbnB1dHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICBcclxuICAgIH1cclxuICAgIC5tZW51LWJhcntcclxuICAgICAgICBkaXNwbGF5OiBub25lIDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5tZW51LWJhciB1bHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5tZW51LWJhciB1bCBsaXtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzM3NGM7XHJcbiAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2YyZjJmMjtcclxuICAgfVxyXG4gICAubWVudS1iYXIgdWwgbGk6Zmlyc3QtY2hpbGR7XHJcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2YyZjJmMjtcclxuICAgIH1cclxuICAgIC5tZW51LWJhciB1bCBsaSBhIGRpdntcclxuICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgYm9yZGVyOiBub25lO1xyXG4gICB9XHJcbiAgIC5tZW51LWJhciB1bCBsaSBhIHtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgICAubWVudS1iYXIgLmljb257XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIH1cclxuICAgIC5tZW51LWJhciAubmFtZXtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLm1lbnUtYmFyIC5uYW1lIHNwYW57XHJcblxyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgfVxyXG4gICAgLmRyb3Bkb3duLW1lbnV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMHB4LCAzMHB4LCAwcHgpIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4vKi0tLUhlYWRlci0tLSovXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/user/header/header.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/user/header/header.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"header-wrapper\" (clickOutside)=\"isMenu = false;isSearch = false;\">\r\n    <div class=\"logo\">\r\n        <a href='' routerLinkActive='active' [ngStyle]=\"logo_admin\">\r\n            <i class=\"fas fa-globe-asia\"></i>\r\n        </a>\r\n    </div>\r\n\r\n    <div class=\"button-responsive\" style=\"padding-right:10px;\">\r\n        <div class=\"search-responsive\" style=\"padding-right: 6px\">\r\n            <button (click)=\"isSearch = !isSearch;isMenu = false;\">\r\n                <i [ngStyle]=\"isSearch && !isMenu && {'color':'#ED6504'}\" class=\"fas fa-search \"></i></button>\r\n        </div>\r\n        <div class=\"menu-responsive\">\r\n            <button (click)=\"isMenu = !isMenu;isSearch = false;\">\r\n                <i [ngStyle]=\"isMenu && !isSearch && {'color':'#ED6504'}\" class=\"fas fa-bars\"></i></button>\r\n        </div>\r\n    </div>\r\n    <div [ngStyle]=\"isSearch && !isMenu && {'display':'flex'}\" class=\"search-box\">\r\n        <form #formSearch=\"ngForm\" autocomplete=\"off\" (submit)=\"onSubmit(formSearch);\">\r\n            <div class=\"search-form row\">\r\n                <select [(ngModel)]=\"textSelect\" (change)=\"onChange()\" class=\" search-select form-control shadow-sm col\"\r\n                    name=\"select\">\r\n                    <option value=\"host\" selected>Find Host</option>\r\n                    <option value=\"traveler\">Find Traveler</option>\r\n                    <option value=\"people\">Find People</option>\r\n                </select>\r\n                <div class=\"search-form-1 col\" (clickOutside)=\"textInput = '';\">\r\n                    <button class=\"\" type=\"submit\"><i class=\"fas fa-search\"></i></button>\r\n                    <input [(ngModel)]=\"textInput\" (keyup)=\"onKeyup(formSearch);\" class=\"form-control shadow-sm\"\r\n                        type=\"text\" name=\"input\" [placeholder]=\"placeholder\">\r\n                    <app-dropdown [formSearch]=\"formSearch\" (myClick)=\"resetvalue();\"\r\n                        [searchedSubject]=\"searchedSubject\"></app-dropdown>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <nav [ngStyle]=\"isMenu && !isSearch && {'display':'block'}\" class=\"menu-bar\">\r\n        <ul>\r\n            <li>\r\n                <a (click)=\"this.isMenu = false;\" [routerLink]=\"['Dashboard']\" routerLinkActive='active'>\r\n                    <div class=\"icon\">\r\n                        <i class=\"fas fa-home\"></i>\r\n                    </div>\r\n                    <div class=\"name\">\r\n                        <span>\r\n                            Dashboard\r\n                        </span>\r\n                    </div>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a (click)=\"this.isMenu = false;\" [routerLink]=\"['Profile']\" routerLinkActive='active'>\r\n                    <div class=\"icon\">\r\n                        <i class=\"fas fa-user-circle\"></i>\r\n                    </div>\r\n                    <div class=\"name\">\r\n                        <span>\r\n                            Profile\r\n                        </span>\r\n\r\n                    </div>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a (click)=\"this.isMenu = false;\" [routerLink]=\"['Message']\" [queryParams]=\"{id:idMessage}\"\r\n                    [ngClass]=\"{'active':isActive()}\">\r\n                    <div class=\"icon\">\r\n                        <i class=\"fas fa-comments\"></i>\r\n                    </div>\r\n                    <div class=\"name\">\r\n                        <span>\r\n                            Message\r\n                        </span>\r\n\r\n                    </div>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a (click)=\"this.isMenu = false;\" [routerLink]=\"['Activity']\" routerLinkActive='active'>\r\n                    <div class=\"icon\">\r\n                        <!-- <i class=\"fas fa-envelope\"></i> -->\r\n                        <!-- <i class=\"fas fa-bell\"></i> -->\r\n                        <!-- <i class=\"fas fa-users\"></i> -->\r\n                        <i class=\"far fa-calendar-alt\"></i>\r\n                    </div>\r\n                    <div class=\"name\">\r\n                        <span>\r\n                            Activity\r\n                        </span>\r\n\r\n                    </div>\r\n                </a>\r\n            </li>\r\n\r\n            <li>\r\n                <div class=\"dropdown\" (clickOutside)=\"isdrop=false;\">\r\n                    <a class=\"\" id=\"dropdownMenu2\" data-toggle=\"dropdown\" (click)=\"isdrop=!isdrop\" aria-haspopup=\"true\"\r\n                        aria-expanded=\"false\">\r\n\r\n                        <div class=\"icon\" style=\"display: flex\">\r\n                            <div class=\"dropdown-toggle\">\r\n                                <i class=\"fas fa-cog\"></i>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\"name\">\r\n                            <span>\r\n                                Setting\r\n                            </span>\r\n\r\n                        </div>\r\n                    </a>\r\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenu2\"\r\n                        [style.display]=\"isdrop?'block':'none'\">\r\n\r\n\r\n\r\n                        <button class=\"dropdown-item\" type=\"button\" (click)=\"onChangePassword()\"><i\r\n                                class=\"fas fa-user-cog\"></i> Change\r\n                            Password</button>\r\n                        <button (click)=\"onLogout();\" class=\"dropdown-item\" type=\"button\"><i\r\n                                class=\"fas fa-sign-out-alt\"></i> Log Out</button>\r\n\r\n                    </div>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </nav>\r\n\r\n\r\n\r\n\r\n</nav>"

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
        this.placeholder = "Search for Place";
        this.logo_admin = {};
        this.admin_display = 'unset';
        this.idMessage = null;
        this.searchedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    HeaderComponent.prototype.isActive = function () {
        return (this.router.url.includes("/Users/Message"));
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            console.log(_this.isActive());
            var id = params['id'];
            if (id) {
                _this.idMessage = id;
            }
            else {
                _this.idMessage = null;
            }
        });
        if (this.admin) {
            this.logo_admin = {
                color: 'white'
            };
            this.admin_display = 'none';
        }
    };
    HeaderComponent.prototype.onLogout = function () {
        localStorage.removeItem('token');
        this.router.navigate(['/Userauth']);
    };
    HeaderComponent.prototype.onChange = function () {
        this.placeholder = this.textSelect == 'people' ? "Search for Name" : "Search for Place";
    };
    HeaderComponent.prototype.onKeyup = function (formSearch) {
        if (formSearch.value.select !== 'people')
            this.searchedSubject.next(this.textInput);
    };
    HeaderComponent.prototype.onSubmit = function (form) {
        this.isSearch = false;
        this.textInput = '';
        this.router.navigate(['/Users/Search'], { queryParams: { type: form.value.select, location: form.value.input } });
    };
    HeaderComponent.prototype.resetvalue = function () {
        this.textInput = '';
        this.textSelect = 'host';
    };
    HeaderComponent.prototype.onChangePassword = function () {
        this.router.navigate(['/Users/ChangePassword']);
        this.isdrop = false;
        this.isMenu = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "admin", void 0);
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

/***/ "./src/app/components/user/message/box-chat/box-chat.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/user/message/box-chat/box-chat.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box-chat{\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow-y: auto;\r\n    margin-bottom: auto;\r\n}\r\n.box-chat::-webkit-scrollbar\r\n{\r\n    width: 8px;\r\n    border-radius: 8px;\r\n\tbackground-color: #F5F5F5;\r\n}\r\n.box-chat::-webkit-scrollbar-thumb\r\n{\r\n\tborder-radius: 8px;\r\n\tbackground-color: #777;\r\n}\r\n.header-section{\r\n    border-bottom: solid 1px rgba(0, 0, 0, .10);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    min-height: 50px;\r\n}\r\n.header-section a{\r\n     color: #27374c!important;\r\n}\r\n.header-section a:hover{\r\n    color: #ED6504!important;\r\n}\r\n.header-title{\r\n    font-weight: 600;\r\n    font-size: 1.5em;\r\n}\r\n.message-item {\r\n    padding: 2px 25px;\r\n    max-width: 70%;\r\n    display: flex;\r\n    position: relative;\r\n}\r\n.user{\r\n    margin-left: auto;\r\n    \r\n}\r\n.user span{\r\n    color: white;\r\n    background-color: #0084ff !important;\r\n}\r\n.message-item span{\r\n    font-size: 14px;\r\n    line-height: 1.3;\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n    background-color: #f2f2f2;\r\n    display: inline-block;\r\n    white-space: pre-wrap;\r\n    /* word-break: break-word; */\r\n}\r\n.chatControl{\r\n    border-top: solid 1px rgba(0, 0, 0, .10); \r\n    padding: 10px 0px;\r\n    margin-top: 10px;\r\n}\r\n.chatControl form{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.chatControl form button{\r\n  margin-top: auto;\r\n  /* height: 50px;\r\n  width: 50px; */\r\n  border: none;\r\n  background: none;\r\n  outline: none;\r\n  color: #007bff;\r\n}\r\n.chatControl form button:disabled{\r\n    opacity: .65;\r\n  }\r\nbutton i{\r\n    font-size: 20px;\r\n}\r\ntextarea{\r\n    font-size: 14px;\r\n    padding-left: 15px;\r\n    width:100%;\r\n    height: 30px;\r\n    max-height: 92px;\r\n    overflow: hidden;\r\n    resize: none;\r\n    outline: none;\r\n    border: none;\r\n    margin-top: auto;\r\n}\r\n.sent{\r\n    position: absolute; \r\n    top: 0;right: 5px; \r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100%;\r\n}\r\n.tick{\r\n    padding-top: 1px;\r\n    margin-top: auto;\r\n    margin-bottom: 5px;\r\n    color: white;\r\n    background-color: #007bff;\r\n    border-radius: 50%;\r\n    font-size: 8px;\r\n    width: 15px;\r\n    height: 15px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.sent img{\r\n    margin-top: auto;\r\n    margin-bottom: 5px;\r\n    height:15px;\r\n    width: 15px;\r\n}\r\n.loading{\r\n    position: absolute;\r\n    height: 60px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n.loading img{\r\n    height: 50px;\r\n    width: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL21lc3NhZ2UvYm94LWNoYXQvYm94LWNoYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBOztJQUVJLFVBQVU7SUFDVixrQkFBa0I7Q0FDckIseUJBQXlCO0FBQzFCO0FBRUE7O0NBRUMsa0JBQWtCO0NBQ2xCLHNCQUFzQjtBQUN2QjtBQUNBO0lBQ0ksMkNBQTJDO0lBQzNDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjtBQUNBO0tBQ0ssd0JBQXdCO0FBQzdCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCOztBQUVyQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksd0NBQXdDO0lBQ3hDLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQjtnQkFDYztFQUNkLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGNBQWM7QUFDaEI7QUFDQTtJQUNJLFlBQVk7RUFDZDtBQUNGO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTSxDQUFDLFVBQVU7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsUUFBUTtBQUNaO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyL21lc3NhZ2UvYm94LWNoYXQvYm94LWNoYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gtY2hhdHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbn1cclxuLmJveC1jaGF0Ojotd2Via2l0LXNjcm9sbGJhclxyXG57XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbn1cclxuXHJcbi5ib3gtY2hhdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJcclxue1xyXG5cdGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3O1xyXG59XHJcbi5oZWFkZXItc2VjdGlvbntcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIC4xMCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWluLWhlaWdodDogNTBweDtcclxufVxyXG4uaGVhZGVyLXNlY3Rpb24gYXtcclxuICAgICBjb2xvcjogIzI3Mzc0YyFpbXBvcnRhbnQ7XHJcbn1cclxuLmhlYWRlci1zZWN0aW9uIGE6aG92ZXJ7XHJcbiAgICBjb2xvcjogI0VENjUwNCFpbXBvcnRhbnQ7XHJcbn1cclxuLmhlYWRlci10aXRsZXtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcbi5tZXNzYWdlLWl0ZW0ge1xyXG4gICAgcGFkZGluZzogMnB4IDI1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDcwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnVzZXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIFxyXG59XHJcbi51c2VyIHNwYW57XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4NGZmICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1lc3NhZ2UtaXRlbSBzcGFue1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgIC8qIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7ICovXHJcbn1cclxuLmNoYXRDb250cm9se1xyXG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgLjEwKTsgXHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLmNoYXRDb250cm9sIGZvcm17XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmNoYXRDb250cm9sIGZvcm0gYnV0dG9ue1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgLyogaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiA1MHB4OyAqL1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY29sb3I6ICMwMDdiZmY7XHJcbn1cclxuLmNoYXRDb250cm9sIGZvcm0gYnV0dG9uOmRpc2FibGVke1xyXG4gICAgb3BhY2l0eTogLjY1O1xyXG4gIH1cclxuYnV0dG9uIGl7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxudGV4dGFyZWF7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWF4LWhlaWdodDogOTJweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxufVxyXG4uc2VudHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICB0b3A6IDA7cmlnaHQ6IDVweDsgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi50aWNre1xyXG4gICAgcGFkZGluZy10b3A6IDFweDtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnNlbnQgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGhlaWdodDoxNXB4O1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbn1cclxuLmxvYWRpbmd7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcbi5sb2FkaW5nIGltZ3tcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/user/message/box-chat/box-chat.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/user/message/box-chat/box-chat.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-section\">\r\n  <a routerLink=\"/Users/People/{{peopleId}}\"><span class=\"header-title\">{{people}}</span></a>\r\n</div>\r\n\r\n<ng-template #loading>\r\n  <app-loading></app-loading>\r\n</ng-template>\r\n\r\n\r\n<ng-container *ngIf=\"!isLoading;else loading\">\r\n\r\n  <div #boxchat id=\"box-chat\" class=\"box-chat\" infiniteScroll [scrollWindow]=\"false\" [infiniteScrollDistance]=\"0\"\r\n    [infiniteScrollUpDistance]=\"0\" [infiniteScrollThrottle]=\"100\" \r\n    (scrolledUp)=\"onScrollUp()\">\r\n    <!-- <ng-template #loadingmess> Loading...</ng-template> -->\r\n    <!-- <button *ngIf=\"!isLoadingMess;else loadingmess\" (click)=\"seeMore()\">more</button> -->\r\n   \r\n    <div class=\"loading\" *ngIf=\"isLoadingMess\"><img src=\"./../../../../../assets/imgs/spinner.gif\"></div>\r\n    <ng-container *ngFor=\"let message of messages; index as index \">\r\n      <div class=\"message-item\" [ngClass]=\"{'user':message.isYou}\">\r\n        <span [placement]=\"message.isYou?'left':'right'\" [ngbTooltip]=\"message.createDate\">{{message.content}}</span>\r\n        <ng-template #tick><i class=\"fas fa-check tick\"></i></ng-template>\r\n        <div class=\"sent\" *ngIf=\"index==(messages.length-1) && message.isYou\"><img *ngIf=\"isSent;else tick\"\r\n            src=\"./../../../../../assets/imgs/spinner.gif\"></div>\r\n      </div>\r\n\r\n    </ng-container>\r\n\r\n  </div>\r\n  <div class=\"chatControl\">\r\n    <form (submit)=\"sendMessage()\" #formchat=\"ngForm\" autocomplete=\"off\">\r\n      <!-- <input ngModel [(ngModel)]=\"textchat\" name=\"textchat\" type=\"text\" required placeholder=\"Input Message ...\"> -->\r\n      <textarea #area autofocus ngModel [(ngModel)]=\"textarea\" name=\"textarea\" (keydown.enter)=\"$event.preventDefault()\"\r\n        (keyup)=onkeyup($event) placeholder=\"Input Message ...\" required></textarea>\r\n      <button [disabled]=\"formchat.invalid\" type=\"submit\"><i class=\"fas fa-paper-plane\"></i></button>\r\n    </form>\r\n  </div>\r\n\r\n</ng-container>"

/***/ }),

/***/ "./src/app/components/user/message/box-chat/box-chat.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/user/message/box-chat/box-chat.component.ts ***!
  \************************************************************************/
/*! exports provided: BoxChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxChatComponent", function() { return BoxChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var BoxChatComponent = /** @class */ (function () {
    function BoxChatComponent(service, router, activatedRoute, cdr) {
        this.service = service;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.cdr = cdr;
        this.send = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.indexSeeMore = 0;
    }
    BoxChatComponent.prototype.ngOnDestroy = function () {
        this.cdr.detach();
    };
    BoxChatComponent.prototype.ngOnInit = function () {
        //this.mang.next(this.service.getListUserChat(0))
        //console.log(this.peopleId)
        //this.load(this.peopleId);
        // console.log(this.boxchat.nativeElement.scrollHeight)
        // setTimeout(() => {
        //   console.log(this.boxchat.nativeElement.scrollHeight)
        //   this.boxchat.nativeElement.scrollTop = this.boxchat.nativeElement.scrollHeight;
        // }, 0);
    };
    BoxChatComponent.prototype.load = function (peopleId) {
        var _this = this;
        this.isLoading = true;
        this.peopleId = peopleId;
        this.indexSeeMore = 0;
        this.service.getMessage(this.peopleId, this.indexSeeMore).subscribe(function (res) {
            _this.messages = res;
            //console.log(formatDate(this.messages[res.length - 1].createDate, 'dd MM yyyy HH:mm z', 'en-US', 'UTC+14'))
            //   formatDate(this.message.createDate,'dd MM yyyy HH:mm z','en-US','UTC+14')
            _this.isLoading = false;
            setTimeout(function () {
                _this.boxchat.nativeElement.scrollTop = _this.boxchat.nativeElement.scrollHeight;
                // console.log(this.boxchat.nativeElement.scrollHeight)
            }, 0);
        });
    };
    BoxChatComponent.prototype.loadMessage = function (receiveMessage) {
        if (receiveMessage.from == this.peopleId) {
            var item = {
                isYou: false,
                content: receiveMessage.message,
            };
            this.messages.push(item);
        }
        else if (receiveMessage.from == this.userId) {
            var item = {
                isYou: true,
                content: receiveMessage.message,
            };
            this.messages.push(item);
            this.isSent = false;
        }
        this.cdr.detectChanges();
        this.boxchat.nativeElement.scrollTop = this.boxchat.nativeElement.scrollHeight;
    };
    BoxChatComponent.prototype.sendMessage = function () {
        this.isSent = true;
        var item = {
            isYou: true,
            content: this.textarea
        };
        // this.messages.push(item);
        this.cdr.detectChanges();
        this.boxchat.nativeElement.scrollTop = this.boxchat.nativeElement.scrollHeight;
        var data = {
            peopleId: this.peopleId,
            textchat: this.textarea
        };
        // console.log(data)
        // this.textchat = "";
        this.textarea = "";
        this.send.emit(data);
    };
    BoxChatComponent.prototype.seeMore = function () {
        var _this = this;
        this.isLoadingMess = true;
        this.indexSeeMore = this.indexSeeMore + 1;
        this.service.getMessage(this.peopleId, this.indexSeeMore).subscribe(function (res) {
            _this.isLoadingMess = false;
            _this.messages = res.concat(_this.messages);
            // setTimeout(() => {
            //   console.log(this.boxchat.nativeElement.scrollHeight)
            //   this.boxchat.nativeElement.scrollTop = this.boxchat.nativeElement.scrollHeight - x;
            // }, 0);
            _this.boxchat.nativeElement.scrollTop = 1;
        });
    };
    BoxChatComponent.prototype.onkeyup = function (event) {
        var textArea = this.area.nativeElement;
        if (event.keyCode === 13 && !event.shiftKey) {
            if (this.textarea) {
                this.sendMessage();
            }
            textArea.style.height = '30px';
        }
        else {
            if (textArea.offsetHeight < 90)
                textArea.style.overflow = 'hidden';
            else
                textArea.style.overflow = 'auto';
            textArea.style.height = '30px';
            textArea.style.height = textArea.scrollHeight + 'px';
        }
    };
    BoxChatComponent.prototype.onScrollDown = function () {
        console.log('scrolldown');
    };
    BoxChatComponent.prototype.onScrollUp = function () {
        console.log('scrollup');
        this.seeMore();
    };
    BoxChatComponent.prototype.trackmessageId = function (index, message) {
        return message.id;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxChatComponent.prototype, "userId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxChatComponent.prototype, "peopleId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxChatComponent.prototype, "send", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('boxchat'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], BoxChatComponent.prototype, "boxchat", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('area'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], BoxChatComponent.prototype, "area", void 0);
    BoxChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[app-box-chat]',
            template: __webpack_require__(/*! ./box-chat.component.html */ "./src/app/components/user/message/box-chat/box-chat.component.html"),
            styles: [__webpack_require__(/*! ./box-chat.component.css */ "./src/app/components/user/message/box-chat/box-chat.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], BoxChatComponent);
    return BoxChatComponent;
}());



/***/ }),

/***/ "./src/app/components/user/message/message.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/user/message/message.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cover{\r\n  height: 100%;\r\n  margin-right: -10px;\r\n  margin-left: -10px;\r\n  flex-wrap: nowrap!important;\r\n}\r\n.left-section{\r\n    border-right: solid 1px rgba(0, 0, 0, .10);\r\n    padding: 0px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow: hidden;\r\n    max-width:400px ;\r\n    height: 100%;\r\n}\r\n.right-section{\r\n    padding: 0px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow: hidden;\r\n    height: 100%;\r\n}\r\n.header-section{\r\n    border-bottom: solid 1px rgba(0, 0, 0, .10);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    min-height: 50px;\r\n}\r\n.header-title{\r\n    font-weight: 600;\r\n    font-size: 1.5em;\r\n}\r\n.list-chat-box{\r\n    overflow: auto;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.sender-item{\r\n    border-bottom: 1px solid rgba(0, 0, 0, .10);\r\n}\r\na{\r\n    display: block;\r\n}\r\na:hover{\r\n    background-color: #f2f2f2;\r\n    cursor: pointer;\r\n}\r\n.item{\r\ndisplay: flex;\r\npadding: 10px;\r\n}\r\n.sender-item img{\r\n    height: 50px;\r\n    width: 50px;\r\n}\r\n.avatar{\r\n   flex:0 0 50px;\r\n}\r\n.about{\r\n    flex: 1 1 auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow: hidden;\r\n    justify-content: center;\r\n    margin-left: 10px;\r\n}\r\n.about .name{\r\n    font-size: 15px;\r\n}\r\n.about .time{\r\n    margin-left: auto;\r\n    font-size: 13px;\r\n    color: rgba(153, 153, 153, 1);\r\n}\r\n.about .message{\r\n    font-size: 13px;\r\n    color: rgba(153, 153, 153, 1);\r\n}\r\n.about span{\r\n  white-space: nowrap; \r\n  overflow: hidden;\r\n  text-overflow: ellipsis; \r\n}\r\n.active{\r\n    background-color: #f2f2f2;\r\n}\r\n.list-chat-box::-webkit-scrollbar\r\n{\r\n    width: 8px;\r\n    border-radius: 8px;\r\n\tbackground-color: #F5F5F5;\r\n}\r\n.list-chat-box::-webkit-scrollbar-thumb\r\n{\r\n\tborder-radius: 8px;\r\n\tbackground-color: #777;\r\n}\r\n.icon{\r\n    display: none;\r\n    font-size: 1.5em;\r\n}\r\n.loading{\r\n    height: 60px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.loading img{\r\n    height: 50px;\r\n    width: 50px;\r\n}\r\n@media screen and (max-width:480px){\r\n    .hidden{\r\n         display: none;\r\n    }\r\n    .left-section{\r\n        max-width: 70px;\r\n    }\r\n    .right-section{\r\n        flex: 1 1 100%;\r\n        max-width: 100%;\r\n    }\r\n    .icon{\r\n        display: block;\r\n    }\r\n    .header-title{\r\n        display: none;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsMkJBQTJCO0FBQzdCO0FBQ0E7SUFDSSwwQ0FBMEM7SUFDMUMsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksMkNBQTJDO0lBQzNDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSwyQ0FBMkM7QUFDL0M7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25CO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsYUFBYTtBQUNiO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7R0FDRyxhQUFhO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7QUFDakM7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTs7SUFFSSxVQUFVO0lBQ1Ysa0JBQWtCO0NBQ3JCLHlCQUF5QjtBQUMxQjtBQUVBOztDQUVDLGtCQUFrQjtDQUNsQixzQkFBc0I7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0k7U0FDSyxhQUFhO0lBQ2xCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdmVye1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICBmbGV4LXdyYXA6IG5vd3JhcCFpbXBvcnRhbnQ7XHJcbn1cclxuLmxlZnQtc2VjdGlvbntcclxuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgLjEwKTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1heC13aWR0aDo0MDBweCA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnJpZ2h0LXNlY3Rpb257XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmhlYWRlci1zZWN0aW9ue1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgLjEwKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5oZWFkZXItdGl0bGV7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxufVxyXG4ubGlzdC1jaGF0LWJveHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLnNlbmRlci1pdGVte1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEwKTtcclxufVxyXG5he1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuYTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLml0ZW17XHJcbmRpc3BsYXk6IGZsZXg7XHJcbnBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLnNlbmRlci1pdGVtIGltZ3tcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG59XHJcbi5hdmF0YXJ7XHJcbiAgIGZsZXg6MCAwIDUwcHg7XHJcbn1cclxuLmFib3V0e1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi5hYm91dCAubmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4uYWJvdXQgLnRpbWV7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiByZ2JhKDE1MywgMTUzLCAxNTMsIDEpO1xyXG59XHJcbi5hYm91dCAubWVzc2FnZXtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiByZ2JhKDE1MywgMTUzLCAxNTMsIDEpO1xyXG59XHJcbi5hYm91dCBzcGFue1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IFxyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IFxyXG59XHJcbi5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG59XHJcbi5saXN0LWNoYXQtYm94Ojotd2Via2l0LXNjcm9sbGJhclxyXG57XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbn1cclxuXHJcbi5saXN0LWNoYXQtYm94Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYlxyXG57XHJcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM3Nzc7XHJcbn1cclxuLmljb257XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxufVxyXG4ubG9hZGluZ3tcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmxvYWRpbmcgaW1ne1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo0ODBweCl7XHJcbiAgICAuaGlkZGVue1xyXG4gICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmxlZnQtc2VjdGlvbntcclxuICAgICAgICBtYXgtd2lkdGg6IDcwcHg7XHJcbiAgICB9XHJcbiAgICAucmlnaHQtc2VjdGlvbntcclxuICAgICAgICBmbGV4OiAxIDEgMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuaWNvbntcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5oZWFkZXItdGl0bGV7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/user/message/message.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/user/message/message.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cover row box\">\r\n        <div class=\"left-section col-4\">\r\n                <div class=\"header-section\">\r\n                        <span class=\"header-title\">Message</span><i class=\"fas fa-users icon\"></i>\r\n                </div>\r\n                <div class=\"list-chat-box\" infiniteScroll [scrollWindow]=\"false\" [infiniteScrollDistance]=\"0.1\"\r\n                        [infiniteScrollUpDistance]=\"0\" [infiniteScrollThrottle]=\"100\" (scrolled)=\"onScrollDown()\"\r\n                        >\r\n\r\n                        <ng-container *ngFor=\"let sender of listUserChats\">\r\n                                <a [ngClass]=\"{'active':peopleId==sender.id}\" (click)=\"onClickItem(sender)\"\r\n                                        class=\"sender-item\">\r\n                                        <div class=\"item\">\r\n                                                <div class=\"avatar\">\r\n                                                        <img class=\"photo\" [src]=\"sender.avatar\">\r\n                                                </div>\r\n                                                <div class=\"about hidden\">\r\n                                                        <div style=\"display: flex\">\r\n                                                                <span class=\"name\">{{sender.fullName}}</span>\r\n                                                                <span\r\n                                                                        class=\"time\">{{(sender.createDate | formatDate:\"MM/dd/yyyy HH:mm:ss\")|timeAgo}}</span>\r\n                                                        </div>\r\n\r\n                                                        <span *ngIf=\"sender.isYou\">You:</span><span\r\n                                                                class=\"message\">{{sender.lastedMessage}}</span>\r\n\r\n                                                </div>\r\n                                        </div>\r\n                                </a>\r\n                        </ng-container>\r\n                        <div class=\"loading\" *ngIf=\"isLoadingMess\"><img src=\"./../../../../../assets/imgs/spinner.gif\"></div>\r\n                        <!-- <ng-template #loadingmess> Loading...</ng-template>\r\n                        <button *ngIf=\"!isLoadingMess;else loadingmess\" (click)=\"loadMoreList()\">more</button> -->\r\n                </div>\r\n        </div>\r\n        <div app-box-chat (send)=\"sendMessage($event)\" [userId]=\"user.id\" [peopleId]=\"peopleId\"\r\n                class=\"right-section col\">\r\n                <!-- <app-box-chat (send)=\"sendMessage($event)\" [userId]=\"user.id\" [peopleId]=\"peopleId\">\r\n                </app-box-chat> -->\r\n        </div>\r\n</div>"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aspnet/signalr */ "./node_modules/@aspnet/signalr/dist/esm/index.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _box_chat_box_chat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./box-chat/box-chat.component */ "./src/app/components/user/message/box-chat/box-chat.component.ts");







var MessageComponent = /** @class */ (function () {
    function MessageComponent(service, router, activatedRoute, http) {
        this.service = service;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.token = localStorage.getItem("token");
        this.index = 0;
    }
    MessageComponent.prototype.ngOnDestroy = function () {
        window.document.getElementById("main-container").style.cssText = "height:unset;padding-bottom:unset;";
        window.document.getElementById("main-footer").style.cssText = "display:unset";
        if (this.hubConnection)
            this.hubConnection.stop();
    };
    MessageComponent.prototype.ngOnInit = function () {
        window.document.getElementById("main-container").style.cssText = "height:100vh;padding-bottom:10px;";
        window.document.getElementById("main-footer").style.cssText = "display:none";
        this.setup();
        this.user = this.activatedRoute.snapshot.data.user;
        this.listUserChats = this.activatedRoute.snapshot.data.listUserChats;
        console.log(this.listUserChats);
        this.getIdcurrentPeople();
    };
    MessageComponent.prototype.setup = function () {
        var _this = this;
        this.hubConnection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_4__["HubConnectionBuilder"]()
            .withUrl('https://travelhelperwebsite.azurewebsites.net/chat', {
            accessTokenFactory: function () {
                return _this.token;
            },
        })
            .build();
        this.connect();
        this.hubConnection.on('sendChatMessage', function (from, message) {
            console.log(from + ":" + message);
            _this.receiveMessage = { from: from, message: message };
            _this.boxChatComponent.loadMessage(_this.receiveMessage);
        });
    };
    MessageComponent.prototype.connect = function () {
        var _this = this;
        this.hubConnection
            .start()
            .then(function () {
            console.log('Connection Started!');
        })
            .catch(function (err) {
            console.log(err);
            _this.connect();
        });
    };
    MessageComponent.prototype.sendMessage = function (event) {
        this.hubConnection
            .invoke('sendChatMessage', event.peopleId, event.textchat)
            .catch(function (err) { return console.error(err); });
    };
    MessageComponent.prototype.getIdcurrentPeople = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.peopleId = params['id'];
            //  console.log(this.peopleId)
            if (_this.peopleId) {
                _this.service.getPeopleProfile(_this.peopleId).subscribe(function (res) {
                    _this.people = res;
                    _this.boxChatComponent.people = res.fullName;
                });
                _this.boxChatComponent.load(_this.peopleId);
            }
            else {
                //     console.log('un')
                if (_this.listUserChats[0])
                    _this.router.navigate(["/Users/Message/"], { queryParams: { id: _this.listUserChats[0].id } });
            }
        });
    };
    MessageComponent.prototype.loadMoreList = function () {
        var _this = this;
        this.isLoadingMess = true;
        this.index++;
        this.service.getListUserChat(this.index).subscribe(function (res) {
            console.log(res);
            _this.listUserChats = _this.listUserChats.concat(res);
            _this.isLoadingMess = false;
        });
    };
    MessageComponent.prototype.onClickItem = function (sender) {
        // console.log(sender)
        this.router.navigate([], { queryParams: { id: sender.id } });
        this.boxChatComponent.people = sender.fullName;
    };
    MessageComponent.prototype.onScrollDown = function () {
        console.log('scrolldown');
        this.loadMoreList();
    };
    MessageComponent.prototype.onScrollUp = function () {
        console.log('scrollup');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_box_chat_box_chat_component__WEBPACK_IMPORTED_MODULE_6__["BoxChatComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _box_chat_box_chat_component__WEBPACK_IMPORTED_MODULE_6__["BoxChatComponent"])
    ], MessageComponent.prototype, "boxChatComponent", void 0);
    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/components/user/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/components/user/message/message.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
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

module.exports = "\r\n/* .content-left{\r\n    min-width: 300px;\r\n    max-width: 300px;\r\n    padding: 0px 5px 0px 5px !important;\r\n\r\n\r\n}\r\n.content-right{\r\n    padding: 0px 5px 0px 5px !important;\r\n    min-width: 500px;\r\n}\r\n.content-right .row,.col{\r\n    margin: 0px ;\r\n}\r\n.menu-bar{\r\n    margin: auto;\r\n    display: flex;\r\n    align-items: center;\r\n    height: 70px;\r\n}\r\n.menu-bar ul{\r\nlist-style: none;\r\nmargin-top: 0px;\r\nmargin-bottom: 0px;\r\n}\r\n.menu-bar ul li{\r\n    display: inline-block;\r\n    text-align: center;\r\n}\r\n.menu-bar ul li a{\r\n    text-decoration: none;\r\n    color: #27374c;\r\n    margin: 0px 13px;\r\n\r\n\r\n} */\r\n\r\n.people:hover{\r\n  cursor: pointer;\r\n  color: #256ae9;\r\n}\r\n\r\n.headers {\r\n  display: flex;\r\n  padding: 10px;\r\n\r\n}\r\n\r\n.headers img {\r\n  height: 150px;\r\n  width: 150px;\r\n}\r\n\r\n.headers img:hover{\r\n  cursor: pointer;\r\n}\r\n\r\n.headers img:hover + .info .people{\r\n  color: #256ae9;\r\n}\r\n\r\nli {\r\n  border: none;\r\n  --display: flex;\r\n  --align-items: center;\r\n  padding: 0.4rem 1.25rem;\r\n  font-size: 14px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.name {\r\n  font-weight: 500;\r\n  font-size: 1.1em;\r\n  padding-top: 0px !important;\r\n}\r\n\r\n.wrapper-icon {\r\n  font-size: 16px;\r\n  height: 16px;\r\n  width: 16px;\r\n  --display: inline-block;\r\n  --background: white;\r\n  margin-right: 10px;\r\n}\r\n\r\n.list-group-item{\r\n  padding: 0.3rem 1.25rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3Blb3BsZS9wZW9wbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUNHOztBQUVIO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBS0E7RUFDRSxhQUFhO0VBQ2IsYUFBYTs7QUFFZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXIvcGVvcGxlL3Blb3BsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qIC5jb250ZW50LWxlZnR7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIHBhZGRpbmc6IDBweCA1cHggMHB4IDVweCAhaW1wb3J0YW50O1xyXG5cclxuXHJcbn1cclxuLmNvbnRlbnQtcmlnaHR7XHJcbiAgICBwYWRkaW5nOiAwcHggNXB4IDBweCA1cHggIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogNTAwcHg7XHJcbn1cclxuLmNvbnRlbnQtcmlnaHQgLnJvdywuY29se1xyXG4gICAgbWFyZ2luOiAwcHggO1xyXG59XHJcbi5tZW51LWJhcntcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG59XHJcbi5tZW51LWJhciB1bHtcclxubGlzdC1zdHlsZTogbm9uZTtcclxubWFyZ2luLXRvcDogMHB4O1xyXG5tYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLm1lbnUtYmFyIHVsIGxpe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5tZW51LWJhciB1bCBsaSBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICMyNzM3NGM7XHJcbiAgICBtYXJnaW46IDBweCAxM3B4O1xyXG5cclxuXHJcbn0gKi9cclxuXHJcbi5wZW9wbGU6aG92ZXJ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjMjU2YWU5O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4uaGVhZGVycyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG5cclxufVxyXG5cclxuLmhlYWRlcnMgaW1nIHtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIHdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuLmhlYWRlcnMgaW1nOmhvdmVye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmhlYWRlcnMgaW1nOmhvdmVyICsgLmluZm8gLnBlb3BsZXtcclxuICBjb2xvcjogIzI1NmFlOTtcclxufVxyXG5cclxubGkge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICAtLWRpc3BsYXk6IGZsZXg7XHJcbiAgLS1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAuNHJlbSAxLjI1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uYW1lIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud3JhcHBlci1pY29uIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIC0tZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ubGlzdC1ncm91cC1pdGVte1xyXG4gIHBhZGRpbmc6IDAuM3JlbSAxLjI1cmVtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/user/people/people.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/user/people/people.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"card box\" [ngStyle]=\"obj\">\r\n\r\n  <div class=\"headers\">\r\n      <img  [src]=\"user.avatarLocation ? user.avatarLocation : img\" class=\"card-img-top\" (click)=\"onClickPeople()\" alt=\"...\">\r\n\r\n      <div class=\"info\" >\r\n        <ul class=\"list-group \">\r\n          <ng-container  *ngIf=\"user.fullName;else notName\">\r\n            <li class=\"list-group-item name\"><span id=\"b\" class=\"people\" (click)=\"onClickPeople()\">{{user.fullName}}</span></li>\r\n          </ng-container>\r\n          <ng-template #notName>\r\n            <li class=\"list-group-item\">\r\n              <i>empty</i>\r\n            </li>\r\n          </ng-template>\r\n\r\n\r\n          <ng-container *ngIf=\"people\">\r\n              <li class=\"list-group-item\" >\r\n\r\n                <i class=\"far fa-map wrapper-icon\"></i>\r\n\r\n              <span><b>{{user.address | formatData:0:25}}</b></span>\r\n            </li>\r\n          </ng-container>\r\n          <li class=\"list-group-item\">\r\n\r\n                <i class=\"eva eva-message-square wrapper-icon\"></i>\r\n\r\n                <span><b>{{user.referenceReceived ? user.referenceReceived.length : '0'}}</b> Reference</span>\r\n          </li>\r\n\r\n          <ng-container *ngIf=\"!trip;else traveler\">\r\n            <li class=\"list-group-item\" >\r\n\r\n                <i class=\"eva eva-briefcase wrapper-icon\"></i>\r\n\r\n            <span>{{user.occupation}}</span>\r\n          </li>\r\n          </ng-container>\r\n\r\n          <ng-template #traveler>\r\n            <li class=\"list-group-item\">\r\n              <i class=\"fas fa-user-friends wrapper-icon\"></i>\r\n              <!-- <i class=\"eva eva-people wrapper-icon\"></i> -->\r\n\r\n                <span><b>{{trip.trip.travelerNumber}} Traveler{{trip.trip.travelerNumber > 1 ? 's' : ''}}</b> in town</span>\r\n            </li>\r\n          </ng-template>\r\n\r\n\r\n\r\n          <li class=\"list-group-item\">\r\n\r\n              <i class=\"eva eva-globe-2 wrapper-icon\"></i>\r\n\r\n            <span>Speak <b>{{language | formatData:0:15}}</b></span>\r\n          </li>\r\n\r\n          <ng-container *ngIf=\"trip\">\r\n            <li class=\"list-group-item\" >\r\n\r\n              <i class=\"far fa-calendar-alt wrapper-icon\"></i>\r\n\r\n            <span><b>{{trip.trip.arrivalDate | date:'MMM d'}} to {{trip.trip.departureDate | date:'MMM d'}}</b></span>\r\n          </li>\r\n          </ng-container>\r\n\r\n\r\n        </ul>\r\n      </div>\r\n  </div>\r\n\r\n  <div class=\"card-body\" [style.padding.px]=\"10\" *ngIf=\"!people\">\r\n    <ng-container *ngIf=\"trip? !trip.trip.description : !user.about;else des\">\r\n        <p class=\"text-muted\">\r\n            <i>empty</i>\r\n        </p>\r\n    </ng-container>\r\n\r\n\r\n    <ng-template #des>\r\n        <p class=\"card-text\">{{trip ? (trip.trip.description | formatData:0:50) : (user.about | formatData:0:50)}}</p>\r\n    </ng-template>\r\n\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

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
        this.obj = {
            height: '230px'
        };
    }
    PeopleComponent.prototype.ngOnInit = function () {
        if (this.trip) {
            console.log(this.trip);
            this.user = this.trip.user;
            this.trip.trip = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.trip);
        }
        if (this.people) {
            this.user = this.people;
            this.obj.height = '170px';
        }
        //console.log(this.user, this.trip);
        this.language = [this.user.fluentLanguage ? this.user.fluentLanguage : '', this.user.learningLanguage ? this.user.learningLanguage : ''];
        if (this.language[0] === '' && this.language[1] === '') {
            this.language = [];
        }
    };
    PeopleComponent.prototype.onClickPeople = function () {
        this.router.navigate(["/Users/People/" + this.user.id]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["User"])
    ], PeopleComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_publictrip__WEBPACK_IMPORTED_MODULE_3__["PublicTrip"])
    ], PeopleComponent.prototype, "trip", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["User"])
    ], PeopleComponent.prototype, "people", void 0);
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

module.exports = ".content-overview{\r\n    margin: 0px;\r\n    padding: 10px 20px;\r\n    line-height: 2.5;\r\n}\r\n.content-aboutme{\r\n    line-height: 2.0;\r\n    padding: 20px;\r\n    white-space: pre-wrap;\r\n}\r\n.content-overview span{\r\n    font-size: 1.1em;\r\n    padding: 5px 10px;\r\n}\r\n.content-overview i{\r\n    font-size: 1.1em;\r\n    width: 20px;\r\n}\r\n.interest-header{\r\n    background-image: linear-gradient(to right, #e1e6db , #e2dede);\r\n    padding: 10px 20px;\r\n    border-bottom: 1px solid rgba(0,0,0,0.15);\r\n    border-top: 1px solid rgba(0,0,0,0.15);\r\n}\r\n.interest-header h6{\r\n    margin: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3Byb2ZpbGUvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksOERBQThEO0lBQzlELGtCQUFrQjtJQUNsQix5Q0FBeUM7SUFDekMsc0NBQXNDO0FBQzFDO0FBQ0E7SUFDSSxTQUFTO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXIvcHJvZmlsZS9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtb3ZlcnZpZXd7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjU7XHJcbn1cclxuLmNvbnRlbnQtYWJvdXRtZXtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjA7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG59XHJcbi5jb250ZW50LW92ZXJ2aWV3IHNwYW57XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbn1cclxuLmNvbnRlbnQtb3ZlcnZpZXcgaXtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICB3aWR0aDogMjBweDtcclxufVxyXG4uaW50ZXJlc3QtaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZTFlNmRiICwgI2UyZGVkZSk7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjE1KTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMTUpO1xyXG59XHJcbi5pbnRlcmVzdC1oZWFkZXIgaDZ7XHJcbiAgICBtYXJnaW46IDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/user/profile/about/about.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/user/profile/about/about.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #loading>\r\n  <div class=\"box\">\r\n    <app-loading></app-loading>\r\n  </div>\r\n</ng-template>\r\n<ng-template #nothing>\r\n  <div class=\"nothing\">\r\n    <span>Nothing to show</span>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-container *ngIf=\"user.id && trips;else loading\">\r\n  <div class=\"box box-publictrip\">\r\n    <div class=\"box-header\">\r\n      <span>PUBLIC TRIPS</span>\r\n    </div>\r\n    <ng-container *ngIf=\"trips.length;else nothing\">\r\n      <ng-container *ngFor=\"let trip of trips\">\r\n        <app-trip (myClick)=\"openofferToHostModal($event)\" [isUser]=\"isUser\" [trip]=\"trip\"></app-trip>\r\n      </ng-container>\r\n    </ng-container>\r\n    <div class=\"box-action\" *ngIf=\"isUser\">\r\n        <a routerLink=\"/Users/PublicTrip\"><span>Your Trip's Plan</span><span><i\r\n              class=\"fas fa-arrow-circle-right\"></i></span> </a>\r\n      </div>\r\n  </div>\r\n\r\n  <div class=\"box box-overview\">\r\n    <div class=\"box-header\">\r\n      <span>OVERVIEW</span>\r\n    </div>\r\n    <div class=\"content-overview row\">\r\n      <div class=\"left col\">\r\n        <!-- <div class=\"item\"><i class=\"far fa-comment-dots\"></i> <span>0 references</span></div> -->\r\n        <div class=\"item\"><i class=\"fas fa-map-marker\"></i> <span>{{user.address}}</span></div>\r\n        <div class=\"item\"><i class=\"fas fa-child\"></i> <span>Fluence in {{user.fluentLanguage}}</span></div>\r\n        <div class=\"item\"> <i class=\"fas fa-book\"></i> <span>Leaning {{user.learningLanguage}}</span></div>\r\n      </div>\r\n      <div class=\"right col\">\r\n        <div class=\"item\"> <i class=\"far fa-calendar-alt\"></i><span>{{user.birthday|date:'dd/MM/yyyy'}}</span></div>\r\n        <div class=\"item\"><i class=\"fas fa-venus-mars\"></i> <span\r\n            *ngIf=\"user.gender!=null\">{{user.gender?'Male':'Female'}}</span></div>\r\n        <div class=\"item\"><i class=\"fas fa-briefcase\"></i> <span>{{user.occupation}}</span></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"box box-aboutme\">\r\n    <div class=\"box-header\">\r\n      <span>ABOUT ME</span>\r\n    </div>\r\n    <div class=\"content-aboutme\">\r\n      <p>{{user.about}}</p>\r\n      \r\n\r\n      \r\n    </div>\r\n    <div class=\"interest-header\">\r\n      <h6>INTEREST</h6>\r\n    </div>\r\n    <div class=\"content-aboutme\">\r\n      <p>{{user.interest}}</p>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n<app-offer-to-host></app-offer-to-host>"

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
/* harmony import */ var _reuse_offer_to_host_offer_to_host_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reuse/offer-to-host/offer-to-host.component */ "./src/app/components/user/reuse/offer-to-host/offer-to-host.component.ts");





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
    AboutComponent.prototype.openofferToHostModal = function (event) {
        this.offerToHost.open(event);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_reuse_offer_to_host_offer_to_host_component__WEBPACK_IMPORTED_MODULE_4__["OfferToHostComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _reuse_offer_to_host_offer_to_host_component__WEBPACK_IMPORTED_MODULE_4__["OfferToHostComponent"])
    ], AboutComponent.prototype, "offerToHost", void 0);
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

module.exports = "a:hover{\r\n    cursor: pointer;\r\n}\r\nform{\r\n    margin-bottom: 0px;\r\n}\r\n.content-left{\r\n/* min-width: 300px;\r\nmax-width: 400px; */\r\npadding: 0px 5px 0px 5px !important;\r\nflex: 0 0 33.333333%;\r\nmax-width: 33.333333%;\r\n}\r\n.content-right{\r\nmax-width: 100%;\r\nflex: 0 0 66.666667%;\r\nmax-width: 66.666667%;\r\npadding: 0px 5px 0px 5px !important;\r\n}\r\n.user-info{\r\n    text-align: center;\r\n    padding-top: 50px;\r\n}\r\n.photo{\r\n    margin-bottom: 20px;\r\n   \r\n}\r\n.upload{\r\n    position: absolute;\r\n    opacity: 0.7;\r\n    border-radius: 50%;\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n.upload:hover{\r\n    opacity: 0.6;\r\n}\r\n.upload .top{\r\n    height: 50%;\r\n    border-radius:100px 100px 0 0  ;\r\n}\r\n.upload .bottom{\r\n    display: flex;\r\n    align-items: center;\r\n    height: 50%;\r\n    border-radius:0 0 100px 100px ;\r\n    background-color: #646363;\r\n}\r\n.upload i{\r\n    color: black;\r\n    margin:  auto;\r\n    font-size: 40px;\r\n}\r\n.box-header{\r\n    text-align: left;\r\n    border-top: 1px solid rgba(0,0,0,0.15);\r\n}\r\n.overview{\r\n text-align: left;\r\n padding-left: 20px;\r\n}\r\n.overview .item{\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n\r\n}\r\n.item  span{\r\n    font-size: 1.1em;\r\n    padding: 5px 10px;\r\n}\r\n.item i{\r\n    font-size: 1.1em;\r\n    width: 20px;\r\n}\r\n.tab-bar{\r\n    height: 50px;\r\n    display:flex;\r\n    align-items: center;\r\n    padding-top: 10px;\r\n}\r\n.tab-bar ul{\r\nlist-style: none;\r\nmargin: 0;\r\npadding: 0;\r\nwidth: 100%;\r\n}\r\n.tab-bar ul li{\r\n    display: inline-block;\r\n    text-align: center; \r\n}\r\n.tab-bar ul li a{\r\n    line-height: 50px;\r\n    padding: 0px 15px;\r\n    display: block;\r\n    text-decoration: none;\r\n    font-weight: 500;\r\n}\r\n.tab-bar ul li a span{\r\n    font-weight: 500;\r\n    font-size: 1em; \r\n}\r\n.tab-bar ul li a:hover{\r\n    cursor: pointer;\r\n    color: #ED6504;\r\n}\r\n.content{\r\n    padding: 20px;\r\n    display: none;\r\n}\r\n.content-right .selected{\r\n    display: block!important;\r\n}\r\n.content-right .active{\r\n    color: #ED6504;\r\n    font-weight: bold;\r\n}\r\n.content-right select:hover{\r\n    cursor: pointer;\r\n}\r\n.content-right button{\r\n    margin: 0px 10px;\r\n    padding: 5px 30px;\r\n}\r\n.content-right label{\r\n    word-wrap: break-word;\r\n    size: 18px;\r\n    font-weight: 600;\r\n}\r\n.button-bar{\r\n    border-top: #ecf0f1 solid 2px;\r\n    padding-top: 20px\r\n}\r\n@media screen and (max-width: 768px){\r\n    .content-left{\r\n        flex: 0 0 100%;\r\n        max-width: 100%;\r\n       order: 2;\r\n    }\r\n    .content-right{\r\n        flex: 0 0 100%;\r\n        max-width: 100%;\r\n        order: 1;\r\n    }\r\n}\r\n.input-focus:focus{\r\n   \r\n    box-shadow: none;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3Byb2ZpbGUvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtBQUNBO21CQUNtQjtBQUNuQixtQ0FBbUM7QUFDbkMsb0JBQW9CO0FBQ3BCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsZUFBZTtBQUNmLG9CQUFvQjtBQUNwQixxQkFBcUI7QUFDckIsbUNBQW1DO0FBQ25DO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsc0NBQXNDO0FBQzFDO0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLFNBQVM7QUFDVCxVQUFVO0FBQ1YsV0FBVztBQUNYO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7SUFDYixhQUFhO0FBQ2pCO0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0I7QUFDSjtBQUdBO0lBQ0k7UUFDSSxjQUFjO1FBQ2QsZUFBZTtPQUNoQixRQUFRO0lBQ1g7SUFDQTtRQUNJLGNBQWM7UUFDZCxlQUFlO1FBQ2YsUUFBUTtJQUNaO0FBQ0o7QUFDQTs7SUFFSSxnQkFBZ0I7O0FBRXBCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyL3Byb2ZpbGUvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmZvcm17XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmNvbnRlbnQtbGVmdHtcclxuLyogbWluLXdpZHRoOiAzMDBweDtcclxubWF4LXdpZHRoOiA0MDBweDsgKi9cclxucGFkZGluZzogMHB4IDVweCAwcHggNXB4ICFpbXBvcnRhbnQ7XHJcbmZsZXg6IDAgMCAzMy4zMzMzMzMlO1xyXG5tYXgtd2lkdGg6IDMzLjMzMzMzMyU7XHJcbn1cclxuLmNvbnRlbnQtcmlnaHR7XHJcbm1heC13aWR0aDogMTAwJTtcclxuZmxleDogMCAwIDY2LjY2NjY2NyU7XHJcbm1heC13aWR0aDogNjYuNjY2NjY3JTtcclxucGFkZGluZzogMHB4IDVweCAwcHggNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnVzZXItaW5mb3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG59XHJcbi5waG90b3tcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgIFxyXG59XHJcbi51cGxvYWR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcbi51cGxvYWQ6aG92ZXJ7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbn1cclxuLnVwbG9hZCAudG9we1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOjEwMHB4IDEwMHB4IDAgMCAgO1xyXG59XHJcbi51cGxvYWQgLmJvdHRvbXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOjAgMCAxMDBweCAxMDBweCA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ2MzYzO1xyXG59XHJcblxyXG4udXBsb2FkIGl7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW46ICBhdXRvO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbi5ib3gtaGVhZGVye1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMTUpO1xyXG59XHJcbi5vdmVydmlld3tcclxuIHRleHQtYWxpZ246IGxlZnQ7XHJcbiBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuLm92ZXJ2aWV3IC5pdGVte1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcbi5pdGVtICBzcGFue1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG59XHJcbi5pdGVtIGl7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbn1cclxuXHJcbi50YWItYmFye1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcbi50YWItYmFyIHVse1xyXG5saXN0LXN0eWxlOiBub25lO1xyXG5tYXJnaW46IDA7XHJcbnBhZGRpbmc6IDA7XHJcbndpZHRoOiAxMDAlO1xyXG59XHJcbi50YWItYmFyIHVsIGxpe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxufVxyXG4udGFiLWJhciB1bCBsaSBhe1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4udGFiLWJhciB1bCBsaSBhIHNwYW57XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxZW07IFxyXG59XHJcbi50YWItYmFyIHVsIGxpIGE6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogI0VENjUwNDtcclxufVxyXG4uY29udGVudHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59ICAgIFxyXG4gIFxyXG4uY29udGVudC1yaWdodCAuc2VsZWN0ZWR7XHJcbiAgICBkaXNwbGF5OiBibG9jayFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbnRlbnQtcmlnaHQgLmFjdGl2ZXtcclxuICAgIGNvbG9yOiAjRUQ2NTA0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jb250ZW50LXJpZ2h0IHNlbGVjdDpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY29udGVudC1yaWdodCBidXR0b257XHJcbiAgICBtYXJnaW46IDBweCAxMHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDMwcHg7XHJcbn1cclxuLmNvbnRlbnQtcmlnaHQgbGFiZWx7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICBzaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uYnV0dG9uLWJhcntcclxuICAgIGJvcmRlci10b3A6ICNlY2YwZjEgc29saWQgMnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHhcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAgIC5jb250ZW50LWxlZnR7XHJcbiAgICAgICAgZmxleDogMCAwIDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgb3JkZXI6IDI7XHJcbiAgICB9XHJcbiAgICAuY29udGVudC1yaWdodHtcclxuICAgICAgICBmbGV4OiAwIDAgMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgb3JkZXI6IDE7XHJcbiAgICB9XHJcbn1cclxuLmlucHV0LWZvY3VzOmZvY3Vze1xyXG4gICBcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/user/profile/edit/edit.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/user/profile/edit/edit.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"user.id\">\r\n  <app-upload [from]=\"'edit'\" (myclick)=\"setAvatar($event)\"></app-upload>\r\n  <div class=\"content-left col \">\r\n    <div class=\"box user-info\">\r\n      <a class=\"upload\" (click)=\"upload.open()\">\r\n        <div class=\"top\"></div>\r\n        <div class=\"bottom\">\r\n          <i class=\"fas fa-camera\"></i>\r\n        </div>\r\n      </a>\r\n      <img class=\"photo img-responsive\"\r\n        [src]=\"user.avatarLocation?user.avatarLocation:'./../../../../assets/imgs/profile-picture-placeholder.png'\">\r\n        <p style=\"font-size:30px;font-weight: 600\">{{user.fullName}}</p>\r\n        <p style=\"font-size: 20px;\">{{user.address}}</p>\r\n      <div class=\"box-header\">\r\n        <span>OVERVIEW</span>\r\n      </div>\r\n      <div class=\"overview\">\r\n        <div class=\"item\"><i class=\"fas fa-map-marker\"></i> <span>{{user.address}}</span></div>\r\n        <div class=\"item\"><i class=\"fas fa-child\"></i> <span>Fluence in {{user.fluentLanguage}}</span></div>\r\n        <div class=\"item\"> <i class=\"fas fa-book\"></i> <span>Leaning {{user.learningLanguage}}</span></div>\r\n        <div class=\"item\"> <i class=\"far fa-calendar-alt\"></i><span>{{user.birthday|date:'dd/MM/yyyy'}}</span></div>\r\n        <div class=\"item\"><i class=\"fas fa-venus-mars\"></i> <span\r\n            *ngIf=\"user.gender!=null\">{{user.gender?'Male':'Female'}}</span></div>\r\n        <div class=\"item\"><i class=\"fas fa-briefcase\"></i> <span>{{user.occupation}}</span></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- content-left -->\r\n  <div class=\"content-right col\">\r\n    <div class=\"box\">\r\n      <div class=\" tab-bar\">\r\n        <ul class=\"nav nav-tabs\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link \" [ngClass]=\"{'active':isabout}\" [routerLink]=\"\" skipLocationChange=\"true\"\r\n              fragment=\"about\" > About</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" [ngClass]=\"{'active':!isabout}\" [routerLink]=\"\" skipLocationChange=\"true\"\r\n              fragment=\"myhome\" >My home</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <!-- tab-bar -->\r\n      <div [ngClass]=\"{'selected':isabout}\" class=\"content\">\r\n        <form class=\"form-group\" [formGroup]=\"formabout\" autocomplete=\"off\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-3 col-form-label\" for=\"Status\">Status</label>\r\n            <div style=\"max-width:250px;min-width:250px;\" class=\"col-6\">\r\n              <select id=\"Status\" class=\"form-control\" formControlName=\"status\">\r\n                <option value=\"false\" selected>Not Accepting Guest</option>\r\n                <option value=\"true\">Accepting Guest</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"FullName\" class=\"col-3 col-form-label\">Full Name<span style=\"color: red;\">*</span></label>\r\n            <div class=\"col-9\">\r\n              <input type=\"text\" class=\"form-control \" id=\"fullName\" formControlName=\"fullName\">\r\n              <label class=\"text-danger\"\r\n                *ngIf=\"formabout.get('fullName').touched && formabout.get('fullName').errors?.required\">This\r\n                field is mandatory.</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"Address\" class=\"col-3 col-form-label\">Address</label>\r\n            <div class=\"col-6\">\r\n              <input style=\"text-align: left;cursor: text;\" type=\"button\" class=\"form-control input-focus\"\r\n                formControlName=\"address\" (click)=\"show=true;showsearch();\">\r\n              <div class=\"back-drop-header\" (click)=\"show=false\" *ngIf=\"show\">\r\n              </div>\r\n              <div class=\"back-drop\" (click)=\"show=false\" *ngIf=\"show\">\r\n              </div>\r\n              <form style=\"position:relative; z-index: 901;\" autocomplete=\"off\">\r\n                <input #search name=\"search\" [(ngModel)]=\"addressInput\" class=\"form-control\" (keyup)=\"onKeyup();\"\r\n                  style=\" position:absolute;bottom: 0px \" [style.display]=\"show && issearch?'unset':'none'\">\r\n                <app-dropdown [type]=\"'select'\" (myClick)=\"show=false;formabout.get('address').setValue($event);\"\r\n                  [searchedSubject]=\"searchedSubject\"></app-dropdown>\r\n              </form>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-3 col-form-label\" for=\"Gender\">Gender</label>\r\n            <div style=\"max-width:130px;min-width:130px;\" class=\"col-3\">\r\n              <select id=\"Gender\" class=\"form-control\" formControlName=\"gender\">\r\n                <!-- <option value=\"any\">Any</option> -->\r\n                <option value=\"true\">Male</option>\r\n                <option value=\"false\">Female</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"example-date-input\" class=\"col-3 col-form-label\">BirthDay</label>\r\n            <div style=\"max-width:250px;min-width:250px;\" class=\"col-6\">\r\n              <input class=\"form-control\" type=\"date\" id=\"example-date-input\" formControlName=\"birthday\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"Occupation\" class=\"col-3 col-form-label\">Occupation</label>\r\n            <div class=\"col-9\">\r\n              <input type=\"text\" class=\"form-control\" id=\"Occupation\" formControlName=\"occupation\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"FluentLanguage\" class=\"col-3 col-form-label\">Fluent Language</label>\r\n            <div class=\"col-9\">\r\n              <input type=\"text\" class=\"form-control\" id=\"FluentLanguage\" formControlName=\"fluentLanguage\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"LearningLanguage\" class=\"col-3 col-form-label\">Learning Language</label>\r\n            <div class=\"col-9\">\r\n              <input type=\"text\" class=\"form-control\" id=\"LearningLanguage\" formControlName=\"learningLanguage\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"About\">About</label>\r\n            <textarea class=\"form-control\" id=\"About\" rows=\"5\" formControlName=\"about\"></textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"Interest\">Interest</label>\r\n            <textarea class=\"form-control\" id=\"Interest\" rows=\"5\" formControlName=\"interest\"></textarea>\r\n          </div>\r\n          <div class=\"button-bar\">\r\n            <button [disabled]=\"!formabout.valid || isdiable\" (click)=\"onSaveabout();\" type=\"submit\"\r\n              class=\"btn btn-success\">Save</button>\r\n            <button (click)=\"setvalueabout();\" class=\"btn btn-secondary\">Reset</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <!-- content-about -->\r\n      <div [ngClass]=\"{'selected':!isabout}\" class=\"content\">\r\n        <form class=\"form-group\" [formGroup]=\"formhome\" autocomplete=\"off\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"maxGuest\" class=\"col-3 col-form-label\">Max Number of Guests:</label>\r\n            <div style=\"max-width:130px;min-width:130px;\" class=\"col-2\">\r\n              <input type=\"number\" min=\"0\" class=\"form-control\" id=\"maxGuest\" formControlName=\"maxGuest\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-3 col-form-label\" for=\"preferedGender\">Preferred Gender to Host</label>\r\n            <div style=\"max-width:130px;min-width:130px;\" class=\"col-6\">\r\n              <select id=\"preferedGender\" class=\"form-control\" formControlName=\"preferedGender\">\r\n                <option></option>\r\n                <option value=\"Any\">Any</option>\r\n                <option value=\"Male\">Male</option>\r\n                <option value=\"Female\">Female</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-3 col-form-label\" for=\"sleepingArrangement\">Sleeping Arrangements</label>\r\n            <div style=\"max-width:250px;min-width:250px;\" class=\"col-6\">\r\n              <select id=\"sleepingArrangement\" class=\"form-control\" formControlName=\"sleepingArrangement\">\r\n                <option></option>\r\n                <option value=\"Shared Bed\" selected>Shared Bed</option>\r\n                <option value=\"Shared Room\">Shared Room</option>\r\n                <option value=\"Public Room\">Public Room (Eg: Living Room)</option>\r\n                <option value=\"Private Room\">Private Room</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"SleepingDescription\">Description of Sleeping Arrangement</label>\r\n            <textarea class=\"form-control\" id=\"SleepingDescription\" rows=\"5\"\r\n              formControlName=\"sleepingDescription\"></textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"TransportationAccess\">Public Transportation Access</label>\r\n            <textarea class=\"form-control\" id=\"TransportationAccess\" rows=\"5\"\r\n              formControlName=\"transportationAccess\"></textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"allowedThing\">Allowed Thing</label>\r\n            <textarea class=\"form-control\" id=\"allowedThing\" rows=\"5\" formControlName=\"allowedThing\"></textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"stuff\">Stuff</label>\r\n            <textarea class=\"form-control\" id=\"stuff\" rows=\"5\" formControlName=\"stuff\"></textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"additionInfo\">Additional Information</label>\r\n            <textarea class=\"form-control\" id=\"additionInfo\" rows=\"5\" formControlName=\"additionInfo\"></textarea>\r\n          </div>\r\n          <div class=\"button-bar\">\r\n            <button [disabled]=\"isdiable\" (click)=\"onSavehome()\" type=\"submit\" class=\"btn btn-success\">Save</button>\r\n            <button (click)=\"setvaluehome()\" class=\"btn btn-secondary\">Reset</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <!-- content-home -->\r\n    </div>\r\n  </div>\r\n</div>"

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
        this.isdiable = false;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.fragment.subscribe(function (fragment) {
            _this.isabout = fragment == 'about' || fragment == null ? true : false;
        });
        //this.onClick();
        this.user = this.activatedRoute.snapshot.data.users;
        this.homeres = this.activatedRoute.snapshot.data.homeres;
        this.setvalueabout();
        if (this.homeres.length) {
            this.home = this.homeres[0];
            this.setvaluehome();
        }
    };
    // onClick() {
    //   setTimeout(() => {
    //     let hash = this.route.url.substring(this.route.url.indexOf('#') + 1);
    //     this.isabout = hash == 'about' || hash == '/Users/Profile/Edit' ? true : false;
    //   }, 0);
    // }
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
        this.isdiable = true;
        console.log(this.isdiable);
        this.service.editProfileAbout(this.formabout.value).subscribe(function (res) {
            _this.toastr.success("Saved");
            // setTimeout(() => {
            //   this.isdiable=false;
            // }, 1000);
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
        //this.isdiable=true;
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
        this.isdiable = true;
        if (this.home) {
            this.service.editProfileHome(this.formhome.value, this.home.homeId).subscribe(function (res) {
                _this.toastr.success("Saved");
                _this.route.navigateByUrl('/Users/Profile/Myhome');
            });
        }
        else {
            this.service.createProfileHome(this.formhome.value).subscribe(function (res) {
                _this.toastr.success("Saved");
                _this.route.navigateByUrl('/Users/Profile/Myhome');
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

/***/ "./src/app/components/user/profile/friends/friends.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/user/profile/friends/friends.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-friends{\r\n    padding: 15px 5px;\r\n    margin: 0px;\r\n}\r\n.item{\r\n    display: flex;\r\n    padding: 10px;\r\n    border-radius: 1rem;\r\n    border: 1px solid rgba(0,0,0,0.15);\r\n    background-color: #f8f8f8;\r\n    margin: 5px 0px;\r\n}\r\n.item img{\r\n    height: 70px;\r\n    width: 70px;\r\n}\r\n.item .avatar{\r\n    padding-right: 20px;\r\n}\r\n.item a{\r\n  text-decoration: none;\r\n   \r\n}\r\n.item a:hover{\r\n    cursor: pointer;\r\n    color: #ED6504;\r\n}\r\n.item .info{\r\n    \r\n}\r\n.info p{\r\n    margin: 0;\r\n}\r\n.info .name{\r\n    font-size: 1.3em;\r\n    font-weight: 500;\r\n}\r\n.info .address{\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3Byb2ZpbGUvZnJpZW5kcy9mcmllbmRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQ0FBa0M7SUFDbEMseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0VBQ0UscUJBQXFCOztBQUV2QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXIvcHJvZmlsZS9mcmllbmRzL2ZyaWVuZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LWZyaWVuZHN7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDVweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcbi5pdGVte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjE1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XHJcbiAgICBtYXJnaW46IDVweCAwcHg7XHJcbn1cclxuLml0ZW0gaW1ne1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbn1cclxuLml0ZW0gLmF2YXRhcntcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuLml0ZW0gYXtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgIFxyXG59XHJcbi5pdGVtIGE6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogI0VENjUwNDtcclxufVxyXG4uaXRlbSAuaW5mb3tcclxuICAgIFxyXG59XHJcbi5pbmZvIHB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLmluZm8gLm5hbWV7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uaW5mbyAuYWRkcmVzc3tcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/user/profile/friends/friends.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/user/profile/friends/friends.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #loading>\r\n  <div class=\"box\">\r\n    <app-loading></app-loading>\r\n  </div>\r\n</ng-template>\r\n<ng-template #nothing>\r\n  <div class=\"nothing\">\r\n    <span>Nothing to show</span>\r\n  </div>\r\n</ng-template>\r\n<ng-container *ngIf=\"isLoading==false;else loading\">\r\n  <div class=\"box box-friends\">\r\n    <div class=\"box-header\">\r\n      <span>FRIENDS</span>\r\n    </div>\r\n    <ng-container *ngIf=\"friends.length;else nothing\"></ng-container>\r\n    <div class=\"content-friends row\">\r\n      <div *ngFor=\"let friend of friends\" class=\"col-md-6 col-sm-12 \">\r\n        <div class=\"item\">\r\n          <div class=\"avatar\">\r\n            <a routerLink=\"/Users/People/{{friend.id}}\"><img class=\"photo\" [src]=\"friend.avatarLocation\"></a>\r\n          </div>\r\n          <div class=\"info\">\r\n            <a routerLink=\"/Users/People/{{friend.id}}\">\r\n              <p class=\"name\">{{friend.fullName}}</p>\r\n            </a>\r\n            <p class=\"address\">{{friend.address}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</ng-container>"

/***/ }),

/***/ "./src/app/components/user/profile/friends/friends.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/user/profile/friends/friends.component.ts ***!
  \**********************************************************************/
/*! exports provided: FriendsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsComponent", function() { return FriendsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var FriendsComponent = /** @class */ (function () {
    function FriendsComponent(service, router) {
        this.service = service;
        this.router = router;
        this.friends = [];
        this.isLoading = true;
    }
    FriendsComponent.prototype.ngOnDestroy = function () {
        this.navigationSubscription.unsubscribe();
    };
    FriendsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                _this.load();
            }
        });
        this.load();
    };
    FriendsComponent.prototype.load = function () {
        var _this = this;
        this.isLoading = true;
        this.service.getUserFriends().subscribe(function (res) {
            _this.friends = res;
            _this.isLoading = false;
        });
    };
    FriendsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-friends',
            template: __webpack_require__(/*! ./friends.component.html */ "./src/app/components/user/profile/friends/friends.component.html"),
            styles: [__webpack_require__(/*! ./friends.component.css */ "./src/app/components/user/profile/friends/friends.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FriendsComponent);
    return FriendsComponent;
}());



/***/ }),

/***/ "./src/app/components/user/profile/home/home.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/user/profile/home/home.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-myhome{\r\n    line-height: 2.5;\r\n    padding: 10px 20px;\r\n    white-space: pre-wrap;\r\n}\r\n.content-myhome span{\r\n    padding-right: 10px;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n}\r\n.item{\r\n    border: 1px solid rgba(0,0,0,0.15);\r\n    margin: 10px 0px;\r\n    padding: 5px 20px;\r\n    border-radius: 15px;\r\n    background-color: #f8f8f878;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3Byb2ZpbGUvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQiwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXIvcHJvZmlsZS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LW15aG9tZXtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbn1cclxuLmNvbnRlbnQtbXlob21lIHNwYW57XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uaXRlbXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xNSk7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODc4O1xyXG59Il19 */"

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

module.exports = "\r\n.content-left{\r\n    /* min-width: 220px; */\r\n    max-width: 300px; \r\n    min-width: 260px;\r\n    padding: 0px 5px 0px 5px !important;\r\n    /* margin-right: 5px !important; */\r\n    \r\n}\r\n.content-right{\r\n    padding: 0px 5px 0px 5px !important;\r\n    min-width: 100px;\r\n    /* min-width: 500px; */\r\n}\r\n.content-right .row,.col{\r\n    margin: 0px ;\r\n}\r\n.status-bar{\r\n    min-height: 70px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.status-bar .button-bar{\r\n    margin-left: auto;\r\n    margin-right: 20px;\r\n}\r\n.button-bar button{\r\n    margin-left: 5px;\r\n}\r\n.dropdown-menu button{\r\n    margin: 0px;\r\n}\r\n.status-bar span{\r\n    padding-left: 5px;\r\n    font-size: 30px;\r\n    font-weight: 500;\r\n}\r\n.status-bar .dropdown{\r\n    display: inline-block;\r\n}\r\n.user-info{\r\n    padding-top: 50px;\r\n    text-align: center;\r\n}\r\n.info{\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n}\r\n.info p{\r\n    padding: 3px 0px 3px 0px;\r\n    margin-bottom: 0px !important;\r\n}\r\n.menu-bar{\r\n    margin: auto;\r\n    display: flex;\r\n    align-items: center;\r\n    min-height: 70px;\r\n}\r\n.menu-bar ul{\r\n    -webkit-padding-start: 7px;\r\n            padding-inline-start: 7px;\r\n    list-style: none;\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n}\r\n.menu-bar ul li{\r\n    display: inline-block;\r\n    text-align: center; \r\n    margin: 0px 13px;\r\n\r\n}\r\n.menu-bar ul li a{\r\n    font-weight: 500;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n    color: #287FB8;\r\n}\r\n.menu-bar ul li a:hover{\r\n    color: #ED6504;\r\n}\r\n.menu-bar ul li .is-selected{\r\n    color: #ED6504;\r\n    font-weight: 600;\r\n}\r\n@media screen and (max-width: 768px) {\r\n    .content-left{\r\n        flex: 0 0 100%;\r\n        max-width: 100%;\r\n        order: 2;\r\n    }\r\n    .content-right{\r\n        order: 1;\r\n\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1DQUFtQztJQUNuQyxrQ0FBa0M7O0FBRXRDO0FBQ0E7SUFDSSxtQ0FBbUM7SUFDbkMsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLDBCQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0JBQWdCOztBQUVwQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0k7UUFDSSxjQUFjO1FBQ2QsZUFBZTtRQUNmLFFBQVE7SUFDWjtJQUNBO1FBQ0ksUUFBUTs7SUFFWjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jb250ZW50LWxlZnR7XHJcbiAgICAvKiBtaW4td2lkdGg6IDIyMHB4OyAqL1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDsgXHJcbiAgICBtaW4td2lkdGg6IDI2MHB4O1xyXG4gICAgcGFkZGluZzogMHB4IDVweCAwcHggNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDVweCAhaW1wb3J0YW50OyAqL1xyXG4gICAgXHJcbn1cclxuLmNvbnRlbnQtcmlnaHR7XHJcbiAgICBwYWRkaW5nOiAwcHggNXB4IDBweCA1cHggIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICAvKiBtaW4td2lkdGg6IDUwMHB4OyAqL1xyXG59XHJcbi5jb250ZW50LXJpZ2h0IC5yb3csLmNvbHtcclxuICAgIG1hcmdpbjogMHB4IDtcclxufVxyXG4uc3RhdHVzLWJhcntcclxuICAgIG1pbi1oZWlnaHQ6IDcwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uc3RhdHVzLWJhciAuYnV0dG9uLWJhcntcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi5idXR0b24tYmFyIGJ1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuLmRyb3Bkb3duLW1lbnUgYnV0dG9ue1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLnN0YXR1cy1iYXIgc3BhbntcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uc3RhdHVzLWJhciAuZHJvcGRvd257XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi51c2VyLWluZm97XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaW5mb3tcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5pbmZvIHB7XHJcbiAgICBwYWRkaW5nOiAzcHggMHB4IDNweCAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1lbnUtYmFye1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiA3MHB4O1xyXG59XHJcbi5tZW51LWJhciB1bHtcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA3cHg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5tZW51LWJhciB1bCBsaXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBtYXJnaW46IDBweCAxM3B4O1xyXG5cclxufVxyXG4ubWVudS1iYXIgdWwgbGkgYXtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjb2xvcjogIzI4N0ZCODtcclxufVxyXG4ubWVudS1iYXIgdWwgbGkgYTpob3ZlcntcclxuICAgIGNvbG9yOiAjRUQ2NTA0O1xyXG59XHJcbi5tZW51LWJhciB1bCBsaSAuaXMtc2VsZWN0ZWR7XHJcbiAgICBjb2xvcjogI0VENjUwNDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jb250ZW50LWxlZnR7XHJcbiAgICAgICAgZmxleDogMCAwIDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG9yZGVyOiAyO1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQtcmlnaHR7XHJcbiAgICAgICAgb3JkZXI6IDE7XHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-write-reference-modal [people]=\"user\"></app-write-reference-modal>\r\n<app-send-message-modal [people]=\"user\"></app-send-message-modal>\r\n<app-send-request-modal [people]=\"user\"></app-send-request-modal>\r\n<app-send-report-modal [people]=\"user\"></app-send-report-modal>\r\n<div class=\"row\">\r\n  <div class=\"content-left col-3 \">\r\n    <div class=\"box user-info\">\r\n      <img class=\"photo img-responsive\"\r\n        [src]=\"user.avatarLocation?user.avatarLocation:'./../../../../assets/imgs/profile-picture-placeholder.png'\">\r\n      <div class=\"info\">\r\n        <p style=\"font-size:30px;font-weight: 600\">{{user.fullName}}</p>\r\n        <p style=\"font-size: 20px;\"> {{user.address}}</p>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"box\" style=\"min-height:500px\">\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"content-right col \">\r\n    <div class=\"box status-bar\">\r\n      <i *ngIf=\"user.status;else not\" class=\"color-icon\"\r\n        style=\" margin-left: 20px; width: 40px;height: 40px; background-image: url(https://img.icons8.com/color/96/000000/ok.png)\"></i>\r\n      <ng-template #not>\r\n        <i class=\"color-icon\"\r\n          style=\" margin-left: 20px; width: 40px;height: 40px; background-image: url(https://img.icons8.com/color/96/000000/cancel.png)\"></i>\r\n      </ng-template>\r\n      <span class=\"status-value\" [style.color]=\"user.status?'green':'red'\">\r\n        {{user.status?'Acepting Guest':'Not Acepting Guest'}}\r\n      </span>\r\n      <div class=\"button-bar\">\r\n        <button (click)=\"sendRequestModal.open();\" *ngIf=\"!isUser&&user.status\" class=\"btn btn-primary\">Send\r\n          Request</button>\r\n          <!-- (click)=\"sendMessageModal.open();\"  -->\r\n        <button routerLink=\"/Users/Message\" [queryParams]=\"{id:user.id}\"\r\n          *ngIf=\"!isUser\" class=\"btn btn-primary\"><i class=\"far fa-envelope\"></i></button>\r\n        <button *ngIf=\"isUser\" class=\"btn btn-primary\" routerLink=\"/Users/Profile/Edit\">Edit My Profile</button>\r\n        <div *ngIf=\"!isUser\" class=\"dropdown\" (clickOutside)=\"isdrop=false;\">\r\n          <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenu2\" data-toggle=\"dropdown\"\r\n            (click)=\"isdrop=!isdrop\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            More\r\n          </button>\r\n          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenu2\"\r\n            [style.display]=\"isdrop?'block':'none'\">\r\n            <button *ngIf=\"!isFriend\" (click)=\"sendFriendRequest()\" class=\"dropdown-item\" type=\"button\">Add\r\n              Friend</button>\r\n            <button *ngIf=\"isFriend\" class=\"dropdown-item\" type=\"button\">Remove Friend</button>\r\n            <button (click)=\"writeReferenceModal.open();\" class=\"dropdown-item\" type=\"button\">Write Reference</button>\r\n            <button (click)=\"sendReportModal.open();\" class=\"dropdown-item\" type=\"button\">Report</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"box menu-bar\">\r\n      <ul>\r\n        <li><a routerLinkActive='is-selected' [routerLink]=\"['About']\"><span>About</span></a></li>\r\n        <li><a routerLinkActive='is-selected' [routerLink]=\"['Myhome']\"><span>My Home</span></a></li>\r\n        <li><a routerLinkActive='is-selected' [routerLink]=\"['Photos']\"><span>Photos</span></a></li>\r\n        <li><a routerLinkActive='is-selected' [routerLink]=\"['References']\"><span>References</span></a></li>\r\n        <li *ngIf=\"isUser\"><a routerLinkActive='is-selected' [routerLink]=\"['Friends']\"><span>Friends</span></a></li>\r\n      </ul>\r\n    </div>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>"

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
/* harmony import */ var _reuse_send_report_modal_send_report_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reuse/send-report-modal/send-report-modal.component */ "./src/app/components/user/reuse/send-report-modal/send-report-modal.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");









var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, service, activatedRoute, toast) {
        this.router = router;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.toast = toast;
        this.user = {};
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.isUser = this.service.getisUser();
        this.user = this.activatedRoute.snapshot.data.users;
        //console.log(temp)
        if (!this.isUser)
            this.isFriend = this.activatedRoute.snapshot.data.isFriend.isFriend;
        // if (temp.err == '404') {
        //   this.router.navigate(['Users/People/404']);
        // } else {
        //   this.user = temp;
        // }
        console.log(this.user.id);
    };
    ProfileComponent.prototype.sendFriendRequest = function () {
        var _this = this;
        this.isdrop = false;
        var body = {
            message: ""
        };
        this.service.sendFriendRequest(body, this.user.id).subscribe(function (res) {
            if (res.status == 200) {
                _this.toast.success("You had sent a friend request ");
            }
            else {
                _this.toast.error("Fail");
            }
        });
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_reuse_send_report_modal_send_report_modal_component__WEBPACK_IMPORTED_MODULE_7__["SendReportModalComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _reuse_send_report_modal_send_report_modal_component__WEBPACK_IMPORTED_MODULE_7__["SendReportModalComponent"])
    ], ProfileComponent.prototype, "sendReportModal", void 0);
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/user/profile/profile.component.css"), __webpack_require__(/*! ./../../../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]])
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

module.exports = ".menu-bar{\r\n    margin: auto;\r\n    display: flex;\r\n    align-items: center;\r\n    height: 70px;\r\n    border-bottom: 1px solid rgba(0,0,0,0.15);\r\n}\r\n.menu-bar ul{\r\n    -webkit-padding-start: 7px;\r\n            padding-inline-start: 7px;\r\n    list-style: none;\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n}\r\n.menu-bar ul li{\r\n    display: inline-block;\r\n    text-align: center; \r\n    margin: 0px 13px;\r\n}\r\n.menu-bar ul li a{\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n    color: #287FB8;\r\n}\r\n.menu-bar ul li a:hover{\r\n    color: #ED6504;\r\n    cursor: pointer;\r\n}\r\n.menu-bar ul li .is-selected{\r\n    color: #ED6504;\r\n    font-weight: 600;\r\n}\r\n.item{\r\n    border-radius: 1rem;\r\n    border: 1px solid rgba(0,0,0,0.15);\r\n    background-color: #f8f8f8;\r\n    margin: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3Byb2ZpbGUvcmVmZXJlbmNlcy9yZWZlcmVuY2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1oseUNBQXlDO0FBQzdDO0FBQ0E7SUFDSSwwQkFBeUI7WUFBekIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGtDQUFrQztJQUNsQyx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9wcm9maWxlL3JlZmVyZW5jZXMvcmVmZXJlbmNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUtYmFye1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjE1KTtcclxufVxyXG4ubWVudS1iYXIgdWx7XHJcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogN3B4O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4ubWVudS1iYXIgdWwgbGl7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgbWFyZ2luOiAwcHggMTNweDtcclxufVxyXG4ubWVudS1iYXIgdWwgbGkgYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiAjMjg3RkI4O1xyXG59XHJcbi5tZW51LWJhciB1bCBsaSBhOmhvdmVye1xyXG4gICAgY29sb3I6ICNFRDY1MDQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm1lbnUtYmFyIHVsIGxpIC5pcy1zZWxlY3RlZHtcclxuICAgIGNvbG9yOiAjRUQ2NTA0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uaXRlbXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMTUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcclxuICAgIG1hcmdpbjogMjBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/user/profile/references/references.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/user/profile/references/references.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #loading>\r\n  <div class=\"box\">\r\n    <app-loading></app-loading>\r\n  </div>\r\n</ng-template>\r\n<ng-template #loading1>\r\n  <app-loading></app-loading>\r\n</ng-template>\r\n<ng-template #nothing>\r\n  <div class=\"nothing\">\r\n    <span>Nothing to show</span>\r\n  </div>\r\n</ng-template>\r\n<ng-container *ngIf=\"isLoading==false;else loading\">\r\n  <div class=\"box box-references\">\r\n    <div class=\"box-header\">\r\n      <span>REFERENCES</span>\r\n    </div>\r\n    <div class=\"content-references\">\r\n      <div class=\"menu-bar\">\r\n        <ul>\r\n          <li><a [ngClass]=\"{'is-selected':type=='all'}\" (click)=\"onClick('all')\"><span>All\r\n                ({{referencesres.length}})</span></a>\r\n          </li>\r\n          <li><a [ngClass]=\"{'is-selected':type=='positive'}\" (click)=\"onClick('positive')\"><span><i style=\"color:green\"\r\n                  class=\"fas fa-star\"></i> Positive\r\n                ({{positive.length}})</span></a>\r\n          </li>\r\n          <li><a [ngClass]=\"{'is-selected':type=='negative'}\" (click)=\"onClick('negative')\"><span>\r\n              <i style=\"color:red\"\r\n              class=\"fas fa-star\"></i> Negative ({{negative.length}})</span></a></li>\r\n\r\n        </ul>\r\n      </div>\r\n\r\n      <ng-container *ngIf=\"references.length;else nothing\">\r\n        <ng-container *ngFor=\"let reference of references\">\r\n          <div class=\"item\">\r\n            <app-reference [reference]=\"reference\"></app-reference>\r\n          </div>\r\n        </ng-container>\r\n      </ng-container>\r\n\r\n    </div>\r\n  </div>\r\n</ng-container>"

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

module.exports = ".your-trips{\r\n  margin-bottom: 5px;\r\n  border: 1px solid rgba(0,0,0,0.15);\r\n  border-radius: 16px;\r\n  padding-left: 30px;\r\n  /* background: rgb(25,192,221);\r\n  background: linear-gradient(90deg, rgba(25,192,221,0.6867121848739496) 0%, rgba(16,155,201,0.3981967787114846) 100%); */\r\n}\r\n\r\n.onClick{\r\n  background: #007bff;\r\n  color: white;\r\n}\r\n\r\n.your-trips:hover {\r\n  cursor: pointer;\r\n  background: #4c94e0;\r\n  color: white\r\n}\r\n\r\n.your-trips .name{\r\n  font-size: 1.3em;\r\n  font-weight: 500;\r\n  padding-right: 20px;\r\n}\r\n\r\n.your-trips .visiting{\r\n  font-size: 1em;\r\n  font-weight: 500;\r\n}\r\n\r\n.your-trips .trip-info{\r\n  clear: both;\r\n  padding: 10px 0px;\r\n}\r\n\r\n.your-trips .trip-info span{\r\n  padding-right: 10px;\r\n}\r\n\r\n.your-trips .trip-decription{\r\n  clear: both;\r\n  padding-bottom: 20px;\r\n  white-space: pre-wrap;\r\n}\r\n\r\n.your-trips .trip-decription::after{\r\n  content: '';\r\n  display: block;\r\n  clear: both;\r\n}\r\n\r\n.your-trips .trip-decription .content{\r\n  float: left;\r\n  width: 90%;\r\n}\r\n\r\n.your-trips .delete {\r\n  float: right;\r\n  width: 10%;\r\n}\r\n\r\n.your-trips .delete button{\r\n  transition: all 500ms;\r\n  opacity: 0.8;\r\n  -webkit-transform: scale(0.8);\r\n          transform: scale(0.8);\r\n}\r\n\r\n.your-trips .delete button:hover{\r\n  -webkit-transform: scale(1);\r\n          transform: scale(1);\r\n  opacity: 1;\r\n}\r\n\r\n.name:focus {\r\n  color: #365899;\r\n  text-decoration: underline;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3B1YmljLXRyaXAtY29udGVudC9wdWJpYy10cmlwLWNvbnRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQjt5SEFDdUg7QUFDekg7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osNkJBQXFCO1VBQXJCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDJCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9wdWJpYy10cmlwLWNvbnRlbnQvcHViaWMtdHJpcC1jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIueW91ci10cmlwc3tcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjE1KTtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAvKiBiYWNrZ3JvdW5kOiByZ2IoMjUsMTkyLDIyMSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1LDE5MiwyMjEsMC42ODY3MTIxODQ4NzM5NDk2KSAwJSwgcmdiYSgxNiwxNTUsMjAxLDAuMzk4MTk2Nzc4NzExNDg0NikgMTAwJSk7ICovXHJcbn1cclxuXHJcbi5vbkNsaWNre1xyXG4gIGJhY2tncm91bmQ6ICMwMDdiZmY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ueW91ci10cmlwczpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6ICM0Yzk0ZTA7XHJcbiAgY29sb3I6IHdoaXRlXHJcbn1cclxuXHJcbi55b3VyLXRyaXBzIC5uYW1le1xyXG4gIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ueW91ci10cmlwcyAudmlzaXRpbmd7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnlvdXItdHJpcHMgLnRyaXAtaW5mb3tcclxuICBjbGVhcjogYm90aDtcclxuICBwYWRkaW5nOiAxMHB4IDBweDtcclxufVxyXG5cclxuLnlvdXItdHJpcHMgLnRyaXAtaW5mbyBzcGFue1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi55b3VyLXRyaXBzIC50cmlwLWRlY3JpcHRpb257XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG59XHJcblxyXG4ueW91ci10cmlwcyAudHJpcC1kZWNyaXB0aW9uOjphZnRlcntcclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLnlvdXItdHJpcHMgLnRyaXAtZGVjcmlwdGlvbiAuY29udGVudHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4ueW91ci10cmlwcyAuZGVsZXRlIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgd2lkdGg6IDEwJTtcclxufVxyXG5cclxuLnlvdXItdHJpcHMgLmRlbGV0ZSBidXR0b257XHJcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zO1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbn1cclxuXHJcbi55b3VyLXRyaXBzIC5kZWxldGUgYnV0dG9uOmhvdmVye1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLm5hbWU6Zm9jdXMge1xyXG4gIGNvbG9yOiAjMzY1ODk5O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/user/pubic-trip-content/pubic-trip-content.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/user/pubic-trip-content/pubic-trip-content.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div id=\"title\"  [ngClass]=\"{'your-trips': true}\"   (click)=\"onPublicTripClick()\">\r\n    <div class=\"traveler-info\">\r\n      <span  class=\"name\">Public Trip {{stt}} </span><br>\r\n      <span>Visiting: </span><span class=\"visiting\">{{PublicTrip.trip.destination}}</span><br>\r\n    </div>\r\n\r\n    <div class=\"trip-info\">\r\n      <span><i class=\"far fa-calendar-alt\"></i></span>\r\n      <span>{{PublicTrip.trip.arrivalDate|date:\"dd/MM/yy\" }} <i class=\"fas fa-arrow-right\"></i>\r\n        {{PublicTrip.trip.departureDate|date:\"dd/MM/yy\"}}</span>\r\n      <span><i class=\"fas fa-user-friends\"></i></span><span>{{PublicTrip.trip.travelerNumber}} Traveler</span>\r\n    </div>\r\n    <div class=\"trip-decription\">\r\n      <div class=\"content\">\r\n          {{PublicTrip.trip.description}}\r\n      </div>\r\n\r\n      <div class=\"delete d-flex justify-content-center\" >\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-toggle=\"modal\" [attr.data-target]=\"'#id'+ id\"  (click)=\"notOnPublicTripClick()\">\r\n              <i class=\"fas fa-trash-alt\" data-toggle=\"modal\"></i>\r\n            </button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"modal fade\" id=\"id{{id}}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\" id=\"exampleModalLabel\">Delete public trip</h5>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\"></span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            Do you want to delete this pubic trip\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\r\n            <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"onDeleteTripClick()\">Delete</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n"

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
        this.PublicTrip = Object.assign({}, { trip: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.PublicTrip), user: this.PublicTrip.user });
        this.id = this.PublicTrip.trip.publicTripId;
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
        console.log(this.PublicTrip.trip.publicTripId);
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

module.exports = "legend, p{\r\n  width: 125px;\r\n  margin-left: 20px;\r\n}\r\n\r\nfieldset {\r\n  border-width: 2px;\r\n  border-style: groove;\r\n  border-color: threedface;\r\n  -o-border-image: initial;\r\n     border-image: initial;\r\n}\r\n\r\n.onClick{\r\n  background: #007bff;\r\n  color: white;\r\n}\r\n\r\n.output {\r\n  font: 1rem 'Fira Sans', sans-serif;\r\n}\r\n\r\ninput {\r\n  margin: .4rem;\r\n}\r\n\r\n.content{\r\n  background: white;\r\n  padding-bottom: 15px;\r\n\r\n}\r\n\r\n.PublicTrip{\r\n  max-height: 450px;\r\n  overflow-y: scroll;\r\n  overflow-wrap: break-word;\r\n}\r\n\r\n.form-row {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.col{\r\n  position: unset;\r\n\r\n}\r\n\r\ninput, select{\r\n  margin: 0px;\r\n  padding: 0 5px;\r\n}\r\n\r\n.relative {\r\n  position: relative;\r\n}\r\n\r\n.relative .dropdown{\r\n  position: absolute;\r\n  width: 100%;\r\n  max-height: 150px;\r\n  overflow-y: scroll;\r\n\r\n}\r\n\r\n.relative .dropdown ul {\r\n  padding: 0;\r\n}\r\n\r\n.relative .dropdown ul li:hover{\r\n  background: #DDD;\r\n  cursor: pointer;\r\n}\r\n\r\n.input-focus:focus{\r\n\r\n  box-shadow: none;\r\n\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3B1YmxpYy10cmlwL3B1YmxpYy10cmlwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIsd0JBQXFCO0tBQXJCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9COztBQUV0Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUdBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTs7QUFFakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFDQTs7RUFFRSxnQkFBZ0I7O0FBRWxCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyL3B1YmxpYy10cmlwL3B1YmxpYy10cmlwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsZWdlbmQsIHB7XHJcbiAgd2lkdGg6IDEyNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG5maWVsZHNldCB7XHJcbiAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBncm9vdmU7XHJcbiAgYm9yZGVyLWNvbG9yOiB0aHJlZWRmYWNlO1xyXG4gIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcclxufVxyXG5cclxuLm9uQ2xpY2t7XHJcbiAgYmFja2dyb3VuZDogIzAwN2JmZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5vdXRwdXQge1xyXG4gIGZvbnQ6IDFyZW0gJ0ZpcmEgU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBtYXJnaW46IC40cmVtO1xyXG59XHJcblxyXG4uY29udGVudHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuXHJcbn1cclxuXHJcbi5QdWJsaWNUcmlwe1xyXG4gIG1heC1oZWlnaHQ6IDQ1MHB4O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG59XHJcblxyXG5cclxuLmZvcm0tcm93IHtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uY29se1xyXG4gIHBvc2l0aW9uOiB1bnNldDtcclxuXHJcbn1cclxuXHJcbmlucHV0LCBzZWxlY3R7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbn1cclxuXHJcbi5yZWxhdGl2ZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucmVsYXRpdmUgLmRyb3Bkb3due1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiAxNTBweDtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcblxyXG59XHJcblxyXG4ucmVsYXRpdmUgLmRyb3Bkb3duIHVsIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ucmVsYXRpdmUgLmRyb3Bkb3duIHVsIGxpOmhvdmVye1xyXG4gIGJhY2tncm91bmQ6ICNEREQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5pbnB1dC1mb2N1czpmb2N1c3tcclxuXHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/user/public-trip/public-trip.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/user/public-trip/public-trip.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\" style=\"margin-bottom: 10px;\">\r\n  <div class=\"col-sm-7 content box \">\r\n\r\n\r\n\r\n\r\n    <div class=\"d-flex justify-content-center text-secondary m-3\" *ngIf=\"!publicTrips;else show\">\r\n      <div class=\"spinner-border\" role=\"status\" style=\"width: 3em; height: 3em;\">\r\n        <span class=\"sr-only\">Loading...</span>\r\n      </div>\r\n    </div>\r\n\r\n    <ng-template #show>\r\n\r\n\r\n        <h1>Public Trips</h1>\r\n        <hr style=\"border-top: 3px solid rgba(0, 0, 0, 0.1);\" />\r\n        <div class=\"PublicTrip\">\r\n          <ng-container *ngIf=\"publicTrips.length > 0;else noPublicTrip\">\r\n\r\n            <app-pubic-trip-content  *ngFor=\"let publicTrip of publicTrips; let id = index\" [PublicTrip]=\"publicTrip\"\r\n              [stt]=\"id + 1\" (idTrip)=\"onClickPublicTrip($event)\" (idTripDelete)=\"onClickDeleteTrip($event)\">\r\n            </app-pubic-trip-content>\r\n\r\n\r\n          </ng-container>\r\n\r\n          <ng-template #noPublicTrip>\r\n            <div class=\"alert alert-primary\" role=\"alert\">\r\n              You have not public trip\r\n            </div>\r\n          </ng-template>\r\n        </div>\r\n\r\n    </ng-template>\r\n  </div>\r\n\r\n  <div style=\"width: 40px;\"></div>\r\n\r\n  <div class=\"col-sm-4 content box\" style=\"margin-bottom: 10px; padding-bottom: 15px\">\r\n    <!-- <fieldset style=\"padding: 15px\"> -->\r\n    <h1>Trip's Detail</h1>\r\n    <hr style=\"border-top: 3px solid rgba(0, 0, 0, 0.1);\" />\r\n\r\n    <form [formGroup]=\"formUser\" autocomplete=\"off\" novalidate=\"true\" (ngSubmit)=\"onSubmitForm()\">\r\n      <span style=\"margin: 0.5rem\">Destination <span style=\"color: red\">*</span> </span>\r\n      <div class=\"form-row\">\r\n        <div class=\"col relative\">\r\n\r\n\r\n\r\n          <input type=\"button\" class=\"form-control input-focus\" style=\"padding-left: 20px; cursor: text;\"\r\n            (click)=\"showform=true;showsearch();\" [(ngModel)]=\"des\" formControlName=\"destination\">\r\n          <div class=\"back-drop-header\" (click)=\"showform=false\" *ngIf=\"showform\">\r\n          </div>\r\n          <div class=\"back-drop\" (click)=\"showform=false\" *ngIf=\"showform\">\r\n          </div>\r\n          <form style=\"position:relative;z-index: 901;\" autocomplete=\"off\">\r\n            <input #search name=\"search\" [(ngModel)]=\"addressInput\" class=\"form-control\" (keyup)=\"onKeyup();\"\r\n              style=\" position:absolute;bottom: 0px ;padding-left: 20px;\"\r\n              [style.display]=\"showform &&issearch?'unset':'none'\">\r\n            <app-dropdown [type]=\"'select'\" (myClick)=\"showform=false;formUser.get('destination').setValue($event);\"\r\n              [searchedSubject]=\"searchedSubject\"></app-dropdown>\r\n          </form>\r\n\r\n          <label class=\"text-danger\"\r\n            *ngIf=\"formUser.controls.destination.dirty && formUser.controls.destination.errors?.required\">This field\r\n            is mandatory.</label>\r\n\r\n          <!-- <div class=\"dropdown list-group\" *ngIf=\"this.places.length > 0\">\r\n              <ul>\r\n                <li class=\"list-group-item\" *ngFor=\"let place of places\" (click)=\"onClickPlace(place)\">{{place}}</li>\r\n              </ul>\r\n            </div> -->\r\n\r\n        </div>\r\n        <!-- <div class=\" col\">\r\n            <input type=\"text\" class=\"form-control\"  placeholder=\"City\">\r\n          </div> -->\r\n      </div>\r\n\r\n      <!-- <div class=\"form-row\" style=\"margin-right: 10px\">\r\n          <div class=\"col\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"State/Province\">\r\n          </div>\r\n          <div class=\"col \">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Country\">\r\n          </div>\r\n        </div> -->\r\n\r\n\r\n\r\n      <div class=\"form-row\">\r\n\r\n        <div class=\"col\" >\r\n          <span style=\"margin: 0.5rem\">Arrival Date <span style=\"color: red\">*</span> </span>\r\n          <input #arrivaldate min=\"{{now| date:'yyyy-MM-dd'}}\" type=\"date\" class=\"form-control\" [(ngModel)]=\"trip.arrivalDate\" formControlName=\"arrivalDate\">\r\n          <label  class=\"text-danger\"\r\n            *ngIf=\"formUser.controls.arrivalDate.dirty && formUser.controls.arrivalDate.errors?.required\">This field\r\n            is mandatory.</label>\r\n        </div>\r\n        <div class=\"col\" style=\"margin-left: 5px;\">\r\n            <span style=\"margin: 0.5rem\">Departure Date <span style=\"color: red\">*</span> </span>\r\n            <input  [min]=\"arrivaldate.value\"  type=\"date\" class=\"form-control\" [(ngModel)]=\"trip.departureDate\" formControlName=\"departureDate\">\r\n            <label class=\"text-danger\"\r\n              *ngIf=\"formUser.controls.departureDate.dirty && formUser.controls.departureDate.errors?.required\">This\r\n              field is mandatory.</label>\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"form-row\">\r\n        <div class=\"col\">\r\n          <span style=\"margin: 0.5rem\">Traveler Number <span style=\"color: red\">*</span> </span>\r\n          <select class=\"form-control\" id=\"\" [(ngModel)]=\"trip.travelerNumber\" formControlName=\"travelerNumber\">\r\n            <option value=\"1\">1</option>\r\n            <option value=\"2\">2</option>\r\n            <option value=\"3\">3</option>\r\n            <option value=\"4\">4</option>\r\n            <option value=\"5\">5</option>\r\n          </select>\r\n          <label class=\"text-danger\"\r\n            *ngIf=\"formUser.controls.travelerNumber.dirty && formUser.controls.travelerNumber.errors?.required\">This\r\n            field is mandatory.</label>\r\n        </div>\r\n        <div class=\"col\"></div>\r\n      </div>\r\n\r\n      <div class=\"form-row\">\r\n        <div class=\"col\">\r\n          <textarea rows=\"5\" class=\"form-control\" placeholder=\"Description about the trip\"\r\n            [(ngModel)]=\"trip.description\" formControlName=\"description\"></textarea>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- <input type=\"text\" list=\"browsers\">\r\n        <datalist id=\"browsers\">\r\n          <option value=\"Internet Explorer\">\r\n          <option value=\"Firefox\">\r\n          <option value=\"Chrome\">\r\n          <option value=\"Opera\">\r\n        </datalist> -->\r\n\r\n\r\n      <div class=\"form-row \">\r\n        <div class=\"col d-flex justify-content-end\">\r\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"formUser.invalid\">Add</button>\r\n        </div>\r\n        <div class=\"col d-flex justify-content-center \">\r\n          <button type=\"button\" class=\"btn btn-success\" [disabled]=\"formUser.invalid\"\r\n            (click)=\"onUpdatePublicTrip()\">Update</button>\r\n        </div>\r\n        <div class=\"col d-flex justify-content-start \">\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"onClearForm()\">Clear</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"d-flex justify-content-center\">\r\n        <span class=\"text-success  \" *ngIf=\"click && check\">{{textBtn}} success</span>\r\n        <span class=\"text-danger \" *ngIf=\"click && !check\">{{textBtn}} failed\r\n          {{textBtn === 'Update' && check === false ? '(you must submit before update)' : '' }}</span>\r\n\r\n      </div>\r\n\r\n\r\n\r\n    </form>\r\n    <!-- </fieldset> -->\r\n  </div>\r\n</div>\r\n"

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
        this.now = new Date();
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var submit;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //this.formUser.value.travelerNumber = Number.parseInt(this.formUser.value.travelerNumber);
                        console.log(this.formUser);
                        return [4 /*yield*/, this.userService.postPublicTrip(this.formUser.value).toPromise().catch(function (err) {
                                console.log(err);
                            })];
                    case 1:
                        submit = _a.sent();
                        // this.router.navigate(['PublicTrip'], {relativeTo: this.activate.parent});
                        if (submit) {
                            this.toastr.success('New public trip created', 'Create public trip success');
                            this.formUser.reset();
                            this.idTrip = null;
                            this.check = true;
                            this.click = true;
                        }
                        else {
                            this.toastr.error('Create public trip failed', 'Error');
                            this.check = false;
                            this.click = true;
                        }
                        this.textBtn = 'Submit';
                        this.load();
                        return [2 /*return*/];
                }
            });
        });
    };
    PublicTripComponent.prototype.onUpdatePublicTrip = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var update;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.idTrip) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.userService.putPublicTripById(this.idTrip, this.formUser.value).toPromise().catch(function (err) {
                                console.log(err);
                            })];
                    case 1:
                        update = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (update) {
                            this.check = true;
                            this.formUser.reset();
                            this.toastr.success('Updated pubic trip', 'Update public trip success');
                            this.click = true;
                        }
                        else {
                            if (!this.idTrip) {
                                this.check = false;
                            }
                            this.click = true;
                            this.toastr.error('Update pubic trip failed', 'Error');
                        }
                        this.textBtn = 'Update';
                        this.load();
                        return [2 /*return*/];
                }
            });
        });
    };
    PublicTripComponent.prototype.onClickDeleteTrip = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var del;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isDelete = true;
                        console.log(id);
                        return [4 /*yield*/, this.userService.deletePublicTripById(id).toPromise().catch(function (err) {
                                console.log(err);
                                return err;
                            })];
                    case 1:
                        del = _a.sent();
                        console.log(del);
                        if (!del) {
                            this.idTrip = null;
                            this.toastr.success('Delete pubic trip', 'Delete public trip success');
                            this.load();
                        }
                        else {
                            this.toastr.error('Delete pubic trip failed', 'Error');
                        }
                        return [2 /*return*/];
                }
            });
        });
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

/***/ "./src/app/components/user/reuse/carousel-modal/carousel-modal.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/user/reuse/carousel-modal/carousel-modal.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.carousel-header{\r\n    \r\n    padding: 10px 20px;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.button-bar .delbtn{\r\n    outline-style: none;\r\n    border: none;\r\n    background: none;\r\n    padding: 0px;\r\n    margin-right: 20px;\r\n    color: white;\r\n}\r\n.button-bar .delbtn:hover{\r\n    cursor: pointer;\r\n    color: #ED6504;\r\n}\r\n.button-bar{\r\n    margin-left: auto;\r\n}\r\n.carousel-header span,h4{\r\ncolor: white;\r\n\r\n}\r\n.info{\r\n    padding-left: 30px;\r\n     font-style: italic;\r\n     color: #cbc3c3;\r\n}\r\n.carousel-footer {\r\n    \r\n    display: flex;\r\n    align-items: center;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    padding-top: 20px;\r\n\r\n}\r\n.carousel-footer ul{\r\n    -webkit-margin-before: 0px;\r\n            margin-block-start: 0px;\r\n    -webkit-margin-after: 10px;\r\n            margin-block-end: 10px;\r\n    -webkit-padding-start: 0px;\r\n            padding-inline-start: 0px;\r\n    list-style: none;\r\n    white-space: nowrap;\r\n}\r\n.carousel-footer ul li:first-child{\r\n    display: inline-block;\r\n    padding-left: 0px;\r\n}\r\n.carousel-footer ul li{\r\n    display: inline-block;\r\n    padding: 5px;\r\n}\r\n.thumbnail{\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    cursor: pointer;\r\n    width: 100px;\r\n    height: 100px;\r\n}\r\n.thumbnail:hover{\r\n    border: 1px solid white;\r\n}\r\n.thumbnail-active{\r\n    border: 1px solid white;\r\n}\r\n.carousel-body{\r\n    display: flex;\r\n    align-items: center;\r\n    flex: 1 1 auto; \r\n    padding: 20px;\r\n\r\n}\r\n.view{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding-bottom: 158px;\r\n    padding-top: 66px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    display: flex;\r\n    align-items: center;\r\n\r\n}\r\n.background{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.img-view{\r\n    margin: auto;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    max-height: 100%;\r\n    max-width: 100%;\r\n    \r\n}\r\n.next{\r\n    margin-left: auto;\r\n}\r\n.previous button,.next button{\r\n    width: 50px;\r\n    height: 50px;\r\n    background: none;\r\n    border: none;\r\n    outline-style: none;\r\n}\r\n.previous button:hover,.next button:hover{\r\n    background: rgba(0, 0, 0, 0.5);\r\n}\r\n.previous button i,.next button i{\r\n   font-size: 40px;\r\n   color: white;\r\n}\r\n.content{\r\n    overflow-x: auto;\r\n}\r\n.content::-webkit-scrollbar-track\r\n{\r\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n\tborder-radius: 8px;\r\n\tbackground-color: #F5F5F5;\r\n}\r\n.content::-webkit-scrollbar\r\n{\r\n    height: 8px;\r\n    border-radius: 8px;\r\n\tbackground-color: #F5F5F5;\r\n}\r\n.content::-webkit-scrollbar-thumb\r\n{\r\n\tborder-radius: 8px;\r\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\r\n\tbackground-color: #555;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3JldXNlL2Nhcm91c2VsLW1vZGFsL2Nhcm91c2VsLW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztJQUVJLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7QUFDQSxZQUFZOztBQUVaO0FBQ0E7SUFDSSxrQkFBa0I7S0FDakIsa0JBQWtCO0tBQ2xCLGNBQWM7QUFDbkI7QUFJQTs7SUFFSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxpQkFBaUI7O0FBRXJCO0FBQ0E7SUFDSSwwQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLDBCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsMEJBQXlCO1lBQXpCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksb0JBQWlCO09BQWpCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxhQUFhOztBQUVqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFlBQVk7SUFDWixvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlOztBQUVuQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSw4QkFBOEI7QUFDbEM7QUFDQTtHQUNHLGVBQWU7R0FDZixZQUFZO0FBQ2Y7QUFHQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBOztDQUVDLGlEQUFpRDtDQUNqRCxrQkFBa0I7Q0FDbEIseUJBQXlCO0FBQzFCO0FBQ0E7O0lBRUksV0FBVztJQUNYLGtCQUFrQjtDQUNyQix5QkFBeUI7QUFDMUI7QUFFQTs7Q0FFQyxrQkFBa0I7Q0FDbEIsZ0RBQWdEO0NBQ2hELHNCQUFzQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9yZXVzZS9jYXJvdXNlbC1tb2RhbC9jYXJvdXNlbC1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jYXJvdXNlbC1oZWFkZXJ7XHJcbiAgICBcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5idXR0b24tYmFyIC5kZWxidG57XHJcbiAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uYnV0dG9uLWJhciAuZGVsYnRuOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICNFRDY1MDQ7XHJcbn1cclxuLmJ1dHRvbi1iYXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG4uY2Fyb3VzZWwtaGVhZGVyIHNwYW4saDR7XHJcbmNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuLmluZm97XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgIGNvbG9yOiAjY2JjM2MzO1xyXG59XHJcblxyXG5cclxuXHJcbi5jYXJvdXNlbC1mb290ZXIge1xyXG4gICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG5cclxufVxyXG4uY2Fyb3VzZWwtZm9vdGVyIHVse1xyXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwcHg7XHJcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxMHB4O1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbi5jYXJvdXNlbC1mb290ZXIgdWwgbGk6Zmlyc3QtY2hpbGR7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG4uY2Fyb3VzZWwtZm9vdGVyIHVsIGxpe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbi50aHVtYm5haWx7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn1cclxuLnRodW1ibmFpbDpob3ZlcntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcbi50aHVtYm5haWwtYWN0aXZle1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1ib2R5e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4OiAxIDEgYXV0bzsgXHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG5cclxufVxyXG4udmlld3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1OHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDY2cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcbi5iYWNrZ3JvdW5ke1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5pbWctdmlld3tcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIFxyXG59XHJcbi5uZXh0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuLnByZXZpb3VzIGJ1dHRvbiwubmV4dCBidXR0b257XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xyXG59XHJcbi5wcmV2aW91cyBidXR0b246aG92ZXIsLm5leHQgYnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcbi5wcmV2aW91cyBidXR0b24gaSwubmV4dCBidXR0b24gaXtcclxuICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4uY29udGVudHtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuLmNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrXHJcbntcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjMpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG59XHJcbi5jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhclxyXG57XHJcbiAgICBoZWlnaHQ6IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG59XHJcblxyXG4uY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJcclxue1xyXG5cdGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwuMyk7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzU1NTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/user/reuse/carousel-modal/carousel-modal.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/user/reuse/carousel-modal/carousel-modal.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content>\r\n  <div class=\"view\">\r\n    <img *ngIf=\"activePhoto\" style=\"z-index: 7;\" class=\"img-view\" [src]=\"activePhoto.location\">\r\n  </div>\r\n  <div class=\"background\" style=\"z-index: 5;\" (click)=\"modalRef.close()\">\r\n\r\n  </div>\r\n  <div class=\"carousel-header\" style=\"z-index: 100;\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Photo</h4>\r\n    <span class=\"info\"> {{index+1}}/{{photos.length}}</span>\r\n    <span class=\"info\">Upload Date:\r\n      {{activePhoto.createDate| date:'dd/MM/yyyy'}}</span>\r\n\r\n    <div class=\"button-bar\">\r\n      <button *ngIf=\"activePhoto && isUser\" class=\"delbtn\" (click)=\"opendeleteModal()\">Delete Photo</button>\r\n      <button class=\"close\" (click)=\"modalRef.close()\">\r\n        <span><i class=\"fas fa-times\"></i></span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"carousel-body\">\r\n\r\n    <div class=\"previous\" style=\"z-index: 100;\">\r\n      <button *ngIf=\"!(index==0)\" (click)=\"action('previous');\"><i class=\"fas fa-chevron-left\"></i></button>\r\n    </div>\r\n\r\n\r\n    <div class=\"next\" style=\"z-index: 100;\">\r\n      <button *ngIf=\"!(index==photos.length-1)\" (click)=\"action('next');\"><i class=\"fas fa-chevron-right\"></i></button>\r\n    </div>\r\n\r\n\r\n  </div>\r\n  <div class=\"carousel-footer\" style=\"z-index: 100;\">\r\n    <div class=\"previous\" style=\"padding-right: 5px;\">\r\n      <button  (click)=\"content.scrollTo({left:(content.scrollLeft - 500),behavior: 'smooth'})\"><i\r\n          class=\"fas fa-chevron-left\"></i></button>\r\n    </div>\r\n    <div class=\"content\" #content id=\"content\">\r\n      <ul>\r\n        <ng-container *ngFor=\"let photo of photos; index as i\">\r\n          <li id=\"item_{{i}}\">\r\n            <img [ngClass]=\"{'thumbnail-active':i==index}\" (click)=\"onclick(photo,i)\" class=\"thumbnail\"\r\n              [src]=\"photo.location\">\r\n          </li>\r\n        </ng-container>\r\n      </ul>\r\n    </div>\r\n    <div class=\"next\" style=\"padding-left: 5px;\">\r\n      <button  (click)=\"content.scrollTo({left:(content.scrollLeft + 500),behavior: 'smooth'})\"><i\r\n          class=\"fas fa-chevron-right\"></i></button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n<app-delete-modal (myClick)=\"deletePhoto()\"></app-delete-modal>"

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
/* harmony import */ var _delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../delete-modal/delete-modal.component */ "./src/app/components/user/reuse/delete-modal/delete-modal.component.ts");






var CarouselModalComponent = /** @class */ (function () {
    function CarouselModalComponent(service, toast, modalService) {
        this.service = service;
        this.toast = toast;
        this.modalService = modalService;
        this.myclick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
        //console.log(window.document.getElementById('content').scrollLeft);
    };
    CarouselModalComponent.prototype.opendeleteModal = function () {
        this.deleteModal.open();
    };
    CarouselModalComponent.prototype.deletePhoto = function () {
        var _this = this;
        this.service.deletePhoto(this.activePhoto.photoId).subscribe(function (res) {
            if (res.status === 204) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_5__["DeleteModalComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_5__["DeleteModalComponent"])
    ], CarouselModalComponent.prototype, "deleteModal", void 0);
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
            styles: [__webpack_require__(/*! ./carousel-modal.component.css */ "./src/app/components/user/reuse/carousel-modal/carousel-modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], CarouselModalComponent);
    return CarouselModalComponent;
}());



/***/ }),

/***/ "./src/app/components/user/reuse/delete-modal/delete-modal.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/user/reuse/delete-modal/delete-modal.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9yZXVzZS9kZWxldGUtbW9kYWwvZGVsZXRlLW1vZGFsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/user/reuse/delete-modal/delete-modal.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/user/reuse/delete-modal/delete-modal.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Delete Photo</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalRef.close()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  \r\n  <div class=\"modal-body\">\r\n    Are you sure?\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modalRef.close()\">Cancel</button>\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"onDelete()\">Delete</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/components/user/reuse/delete-modal/delete-modal.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/user/reuse/delete-modal/delete-modal.component.ts ***!
  \******************************************************************************/
/*! exports provided: DeleteModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteModalComponent", function() { return DeleteModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var DeleteModalComponent = /** @class */ (function () {
    function DeleteModalComponent(modalService) {
        this.modalService = modalService;
        this.myClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DeleteModalComponent.prototype.ngOnInit = function () {
    };
    DeleteModalComponent.prototype.open = function () {
        this.modalRef = this.modalService.open(this.content, { windowClass: 'modal-holder' });
    };
    DeleteModalComponent.prototype.onDelete = function () {
        this.myClick.emit();
        this.modalRef.close();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DeleteModalComponent.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DeleteModalComponent.prototype, "myClick", void 0);
    DeleteModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-modal',
            template: __webpack_require__(/*! ./delete-modal.component.html */ "./src/app/components/user/reuse/delete-modal/delete-modal.component.html"),
            styles: [__webpack_require__(/*! ./delete-modal.component.css */ "./src/app/components/user/reuse/delete-modal/delete-modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], DeleteModalComponent);
    return DeleteModalComponent;
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

/***/ "./src/app/components/user/reuse/item-activity/item-activity.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/user/reuse/item-activity/item-activity.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item{\r\n    border: solid 1px rgba(0,0,0,0.15);\r\n    border-radius: 25px;\r\n    margin-bottom: 20px;\r\n}\r\n.item a{\r\n color: #27374c;\r\n}\r\n.item a:hover{\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    color: #ED6504;\r\n}\r\n.activity-info,.message,.action{\r\n    padding: 0;\r\n}\r\n.activity-info{\r\n    min-width: 280px;\r\n   \r\n    /* background-color: #f0f0f0; */\r\n    margin-bottom: 20px;\r\n}\r\n.activity{\r\n    margin: 0;\r\n    padding: 20px;\r\n}\r\n.card-info{\r\n    display: flex;\r\n}\r\n.card-info p{\r\n    margin-bottom:  0px;\r\n}\r\n.card-info .name{\r\n    font-size: 1.3em;\r\n    font-weight: 500;\r\n}\r\n.info{\r\n    padding-right: 20px;\r\n    word-break: break-all;\r\n}\r\n.avatar{\r\n    padding-right: 20px;\r\n}\r\n.avatar img{\r\n    height: 70px;\r\n    width: 70px;\r\n    border-radius: 50%;\r\n}\r\n.trip-info{\r\n    clear: both;\r\n    padding-bottom: 15px;\r\n}\r\n.content-message{\r\n    padding: 10px;\r\n    background-color: #f0f0f0;\r\n    position: relative;\r\n    border-radius: 5px;\r\n}\r\n.content-message-sent{\r\n    padding: 10px;\r\n    position: relative;\r\n    border-radius: 5px;\r\n    border: solid 1px rgba(0,0,0,0.15);\r\n}\r\n.content-message::after{\r\n    border-bottom: 25px solid transparent;\r\n    border-left: 25px solid transparent;\r\n    border-top: 25px solid #f0f0f0;\r\n    content: '';\r\n    left: -15px;\r\n    position: absolute;\r\n    top: 0px;\r\n}\r\n.trip-info span{\r\n    padding-right: 10px;\r\n    \r\n}\r\n.trip-decription{\r\n   clear: both;\r\n   word-wrap: break-word;\r\n   white-space: pre-wrap;\r\n   max-height: 4.5em;\r\n   overflow: hidden; \r\n  transition: max-height 0.5s; \r\n\r\n}\r\n.trip-decription p{\r\n    margin-bottom: 0px; \r\n}\r\n.button-decription{\r\n    padding-top: 5px;\r\n    display: flex; \r\n    \r\n}\r\n.button-decription a{\r\ncolor: #287FB8;;\r\nfont-weight: 600;\r\n}\r\n.button-decription a:hover{\r\n    cursor: pointer;\r\n    color: #ED6504;\r\n}\r\n.action{\r\n    min-width: 200px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.time{\r\n    padding-left: 10px;\r\n    margin-top: auto;\r\n    padding-top: 20px;\r\n    margin-left: auto;\r\n}\r\n.button-bar{\r\n    padding-top: 20px;\r\n    margin-left: auto;\r\n   \r\n}\r\n.button-bar button{\r\n    \r\n    margin-left: 10px;\r\n}\r\n.time p{\r\n    font-size: 0.8em;\r\n    font-style: italic;\r\n    margin-bottom: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3JldXNlL2l0ZW0tYWN0aXZpdHkvaXRlbS1hY3Rpdml0eS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0NBQWtDO0lBQ2xDLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGdCQUFnQjs7SUFFaEIsK0JBQStCO0lBQy9CLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksU0FBUztJQUNULGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLHFDQUFxQztJQUNyQyxtQ0FBbUM7SUFDbkMsOEJBQThCO0lBQzlCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFFBQVE7QUFDWjtBQUNBO0lBQ0ksbUJBQW1COztBQUV2QjtBQUVBO0dBQ0csV0FBVztHQUNYLHFCQUFxQjtHQUNyQixxQkFBcUI7R0FDckIsaUJBQWlCO0dBQ2pCLGdCQUFnQjtFQUNqQiwyQkFBMkI7O0FBRTdCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhOztBQUVqQjtBQUNBO0FBQ0EsY0FBYztBQUNkLGdCQUFnQjtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7O0FBRXJCO0FBQ0E7O0lBRUksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9yZXVzZS9pdGVtLWFjdGl2aXR5L2l0ZW0tYWN0aXZpdHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVte1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgwLDAsMCwwLjE1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5pdGVtIGF7XHJcbiBjb2xvcjogIzI3Mzc0YztcclxufVxyXG4uaXRlbSBhOmhvdmVye1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICNFRDY1MDQ7XHJcbn1cclxuLmFjdGl2aXR5LWluZm8sLm1lc3NhZ2UsLmFjdGlvbntcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLmFjdGl2aXR5LWluZm97XHJcbiAgICBtaW4td2lkdGg6IDI4MHB4O1xyXG4gICBcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7ICovXHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5hY3Rpdml0eXtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLmNhcmQtaW5mb3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmNhcmQtaW5mbyBwe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogIDBweDtcclxufVxyXG4uY2FyZC1pbmZvIC5uYW1le1xyXG4gICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLmluZm97XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG59XHJcbi5hdmF0YXJ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi5hdmF0YXIgaW1ne1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLnRyaXAtaW5mb3tcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuLmNvbnRlbnQtbWVzc2FnZXtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5jb250ZW50LW1lc3NhZ2Utc2VudHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDAsMCwwLDAuMTUpO1xyXG59XHJcbi5jb250ZW50LW1lc3NhZ2U6OmFmdGVye1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMjVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1sZWZ0OiAyNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXRvcDogMjVweCBzb2xpZCAjZjBmMGYwO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBsZWZ0OiAtMTVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG59XHJcbi50cmlwLWluZm8gc3BhbntcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBcclxufVxyXG5cclxuLnRyaXAtZGVjcmlwdGlvbntcclxuICAgY2xlYXI6IGJvdGg7XHJcbiAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICBtYXgtaGVpZ2h0OiA0LjVlbTtcclxuICAgb3ZlcmZsb3c6IGhpZGRlbjsgXHJcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjVzOyBcclxuXHJcbn1cclxuLnRyaXAtZGVjcmlwdGlvbiBwe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4OyBcclxufVxyXG4uYnV0dG9uLWRlY3JpcHRpb257XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBcclxufVxyXG4uYnV0dG9uLWRlY3JpcHRpb24gYXtcclxuY29sb3I6ICMyODdGQjg7O1xyXG5mb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5idXR0b24tZGVjcmlwdGlvbiBhOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICNFRDY1MDQ7XHJcbn1cclxuLmFjdGlvbntcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4udGltZXtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcbi5idXR0b24tYmFye1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgXHJcbn1cclxuLmJ1dHRvbi1iYXIgYnV0dG9ue1xyXG4gICAgXHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4udGltZSBwe1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/user/reuse/item-activity/item-activity.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/user/reuse/item-activity/item-activity.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"item\">\r\n    <div class=\"activity row\">\r\n        <div class=\"activity-info col-sm-12 col-md-3\">\r\n            <div class=\"card-info\">\r\n                <div class=\"avatar\">\r\n                    <a routerLink=\"/Users/People/{{data.select==='received'?item.sender.id:item.receiver.id}}\">\r\n                        <img [src]=\"data.select==='received'?item.sender.avatarLocation:item.receiver.avatarLocation\"></a>\r\n                </div>\r\n                <div class=\"info\">\r\n                    <a routerLink=\"/Users/People/{{data.select==='received'?item.sender.id:item.receiver.id}}\">\r\n                        <p class=\"name\">\r\n                            {{data.select==='received'?item.sender.fullName:item.receiver.fullName}}</p>\r\n                    </a>\r\n                    <p>{{data.select==='received'?item.sender.address:item.receiver.address}}</p>\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n        <div *ngIf=\"data.type!='friendrequest'\" class=\"message col-md col-sm-12\">\r\n            <div class=\"trip-info\">\r\n                <span><i class=\"far fa-calendar-alt\"></i></span>\r\n                <span>{{item.arrivalDate|date:\"dd/MM/yyyy\" }} <i class=\"fas fa-arrow-right\"></i>\r\n                    {{item.departureDate|date:\"dd/MM/yyyy\"}}</span>\r\n                <span><i class=\"fas fa-user-friends\"></i></span><span>{{item.travelerNumber}} Traveler</span>\r\n            </div>\r\n            <div class=\"content-message\"\r\n                [ngClass]=\"{'content-message':data.select=='received','content-message-sent':data.select=='sent'}\">\r\n                <div class=\"trip-decription\" (window:resize)=\"onResize($event)\"\r\n                    [ngStyle]=\"x && {'max-height.em':height}\">\r\n                    <p #des>{{item.message}}</p>\r\n                </div>\r\n                <div class=\"button-decription\" *ngIf=\"show\">\r\n                    <a style=\"margin-left:auto\" (click)=\"x=!x\">{{x?'[-]Read Less':'[+]Read More'}}</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"action col-lg-2 col-md-12\">\r\n            <div class=\"button-bar\">\r\n                <button *ngIf=\"data.select=='received'\" [disabled]=\"item.isAccepted || isdiabled\" (click)=\"onAccept()\"\r\n                    [ngClass]=\"item.isAccepted?'btn-success':'btn-primary'\"\r\n                    class=\"btn \">{{item.isAccepted?'Accepted':'Accept'}}</button>\r\n                <button *ngIf=\"data.select=='received'\" [disabled]=\"isdiabled\" (click)=\"onIgnore()\"\r\n                    class=\"btn btn-danger\">Ignore</button>\r\n                <button *ngIf=\"data.select=='sent'\" [disabled]=\"isdiabled\" (click)=\"onCancel()\"\r\n                    class=\"btn btn-danger\">Cancel</button>\r\n            </div>\r\n            <div class=\"time\">\r\n                <p>{{item.createDate|formatDate:'dd/MM/yyyy HH:mm'}}</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user/reuse/item-activity/item-activity.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/user/reuse/item-activity/item-activity.component.ts ***!
  \********************************************************************************/
/*! exports provided: ItemActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemActivityComponent", function() { return ItemActivityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");




var ItemActivityComponent = /** @class */ (function () {
    function ItemActivityComponent(service, toast) {
        this.service = service;
        this.toast = toast;
        this.myClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.show = false;
    }
    ItemActivityComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log(this.data)
        if (this.data.type != 'friendrequest')
            setTimeout(function () {
                _this.onResize(event);
            }, 0);
    };
    ItemActivityComponent.prototype.onResize = function (event) {
        var fontsizestr = getComputedStyle(this.des.nativeElement).fontSize;
        var fontsize = parseInt(fontsizestr.slice(0, fontsizestr.length - 2));
        this.height = this.des.nativeElement.offsetHeight / fontsize;
        this.show = (this.height > 4.5);
    };
    ItemActivityComponent.prototype.onAccept = function () {
        var _this = this;
        this.isdiabled = true;
        if (this.data.type == 'travelrequest') {
            this.service.acceptRequest(this.item.travelRequestId).subscribe(function (res) {
                _this.toast.success('Accepted');
                _this.item.isAccepted = res.isAccepted;
                _this.isdiabled = false;
                console.log(res);
            });
        }
        else if (this.data.type == 'hostoffer') {
            this.service.acceptHostOffer(this.item.hostOfferId).subscribe(function (res) {
                _this.toast.success('Accepted');
                _this.item.isAccepted = res.isAccepted;
                _this.isdiabled = false;
                console.log(res);
            });
        }
        else if (this.data.type == 'friendrequest') {
            var body = {
                type: 'acceptfriend', id: this.item.friendRequestId
            };
            this.myClick.emit(body);
            // this.service.acceptFriendRequest(this.item.friendRequestId).subscribe(
            //   res => {
            //     this.toast.success('Accepted')
            //     this.item.isAccepted = res.isAccepted;
            //     this.isdiabled = false;
            //     console.log(res)
            //   }
            // );
        }
    };
    ItemActivityComponent.prototype.onIgnore = function () {
        this.isdiabled = true;
        var id;
        if (this.data.type == 'travelrequest') {
            id = this.item.travelRequestId;
        }
        else if (this.data.type == 'hostoffer') {
            id = this.item.hostOfferId;
        }
        else if (this.data.type == 'friendrequest') {
            id = this.item.friendRequestId;
        }
        var body = {
            type: 'ignore', id: id
        };
        this.myClick.emit(body);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ItemActivityComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ItemActivityComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ItemActivityComponent.prototype, "myClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('des'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ItemActivityComponent.prototype, "des", void 0);
    ItemActivityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item-activity',
            template: __webpack_require__(/*! ./item-activity.component.html */ "./src/app/components/user/reuse/item-activity/item-activity.component.html"),
            styles: [__webpack_require__(/*! ./item-activity.component.css */ "./src/app/components/user/reuse/item-activity/item-activity.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], ItemActivityComponent);
    return ItemActivityComponent;
}());



/***/ }),

/***/ "./src/app/components/user/reuse/item-notification/item-notification.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/user/reuse/item-notification/item-notification.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col{\r\n    padding: 0px !important;\r\n}\r\n.item{\r\n    border: solid 1px rgba(0,0,0,0.15);\r\n    border-radius: 25px;\r\n    margin-bottom: 20px;\r\n}\r\n.item a{\r\n color: #27374c;\r\n}\r\n.item a:hover{\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    color: #ED6504;\r\n}\r\n.notification{\r\n    display: flex;\r\n    padding: 20px;\r\n    margin: 0px;\r\n}\r\n.notify p{\r\n    margin-bottom:  0px;\r\n}\r\n.notify .name{\r\n    font-size: 1.2em;\r\n    font-weight: 500;\r\n}\r\n.avatar{\r\n    \r\n    max-width: 90px;\r\n    min-width: 90px;\r\n}\r\n.avatar img{\r\n    height: 70px;\r\n    width: 70px;\r\n    border-radius: 50%;\r\n}\r\n.button-bar{\r\n    padding: 0px;\r\n    padding-top: 20px;\r\n    margin-left: auto;\r\n    margin-bottom: auto;\r\n    display: flex;\r\n}\r\n.button-bar button{\r\n   margin-left: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3JldXNlL2l0ZW0tbm90aWZpY2F0aW9uL2l0ZW0tbm90aWZpY2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGtDQUFrQztJQUNsQyxtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixXQUFXO0FBQ2Y7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBOztJQUVJLGVBQWU7SUFDZixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7QUFDQTtHQUNHLGlCQUFpQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9yZXVzZS9pdGVtLW5vdGlmaWNhdGlvbi9pdGVtLW5vdGlmaWNhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbHtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5pdGVte1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgwLDAsMCwwLjE1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5pdGVtIGF7XHJcbiBjb2xvcjogIzI3Mzc0YztcclxufVxyXG4uaXRlbSBhOmhvdmVye1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICNFRDY1MDQ7XHJcbn1cclxuLm5vdGlmaWNhdGlvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLm5vdGlmeSBwe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogIDBweDtcclxufVxyXG4ubm90aWZ5IC5uYW1le1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLmF2YXRhcntcclxuICAgIFxyXG4gICAgbWF4LXdpZHRoOiA5MHB4O1xyXG4gICAgbWluLXdpZHRoOiA5MHB4O1xyXG59XHJcbi5hdmF0YXIgaW1ne1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLmJ1dHRvbi1iYXJ7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmJ1dHRvbi1iYXIgYnV0dG9ue1xyXG4gICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/user/reuse/item-notification/item-notification.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/user/reuse/item-notification/item-notification.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"item\">\r\n  <div class=\"notification row\">\r\n    <div class=\"avatar col\">\r\n      <a routerLink=\"/Users/People/{{item.senderId}}\"><img [src]=\"item.senderAvatar\"></a>\r\n    </div>\r\n    <div class=\"notify col\">\r\n      <p class=\"name\">{{item.senderName}} has accepted your {{typeShow()}}</p>\r\n    </div>\r\n    <div class=\"button-bar col-lg-2 col-md-2 col-sm-12\">\r\n      <button class=\"btn btn-danger\" [disabled]=\"isdiabled\" (click)=\"onDelete()\">Delete</button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user/reuse/item-notification/item-notification.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/user/reuse/item-notification/item-notification.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ItemNotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemNotificationComponent", function() { return ItemNotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ItemNotificationComponent = /** @class */ (function () {
    function ItemNotificationComponent() {
        this.myClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ItemNotificationComponent.prototype.ngOnInit = function () {
    };
    ItemNotificationComponent.prototype.typeShow = function () {
        if (this.item.type == "HostOffer")
            return "Host Offer";
        else if (this.item.type == "FriendRequest") {
            return "Friend Request";
        }
        else if (this.item.type == "TravelRequest") {
            return "Travel Request";
        }
    };
    ItemNotificationComponent.prototype.onDelete = function () {
        this.isdiabled = true;
        var body = {
            type: 'delete', id: this.item.id
        };
        this.myClick.emit(body);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ItemNotificationComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ItemNotificationComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ItemNotificationComponent.prototype, "myClick", void 0);
    ItemNotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item-notification',
            template: __webpack_require__(/*! ./item-notification.component.html */ "./src/app/components/user/reuse/item-notification/item-notification.component.html"),
            styles: [__webpack_require__(/*! ./item-notification.component.css */ "./src/app/components/user/reuse/item-notification/item-notification.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ItemNotificationComponent);
    return ItemNotificationComponent;
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

module.exports = "<ng-template #content>\r\n  <ng-template #loading>\r\n    <app-loading></app-loading>\r\n  </ng-template>\r\n  <ng-container *ngIf=\"user;else loading\">\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Send a Offer to {{user.fullName}}</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalRef.close()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"modal-body\">\r\n      <form #offerForm=\"ngForm\">\r\n        <div class=\"trip-info\">\r\n          <h3>Trip Information</h3>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"destination\">Visiting</label>\r\n            <input disabled ngModel [ngModel]=\"trip.destination\" type=\"text\" class=\"form-control\" id=\"destination\"\r\n              name=\"destination\">\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col\">\r\n              <label for=\"arrivaldate\">Arrival Date</label>\r\n              <input disabled ngModel [ngModel]=\"trip.arrivalDate|date:'dd/MM/yyyy'\" type=\"datetime\"\r\n                class=\"form-control\" id=\"arrivaldate\" name=\"arrivaldate\">\r\n            </div>\r\n            <div class=\"form-group col\">\r\n              <label for=\"departuredate\">Departure Date</label>\r\n              <input disabled ngModel [ngModel]=\"trip.departureDate|date:'dd/MM/yyyy'\" type=\"datetime\"\r\n                class=\"form-control\" id=\"departuredate\" name=\"departuredate\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"travelerNumber\">Traveler Number</label>\r\n            <input disabled ngModel [ngModel]=\"trip.travelerNumber\" style=\"width:100px\" type=\"number\" min=\"0\"\r\n              class=\"form-control\" id=\"travelerNumber\" name=\"travelerNumber\">\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"message\">\r\n          <div class=\"form-group\">\r\n            <label for=\"message\">Your Message<span style=\"color: red\">*</span></label>\r\n            <textarea required ngModel class=\"form-control\" name=\"message\" id=\"message\" rows=\"5\"></textarea>\r\n          </div>\r\n\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button [disabled]=\"isdiable\" type=\"button\" class=\"btn btn-secondary\" (click)=\"modalRef.close()\">Cancel</button>\r\n      <button [disabled]=\"offerForm.invalid ||isdiable\" type=\"button\" class=\"btn btn-success\"\r\n        (click)=\"send(offerForm);\">Send</button>\r\n    </div>\r\n  </ng-container>\r\n</ng-template>"

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
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var OfferToHostComponent = /** @class */ (function () {
    function OfferToHostComponent(modalService, service, toast) {
        this.modalService = modalService;
        this.service = service;
        this.toast = toast;
    }
    OfferToHostComponent.prototype.ngOnInit = function () {
    };
    OfferToHostComponent.prototype.open = function (trip) {
        var _this = this;
        this.modalRef = this.modalService.open(this.content, { windowClass: 'modal-holder' });
        this.isdiable = false;
        this.trip = trip;
        this.service.getPeopleProfile(trip.applicationUserId).subscribe(function (res) {
            _this.user = res;
            // this.modalRef = this.modalService.open(this.content, { windowClass: 'modal-holder' });
        });
    };
    OfferToHostComponent.prototype.send = function (offerForm) {
        var _this = this;
        this.isdiable = true;
        // console.log(offerForm.value)
        var body = {
            destination: this.trip.destination,
            arrivalDate: this.trip.arrivalDate,
            departureDate: this.trip.departureDate,
            travelerNumber: this.trip.travelerNumber,
            message: offerForm.value.message
        };
        this.service.sendHostOffer(body, this.trip.applicationUserId).subscribe(function (res) {
            // console.log(res);
            if (res.status == 200)
                _this.toast.success('You had sent a Offer');
            else {
                _this.toast.error('Fail');
            }
            _this.modalRef.close();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], OfferToHostComponent.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OfferToHostComponent.prototype, "trip", void 0);
    OfferToHostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-offer-to-host',
            template: __webpack_require__(/*! ./offer-to-host.component.html */ "./src/app/components/user/reuse/offer-to-host/offer-to-host.component.html"),
            styles: [__webpack_require__(/*! ./offer-to-host.component.css */ "./src/app/components/user/reuse/offer-to-host/offer-to-host.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
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

module.exports = "a{\r\n    color: #27374c;\r\n}\r\n.item{\r\n    border-radius: 0.5rem;\r\n    border: 1px solid rgba(0,0,0,0.15);\r\n    background-color: #f8f8f8;\r\n    margin: 20px;\r\n}\r\na:hover{\r\n    text-decoration: none;\r\n}\r\n.trip{\r\n    border-bottom: 1px solid rgba(0,0,0,0.15);\r\n    width: 100%;\r\n    padding: 20px;\r\n}\r\n.row{\r\n    margin: 0;\r\n}\r\n.col{\r\n    padding: 0;\r\n}\r\n.trip .avatar{\r\n    min-width: 90px;\r\n    max-width: 90px;\r\n}\r\n.trip img{\r\n    height: 70px;\r\n    width:70px;\r\n    border-radius: 50%;\r\n}\r\n.trip .trip-content{\r\n   min-width: 100px;\r\n   \r\n}\r\n.top{\r\n    width: 100%;\r\n    \r\n}\r\nspan{\r\n    word-wrap: break-word;\r\n}\r\n.traveler-info{\r\n    min-width: 100px;\r\n    float: left;\r\n}\r\n.offer-button{\r\n    max-width: 120px;\r\n  \r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n}\r\n.offer-button button{\r\n    width: 120px;\r\n    min-height: 50px;\r\n}\r\n.trip-info{\r\n    clear: both;\r\n    padding: 15px 0px;\r\n}\r\n.trip-info span{\r\n    padding-right: 10px;\r\n    \r\n}\r\n.trip-decription{\r\n   clear: both;\r\n   word-wrap: break-word;\r\n   white-space: pre-wrap;\r\n   max-width: 80%;\r\n   max-height: 4.5em;\r\n   overflow: hidden; \r\n  transition: max-height 0.5s; \r\n\r\n}\r\n.trip-decription p{\r\n    margin-bottom: 0px; \r\n}\r\n.button-decription{\r\n    padding-top: 5px;\r\n    display: flex; \r\n    max-width: 80%;\r\n}\r\n.button-decription a{\r\ncolor: #287FB8;;\r\nfont-weight: 600;\r\n}\r\n.button-decription a:hover{\r\n    cursor: pointer;\r\n    color: #ED6504;\r\n}\r\n.traveler-info .name{\r\nfont-size: 1.3em;\r\nfont-weight: 500;\r\npadding-right: 20px;\r\n}\r\n.traveler-info .bold-value{\r\n    font-size: 1em;\r\n    font-weight: 500;\r\n}\r\n@media screen and (max-width: 480px) {\r\n    .avatar{\r\n        flex: 0 0 100%;\r\n        max-width: 100%;\r\n      \r\n    }\r\n    .trip-content{\r\n        flex: 0 0 100%;\r\n        max-width: 100%;\r\n\r\n    }\r\n    .trip-decription,.button-decription{\r\n        max-width: 100%;\r\n    }\r\n    .offer-button{\r\n        padding-top: 10px;\r\n        position: unset;\r\n        max-width: 100%;\r\n        float: unset;\r\n        display: flex;\r\n        justify-content: center;\r\n    }\r\n    .offer-button button{\r\n        min-height: unset;\r\n        width: 150px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3JldXNlL3B1YmxpY3RyaXAvcHVibGljdHJpcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGtDQUFrQztJQUNsQyx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSx5Q0FBeUM7SUFDekMsV0FBVztJQUNYLGFBQWE7QUFDakI7QUFDQTtJQUNJLFNBQVM7QUFDYjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7QUFDQTtHQUNHLGdCQUFnQjs7QUFFbkI7QUFDQTtJQUNJLFdBQVc7O0FBRWY7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZ0JBQWdCOztFQUVsQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLE1BQU07QUFDUjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksbUJBQW1COztBQUV2QjtBQUVBO0dBQ0csV0FBVztHQUNYLHFCQUFxQjtHQUNyQixxQkFBcUI7R0FDckIsY0FBYztHQUNkLGlCQUFpQjtHQUNqQixnQkFBZ0I7RUFDakIsMkJBQTJCOztBQUU3QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGNBQWM7QUFDbEI7QUFDQTtBQUNBLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCLG1CQUFtQjtBQUNuQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0k7UUFDSSxjQUFjO1FBQ2QsZUFBZTs7SUFFbkI7SUFDQTtRQUNJLGNBQWM7UUFDZCxlQUFlOztJQUVuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixlQUFlO1FBQ2YsWUFBWTtRQUNaLGFBQWE7UUFDYix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixZQUFZO0lBQ2hCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXIvcmV1c2UvcHVibGljdHJpcC9wdWJsaWN0cmlwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhe1xyXG4gICAgY29sb3I6ICMyNzM3NGM7XHJcbn1cclxuLml0ZW17XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMTUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG5hOmhvdmVye1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi50cmlwe1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xNSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLnJvd3tcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4uY29se1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4udHJpcCAuYXZhdGFye1xyXG4gICAgbWluLXdpZHRoOiA5MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA5MHB4O1xyXG59XHJcbi50cmlwIGltZ3tcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIHdpZHRoOjcwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLnRyaXAgLnRyaXAtY29udGVudHtcclxuICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgXHJcbn1cclxuLnRvcHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgXHJcbn1cclxuc3BhbntcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG4udHJhdmVsZXItaW5mb3tcclxuICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4ub2ZmZXItYnV0dG9ue1xyXG4gICAgbWF4LXdpZHRoOiAxMjBweDtcclxuICBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG59XHJcbi5vZmZlci1idXR0b24gYnV0dG9ue1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgbWluLWhlaWdodDogNTBweDtcclxufVxyXG5cclxuLnRyaXAtaW5mb3tcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgcGFkZGluZzogMTVweCAwcHg7XHJcbn1cclxuLnRyaXAtaW5mbyBzcGFue1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIFxyXG59XHJcblxyXG4udHJpcC1kZWNyaXB0aW9ue1xyXG4gICBjbGVhcjogYm90aDtcclxuICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgIG1heC13aWR0aDogODAlO1xyXG4gICBtYXgtaGVpZ2h0OiA0LjVlbTtcclxuICAgb3ZlcmZsb3c6IGhpZGRlbjsgXHJcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjVzOyBcclxuXHJcbn1cclxuLnRyaXAtZGVjcmlwdGlvbiBwe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4OyBcclxufVxyXG4uYnV0dG9uLWRlY3JpcHRpb257XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxufVxyXG4uYnV0dG9uLWRlY3JpcHRpb24gYXtcclxuY29sb3I6ICMyODdGQjg7O1xyXG5mb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5idXR0b24tZGVjcmlwdGlvbiBhOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICNFRDY1MDQ7XHJcbn1cclxuLnRyYXZlbGVyLWluZm8gLm5hbWV7XHJcbmZvbnQtc2l6ZTogMS4zZW07XHJcbmZvbnQtd2VpZ2h0OiA1MDA7XHJcbnBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuLnRyYXZlbGVyLWluZm8gLmJvbGQtdmFsdWV7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5hdmF0YXJ7XHJcbiAgICAgICAgZmxleDogMCAwIDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIC50cmlwLWNvbnRlbnR7XHJcbiAgICAgICAgZmxleDogMCAwIDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG5cclxuICAgIH1cclxuICAgIC50cmlwLWRlY3JpcHRpb24sLmJ1dHRvbi1kZWNyaXB0aW9ue1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5vZmZlci1idXR0b257XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHVuc2V0O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBmbG9hdDogdW5zZXQ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5vZmZlci1idXR0b24gYnV0dG9ue1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IHVuc2V0O1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/user/reuse/publictrip/publictrip.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/user/reuse/publictrip/publictrip.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"trip row\">\r\n    <div class=\"avatar col\">\r\n      <a routerLink=\"/Users/People/{{publicTrip.user.id}}\"><img class=\"photo\"\r\n          [src]=\"publicTrip.user.avatarLocation?publicTrip.user.avatarLocation:'./../../../../assets/imgs/profile-picture-placeholder.png'\"\r\n          alt=\"\"></a>\r\n    </div>\r\n    <div class=\"trip-content col\">\r\n\r\n      <div class=\"top\">\r\n        <div class=\"traveler-info\">\r\n          <a routerLink=\"/Users/People/{{publicTrip.user.id}}\"> <span\r\n              class=\"name\">{{publicTrip.user.fullName}}</span></a>\r\n          <br>\r\n          <span>Visiting: </span><span class=\"bold-value\">{{publicTrip.destination}}</span><br>\r\n          <span>From: </span><span class=\"bold-value\">{{publicTrip.user.address}}</span><br>\r\n          <span>Speakers: </span><span class=\"bold-value\">{{publicTrip.user.fluentLanguage}}</span><br>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"trip-info\">\r\n        <span><i class=\"far fa-calendar-alt\"></i></span>\r\n        <span>{{publicTrip.arrivalDate|date:\"dd/MM/yyyy\" }} <i class=\"fas fa-arrow-right\"></i>\r\n          {{publicTrip.departureDate|date:\"dd/MM/yyyy\"}}</span>\r\n        <span><i class=\"fas fa-user-friends\"></i></span><span>{{publicTrip.travelerNumber}} Traveler</span>\r\n      </div>\r\n      <div class=\"trip-decription\" (window:resize)=\"onResize($event)\" [ngStyle]=\"x && {'max-height.em':height}\">\r\n        <p #des>{{publicTrip.description}} </p>\r\n      </div>\r\n      <div class=\"button-decription\" *ngIf=\"show\">\r\n        <a style=\"margin-left:auto\" (click)=\"x=!x\">{{x?'[-]Read Less':'[+]Read More'}}</a>\r\n      </div>\r\n      <div class=\"offer-button\">\r\n        <button (click)=\"openModal();\" class=\"btn btn-primary offerbutton\">Offer to Host</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

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
        this.myClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.show = false;
    }
    PublictripComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.onResize(event);
        }, 0);
    };
    PublictripComponent.prototype.onResize = function (event) {
        var fontsizestr = getComputedStyle(this.des.nativeElement).fontSize;
        var fontsize = parseInt(fontsizestr.slice(0, fontsizestr.length - 2));
        this.height = this.des.nativeElement.offsetHeight / fontsize;
        this.show = (this.height > 4.5);
    };
    PublictripComponent.prototype.openModal = function () {
        // let x =<HTMLInputElement> window.document.getElementById('offerbutton');
        // let offerbutton = window.document.getElementsByClassName('offerbutton');
        // setTimeout(() => {
        //   for (let i=0; i < offerbutton.length; i++) {
        //     (<HTMLInputElement>offerbutton[i]).disabled=true;
        //   }
        // }, 100);
        this.myClick.emit(this.publicTrip);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_publictrip__WEBPACK_IMPORTED_MODULE_2__["PublicTrip"])
    ], PublictripComponent.prototype, "publicTrip", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PublictripComponent.prototype, "myClick", void 0);
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

module.exports = "a{\r\n    color: #27374c;\r\n}\r\na:hover{\r\n    text-decoration: none;\r\n}\r\n.reference{\r\n    /* border-bottom: 1px solid rgba(0,0,0,0.15); */\r\n    width: 100%;\r\n    padding: 20px;\r\n}\r\n.row{\r\n    margin: 0;\r\n}\r\n.col{\r\n    padding: 0;\r\n}\r\n.reference .avatar{\r\n    max-width: 90px;\r\n}\r\n.reference img{\r\n    height: 70px;\r\n    width:70px;\r\n    border-radius: 50%;\r\n}\r\n.reference .reference-content{\r\n   min-width: 100px;\r\n   \r\n}\r\nspan{\r\n    word-wrap: break-word;\r\n}\r\n.user-info{\r\n    float: left;\r\n}\r\n.user-info p{\r\n    margin-bottom: 0px;\r\n}\r\n.user-info .name{\r\n    font-size: 1.3em;\r\n    font-weight: 500;\r\n}\r\n.user-info .address{\r\nmargin-bottom: 0px;\r\n}\r\n.time{\r\n    float: right;\r\n    color: #929EAE;\r\n    font-size: 0.8em;\r\n    padding-top: 8px;\r\n}\r\n.status{\r\n    clear: both;\r\n    padding: 10px 0px;\r\n}\r\n.status span{\r\n    font-weight: 600;\r\n}\r\n.reference-decription{\r\n   clear: both;\r\n   word-wrap: break-word;\r\n   white-space: pre-wrap;\r\n   max-width: 80%;\r\n   max-height: 4.5em;\r\n   overflow: hidden; \r\n  transition: max-height 0.5s; \r\n\r\n}\r\n.reference-decription p{\r\n    margin-bottom: 0px; \r\n}\r\n.button-decription{\r\n    padding-top: 5px;\r\n    display: flex; \r\n    max-width: 80%;\r\n}\r\n.button-decription a{\r\ncolor: #287FB8;;\r\nfont-weight: 600;\r\n}\r\na:hover{\r\n    cursor: pointer;\r\n    color: #ED6504;\r\n}\r\n@media screen and (max-width: 480px) {\r\n    .reference-content{\r\n        padding-top: 10px;\r\n        flex: 1 1 auto;\r\n        max-width: 100%;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3JldXNlL3JlZmVyZW5jZS9yZWZlcmVuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksK0NBQStDO0lBQy9DLFdBQVc7SUFDWCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7QUFDQTtHQUNHLGdCQUFnQjs7QUFFbkI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtHQUNHLFdBQVc7R0FDWCxxQkFBcUI7R0FDckIscUJBQXFCO0dBQ3JCLGNBQWM7R0FDZCxpQkFBaUI7R0FDakIsZ0JBQWdCO0VBQ2pCLDJCQUEyQjs7QUFFN0I7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixjQUFjO0FBQ2xCO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsZ0JBQWdCO0FBQ2hCO0FBQ0M7SUFDRyxlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsY0FBYztRQUNkLGVBQWU7SUFDbkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9yZXVzZS9yZWZlcmVuY2UvcmVmZXJlbmNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhe1xyXG4gICAgY29sb3I6ICMyNzM3NGM7XHJcbn1cclxuYTpob3ZlcntcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4ucmVmZXJlbmNle1xyXG4gICAgLyogYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xNSk7ICovXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLnJvd3tcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4uY29se1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4ucmVmZXJlbmNlIC5hdmF0YXJ7XHJcbiAgICBtYXgtd2lkdGg6IDkwcHg7XHJcbn1cclxuLnJlZmVyZW5jZSBpbWd7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICB3aWR0aDo3MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5yZWZlcmVuY2UgLnJlZmVyZW5jZS1jb250ZW50e1xyXG4gICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICBcclxufVxyXG5zcGFue1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcbi51c2VyLWluZm97XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4udXNlci1pbmZvIHB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLnVzZXItaW5mbyAubmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi51c2VyLWluZm8gLmFkZHJlc3N7XHJcbm1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4udGltZXtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGNvbG9yOiAjOTI5RUFFO1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbn1cclxuLnN0YXR1c3tcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbn1cclxuLnN0YXR1cyBzcGFue1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnJlZmVyZW5jZS1kZWNyaXB0aW9ue1xyXG4gICBjbGVhcjogYm90aDtcclxuICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgIG1heC13aWR0aDogODAlO1xyXG4gICBtYXgtaGVpZ2h0OiA0LjVlbTtcclxuICAgb3ZlcmZsb3c6IGhpZGRlbjsgXHJcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjVzOyBcclxuXHJcbn1cclxuLnJlZmVyZW5jZS1kZWNyaXB0aW9uIHB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7IFxyXG59XHJcbi5idXR0b24tZGVjcmlwdGlvbntcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIG1heC13aWR0aDogODAlO1xyXG59XHJcbi5idXR0b24tZGVjcmlwdGlvbiBhe1xyXG5jb2xvcjogIzI4N0ZCODs7XHJcbmZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuIGE6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogI0VENjUwNDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLnJlZmVyZW5jZS1jb250ZW50e1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/user/reuse/reference/reference.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/user/reuse/reference/reference.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"reference row\">\r\n  <div class=\"avatar col\">\r\n    <a routerLink=\"/Users/People/{{reference.sender.id}}\"><img class=\"photo\"\r\n        [src]=\"reference.sender.avatarLocation?reference.sender.avatarLocation:'./../../../../assets/imgs/profile-picture-placeholder.png'\"></a>\r\n  </div>\r\n  <div class=\"reference-content col\">\r\n    <div class=\"user-info\">\r\n      <a routerLink=\"/Users/People/{{reference.sender.id}}\">\r\n        <p class=\"name\">{{reference.sender.fullName}}</p>\r\n      </a>\r\n      <p class=\"address\">{{reference.sender.address}}</p>\r\n    </div>\r\n    <div class=\"time\"><span>{{reference.createDate|formatDate:\"dd/MM/yyyy\"}}</span></div>\r\n    <div class=\"status\">\r\n        <i [style.color]=\"reference.status?'green':'red'\"\r\n        class=\"fas fa-star\"></i><span [style.color]=\"reference.status?'green':'red'\"> {{reference.status?'Positive':'Negative'}}</span>\r\n    </div>\r\n    <div class=\"reference-decription\" (window:resize)=\"onResize($event)\" [ngStyle]=\"x && {'max-height.em':height}\">\r\n      <p #des>{{reference.content}} </p>\r\n    </div>\r\n    <div class=\"button-decription\" *ngIf=\"show\">\r\n      <a style=\"margin-left:auto\" (click)=\"x=!x\">{{x?'[-]Read Less':'[+]Read More'}}</a>\r\n    </div>\r\n  </div>\r\n</div>"

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
        var fontsizestr = getComputedStyle(this.des.nativeElement).fontSize;
        var fontsize = parseInt(fontsizestr.slice(0, fontsizestr.length - 2));
        this.height = this.des.nativeElement.offsetHeight / fontsize;
        this.show = (this.height > 4.5);
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

module.exports = "<ng-template #content>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Send a Message to {{people.fullName}}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalRef.close()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"modal-body\">\r\n    <form #messageForm=\"ngForm\">\r\n      <div class=\"form-group\">\r\n        <label for=\"message\">Your Message<span style=\"color: red\">*</span></label>\r\n        <textarea required ngModel class=\"form-control\" name=\"message\" id=\"message\" rows=\"5\"></textarea>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button [disabled]=\"isdiable\" type=\"button\" class=\"btn btn-secondary\" (click)=\"modalRef.close()\">Cancel</button>\r\n    <button [disabled]=\"messageForm.invalid||isdiable\" type=\"button\" class=\"btn btn-success\" (click)=\"send(messageForm);\">Send</button>\r\n  </div>\r\n</ng-template>"

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
        this.isdiable = false;
        this.modalRef = this.modalService.open(this.content, { windowClass: 'modal-holder' });
    };
    SendMessageModalComponent.prototype.send = function (messageForm) {
        this.isdiable = true;
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

/***/ "./src/app/components/user/reuse/send-report-modal/send-report-modal.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/user/reuse/send-report-modal/send-report-modal.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label{\r\n    font-weight: 600;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3JldXNlL3NlbmQtcmVwb3J0LW1vZGFsL3NlbmQtcmVwb3J0LW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXIvcmV1c2Uvc2VuZC1yZXBvcnQtbW9kYWwvc2VuZC1yZXBvcnQtbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVse1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/user/reuse/send-report-modal/send-report-modal.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/user/reuse/send-report-modal/send-report-modal.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Report {{people.fullName}}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalRef.close()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"modal-body\">\r\n    <div style=\"margin-bottom: 20px\">\r\n      <span>\r\n        Please report inappropriate members and/or content to help our Trust & Safety team keep our Community safe for\r\n        everyone.\r\n      </span>\r\n    </div>\r\n    <form #reportForm=\"ngForm\">\r\n      <div class=\"form-group\">\r\n        <label class=\"\" for=\"reason\">Reason for Reporting<span style=\"color: red\">*</span></label>\r\n        <div class=\"\">\r\n          <select id=\"reason\" class=\"form-control\" name=\"reason\" required ngModel>\r\n            <option value=\"\"></option>\r\n            <option>Post content profile</option>\r\n            <option>Spam message</option>\r\n            <option>Offline reason</option>\r\n            <option>Other</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"message\">Detail<span style=\"color: red\">*</span></label>\r\n        <textarea required ngModel class=\"form-control\" name=\"message\" id=\"message\" rows=\"5\"></textarea>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button [disabled]=\"isdiable\" type=\"button\" class=\"btn btn-secondary\" (click)=\"modalRef.close()\">Cancel</button>\r\n    <button [disabled]=\"reportForm.invalid||isdiable\" type=\"button\" class=\"btn btn-success\"\r\n      (click)=\"send(reportForm);\">Send</button>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/components/user/reuse/send-report-modal/send-report-modal.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/user/reuse/send-report-modal/send-report-modal.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SendReportModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendReportModalComponent", function() { return SendReportModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");




var SendReportModalComponent = /** @class */ (function () {
    function SendReportModalComponent(modalService) {
        this.modalService = modalService;
    }
    SendReportModalComponent.prototype.ngOnInit = function () {
    };
    SendReportModalComponent.prototype.open = function () {
        this.isdiable = false;
        this.modalRef = this.modalService.open(this.content, { windowClass: 'modal-holder' });
    };
    SendReportModalComponent.prototype.send = function (reportForm) {
        this.isdiable = true;
        console.log(reportForm.value);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SendReportModalComponent.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["User"])
    ], SendReportModalComponent.prototype, "people", void 0);
    SendReportModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-send-report-modal',
            template: __webpack_require__(/*! ./send-report-modal.component.html */ "./src/app/components/user/reuse/send-report-modal/send-report-modal.component.html"),
            styles: [__webpack_require__(/*! ./send-report-modal.component.css */ "./src/app/components/user/reuse/send-report-modal/send-report-modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], SendReportModalComponent);
    return SendReportModalComponent;
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

module.exports = "<ng-template #content>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Send a Request to {{people.fullName}}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalRef.close()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"modal-body\">\r\n    <form #requestForm=\"ngForm\">\r\n      <div class=\"form row\">\r\n        <div class=\"form-group col\">\r\n          <label for=\"arrivaldate\">Arrival Date<span style=\"color: red\">*</span></label>\r\n          <input #arrivaldate required ngModel type=\"date\" min=\"{{now| date:'yyyy-MM-dd'}}\" [max]=\"departuredate.value\"\r\n            class=\"form-control\" id=\"arrivaldate\" name=\"arrivaldate\">\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"departuredate\">Departure Date<span style=\"color: red\">*</span></label>\r\n          <input #departuredate required ngModel type=\"date\" [min]=\"arrivaldate.value\" class=\"form-control\"\r\n            id=\"departuredate\" name=\"departuredate\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"travelerNumber\">Traveler Number<span style=\"color: red\">*</span></label>\r\n        <input required ngModel style=\"width:100px\" type=\"number\" min=\"0\" class=\"form-control\" id=\"travelerNumber\"\r\n          name=\"travelerNumber\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"message\">Your Message<span style=\"color: red\">*</span></label>\r\n        <textarea required ngModel class=\"form-control\" name=\"message\" id=\"message\" rows=\"5\"></textarea>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button [disabled]=\"isdiable\" type=\"button\" class=\"btn btn-secondary\" (click)=\"modalRef.close()\">Cancel</button>\r\n    <button [disabled]=\"requestForm.invalid||isdiable\" type=\"button\" class=\"btn btn-success\"\r\n      (click)=\"send(requestForm);\">Send</button>\r\n  </div>\r\n</ng-template>"

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
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var SendRequestModalComponent = /** @class */ (function () {
    function SendRequestModalComponent(modalService, servive, toast) {
        this.modalService = modalService;
        this.servive = servive;
        this.toast = toast;
        this.now = new Date();
    }
    SendRequestModalComponent.prototype.ngOnInit = function () {
    };
    SendRequestModalComponent.prototype.open = function () {
        this.isdiable = false;
        this.modalRef = this.modalService.open(this.content, { windowClass: 'modal-holder' });
    };
    SendRequestModalComponent.prototype.send = function (requestForm) {
        var _this = this;
        //console.log(requestForm.value)
        this.isdiable = true;
        this.servive.sendRequest(requestForm.value, this.people.id).subscribe(function (res) {
            if (res.status == 200)
                _this.toast.success('You had sent a request');
            else {
                _this.toast.error('Fail');
            }
            _this.modalRef.close();
        });
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
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

module.exports = ".item{\r\n    border-radius: 0.5rem;\r\n    border: 1px solid rgba(0,0,0,0.15);\r\n    background-color: #f8f8f8;\r\n    margin: 20px;\r\n}\r\n.your-trips{\r\n    border-bottom: 1px solid rgba(0,0,0,0.15);\r\n    padding: 20px;\r\n    position: relative;\r\n}\r\n.top{\r\n    width: 100%;\r\n    float: left;\r\n}\r\n.traveler-info{\r\n    float: left;\r\n    padding-top: 5px;\r\n}\r\nspan{\r\n    word-wrap: break-word;\r\n}\r\n.trip-info{\r\n    clear: both;\r\n    padding: 10px 0px;\r\n    \r\n}\r\n.trip-info span{\r\n    padding-right: 10px;\r\n}\r\n.bold-value{\r\n    font-size: 1em;\r\n    font-weight: 500;\r\n}\r\n.menu-button{\r\n    position: absolute;\r\n  right: 20px;\r\n  top: 20px;\r\n}\r\n.menu-button button{\r\n    width: 120px;\r\n    min-height: 50px;\r\n}\r\n.trip-decription{\r\n    clear: both;\r\n    max-width: 80%;\r\n    word-wrap: break-word;\r\n    white-space: pre-wrap;\r\n     max-height: 4.5em;\r\n     overflow: hidden; \r\n    transition: max-height 0.5s; \r\n    \r\n }\r\n.trip-decription p{\r\n     margin-bottom: 0px; \r\n }\r\n.button-decription{\r\n    padding-top: 5px;\r\n    display: flex; \r\n    max-width: 80%;\r\n}\r\n.button-decription a{\r\n    color: #287FB8;;\r\n    font-weight: 600;\r\n}\r\n.button-decription a:hover{\r\n    cursor: pointer;\r\n    color: #ED6504;\r\n}\r\n@media screen and (max-width: 480px) {\r\n    .menu-button{\r\n        padding-top: 10px;\r\n        position: unset;\r\n        max-width: 100%;\r\n        float: unset;\r\n        display: flex;\r\n        justify-content: center;\r\n    }\r\n    .menu-button button{\r\n        min-height: unset;\r\n        width: 150px;\r\n    }\r\n    .trip-decription,.button-decription{\r\n        max-width: 100%;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3JldXNlL3RyaXAvdHJpcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLGtDQUFrQztJQUNsQyx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjtBQUNBO0lBQ0kseUNBQXlDO0lBQ3pDLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjs7QUFFckI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0VBQ3BCLFdBQVc7RUFDWCxTQUFTO0FBQ1g7QUFDQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLHFCQUFxQjtLQUNwQixpQkFBaUI7S0FDakIsZ0JBQWdCO0lBQ2pCLDJCQUEyQjs7Q0FFOUI7QUFDQTtLQUNJLGtCQUFrQjtDQUN0QjtBQUNBO0lBQ0csZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGVBQWU7UUFDZixZQUFZO1FBQ1osYUFBYTtRQUNiLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9yZXVzZS90cmlwL3RyaXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVte1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjE1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbn1cclxuLnlvdXItdHJpcHN7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjE1KTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnRvcHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLnRyYXZlbGVyLWluZm97XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuc3BhbntcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG4udHJpcC1pbmZve1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgIFxyXG59XHJcbi50cmlwLWluZm8gc3BhbntcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmJvbGQtdmFsdWV7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLm1lbnUtYnV0dG9ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIHRvcDogMjBweDtcclxufVxyXG4ubWVudS1idXR0b24gYnV0dG9ue1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgbWluLWhlaWdodDogNTBweDtcclxufVxyXG4udHJpcC1kZWNyaXB0aW9ue1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgICBtYXgtaGVpZ2h0OiA0LjVlbTtcclxuICAgICBvdmVyZmxvdzogaGlkZGVuOyBcclxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC41czsgXHJcbiAgICBcclxuIH1cclxuIC50cmlwLWRlY3JpcHRpb24gcHtcclxuICAgICBtYXJnaW4tYm90dG9tOiAwcHg7IFxyXG4gfVxyXG4gLmJ1dHRvbi1kZWNyaXB0aW9ue1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbn1cclxuLmJ1dHRvbi1kZWNyaXB0aW9uIGF7XHJcbiAgICBjb2xvcjogIzI4N0ZCODs7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5idXR0b24tZGVjcmlwdGlvbiBhOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICNFRDY1MDQ7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5tZW51LWJ1dHRvbntcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICBwb3NpdGlvbjogdW5zZXQ7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZsb2F0OiB1bnNldDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLm1lbnUtYnV0dG9uIGJ1dHRvbntcclxuICAgICAgICBtaW4taGVpZ2h0OiB1bnNldDtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICB9XHJcbiAgICAudHJpcC1kZWNyaXB0aW9uLC5idXR0b24tZGVjcmlwdGlvbntcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/user/reuse/trip/trip.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/user/reuse/trip/trip.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-offer-to-host [trip]=\"trip\"></app-offer-to-host> -->\r\n\r\n  <div class=\"your-trips\">\r\n    <div class=\"top\">\r\n      <div class=\"traveler-info\">\r\n        <!-- <span class=\"name\">Public Trip</span><br> -->\r\n        <span>Visiting: </span><span class=\"bold-value\">{{trip.destination}}</span><br>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"trip-info\">\r\n      <span><i class=\"far fa-calendar-alt\"></i></span>\r\n      <span>{{trip.arrivalDate|date:\"dd/MM/yy\" }} <i class=\"fas fa-arrow-right\"></i>\r\n        {{trip.departureDate|date:\"dd/MM/yy\"}}</span>\r\n      <span><i class=\"fas fa-user-friends\"></i></span><span>{{trip.travelerNumber}} Traveler</span>\r\n    </div>\r\n\r\n    <div (window:resize)=\"onResize($event)\" [ngStyle]=\"x && {'max-height.em':height}\" class=\"trip-decription \">\r\n      <p #des>{{trip.description}} </p>\r\n    </div>\r\n    <div class=\"button-decription\" *ngIf=\"show\">\r\n      <a style=\"margin-left:auto\" (click)=\"x=!x\">{{x?'[-]Read Less':'[+]Read More'}}</a>\r\n    </div>\r\n    <div class=\"menu-button\">\r\n      <button *ngIf=\"isUser\" class=\"btn btn-primary\" (click)=\"onClickTrip()\">Edit</button>\r\n      <button (click)=\"openModal()\" *ngIf=\"!isUser\" class=\"btn btn-primary\">Offer to Host</button>\r\n    </div>\r\n  </div>\r\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var TripComponent = /** @class */ (function () {
    function TripComponent(router) {
        this.router = router;
        this.myClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.show = false;
    }
    TripComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.onResize(event);
        }, 0);
    };
    TripComponent.prototype.onResize = function (event) {
        var fontsizestr = getComputedStyle(this.des.nativeElement).fontSize;
        var fontsize = parseInt(fontsizestr.slice(0, fontsizestr.length - 2));
        this.height = this.des.nativeElement.offsetHeight / fontsize;
        this.show = (this.height > 4.5);
    };
    TripComponent.prototype.onClickTrip = function () {
        this.router.navigate(['/Users/PublicTrip', this.trip.publicTripId]);
    };
    TripComponent.prototype.openModal = function () {
        this.myClick.emit(this.trip);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TripComponent.prototype, "myClick", void 0);
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
    TripComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trip',
            template: __webpack_require__(/*! ./trip.component.html */ "./src/app/components/user/reuse/trip/trip.component.html"),
            styles: [__webpack_require__(/*! ./trip.component.css */ "./src/app/components/user/reuse/trip/trip.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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

module.exports = "<ng-template #content>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Upload a Photo</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalRef.close()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"modal-body\">\r\n\r\n    <div class=\"img-preview\" [style.height.px]=\"from=='photos' && 250\">\r\n      <img [ngClass]=\"{'photo':from=='edit','image':from=='photos'}\" [src]=\"imageUrl\">\r\n    </div>\r\n\r\n    <form autocomplete=\"off\" #uploadForm=\"ngForm\">\r\n      <div class=\"form-group\">\r\n        <label for=\"exampleFormControlFile1\">Select an Image</label>\r\n        <input multiple (change)=\"handleFileInput($event.target.files)\" ngModel name=\"file\" type=\"file\" class=\"form-control-file\"\r\n          id=\"exampleFormControlFile1\" required>\r\n      </div>\r\n      <div>\r\n        <ul>\r\n          <li><span>Image types allowed: GIF, JPG, PNG.</span></li>\r\n          <li><span>Image size must be 2 kB to 20 MB.</span></li>\r\n          <li><span>For best results, upload a photo with a 4:3 ratio.</span></li>\r\n          <li><span>Using script blockers may prevent image uploads from working.</span></li>\r\n        </ul>\r\n      </div>\r\n      <!-- <div class=\"form-group\">\r\n        <label for=\"exampleFormControlInput1\">Description</label>\r\n        <input required autofocus ngModel name=\"description\" type=\"text\" class=\"form-control\"\r\n          id=\"exampleFormControlInput1\">\r\n      </div> -->\r\n    </form>\r\n    <div  style=\"height: 20px;\">\r\n      <ngb-progressbar *ngIf=\"uploading\" type=\"success\" [value]=\"value\" [striped]=\"true\" [animated]=\"true\" height=\"20px\"><i\r\n          style=\"font-size: 10px\">{{value}}%</i></ngb-progressbar>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button [disabled]=\"uploading\" type=\"button\" class=\"btn btn-secondary\" (click)=\"modalRef.close()\">Cancel</button>\r\n    <button [disabled]=\"uploadForm.invalid || uploading\" type=\"button\" class=\"btn btn-success\"\r\n      (click)=\"upload(uploadForm);\">Upload</button>\r\n  </div>\r\n</ng-template>"

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
        this.isdisable = true;
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

module.exports = "<ng-template #content>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Write a Reference for {{people.fullName}}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalRef.close()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"modal-body\">\r\n    <form class=\"form-group\" #referenceForm=\"ngForm\">\r\n      <div class=\"form-group\">\r\n        <p>Would you recommend {{people.fullName}}?</p>\r\n        <div class=\"form-check\">\r\n          <input required ngModel class=\"form-check-input\" type=\"radio\" name=\"status\" id=\"exampleRadios1\" value=\"true\">\r\n          <label class=\"form-check-label\" for=\"exampleRadios1\">\r\n            Yes, I'd recommend\r\n          </label>\r\n        </div>\r\n        <div class=\"form-check\">\r\n          <input required ngModel class=\"form-check-input\" type=\"radio\" name=\"status\" id=\"exampleRadios2\" value=\"false\">\r\n          <label class=\"form-check-label\" for=\"exampleRadios2\">\r\n            No, I wouldn't recommend\r\n          </label>\r\n        </div>\r\n        <br><br>\r\n        <p>Your reference will appear on {{people.fullName}}'s profile, so be sure that you're only sharing words you're comfortable\r\n          saying publicly. <span style=\"font-weight: 600\">You can't edit or delete it.</span> </p>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label for=\"content\">Your reference<span style=\"color: red\">*</span></label>\r\n        <textarea required ngModel class=\"form-control\" name=\"content\" id=\"content\" rows=\"5\"></textarea>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button [disabled]=\"isdiable\" type=\"button\" class=\"btn btn-secondary\" (click)=\"modalRef.close()\">Cancel</button>\r\n    <button [disabled]=\"referenceForm.invalid || isdiable\" type=\"button\" class=\"btn btn-success\" (click)=\"send(referenceForm);\">Send</button>\r\n  </div>\r\n</ng-template>"

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
        this.isdiable = false;
        this.modalRef = this.modalService.open(this.content, { windowClass: 'modal-holder', });
        // console.log(this.route.url)
    };
    WriteReferenceModalComponent.prototype.send = function (referenceForm) {
        var _this = this;
        this.isdiable = true;
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

module.exports = "<!-- <div class=\"center\">\r\n  <div class=\"wrapper\">\r\n    <div class=\"alert alert-light\" role=\"alert\">\r\n        <b>{{peoples.length}} Results</b>\r\n    </div>\r\n    <app-people\r\n      *ngFor=\"let people of peoples; let i = index\"\r\n      [ngClass]=\"{left: true, clear: i % 2 === 0 ? true : false}\"\r\n    >\r\n    </app-people>\r\n  </div>\r\n</div> -->\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-sm-2\"></div>\r\n\r\n  <div class=\"col-sm\">\r\n    <!-- <div class=\"lds-ring\" *ngIf=\"!peoples\"><div></div><div></div><div></div><div></div></div> -->\r\n\r\n    <div class=\"d-flex justify-content-center text-secondary m-3\" *ngIf=\"!hosts && !travelers && !peoples; else inform\">\r\n        <div class=\"spinner-border\" role=\"status\" style=\"width: 3em; height: 3em;\">\r\n          <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n    </div>\r\n\r\n    <ng-template #inform>\r\n        <div class=\"alert alert-light box\" *ngIf=\"length === 0;else Result\">No result with key \"{{address}}\" for {{hosts ? 'hosts' : travelers ? 'travelers' : 'people'}}</div>\r\n        <ng-template #Result>\r\n            <div class=\"alert alert-light box\">{{length}} result{{length > 1 ? 's' : ''}} with key \"{{address}}\" for {{hosts ? 'hosts' : travelers ? 'travelers' : 'people'}}</div>\r\n        </ng-template>\r\n    </ng-template>\r\n\r\n\r\n\r\n    <div class=\"row\">\r\n      <ng-container *ngIf=\"hosts;else noHost\">\r\n        <div class=\"col-sm-6\" *ngFor=\"let host of hosts\" [ngStyle]=\"{padding: '5px'}\">\r\n          <app-people [user]=\"host\"></app-people>\r\n        </div>\r\n      </ng-container>\r\n\r\n      <ng-template #noHost>\r\n        <ng-container *ngIf=\"travelers; else user\">\r\n          <div class=\"col-sm-6\" *ngFor=\"let traveler of travelers\" [ngStyle]=\"{padding: '5px'}\">\r\n              <app-people [trip]=\"traveler\"></app-people>\r\n          </div>\r\n        </ng-container>\r\n\r\n        <ng-template #user>\r\n          <div class=\"col-sm-6\" *ngFor=\"let people of peoples\" [ngStyle]=\"{padding: '5px'}\">\r\n              <app-people [people]=\"people\"></app-people>\r\n          </div>\r\n        </ng-template>\r\n\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-sm-2\">\r\n\r\n  </div>\r\n</div>\r\n"

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
            else if (data.type === 'traveler') {
                _this.subscription = _this.UserService.getTravelerByAddress(_this.address).subscribe(function (trip) {
                    _this.travelers = trip;
                    _this.length = _this.travelers.length;
                    _this.hosts = null;
                });
            }
            else {
                _this.subscription = _this.UserService.getUserByFullName(_this.address).subscribe(function (people) {
                    _this.peoples = people;
                    _this.length = people.length;
                    _this.hosts = null;
                    _this.travelers = null;
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

module.exports = "/* :host(app-user){\r\n    min-height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n  } */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3VzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztLQUlLIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyL3VzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIDpob3N0KGFwcC11c2VyKXtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfSAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/components/user/user.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-progress></ng-progress>\r\n<div id=\"main-header\" class=\"header shadow-sm\">\r\n    <app-header></app-header>\r\n</div>\r\n<div id=\"main-container\" class=\"container\">\r\n    <router-outlet (activate)=\"onActivate($event)\"></router-outlet>\r\n</div>\r\n<div id=\"main-footer\" class=\"footer shadow-sm \">\r\n    <app-footer></app-footer>\r\n</div>\r\n"

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
            selector: '.app-user',
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

module.exports = "p{\r\n    font-style: italic;\r\n}\r\nbutton{\r\n    width: 200px;\r\n    \r\n}\r\ninput{\r\n    text-indent: 25px;\r\n}\r\n.form-input{\r\n    position: relative;\r\n}\r\n.form-input i{\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 10px;\r\n}\r\n.box-header{\r\n    background-image:unset;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyYXV0aC9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7O0FBRWhCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcmF1dGgvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5idXR0b257XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBcclxufVxyXG5pbnB1dHtcclxuICAgIHRleHQtaW5kZW50OiAyNXB4O1xyXG59XHJcbi5mb3JtLWlucHV0e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5mb3JtLWlucHV0IGl7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG59XHJcbi5ib3gtaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1bnNldDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/userauth/signin/signin.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/userauth/signin/signin.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-progress></ng-progress>\r\n<div class=\"box\" style=\"padding:20px\">\r\n  <div class=\"box-header\" style=\"text-align:center;\">\r\n    <span style=\"font-size: 25px\">LOGIN</span>\r\n  </div>\r\n\r\n  <div class=\"form-login\" style=\"padding-top:20px\">\r\n    <form (submit)=\"onSubmit(formSignin);\" #formSignin=\"ngForm\">\r\n      <div class=\"form-group\">\r\n        <label for=\"username\">Username</label>\r\n        <div class=\"form-input\">\r\n          <i class=\"fas fa-user\"></i><input required ngModel #txtusername=\"ngModel\" name=\"username\"\r\n            class=\" form-control\" id=\"username\" placeholder=\"Enter Username\">\r\n        </div>\r\n        <!-- <p class=\"text-danger\" *ngIf=\"txtusername.touched && txtusername.errors?.required\">Username is requied</p> -->\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"password\">Password</label>\r\n        <div class=\"form-input\">\r\n          <i class=\"fas fa-key\"></i><input required ngModel #txtpassword=\"ngModel\" type=\"password\" name=\"password\"\r\n            class=\"form-control\" id=\"password\" placeholder=\"Enter Password\">\r\n        </div>\r\n        <!-- <p class=\"text-danger\" *ngIf=\"txtpassword.touched && txtpassword.errors?.required\">Password is requied</p> -->\r\n      </div>\r\n      <div class=\"form-group form-check\">\r\n        <input ngModel name=\"checkbox\" type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\r\n        <label class=\"form-check-label\" for=\"exampleCheck1\">Remember me</label>\r\n        <a style=\" float: right;\" href=\"\">Fogot Password?</a>\r\n      </div>\r\n      <div style=\"text-align:center\">\r\n      <button [disabled]=\"formSignin.invalid\" type=\"submit\" class=\"btn btn-primary\">Login</button>\r\n    </div>\r\n    </form>\r\n  </div>\r\n</div>"

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

module.exports = ".text-danger{\r\n    font-style: italic;\r\n}\r\nbutton{\r\n    width:200px;\r\n}\r\n.box-header{\r\n    background-image:unset;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1kYW5nZXJ7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgd2lkdGg6MjAwcHg7XHJcbn1cclxuLmJveC1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVuc2V0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/userauth/signup/signup.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/userauth/signup/signup.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\" style=\"padding:20px\">\r\n  <div class=\"box-header\" style=\"text-align:center\">\r\n    <span style=\"font-size: 25px\">REGISTER</span>\r\n  </div>\r\n  <div class=\"form-singup\" style=\"padding-top:20px\">\r\n\r\n    <form [formGroup]=\"formModel\" autocomplete=\"off\" (submit)=\"onSubmit()\">\r\n      <div class=\"form-group required\">\r\n        <label>Username<span style=\"color: red;\">*</span></label>\r\n        <input class=\"form-control \" formControlName=\"UserName\"\r\n          [ngClass]=\"{'is-invalid':formModel.get('UserName').touched && formModel.get('UserName').errors?.required }\">\r\n        <!-- <label class=\"text-danger\"\r\n          *ngIf=\"formModel.get('UserName').touched && formModel.get('UserName').errors?.required\">This\r\n          field is mandatory.</label> -->\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Email</label>\r\n        <input class=\"form-control\" formControlName=\"Email\"  [ngClass]=\"{'is-invalid':formModel.get('Email').touched && formModel.get('Email').errors?.email }\">\r\n        <label class=\"text-danger\"\r\n          *ngIf=\"formModel.get('Email').touched && formModel.get('Email').errors?.email\">Invalid\r\n          email address.</label>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Full Name<span style=\"color: red;\">*</span></label>\r\n        <input class=\"form-control\" formControlName=\"FullName\"\r\n          [ngClass]=\"{'is-invalid':formModel.get('FullName').touched && formModel.get('FullName').errors?.required }\">\r\n        <!-- <label class=\"text-danger\"\r\n          *ngIf=\"formModel.get('FullName').touched && formModel.get('FullName').errors?.required\">This\r\n          field is mandatory.</label> -->\r\n      </div>\r\n      <div formGroupName=\"Passwords\">\r\n        <div class=\"form-group required\">\r\n          <label>Password<span style=\"color: red;\">*</span></label>\r\n          <input type=\"password\" class=\"form-control\" formControlName=\"Password\"\r\n            [ngClass]=\"{'is-invalid':formModel.get('Passwords.Password').touched && ((formModel.get('Passwords.Password').errors?.required) || (formModel.get('Passwords.Password').errors?.minlength)) }\">\r\n          <!-- <label class=\"text-danger\"\r\n            *ngIf=\"formModel.get('Passwords.Password').touched && formModel.get('Passwords.Password').errors?.required\">This\r\n            field is mandatory.</label> -->\r\n          <label class=\"text-danger\"\r\n            *ngIf=\"formModel.get('Passwords.Password').touched && formModel.get('Passwords.Password').errors?.minlength\">Minimum\r\n            4 characters required.</label>\r\n        </div>\r\n        <div class=\"form-group required\">\r\n          <label>Confirm Password<span style=\"color: red;\">*</span></label>\r\n          <input type=\"password\" class=\"form-control\" formControlName=\"ConfirmPassword\"\r\n            [ngClass]=\"{'is-invalid':formModel.get('Passwords.ConfirmPassword').touched && ((formModel.get('Passwords.ConfirmPassword').errors?.required)||(formModel.get('Passwords.ConfirmPassword').errors?.passwordMismatch)) }\">\r\n          <!-- <label class=\"text-danger\"\r\n            *ngIf=\"formModel.get('Passwords.ConfirmPassword').touched && formModel.get('Passwords.ConfirmPassword').errors?.required\">This\r\n            field is mandatory.</label> -->\r\n          <label class=\"text-danger\"\r\n            *ngIf=\"formModel.get('Passwords.ConfirmPassword').touched && formModel.get('Passwords.ConfirmPassword').errors?.passwordMismatch\">Confirm\r\n            Password does not match.</label>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"form-group form-check\">\r\n        <input name=\"checkbox\" type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\" formControlName=\"Checkbox\">\r\n        <label class=\"form-check-label\" for=\"exampleCheck1\">I have accept the terms of our</label>\r\n      </div>\r\n      <div style=\"text-align:center\">\r\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!formModel.valid\">Register </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

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

module.exports = "\r\n\r\n.header-wrapper{\r\n    /* padding:0px 10px 0px 10px;  */\r\n    /* min-width: 500px; */\r\n    max-width: 1280px;\r\n    margin: auto;\r\n    display: flex;\r\n    align-items: center;\r\n    height: 60px;\r\n}\r\n.logo{\r\n    padding-left: 10px;\r\n    \r\n}\r\n.logo a{\r\n    display: inline-block;\r\n    color: #ED6504;\r\n}\r\n.logo i{\r\n    font-size: 50px;\r\n}\r\n.menu-bar {\r\n   min-width: 240px;\r\n    margin-left: auto;\r\n    margin-right: 110px;\r\n}\r\n.menu-bar button{\r\n    color: #007bff;\r\n    background-color: white;\r\n    margin-left: 20px;\r\n    width: 100px;\r\n}\r\n/*---header---*/\r\n/* .container{\r\n    background-image: url(\"/assets/imgs/15T2.jpg\") ;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    max-width: 100% !important;\r\n    min-height: 100vh;\r\n    background-position: center; \r\n} */\r\n.container-wrapper{\r\n   max-width: 1280px;\r\n   margin: auto;\r\n}\r\n.auth-box{\r\n    /* min-height: 700px; */\r\n    /* max-height: 100%; */\r\n    min-width: 450px;\r\n    max-width: 450px;\r\n}\r\n.content{\r\n    padding-top: 100px!important;\r\n    text-align: center;\r\n    color: white;\r\n    padding-bottom: 100px!important;\r\n}\r\n@media screen and (max-width: 768px) {\r\n    .container{\r\n        padding: 62px 2px 0px 2px!important;\r\n    }\r\n    .content{\r\n        flex: 0 0 100%;\r\n        max-width: 100%;\r\n        order: 2;\r\n    }\r\n    .auth-box{\r\n        flex: 0 0 100%;\r\n        max-width: 100%;\r\n        order: 1;\r\n        padding: 0px;\r\n        min-width: unset;\r\n        max-width: unset;\r\n    }\r\n    \r\n   \r\n}\r\n@media screen and (max-width: 480px) {\r\n    .logo{\r\n        display: none;\r\n    }\r\n    img{\r\n        height: 35px!important;\r\n    }\r\n    .menu-bar button{\r\n    width: unset;\r\n    margin-left: 5px;\r\n    }\r\n    .menu-bar{\r\n        min-width: unset;\r\n        margin-right: 20px;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyYXV0aC91c2VyYXV0aC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0dBQ0csZ0JBQWdCO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjtBQUVBLGVBQWU7QUFDZjs7Ozs7OztHQU9HO0FBQ0g7R0FDRyxpQkFBaUI7R0FDakIsWUFBWTtBQUNmO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLCtCQUErQjtBQUNuQztBQUVBO0lBQ0k7UUFDSSxtQ0FBbUM7SUFDdkM7SUFDQTtRQUNJLGNBQWM7UUFDZCxlQUFlO1FBQ2YsUUFBUTtJQUNaO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsZUFBZTtRQUNmLFFBQVE7UUFDUixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGdCQUFnQjtJQUNwQjs7O0FBR0o7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7SUFDQSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsa0JBQWtCO0lBQ3RCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXJhdXRoL3VzZXJhdXRoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5oZWFkZXItd3JhcHBlcntcclxuICAgIC8qIHBhZGRpbmc6MHB4IDEwcHggMHB4IDEwcHg7ICAqL1xyXG4gICAgLyogbWluLXdpZHRoOiA1MDBweDsgKi9cclxuICAgIG1heC13aWR0aDogMTI4MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuLmxvZ297XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBcclxufVxyXG4ubG9nbyBhe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6ICNFRDY1MDQ7XHJcbn1cclxuLmxvZ28gaXtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxufVxyXG4ubWVudS1iYXIge1xyXG4gICBtaW4td2lkdGg6IDI0MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDExMHB4O1xyXG59XHJcbi5tZW51LWJhciBidXR0b257XHJcbiAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi8qLS0taGVhZGVyLS0tKi9cclxuLyogLmNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1ncy8xNVQyLmpwZ1wiKSA7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxyXG59ICovXHJcbi5jb250YWluZXItd3JhcHBlcntcclxuICAgbWF4LXdpZHRoOiAxMjgwcHg7XHJcbiAgIG1hcmdpbjogYXV0bztcclxufVxyXG4uYXV0aC1ib3h7XHJcbiAgICAvKiBtaW4taGVpZ2h0OiA3MDBweDsgKi9cclxuICAgIC8qIG1heC1oZWlnaHQ6IDEwMCU7ICovXHJcbiAgICBtaW4td2lkdGg6IDQ1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcclxufVxyXG4uY29udGVudHtcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweCFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHghaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICBwYWRkaW5nOiA2MnB4IDJweCAwcHggMnB4IWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jb250ZW50e1xyXG4gICAgICAgIGZsZXg6IDAgMCAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBvcmRlcjogMjtcclxuICAgIH1cclxuICAgIC5hdXRoLWJveHtcclxuICAgICAgICBmbGV4OiAwIDAgMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgb3JkZXI6IDE7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogdW5zZXQ7XHJcbiAgICAgICAgbWF4LXdpZHRoOiB1bnNldDtcclxuICAgIH1cclxuICAgIFxyXG4gICBcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5sb2dve1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBpbWd7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4IWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5tZW51LWJhciBidXR0b257XHJcbiAgICB3aWR0aDogdW5zZXQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgfVxyXG4gICAgLm1lbnUtYmFye1xyXG4gICAgICAgIG1pbi13aWR0aDogdW5zZXQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/userauth/userauth.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/userauth/userauth.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header shadow-lg\">\r\n    <nav class=\"header-wrapper\">\r\n        <div class=\"logo\">\r\n            <a routerLink='/Users/Dashboard' routerLinkActive='active'>\r\n                <i class=\"fas fa-globe-asia\"></i>\r\n\r\n            </a>\r\n\r\n        </div>\r\n        <img style=\"height:50px;padding-left: 20px\" src=\"./../../../assets/imgs/logo.png\">\r\n\r\n\r\n        <div class=\"menu-bar\">\r\n\r\n            <button class=\"btn btn-outline-primary \" [routerLink]=\"['SignIn']\" routerLinkActive='active'>Login</button>\r\n            <button class=\"btn btn-outline-primary \" [routerLink]=\"['SignUp']\" routerLinkActive='active'>Sign\r\n                Up</button>\r\n\r\n        </div>\r\n    </nav>\r\n</div>\r\n<!-- Header -->\r\n<div class=\"container\">\r\n    <div class=\"container-wrapper row\">\r\n        <div class=\"content col\">\r\n            <h1>Stay with Locals and Meet Travelers </h1>\r\n            <h3>Join to share authentic travel experiences</h3>\r\n        </div>\r\n        <div class=\"auth-box col\">\r\n            <div class=\"form-box\">\r\n                <router-outlet (activate)=\"onActivate($event)\"></router-outlet>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n<div class=\"footer shadow-lg\">\r\n    <app-footer></app-footer>\r\n</div>"

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
            selector: '.app-userauth',
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

/***/ "./src/app/pipes/format-date.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/format-date.pipe.ts ***!
  \*******************************************/
/*! exports provided: FormatDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatDate", function() { return FormatDate; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var FormatDate = /** @class */ (function () {
    function FormatDate() {
    }
    FormatDate.prototype.transform = function (value, format) {
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(value, format, 'en-US', 'UTC+14');
    };
    FormatDate = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'formatDate'
        })
    ], FormatDate);
    return FormatDate;
}());



/***/ }),

/***/ "./src/app/services/user.resolve.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.resolve.ts ***!
  \******************************************/
/*! exports provided: TokenResolve, UserResolve, HomeResolve, PlacesDashboardResolve, ProfileResolve, IsFriendResolve, DefaultUserChatResolve, ListUserChatResolve, CurrentUserChatResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenResolve", function() { return TokenResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResolve", function() { return UserResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeResolve", function() { return HomeResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesDashboardResolve", function() { return PlacesDashboardResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileResolve", function() { return ProfileResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsFriendResolve", function() { return IsFriendResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultUserChatResolve", function() { return DefaultUserChatResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListUserChatResolve", function() { return ListUserChatResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentUserChatResolve", function() { return CurrentUserChatResolve; });
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

var PlacesDashboardResolve = /** @class */ (function () {
    function PlacesDashboardResolve(service) {
        this.service = service;
    }
    PlacesDashboardResolve.prototype.resolve = function () {
        return this.service.getPlaces();
    };
    PlacesDashboardResolve = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], PlacesDashboardResolve);
    return PlacesDashboardResolve;
}());

var ProfileResolve = /** @class */ (function () {
    function ProfileResolve(service, route) {
        this.service = service;
        this.route = route;
    }
    ProfileResolve.prototype.resolve = function (activatedRouteSnapshot) {
        var _this = this;
        var id = activatedRouteSnapshot.paramMap.get('id');
        console.log(id);
        this.service.setPeopleid(id);
        this.service.getUser().subscribe(function (res) {
            if (res.err)
                _this.route.navigate(['Users/People/404']);
        });
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

var IsFriendResolve = /** @class */ (function () {
    function IsFriendResolve(service) {
        this.service = service;
    }
    IsFriendResolve.prototype.resolve = function (activatedRouteSnapshot) {
        var id = activatedRouteSnapshot.paramMap.get('id');
        return this.service.checkIsFriend(id);
    };
    IsFriendResolve = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], IsFriendResolve);
    return IsFriendResolve;
}());

var DefaultUserChatResolve = /** @class */ (function () {
    function DefaultUserChatResolve(service, router) {
        this.service = service;
        this.router = router;
    }
    DefaultUserChatResolve.prototype.resolve = function (activatedRouteSnapshot) {
        var _this = this;
        var id = activatedRouteSnapshot.queryParamMap.get('id');
        console.log(id);
        if (id == null) {
            this.service.getListUserChat(0).subscribe(function (res) {
                if (res[0]) {
                    _this.router.navigate(['/Users/Message'], { queryParams: { id: res[0].id } });
                }
            });
        }
        console.log(id);
    };
    DefaultUserChatResolve = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DefaultUserChatResolve);
    return DefaultUserChatResolve;
}());

var ListUserChatResolve = /** @class */ (function () {
    function ListUserChatResolve(service, router) {
        this.service = service;
        this.router = router;
    }
    ListUserChatResolve.prototype.resolve = function (activatedRouteSnapshot) {
        return this.service.getListUserChat(0);
    };
    ListUserChatResolve = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListUserChatResolve);
    return ListUserChatResolve;
}());

var CurrentUserChatResolve = /** @class */ (function () {
    function CurrentUserChatResolve(service, router) {
        this.service = service;
        this.router = router;
    }
    CurrentUserChatResolve.prototype.resolve = function (activatedRouteSnapshot) {
        var id = activatedRouteSnapshot.queryParamMap.get('id');
        console.log(id);
        if (id)
            return this.service.getPeopleProfile(id);
    };
    CurrentUserChatResolve = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CurrentUserChatResolve);
    return CurrentUserChatResolve;
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
        this.changePass = '/ApplicationUser/ChangePassword';
        this.searchUser = '/Users/SearchByName?name=';
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
    UserService.prototype.getSentTraveRequest = function () {
        return this.http.get(this.BaseURI + '/Users/SentTravelRequests');
    };
    UserService.prototype.getSentHostOffer = function () {
        return this.http.get(this.BaseURI + '/Users/SentHostOffers');
    };
    UserService.prototype.getSentFriendRequest = function () {
        return this.http.get(this.BaseURI + '/Users/SentFriendRequests');
    };
    UserService.prototype.getNotification = function () {
        return this.http.get(this.BaseURI + '/Notifications');
    };
    UserService.prototype.deleteNotification = function (id) {
        return this.http.delete(this.BaseURI + '/Notifications/' + id, { reportProgress: true, observe: "response" });
    };
    //  =============================
    UserService.prototype.getTraveRequest = function () {
        return this.http.get(this.BaseURI + '/Users/TravelRequests');
    };
    UserService.prototype.sendRequest = function (body, id) {
        return this.http.post(this.BaseURI + '/TravelRequests/' + id, body, { reportProgress: true, observe: "response" });
    };
    UserService.prototype.acceptRequest = function (id) {
        return this.http.put(this.BaseURI + '/TravelRequests/' + id, { reportProgress: true, observe: "response" });
    };
    UserService.prototype.ignoreRequest = function (id) {
        return this.http.delete(this.BaseURI + '/TravelRequests/' + id, { reportProgress: true, observe: "response" });
    };
    //=============================
    UserService.prototype.getHostOffer = function () {
        return this.http.get(this.BaseURI + '/Users/HostOffers');
    };
    UserService.prototype.sendHostOffer = function (body, id) {
        return this.http.post(this.BaseURI + '/HostOffers/' + id, body, { reportProgress: true, observe: "response" });
    };
    UserService.prototype.acceptHostOffer = function (id) {
        return this.http.put(this.BaseURI + '/HostOffers/' + id, { reportProgress: true, observe: "response" });
    };
    UserService.prototype.ignoreHostOffer = function (id) {
        return this.http.delete(this.BaseURI + '/HostOffers/' + id, { reportProgress: true, observe: "response" });
    };
    //==============================
    UserService.prototype.getFriendRequest = function () {
        return this.http.get(this.BaseURI + '/Users/FriendRequests/');
    };
    UserService.prototype.sendFriendRequest = function (body, id) {
        return this.http.post(this.BaseURI + '/FriendRequests/' + id, body, { reportProgress: true, observe: "response" });
    };
    UserService.prototype.acceptFriendRequest = function (id) {
        return this.http.put(this.BaseURI + '/FriendRequests/' + id, { reportProgress: true, observe: "response" });
    };
    UserService.prototype.ignoreFriendRequest = function (id) {
        return this.http.delete(this.BaseURI + '/FriendRequests/' + id, { reportProgress: true, observe: "response" });
    };
    //  =============================
    UserService.prototype.getUserProfile = function () {
        return this.http.get(this.BaseURI + '/Users');
    };
    UserService.prototype.getPeopleProfile = function (id) {
        return this.http.get(this.BaseURI + '/Users/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            console.log(err.status);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ 'err': err.status, 'id': id });
        }));
    };
    //  =============================
    UserService.prototype.getUserFriends = function () {
        return this.http.get(this.BaseURI + '/Users/Friends');
    };
    UserService.prototype.checkIsFriend = function (id) {
        return this.http.get(this.BaseURI + '/Friends/CheckIsFriend/' + id);
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
    UserService.prototype.getPlaces = function () {
        return this.http.get('assets/db.json');
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
    UserService.prototype.changePassword = function (password) {
        return this.http.put(this.BaseURI + this.changePass, password, { reportProgress: true, observe: "response" });
    };
    UserService.prototype.getUserByFullName = function (name) {
        return this.http.get(this.BaseURI + this.searchUser + name);
    };
    //message
    UserService.prototype.getMessage = function (id, index) {
        return this.http.get(this.BaseURI + '/Users/Messages/' + id + '?index=' + index + '&size=' + 15);
    };
    UserService.prototype.getListUserChat = function (index) {
        return this.http.get(this.BaseURI + '/users/messagesenders?index=' + index + '&size=' + 10);
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