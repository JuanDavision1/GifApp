import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports:[
    //exportar el componente
    SidebarComponent
  ],
  imports: [
    CommonModule
  ]

})
export class SharedModule { }
