const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(['../dist'], { allowExternal: true })
    ],
    optimization: {
        splitChunks: {
            chunks: "all",
            minChunks: 1,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: "vendor",
                    name: "vendor"
                }
            }
        }
    }

});