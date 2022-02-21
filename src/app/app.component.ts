import { Component } from '@angular/core';
import { persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de personas';
  personas: persona[] = [new persona('juan','perez'), new persona('camilo','diaz')];
  nombre : string = '';
  apellido : string = '';

  agregarPersona(){
    let persona1 = new persona(this.nombre, this.apellido);
    this.personas.push(persona1);
  }
}
 