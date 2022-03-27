import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { persona } from './persona.model';
import { LoginService } from './login/login.service';

@Injectable()
export class DataServices {
  constructor(private httpClient: HttpClient, private loginService:LoginService) {}

  listarPersonas() {
    const token = this.loginService.getIdToken();    
    return this.httpClient.get<persona[]>(
      'https://listadopersonas-angular-default-rtdb.firebaseio.com/datos.json?auth='+token
    );
  }

  guardarPersonas(personas: persona[]) {
    const token = this.loginService.getIdToken();
    this.httpClient
      .put(
        'https://listadopersonas-angular-default-rtdb.firebaseio.com/datos.json?auth='+token,
        personas
      )
      .subscribe(
        (Response) => console.log('mensaje de exito ', Response),
        (error) => console.log('mensaje de error ', error)
      );
  }
  modificarPersona(indice: number, persona: persona) {
    const token = this.loginService.getIdToken();
    let url =
      'https://listadopersonas-angular-default-rtdb.firebaseio.com/datos/' +
      indice +
      '.json?auth='+token;
    this.httpClient.put(url, persona).subscribe(
      (Response) => console.log('mensaje de exito ', Response),
      (error) => console.log('mensaje de error ', error)
    );
  }
  eliminarPersonas(indice: number) {
    const token = this.loginService.getIdToken();
    let url =
      'https://listadopersonas-angular-default-rtdb.firebaseio.com/datos/' +
      indice +
      '.json?auth='+token;
    this.httpClient.delete(url).subscribe(
      (Response) => console.log('mensaje de exito ', Response),
      (error) => console.log('mensaje de error ', error)
    );
  }
}
