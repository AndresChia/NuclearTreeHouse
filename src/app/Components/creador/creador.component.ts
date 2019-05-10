import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creador',
  templateUrl: './creador.component.html',
  styleUrls: ['./creador.component.css']
})
export class CreadorComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor(public _router: Router) { }

  ngOnInit() {
    document.body.style.overflow = "initial";
  }

  router(parametro) {
    this._router.navigateByUrl('/' + parametro);
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy(): void {
    document.body.style.overflow = "visible";
  }


}
