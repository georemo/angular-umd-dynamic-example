(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('modulef', ['exports', '@angular/core', '@angular/router'], factory) :
    (factory((global.modulef = {}),global.ng.core,global.ng.router));
}(this, (function (exports,i0,router) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModulefService = (function () {
        function ModulefService() {
        }
        ModulefService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        ModulefService.ctorParameters = function () { return []; };
        /** @nocollapse */ ModulefService.ngInjectableDef = i0.defineInjectable({ factory: function ModulefService_Factory() { return new ModulefService(); }, token: ModulefService, providedIn: "root" });
        return ModulefService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModulefComponent = (function () {
        function ModulefComponent() {
        }
        /**
         * @return {?}
         */
        ModulefComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        ModulefComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-modulef',
                        template: "\n    <p>\n      modulef works!\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        ModulefComponent.ctorParameters = function () { return []; };
        return ModulefComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModulefModule = (function () {
        function ModulefModule() {
        }
        ModulefModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            router.RouterModule.forChild([
                                {
                                    path: '', pathMatch: 'full', component: ModulefComponent
                                }
                            ])
                        ],
                        declarations: [ModulefComponent],
                        exports: [ModulefComponent]
                    },] },
        ];
        return ModulefModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.ModulefService = ModulefService;
    exports.ModulefComponent = ModulefComponent;
    exports.ModulefModule = ModulefModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlZi51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL21vZHVsZWYvbGliL21vZHVsZWYuc2VydmljZS50cyIsIm5nOi8vbW9kdWxlZi9saWIvbW9kdWxlZi5jb21wb25lbnQudHMiLCJuZzovL21vZHVsZWYvbGliL21vZHVsZWYubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTW9kdWxlZlNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbW9kdWxlZicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBtb2R1bGVmIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBNb2R1bGVmQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kdWxlZkNvbXBvbmVudCB9IGZyb20gJy4vbW9kdWxlZi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgIHtcbiAgICAgICAgICBwYXRoOiAnJywgcGF0aE1hdGNoOiAnZnVsbCcsIGNvbXBvbmVudDogTW9kdWxlZkNvbXBvbmVudFxuICAgICAgfVxuICAgIF0pXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW01vZHVsZWZDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTW9kdWxlZkNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTW9kdWxlZk1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQ29tcG9uZW50IiwiTmdNb2R1bGUiLCJSb3V0ZXJNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQU9FO1NBQWlCOztvQkFMbEJBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7NkJBSkQ7S0FRQzs7Ozs7O0FDUkQ7UUFhRTtTQUFpQjs7OztRQUVqQixtQ0FBUTs7O1lBQVI7YUFDQzs7b0JBZEZDLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsYUFBYTt3QkFDdkIsUUFBUSxFQUFFLCtDQUlUO3dCQUNELE1BQU0sRUFBRSxFQUFFO3FCQUNYOzs7UUFRRCx1QkFBQztLQUFBOzs7Ozs7QUNsQkQ7UUFJQTtTQVc4Qjs7b0JBWDdCQyxXQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFOzRCQUNQQyxtQkFBWSxDQUFDLFFBQVEsQ0FBQztnQ0FDcEI7b0NBQ0ksSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxnQkFBZ0I7aUNBQzNEOzZCQUNGLENBQUM7eUJBQ0g7d0JBQ0QsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7d0JBQ2hDLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO3FCQUM1Qjs7UUFDNEIsb0JBQUM7S0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9