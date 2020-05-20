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
  constructor(private pizzeriaService:PizzeriaService,private router:Router) { }

  ngOnInit(): void {
  }

  updatePizzeria(){
    console.log(this.pizzeria)
    this.pizzeriaService.updatePizzeria(this.pizzeria,this.fcodigo).subscribe(
     data=>this.router.navigate(['/ListPizzeria'])
    );
  }

}
