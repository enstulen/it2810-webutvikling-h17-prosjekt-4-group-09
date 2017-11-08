import { Injectable } from "@angular/core";
import { Http, RequestOptions, Response , Headers } from "@angular/http";
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
	getMap() {
		return this.http.get(
			"https://mapsearch.eniro.com/search/search.json?callback=jQuery211014733662236314338_1509801093491&profile=no&index=yp_sp&q=a%20s%20vinmonopolet&BBOX=4.21875%2C56.96893619436121%2C12.073974609375%2C62.865168668923125&pageSize=500"
		);
	}

	getSpecificItem(id) {
		// id = "5060154910315"
		// http://it2810-09.idi.ntnu.no:3000/products/9891001
		const url = `http://it2810-09.idi.ntnu.no:3000/products/${id}`;
		return this.http.get(url).map(res => res.json());
	}

	getFavoriteItems(user_token) {
		// return this.http.get('http://api.jowies.com/barcode/${user_id}').map(res => res.json());
		// DENNE MÅ ENDRES  PÅ FOR Å HENTE BRUKERENS API
		/*return this.http
			.get('http://it2810-09.idi.ntnu.no:3000/favorites')
			.map(res => res.json());*/

		const url = 'http://it2810-09.idi.ntnu.no:3000/favorites';
		const headers = new Headers({

			'Content-Type': 'application/json',
			'token': user_token,
			'Authorization': user_token,

		});
		const options = new RequestOptions({ headers: headers });
		return this.http
		.get(url, options)
		.map((res: Response) => res.json());
	}

	defavoriteItem(item_id, user_token) {

	    console.log('TESTETSTSTS');
			const url = 'http://it2810-09.idi.ntnu.no:3000/favorites/' + item_id;
      const headers = new Headers({

        'Content-Type': 'application/json',
        'token': user_token,
        'Authorization': user_token,

      });

      const options = new RequestOptions({ headers: headers });
      return this.http
      .delete(url, options)
      .map((res: Response) => res);
	}

	favoriteItem(item_id, user_token) {

			const body: any = {};
			const url = 'http://it2810-09.idi.ntnu.no:3000/favorites/' + item_id;
			const headers = new Headers({

				'Content-Type': 'application/json',
				'token': user_token,
				'Authorization': user_token,

			});
			const options = new RequestOptions({ headers: headers });
			return this.http
			.post(url, body, options)
			.map((res: Response) => res);

			//this.http.post("http://it2810-09.idi.ntnu.no:3000/favorites/" + item_id, { headers:user_token, }).subscribe();
	}

	getFavItem(item_id, user_token) {

		console.log('TESTETSTT');
		const url = 'http://it2810-09.idi.ntnu.no:3000/favorites/' + item_id;
		const headers = new Headers({

			'Content-Type': 'application/json',
			'token': user_token,
			'Authorization': user_token,

		});
		const options = new RequestOptions({ headers: headers });
		return this.http
		.get(url, options)
		.map((res: Response) => res);

	}

	search(subString, page) {
		const to = page * this.itemsPerPage;
		const from = page * this.itemsPerPage - this.itemsPerPage;
		return this.http
			.get(
				`http://it2810-09.idi.ntnu.no:3000/products?search=${subString}&from=${from}&limit=${to}&sort=-apk`
			)
			.map(res => res.json());
	}
}
