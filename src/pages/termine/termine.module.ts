import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TerminePage } from './termine';

@NgModule({
  declarations: [
    TerminePage,
  ],
  imports: [
    IonicPageModule.forChild(TerminePage),
  ],
})
export class TerminePageModule {}
