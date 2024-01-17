FROM nginx:1.21.5-alpine
COPY ./build/ /usr/share/nginx/html
COPY ./ci/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
