# Stage 0: Build production build of React app
FROM node:alpine as build

WORKDIR /app

COPY package.json /app/
COPY yarn.lock /app/

ENV NODE_ENV=production
RUN yarn install --frozen-lockfile --prod

COPY . /app/

RUN echo "*" > .eslintignore
RUN rm .eslintrc.js

RUN yarn build

# Stage 1: Reverse Nginx proxy to prevent React-Router from going "boo-hoo"
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

# Doesn't really do anything, but serves as a hint you should forward the port to the host computer
EXPOSE 80

LABEL org.opencontainers.image.source=https://github.com/it2901-sintef01/frontend

ENTRYPOINT ["nginx", "-g", "daemon off;"]
