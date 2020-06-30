import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http: HttpClient) { }
	
	// https://www.intersysconsulting.com/blog/angular-components/
	private nuevoUsuario = new Subject<string>();
	private nuevoPassword = new Subject<string>();
	private nuevoEmail = new Subject<string>();
	private nuevoApellido = new Subject<string>();
	private nuevoTelefono = new Subject<string>();
	private nuevaDireccion = new Subject<string>();
	
	updateNuevoApellido(nuevoApellido: string) {
		this.nuevoApellido.next(nuevoApellido);
	}
	
	getNuevoApellido(): Observable<string> {
		return this.nuevoApellido.asObservable();
	}
	
	updateNuevaDireccion(nuevaDireccion: string) {
		this.nuevaDireccion.next(nuevaDireccion);
	}
	
	getNuevaDireccion(): Observable<string> {
		return this.nuevaDireccion.asObservable();
	}
	
	updateNuevoTelefono(nuevoTelefono: string) {
		this.nuevoTelefono.next(nuevoTelefono);
	}
	
	getNuevoTelefono(): Observable<string> {
		return this.nuevoTelefono.asObservable();
	}
	
	updateNuevoUsuario(nuevoUsuario: string) {
		this.nuevoUsuario.next(nuevoUsuario);
	}
	
	getNuevoUsuario(): Observable<string> {
		return this.nuevoUsuario.asObservable();
	}
	
	updateNuevoPassword(nuevoPassword: string) {
		this.nuevoPassword.next(nuevoPassword);
	}
	
	getNuevoPassword(): Observable<string> {
		return this.nuevoPassword.asObservable();
	}
	
	updateNuevoEmail(nuevoEmail: string) {
		this.nuevoEmail.next(nuevoEmail);
	}
	
	getNuevoEmail(): Observable<string> {
		return this.nuevoEmail.asObservable();
	}

  // TODO: Definir Regexp.
  private USUARIO_REGEXP = '';
	private PASSWORD_REGEXP = '';
	private EMAIL_REGEXP = '';
	
	// TODO: Agregar id usuario como parámetro. Solicitar a otro servicio desde aquí?.
	/**
	 * Cambiar datos de usuario.
	 */
	public cambiarDatosUsuario(headers: any, json: any) {
		// Parametro se mandan por el Body
    return this.http.post('http://66.42.95.58/api/Authentication/Modification', json,
		{
			headers: headers
		});
	}
	
	// TODO: Agregar id usuario como parámetro. Solicitar a otro servicio desde aquí?.
	/**
	 * Cambiar password.
	 */
	public cambiarPassword(password: string) {
		// Parametro se mandan por el Body
    return this.http.post('http://66.42.95.58/api/Authentication/Modification', {});
	}
	
	// TODO: Agregar id usuario como parámetro. Solicitar a otro servicio desde aquí?.
	/**
	 * Cambiar correo electrónico.
	 */
	public cambiarEmail(email: string) {
		// Parametro se mandan por el Body
		return this.http.post('http://66.42.95.58/api/Authentication/Modification', {});
	}
	
	/**
   * Valida los campos antes de enviarlos al backend para hacer el pago.
   */
  public validarCampos(nuevoCampo: string, nuevoCampoConfirmacion: string, tipo: string) {
    if ((tipo === "USUARIO") && (nuevoCampo && nuevoCampo.match(this.USUARIO_REGEXP))) {
      //this.cambiarNombreUsuario(nuevoCampo);
			this.updateNuevoUsuario("");
    } else if((tipo === "PASSWORD") && (nuevoCampo === nuevoCampoConfirmacion) && (nuevoCampo && nuevoCampo.match(this.PASSWORD_REGEXP))) {
			//this.cambiarPassword(nuevoCampo);
			this.updateNuevoPassword("");
		} else if((tipo === "EMAIL") && (nuevoCampo && nuevoCampo.match(this.EMAIL_REGEXP))) {
			//this.cambiarEmail(nuevoCampo);
			this.updateNuevoEmail("");
		}
  }
	
	/**
	 * Cerrar la sesión del usuario en la app.
	 */
	public cerrarSesion() {
		return this.http.post('http://66.42.95.58/', {});
	}
	
}
