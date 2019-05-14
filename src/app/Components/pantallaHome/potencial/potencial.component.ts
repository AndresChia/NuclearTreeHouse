import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollParallaxService } from 'src/app/Services/scroll-parallax.service';

@Component({
  selector: 'app-potencial',
  templateUrl: './potencial.component.html',
  styleUrls: ['./potencial.component.css']
})
export class PotencialComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor(public _router: Router,public _ScrollParallaxService:ScrollParallaxService) { }

  ngOnInit() {
  }

  router(parametro) {
    this._router.navigateByUrl('/' + parametro);
  }
}
