import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/entidades/producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Router, ActivatedRoute } from '@angular/router';
import  swal  from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-producto',
  templateUrl: './create-producto.component.html',
  styleUrls: ['./create-producto.component.css']
})
export class CreateProductoComponent implements OnInit {
  p:Producto;
  producto: Producto= new Producto();
  fpizza:number;
  fcodigo:number;
  private imagenSeleccionada: File;

  constructor( private productoService:ProductoService,private router:Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  save(){
    console.log(this.producto);
    console.log(this.producto.codigo);
    this.productoService.createProducto(this.producto,this.fpizza).subscribe(
     data=>this.router.navigate([])
    );
    this.subirImagenC();

  }

  cod(){
    this.activatedRoute.paramMap.subscribe(params=>{
      let codigo: number=+params.get('codigo');
      if(codigo){
        this.productoService.getProductoC(codigo).subscribe(producto=>{
          this.producto=producto;
        })
      }
    })
  }

  seleccionarImagen(event){
    this.imagenSeleccionada=event.target.files[0];
    console.log(this.imagenSeleccionada);
  }

  subirImagenC(){
    this.productoService.subirImagenC(this.imagenSeleccionada,this.producto).subscribe(
      producto=>{
        this.producto=producto;
      }
    )
  }

  subirImagen(){
    this.productoService.subirImagen(this.imagenSeleccionada,this.producto.codigo).subscribe(
      producto=>{
        this.producto=producto;
      }
    )
  }
}
