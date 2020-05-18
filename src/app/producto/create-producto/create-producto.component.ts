import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/entidades/producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-producto',
  templateUrl: './create-producto.component.html',
  styleUrls: ['./create-producto.component.css']
})
export class CreateProductoComponent implements OnInit {
  producto: Producto= new Producto();
  fpizza:number;
  constructor( private productoService:ProductoService,private router:Router) { }

  ngOnInit(): void {
  }

  save(){
    console.log(this.producto);
    this.productoService.createProducto(this.producto,this.fpizza).subscribe(
     data=>this.router.navigate([])
    );
  }

}
