import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// COMPONENTES
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

// RUTAS
import {APP_ROUTING} from './app.routes';

// SERVICES
import { HeroesService } from './servicios/heroes.service';
import { HereoComponent } from './components/hereo/hereo.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HereoComponent,
    BuscarComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING // aqui se importa la ruta
  ],
  providers: [
    HeroesService // aquí se agregan todos los servicios que ocuparemos
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
