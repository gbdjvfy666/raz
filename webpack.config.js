module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.css$/,
       use: ['style-loader', 'css-loader'] }
    ]
  }
};