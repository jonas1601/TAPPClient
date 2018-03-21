import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TerminErstellenPage } from './termin-erstellen';

@NgModule({
  declarations: [
    TerminErstellenPage,
  ],
  imports: [
    IonicPageModule.forChild(TerminErstellenPage),
  ],
})
export class TerminErstellenPageModule {}
