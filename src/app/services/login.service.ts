import { Injectable } from '@angular/core';

import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
	
	// https://www.intersysconsulting.com/blog/angular-components/
	private email = new Subject<string>();
	
	updateEmail(nuevoEmail: string) {
		this.email.next(nuevoEmail);
	}
	
	getEmail(): Observable<string> {
		return this.email.asObservable();
	}

  // TODO: Definir Regexp.
  private EMAIL_REGEXP = '';
  private PASSWORD_REGEXP = '';

  /**
   * Se encarga de llamar al backend para hacer el login.
   */
  public login(email: string, password: string) {
    // TODO: Consumir la API para hacer el login.
    console.log('login');
  }

  /**
   * Valida los campos antes de enviarlos al backend para hacer el login.
   */
  public validarCampos(email: string, password: string) {
    if (email && email.match(this.EMAIL_REGEXP) && password && password.match(this.PASSWORD_REGEXP)) {
      this.login(email, password);
    }
  }
	
	/**
	 * Recuperar datos de usuario. 
	 */
	public recuperarDatos(email: string) {
		if(!email || !email.match(this.EMAIL_REGEXP)) {
			console.log('Datos Vacíos.');
		}
		
		// Actualizar el valor de email para pasarlo a los componentes que lo requieren.
		this.updateEmail(email);
		
		console.log('Recuperar Datos.');
	}

}
