import { Component, OnInit } from '@angular/core';
import {Category} from '../../interfaces/category';

const redwine = '../assets/icons/categories/redwine.png';
const whitewine = '../assets/icons/categories/whitewine.png';
const spirits = '../assets/icons/categories/spirits.png';
const beer = '../assets/icons/categories/beer.png';
const sparklingwine = '../assets/icons/categories/sparklingwine.png';
const rosewine = '../assets/icons/categories/rosewine.png';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: [any];

  constructor() {

  }

  ngOnInit() {
    this.categories = [{title: 'Rødvin', id: 1, image: redwine, category: 'redwine'},
    {title: 'Hvitvin', id: 2, image: whitewine, category: 'whitewine'},
    {title: 'Brennevin', id: 3, image: spirits, category: 'spirits'},
    {title: 'Øl', id: 4, image: beer, category: 'beer'},
    {title: 'Musserende vin', id: 5, image: sparklingwine, category: 'sparklingwine'},
    {title: 'Rosévin', id: 6, image: rosewine, category: 'rosewine'},
    {title: 'Sterkvin', id: 7, image: spirits, category: 'strongwine'},
    {title: 'Perlende vin', id: 8, image: whitewine, category: 'pearlywine'},
    {title: 'Aromatisert vin', id: 9, image: redwine, category: 'aromaticwine'},
    {title: 'Sider', id: 10, image: beer, category: 'cider'},
    {title: 'Sake', id: 11, image: redwine, category: 'sake'},
    {title: 'Mjød', id: 12, image: beer, category: 'mjod'}];
  }

}
