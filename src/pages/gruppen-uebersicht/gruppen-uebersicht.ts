import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TerminErstellenPage } from '../termin-erstellen/termin-erstellen';

/**
 * Generated class for the GruppenUebersichtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gruppen-uebersicht',
  templateUrl: 'gruppen-uebersicht.html',
})
export class GruppenUebersichtPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GruppenUebersichtPage');
  }

  openTerminErstellenPage(){
    this.navCtrl.push(TerminErstellenPage);
  }


}
