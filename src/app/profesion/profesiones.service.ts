import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Profesiones } from './profesiones';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProfesionesService {
  private url:string="https://localhost:8080/profesiones-elena/profesioness";
  constructor(private http:HttpClient) { }

  //obtener profesiones
  getAll():Observable<Profesiones[]>{
    return this.http.get<Profesiones[]>(this.url);
  }
  //crear el estudiante
  create(profesions:Profesiones):Observable<Profesiones>{
    return this.http.post<Profesiones>(this.url, profesions);
  }
  //obtener un estudiante
  get(id:Number):Observable<Profesiones>{
    return this.http.get<Profesiones>(this.url+'/'+id);
  }
}
