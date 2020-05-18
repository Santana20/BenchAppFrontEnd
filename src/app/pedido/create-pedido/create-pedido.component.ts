import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/servicios/pedido.service';
import { Pedido } from 'src/app/entidades/pedido';
import { Router } from '@angular/router';
import { ProductoPedido } from 'src/app/entidades/producto-pedido';

@Component({
  selector: 'app-create-pedido',
  templateUrl: './create-pedido.component.html',
  styleUrls: ['./create-pedido.component.css']
})
export class CreatePedidoComponent implements OnInit {
  pedido:Pedido = new Pedido();
  fdni:String;

  pedidoProducto: ProductoPedido= new ProductoPedido();
  fpedido:number;
  fproducto:number;

  constructor(private pedidoService:PedidoService,private router:Router) { }

  ngOnInit(): void {
  }
  save(){
    console.log(this.pedido);
    this.pedidoService.CreatePedido(this.pedido,this.fdni).subscribe(
     
    );
  }

  savePP(){
    console.log(this.pedidoProducto);
    this.pedidoService.createPedidoProducto(this.fpedido,this.fproducto,this.pedidoProducto).subscribe(
      data =>this.router.navigate(['/listPedido'])
    );
  }

}
