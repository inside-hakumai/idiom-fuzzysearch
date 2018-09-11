FROM node:8.11

LABEL maintainer = "inside-hakumai <inside.rice164@gmail.com>"

ENV APP_ROOT "/app/idiom-fuzzy-search"
ENV NODE_ENV "development"
ENV DEBUG "idiom-fuzzy-search:*"

WORKDIR $APP_ROOT
COPY package.json $APP_ROOT
RUN npm install && npm cache clean --force

COPY . $APP_ROOT
EXPOSE 3000
CMD ["npm", "start"]
