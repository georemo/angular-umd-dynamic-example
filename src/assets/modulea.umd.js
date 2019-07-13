(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('modulea', ['exports', '@angular/core', '@angular/router'], factory) :
    (factory((global.modulea = {}),global.ng.core,global.ng.router));
}(this, (function (exports,i0,router) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModuleaService = (function () {
        function ModuleaService() {
        }
        ModuleaService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        ModuleaService.ctorParameters = function () { return []; };
        /** @nocollapse */ ModuleaService.ngInjectableDef = i0.defineInjectable({ factory: function ModuleaService_Factory() { return new ModuleaService(); }, token: ModuleaService, providedIn: "root" });
        return ModuleaService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModuleaComponent = (function () {
        function ModuleaComponent() {
            this.title = 'Account Setting';
        }
        /**
         * @return {?}
         */
        ModuleaComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        ModuleaComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-modulea',
                        template: "\n  <form>\n  <section class=\"form-block\">\n      <label> {{title}} </label>\n      <div class=\"form-group\">\n          <label for=\"formFields_1\">Textbox [type=\"text\"]</label>\n          <input type=\"text\" id=\"formFields_1\" placeholder=\"Email\" size=\"35\" disabled>\n          <input type=\"text\" id=\"formFields_2\" placeholder=\"Email 2\" size=\"45\">\n          <input type=\"text\" id=\"formFields_3\" placeholder=\"Email\" size=\"25\">\n          <input type=\"text\" id=\"formFields_4\" placeholder=\"Email 2\">\n          <input type=\"text\" id=\"formFields_5\" placeholder=\"Email\">\n          <input type=\"text\" id=\"formFields_6\" placeholder=\"Email 2\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"formFields_7\">Textbox [type=\"password\"]</label>\n          <input type=\"password\" id=\"formFields_7\" placeholder=\"Password\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"formFields_8\">Textarea</label>\n          <textarea id=\"formFields_8\" rows=\"5\"></textarea>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"formFields_9\">Textbox [type=\"url\"]</label>\n          <input type=\"url\" id=\"formFields_9\" placeholder=\"https://vmware.github.io/clarity/\" size=\"35\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"formFields_10\">Textbox [type=\"tel\"]</label>\n          <input type=\"tel\" id=\"formFields_10\" size=\"35\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"formFields_11\">Textbox [type=\"date\"]</label>\n          <input type=\"date\" id=\"formFields_11\" size=\"35\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"formFields_12\">Textbox [type=\"datetime-local\"]</label>\n          <input type=\"datetime-local\" id=\"formFields_12\" size=\"35\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"formFields_13\">Textbox Readonly [type=\"text\"]</label>\n          <input type=\"text\" id=\"formFields_13\" size=\"35\" readonly value=\"Readonly Text\">\n      </div>\n  </section>\n</form>  \n  \n  ",
                        styles: []
                    },] },
        ];
        ModuleaComponent.ctorParameters = function () { return []; };
        return ModuleaComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModuleaModule = (function () {
        function ModuleaModule() {
        }
        ModuleaModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            router.RouterModule.forChild([
                                {
                                    path: '', pathMatch: 'full', component: ModuleaComponent
                                }
                            ])
                        ],
                        declarations: [ModuleaComponent],
                        exports: [ModuleaComponent]
                    },] },
        ];
        return ModuleaModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.ModuleaService = ModuleaService;
    exports.ModuleaComponent = ModuleaComponent;
    exports.ModuleaModule = ModuleaModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlYS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL21vZHVsZWEvbGliL21vZHVsZWEuc2VydmljZS50cyIsIm5nOi8vbW9kdWxlYS9saWIvbW9kdWxlYS5jb21wb25lbnQudHMiLCJuZzovL21vZHVsZWEvbGliL21vZHVsZWEubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTW9kdWxlYVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xpYi1tb2R1bGVhJyxcbiAgICB0ZW1wbGF0ZTogYFxuICA8Zm9ybT5cbiAgPHNlY3Rpb24gY2xhc3M9XCJmb3JtLWJsb2NrXCI+XG4gICAgICA8bGFiZWw+IHt7dGl0bGV9fSA8L2xhYmVsPlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiZm9ybUZpZWxkc18xXCI+VGV4dGJveCBbdHlwZT1cInRleHRcIl08L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZm9ybUZpZWxkc18xXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIHNpemU9XCIzNVwiIGRpc2FibGVkPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZm9ybUZpZWxkc18yXCIgcGxhY2Vob2xkZXI9XCJFbWFpbCAyXCIgc2l6ZT1cIjQ1XCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJmb3JtRmllbGRzXzNcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgc2l6ZT1cIjI1XCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJmb3JtRmllbGRzXzRcIiBwbGFjZWhvbGRlcj1cIkVtYWlsIDJcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImZvcm1GaWVsZHNfNVwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImZvcm1GaWVsZHNfNlwiIHBsYWNlaG9sZGVyPVwiRW1haWwgMlwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJmb3JtRmllbGRzXzdcIj5UZXh0Ym94IFt0eXBlPVwicGFzc3dvcmRcIl08L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cImZvcm1GaWVsZHNfN1wiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiZm9ybUZpZWxkc184XCI+VGV4dGFyZWE8L2xhYmVsPlxuICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImZvcm1GaWVsZHNfOFwiIHJvd3M9XCI1XCI+PC90ZXh0YXJlYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiZm9ybUZpZWxkc185XCI+VGV4dGJveCBbdHlwZT1cInVybFwiXTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ1cmxcIiBpZD1cImZvcm1GaWVsZHNfOVwiIHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly92bXdhcmUuZ2l0aHViLmlvL2NsYXJpdHkvXCIgc2l6ZT1cIjM1XCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cImZvcm1GaWVsZHNfMTBcIj5UZXh0Ym94IFt0eXBlPVwidGVsXCJdPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRlbFwiIGlkPVwiZm9ybUZpZWxkc18xMFwiIHNpemU9XCIzNVwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJmb3JtRmllbGRzXzExXCI+VGV4dGJveCBbdHlwZT1cImRhdGVcIl08L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZm9ybUZpZWxkc18xMVwiIHNpemU9XCIzNVwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJmb3JtRmllbGRzXzEyXCI+VGV4dGJveCBbdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJdPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCIgaWQ9XCJmb3JtRmllbGRzXzEyXCIgc2l6ZT1cIjM1XCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cImZvcm1GaWVsZHNfMTNcIj5UZXh0Ym94IFJlYWRvbmx5IFt0eXBlPVwidGV4dFwiXTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJmb3JtRmllbGRzXzEzXCIgc2l6ZT1cIjM1XCIgcmVhZG9ubHkgdmFsdWU9XCJSZWFkb25seSBUZXh0XCI+XG4gICAgICA8L2Rpdj5cbiAgPC9zZWN0aW9uPlxuPC9mb3JtPiAgXG4gIFxuICBgLFxuICAgIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTW9kdWxlYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgdGl0bGUgPSAnQWNjb3VudCBTZXR0aW5nJztcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZHVsZWFDb21wb25lbnQgfSBmcm9tICcuL21vZHVsZWEuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7XG4gICAgICAgICAgcGF0aDogJycsIHBhdGhNYXRjaDogJ2Z1bGwnLCBjb21wb25lbnQ6IE1vZHVsZWFDb21wb25lbnRcbiAgICAgIH1cbiAgICBdKVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtNb2R1bGVhQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW01vZHVsZWFDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE1vZHVsZWFNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIk5nTW9kdWxlIiwiUm91dGVyTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7OzZCQUpEO0tBUUM7Ozs7OztBQ1JEO1FBcURJO1lBREEsVUFBSyxHQUFHLGlCQUFpQixDQUFDO1NBQ1Q7Ozs7UUFFakIsbUNBQVE7OztZQUFSO2FBQ0M7O29CQXRESkMsWUFBUyxTQUFDO3dCQUNQLFFBQVEsRUFBRSxhQUFhO3dCQUN2QixRQUFRLEVBQUUsOGxFQTRDWDt3QkFDQyxNQUFNLEVBQUUsRUFBRTtxQkFDYjs7O1FBUUQsdUJBQUM7S0FBQTs7Ozs7O0FDMUREO1FBSUE7U0FXOEI7O29CQVg3QkMsV0FBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRTs0QkFDUEMsbUJBQVksQ0FBQyxRQUFRLENBQUM7Z0NBQ3BCO29DQUNJLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsZ0JBQWdCO2lDQUMzRDs2QkFDRixDQUFDO3lCQUNIO3dCQUNELFlBQVksRUFBRSxDQUFDLGdCQUFnQixDQUFDO3dCQUNoQyxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztxQkFDNUI7O1FBQzRCLG9CQUFDO0tBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==