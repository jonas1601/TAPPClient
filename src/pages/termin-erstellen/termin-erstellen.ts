import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GruppenPage } from '../gruppen/gruppen';
import {HttpClient} from "@angular/common/http";
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";

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

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient, private auth:AuthServiceProvider) {
  }




  erstelleTermin(){
    let url = this.auth.mainUrl+"/termin";
    this.http.post(url,this.termin,{params:{gruppenId:this.navParams.data.gruppenId}}).subscribe();
    this.navCtrl.push(GruppenPage);
  }
}


