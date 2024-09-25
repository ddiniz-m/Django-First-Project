FROM python:latest

WORKDIR /backend

COPY ./requirements.txt entrypoint.sh ./

RUN pip install -r requirements.txt

COPY . .

EXPOSE 8000

# ENTRYPOINT [ "./entrypoint.sh" ]

CMD [ "python", "manage.py", "runserver", "0.0.0.0:8000"]



