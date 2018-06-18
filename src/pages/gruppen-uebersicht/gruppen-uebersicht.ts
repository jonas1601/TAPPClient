import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import { TerminErstellenPage } from '../termin-erstellen/termin-erstellen';
import { MitgliederPage } from '../mitglieder/mitglieder';
import { MitgliederHinzufuegenPage } from '../mitglieder-hinzufuegen/mitglieder-hinzufuegen';
import {Gruppe} from "../../entities/gruppe";
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {HttpClient} from "@angular/common/http";
import {GruppenPage} from "../gruppen/gruppen";

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


  constructor(public navCtrl: NavController, public navParams: NavParams,private auth:AuthServiceProvider,private http:HttpClient,private loadingCtrl:LoadingController,private alertCtrl:AlertController) {
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
    this.navCtrl.push(MitgliederHinzufuegenPage,this.gruppe);
  }


  deleteGruppe(){
    let url = this.auth.mainUrl+"/gruppe";
    let loading = this.loadingCtrl.create({
      content: 'Wird gelöscht.\n Bitte Kaffee holen..',
    });
    loading.present();
    this.http.delete(url, {params: {gruppenId: this.gruppe.gruppenId}})
      .subscribe(() => {
        loading.dismiss();
        this.navCtrl.setRoot(GruppenPage);
      },() => {
        loading.dismiss();
        this.showError('Fehler beim Löschen der Gruppe')

      });

  }

  showError(text) {

    let alert = this.alertCtrl.create({
      title: 'Fehler',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

presentConfirm(){
  let alert = this.alertCtrl.create({
    title: 'Löschen?',
    message: 'Willst du die Gruppe wirklich löschen?',
    buttons: [
      {
        text: 'Nein',
        role: 'nein',
        handler: () => {

        }
      },
      {
        text: 'Ja',
        handler: () => {
          this.deleteGruppe()
        }
      }
    ]
  });
  alert.present();
}
}
