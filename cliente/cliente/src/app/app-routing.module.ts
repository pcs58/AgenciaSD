import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { HotelesComponent } from './hoteles/hoteles.component';
import { VuelosComponent } from './vuelos/vuelos.component';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { EntrarComponent } from './entrar/entrar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { PedidoComponent } from './pedido/pedido.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'vehiculos', component: VehiculosComponent},
  { path: 'hoteles', component: HotelesComponent},
  { path: 'vuelos', component: VuelosComponent},
  { path: 'pedido', component: PedidoComponent, canActivate: [AuthGuard]},
  { path: 'entrar', component: EntrarComponent},
  { path: 'registrar', component: RegistrarComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
