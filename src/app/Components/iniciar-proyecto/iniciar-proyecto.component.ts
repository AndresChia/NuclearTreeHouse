import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-proyecto',
  templateUrl: './iniciar-proyecto.component.html',
  styleUrls: ['./iniciar-proyecto.component.css']
})
export class IniciarProyectoComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor(private _router: Router) { }

  ngOnInit() {
  }


  router(parametro) {
    this._router.navigateByUrl('/' + parametro);
  }
}
