import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifpageComponent } from './gifpage/gifpage.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    GifpageComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  exports:[
    GifpageComponent,
 
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
