import { Component, OnInit } from '@angular/core';
import { ScrollParallaxService } from 'src/app/Services/scroll-parallax.service';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-fondo-home',
  templateUrl: './fondo-home.component.html',
  styleUrls: ['./fondo-home.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class FondoHomeComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor(public _parallax: ScrollParallaxService) { }

  ngOnInit() {
  }




}
