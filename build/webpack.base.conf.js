const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SRC_PATH = path.resolve(__dirname, '../src');
const DIST_PATH = path.resolve(__dirname, '../dist');
const webpack = require('webpack');

module.exports = {
  entry: {
      src: './src/index.js',
      vendor:['react','react-router','react-dom']
  },
   output: {
    // filename: "js/[name].[chunkhash:16].js",
    filename: "js/[name].js",
    path: path.resolve(__dirname, '../dist/src/'),
    },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: "babel-loader",
      include: SRC_PATH,
      },
    {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        {loader: "css-loader",options: { importLoaders: 1 } },//获取引用资源，如@import,url()
        {
          loader: "postcss-loader",
          options: {
            // publicPath: '../',
            plugins:[
              require('autoprefixer')({browsers:['last 2 version']})
            ],
          }
        },
      ]
    },
    {
      test:/\.styl$/,
      use: [
        MiniCssExtractPlugin.loader,
         //MiniCssExtractPlugin 与style-load 只能用其中一个
        {loader: "css-loader",options: { importLoaders: 1 }},////获取引用资源，如@import,url()
        // autoprefixer 放在stylus后面会不生效
        {
          loader: "postcss-loader",//自动加前缀
          options: {
            // publicPath: '../',
            plugins:[
              require('autoprefixer')({browsers: ['last 2 version']})
            ]
          }
         },
         {loader: "stylus-loader"},
     ]
    },
    {
      test:/\.(png|jpg|gif|jpeg)$/,
      use:[{
        loader:'url-loader',
        options: {
          // outputPath:'../',//输出**文件夹
          publicPath: '/',
          name: "images/[name].[ext]",
          limit:500  //是把小于500B的文件打成Base64的格式，写入JS
        }
      }]
    },
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body', //script标签位于html文件的 body 底部
      minify: {  //使用minify会对生成的html文件进行压缩
          html5: true
      },
      hash: false
    }),
    new webpack.ProvidePlugin({ // 自动加载模块
      React: 'react'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
      chunkFilename: 'css/[id].css',
    }),

  ]
};

