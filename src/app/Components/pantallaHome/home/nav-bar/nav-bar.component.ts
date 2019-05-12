import { Component, OnInit, HostListener } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { DomSanitizer } from '@angular/platform-browser';
import { ScrollParallaxService } from 'src/app/Services/scroll-parallax.service';
import { Router } from '@angular/router';
import { convertCompilerOptionsFromJson } from 'typescript';
import { IdiomaService } from '../../../../Services/idioma.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  // tslint:disable-next-line:variable-name
  // tslint:disable-next-line:no-unused-expression
  // tslint:disable-next-line:variable-name
  // tslint:disable-next-line:max-line-length
  // tslint:disable-next-line:variable-name
  constructor(public _IdiomaService: IdiomaService, public _parallax: ScrollParallaxService, public _router: Router) { }

  ngOnInit() {

  }

  efectoParallex() {
    // tslint:disable-next-line:prefer-const
    let posY = window.pageYOffset;
    console.log(posY);
    return { transform: 'translate(0px,' + posY + 'px)' };
  }

  router(parametro) {
    this._router.navigateByUrl('/' + parametro);
  }

  cambioIdioma(idioma) {
    this._IdiomaService.cambiarLenguaje(idioma);
  }

}
