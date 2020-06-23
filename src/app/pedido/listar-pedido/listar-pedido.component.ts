import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from 'src/app/entidades/pedido';
import { PedidoService } from 'src/app/servicios/pedido.service';
import { ProductoPedido } from 'src/app/entidades/producto-pedido';
import { PedidoProducto } from 'src/app/entidades/pedido-producto';

@Component({
  selector: 'app-listar-pedido',
  templateUrl: './listar-pedido.component.html',
  styleUrls: ['./listar-pedido.component.css']
})
export class ListarPedidoComponent implements OnInit {
  //variables
  listarPedidosActivos:Observable<Pedido>;
  listarPedidosPasados:Observable<Pedido>;
  
  
  fcodigo:number
  pedidoProducto:Observable<PedidoProducto>
  constructor(private pedidoService:PedidoService) { }

  ngOnInit(): void {
    this.ListarPedidos();
  }
  //mostrar pedidos
  ListarPedidos(){
    console.log("cargando!")
    this.pedidoService.listarPedidosActivos().subscribe(pedido=>this.listarPedidosActivos=pedido);

    this.pedidoService.listarPedidosPasados().subscribe(pedido=>this.listarPedidosPasados=pedido);
  }


  //detallando pedido
  getDetallePedidoProducto(codigo : number){
    this.fcodigo = codigo;
    this.pedidoService.getDetallePedido(codigo).subscribe(pedidoProducto=>this.pedidoProducto=pedidoProducto);
  }

}
