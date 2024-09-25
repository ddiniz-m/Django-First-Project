#!/bin/sh

echo "TEST"

python manage.py startapp polls

exec $@