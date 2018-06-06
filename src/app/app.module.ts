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
      monthNames: ['janeiro', 'fevereiro', 'mar\u00e7o','dezember'],
      monthShortNames: ['jan', 'fev', 'mar'],
      dayNames: ['domingo', 'segunda-feira', 'ter\u00e7a-feira',],
      dayShortNames: ['dom', 'seg', 'ter'],
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
    MitgliederHinzufuegenPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
