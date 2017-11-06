import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http: Http) {
    console.log('Data service connected');
   }

   getTopListItems(page) {
     console.log("yoyo");
    return this.http.get(`http://api.jowies.com/top/${page}`)
    .map(res => res.json());
  }

  getItemsByDescendingPoints(page) {
   return this.http.get(`http://it2810-09.idi.ntnu.no:3000/products?sort=-apk${page}`)
   .map(res => res.json());
  }

  getItemsByIncreasingPoints(page) {
    console.log("shallabais");
   return this.http.get(`http://it2810-09.idi.ntnu.no:3000/products?sort=apk${page}`)
   .map(res => res.json());
  }

  getItemsByDescendingPrice(page) {
   return this.http.get(`http://it2810-09.idi.ntnu.no:3000/products?sort=-price${page}`)
   .map(res => res.json());
  }

  getItemsByIncreasingPrice(page) {
   return this.http.get(`http://it2810-09.idi.ntnu.no:3000/products?sort=price${page}`)
   .map(res => res.json());
  }

  getCategory(category, page) {
    return this.http.get(`http://api.jowies.com/${category}/${page}`)
    .map(res => res.json());
  }

  getSpecificItem(id) {
    //id = "5060154910315"
    console.log(this.http.get(`http://api.jowies.com/barcode/${id}`));
   return this.http.get(`http://api.jowies.com/barcode/${id}`)
   .map(res => res.json());

 }


}
