import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Cliente } from '../entidades/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  
  private urlBase = 'localhost:8080/api';
  private httpHeaders = new HttpHeaders({'Content-type' : 'application/json'});

  constructor(private http: HttpClient) { }
  
  getClienteLista():Observable<any>{
    console.log("llamado a rest :"+this.urlBase+"/clientes");
    return this.http.get(this.urlBase+"/clientes").pipe(map(response =>response as Cliente[]));
  }

  getClienteporNombre(nombre : String) : Observable<any>
  {
    console.log(this.urlBase + '/buscarNombre/' + nombre);
    return this.http.get(this.urlBase 
      + '/buscarNombre/' + nombre).pipe(
        map(response => response as Cliente[])
      );
  }

  getClienteporDNI(DNI : String) : Observable<any>
  {
    console.log(this.urlBase + '/cliente/' + DNI);
    return this.http.get(this.urlBase 
      + '/cliente/' + DNI).pipe(
        map(response => response as Cliente[])
      );
  }

  borrarCliente(DNI:String):Observable<any>{
    console.log("llamando a rest :"+this.urlBase+"/borrar/"+DNI);
    return this.http.delete(this.urlBase+"/borrar/"+DNI).pipe(
      map(response =>response as Cliente[])
    );
  }

}
