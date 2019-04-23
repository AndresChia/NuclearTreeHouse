import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { EspecificacionComponent } from './Components/especificacion/especificacion.component';
import { NavBarComponent } from './Components/home/nav-bar/nav-bar.component';
import { FondoHomeComponent } from './Components/home/fondo-home/fondo-home.component';
import { PotencialComponent } from './Components/potencial/potencial.component';
import { FooterHomeComponent } from "./Components/home/footer-home/footer-home.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EspecificacionComponent,
    NavBarComponent,
    FondoHomeComponent,
    PotencialComponent,
    FooterHomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
