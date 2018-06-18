import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavParams} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {User} from "../../entities/user";
import {Gruppe} from "../../entities/gruppe";

/**
 * Generated class for the MitgliederPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mitglieder',
  templateUrl: 'mitglieder.html',
})
export class MitgliederPage {

//radioOpen: boolean;
  gruppe: Gruppe;
  mitglieder: User[];

  //radioResult;
  constructor(private loadingCtrl: LoadingController, private auth: AuthServiceProvider, private navParams: NavParams, private http: HttpClient, private alertCtrl: AlertController) {
    this.gruppe = this.navParams.data;
    this.getMitglieder();
  }

  getMitglieder() {
    let url = this.auth.mainUrl + "/mitglieder";
    let loading = this.loadingCtrl.create({
      content: 'Warten auf Mitglieder.\n Bitte Kaffee holen..',
    });
    loading.present();
    this.http.get<User[]>(url, {params: {gruppenId: this.gruppe.gruppenId}})
      .subscribe(data => {
        this.mitglieder = data;
        loading.dismiss();
      }, () => {
        loading.dismiss();
        this.showError("Fehler beim Laden der MItglieder");
      })
  }

  removeMitglied(personId: string) {
    let url = this.auth.mainUrl + "/gruppenmitglied";
    let loading = this.loadingCtrl.create({
      content: 'Wird gelöscht.\n Bitte Kaffee holen..',
    });
    loading.present();
    this.http.delete(url, {params: {gruppenId: this.gruppe.gruppenId, personId: personId}})
      .subscribe(() => {
        this.mitglieder = this.mitglieder.filter(mitglied => mitglied.personId != personId);
        loading.dismiss();
      }, () => {
        loading.dismiss();
        this.showError('Fehler beim Löschen des Gruppenmitgliedes')

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

  presentConfirm(person: User) {
    let alert = this.alertCtrl.create({
      title: 'Löschen?',
      message: 'Willst du '+person.benutzername+' wirklich aus der Gruppe entfernen?',
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
            this.removeMitglied(person.personId);
          }
        }
      ]
    });
    alert.present();
  }
}
