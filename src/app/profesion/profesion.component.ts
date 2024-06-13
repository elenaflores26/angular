import { Component } from '@angular/core';
import { Profesiones } from './profesiones';
import { ProfesionesService } from './profesiones.service';

type NewType = string;

@Component({
  selector: 'app-profesion',
  templateUrl: './profesion.component.html',
  styleUrls: ['./profesion.component.css']
})
export class ProfesionComponent {
  titulo:NewType="Lista de Profesiones";
  prueba:string="Esto es una prueba de mi componente profesiones";

  profesion: Profesiones[]=[];
  constructor(private profesionService:ProfesionesService){}
  ngOnInit():void{
    this.profesionService.getAll().subscribe(
        e =>this.profesion=e
    );




  }
}

