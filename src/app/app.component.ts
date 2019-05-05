import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nuclearTreeHouse';
  constructor(private translate: TranslateService) { }


  ngOnInit() {
    this.translate.setDefaultLang("es");
    this.translate.use("es");
  }


  public cambiarLenguaje(lang) {
    this.translate.use(lang);
  }


}


