import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pizzeria } from '../entidades/pizzeria';

@Injectable({
  providedIn: 'root'
})
export class PizzeriaService {
  private urlBase='http://localhost:8080/api';
  private httpHeaders=new HttpHeaders({'Content-type' : 'application/json'});

  constructor(private http:HttpClient) { }

  createPizzeria(pizzeria:Object):Observable<Object>{
    return this.http.post(this.urlBase+"/pizzeria",pizzeria,{headers:this.httpHeaders});
  }


  getDatosPizzeria():Observable<any>{
    console.log("llamando a rest :"+this.urlBase+"/pizzeriamostrar");
    return this.http.get(this.urlBase+"/pizzeriamostrar").pipe(map(response =>response as Pizzeria[]))
  }

  updatePizzeria(pizzeria:Object,fcodigo:number):Observable<any>{
    console.log("llamando a rest:"+this.urlBase+"/actualizarPizzeria/"+fcodigo);
    return this.http.post(this.urlBase+"/actualizarPizzeria/"+fcodigo,pizzeria,{headers:this.httpHeaders});
  }

 
}
