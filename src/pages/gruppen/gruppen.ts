import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import { GruppenUebersichtPage } from '../gruppen-uebersicht/gruppen-uebersicht';
import { GruppeHinzufuegenPage } from '../gruppe-hinzufuegen/gruppe-hinzufuegen';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {HttpClient} from "@angular/common/http";

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
    this.openGruppenUebersichtPage({id:item.gruppenId,name:item.name});
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,private auth: AuthServiceProvider,private http:HttpClient, private loadingCtrl:LoadingController) {
    this.getGruppenFromPersonId();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GruppenPage');
  }

  openGruppenUebersichtPage(data:{id:number,name:string,}) {

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
      });
  }


}
