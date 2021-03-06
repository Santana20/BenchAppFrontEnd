import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Usuario } from '../entidades/cliente';
import { AuthService } from './servicio-auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  
  private urlBase = 'http://localhost:8080/api';
  private httpHeaders = new HttpHeaders({'Content-type' : 'application/json'});

  constructor(private http: HttpClient, private authService : AuthService) { }
  
  createAdmin(usuario:Object) : Observable<Object>{
    return this.http.post(this.urlBase+'/RegistrarAdmin', usuario, { headers: this.authService.agregarAuthorizationHeader(this.httpHeaders) });
  }

  getClienteLista():Observable<any>{
    console.log("llamado a rest :"+this.urlBase+"/clientes");
    return this.http.get(this.urlBase+"/clientes", { headers: this.authService.agregarAuthorizationHeader(this.httpHeaders) }).pipe(map(response =>response as Usuario[]));
  }

  getClienteporNombre(nombre : String) : Observable<any>
  {
    console.log(this.urlBase + '/buscarNombre/' + nombre);
    return this.http.get(this.urlBase 
      + '/buscarNombre/' + nombre, { headers: this.authService.agregarAuthorizationHeader(this.httpHeaders) }).pipe(
        map(response => response as Usuario[])
      );
  }

  getClienteporDNI(DNI : String) : Observable<any>
  {
    console.log(this.urlBase + '/cliente/' + DNI);
    return this.http.get(this.urlBase 
      + '/cliente/' + DNI).pipe(
        map(response => response as Usuario[])
      );
  }

  borrarCliente(DNI:String):Observable<any>{
    console.log("llamando a rest :"+this.urlBase+"/borrar/"+DNI);
    return this.http.delete(this.urlBase+"/borrar/"+DNI).pipe(
      map(response =>response as Usuario[])
    );
  }

}
