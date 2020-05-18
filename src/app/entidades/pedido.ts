import { ProductoPedido } from './producto-pedido';
import { Observable } from 'rxjs';

export class Pedido {
    codigo:number;
    direccion:string;
    fecha:Date;
    costo_total:number;
    pedido_producto:Observable<ProductoPedido>;
    
    
}
