FROM nginx:1.23.3
#COPY . /usr/share/nginx/html
COPY . /angular-example-app/dist/angular-example-app/index/html


COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
