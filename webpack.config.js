const path = require('path');

const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');


const webpackConfig = {
  context: path.resolve(__dirname, 'src'),

  devServer: {
    https: false,
    host: '0.0.0.0',
    port: '8000',

    contentBase: path.resolve(__dirname, 'src'),
    historyApiFallback: true,
    compress: true,

    hot: true,
    inline: true,

    // --progress - [assets, children, chunks, colors, errors, hash, timings, version, warnings]
    stats: {
      assets: true,
      children: true,
      chunks: false,
      colors: true,
      errors: true,
      errorDetails: true, //depends on {errors: true}
      hash: true,
      modules: false,
      publicPath: true,
      reasons: false,
      source: true, //what does this do?
      timings: true,
      version: true,
      warnings: true
    }
  },

  devtool: 'source-map',

  entry: {
    app: [
      'react-hot-loader/patch',
      './index.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: 'http://localhost:8000/', // Use absolute paths to avoid the way that URLs are resolved by Chrome when they're parsed from a dynamically loaded CSS blob. Note: Only necessary in Dev.
    filename: '[name].bundle.js'
  },

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
        use: [
          {
            loader: 'style-loader'
          },
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
              keepQuery: true
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
      },

      //FONTS
      {
        test: /\.ttf$|\.otf$/,
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
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),

    new CaseSensitivePathsPlugin({
      debug: false
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),

    new HtmlWebpackPlugin({
      title: 'Reader',
      template: 'index.html',
      inject: true,
      hash: true,
      cache: true,
      showErrors: true,
      chunksSortMode: 'dependency'
    }),
    // Enable multi-pass compilation for enhanced performance
    // in larger projects. Good default.
    new webpack.HotModuleReplacementPlugin({
      // multiStep: true
    }),
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
