import { Component, OnInit } from '@angular/core';
import { ProductoOferta } from 'src/app/entidades/producto-oferta';
import { ProductoOfertaService } from 'src/app/servicios/producto-oferta.service';
import { Router } from '@angular/router';
import { Producto } from 'src/app/entidades/producto';
import { Oferta } from 'src/app/entidades/oferta';
import { ProductoService } from 'src/app/servicios/producto.service';
import { OfertaService } from 'src/app/servicios/oferta.service';

@Component({
  selector: 'app-create-producto-oferta',
  templateUrl: './create-producto-oferta.component.html',
  styleUrls: ['./create-producto-oferta.component.css']
})
export class CreateProductoOfertaComponent implements OnInit {
   productOfer:ProductoOferta=new ProductoOferta();
   fproducto:number
   foferta:number
   productos:Producto[];
   ofertas:Oferta[];
  constructor(private ofertaService:OfertaService,private productoService:ProductoService,private productoOfertaService:ProductoOfertaService,private router:Router) { }

  ngOnInit(): void {
    this.cargando();
  }

  cargando(){
    console.log("cargando productos");
    console.log("cargando ofertas");
    this.productoService.getProductoLista().subscribe(productos=>this.productos=productos);
    console.log(this.productos)
    this.ofertaService.getOfertaLista().subscribe(ofertas=>this.ofertas=ofertas);
    console.log(this.ofertas)
  }

  save(){
    console.log(this.productOfer)
    this.productoOfertaService.createProductoOferta(this.productOfer,this.productOfer.producto.codigo,this.productOfer.oferta.codigo).subscribe(
     data=>this.router.navigate(['/listarPROOfer'])
    );
  }

  compararTipop(o1:Producto, o2:Producto) : boolean{
    if (o1===undefined && o2===undefined){
      return true;
    }
     return o1 === null || o2 === null || o1 === undefined || o2 === undefined  ? false : o1.codigo === o2.codigo 
  }

  compararTipoo(o1:Oferta, o2:Oferta) : boolean{
    if (o1===undefined && o2===undefined){
      return true;
    }
     return o1 === null || o2 === null || o1 === undefined || o2 === undefined  ? false : o1.codigo === o2.codigo 
  }

  compararTipo(o1:Producto, o2:Producto) : boolean{
    if (o1===undefined && o2===undefined){
      return true;
    }
     return o1 === null || o2 === null || o1 === undefined || o2 === undefined  ? false : o1.codigo === o2.codigo 
  }

}
