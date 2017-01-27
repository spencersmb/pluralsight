var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve('js'), //sets a relative root dir for the entry key so this targets the folder JS on the root level
  entry: [
    "./app"
  ],
  output: {
    path: path.resolve('build/'), //creates 2 directories,
    publicPath: 'public/assets/', //this is where it will be for the webpack dev server, but we tell webserver to actually find the file in the build folder
    filename: "bundle.js"
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ],
  devServer:{
    contentBase: 'public' //any requests on the root level will be routed to public
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "jshint-loader"
      }
    ],
    loaders: [
      {
        test: /\.es6$/, //use babel on .es6 files only
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      //probly dont need to inject CSS into the html doc with wordpress
      //but if we could render js server side it would be faster....
      {
        test: /\.css$/, //use babel on .es6 files only
        exclude: /node_modules/,
        // loader: "style-loader!css-raw-loader!postcss-loader" //run css first through the css-loader then the style loader with !
        loader: ExtractTextPlugin.extract("style-loader" ,"css-raw-loader!postcss-loader")

      },
      {
        test: /\.scss$/, //use babel on .es6 files only
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract("style-loader", "css-raw-loader!postcss-loader!sass-loader")
      },
      { test: /\.ts?$/, loaders: ["babel", "ts-loader"] }
    ]
  },
  //types of files to process without any specific loader applied
  resolve:{
    extensions: ['', '.js', '.es6', '.ts', '.css']
  }
};