import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from '../persona.model';
import { PersonaService } from '../PersonaService.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent implements OnInit {
  constructor(private personaService: PersonaService, private route: Router) {}

  title = 'Listado de personas';
  personas: persona[] = [];

  ngOnInit(): void {
    this.personas = this.personaService.personas;
  }
  agregar() {
    this.route.navigate(['personas/agregar']);
  }
}
