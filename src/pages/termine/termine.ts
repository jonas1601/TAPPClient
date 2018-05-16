import { Component } from '@angular/core';
import {IonicPage, Loading, LoadingController, NavController, NavParams} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';
import {HttpClient} from "@angular/common/http";
import {User} from "../../entities/user";


@IonicPage()
@Component({
  selector: 'page-termine',
  templateUrl: 'termine.html',
})
export class TerminePage {
  user: User;
  termine: Termin[];
  loading: Loading;


  constructor(private loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private auth: AuthServiceProvider, private http: HttpClient) {
    this.user = this.auth.getUserInfo();
    this.getTermineZuPerson();
  }

  getTermineZuPerson() {
    let url = "http://localhost:8080/terminevonperson";
    let loading = this.loadingCtrl.create({
      content: 'Warten auf Termine.\n Bitte Kaffee holen..',
    });
    loading.present();
    this.http.get<Termin[]>(url, {params: {personId: this.user.personId}})
      .subscribe((objekte) =>
      {this.termine = objekte ;
        this.convertToDateObjects();
      loading.dismiss();
      console.log(this.termine);

      });
  }


  convertToDateObjects(){
    for(let termin of this.termine){
      termin.anfang = new Date(termin.anfang);
      termin.ende = new Date(termin.ende);
    }
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot('LoginPage')
    });
  }
}

