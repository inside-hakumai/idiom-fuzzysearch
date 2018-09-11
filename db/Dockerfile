FROM postgres:10

LABEL maintainer = "inside-hakumai <inside.rice164@gmail.com>"

WORKDIR app

RUN localedef -i ja_JP -c -f UTF-8 -A /usr/share/locale/locale.alias ja_JP.UTF-8
RUN apt-get update && \
    apt-get install jq -y && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

ENV LANG ja_JP.UTF-8
COPY docker-entrypoint-initdb.d/* /docker-entrypoint-initdb.d/
COPY idioms.json ./
