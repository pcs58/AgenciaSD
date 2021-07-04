import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { HotelesComponent } from './hoteles/hoteles.component';
import { VuelosComponent } from './vuelos/vuelos.component';
import { InicioComponent } from './inicio/inicio.component';
import { EntrarComponent } from './entrar/entrar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PedidoComponent } from './pedido/pedido.component';
import { AuthGuard } from './services/auth.guard';
import { TokenService } from './services/token.service';



@NgModule({
  declarations: [
    AppComponent,
    VehiculosComponent,
    HotelesComponent,
    VuelosComponent,
    InicioComponent,
    EntrarComponent,
    RegistrarComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
