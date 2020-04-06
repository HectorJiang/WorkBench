from django.shortcuts import render
from django.core import serializers
from django.views.generic.base import View
from django.http import HttpResponse,JsonResponse
from django.forms.models import model_to_dict
import json
import random
from .models import Blog,Category

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

class ArticleView(View):
    # 查询所有文章
    def get(self, request, *args, **kwargs):
        articles = Blog.objects.all() # 查询服务器信息
        # 返回的结果
        res={}
        # 数据库查询数据
        json_list=[]
        for i in articles:
            json_dict = model_to_dict(i)
            json_list.append(json_dict)
        res["code"]="200"
        res["result"]=json_list
        
        # articles_json = serializers.serialize('json', articles) # 将查询结果进行json序列化
        # return HttpResponse(articles_json, content_type="application/json") # 返回json数据
        return JsonResponse(res)
        # return HttpResponse(json.dumps(dic, ensure_ascii=False))

    # 添加单个文章
    def post(self, request, *args, **kwargs):
        req=json.loads(request.body.decode('utf-8'))
        dic={"title":req["title"],"content":req["content"],"category_id":"12312","blog_id":getrandom()}
        Blog.objects.create(**dic)
        return JsonResponse({"code":"200","message":"success"})
    
    
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
        data=Blog.objects.filter(blog_id=int(id))
        res={}
        res["code"]="200"
        res["result"]=model_to_dict(data)
        return JsonResponse(res)



# 删除文章

# 编辑文章


# 分类
class CategoryView(View):
    # 查询所有分类
    def get(self, request, *args, **kwargs):
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
    def post(self, request, *args, **kwargs):
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
    
            

# 查询存档


# 查询个人信息