import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proceso',
  templateUrl: './proceso.component.html',
  styleUrls: ['./proceso.component.css']
})
export class ProcesoComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor(private _router: Router) { }

  ngOnInit() {
  }

  router(parametro) {
    this._router.navigateByUrl('/' + parametro);
  }
}
