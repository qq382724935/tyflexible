/*
 * @Author: 刘利军
 * @Date: 2020-04-11 14:01:18
 * @LastEditors: 刘利军
 * @LastEditTime: 2020-04-12 23:02:17
 */

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    entry: ['./src/index'],
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json'],
        alias: {
            '@': path.join(__dirname, '../src'),
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Production',
            template: './public/index.html'
        })
    ],
    output: {
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'], exclude: /node_modules/ },
            { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'], exclude: /node_modules/ },
            { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader'], exclude: /node_modules/ },
            {
                test: /\.m?(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};
module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.output.filename = '[name].[hash].js';
    }
    return config;
};