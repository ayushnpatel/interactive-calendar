import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';


const resolve = require('@rollup/plugin-node-resolve');
const postcss = require('rollup-plugin-postcss');
const external = require('rollup-plugin-peer-deps-external');



const config = {
    input: './src/index.js',
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs'
        },
        {
            file: 'dist/index.es.js',
            format: 'es',
            exports: 'named'
        }
    ],
    plugins: [
        babel({ 
            exclude: 'node_modules/**',
            presets: ['@babel/preset-react']
        }),
        resolve,
        postcss({
            plugins:[],
            minimize:true
        }),
        external(),
        terser()
    ]
};

export default config;


// export default [
//     {
//         input: './src/index.js',
//         output: [
//             {
//                 file: 'dist/index.js',
//                 format: 'cjs'
//             },
//             {
//                 file: 'dist/index.es.js',
//                 format: 'es',
//                 exports: 'named'
//             }
//         ],
//         plugins: [
//             babel({
//                 exclude: 'node_modules/**',
//                 presets: ['@babel/preset-react']
//             }),
//             external(),
//             resolve(),
//             postcss.postcss({
//                 plugins: [],
//                 minimize: true
//             }),
//         ]
//     }
// ];