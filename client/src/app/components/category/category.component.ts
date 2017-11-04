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
			.getCategory(`category/${this.category}`, this.scrollNumber)
			.subscribe(items => {
				for (let i = 0; i < items.length; i++) {
					this.items.push(items[i]);
				}
				this.scrollNumber += 1;
			});
	}

	constructor(private dataService: DataService, private router: Router) {
		this.scrollNumber = 1;
	}

	ngOnInit() {
		this.category = this.router.url.split("/")[2];
		this.categoryNor = this.mapping[this.category];
		this.dataService
			.getCategory(`${this.category}`, this.scrollNumber)
			.subscribe(items => {
				this.items = items;
			});
	}
}
