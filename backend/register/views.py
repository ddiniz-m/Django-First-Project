from django.http import JsonResponse
from .forms import RegistrationForm
from django.templatetags.static import static

def registerView(request):
	if request.method == "POST":
		form = RegistrationForm(request.POST)
		if form.is_valid():
			form.save()
			return JsonResponse({'status': 'success'}, status=200)
		return JsonResponse({'status': 'error', 'errors': form.errors}, status=200)
			
	if request.method == 'GET':
		html = static('html/register.html')
		return JsonResponse({'html': html}, status=200)
	return JsonResponse({'status': 'error'}, status=400)

# class UsersView(generic.ListView):
# 	template_name = "register/user.html"
# 	context_object_name = "user_list"

# 	def get_queryset(self):
# 		return User.objects.all()