const config = require('./webpack.config.js'); // Import your existing webpack config
const path = require('path');

module.exports = {
  ...config, // Spread the existing config
  mode: 'development', // Override mode to development
  devServer: {
    compress: true, // Enable gzip compression
    port: 3000, // Port to run dev server on
    hot: true, // Enable hot module replacement
  },
};
