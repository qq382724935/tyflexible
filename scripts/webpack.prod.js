/*
 * @Author: 刘利军
 * @Date: 2020-04-11 14:01:10
 * @LastEditors: 刘利军
 * @LastEditTime: 2020-04-12 14:50:53
 */

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = (env, argv) => {
    return merge(common(env, argv), {
        mode: 'production',
        optimization: {
            moduleIds: 'hashed',
            runtimeChunk: 'single',
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all',
                    },
                },
            },
        },
    });

};