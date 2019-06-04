const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js', // 入口文件，
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist') // 打包后的目录必须是绝对路径
  }, // 输出文件
  module:{ // 处理对应的模块
    rules: [
        {
            test: /\.(css|less)$/,
            use: ['style-loader', 'css-loader' ,'less-loader']
        }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
          // 模板入口 
          template: './src/index.html',
          hash: true // 会在打包好的bundle.js后面加上hash
      })
  ], // 对应的工具插件
  devServer: { // 开发服务器配置

  },
  mode: 'development' // 模式配置
}