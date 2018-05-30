import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GruppenPage } from '../gruppen/gruppen';
import {HttpClient} from "@angular/common/http";

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

  termin = {
    titel: '',
    beschreibung: '',
    anfang: '',
    ende: '',
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TerminErstellenPage');
  }

  openGruppenPage(){
    console.log(this.termin);

  }

  erstelleTermin(){
    var url = 'http://localhost:8080/termin';
    this.http.post(url,this.termin,{params:{gruppenId:this.navParams.data}}).subscribe();
    this.navCtrl.push(GruppenPage);
  }
}


