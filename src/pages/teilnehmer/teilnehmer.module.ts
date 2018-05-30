import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeilnehmerPage } from './teilnehmer';

@NgModule({
  declarations: [
    TeilnehmerPage,
  ],
  imports: [
    IonicPageModule.forChild(TeilnehmerPage),
  ],
})
export class TeilnehmerPageModule {}