# Stage 0: Build production build of React app
FROM node:alpine as build

WORKDIR /app

COPY package.json /app/
COPY yarn.lock /app/

ENV NODE_ENV=production
RUN yarn install --frozen-lockfile

COPY . /app/
# RUN yarn build
EXPOSE 3000

ENTRYPOINT yarn start