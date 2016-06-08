System.register(["@angular/core", "ngEx/Global"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Global_1;
    var User;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Global_1_1) {
                Global_1 = Global_1_1;
            }],
        execute: function() {
            User = (function () {
                function User() {
                }
                __decorate([
                    core_1.Input('source'), 
                    __metadata('design:type', Object)
                ], User.prototype, "user", void 0);
                User = __decorate([
                    Global_1.Global(),
                    core_1.Component({
                        selector: 'user-profile',
                        moduleId: __moduleName,
                        //template:``,
                        //styleUrls:['user.css'],
                        templateUrl: 'User.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], User);
                return User;
            }());
            exports_1("User", User);
        }
    }
});
//# sourceMappingURL=User.js.map