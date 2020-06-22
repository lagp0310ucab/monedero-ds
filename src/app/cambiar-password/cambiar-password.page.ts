import { Component, OnInit } from '@angular/core';

import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.page.html',
  styleUrls: ['./cambiar-password.page.scss'],
})
export class CambiarPasswordPage implements OnInit {

  constructor(private datosService: DatosService) { }

  ngOnInit() {
  }

}
