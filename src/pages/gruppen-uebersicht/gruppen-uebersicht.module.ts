import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GruppenUebersichtPage } from './gruppen-uebersicht';

@NgModule({
  declarations: [
    GruppenUebersichtPage,
  ],
  imports: [
    IonicPageModule.forChild(GruppenUebersichtPage),
  ],
})
export class GruppenUebersichtPageModule {}
