import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

	weather : any

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	this.weather = navParams.get('weather')

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
