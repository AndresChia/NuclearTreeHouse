import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {



  constructor(public translate: TranslateService) {
    this.translate.setDefaultLang("es");
    this.translate.use("es");
  }




  public cambiarLenguaje(lang) {
    this.translate.use(lang);
  }

  cambioIdioma(idioma) {
    this.cambiarLenguaje(idioma);
  }

  getIdioma() {
    return this.translate.currentLang;
  }

}
