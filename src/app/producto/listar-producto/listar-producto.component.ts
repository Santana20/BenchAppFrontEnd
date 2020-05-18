import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/entidades/producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {
  producto:Observable<Producto>
  fcodigo:number
  constructor(private productoService:ProductoService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    console.log("cargando listar!");
    this.productoService.getProductoLista().subscribe(producto=>this.producto=producto);
  }

  DeleteProducto(){
    this.productoService.DeleteProducto(this.fcodigo).subscribe(
      data=>this.router.navigate(['/listProducto'])
    );
  }

}
