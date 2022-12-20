import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGIFResponce, Gif } from '../interfaces/gif.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apikey: string = 'lGUQaoXJxCRHXAf8Fn5oqpKsVQalqr5d';
  private servicioUl:string ='https://api.giphy.com/v1/gifs';
  //servicios almacenamiento de datos
  private _historial: string[] = [];
  //poner ya que al hacer modificacion a la funcion podria modificar el arreglo original
  public resultados: Gif[] = [];

  get historial(): string[] {
    return [...this._historial];
  }
  constructor(private http: HttpClient) {
    //se coloca aca el local storage ya que esto se ejecuta una vez por refresh
    this._historial = JSON.parse(localStorage.getItem('Historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('Resultado')!) || [];
  }

  //insetar valores al historial
  AlmacenarGif(query: string) {
    query = query.trim().toLowerCase();
    //mirar repetidos
    if (!this._historial.includes(query)) {
      //insertar en la primera posicion
      this._historial.unshift(query);
      //dejar solo los 10 primeros
      this._historial = this._historial.splice(0, 10);
      //json tiene una propiedad stringify que hace que coge cualquiero objeto y lo transforma en string
      localStorage.setItem('Historial', JSON.stringify(this._historial));
    }

    console.log(this._historial);
    // angular ofrece peticiones http ponerles el tipado generico
    const params = new HttpParams().set('api_key',this.apikey)
                                    .set('limit','10')
                                    .set('q',query)
    this.http
      .get<SearchGIFResponce>(
        `${this.servicioUl}/search`,{params:params})
      .subscribe((response) => {
        console.log(response.data);
        this.resultados = response.data;
        localStorage.setItem('Resultado', JSON.stringify(this.resultados));
      });
  }
}
