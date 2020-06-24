import { Component, OnInit } from '@angular/core';

import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.page.html',
  styleUrls: ['./cambiar-password.page.scss'],
})
export class CambiarPasswordPage implements OnInit {

  /** 
	 * Respuesta del backend para cualquier operación.
	 */
	private respuesta: any;

  constructor(private datosService: DatosService) { }

  ngOnInit() {
  }
	
	// TODO: Falta traer del frontend el nuevo password y pasarlo a cambiarPassword().
	/**
	 * Retorna la respuesta un cambio de los datos del usuario.
	 */
	public async obtenerRespuestaPasswordModificado() {
		return await this.datosService.cambiarPassword('').subscribe((data: any) => {
			this.respuesta = data
		});
	}

}
