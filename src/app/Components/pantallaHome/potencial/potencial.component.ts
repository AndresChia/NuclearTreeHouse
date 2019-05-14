import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-potencial',
  templateUrl: './potencial.component.html',
  styleUrls: ['./potencial.component.css']
})
export class PotencialComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor(public _router: Router) { }

  ngOnInit() {
  }

  router(parametro) {
    this._router.navigateByUrl('/' + parametro);
  }
}
