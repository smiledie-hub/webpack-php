const path = require("path");
const MiniCssExtractPlugin = require("../Plugins/MiniCssExtractPlugin");
const CleanWebpackPlugin = require("../Plugins/CleanWebpackPlugin");
const SpriteLoaderPlugin = require("../Plugins/SpriteLoaderPlugin");
const Scripts = require("../Presets/Scripts");
const Style = require("../Presets/Style");
const Fonts = require("../Presets/Fonts");
const SvgSprite = require("../Presets/SvgSprite");
const Images = require("../Presets/Images");
const { dirs } = require('../Settings/Constants');

module.exports = {
	context: dirs.src,
	target: "web",
	entry: {
		main: path.join(dirs.src, "index.js")
	},
	output: {
		path: dirs.dist,
		filename: 'assets/js/[name].bundle.js',
		publicPath: "/",
		assetModuleFilename: '[path][name][ext]'
	},
	resolve: {
		modules: ['node_modules'],
		alias: {
			'@': dirs.src,
			'@public': path.join(dirs.src, "public"),
			'@assets': path.join(dirs.src, "assets"),
			'@js': path.join(dirs.src, "assets", "js"),
			'@scss': path.join(dirs.src, "assets", "scss"),
			'@images': path.join(dirs.src, "public", "images"),
			'@icons': path.join(dirs.src, "public", "icons"),
		},
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: "assets/css/style.css",
		}),
		new SpriteLoaderPlugin({
			plainSprite: true
		}),
	],
	module: {
		rules: [
			SvgSprite,
			Scripts,
			Style,
			Fonts,
			Images,
		],
	}
}