import { Component, OnInit } from '@angular/core';

import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-recargar-cuenta-bancaria',
  templateUrl: './recargar-cuenta-bancaria.page.html',
  styleUrls: ['./recargar-cuenta-bancaria.page.scss'],
})
export class RecargarCuentaBancariaPage implements OnInit {

  lista:Array<any>=[
    {
      banco: "Venezuela",
      No: "62156849"
    },
    {
      banco: "Banesco",
      No: "92356249"
     
    },
    {
      banco: "Provincial",
      No: "92356249"
    
    },
    {
      banco: "Venezolano de Credito",
      No: "92356249"
     
    },

    {
      banco: "Mercantil",
      No: "2233241"
    
    },
    {
      banco: "Venezuela",
      No: "62156849"
   
    },
    {
      banco: "Banesco",
      No: "92356249"
   
    },
    {
      banco: "Provincial",
      No: "92356249"

    },
    {
      banco: "Venezolano de Credito",
      No: "92356249"

    },

    {
      banco: "Mercantil",
      No: "2233241"

    }

  ]

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

}
