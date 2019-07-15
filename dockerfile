FROM node:10.12-alpine

ARG APP_PORT=80

ADD . /app
WORKDIR /app

RUN yarn

RUN yarn build

EXPOSE ${APP_PORT}

CMD ["yarn", "start:prod"]