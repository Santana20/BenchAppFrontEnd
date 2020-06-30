import { Component, OnInit } from '@angular/core';
import { Pizzeria } from 'src/app/entidades/pizzeria';
import { PizzeriaService } from 'src/app/servicios/pizzeria.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-pizzeria',
  templateUrl: './actualizar-pizzeria.component.html',
  styleUrls: ['./actualizar-pizzeria.component.css']
})
export class ActualizarPizzeriaComponent implements OnInit {
  pizzeria:Pizzeria=new Pizzeria();
  fcodigo:number
  pizzerias:Pizzeria[];
  constructor(private pizzeriaService:PizzeriaService,private router:Router) { }

  ngOnInit(): void {
    this.cargando();
  }

  cargando(){
    this.pizzeriaService.getDatosPizzeria().subscribe(pizzerias=>this.pizzerias=pizzerias)
  }

  updatePizzeria(){
    console.log(this.pizzeria)
    this.pizzeriaService.updatePizzeria(this.pizzeria,this.pizzeria.codigo).subscribe(
     data=>this.router.navigate(['/ListPizzeria'])
    );
  }

  compararTipo(o1:Pizzeria, o2:Pizzeria) : boolean{
    if (o1===undefined && o2===undefined){
      return true;
    }
     return o1 === null || o2 === null || o1 === undefined || o2 === undefined  ? false : o1.codigo === o2.codigo 
  }
}
