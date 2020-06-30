import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SaldoService {

  constructor(private http: HttpClient) { }
	
	/**
	 * Obtener el saldo del usuario.
	 */
	public getSaldo(token: string, idUsuario: string, headers: any) {
		return this.http.get('http://localhost:49681/api/Monedero/Consultar?idUsuario=' + idUsuario, 
		{
			headers: headers
		});
	}
	
	/**
	 * Obtener las tarjetas del usuario.
	 */
	public obtenerTarjetas(token: string, idUsuario: string, headers: any) {
		return this.http.get('http://localhost:49681/api/Dashboard/Tarjetas?idUsuario=' + idUsuario,
		{
			headers: headers
		});
	}
	
	/**
	 * Obtener las cuentas del usuario.
	 */
	public obtenerCuentas(token: string, idUsuario: string, headers: any) {
		return this.http.get('http://localhost:49681/api/Dashboard/Cuentas?idUsuario=' + idUsuario,
		{
			headers: headers
		});
	}
	
}
