import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TerminErstellenPage } from '../termin-erstellen/termin-erstellen';
import { MitgliederPage } from '../mitglieder/mitglieder';

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

  gruppenName = " ";

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.gruppenName = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GruppenUebersichtPage');
  }

  openTerminErstellenPage(){
    this.navCtrl.push(TerminErstellenPage);
  }

  openMitgliederPage(){
    this.navCtrl.push(MitgliederPage,this.gruppenName);
  }

  setGruppenName(name: string){
    this.gruppenName = name;
  }
}
