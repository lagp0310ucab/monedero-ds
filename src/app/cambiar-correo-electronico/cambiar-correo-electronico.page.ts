import { Component, OnInit } from '@angular/core';

import { LoginService } from '../services/login.service';
import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-cambiar-correo-electronico',
  templateUrl: './cambiar-correo-electronico.page.html',
  styleUrls: ['./cambiar-correo-electronico.page.scss'],
})
export class CambiarCorreoElectronicoPage implements OnInit {
	
	/** 
	 * Respuesta del backend para cualquier operación.
	 */
	private respuesta: any;

  constructor(private datosService: DatosService, private loginService: LoginService) { }

  ngOnInit() {
  }
	
	// TODO: Falta traer del frontend el nuevo email y pasarlo a cambiarEmail().
	/**
	 * Retorna la respuesta un cambio de los datos del usuario.
	 */
	public async obtenerRespuestaEmailModificado() {
		return await this.datosService.cambiarEmail('').subscribe((data: any) => {
			this.respuesta = data
		});
	}

}
