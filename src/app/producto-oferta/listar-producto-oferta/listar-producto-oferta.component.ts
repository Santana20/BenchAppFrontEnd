import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { ProductoOferta } from 'src/app/entidades/producto-oferta';
import { ProductoOfertaService } from 'src/app/servicios/producto-oferta.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listar-producto-oferta',
  templateUrl: './listar-producto-oferta.component.html',
  styleUrls: ['./listar-producto-oferta.component.css']
})
export class ListarProductoOfertaComponent implements OnInit {
  ProductOfert:Observable<ProductoOferta>
 
  finicial:String
  ffinal:String
  fcodigo:number
  constructor(private productoofertaService:ProductoOfertaService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    console.log("cargando lista!")
    this.productoofertaService.getListaProductoOferta().subscribe(ProductOfert=>this.ProductOfert=ProductOfert);
  }

  searFecha(){
    console.log("cargandoBusqueda!")
    this.productoofertaService.getBuscarrangoFecha(this.finicial,this.ffinal).subscribe(ProductOfert=>this.ProductOfert=ProductOfert);
  }

  eliminarProductO(){
    this.productoofertaService.eliminarproducofer(this.fcodigo).subscribe(
     data=>this.router.navigate([])
    );
  }

}
