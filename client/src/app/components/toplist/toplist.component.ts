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
	selectSort = "APK synkende";
	sort: string;


	onScroll() {
		this.dataService.getTopListItems(this.scrollNumber, this.sort).subscribe(items => {
			for (let i = 0; i < items.length; i++) {
				this.items.push(items[i]);
			}
			this.scrollNumber += 1;
		});
	}

	constructor(private dataService: DataService) {
		this.scrollNumber = 2;
		this.sort = "-apk";
	}

	valueChange(){
		if (this.selectSort == "Pris synkende"){
			this.sort = "-price";
		}
		else if (this.selectSort == "Pris stigende"){
			this.sort = "price";
		}
		else if(this.selectSort == "APK synkende"){
			this.sort = "-apk";
		}
		else if (this.selectSort == "APK stigende") {
			this.sort = "apk";
		}


		this.dataService.getTopListItems(1, this.sort).subscribe(items => {
			this.items = items;
		});
	}


	ngOnInit() {
		this.dataService.getTopListItems(1, this.sort).subscribe(items => {
			this.items = items;
		});
	}
}
