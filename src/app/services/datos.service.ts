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
	 * Cambiar nombre de usuario.
	 */
	public cambiarNombreUsuario(nuevoUsuario: string) {
    return this.http.put('', {});
	}
	
	// TODO: Agregar id usuario como parámetro. Solicitar a otro servicio desde aquí?.
	/**
	 * Cambiar password.
	 */
	public cambiarPassword(password: string) {
    return this.http.put('', {});
	}
	
	// TODO: Agregar id usuario como parámetro. Solicitar a otro servicio desde aquí?.
	/**
	 * Cambiar correo electrónico.
	 */
	public cambiarEmail(email: string) {
		return this.http.put('', {});
	}
	
	/**
   * Valida los campos antes de enviarlos al backend para hacer el pago.
   */
  public validarCampos(nuevoCampo: string, nuevoCampoConfirmacion: string, tipo: string) {
    if ((tipo === "USUARIO") && (nuevoCampo && nuevoCampo.match(this.USUARIO_REGEXP))) {
      this.cambiarNombreUsuario(nuevoCampo);
			this.updateNuevoUsuario("");
    } else if((tipo === "PASSWORD") && (nuevoCampo === nuevoCampoConfirmacion) && (nuevoCampo && nuevoCampo.match(this.PASSWORD_REGEXP))) {
			this.cambiarPassword(nuevoCampo);
			this.updateNuevoPassword("");
		} else if((tipo === "EMAIL") && (nuevoCampo && nuevoCampo.match(this.EMAIL_REGEXP))) {
			this.cambiarEmail(nuevoCampo);
			this.updateNuevoEmail("");
		}
  }
	
	/**
	 * Cerrar la sesión del usuario en la app.
	 */
	public cerrarSesion() {
		return this.http.post('', {});
	}
	
}
