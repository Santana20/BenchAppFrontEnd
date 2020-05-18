import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePedidoComponent } from './pedido/create-pedido/create-pedido.component';
import { ListarPedidoComponent } from './pedido/listar-pedido/listar-pedido.component';

import{HttpClientModule} from '@angular/common/http';

import{FormsModule} from '@angular/forms';
import { CreateProductoComponent } from './producto/create-producto/create-producto.component';
import { ListarProductoComponent } from './producto/listar-producto/listar-producto.component';
import { ActualizarProductoComponent } from './producto/actualizar-producto/actualizar-producto.component';




@NgModule({
  declarations: [
    AppComponent,
    CreatePedidoComponent,
    ListarPedidoComponent,
    CreateProductoComponent,
    ListarProductoComponent,
    ActualizarProductoComponent
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
