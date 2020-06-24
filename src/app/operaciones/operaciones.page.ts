import { Component, OnInit } from '@angular/core';

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
	
  constructor(private operacionesService: OperacionesService) {
		this.subscription = this.operacionesService.getLista().subscribe(lista => this.operaciones = lista);
	}

  ngOnInit() {
		this.operacionesService.updateLista([
			{
				id: "11",
				monto: "62156849",
				fecha: "07/01/21"
			},
			{
				id: "12",
				monto: "62156849",
				fecha: "07/01/21"
			 
			},
			{
				id: "21",
				monto: "62156849",
				fecha: "07/01/21"
			},
			{
				id: "22",
				monto: "62156849",
				fecha: "07/01/21"
			 
			},
			{
				id: "31",
				monto: "62156849",
				fecha: "07/01/21"
			},
			{
				id: "32",
				monto: "62156849",
				fecha: "07/01/21"
			 
			},
			{
				id: "33",
				monto: "62156849",
				fecha: "07/01/21"
			
			},
			{
				id: "34",
				monto: "62156849",
				fecha: "07/01/21"
			 
			},
			{
				id: "41",
				monto: "62156849",
				fecha: "07/01/21"
			},
			{
				id: "42",
				monto: "62156849",
				fecha: "07/01/21"
			 
			}
		]);
  }
	
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
	
	/**
	 * Recibe operaciones del usuario con los datos del Observable declarado en operaciones.service.
	 */
	public async obtenerOperaciones() {
		return await this.operacionesService.obtenerOperaciones().subscribe((data: any) => {
			this.operacionesUsuario = data
		});
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
