import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.css']
})
export class VuelosComponent implements OnInit {

  constructor() { }
  clicado: boolean = false;
  ngOnInit(): void {
  }

  clica() {
    this.clicado = !(this.clicado);
  }

}
