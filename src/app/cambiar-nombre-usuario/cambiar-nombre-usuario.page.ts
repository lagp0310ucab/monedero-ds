import { Component, OnInit } from '@angular/core';

import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-cambiar-nombre-usuario',
  templateUrl: './cambiar-nombre-usuario.page.html',
  styleUrls: ['./cambiar-nombre-usuario.page.scss'],
})
export class CambiarNombreUsuarioPage implements OnInit {

  constructor(private datosService: DatosService) { }

  ngOnInit() {
  }

}
