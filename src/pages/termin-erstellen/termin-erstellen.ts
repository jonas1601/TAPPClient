import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { GruppenPage } from '../gruppen/gruppen';

/**
 * Generated class for the TerminErstellenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-termin-erstellen',
  templateUrl: 'termin-erstellen.html',
})
export class TerminErstellenPage {

  registerCredentials = { titel: '', beschreibung: '', anfangsDatum: '', endDatum: '', anfangsZeit: '', endZeit:'' };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TerminErstellenPage');
  }

  openGruppenPage(){
    //Hier muss noch ein Termin erstellt werden
    
    this.navCtrl.push(GruppenPage);
  }
}
