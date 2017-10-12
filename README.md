# techTestFliplet

## How to run

##### Backend

1. Open terminal on /Backend/RssServer
2. run npm install
3. run npm start

The server will bind to 127.0.0.1:3000 where the main page resides.
The REST endpoint is on /showRss

##### Cordova App

1. Open terminal on /App/FlipletApp
2. On the file /www/js/rssLoader.js on the line 4, the ip address must be changed to the computer ip address
3. run npm install
4. run cordova platform add android
5. run cordova emulate android
