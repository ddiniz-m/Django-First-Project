from django.shortcuts import render, redirect
from django.views import generic
from django.contrib.auth.models import User
from django.http import JsonResponse

# Create your views here.

from .forms import RegistrationForm

def registerView(request):
	if request.method == "POST":
		form = RegistrationForm(request.POST)
		if form.is_valid():
			form.save()
			return JsonResponse({'status': 'success'}, status=200)
		return JsonResponse({'status': 'error', 'errors': form.errors}, status=200)
			
	elif request.method == 'GET':
		form = RegistrationForm()
		form_html = render_crispy_form(form)
		return JsonResponse({'form': form_html}, status=200)
	return JsonResponse({'status': 'error'}, status=400)

# class UsersView(generic.ListView):
# 	template_name = "register/user.html"
# 	context_object_name = "user_list"

# 	def get_queryset(self):
# 		return User.objects.all()