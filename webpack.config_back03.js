const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//只有清理的這個套件要這樣使用 {}
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


// style inline html
module.exports = {
    mode: 'development', // "production" | "development" | "none"  開發模式
    //兩個進入口
    entry: {
        app: './src/index.js',
        another : './src/about.js'
    },
     // 打開瀏覽器 server 
    devServer: {
        contentBase: './dist',
        port: 3004,
        open: true
    },
    //輸出的資料夾
    output: {
        filename: '[name].bundle.js',
        //  檔案要去哪  gulp 是用pipe
        path: path.resolve(__dirname, 'dist') // __dirname 檔案名稱
    },
    //代碼庫分離
    // optimization: {
    //         splitChunks: {
    //           chunks: 'all'
    //         }
    //       },
    
    //會使用哪些模組
    module: {
        rules: [{
            test: /\.(sass|scss|css)$/,
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        // you can specify a publicPath here
                        // by default it use publicPath in webpackOptions.output
                        publicPath: './dist'
                    }
                },
                'css-loader',
                'sass-loader'
            ],
        }]

    },
    //使用哪些套件
    plugins: [
        //清理dist 的舊檔案
        new CleanWebpackPlugin(),
        //html 5 plugin
        new HtmlWebpackPlugin({
            title: '我的首頁',
            filename: 'index.html', //默認產生的首頁 index.html
            template: './src/index.html' //我們參考的首頁
        }),
        new HtmlWebpackPlugin({
            title: '內頁 | 關於我們',
            filename: 'abouts.html', //默認產生的首頁 index.html
            template: './src/aboutus.html' //我們參考的首頁
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "style.css",
        })
    ]
}