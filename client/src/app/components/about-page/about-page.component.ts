import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})


export class AboutPageComponent implements OnInit {


  lat: number = 63.433384;
  lng: number = 10.396452;

  lat1: number = 63.431583;
  lng1: number = 10.399805;

  lat2: number = 63.436556;
  lng2: number = 10.412593;

  lat3: number = 63.424885;
  lng3: number = 10.442774;

  lat4: number = 63.445843;
  lng4: number = 10.446545;

  lat5: number = 59.95759582519531;
  lng5: number = 11.048328399658203;

  constructor() { }

  ngOnInit() {
  }

//
//   document.getElementById('pol.txt').onchange = function(){
//
//     var file = this.files[0];
//
//     var reader = new FileReader();
//     reader.onload = function(progressEvent){
//       // Entire file
//       console.log(this.result);
//
//       // By lines
//       var lines = this.result.split('\n');
//       for(var line = 0; line < lines.length; line++){
//         console.log(lines[line]);
//       }
//     };
//     reader.readAsText(file);
// };

}
