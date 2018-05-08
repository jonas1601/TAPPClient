import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GruppenPage } from '../gruppen/gruppen';

/**
 * Generated class for the GruppeHinzufuegenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gruppe-hinzufuegen',
  templateUrl: 'gruppe-hinzufuegen.html',
})
export class GruppeHinzufuegenPage {

  searchQuery: string = '';
  items: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      'Lukas',
      'Jonas',
      'Leonard',
      'Yanik(evtl)',
      'Marie'
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad GruppeHinzufuegenPage');
  }

  openGruppenUebersichtPage() {

    this.navCtrl.push(GruppenPage);
    
  }
}
