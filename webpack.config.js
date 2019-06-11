const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
let webpack = require('webpack')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
  entry: {
    index: './src/index.js', // 入口文件，
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'), // 打包后的目录必须是绝对路径
  }, // 输出文件
  module:{ // 处理对应的模块
    rules: [
        {
            test: /\.(css|less)$/,
            use: ExtractTextWebpackPlugin.extract({
              // 将css用link的方式引入就不再需要style-loader了
              fallback: 'style-loader',
              use: ['css-loader' , "postcss-loader", 'less-loader'] // 从右向左解析
            })
        },
        {
          test: /\.(jpg|png|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,  // 小于8k的图片自动转成base64格式，并且不会存在实体图片
                outputPath: 'images' // 图片打包存放的目录 
              }
            }
          ]
        },
        {
          test: /\.(eot|ttf|woff|svg)$/,
          use: 'file-loader'
        },
        {
          test: /\.js$/,
          use: 'babel-loader',
          include: /src/, // 只转化src目录下的js
          exclude: /node_modules/ // 排除掉node_modules，优化打包速度
        }
 /* Babel默认只转换新的JavaScript句法（syntax），而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。
举例来说，ES6在Array对象上新增了Array.from方法。Babel就不会转码这个方法。如果想让这个方法运行，必须使用babel-polyfill，为当前环境提供一个垫片

作者：神秘者007
链接：https://www.jianshu.com/p/91a4214b913b
来源：简书
简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。*/

    ]
  },
  plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
          // 模板入口 
          template: './src/index.html',
          hash: true, // 会在打包好的bundle.js后面加上hash
          chunks: ['vendor', 'index' ,'utils'] // 模板对应的碎片位置
      }),
      // 拆分后会把css文件放到dist目录下的css/style.css
      new ExtractTextWebpackPlugin('css/style.css'),
      // 通过postcss中的autoprefixer可以实现将CSS3中的一些需要兼容写法的属性添加响应的前缀，这样省去我们不少的时间由于新版本直接在package.json中添加
      //   "browserslist": [
      //     "defaults",
      //     "not ie < 11",
      //     "last 2 versions",
      //     "> 1%",
      //     "iOS 7",
      //     "last 3 iOS versions"
      //   ],
             // 在转换 ES2015 语法为 ECMAScript 5 的语法时，babel 会需要一些辅助函数，例如 _extend。babel 默认会将这些辅助函数内联到每一个 js 文件里，这样文件多的时候，项目就会很大。
        // 所以 babel 提供了 transform-runtime 来将这些辅助函数“搬”到一个单独的模块 babel-runtime 中，这样做能减小项目文件的大小。
  ], // 对应的工具插件
  devServer: { // 开发服务器配置

  },
  // 在webpack4之前，提取公共代码都是通过一个叫CommonsChunkPlugin的插件来办到的。到了4以后，内置了一个一模一样的功能 optimization
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: { // 抽离第三方组件
          test: /node_modules/,
          // 这个配置能扩展初始化的片段，推荐需要用动态导入且不需要马上需要的模块使用。
          chunks: 'initial',
          name: 'vendor', // 打包后的名字
          // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
          priority: 10
        },
        utils: {
          // 抽离自己写的公共代码，utils里面是一个公共类库
          chunks: 'initial',
          name: 'utils',  //  任意命名
          minSize: 0    // 只要超出0字节就生成一个新包
        }
      }
    }
  },
  resolve: {
    // 别名
    alias: {
      pages:path.join(__dirname,'src/pages'),
      component:path.join(__dirname,'src/component'),
      actions:path.join(__dirname,'src/redux/actions'),
      reducers:path.join(__dirname,'src/redux/reducers'),
      static:path.join(__dirname, 'src/static')
    },
    // 省略后缀
    extensions: ['.js', '.jsx', '.json', '.css', '.scss', '.less']
  },
  mode: 'development', // 模式配置
  devServer: {
    port: 3000,
    open: true, // 自动打开浏览器
    hot: true, // 开启热更新
    overlay: true, // 浏览器上显示错误
  },
  devtool: 'inline-source-map' // 开发环境下定位到报错
}

