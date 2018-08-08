import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Device } from '@ionic-native/device';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public uuid: string = '---';
  public serialNumber: string = '---';
  constructor(public navCtrl: NavController,
    private device: Device) {
  }

  public showInfo() {
    this.uuid = this.device.uuid;
    this.serialNumber = this.device.serial;
  }

}
