import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TerminErstellenPage } from '../termin-erstellen/termin-erstellen';
import { MitgliederPage } from '../mitglieder/mitglieder';
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


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.gruppe = navParams.data.gruppe;

  }


  openTerminErstellenPage(){
    this.navCtrl.push(TerminErstellenPage,this.gruppe);
  }

  openMitgliederPage(){
    this.navCtrl.push(MitgliederPage,this.gruppe);
  }


}
