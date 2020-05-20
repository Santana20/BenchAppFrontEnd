import { Component, OnInit } from '@angular/core';
import { Pizzeria } from 'src/app/entidades/pizzeria';
import { PizzeriaService } from 'src/app/servicios/pizzeria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-pizzeria',
  templateUrl: './create-pizzeria.component.html',
  styleUrls: ['./create-pizzeria.component.css']
})
export class CreatePizzeriaComponent implements OnInit {
  pizzeria:Pizzeria=new Pizzeria();
  constructor(private pizzeriaService:PizzeriaService,private router:Router) { }

  ngOnInit(): void {
  }

  save(){
    console.log(this.pizzeria);
    this.pizzeriaService.createPizzeria(this.pizzeria).subscribe(
     data=>this.router.navigate(['/ListPizzeria'])
    );
  }

}
