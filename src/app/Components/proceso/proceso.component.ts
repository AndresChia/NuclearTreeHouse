import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdiomaService } from 'src/app/Services/idioma.service';

@Component({
  selector: 'app-proceso',
  templateUrl: './proceso.component.html',
  styleUrls: ['./proceso.component.css']
})
export class ProcesoComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor(private _router: Router, public _IdiomaService: IdiomaService) { }

  ngOnInit() {
  }

  router(parametro) {
    this._router.navigateByUrl('/' + parametro);
  }
}
