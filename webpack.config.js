//webpack.config.js
const path = require("path");

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, "build"),
    filename: './bundle.js',
    library: '_',
  },
  resolve: {
    extensions: ['.ts', '.js' ]
  },
  module: {
    rules: [
      {
        test: /\.(ts)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  watch: true,
  mode: "development"
}