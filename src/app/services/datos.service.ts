import { Injectable } from '@angular/core';

import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor() { }
	
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
	
	/**
	 * Cambiar nombre de usuario.
	 */
	public cambiarNombreUsuario(nuevoUsuario: string) {
		// TODO: Consumir la API para hacer el cambio.
    console.log('cambio usuario');
	}
	
	/**
	 * Cambiar password.
	 */
	public cambiarPassword(password: string) {
		// TODO: Consumir la API para hacer el cambio.
    console.log('cambio password');
	}
	
	/**
	 * Cambiar correo electrónico.
	 */
	public cambiarEmail(email: string) {
		// TODO: Consumir la API para hacer el cambio.
    console.log('cambio email');
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
	
}
