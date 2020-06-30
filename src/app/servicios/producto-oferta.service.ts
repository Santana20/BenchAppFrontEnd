import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductoOferta } from '../entidades/producto-oferta';
import { AuthService } from './servicio-auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoOfertaService {
  private urlBase='http://localhost:8080/api';
  private httpHeaders=new HttpHeaders({'Content-type' : 'application/json'});

  constructor(private http:HttpClient, private authService : AuthService) { }

  createProductoOferta(productOfer:object,fproducto:number,foferta:number):Observable<object>{
    return this.http.post(this.urlBase+"/RegistrarPO/"+fproducto+"/"+foferta,productOfer,{headers:this.authService.agregarAuthorizationHeader(this.httpHeaders)});
  }

  getListaProductoOferta():Observable<any>{
    console.log("llamando a rest :"+this.urlBase+"/mostrarProductoOferta");
    return this.http.get(this.urlBase+"/mostrarProductoOferta").pipe(
     map(response =>response as ProductoOferta[])
    );
  }

  getBuscarrangoFecha(finicial:String,ffinal:String):Observable<any>{
    console.log("llamando a rest :"+this.urlBase+"/buscarRangoFecha/"+finicial+"/"+ffinal);
    return this.http.get(this.urlBase+"/buscarRangoFecha/"+finicial+"/"+ffinal, {headers:this.authService.agregarAuthorizationHeader(this.httpHeaders)}).pipe(
      map(response =>response as ProductoOferta[])
    );
  }

  eliminarproducofer(fcodigo):Observable<any>{
    console.log("llamando a rest :"+this.urlBase+"/eliminarPO/"+fcodigo);
    return this.http.delete(this.urlBase+"/eliminarPO/"+fcodigo, {headers:this.authService.agregarAuthorizationHeader(this.httpHeaders)}).pipe(
     map(response=>response as ProductoOferta[])
    );
  }

  
}
