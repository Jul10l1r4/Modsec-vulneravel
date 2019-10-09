FROM nginx:1.15.5
MAINTAINER Julio Lira

ADD build.sh /build.sh
RUN chmod +x /build.sh
RUN /bin/bash -c ". /build.sh"
ADD nginx.conf /etc/nginx/nginx.conf
ADD modsecurity.conf /etc/nginx/conf/modsecurity.conf

CMD nginx -g 'daemon off;'
