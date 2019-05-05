import { Component, OnInit } from '@angular/core';
import { ScrollParallaxService } from 'src/app/Services/scroll-parallax.service';

@Component({
  selector: 'app-fondo-home',
  templateUrl: './fondo-home.component.html',
  styleUrls: ['./fondo-home.component.css']
})
export class FondoHomeComponent implements OnInit {

  constructor(public _parallax: ScrollParallaxService) { }

  ngOnInit() {
  }




}
