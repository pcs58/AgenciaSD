import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { VehiculoService } from '../services/vehiculo.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {
  
  vehiculos = {
    ubicacion:'',
    fechaEntrada:'',
    fechaSalida:'',
    plazas:'',
  };
  buscado = false;
  resultado = [{
nombre: '',
precio: '',
ubicacion: '',
plazas: '',
fechaEntrada: '',
fechaSalida: '',
  }];


  constructor(
 private vehiculoService: VehiculoService,
    private router: Router
  ) { }


  ngOnInit(): void {
  }

  buscarVehiculos() {
    this.vehiculoService.obtenerVehiculos(this.vehiculos)
    .subscribe(
      res => {
        this.resultado = res;
        this.buscado = true;
        // localStorage.setItem('token', res.token);
        // localStorage.setItem('nombre', this.usuario.email);
        // this.router.navigate(['/inicio']);
      },
      error => console.log(error)
    )
  }




}
