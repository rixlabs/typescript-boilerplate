const path = require('path');

const DIST_PATH = path.resolve(__dirname, './dist');
const SOURCE_PATH = path.resolve(__dirname, './app');

module.exports = {
  entry: './app/ts/index.ts',
  output: {
    filename: 'bundle.js',
    path: `${DIST_PATH}/js`
  },
  devServer: {
    contentBase: DIST_PATH,
    port: 8888,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      }]
  }
};
