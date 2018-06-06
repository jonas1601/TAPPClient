import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController} from 'ionic-angular';
import { GruppenUebersichtPage } from '../gruppen-uebersicht/gruppen-uebersicht';
import { GruppeHinzufuegenPage } from '../gruppe-hinzufuegen/gruppe-hinzufuegen';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {HttpClient} from "@angular/common/http";
import {Gruppe} from "../../entities/gruppe";

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

  gruppen: Gruppe[];

  itemSelected(item: Gruppe) {
    console.log("Selected Item", item);
    this.openGruppenUebersichtPage(item);
  }
  constructor(public navCtrl: NavController,private auth: AuthServiceProvider,private http:HttpClient, private loadingCtrl:LoadingController) {
    this.getGruppenFromPersonId();
  }



  openGruppenUebersichtPage(gruppe:Gruppe) {
    let data = {gruppe: gruppe};
    this.navCtrl.push(GruppenUebersichtPage,data);

  }

  openGruppeHinzufuegenPage() {
    this.navCtrl.push(GruppeHinzufuegenPage);
  }

  getGruppenFromPersonId(){
    let url = this.auth.mainUrl+"/gruppenbypersonid";
    let loading = this.loadingCtrl.create({
      content: 'Warten auf Gruppen.\n Bitte Kaffee holen..',
    });
    loading.present();
    this.http.get<Gruppe[]>(url,{params:{personId: this.auth.getUserInfo().personId}})
      .subscribe(data =>{
        this.gruppen = data;
        loading.dismiss();
      },err => {
        loading.dismiss();
        alert("Fehler beim Laden"+err);
      })
  }


}
