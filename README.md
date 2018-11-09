# vue-WebAPI-example
This project shows some features of WebAPI in your browser.

## Install 

install node dependencies

`npm i`

generate a ssl certificate

`cd sslcerts`

`openssl genrsa -out sslcerts/server.key`

`openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout sslcerts/server.key -out sslcerts/server.crt`

start server

`nodemon` or `npm start`

## Use

Use your Smartphone and open 

`https://<server-ip>:8443`

in your browser

### Screenshots
