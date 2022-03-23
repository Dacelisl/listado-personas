import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from '../../persona.model';
import { PersonaService } from '../../PersonaService.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  @Output() personaCreada = new EventEmitter<persona>();
  // @ViewChild('apellidoInput') apellido: ElementRef;
  nombre: string;
  apellido: string;
  index: number;
  modoEdicion: number;
  constructor(
    private personaService: PersonaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    this.modoEdicion = this.route.snapshot.queryParams['modoEdicion'];
    if (this.modoEdicion != null && this.modoEdicion == 1) {
      let nuevo = this.personaService.encontrarPersona(this.index);
      let doc = document.getElementById('btn-persona');
      doc ? (doc.textContent = 'Editar') : console.log('sapo');
      this.nombre = nuevo.nombre;
      this.apellido = nuevo.apellido;
    }
  }

  agregarPersona() {
    let persona1 = new persona(this.nombre, this.apellido);
    if (this.index) {
      this.personaService.modificarPersona(this.index, persona1);
    } else {
      this.personaService.agregando(persona1);
    }
    this.router.navigate(['personas']);
  }
  eliminarPersona() {
    if (this.index) {
      this.personaService.eliminar(this.index);
    }
    this.router.navigate(['personas']);
  }
  home() {
    this.router.navigate(['personas']);
  }
}
