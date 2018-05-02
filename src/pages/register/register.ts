import { Component } from '@angular/core';
import {NavController, AlertController, IonicPage, LoadingController, Loading} from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import {TerminePage} from "../termine/termine";



@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  createSuccess = false;
  loading: Loading;
  registerCredentials = { benutzername: '', password: '',vorname:'',nachname:'' };

  constructor(private nav: NavController, private auth: AuthServiceProvider, private alertCtrl: AlertController,private loadingCtrl: LoadingController) { }

  public register() {
    this.showLoading();

    this.auth.register(this.registerCredentials).subscribe(success => {
      if (success) {
        this.createSuccess = true;
        this.showPopup("Success", "Account created.");
        this.nav.setRoot(TerminePage);
      } else {
        this.showPopup("Error", "Problem creating account.");
      }
    },
      error => {
        this.showPopup("Error", error);
      });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Bitte Kaffee holen..',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            if (this.createSuccess) {
              this.nav.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }
}
