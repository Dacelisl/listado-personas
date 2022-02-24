import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  {
  @Output() personaCreada = new  EventEmitter<persona>();
  
  @ViewChild('apellidoInput') apellido : ElementRef;  //referencias locales usando viewchild

  agregarPersona(nombre: HTMLInputElement){       //referencia local 
    let persona1 = new persona(nombre.value, this.apellido.nativeElement.value);
    this.personaCreada.emit(persona1);
  }
  

}
