import { Component, OnInit } from '@angular/core';
import { AlcoholItemComponent } from '../alcohol-item/alcohol-item.component';
import { Item } from '../../interfaces/item';

@Component({
  selector: 'app-toplist',
  templateUrl: './toplist.component.html',
  styleUrls: ['./toplist.component.css']
})
export class ToplistComponent implements OnInit {
  items: [Item];

  constructor() { }

  ngOnInit() {
    // this.dataService.getPosts().subscribe(items => {
    //   console.log(items);
    //   this.items = items;
    // });
    this.items = [{
      id: 1254,
      name: 'Testing name1',
      number: 45,
      abv: 20,
      apk: 2.03,
      price: 299,
      containerSize: 2,
      points: 60
    }, {
      id: 8945,
      name: 'Testing name2',
      number: 45,
      abv: 20,
      apk: 2.03,
      price: 299,
      containerSize: 2,
      points: 60
    },
    {
      id: 2345,
      name: 'Testing name3',
      number: 45,
      abv: 20,
      apk: 2.03,
      price: 299,
      containerSize: 2,
      points: 60
    },
    {
      id: 2112,
      name: 'Testing name4',
      number: 45,
      abv: 20,
      apk: 2.03,
      price: 299,
      containerSize: 2,
      points: 60
    }];
  }

}

