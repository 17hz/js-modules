System.register(['lodash'], (function (exports) {
    'use strict';
    var repeat;
    return {
        setters: [function (module) {
            repeat = module.repeat;
        }],
        execute: (function () {

            const module_A = {
                name: 'module_A'
            };

            const printModule = exports('printModule', () => {
                // 打印
                console.log(`the module is ${module_A.name}`);

                // 测试 lodash 的能力，打印1个 name
                console.log(repeat(module_A.name, 1));
            });

        })
    };
}));
