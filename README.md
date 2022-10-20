# ionic-firebase-test
test de firebase en ionic

## Pasos a seguir

1- Tiene que estar instalado cordova global y cordova-res (y desinstalado capacitor)
	```sudo npm i -g cordova && sudo npm i -g cordova-res```

2- Añadirmos plataforma Android
	
    ```ionic cordova platform add android```
	
3- Instalamos firebase para cordova (no el oficial porque está desactualizado) https://github.com/havesource/cordova-plugin-push
	
    ```cordova plugin add @havesource/cordova-plugin-push```
	o
	```cordova plugin add github:havesource/cordova-plugin-push```

4- Instalar @awesome-cordova-plugins/push
    
    ```npm i @awesome-cordova-plugins/push```

5- Imports in app.module.ts and app.component.module.ts

6- Establecemos el id y el nombre de la app y añadimos el plugin en config.xml 

7- Creamos el proyecto en Firebase https://console.firebase.google.com/u/1/?pli=1

8- Ponemos fichero google-services.json a /platforms/android/app
    https://www.positronx.io/ionic-firebase-fcm-push-notification-tutorial-with-example/




## Guía del plugin
https://github.com/havesource/cordova-plugin-push/blob/master/docs/INSTALLATION.md

