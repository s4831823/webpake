// 基本的webpack
// 套件引入
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


// style inline html
module.exports = {
    mode: 'development', // "production" | "development" | "none"  開發模式
    //進入點
    entry: './src/index.js',
    // 打開瀏覽器 server 
    devServer: {
        contentBase: './dist',
        port: 3000,
        open: true
    },
    output: {
        filename: 'bundle.js',
        //  檔案要去哪  gulp 是用pipe
        path: path.resolve(__dirname, 'dist') // __dirname 檔案名稱
    },
    module: {
        rules: [{
            // 格式
            test: /\.(sass|scss|css)$/,
            //順序是由下到上  sass > css > style
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ],
        }]

    },
    plugins: [
        //html 5 plugin
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}