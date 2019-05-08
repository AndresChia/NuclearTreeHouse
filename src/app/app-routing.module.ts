import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/pantallaHome/home/home.component';
import { CreadorComponent } from './Components/creador/creador.component';
import { ProcesoComponent } from './Components/proceso/proceso.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'Home', component: AppComponent },
  { path: 'Creador', component: CreadorComponent },
  { path: 'Proceso', component: ProcesoComponent },
  { path: 'Proyectos', component: ProyectosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'Home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
