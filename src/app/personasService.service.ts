import { Injectable } from '@angular/core';
import { LogingService } from './LogingService.service';
import { persona } from './persona.model';
@Injectable()
export class personasService {
    
  personas: persona[] = [
    new persona('juan', 'perez'),
    new persona('camilo', 'diaz'),
  ];
  constructor(private logginService:LogingService){}
  agregarPersona(persona: persona) {
    this.personas.push(persona);
    this.logginService.message('mensaje de '+persona.nombre);
  }
}
