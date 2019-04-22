import { Component, OnInit } from '@angular/core';
import { AppComponent } from "../../../app.component";
@Component({
    selector: 'app-footer-home',
    templateUrl: './footer-home.component.html',
    styleUrls: ['./footer-home.component.css']
})
export class FooterHomeComponent implements OnInit {

    idiomaEsp: boolean = true;
    // tslint:disable-next-line:variable-name
    constructor(public appComponent: AppComponent) { }

    ngOnInit() {
    }

    cambioIdioma(idioma) {
        this.appComponent.cambiarLenguaje(idioma);
        this.idiomaEsp = !this.idiomaEsp;
    }

}
