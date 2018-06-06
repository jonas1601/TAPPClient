import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MitgliederHinzufuegenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mitglieder-hinzufuegen',
  templateUrl: 'mitglieder-hinzufuegen.html',
})
export class MitgliederHinzufuegenPage {

  gruppenName = "";
  registerCredentials = {nutzerAk: ''};

  nutzer=[
    "Hallo"
  ];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.gruppenName = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MitgliederHinzufuegenPage');
  }

  benutzer() {
    this.nutzer.push(this.registerCredentials.nutzerAk);
    
    //this.openGruppenUebersichtPage(gruppe);
  }

}
