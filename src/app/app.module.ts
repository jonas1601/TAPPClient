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
import {LoginPage} from "../pages/login/login";
import {LoginPageModule} from "../pages/login/login.module";
import {TerminePageModule} from "../pages/termine/termine.module";
import {MitgliederPageModule} from "../pages/mitglieder/mitglieder.module";
import {RegisterPageModule} from "../pages/register/register.module";
import {GruppenPageModule} from "../pages/gruppen/gruppen.module";
import {GruppenUebersichtPageModule} from "../pages/gruppen-uebersicht/gruppen-uebersicht.module";
import {GruppeHinzufuegenPageModule} from "../pages/gruppe-hinzufuegen/gruppe-hinzufuegen.module";
import {TerminErstellenPageModule} from "../pages/termin-erstellen/termin-erstellen.module";
import {MitgliederHinzufuegenPageModule} from "../pages/mitglieder-hinzufuegen/mitglieder-hinzufuegen.module";
import {TeilnehmerPageModule} from "../pages/teilnehmer/teilnehmer.module";
import {RegisterPage} from "../pages/register/register";

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      monthNames: ['Januar', 'Februar', 'März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],
      monthShortNames: ['Jan', 'Feb', 'Mär','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Dez'],
      dayNames: ['Montag', 'Dienstag', 'Mittwoch','Donnerstag','Freitag','Samstag','Sonntag'],
      dayShortNames: ['Mon', 'Die', 'Mit','Don','Fre','Sam','Son'],
    }),
    HttpClientModule,
    TerminePageModule,
    MitgliederPageModule,
    GruppenPageModule,
    GruppenUebersichtPageModule,
    GruppeHinzufuegenPageModule,
    TerminErstellenPageModule,
    MitgliederHinzufuegenPageModule,
    TeilnehmerPageModule,
    LoginPageModule,
    RegisterPageModule
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
    TeilnehmerPage,
    LoginPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
