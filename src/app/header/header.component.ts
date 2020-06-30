import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/servicio-auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() : void
  {
    //let username = this.authService.getUsuario().username;
    this.authService.logout();
    this.router.navigate(['']);
  }

  isAuthenticated() : boolean
  {
    return this.authService.isAuthenticated();
  }

  getNombreUsuario() : string
  {
    return this.authService.getUsuario().nombre;
  }
}
