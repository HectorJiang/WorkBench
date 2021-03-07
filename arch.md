workbench-share:
    首页
        联系方式
        个人简介
        个人简历
    博客
        博客（分页，标签，分类，归档日期，可搜索，评论）
    个人空间
    应用程序
        自己开发的应用程序
        集成的网站与工具合集
        个人电子书
    文件共享
        按照分类，将文件进行共享（软件，pdf，权限管理)
    留言
    友链


features:
    默认为英文，可切换多国语言



管理系统：
    1.system info（index）
    2.workbench-share
    3.real-time information of system,including data spider and making data into interface
    4.system or servers timing tasks(eg:periodic backup for the whole system,including database(mysql and others) ,servers logs ,etc ,and periodic analysis of system,which means construct data flow.
    5.Expression system,including Chinese and English expression
    habit of daily life,including the feedback from yourself(by app,web or other methods)
    6.sandbox environment for delopying of every new project and other tests,which guaranteed the servers security.
    7.ssh terminal for remote servers,just for urgent time(eg:having no ssh terminal or cant't delopy project so that need manual deloping)
    8.system periodic security check including the analysis of system logs,etc.



workbench-private:
    各类信息统计分析
    实时数据
    若干接口，对公众号/小程序/APP

安全策略：
1.更改端口（数据库，远程登陆）
2.封禁IP（按照地区等）
3.使用CDN





workbench:

```
1.share
2.task
3.data(includin api,data...)
server
4.application
5.cube
6.report
```




后台：




workbench特点：
自动化，高可用

问题：
1.多个网站使用一个后台







优化:SEO优化

## 功能设计

workbench-share:
    首页
        联系方式
        个人简介
        个人简历
    博客
        博客（分页，标签，分类，归档日期，可搜索(搜索包括博客,文件,程序等)，评论）博客,最新修改

​		(博客内容:微信小程序,个人博客,产品宣传网页,团队网页以及手机APP设计套路)

​		博客侧边栏oj以及其他快捷方式

​	相册(暂时不加,后期可结合其他部分进行开发合成单独网站,如日记,又或者和ai结合)  

​    应用程序

​        自己开发的应用程序（个人OJ）

​		开发js插件自定义平面图,楼层架构,组件,可以提供对外提供接口,如显示温湿度等,升级为通过识别所画的自动生成

​		自定义网络拓扑

​		在线jupyter notebook(目前的想法是设置密码/搭建一个网页里面集成了多个notebook,如google lab,还有其他平台的,通过这个集成的平台输入密码进行跳转)

​		多台服务器形成的集群

​		网络爬虫流水线(类似于ETL)

​        集成的网站与工具合集(可放在单独的网页中,设置所谓的导航主页,可以自定义添加,设计成浏览器插件,可高度自定义化)
​        个人电子书以及cheatsheet(可以形成单独网站)

​		绝大多数情况下使用公共组件,偶尔开发组件

​		nginx相关如,负载均衡演示

​    文件共享
​        按照分类，将文件进行共享（软件，pdf，权限管理)
​    留言
​    友链

features:
    默认为英文，可切换多国语言



远程服务器中的jupyter notebook搭建,同时有权限控制:https://jupyter-notebook.readthedocs.io/en/latest/public_server.html

## 数据库设计







