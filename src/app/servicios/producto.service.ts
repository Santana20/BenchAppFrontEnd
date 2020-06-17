import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Producto } from '../entidades/producto';

import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private urlBase='http://localhost:8080/api';
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

  getProductoC(fcodigo:number):Observable<any>{
    console.log("Llamando a rest: "+this.urlBase+"/buscarProducto/"+fcodigo);
    return this.http.get(this.urlBase 
      + '/buscarProducto/' + fcodigo).pipe(
        map(response => response as Producto[])
      );
    }

  subirImagen(archivo:File,id):Observable<any>{
    let formData=new FormData();
    formData.append("archivo",archivo);
    formData.append("id",id);
    return this.http.post(this.urlBase+'/producto/upload',formData).pipe(
      map((response:any)=>response.producto as Producto),
      catchError(e=>{
        console.error(e.error.mensaje);
        swal.fire(e.error.mensaje,e.error.error,'error');
        return throwError(e);
      })
    )
  }

  subirImagenC(archivo:File,producto):Observable<any>{
    let formData=new FormData();
    formData.append("archivo",archivo);
    formData.append("producto",producto);
    return this.http.post(this.urlBase+'/producto/uploadC',formData).pipe(
      map((response:any)=>response.producto as Producto),
      catchError(e=>{
        console.error(e.error.mensaje);
        swal.fire(e.error.mensaje,e.error.error,'error');
        return throwError(e);
      })
    )
  }
  

}
