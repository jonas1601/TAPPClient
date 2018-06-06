import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, Loading, LoadingController, NavController} from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { TeilnehmerPage } from '../teilnehmer/teilnehmer';
import { HttpClient } from "@angular/common/http";
import { User } from "../../entities/user";
import {Termin} from "../../entities/termin";
import {Status} from "../../entities/status";

@IonicPage()
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



  getStati(){
    let url = this.auth.mainUrl+"/stati";
    this.http.get<Status[]>(url,{params: {personId: this.auth.getUserInfo().personId}})
      .subscribe(data=> {
        this.stati = data;
        this.loading.dismissAll();
      });
  }




  constructor(private loadingCtrl: LoadingController, public navCtrl: NavController, private auth: AuthServiceProvider,public popoverCtrl: PopoverController, private http: HttpClient) {
    this.user = this.auth.getUserInfo();
    if(this.termine == null) this.getTermineZuPerson();
    if(this.stati == null)this.getStati();
  }

  getTermineZuPerson() {
    let url = this.auth.mainUrl+"/terminevonperson";
    this.loading = this.loadingCtrl.create({
      content: 'Warten auf Termine.\n Bitte Kaffee holen..',
    });
    this.loading.present();
    this.http.get<Termin[]>(url, {params: {personId: this.user.personId}})
      .subscribe((objekte) =>
      {this.termine = objekte ;
      this.convertToDateObjects();
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
    this.auth.logout().subscribe(() => {
      this.navCtrl.setRoot('LoginPage')
    });
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(TeilnehmerPage, {}, {cssClass: 'custom-popover'});

    let ev = {
      target : {
        getBoundingClientRect : () => {
          return {
            top: '65'
          };
        }
      }
    };

    popover.present({
      ev
    });

  }

  getColor(termin:Termin,statusNummer:number): string {
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


  buttonClicked(status:number, termin: Termin){
    let url = this.auth.mainUrl+"/terminperson";
    let loading = this.loadingCtrl.create({
      content: 'Bitte Kaffee holen..',
    });
    loading.present();
    this.http.post(url,null,{params:{personId: this.auth.getUserInfo().personId,terminId: termin.terminId,status:status+"",kommentar: "Test"}})
      .subscribe(()=>{
        loading.dismiss();
        this.getStati();
        }
      );

  }




}
