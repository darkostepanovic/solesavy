const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const path = require('path');

const htmlPages = require('./pagesConfig');

const HTMLConfig = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'src', 'index.html'),
    file: 'index.html'
});

const multiFiles = htmlPages.map(function(name) {
    return new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', `${name}.html`),
        filename: `${name}.html`
    })
})

module.exports = {
    output: {
        publicPath: "/"
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [ 
                    MiniCssExtractPlugin.loader, 
                    { loader : 'css-loader', options: { sourceMap: true, url: false, importLoaders: 1 } },
                    { loader: 'postcss-loader', options: { sourceMap: true, postcssOptions: { sourceMap: true, plugins: [ autoprefixer(), cssnano() ]}}},
                    { loader: 'sass-loader', options: { sourceMap: true }}
                ]
            },
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: 'url-loader'
            }
        ]
    },
    plugins: [
        HTMLConfig,
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/images', to: 'images' },
                { from: 'src/fonts', to: 'fonts' },
                { from: 'src/videos', to: 'videos' },
            ]
        }),
        new MiniCssExtractPlugin({ filename: 'styles.css'}),
    ].concat(multiFiles)
}