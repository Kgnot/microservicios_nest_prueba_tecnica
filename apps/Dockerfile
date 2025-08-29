FROM postgres:latest

COPY ./script/*.sql /docker-entrypoint-initdb.d/

RUN chmod +r /docker-entrypoint-initdb.d/*.sql