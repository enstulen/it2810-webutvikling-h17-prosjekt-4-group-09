import { Component, OnInit, Input } from '@angular/core';
import {Item} from '../../interfaces/item';

@Component({
  selector: 'app-alcohol-item',
  templateUrl: './alcohol-item.component.html',
  styleUrls: ['./alcohol-item.component.css']
})
export class AlcoholItemComponent implements OnInit {
  @Input() item: Item;

  constructor() { }

  ngOnInit() {
  }

}
