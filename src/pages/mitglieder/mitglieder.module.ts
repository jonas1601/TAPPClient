import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MitgliederPage } from './mitglieder';

@NgModule({
  declarations: [
    MitgliederPage,
  ],
  imports: [
    IonicPageModule.forChild(MitgliederPage),
  ],
})
export class MitgliederPageModule {}
