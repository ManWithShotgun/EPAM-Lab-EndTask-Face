const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const autoprefixer = require('autoprefixer');
// const postcssImport = require('postcss-import');
// const merge = require('webpack-merge');
//
// const development = require('./dev.config.js');
// const production = require('./prod.config.js');

require('babel-polyfill').default;


const PATHS = {
  app: path.join(__dirname, '../src'),
  build: path.join(__dirname, '../dist'),
};

module.exports = {
  devtool: 'source-map',

  entry: [
    PATHS.app,
  ],

  output: {
    publicPath: 'dist/',
    path: PATHS.build,
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['', '.jsx', '.js', '.json', '.scss'],
    modulesDirectories: ['node_modules', PATHS.app],
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loaders: ['eslint'],
        include: [
          path.resolve(__dirname, '../src'),
        ],
      }
    ],
    loaders: [
    {
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/,
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },
    {
      test: /\.png$|\.jpg$|\.gif$/,
      loader: 'file?name=public/[name].[ext]',
    }],
  },

    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"',
        },
        __DEVELOPMENT__: false,
      }),
      new ExtractTextPlugin('bundle.css'),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
      }),
    ],
};

// const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
//
// module.exports = {
//   devtool: 'source-map',
//
//   output: {
//     publicPath: 'dist/',
//   },
//
//   plugins: [
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"',
//       },
//       __DEVELOPMENT__: false,
//     }),
//     new ExtractTextPlugin('bundle.css'),
//     new webpack.optimize.DedupePlugin(),
//     new webpack.optimize.OccurenceOrderPlugin(),
//     new webpack.optimize.UglifyJsPlugin({
//       compress: {
//         warnings: false,
//       },
//     }),
//   ],
// };
