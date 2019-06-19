# webpack-react
https://www.jianshu.com/p/91a4214b913b

#指定环境
 webpack4之后就不需要新建文件区分环境，因为用--mode 就可以区分环境了
 先安装
  npm install -D yargs-parser 
 这个包可以拿到--mode 里面的参数，这样子就可以区别是本地环境还是线上环境了
	"dev": "cross-env webpack-dev-server --mode development",
	"build": "npm run lint && cross-env npm run clean && webpack --mode production",

#集成eslint
	eslint目标是以可扩展，每条规则独立，不内置编码风格为理念的lint工具，用户可以定制自己的规则做成公共包
	eslint主要有以下特点：

	1）默认规则包含所有的jslint，jshint中存在的规则易迁移

	2）规则可配置性高，可设置警告，错误两个error等级，也可以直接禁用

	3）包含代码风格检测的规则

	4）支持插件扩展，自定义规则
	安装
	npm install -D eslint eslint-config-airbnb eslint-loader  eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react

	"lint": "npm run format && npm run fix &&  eslint --ext .js src",  //  检测你写的代码是否符合eslint的规则
  "fix": "npm run format && eslint --fix --ext .js src",  //  npm run fix 这个是可以修复你没有按照lint规则的写法

#自动化格式以及提交代码时优化配置
	第一步
		安装prettier
		npm install prettier

		在package.json的script里面添加如下配置

		{
			"scripts": {
				"format": "prettier --single-quote --trailing-comma es5 --write \"src/**/*.js\""
			}
		}

	第二步 配置Eslint
		上面我们已经配置好eslint了在package.json的scripts里添加如下
		"fix": "npm run format && eslint --fix --ext .js src"
	
	第三步 添加Git钩子(Pre-commit Hook)
	 Git 钩子(hooks)是在Git 仓库中特定事件(certain points)触发后被调用的脚本。
	 详情可浏览 https://git-scm.com/book/zh/v2/自定义-Git-Git-钩子
   每次提交代码，执行 git commit之后进行自动格式化，免去每次人为手动格式化，使远程仓库代码保持风格统一。
	 
	 安装
	 npm install -D lint-staged husky 
	 package.json script添加
	 "precommit": "npm run lint"