import { ProductoPedido } from './producto-pedido';
import { Observable } from 'rxjs';
import { PedidoProducto } from './pedido-producto';
import { Usuario } from './cliente';

export class Pedido {
    codigo:number;
    direccion:string;
    fecha_pedido:Date;
    fecha_recepcion:Date;
    status:boolean;
    costo_total:number;
    usuario:Usuario;
    productos: PedidoProducto[]
}
