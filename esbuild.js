const esbuild = require('esbuild');
const vuePlugin = require('esbuild-vue');
const sassPlugin = require("esbuild-plugin-sass");

esbuild
  .build({
      entryPoints: ['src/index.ts'],
      outdir: 'lib',
      bundle: true,
      sourcemap: true,
      minify: true,
      splitting: true,
      format: 'esm',
      target: ['esnext'],
      plugins: [vuePlugin(), sassPlugin()],
  })
  .catch(() => process.exit(1));