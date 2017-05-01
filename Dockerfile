FROM kyma/docker-nginx:latest
COPY nginx/default /etc/nginx/sites-enabled/default
COPY dist/ /var/www
RUN chmod +rx -R /var/www
CMD ["nginx"]
