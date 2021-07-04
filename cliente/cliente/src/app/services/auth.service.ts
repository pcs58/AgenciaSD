import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://localhost:3100/api/'

  constructor(private http: HttpClient) { }

  entrar(usuario: any) {
    return this.http.post<any>(this.apiUrl+'entrar', usuario)
  }
  
  registrar(usuario: any) {
    return this.http.post<any>(this.apiUrl+'registrar', usuario)
  }

  logueado() {
    return (localStorage.getItem('token'));
  }

  getToken() {
    return localStorage.getItem('token');
  }
  


}
