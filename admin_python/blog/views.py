from django.shortcuts import render
from django.core import serializers
from django.views.generic.base import View
from django.http import HttpResponse,JsonResponse
from django.forms.models import model_to_dict
import json
import random
from .models import Blog,Category
from django.db import connection


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

class ArticleView(View):
    # 查询所有文章
    def get(self, request):
        res={}
        res["code"]="200"
        with connection.cursor() as cursor:
            cursor.execute('select a.id,blog_id, title,name,content,a.created_time from blog_blog a inner join blog_category b on a.category_id=b.id order by a.id desc')
            data = cursor.fetchall()
            fields=["id","blog_id","title","category","content","created_time"]
            L=[list(e) for e in data]
            res["result"]=[dict(zip(fields,i)) for i in L]
        return JsonResponse(res,safe=False)
        # articles = Blog.objects.order_by("-id") # 查询服务器信息
        # # 返回的结果
        # res={}
        # # 数据库查询数据
        # json_list=[]
        # for i in articles:
        #     json_dict = model_to_dict(i)
        #     json_list.append(json_dict)
        # res["code"]="200"
        # res["result"]=json_list
        
        # articles_json = serializers.serialize('json', articles) # 将查询结果进行json序列化
        # return HttpResponse(articles_json, content_type="application/json") # 返回json数据
        # return JsonResponse(res)
        # return HttpResponse(json.dumps(dic, ensure_ascii=False))

    # 添加单个文章
    def post(self, request, *args, **kwargs):
        req=json.loads(request.body.decode('utf-8'))
        dic={"title":req["title"],"content":req["content"],"category_id":req["category"],"blog_id":getrandom()}
        Blog.objects.create(**dic)
        return JsonResponse({"code":"200","message":"Add blog success"})
    
    
    # 删除单个文章
    def delete(self,request):
        try:
            req=json.loads(request.body.decode('utf-8'))
            Blog.objects.filter(blog_id=req["blog_id"]).delete()
            return JsonResponse({"code":"200","message":"Delete success"})
        except Exception as e:
            return JsonResponse({"code":"500","message":str(e)})
        
    # 修改单个文章
    def put(self,request):
        try:
            req=json.loads(request.body.decode('utf-8'))
            Blog.objects.filter(blog_id=req["blog_id"]).update(title=req["title"],content=req["content"],category_id=req["category_id"])
            return JsonResponse({"code":"200","message":"Edit success"})
        except Exception as e:
            return JsonResponse({"code":"500","message":str(e)})                       
        
    
    
# 获取随机数
def getrandom():
    str = ""
    for i in range(6):
        ch = chr(random.randrange(ord('0'), ord('9') + 1))
        str += ch
    return int(str)




# 查询单个文章
class Articles_simple(View):
    def get(self, request,id):
        res={}
        res["code"]="200"
        with connection.cursor() as cursor:
            cursor.execute('select id,blog_id,title,content,created_time from blog_blog where blog_id={}'.format(id))
            data = cursor.fetchone()
            fields=["id","blog_id","title","content","created_time"]
            res["result"]=dict(zip(fields,list(data)))
        return JsonResponse(res,safe=False)    



# 删除文章

# 编辑文章


# 分类
class CategoryView(View):
    # 查询所有分类
    def get(self, request):
        try:
            categories = Category.objects.all() # 查询服务器信息
        except Exception as e:
            return JsonResponse({"code":"500","message":str(e)})
        # 返回的结果
        res={}
        # 数据库查询数据
        json_list=[]
        for i in categories:
            json_dict = model_to_dict(i)
            json_list.append(json_dict)
        res["code"]="200"
        res["result"]=json_list

        return JsonResponse(res)


    
    # 添加单个分类
    def post(self, request):
        try:
            req=json.loads(request.body.decode('utf-8'))
            print(req)
            name=Category.objects.filter(name=req["name"])
            if name.exists():
                return JsonResponse({"code":"404","message":"error:category exists"})
            else:
                dic={"name":req["name"]}
                Category.objects.create(**dic)
                return JsonResponse({"code":"200","message":"success"})
        except Exception as e:
            return JsonResponse({"code":"500","message":str(e)})

    # 更新分类
    def put(self, request):
        try:
            req=json.loads(request.body.decode('utf-8'))
            print(req)
            newname=Category.objects.filter(name=req["newname"])
            if newname.exists():
                return JsonResponse({"code":"404","message":"error:category exists"})
            else:
                Category.objects.filter(name=req["oldname"]).update(name=req["newname"])
                return JsonResponse({"code":"200","message":"success"})
        except Exception as e:
            return JsonResponse({"code":"500","message":str(e)})            
    
    # 删除分类
    def delete(self,request):
        try:
            req=json.loads(request.body.decode('utf-8'))
            print(req)
            Category.objects.filter(name=req["name"]).delete()
            return JsonResponse({"code":"200","message":"delete success"})
        except Exception as e:
            return JsonResponse({"code":"500","message":str(e)})              
    

 
class CategoryDetailView(View):
    # 获取所有详细分类
    def get(self, request):
        res={}
        res["code"]="200"
        with connection.cursor() as cursor:
            cursor.execute('select a.category_id,name,count(1) from blog_blog a inner join blog_category b on a.category_id=b.id group by name')
            data = cursor.fetchall()
            fields=["id","name","count"]
            L=[list(e) for e in data]
            res["result"]=[dict(zip(fields,i)) for i in L]
        return JsonResponse(res,safe=False)     

    # def post(self, request):
    #     return HttpResponse('POST request!')


# 查询存档
class ArchiveView(View):
    # 获取所有归档
    def get(self, request):
        res={}
        res["code"]="200"
        with connection.cursor() as cursor:
            cursor.execute('select DATE_FORMAT(created_time,"%Y/%m"),count(1) from blog_blog group by DATE_FORMAT(created_time,"%Y/%m")')
            data = cursor.fetchall()
            res["result"]=dict(data)
        return JsonResponse(res,safe=False)      
       

#  获取所有归档对应博客
def archive_detail(request,year,month):
    res={}
    res["code"]="200"
    print(year+"/"+month)
    with connection.cursor() as cursor:
        cursor.execute('select id,blog_id,title,content,created_time from blog_blog where date_format(created_time,"%Y/%m")="{}"'.format(year+"/"+month))
        data = cursor.fetchall()
        fields=["id","blog_id","title","content","created_time"]
        L=[list(e) for e in data]
        res["result"]=[dict(zip(fields,i)) for i in L]
        return JsonResponse(res,safe=False)   


def simple_category(request,id):
    # 查询单个分类对应的文章
    res={}
    res["code"]="200"
    with connection.cursor() as cursor:
        cursor.execute('select a.id,blog_id,title,content,a.created_time,name from blog_blog a inner join blog_category b on a.category_id=b.id where category_id={}'.format(id))
        data = cursor.fetchall()
        fields=["id","blog_id","title","content","created_time","name"]
        L=[list(e) for e in data]
        res["result"]=[dict(zip(fields,i)) for i in L]
        return JsonResponse(res,safe=False)      
    
