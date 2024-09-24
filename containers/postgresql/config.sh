#!/bin/sh

envsubst < init.sql > tmp.sql

psql --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" < tmp.sql

exec $@