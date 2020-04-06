
创建一个项目:
django-admin startproject mysite

进入manage.py所在目录，创建一个应用:
`py manage.py startapp blog`


设置单个应用的url映射，进入blog应用下面，创建urls.py文件，实现url与视图view映射:
```python
from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
]
```

配置urls映射，即单个应用中的urls映射到总的urls下面，即mysite文件夹下面的urls.py

```python
# path('blog/', include('blog.urls')),
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('blog/', include('blog.urls')),
    path('admin/', admin.site.urls),
]
```




**配置数据库**
blog应用下面的settings.py文件，配置基本数据库配置与时区：
```
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        # 'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
        'NAME': 'mysite',
        'USER':'root',
        'PASSWORD':'123',
        'HOST':'127.0.0.1'
    }
}

TIME_ZONE = 'Asia/Shanghai'
```
核心的配置:
https://docs.djangoproject.com/zh-hans/3.0/ref/settings/#std:setting-TIME_ZONE




settings.py文件中默认包含了admin后台管理站点，先进行数据库迁移:
```python
#提前创建与settings.py中对应的数据库名称mysite
python manage.py migrate
```
这个 migrate 命令检查 INSTALLED_APPS 设置，为其中的每个应用创建需要的数据表，至于具体会创建什么，这取决于你的 mysite/settings.py 设置文件和每个应用的数据库迁移文件（我们稍后会介绍这个）。这个命令所执行的每个迁移操作都会在终端中显示出来。如果你感兴趣的话，运行你数据库的命令行工具，并输入 \dt (PostgreSQL)， SHOW TABLES; (MariaDB,MySQL)， .schema (SQLite)或者 SELECT TABLE_NAME FROM USER_TABLES; (Oracle) 来看看 Django 到底创建了哪些表。

之后我们接着创建数据模型:
```python
python manage.py makemigrations blog
```

通过运行 makemigrations 命令，Django 会检测你对模型文件的修改（在这种情况下，你已经取得了新的），并且把修改的部分储存为一次 迁移。
迁移是 Django 对于模型定义（也就是你的数据库结构）的变化的储存形式 - 它们其实也只是一些你磁盘上的文件。如果你想的话，你可以阅读一下你模型的迁移数据，它被储存在 polls/migrations/0001_initial.py 里。别担心，你不需要每次都阅读迁移文件，但是它们被设计成人类可读的形式，这是为了便于你手动调整Django的修改方式。

Django 有一个自动执行数据库迁移并同步管理你的数据库结构的命令 - 这个命令是 migrate，我们马上就会接触它 - 但是首先，让我们看看迁移命令会执行哪些 SQL 语句。sqlmigrate 命令接收一个迁移的名称，然后返回对应的 SQL

```python
python  manage.py sqlmigrate blog 0001
```

现在，再次运行 migrate 命令，在数据库里创建新定义的模型的数据表：
```python
python manage.py migrate
```
问题：varchar255能放多少字?
https://blog.csdn.net/w790634493/article/details/80650611
字段设置文档在这里:
https://docs.djangoproject.com/zh-hans/3.0/ref/models/fields/#django.db.models.CharField

将该应用加入到settings.py中:
```python
    #'blog.apps.BlogConfig',
    INSTALLED_APPS = [
    'blog.apps.BlogConfig',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]
```


启动应用进入管理员设置:127.0.0.1:8000/admin
先创建一个超级管理员，输入用户名，密码，邮箱
```python
python manage.py createsuperuser
```
启动应用：
```python
python manage.py runserver
```

个人账户:
hectorwill
1830500370@qq.com
19991208888jyx
模型创建好了之后，开始建立视图:


注意model中首字母要大小，否则migrate识别不了


django中函数视图与类视图
https://blog.csdn.net/Growing_hacker/article/details/99729681


django外键相关
https://blog.csdn.net/buxianghejiu/article/details/79086011?depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1&utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1


django添加外键出现的问题：
https://www.jianshu.com/p/c829e140c295
因为外键不能为空，所以需要添加一个默认值。


django外键查询：
https://blog.csdn.net/hpu_yly_bj/article/details/78939748



通过比对django返回数据类型对应选用不同的方法:
QuerySet数据——比如说filter、exclude、all、values等

序列化类（rest_framework）- 推荐
serializers方法
list和values结合的方法 - 只适用于values
 

Model类数据——比如说get、first等
model_to_dict方法
__dict__方法
自定义to_dict方法 - 推荐



有三种方式来处理数据

一种是序列化类的方式，这个是基于rest_framework，所以需要安装rest_framework

优点：输出格式很规范，可以处理时间字段的格式，可以控制输出的字段
缺点：需要安装rest_framework，相对较为繁琐
 

另一种是使用serializers方法：

优点：容易实现，无需安装依赖
缺点：输出格式不规范，不能直接处理时间字段的格式，不能处理values方法
 

由于serializers方法返回的格式不是很规范，而且时间字段并没有做处理，使用序列化类的化，可以很好的处理时间字段，可以以我们想要的时间格式来输出，所以更推荐使用序列化类的方式


如果是values方法的话，也有一种很简单的方法，使用list直接转即可

优点：容易实现，输出格式很规范，可以控制输出的字段
缺点：不能直接处理时间字段的格式

https://blog.csdn.net/jiandanokok/article/details/103226969#%E4%B8%80%E3%80%81QuerySet%E6%95%B0%E6%8D%AE



在django中执行自定义语句的时候，返回的结果是一个tuple ,并我不是我所期望的dict.
当结果是tuple 时，如果要取得数据，必须知道对应数据在结果集中的序号,用序号的方式去得到值。



元组，列表，字典之间应用场景以及相互转换
>>> mytuple = (1,2,3)
>>> print list(mytuple)           # Tuple to list
[1, 2, 3]
>>>
>>> mylist = [1,2,3]              # List to tuple
>>> print tuple(mylist)
(1, 2, 3)
>>>
>>> mylist2 = [ ('blue',5), ('red',3), ('yellow',7) ]
>>> print dict(mylist2)           # List to dictionnary
{'blue': 5, 'yellow': 7, 'red': 3}
>>>
>>> mystring = 'hello'
>>> print list(mystring)          # String to list
['h', 'e', 'l', 'l', 'o']
>>>
>>> mylist3 = ['w','or','ld']
>>> print ''.join(mylist3)        # List to string
world
>>>

注意很重要的问题，当元组中()中元素一定要为2个，因为转换要之后处于一一对应。
不然就是一个嵌套元组。

zip() 函数用于将可迭代的对象作为参数，将对象中对应的元素打包成一个个元组，然后返回由这些元组组成的列表。
zip()是可迭代对象，使用时必须将其包含在一个list中，方便一次性显示出所有结果

高级用法:https://www.runoob.com/python/python-func-zip.html
l = ['a', 'b', 'c', 'd', 'e','f']
print zip(l[:-1],l[1:])
[('a', 'b'), ('b', 'c'), ('c', 'd'), ('d', 'e'), ('e', 'f')]


django ORM model filter 条件过滤，及多表连接查询、反向查询，某字段的distinct

基于flask和mysql的restful 的API，字段和字段值转换为json，等共同问题。