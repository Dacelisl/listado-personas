import { Injectable } from '@angular/core';
import { persona } from './persona.model';
@Injectable()
export class PersonaService {
  constructor() {}
  personas: persona[] = [
    new persona('juan', 'perez'),
    new persona('camilo', 'diaz'),
  ];
  agregando(persona: persona) {
    this.personas.push(persona);
  }
  eliminar(indice:number){
    this.personas.splice(indice,1)
  }
  encontrarPersona(index: number) {
    let encontrado = this.personas[index];
    return encontrado;
  }
  modificarPersona(indice: number, persona: persona) {
    let nuevo = this.personas[indice];
    nuevo.nombre = persona.nombre;
    nuevo.apellido = persona.apellido;
  }
}
