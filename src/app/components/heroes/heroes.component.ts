import { Component, OnInit } from '@angular/core';
import {HeroesService, Hero} from '../../servicios/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private _heroesService: HeroesService,
              private _router: Router
    ) {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.heroes = this._heroesService.getHeroes();
  }

  verHero(idx: number) {
    this._router.navigate(['/heroe', idx]);
  }
}
