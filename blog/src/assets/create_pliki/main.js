(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

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

module.exports = "<app-app-navbar></app-app-navbar>\n<router-outlet></router-outlet>\n\n\n"

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
        this.title = 'blog';
    }
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/quiz/quiz.component */ "./src/app/components/quiz/quiz.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_app_navbar_app_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/app-navbar/app-navbar.component */ "./src/app/components/app-navbar/app-navbar.component.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _components_blog_item_blog_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/blog-item/blog-item.component */ "./src/app/components/blog-item/blog-item.component.ts");
/* harmony import */ var _components_blog_item_text_blog_item_text_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/blog-item-text/blog-item-text.component */ "./src/app/components/blog-item-text/blog-item-text.component.ts");
/* harmony import */ var _components_blog_item_image_blog_item_image_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/blog-item-image/blog-item-image.component */ "./src/app/components/blog-item-image/blog-item-image.component.ts");
/* harmony import */ var _components_blog_item_detail_blog_item_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/blog-item-detail/blog-item-detail.component */ "./src/app/components/blog-item-detail/blog-item-detail.component.ts");
/* harmony import */ var _summary_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./summary.pipe */ "./src/app/summary.pipe.ts");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/filter.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/search-bar/search-bar.component */ "./src/app/components/search-bar/search-bar.component.ts");
/* harmony import */ var _components_blog_home_blog_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/blog-home/blog-home.component */ "./src/app/components/blog-home/blog-home.component.ts");
/* harmony import */ var _directives_text_format_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./directives/text-format.directive */ "./src/app/directives/text-format.directive.ts");
/* harmony import */ var _components_blog_create_blog_create_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/blog-create/blog-create.component */ "./src/app/components/blog-create/blog-create.component.ts");
/* harmony import */ var _services_admin_guard_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/admin-guard.guard */ "./src/app/services/admin-guard.guard.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/auth/auth.interceptor */ "./src/app/services/auth/auth.interceptor.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_blog_story_add_blog_story_add_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/blog-story-add/blog-story-add.component */ "./src/app/components/blog-story-add/blog-story-add.component.ts");
/* harmony import */ var _components_blog_comment_add_blog_comment_add_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/blog-comment-add/blog-comment-add.component */ "./src/app/components/blog-comment-add/blog-comment-add.component.ts");
/* harmony import */ var _components_blog_item_comment_details_blog_item_comment_details_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/blog-item-comment-details/blog-item-comment-details.component */ "./src/app/components/blog-item-comment-details/blog-item-comment-details.component.ts");
/* harmony import */ var _components_blog_item_entry_details_blog_item_entry_details_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/blog-item-entry-details/blog-item-entry-details.component */ "./src/app/components/blog-item-entry-details/blog-item-entry-details.component.ts");
/* harmony import */ var _components_blog_item_note_details_blog_item_note_details_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/blog-item-note-details/blog-item-note-details.component */ "./src/app/components/blog-item-note-details/blog-item-note-details.component.ts");
/* harmony import */ var _components_blog_item_issue_details_blog_item_issue_details_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/blog-item-issue-details/blog-item-issue-details.component */ "./src/app/components/blog-item-issue-details/blog-item-issue-details.component.ts");
/* harmony import */ var _components_blog_item_issue_add_blog_item_issue_add_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/blog-item-issue-add/blog-item-issue-add.component */ "./src/app/components/blog-item-issue-add/blog-item-issue-add.component.ts");
/* harmony import */ var _components_blog_item_note_add_blog_item_note_add_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/blog-item-note-add/blog-item-note-add.component */ "./src/app/components/blog-item-note-add/blog-item-note-add.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































// import { AdminProfileComponent } from './components/';
var appRoutes = [
    {
        path: '',
        redirectTo: '/blog',
        pathMatch: 'full'
    },
    {
        path: 'contact',
        component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]
    },
    {
        path: 'quiz',
        component: _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_4__["QuizComponent"],
        canActivate: [_services_admin_guard_guard__WEBPACK_IMPORTED_MODULE_20__["AdminGuard"]],
        data: { state: 'admin' }
    },
    {
        path: 'blog',
        component: _components_blog_home_blog_home_component__WEBPACK_IMPORTED_MODULE_17__["BlogHomeComponent"]
    },
    {
        path: 'blog/details/:id',
        component: _components_blog_item_detail_blog_item_detail_component__WEBPACK_IMPORTED_MODULE_12__["BlogItemDetailComponent"]
    },
    {
        path: 'blog/create',
        component: _components_blog_create_blog_create_component__WEBPACK_IMPORTED_MODULE_19__["BlogCreateComponent"],
    },
    {
        path: 'blog/comment/create',
        component: _components_blog_comment_add_blog_comment_add_component__WEBPACK_IMPORTED_MODULE_27__["BlogCommentAddComponent"]
    },
    {
        path: 'blog/issue/create',
        component: _components_blog_item_issue_add_blog_item_issue_add_component__WEBPACK_IMPORTED_MODULE_32__["BlogItemIssueAddComponent"]
    },
    {
        path: 'blog/note/create',
        component: _components_blog_item_note_add_blog_item_note_add_component__WEBPACK_IMPORTED_MODULE_33__["BlogItemNoteAddComponent"]
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"]
    },
    {
        path: 'signup',
        component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_25__["SignupComponent"]
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"],
                _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_4__["QuizComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _components_app_navbar_app_navbar_component__WEBPACK_IMPORTED_MODULE_7__["AppNavbarComponent"],
                _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_8__["BlogComponent"],
                _components_blog_item_blog_item_component__WEBPACK_IMPORTED_MODULE_9__["BlogItemComponent"],
                _components_blog_item_text_blog_item_text_component__WEBPACK_IMPORTED_MODULE_10__["BlogItemTextComponent"],
                _components_blog_item_image_blog_item_image_component__WEBPACK_IMPORTED_MODULE_11__["BlogItemImageComponent"],
                _components_blog_item_detail_blog_item_detail_component__WEBPACK_IMPORTED_MODULE_12__["BlogItemDetailComponent"],
                _summary_pipe__WEBPACK_IMPORTED_MODULE_13__["SummaryPipe"],
                _filter_pipe__WEBPACK_IMPORTED_MODULE_14__["FilterPipe"],
                _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_16__["SearchBarComponent"],
                _components_blog_home_blog_home_component__WEBPACK_IMPORTED_MODULE_17__["BlogHomeComponent"],
                _directives_text_format_directive__WEBPACK_IMPORTED_MODULE_18__["TextFormatDirective"],
                _components_blog_create_blog_create_component__WEBPACK_IMPORTED_MODULE_19__["BlogCreateComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
                _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_25__["SignupComponent"],
                _components_blog_story_add_blog_story_add_component__WEBPACK_IMPORTED_MODULE_26__["BlogStoryAddComponent"],
                _components_blog_comment_add_blog_comment_add_component__WEBPACK_IMPORTED_MODULE_27__["BlogCommentAddComponent"],
                _components_blog_item_comment_details_blog_item_comment_details_component__WEBPACK_IMPORTED_MODULE_28__["BlogItemCommentDetailsComponent"],
                _components_blog_item_entry_details_blog_item_entry_details_component__WEBPACK_IMPORTED_MODULE_29__["BlogItemEntryDetailsComponent"],
                _components_blog_item_note_details_blog_item_note_details_component__WEBPACK_IMPORTED_MODULE_30__["BlogItemNoteDetailsComponent"],
                _components_blog_item_issue_details_blog_item_issue_details_component__WEBPACK_IMPORTED_MODULE_31__["BlogItemIssueDetailsComponent"],
                _components_blog_item_issue_add_blog_item_issue_add_component__WEBPACK_IMPORTED_MODULE_32__["BlogItemIssueAddComponent"],
                _components_blog_item_note_add_blog_item_note_add_component__WEBPACK_IMPORTED_MODULE_33__["BlogItemNoteAddComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(appRoutes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HTTP_INTERCEPTORS"],
                    useClass: _services_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_23__["AuthInterceptor"],
                    multi: true
                },
                [_services_auth_service__WEBPACK_IMPORTED_MODULE_24__["AuthService"]],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/app-navbar/app-navbar.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/app-navbar/app-navbar.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  float: left;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\nli {\n  display: block;\n  float: left;\n  text-align: center;\n  padding: 10px 15px;\n  background-color: transparent;\n}\n\nli > a{\n  background-color: #f44336 !important;\n}\n\n.btn{\n  background-color: #f44336 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcHAtbmF2YmFyL2FwcC1uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7RUFDVixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsOEJBQThCO0NBQy9COztBQUVEO0VBQ0UscUNBQXFDO0NBQ3RDOztBQUVEO0VBQ0UscUNBQXFDO0NBQ3RDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hcHAtbmF2YmFyL2FwcC1uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmxpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmxpID4gYXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNiAhaW1wb3J0YW50O1xufVxuXG4uYnRue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2ICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/app-navbar/app-navbar.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/app-navbar/app-navbar.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"container col-sm-9 -align-center\" style=\"float: none; margin: 0 auto;\">\n    <img src=\"/assets/collab-writing-logo.png\" alt=\"logo\">\n    <div class=\"row\">\n        <ul class=\"nav nav-pills nav-fill justify-content-center\">\n            <li class=\"nav-item\">\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link active\" routerLink=\"/blog\">Opowiadania</a>\n            </li>\n            <span *ngIf=\"isLogged()\">\n                <li class=\"nav-item\">\n                    <button (click)=\"logOut()\" class=\"dropdown-item\">Wyloguj</button>\n                </li>\n            </span>\n            <span *ngIf=\"!isLogged()\">\n                <li class=\"nav-item\">\n                    <button (click)=\"logIn()\" class=\"dropdown-item\">Zaloguj</button>\n                </li>\n                <li class=\"nav-item\">\n                    <button (click)=\"register()\" class=\"dropdown-item\">Zarejestruj sie</button>\n                </li>\n            </span>\n\n        </ul>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/app-navbar/app-navbar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/app-navbar/app-navbar.component.ts ***!
  \***************************************************************/
/*! exports provided: AppNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppNavbarComponent", function() { return AppNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppNavbarComponent = /** @class */ (function () {
    function AppNavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AppNavbarComponent.prototype.isLogged = function () {
        var jwtHelper = new angular2_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelper"]();
        var token = localStorage.getItem('token');
        if (!token) {
            return false;
        }
        return !(jwtHelper.isTokenExpired(token));
    };
    AppNavbarComponent.prototype.logIn = function () {
        this.router.navigate(['/login']);
    };
    AppNavbarComponent.prototype.register = function () {
        this.router.navigate(['/signup']);
    };
    AppNavbarComponent.prototype.logOut = function () {
        this.authService.logout();
        // .subscribe(() => {
        //     this.router.navigate(['/home']);
        // });
    };
    AppNavbarComponent.prototype.ngOnInit = function () {
    };
    AppNavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-navbar',
            template: __webpack_require__(/*! ./app-navbar.component.html */ "./src/app/components/app-navbar/app-navbar.component.html"),
            styles: [__webpack_require__(/*! ./app-navbar.component.css */ "./src/app/components/app-navbar/app-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppNavbarComponent);
    return AppNavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/blog-comment-add/blog-comment-add.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/blog-comment-add/blog-comment-add.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy1jb21tZW50LWFkZC9ibG9nLWNvbW1lbnQtYWRkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/blog-comment-add/blog-comment-add.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/blog-comment-add/blog-comment-add.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <form method=\"post\">\n    <fieldset>\n      <div class=\"container-fluid\">\n        <legend>Uzupełnij dane</legend>\n\n        <div class=\"form-group\">\n          <label>Tytuł: </label>\n          <input [(ngModel)]=\"item.commentText\" name=\"title\" placeholder=\"Wpisz komentarz\">\n        </div>\n        <button type=\"reset\">Wyczyść</button>\n        <button type=\"submit\" (click)=\"setData(item)\">Wyślij</button>\n      </div>\n    </fieldset>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/blog-comment-add/blog-comment-add.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/blog-comment-add/blog-comment-add.component.ts ***!
  \***************************************************************************/
/*! exports provided: BlogCommentAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogCommentAddComponent", function() { return BlogCommentAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data-service.service */ "./src/app/services/data-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogCommentAddComponent = /** @class */ (function () {
    function BlogCommentAddComponent(data, _location) {
        this.data = data;
        this._location = _location;
        this.item = {
            authorName: localStorage.getItem('username'),
            storyTitle: localStorage.getItem('title'),
            commentText: ''
        };
    }
    BlogCommentAddComponent.prototype.ngOnInit = function () {
    };
    ;
    BlogCommentAddComponent.prototype.setData = function (item) {
        this.data.addComment(item).subscribe();
        this._location.back();
    };
    BlogCommentAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-comment-add',
            template: __webpack_require__(/*! ./blog-comment-add.component.html */ "./src/app/components/blog-comment-add/blog-comment-add.component.html"),
            styles: [__webpack_require__(/*! ./blog-comment-add.component.css */ "./src/app/components/blog-comment-add/blog-comment-add.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], BlogCommentAddComponent);
    return BlogCommentAddComponent;
}());



/***/ }),

/***/ "./src/app/components/blog-create/blog-create.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/blog-create/blog-create.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy1jcmVhdGUvYmxvZy1jcmVhdGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/blog-create/blog-create.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/blog-create/blog-create.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <form method=\"post\">\n    <fieldset>\n      <div class=\"container-fluid\">\n        <legend>Uzupełnij dane</legend>\n\n        <div class=\"form-group\">\n          <label>Tytuł: </label>\n          <input [(ngModel)]=\"item.title\" name=\"title\" placeholder=\"Podaj tytuł\">\n        </div>\n\n        <button type=\"reset\">Wyczyść</button>\n        <button type=\"submit\" (click)=\"setData(item)\">Wyślij</button>\n      </div>\n    </fieldset>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/blog-create/blog-create.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/blog-create/blog-create.component.ts ***!
  \*****************************************************************/
/*! exports provided: BlogCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogCreateComponent", function() { return BlogCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data-service.service */ "./src/app/services/data-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogCreateComponent = /** @class */ (function () {
    function BlogCreateComponent(data, _location) {
        this.data = data;
        this._location = _location;
        this.item = {
            title: '',
        };
    }
    BlogCreateComponent.prototype.ngOnInit = function () {
    };
    ;
    BlogCreateComponent.prototype.setData = function (item) {
        this.data.addPost(item, localStorage.getItem('username')).subscribe();
        this._location.back();
    };
    BlogCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-create',
            template: __webpack_require__(/*! ./blog-create.component.html */ "./src/app/components/blog-create/blog-create.component.html"),
            styles: [__webpack_require__(/*! ./blog-create.component.css */ "./src/app/components/blog-create/blog-create.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataServiceService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], BlogCreateComponent);
    return BlogCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/blog-home/blog-home.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/blog-home/blog-home.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy1ob21lL2Jsb2ctaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/blog-home/blog-home.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/blog-home/blog-home.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-search-bar (name)=\"getName($event)\"></app-search-bar>\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"goToBlogCreate()\" *ngIf=\"checkStorageForUsername()\">Dodaj wpis</button>\n<app-blog [filterText]=\"filterText\"></app-blog>\n"

/***/ }),

/***/ "./src/app/components/blog-home/blog-home.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/blog-home/blog-home.component.ts ***!
  \*************************************************************/
/*! exports provided: BlogHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogHomeComponent", function() { return BlogHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogHomeComponent = /** @class */ (function () {
    function BlogHomeComponent(router) {
        this.router = router;
    }
    BlogHomeComponent.prototype.ngOnInit = function () {
    };
    BlogHomeComponent.prototype.checkStorageForUsername = function () {
        return Boolean(localStorage.getItem('username'));
    };
    BlogHomeComponent.prototype.goToBlogCreate = function () {
        this.router.navigate(['/blog/create']);
    };
    BlogHomeComponent.prototype.getName = function ($event) {
        this.filterText = $event;
    };
    BlogHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-home',
            template: __webpack_require__(/*! ./blog-home.component.html */ "./src/app/components/blog-home/blog-home.component.html"),
            styles: [__webpack_require__(/*! ./blog-home.component.css */ "./src/app/components/blog-home/blog-home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BlogHomeComponent);
    return BlogHomeComponent;
}());



/***/ }),

/***/ "./src/app/components/blog-item-comment-details/blog-item-comment-details.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/blog-item-comment-details/blog-item-comment-details.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy1pdGVtLWNvbW1lbnQtZGV0YWlscy9ibG9nLWl0ZW0tY29tbWVudC1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/blog-item-comment-details/blog-item-comment-details.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/blog-item-comment-details/blog-item-comment-details.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"outline: 1px solid gray;\">\n  <div>\n  <span>{{id}} | {{username}}</span>\n  <br>\n  <span>{{text}}</span>\n    <button (click)=\"approve()\" *ngIf=\"!approved\"style="float: right;" >Zatwierdź</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/blog-item-comment-details/blog-item-comment-details.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/blog-item-comment-details/blog-item-comment-details.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: BlogItemCommentDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogItemCommentDetailsComponent", function() { return BlogItemCommentDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data-service.service */ "./src/app/services/data-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogItemCommentDetailsComponent = /** @class */ (function () {
    function BlogItemCommentDetailsComponent(data) {
        this.data = data;
    }
    BlogItemCommentDetailsComponent.prototype.ngOnInit = function () {
    };
    BlogItemCommentDetailsComponent.prototype.approve = function () {
        var _this = this;
        this.data.approveComment(this.id, localStorage.getItem('username')).subscribe(function (res) {
            console.log(res);
            _this.approved = true;
        }, function (reason) {
            console.log(reason);
            console.log(_this.id);
            console.log(localStorage.getItem('username'));
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('username'),
        __metadata("design:type", String)
    ], BlogItemCommentDetailsComponent.prototype, "username", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('text'),
        __metadata("design:type", String)
    ], BlogItemCommentDetailsComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('id'),
        __metadata("design:type", Object)
    ], BlogItemCommentDetailsComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('approved'),
        __metadata("design:type", Object)
    ], BlogItemCommentDetailsComponent.prototype, "approved", void 0);
    BlogItemCommentDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-item-comment-details',
            template: __webpack_require__(/*! ./blog-item-comment-details.component.html */ "./src/app/components/blog-item-comment-details/blog-item-comment-details.component.html"),
            styles: [__webpack_require__(/*! ./blog-item-comment-details.component.css */ "./src/app/components/blog-item-comment-details/blog-item-comment-details.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataServiceService"]])
    ], BlogItemCommentDetailsComponent);
    return BlogItemCommentDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/blog-item-detail/blog-item-detail.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/blog-item-detail/blog-item-detail.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy1pdGVtLWRldGFpbC9ibG9nLWl0ZW0tZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/blog-item-detail/blog-item-detail.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/blog-item-detail/blog-item-detail.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-sm-6 mx-auto d-block mt-5\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"goToCommentCreate(item.title)\" *ngIf=\"checkStorageForUsername()\">Dodaj Komentarz</button>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"goToIssueCreate(item.title)\" *ngIf=\"checkStorageForUsername()\">Dodaj Issue</button>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"goToNoteCreate(item.title)\" *ngIf=\"checkStorageForUsername()\">Dodaj Notatke</button>\n    <div class=\"card\" style=\"width: 32rem\">\n      <div class=\"card-body\">\n        <p class=\"card-text\">\n\t\t  <app-blog-item-text [text]=\"item.title\"></app-blog-item-text>\n\t\t</p>\n      </div>\n        <div>\n            <span>wpisy do opowiadania</span>\n            <ul style=\"list-style-type:none\">\n                <li *ngFor=\"let item of entries\">\n                    <app-blog-item-entry-details *ngIf=\"item.approved || item.authorName === currentUser()\" [text]=\"item.entryText\" [id]=\"item.entryId\" [username]=\"item.authorName\" [approved]=\"item.approved\"></app-blog-item-entry-details>\n                </li>\n            </ul>\n        </div>\n        <span>komentarze</span>\n        <ul style=\"list-style-type:none\">\n            <li *ngFor=\"let item of comments\">\n                <app-blog-item-comment-details *ngIf=\"item.approved || item.authorName === currentUser()\" [text]=\"item.commentText\" [id]=\"item.commentId\" [username]=\"item.authorName\" [approved]=\"item.approved\"></app-blog-item-comment-details>\n            </li>\n        </ul>\n    </div>\n  </div>\n    <div class=\"col-sm-3 mx-auto d-block mt-3 pull-left\">\n        <span>problemy z opowiadaniem</span>\n        <ul style=\"list-style-type:none\">\n            <li *ngFor=\"let item of issues\">\n                <app-blog-item-issue-details *ngIf=\"item.approved || item.authorName === currentUser()\" [title]=\"item.issueTitle\" [approved]=\"item.approved\" [assignedUsername]=\"item.assignedAuthorName\" [text]=\"item.description\" [id]=\"item.issueId\" [username]=\"item.authorName\" [status]=\"item.issueStatus\"></app-blog-item-issue-details>\n            </li>\n        </ul>\n    </div>\n    <div class=\"col-sm-3 mx-auto d-block mt-3 pull-right\">\n        <span>notatki</span>\n        <ul style=\"list-style-type:none\">\n            <li *ngFor=\"let item of notes\">\n                <app-blog-item-note-details *ngIf=\"item.approved || item.authorName === currentUser()\" [text]=\"item.noteData\" [id]=\"item.noteId\" [username]=\"item.authorName\" [approved]=\"item.approved\"></app-blog-item-note-details>\n            </li>\n        </ul>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/blog-item-detail/blog-item-detail.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/blog-item-detail/blog-item-detail.component.ts ***!
  \***************************************************************************/
/*! exports provided: BlogItemDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogItemDetailComponent", function() { return BlogItemDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data-service.service */ "./src/app/services/data-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogItemDetailComponent = /** @class */ (function () {
    function BlogItemDetailComponent(dataServ, route, router) {
        this.dataServ = dataServ;
        this.route = route;
        this.router = router;
        this.item = {};
    }
    BlogItemDetailComponent.prototype.goToCommentCreate = function (username) {
        localStorage.setItem('title', this.item.title);
        this.router.navigate(['/blog/comment/create']);
    };
    BlogItemDetailComponent.prototype.goToIssueCreate = function (username) {
        localStorage.setItem('title', this.item.title);
        this.router.navigate(['/blog/issue/create']);
    };
    BlogItemDetailComponent.prototype.goToNoteCreate = function (username) {
        localStorage.setItem('title', this.item.title);
        this.router.navigate(['/blog/note/create']);
    };
    BlogItemDetailComponent.prototype.checkStorageForUsername = function () {
        return Boolean(localStorage.getItem('username'));
    };
    BlogItemDetailComponent.prototype.currentUser = function () {
        return this.checkStorageForUsername() ? localStorage.getItem('username') : '';
    };
    BlogItemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.dataServ.get(this.id)
            .subscribe(function (result) {
            var res = result;
            for (var i = 0; i < res.length; i++) {
                if (res[i].storyId == _this.id) {
                    _this.item = res[i];
                    break;
                }
            }
            // this.item = result;
        });
        var currentUsername = localStorage.getItem('username');
        if (currentUsername == null) {
            currentUsername = '';
        }
        this.dataServ.getComments(this.id, currentUsername).subscribe(function (result) {
            _this.comments = result;
            console.log(result);
        });
        this.dataServ.getIssues(this.id, currentUsername).subscribe(function (result) {
            _this.issues = result;
            console.log(result);
        });
        this.dataServ.getNotes(this.id, currentUsername).subscribe(function (result) {
            _this.notes = result;
            console.log(result);
        });
        this.dataServ.getEntries(this.id, currentUsername).subscribe(function (result) {
            _this.entries = result;
            console.log(result);
        });
    };
    BlogItemDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-item-detail',
            template: __webpack_require__(/*! ./blog-item-detail.component.html */ "./src/app/components/blog-item-detail/blog-item-detail.component.html"),
            styles: [__webpack_require__(/*! ./blog-item-detail.component.css */ "./src/app/components/blog-item-detail/blog-item-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BlogItemDetailComponent);
    return BlogItemDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/blog-item-entry-details/blog-item-entry-details.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/blog-item-entry-details/blog-item-entry-details.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy1pdGVtLWVudHJ5LWRldGFpbHMvYmxvZy1pdGVtLWVudHJ5LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/blog-item-entry-details/blog-item-entry-details.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/blog-item-entry-details/blog-item-entry-details.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"outline: 1px solid gray;\">\n  <div>\n    <span>{{id}} | {{username}}</span>\n    <br>\n    <span>{{text}}</span>\n    <button (click)=\"approve()\" *ngIf=\"!approved\"style="float: right;" >Zatwierdź</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/blog-item-entry-details/blog-item-entry-details.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/blog-item-entry-details/blog-item-entry-details.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: BlogItemEntryDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogItemEntryDetailsComponent", function() { return BlogItemEntryDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data-service.service */ "./src/app/services/data-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogItemEntryDetailsComponent = /** @class */ (function () {
    function BlogItemEntryDetailsComponent(data) {
        this.data = data;
    }
    BlogItemEntryDetailsComponent.prototype.ngOnInit = function () {
    };
    BlogItemEntryDetailsComponent.prototype.approve = function () {
        var _this = this;
        this.data.approveEntry(this.id, localStorage.getItem('username')).subscribe(function (res) {
            console.log(res);
            _this.approved = true;
        }, function (reason) {
            console.log(reason);
            console.log(_this.id);
            console.log(localStorage.getItem('username'));
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('username'),
        __metadata("design:type", String)
    ], BlogItemEntryDetailsComponent.prototype, "username", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('text'),
        __metadata("design:type", String)
    ], BlogItemEntryDetailsComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('id'),
        __metadata("design:type", Object)
    ], BlogItemEntryDetailsComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('approved'),
        __metadata("design:type", Object)
    ], BlogItemEntryDetailsComponent.prototype, "approved", void 0);
    BlogItemEntryDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-item-entry-details',
            template: __webpack_require__(/*! ./blog-item-entry-details.component.html */ "./src/app/components/blog-item-entry-details/blog-item-entry-details.component.html"),
            styles: [__webpack_require__(/*! ./blog-item-entry-details.component.css */ "./src/app/components/blog-item-entry-details/blog-item-entry-details.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataServiceService"]])
    ], BlogItemEntryDetailsComponent);
    return BlogItemEntryDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/blog-item-image/blog-item-image.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/blog-item-image/blog-item-image.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy1pdGVtLWltYWdlL2Jsb2ctaXRlbS1pbWFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/blog-item-image/blog-item-image.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/blog-item-image/blog-item-image.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"card-img-top\" src=\"{{image}}\">\n"

/***/ }),

/***/ "./src/app/components/blog-item-image/blog-item-image.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/blog-item-image/blog-item-image.component.ts ***!
  \*************************************************************************/
/*! exports provided: BlogItemImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogItemImageComponent", function() { return BlogItemImageComponent; });
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

var BlogItemImageComponent = /** @class */ (function () {
    function BlogItemImageComponent() {
    }
    BlogItemImageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('image'),
        __metadata("design:type", String)
    ], BlogItemImageComponent.prototype, "image", void 0);
    BlogItemImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-item-image',
            template: __webpack_require__(/*! ./blog-item-image.component.html */ "./src/app/components/blog-item-image/blog-item-image.component.html"),
            styles: [__webpack_require__(/*! ./blog-item-image.component.css */ "./src/app/components/blog-item-image/blog-item-image.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogItemImageComponent);
    return BlogItemImageComponent;
}());



/***/ }),

/***/ "./src/app/components/blog-item-issue-add/blog-item-issue-add.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/blog-item-issue-add/blog-item-issue-add.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy1pdGVtLWlzc3VlLWFkZC9ibG9nLWl0ZW0taXNzdWUtYWRkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/blog-item-issue-add/blog-item-issue-add.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/blog-item-issue-add/blog-item-issue-add.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <form method=\"post\">\n    <fieldset>\n      <div class=\"container-fluid\">\n        <legend>Uzupełnij dane</legend>\n\n        <div class=\"form-group\">\n          <label>Tytuł: </label>\n          <input [(ngModel)]=\"item.issueTitle\" name=\"title\" placeholder=\"Wpisz tytul problemu\">\n        </div>\n        <div class=\"form-group\">\n          <label>Opis: </label>\n          <textarea [(ngModel)]=\"item.description\" name=\"title\" placeholder=\"Wpisz opis problemu\"> </textarea>\n        </div>\n        <button type=\"reset\">Wyczyść</button>\n        <button type=\"submit\" (click)=\"setData(item)\">Wyślij</button>\n      </div>\n    </fieldset>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/blog-item-issue-add/blog-item-issue-add.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/blog-item-issue-add/blog-item-issue-add.component.ts ***!
  \*********************************************************************************/
/*! exports provided: BlogItemIssueAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogItemIssueAddComponent", function() { return BlogItemIssueAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data-service.service */ "./src/app/services/data-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogItemIssueAddComponent = /** @class */ (function () {
    function BlogItemIssueAddComponent(data, _location) {
        this.data = data;
        this._location = _location;
        this.item = {
            authorName: localStorage.getItem('username'),
            storyTitle: localStorage.getItem('title'),
            issueTitle: '',
            issueStatus: 'OPEN',
            description: '',
            assignedAuthorName: localStorage.getItem('username'),
        };
    }
    BlogItemIssueAddComponent.prototype.ngOnInit = function () {
    };
    ;
    BlogItemIssueAddComponent.prototype.setData = function (item) {
        this.data.addIssue(item, localStorage.getItem('username')).subscribe();
        this._location.back();
    };
    BlogItemIssueAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-item-issue-add',
            template: __webpack_require__(/*! ./blog-item-issue-add.component.html */ "./src/app/components/blog-item-issue-add/blog-item-issue-add.component.html"),
            styles: [__webpack_require__(/*! ./blog-item-issue-add.component.css */ "./src/app/components/blog-item-issue-add/blog-item-issue-add.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataServiceService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], BlogItemIssueAddComponent);
    return BlogItemIssueAddComponent;
}());



/***/ }),

/***/ "./src/app/components/blog-item-issue-details/blog-item-issue-details.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/blog-item-issue-details/blog-item-issue-details.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy1pdGVtLWlzc3VlLWRldGFpbHMvYmxvZy1pdGVtLWlzc3VlLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/blog-item-issue-details/blog-item-issue-details.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/blog-item-issue-details/blog-item-issue-details.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"outline: 1px solid gray;\">\r\n  <div>\r\n    <span>{{title}}</span>\r\n    <br>\r\n    <span>{{id}} | {{username}} | {{status}}</span>\r\n    <br>\r\n    <span>Przypisane do: {{assignedUsername}}</span>\r\n    <br>\r\n    <span>{{text}}</span>\r\n    <button (click)=\"approve()\" *ngIf=\"!approved\"style="float: right;" >Zatwierdź</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/blog-item-issue-details/blog-item-issue-details.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/blog-item-issue-details/blog-item-issue-details.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: BlogItemIssueDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogItemIssueDetailsComponent", function() { return BlogItemIssueDetailsComponent; });
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

var BlogItemIssueDetailsComponent = /** @class */ (function () {
    function BlogItemIssueDetailsComponent() {
    }
    BlogItemIssueDetailsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('username'),
        __metadata("design:type", String)
    ], BlogItemIssueDetailsComponent.prototype, "username", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('text'),
        __metadata("design:type", String)
    ], BlogItemIssueDetailsComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('id'),
        __metadata("design:type", Object)
    ], BlogItemIssueDetailsComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('approved'),
        __metadata("design:type", Object)
    ], BlogItemIssueDetailsComponent.prototype, "approved", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('description'),
        __metadata("design:type", Object)
    ], BlogItemIssueDetailsComponent.prototype, "description", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('assignedUsername'),
        __metadata("design:type", Object)
    ], BlogItemIssueDetailsComponent.prototype, "assignedUsername", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('status'),
        __metadata("design:type", Object)
    ], BlogItemIssueDetailsComponent.prototype, "status", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('title'),
        __metadata("design:type", Object)
    ], BlogItemIssueDetailsComponent.prototype, "title", void 0);
    BlogItemIssueDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-item-issue-details',
            template: __webpack_require__(/*! ./blog-item-issue-details.component.html */ "./src/app/components/blog-item-issue-details/blog-item-issue-details.component.html"),
            styles: [__webpack_require__(/*! ./blog-item-issue-details.component.css */ "./src/app/components/blog-item-issue-details/blog-item-issue-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogItemIssueDetailsComponent);
    return BlogItemIssueDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/blog-item-note-add/blog-item-note-add.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/blog-item-note-add/blog-item-note-add.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy1pdGVtLW5vdGUtYWRkL2Jsb2ctaXRlbS1ub3RlLWFkZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/blog-item-note-add/blog-item-note-add.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/blog-item-note-add/blog-item-note-add.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  blog-item-note-add works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/blog-item-note-add/blog-item-note-add.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/blog-item-note-add/blog-item-note-add.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BlogItemNoteAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogItemNoteAddComponent", function() { return BlogItemNoteAddComponent; });
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

var BlogItemNoteAddComponent = /** @class */ (function () {
    function BlogItemNoteAddComponent() {
    }
    BlogItemNoteAddComponent.prototype.ngOnInit = function () {
    };
    BlogItemNoteAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-item-note-add',
            template: __webpack_require__(/*! ./blog-item-note-add.component.html */ "./src/app/components/blog-item-note-add/blog-item-note-add.component.html"),
            styles: [__webpack_require__(/*! ./blog-item-note-add.component.css */ "./src/app/components/blog-item-note-add/blog-item-note-add.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogItemNoteAddComponent);
    return BlogItemNoteAddComponent;
}());



/***/ }),

/***/ "./src/app/components/blog-item-note-details/blog-item-note-details.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/blog-item-note-details/blog-item-note-details.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy1pdGVtLW5vdGUtZGV0YWlscy9ibG9nLWl0ZW0tbm90ZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/blog-item-note-details/blog-item-note-details.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/blog-item-note-details/blog-item-note-details.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"outline: 1px solid gray;\">\n  <div>\n    <span>{{id}} | {{username}}</span>\n    <br>\n    <span>{{text}}</span>\n    <button (click)=\"approve()\" *ngIf=\"!approved\"style="float: right;" >Zatwierdź</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/blog-item-note-details/blog-item-note-details.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/blog-item-note-details/blog-item-note-details.component.ts ***!
  \***************************************************************************************/
/*! exports provided: BlogItemNoteDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogItemNoteDetailsComponent", function() { return BlogItemNoteDetailsComponent; });
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

var BlogItemNoteDetailsComponent = /** @class */ (function () {
    function BlogItemNoteDetailsComponent() {
    }
    BlogItemNoteDetailsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('username'),
        __metadata("design:type", String)
    ], BlogItemNoteDetailsComponent.prototype, "username", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('text'),
        __metadata("design:type", String)
    ], BlogItemNoteDetailsComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('id'),
        __metadata("design:type", Object)
    ], BlogItemNoteDetailsComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('approved'),
        __metadata("design:type", Object)
    ], BlogItemNoteDetailsComponent.prototype, "approved", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('description'),
        __metadata("design:type", Object)
    ], BlogItemNoteDetailsComponent.prototype, "description", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('assignedUsername'),
        __metadata("design:type", Object)
    ], BlogItemNoteDetailsComponent.prototype, "assignedUsername", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('status'),
        __metadata("design:type", Object)
    ], BlogItemNoteDetailsComponent.prototype, "status", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('title'),
        __metadata("design:type", Object)
    ], BlogItemNoteDetailsComponent.prototype, "title", void 0);
    BlogItemNoteDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-item-note-details',
            template: __webpack_require__(/*! ./blog-item-note-details.component.html */ "./src/app/components/blog-item-note-details/blog-item-note-details.component.html"),
            styles: [__webpack_require__(/*! ./blog-item-note-details.component.css */ "./src/app/components/blog-item-note-details/blog-item-note-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogItemNoteDetailsComponent);
    return BlogItemNoteDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/blog-item-text/blog-item-text.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/blog-item-text/blog-item-text.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy1pdGVtLXRleHQvYmxvZy1pdGVtLXRleHQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/blog-item-text/blog-item-text.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/blog-item-text/blog-item-text.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>{{text}}</div>"

/***/ }),

/***/ "./src/app/components/blog-item-text/blog-item-text.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/blog-item-text/blog-item-text.component.ts ***!
  \***********************************************************************/
/*! exports provided: BlogItemTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogItemTextComponent", function() { return BlogItemTextComponent; });
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

var BlogItemTextComponent = /** @class */ (function () {
    function BlogItemTextComponent() {
    }
    BlogItemTextComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('text'),
        __metadata("design:type", String)
    ], BlogItemTextComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('id'),
        __metadata("design:type", Object)
    ], BlogItemTextComponent.prototype, "id", void 0);
    BlogItemTextComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-item-text',
            template: __webpack_require__(/*! ./blog-item-text.component.html */ "./src/app/components/blog-item-text/blog-item-text.component.html"),
            styles: [__webpack_require__(/*! ./blog-item-text.component.css */ "./src/app/components/blog-item-text/blog-item-text.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogItemTextComponent);
    return BlogItemTextComponent;
}());



/***/ }),

/***/ "./src/app/components/blog-item/blog-item.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/blog-item/blog-item.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy1pdGVtL2Jsb2ctaXRlbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/blog-item/blog-item.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/blog-item/blog-item.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-md-6 mx-auto d-block mt-5\">\n    <div class=\"card\" style=\"width: 32rem\">\n\t\t<app-blog-item-image [image]=\"image\"></app-blog-item-image>\n      <div class=\"card-body\">\n        <p class=\"card-text\">\n            text\n\t\t      <app-blog-item-text [text]=\"text | summary:80\" [id]=\"id\"></app-blog-item-text>\n\t\t    </p>\n\t\t    <a [routerLink]=\"['/blog/details/',id]\">Czytaj dalej..</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/blog-item/blog-item.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/blog-item/blog-item.component.ts ***!
  \*************************************************************/
/*! exports provided: BlogItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogItemComponent", function() { return BlogItemComponent; });
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

var BlogItemComponent = /** @class */ (function () {
    function BlogItemComponent() {
    }
    BlogItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('image'),
        __metadata("design:type", String)
    ], BlogItemComponent.prototype, "image", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('text'),
        __metadata("design:type", String)
    ], BlogItemComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('id'),
        __metadata("design:type", Object)
    ], BlogItemComponent.prototype, "id", void 0);
    BlogItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-item',
            template: __webpack_require__(/*! ./blog-item.component.html */ "./src/app/components/blog-item/blog-item.component.html"),
            styles: [__webpack_require__(/*! ./blog-item.component.css */ "./src/app/components/blog-item/blog-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogItemComponent);
    return BlogItemComponent;
}());



/***/ }),

/***/ "./src/app/components/blog-story-add/blog-story-add.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/blog-story-add/blog-story-add.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy1zdG9yeS1hZGQvYmxvZy1zdG9yeS1hZGQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/blog-story-add/blog-story-add.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/blog-story-add/blog-story-add.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  blog-story-add works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/blog-story-add/blog-story-add.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/blog-story-add/blog-story-add.component.ts ***!
  \***********************************************************************/
/*! exports provided: BlogStoryAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogStoryAddComponent", function() { return BlogStoryAddComponent; });
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

var BlogStoryAddComponent = /** @class */ (function () {
    function BlogStoryAddComponent() {
    }
    BlogStoryAddComponent.prototype.ngOnInit = function () {
    };
    BlogStoryAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-story-add',
            template: __webpack_require__(/*! ./blog-story-add.component.html */ "./src/app/components/blog-story-add/blog-story-add.component.html"),
            styles: [__webpack_require__(/*! ./blog-story-add.component.css */ "./src/app/components/blog-story-add/blog-story-add.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogStoryAddComponent);
    return BlogStoryAddComponent;
}());



/***/ }),

/***/ "./src/app/components/blog/blog.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/blog/blog.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-on .input-group-btn > .btn {\n  border-left-width:0;left:-2px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n.add-on .form-control:focus {\n  box-shadow:none;\n  -webkit-box-shadow:none;\n  border-color:#cccccc;\n}\n.form-control{width:20%}\n.navbar-nav > li > a {\n  border-right: 1px solid #ddd;\n  padding-bottom: 15px;\n  padding-top: 15px;\n}\n.navbar-nav:last-child{ border-right:0}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ibG9nL2Jsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQixVQUFVO0VBRTlCLGlEQUFpRDtDQUNsRDtBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixxQkFBcUI7Q0FDdEI7QUFDRCxjQUFjLFNBQVMsQ0FBQztBQUN4QjtFQUNFLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsa0JBQWtCO0NBQ25CO0FBQ0Qsd0JBQXdCLGNBQWMsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLW9uIC5pbnB1dC1ncm91cC1idG4gPiAuYnRuIHtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6MDtsZWZ0Oi0ycHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7XG59XG4uYWRkLW9uIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBib3gtc2hhZG93Om5vbmU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzpub25lO1xuICBib3JkZXItY29sb3I6I2NjY2NjYztcbn1cbi5mb3JtLWNvbnRyb2x7d2lkdGg6MjAlfVxuLm5hdmJhci1uYXYgPiBsaSA+IGEge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG4ubmF2YmFyLW5hdjpsYXN0LWNoaWxkeyBib3JkZXItcmlnaHQ6MH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/blog/blog.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/blog/blog.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul style=\"list-style-type:none\">\n  <li *ngFor=\"let item of items | filter: filterText\">\n    <app-blog-item [text]=\"item.title\" [id]=\"item.storyId\"></app-blog-item>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/blog/blog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/blog/blog.component.ts ***!
  \***************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data-service.service */ "./src/app/services/data-service.service.ts");
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



var BlogComponent = /** @class */ (function () {
    function BlogComponent(dataService, router, route) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
    }
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getAll().subscribe(function (result) {
            _this.items = result;
        });
        this.route.queryParams.subscribe(function (params) {
            _this.filterText = params['title'];
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BlogComponent.prototype, "filterText", void 0);
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/components/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/components/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".przyciski {\n  display: flex;\n  justify-content: space-between;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCwrQkFBK0I7Q0FDaEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByenljaXNraSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6 offset-md-3\">\n    <div class=\"card\">\n      <form [formGroup]=\"form\">\n        <div class=\"card-header form-group\">\n          <label for=\"imie\">Imię:</label>\n          <input formControlName=\"imie\" type=\"text\" class=\"form-control\" id=\"imie\">\n          <div *ngIf=\"form.get('imie').invalid && form.get('imie').dirty\">Popraw to!</div>\n        </div>\n        <div class=\"card-body form-group\">\n          <label for=\"nazwisko\">Nazwisko:</label>\n          <input formControlName=\"nazwisko\" type=\"text\" class=\"form-control\" id=\"nazwisko\">\n          <div *ngIf=\"form.get('nazwisko').invalid && form.get('nazwisko').dirty\">Popraw to!</div>\n        </div>\n        <div class=\"card-header card-footer form-group\">\n          <label for=\"email\">E-mail:</label>\n          <input formControlName=\"email\" type=\"email\" class=\"form-control\" id=\"email\">\n          <div *ngIf=\"form.get('email').invalid && form.get('email').dirty\">Popraw to!</div>\n        </div>\n        <div class=\"card-body form-group form-check-inline\">\n          <input formControlName=\"plec\" class=\"form-check-input\" type=\"radio\" name=\"plec\" id=\"plec1\" value=\"Mężczyzna\" checked>\n          <label class=\"form-check-label\" for=\"plec1\">Mężczyzna</label>\n        </div>\n        <div class=\"card-body form-group form-check-inline\">\n          <input formControlName=\"plec\" class=\"form-check-input\" type=\"radio\" name=\"plec\" id=\"plec2\" value=\"Kobieta\">\n          <label class=\"form-check-label\" for=\"plec2\">Kobieta</label>\n          <div *ngIf=\"form.get('plec').invalid && form.get('plec').dirty\">Popraw to!</div>\n        </div>\n        <div class=\"card-header card-footer form-group\">\n          <label for=\"wiadomosc\">Wiadomość:</label>\n          <textarea formControlName=\"wiadomosc\" class=\"form-control\" id=\"wiadomosc\" rows=\"3\"></textarea>\n          <div *ngIf=\"form.get('wiadomosc').invalid && form.get('wiadomosc').dirty\">Popraw to!</div>\n        </div>\n        <div class=\"card-body form-group\">\n          <label for=\"wiek\">Wiek:</label>\n          <input formControlName=\"wiek\" type=\"number\" class=\"form-control\" id=\"wiek\" minvalue=\"0\" maxvalue=\"120\" value=\"18\">\n          <div *ngIf=\"form.get('wiek').invalid && form.get('wiek').dirty\">Popraw to!</div>\n        </div>\n        <div class=\"card-header card-footer form-group\">\n          <label for=\"stanCywilny\">Stan cywilny:</label>\n          <select id=\"stanCywilny\" class=\"form-control\">\n            <option selected>Panna/Kawaler</option>\n            <option>Mężatka/Żonaty</option>\n            <option>Wdowa/Wdowiec</option>\n          </select>\n        </div>\n        <div class=\"card-body\">\n          <button type=\"reset\" class=\"btn btn-block\">Wyczyść</button>\n        </div>\n        <div class=\"card-footer\">\n          <button [disabled]=\"form.invalid\" type=\"submit\" class=\"btn btn-block btn-primary\">Wyślij</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            imie: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            nazwisko: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            plec: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            wiek: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            wiadomosc: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(200)])
        });
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam semper pulvinar venenatis. Proin et diam nunc. Duis vulputate est eu ipsum posuere, eget dictum risus auctor. Nam nibh nunc, dapibus id odio placerat, consectetur efficitur tortor. Maecenas nec justo pharetra, vulputate erat eu, egestas erat. Vestibulum porttitor luctus elit et euismod. Aenean ac erat nec dolor auctor tempus a sit amet felis. Fusce ut egestas nisl, quis ornare mi. Ut iaculis elit non ipsum faucibus interdum. Donec varius ante nec egestas rutrum.</p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form action=\"post\" autocomplete=\"off\" method=\"POST\">\n  <div class=\"input-group\">\n    <input [(ngModel)]=\"credentials.login\" type=\"text\" class=\"form-control\"\n           name=\"username\" placeholder=\"Nazwa\" title=\"Wprowadź login\">\n  </div>\n\n  <div class=\"input-group\">\n    <input [(ngModel)]=\"credentials.password\" type=\"password\" class=\"form-control\"\n           name=\"password\" placeholder=\"Hasło\" title=\"Wprowadź hasło\">\n  </div>\n\n  <button (click)=\"signIn()\" class=\"btn btn-lg btn-pink btn-block\" type=\"submit\" title=\"Przycisk zaloguj\">\n    Zaloguj\n  </button>\n</form>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.credentials = {
            login: '',
            password: ''
        };
    }
    LoginComponent.prototype.isLogged = function () {
        return localStorage.getItem('token') != null;
    };
    LoginComponent.prototype.signIn = function () {
        var _this = this;
        return this.authService.authenticate(this.credentials).subscribe(function (result) {
            if (!result) {
                _this.logged = false;
            }
            else {
                _this.logout = false;
                _this.credentials = {
                    login: '',
                    password: ''
                };
                _this.router.navigate(['/']);
            }
        }, function (reason) {
            console.log(reason);
        });
    };
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/quiz/quiz.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/quiz/quiz.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes check {0% {height: 0;width: 0;}\n  25% {height: 0;width: 10px;}\n  50% {height: 20px;width: 10px;}\n}\n\n@keyframes check {0% {height: 0;width: 0;}\n  25% {height: 0;width: 10px;}\n  50% {height: 20px;width: 10px;}\n}\n\n.checkbox{background-color:#fff;display:inline-block;height:28px;margin:0 .25em;width:28px;border-radius:4px;border:1px solid #ccc;float:right}\n\n.checkbox span{display:block;height:28px;position:relative;width:28px;padding:0}\n\n.checkbox span:after{-webkit-transform:scaleX(-1) rotate(135deg);transform:scaleX(-1) rotate(135deg);-webkit-transform-origin:left top;transform-origin:left top;border-right:4px solid #fff;border-top:4px solid #fff;content:'';display:block;height:20px;left:3px;position:absolute;top:15px;width:10px}\n\n.checkbox span:hover:after{border-color:#999}\n\n.checkbox input{display:none}\n\n.checkbox input:checked + span:after{-webkit-animation:check .8s;animation:check .8s;border-color:#555}\n\n.checkbox input:checked + .default:after{border-color:#444}\n\n.checkbox input:checked + .primary:after{border-color:#2196F3}\n\n.checkbox input:checked + .success:after{border-color:#8bc34a}\n\n.checkbox input:checked + .info:after{border-color:#3de0f5}\n\n.checkbox input:checked + .warning:after{border-color:#FFC107}\n\n.checkbox input:checked + .danger:after{border-color:#f44336}\n\n.custom-style-quiz{\n  display:flex;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n}\n\n.hidden{\n  display:none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9xdWl6L3F1aXouY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwQkFBa0IsSUFBSSxVQUFVLFNBQVMsQ0FBQztFQUN4QyxLQUFLLFVBQVUsWUFBWSxDQUFDO0VBQzVCLEtBQUssYUFBYSxZQUFZLENBQUM7Q0FDaEM7O0FBSEQsa0JBQWtCLElBQUksVUFBVSxTQUFTLENBQUM7RUFDeEMsS0FBSyxVQUFVLFlBQVksQ0FBQztFQUM1QixLQUFLLGFBQWEsWUFBWSxDQUFDO0NBQ2hDOztBQUVELFVBQVUsc0JBQXNCLHFCQUFxQixZQUFZLGVBQWUsV0FBVyxrQkFBa0Isc0JBQXNCLFdBQVcsQ0FBQzs7QUFDL0ksZUFBZSxjQUFjLFlBQVksa0JBQWtCLFdBQVcsU0FBUyxDQUFDOztBQUNoRixxQkFBc0csNENBQTRDLG9DQUFvQyxBQUE2RCxrQ0FBa0MsMEJBQTBCLDRCQUE0QiwwQkFBMEIsV0FBVyxjQUFjLFlBQVksU0FBUyxrQkFBa0IsU0FBUyxVQUFVLENBQUM7O0FBQ3piLDJCQUEyQixpQkFBaUIsQ0FBQzs7QUFDN0MsZ0JBQWdCLFlBQVksQ0FBQzs7QUFDN0IscUNBQXFDLDRCQUE0QixBQUFnRCxvQkFBb0IsaUJBQWlCLENBQUM7O0FBQ3ZKLHlDQUF5QyxpQkFBaUIsQ0FBQzs7QUFDM0QseUNBQXlDLG9CQUFvQixDQUFDOztBQUM5RCx5Q0FBeUMsb0JBQW9CLENBQUM7O0FBQzlELHNDQUFzQyxvQkFBb0IsQ0FBQzs7QUFDM0QseUNBQXlDLG9CQUFvQixDQUFDOztBQUM5RCx3Q0FBd0Msb0JBQW9CLENBQUM7O0FBRTdEO0VBQ0UsYUFBYTtFQUNiLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsYUFBYTtDQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9xdWl6L3F1aXouY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgY2hlY2sgezAlIHtoZWlnaHQ6IDA7d2lkdGg6IDA7fVxuICAyNSUge2hlaWdodDogMDt3aWR0aDogMTBweDt9XG4gIDUwJSB7aGVpZ2h0OiAyMHB4O3dpZHRoOiAxMHB4O31cbn1cblxuLmNoZWNrYm94e2JhY2tncm91bmQtY29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jaztoZWlnaHQ6MjhweDttYXJnaW46MCAuMjVlbTt3aWR0aDoyOHB4O2JvcmRlci1yYWRpdXM6NHB4O2JvcmRlcjoxcHggc29saWQgI2NjYztmbG9hdDpyaWdodH1cbi5jaGVja2JveCBzcGFue2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OjI4cHg7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MjhweDtwYWRkaW5nOjB9XG4uY2hlY2tib3ggc3BhbjphZnRlcnstbW96LXRyYW5zZm9ybTpzY2FsZVgoLTEpIHJvdGF0ZSgxMzVkZWcpOy1tcy10cmFuc2Zvcm06c2NhbGVYKC0xKSByb3RhdGUoMTM1ZGVnKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZVgoLTEpIHJvdGF0ZSgxMzVkZWcpO3RyYW5zZm9ybTpzY2FsZVgoLTEpIHJvdGF0ZSgxMzVkZWcpOy1tb3otdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcDstbXMtdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3A7dHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcDtib3JkZXItcmlnaHQ6NHB4IHNvbGlkICNmZmY7Ym9yZGVyLXRvcDo0cHggc29saWQgI2ZmZjtjb250ZW50OicnO2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OjIwcHg7bGVmdDozcHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOjE1cHg7d2lkdGg6MTBweH1cbi5jaGVja2JveCBzcGFuOmhvdmVyOmFmdGVye2JvcmRlci1jb2xvcjojOTk5fVxuLmNoZWNrYm94IGlucHV0e2Rpc3BsYXk6bm9uZX1cbi5jaGVja2JveCBpbnB1dDpjaGVja2VkICsgc3BhbjphZnRlcnstd2Via2l0LWFuaW1hdGlvbjpjaGVjayAuOHM7LW1vei1hbmltYXRpb246Y2hlY2sgLjhzOy1vLWFuaW1hdGlvbjpjaGVjayAuOHM7YW5pbWF0aW9uOmNoZWNrIC44cztib3JkZXItY29sb3I6IzU1NX1cbi5jaGVja2JveCBpbnB1dDpjaGVja2VkICsgLmRlZmF1bHQ6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOiM0NDR9XG4uY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCArIC5wcmltYXJ5OmFmdGVye2JvcmRlci1jb2xvcjojMjE5NkYzfVxuLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgKyAuc3VjY2VzczphZnRlcntib3JkZXItY29sb3I6IzhiYzM0YX1cbi5jaGVja2JveCBpbnB1dDpjaGVja2VkICsgLmluZm86YWZ0ZXJ7Ym9yZGVyLWNvbG9yOiMzZGUwZjV9XG4uY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCArIC53YXJuaW5nOmFmdGVye2JvcmRlci1jb2xvcjojRkZDMTA3fVxuLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgKyAuZGFuZ2VyOmFmdGVye2JvcmRlci1jb2xvcjojZjQ0MzM2fVxuXG4uY3VzdG9tLXN0eWxlLXF1aXp7XG4gIGRpc3BsYXk6ZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhpZGRlbntcbiAgZGlzcGxheTpub25lO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/quiz/quiz.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/quiz/quiz.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"row\">\n\n    <div class=\"col-md-6 offset-md-3\">\n      <div class=\"card\" style=\"margin:50px 0\">\n\n        <div class=\"progress\">\n          <div class=\"progress-bar\" role=\"progressbar\" style=\"width:0%\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        </div>\n\n        <form name=\"question\" class=\"custom-style-quiz\" onsubmit=\"printOut(event)\">\n\n          <div class=\"card-header\">\n            <label id=\"question\">Miejsce na pytanie</label>\n          </div>\n\n          <ul class=\"list-group list-group-flush\">\n\n            <li class=\"list-group-item\">\n              <div class=\"answer\">\n                <span id=\"ans0txt\">Odpowiedź A</span>\n                <label class=\"checkbox\">\n                  <input type=\"checkbox\" id=\"ans1\" value=\"0\" name=\"answer\" onclick=\"set(0)\">\n                  <span class=\"primary\"></span>\n                </label>\n              </div>\n            </li>\n\n            <li class=\"list-group-item\">\n              <div class=\"answer\">\n                <span id=\"ans1txt\">Odpowiedź B</span>\n                <label class=\"checkbox\">\n                  <input type=\"checkbox\" id=\"ans2\" value=\"1\" name=\"answer\" onclick=\"set(1)\">\n                  <span class=\"primary\"></span>\n                </label>\n              </div>\n            </li>\n\n            <li class=\"list-group-item\">\n              <div class=\"answer\">\n                <span id=\"ans2txt\">Odpowiedź C</span>\n                <label class=\"checkbox\">\n                  <input type=\"checkbox\" id=\"ans3\" value=\"2\" name=\"answer\" onclick=\"set(2)\">\n                  <span class=\"primary\"></span>\n                </label>\n              </div>\n            </li>\n\n            <li class=\"list-group-item\">\n              <div class=\"answer\">\n                <span id=\"ans3txt\">Opowiedź D</span>\n                <label class=\"checkbox\">\n                  <input type=\"checkbox\" id=\"ans4\" value=\"3\" name=\"answer\" onclick=\"set(3)\">\n                  <span class=\"primary\"></span>\n                </label>\n              </div>\n            </li>\n\n          </ul>\n\n          <div class=\"card-footer\">\n            <button type=\"submit\" class=\"btn btn-block btn-primary\">Dalej</button>\n          </div>\n\n        </form>\n\n        <div class=\"results hidden\">\n          <div class=\"list-group-item\">\n            <span class=\"result-text\"></span>\n          </div>\n          <div class=\"card-footer\">\n            <button type=\"submit\" class=\"btn btn-block btn-primary\" onclick=\"retry()\">Spróbuj ponownie</button>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/quiz/quiz.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/quiz/quiz.component.ts ***!
  \***************************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
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

var QuizComponent = /** @class */ (function () {
    function QuizComponent() {
    }
    QuizComponent.prototype.ngOnInit = function () {
    };
    QuizComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quiz',
            template: __webpack_require__(/*! ./quiz.component.html */ "./src/app/components/quiz/quiz.component.html"),
            styles: [__webpack_require__(/*! ./quiz.component.css */ "./src/app/components/quiz/quiz.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuizComponent);
    return QuizComponent;
}());



/***/ }),

/***/ "./src/app/components/search-bar/search-bar.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/search-bar/search-bar.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoLWJhci9zZWFyY2gtYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/search-bar/search-bar.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/search-bar/search-bar.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-md-6 mx-auto d-block\">\n\n    <form class=\"navbar-form\" role=\"search\">\n      <div class=\"input-group add-on\">\n        <input [(ngModel)]=\"filterText\" (ngModelChange)=\"sendFilter($event)\" class=\"form-control\" placeholder=\"Czego szukasz?\" name=\"title\" id=\"search\" type=\"search\" appTextFormat>\n      </div>\n    </form>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/search-bar/search-bar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/search-bar/search-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
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

var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent() {
        this.name = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SearchBarComponent.prototype.ngOnInit = function () {
    };
    SearchBarComponent.prototype.sendFilter = function () {
        this.name.emit(this.filterText);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SearchBarComponent.prototype, "name", void 0);
    SearchBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-bar',
            template: __webpack_require__(/*! ./search-bar.component.html */ "./src/app/components/search-bar/search-bar.component.html"),
            styles: [__webpack_require__(/*! ./search-bar.component.css */ "./src/app/components/search-bar/search-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchBarComponent);
    return SearchBarComponent;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signup/signup.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/signup/signup.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/signup/signup.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"signup\">\n  <h1 class=\"entry-title\"><span>Zarejestruj się</span></h1>\n  <hr>\n  <form class=\"form-horizontal\" method=\"post\" name=\"signup\" id=\"signup\">\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-3\">Email<span class=\"text-danger\">*</span></label>\n      <div class=\"col-md-8 col-sm-9\">\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-envelope\"></i></span>\n          <input type=\"email\" class=\"form-control\" name=\"emailid\" id=\"emailid\" placeholder=\"Podaj swój email\"\n                 value=\"\" [(ngModel)]=\"credentials.email\">\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-3\">Ustaw hasło<span class=\"text-danger\">*</span></label>\n      <div class=\"col-md-5 col-sm-8\">\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n          <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\"\n                 placeholder=\"Wpisz hasło (5-15 znaków)\" value=\"\" [(ngModel)]=\"credentials.password\">\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-3\">Potwierdź hasło <span class=\"text-danger\">*</span></label>\n      <div class=\"col-md-5 col-sm-8\">\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n          <input type=\"password\" class=\"form-control\" name=\"matchingPassword\" id=\"matchingPassword\"\n                 placeholder=\"Potwierdź hasło\" value=\"\" [(ngModel)]=\"credentials.matchingPassword\">\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-3\">Podaj imię <span class=\"text-danger\">*</span></label>\n      <div class=\"col-md-8 col-sm-9\">\n        <input type=\"text\" class=\"form-control\" name=\"login\" id=\"login\" placeholder=\"Wpisz imię\" value=\"\"\n               [(ngModel)]=\"credentials.login\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"col-xs-offset-3 col-xs-10\">\n        <button (click)=\"create()\" name=\"Submit\" type=\"submit\" class=\"btn btn-primary\">Zarejestruj\n        </button>\n      </div>\n    </div>\n  </form>\n</section>\n"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
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



var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.credentials = {
            login: '',
            email: '',
            password: '',
            matchingPassword: ''
        };
    }
    SignupComponent.prototype.create = function () {
        var _this = this;
        this.authService.createOrUpdate(this.credentials).subscribe(function (result) {
            return _this.authService.authenticate(_this.credentials).subscribe(function (result) {
                _this.router.navigate(['/']);
            });
        });
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/directives/text-format.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/directives/text-format.directive.ts ***!
  \*****************************************************/
/*! exports provided: TextFormatDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFormatDirective", function() { return TextFormatDirective; });
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

var TextFormatDirective = /** @class */ (function () {
    function TextFormatDirective(el) {
        this.el = el;
    }
    TextFormatDirective.prototype.onBlur = function () {
        var value = this.el.nativeElement.value;
        this.el.nativeElement.value = value.toLowerCase();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('blur'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TextFormatDirective.prototype, "onBlur", null);
    TextFormatDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appTextFormat]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], TextFormatDirective);
    return TextFormatDirective;
}());



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, filterText) {
        if (!value) {
            return [];
        }
        if (!filterText) {
            return value;
        }
        console.log(filterText);
        console.log(value);
        filterText = filterText.toLowerCase();
        return value.filter(function (val) {
            return val.title.toLowerCase().includes(filterText);
        });
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/services/admin-guard.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/services/admin-guard.guard.ts ***!
  \***********************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-service.service */ "./src/app/services/auth-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminGuard = /** @class */ (function () {
    function AdminGuard(authService) {
        this.authService = authService;
    }
    AdminGuard.prototype.canActivate = function () {
        if (this.authService.isLoggedIn()) {
            return true;
        }
    };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/services/auth-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/auth-service.service.ts ***!
  \**************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.url = 'http://localhost:4444';
    }
    AuthService.prototype.authenticate = function (credentials) {
        return this.http.post(this.url + '/auth/signin', {
            login: credentials.login,
            password: credentials.password
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            if (result && result.accessToken) {
                localStorage.setItem('token', result.accessToken);
                localStorage.setItem('currentUser', result.username);
                return true;
            }
            return false;
        }));
    };
    AuthService.prototype.createOrUpdate = function (credentials) {
        return this.http.post(this.url + '/user/create', credentials);
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
    };
    AuthService.prototype.isLoggedIn = function () {
        var jwtHelper = new angular2_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelper"]();
        var token = localStorage.getItem('token');
        if (!token) {
            return false;
        }
        return !(jwtHelper.isTokenExpired(token));
    };
    Object.defineProperty(AuthService.prototype, "currentUser", {
        get: function () {
            var token = this.getToken();
            if (!token) {
                return null;
            }
            return new angular2_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelper"]().decodeToken(token);
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.url = 'http://localhost:4444';
    }
    AuthService.prototype.authenticate = function (credentials) {
        return this.http.post(this.url + '/auth/signin', credentials).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            if (result && result.accessToken) {
                localStorage.setItem('token', result.accessToken);
                localStorage.setItem('username', result.username);
                return true;
            }
            return false;
        }));
    };
    AuthService.prototype.createOrUpdate = function (credentials) {
        return this.http.post(this.url + '/auth/signup', credentials);
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
    };
    AuthService.prototype.isLoggedIn = function () {
        var jwtHelper = new angular2_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelper"]();
        var token = localStorage.getItem('token');
        if (!token) {
            return false;
        }
        return !(jwtHelper.isTokenExpired(token));
    };
    Object.defineProperty(AuthService.prototype, "currentUser", {
        get: function () {
            var token = this.getToken();
            if (!token) {
                return null;
            }
            return new angular2_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelper"]().decodeToken(token);
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/auth/auth.interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/services/auth/auth.interceptor.ts ***!
  \***************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(injector) {
        this.injector = injector;
    }
    AuthInterceptor.prototype.intercept = function (request, next) {
        var auth = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]);
        request = request.clone({
            setHeaders: {
                'x-auth-token': "" + auth.getToken()
            }
        });
        return next.handle(request);
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/services/data-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/data-service.service.ts ***!
  \**************************************************/
/*! exports provided: DataServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataServiceService", function() { return DataServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataServiceService = /** @class */ (function () {
    function DataServiceService(http) {
        this.http = http;
        this.url = 'http://localhost:4444';
    }
    DataServiceService.prototype.addComment = function (data) {
        return this.http.post(this.url + '/comment/save', data).pipe();
    };
    DataServiceService.prototype.get = function (id) {
        return this.http.get(this.url + '/story/all').pipe();
    };
    DataServiceService.prototype.getAll = function () {
        return this.http.get(this.url + '/story/all')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) { return x; }));
    };
    DataServiceService.prototype.addPost = function (data, username) {
        return this.http.post(this.url + '/story/save/', data, {
            headers: {
                user: username
            }
        }).pipe();
    };
    DataServiceService.prototype.addIssue = function (data, username) {
        return this.http.post(this.url + '/issue/save/', data, {
            headers: {
                user: username
            }
        }).pipe();
    };
    DataServiceService.prototype.addNote = function (data, username) {
        return this.http.post(this.url + '/note/save/', data, {
            headers: {
                user: username
            }
        }).pipe();
    };
    DataServiceService.prototype.addEntry = function (data, username) {
        return this.http.post(this.url + '/entry/save/', data, {
            headers: {
                user: username
            }
        }).pipe();
    };
    DataServiceService.prototype.approveComment = function (id, username) {
        return this.http.post(this.url + '/comment/' + id + '/approve', null, {
            headers: {
                user: username
            }
        }).pipe();
    };
    DataServiceService.prototype.approveEntry = function (id, username) {
        return this.http.post(this.url + '/entry/' + id + '/approve', null, {
            headers: {
                user: username
            }
        }).pipe();
    };
    DataServiceService.prototype.approveIssue = function (id, username) {
        return this.http.post(this.url + '/issue/' + id + '/approve', null, {
            headers: {
                user: username
            }
        }).pipe();
    };
    DataServiceService.prototype.approveNote = function (id, username) {
        return this.http.post(this.url + '/note/' + id + '/approve', null, {
            headers: {
                user: username
            }
        }).pipe();
    };
    DataServiceService.prototype.getComments = function (id, username) {
        return this.http.get(this.url + '/comment/story/' + id, {
            headers: {
                user: username
            }
        }).pipe();
    };
    DataServiceService.prototype.getEntries = function (id, username) {
        return this.http.get(this.url + '/entry/story/' + id, {
            headers: {
                user: username
            }
        }).pipe();
    };
    DataServiceService.prototype.getNotes = function (id, username) {
        return this.http.get(this.url + '/note/story/' + id, {
            headers: {
                user: username
            }
        }).pipe();
    };
    DataServiceService.prototype.getIssues = function (id, username) {
        return this.http.get(this.url + '/issue/story/' + id, {
            headers: {
                user: username
            }
        }).pipe();
    };
    DataServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataServiceService);
    return DataServiceService;
}());



/***/ }),

/***/ "./src/app/summary.pipe.ts":
/*!*********************************!*\
  !*** ./src/app/summary.pipe.ts ***!
  \*********************************/
/*! exports provided: SummaryPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPipe", function() { return SummaryPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SummaryPipe = /** @class */ (function () {
    function SummaryPipe() {
    }
    SummaryPipe.prototype.transform = function (value, limit) {
        return value.substr(0, limit) + " (...)";
    };
    SummaryPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'summary'
        })
    ], SummaryPipe);
    return SummaryPipe;
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
/*!************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0 ./src/main.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\Stefan\Desktop\collab-writing-master\blog\node_modules\webpack-dev-server\client\index.js?http://0.0.0.0:0 */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0");
module.exports = __webpack_require__(/*! C:\Users\Stefan\Desktop\collab-writing-master\blog\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map