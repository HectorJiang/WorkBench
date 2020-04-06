from django.db import models

# Create your models here.
from django.db import models


class Blog(models.Model):
    id = models.AutoField(primary_key=True)
    blog_id=models.IntegerField()
    title = models.TextField()  
    content = models.TextField()
    category= models.ForeignKey('Category',to_field='id',on_delete=models.CASCADE)
    created_time=models.DateField(auto_now_add=True)
    updated_time=models.DateField(auto_now_add=True)
    deleted_time=models.DateField(auto_now_add=True)
    
    
class Category(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.TextField()
    created_time=models.DateField(auto_now_add=True)
    updated_time=models.DateField(auto_now_add=True)
    deleted_time=models.DateField(auto_now_add=True)    
