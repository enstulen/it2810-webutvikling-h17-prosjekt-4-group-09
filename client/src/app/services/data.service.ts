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
  getCategory(category, page) {
    return this.http.get(`http://api.jowies.com/${category}/${page}`)
    .map(res => res.json());
  }

}
