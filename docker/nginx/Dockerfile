FROM node:20.6.1-alpine3.17 as build
ADD . /server
WORKDIR /server
RUN npm install
RUN npm run build


FROM nginx:1.25.2-alpine3.18
ADD docker/nginx/ssl /etc/nginx/ssl
ADD docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build  /server/build/ /etc/nginx/www/web
ADD docker/nginx/pki-validation/ /etc/nginx/www/.well-known/pki-validation