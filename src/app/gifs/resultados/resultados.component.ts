import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
})
export class ResultadosComponent {
get resutados(){
  return this.gifservice.resultados
}
  constructor(private gifservice:GifsService){

}
}
