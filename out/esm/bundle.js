// import { repeat } from 'lodash';
 import  repeat  from '../../node_modules/lodash-es/repeat.js';


const module_A = {
    name: 'module_A'
};

const printModule = () => {
    // 打印
    console.log(`the module is ${module_A.name}`);

    // 测试 lodash 的能力，打印1个 name
    console.log(repeat(module_A.name, 1));
};

export { printModule };
