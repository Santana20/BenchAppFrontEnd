import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePedidoComponent } from './pedido/create-pedido/create-pedido.component';
import { ListarPedidoComponent } from './pedido/listar-pedido/listar-pedido.component';
import { CreateProductoComponent } from './producto/create-producto/create-producto.component';
import { ListarProductoComponent } from './producto/listar-producto/listar-producto.component';
import { ActualizarProductoComponent } from './producto/actualizar-producto/actualizar-producto.component';



const routes: Routes = [
  {path:'',redirectTo:'customer',pathMatch:'full'},
  {path:'newPedido',component:CreatePedidoComponent},
  {path:'listPedido',component:ListarPedidoComponent},
  {path:'newProducto',component:CreateProductoComponent},
  {path:'listProducto',component:ListarProductoComponent},
  {path:'updateProducto',component:ActualizarProductoComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
