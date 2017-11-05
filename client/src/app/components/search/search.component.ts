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
		// subscribe to home component messages
		this.subscription = this.messageService.getMessage().subscribe(message => {
			this.showInfoHeader = false;
			this.message = message;
			if (this.sub) {
				this.sub.unsubscribe();
			}
			this.sub = this.dataService.search(this.message.text).subscribe(items => {
				if (items.length === 0) {
					this.showInfoHeader = true;
				}
				this.items = items;
			});
		});
	}

	ngOnInit() {}
}
