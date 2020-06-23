import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/entidades/cliente';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

interface NombreBusqueda{
  valor: string;
  verValor: string;
}

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {
  cliente:Observable<Cliente>
  Dni:String;
  Nombre:String;
  opcion : String;
  nombreBusqueda:String;
  


  constructor(private clienteService:ClienteService,private router:Router) {
    this.opcion = "0";
   }

   ngOnInit(): void {
    this.reloadData();
  }



  reloadData(){
    console.log("reloadOferta!")
    this.clienteService.getClienteLista().subscribe(cliente=>this.cliente=cliente);
  }

  

  borrarCliente(){
    this.clienteService.borrarCliente(this.Dni).subscribe(
     data =>this.router.navigate(['/listarCliente'])
    );
  }

  listarporCriterio(formulario : NgForm)
  {
    if(formulario.valid == true)
    {
      if ( this.opcion == "0" ) { this.reloadData(); }
      else if ( this.opcion == "1" )
        { this.ClienteporNombre(); }
      else if ( this.opcion == "2" )
      { this.ClienteporDNI(); }
        
      
        formulario.resetForm();
    }
    else console.log("Algo esta mal");
    

    
  }

  ClienteporDNI(){
    this.clienteService.getClienteporDNI(this.Dni).subscribe(
     cliente=>this.cliente=cliente
    );
  }

  ClienteporNombre(){
    this.clienteService.getClienteporNombre(this.Nombre).subscribe(
     cliente=>this.cliente=cliente
    );
  }


}
