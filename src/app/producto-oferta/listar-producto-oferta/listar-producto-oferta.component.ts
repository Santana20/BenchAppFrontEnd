import { Component, OnInit } from '@angular/core';
import {  Observable } from 'rxjs';
import { ProductoOferta } from 'src/app/entidades/producto-oferta';
import { ProductoOfertaService } from 'src/app/servicios/producto-oferta.service';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Producto } from 'src/app/entidades/producto';


@Component({
  selector: 'app-listar-producto-oferta',
  templateUrl: './listar-producto-oferta.component.html',
  styleUrls: ['./listar-producto-oferta.component.css']
})
export class ListarProductoOfertaComponent implements OnInit {
  ProductOfert:Observable<ProductoOferta>
  productos:Observable<Producto>
 
  finicial:String
  ffinal:String
  fcodigo:number
  constructor(private productoService:ProductoService ,private productoofertaService:ProductoOfertaService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    console.log("cargando lista!")
    this.productoofertaService.getListaProductoOferta().subscribe(ProductOfert=>this.ProductOfert=ProductOfert);
    this.productoService.getProductoLista().subscribe(productos=>this.productos=productos);
  }

  searFecha(){
    console.log("cargandoBusqueda!")
    this.productoofertaService.getBuscarrangoFecha(this.finicial,this.ffinal).subscribe(ProductOfert=>this.ProductOfert=ProductOfert);
  }

  eliminarProductO(index : number){
    this.productoofertaService.eliminarproducofer(index).subscribe(
     data=>this.router.navigate([])
    );
  }

}
