const extractTextPlugin = require("extract-text-webpack-plugin");
module.exports = [{
        test: /\.css$/,
        use: extractTextPlugin.extract({
            fallback: "style-loader",
            use: ["css-loader", "postcss-loader"],
            // css中的基础路径
            publicPath: "../"
        }).concat([{
            loader: 'file-loader',
            options: {
                name: '[name].[hash:8].[ext]',
                outputPath: 'css',
            }
        }])
    },
    {
        test: /\.less$/,
        // 三个loader的顺序不能变
        // 不分离的写法
        // use: ["style-loader", "css-loader", "less-loader"]
        // 分离的写法
        use: extractTextPlugin.extract({
            fallback: "style-loader",
            use: ["css-loader", "less-loader", "postcss-loader"],
            // css中的基础路径
            publicPath: "../"
        })
    },
    {
        test: /\.(scss|sass)$/,
        // sass不分离的写法，顺序不能变
        // use: ["style-loader", "css-loader", "sass-loader"]
        // 分离的写法
        use: extractTextPlugin.extract({
            fallback: "style-loader",
            use: ["css-loader", "sass-loader", "postcss-loader"],
            // css中的基础路径
            publicPath: "../"
        })
    },
    {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [{
            loader: "url-loader",
            options: {
                name: "[name].[hash:8].[ext]",
                limit: 2000, // size <= 2KB
                outputPath: "img" // 打包的以后的目录
            }
        }]
    },
    {
        test: /\.(htm|html)$/i,
        use: ['html-withimg-loader']
    },
    {
        test: /\.(js)$/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    "es2015"
                ]
            }
        },
        exclude: /node_modules/
    },
]