import { Component } from '@angular/core';
import { LogingService } from './LogingService.service';
import { persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de personas';
  personas: persona[] = [new persona('juan','perez'), new persona('camilo','diaz')];
  constructor(private loginService:LogingService){}
 
  personaAgregada(persona: persona){
    this.personas.push(persona);
    this.loginService.message("servicio "+persona.nombre)

  }
}
 