from django.shortcuts import render
from django.contrib.auth import login
from django.contrib.auth.forms import AuthenticationForm

def loginView(request):
	if request.method == "POST":
		data = request.POST
		form = AuthenticationForm(request, data=data)
		if form.is_valid:
			user = form.get_user()
			login(request, user)