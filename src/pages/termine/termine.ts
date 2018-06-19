import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, Loading, LoadingController, NavController, Refresher} from 'ionic-angular';
import {PopoverController} from 'ionic-angular';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';
import {TeilnehmerPage} from '../teilnehmer/teilnehmer';
import {HttpClient} from "@angular/common/http";
import {User} from "../../entities/user";
import {Termin} from "../../entities/termin";
import {Status} from "../../entities/status";
import {AlertController} from 'ionic-angular';

@IonicPage({
  priority: "low"
})
@Component({
  selector: 'page-termine',
  templateUrl: 'termine.html',
})
export class TerminePage {
  @ViewChild(Content) content: Content;
  user: User;
  termine: Termin[] = null;
  stati: Status[] = null;
  loading: Loading;

  constructor(private loadingCtrl: LoadingController, public navCtrl: NavController, private auth: AuthServiceProvider, public popoverCtrl: PopoverController, private http: HttpClient, private alertCtrl: AlertController) {
    this.user = this.auth.getUserInfo();
    if (this.termine == null) this.getTermineZuPerson();
    if (this.stati == null) this.getStati();
  }

  doRefresh(refresher) {
    this.getTermineZuPerson();
    this.getStati();
    refresher.complete();
  }

  getTermineZuPerson() {
    let url = this.auth.mainUrl + "/terminevonperson";
      this.showLoading('Bitte Kaffee holen..');
    this.http.get<Termin[]>(url, {params: {personId: this.user.personId}})
      .subscribe((objekte) => {
        this.termine = objekte;
        this.convertToDateObjects();
          this.dismissLoading();
      });
  }

  getStati() {
    let url = this.auth.mainUrl + "/stati";
      this.showLoading('Bitte Kaffee holen..');
    this.http.get<Status[]>(url, {params: {personId: this.auth.getUserInfo().personId}})
      .subscribe(data => {
        this.stati = data;
          this.dismissLoading();
      });
  }

  convertToDateObjects() {
    if (this.termine.length != 0) {
      for (let termin of this.termine) {
        console.log(termin.anfang);
        termin.anfang = new Date(termin.anfang);
        console.log(termin.anfang);
        termin.ende = new Date(termin.ende);
      }
    }
  }

  public logout() {
    this.auth.logout().subscribe(() => {
      this.navCtrl.setRoot('LoginPage')
    });
  }

  presentPopover(myEvent, terminId: Termin) {
    let popover = this.popoverCtrl.create(TeilnehmerPage, {termin: terminId}, {cssClass: 'custom-popover'});

    let ev = {
      target: {
        getBoundingClientRect: () => {
          return {};
        }
      }
    };

    popover.present({
      ev
    });

  }

  getColor(termin: Termin, statusNummer: number): string {
    if (this.stati != null) {
      for (let status of this.stati) {
        if (status.terminId == termin.terminId) {
          if (status.statusId == statusNummer + "") {
            return "primary";
          }
        }
      }
    }
    return "dark";
  }


  buttonClicked(status: number, termin: Termin) {
    let url = this.auth.mainUrl + "/terminperson";
    this.showLoading('Bitte Kaffee holen..');
    this.http.post<Status>(url, null, {
      params: {
        personId: this.auth.getUserInfo().personId,
        terminId: termin.terminId,
        status: status + "",
        kommentar: "Test"
      }
    })
      .subscribe(data => {
          this.dismissLoading()
          let filteredArray = this.stati.filter((status: Status) => {
              return !(data.terminId == status.terminId && data.personId == status.personId);
            }
          );
          this.stati = filteredArray;
          this.stati.push(data);


        }
      );

  }

  deleteTermin(termin: Termin) {
    let url = this.auth.mainUrl + "/termin";
    this.showLoading('Termin wird gelöscht\nBitte Kaffee holen..');
    this.http.delete<Status>(url, {params: {terminId: termin.terminId}})
      .subscribe(data => {
          this.getTermineZuPerson();
          this.getStati();
          this.dismissLoading();
        }
      );

  }

  delete(termin: Termin) {
    this.presentConfirm(termin);
  }

  presentConfirm(termin: Termin) {
    let alert = this.alertCtrl.create({
      title: 'Termin löschen',
      message: 'Möchten Sie den Termin wirklich löschen?',
      buttons: [
        {
          text: 'Abbrechen',
          role: 'cancel',
          handler: () => {

          }
        },
        {
          text: 'Löschen',
          handler: () => {
            this.deleteTermin(termin);
          }
        }
      ]
    });
    alert.present();
  }

  showLoading(text: string) {
    if (!this.loading) {
      this.loading = this.loadingCtrl.create({
        content: text
      });
      this.loading.present();
    }
  }

  dismissLoading() {
    if (this.loading) {
      this.loading.dismiss();
      this.loading = null;
    }
  }

}
