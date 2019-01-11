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
            cacheGroups: {
                vendor:{//node_modules内的依赖库
                    chunks:"all",
                    test: /[\\/]node_modules[\\/]/,
                    name:"vendor",
                    minChunks: 1, //被不同entry引用次数(import),1次的话没必要提取
                    maxInitialRequests: 5, //entry文件请求的chunks不应该超过此值 (请求过多，耗时)
                    minSize: 0, //最小尺寸必须大于此值
                    priority:100, //优先级，多个分组冲突时决定把代码放在哪块
                },
            }
        }
    }

});