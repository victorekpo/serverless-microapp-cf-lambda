const config = require('./webpack.config.js'); // Import your existing webpack config

module.exports = {
  ...config,
  mode: 'development',
  devServer: {
    compress: true, // Enable gzip compression
    port: 3000, // Port to run dev server on
    hot: true, // Enable hot module replacement,
    historyApiFallback: true // This option is crucial for handling client-side routing
  },
};
