from django.shortcuts import render, redirect

# Create your views here.

from .forms import RegistrationForm

def register(request):
	if request.method == "POST":
		form = RegistrationForm(request.POST)
		if form.is_valid():
			form.save()
		return redirect('polls:index')
	else:
		form = RegistrationForm()
		
	return render(request, 'register/register.html', {"form":form})