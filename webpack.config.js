// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');

const env = process.env.NODE_ENV;

const config = {
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
    ],
  },
  output: {
    library: 'react-handler',
    libraryTarget: 'umd',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
  ],
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
  },
};

if (env === 'production') {
  const uglifyJS = new webpack.optimize.UglifyJsPlugin({
    compressor: {
      pure_getters: true,
      unsafe: true,
      unsafe_comps: true,
      warnings: false,
    },
  });

  config.plugins.push(uglifyJS);
}

module.exports = config;
