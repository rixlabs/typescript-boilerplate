describe('Always true test', () => {
    it('works', () => {
        const store = false;
        expect(store).toBe(true);
    });
});
System.register("ts/index", ["../scss/style.scss"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (_1) {
            }
        ],
        execute: function () {
            console.log('yeah!');
        }
    };
});
