import { Component, OnInit } from '@angular/core';
// Cargamos el import del servicio de traducción de la librería
import { TranslateService } from '@ngx-translate/core';
// Por default dejamos el inglés
const defaultLanguage = "en";
// Y como adicional el español
const additionalLanguages = ["es"];
// Combinamos las traducciones disponibles al default.
const languages: string[] = [defaultLanguage].concat(additionalLanguages);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nuclearTreeHouse';
  constructor(private translate: TranslateService) { }


  ngOnInit() {
    // Asignamos el lenguaje predefinido y los disponibles
    this.translate.setDefaultLang(defaultLanguage);
    this.translate.addLangs(additionalLanguages);
    // Nos basamos en el lenguaje del navegador para cambiar el lenguaje
    let initLang = this.translate.getBrowserLang();
    if (languages.indexOf(initLang) === -1) {
      initLang = defaultLanguage;
    }
    // En base a lo anterior asignamos el lenguaje a usar
    this.translate.use(initLang);
  }


  public cambiarLenguaje(lang) {
    this.translate.use(lang);
  }


}


