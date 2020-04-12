/*
 * @Author: 刘利军
 * @Date: 2020-04-11 14:00:55
 * @LastEditors: 刘利军
 * @LastEditTime: 2020-04-12 23:08:49
 */

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const resolve = dir => require('path').join(__dirname, dir)
module.exports = (env, argv) => {
    return merge(common(env, argv), {
        mode: 'development',
        devtool: 'inline-source-map',
        entry: ['react-hot-loader/patch'],
        resolve: {
            alias: {
                'react-dom': '@hot-loader/react-dom'
            },
        },
        devServer: {
            contentBase: resolve('./dist'),
            historyApiFallback: true,
            compress: false,
            proxy: {
                "/api": "http://localhost:3000"
            }
        }
    });
};