import { Component } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { Push, PushObject, PushOptions } from '@awesome-cordova-plugins/push/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  handlerMessage = '';
  roleMessage = '';

  constructor(private platform : Platform, private push: Push, private alertController: AlertController) {
    this.platform.ready().then(() => {
      
      //Check permision for push notifications
      this.push.hasPermission().then((res: any) => {
        if (res.isEnabled) {
          console.log('We have permission to send push notifications');
        } else {
          console.log('We do not have permission to send push notifications');
        }
      });

            // Create a channel (Android O and above). You'll need to provide the id, description and importance properties.
            this.push.createChannel({
              id: "testchannel1",
              description: "My first test channel",
              // The importance property goes from 1 = Lowest, 2 = Low, 3 = Normal, 4 = High and 5 = Highest.
              importance: 3,
              //badge is used to if badge appears on the app icon see https://developer.android.com/reference/android/app/NotificationChannel.html#setShowBadge(boolean).
              //false = no badge on app icon.
              //true = badge on app icon
              badge: false
            }).then(() => console.log('Channel created'));
      
            // Delete a channel (Android O and above)
            this.push.deleteChannel('testchannel1').then(() => console.log('Channel deleted'));
      
            // Return a list of currently configured channels
            this.push.listChannels().then((channels) => console.log('List of channels', channels))
      
            // to initialize push notifications
      
            const options: PushOptions = {
              android: {},
              ios: {
              alert: 'true',
              badge: true,
              sound: 'false'
              },
            }
      
            const pushObject: PushObject = this.push.init(options);
            pushObject.subscribe("my-test").then ((info) => { 
              console.log('subscribed to my-test ', info);
              this.presentAlert(JSON.stringify(info));
            });
      
      
            pushObject.on('notification').subscribe((notification: any) => { 
              this.presentAlert(JSON.stringify(notification));
            }); 
      
            pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));
      
            pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
      });
  }

  async presentAlert(msg) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: msg,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }
}
