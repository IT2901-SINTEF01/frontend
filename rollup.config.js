import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';
import replace from '@rollup/plugin-replace';
import pkg from './package.json';
import dotenv from 'dotenv';

dotenv.config();

export default [
    {
        input: 'src/npm/index.ts',
        output: [
            {
                file: pkg.main,
            },
        ],
        plugins: [
            typescript({ outfile: 'index.js' }),
            replace({
                preventAssignment: true,
                'process.env.REACT_APP_GRAPHQL_URI': JSON.stringify(process.env.REACT_APP_GRAPHQL_URI),
            }),
        ],
        external: ['react', 'react-dom'],
    },
    {
        input: 'dist/npm/index.d.ts',
        output: [
            {
                file: 'dist/index.d.ts',
            },
        ],
        plugins: [dts()],
    },
];
