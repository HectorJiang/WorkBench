查看vue脚手架版本:
vue -V
升级:
npm install -g @vue/cli
创建项目:
vue create demo

路由有两种模式:history模式与hash模式，hash模式浏览器访问有#,history需要后端支持


项目启动:
npm run serve

如果要配置对应端口号，访问ip地址，浏览器自动打开可以手动添加配置文件:
vue.config.js


安装element-ui
npm install --save element-ui

安装echarts:
```
npm install --save echarts
```

全局加载echarts，并使用prototype添加全局的属性，所有页面都可以使用，如果不是全局的，哪个页面直接使用就好，按需加载。
```python
import echarts from 'echarts'
Vue.prototype.$echarts=echarts;
```

安装axios:
npm install --save axios

axios加载本地json数据：
https://www.cnblogs.com/cxxb/p/10791088.html


vuecli加载本地json数据：
文件需要放在public目录下面：
http://www.imooc.com/article/details/id/291839


重构项目：
npm install font-awesome --save
npm install bootstrap --save
npm i --save Prismjs 

https://www.findbestopensource.com/product/creotip-vue-prism

vue-cli4 使用Prismjs:
https://www.cnblog.co/web/2020-01-21/354.html
https://www.cnblogs.com/pellime/p/9949843.html


vue取字典/列表：
      <li v-for="c in blog.category">
        {{c}}
      </li>
vue取字典键值对:
{
    "code": "200",
    "result": {
        "测试分类1": "11",
        "测试分类2": "12",
        "测试分类3": "13",
        "测试分类4": "14",
        "测试分类5": "15"
    }
}

axios传递参数:
https://blog.csdn.net/xuyanquan/article/details/80519582


页面一打开就发送axios请求:
```
        created() {
            axios.get('https://vuedemo-8c47c.firebaseio.com/post/' + this.id + ".json")
                .then((data) => {
                    console.log(data)
                    this.blog = data.data;
                })
        },
```
或者:
```javascript
        methods: {
            //请求数据
            getData() {
                axios.get("/simple.json", {
                    params: { id: this.id }
                }).then(res => {
                    console.log(res)
                    if (res.data.code == "200") {
                        this.article = res.data.result;
                    }
                }, error => {

                })
            }
        },
        //生命周期函数：挂载完成
        mounted() {
            this.getData();
        }
```


不能将v-for用在组件的根元素上

vue使用router-link :to="{path:'/index'}"传参以及参数的使用
https://blog.csdn.net/weixin_42216142/article/details/84144898

https://segmentfault.com/a/1190000011707883



路由传参：
<router-link :to="{path:'/article/',query:{id:article.id}}">
http://127.0.0.1:8080/#/article/?id=111



使用v-for读取键值：
https://www.cnblogs.com/liwids-blog/p/11639411.html


vue打包之后打不开：
https://blog.csdn.net/zh127368zh/article/details/8102




几种打包方式的区别：
webpack
vue cli

安装sass预加载器：npm install -D sass-loader node-sass
https://blog.csdn.net/weixin_41411644/article/details/100742386?depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-2&utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-2



什么是跨域问题
什么是跨域？
浏览器从一个域名的网页去请求另一个域名的资源时，域名、端口、协议任一不同，都是跨域
域名：
　主域名不同 http://www.baidu.com/index.html -->http://www.sina.com/test.js
　子域名不同 http://www.666.baidu.com/index.html -->http://www.555.baidu.com/test.js
　域名和域名ip http://www.baidu.com/index.html -->http://180.149.132.47/test.js
端口：
　http://www.baidu.com:8080/index.html–> http://www.baidu.com:8081/test.js
协议：
　http://www.baidu.com:8080/index.html–> https://www.baidu.com:8080/test.js
备注：
　1、端口和协议的不同，只能通过后台来解决
　2、localhost和127.0.0.1虽然都指向本机，但也属于跨域
https://blog.csdn.net/tjcjava/article/details/76468225


VUE-CLI 4的跨域解决方案
https://www.cnblogs.com/cherryjean/p/12175424.html
https://segmentfault.com/q/1010000022185695/

vue全局使用axios与局部使用
https://www.cnblogs.com/zhouwenfan-home/p/11976426.html


django跨域问题报错：
(django1.10)访问url报错Forbidden (CSRF cookie not set.): xxx
https://www.cnblogs.com/meitian/p/7016336.html

axios跨域开启：
https://blog.csdn.net/sps900608/article/details/79599121

django里面跨域CORS的设置
https://www.cnblogs.com/wxiaoyu/p/9578848.html
https://blog.csdn.net/Python_and_me/article/details/81185686

django数据库字段
https://www.cnblogs.com/wuxunyan/p/9266888.html

模型修改之后再进行数据库迁移



Django查询数据库返回字典dict数据
在Django项目中, 开发团队为了让使用该框架的用户都使用自带的序列化功能,从而让框架中的SQL返回值很不直观,对于直接使用SQL语句的用户很犯难.
https://www.cnblogs.com/lab-zj/p/11859104.html

序列化：
Django 2.1.7 查询数据返回json格式
https://www.jianshu.com/p/945b9a1e98f2

Django url中可以使用类视图.as_view()进行映射的原因
https://www.cnblogs.com/jj1106/p/10995309.html



Django数据库增删改查
https://www.cnblogs.com/zuichuyouren/p/11094673.html

https://blog.csdn.net/chen1042246612/article/details/84071006


'dict' object has no attribute '_meta'
http://www.voidcn.com/article/p-twoewrll-bpk.html



django 查询数据库得到的结果序列化成json字符串:
https://blog.csdn.net/qq_33867131/article/details/80910178  

序列化与不序列化的区别：


django获取请求参数：
1.?传参
2.post传参
3.路由传参


django数据库常用字段


vue-获取dom节点:
获取dom节点可以用ref属性，这个属性就是来获取dom对象的。看代码  这个属性就相当于给这个标签起了一个id样的东西
<input type="text" ref="userinfo" />


//获取ref定义的dom节点
console.log(this.$refs.userinfo);
alert(this.$refs.userinfo.value);



vue生命周期函数：
created:html加载完成之前，执行。执行顺序:父组件-子组件
mounted:html加载完成后执行。执行顺序:子组件-父组件
methods:事件方法执行。
watch:去监听一个值的变化，然后执行相对应的函数。
computed:computed是计算属性，也就是依赖其它的属性计算所得出最后的值


vue中mounted函数出现中变量出现undefined?
之前在公司做项目，一直感觉用ref来定位dom节点挺方便的。但是期间遇到了一个问题，就是在mounted(){}钩子里面使用this.$refs.xxx，打印出来的却是undefined？
DOM结构已经渲染出来了，但是如果在DOM结构中的某个DOM节点使用了v-if、v-show或者v-for（即根据获得的后台数据来动态操作DOM，即响应式），那么这些DOM是不会再mounted阶段找到的。
所以如果在mounted钩子中使用$refs，如果ref是定位在有v-if、v-for、v-show中的DOM节点，这些判断下的DOM还没渲染，返回来的只能是undefined，因为在mounted阶段他们根本不存在！！！
如果说mounted阶段是加载阶段，那么updated阶段则是完成了数据更新到DOM的阶段(对加载回来的数据进行处理)，此时，ref、数据等等全部都挂载到DOM结构上去，在update阶段使用this.$refs.xxx，就100%能找到该DOM节点。
updated与mounted不同的是，在每一次的DOM结构更新，vue都会调用一次updated(){}钩子函数！而mounted仅仅渲染完成时只执行一次而已。
简单来说，只要在调试的时候，能看到元素的存在，在updated阶段都可以使用this.$refs.xxx找到对应的DOM节点！
重点：https://www.jianshu.com/p/7dbdcd6dfad6

基于Vue cli打包出现的问题：
https://www.jianshu.com/p/eb9f5f9ea089







修改vue标题

https://www.cnblogs.com/CinderellaStory/p/10858035.html

https://www.jianshu.com/p/406fa692edc8


vue刷新页面：
https://blog.csdn.net/baidu_39418435/article/details/81538760


axios请求参数：
https://blog.csdn.net/z9061/article/details/82283927
如果服务端将参数当做 java对象来封装接收则 参数格式为：{data: param}
var param={name:'jack',age:20}

axios

          .delete("/ehrReferralObjPro", {data: param})

          .then(function(response) {

            }
如果服务端将参数当做url 参数 接收，则格式为：{params: param}，这样发送的url将变为http:www.XXX.com?a=..&b=..
var param={name:'jack',age:20}

axios

          .delete("/ehrReferralObjPro", {params: param})

          .then(function(response) {

            }


axios中delete方法传递参数的区别：
https://blog.csdn.net/w_e_i_1201/article/details/86006816


vue实现局部刷新
https://blog.csdn.net/ftl_nxy/article/details/81225920



v-for中的问题：需要绑定key，并且使用:id=""这种形式
https://blog.csdn.net/weixin_43837268/article/details/86677868
<el-badge
      :value="item.badge"
      v-for="(item, index) in tabs"
      class="yh-tab-button"
      :class="{'yh-badge-check':item.check,
      'yh-badge-char':item.charBadge,
      }"
      :key="index"
    >
<el-badge>