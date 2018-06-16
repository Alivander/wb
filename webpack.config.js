const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PostcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const Autoprefixer = require('autoprefixer');
const { imageminLoader } = require('imagemin-webpack');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminOptipng = require('imagemin-optipng');
const imageminSvgo = require('imagemin-svgo');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

/*
    The dependence of the main assembly on process.env.NODE_ENV
    is in Webpack 4 inside node_modules
*/

const devMode = /development/.test(process.env.npm_lifecycle_script);

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: !devMode,
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            minimize: !devMode,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                PostcssFlexbugsFixes,
                                Autoprefixer({
                                    browsers: [
                                        '>1%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 11',
                                    ],
                                    flexbox: 'no-2009',
                                }),
                            ],
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(bmp|jpe?g|png|gif|svg)$/i,
                exclude: /fonts/, // for svg fonts
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240,
                        },
                    },
                    {
                        loader: imageminLoader,
                        options: {
                            cache: true,
                            bail: false,
                            imageminOptions: {
                                plugins: [
                                    imageminGifsicle({
                                        interlaced: true,
                                        optimizationLevel: 3,
                                    }),
                                    imageminMozjpeg({
                                        progressive: true,
                                        quality: 90,
                                    }),
                                    imageminOptipng(),
                                    imageminSvgo(),
                                ],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(svg|eot|ttf|woff|woff2)$/i,
                include: [
                    path.resolve(__dirname, 'src/fonts/'), // for exlude svg images
                ],
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts/',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new FaviconsWebpackPlugin({
            logo: './src/favicon.png',
            background: 'rgba(255, 255, 255, 0)',
            icons: {
                android: true,
                appleIcon: true,
                appleStartup: true,
                coast: false,
                favicons: true,
                firefox: true,
                opengraph: false,
                twitter: false,
                yandex: false,
                windows: false,
            },
        }),
    ],
};
