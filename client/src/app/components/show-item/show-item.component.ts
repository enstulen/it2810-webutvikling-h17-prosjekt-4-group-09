import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Item } from '../../interfaces/item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.css']
})
export class ShowItemComponent implements OnInit {

  item: Item;
  apkValue: number;
  is_favorite: boolean;
  is_logged_in: boolean;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    window.scrollTo(0, 0);

    this.is_logged_in = false; // Her må det hentes fra API om brukeren er logget inn
    if(localStorage.getItem("token")) {
      this.is_logged_in = true;
    }

    this.is_favorite = true; // Her må det hentes fra API om brukeren har fovorisert denne varen
    console.log(this.router.url.split('/')[2]);
    this.dataService.getSpecificItem(this.router.url.split('/')[2]).subscribe(item => {
      this.item = item;
      this.apkValue = Math.round(((item.abv * (item.containerSize * 10)) / item.price) * 100) / 100;

      const token = "Bearer " +  localStorage.getItem("token");
      this.dataService.getFavItem(this.item._id, token).subscribe( item => {

        console.log(item.text());
        if (item.text() === 'true') {

          this.is_favorite = true;
        } else {

          this.is_favorite = false;
        }

      });

    });

  }

  favouriteItem(item_id) {

    if (!this.is_favorite) {

      const token = "Bearer " +  localStorage.getItem("token");
      this.dataService.favoriteItem(item_id, token).subscribe(response => {
        console.log(response);

      });
      this.is_favorite = !this.is_favorite;
    } else {

      const token = "Bearer " +  localStorage.getItem("token");
      this.dataService.defavoriteItem(item_id, token).subscribe(response => {
        console.log(response);
      });
      this.is_favorite = !this.is_favorite;
    }
  }

}
