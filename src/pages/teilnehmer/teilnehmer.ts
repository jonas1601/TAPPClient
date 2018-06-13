import {Component} from '@angular/core';
import {IonicPage, LoadingController, ViewController} from 'ionic-angular';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {User} from "../../entities/user";
import {HttpClient} from "@angular/common/http";
import {Status} from "../../entities/status";
import {Termin} from "../../entities/termin";
import {Observable} from 'rxjs/Rx'

@IonicPage()
@Component({
  selector: 'page-teilnehmer',
  templateUrl: 'teilnehmer.html',
})
export class TeilnehmerPage {

  stati: Status[];
  termin: Termin;
  mitglieder: User[];
  userAngenommen: User[] = [];
  userVielleicht: User[] = [];
  userAbgelehnt: User[] = [];

  constructor(public viewCtrl: ViewController, private auth: AuthServiceProvider, private http: HttpClient, private loadingCtrl: LoadingController) {
    this.termin = this.viewCtrl.data.termin;
    this.mitglieder = null;
    let loading = this.loadingCtrl.create({
      content: 'Warten auf Teilnehmer.\n Bitte Kaffee holen..',
    });
    loading.present();
    let getStati = this.getStati();
    let getPersonen = this.getPersonenFromGruppe();
    Observable.forkJoin(
      getStati, getPersonen
    ).subscribe(results => {
        this.stati = results[0];
        this.mitglieder = results[1];
        console.log(this.mitglieder);
      }, error => console.log(error)
      , () => {
      this.getPersonenZuStati()
        .subscribe( () => loading.dismiss(),error => console.log(error),()=>  loading.dismiss());

      });
  }


  close() {
    this.viewCtrl.dismiss();
  }

  getPersonenFromGruppe() {
    let url = this.auth.mainUrl + "/mitglieder";

    return this.http.get<User[]>(url, {params: {gruppenId: this.termin.gruppenId}});
  }


  getPersonenZuStati() {
    return Observable.create(observer => {
      this.stati.forEach((status) => {
        let index = this.mitglieder.findIndex(mitglied => mitglied.personId == status.personId);

        switch (Number.parseInt(status.statusId)) {
          case 0:
            this.userAngenommen.push(this.mitglieder[index]);
            break;
          case 1:
            this.userAbgelehnt.push(this.mitglieder[index]);
            break;
          case 2:
            this.userVielleicht.push(this.mitglieder[index]);
            break;

        }
        this.mitglieder.splice(index, 1);

      });
      observer.complete();
    });
  }


  getStati() {
    let url = this.auth.mainUrl + "/terminstati";
    return this.http.get<Status[]>(url, {params: {terminId: this.termin.terminId}});

  }


}

