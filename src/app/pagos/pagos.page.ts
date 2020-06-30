import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { LoginService } from '../services/login.service';
import { PagosService } from '../services/pagos.service';

import { Subject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.page.html',
  styleUrls: ['./pagos.page.scss'],
})
export class PagosPage implements OnInit {
	
	/** 
	 * Pagos del Usuario. Puede ser una lista o un único pago.
	 */
	private pagos: any;
	
	/** 
	 * Respuesta del backend para cualquier operación de Pagos.
	 */
	private respuesta: any;
	
	private monederoDebitar: string;
	private emailDestinatario: string;
	private monto: number;
	private subscriptionMonedero;
	private subscriptionEmailDestinatario;
	private subscriptionMonto;
	
  constructor(private pagosService: PagosService, private loginService: LoginService, private http: HttpClient) {
		this.subscriptionMonedero = this.pagosService.getMonederoDebitar().subscribe(monederoDebitar => this.monederoDebitar = monederoDebitar);
		this.subscriptionEmailDestinatario = this.pagosService.getEmailDestinatario().subscribe(emailDestinatario => this.emailDestinatario = emailDestinatario);
		this.subscriptionMonto = this.pagosService.getMonto().subscribe(monto => this.monto = monto);
	}

  ngOnInit() {
  }
	
	ngOnDestroy() {
		this.subscriptionMonedero.unsubscribe();
		this.subscriptionEmailDestinatario.unsubscribe();
		this.subscriptionMonto.unsubscribe();
	}
	
	// TODO: Falta traer del frontend el id del pago y pasarlo a getPago().
	/**
	 * Recibe un pago con los datos del Observable declarado en pagos.service.
	 */
	public async obtenerPago() {
		return await this.pagosService.getPago(1).subscribe((data: any) => {
			this.pagos = data
		});
	}
	
	// TODO: Falta traer del frontend el monederoDebitar, emailDestinatario y monto.
	/**
	 * Retorna la respuesta de un pago realizado en pagos.service.
	 */
	/*public async obtenerRespuestaPagoRealizado() {
		return await this.pagosService.realizarPago('', '', '', {}).subscribe((data: any) => {
			this.respuesta = data
		});
	}*/
	
	// TODO: Falta traer del frontend el id del pago y pasarlo a modificarPago().
	/**
	 * Retorna la respuesta un pago modificado en pagos.service.
	 */
	public async obtenerRespuestaPagoModificado() {
		return await this.pagosService.modificarPago(1).subscribe((data: any) => {
			this.respuesta = data
		});
	}
	
	// TODO: Falta traer del frontend el id del pago y pasarlo a eliminarPago().
	/**
	 * Retorna la respuesta un pago eliminado en pagos.service.
	 */
	public async obtenerRespuestaPagoEliminado() {
		return await this.pagosService.eliminarPago(1).subscribe((data: any) => {
			this.respuesta = data
		});
	}
	
	// TODO: Completar. Falta adaptar el frontend para que el usuario seleccione los datos requeridos.
	/**
	 * Realiza un pago.
	 */
	public async realizarPago(token: string, idUsuario: string, headers: any, json: any) {
		const response: Observable<any> = await this.http.get(
		'http://66.42.95.58/api/Dashboard/InformacionPersona?Usuario=' + json.usuarioReceptor,
		{
			headers: this.loginService.getAuthHeader()
		});
		
		let that = this;
		const suscription = response.subscribe({
			next(res) {
				json.idUsuarioReceptor = res.result.idUsuario;
		
				that.pagosService.realizarPago(
					that.loginService.getToken(), 
					that.loginService.getIdUsuario(), 
					that.loginService.getAuthHeader(), 
					json
				).subscribe((data: any) => {
					console.log(data);
				});
			},
			async error(msg) {
				console.log('Error: ', msg);
			}
		});
	}

}
