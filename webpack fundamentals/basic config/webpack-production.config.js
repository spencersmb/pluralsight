var WebpackStrip = require('strip-loader');
var devConfig = require('./webpack.config.js');
var stripLoader = {
  test: [
    /\.js$/,
    /\.es6$/
  ],
  exclude: /node_modules/,
  //strip multiple strings
  loader: WebpackStrip.loader('console.log', 'spencer')
};

devConfig.module.loaders.push(stripLoader);

//duplicate our regular config file contents
module.exports = devConfig;