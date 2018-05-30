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

  gruppenId = 0;
  gruppenName = "super";


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.gruppenId = navParams.data.id;
    this.gruppenName = navParams.data.name;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GruppenUebersichtPage');
  }

  openTerminErstellenPage(){
    this.navCtrl.push(TerminErstellenPage,this.gruppenId);
  }

  openMitgliederPage(){
    this.navCtrl.push(MitgliederPage,this.gruppenName);
  }

  setGruppenName(name: string){
    this.gruppenName = name;
  }
}
