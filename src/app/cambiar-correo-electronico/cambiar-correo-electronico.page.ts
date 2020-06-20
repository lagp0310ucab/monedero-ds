import { Component, OnInit } from '@angular/core';

import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-cambiar-correo-electronico',
  templateUrl: './cambiar-correo-electronico.page.html',
  styleUrls: ['./cambiar-correo-electronico.page.scss'],
})
export class CambiarCorreoElectronicoPage implements OnInit {

  constructor(private datosService: DatosService) { }

  ngOnInit() {
  }

}
