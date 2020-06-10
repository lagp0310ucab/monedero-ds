import { Injectable } from '@angular/core';

import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  constructor() { }
	
	// https://www.intersysconsulting.com/blog/angular-components/
	private cuentaDebitar = new Subject<string>();
	private emailDestinatario = new Subject<string>();
	private monto = new Subject<number>();
	
	updateCuentaDebitar(nuevaCuenta: string) {
		this.cuentaDebitar.next(nuevaCuenta);
	}
	
	getCuentaDebitar(): Observable<string> {
		return this.cuentaDebitar.asObservable();
	}
	
	updateEmailDestinatario(nuevoEmail: string) {
		this.emailDestinatario.next(nuevoEmail);
	}
	
	getEmailDestinatario(): Observable<string> {
		return this.emailDestinatario.asObservable();
	}
	
	updateMonto(nuevoMonto: number) {
		this.monto.next(nuevoMonto);
	}
	
	getMonto(): Observable<number> {
		return this.monto.asObservable();
	}
	
	// TODO: Definir estos valores.
	private CUENTA_REGEXP: string = "";
	private EMAIL_REGEXP: string = "";
	
	/**
	 * Envía los datos al backend para hacer el pago.
	 */
	public realizarPago(cuentaDebitar: string, emailDestinatario: string, monto: number) {
		console.log(cuentaDebitar + ' ' + emailDestinatario + ' ' + monto);
		return;
	}
	
	/**
   * Valida los campos antes de enviarlos al backend para hacer el pago.
   */
  public validarCampos(cuentaDebitar: string, emailDestinatario: string, monto: number) {
    if ((cuentaDebitar && cuentaDebitar.match(this.CUENTA_REGEXP)) && 
				(emailDestinatario && emailDestinatario.match(this.EMAIL_REGEXP)) &&
				(monto && typeof monto === "number")) {
      this.realizarPago(cuentaDebitar, emailDestinatario, monto);
			this.updateCuentaDebitar("");
			this.updateEmailDestinatario("");
			this.updateMonto(0);
    }
  }
	
}
