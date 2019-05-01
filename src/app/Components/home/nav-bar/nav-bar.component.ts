import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  idiomaEsp: boolean = true;


  constructor(public appComponent: AppComponent) { }

  ngOnInit() {
  }


  cambioIdioma(idioma) {
    this.appComponent.cambiarLenguaje(idioma);
    this.idiomaEsp = !this.idiomaEsp;
  }
}
