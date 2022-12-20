import { Component,ElementRef,ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  
})
export class BusquedaComponent {
  //este decorador busca el elemento que quiero por html o clase o por id o por referencia local creada #txt buscar
  //busca e elemento y lo asigna
  // (!) asegurarse que el objeto no sera nullo
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
 //aqui se usa el servicio ya que hace el almacenamiento del data y para esto se inyecta
  constructor(private gifservice:GifsService){}


buscar(){

 const valor =  this.txtBuscar.nativeElement.value
 if(valor.trim().length === 0){
  return ;
 }
this.gifservice.AlmacenarGif(valor)
 this.txtBuscar.nativeElement.value='';
}
}
