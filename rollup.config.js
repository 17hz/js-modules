export default [
    {
        input: 'src/main.js',
        output: {
            file: 'out/amd/bundle.js',
            format: 'amd',
            amd: {
                id: 'myBundle'
            }
        },
        external: ['lodash']
    },
    {
        input: 'src/main.js',
        output: {
            file: 'out/cjs/bundle.js',
            format: 'cjs'
        },
        external: ['lodash']
    },
    {
        input: 'src/main.js',
        output: {
            file: 'out/esm/bundle.js',
            format: 'esm'
        },
        external: ['lodash']
    },
    {
        input: 'src/main.js',
        output: {
            file: 'out/iife/bundle.js',
            format: 'iife',
            name: 'myBundle',
            globals: {
                lodash: '_'
            }
        },
        external: ['lodash']
    },
    {
        input: 'src/main.js',
        output: {
            file: 'out/umd/bundle.js',
            format: 'umd',
            amd: {
                id: 'myBundle'
            },
            name:'myBundle',
            globals: {
                lodash: '_'
            }

        },
        external: ['lodash']
    },
    {
        input: 'src/main.js',
        output: {
            file: 'out/system/bundle.js',
            format: 'system'
        },
        external: ['lodash']
    }
];