import { Component, OnInit } from '@angular/core';
import { Oferta } from 'src/app/entidades/oferta';
import { OfertaService } from 'src/app/servicios/oferta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-oferta',
  templateUrl: './actualizar-oferta.component.html',
  styleUrls: ['./actualizar-oferta.component.css']
})
export class ActualizarOfertaComponent implements OnInit {
  oferta:Oferta=new Oferta();
  fcodigo:number
  ofertas:Oferta[];
  constructor(private ofertaService:OfertaService,private router:Router) { }

  ngOnInit(): void {
    this.cargando()
  }

  cargando(){
    console.log("cargando ofertas");
    this.ofertaService.getOfertaLista().subscribe(ofertas=>this.ofertas=ofertas);
    console.log(this.ofertas);
  }

  updateOferta(){
    console.log(this.oferta)
    this.ofertaService.updateOferta(this.oferta,this.oferta.codigo).subscribe(
      data=>this.router.navigate(['/listOferta'])
    );
  }

  compararTipo(o1:Oferta, o2:Oferta) : boolean{
    if (o1===undefined && o2===undefined){
      return true;
    }
     return o1 === null || o2 === null || o1 === undefined || o2 === undefined  ? false : o1.codigo === o2.codigo 
  }

}
