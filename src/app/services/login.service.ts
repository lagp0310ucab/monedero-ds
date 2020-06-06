import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  // TODO: Definir Regexp.
  private EMAIL_REGEXP = '';
  private PASSWORD_REGEXP = '';

  /**
   * Se encarga de llamar al backend para hacer el login.
   */
  public login(email, password) {
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

}
