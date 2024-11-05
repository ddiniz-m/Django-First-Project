from django.http import HttpResponse, Http404
from django.shortcuts import render

# Create your views here.

def singlepageView(request):
	return render(request, 'singlepage/index.html')

texts = ["Section 1", "Section 2", "Section 3"]

def sectionView(request, num):
	if 1 <= num <= 3:
		return HttpResponse(texts[num - 1])
	else:
		raise Http404("No such section")