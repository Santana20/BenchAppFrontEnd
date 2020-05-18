import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/entidades/producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent implements OnInit {
  producto:Producto=new Producto();
  fcodigo:number
  constructor(private productoService:ProductoService,private router:Router) { }

  ngOnInit(): void {
  }
  updateProducto(){
    console.log(this.producto);
    this.productoService.updateProducto(this.fcodigo,this.producto).subscribe(
      data=>this.router.navigate(['/listProducto'])
    );
  }

}
