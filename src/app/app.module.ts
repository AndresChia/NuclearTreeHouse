import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterHomeComponent } from './Components/home/footer-home/footer-home.component';
import { EspecificacionComponent } from './Components/especificacion/especificacion.component';
import { NavBarComponent } from './Components/home/nav-bar/nav-bar.component';
import { FondoHomeComponent } from './Components/home/fondo-home/fondo-home.component';
import { PotencialComponent } from './Components/potencial/potencial.component';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { FooterComponent } from './Components/footer/footer.component';

import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';


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
    FooterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatMenuModule,
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
