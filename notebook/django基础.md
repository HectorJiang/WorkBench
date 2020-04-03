
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


