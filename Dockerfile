FROM nginx:1.23.3
#COPY . /usr/share/nginx/html
COPY . /dist/angular-example-app/html


COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8000
ENTRYPOINT ["nginx", "-g", "daemon off;"]
