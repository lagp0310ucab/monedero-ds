import { Component, OnInit } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BooleanValueAccessor } from '@ionic/angular';

import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-recargartarjeta',
  templateUrl: './recargartarjeta.page.html',
  styleUrls: ['./recargartarjeta.page.scss'],
})
export class RecargartarjetaPage implements OnInit {


  lista:Array<any>=[
    {
      banco: "Venezuela",
      No: "62156849",
      FechaV: "07/23"
    },
    {
      banco: "Banesco",
      No: "92356249",
      FechaV: "06/29"
    },
    {
      banco: "Provincial",
      No: "92356249",
      FechaV: "09/30"
    },
    {
      banco: "Venezolano de Credito",
      No: "92356249",
      FechaV: "01/25"
    },

    {
      banco: "Mercantil",
      No: "2233241",
      FechaV: "03/26"
    },
    {
      banco: "Venezuela",
      No: "62156849",
      FechaV: "07/23"
    },
    {
      banco: "Banesco",
      No: "92356249",
      FechaV: "06/29"
    },
    {
      banco: "Provincial",
      No: "92356249",
      FechaV: "09/30"
    },
    {
      banco: "Venezolano de Credito",
      No: "92356249",
      FechaV: "01/25"
    },

    {
      banco: "Mercantil",
      No: "2233241",
      FechaV: "03/26"
    }

  ]

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }



}
