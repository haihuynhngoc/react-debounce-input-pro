import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import del from 'rollup-plugin-delete';
import replace from '@rollup/plugin-replace';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: !isProduction,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: !isProduction,
    },
  ],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development',
      ),
      preventAssignment: true,
    }),
    del({ targets: 'dist/*' }),
    resolve(), // Resolve node_modules
    commonjs(), // Convert CommonJS modules to ES modules
    typescript({ tsconfig: './tsconfig.json' }), // Compile TypeScript
    terser(), // Minify the bundle
  ],
  external: ['react', 'react-dom'], // Exclude peer dependencies
};
