import { Component, EventEmitter, Output } from '@angular/core';
import { persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  {
  @Output() personaCreada = new  EventEmitter<persona>();
  nombre : string = '';
  apellido : string = '';

  agregarPersona(){
    let persona1 = new persona(this.nombre, this.apellido);
    this.personaCreada.emit(persona1);
    //this.personas.push(persona1);
  }
  

}
