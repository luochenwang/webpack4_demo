const path = require('path');
const webpack = require("webpack");
const uglify = require('uglifyjs-webpack-plugin');
const extractTextPlugin = require("extract-text-webpack-plugin"); //css分离
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
const {getView,mode} = require('./utils');


let pages = Object.keys(getView('./src/*.html'));
let pagesArr = [];
pages.forEach(pathname => {
    let htmlname = pathname.split('src/')[1];
    console.log(htmlname);
    let conf = {
        filename: `${htmlname}.html`,
        template: `${pathname}.html`,
        hash: true,
        chunks: [htmlname],
        title: 'extract-text-webpack-plugin',
        minify: {
            // 删除引号
            // removeAttributeQuotes: true,
            removeComments: true,
            //是否压缩html里的css（使用clean-css进行的压缩） 默认值false；
            minifyCSS: true,
            //是否压缩html里的js（使用uglify-js进行的压缩）
            minifyJS: true,
            collapseWhitespace: true,
            // removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true
        }
    }

    pagesArr.push(new HtmlWebpackPlugin(conf));
});

const plguins = [
    new extractTextPlugin({ //样式文件单独打包
        filename: "css/[name].[hash:8].css", //指定生成的文件名称
        disable: false, //是否禁用此插件
        allChunks: true
    }),
    // js压缩
    new uglify(),
    new webpack.ProvidePlugin({
        '@': path.resolve(__dirname, '../src/'),
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../src/static'),
        to: path.resolve(__dirname, '../dist/static'),
      }
    ]),
    ...pagesArr,
];


if (mode === 'development') {
    plguins.unshift(
        new webpack.HotModuleReplacementPlugin(),
    );
}else{
    plguins.unshift(
        new CleanWebpackPlugin(),
    );
}

module.exports = plguins;