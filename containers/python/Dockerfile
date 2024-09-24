FROM python:latest

RUN apt update -y && apt upgrade -y && apt install -y nano

WORKDIR /app

COPY requirements.txt entrypoint.sh main.py \
	 myfirst.js template.html urls.py /app/

RUN pip install --upgrade pip
RUN pip install -r requirements.txt --no-cache-dir

EXPOSE 8000

ENTRYPOINT [ "./entrypoint.sh" ]

CMD [ "python", "manage.py", "runserver", "0.0.0.0:8000"]



