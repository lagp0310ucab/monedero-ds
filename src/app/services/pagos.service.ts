import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  constructor(private http: HttpClient) { }
	
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
	 * Obtener un pago específico.
	 */
	public getPago(id: number) {
		return this.http.get('http://localhost:49681/' + id);
	}
	
	/**
	 * Envía los datos al backend para hacer el pago.
	 */
	public realizarPago(monederoDebitar: string, emailDestinatario: string, monto: number) {
		return this.http.post('http://localhost:49681/', {
			'monedero': this.monederoDebitar,
			'emailDestinatario': this.emailDestinatario,
			'monto': this.monto
		});
	}
	
	/**
	 * Modificar un pago específico.
	 */
	public modificarPago(id: number) {
		return this.http.put('http://localhost:49681/' + id, {
			'monedero': this.monederoDebitar,
			'emailDestinatario': this.emailDestinatario,
			'monto': this.monto
		});
	}
	
	/**
	 * Eliminar un pago específico.
	 */
	public eliminarPago(id: number) {
		return this.http.delete('http://localhost:49681/' + id);
	}
	
	/**
   * Valida los campos antes de enviarlos al backend para hacer el pago.
   */
  public validarCampos(monederoDebitar: string, emailDestinatario: string, monto: number) {
    if ((monederoDebitar && monederoDebitar.match(this.MONEDERO_REGEXP)) && 
				(emailDestinatario && emailDestinatario.match(this.EMAIL_REGEXP)) &&
				(monto && typeof monto === "number")) {
      this.realizarPago(monederoDebitar, emailDestinatario, monto);
			this.updateMonederoDebitar("");
			this.updateEmailDestinatario("");
			this.updateMonto(0);
    }
  }
	
}
