import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the MitgliederPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mitglieder',
  templateUrl: 'mitglieder.html',
})
export class MitgliederPage {

  radioOpen: boolean;

  items = [
      'Anna',
      'Frank',
      'Therese',
      'Heinz'
  ];
  radioResult;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {
  }
/*
  doRadio() {
    let alert = this.alerCtrl.create();
    alert.setTitle('Gruppe wählen');

    alert.addInput({
      type: 'radio',
      label: 'Gruppe 1',
      value: 'gruppe1',
      checked: true
    });
    alert.addInput({
      type: 'radio',
      label: 'Gruppe 2',
      value: 'gruppe2',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'Gruppe 3',
      value: 'gruppe3',
      checked: false
    });



    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Radio data:', data);
        this.radioOpen = false;
        this.radioResult = data;
      }
    });

    alert.present().then(() => {
      this.radioOpen = true;
    });
  }*/
  ionViewDidLoad() {
    console.log('ionViewDidLoad MitgliederPage');
  }


}