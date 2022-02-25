import { persona } from './persona.model';

export class personasService {
  personas: persona[] = [
    new persona('juan', 'perez'),
    new persona('camilo', 'diaz'),
  ];
  agregarPersona(persona: persona) {
    this.personas.push(persona);
  }
}
