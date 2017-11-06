import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { MessageService } from "../../services/message.service";
import { Item } from "../../interfaces/item";
import { DataService } from "../../services/data.service";

@Component({
	selector: "app-search",
	templateUrl: "./search.component.html",
	styleUrls: ["../toplist/toplist.component.css"]
})
export class SearchComponent implements OnInit {
	message: any;
	subscription: Subscription;
	items: [Item];
	scrollNumber: number;
	showInfoHeader = false;
	sub: any;

	constructor(
		private messageService: MessageService,
		private dataService: DataService
	) {
		this.scrollNumber = 2;
	}

	onScroll() {
		this.dataService
			.search(this.message.text, this.scrollNumber)
			.subscribe(items => {
				for (let i = 0; i < items.length; i++) {
					this.items.push(items[i]);
				}
				this.scrollNumber += 1;
			});
	}

	ngOnInit() {
		// subscribe to home component messages
		this.subscription = this.messageService.getMessage().subscribe(message => {
			this.showInfoHeader = false;
			this.message = message;
			if (this.sub) {
				this.sub.unsubscribe();
			}
			this.sub = this.dataService
				.search(this.message.text, 1)
				.subscribe(items => {
					if (items.length === 0) {
						this.showInfoHeader = true;
					}
					this.items = items;
				});
		});
	}
}
