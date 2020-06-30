import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/entidades/cliente';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/servicio-auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //variables
  titulo: string = 'Por favor Inicie Sesion!';
  usuario: Usuario;
  //variables
  constructor(private authService: AuthService, private router: Router) 
  {
    this.usuario = new Usuario();
  }

  ngOnInit(): void 
  {
    if ( this.authService.isAuthenticated() )
    {
      console.log("Hola" + this.authService.getUsuario().username + "ya estás autenticado!");
      this.router.navigate(['']);
    }
  }

  login() : void
  {
    console.log(this.usuario);

    //solo es para validar los datos que esten llenos, luego hacer la validacion de siempre
    if( this.usuario.username == null || this.usuario.password == null )
    {
      return;
    }

    this.authService.login(this.usuario).subscribe(response => 
      {
        if(this.authService.guardarUsuario(response.access_token))
        {
          this.authService.guardarToken(response.access_token);

          console.log("login: " + response.access_token);
          let usu = this.authService.getUsuario();
          this.router.navigate(['listPedido']);

          console.log("Hola" + usu.username + "has iniciado sesión con éxito!");
        }
        else
        {
          console.log("No tiene acceso a este recurso");
          this.router.navigate(['/login']);
        }
      }, 
      err =>
      {
        if ( err.status == 400 ) console.log("Error login, Usuario o clave incorrecta");
      }
      );
  }

}
