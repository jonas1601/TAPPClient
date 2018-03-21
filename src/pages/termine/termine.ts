import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-termine',
  templateUrl: 'termine.html',
})
export class TerminePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  showCheckbox(){
    let alert = this.alertCtrl.create();
    alert.setTitle('Welche Termine möchten sie anzeigen?');

    alert.addInput({
      type: 'checkbox',
      label: 'Warendorfer Sportunion',
      value: 'value1',
      checked: false
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Orchesterverein Freckenhorst',
      value: 'value1',
      checked: true
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Checkbox data:', data);
        //this.testCheckboxOpen = false;
        //this.testCheckboxResult = data;
      }
    });
    alert.present();

  }

  

}
