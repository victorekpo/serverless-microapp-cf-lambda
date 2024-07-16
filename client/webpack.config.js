const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/main.tsx',
  output: {
    filename: 'bundle.[contenthash:8].js', // Use content hash for cache busting
    path: path.resolve(__dirname, 'dist'),
    sourceMapFilename: '[name].[contenthash:8].map', // Add source maps
    chunkFilename: '[id].[contenthash:8].js', // Use contenthash for chunks
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: './.babelrc',
          },
        },
      },
      {
        test: /\.[s]?css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', "sass-loader"],
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'images/',
          },
        },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public/assets', // Source directory
          to: 'assets', // Target directory in the output path
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
    new CompressionPlugin()
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'), // Alias for src folder
      '@public': path.resolve(__dirname, 'public'), // Alias for public folder
    }
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      minChunks: 1
    },
  }
};
