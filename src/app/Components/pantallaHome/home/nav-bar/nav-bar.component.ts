import { Component, OnInit, HostListener } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { DomSanitizer } from '@angular/platform-browser';
import { ScrollParallaxService } from 'src/app/Services/scroll-parallax.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  idiomaEsp: boolean = true;

  // tslint:disable-next-line:variable-name
  // tslint:disable-next-line:no-unused-expression
  // tslint:disable-next-line:variable-name
  constructor(public appComponent: AppComponent, private _sanitizer: DomSanitizer, public _parallax: ScrollParallaxService) { }

  ngOnInit() {
  }


  cambioIdioma(idioma) {
    this.appComponent.cambiarLenguaje(idioma);
    this.idiomaEsp = !this.idiomaEsp;
  }

  efectoParallex() {
    let posY = window.pageYOffset;
    console.log(posY);
    return { transform: 'translate(0px,' + posY + 'px)' };
  }


}
