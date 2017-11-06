import { Component, OnInit } from "@angular/core";
import { AlcoholItemComponent } from "../alcohol-item/alcohol-item.component";
import { Item } from "../../interfaces/item";
import { DataService } from "../../services/data.service";

@Component({
	selector: "app-toplist",
	templateUrl: "./toplist.component.html",
	styleUrls: ["./toplist.component.css"]
})
export class ToplistComponent implements OnInit {
	items: [Item];
	scrollNumber: number;

	onScroll() {
		this.dataService.getTopListItems(this.scrollNumber).subscribe(items => {
			for (let i = 0; i < items.length; i++) {
				this.items.push(items[i]);
			}
			this.scrollNumber += 1;
		});
	}

	constructor(private dataService: DataService) {
		this.scrollNumber = 2;
	}

	getDecreasingPrice(){
		console.log("pris synkende");
	}

	getIncreasingPrice(){
		console.log("pris stigende");
	}

	getDecreasingAPK(){
		console.log("APK synkende");
	}

	getIncreasingAPK(){
		console.log("APK stigende");
	}

	ngOnInit() {
		this.dataService.getTopListItems(1).subscribe(items => {
			this.items = items;
		});
	}
}
