import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { IdiomaService } from '../../../../Services/idioma.service';

@Component({
    selector: 'app-footer-home',
    templateUrl: './footer-home.component.html',
    styleUrls: ['./footer-home.component.css']
})
export class FooterHomeComponent implements OnInit {

    // tslint:disable-next-line:variable-name
    constructor(public _IdiomaService: IdiomaService, public appComponent: AppComponent) { }

    ngOnInit() {
    }

    cambioIdioma(idioma) {
        this._IdiomaService.cambiarLenguaje(idioma);
    }

}
