import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/entidades/cliente';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-registrar-admin',
  templateUrl: './registrar-admin.component.html',
  styleUrls: ['./registrar-admin.component.css']
})
export class RegistrarAdminComponent implements OnInit {
  admin:Usuario
  confirmpassword : string;
  constructor(private router:Router, private adminService: ClienteService) 
  {
    this.admin=new Usuario();
  }

  ngOnInit(): void {
  }

  save()
  {
    console.log(this.admin);
    this.admin.enabled=true;
    this.adminService.createAdmin(this.admin).subscribe(
      data=>this.router.navigate(['/login'])
    );
  }
}
