var path = require('path');
var webpack = require('webpack');


module.exports = {
	context: path.resolve('js'), //sets a relative root dir for the entry key so this targets the folder JS on the root level
	entry: [
		"./utils",
		"./app"
	],
	output: {
		path: path.resolve('build/js'), //creates 2 directories,
		publicPath: 'public/assets/js', //this is where it will be for the webpack dev server, but we tell webserver to actually find the file in the build folder
		filename: "bundle.js"
	},
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
				loader: "style-loader!css-loader" //run css first through the css-loader then the style loader with !
			},
			{
				test: /\.scss$/, //use babel on .es6 files only
				exclude: /node_modules/,
				loader: "style-loader!css-loader!sass-loader" 
			}
		]
	},
	//types of files to process without any specific loader applied
	resolve:{
		extensions: ['', '.js', '.es6']
	}
};