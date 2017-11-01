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
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {

    console.log(this.router.url.split('/'))
    this.dataService.getSpecificItem(this.router.url.split('/')[2]).subscribe(item => {
      this.item = item;
      this.apkValue = Math.round(((item.abv * (item.containerSize * 10)) / item.price) * 100) / 100;
    });
  }
}
