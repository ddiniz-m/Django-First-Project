FROM debian:latest

RUN apt update -y && apt upgrade -y && apt install -y \
	postgresql \
	gettext

COPY init.sql /etc/postgres/docker-entrypoint-initdb.d/
COPY init.sql /usr/local/bin/
COPY config.sh /usr/local/bin/

WORKDIR /usr/local/bin

ENTRYPOINT [ "config.sh" ]

CMD [ "psql" ]