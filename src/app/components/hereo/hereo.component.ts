import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Para recivir parametros por URL
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-hereo',
  templateUrl: './hereo.component.html'
})
export class HereoComponent {
  hero: any = {};
  constructor(private activatedRouted: ActivatedRoute,
              private _heroServices: HeroesService) {
    this.activatedRouted.params.subscribe(params => {
      console.log(params['id']);
      this.hero = _heroServices.getHero(params['id']);
    });
  }
}
