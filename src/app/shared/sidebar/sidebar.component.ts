import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';
import { HttpClient } from '@angular/common/http';
import { SearchGIFResponce } from '../../gifs/interfaces/gif.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  
})
export class SidebarComponent {
  get historial(){
    return this.gifservice.historial
   }
constructor( private gifservice:GifsService){}
buscar(arg:string){
this.gifservice.AlmacenarGif(arg)
}
}
