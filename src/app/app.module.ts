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
import { CreateOfertaComponent } from './oferta/create-oferta/create-oferta.component';
import { ListarOfertaComponent } from './oferta/listar-oferta/listar-oferta.component';
import { ActualizarOfertaComponent } from './oferta/actualizar-oferta/actualizar-oferta.component';
import { CreateProductoOfertaComponent } from './producto-oferta/create-producto-oferta/create-producto-oferta.component';
import { ListarProductoOfertaComponent } from './producto-oferta/listar-producto-oferta/listar-producto-oferta.component';




@NgModule({
  declarations: [
    AppComponent,
    CreatePedidoComponent,
    ListarPedidoComponent,
    CreateProductoComponent,
    ListarProductoComponent,
    ActualizarProductoComponent,
    CreateOfertaComponent,
    ListarOfertaComponent,
    ActualizarOfertaComponent,
    CreateProductoOfertaComponent,
    ListarProductoOfertaComponent
   
    
    
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
