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
  title = 'Listado de personas';
  personas: persona[] = [];

  constructor(private personaService: PersonaService, private route: Router) {}
  ngOnInit(): void {
    this.personaService.listar().subscribe((arg) => {
      this.personas = arg;
      this.personaService.setPersonas(this.personas);
    });
  }
  agregar() {
    this.route.navigate(['personas/agregar']);
  }
}
