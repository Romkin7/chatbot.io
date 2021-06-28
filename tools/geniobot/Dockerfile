FROM node:alpine as build-phase
WORKDIR /geniobot
COPY ./build ./

# Installs Nginx from image
FROM nginx

# Exposes Nginx port 80 from inside of the container
EXPOSE 80

COPY --from=build-phase /geniobot /usr/share/nginx/html
