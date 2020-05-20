import { Component, OnInit } from '@angular/core';
import { ProductoOferta } from 'src/app/entidades/producto-oferta';
import { ProductoOfertaService } from 'src/app/servicios/producto-oferta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-producto-oferta',
  templateUrl: './create-producto-oferta.component.html',
  styleUrls: ['./create-producto-oferta.component.css']
})
export class CreateProductoOfertaComponent implements OnInit {
   productOfer:ProductoOferta=new ProductoOferta();
   fproducto:number
   foferta:number
  constructor(private productoOfertaService:ProductoOfertaService,private router:Router) { }

  ngOnInit(): void {
  }

  save(){
    console.log(this.productOfer)
    this.productoOfertaService.createProductoOferta(this.productOfer,this.fproducto,this.foferta).subscribe(
     data=>this.router.navigate(['/listarPROOfer'])
    );
  }

}
