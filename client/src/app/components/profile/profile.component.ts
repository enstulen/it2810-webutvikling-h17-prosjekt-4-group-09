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

    const token = "Bearer " +  localStorage.getItem("token");
    this.getItems(token);
  }

  getItems(token) {

    this.dataService.getFavoriteItems(token).subscribe(items => {

        console.log(items);
        this.items = items;
    });

  }

  deFavoriteItem(item) {

    //const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhMDJkMzUyMmI5MThiMzQ4Njk2ZWZmMiIsImlhdCI6MTUxMDEzNDYzMX0.NVSHw0rHV6OsjxPCfUpR2-4CAFhewRZhNsj4fYqbUcI";
    const token = "Bearer " +  localStorage.getItem("token");

    this.dataService.defavoriteItem(item._id, token).subscribe(response => {
        console.log(response);

    });
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  goToItem(id) {

    this.router.navigate(['/products', id], id);
  }

}
