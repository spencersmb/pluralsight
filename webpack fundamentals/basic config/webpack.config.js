module.exports = {
	entry: [
		"./utils",
		"./app.js"
	],
	output: {
		filename: "bundle.js"
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
			}
		]
	},
	//types of files to process without any specific loader applied
	resolve:{
		extensions: ['', '.js', '.es6']
	}
};