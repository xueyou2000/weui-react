import px2rem from 'postcss-plugin-px2rem';

export default {
  cjs: {
    type: 'rollup',
    minify: true,
  },
  extractCSS: true,
  extraPostCSSPlugins: [
    px2rem({
      rootValue: 100,
      unitPrecision: 2,
      exclude: /dumi/,
      mediaQuery: false,
      minPixelValue: 2,
    }),
  ],
};
