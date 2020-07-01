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
  p:Object;
  fcodigo:number;
  private imagenSeleccionada: File;
  productos:Producto[];
  constructor(private productoService:ProductoService,private router:Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params=>{
      let codigo: number=+params.get('codigo');
      if(codigo){
        this.productoService.getProductoC(codigo).subscribe(producto=>{
          this.producto=producto;
        })
      }
    })
    this.cargando()
  }

  cargando(){
    console.log("cargando productos");
    this.productoService.getProductoLista().subscribe(productos=>this.productos=productos);
    console.log(this.productos)
  }
  updateProducto(){
    console.log(this.producto);
  
    this.productoService.updateProducto(this.producto.codigo,this.producto).subscribe(
      prod=>{
        this.p=prod;
      
        this.subirImagen();
        swal.fire("Se actualizo el producto","El producto: "+this.producto.nombre,'success')
      }
    );
  }

  seleccionarImagen(event){
    this.imagenSeleccionada=event.target.files[0];
    console.log(this.imagenSeleccionada);
  }

  subirImagen(){
    this.productoService.subirImagen(this.imagenSeleccionada,this.producto.codigo).subscribe(
      producto=>{
        this.producto=producto;
        
      }
    )
  }

  compararTipo(o1:Producto, o2:Producto) : boolean{
    if (o1===undefined && o2===undefined){
      return true;
    }
     return o1 === null || o2 === null || o1 === undefined || o2 === undefined  ? false : o1.codigo === o2.codigo 
  }

}
