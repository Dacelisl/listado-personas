import { Component, OnInit } from '@angular/core';
import { persona } from './persona.model';
import { PersonaService } from './PersonaService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private personaService: PersonaService){}
  

  title = 'Listado de personas';
  personas: persona[] = [];

  ngOnInit(): void {
    this.personas = this.personaService.personas;
  }
  /* personaAgregada(persona: persona) {
    this.personas.push(persona);
  } */
}
