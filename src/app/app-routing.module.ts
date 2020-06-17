import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePedidoComponent } from './pedido/create-pedido/create-pedido.component';
import { ListarPedidoComponent } from './pedido/listar-pedido/listar-pedido.component';
import { CreateProductoComponent } from './producto/create-producto/create-producto.component';
import { ListarProductoComponent } from './producto/listar-producto/listar-producto.component';
import { ActualizarProductoComponent } from './producto/actualizar-producto/actualizar-producto.component';
import { CreateOfertaComponent } from './oferta/create-oferta/create-oferta.component';
import { ListarOfertaComponent } from './oferta/listar-oferta/listar-oferta.component';
import { ActualizarOfertaComponent } from './oferta/actualizar-oferta/actualizar-oferta.component';
import { CreateProductoOfertaComponent } from './producto-oferta/create-producto-oferta/create-producto-oferta.component';
import { ListarProductoOfertaComponent } from './producto-oferta/listar-producto-oferta/listar-producto-oferta.component';
import { ListarPizzeriaComponent } from './pizzeria/listar-pizzeria/listar-pizzeria.component';
import { CreatePizzeriaComponent } from './pizzeria/create-pizzeria/create-pizzeria.component';
import { ActualizarPizzeriaComponent } from './pizzeria/actualizar-pizzeria/actualizar-pizzeria.component';
import { ListarClienteComponent } from './cliente/listar-cliente/listar-cliente.component';
import { ActImgComponent } from './producto/actualizar-producto/act-img/act-img.component';





const routes: Routes = [
  {path:'',redirectTo:'customer',pathMatch:'full'},
  {path:'listCliente',component:ListarClienteComponent},
  {path:'newPedido',component:CreatePedidoComponent},
  {path:'listPedido',component:ListarPedidoComponent},
  {path:'newProducto',component:CreateProductoComponent},
  {path:'listProducto',component:ListarProductoComponent},

  {path:'updateProducto',component:ActualizarProductoComponent},
  
  {path:'newOferta',component:CreateOfertaComponent},
  {path:'listOferta',component:ListarOfertaComponent},
  {path:'updateOferta',component:ActualizarOfertaComponent},
  {path:'newPROOfer',component:CreateProductoOfertaComponent},
  {path:'listarPROOfer',component:ListarProductoOfertaComponent},
  {path:'ListPizzeria',component:ListarPizzeriaComponent},
  {path:'newPizzeria',component:CreatePizzeriaComponent},
  {path:'updatePizzeria',component:ActualizarPizzeriaComponent},

  {path:'producto/actimg/:codigo',component:ActImgComponent}


 


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
