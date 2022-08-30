var myBundle = (function (exports, lodash) {
    'use strict';

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

    return exports;

})({}, _);
