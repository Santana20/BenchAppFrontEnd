import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Producto } from '../entidades/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  
  private urlBase='http://localhost:8762/product/api';
  private httpHeaders=new HttpHeaders({'Content-type' : 'application/json'});

  constructor(private http:HttpClient) { }

  createProducto(producto:Object,fpizza:number):Observable<Object>{
    return this.http.post(this.urlBase+"/producto/"+fpizza,producto,{headers:this.httpHeaders});
  }


  getProductoLista():Observable<any>{
    console.log("llamado a rest :"+this.urlBase+"/mostrarProductos");
    return this.http.get(this.urlBase+"/mostrarProductos").pipe(map(response =>response as Producto[]));
  }

  getProductoporNombre(nombre : String) : Observable<any>
  {
    console.log(this.urlBase + '/buscarNombreProducto/' + nombre);
    return this.http.get(this.urlBase 
      + '/buscarNombreProducto/' + nombre).pipe(
        map(response => response as Producto[])
      );
  }

  getProductoporPrecio(p1 : number, p2 : number) : Observable<any>
  {
    console.log(this.urlBase + '/buscarporPrecioProducto/' + p1 + '/' + p2);
    return this.http.get(this.urlBase + '/buscarporPrecioProducto/' 
    + p1 + '/' + p2).pipe(
        map(response => response as Producto[])
      );
  }

  DeleteProducto(fcodigo:number):Observable<any>{
    console.log("llamando a rest :"+this.urlBase+"/eliminarProducto/"+fcodigo);
    return this.http.delete(this.urlBase+"/eliminarProducto/"+fcodigo).pipe(
      map(response =>response as Producto[])
    );
  }

  updateProducto(fcodigo:number,producto:Object):Observable<any>{
    console.log("llamando a rest :"+this.urlBase+"/actualizarProducto/"+fcodigo);
    return this.http.post(this.urlBase+"/actualizarProducto/"+fcodigo,producto,{headers:this.httpHeaders});
  }
}
