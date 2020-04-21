import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
export const config: Config = {
  namespace: 'web-components-stencil',
  taskQueue: 'async',
  globalStyle: 'src/global/variable.css',
  bundles: [
    { components: ['wc-button'] },
    { components: ['wc-lazyload'] }
  ],
  plugins: [
    sass()
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
