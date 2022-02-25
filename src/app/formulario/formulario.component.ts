import { Component } from '@angular/core';
import { persona } from '../persona.model';
import { personasService } from '../personasService.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  nombre: string;
  apellido: string;
  constructor(private personaService: personasService) {}

  agregarPersona() {
    let persona1 = new persona(this.nombre, this.apellido);
    this.personaService.agregarPersona(persona1);
  }
}
