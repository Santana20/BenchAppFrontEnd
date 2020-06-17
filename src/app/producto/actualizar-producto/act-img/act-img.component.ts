import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/entidades/producto';
import swal from 'sweetalert2';

@Component({
  selector: 'app-act-img',
  templateUrl: './act-img.component.html',
  styleUrls: ['./act-img.component.css']
})
export class ActImgComponent implements OnInit {
  producto:Producto;
  fcodigo:number;
  private imagenSeleccionada: File;

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
  }

  seleccionarImagen(event){
    this.imagenSeleccionada=event.target.files[0];
    console.log(this.imagenSeleccionada);
  }

  subirImagen(){
    this.productoService.subirImagen(this.imagenSeleccionada,this.producto.codigo).subscribe(
      producto=>{
        this.producto=producto;
        swal.fire("La foto se subio completamente!","La imagen: "+this.producto.imagen,'success')
        this.router.navigate(['/listProducto']);
      }
    )
  }
}
