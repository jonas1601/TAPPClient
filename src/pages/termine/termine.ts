import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


@IonicPage()
@Component({
  selector: 'page-termine',
  templateUrl: 'termine.html',
})
export class TerminePage {
  username = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private auth: AuthServiceProvider) {
  let info = this.auth.getUserInfo();
  this.username = info['username'];
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot('LoginPage')
    });
  }
  

}
