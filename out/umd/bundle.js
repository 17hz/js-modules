(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('lodash')) :
    typeof define === 'function' && define.amd ? define('myBundle', ['exports', 'lodash'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.myBundle = {}, global._));
})(this, (function (exports, lodash) { 'use strict';

    const module_A = {
        name: 'module_A'
    };

    const printModule = () => {
        // 打印
        console.log(`the module is ${module_A.name}`);

        // 测试 lodash 的能力，打印1个 name
        console.log(lodash.repeat(module_A.name, 1));
    };

    exports.printModule = printModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
