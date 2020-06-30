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
	
	/**
	 * Recargar con una tarjeta del usuario.
	 */
	public recargarConTarjeta(token: string, idUsuario: string, headers: any) {
		return this.http.post('http://localhost:49681/api/Monedero/RecargaMonederoTarjeta',
		{
			'idUsuarioReceptor': 0,
			'idMedioPaga': 0,
			'monto': 0,
			'idOperacion': 0
		},
		{
			headers: headers
		});
	}
	
	/**
	 * Recargar con una cuenta del usuario.
	 */
	public recargarConCuenta(token: string, idUsuario: string, headers: any) {
		return this.http.post('http://localhost:49681/api/Monedero/RecargaMonederoCuenta',
		{
			'idUsuarioReceptor': 0,
			'idMedioPaga': 0,
			'monto': 0,
			'idOperacion': 0
		},
		{
			headers: headers
		});
	}
	
}
