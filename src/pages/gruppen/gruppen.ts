import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GruppenUebersichtPage } from '../gruppen-uebersicht/gruppen-uebersicht';

/**
 * Generated class for the GruppenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gruppen',
  templateUrl: 'gruppen.html',
})
export class GruppenPage {

  items = [
    'Gruppe 1',
    'Gruppe 2',
    'Gruppe 3',
    'Gruppe 4',
    'Gruppe 5'

  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
    this.openGruppenUebersichtPage();
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GruppenPage');
  }

  openGruppenUebersichtPage() {
    this.navCtrl.push(GruppenUebersichtPage);
  }
}
