/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

// Webpack plugins


// Next Plugins
const withPlugins = require('next-compose-plugins');
const typescript = require('@zeit/next-typescript');
const sass = require('@zeit/next-sass');
const css = require('@zeit/next-css');
const offline = require('next-offline');

const nextConfig = {
	distDir: 'build',

	/**
	 * Custom webpack configuration for Next
	 */
	webpack(config) {
		// Allow Next to resolve Typescript custom paths
		config.resolve.modules.unshift(__dirname);

		// Setup aliases
		config.resolve.alias = {
			...config.resolve.alias,
			assets: path.resolve(__dirname, 'src/assets/'),
			components: path.resolve(__dirname, 'src/components/'),
			containers: path.resolve(__dirname, 'src/containers/'),
			config: path.resolve(__dirname, 'src/config/'),
			contexts: path.resolve(__dirname, 'src/contexts/'),
			lib: path.resolve(__dirname, 'src/lib/'),
			queries: path.resolve(__dirname, 'src/queries/'),
			routes: path.resolve(__dirname, 'src/routes.js'),
			services: path.resolve(__dirname, 'src/services/'),
			styles: path.resolve(__dirname, 'src/styles/'),
			utils: path.resolve(__dirname, 'src/utils/'),
		};

		// SVG Loader
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack', 'url-loader'],
		});
		// File loader
		config.module.rules.push({
			test: /\.(png|jpg|gif)$/,
			use: [
				{
					loader: 'file-loader',
					options: {
						name: '[name]_[hash].[ext]',
						outputPath: 'static/images',
						publicPath: '/_next/static/images',
					},
				},
			],
		});

		return config;
	},
	// workboxOpts: {
	//   clientsClaim: true,
	//   globDirectory: '.',
	//   globPatterns: ['build/**/*'],
	//   modifyURLPrefix: {
	//     'build': '/next/dist',
	//   },
	//   runtimeCaching: [
	//     {
	//       handler: 'CacheFirst',
	//       options: {
	//         cacheName: 'images',
	//       },
	//       urlPattern: /(http[s]?:\/\/.*\.(?:png|jpg|jpeg|svg))/,
	//     },
	//     {
	//       handler: 'CacheFirst',
	//       options: {
	//         cacheName: 'fonts',
	//       },
	//       urlPattern: /\.(?:woff|woff2|otf|ttf)$/,
	//     },
	//     {
	//       handler: 'NetworkFirst',
	//       options: {
	//         cacheName: 'scripts',
	//       },
	//       urlPattern: /\.(?:js|jsx)$/,
	//     },
	//     {
	//       handler: 'NetworkFirst',
	//       options: {
	//         cacheName: 'html-cache',
	//       },
	//       urlPattern: /http[s]?:\/\/.*/,
	//     },
	//   ],
	//   skipWaiting: true,
	//   swDest: 'build/service-worker.js',
	// },
};

module.exports = withPlugins([
	[css],

	[
		sass,
		{
			cssLoaderOptions: {
				localIdentName: '[local]___[hash:base64:5]',
			},
			cssModules: true,
			sassLoaderOptions: {
				includePaths: [path.resolve('./src/styles')],
			},
		},
	],

	offline,

	typescript,

], nextConfig);
