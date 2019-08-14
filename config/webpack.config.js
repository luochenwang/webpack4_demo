const path = require('path');
const webpack = require("webpack");
const plguins = require('./webpack.plguins');
const rules = require('./webpack.rules');
const {getView,mode} = require('./utils');




let entriesObj = getView('./src/js/*.js');
module.exports = {
    mode: mode,
    // 入口的配置项
    entry: entriesObj,
    // 出口的文件配置项
    output: {
        // 打包的路径
        path: path.resolve(__dirname, '../dist'),
        // 打包的文件名称
        filename: 'js/[name].js', //[name] 入口打包几个文件出来的就是几个文件
        // publicPath: './' //publicPath：主要作用就是处理静态文件路径的。
    },
    // 模块：列如解读css，图片如何转换，压缩
    module: {
        rules:rules
    },
    // 插件，用户生产模块和各项功能
    plugins: plguins,
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "commons",
                    chunks: "async",
                    minChunks: 2, // 引用超过2次就打包在一起
                    minSize: 1000 //最小1000k 才打包
                }
            }
        }
    },
    // 配置webpack开发服务功能
    devServer: {
        publicPath: '/',//
        contentBase: path.resolve(__dirname, '../dist'),//此处的路径必须和输出output文件的路径一致 否则无法自动更新，或者是基于output的相对路径
        compress: true,
        inline: true,//设置为true，当源文件改变时会自动刷新页面
        // grogress: true,
        host: 'localhost',// 默认是localhost
        port: 9005,//指定用于侦听请求的端口号
        open:true,//当open启用时，开发服务器将打开浏览器。
        hot: true,// 开启热更新，开启热加载还需在主入口js文件中配置
        // hotOnly:true,
        // openPage:'index.html',//指定在打开浏览器时导航到的页面。
        overlay: {//当存在编译器错误或警告时，在浏览器中显示全屏覆盖,显示警告和错误：
            warnings: true,
            errors: true
        },
        proxy: {//代理配置
            // '/api': {
            //     target: 'http://localhost:3000',
            //     pathRewrite: {'^/api' : ''},//如果不想/api传递，我们需要重写路径
            // }
        },
    }
}