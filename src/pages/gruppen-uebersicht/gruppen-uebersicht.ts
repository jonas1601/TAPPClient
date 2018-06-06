import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TerminErstellenPage } from '../termin-erstellen/termin-erstellen';
import { MitgliederPage } from '../mitglieder/mitglieder';
import { MitgliederHinzufuegenPage } from '../mitglieder-hinzufuegen/mitglieder-hinzufuegen';
import {Gruppe} from "../../entities/gruppe";

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

  gruppe: Gruppe;
  gruppenName: String;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.gruppe = navParams.data.gruppe;
    this.gruppenName = this.gruppe.name;
  }


  openTerminErstellenPage(){
    this.navCtrl.push(TerminErstellenPage,this.gruppe);
  }

  openMitgliederPage(){
    this.navCtrl.push(MitgliederPage,this.gruppe);
  }

  openMitgliederHinzufuegenPage(){
    this.navCtrl.push(MitgliederHinzufuegenPage,this.gruppenName);
  }
  setGruppenName(name: string){
    this.gruppenName = name;
  }
}
