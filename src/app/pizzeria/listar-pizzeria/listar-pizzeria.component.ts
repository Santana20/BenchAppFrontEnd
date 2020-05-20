import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizzeria } from 'src/app/entidades/pizzeria';
import { PizzeriaService } from 'src/app/servicios/pizzeria.service';

@Component({
  selector: 'app-listar-pizzeria',
  templateUrl: './listar-pizzeria.component.html',
  styleUrls: ['./listar-pizzeria.component.css']
})
export class ListarPizzeriaComponent implements OnInit {
  pizzeria:Observable<Pizzeria>
  constructor(private pizzzeriaService:PizzeriaService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    console.log("cargando datos");
    this.pizzzeriaService.getDatosPizzeria().subscribe(pizzeria=>this.pizzeria=pizzeria);
  }

}
