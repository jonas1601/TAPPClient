import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MitgliederPage } from '../pages/mitglieder/mitglieder';
import { GruppenPage } from '../pages/gruppen/gruppen';
import { GruppenUebersichtPage } from '../pages/gruppen-uebersicht/gruppen-uebersicht';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TerminePage } from '../pages/termine/termine';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TerminePage,
    MitgliederPage,
    GruppenPage,
    GruppenUebersichtPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TerminePage,
    MitgliederPage,
    GruppenPage,
    GruppenUebersichtPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
