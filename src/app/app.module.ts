import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { MitgliederPage } from '../pages/mitglieder/mitglieder';
import { GruppenPage } from '../pages/gruppen/gruppen';
import { GruppenUebersichtPage } from '../pages/gruppen-uebersicht/gruppen-uebersicht';
import { GruppeHinzufuegenPage } from '../pages/gruppe-hinzufuegen/gruppe-hinzufuegen';
import { TerminErstellenPage } from '../pages/termin-erstellen/termin-erstellen';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TerminePage } from '../pages/termine/termine';

@NgModule({
  declarations: [
    MyApp,
    TerminePage,
    MitgliederPage,
    GruppenPage,
    GruppenUebersichtPage,
    GruppeHinzufuegenPage,
    TerminErstellenPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      monthNames: ['janeiro', 'fevereiro', 'mar\u00e7o','dezember'],
      monthShortNames: ['jan', 'fev', 'mar'],
      dayNames: ['domingo', 'segunda-feira', 'ter\u00e7a-feira',],
      dayShortNames: ['dom', 'seg', 'ter'],
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TerminePage,
    MitgliederPage,
    GruppenPage,
    GruppenUebersichtPage,
    GruppeHinzufuegenPage,
    TerminErstellenPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
