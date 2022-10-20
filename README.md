# ionic-firebase-test
test de firebase en ionic

## Pasos a seguir

1- Tiene que estar instalado cordova global y cordova-res (y desinstalado capacitor)
	```sudo npm i -g cordova && sudo npm i -g cordova-res```

2- Añadirmos plataforma Android
	```ionic cordova platform add android```
	
3 - Instalamos firebase para cordova (no el oficial porque está desactualizado) https://github.com/havesource/cordova-plugin-push
	```cordova plugin add @havesource/cordova-plugin-push```
	o
	```cordova plugin add github:havesource/cordova-plugin-push```