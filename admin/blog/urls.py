from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('articles', views.ArticleView.as_view(), name='articles'),
    path('articles/<int:id>', views.Articles_simple.as_view(), name='articles_simple'),
    path('catetory', views.CategoryView.as_view(), name='category'),
    path('archive', views.ArchiveView.as_view(), name='archive'),
    path('category_detail', views.CategoryDetailView.as_view(), name='category_detail'),
    path('archive_detail/<str:year>/<str:month>', views.archive_detail, name='archive_detail'),
    path('simple_category/<str:name>', views.simple_category, name='simple_category'),
    
]

