import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router, RouterState } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nuclearTreeHouse';
  // tslint:disable-next-line:variable-name
  constructor(private translate: TranslateService, public router: Router) { }
  estado = this.router.routerState.snapshot.url;
  isHome = true;

  ngOnInit() {
    this.translate.setDefaultLang("es");
    this.translate.use("es");
  }


  public cambiarLenguaje(lang) {
    this.translate.use(lang);
  }

  arregloRouting() {
    const state = this.router.routerState.snapshot.url;
    if (state + "" === "/Home") {
      return true;
    } else {
      return false;
    }
  }

  regresarClase() {
    return "containerRoter " + (this.router.routerState.snapshot.url).split("/")[1];
  }

}


