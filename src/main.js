import module_A from "./module_A";

// 导入一个无用模块, 测试 tree-shaking
import module_B from "./module_B";

import {repeat} from "lodash";


// 定义一个无用变量, 测试 tree-shaking
const unused_var = 'unused_var'

export const printModule = () => {
    // 打印
    console.log(`the module is ${module_A.name}`)

    // 测试 lodash 的能力，打印1个 name
    console.log(repeat(module_A.name, 1));
}



