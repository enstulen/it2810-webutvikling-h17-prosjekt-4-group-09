import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http: Http) {
    console.log('Data service connected');
   }

   getTopListItems(page) {
    return this.http.get(`http://api.jowies.com/top/${page}`)
    .map(res => res.json());
  }
  getMap() {
   return this.http.get("https://mapsearch.eniro.com/search/search.json?callback=jQuery211014733662236314338_1509801093491&profile=no&index=yp_sp&q=a%20s%20vinmonopolet&BBOX=4.21875%2C56.96893619436121%2C12.073974609375%2C62.865168668923125&pageSize=500");
 }

}
