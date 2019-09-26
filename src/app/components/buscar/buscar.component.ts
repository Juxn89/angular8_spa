import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {  
  _heroes: any[] = [];
  termino: string;

  constructor(private _activatedRouter: ActivatedRoute,
              private heroesServices: HeroesService) {
      this._activatedRouter.params.subscribe(params => {
          this.termino = params['heroe'];
          this._heroes = heroesServices.buscarHereos(params['heroe']);
      });
  }

  ngOnInit() {
  }

}
