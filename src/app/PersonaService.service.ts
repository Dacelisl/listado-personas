import { Injectable } from '@angular/core';
import { DataServices } from './data.service';
import { persona } from './persona.model';
@Injectable()
export class PersonaService {
  constructor(private dataService: DataServices) {}
  personas: persona[] = [];

  setPersonas(personas: persona[]) {
    this.personas = personas;
  }

  listar() {
    return this.dataService.listarPersonas();
  }
  agregando(persona: persona) {
    if (this.personas == null) {
      this.personas = [];
    }
    this.personas.push(persona);
    this.dataService.guardarPersonas(this.personas);
  }
  eliminar(indice: number) {
    this.personas.splice(indice, 1);
    this.dataService.eliminarPersonas(indice);
    this.recargarDatos();
  }
  recargarDatos() {
    if (this.personas != null) {
      this.dataService.guardarPersonas(this.personas);
    }
  }
  encontrarPersona(index: number) {
    let encontrado = this.personas[index];
    return encontrado;
  }
  modificarPersona(indice: number, persona: persona) {
    let nuevo = this.personas[indice];
    nuevo.nombre = persona.nombre;
    nuevo.apellido = persona.apellido;
    this.dataService.modificarPersona(indice, persona);
  }
}
