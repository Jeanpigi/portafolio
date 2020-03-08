const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }, 
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { 
                            name: 'assets/[hash].[ext]' 
                        }
                    }
                ],
            },
            {
                test: /\.(woff|woff2)$/,
                use: {
                    loader:'url-loader',
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
            title: 'production',
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css',
        }),
        new htmlWebpackPlugin({
            favicon: './public/favicon.ico'
        })
    ]
}