import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/entidades/producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {
  producto:Observable<Producto>;
  fcodigo:number;

  //listar productos (variables)
  nombreBusqueda : String;
  precioMenor : number;
  precioMayor : number;
  opcion : String;

  constructor(private productoService:ProductoService,private router:Router) 
  {
    this.opcion = "0";
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    console.log("cargando listar!");
    this.productoService.getProductoLista().subscribe(producto=>this.producto=producto);
  }

  setOpcion(value : any)
  {
    this.opcion = value;
    if ( this.opcion == "0" ) this.reloadData();
    this.nombreBusqueda = "";
  }

  listarporCriterio(formulario : NgForm)
  {
    if(formulario.valid == true)
    {
      if ( this.opcion == "0" ) { this.reloadData(); }
      else if ( this.opcion == "1" )
        { this.ListarProductosporNombre(); }
      else if ( this.opcion == "2" )
      { this.ListarProductosporPrecio(); }
        
      
        formulario.resetForm();
    }
    else console.log("Algo esta mal");
    

    
  }

  //listar productos por nombre
  ListarProductosporNombre() : void
  {
    console.log("Llamando a REST");
    this.productoService.getProductoporNombre(this.nombreBusqueda).subscribe(
      producto=>this.producto=producto
    );
    
  }

  //listar productos por precio
  ListarProductosporPrecio() : void
  {
    console.log("Llamando a REST");
    this.productoService.getProductoporPrecio(this.precioMenor, 
      this.precioMayor).subscribe(
      producto=>this.producto=producto
    );
  }

  DeleteProducto(index : number){
    this.productoService.DeleteProducto(index).subscribe(
      data=>this.router.navigate(['/listProducto'])
    );
    this.router.navigate(['/listProducto'])
  }
  
}
