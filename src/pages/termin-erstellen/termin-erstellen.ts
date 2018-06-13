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


  error:any={isError:false,errorMessage:''};

  compareTwoDates(){
    let anfangsDatum = this.getAnfangsDAtum();
    let endDatum = this.getEndeDatum();
    if(anfangsDatum != undefined && endDatum != undefined){

    if(endDatum<anfangsDatum){
      this.error={isError:true,errorMessage:'End Date can´t before start date'};
      }else{
      this.error = {isError:false,errorMessage:''};
    }
    }

  }

    getAnfangsDAtum():Date{
      let anfangsDatum = Date.parse(this.termin.anfangsDatum);
      let anfangsZeit = Date.parse('01 Jan 1970 ' +this.termin.anfangsZeit+':00 GMT');
      if(!this.ganztaegig) {
        return new Date(anfangsDatum + anfangsZeit);
      }else {
        return new Date(anfangsDatum);
      }
    }

    getEndeDatum():Date{
      let endDatum = Date.parse(this.termin.endDatum);
      let endZeit = Date.parse('01 Jan 1970 ' +this.termin.endZeit+':00 GMT');

      if(!this.ganztaegig) {
        return new Date(endDatum + endZeit);
      }else {
        return new Date(endDatum);
      }
  }




  onSubmit(f:NgForm){
    let url = this.auth.mainUrl+"/termin";
    let loading = this.loadingCtrl.create({
      content: 'Gruppe wird erstellt!\n Bitte Kaffee holen..',
    });
    loading.present();


    let termin = {titel:this.termin.titel,beschreibung: this.termin.beschreibung,anfang:this.getAnfangsDAtum(),ende:this.getEndeDatum(),ganztaegig:this.ganztaegig ? 1 : 0};
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
