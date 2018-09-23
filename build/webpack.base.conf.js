const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SRC_PATH = path.resolve(__dirname, '../src');
const DIST_PATH = path.resolve(__dirname, '../dist');
const webpack = require('webpack');

module.exports = {
  entry: {
      src: './src/index.js',
      vendor:['react','react-router','react-dom'],
  },
   output: {
    // filename: "js/[name].[chunkhash:16].js",
    filename: "js/[name].js",
    path: path.resolve(__dirname, '../dist/src/'),
    },
  // output: {
  //   // filename: "js/bundle.js",
  //   filename: "js/[name].[chunkhash:16].js",
  //   path: DIST_PATH
  // },
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
        // {loader: "style-loader" }, //在html中插入<style>标签
        {loader: "css-loader" },//获取引用资源，如@import,url()
        {
          loader: "postcss-loader",
          options: {
            plugins:[
              require('autoprefixer')({
                  browsers:['last 5 version']
              })
            ]
          }
        },
      ]
    },
    {
      test:/\.styl$/,
      use: [
         MiniCssExtractPlugin.loader,
         //不晓得为啥MiniCssExtractPlugin 与style-load 只能用其中一个
        //  {loader: "style-loader"},//在html中插入<style>标签
         {loader: "css-loader"},////获取引用资源，如@import,url()
         {loader: "stylus-loader"},
         {
            loader: "postcss-loader",//自动加前缀
            options: {
              plugins:[
                    require('autoprefixer')({
                        browsers:['last 5 version']
                    })
              ]
            }
         },
     ]
    },
    // {
    //   test: /\.(png|jpg|gif|woff|svg|eot|woff2|tff)$/,
    //   use: 'url-loader?limit=8129',
    //   //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
    //   exclude: /node_modules/
    // },
    {
      test:/\.(png|jpg|gif)$/,
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
    new webpack.ProvidePlugin({
      React: 'react'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[id].[hash].css',
    }),

  ]
};

