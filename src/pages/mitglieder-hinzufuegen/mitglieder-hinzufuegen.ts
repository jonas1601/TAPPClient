import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {GruppenPage} from '../gruppen/gruppen';
import {GruppenUebersichtPage} from '../gruppen-uebersicht/gruppen-uebersicht';
import {HttpClient} from "@angular/common/http";
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {User} from "../../entities/user";
import {Gruppe} from "../../entities/gruppe";

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
  hinzufügenUrl: string = "http://ec2-34-219-150-87.us-west-2.compute.amazonaws.com:8080/gruppenmitglieder"
  gruppe: Gruppe;
  gruppenName: String;
  registerCredentials = {nutzerAk: ''};
  nutzer: User[];
  nutzer2: User[];
  ausgewählteNutzer: User[] = [];
  test: String = "";


  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController, private auth: AuthServiceProvider, private http: HttpClient) {
    this.gruppe = navParams.data;
    this.gruppenName = this.gruppe.name;
    this.getMitglieder();
  }

  openGruppenUebersichtPage() {
    //Mitglieder hinzufügen

    this.http.post(this.hinzufügenUrl, this.ausgewählteNutzer, {
      params: {
        gruppenId: this.gruppe.gruppenId,
        rollenId: '1'
      }
    })
      .subscribe(() => {
        let data = {gruppe: this.gruppe};
        this.navCtrl.push(GruppenUebersichtPage, data);
      });

  }

  selectUser(user: User) {
    if (this.ausgewählteNutzer.indexOf(user) > -1) {
      this.ausgewählteNutzer.splice(this.ausgewählteNutzer.indexOf(user), 1);
    } else {
      this.ausgewählteNutzer.push(user);
    }
    console.log(this.ausgewählteNutzer);
  }

  initalize() {
    this.nutzer = Object.assign([], this.nutzer2);
  }

  getMitglieder() {
    //this.nutzer füllen

    let url = this.auth.mainUrl + "/personen";
    let loading = this.loadingCtrl.create({
      content: 'Warten auf Mitglieder.\n Bitte Kaffee holen..',
    });
    loading.present();
    this.http.get<User[]>(url)
      .subscribe(data => {
        this.nutzer = data;
        this.nutzer = this.nutzer.filter(n => n.personId != this.auth.currentUser.personId);
        this.nutzer2 = Object.assign([], this.nutzer);
        loading.dismiss();
      }, err => {
        loading.dismiss();
        alert("Fehler beim Laden" + err);
      })


  }

  getItems(ev: any) {
    this.initalize();
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.nutzer = this.nutzer.filter((n) => {
        return (n.benutzername.toLowerCase().indexOf(val.toLowerCase()) > -1)
          || (n.vorname.toLowerCase().indexOf(val.toLowerCase()) > -1)
          || (n.nachname.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


}
