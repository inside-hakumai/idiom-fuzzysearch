FROM node:8.11

LABEL maintainer = "inside-hakumai <inside.rice164@gmail.com>"

ENV APP_ROOT "/app"
ENV NODE_ENV "development"
ENV DEBUG "idiom-fuzzy-search:*"

WORKDIR $APP_ROOT
COPY package.json $APP_ROOT
RUN npm install && npm cache clean --force

# 開発環境ではdocker-composeのVOLUMESの設定でこのディレクトリをマウントして作業
# COPY . $APP_ROOT

EXPOSE 3000
CMD ["npm", "start"]
