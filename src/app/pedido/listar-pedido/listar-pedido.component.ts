import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from 'src/app/entidades/pedido';
import { PedidoService } from 'src/app/servicios/pedido.service';
import { ProductoPedido } from 'src/app/entidades/producto-pedido';

@Component({
  selector: 'app-listar-pedido',
  templateUrl: './listar-pedido.component.html',
  styleUrls: ['./listar-pedido.component.css']
})
export class ListarPedidoComponent implements OnInit {
  pedido:Observable<Pedido>
  pedidos:Observable<ProductoPedido>
  fcodigo:number
  constructor(private pedidoService:PedidoService) { }

  ngOnInit(): void {
    this.ListarPedidos();
  }
  //mostrar pedidos
  ListarPedidos(){
    console.log("cargando!")
    this.pedidoService.getpedidos().subscribe(pedido=>this.pedido=pedido);
  }
  //detallando pedido
  DetallePedidoProducto(){
    console.log("detalle!")
    this.pedidoService.getDetallePedido(this.fcodigo).subscribe(pedidos=>this.pedidos=pedidos);
  }

}
