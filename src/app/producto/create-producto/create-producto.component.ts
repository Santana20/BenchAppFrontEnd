import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/entidades/producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Router, ActivatedRoute } from '@angular/router';
import  swal  from 'sweetalert2';
import { Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-create-producto',
  templateUrl: './create-producto.component.html',
  styleUrls: ['./create-producto.component.css']
})
export class CreateProductoComponent implements OnInit {
  p:Object;
  producto: Producto= new Producto();
  fpizza:number;
  fcodigo:number;
  private imagenSeleccionada: File;
  imagen:string;

  constructor( private productoService:ProductoService,private router:Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  save(){
    console.log(this.producto);
    this.productoService.createProducto(this.producto,this.fpizza).subscribe(
      prod=>{
        this.p=prod;
      
        console.log(this.p["codigo"])
        this.subirImagenC(this.p["codigo"]);
        
      }
     
     
    );
    
    
  }

  irLista(){
    this.router.navigate(["/listProducto"])
  }

  seleccionarImagen(event){
    this.imagenSeleccionada=event.target.files[0];
    console.log(this.imagenSeleccionada);
  }

  

  subirImagenC(codigo:number){
    this.productoService.subirImagen(this.imagenSeleccionada,codigo).subscribe(
      producto=>{
        this.producto=producto;
        swal.fire("Se creo el producto","El produco: "+this.producto.nombre,'success')
      }
    )
    console.log(this.producto);
  }
}
