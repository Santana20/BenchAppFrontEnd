import { Component, OnInit } from '@angular/core';
import { Oferta } from 'src/app/entidades/oferta';
import { OfertaService } from 'src/app/servicios/oferta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-oferta',
  templateUrl: './create-oferta.component.html',
  styleUrls: ['./create-oferta.component.css']
})
export class CreateOfertaComponent implements OnInit {
  oferta:Oferta=new Oferta();
  fpizza:number
  constructor(private ofertaSerive:OfertaService,private router:Router) { }
  
  ngOnInit(): void {
  }

  save(){
    console.log(this.oferta)
    this.fpizza=1;
    this.ofertaSerive.createOferta(this.oferta,this.fpizza).subscribe(
     data=>this.router.navigate(['/listOferta'])
    );
  }

}
