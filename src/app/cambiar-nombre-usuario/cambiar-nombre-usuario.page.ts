import { Component, OnInit } from '@angular/core';

import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-cambiar-nombre-usuario',
  templateUrl: './cambiar-nombre-usuario.page.html',
  styleUrls: ['./cambiar-nombre-usuario.page.scss'],
})
export class CambiarNombreUsuarioPage implements OnInit {

  /** 
	 * Respuesta del backend para cualquier operación.
	 */
	private respuesta: any;

  constructor(private datosService: DatosService) { }

  ngOnInit() {
  }
	
	// TODO: Falta traer del frontend el nuevo usuario y pasarlo a cambiarNombreUsuario().
	/**
	 * Retorna la respuesta un cambio de los datos del usuario.
	 */
	public async obtenerRespuestaNombreDeUsuarioModificado() {
		return await this.datosService.cambiarNombreUsuario('').subscribe((data: any) => {
			this.respuesta = data
		});
	}
	
}
