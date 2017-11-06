import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Item } from '../../interfaces/item';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  items: [Item];
  user_id: string;

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit() {

    this.dataService.getFavoriteItems(this.user_id).subscribe(items => {

        this.items = items;
    });

  }

  deFavoriteItem(item) {

    var index = this.items.indexOf(item);
    this.items.splice(index, 1);

    this.dataService.defavoriteItem(0,0);

  }

}
