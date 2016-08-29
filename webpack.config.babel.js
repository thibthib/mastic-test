import path from 'path';
import webpack from 'webpack';

export default {
	name: 'app',
	entry: {
		'polyfills': ['./polyfills.js'],
		'app': ['./app.js']
	},
	output: {
		path: 'assets',
		filename: `[name].js`
	},
	module: {
		loaders: [{
			test: /\.js$|\.jsx?$/,
			loader: 'babel',
			include: path.join(__dirname, 'node_modules'),
			query: {
				presets: ['es2015']
			}
		}]
	}
};
