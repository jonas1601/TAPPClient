import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import { GruppenPage } from '../gruppen/gruppen';
import {HttpClient} from "@angular/common/http";
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {NgForm} from "@angular/forms";

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

  ganztaegig: boolean =false;
  minDatum = new Date(Date.now()).toISOString();
  termin = { titel: '', beschreibung: '', anfangsDatum: '', endDatum: '', anfangsZeit: '', endZeit:'' };


  constructor(private loadingCtrl:LoadingController,public navCtrl: NavController, public navParams: NavParams,private http: HttpClient, private auth:AuthServiceProvider,private alertCtrl:AlertController) {
  }



  onSubmit(f:NgForm){
    let url = this.auth.mainUrl+"/termin";
    let loading = this.loadingCtrl.create({
      content: 'Gruppe wird erstellt!\n Bitte Kaffee holen..',
    });
    loading.present();
    let anfangsDatum = Date.parse(this.termin.anfangsDatum);
    let anfangsZeit = Date.parse('01 Jan 1970 ' +this.termin.anfangsZeit+':00 GMT');
    let endDatum = Date.parse(this.termin.endDatum);
    let endZeit = Date.parse('01 Jan 1970 ' +this.termin.endZeit+':00 GMT');

    let anfangsTimestamp;
    let endeTimestamp;
    if(!this.ganztaegig) {
      anfangsTimestamp = new Date(anfangsDatum + anfangsZeit);
      endeTimestamp = new Date(endDatum + endZeit);
    }else{
      anfangsTimestamp = new Date(anfangsDatum);
      endeTimestamp = new Date(endDatum);
    }

    let termin = {titel:this.termin.titel,beschreibung: this.termin.beschreibung,anfang:anfangsTimestamp,ende:endeTimestamp,ganztaegig:this.ganztaegig ? 1 : 0};
    this.http.post(url,termin,{params:{gruppenId:this.navParams.data.gruppenId}}).subscribe(
      ()=> {
        this.navCtrl.setRoot(GruppenPage);
        loading.dismiss();
      },err => {
        console.log(err);
        loading.dismiss();
        this.showError("Termin konnte nicht erstellt werden.")
      });
    this.navCtrl.push(GruppenPage);
  }



  showError(text) {
    let alert = this.alertCtrl.create({
      title: 'Fehler',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }
}
