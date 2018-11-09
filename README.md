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

![camera_](https://user-images.githubusercontent.com/25501536/48257951-4d2be000-e414-11e8-9ead-7268167eb76d.jpg)
![vibration_](https://user-images.githubusercontent.com/25501536/48257953-4dc47680-e414-11e8-8aa2-70e63bc3667d.jpg)
![compass_](https://user-images.githubusercontent.com/25501536/48257954-4dc47680-e414-11e8-9dd0-c0328be6709e.jpg)
![geolocation_](https://user-images.githubusercontent.com/25501536/48257955-4dc47680-e414-11e8-9593-1c9d56102c04.jpg)
![battery](https://user-images.githubusercontent.com/25501536/48257957-4dc47680-e414-11e8-81a3-0ee31738412d.png)
