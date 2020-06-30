import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Oferta } from 'src/app/entidades/oferta';
import { OfertaService } from 'src/app/servicios/oferta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-oferta',
  templateUrl: './listar-oferta.component.html',
  styleUrls: ['./listar-oferta.component.css']
})
export class ListarOfertaComponent implements OnInit {
  oferta:Observable<Oferta>
  fcodigo:number
  ftitulo:String
  constructor(private ofertaService:OfertaService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    console.log("reloadOferta!")
    this.ofertaService.getOfertaLista().subscribe(oferta=>this.oferta=oferta);
  }

  deleteOfert(index : number){
    this.ofertaService.deleteOferta(index).subscribe(
     data =>this.router.navigate(['/listOferta'])
    );
  }

  searchOferta(){
    this.ofertaService.searchOfertaTitulo(this.ftitulo).subscribe(
     oferta=>this.oferta=oferta
    );
  }

}
