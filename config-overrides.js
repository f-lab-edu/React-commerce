const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  };
  config.resolve.extensions?.push('.ts', '.tsx');
  config.resolve?.plugins?.push(new TsconfigPathsPlugin({}));

  return config;
};
