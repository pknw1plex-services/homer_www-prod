FROM caddy:latest
ADD Caddyfile /
ADD /publish /var/www
ENTRYPOINT ["caddy", "run", "--config=/Caddyfile", "--watch" ]
