import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class DataService {
	itemsPerPage = 25;

	constructor(public http: Http) {
		console.log("Data service connected");
	}

	getTopListItems(page) {
		const to = page * this.itemsPerPage;
		const from = page * this.itemsPerPage - this.itemsPerPage;
		console.log(to);
		console.log(from);
		return this.http
			.get(
				`http://it2810-09.idi.ntnu.no:3000/products?from=${from}&limit=${to}&sort=-apk`
			)
			.map(res => res.json());
	}
	getCategory(category, page) {
		const to = page * this.itemsPerPage;
		const from = page * this.itemsPerPage - this.itemsPerPage;
		return this.http
			.get(
				`http://it2810-09.idi.ntnu.no:3000/products?category=${category}&from=${from}&limit=${to}&sort=-apk`
			)
			.map(res => res.json());
	}

	getSpecificItem(id) {
		// id = "5060154910315"
		console.log(this.http.get(`http://api.jowies.com/barcode/${id}`));
		return this.http
			.get(`http://api.jowies.com/barcode/${id}`)
			.map(res => res.json());
	}
}
