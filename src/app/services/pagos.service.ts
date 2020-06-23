import { Injectable } from '@angular/core';

import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  constructor() { }
	
	// https://www.intersysconsulting.com/blog/angular-components/
	private monederoDebitar = new Subject<string>();
	private emailDestinatario = new Subject<string>();
	private monto = new Subject<number>();
	
	updateMonederoDebitar(nuevoMonedero: string) {
		this.monederoDebitar.next(nuevoMonedero);
	}
	
	getMonederoDebitar(): Observable<string> {
		return this.monederoDebitar.asObservable();
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
	private MONEDERO_REGEXP: string = "";
	private EMAIL_REGEXP: string = "";
	
	/**
	 * Envía los datos al backend para hacer el pago.
	 */
	public realizarPago(monederoDebitar: string, emailDestinatario: string, monto: number) {
		console.log(monederoDebitar + ' ' + emailDestinatario + ' ' + monto);
		return;
	}
	
	/**
   * Valida los campos antes de enviarlos al backend para hacer el pago.
   */
  public validarCampos(monederoDebitar: string, emailDestinatario: string, monto: number) {
    if ((monederoDebitar && monederoDebitar.match(this.CUENTA_REGEXP)) && 
				(emailDestinatario && emailDestinatario.match(this.EMAIL_REGEXP)) &&
				(monto && typeof monto === "number")) {
      this.realizarPago(monederoDebitar, emailDestinatario, monto);
			this.updateMonederoDebitar("");
			this.updateEmailDestinatario("");
			this.updateMonto(0);
    }
  }
	
}
