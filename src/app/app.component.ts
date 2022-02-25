import { Component, OnInit } from '@angular/core';
import { persona } from './persona.model';
import { personasService } from './personasService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Listado de personas';
  personas: persona[] = [];
  constructor(private personaService: personasService) {}
  ngOnInit(): void {
    this.personas = this.personaService.personas;
  }
}
