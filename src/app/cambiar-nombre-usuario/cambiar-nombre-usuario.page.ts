import { Component, OnInit } from '@angular/core';

import { LoginService } from '../services/login.service';
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

  constructor(private datosService: DatosService, private loginService: LoginService) { }

  ngOnInit() {
  }
	
	// TODO: Falta traer del frontend el nuevo usuario y pasarlo a cambiarNombreUsuario().
	/**
	 * Retorna la respuesta un cambio de los datos del usuario.
	 */
	public async obtenerRespuestaNombreDeUsuarioModificado(nuevoUsuario: string) {
		return await this.datosService.cambiarDatosUsuario(
		this.loginService.getAuthHeader(), 
		{
			'nombre': nuevoUsuario,
			'apellido': this.loginService.getApellidoUsuario(),
			'telefono': this.loginService.getTelefonoUsuario(),
			'direccion': this.loginService.getDireccionUsuario(),
			'razonSocial': this.loginService.getRazonSocialUsuario(),
			'idEstadoCivil': this.loginService.getIdEstadoCivilUsuario(),
			'idUsuario': this.loginService.getIdUsuario()
		}).subscribe((data: any) => {
			console.log(data);
			this.datosService.updateNuevoUsuario('');
		});
	}
	
}
