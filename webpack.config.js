//套件引入
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');


// style inline html
module.exports = {
    mode: 'development', // "production" | "development" | "none"  開發模式
    //兩個進入口
    entry: {
        index: ['./src/index.js','./src/index.jsx'],
        aboutus: './src/aboutus.js',
        text: ['./src/text.js','./src/text.jsx'],
   
    },
    // 打開瀏覽器 server 
    devServer: {
        contentBase: './dist',
        host: 'localhost',
        port: 3004,
        // 指定首頁檔案
        index: 'index.html',
        open: true
    },
    //輸出的資料夾
    output: {
        // 輸出檔案名稱
        filename: '[name].bundle.js',
        // 輸出檔案路徑
        path: path.resolve(__dirname, 'dist') // __dirname 檔案名稱
    },
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
                    'css-loader', //(順序2)
                    'sass-loader' //(順序1)
                ],
            },
            //第二組loader babel
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,

                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }],
                include: path.resolve(__dirname, 'src'),
            },
            {
                test: /\.(png|jpg|gif|jpe?g|svg)$/,
                use: [
                  {
                    loader: 'url-loader?limit=8192&name=img/[name].[ext]'
                  }
                ]
              },
              { 
                  test: /.jsx$/, 
                  exclude: /node_modules/, 
                  use: { 
                        loader: 'babel-loader',
                        options: { presets: ['@babel/preset-react','@babel/preset-env'] } 
                        } 
              }
        ]

    },
    
    //使用哪些套件
    plugins: [
        //清理舊的檔案
        new CleanWebpackPlugin(),
    
        //html 5 plugin
        new HtmlWebpackPlugin({
            title: '首頁',
            inject: 'body',
            chunks: ['index'],// 選擇資源載入
            filename: 'index.html', //產生的首頁 index.html
            template: './src/index.html' //我們參考的首頁
        }),
        new HtmlWebpackPlugin({
            title: '關於我們',
            inject: 'body',
            chunks: ['aboutus'], // 選擇資源載入
            filename: 'aboutus.html', //產生的首頁 index.html
            template: './src/aboutus.html' //我們參考的首頁
        }),
        new HtmlWebpackPlugin({
            title: '測試',
            inject: 'body',
            chunks: ['text'],// 選擇資源載入
            filename: 'text.html', //產生的首頁 index.html
            template: './src/text.html' //我們參考的首頁
        }),
       
        //這個套件是載入 css 檔案
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "./css/[name].css"
        }),
        //如果 jq 是常用的，就不用使用import，直接使用套件引入
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
}