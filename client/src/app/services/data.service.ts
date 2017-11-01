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

  getSpecificItem(id) {
    //id = "5060154910315"
    console.log(this.http.get(`http://api.jowies.com/barcode/${id}`));
   return this.http.get(`http://api.jowies.com/barcode/${id}`)
   .map(res => res.json());

 }


}
