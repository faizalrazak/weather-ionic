import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { Geolocation } from '@ionic-native/geolocation';
import { DetailPage } from '../detail/detail'

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

forecast : any;

  constructor(public navCtrl: NavController, public httpProvider : HttpProvider, public geolocation : Geolocation) {
  }

	  ionViewDidLoad(){

	  	this.geolocation.getCurrentPosition().then((resp) => {

	 	console.log(resp.coords.latitude)
		console.log(resp.coords.longitude)

		this.httpProvider.getCurrentForecast(resp.coords.latitude, resp.coords.longitude).subscribe(
			data => {

				this.forecast = data.list
          console.log(this.forecast)
        
        },
        err => console.log("error is "+ err), // error
        () => console.log('read users Completed '+ this.forecast) // complete
    	);

  	 }, (err) => {
      console.log(err);
    });  
  }

  detailTapped(weatherdetail){
  	this.navCtrl.push(DetailPage, {weather:weatherdetail})
  }
}
