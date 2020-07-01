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
import { LoginComponent } from './cliente/login/login.component';
import { HeaderComponent } from './header/header.component';
import { RegistrarAdminComponent } from './cliente/registrar-admin/registrar-admin.component';

import { AuthGuard } from "./servicios/servicio-auth/guards/auth.guard";
import { RoleGuard } from "./servicios/servicio-auth/guards/role.guard";


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'listCliente',component:ListarClienteComponent, canActivate : [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' }},
  {path:'newPedido',component:CreatePedidoComponent, canActivate : [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' }},
  {path:'listPedido',component:ListarPedidoComponent, canActivate : [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' }},
  {path:'newProducto',component:CreateProductoComponent, canActivate : [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' }},
  {path:'listProducto',component:ListarProductoComponent, canActivate : [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' }},

  {path:'updateProducto/:codigo',component:ActualizarProductoComponent, canActivate : [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' }},
  
  {path:'newOferta',component:CreateOfertaComponent, canActivate : [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' }},
  {path:'listOferta',component:ListarOfertaComponent, canActivate : [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' }},
  {path:'updateOferta/:codigo',component:ActualizarOfertaComponent, canActivate : [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' }},
  {path:'newPROOfer',component:CreateProductoOfertaComponent, canActivate : [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' }},
  {path:'listarPROOfer',component:ListarProductoOfertaComponent, canActivate : [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' }},
  {path:'ListPizzeria',component:ListarPizzeriaComponent, canActivate : [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' }},
  {path:'newPizzeria',component:CreatePizzeriaComponent, canActivate : [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' }},
  {path:'updatePizzeria',component:ActualizarPizzeriaComponent, canActivate : [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' }},
  {path:'login',component:LoginComponent},
  {path:'menu',component:HeaderComponent, canActivate : [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' }},
  {path:'registrarAdmin',component:RegistrarAdminComponent, canActivate : [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' }},
  {path:'producto/actimg/:codigo',component:ActImgComponent, canActivate : [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' }}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
