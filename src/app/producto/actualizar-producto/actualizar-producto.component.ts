import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/entidades/producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Router, ActivatedRoute } from '@angular/router';
import  swal  from 'sweetalert2';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent implements OnInit {
  producto:Producto=new Producto();
  fcodigo:number;
  private imagenSeleccionada: File;
  constructor(private productoService:ProductoService,private router:Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
  }
  updateProducto(){
    console.log(this.producto);
  
    this.productoService.updateProducto(this.fcodigo,this.producto).subscribe(
      data=>this.router.navigate(['/producto/actimg/'+this.fcodigo])
    );
  }

  seleccionarImagen(event){
    this.imagenSeleccionada=event.target.files[0];
    console.log(this.imagenSeleccionada);
  }

  subirImagen(){
    this.productoService.subirImagen(this.imagenSeleccionada,this.fcodigo).subscribe(
      producto=>{
        this.producto=producto;
        
      }
    )
  }

}
