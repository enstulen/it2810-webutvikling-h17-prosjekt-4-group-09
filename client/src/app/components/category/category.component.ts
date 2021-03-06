import { Component, OnInit, Input } from "@angular/core";
import { AlcoholItemComponent } from "../alcohol-item/alcohol-item.component";
import { Item } from "../../interfaces/item";
import { DataService } from "../../services/data.service";
import { Router } from "@angular/router";

@Component({
	selector: "app-category",
	templateUrl: "./category.component.html",
	styleUrls: ["./category.component.css"]
})
export class CategoryComponent implements OnInit {
	category: string;
	items: [Item];
	scrollNumber: number;
	categoryNor: string;
	selectSort = "APK synkende";
	sort: string;

	mapping = {
		redwine: "Rødvin",
		whitewine: "Hvitvin",
		spirits: "Brennevin",
		beer: "Øl",
		sparklingwine: "Musserende vin",
		rosewine: "Rosévin",
		strongwine: "Sterkvin",
		pearlywine: "Perlende vin",
		aromaticwine: "Aromatisert vin",
		cider: "Sider",
		sake: "Sake",
		mjod: "Mjød"
	};

	onScroll() {
		this.dataService
			.getCategory(this.category, this.scrollNumber, this.sort)
			.subscribe(items => {
				for (let i = 0; i < items.length; i++) {
					this.items.push(items[i]);
				}
				this.scrollNumber += 1;
			});
	}

	constructor(private dataService: DataService, private router: Router) {
		this.scrollNumber = 2;
		this.sort = "-apk";
	}

	valueChange(){
		console.log(this.selectSort);
		if (this.selectSort == "Pris synkende"){
			this.sort = "-price";
		}

		else if (this.selectSort == "Pris stigende"){
			this.sort = "price";
			console.log("Dette er stigende");
		}
		else if(this.selectSort == "APK synkende"){
			this.sort = "-apk";
			console.log("Dette er  APK synkende");
		}
		else if (this.selectSort == "APK stigende") {
			this.sort = "apk";
			console.log("Dette er APK stigende");
		}


		this.category = this.router.url.split("/")[2];
		this.categoryNor = this.mapping[this.category];
		this.dataService.getCategory(this.category, 1, this.sort).subscribe(items => {
			this.items = items;
		});
	}


	ngOnInit() {
		this.category = this.router.url.split("/")[2];
		this.categoryNor = this.mapping[this.category];
		this.dataService.getCategory(this.category, 1, this.sort).subscribe(items => {
			this.items = items;
		});
	}
}
