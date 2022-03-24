import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { persona } from './persona.model';

@Injectable()
export class DataServices {
  constructor(private httpClient: HttpClient) {}

  listarPersonas() {
    return this.httpClient.get<persona[]>(
      'https://listadopersonas-angular-default-rtdb.firebaseio.com/datos.json'
    );
  }

  guardarPersonas(personas: persona[]) {
    this.httpClient
      .put(
        'https://listadopersonas-angular-default-rtdb.firebaseio.com/datos.json',
        personas
      )
      .subscribe(
        (Response) => console.log('mensaje de exito ', Response),
        (error) => console.log('mensaje de error ', error)
      );
  }
  modificarPersona(indice: number, persona: persona) {
    let url =
      'https://listadopersonas-angular-default-rtdb.firebaseio.com/datos/' +
      indice +
      '.json';
    this.httpClient.put(url, persona).subscribe(
      (Response) => console.log('mensaje de exito ', Response),
      (error) => console.log('mensaje de error ', error)
    );
  }
  eliminarPersonas(indice: number) {
    let url =
      'https://listadopersonas-angular-default-rtdb.firebaseio.com/datos/' +
      indice +
      '.json';
    this.httpClient.delete(url).subscribe(
      (Response) => console.log('mensaje de exito ', Response),
      (error) => console.log('mensaje de error ', error)
    );
  }
}
