import { Component, OnInit } from '@angular/core';

import { LoginService } from '../services/login.service';
import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-cambiar-telefono-usuario',
  templateUrl: './cambiar-telefono-usuario.page.html',
  styleUrls: ['./cambiar-telefono-usuario.page.scss'],
})
export class CambiarTelefonoUsuarioPage implements OnInit {

  constructor(private datosService: DatosService, private loginService: LoginService) { }

  ngOnInit() {
  }
	
	// TODO: Falta traer del frontend el nuevo usuario y pasarlo a cambiarNombreUsuario().
	/**
	 * Retorna la respuesta un cambio de los datos del usuario.
	 */
	public async obtenerRespuestaTelefonoDeUsuarioModificado(nuevoTelefono: string) {
		return await this.datosService.cambiarDatosUsuario(
		this.loginService.getAuthHeader(), 
		{
			'nombre': this.loginService.getNombreUsuario(),
			'apellido': this.loginService.getApellidoUsuario(),
			'telefono': nuevoTelefono,
			'direccion': this.loginService.getDireccionUsuario(),
			'idUsuario': this.loginService.getIdUsuario()
		}).subscribe((data: any) => {
			console.log(data);
			this.datosService.updateNuevoTelefono('');
		});
	}

}
