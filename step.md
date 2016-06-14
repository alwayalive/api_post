#React+MongoDB+Express架构部署项目

##全局依赖

* **mongodb**
* **express-generator**
> npm install -g express-generator	//express架构生成器
> express api_post	//创建express项目机构

* **supervisor**
> npm install -g supervisor	//nodejs文件监听

* **webpack**
> npm install -g webpack


##项目依赖
* **express生成默认module**
* **react**
* **react-dom**
* **jsx-loader**
* **mongodb**	//mongodb驱动
* **mongoose**	//mongodb插件

##项目结构

-database	//
-model
-public	//公共资源
	-assets	//reactjs文件
	-images	//静态图片
	-javascript	//页面script
	-stylesheets //样式
-routes	//路由文件
-views	//静态页面和模板
-node_modules	//依赖模块