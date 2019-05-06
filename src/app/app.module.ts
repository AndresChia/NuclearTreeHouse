import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ParallaxModule, ParallaxConfig } from 'ngx-parallax';

import { HomeComponent } from './Components/pantallaHome/home/home.component';
import { EspecificacionComponent } from './Components/pantallaHome/especificacion/especificacion.component';
import { NavBarComponent } from './Components/pantallaHome/home/nav-bar/nav-bar.component';
import { FondoHomeComponent } from './Components/pantallaHome/home/fondo-home/fondo-home.component';
import { PotencialComponent } from './Components/pantallaHome/potencial/potencial.component';
import { FooterHomeComponent } from './Components/pantallaHome/home/footer-home/footer-home.component';
import { FooterComponent } from './Components/pantallaHome/footer/footer.component';
import { ProcesoComponent } from './Components/proceso/proceso.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';
import { CreadorComponent } from './Components/creador/creador.component';




export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EspecificacionComponent,
    NavBarComponent,
    FondoHomeComponent,
    PotencialComponent,
    FooterHomeComponent,
    FooterComponent,
    ProcesoComponent,
    ProyectosComponent,
    CreadorComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatMenuModule,
    ParallaxModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' },
  { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
