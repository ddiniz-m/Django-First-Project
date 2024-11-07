from django.contrib.auth import login
from django.http import JsonResponse
from django.contrib.auth.forms import AuthenticationForm
from django.templatetags.static import static

def loginView(request):
	if request.method == "POST":
		data = request.POST
		form = AuthenticationForm(request, data=data)
		if form.is_valid:
			user = form.get_user()
			login(request, user)
			return JsonResponse({'status': 'success'}, status=200)
		return JsonResponse({'status': 'error'}, status=200)

	if request.method == 'GET':
		html = static('html/login.html')
		return JsonResponse({'html': html}, status=200)