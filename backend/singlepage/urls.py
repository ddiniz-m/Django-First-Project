

from django.urls import path

from . import views

app_name = "singlepage"
urlpatterns = [
	path("", views.singlepageView, name="index"),
	path("sections/<int:num>", views.sectionView, name="sections"),
]