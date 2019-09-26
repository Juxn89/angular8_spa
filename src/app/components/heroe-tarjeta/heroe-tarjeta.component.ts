import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: []
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe: any = {};
  @Input() idHero: number;
  @Output() heroSeleccionado: EventEmitter<number>;
  
  constructor(private _router: Router) {
      this.heroSeleccionado = new EventEmitter();
      
   }

  ngOnInit() {
  }

  verHero(idx: number) {
    this.heroSeleccionado.emit(this.idHero);
    // this._router.navigate(['/heroe', idx]);
  }
}
