# Usa la imagen oficial de Nginx
FROM nginx:alpine

# Elimina la página por defecto de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia todo tu proyecto al directorio de Nginx
COPY . /usr/share/nginx/html

# Expone el puerto por defecto de Nginx
EXPOSE 80
