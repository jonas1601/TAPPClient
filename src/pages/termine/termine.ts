import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController, PopoverController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { TeilnehmerPage } from '../teilnehmer/teilnehmer';

@IonicPage()
@Component({
  selector: 'page-termine',
  templateUrl: 'termine.html',
})
export class TerminePage {
  username = '';
  terminTitel = 'Training';
  terminBeschreibung = 'Bitte 15min früher da sein - wir wollen nen Foto machen!';

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private auth: AuthServiceProvider, public popoverCtrl: PopoverController) {
  let info = this.auth.getUserInfo();
  this.username = info['username'];
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot('LoginPage')
    });
  }
  
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(TeilnehmerPage, {}, {cssClass: 'custom-popover'});
    
    let ev = {
      target : {
        getBoundingClientRect : () => {
          return {
            top: '65'
          };
        }
      }
    };

    popover.present({
      ev
    });

  }

}