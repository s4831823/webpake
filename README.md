# webpake

## 使用手冊

## 官網
- 大陸官網 https://webpack.docschina.org/
- 官網 https://www.webpackjs.com/

### 在开始前你需要先理解一些核心概念：

入口(entry)
输出(output)
loader
插件(plugin)
模式(mode)
浏览器兼容性(browser compatibility)



## 安裝

安裝參考指南
https://www.webpackjs.com/guides/installation/


安裝方式
1. 安裝 node.js  9x 版本以上
2. webpack 安裝 `npm i`  
   詳細套件請看 package.json


## 執行

1. `npm run dev`   開發使用   ["dev": "webpack-dev-server --open " ]
2. `npm run watch` 監看使用   ["watch": "webpack -d --｀watch"]
3. `npm run prod`  輸出使用   ["prod": "webpack --mode production"]


## 開發src

1. `./src/sass/`  sass 開發檔案

2. `./src/xxx.js`  js 開發scss注入，套件注入都在這支js裡
    注入點在webpack.config.js 選擇要注入哪個頁面


3. `webpack.cpnfig.js` 檔案配置

    - entry  js進入點

    - devServer 瀏覽器物件建立

    - output 輸出檔案配置

    - module 使用模組 包括 scss / babel 轉譯資源都在這處理
      這邊有要注意的地方，scss loader 使用要注意順序 (loader有點像是載入資源)
      有使用兩個loader  
        1. MiniCssExtractPlugin
        2. babel

        loader https://www.webpackjs.com/loaders/

4. plugins 使用套件
   
HtmlWebpackPlugin  https://webpack.js.org/plugins/html-webpack-plugin/

html 文件產生：src/xxx.html --> dist/xxx.html
template: './src/index.html' //來源檔案
filename: 'index.html', //目的地檔案

    
MiniCssExtractPlugin https://webpack.js.org/plugins/mini-css-extract-plugin/

css 文件產生：src/sass/xxx.scss --> dist/css/xxx.css



## 輸出dist

指令 `npm run prod` 輸出
dist 資料夾會產生檔案


## 套件

- HtmlWebpackPlugin 
  https://github.com/jantimon/html-webpack-plugin#options
  生成html 檔案 注入資源

- CleanWebpackPlugin
  https://www.webpackjs.com/guides/output-management/#%E6%B8%85%E7%90%86-dist-%E6%96%87%E4%BB%B6%E5%A4%B9
  清理舊的檔案 


## 文章


 - Webpack 出新手簡單起手式（打包jquery+bootstrap+Babel+less+css+其餘外掛）
https://medium.com/@weisheng1202/webpack-%E5%87%BA%E6%96%B0%E6%89%8B%E7%B0%A1%E5%96%AE%E8%B5%B7%E6%89%8B%E5%BC%8F-%E6%89%93%E5%8C%85jquery-bootstrap-babel-less-css-%E5%85%B6%E9%A4%98%E5%A4%96%E6%8E%9B-d7c31a5e6f00


- 自动加载模块，而不必到处 import 或 require 。
https://www.webpackjs.com/plugins/provide-plugin/



## html-webpack-plugin 配置

```jsx
this.options = _.extend({
    template: path.join(__dirname, 'default_index.ejs'),
    filename: 'index.html',
    hash: false,
    inject: true,
    compile: true,
    favicon: false,
    minify: false,
    cache: true,
    showErrors: true,
    chunks: 'all',
    excludeChunks: [],
    title: 'Webpack App',
    xhtml: false
  }, options);
```

- #### title

生成的html文檔的標題 
配置方式 `<%= htmlWebpackPlugin.options.title %>`


- #### filename

輸出文件的文件名稱，默認為index.html，不配置就是該文件名；此外，還可以為輸出文件指定目錄位置（例如'html/index.html'）


- #### template

本地模板文件的位置，支持加載器(如handlebars、ejs、undersore、html等)，如比如 `handlebars!src/index.hbs`

- #### inject

向template或者templateContent中注入所有靜態資源，不同的配置值注入的位置不經相同。

- 1 `true或者body` 所有JavaScript資源插入到body元素的底部
- 2  `head` 所有JavaScript資源插入到head元素中
- 3  `false` 所有靜態資源css和JavaScript都不會注入到模板文件中


- #### favicon

favicon  : 添加特定favicon路徑到輸出的html文檔中，這個同title配置項，需要在模板中動態獲取其路徑值


- #### chunks

chunks：允許插入到模板中的一些chunk，不配置此項默認會將entry中所有的chunk注入到模板中。在配置多個頁面時，每個頁面注入的thunk應該是不相同的，需要通過該配置為不同頁面注入不同的thunk；


## 參考文件

- zh  https://www.cnblogs.com/wonyun/p/6030090.html
- en  https://github.com/jantimon/html-webpack-plugin
 

## 延伸閱讀

1. webpack 二三事：如何讓 CommonsChunkPlugin() 發揮最大效益
   https://medium.com/frochu/webpack-commons-chunk-plugin-f2e4bd853c26



2. 概念術語
   https://webpack.docschina.org/glossary


3. loader 
   https://www.webpackjs.com/loaders/



4. path.join() 和 path.resolve() 區別
   https://zhuanlan.zhihu.com/p/27798478

5. html-webpack-plugin詳解
  https://www.cnblogs.com/wonyun/p/6030090.html


# 檔案紀錄

1. 1.0.0  第一版釋出 2019.9.15
   
   - webpack.config_bak.js
     最早開發版本

   - webpack.config_back03.js
     最後一版測試開發，裡面有代碼庫分離的功能
     目前還在測試中 

   - webpack.config.js 
     穩定版本  