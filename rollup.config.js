import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import del from 'rollup-plugin-delete';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: false,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: false,
    },
  ],
  plugins: [
    del({ targets: 'dist/*' }),
    resolve(), // Resolve node_modules
    commonjs(), // Convert CommonJS modules to ES modules
    typescript({ tsconfig: './tsconfig.json' }), // Compile TypeScript
    terser(), // Minify the bundle
  ],
  external: ['react', 'react-dom'], // Exclude peer dependencies
};
