const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        port: '8088',
        contentBase: path.join(__dirname, '../src'),
        compress: true,
        historyApiFallback: true, //这个配置属性是用来应对返回404页面时定向到特定页面用的
        hot: true,
        https: false,
        noInfo: true,
        open: true,
        proxy: {} // 重定向 可解决跨域
    }
});