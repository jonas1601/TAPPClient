import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GruppenPage } from './gruppen';

@NgModule({
  declarations: [
    GruppenPage,
  ],
  imports: [
    IonicPageModule.forChild(GruppenPage),
  ],
})
export class GruppenPageModule {}
