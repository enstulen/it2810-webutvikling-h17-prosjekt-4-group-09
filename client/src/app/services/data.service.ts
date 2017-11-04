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

  getSpecificItem(id) {
    //id = "5060154910315"
    //http://it2810-09.idi.ntnu.no:3000/products/9891001
    var url = `http://it2810-09.idi.ntnu.no:3000/products/${id}`;
   return this.http.get(url)
   .map(res => res.json());

  }

  getFavoriteItems(user_id) {

    //return this.http.get('http://api.jowies.com/barcode/${user_id}').map(res => res.json());
    // DENNE MÅ ENDRES  PÅ FOR Å HENTE BRUKERENS API
    return this.http.get('http://api.jowies.com/category/beer/1').map(res => res.json());
  }

  defavoriteItem(item_id, user_id) {


  }

}
