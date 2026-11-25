# Development image for the Laravel API (production image comes in Phase 10)
FROM php:8.5-fpm

# PHP extensions required by ReserveHub
COPY --from=mlocati/php-extension-installer:2 /usr/bin/install-php-extensions /usr/local/bin/
RUN install-php-extensions pdo_pgsql intl zip bcmath pcntl redis

# Composer binary from the official image
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Match www-data with the host user to avoid permission issues on bind mounts
ARG UID=1000
ARG GID=1000
RUN groupmod -o -g ${GID} www-data \
    && usermod -o -u ${UID} -g ${GID} www-data \
    && chown www-data:www-data /var/www

WORKDIR /var/www/html