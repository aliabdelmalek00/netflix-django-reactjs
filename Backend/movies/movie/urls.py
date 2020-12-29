from django.urls import path
from . import views
urlpatterns = [
    path('', views.MovieListApi.as_view())
]
