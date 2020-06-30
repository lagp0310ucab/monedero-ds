import { Component, OnInit } from '@angular/core';

import { LoginService } from '../services/login.service';
import { OperacionesService } from '../services/operaciones.service';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.page.html',
  styleUrls: ['./operaciones.page.scss'],
})
export class OperacionesPage implements OnInit {
	
	/** 
	 * Operaciones del Usuario. Puede ser una lista o una única operación.
	 */
	private operacionesUsuario: any;
	
	/** 
	 * Respuesta del backend para cualquier operación de Operaciones.
	 */
	private respuesta: any;

	private operaciones: Array<any>;
	private subscription;
	
  constructor(private operacionesService: OperacionesService, private loginService: LoginService) {
		this.subscription = this.operacionesService.getLista().subscribe(lista => this.operaciones = lista);
	}

  ngOnInit() {
		this.obtenerOperaciones(this.loginService.getToken(), this.loginService.getIdUsuario());
  }
	
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
	
	/**
	 * Recibe operaciones del usuario con los datos del Observable declarado en operaciones.service.
	 */
	public async obtenerOperaciones(token: string, idUsuario: string) {
		await this.operacionesService.obtenerOperacionesMonedero(token, idUsuario, this.loginService.getAuthHeader()).subscribe((data: any) => {
			this.operacionesUsuario = data
		});
		
		// TODO: Modificar para obtener los datos correctamente del JSON.
		/*await this.operacionesService.obtenerOperacionesCuenta(token, idUsuario).subscribe((data: any) => {
			this.operacionesUsuario.push(data)
		});
		
		// TODO: Modificar para obtener los datos correctamente del JSON.
		await this.operacionesService.obtenerOperacionesMonedero(token, idUsuario).subscribe((data: any) => {
			this.operacionesUsuario.push(data)
		});*/
	}
	
	// TODO: Falta traer del frontend el id de la operación y pasarlo a obtenerOperacion().
	/**
	 * Recibe una operación con los datos del Observable declarado en operaciones.service.
	 */
	public async obtenerOperacion() {
		return await this.operacionesService.obtenerOperacion(1).subscribe((data: any) => {
			this.operacionesUsuario = data
		});
	}
	
	// TODO: Falta traer del frontend el id de la operación y pasarlo a modificarPago().
	/**
	 * Retorna la respuesta una operación modificada en operaciones.service.
	 */
	public async obtenerRespuestaOperacionModificada() {
		return await this.operacionesService.modificarOperacion(1).subscribe((data: any) => {
			this.respuesta = data
		});
	}
	
	// TODO: Falta traer del frontend el id del pago y pasarlo a eliminarPago().
	/**
	 * Retorna la respuesta una operación eliminada en operaciones.service.
	 */
	public async obtenerRespuestaOperacionEliminada() {
		return await this.operacionesService.eliminarOperacion(1).subscribe((data: any) => {
			this.respuesta = data
		});
	}

}
