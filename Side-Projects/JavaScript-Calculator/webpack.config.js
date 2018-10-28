const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html'
    }), // HtmlWebpackPlugin 会默认生成 index.html 文件。这就是说，它会用新生成的 index.html 文件，把我们的原来的替换
    new CleanWebpackPlugin(['dist']), //	每次构建前清理 /dist 文件夹，因此只会生成用到的文件。
    new webpack.NamedModulesPlugin(), // 添加了 NamedModulesPlugin，以便更容易查看要修补(patch)的依赖
    new webpack.HotModuleReplacementPlugin() // 热更新 HMR
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      }
    ]
  },
  devtool: 'eval-source-map', //使用 source map 将编译后的代码映射回原始源代码，出现错误可以精准指向源码，而不是打包后的 bundle 文件
  devServer: {
    hot: true, // 启用 HMR 就是更新 webpack-dev-server 的配置
    port: 8081, // 默认 8080 可自定义
    contentBase: './dist'
  } // 使用 webpack-dev-server 提供了一个简单的 web 服务器，并且能够实时重新加载(live reloading)。让我们设置以下 以上配置告知 webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件。package.json 添加脚本 "webpack-dev-server --open" 即可打开服务。
}