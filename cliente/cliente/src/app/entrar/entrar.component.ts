import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  usuario  = {
    email: '',
    pass: ''
  }

  constructor(
      private authService: AuthService,
      private router: Router
    ) { }

  ngOnInit(): void {
  }
  iniciarSesion() {
    this.authService.entrar(this.usuario)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        localStorage.setItem('nombre', this.usuario.email);
        this.router.navigate(['/inicio']);
      },
      error => console.log(error)
    )
  }
}
