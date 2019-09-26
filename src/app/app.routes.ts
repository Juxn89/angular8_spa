import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {AboutComponent} from './components/about/about.component';
import {HereoComponent} from './components/hereo/hereo.component';
import { BuscarComponent } from './components/buscar/buscar.component';

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'heroes', component: HeroesComponent},
    {path: 'about', component: AboutComponent},
    {path: 'heroe/:id', component: HereoComponent},
    {path: 'buscar/:heroe', component: BuscarComponent},
    {path: '**', pathMatch: 'full', redirectTo: ''} /* Esta linea 
    indica que si no hace match con ninguna de las rutas, la 
    re-direcciona a una por defecto.*/
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
/*
    Con el useHash nos permitira mandar parámetros sin perder la referencia
    export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
*/
