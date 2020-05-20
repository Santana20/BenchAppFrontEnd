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
  constructor(private ofertaService:OfertaService,private router:Router) { }

  ngOnInit(): void {
  }

  updateOferta(){
    console.log(this.oferta)
    this.ofertaService.updateOferta(this.oferta,this.fcodigo).subscribe(
      data=>this.router.navigate(['/listOferta'])
    );
  }

}
