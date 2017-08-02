const path = require('path');

const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');


const webpackConfig = {
  context: path.resolve(__dirname, 'src'),

  devtool: 'source-map',

  entry: {
    app: [
      'react-hot-loader/patch',
      './index.js'
    ],
    vendor: [
      'react-hot-loader', 'react', 'react-dom', 'prop-types',
      'react-redux', 'redux-saga', 'moment', 'babel-polyfill', 'styled-components'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: './',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  recordsPath: path.resolve(__dirname, './recordsPath.json'),

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src/APIs'),
          path.resolve(__dirname, 'src/components'),
          path.resolve(__dirname, 'src/configureStore.js'),
          path.resolve(__dirname, 'src/gateway'),
          path.resolve(__dirname, 'src/index.js'),
          path.resolve(__dirname, 'src/lib'),
          path.resolve(__dirname, 'src/redux'),
          path.resolve(__dirname, 'src/sagas.js'),
          path.resolve(__dirname, 'src/services'),
          path.resolve(__dirname, 'src/shared')
        ]
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'src/assets/styles'),
          path.resolve(__dirname, 'src/components'),
          path.resolve(__dirname, 'src/shared')
        ],
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  localIdentName: '[folder]__[local]--[hash:base64:10]',
                  sourceMap: true,
                  importLoaders: 2,
                  import: false,
                  url: true
                }
              },
              {
                loader: 'resolve-url-loader',
                options: {
                  sourceMap: true,
                  silent: false,
                  fail: true,
                  keepQuery: false
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true,
                  plugins() {
                    return [
                      require('postcss-smart-import')({
                        root: path.resolve(__dirname, 'src'),
                        path: [ 'assets', 'components'],
                        skipDuplicates: true
                      }),
                      require('postcss-cssnext')()
                    ];
                  }
                }
              }
            ]
          }
        )
      },

      //FONTS
      {
        test: /\.ttf$/,
        include: [
          path.resolve(__dirname, 'src/assets/fonts')
        ],
        loader: 'file-loader',
        options: {
          mimetype: 'application/octet-stream',
          name: 'assets/fonts/[name].[ext]'
        }
      }
    ]
  },

  plugins: [
    new CaseSensitivePathsPlugin({
      debug: false
    }),

    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      minChuncks: Infinity
    }),

    new ExtractTextPlugin({
      filename: 'styles.css',
      disable: false,
      allChunks: true
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),

    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: true,
      hash: true,
      cache: true,
      chunksSortMode: 'dependency',
      showErrors: true
    }),

    // new webpack.optimize.UglifyJsPlugin({
    //   beautify: false,
    //   comments: true,
    //   sourceMap: true,
    //   compress: {
    //     warnings: false,
    //     drop_console: true,
    //     drop_debugger: true,
    //     dead_code: true
    //   }
    // }),
    // new webpack.optimize.AggressiveMergingPlugin(),

    //see possible syntax errors at the browser console instead of hmre overlay
    new webpack.NoEmitOnErrorsPlugin()
  ],

  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/components'),
      Gateway: path.resolve(__dirname, 'src/gateway'),
      Lib: path.resolve(__dirname, 'src/lib'),
      Redux: path.resolve(__dirname, 'src/redux'),
      Services: path.resolve(__dirname, 'src/services'),
      Shared: path.resolve(__dirname, 'src/components/shared'),
      Store: path.resolve(__dirname, 'src/configureStore.js'),
    },

    extensions: ['.js', '.jsx'],
    enforceExtension: false,
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ]
  }
};


module.exports = webpackConfig;
