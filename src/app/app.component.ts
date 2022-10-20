import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Push } from '@awesome-cordova-plugins/push/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform : Platform, private push: Push) {
    this.platform.ready().then(() => {
      
      //Check permision for push notifications
      this.push.hasPermission().then((res: any) => {
        if (res.isEnabled) {
          console.log('We have permission to send push notifications');
        } else {
          console.log('We do not have permission to send push notifications');
        }
      });

    });
  }
}
