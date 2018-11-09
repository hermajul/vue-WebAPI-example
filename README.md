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
![geolocation_](https://user-images.githubusercontent.com/25501536/48257661-65e7c600-e413-11e8-8825-6a113853e66d.jpg)


![geolocation](https://user-images.githubusercontent.com/25501536/48257495-f40f7c80-e412-11e8-9d7e-efcfcf2fb9c1.jpg)
![compass](https://user-images.githubusercontent.com/25501536/48257496-f40f7c80-e412-11e8-9455-84f160cb3c70.jpg)
![vibration](https://user-images.githubusercontent.com/25501536/48257497-f40f7c80-e412-11e8-9261-7ba5e3f3063f.jpg)
![camera](https://user-images.githubusercontent.com/25501536/48257498-f40f7c80-e412-11e8-9866-c9348e81bc27.jpg)
![battery](https://user-images.githubusercontent.com/25501536/48257499-f40f7c80-e412-11e8-8073-b6149d00b9ae.png)


