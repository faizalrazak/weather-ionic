import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class HttpProvider {

  constructor(public http: Http) {
    console.log('Hello HttpProvider Provider');
  }

  getCurrentWeather(lat, long){

  	return this.http.get('http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=8131be7e3e6b2014b3af931e011bd730')
  	.map(res => res.json())

  }

  getCurrentForecast(lat, long){

  	return this.http.get('http://api.openweathermap.org/data/2.5/forecast/daily?lat='+lat+'&lon='+long+'&appid=8131be7e3e6b2014b3af931e011bd730')
  	.map(res => res.json())
  }

}