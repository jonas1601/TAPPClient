import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController} from 'ionic-angular';
import { GruppenPage } from '../gruppen/gruppen';
import {HttpClient} from "@angular/common/http";
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {NgForm} from "@angular/forms";
import {Gruppe} from "../../entities/gruppe";

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

  gruppenname:string = '';

  constructor(public navCtrl: NavController, private http:HttpClient,private auth:AuthServiceProvider,private loadingCtrl: LoadingController) {
  }

  onSubmit(f:NgForm){

      let urlGruppe = this.auth.mainUrl + "/gruppe";
      let urlHinzu = this.auth.mainUrl + "/gruppenmitglied";
    let loading = this.loadingCtrl.create({
      content: 'Gruppe wird erstellt!\n Bitte Kaffee holen..',
    });
    loading.present();
      this.http.post<Gruppe>(urlGruppe, null, {params: {name: this.gruppenname}})
        .subscribe(gruppe => {
          this.http.post<Gruppe>(urlHinzu, null, {
            params:
              {personId: this.auth.getUserInfo().personId, gruppenId: gruppe.gruppenId, rollenId: '2'}
          })
            .subscribe(() => {
              this.openGruppenUebersichtPage();
              loading.dismiss();
            });
        })

  }

  openGruppenUebersichtPage() {

    this.navCtrl.push(GruppenPage);

  }
}
