import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Oferta } from '../entidades/oferta';
import { AuthService } from './servicio-auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {
  private urlBase='http://localhost:8080/api';
  private httpHeaders=new HttpHeaders({'Content-type' : 'application/json'});

  constructor(private http:HttpClient, private authService : AuthService) { }

  //registrar Oferta
  createOferta(oferta:Object,fpizza:number):Observable<Object>{
    return this.http.post(this.urlBase+"/oferta/"+fpizza,oferta,{headers:this.authService.agregarAuthorizationHeader(this.httpHeaders)});

  }

  //mostrar lista oferta
  getOfertaLista():Observable<any>{
    console.log("llamando a rest :"+this.urlBase+"/ofertas");
    return this.http.get(this.urlBase+"/ofertas").pipe(
     map(response =>response as Oferta[])
    );
  }

  //actualizar Oferta
  updateOferta(oferta:object,fcodigo:number):Observable<any>{
    console.log("llamando a rest :"+this.urlBase+"/actualizarOferta/"+fcodigo);
    return this.http.post(this.urlBase+"/actualizarOferta/"+fcodigo,oferta,{headers:this.authService.agregarAuthorizationHeader(this.httpHeaders)});
  }

  //eliminar oferta
  deleteOferta(fcodigo:number):Observable<any>{
    console.log("llamando a rest :"+this.urlBase+"/eliminaroferta/"+fcodigo);
    return this.http.delete(this.urlBase+"/eliminaroferta/"+fcodigo, {headers:this.authService.agregarAuthorizationHeader(this.httpHeaders)}).pipe(
     map(response =>response as Oferta[])
    );
  }
  
  //buscar por titulo
  searchOfertaTitulo(ftitulo:String):Observable<any>{
    console.log("llamando a rest :"+this.urlBase+"/buscarofertaTitulo/"+ftitulo);
    return this.http.get(this.urlBase+"/buscarofertaTitulo/"+ftitulo).pipe(
     map(response =>response as Oferta[])
    );
  }

  //buscar por codigo
  searchOfertaCodigo(fcodigo:number):Observable<any>{
    console.log("llamando a rest:"+this.urlBase+"/oferta/"+fcodigo);
    return this.http.get(this.urlBase+"/oferta/"+fcodigo).pipe(
      map(response=>response as Oferta[])
    );
  }
  
}
