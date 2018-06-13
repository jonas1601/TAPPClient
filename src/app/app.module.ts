import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { MitgliederPage } from '../pages/mitglieder/mitglieder';
import { MitgliederHinzufuegenPage } from '../pages/mitglieder-hinzufuegen/mitglieder-hinzufuegen';
import { GruppenPage } from '../pages/gruppen/gruppen';
import { GruppenUebersichtPage } from '../pages/gruppen-uebersicht/gruppen-uebersicht';
import { GruppeHinzufuegenPage } from '../pages/gruppe-hinzufuegen/gruppe-hinzufuegen';
import { TerminErstellenPage } from '../pages/termin-erstellen/termin-erstellen';
import { TeilnehmerPage } from '../pages/teilnehmer/teilnehmer';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TerminePage } from '../pages/termine/termine';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    MyApp,
    TerminePage,
    MitgliederPage,
    GruppenPage,
    GruppenUebersichtPage,
    GruppeHinzufuegenPage,
    TerminErstellenPage,
    MitgliederHinzufuegenPage,
    TeilnehmerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      monthNames: ['Januar', 'Februar', 'März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],
      monthShortNames: ['Jan', 'Feb', 'Mär','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Dez'],
      dayNames: ['Montag', 'Dienstag', 'Mittwoch','Donnerstag','Freitag','Samstag','Sonntag'],
      dayShortNames: ['Mon', 'Die', 'Mit','Don','Fre','Sam','Son'],
    }),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TerminePage,
    MitgliederPage,
    GruppenPage,
    GruppenUebersichtPage,
    GruppeHinzufuegenPage,
    TerminErstellenPage,
    MitgliederHinzufuegenPage,
    TeilnehmerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
