import { Component, OnInit } from '@angular/core';

import { LoginService } from '../services/login.service';
import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-cambiar-direccion-usuario',
  templateUrl: './cambiar-direccion-usuario.page.html',
  styleUrls: ['./cambiar-direccion-usuario.page.scss'],
})
export class CambiarDireccionUsuarioPage implements OnInit {

  constructor(private datosService: DatosService, private loginService: LoginService) { }

  ngOnInit() {
  }
	
	// TODO: Falta traer del frontend el nuevo usuario y pasarlo a cambiarNombreUsuario().
	/**
	 * Retorna la respuesta un cambio de los datos del usuario.
	 */
	public async obtenerRespuestaDireccionDeUsuarioModificado(nuevaDireccion: string) {
		return await this.datosService.cambiarDatosUsuario(
		this.loginService.getAuthHeader(), 
		{
			'nombre': this.loginService.getNombreUsuario(),
			'apellido': this.loginService.getApellidoUsuario(),
			'telefono': this.loginService.getTelefonoUsuario(),
			'direccion': nuevaDireccion,
			'razonSocial': this.loginService.getRazonSocialUsuario(),
			'idEstadoCivil': this.loginService.getIdEstadoCivilUsuario(),
			'idUsuario': this.loginService.getIdUsuario()
		}).subscribe((data: any) => {
			console.log(data);
			this.datosService.updateNuevaDireccion('');
		});
	}

}
