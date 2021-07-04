import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private apiUrl = 'https://localhost:3100/api/proveedores/vehiculos/'

  constructor(private http: HttpClient) { }

  obtenerVehiculos(vehiculo: any) {
    return this.http.get<any>(this.apiUrl+vehiculo.ubicacion+'/'
    +vehiculo.fechaEntrada+'/'
    +vehiculo.fechaSalida+'/'
    +vehiculo.plazas)}
  
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
