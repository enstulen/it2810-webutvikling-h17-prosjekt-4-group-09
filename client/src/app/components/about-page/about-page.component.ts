import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  lat: number = 58.4618;
  lng: number = 8.7724;

  constructor() { }

  ngOnInit() {
  }

}
