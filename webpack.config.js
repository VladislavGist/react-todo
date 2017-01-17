var webpack = require("webpack");

module.exports = {
	//точка входа. откуда он ищет зависимости
	entry: "./src/main.js",
	//то что на выходе
	output: {
		path: __dirname + "/public/build",
		publicPath: "build/",
		//файл который будет создан по итогу
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: "babel",
				exclude: [/node-modules/, /public/]	//для этих путей не использовать
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader!autoprefixer-loader!",
				exclude: [/node-modules/, /public/]
			},
			{
				test: /\.gif$/,
				loader: "url-loader?limit=1000&mimetype=image/gif"
			},
			{
				test: /\.jpg$/,
				loader: "url-loader?limit=1000&mimetype=image/jpg"
			},
			{
				test: /\.png$/,
				loader: "url-loader?limit=1000&mimetype=image/png"
			},
			{
				test: /\.svg$/,
				loader: "url-loader?limit=1000&mimetype=image/svg"
			},
			{
				test: /\.jsx$/,
				loader: "react-hot-loader!babel",
				exclude: [/node-modules/, /public/]
			},
			{
				test: /\.json$/,
				loader: "json-loader"
			}
		]
	}
}