#!/bin/sh

set -e

if [ ! -f "./my_project/manage.py" ]; then
	echo "Django project is being created!"

	django-admin startproject my_project .

	echo "Django project created!"
fi

mkdir -p home/templates/
mkdir -p home/static/

mv myfirst.js home/static/
mv template.html home/templates/
mv urls.py my_project/

python manage.py migrate

exec $@