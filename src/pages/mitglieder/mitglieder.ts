import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavParams} from 'ionic-angular';
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
  constructor(private loadingCtrl:LoadingController,private auth:AuthServiceProvider,private navParams: NavParams,private http:HttpClient) {
    this.gruppe = this.navParams.data;
    this.getMitglieder();
  }

  getMitglieder(){
    let url = this.auth.mainUrl+"/mitglieder";
    let loading = this.loadingCtrl.create({
      content: 'Warten auf Mitglieder.\n Bitte Kaffee holen..',
    });
    loading.present();
    this.http.get<User[]>(url, {params: {gruppenId: this.gruppe.gruppenId}})
      .subscribe(data => {
        this.mitglieder = data;
        loading.dismiss();
      },err => {
        loading.dismiss();
        alert("Fehler beim Laden"+err);
      })
  }

  removeMitglied() {
    let url = this.auth.mainUrl+"/gruppenmitglied";
    let loading = this.loadingCtrl.create({
      content: 'Wird gelöscht.\n Bitte Kaffee holen..',
    });
    loading.present();
    this.http.delete(url, {params: {gruppenId: this.gruppe.gruppenId, personId: this.auth.getUserInfo().personId}})
      .subscribe(data => {

        loading.dismiss();
      },err => {
        loading.dismiss();

      });
  }

/*
  doRadio() {
    let alert = this.alerCtrl.create();
    alert.setTitle('Gruppe wählen');

    alert.addInput({
      type: 'radio',
      label: 'Gruppe 1',
      value: 'gruppe1',
      checked: true
    });
    alert.addInput({
      type: 'radio',
      label: 'Gruppe 2',
      value: 'gruppe2',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'Gruppe 3',
      value: 'gruppe3',
      checked: false
    });



    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Radio data:', data);
        this.radioOpen = false;
        this.radioResult = data;
      }
    });

    alert.present().then(() => {
      this.radioOpen = true;
    });
  }*/



}
