import { Component, OnInit, Input } from '@angular/core';
import {Item} from '../../interfaces/item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alcohol-item',
  templateUrl: './alcohol-item.component.html',
  styleUrls: ['./alcohol-item.component.css']
})
export class AlcoholItemComponent implements OnInit {
  @Input() item: Item;

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  goToItem(id) {

    console.log("TEST");
    this.router.navigate(['/products', id], id);
  }

}
